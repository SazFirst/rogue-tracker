import {Challenges} from '../enums/challenges';
import {GameData} from '../system/game-data';
import {Species} from '../enums/species';
import {Type} from './type';

/**
 * An enum for all the challenge types. The parameter entries on these describe the
 * parameters to use when calling the applyChallenges function.
 */
export enum ChallengeType {
  /**
   * Challenges which modify what starters you can choose
   * @param args [0] {@link PokemonSpecies} The species to check
   *             [1] {@link Utils.BooleanHolder} Sets to false if illegal, pass in true.
   */
  STARTER_CHOICE,
  /**
   * Challenges which modify how many starter points you have
   * @param args [0] {@link Utils.NumberHolder} The amount of starter points you have
   */
  STARTER_POINTS,
  /**
   * Challenges which modify your starters in some way
   * Not Fully Implemented
   */
  STARTER_MODIFY,
  /**
   * Challenges which limit which pokemon you can have in battle.
   * @param args [0] {@link Pokemon} The pokemon to check
   *             [1] {@link Utils.BooleanHolder} Sets to false if illegal, pass in true.
   */
  POKEMON_IN_BATTLE,
  /**
   * Adds or modifies the fixed battles in a run
   * @param args [0] number The wave to get a battle for
   *             [1] {@link FixedBattleConfig} A new fixed battle. It'll be modified if a battle exists.
   */
  FIXED_BATTLES,
}

/**
 * A challenge object. Exists only to serve as a base class.
 */
export abstract class Challenge {
  public id: Challenges; // The id of the challenge

  public value: number; // The "strength" of the challenge, all challenges have a numerical value.
  public maxValue: number; // The maximum strength of the challenge.
  public severity: number; // The current severity of the challenge. Some challenges have multiple severities in addition to strength.
  public maxSeverity: number; // The maximum severity of the challenge.

  public conditions: ChallengeCondition[];
  public challengeTypes: ChallengeType[];

  /**
   * @param {Challenges} id The enum value for the challenge
   */
  constructor(id: Challenges, maxValue: number = 9007199254740991) {
    this.id = id;

    this.value = 0;
    this.maxValue = maxValue;
    this.severity = 0;
    this.maxSeverity = 0;
    this.conditions = [];
    this.challengeTypes = [];
  }
}

type ChallengeCondition = (data: GameData) => boolean;

/**
 * Implements a mono generation challenge.
 */
export class SingleGenerationChallenge extends Challenge {
  constructor() {
    super(Challenges.SINGLE_GENERATION, 9);
  }
}

interface monotypeOverride {
  /** The species to override */
  species: Species;
  /** The type to count as */
  type: Type;
  /** If part of a fusion, should we check the fused species instead of the base species? */
  fusion: boolean;
}

/**
 * Implements a mono type challenge.
 */
export class SingleTypeChallenge extends Challenge {
  private static TYPE_OVERRIDES: monotypeOverride[] = [
    {species: Species.MELOETTA, type: Type.PSYCHIC, fusion: true},
    {species: Species.CASTFORM, type: Type.NORMAL, fusion: false},
  ];
}

/**
 * Implements a fresh start challenge.
 */
export class FreshStartChallenge extends Challenge {
  constructor() {
    super(Challenges.FRESH_START, 1);
  }
}

/**
 * Lowers the amount of starter points available.
 */
export class LowerStarterMaxCostChallenge extends Challenge {
  constructor() {
    super(Challenges.LOWER_MAX_STARTER_COST, 9);
  }
}

export class LowerStarterPointsChallenge extends Challenge {
  constructor() {
    super(Challenges.LOWER_STARTER_POINTS, 9);
  }
}
