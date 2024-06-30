import {Ability} from '../libs/pokeapi';
import {TypeEffectiveness} from '../libs/utils';

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

export interface FrontendWeather {
  type: string;
  turnsLeft: number;
}
