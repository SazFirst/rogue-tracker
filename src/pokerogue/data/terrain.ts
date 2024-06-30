export enum TerrainType {
  NONE,
  MISTY,
  ELECTRIC,
  GRASSY,
  PSYCHIC,
}

export class Terrain {
  public terrainType: TerrainType;
  public turnsLeft: number;

  constructor(terrainType: TerrainType, turnsLeft?: number) {
    this.terrainType = terrainType;
    this.turnsLeft = turnsLeft || 0;
  }
}
