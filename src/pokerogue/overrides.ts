/**
 * Overrides for testing different in game situations
 * if an override name starts with "STARTING", it will apply when a new run begins
 */

import {Abilities} from './enums/abilities';
import {BerryType} from './enums/berry-type';
import {Biome} from './enums/biome';
import {EggTier} from './enums/egg-type';
import {Gender} from './data/gender';
import {Moves} from './enums/moves';
import {Nature} from './data/nature';
import {PokeballCounts} from './battle-scene';
import {PokeballType} from './data/pokeball';
import {Species} from './enums/species';
import {SpeciesStatBoosterItem} from './modifier/modifier-type';
import {Stat} from './data/pokemon-stat';
import {StatusEffect} from './data/status-effect';
import {TempBattleStat} from './data/temp-battle-stat';
import {TimeOfDay} from './enums/time-of-day';
import {Type} from './data/type';
import {Variant} from './data/variant';
import {VariantTier} from './enums/variant-tiers';
import {WeatherType} from './data/weather';

/**
 * OVERALL OVERRIDES
 */

// a specific seed (default: a random string of 24 characters)
export const SEED_OVERRIDE: string = '';
export const WEATHER_OVERRIDE: WeatherType = WeatherType.NONE;
export const DOUBLE_BATTLE_OVERRIDE: boolean = false;
export const SINGLE_BATTLE_OVERRIDE: boolean = false;
export const STARTING_WAVE_OVERRIDE: number = 0;
export const STARTING_BIOME_OVERRIDE: Biome = Biome.TOWN;
export const ARENA_TINT_OVERRIDE: TimeOfDay = TimeOfDay.ALL;
// Multiplies XP gained by this value including 0. Set to null to ignore the override
export const XP_MULTIPLIER_OVERRIDE: number = 0;
// default 1000
export const STARTING_MONEY_OVERRIDE: number = 0;
export const FREE_CANDY_UPGRADE_OVERRIDE: boolean = false;
export const POKEBALL_OVERRIDE: {active: boolean; pokeballs: PokeballCounts} = {
  active: false,
  pokeballs: {
    [PokeballType.POKEBALL]: 5,
    [PokeballType.GREAT_BALL]: 0,
    [PokeballType.ULTRA_BALL]: 0,
    [PokeballType.ROGUE_BALL]: 0,
    [PokeballType.MASTER_BALL]: 0,
  },
};

/**
 * PLAYER OVERRIDES
 */

/**
 * Set the form index of any starter in the party whose `speciesId` is inside this override
 * @see {@link allSpecies} in `src/data/pokemon-species.ts` for form indexes
 * @example
 * ```
 * const STARTER_FORM_OVERRIDES = {
 *   [Species.DARMANITAN]: 1
 * }
 * ```
 */
export const STARTER_FORM_OVERRIDES: Partial<Record<Species, number>> = {};

// default 5 or 20 for Daily
export const STARTING_LEVEL_OVERRIDE: number = 0;
/**
 * SPECIES OVERRIDE
 * will only apply to the first starter in your party or each enemy pokemon
 * default is 0 to not override
 * @example SPECIES_OVERRIDE = Species.Bulbasaur;
 */
export const STARTER_SPECIES_OVERRIDE: Species | number = 0;
export const ABILITY_OVERRIDE: Abilities = Abilities.NONE;
export const PASSIVE_ABILITY_OVERRIDE: Abilities = Abilities.NONE;
export const STATUS_OVERRIDE: StatusEffect = StatusEffect.NONE;
export const GENDER_OVERRIDE: Gender = {} as Gender;
export const MOVESET_OVERRIDE: Array<Moves> = [];
export const SHINY_OVERRIDE: boolean = false;
export const VARIANT_OVERRIDE: Variant = 0;

/**
 * OPPONENT / ENEMY OVERRIDES
 */

export const OPP_SPECIES_OVERRIDE: Species | number = 0;
export const OPP_LEVEL_OVERRIDE: number = 0;
export const OPP_ABILITY_OVERRIDE: Abilities = Abilities.NONE;
export const OPP_PASSIVE_ABILITY_OVERRIDE: Abilities = Abilities.NONE;
export const OPP_STATUS_OVERRIDE: StatusEffect = StatusEffect.NONE;
export const OPP_GENDER_OVERRIDE: Gender = {} as Gender;
export const OPP_MOVESET_OVERRIDE: Array<Moves> = [];
export const OPP_SHINY_OVERRIDE: boolean = false;
export const OPP_VARIANT_OVERRIDE: Variant = 0;
export const OPP_IVS_OVERRIDE: number | number[] = [];

/**
 * EGG OVERRIDES
 */

export const EGG_IMMEDIATE_HATCH_OVERRIDE: boolean = false;
export const EGG_TIER_OVERRIDE: EggTier = EggTier.COMMON;
export const EGG_SHINY_OVERRIDE: boolean = false;
export const EGG_VARIANT_OVERRIDE: VariantTier = VariantTier.COMMON;
export const EGG_FREE_GACHA_PULLS_OVERRIDE: boolean = false;
export const EGG_GACHA_PULL_COUNT_OVERRIDE: number = 0;

/**
 * MODIFIER / ITEM OVERRIDES
 * if count is not provided, it will default to 1
 * @example Modifier Override [{name: "EXP_SHARE", count: 2}]
 * @example Held Item Override [{name: "LUCKY_EGG"}]
 *
 * Some items are generated based on a sub-type (i.e. berries), to override those:
 * @example [{name: "BERRY", count: 5, type: BerryType.SITRUS}]
 * types are listed in interface below
 * - TempBattleStat is for TEMP_STAT_BOOSTER / X Items (Dire hit is separate)
 * - Stat is for BASE_STAT_BOOSTER / Vitamin
 * - Nature is for MINT
 * - Type is for TERA_SHARD or ATTACK_TYPE_BOOSTER (type boosting items i.e Silk Scarf)
 * - BerryType is for BERRY
 * - SpeciesStatBoosterItem is for SPECIES_STAT_BOOSTER
 */
interface ModifierOverride {
  name: string;
  count?: number;
  type?: TempBattleStat | Stat | Nature | Type | BerryType | SpeciesStatBoosterItem;
}
export const STARTING_MODIFIER_OVERRIDE: Array<ModifierOverride> = [];
export const OPP_MODIFIER_OVERRIDE: Array<ModifierOverride> = [];

export const STARTING_HELD_ITEMS_OVERRIDE: Array<ModifierOverride> = [];
export const OPP_HELD_ITEMS_OVERRIDE: Array<ModifierOverride> = [];
export const NEVER_CRIT_OVERRIDE: boolean = false;

/**
 * An array of items by keys as defined in the "modifierTypes" object in the "modifier/modifier-type.ts" file.
 * Items listed will replace the normal rolls.
 * If less items are listed than rolled, only some items will be replaced
 * If more items are listed than rolled, only the first X items will be shown, where X is the number of items rolled.
 */
export const ITEM_REWARD_OVERRIDE: Array<string> = [];
