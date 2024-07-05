import * as _ from 'lodash';

import {Weather, WeatherType} from '../pokerogue/data/weather';

import {FrontendPokemon} from '../types/frontend';
import {Stat} from '../pokerogue/data/pokemon-stat';
import {TYPES} from 'pokenode-ts';
import {TypeEffectiveness} from '../types/type_effectiveness';
import UpdateAlliesDivMessage from '../messaging/update_allies_div_message';
import UpdateEnemiesDivMessage from '../messaging/update_enemies_div_message';

function _createPokemonCardDiv(
  cardclass: string,
  cardId: string,
  pokemon: FrontendPokemon
): {
  html: string;
  slider: string;
} {
  const opacityRangeMin = 10;
  const opacityRangeMax = 100;
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  const opacitySlider = _createOpacitySliderDiv(
    cardId,
    _wrapperDivPositions[cardId].opacity,
    opacityRangeMin,
    opacityRangeMax
  );
  const typeEffectivenessHTML = _createTypeEffectivenessWrapper(pokemon.typeEffectiveness);

  const cardHTML = `
  	<div class="pokemon-cards">
	    <div class="pokemon-card">
	      ${opacitySlider.html}
	      <div style="display: flex;">
	        <div class="pokemon-icon">
	            <img src="${pokemonImageUrl}">
	        </div>

					${/* Displays the 3 type effectiveness segemtns (weaknesses, resistances, immunities). */ ''}
	        ${typeEffectivenessHTML}
	        
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
	        
	      ${
          _weather && WeatherType[_weather.weatherType] && _weather.turnsLeft
            ? `<div class="text-base">_weather: ${WeatherType[_weather.weatherType]}, Turns Left: ${_weather.turnsLeft}</div>`
            : ''
        }
	    </div>
    </div>
  `;

  const cardObj: {
    html: string;
    slider: string;
  } = {
    html: cardHTML,
    slider: opacitySlider.id,
  };
  cardObj.html = cardHTML;
  cardObj.slider = opacitySlider.id;

  return cardObj;
}

// Current values: weaknesses, resistances, immunities
function _createTypeEffectivenessWrapper(typeEffectivenesses: TypeEffectiveness): string {
  const weaknessContainer = typeEffectivenesses.immunities
    .map((value, index) => {
      const type = TYPES[value.toUpperCase() as keyof typeof TYPES];

      return `
      ${(index + 1) % 3 === 1 ? '<div>' : ''}
        <div class="type-icon" style="background-image: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${type}.png')"></div>
      ${(index + 1) % 3 === 0 || index + 1 === typeEffectivenesses.weaknesses.length ? '</div>' : ''}
	  `;
    })
    .join('');

  const resistanceContainer = typeEffectivenesses.resistances
    .map((value, index) => {
      const type = TYPES[value.toUpperCase() as keyof typeof TYPES];

      return `
      ${(index + 1) % 3 === 1 ? '<div>' : ''}
        <div class="type-icon" style="background-image: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${type}.png')"></div>
      ${(index + 1) % 3 === 0 || index + 1 === typeEffectivenesses.resistances.length ? '</div>' : ''}
	  `;
    })
    .join('');
  const immunityContainer = typeEffectivenesses.immunities
    .map((value, index) => {
      const type = TYPES[value.toUpperCase() as keyof typeof TYPES];

      return `
      ${(index + 1) % 3 === 1 ? '<div>' : ''}
        <div class="type-icon" style="background-image: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${type}.png')"></div>
      ${(index + 1) % 3 === 0 || index + 1 === typeEffectivenesses.immunities.length ? '</div>' : ''}
	  `;
    })
    .join('');

  return `
    <div class="pokemon-weaknesses tooltip">
      ${weaknessContainer}
      ${_createTooltipDiv('약점')}
    </div>
    <div class="pokemon-resistances tooltip">
      ${resistanceContainer}
      ${_createTooltipDiv('반감')}
    </div>
    <div class="pokemon-immunities tooltip">
      ${immunityContainer}
      ${_createTooltipDiv('면역')}
    </div>
  `;
}

