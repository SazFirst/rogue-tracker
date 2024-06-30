import {Challenge} from './data/challenge';
import {FixedBattleConfigs} from './battle';

export enum GameModes {
  CLASSIC,
  ENDLESS,
  SPLICED_ENDLESS,
  DAILY,
  CHALLENGE,
}

interface GameModeConfig {
  isClassic?: boolean;
  isEndless?: boolean;
  isDaily?: boolean;
  hasTrainers?: boolean;
  hasNoShop?: boolean;
  hasShortBiomes?: boolean;
  hasRandomBiomes?: boolean;
  hasRandomBosses?: boolean;
  isSplicedOnly?: boolean;
  isChallenge?: boolean;
}

export class GameMode implements GameModeConfig {
  public modeId: GameModes = {} as GameModes;
  public isClassic: boolean = false;
  public isEndless: boolean = false;
  public isDaily: boolean = false;
  public hasTrainers: boolean = false;
  public hasNoShop: boolean = false;
  public hasShortBiomes: boolean = false;
  public hasRandomBiomes: boolean = false;
  public hasRandomBosses: boolean = false;
  public isSplicedOnly: boolean = false;
  public isChallenge: boolean = false;
  public challenges: Challenge[] = [];
  public battleConfig: FixedBattleConfigs = {} as FixedBattleConfigs;
}
