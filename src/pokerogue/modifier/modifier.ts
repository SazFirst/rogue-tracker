import {BerryType} from '../enums/berry-type';
import {FormChangeItem} from '../data/pokemon-forms';
import {ModifierType} from './modifier-type';
import {Nature} from '../data/nature';
import {Species} from '../enums/species';
import {Stat} from '../data/pokemon-stat';
import {StatusEffect} from '../data/status-effect';
import {TempBattleStat} from '../data/temp-battle-stat';
import {Type} from '../data/type';
import {VoucherType} from '../system/voucher';

export type ModifierPredicate = (modifier: Modifier) => boolean;

export class ModifierBar {
  private player: boolean = false;
  private modifierCache: PersistentModifier[] = [];
}

export abstract class Modifier {
  public type: ModifierType = {} as ModifierType;
}

export abstract class PersistentModifier extends Modifier {
  public stackCount: number = 0;
  public virtualStackCount: number = 0;
}

export abstract class ConsumableModifier extends Modifier {}

export class AddVoucherModifier extends ConsumableModifier {
  private voucherType: VoucherType = {} as VoucherType;
  private count: number = 0;
}

export abstract class LapsingPersistentModifier extends PersistentModifier {
  protected battlesLeft: number = 0;
}

export class DoubleBattleChanceBoosterModifier extends LapsingPersistentModifier {}

export class TempBattleStatBoosterModifier extends LapsingPersistentModifier {
  private tempBattleStat: TempBattleStat = {} as TempBattleStat;
}

export class MapModifier extends PersistentModifier {}

export class MegaEvolutionAccessModifier extends PersistentModifier {}

export class GigantamaxAccessModifier extends PersistentModifier {}

export class TerastallizeAccessModifier extends PersistentModifier {}

export abstract class PokemonHeldItemModifier extends PersistentModifier {
  public pokemonId: number = 0;
}

export abstract class LapsingPokemonHeldItemModifier extends PokemonHeldItemModifier {
  protected battlesLeft: number = 0;
}

export class TerastallizeModifier extends LapsingPokemonHeldItemModifier {
  public teraType: Type = {} as Type;
}

export class PokemonBaseStatModifier extends PokemonHeldItemModifier {
  protected stat: Stat = {} as Stat;
}

/**
 * Modifier used for held items that apply {@linkcode Stat} boost(s)
 * using a multiplier.
 * @extends PokemonHeldItemModifier
 * @see {@linkcode apply}
 */
export class StatBoosterModifier extends PokemonHeldItemModifier {
  /** The stats that the held item boosts */
  protected stats: Stat[] = [];
  /** The multiplier used to increase the relevant stat(s) */
  protected multiplier: number = 0;
}

/**
 * Modifier used for held items, specifically Eviolite, that apply
 * {@linkcode Stat} boost(s) using a multiplier if the holder can evolve.
 * @extends StatBoosterModifier
 * @see {@linkcode apply}
 */
export class EvolutionStatBoosterModifier extends StatBoosterModifier {}

/**
 * Modifier used for held items that apply {@linkcode Stat} boost(s) using a
 * multiplier if the holder is of a specific {@linkcode Species}.
 * @extends StatBoosterModifier
 * @see {@linkcode apply}
 */
export class SpeciesStatBoosterModifier extends StatBoosterModifier {
  /** The species that the held item's stat boost(s) apply to */
  private species: Species[] = [];
}

/**
 * Applies Specific Type item boosts (e.g., Magnet)
 */
export class AttackTypeBoosterModifier extends PokemonHeldItemModifier {
  private moveType: Type = {} as Type;
  private boostMultiplier: number = 0;
}

export class SurviveDamageModifier extends PokemonHeldItemModifier {}

export class BypassSpeedChanceModifier extends PokemonHeldItemModifier {}

export class FlinchChanceModifier extends PokemonHeldItemModifier {}

export class TurnHealModifier extends PokemonHeldItemModifier {}

/**
 * Modifier used for held items, namely Toxic Orb and Flame Orb, that apply a
 * set {@linkcode StatusEffect} at the end of a turn.
 * @extends PokemonHeldItemModifier
 * @see {@linkcode apply}
 */
export class TurnStatusEffectModifier extends PokemonHeldItemModifier {
  /** The status effect to be applied by the held item */
  private effect: StatusEffect = {} as StatusEffect;
}

export class HitHealModifier extends PokemonHeldItemModifier {}

export class LevelIncrementBoosterModifier extends PersistentModifier {}

export class BerryModifier extends PokemonHeldItemModifier {
  public berryType: BerryType = {} as BerryType;
  public consumed: boolean = false;
}

export class PreserveBerryModifier extends PersistentModifier {}

