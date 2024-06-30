import {BattlerTagType} from '../enums/battler-tag-type';
import {Moves} from '../enums/moves';

export enum BattlerTagLapseType {
  FAINT,
  MOVE,
  PRE_MOVE,
  AFTER_MOVE,
  MOVE_EFFECT,
  TURN_END,
  CUSTOM,
}

export class BattlerTag {
  public tagType: BattlerTagType;
  public lapseType: BattlerTagLapseType;
  public turnCount: number;
  public sourceMove: Moves;
  public sourceId?: number;

  constructor(
    tagType: BattlerTagType,
    lapseType: BattlerTagLapseType,
    turnCount: number,
    sourceMove: Moves,
    sourceId?: number
  ) {
    this.tagType = tagType;
    this.lapseType = lapseType;
    this.turnCount = turnCount;
    this.sourceMove = sourceMove;
    this.sourceId = sourceId;
  }
}
