export enum Type {
  UNKNOWN = -1,
  NORMAL = 0,
  FIGHTING,
  FLYING,
  POISON,
  GROUND,
  ROCK,
  BUG,
  GHOST,
  STEEL,
  FIRE,
  WATER,
  GRASS,
  ELECTRIC,
  PSYCHIC,
  ICE,
  DRAGON,
  DARK,
  FAIRY,
  STELLAR,
}

export type TypeDamageMultiplier = 0 | 0.125 | 0.25 | 0.5 | 1 | 2 | 4 | 8;
