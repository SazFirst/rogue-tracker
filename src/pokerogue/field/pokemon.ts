/* eslint-disable @typescript-eslint/no-explicit-any */
import PokemonSpecies, {PokemonSpeciesForm} from '../data/pokemon-species';

import {Abilities} from '../enums/abilities';
import {BattlerIndex} from '../battle';
import {BattlerTag} from '../data/battler-tags';
import {BerryType} from '../enums/berry-type';
import {Biome} from '../enums/biome';
import {Gender} from '../data/gender';
import {Moves} from '../enums/moves';
import {Nature} from '../data/nature';
import {PokeballType} from '../data/pokeball';
import {Status} from '../data/status-effect';
import {TrainerSlot} from '../data/trainer-config';
import {Type} from '../data/type';
import {Variant} from '../data/variant';

export enum FieldPosition {
  CENTER,
  LEFT,
  RIGHT,
}

export default abstract class Pokemon {
  public id: number = 0;
  public name: string = '';
  public species: PokemonSpecies = {} as PokemonSpecies;
  public formIndex: number = 0;
  public abilityIndex: number = 0;
  public passive: boolean = false;
  public shiny: boolean = false;
  public variant: Variant = {} as Variant;
  public pokeball: PokeballType = {} as PokeballType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected battleInfo: any;
  public level: number = 0;
  public exp: number = 0;
  public levelExp: number = 0;
  public gender: Gender = {} as Gender;
  public hp: number = 0;
  public stats: number[] = [];
  public ivs: number[] = [];
  public nature: Nature = {} as Nature;
  public natureOverride: Nature | -1 = -1;
  public moveset: PokemonMove[] = [];
  public status: Status = {} as Status;
  public friendship: number = 0;
  public metLevel: number = 0;
  public metBiome: Biome | -1 = -1;
  public luck: number = 0;
  public pauseEvolutions: boolean = false;
  public pokerus: boolean = false;

  public fusionSpecies: PokemonSpecies = {} as PokemonSpecies;
  public fusionFormIndex: number = 0;
  public fusionAbilityIndex: number = 0;
  public fusionShiny: boolean = false;
  public fusionVariant: Variant = {} as Variant;
  public fusionGender: Gender = {} as Gender;
  public fusionLuck: number = 0;

  private summonDataPrimer: PokemonSummonData = {} as PokemonSummonData;

  public summonData: PokemonSummonData = {} as PokemonSummonData;
  public battleData: PokemonBattleData = {} as PokemonBattleData;
  public battleSummonData: PokemonBattleSummonData = {} as PokemonBattleSummonData;
  public turnData: PokemonTurnData = {} as PokemonTurnData;

  public fieldPosition: FieldPosition = {} as FieldPosition;

  public maskEnabled: boolean = false;
  public maskSprite: any;

  private shinySparkle: any;
}

// export default interface Pokemon {
//   scene: BattleScene;
// }

export class PlayerPokemon extends Pokemon {
  public compatibleTms: Moves[] = [];
}

export class EnemyPokemon extends Pokemon {
  public trainerSlot: TrainerSlot = {} as TrainerSlot;
  public aiType: AiType = {} as AiType;
  public bossSegments: number = 0;
  public bossSegmentIndex: number = 0;
  /** To indicate of the instance was populated with a dataSource -> e.g. loaded & populated from session data */
  public readonly isPopulatedFromDataSource: boolean = false;
}

export interface TurnMove {
  move: Moves;
  targets?: BattlerIndex[];
  result: MoveResult;
  virtual?: boolean;
  turn?: number;
}

export interface QueuedMove {
  move: Moves;
  targets: BattlerIndex[];
  ignorePP?: boolean;
}

export interface AttackMoveResult {
  move: Moves;
  result: DamageResult;
  damage: number;
  critical: boolean;
  sourceId: number;
}

export class PokemonSummonData {
  public battleStats: number[] = [0, 0, 0, 0, 0, 0, 0];
  public moveQueue: QueuedMove[] = [];
  public disabledMove: Moves = Moves.NONE;
  public disabledTurns: number = 0;
  public tags: BattlerTag[] = [];
  public abilitySuppressed: boolean = false;
  public abilitiesApplied: Abilities[] = [];

  public speciesForm: PokemonSpeciesForm = {} as PokemonSpeciesForm;
  public fusionSpeciesForm: PokemonSpeciesForm = {} as PokemonSpeciesForm;
  public ability: Abilities = Abilities.NONE;
  public gender: Gender = {} as Gender;
  public fusionGender: Gender = {} as Gender;
  public stats: number[] = [];
  public moveset: PokemonMove[] = [];
  // If not initialized this value will not be populated from save data.
  public types: Type[] = [];
}

export class PokemonBattleData {
  public hitCount: number = 0;
  public endured: boolean = false;
  public berriesEaten: BerryType[] = [];
  public abilitiesApplied: Abilities[] = [];
  public abilityRevealed: boolean = false;
}

export class PokemonBattleSummonData {
  /** The number of turns the pokemon has passed since entering the battle */
  public turnCount: number = 1;
  /** The list of moves the pokemon has used since entering the battle */
  public moveHistory: TurnMove[] = [];
}

export class PokemonTurnData {
  public flinched: boolean = false;
  public acted: boolean = false;
  public hitCount: number = 0;
  public hitsLeft: number = 0;
  public damageDealt: number = 0;
  public currDamageDealt: number = 0;
  public damageTaken: number = 0;
  public attacksReceived: AttackMoveResult[] = [];
}

export enum AiType {
  RANDOM,
  SMART_RANDOM,
  SMART,
}

export enum MoveResult {
  PENDING,
  SUCCESS,
  FAIL,
  MISS,
  OTHER,
}

export enum HitResult {
  EFFECTIVE = 1,
  SUPER_EFFECTIVE,
  NOT_VERY_EFFECTIVE,
  ONE_HIT_KO,
  NO_EFFECT,
  STATUS,
  HEAL,
  FAIL,
  MISS,
  OTHER,
  IMMUNE,
}

export type DamageResult =
  | HitResult.EFFECTIVE
  | HitResult.SUPER_EFFECTIVE
  | HitResult.NOT_VERY_EFFECTIVE
  | HitResult.ONE_HIT_KO
  | HitResult.OTHER;

/**
 * Wrapper class for the {@linkcode Move} class for Pokemon to interact with.
 * These are the moves assigned to a {@linkcode Pokemon} object.
 * It links to {@linkcode Move} class via the move ID.
 * Compared to {@linkcode Move}, this class also tracks if a move has received.
 * PP Ups, amount of PP used, and things like that.
 * @see {@linkcode isUsable} - checks if move is disabled, out of PP, or not implemented.
 * @see {@linkcode getMove} - returns {@linkcode Move} object by looking it up via ID.
 * @see {@linkcode usePp} - removes a point of PP from the move.
 * @see {@linkcode getMovePp} - returns amount of PP a move currently has.
 * @see {@linkcode getPpRatio} - returns the current PP amount / max PP amount.
 * @see {@linkcode getName} - returns name of {@linkcode Move}.
 **/
export class PokemonMove {
  public moveId: Moves = {} as Moves;
  public ppUsed: number = 0;
  public ppUp: number = 0;
  public virtual: boolean = false;
}
