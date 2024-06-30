export enum WeatherType {
  NONE,
  SUNNY,
  RAIN,
  SANDSTORM,
  HAIL,
  SNOW,
  FOG,
  HEAVY_RAIN,
  HARSH_SUN,
  STRONG_WINDS,
}

export class Weather {
  public weatherType: WeatherType = {} as WeatherType;
  public turnsLeft: number = 0;
}
