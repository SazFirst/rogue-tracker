import {GameModes} from '../game-mode';
import PersistentModifierData from './modifier-data';
import PokemonData from './pokemon-data';

export enum SessionHistoryResult {
  ACTIVE,
  WIN,
  LOSS,
}

export interface SessionHistory {
  seed: string;
  playTime: number;
  result: SessionHistoryResult;
  gameMode: GameModes;
  party: PokemonData[];
  modifiers: PersistentModifierData[];
  money: number;
  waveIndex: number;
  gameVersion: string;
  timestamp: number;
}