export class PokemonInstantReviveModifier extends PokemonHeldItemModifier {}

export abstract class ConsumablePokemonModifier extends ConsumableModifier {
  public pokemonId: number = 0;
}

export class PokemonHpRestoreModifier extends ConsumablePokemonModifier {
  private restorePoints: number = 0;
  private restorePercent: number = 0;
  private healStatus: boolean = false;
  public fainted: boolean = false;
}

export class PokemonStatusHealModifier extends ConsumablePokemonModifier {}

export abstract class ConsumablePokemonMoveModifier extends ConsumablePokemonModifier {
  public moveIndex: number = 0;
}

export class PokemonPpRestoreModifier extends ConsumablePokemonMoveModifier {
  private restorePoints: number = 0;
}

export class PokemonAllMovePpRestoreModifier extends ConsumablePokemonModifier {
  private restorePoints: number = 0;
}

export class PokemonPpUpModifier extends ConsumablePokemonMoveModifier {
  private upPoints: number = 0;
}

export class PokemonNatureChangeModifier extends ConsumablePokemonModifier {
  public nature: Nature = {} as Nature;
}

export class PokemonLevelIncrementModifier extends ConsumablePokemonModifier {}

export class TmModifier extends ConsumablePokemonModifier {}

export class RememberMoveModifier extends ConsumablePokemonModifier {
  public levelMoveIndex: number = 0;
}

export class EvolutionItemModifier extends ConsumablePokemonModifier {}

export class FusePokemonModifier extends ConsumablePokemonModifier {
  public fusePokemonId: number = 0;
}

export class MultipleParticipantExpBonusModifier extends PersistentModifier {}

export class HealingBoosterModifier extends PersistentModifier {
  private multiplier: number = 0;
}

export class ExpBoosterModifier extends PersistentModifier {
  private boostMultiplier: number = 0;
}

export class PokemonExpBoosterModifier extends PokemonHeldItemModifier {
  private boostMultiplier: number = 0;
}

export class ExpShareModifier extends PersistentModifier {}

export class ExpBalanceModifier extends PersistentModifier {}

export class PokemonFriendshipBoosterModifier extends PokemonHeldItemModifier {}

export class PokemonNatureWeightModifier extends PokemonHeldItemModifier {}

export class PokemonMoveAccuracyBoosterModifier extends PokemonHeldItemModifier {
  private accuracyAmount: number = 0;
}

export class PokemonMultiHitModifier extends PokemonHeldItemModifier {}

export class PokemonFormChangeItemModifier extends PokemonHeldItemModifier {
  public formChangeItem: FormChangeItem = {} as FormChangeItem;
  public active: boolean = false;
}

export class MoneyRewardModifier extends ConsumableModifier {
  private moneyMultiplier: number = 0;
}

export class MoneyMultiplierModifier extends PersistentModifier {}

export class DamageMoneyRewardModifier extends PokemonHeldItemModifier {}

export class MoneyInterestModifier extends PersistentModifier {}

export class HiddenAbilityRateBoosterModifier extends PersistentModifier {}

export class ShinyRateBoosterModifier extends PersistentModifier {}

export class LockModifierTiersModifier extends PersistentModifier {}

export class SwitchEffectTransferModifier extends PokemonHeldItemModifier {}

export abstract class HeldItemTransferModifier extends PokemonHeldItemModifier {}

export class TurnHeldItemTransferModifier extends HeldItemTransferModifier {}

export class ContactHeldItemTransferChanceModifier extends HeldItemTransferModifier {
  private chance: number = 0;
}

export class IvScannerModifier extends PersistentModifier {}

export class ExtraModifierModifier extends PersistentModifier {}

export abstract class EnemyPersistentModifier extends PersistentModifier {}

abstract class EnemyDamageMultiplierModifier extends EnemyPersistentModifier {
  protected damageMultiplier: number = 0;
}

export class EnemyDamageBoosterModifier extends EnemyDamageMultiplierModifier {}

export class EnemyDamageReducerModifier extends EnemyDamageMultiplierModifier {}

export class EnemyTurnHealModifier extends EnemyPersistentModifier {
  public healPercent: number = 0;
}

export class EnemyAttackStatusEffectChanceModifier extends EnemyPersistentModifier {
  public effect: StatusEffect = {} as StatusEffect;
  public chance: number = 0;
}

export class EnemyStatusEffectHealChanceModifier extends EnemyPersistentModifier {
  public chance: number = 0;
}

export class EnemyEndureChanceModifier extends EnemyPersistentModifier {
  public chance: number = 0;
}

export class EnemyFusionChanceModifier extends EnemyPersistentModifier {
  private chance: number = 0;
}
