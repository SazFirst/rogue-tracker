import {BerryType} from '../enums/berry-type';
import {EvolutionItem} from '../data/pokemon-evolutions';
import {FormChangeItem} from '../data/pokemon-forms';
import {ModifierTier} from './modifier-tier';
import {Moves} from '../enums/moves';
import {Nature} from '../data/nature';
import {Species} from '../enums/species';
import {Stat} from '../data/pokemon-stat';
import {StatusEffect} from '../data/status-effect';
import {TempBattleStat} from '../data/temp-battle-stat';
import {Type} from '../data/type';

export enum ModifierPoolType {
  PLAYER,
  WILD,
  TRAINER,
  ENEMY_BUFF,
  DAILY_STARTER,
}

export class ModifierType {
  public id: string = '';
  public generatorId: string = '';
  public localeKey: string = '';
  public iconImage: string = '';
  public group: string = '';
  public soundName: string = '';
  public tier: ModifierTier = {} as ModifierTier;
}

export class ModifierTypeGenerator extends ModifierType {}

export interface GeneratedPersistentModifierType {}

export class PokemonModifierType extends ModifierType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public selectFilter: any;
}

export class PokemonHeldItemModifierType extends PokemonModifierType {}

export class PokemonHpRestoreModifierType extends PokemonModifierType {
  protected restorePoints: number = 0;
  protected restorePercent: number = 0;
  protected healStatus: boolean = false;
}

export class PokemonReviveModifierType extends PokemonHpRestoreModifierType {}

export class PokemonStatusHealModifierType extends PokemonModifierType {}

export abstract class PokemonMoveModifierType extends PokemonModifierType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public moveSelectFilter: any;
}

export class PokemonPpRestoreModifierType extends PokemonMoveModifierType {
  protected restorePoints: number = 0;
}

export class PokemonAllMovePpRestoreModifierType extends PokemonModifierType {
  protected restorePoints: number = 0;
}

export class PokemonPpUpModifierType extends PokemonMoveModifierType {
  protected upPoints: number = 0;
}

export class PokemonNatureChangeModifierType extends PokemonModifierType {
  protected nature: Nature = {} as Nature;
}

export class RememberMoveModifierType extends PokemonModifierType {}

export class DoubleBattleChanceBoosterModifierType extends ModifierType {
  public battleCount: number = 0;
}

export class TempBattleStatBoosterModifierType extends ModifierType implements GeneratedPersistentModifierType {
  public tempBattleStat: TempBattleStat = {} as TempBattleStat;
}

export class BerryModifierType extends PokemonHeldItemModifierType implements GeneratedPersistentModifierType {
  private berryType: BerryType = {} as BerryType;
}

export class AttackTypeBoosterModifierType
  extends PokemonHeldItemModifierType
  implements GeneratedPersistentModifierType
{
  public moveType: Type = {} as Type;
  public boostPercent: number = 0;
}

export type SpeciesStatBoosterItem = keyof typeof SpeciesStatBoosterModifierTypeGenerator.items;

/**
 * Modifier type for {@linkcode Modifiers.SpeciesStatBoosterModifier}
 * @extends PokemonHeldItemModifierType
 * @implements GeneratedPersistentModifierType
 */
export class SpeciesStatBoosterModifierType
  extends PokemonHeldItemModifierType
  implements GeneratedPersistentModifierType
{
  private key: SpeciesStatBoosterItem = {} as SpeciesStatBoosterItem;
}

export class PokemonLevelIncrementModifierType extends PokemonModifierType {}

export class AllPokemonLevelIncrementModifierType extends ModifierType {}

export class PokemonBaseStatBoosterModifierType
  extends PokemonHeldItemModifierType
  implements GeneratedPersistentModifierType
{
  private localeName: string = '';
  private stat: Stat = {} as Stat;
}

export class MoneyRewardModifierType extends ModifierType {
  private moneyMultiplier: number = 0;
  private moneyMultiplierDescriptorKey: string = '';
}

export class ExpBoosterModifierType extends ModifierType {
  private boostPercent: number = 0;
}

export class PokemonExpBoosterModifierType extends PokemonHeldItemModifierType {
  private boostPercent: number = 0;
}

export class PokemonFriendshipBoosterModifierType extends PokemonHeldItemModifierType {}

export class PokemonMoveAccuracyBoosterModifierType extends PokemonHeldItemModifierType {
  private amount: number = 0;
}

export class PokemonMultiHitModifierType extends PokemonHeldItemModifierType {}

export class TmModifierType extends PokemonModifierType {
  public moveId: Moves = {} as Moves;
}

export class EvolutionItemModifierType extends PokemonModifierType implements GeneratedPersistentModifierType {
  public evolutionItem: EvolutionItem = {} as EvolutionItem;
}

/**
 * Class that represents form changing items
 */
export class FormChangeItemModifierType extends PokemonModifierType implements GeneratedPersistentModifierType {
  public formChangeItem: FormChangeItem = {} as FormChangeItem;
}

export class FusePokemonModifierType extends PokemonModifierType {}

/**
 * Modifier type generator for {@linkcode SpeciesStatBoosterModifierType}, which
 * encapsulates the logic for weighting the most useful held item from
 * the current list of {@linkcode items}.
 * @extends ModifierTypeGenerator
 */
class SpeciesStatBoosterModifierTypeGenerator extends ModifierTypeGenerator {
  /** Object comprised of the currently available species-based stat boosting held items */
  public static items = {
    LIGHT_BALL: {stats: [Stat.ATK, Stat.SPATK], multiplier: 2, species: [Species.PIKACHU]},
    THICK_CLUB: {stats: [Stat.ATK], multiplier: 2, species: [Species.CUBONE, Species.MAROWAK, Species.ALOLA_MAROWAK]},
    METAL_POWDER: {stats: [Stat.DEF], multiplier: 2, species: [Species.DITTO]},
    QUICK_POWDER: {stats: [Stat.SPD], multiplier: 2, species: [Species.DITTO]},
  };
}

export class TerastallizeModifierType extends PokemonHeldItemModifierType implements GeneratedPersistentModifierType {
  private teraType: Type = {} as Type;
}

export class ContactHeldItemTransferChanceModifierType extends PokemonHeldItemModifierType {
  private chancePercent: number = 0;
}

export class TurnHeldItemTransferModifierType extends PokemonHeldItemModifierType {}

export class EnemyAttackStatusEffectChanceModifierType extends ModifierType {
  private chancePercent: number = 0;
  private effect: StatusEffect = {} as StatusEffect;
}

export class EnemyEndureChanceModifierType extends ModifierType {
  private chancePercent: number = 0;
}

export type ModifierTypeFunc = () => ModifierType;

export class ModifierTypeOption {
  public type: ModifierType = {} as ModifierType;
  public upgradeCount: number = 0;
  public cost: number = 0;
}
