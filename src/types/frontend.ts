import {Ability, pokeApi} from '../libs/pokeapi';
import {TypeEffectiveness, getPokemonTypeEffectiveness} from './type_effectiveness';

import {Nature} from 'pokerogue';
import PokemonData from 'pokerogue/system/pokemon-data';
import {natureDescription} from '../libs/pokerogueutils';
import {Utils} from '../libs/utils';

export interface FrontendPokemon {
  id: number;
  typeEffectiveness: TypeEffectiveness;
  ivs: number[];
  ability: Ability;
  nature: {
    name: string;
    description: string;
  };
}
function sortById(a: FrontendPokemon, b: FrontendPokemon): number {
  if (a.id > b.id) return 1;
  else if (a.id < b.id) return -1;
  else return 0;
}

export async function convertToFrontendPokemons(pokemonData: PokemonData[]): Promise<FrontendPokemon[]> {
  const frontendPokemonArray: FrontendPokemon[] = [];

  for (const pokemon of pokemonData) {
    const pokemonId = Utils.convertPokemonId(pokemon.species);
    const ability = await pokeApi.getAbility(pokemonId, pokemon.abilityIndex);
    const typeEffectiveness = await getPokemonTypeEffectiveness(pokemonId);

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
  }

  return frontendPokemonArray.sort(sortById);
}
