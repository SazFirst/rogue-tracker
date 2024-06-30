import {PokemonMove, PokemonSummonData} from '../field/pokemon';

import {Biome} from '../enums/biome';
import {Gender} from '../data/gender';
import {Nature} from '../data/nature';
import {PokeballType} from '../data/pokeball';
import {Species} from '../enums/species';
import {Status} from '../data/status-effect';
import {Variant} from '../data/variant';

export default class PokemonData {
  public id: number = 0;
  public player: boolean = false;
  public species: Species = {} as Species;
  public formIndex: number = 0;
  public abilityIndex: number = 0;
  public passive: boolean = false;
  public shiny: boolean = false;
  public variant: Variant = {} as Variant;
  public pokeball: PokeballType = {} as PokeballType;
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

  public fusionSpecies: Species = {} as Species;
  public fusionFormIndex: number = 0;
  public fusionAbilityIndex: number = 0;
  public fusionShiny: boolean = false;
  public fusionVariant: Variant = {} as Variant;
  public fusionGender: Gender = {} as Gender;
  public fusionLuck: number = 0;

  public boss: boolean = false;
  public bossSegments?: number = 0;

  public summonData: PokemonSummonData = {} as PokemonSummonData;
}
