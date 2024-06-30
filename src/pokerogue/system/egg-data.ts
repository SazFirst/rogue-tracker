import {EggSourceType} from '../enums/egg-source-types';
import {EggTier} from '../enums/egg-type';
import {Species} from '../enums/species';
import {VariantTier} from '../enums/variant-tiers';

export default class EggData {
  public id: number = 0;
  public tier: EggTier = {} as EggTier;
  public sourceType: EggSourceType = {} as EggSourceType;
  public hatchWaves: number = 0;
  public timestamp: number = 0;
  public variantTier: VariantTier = {} as VariantTier;
  public isShiny: boolean = false;
  public species: Species = {} as Species;
  public eggMoveIndex: number = 0;
  public overrideHiddenAbility: boolean = {} as false;
}
