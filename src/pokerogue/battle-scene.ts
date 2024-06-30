/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Overrides from './overrides';

import {Arena, ArenaBase} from './field/arena';
import {ModifierBar, PersistentModifier} from './modifier/modifier';

import Battle from './battle';
import {BattleStyle} from './enums/battle-style';
import {EaseType} from './enums/ease-type';
import {ExpNotification} from './enums/exp-notification';
import {GameData} from './system/game-data';
import {GameMode} from './game-mode';
import {MoneyFormat} from './enums/money-format';
import {Phase} from './phase';
import {PlayerPokemon} from './field/pokemon';
import {SceneBase} from './scene-base';
import Trainer from './field/trainer';
import {UiTheme} from './enums/ui-theme';

export const startingWave = Overrides.STARTING_WAVE_OVERRIDE || 1;

export let starterColors: StarterColors;
interface StarterColors {
  [key: string]: [string, string];
}

export interface PokeballCounts {
  [pb: string]: number;
}

export interface InfoToggle {
  toggleInfo(force?: boolean): void;
  isActive(): boolean;
}

export default class BattleScene extends SceneBase {
  public rexUI: any;
  public inputController: any;
  public uiInputs: any;

  public sessionPlayTime: number = 0;
  public lastSavePlayTime: number = 0;
  public masterVolume: number = 0.5;
  public bgmVolume: number = 1;
  public seVolume: number = 1;
  public gameSpeed: number = 1;
  public damageNumbersMode: number = 0;
  public reroll: boolean = false;
  public showMovesetFlyout: boolean = true;
  public showArenaFlyout: boolean = true;
  public showTimeOfDayWidget: boolean = true;
  public timeOfDayAnimation: EaseType = EaseType.NONE;
  public showLevelUpStats: boolean = true;
  public enableTutorials: boolean = true;
  public enableMoveInfo: boolean = true;
  public enableRetries: boolean = false;
  /**
   * Determines the condition for a notification should be shown for Candy Upgrades
   * - 0 = 'Off'
   * - 1 = 'Passives Only'
   * - 2 = 'On'
   */
  public candyUpgradeNotification: number = 0;
  /**
   * Determines what type of notification is used for Candy Upgrades
   * - 0 = 'Icon'
   * - 1 = 'Animation'
   */
  public candyUpgradeDisplay: number = 0;
  public moneyFormat: MoneyFormat = MoneyFormat.NORMAL;
  public uiTheme: UiTheme = UiTheme.DEFAULT;
  public windowType: number = 0;
  public experimentalSprites: boolean = false;
  public musicPreference: number = 0;
  public moveAnimations: boolean = true;
  public expGainsSpeed: number = 0;
  public skipSeenDialogues: boolean = false;

  /**
   * Defines the experience gain display mode.
   *
   * @remarks
   * The `expParty` can have several modes:
   * - `0` - Default: The normal experience gain display, nothing changed.
   * - `1` - Level Up Notification: Displays the level up in the small frame instead of a message.
   * - `2` - Skip: No level up frame nor message.
   *
   * Modes `1` and `2` are still compatible with stats display, level up, new move, etc.
   * @default 0 - Uses the default normal experience gain display.
   */
  public expParty: ExpNotification = 0;
  public hpBarSpeed: number = 0;
  public fusionPaletteSwaps: boolean = true;
  public enableTouchControls: boolean = false;
  public enableVibration: boolean = false;
  public showBgmBar: boolean = true;

  /**
   * Determines the selected battle style.
   * - 0 = 'Switch'
   * - 1 = 'Set' - The option to switch the active pokemon at the start of a battle will not display.
   */
  public battleStyle: number = BattleStyle.SWITCH;

  /**
   * Defines whether or not to show type effectiveness hints
   * - true: No hints
   * - false: Show hints for moves
   */
  public typeHints: boolean = false;

  public disableMenu: boolean = false;

  public gameData: GameData = {} as GameData;
  public sessionSlotId: number = 0;

  public phaseQueue: Phase[] = [];
  public conditionalQueue: Array<[() => boolean, Phase]> = [];
  private phaseQueuePrepend: Phase[] = [];
  private phaseQueuePrependSpliceIndex: number = 0;
  private nextCommandPhaseQueue: Phase[] = [];
  private currentPhase: Phase = {} as Phase;
  private standbyPhase: Phase = {} as Phase;
  public field: any;
  public fieldUI: any;
  public charSprite: any;
  public pbTray: any;
  public pbTrayEnemy: any;
  public abilityBar: any;
  public partyExpBar: any;
  public candyBar: any;
  public arenaBg: any;
  public arenaBgTransition: any;
  public arenaPlayer: ArenaBase = {} as ArenaBase;
  public arenaPlayerTransition: ArenaBase = {} as ArenaBase;
  public arenaEnemy: ArenaBase = {} as ArenaBase;
  public arenaNextEnemy: ArenaBase = {} as ArenaBase;
  public arena: Arena = {} as Arena;
  public gameMode: GameMode = {} as GameMode;
  public score: number = 0;
  public lockModifierTiers: boolean = false;
  public trainer: any;
  public lastEnemyTrainer: Trainer = {} as Trainer;
  public currentBattle: Battle = {} as Battle;
  public pokeballCounts: PokeballCounts = {} as PokeballCounts;
  public money: number = 0;
  public pokemonInfoContainer: any;
  private party: PlayerPokemon[] = [];
  /** Combined Biome and Wave count text */
  private biomeWaveText: any;
  private moneyText: any;
  private scoreText: any;
  private luckLabelText: any;
  private luckText: any;
  private modifierBar: ModifierBar = {} as ModifierBar;
  private enemyModifierBar: ModifierBar = {} as ModifierBar;
  public arenaFlyout: any;

  private fieldOverlay: any;
  private shopOverlay: any;
  public modifiers: PersistentModifier[] = [];
  private enemyModifiers: PersistentModifier[] = [];
  public uiContainer: any;
  public ui: any;

  public seed: string = '';
  public waveSeed: string = '';
  public waveCycleOffset: number = 0;
  public offsetGym: boolean = false;

  public damageNumberHandler: any;
  private spriteSparkleHandler: any;

  public fieldSpritePipeline: any;
  public spritePipeline: any;

  private bgm: any;
  private bgmResumeTimer: any;
  private bgmCache: Set<string> = new Set();
  private playTimeTimer: any;

  public rngCounter: number = 0;
  public rngSeedOverride: string = '';
  public rngOffset: number = 0;

  public inputMethod: string = '';
  private infoToggles: InfoToggle[] = [];

  public eventManager: any;

  /**
   * Allows subscribers to listen for events
   *
   * Current Events:
   * - {@linkcode BattleSceneEventType.MOVE_USED} {@linkcode MoveUsedEvent}
   * - {@linkcode BattleSceneEventType.TURN_INIT} {@linkcode TurnInitEvent}
   * - {@linkcode BattleSceneEventType.TURN_END} {@linkcode TurnEndEvent}
   * - {@linkcode BattleSceneEventType.NEW_ARENA} {@linkcode NewArenaEvent}
   */
  public readonly eventTarget: EventTarget = new EventTarget();
}
