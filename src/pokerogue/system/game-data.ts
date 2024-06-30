import BattleScene, {PokeballCounts} from '../battle-scene';

import ArenaData from './arena-data';
import {BattleType} from '../battle';
import ChallengeData from './challenge-data';
import {Egg} from '../data/egg';
import EggData from './egg-data';
import {GameModes} from '../game-mode';
import {GameStats} from './game-stats';
import {Moves} from '../enums/moves';
import PersistentModifierData from './modifier-data';
import {PlayerGender} from '../enums/player-gender';
import PokemonData from './pokemon-data';
import {Species} from '../enums/species';
import TrainerData from './trainer-data';
import {Variant} from '../data/variant';

export const defaultStarterSpecies: Species[] = [
  Species.BULBASAUR,
  Species.CHARMANDER,
  Species.SQUIRTLE,
  Species.CHIKORITA,
  Species.CYNDAQUIL,
  Species.TOTODILE,
  Species.TREECKO,
  Species.TORCHIC,
  Species.MUDKIP,
  Species.TURTWIG,
  Species.CHIMCHAR,
  Species.PIPLUP,
  Species.SNIVY,
  Species.TEPIG,
  Species.OSHAWOTT,
  Species.CHESPIN,
  Species.FENNEKIN,
  Species.FROAKIE,
  Species.ROWLET,
  Species.LITTEN,
  Species.POPPLIO,
  Species.GROOKEY,
  Species.SCORBUNNY,
  Species.SOBBLE,
  Species.SPRIGATITO,
  Species.FUECOCO,
  Species.QUAXLY,
];

export interface SystemSaveData {
  trainerId: number;
  secretId: number;
  gender: PlayerGender;
  dexData: DexData;
  starterData: StarterData;
  gameStats: GameStats;
  unlocks: Unlocks;
  achvUnlocks: AchvUnlocks;
  voucherUnlocks: VoucherUnlocks;
  voucherCounts: VoucherCounts;
  eggs: EggData[];
  gameVersion: string;
  timestamp: number;
  eggPity: number[];
  unlockPity: number[];
}

export interface SessionSaveData {
  seed: string;
  playTime: number;
  gameMode: GameModes;
  party: PokemonData[];
  enemyParty: PokemonData[];
  modifiers: PersistentModifierData[];
  enemyModifiers: PersistentModifierData[];
  arena: ArenaData;
  pokeballCounts: PokeballCounts;
  money: number;
  score: number;
  waveIndex: number;
  battleType: BattleType;
  trainer: TrainerData;
  gameVersion: string;
  timestamp: number;
  challenges: ChallengeData[];
}

interface Unlocks {
  [key: number]: boolean;
}

interface AchvUnlocks {
  [key: string]: number;
}

interface VoucherUnlocks {
  [key: string]: number;
}

export interface VoucherCounts {
  [type: string]: number;
}

export interface DexData {
  [key: number]: DexEntry;
}

export interface DexEntry {
  seenAttr: bigint;
  caughtAttr: bigint;
  natureAttr: number;
  seenCount: number;
  caughtCount: number;
  hatchedCount: number;
  ivs: number[];
}

export const DexAttr = {
  NON_SHINY: 1,
  SHINY: 2,
  MALE: 4,
  FEMALE: 8,
  DEFAULT_VARIANT: 16,
  VARIANT_2: 32,
  VARIANT_3: 64,
  DEFAULT_FORM: 128,
};

export interface DexAttrProps {
  shiny: boolean;
  female: boolean;
  variant: Variant;
  formIndex: number;
}

export const AbilityAttr = {
  ABILITY_1: 1,
  ABILITY_2: 2,
  ABILITY_HIDDEN: 4,
};

export type StarterMoveset = [Moves] | [Moves, Moves] | [Moves, Moves, Moves] | [Moves, Moves, Moves, Moves];

export interface StarterFormMoveData {
  [key: number]: StarterMoveset;
}

export interface StarterMoveData {
  [key: number]: StarterMoveset | StarterFormMoveData;
}

export interface StarterAttributes {
  nature?: number;
  ability?: number;
  variant?: number;
  form?: number;
  female?: boolean;
}

export interface StarterPreferences {
  [key: number]: StarterAttributes;
}

// This is its own class as StarterPreferences...
// - don't need to be loaded on startup
// - isn't stored with other data
// - don't require to be encrypted
// - shouldn't require calls outside of the starter selection
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class StarterPrefs {}

export interface StarterDataEntry {
  moveset: StarterMoveset | StarterFormMoveData;
  eggMoves: number;
  candyCount: number;
  friendship: number;
  abilityAttr: number;
  passiveAttr: number;
  valueReduction: number;
  classicWinCount: number;
}

export interface StarterData {
  [key: number]: StarterDataEntry;
}

export interface TutorialFlags {
  [key: string]: boolean;
}

export interface SeenDialogues {
  [key: string]: boolean;
}

export class GameData {
  private scene: BattleScene = {} as BattleScene;

  public trainerId: number = 0;
  public secretId: number = 0;

  public gender: PlayerGender = {} as PlayerGender;

  public dexData: DexData = {} as DexData;
  private defaultDexData: DexData = {} as DexData;

  public starterData: StarterData = {} as StarterData;

  public gameStats: GameStats = {} as GameStats;

  public unlocks: Unlocks = {} as Unlocks;

  public achvUnlocks: AchvUnlocks = {} as AchvUnlocks;

  public voucherUnlocks: VoucherUnlocks = {} as VoucherUnlocks;
  public voucherCounts: VoucherCounts = {} as VoucherCounts;
  public eggs: Egg[] = [];
  public eggPity: number[] = [];
  public unlockPity: number[] = [];
}