function _createOpacitySliderDiv(
  divId: string,
  initialValue = 100,
  min = 10,
  max = 100
): {
  id: string;
  html: string;
} {
  const result: {
    id: string;
    html: string;
  } = {id: '', html: ''};
  result.id = `${divId}-slider`;

  result.html = `
  		<div class="slider-wrapper">
  			<div class="text-base">Opacity:</div>
  			<input type="range" min="${min}" max="${max}" value="${initialValue}" id="${result.id}">
  		</div>
  	`;
  return result;
}

function _updateWrapperDivPositions(oldDiv: HTMLElement, divId: string): void {
  _wrapperDivPositions[divId].top = parseInt(oldDiv.style.top);
  _wrapperDivPositions[divId].left = parseInt(oldDiv.style.left);
}

function _createWrapperDiv(divId: string): HTMLDivElement {
  const oldDiv = document.getElementById(divId);
  if (oldDiv) {
    _updateWrapperDivPositions(oldDiv, divId);
    oldDiv.remove();
  }
  const newDiv = divId === 'enemies' ? _createEnemyDiv() : _createAlliesDiv();
  _enableDragElement(newDiv);
  newDiv.style.top = _wrapperDivPositions[divId].top.toString();
  newDiv.style.left = _wrapperDivPositions[divId].left.toString();
  newDiv.style.opacity = '' + Number(_wrapperDivPositions[divId].opacity) / 100;
  return newDiv;
}

function _createArrowButtonsDiv(
  divId: string,
  upString: string,
  downString: string
): {
  idUp: string;
  idDown: string;
  html: string;
} {
  const result = {
    idUp: `${divId}-up`,
    idDown: `${divId}-down`,
    html: `
    <div class="arrow-button-wrapper">
			<button class="text-base arrow-button" id="${divId}-up">${upString}</button>
			<button class="text-base arrow-button" id="${divId}-down">${downString}</button>
		</div>`,
  };

  return result;
}

function _createTooltipDiv(tip: string): string {
  const tooltipHtml = `
		<div class="text-base tooltiptext">${tip}</div>
	`;
  return tooltipHtml;
}

function _createEnemyDiv(): HTMLDivElement {
  const divId = 'enemies';
  const div = document.createElement('div');
  div.className = `${divId}-team`;
  div.id = divId;
  _enableDragElement(div);
  document.body.appendChild(div);
  return div;
}

function _createAlliesDiv(): HTMLDivElement {
  const divId = 'allies';
  const div = document.createElement('div');
  div.className = `${divId}-team`;
  div.id = divId;
  _enableDragElement(div);
  document.body.appendChild(div);
  return div;
}

export const _wrapperDivPositions: {
  [key: string]: {
    top: number;
    left: number;
    opacity: number;
  };
} = {
  enemies: {
    top: 0,
    left: 0,
    opacity: 100,
  },
  allies: {
    top: 0,
    left: 0,
    opacity: 100,
  },
};

