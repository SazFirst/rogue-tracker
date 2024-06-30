export enum StatusEffect {
  NONE,
  POISON,
  TOXIC,
  PARALYSIS,
  SLEEP,
  FREEZE,
  BURN,
  FAINT,
}

export class Status {
  public effect: StatusEffect = {} as StatusEffect;
  public turnCount: number = 0;
  public cureTurn: number = 0;
}
