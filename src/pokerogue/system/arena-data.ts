import {ArenaTag} from '../data/arena-tag';
import {Biome} from '../enums/biome';
import {Terrain} from '../data/terrain';
import {Weather} from '../data/weather';

export default class ArenaData {
  public biome: Biome = {} as Biome;
  public weather: Weather = {} as Weather;
  public terrain: Terrain = {} as Terrain;
  public tags: ArenaTag[] = [];
}