export let _currentEnemyPage: number = 0;
export let _currentAllyPage: number = 0;
let _enemiesPokemon: FrontendPokemon[] = [];
let _alliesPokemon: FrontendPokemon[] = [];
let _weather: Weather | undefined;

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class HttpUtils {
  static updateFromMessage(message: UpdateAlliesDivMessage | UpdateEnemiesDivMessage): void {
    if (message instanceof UpdateAlliesDivMessage) {
      if (!_.isEqual(_alliesPokemon, message.pokemon)) {
        _alliesPokemon = message.pokemon;
      }
    }
    if (message instanceof UpdateEnemiesDivMessage) {
      if (!_.isEqual(_enemiesPokemon, message.pokemon)) {
        _enemiesPokemon = message.pokemon;
      }
    }
    _weather = message.weather;
    if (_weather && _weather.turnsLeft === 0) {
      _weather.turnsLeft = 0;
    }
  }

  static createTopBannerDiv(): void {
    const div = document.createElement('div');
    div.textContent = 'Rogue Tracer is running!';
    div.classList.add('text-base');
    div.classList.add('running-status');
    document.body.insertBefore(div, document.body.firstChild);
  }

  static createCardsDiv(divId: string): HTMLDivElement {
    const newDiv = _createWrapperDiv(divId);
    let pokemon: FrontendPokemon;
    if (divId === 'enemies') {
      if (_currentEnemyPage >= _enemiesPokemon.length) _currentEnemyPage = 0;
      pokemon = _enemiesPokemon[_currentEnemyPage];
    } else {
      if (_currentAllyPage >= _alliesPokemon.length) _currentAllyPage = 0;
      pokemon = _alliesPokemon[_currentAllyPage];
    }

    const divClass = `${divId}-team`;

    const cardObj = _createPokemonCardDiv(divClass, divId, pokemon);
    const buttonsObj = _createArrowButtonsDiv(divId, '↑', '↓');

    /*
			Assemble the wrapper DIVs inner html.
		*/
    const cardsHTML = `
		  	${buttonsObj.html}
		  	${cardObj.html}
		  `;

    /*
			Insert the parsed nodes into the DOM tree just inside the element, before its first child.
			"newDiv.innerHTML = cardsHTML" also works instead of using ".insertAdjacentHTML()"
	  */
    newDiv.insertAdjacentHTML('afterbegin', cardsHTML);
    document.body.appendChild(newDiv);

    /*
			Add event listeners after all elements are properly added to the DOM and initialized.
		*/
    document.getElementById(cardObj.slider)?.addEventListener<'input'>('input', _changeOpacity);
    document.getElementById(buttonsObj.idUp)?.addEventListener<'click'>('click', _changePage);
    document.getElementById(buttonsObj.idDown)?.addEventListener<'click'>('click', _changePage);

    return newDiv;
  }

  static createWrapperDivs(): void {
    try {
      ['allies', 'enemies'].forEach(divId => {
        const div = document.createElement('div');
        div.className = `${divId}-team`;
        div.id = divId;
        _enableDragElement(div);
        document.body.appendChild(div);
      });
    } catch (e) {
      console.error('Error while creating wrapper divs: ', e);
    }
  }

  static deleteWrapperDivs(): void {
    try {
      ['allies', 'enemies'].forEach(divId => {
        const div = document.getElementById(divId);
        if (div === null) return;
        _updateWrapperDivPositions(div, divId);
        document.body.removeChild(div);
      });
    } catch (e) {
      console.error('Error while deleting wrapper divs: ', e);
    }
  }
}

function _changeOpacity(e: Event): void {
  if (e.target instanceof HTMLInputElement) {
    const divId = e.target.id.split('-')[0];
    const div = document.getElementById(divId);
    if (div) {
      _wrapperDivPositions[divId].opacity = parseInt(e.target.value);
      div.style.opacity = `${parseInt(e.target.value) / 100}`;
    }
  }
}

function _changePage(click: MouseEvent): void {
  if (click.target instanceof HTMLButtonElement) {
    const buttonId = click.target.id;
    const divId = buttonId.split('-')[0];
    const direction = buttonId.split('-')[1];
    if (direction === 'up') {
      if (divId === 'enemies') {
        if (_currentEnemyPage > 0) {
          _currentEnemyPage -= 1;
        } else {
          _currentEnemyPage = _enemiesPokemon.length - 1;
        }
      } else if (divId === 'allies') {
        if (_currentAllyPage > 0) {
          _currentAllyPage -= 1;
        } else {
          _currentAllyPage = _alliesPokemon.length - 1;
        }
      }
    } else if (direction === 'down') {
      if (divId === 'enemies') {
        if (_currentEnemyPage + 1 < _enemiesPokemon.length) {
          _currentEnemyPage += 1;
        } else {
          _currentEnemyPage = 0;
        }
      } else if (divId === 'allies') {
        if (_currentAllyPage + 1 < _alliesPokemon.length) {
          _currentAllyPage += 1;
        } else {
          _currentAllyPage = 0;
        }
      }
    }
    HttpUtils.createCardsDiv(divId);
  }
}

// Enables drag-and-drop functionality on an element
function _enableDragElement(elmnt: HTMLDivElement): void {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  const dragStartElement = elmnt;

  // Attach the mousedown event handler
  dragStartElement.onpointerdown = dragMouseDown;
  function dragMouseDown(event: PointerEvent): void {
    event = event || window.event;

    // if (event.target?.type === 'submit' || event.target.type === 'range') return;
    event.preventDefault();
    pos3 = event.clientX;
    pos4 = event.clientY;
    document.onpointerup = stopDragging;
    document.onpointermove = dragElement;
  }

  // Handles dragging movement
  function dragElement(e: PointerEvent): void {
    e = e || window.event;
    // if (e.target.type === 'submit' || e.target.type === 'range') return;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
  }

  // Stops dragging on mouse release
  function stopDragging(): void {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
