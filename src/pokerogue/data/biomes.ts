import {Species} from '../enums/species';
import {TrainerType} from '../enums/trainer-type';

export enum BiomePoolTier {
  COMMON,
  UNCOMMON,
  RARE,
  SUPER_RARE,
  ULTRA_RARE,
  BOSS,
  BOSS_RARE,
  BOSS_SUPER_RARE,
  BOSS_ULTRA_RARE,
}

export interface SpeciesTree {
  [key: number]: Species[];
}

export interface PokemonPools {
  [key: number]: (Species | SpeciesTree)[];
}

export interface BiomeTierPokemonPools {
  [key: number]: PokemonPools;
}

export interface BiomePokemonPools {
  [key: number]: BiomeTierPokemonPools;
}

export interface BiomeTierTrainerPools {
  [key: number]: TrainerType[];
}

export interface BiomeTrainerPools {
  [key: number]: BiomeTierTrainerPools;
}
