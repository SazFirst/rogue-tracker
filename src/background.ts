import {FrontendPokemon, FrontendWeather} from './types/frontend';

import ArenaData from './pokerogue/system/arena-data';
import BGGetSaveDataMessage from './messaging/bg_get_save_data_message';
import Message from './messaging/message';
import {Nature} from './pokerogue/data/nature';
import PokemonData from './pokerogue/system/pokemon-data';
import {SaveAllData} from './types/pokerogue_api/save_all_data';
import {Utils} from './libs/utils';
import {WeatherType} from './pokerogue/data/weather';
import {browserApi} from './libs/browser';
import {natureDescription} from './libs/pokerogueutils';
import {pokeApi} from './libs/pokeapi';

// const browserApi = window.browser ?? window.chrome;
let slotId = -1;

async function updateDiv(pokemon: FrontendPokemon[], weather: FrontendWeather, message: string): Promise<void> {
  await browserApi.tabs.query({active: true, currentWindow: true}).then(tabs => {
    if (tabs.length > 0 && tabs[0].id) {
      browserApi.tabs.sendMessage(tabs[0].id, {type: message, pokemon: pokemon, weather: weather, slotId: slotId});
    }
  });
}

function sortById(a: FrontendPokemon, b: FrontendPokemon): number {
  if (a.id > b.id) return 1;
  else if (a.id < b.id) return -1;
  else return 0;
}

// message can be either "UPDATE_ALLIES_DIV" or "UPDATE_ENEMIES_DIV"
function appendPokemonArrayToDiv(pokemonArray: PokemonData[], arena: ArenaData, message: string): void {
  const frontendPokemonArray: FrontendPokemon[] = [];
  let itemsProcessed = 0;
  pokemonArray.forEach((pokemon, index, array) => {
    const pokemonId = Utils.convertPokemonId(pokemon.species);
    let weather: FrontendWeather = {
      type: 'Unknown',
      turnsLeft: 0,
    };
    if (arena.weather && arena.weather.weatherType) {
      weather = {
        type: WeatherType[arena.weather.weatherType],
        turnsLeft: arena.weather.turnsLeft || 0,
      };
    }
    pokeApi.getAbility(pokemonId, pokemon.abilityIndex).then(ability => {
      Utils.getPokemonTypeEffectiveness(pokemonId).then(typeEffectiveness => {
        console.log('Got pokemon', pokemonId, 'ability', ability, 'type effectiveness', typeEffectiveness);
        frontendPokemonArray.push({
          id: pokemonId,
          typeEffectiveness: typeEffectiveness,
          ivs: pokemon.ivs,
          ability: ability,
          nature: {
            name: Nature[pokemon.nature],
            description: natureDescription[pokemon.nature],
          },
        });
        itemsProcessed++;
        if (itemsProcessed === array.length) updateDiv(frontendPokemonArray.sort(sortById), weather, message);
      });
    });
  });
}

browserApi.runtime.onMessage.addListener((request: Message) => {
  // Happens when loading a savegame or continuing an old run
  console.log('background received message: ', request);
  if (request instanceof BGGetSaveDataMessage) {
    const savedata = request.data;
    slotId = request.slotId;
    console.log('Received save data', savedata);
    appendPokemonArrayToDiv(savedata.enemyParty, savedata.arena, 'UPDATE_ENEMIES_DIV');
    appendPokemonArrayToDiv(savedata.party, savedata.arena, 'UPDATE_ALLIES_DIV');
  }
});

browserApi.webRequest.onBeforeRequest.addListener(
  details => {
    if (details.method === 'POST' && details.url.includes('updateall')) {
      try {
        const saveAllData: SaveAllData = JSON.parse(new TextDecoder().decode(details.requestBody?.raw?.at(0)?.bytes));
        console.log('POST Session data:', saveAllData);
        const sessionData = saveAllData.session;
        appendPokemonArrayToDiv(sessionData.enemyParty, sessionData.arena, 'UPDATE_ENEMIES_DIV');
        appendPokemonArrayToDiv(sessionData.party, sessionData.arena, 'UPDATE_ALLIES_DIV');
      } catch (e) {
        console.error('Error while intercepting web request: ', e);
      }
    }
  },
  {
    urls: ['https://api.pokerogue.net/savedata/update?datatype=1*', 'https://api.pokerogue.net/savedata/updateall'],
  },
  ['requestBody']
);
