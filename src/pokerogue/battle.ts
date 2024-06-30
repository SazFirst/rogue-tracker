import {EnemyPokemon, QueuedMove} from './field/pokemon';

import BattleScene from './battle-scene';
import {BattleSpec} from './enums/battle-spec';
import {GameMode} from './game-mode';
import {Moves} from './enums/moves';
import {PokeballType} from './data/pokeball';
import {PokemonHeldItemModifier} from './modifier/modifier';
import Trainer from './field/trainer';

export enum BattleType {
  WILD,
  TRAINER,
  CLEAR,
}

export enum BattlerIndex {
  ATTACKER = -1,
  PLAYER,
  PLAYER_2,
  ENEMY,
  ENEMY_2,
}

enum Command {
  FIGHT = 0,
  BALL,
  POKEMON,
  RUN,
}

export interface TurnCommand {
  command: Command;
  cursor?: number;
  move?: QueuedMove;
  targets?: BattlerIndex[];
  skip?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args?: any[];
}

interface TurnCommands {
  [key: number]: TurnCommand;
}

export default class Battle {
  protected gameMode: GameMode = {} as GameMode;
  public waveIndex: number = 0;
  public battleType: BattleType = {} as BattleType;
  public battleSpec: BattleSpec = {} as BattleSpec;
  public trainer: Trainer = {} as Trainer;
  public enemyLevels: number[] = [];
  public enemyParty: EnemyPokemon[] = [];
  public seenEnemyPartyMemberIds: Set<number> = new Set<number>();
  public double: boolean = false;
  public started: boolean = false;
  public enemySwitchCounter: number = 0;
  public turn: number = 0;
  public turnCommands: TurnCommands = {} as TurnCommands;
  public playerParticipantIds: Set<number> = new Set<number>();
  public battleScore: number = 0;
  public postBattleLoot: PokemonHeldItemModifier[] = [];
  public escapeAttempts: number = 0;
  public lastMove: Moves = {} as Moves;
  public battleSeed: string = '';
  private battleSeedState: string = '';
  public moneyScattered: number = 0;
  public lastUsedPokeball: PokeballType = {} as PokeballType;
  public playerFaints: number = 0; // The amount of times pokemon on the players side have fainted
  public enemyFaints: number = 0; // The amount of times pokemon on the enemies side have fainted

  private rngCounter: number = 0;
}

export class FixedBattle extends Battle {}

type GetTrainerFunc = (scene: BattleScene) => Trainer;
type GetEnemyPartyFunc = (scene: BattleScene) => EnemyPokemon[];

export class FixedBattleConfig {
  public battleType: BattleType = {} as BattleType;
  public double: boolean = false;
  public getTrainer: GetTrainerFunc = {} as GetTrainerFunc;
  public getEnemyParty: GetEnemyPartyFunc = {} as GetEnemyPartyFunc;
  public seedOffsetWaveIndex: number = 0;
}

export interface FixedBattleConfigs {
  [key: number]: FixedBattleConfig;
}
