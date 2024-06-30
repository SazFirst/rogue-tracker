import {FrontendPokemon, FrontendWeather} from '../types/frontend';

import Message from './message';
import MessageId from './message_id';

export default class UpdateAlliesDivMessage extends Message {
  type: string;
  pokemon: FrontendPokemon[];
  weather: FrontendWeather;
  slotId: number;

  constructor(pokemon: FrontendPokemon[], weather: FrontendWeather, slotId: number) {
    super(MessageId.UPDATE_ALLIES_DIV);
    this.type = MessageId[MessageId.UPDATE_ALLIES_DIV];
    this.pokemon = pokemon;
    this.weather = weather;
    this.slotId = slotId;
  }

  static [Symbol.hasInstance](instance: Message): boolean {
    return instance.id === MessageId.UPDATE_ALLIES_DIV;
  }
}
