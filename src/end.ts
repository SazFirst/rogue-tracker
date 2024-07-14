import {FrontendPokemon} from './types/frontend';

const sideBar = document.createElement('div');

createSideBar();
asdf();

function createSideBar(): void {
  const appDiv = document.getElementById('app');
  if (!appDiv) {
    return;
  }

  // const observer = new MutationObserver(mutations => {
  //   mutations.forEach(async mutation => {
  //     console.trace('mutation 발생', mutation);
  //     if (!(mutation.type === 'attributes' && mutation.attributeName === 'style')) return;

  //     // if (appDiv.style.width !== '80%') {
  //     //   appDiv.style.width = '80%';
  //     // }
  //   });
  // });

  // observer.observe(appDiv, {attributes: true});
  document.body.style.display = 'flex';

  appDiv.style.width = '100%';
  appDiv.style.height = '100%';
  appDiv.style.overflow = 'hidden';
  sideBar.classList.add('side_bar');
  // div.classList.add('running-status');
  // appDiv.appendChild(div);
  document.body.insertBefore(sideBar, document.body.firstChild);
}

function _createTooltipDiv(tip: string): string {
  const tooltipHtml = `
		<div class="text-base tooltiptext">${tip}</div>
	`;
  return tooltipHtml;
}

function asdf(): void {
  const pokemon: FrontendPokemon = {
    ability: {
      description: '어빌 설명',
      isHidden: false,
      name: '어빌 이름',
    },
    id: 13,
    ivs: [100, 100, 100, 100, 100, 100],
    nature: {name: '네이쳐 이름', description: '네이쳐 설명'},
    typeEffectiveness: {immunities: ['무효'], resistances: ['강점'], weaknesses: ['약점']},
  };
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  // const _weather: Weather = {
  //   turnsLeft: 1,
  //   weatherType: WeatherType.NONE,
  // };

  const cardHTML = `
  <div class="pokemon-cards">
    <div class="pokemon-card">
      <div style="display: flex;">
        <div class="pokemon-icon">
            <img src="${pokemonImageUrl}">
        </div>

        ${/* Displays the 3 type effectiveness segemtns (weaknesses, resistances, immunities). */ ''}
        
        
      </div>

      <div class="text-base">
        <div class="tooltip ${pokemon.ability.isHidden ? 'hidden-ability' : ''}">
          Ability: ${pokemon.ability.name} 
          ${_createTooltipDiv(pokemon.ability.description)}
        </div>
        &nbsp-&nbsp 
        <div class = "tooltip">
          Nature: ${pokemon.nature.name}
          ${_createTooltipDiv(pokemon.nature.description)}
        </div>
      </div>
      <div class="text-base">
        HP: ${pokemon.ivs[Stat['HP']]}, ATK: ${pokemon.ivs[Stat['ATK']]}, DEF: ${pokemon.ivs[Stat['DEF']]}
      </div>
      <div class="text-base">
        SPE: ${pokemon.ivs[Stat['SPD']]}, SPD: ${pokemon.ivs[Stat['SPDEF']]}, SPA: ${pokemon.ivs[Stat['SPATK']]}
      </div>
        
    </div>
  </div>
`;

  sideBar.insertAdjacentHTML('beforeend', cardHTML);
}
