import BattleScene from '../battle-scene';
import {EggSourceType} from '../enums/egg-source-types';
import {EggTier} from '../enums/egg-type';
import {Species} from '../enums/species';
import {VariantTier} from '../enums/variant-tiers';

export const EGG_SEED = 1073741824;

/** Egg options to override egg properties */
export interface IEggOptions {
  /** Id. Used to check if egg type will be manaphy (id % 204 === 0) */
  id?: number;
  /** Timestamp when this egg got created */
  timestamp?: number;
  /** Defines if the egg got pulled from a gacha or not. If true, egg pity and pull statistics will be applyed.
   * Egg will be automaticly added to the game data.
   * NEEDS scene eggOption to work.
   */
  pulled?: boolean;
  /** Defines where the egg comes from. Applies specific modifiers.
   * Will also define the text displayed in the egg list.
   */
  sourceType?: EggSourceType;
  /** Needs to be defined if eggOption pulled is defined or if no species or isShiny is degined since this will be needed to generate them. */
  scene?: BattleScene;
  /** Sets the tier of the egg. Only species of this tier can be hatched from this egg.
   * Tier will be overriden if species eggOption is set.
   */
  tier?: EggTier;
  /** Sets how many waves it will take till this egg hatches. */
  hatchWaves?: number;
  /** Sets the exact species that will hatch from this egg.
   * Needs scene eggOption if not provided.
   */
  species?: Species;
  /** Defines if the hatched pokemon will be a shiny. */
  isShiny?: boolean;
  /** Defines the variant of the pokemon that will hatch from this egg. If no variantTier is given the normal variant rates will apply. */
  variantTier?: VariantTier;
  /** Defines which egg move will be unlocked. 3 = rare egg move. */
  eggMoveIndex?: number;
  /** Defines if the egg will hatch with the hidden ability of this species.
   *  If no hidden ability exist, a random one will get choosen.
   */
  overrideHiddenAbility?: boolean;
}

export class Egg {
  ////
  // #region Privat properties
  ////

  private _id: number = 0;
  private _tier: EggTier = {} as EggTier;
  private _sourceType: EggSourceType | undefined;
  private _hatchWaves: number = 0;
  private _timestamp: number = 0;

  private _species: Species = {} as Species;
  private _isShiny: boolean = false;
  private _variantTier: VariantTier = {} as VariantTier;
  private _eggMoveIndex: number = 0;

  private _overrideHiddenAbility: boolean = false;
}
