import {ArenaTagType} from '../enums/arena-tag-type';
import {MoveCategory} from './move';
import {Moves} from '../enums/moves';
import {Type} from './type';

export enum ArenaTagSide {
  BOTH,
  PLAYER,
  ENEMY,
}

export abstract class ArenaTag {
  public tagType: ArenaTagType;
  public turnCount: number;
  public sourceMove: Moves;
  public sourceId: number;
  public side: ArenaTagSide;

  constructor(
    tagType: ArenaTagType,
    turnCount: number,
    sourceMove: Moves,
    sourceId?: number,
    side: ArenaTagSide = ArenaTagSide.BOTH
  ) {
    this.tagType = tagType;
    this.turnCount = turnCount;
    this.sourceMove = sourceMove;
    if (sourceId) {
      this.sourceId = sourceId;
    } else {
      this.sourceId = 0;
    }
    this.side = side;
  }
}

/**
 * Arena Tag class for {@link https://bulbapedia.bulbagarden.net/wiki/Mist_(move) Mist}.
 * Prevents Pokémon on the opposing side from lowering the stats of the Pokémon in the Mist.
 */
export class MistTag extends ArenaTag {
  constructor(turnCount: number, sourceId: number, side: ArenaTagSide) {
    super(ArenaTagType.MIST, turnCount, Moves.MIST, sourceId, side);
  }
}

/**
 * Reduces the damage of specific move categories in the arena.
 * @extends ArenaTag
 */
export class WeakenMoveScreenTag extends ArenaTag {
  protected weakenedCategories: MoveCategory[];

  /**
   * Creates a new instance of the WeakenMoveScreenTag class.
   *
   * @param tagType - The type of the arena tag.
   * @param turnCount - The number of turns the tag is active.
   * @param sourceMove - The move that created the tag.
   * @param sourceId - The ID of the source of the tag.
   * @param side - The side (player or enemy) the tag affects.
   * @param weakenedCategories - The categories of moves that are weakened by this tag.
   */
  constructor(
    tagType: ArenaTagType,
    turnCount: number,
    sourceMove: Moves,
    sourceId: number,
    side: ArenaTagSide,
    weakenedCategories: MoveCategory[]
  ) {
    super(tagType, turnCount, sourceMove, sourceId, side);

    this.weakenedCategories = weakenedCategories;
  }
}

/**
 * Abstract class to implement weakened moves of a specific type.
 */
export class WeakenMoveTypeTag extends ArenaTag {
  private weakenedType: Type;

  /**
   * Creates a new instance of the WeakenMoveTypeTag class.
   *
   * @param tagType - The type of the arena tag.
   * @param turnCount - The number of turns the tag is active.
   * @param type - The type being weakened from this tag.
   * @param sourceMove - The move that created the tag.
   * @param sourceId - The ID of the source of the tag.
   */
  constructor(tagType: ArenaTagType, turnCount: number, type: Type, sourceMove: Moves, sourceId: number) {
    super(tagType, turnCount, sourceMove, sourceId);

    this.weakenedType = type;
  }
}

/**
 * Abstract class to implement arena traps.
 */
export class ArenaTrapTag extends ArenaTag {
  public layers: number = 0;
  public maxLayers: number = 0;
}

/**
 * Arena Tag class for {@link https://bulbapedia.bulbagarden.net/wiki/Trick_Room_(move) Trick Room}.
 * Reverses the Speed stats for all Pokémon on the field as long as this arena tag is up,
 * also reversing the turn order for all Pokémon on the field as well.
 */
export class TrickRoomTag extends ArenaTag {}

export class GravityTag extends ArenaTag {
  constructor(turnCount: number) {
    super(ArenaTagType.GRAVITY, turnCount, Moves.GRAVITY);
  }
}
