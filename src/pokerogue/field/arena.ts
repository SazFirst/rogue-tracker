import {BiomeTierTrainerPools, PokemonPools} from '../data/biomes';

import {ArenaTag} from '../data/arena-tag';
import BattleScene from '../battle-scene';
import {Biome} from '../enums/biome';
import {Terrain} from '../data/terrain';
import {TimeOfDay} from '../enums/time-of-day';
import {Weather} from '../data/weather';

export class Arena {
  public scene: BattleScene;
  public biomeType: Biome;
  public weather: Weather = {} as Weather;
  public terrain: Terrain = {} as Terrain;
  public tags: ArenaTag[];
  public bgm: string;
  public ignoreAbilities: boolean = false;

  private lastTimeOfDay: TimeOfDay = {} as TimeOfDay;

  private pokemonPool: PokemonPools = {} as PokemonPools;
  private trainerPool: BiomeTierTrainerPools = {} as BiomeTierTrainerPools;

  public readonly eventTarget: EventTarget = new EventTarget();

  constructor(scene: BattleScene, biome: Biome, bgm: string) {
    this.scene = scene;
    this.biomeType = biome;
    this.tags = [];
    this.bgm = bgm;
  }
}

export class ArenaBase {
  public player: boolean = false;
  public biome: Biome = {} as Biome;
  public propValue: number = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public base: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public props: any[] = [];
}
