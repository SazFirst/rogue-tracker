declare module 'src/enums/egg-type' {
  export enum EggTier {
    COMMON = 0,
    GREAT = 1,
    ULTRA = 2,
    MASTER = 3,
  }
}
declare module 'src/enums/ui-theme' {
  export enum UiTheme {
    DEFAULT = 0,
    LEGACY = 1,
  }
}
declare module 'src/modifier/modifier-tier' {
  export enum ModifierTier {
    COMMON = 0,
    GREAT = 1,
    ULTRA = 2,
    ROGUE = 3,
    MASTER = 4,
    LUXURY = 5,
  }
}
declare module 'src/ui/text' {
  import {EggTier} from 'src/enums/egg-type';
  import {UiTheme} from 'src/enums/ui-theme';
  import {ModifierTier} from 'src/modifier/modifier-tier';
  export enum TextStyle {
    MESSAGE = 0,
    WINDOW = 1,
    WINDOW_ALT = 2,
    BATTLE_INFO = 3,
    PARTY = 4,
    PARTY_RED = 5,
    SUMMARY = 6,
    SUMMARY_ALT = 7,
    SUMMARY_RED = 8,
    SUMMARY_BLUE = 9,
    SUMMARY_PINK = 10,
    SUMMARY_GOLD = 11,
    SUMMARY_GRAY = 12,
    SUMMARY_GREEN = 13,
    MONEY = 14,
    STATS_LABEL = 15,
    STATS_VALUE = 16,
    SETTINGS_LABEL = 17,
    SETTINGS_SELECTED = 18,
    SETTINGS_LOCKED = 19,
    TOOLTIP_TITLE = 20,
    TOOLTIP_CONTENT = 21,
    MOVE_INFO_CONTENT = 22,
    MOVE_PP_FULL = 23,
    MOVE_PP_HALF_FULL = 24,
    MOVE_PP_NEAR_EMPTY = 25,
    MOVE_PP_EMPTY = 26,
    SMALLER_WINDOW_ALT = 27,
  }
  export function addTextObject(
    scene: any,
    x: number,
    y: number,
    content: string,
    style: TextStyle,
    extraStyleOptions?: any
  ): any;
  export function setTextStyle(obj: any, scene: any, style: TextStyle, extraStyleOptions?: any): void;
  export function addanyObject(
    scene: any,
    x: number,
    y: number,
    content: string,
    style: TextStyle,
    extraStyleOptions?: any
  ): any;
  export function addTextInputObject(
    scene: any,
    x: number,
    y: number,
    width: number,
    height: number,
    style: TextStyle,
    extraStyleOptions?: any
  ): any;
  export function getTextStyleOptions(
    style: TextStyle,
    uiTheme: UiTheme,
    extraStyleOptions?: any
  ): [number, any | any, string, number, number];
  export function getBBCodeFrag(content: string, textStyle: TextStyle, uiTheme?: UiTheme): string;
  export function getTextColor(textStyle: TextStyle, shadow?: boolean, uiTheme?: UiTheme): string;
  export function getModifierTierTextTint(tier: ModifierTier): number;
  export function getEggTierTextTint(tier: EggTier): number;
}
declare module 'src/enums/buttons' {
  export enum Button {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
    SUBMIT = 4,
    ACTION = 5,
    CANCEL = 6,
    MENU = 7,
    STATS = 8,
    CYCLE_SHINY = 9,
    CYCLE_FORM = 10,
    CYCLE_GENDER = 11,
    CYCLE_ABILITY = 12,
    CYCLE_NATURE = 13,
    V = 14,
    SPEED_UP = 15,
    SLOW_DOWN = 16,
  }
}
declare module 'src/ui/ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {TextStyle} from 'src/ui/text';
  import {Mode} from 'src/ui/ui';
  import {Button} from 'src/enums/buttons';
  /**
   * A basic abstract class to act as a holder and processor for UI elements.
   */
  export default abstract class UiHandler {
    protected scene: BattleScene;
    protected mode: number;
    protected cursor: number;
    active: boolean;
    /**
     * @param {BattleScene} scene The same scene as everything else.
     * @param {Mode} mode The mode of the UI element. These should be unique.
     */
    constructor(scene: BattleScene, mode: Mode);
    abstract setup(): void;
    show(_args: any[]): boolean;
    abstract processInput(button: Button): boolean;
    getUi(): any;
    getTextColor(style: TextStyle, shadow?: boolean): string;
    getCursor(): number;
    setCursor(cursor: number): boolean;
    clear(): void;
  }
}
declare module 'src/enums/money-format' {
  export enum MoneyFormat {
    NORMAL = 0,
    ABBREVIATED = 1,
  }
}
declare module 'src/utils' {
  import {MoneyFormat} from 'src/enums/money-format';
  export const MissingTextureKey = '__MISSING';
  export function toReadableString(str: string): string;
  export function randomString(length: number, seeded?: boolean): string;
  export function shiftCharCodes(str: string, shiftCount: number): string;
  export function clampInt(value: number, min: number, max: number): number;
  export function randGauss(stdev: number, mean?: number): number;
  export function randSeedGauss(stdev: number, mean?: number): number;
  export function padInt(value: number, length: number, padWith?: string): string;
  /**
   * Returns a random number between min and min + range
   * @param range The amount of possible numbers
   * @param min The starting number
   */
  export function randInt(range: number, min?: number): number;
  export function randSeedInt(range: number, min?: number): number;
  /**
   * Returns a random number between min and max (non-inclusive)
   * @param min The lowest number
   * @param max The highest number
   */
  export function randIntRange(min: number, max: number): number;
  export function randItem<T>(items: T[]): T;
  export function randSeedItem<T>(items: T[]): T;
  export function randSeedWeightedItem<T>(items: T[]): T;
  export function randSeedEasedWeightedItem<T>(items: T[], easingFunction?: string): T;
  /**
   * Shuffle a list using the seeded rng. Utilises the Fisher-Yates algorithm.
   * @param {Array} items An array of items.
   * @returns {Array} A new shuffled array of items.
   */
  export function randSeedShuffle<T>(items: T[]): T[];
  export function getFrameMs(frameCount: number): number;
  export function getCurrentTime(): number;
  export function getPlayTimeString(totalSeconds: number): string;
  export function binToDec(input: string): number;
  export function decToBin(input: number): string;
  export function getIvsFromId(id: number): number[];
  export function formatLargeNumber(count: number, threshold: number): string;
  export function formatFancyLargeNumber(number: number, rounded?: number): string;
  export function formatMoney(format: MoneyFormat, amount: number): string;
  export function formatStat(stat: number, forHp?: boolean): string;
  export function getEnumKeys(enumType: any): string[];
  export function getEnumValues(enumType: any): number[];
  export function executeIf<T>(condition: boolean, promiseFunc: () => Promise<T>): Promise<T>;
  export const sessionIdKey = 'pokerogue_sessionId';
  export const isLocal: boolean;
  export const localServerUrl: string;
  export const apiUrl: string;
  export let isLocalServerConnected: boolean;
  export function setCookie(cName: string, cValue: string): void;
  export function getCookie(cName: string): string;
  /**
   * When locally running the game, "pings" the local server
   * with a GET request to verify if a server is running,
   * sets isLocalServerConnected based on results
   */
  export function localPing(): void;
  export function apiFetch(path: string, authed?: boolean): Promise<Response>;
  export function apiPost(path: string, data?: any, contentType?: string, authed?: boolean): Promise<Response>;
  /** Alias for the constructor of a class */
  export type Constructor<T> = new (...args: unknown[]) => T;
  export class BooleanHolder {
    value: boolean;
    constructor(value: boolean);
  }
  export class NumberHolder {
    value: number;
    constructor(value: number);
  }
  export class IntegerHolder extends NumberHolder {
    constructor(value: number);
  }
  export class FixedInt extends IntegerHolder {
    constructor(value: number);
  }
  export function fixedInt(value: number): number;
  /**
   * Formats a string to title case
   * @param unformattedText Text to be formatted
   * @returns the formatted string
   */
  export function formatText(unformattedText: string): string;
  export function rgbToHsv(r: number, g: number, b: number): number[];
  /**
   * Compare color difference in RGB
   * @param {Array} rgb1 First RGB color in array
   * @param {Array} rgb2 Second RGB color in array
   */
  export function deltaRgb(rgb1: number[], rgb2: number[]): number;
  export function rgbHexToRgba(hex: string): {
    r: number;
    g: number;
    b: number;
    a: number;
  };
  export function rgbaToInt(rgba: number[]): number;
  export function verifyLang(lang?: string): boolean;
  /**
   * Prints the type and name of all game objects in a container for debuggin purposes
   * @param container container with game objects inside it
   */
  export function printContainerList(container: any): void;
  /**
   * Truncate a string to a specified maximum length and add an ellipsis if it exceeds that length.
   *
   * @param str - The string to be truncated.
   * @param maxLength - The maximum length of the truncated string, defaults to 10.
   * @returns The truncated string with an ellipsis if it was longer than maxLength.
   */
  export function truncateString(str: string, maxLength?: number): string | string;
  /**
   * Perform a deep copy of an object.
   *
   * @param values - The object to be deep copied.
   * @returns A new object that is a deep copy of the input.
   */
  export function deepCopy(values: object): object;
  /**
   * Convert a space-separated string into a capitalized and underscored string.
   *
   * @param input - The string to be converted.
   * @returns The converted string with words capitalized and separated by underscores.
   */
  export function reverseValueToKeySetting(input: any): any;
}
declare module 'src/ui/awaitable-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import UiHandler from 'src/ui/ui-handler';
  import {Button} from 'src/enums/buttons';
  export default abstract class AwaitableUiHandler extends UiHandler {
    protected awaitingActionInput: boolean;
    protected onActionInput: Function;
    tutorialActive: boolean;
    constructor(scene: BattleScene, mode: Mode);
    processTutorialInput(button: Button): boolean;
  }
}
declare module 'src/ui/message-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import AwaitableUiHandler from 'src/ui/awaitable-ui-handler';
  import {Mode} from 'src/ui/ui';
  export default abstract class MessageUiHandler extends AwaitableUiHandler {
    protected textTimer: any;
    protected textCallbackTimer: any;
    pendingPrompt: boolean;
    message: any;
    prompt: any;
    constructor(scene: BattleScene, mode: Mode);
    showText(
      text: string,
      delay?: number,
      callback?: Function,
      callbackDelay?: number,
      prompt?: boolean,
      promptDelay?: number
    ): void;
    showDialogue(
      text: string,
      name: string,
      delay?: number,
      callback?: Function,
      callbackDelay?: number,
      prompt?: boolean,
      promptDelay?: number
    ): void;
    private showTextInternal;
    showPrompt(callback: Function, callbackDelay: number): void;
    clearText(): void;
    clear(): void;
  }
}
declare module 'src/data/pokemon-stat' {
  export enum Stat {
    HP = 0,
    ATK = 1,
    DEF = 2,
    SPATK = 3,
    SPDEF = 4,
    SPD = 5,
  }
  export function getStatName(stat: Stat, shorten?: boolean): string;
}
declare module 'src/scene-base' {
  export const legacyCompatibleImages: string[];
  export class SceneBase {
    /**
     * Since everything is scaled up by 6 by default using the game.canvas is annoying
     * Until such point that we use the canvas normally, this will be easier than
     * having to divide every width and heigh by 6 to position and scale the ui
     * @readonly
     * @defaultValue
     * width: `320`
     * height: `180`
     */
    readonly scaledCanvas: {
      width: number;
      height: number;
    };
    constructor(config?: string | any);
    getCachedUrl(url: string): string;
    loadImage(key: string, folder: string, filename?: string): void;
    loadSpritesheet(key: string, folder: string, size: number, filename?: string): void;
    loadAtlas(key: string, folder: string, filenameRoot?: string): void;
    loadSe(key: string, folder?: string, filenames?: string | string[]): void;
    loadBgm(key: string, filename?: string): void;
  }
}
declare module 'src/ui/ui-theme' {
  import BattleScene from 'src/battle-scene';
  export enum WindowVariant {
    NORMAL = 0,
    THIN = 1,
    XTHIN = 2,
  }
  export function getWindowVariantSuffix(windowVariant: WindowVariant): string;
  export function addWindow(
    scene: BattleScene,
    x: number,
    y: number,
    width: number,
    height: number,
    mergeMaskTop?: boolean,
    mergeMaskLeft?: boolean,
    maskOffsetX?: number,
    maskOffsetY?: number,
    windowVariant?: WindowVariant
  ): any;
  export function updateWindowType(scene: BattleScene, windowTypeIndex: number): void;
  export function addUiThemeOverrides(scene: BattleScene): void;
}
declare module 'src/ui/battle-message-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import MessageUiHandler from 'src/ui/message-ui-handler';
  import {Button} from 'src/enums/buttons';
  export default class BattleMessageUiHandler extends MessageUiHandler {
    private levelUpStatsContainer;
    private levelUpStatsIncrContent;
    private levelUpStatsValuesContent;
    private nameBox;
    private nameText;
    bg: any;
    commandWindow: any;
    movesWindowContainer: any;
    nameBoxContainer: any;
    constructor(scene: BattleScene);
    setup(): void;
    show(args: any[]): boolean;
    processInput(button: Button): boolean;
    clear(): void;
    showText(
      text: string,
      delay?: number,
      callback?: Function,
      callbackDelay?: number,
      prompt?: boolean,
      promptDelay?: number
    ): void;
    showDialogue(
      text: string,
      name: string,
      delay?: number,
      callback?: Function,
      callbackDelay?: number,
      prompt?: boolean,
      promptDelay?: number
    ): void;
    promptLevelUpStats(partyMemberIndex: number, prevStats: number[], showTotals: boolean): Promise<void>;
    promptIvs(pokemonId: number, ivs: number[], shownIvsCount: number): Promise<void>;
    getIvDescriptor(value: number, typeIv: number, pokemonId: number): string;
    showNameText(name: string): void;
    hideNameText(): void;
  }
}
declare module 'src/data/variant' {
  export type Variant = 0 | 1 | 2;
  export type VariantSet = [Variant, Variant, Variant];
  export const variantData: any;
  export const variantColorCache: {};
  export function getVariantTint(variant: Variant): number;
  export function getVariantIcon(variant: Variant): number;
}
declare module 'src/data/exp' {
  export enum GrowthRate {
    ERRATIC = 0,
    FAST = 1,
    MEDIUM_FAST = 2,
    MEDIUM_SLOW = 3,
    SLOW = 4,
    FLUCTUATING = 5,
  }
  export function getLevelTotalExp(level: number, growthRate: GrowthRate): number;
  export function getLevelRelExp(level: number, growthRate: GrowthRate): number;
  export function getGrowthRateColor(
    growthRate: GrowthRate,
    shadow?: boolean
  ):
    | '#78c850'
    | '#f85888'
    | '#906060'
    | '#f8d030'
    | '#b8a038'
    | '#588040'
    | '#6890f0'
    | '#807870'
    | '#f08030'
    | '#c03028'
    | '#a040a0'
    | '#483850';
}
declare module 'src/data/gender' {
  export enum Gender {
    GENDERLESS = -1,
    MALE = 0,
    FEMALE = 1,
  }
  export function getGenderSymbol(gender: Gender): '' | '♂' | '♀';
  export function getGenderColor(
    gender: Gender,
    shadow?: boolean
  ): '#f89890' | '#984038' | '#40c8f8' | '#006090' | '#ffffff';
}
declare module 'src/data/status-effect' {
  export enum StatusEffect {
    NONE = 0,
    POISON = 1,
    TOXIC = 2,
    PARALYSIS = 3,
    SLEEP = 4,
    FREEZE = 5,
    BURN = 6,
    FAINT = 7,
  }
  export class Status {
    effect: StatusEffect;
    turnCount: number;
    cureTurn: number;
    constructor(effect: StatusEffect, turnCount?: number, cureTurn?: number);
    incrementTurn(): void;
    isPostTurn(): boolean;
  }
  export function getStatusEffectObtainText(
    statusEffect: StatusEffect,
    pokemonNameWithAffix: string,
    sourceText?: string
  ): string;
  export function getStatusEffectActivationText(statusEffect: StatusEffect, pokemonNameWithAffix: string): string;
  export function getStatusEffectOverlapText(statusEffect: StatusEffect, pokemonNameWithAffix: string): string;
  export function getStatusEffectHealText(statusEffect: StatusEffect, pokemonNameWithAffix: string): string;
  export function getStatusEffectDescriptor(statusEffect: StatusEffect): string;
  export function getStatusEffectCatchRateMultiplier(statusEffect: StatusEffect): number;
  /**
   * Returns a random non-volatile StatusEffect
   */
  export function generateRandomStatusEffect(): StatusEffect;
  /**
   * Returns a random non-volatile StatusEffect between the two provided
   * @param statusEffectA The first StatusEffect
   * @param statusEffectA The second StatusEffect
   */
  export function getRandomStatusEffect(statusEffectA: StatusEffect, statusEffectB: StatusEffect): StatusEffect;
  /**
   * Returns a random non-volatile StatusEffect between the two provided
   * @param statusA The first Status
   * @param statusB The second Status
   */
  export function getRandomStatus(statusA: Status, statusB: Status): Status;
  /**
   * Gets all non volatile status effects
   * @returns A list containing all non volatile status effects
   */
  export function getNonVolatileStatusEffects(): Array<StatusEffect>;
  /**
   * Returns whether a statuss effect is non volatile.
   * Non-volatile status condition is a status that remains after being switched out.
   * @param status The status to check
   */
  export function isNonVolatileStatusEffect(status: StatusEffect): boolean;
}
declare module 'src/data/type' {
  export enum Type {
    UNKNOWN = -1,
    NORMAL = 0,
    FIGHTING = 1,
    FLYING = 2,
    POISON = 3,
    GROUND = 4,
    ROCK = 5,
    BUG = 6,
    GHOST = 7,
    STEEL = 8,
    FIRE = 9,
    WATER = 10,
    GRASS = 11,
    ELECTRIC = 12,
    PSYCHIC = 13,
    ICE = 14,
    DRAGON = 15,
    DARK = 16,
    FAIRY = 17,
    STELLAR = 18,
  }
  export type TypeDamageMultiplier = 0 | 0.125 | 0.25 | 0.5 | 1 | 2 | 4 | 8;
  export function getTypeDamageMultiplier(attackType: number, defType: number): TypeDamageMultiplier;
  /**
   * Retrieve the color corresponding to a specific damage multiplier
   * @returns A color or undefined if the default color should be used
   */
  export function getTypeDamageMultiplierColor(
    multiplier: TypeDamageMultiplier,
    side: 'defense' | 'offense'
  ): string | undefined;
  export function getTypeRgb(type: Type): [number, number, number];
}
declare module 'src/data/battle-stat' {
  export enum BattleStat {
    ATK = 0,
    DEF = 1,
    SPATK = 2,
    SPDEF = 3,
    SPD = 4,
    ACC = 5,
    EVA = 6,
    RAND = 7,
  }
  export function getBattleStatName(stat: BattleStat): any;
  export function getBattleStatLevelChangeDescription(
    pokemonNameWithAffix: string,
    stats: string,
    levels: number,
    up: boolean
  ): any;
}
declare module 'src/data/pokeball' {
  import BattleScene from 'src/battle-scene';
  export enum PokeballType {
    POKEBALL = 0,
    GREAT_BALL = 1,
    ULTRA_BALL = 2,
    ROGUE_BALL = 3,
    MASTER_BALL = 4,
    LUXURY_BALL = 5,
  }
  export const MAX_PER_TYPE_POKEBALLS: number;
  export function getPokeballAtlasKey(type: PokeballType): string;
  export function getPokeballName(type: PokeballType): string;
  export function getPokeballCatchMultiplier(type: PokeballType): number;
  export function getPokeballTintColor(type: PokeballType): number;
  export function doPokeballBounceAnim(
    scene: BattleScene,
    pokeball: any,
    y1: number,
    y2: number,
    baseBounceDuration: number,
    callback: Function
  ): void;
}
declare module 'src/enums/moves' {
  export enum Moves {
    /**{@link https://bulbapedia.bulbagarden.net/wiki/None_(move) | Source} */
    NONE = 0,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pound_(move) | Source} */
    POUND = 1,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Karate_Chop_(move) | Source} */
    KARATE_CHOP = 2,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Double_Slap_(move) | Source} */
    DOUBLE_SLAP = 3,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Comet_Punch_(move) | Source} */
    COMET_PUNCH = 4,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mega_Punch_(move) | Source} */
    MEGA_PUNCH = 5,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pay_Day_(move) | Source} */
    PAY_DAY = 6,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fire_Punch_(move) | Source} */
    FIRE_PUNCH = 7,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Punch_(move) | Source} */
    ICE_PUNCH = 8,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunder_Punch_(move) | Source} */
    THUNDER_PUNCH = 9,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scratch_(move) | Source} */
    SCRATCH = 10,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vise_Grip_(move) | Source} */
    VISE_GRIP = 11,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Guillotine_(move) | Source} */
    GUILLOTINE = 12,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Razor_Wind_(move) | Source} */
    RAZOR_WIND = 13,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swords_Dance_(move) | Source} */
    SWORDS_DANCE = 14,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cut_(move) | Source} */
    CUT = 15,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gust_(move) | Source} */
    GUST = 16,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wing_Attack_(move) | Source} */
    WING_ATTACK = 17,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Whirlwind_(move) | Source} */
    WHIRLWIND = 18,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fly_(move) | Source} */
    FLY = 19,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bind_(move) | Source} */
    BIND = 20,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slam_(move) | Source} */
    SLAM = 21,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vine_Whip_(move) | Source} */
    VINE_WHIP = 22,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stomp_(move) | Source} */
    STOMP = 23,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Double_Kick_(move) | Source} */
    DOUBLE_KICK = 24,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mega_Kick_(move) | Source} */
    MEGA_KICK = 25,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Jump_Kick_(move) | Source} */
    JUMP_KICK = 26,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rolling_Kick_(move) | Source} */
    ROLLING_KICK = 27,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sand_Attack_(move) | Source} */
    SAND_ATTACK = 28,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Headbutt_(move) | Source} */
    HEADBUTT = 29,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Horn_Attack_(move) | Source} */
    HORN_ATTACK = 30,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fury_Attack_(move) | Source} */
    FURY_ATTACK = 31,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Horn_Drill_(move) | Source} */
    HORN_DRILL = 32,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tackle_(move) | Source} */
    TACKLE = 33,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Body_Slam_(move) | Source} */
    BODY_SLAM = 34,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wrap_(move) | Source} */
    WRAP = 35,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Take_Down_(move) | Source} */
    TAKE_DOWN = 36,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thrash_(move) | Source} */
    THRASH = 37,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Double_Edge_(move) | Source} */
    DOUBLE_EDGE = 38,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tail_Whip_(move) | Source} */
    TAIL_WHIP = 39,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Sting_(move) | Source} */
    POISON_STING = 40,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Twineedle_(move) | Source} */
    TWINEEDLE = 41,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pin_Missile_(move) | Source} */
    PIN_MISSILE = 42,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Leer_(move) | Source} */
    LEER = 43,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bite_(move) | Source} */
    BITE = 44,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Growl_(move) | Source} */
    GROWL = 45,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Roar_(move) | Source} */
    ROAR = 46,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sing_(move) | Source} */
    SING = 47,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Supersonic_(move) | Source} */
    SUPERSONIC = 48,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sonic_Boom_(move) | Source} */
    SONIC_BOOM = 49,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Disable_(move) | Source} */
    DISABLE = 50,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Acid_(move) | Source} */
    ACID = 51,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ember_(move) | Source} */
    EMBER = 52,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flamethrower_(move) | Source} */
    FLAMETHROWER = 53,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mist_(move) | Source} */
    MIST = 54,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Gun_(move) | Source} */
    WATER_GUN = 55,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hydro_Pump_(move) | Source} */
    HYDRO_PUMP = 56,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Surf_(move) | Source} */
    SURF = 57,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Beam_(move) | Source} */
    ICE_BEAM = 58,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Blizzard_(move) | Source} */
    BLIZZARD = 59,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psybeam_(move) | Source} */
    PSYBEAM = 60,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bubble_Beam_(move) | Source} */
    BUBBLE_BEAM = 61,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aurora_Beam_(move) | Source} */
    AURORA_BEAM = 62,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hyper_Beam_(move) | Source} */
    HYPER_BEAM = 63,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Peck_(move) | Source} */
    PECK = 64,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drill_Peck_(move) | Source} */
    DRILL_PECK = 65,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Submission_(move) | Source} */
    SUBMISSION = 66,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Low_Kick_(move) | Source} */
    LOW_KICK = 67,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Counter_(move) | Source} */
    COUNTER = 68,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Seismic_Toss_(move) | Source} */
    SEISMIC_TOSS = 69,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Strength_(move) | Source} */
    STRENGTH = 70,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Absorb_(move) | Source} */
    ABSORB = 71,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mega_Drain_(move) | Source} */
    MEGA_DRAIN = 72,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Leech_Seed_(move) | Source} */
    LEECH_SEED = 73,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Growth_(move) | Source} */
    GROWTH = 74,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Razor_Leaf_(move) | Source} */
    RAZOR_LEAF = 75,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Solar_Beam_(move) | Source} */
    SOLAR_BEAM = 76,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Powder_(move) | Source} */
    POISON_POWDER = 77,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stun_Spore_(move) | Source} */
    STUN_SPORE = 78,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sleep_Powder_(move) | Source} */
    SLEEP_POWDER = 79,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Petal_Dance_(move) | Source} */
    PETAL_DANCE = 80,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/String_Shot_(move) | Source} */
    STRING_SHOT = 81,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Rage_(move) | Source} */
    DRAGON_RAGE = 82,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fire_Spin_(move) | Source} */
    FIRE_SPIN = 83,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunder_Shock_(move) | Source} */
    THUNDER_SHOCK = 84,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunderbolt_(move) | Source} */
    THUNDERBOLT = 85,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunder_Wave_(move) | Source} */
    THUNDER_WAVE = 86,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunder_(move) | Source} */
    THUNDER = 87,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Throw_(move) | Source} */
    ROCK_THROW = 88,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Earthquake_(move) | Source} */
    EARTHQUAKE = 89,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fissure_(move) | Source} */
    FISSURE = 90,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dig_(move) | Source} */
    DIG = 91,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Toxic_(move) | Source} */
    TOXIC = 92,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Confusion_(move) | Source} */
    CONFUSION = 93,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psychic_(move) | Source} */
    PSYCHIC = 94,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hypnosis_(move) | Source} */
    HYPNOSIS = 95,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Meditate_(move) | Source} */
    MEDITATE = 96,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Agility_(move) | Source} */
    AGILITY = 97,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Quick_Attack_(move) | Source} */
    QUICK_ATTACK = 98,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rage_(move) | Source} */
    RAGE = 99,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Teleport_(move) | Source} */
    TELEPORT = 100,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Night_Shade_(move) | Source} */
    NIGHT_SHADE = 101,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mimic_(move) | Source} */
    MIMIC = 102,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Screech_(move) | Source} */
    SCREECH = 103,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Double_Team_(move) | Source} */
    DOUBLE_TEAM = 104,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Recover_(move) | Source} */
    RECOVER = 105,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Harden_(move) | Source} */
    HARDEN = 106,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Minimize_(move) | Source} */
    MINIMIZE = 107,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Smokescreen_(move) | Source} */
    SMOKESCREEN = 108,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Confuse_Ray_(move) | Source} */
    CONFUSE_RAY = 109,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Withdraw_(move) | Source} */
    WITHDRAW = 110,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Defense_Curl_(move) | Source} */
    DEFENSE_CURL = 111,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Barrier_(move) | Source} */
    BARRIER = 112,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Light_Screen_(move) | Source} */
    LIGHT_SCREEN = 113,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Haze_(move) | Source} */
    HAZE = 114,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Reflect_(move) | Source} */
    REFLECT = 115,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Focus_Energy_(move) | Source} */
    FOCUS_ENERGY = 116,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bide_(move) | Source} */
    BIDE = 117,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Metronome_(move) | Source} */
    METRONOME = 118,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mirror_Move_(move) | Source} */
    MIRROR_MOVE = 119,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Self_Destruct_(move) | Source} */
    SELF_DESTRUCT = 120,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Egg_Bomb_(move) | Source} */
    EGG_BOMB = 121,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lick_(move) | Source} */
    LICK = 122,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Smog_(move) | Source} */
    SMOG = 123,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sludge_(move) | Source} */
    SLUDGE = 124,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bone_Club_(move) | Source} */
    BONE_CLUB = 125,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fire_Blast_(move) | Source} */
    FIRE_BLAST = 126,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Waterfall_(move) | Source} */
    WATERFALL = 127,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Clamp_(move) | Source} */
    CLAMP = 128,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swift_(move) | Source} */
    SWIFT = 129,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Skull_Bash_(move) | Source} */
    SKULL_BASH = 130,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spike_Cannon_(move) | Source} */
    SPIKE_CANNON = 131,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Constrict_(move) | Source} */
    CONSTRICT = 132,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Amnesia_(move) | Source} */
    AMNESIA = 133,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kinesis_(move) | Source} */
    KINESIS = 134,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Soft_Boiled_(move) | Source} */
    SOFT_BOILED = 135,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/High_Jump_Kick_(move) | Source} */
    HIGH_JUMP_KICK = 136,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Glare_(move) | Source} */
    GLARE = 137,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dream_Eater_(move) | Source} */
    DREAM_EATER = 138,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Gas_(move) | Source} */
    POISON_GAS = 139,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Barrage_(move) | Source} */
    BARRAGE = 140,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Leech_Life_(move) | Source} */
    LEECH_LIFE = 141,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lovely_Kiss_(move) | Source} */
    LOVELY_KISS = 142,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sky_Attack_(move) | Source} */
    SKY_ATTACK = 143,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Transform_(move) | Source} */
    TRANSFORM = 144,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bubble_(move) | Source} */
    BUBBLE = 145,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dizzy_Punch_(move) | Source} */
    DIZZY_PUNCH = 146,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spore_(move) | Source} */
    SPORE = 147,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flash_(move) | Source} */
    FLASH = 148,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psywave_(move) | Source} */
    PSYWAVE = 149,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Splash_(move) | Source} */
    SPLASH = 150,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Acid_Armor_(move) | Source} */
    ACID_ARMOR = 151,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Crabhammer_(move) | Source} */
    CRABHAMMER = 152,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Explosion_(move) | Source} */
    EXPLOSION = 153,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fury_Swipes_(move) | Source} */
    FURY_SWIPES = 154,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bonemerang_(move) | Source} */
    BONEMERANG = 155,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rest_(move) | Source} */
    REST = 156,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Slide_(move) | Source} */
    ROCK_SLIDE = 157,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hyper_Fang_(move) | Source} */
    HYPER_FANG = 158,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sharpen_(move) | Source} */
    SHARPEN = 159,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Conversion_(move) | Source} */
    CONVERSION = 160,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tri_Attack_(move) | Source} */
    TRI_ATTACK = 161,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Super_Fang_(move) | Source} */
    SUPER_FANG = 162,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slash_(move) | Source} */
    SLASH = 163,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Substitute_(move) | Source} */
    SUBSTITUTE = 164,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Struggle_(move) | Source} */
    STRUGGLE = 165,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sketch_(move) | Source} */
    SKETCH = 166,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Triple_Kick_(move) | Source} */
    TRIPLE_KICK = 167,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thief_(move) | Source} */
    THIEF = 168,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spider_Web_(move) | Source} */
    SPIDER_WEB = 169,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mind_Reader_(move) | Source} */
    MIND_READER = 170,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nightmare_(move) | Source} */
    NIGHTMARE = 171,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flame_Wheel_(move) | Source} */
    FLAME_WHEEL = 172,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Snore_(move) | Source} */
    SNORE = 173,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Curse_(move) | Source} */
    CURSE = 174,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flail_(move) | Source} */
    FLAIL = 175,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Conversion_2_(move) | Source} */
    CONVERSION_2 = 176,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aeroblast_(move) | Source} */
    AEROBLAST = 177,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cotton_Spore_(move) | Source} */
    COTTON_SPORE = 178,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Reversal_(move) | Source} */
    REVERSAL = 179,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spite_(move) | Source} */
    SPITE = 180,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Powder_Snow_(move) | Source} */
    POWDER_SNOW = 181,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Protect_(move) | Source} */
    PROTECT = 182,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mach_Punch_(move) | Source} */
    MACH_PUNCH = 183,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scary_Face_(move) | Source} */
    SCARY_FACE = 184,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Feint_Attack_(move) | Source} */
    FEINT_ATTACK = 185,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sweet_Kiss_(move) | Source} */
    SWEET_KISS = 186,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Belly_Drum_(move) | Source} */
    BELLY_DRUM = 187,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sludge_Bomb_(move) | Source} */
    SLUDGE_BOMB = 188,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mud_Slap_(move) | Source} */
    MUD_SLAP = 189,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Octazooka_(move) | Source} */
    OCTAZOOKA = 190,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spikes_(move) | Source} */
    SPIKES = 191,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zap_Cannon_(move) | Source} */
    ZAP_CANNON = 192,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Foresight_(move) | Source} */
    FORESIGHT = 193,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Destiny_Bond_(move) | Source} */
    DESTINY_BOND = 194,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Perish_Song_(move) | Source} */
    PERISH_SONG = 195,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Icy_Wind_(move) | Source} */
    ICY_WIND = 196,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Detect_(move) | Source} */
    DETECT = 197,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bone_Rush_(move) | Source} */
    BONE_RUSH = 198,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lock_On_(move) | Source} */
    LOCK_ON = 199,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Outrage_(move) | Source} */
    OUTRAGE = 200,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sandstorm_(move) | Source} */
    SANDSTORM = 201,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Giga_Drain_(move) | Source} */
    GIGA_DRAIN = 202,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Endure_(move) | Source} */
    ENDURE = 203,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Charm_(move) | Source} */
    CHARM = 204,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rollout_(move) | Source} */
    ROLLOUT = 205,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/False_Swipe_(move) | Source} */
    FALSE_SWIPE = 206,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swagger_(move) | Source} */
    SWAGGER = 207,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Milk_Drink_(move) | Source} */
    MILK_DRINK = 208,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spark_(move) | Source} */
    SPARK = 209,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fury_Cutter_(move) | Source} */
    FURY_CUTTER = 210,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Steel_Wing_(move) | Source} */
    STEEL_WING = 211,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mean_Look_(move) | Source} */
    MEAN_LOOK = 212,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Attract_(move) | Source} */
    ATTRACT = 213,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sleep_Talk_(move) | Source} */
    SLEEP_TALK = 214,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heal_Bell_(move) | Source} */
    HEAL_BELL = 215,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Return_(move) | Source} */
    RETURN = 216,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Present_(move) | Source} */
    PRESENT = 217,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Frustration_(move) | Source} */
    FRUSTRATION = 218,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Safeguard_(move) | Source} */
    SAFEGUARD = 219,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pain_Split_(move) | Source} */
    PAIN_SPLIT = 220,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sacred_Fire_(move) | Source} */
    SACRED_FIRE = 221,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magnitude_(move) | Source} */
    MAGNITUDE = 222,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dynamic_Punch_(move) | Source} */
    DYNAMIC_PUNCH = 223,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Megahorn_(move) | Source} */
    MEGAHORN = 224,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Breath_(move) | Source} */
    DRAGON_BREATH = 225,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Baton_Pass_(move) | Source} */
    BATON_PASS = 226,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Encore_(move) | Source} */
    ENCORE = 227,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pursuit_(move) | Source} */
    PURSUIT = 228,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rapid_Spin_(move) | Source} */
    RAPID_SPIN = 229,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sweet_Scent_(move) | Source} */
    SWEET_SCENT = 230,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Tail_(move) | Source} */
    IRON_TAIL = 231,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Metal_Claw_(move) | Source} */
    METAL_CLAW = 232,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vital_Throw_(move) | Source} */
    VITAL_THROW = 233,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Morning_Sun_(move) | Source} */
    MORNING_SUN = 234,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Synthesis_(move) | Source} */
    SYNTHESIS = 235,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Moonlight_(move) | Source} */
    MOONLIGHT = 236,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hidden_Power_(move) | Source} */
    HIDDEN_POWER = 237,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cross_Chop_(move) | Source} */
    CROSS_CHOP = 238,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Twister_(move) | Source} */
    TWISTER = 239,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rain_Dance_(move) | Source} */
    RAIN_DANCE = 240,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sunny_Day_(move) | Source} */
    SUNNY_DAY = 241,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Crunch_(move) | Source} */
    CRUNCH = 242,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mirror_Coat_(move) | Source} */
    MIRROR_COAT = 243,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psych_Up_(move) | Source} */
    PSYCH_UP = 244,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Extreme_Speed_(move) | Source} */
    EXTREME_SPEED = 245,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ancient_Power_(move) | Source} */
    ANCIENT_POWER = 246,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shadow_Ball_(move) | Source} */
    SHADOW_BALL = 247,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Future_Sight_(move) | Source} */
    FUTURE_SIGHT = 248,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Smash_(move) | Source} */
    ROCK_SMASH = 249,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Whirlpool_(move) | Source} */
    WHIRLPOOL = 250,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Beat_Up_(move) | Source} */
    BEAT_UP = 251,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fake_Out_(move) | Source} */
    FAKE_OUT = 252,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Uproar_(move) | Source} */
    UPROAR = 253,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stockpile_(move) | Source} */
    STOCKPILE = 254,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spit_Up_(move) | Source} */
    SPIT_UP = 255,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swallow_(move) | Source} */
    SWALLOW = 256,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heat_Wave_(move) | Source} */
    HEAT_WAVE = 257,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hail_(move) | Source} */
    HAIL = 258,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Torment_(move) | Source} */
    TORMENT = 259,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flatter_(move) | Source} */
    FLATTER = 260,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Will_O_Wisp_(move) | Source} */
    WILL_O_WISP = 261,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Memento_(move) | Source} */
    MEMENTO = 262,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Facade_(move) | Source} */
    FACADE = 263,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Focus_Punch_(move) | Source} */
    FOCUS_PUNCH = 264,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Smelling_Salts_(move) | Source} */
    SMELLING_SALTS = 265,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Follow_Me_(move) | Source} */
    FOLLOW_ME = 266,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nature_Power_(move) | Source} */
    NATURE_POWER = 267,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Charge_(move) | Source} */
    CHARGE = 268,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Taunt_(move) | Source} */
    TAUNT = 269,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Helping_Hand_(move) | Source} */
    HELPING_HAND = 270,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Trick_(move) | Source} */
    TRICK = 271,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Role_Play_(move) | Source} */
    ROLE_PLAY = 272,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wish_(move) | Source} */
    WISH = 273,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Assist_(move) | Source} */
    ASSIST = 274,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ingrain_(move) | Source} */
    INGRAIN = 275,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Superpower_(move) | Source} */
    SUPERPOWER = 276,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magic_Coat_(move) | Source} */
    MAGIC_COAT = 277,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Recycle_(move) | Source} */
    RECYCLE = 278,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Revenge_(move) | Source} */
    REVENGE = 279,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Brick_Break_(move) | Source} */
    BRICK_BREAK = 280,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Yawn_(move) | Source} */
    YAWN = 281,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Knock_Off_(move) | Source} */
    KNOCK_OFF = 282,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Endeavor_(move) | Source} */
    ENDEAVOR = 283,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Eruption_(move) | Source} */
    ERUPTION = 284,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Skill_Swap_(move) | Source} */
    SKILL_SWAP = 285,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Imprison_(move) | Source} */
    IMPRISON = 286,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Refresh_(move) | Source} */
    REFRESH = 287,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grudge_(move) | Source} */
    GRUDGE = 288,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Snatch_(move) | Source} */
    SNATCH = 289,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Secret_Power_(move) | Source} */
    SECRET_POWER = 290,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dive_(move) | Source} */
    DIVE = 291,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Arm_Thrust_(move) | Source} */
    ARM_THRUST = 292,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Camouflage_(move) | Source} */
    CAMOUFLAGE = 293,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tail_Glow_(move) | Source} */
    TAIL_GLOW = 294,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Luster_Purge_(move) | Source} */
    LUSTER_PURGE = 295,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mist_Ball_(move) | Source} */
    MIST_BALL = 296,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Feather_Dance_(move) | Source} */
    FEATHER_DANCE = 297,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Teeter_Dance_(move) | Source} */
    TEETER_DANCE = 298,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Blaze_Kick_(move) | Source} */
    BLAZE_KICK = 299,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mud_Sport_(move) | Source} */
    MUD_SPORT = 300,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Ball_(move) | Source} */
    ICE_BALL = 301,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Needle_Arm_(move) | Source} */
    NEEDLE_ARM = 302,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slack_Off_(move) | Source} */
    SLACK_OFF = 303,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hyper_Voice_(move) | Source} */
    HYPER_VOICE = 304,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Fang_(move) | Source} */
    POISON_FANG = 305,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Crush_Claw_(move) | Source} */
    CRUSH_CLAW = 306,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Blast_Burn_(move) | Source} */
    BLAST_BURN = 307,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hydro_Cannon_(move) | Source} */
    HYDRO_CANNON = 308,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Meteor_Mash_(move) | Source} */
    METEOR_MASH = 309,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Astonish_(move) | Source} */
    ASTONISH = 310,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Weather_Ball_(move) | Source} */
    WEATHER_BALL = 311,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aromatherapy_(move) | Source} */
    AROMATHERAPY = 312,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fake_Tears_(move) | Source} */
    FAKE_TEARS = 313,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Air_Cutter_(move) | Source} */
    AIR_CUTTER = 314,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Overheat_(move) | Source} */
    OVERHEAT = 315,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Odor_Sleuth_(move) | Source} */
    ODOR_SLEUTH = 316,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Tomb_(move) | Source} */
    ROCK_TOMB = 317,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Silver_Wind_(move) | Source} */
    SILVER_WIND = 318,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Metal_Sound_(move) | Source} */
    METAL_SOUND = 319,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grass_Whistle_(move) | Source} */
    GRASS_WHISTLE = 320,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tickle_(move) | Source} */
    TICKLE = 321,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cosmic_Power_(move) | Source} */
    COSMIC_POWER = 322,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Spout_(move) | Source} */
    WATER_SPOUT = 323,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Signal_Beam_(move) | Source} */
    SIGNAL_BEAM = 324,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shadow_Punch_(move) | Source} */
    SHADOW_PUNCH = 325,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Extrasensory_(move) | Source} */
    EXTRASENSORY = 326,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sky_Uppercut_(move) | Source} */
    SKY_UPPERCUT = 327,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sand_Tomb_(move) | Source} */
    SAND_TOMB = 328,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sheer_Cold_(move) | Source} */
    SHEER_COLD = 329,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Muddy_Water_(move) | Source} */
    MUDDY_WATER = 330,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bullet_Seed_(move) | Source} */
    BULLET_SEED = 331,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aerial_Ace_(move) | Source} */
    AERIAL_ACE = 332,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Icicle_Spear_(move) | Source} */
    ICICLE_SPEAR = 333,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Defense_(move) | Source} */
    IRON_DEFENSE = 334,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Block_(move) | Source} */
    BLOCK = 335,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Howl_(move) | Source} */
    HOWL = 336,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Claw_(move) | Source} */
    DRAGON_CLAW = 337,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Frenzy_Plant_(move) | Source} */
    FRENZY_PLANT = 338,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bulk_Up_(move) | Source} */
    BULK_UP = 339,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bounce_(move) | Source} */
    BOUNCE = 340,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mud_Shot_(move) | Source} */
    MUD_SHOT = 341,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Tail_(move) | Source} */
    POISON_TAIL = 342,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Covet_(move) | Source} */
    COVET = 343,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Volt_Tackle_(move) | Source} */
    VOLT_TACKLE = 344,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magical_Leaf_(move) | Source} */
    MAGICAL_LEAF = 345,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Sport_(move) | Source} */
    WATER_SPORT = 346,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Calm_Mind_(move) | Source} */
    CALM_MIND = 347,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Leaf_Blade_(move) | Source} */
    LEAF_BLADE = 348,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Dance_(move) | Source} */
    DRAGON_DANCE = 349,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Blast_(move) | Source} */
    ROCK_BLAST = 350,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shock_Wave_(move) | Source} */
    SHOCK_WAVE = 351,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Pulse_(move) | Source} */
    WATER_PULSE = 352,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Doom_Desire_(move) | Source} */
    DOOM_DESIRE = 353,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psycho_Boost_(move) | Source} */
    PSYCHO_BOOST = 354,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Roost_(move) | Source} */
    ROOST = 355,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gravity_(move) | Source} */
    GRAVITY = 356,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Miracle_Eye_(move) | Source} */
    MIRACLE_EYE = 357,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wake_Up_Slap_(move) | Source} */
    WAKE_UP_SLAP = 358,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hammer_Arm_(move) | Source} */
    HAMMER_ARM = 359,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gyro_Ball_(move) | Source} */
    GYRO_BALL = 360,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Healing_Wish_(move) | Source} */
    HEALING_WISH = 361,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Brine_(move) | Source} */
    BRINE = 362,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Natural_Gift_(move) | Source} */
    NATURAL_GIFT = 363,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Feint_(move) | Source} */
    FEINT = 364,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pluck_(move) | Source} */
    PLUCK = 365,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tailwind_(move) | Source} */
    TAILWIND = 366,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Acupressure_(move) | Source} */
    ACUPRESSURE = 367,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Metal_Burst_(move) | Source} */
    METAL_BURST = 368,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/U_Turn_(move) | Source} */
    U_TURN = 369,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Close_Combat_(move) | Source} */
    CLOSE_COMBAT = 370,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Payback_(move) | Source} */
    PAYBACK = 371,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Assurance_(move) | Source} */
    ASSURANCE = 372,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Embargo_(move) | Source} */
    EMBARGO = 373,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fling_(move) | Source} */
    FLING = 374,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psycho_Shift_(move) | Source} */
    PSYCHO_SHIFT = 375,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Trump_Card_(move) | Source} */
    TRUMP_CARD = 376,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heal_Block_(move) | Source} */
    HEAL_BLOCK = 377,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wring_Out_(move) | Source} */
    WRING_OUT = 378,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Trick_(move) | Source} */
    POWER_TRICK = 379,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gastro_Acid_(move) | Source} */
    GASTRO_ACID = 380,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lucky_Chant_(move) | Source} */
    LUCKY_CHANT = 381,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Me_First_(move) | Source} */
    ME_FIRST = 382,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Copycat_(move) | Source} */
    COPYCAT = 383,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Swap_(move) | Source} */
    POWER_SWAP = 384,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Guard_Swap_(move) | Source} */
    GUARD_SWAP = 385,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Punishment_(move) | Source} */
    PUNISHMENT = 386,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Last_Resort_(move) | Source} */
    LAST_RESORT = 387,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Worry_Seed_(move) | Source} */
    WORRY_SEED = 388,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sucker_Punch_(move) | Source} */
    SUCKER_PUNCH = 389,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Toxic_Spikes_(move) | Source} */
    TOXIC_SPIKES = 390,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heart_Swap_(move) | Source} */
    HEART_SWAP = 391,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aqua_Ring_(move) | Source} */
    AQUA_RING = 392,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magnet_Rise_(move) | Source} */
    MAGNET_RISE = 393,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flare_Blitz_(move) | Source} */
    FLARE_BLITZ = 394,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Force_Palm_(move) | Source} */
    FORCE_PALM = 395,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aura_Sphere_(move) | Source} */
    AURA_SPHERE = 396,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Polish_(move) | Source} */
    ROCK_POLISH = 397,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Jab_(move) | Source} */
    POISON_JAB = 398,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dark_Pulse_(move) | Source} */
    DARK_PULSE = 399,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Night_Slash_(move) | Source} */
    NIGHT_SLASH = 400,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aqua_Tail_(move) | Source} */
    AQUA_TAIL = 401,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Seed_Bomb_(move) | Source} */
    SEED_BOMB = 402,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Air_Slash_(move) | Source} */
    AIR_SLASH = 403,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/X_Scissor_(move) | Source} */
    X_SCISSOR = 404,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bug_Buzz_(move) | Source} */
    BUG_BUZZ = 405,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Pulse_(move) | Source} */
    DRAGON_PULSE = 406,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Rush_(move) | Source} */
    DRAGON_RUSH = 407,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Gem_(move) | Source} */
    POWER_GEM = 408,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drain_Punch_(move) | Source} */
    DRAIN_PUNCH = 409,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vacuum_Wave_(move) | Source} */
    VACUUM_WAVE = 410,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Focus_Blast_(move) | Source} */
    FOCUS_BLAST = 411,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Energy_Ball_(move) | Source} */
    ENERGY_BALL = 412,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Brave_Bird_(move) | Source} */
    BRAVE_BIRD = 413,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Earth_Power_(move) | Source} */
    EARTH_POWER = 414,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Switcheroo_(move) | Source} */
    SWITCHEROO = 415,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Giga_Impact_(move) | Source} */
    GIGA_IMPACT = 416,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nasty_Plot_(move) | Source} */
    NASTY_PLOT = 417,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bullet_Punch_(move) | Source} */
    BULLET_PUNCH = 418,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Avalanche_(move) | Source} */
    AVALANCHE = 419,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Shard_(move) | Source} */
    ICE_SHARD = 420,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shadow_Claw_(move) | Source} */
    SHADOW_CLAW = 421,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunder_Fang_(move) | Source} */
    THUNDER_FANG = 422,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Fang_(move) | Source} */
    ICE_FANG = 423,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fire_Fang_(move) | Source} */
    FIRE_FANG = 424,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shadow_Sneak_(move) | Source} */
    SHADOW_SNEAK = 425,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mud_Bomb_(move) | Source} */
    MUD_BOMB = 426,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psycho_Cut_(move) | Source} */
    PSYCHO_CUT = 427,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zen_Headbutt_(move) | Source} */
    ZEN_HEADBUTT = 428,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mirror_Shot_(move) | Source} */
    MIRROR_SHOT = 429,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flash_Cannon_(move) | Source} */
    FLASH_CANNON = 430,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Climb_(move) | Source} */
    ROCK_CLIMB = 431,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Defog_(move) | Source} */
    DEFOG = 432,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Trick_Room_(move) | Source} */
    TRICK_ROOM = 433,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Draco_Meteor_(move) | Source} */
    DRACO_METEOR = 434,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Discharge_(move) | Source} */
    DISCHARGE = 435,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lava_Plume_(move) | Source} */
    LAVA_PLUME = 436,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Leaf_Storm_(move) | Source} */
    LEAF_STORM = 437,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Whip_(move) | Source} */
    POWER_WHIP = 438,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Wrecker_(move) | Source} */
    ROCK_WRECKER = 439,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cross_Poison_(move) | Source} */
    CROSS_POISON = 440,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gunk_Shot_(move) | Source} */
    GUNK_SHOT = 441,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Head_(move) | Source} */
    IRON_HEAD = 442,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magnet_Bomb_(move) | Source} */
    MAGNET_BOMB = 443,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stone_Edge_(move) | Source} */
    STONE_EDGE = 444,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Captivate_(move) | Source} */
    CAPTIVATE = 445,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stealth_Rock_(move) | Source} */
    STEALTH_ROCK = 446,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grass_Knot_(move) | Source} */
    GRASS_KNOT = 447,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chatter_(move) | Source} */
    CHATTER = 448,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Judgment_(move) | Source} */
    JUDGMENT = 449,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bug_Bite_(move) | Source} */
    BUG_BITE = 450,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Charge_Beam_(move) | Source} */
    CHARGE_BEAM = 451,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wood_Hammer_(move) | Source} */
    WOOD_HAMMER = 452,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aqua_Jet_(move) | Source} */
    AQUA_JET = 453,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Attack_Order_(move) | Source} */
    ATTACK_ORDER = 454,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Defend_Order_(move) | Source} */
    DEFEND_ORDER = 455,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heal_Order_(move) | Source} */
    HEAL_ORDER = 456,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Head_Smash_(move) | Source} */
    HEAD_SMASH = 457,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Double_Hit_(move) | Source} */
    DOUBLE_HIT = 458,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Roar_Of_Time_(move) | Source} */
    ROAR_OF_TIME = 459,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spacial_Rend_(move) | Source} */
    SPACIAL_REND = 460,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lunar_Dance_(move) | Source} */
    LUNAR_DANCE = 461,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Crush_Grip_(move) | Source} */
    CRUSH_GRIP = 462,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magma_Storm_(move) | Source} */
    MAGMA_STORM = 463,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dark_Void_(move) | Source} */
    DARK_VOID = 464,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Seed_Flare_(move) | Source} */
    SEED_FLARE = 465,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ominous_Wind_(move) | Source} */
    OMINOUS_WIND = 466,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shadow_Force_(move) | Source} */
    SHADOW_FORCE = 467,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hone_Claws_(move) | Source} */
    HONE_CLAWS = 468,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wide_Guard_(move) | Source} */
    WIDE_GUARD = 469,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Guard_Split_(move) | Source} */
    GUARD_SPLIT = 470,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Split_(move) | Source} */
    POWER_SPLIT = 471,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wonder_Room_(move) | Source} */
    WONDER_ROOM = 472,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psyshock_(move) | Source} */
    PSYSHOCK = 473,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Venoshock_(move) | Source} */
    VENOSHOCK = 474,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Autotomize_(move) | Source} */
    AUTOTOMIZE = 475,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rage_Powder_(move) | Source} */
    RAGE_POWDER = 476,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Telekinesis_(move) | Source} */
    TELEKINESIS = 477,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magic_Room_(move) | Source} */
    MAGIC_ROOM = 478,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Smack_Down_(move) | Source} */
    SMACK_DOWN = 479,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Storm_Throw_(move) | Source} */
    STORM_THROW = 480,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flame_Burst_(move) | Source} */
    FLAME_BURST = 481,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sludge_Wave_(move) | Source} */
    SLUDGE_WAVE = 482,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Quiver_Dance_(move) | Source} */
    QUIVER_DANCE = 483,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heavy_Slam_(move) | Source} */
    HEAVY_SLAM = 484,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Synchronoise_(move) | Source} */
    SYNCHRONOISE = 485,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Electro_Ball_(move) | Source} */
    ELECTRO_BALL = 486,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Soak_(move) | Source} */
    SOAK = 487,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flame_Charge_(move) | Source} */
    FLAME_CHARGE = 488,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Coil_(move) | Source} */
    COIL = 489,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Low_Sweep_(move) | Source} */
    LOW_SWEEP = 490,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Acid_Spray_(move) | Source} */
    ACID_SPRAY = 491,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Foul_Play_(move) | Source} */
    FOUL_PLAY = 492,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Simple_Beam_(move) | Source} */
    SIMPLE_BEAM = 493,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Entrainment_(move) | Source} */
    ENTRAINMENT = 494,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/After_You_(move) | Source} */
    AFTER_YOU = 495,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Round_(move) | Source} */
    ROUND = 496,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Echoed_Voice_(move) | Source} */
    ECHOED_VOICE = 497,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chip_Away_(move) | Source} */
    CHIP_AWAY = 498,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Clear_Smog_(move) | Source} */
    CLEAR_SMOG = 499,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stored_Power_(move) | Source} */
    STORED_POWER = 500,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Quick_Guard_(move) | Source} */
    QUICK_GUARD = 501,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ally_Switch_(move) | Source} */
    ALLY_SWITCH = 502,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scald_(move) | Source} */
    SCALD = 503,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shell_Smash_(move) | Source} */
    SHELL_SMASH = 504,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heal_Pulse_(move) | Source} */
    HEAL_PULSE = 505,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hex_(move) | Source} */
    HEX = 506,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sky_Drop_(move) | Source} */
    SKY_DROP = 507,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shift_Gear_(move) | Source} */
    SHIFT_GEAR = 508,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Circle_Throw_(move) | Source} */
    CIRCLE_THROW = 509,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Incinerate_(move) | Source} */
    INCINERATE = 510,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Quash_(move) | Source} */
    QUASH = 511,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Acrobatics_(move) | Source} */
    ACROBATICS = 512,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Reflect_Type_(move) | Source} */
    REFLECT_TYPE = 513,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Retaliate_(move) | Source} */
    RETALIATE = 514,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Final_Gambit_(move) | Source} */
    FINAL_GAMBIT = 515,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bestow_(move) | Source} */
    BESTOW = 516,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Inferno_(move) | Source} */
    INFERNO = 517,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Pledge_(move) | Source} */
    WATER_PLEDGE = 518,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fire_Pledge_(move) | Source} */
    FIRE_PLEDGE = 519,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grass_Pledge_(move) | Source} */
    GRASS_PLEDGE = 520,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Volt_Switch_(move) | Source} */
    VOLT_SWITCH = 521,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Struggle_Bug_(move) | Source} */
    STRUGGLE_BUG = 522,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bulldoze_(move) | Source} */
    BULLDOZE = 523,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Frost_Breath_(move) | Source} */
    FROST_BREATH = 524,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Tail_(move) | Source} */
    DRAGON_TAIL = 525,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Work_Up_(move) | Source} */
    WORK_UP = 526,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Electroweb_(move) | Source} */
    ELECTROWEB = 527,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wild_Charge_(move) | Source} */
    WILD_CHARGE = 528,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drill_Run_(move) | Source} */
    DRILL_RUN = 529,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dual_Chop_(move) | Source} */
    DUAL_CHOP = 530,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heart_Stamp_(move) | Source} */
    HEART_STAMP = 531,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Horn_Leech_(move) | Source} */
    HORN_LEECH = 532,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sacred_Sword_(move) | Source} */
    SACRED_SWORD = 533,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Razor_Shell_(move) | Source} */
    RAZOR_SHELL = 534,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heat_Crash_(move) | Source} */
    HEAT_CRASH = 535,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Leaf_Tornado_(move) | Source} */
    LEAF_TORNADO = 536,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Steamroller_(move) | Source} */
    STEAMROLLER = 537,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cotton_Guard_(move) | Source} */
    COTTON_GUARD = 538,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Night_Daze_(move) | Source} */
    NIGHT_DAZE = 539,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psystrike_(move) | Source} */
    PSYSTRIKE = 540,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tail_Slap_(move) | Source} */
    TAIL_SLAP = 541,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hurricane_(move) | Source} */
    HURRICANE = 542,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Head_Charge_(move) | Source} */
    HEAD_CHARGE = 543,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gear_Grind_(move) | Source} */
    GEAR_GRIND = 544,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Searing_Shot_(move) | Source} */
    SEARING_SHOT = 545,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Techno_Blast_(move) | Source} */
    TECHNO_BLAST = 546,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Relic_Song_(move) | Source} */
    RELIC_SONG = 547,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Secret_Sword_(move) | Source} */
    SECRET_SWORD = 548,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Glaciate_(move) | Source} */
    GLACIATE = 549,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bolt_Strike_(move) | Source} */
    BOLT_STRIKE = 550,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Blue_Flare_(move) | Source} */
    BLUE_FLARE = 551,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fiery_Dance_(move) | Source} */
    FIERY_DANCE = 552,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Freeze_Shock_(move) | Source} */
    FREEZE_SHOCK = 553,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Burn_(move) | Source} */
    ICE_BURN = 554,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Snarl_(move) | Source} */
    SNARL = 555,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Icicle_Crash_(move) | Source} */
    ICICLE_CRASH = 556,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/V_Create_(move) | Source} */
    V_CREATE = 557,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fusion_Flare_(move) | Source} */
    FUSION_FLARE = 558,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fusion_Bolt_(move) | Source} */
    FUSION_BOLT = 559,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flying_Press_(move) | Source} */
    FLYING_PRESS = 560,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mat_Block_(move) | Source} */
    MAT_BLOCK = 561,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Belch_(move) | Source} */
    BELCH = 562,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rototiller_(move) | Source} */
    ROTOTILLER = 563,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sticky_Web_(move) | Source} */
    STICKY_WEB = 564,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fell_Stinger_(move) | Source} */
    FELL_STINGER = 565,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Phantom_Force_(move) | Source} */
    PHANTOM_FORCE = 566,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Trick_Or_Treat_(move) | Source} */
    TRICK_OR_TREAT = 567,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Noble_Roar_(move) | Source} */
    NOBLE_ROAR = 568,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ion_Deluge_(move) | Source} */
    ION_DELUGE = 569,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Parabolic_Charge_(move) | Source} */
    PARABOLIC_CHARGE = 570,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Forests_Curse_(move) | Source} */
    FORESTS_CURSE = 571,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Petal_Blizzard_(move) | Source} */
    PETAL_BLIZZARD = 572,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Freeze_Dry_(move) | Source} */
    FREEZE_DRY = 573,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Disarming_Voice_(move) | Source} */
    DISARMING_VOICE = 574,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Parting_Shot_(move) | Source} */
    PARTING_SHOT = 575,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Topsy_Turvy_(move) | Source} */
    TOPSY_TURVY = 576,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Draining_Kiss_(move) | Source} */
    DRAINING_KISS = 577,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Crafty_Shield_(move) | Source} */
    CRAFTY_SHIELD = 578,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flower_Shield_(move) | Source} */
    FLOWER_SHIELD = 579,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grassy_Terrain_(move) | Source} */
    GRASSY_TERRAIN = 580,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Misty_Terrain_(move) | Source} */
    MISTY_TERRAIN = 581,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Electrify_(move) | Source} */
    ELECTRIFY = 582,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Play_Rough_(move) | Source} */
    PLAY_ROUGH = 583,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fairy_Wind_(move) | Source} */
    FAIRY_WIND = 584,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Moonblast_(move) | Source} */
    MOONBLAST = 585,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Boomburst_(move) | Source} */
    BOOMBURST = 586,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fairy_Lock_(move) | Source} */
    FAIRY_LOCK = 587,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kings_Shield_(move) | Source} */
    KINGS_SHIELD = 588,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Play_Nice_(move) | Source} */
    PLAY_NICE = 589,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Confide_(move) | Source} */
    CONFIDE = 590,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Diamond_Storm_(move) | Source} */
    DIAMOND_STORM = 591,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Steam_Eruption_(move) | Source} */
    STEAM_ERUPTION = 592,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hyperspace_Hole_(move) | Source} */
    HYPERSPACE_HOLE = 593,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Shuriken_(move) | Source} */
    WATER_SHURIKEN = 594,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mystical_Fire_(move) | Source} */
    MYSTICAL_FIRE = 595,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spiky_Shield_(move) | Source} */
    SPIKY_SHIELD = 596,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aromatic_Mist_(move) | Source} */
    AROMATIC_MIST = 597,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Eerie_Impulse_(move) | Source} */
    EERIE_IMPULSE = 598,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Venom_Drench_(move) | Source} */
    VENOM_DRENCH = 599,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Powder_(move) | Source} */
    POWDER = 600,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Geomancy_(move) | Source} */
    GEOMANCY = 601,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magnetic_Flux_(move) | Source} */
    MAGNETIC_FLUX = 602,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Happy_Hour_(move) | Source} */
    HAPPY_HOUR = 603,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Electric_Terrain_(move) | Source} */
    ELECTRIC_TERRAIN = 604,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dazzling_Gleam_(move) | Source} */
    DAZZLING_GLEAM = 605,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Celebrate_(move) | Source} */
    CELEBRATE = 606,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hold_Hands_(move) | Source} */
    HOLD_HANDS = 607,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Baby_Doll_Eyes_(move) | Source} */
    BABY_DOLL_EYES = 608,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nuzzle_(move) | Source} */
    NUZZLE = 609,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hold_Back_(move) | Source} */
    HOLD_BACK = 610,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Infestation_(move) | Source} */
    INFESTATION = 611,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Up_Punch_(move) | Source} */
    POWER_UP_PUNCH = 612,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Oblivion_Wing_(move) | Source} */
    OBLIVION_WING = 613,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thousand_Arrows_(move) | Source} */
    THOUSAND_ARROWS = 614,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thousand_Waves_(move) | Source} */
    THOUSAND_WAVES = 615,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lands_Wrath_(move) | Source} */
    LANDS_WRATH = 616,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Light_Of_Ruin_(move) | Source} */
    LIGHT_OF_RUIN = 617,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Origin_Pulse_(move) | Source} */
    ORIGIN_PULSE = 618,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Precipice_Blades_(move) | Source} */
    PRECIPICE_BLADES = 619,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Ascent_(move) | Source} */
    DRAGON_ASCENT = 620,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hyperspace_Fury_(move) | Source} */
    HYPERSPACE_FURY = 621,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Breakneck_Blitz__Physical_(move) | Source} */
    BREAKNECK_BLITZ__PHYSICAL = 622,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Breakneck_Blitz__Special_(move) | Source} */
    BREAKNECK_BLITZ__SPECIAL = 623,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/All_Out_Pummeling__Physical_(move) | Source} */
    ALL_OUT_PUMMELING__PHYSICAL = 624,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/All_Out_Pummeling__Special_(move) | Source} */
    ALL_OUT_PUMMELING__SPECIAL = 625,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Supersonic_Skystrike__Physical_(move) | Source} */
    SUPERSONIC_SKYSTRIKE__PHYSICAL = 626,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Supersonic_Skystrike__Special_(move) | Source} */
    SUPERSONIC_SKYSTRIKE__SPECIAL = 627,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Acid_Downpour__Physical_(move) | Source} */
    ACID_DOWNPOUR__PHYSICAL = 628,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Acid_Downpour__Special_(move) | Source} */
    ACID_DOWNPOUR__SPECIAL = 629,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tectonic_Rage__Physical_(move) | Source} */
    TECTONIC_RAGE__PHYSICAL = 630,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tectonic_Rage__Special_(move) | Source} */
    TECTONIC_RAGE__SPECIAL = 631,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Continental_Crush__Physical_(move) | Source} */
    CONTINENTAL_CRUSH__PHYSICAL = 632,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Continental_Crush__Special_(move) | Source} */
    CONTINENTAL_CRUSH__SPECIAL = 633,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Savage_Spin_Out__Physical_(move) | Source} */
    SAVAGE_SPIN_OUT__PHYSICAL = 634,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Savage_Spin_Out__Special_(move) | Source} */
    SAVAGE_SPIN_OUT__SPECIAL = 635,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Never_Ending_Nightmare__Physical_(move) | Source} */
    NEVER_ENDING_NIGHTMARE__PHYSICAL = 636,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Never_Ending_Nightmare__Special_(move) | Source} */
    NEVER_ENDING_NIGHTMARE__SPECIAL = 637,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Corkscrew_Crash__Physical_(move) | Source} */
    CORKSCREW_CRASH__PHYSICAL = 638,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Corkscrew_Crash__Special_(move) | Source} */
    CORKSCREW_CRASH__SPECIAL = 639,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Inferno_Overdrive__Physical_(move) | Source} */
    INFERNO_OVERDRIVE__PHYSICAL = 640,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Inferno_Overdrive__Special_(move) | Source} */
    INFERNO_OVERDRIVE__SPECIAL = 641,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hydro_Vortex__Physical_(move) | Source} */
    HYDRO_VORTEX__PHYSICAL = 642,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hydro_Vortex__Special_(move) | Source} */
    HYDRO_VORTEX__SPECIAL = 643,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bloom_Doom__Physical_(move) | Source} */
    BLOOM_DOOM__PHYSICAL = 644,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bloom_Doom__Special_(move) | Source} */
    BLOOM_DOOM__SPECIAL = 645,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gigavolt_Havoc__Physical_(move) | Source} */
    GIGAVOLT_HAVOC__PHYSICAL = 646,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gigavolt_Havoc__Special_(move) | Source} */
    GIGAVOLT_HAVOC__SPECIAL = 647,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shattered_Psyche__Physical_(move) | Source} */
    SHATTERED_PSYCHE__PHYSICAL = 648,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shattered_Psyche__Special_(move) | Source} */
    SHATTERED_PSYCHE__SPECIAL = 649,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Subzero_Slammer__Physical_(move) | Source} */
    SUBZERO_SLAMMER__PHYSICAL = 650,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Subzero_Slammer__Special_(move) | Source} */
    SUBZERO_SLAMMER__SPECIAL = 651,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Devastating_Drake__Physical_(move) | Source} */
    DEVASTATING_DRAKE__PHYSICAL = 652,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Devastating_Drake__Special_(move) | Source} */
    DEVASTATING_DRAKE__SPECIAL = 653,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Black_Hole_Eclipse__Physical_(move) | Source} */
    BLACK_HOLE_ECLIPSE__PHYSICAL = 654,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Black_Hole_Eclipse__Special_(move) | Source} */
    BLACK_HOLE_ECLIPSE__SPECIAL = 655,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Twinkle_Tackle__Physical_(move) | Source} */
    TWINKLE_TACKLE__PHYSICAL = 656,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Twinkle_Tackle__Special_(move) | Source} */
    TWINKLE_TACKLE__SPECIAL = 657,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Catastropika_(move) | Source} */
    CATASTROPIKA = 658,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shore_Up_(move) | Source} */
    SHORE_UP = 659,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/First_Impression_(move) | Source} */
    FIRST_IMPRESSION = 660,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Baneful_Bunker_(move) | Source} */
    BANEFUL_BUNKER = 661,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spirit_Shackle_(move) | Source} */
    SPIRIT_SHACKLE = 662,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Darkest_Lariat_(move) | Source} */
    DARKEST_LARIAT = 663,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sparkling_Aria_(move) | Source} */
    SPARKLING_ARIA = 664,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Hammer_(move) | Source} */
    ICE_HAMMER = 665,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Floral_Healing_(move) | Source} */
    FLORAL_HEALING = 666,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/High_Horsepower_(move) | Source} */
    HIGH_HORSEPOWER = 667,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Strength_Sap_(move) | Source} */
    STRENGTH_SAP = 668,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Solar_Blade_(move) | Source} */
    SOLAR_BLADE = 669,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Leafage_(move) | Source} */
    LEAFAGE = 670,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spotlight_(move) | Source} */
    SPOTLIGHT = 671,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Toxic_Thread_(move) | Source} */
    TOXIC_THREAD = 672,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Laser_Focus_(move) | Source} */
    LASER_FOCUS = 673,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gear_Up_(move) | Source} */
    GEAR_UP = 674,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Throat_Chop_(move) | Source} */
    THROAT_CHOP = 675,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pollen_Puff_(move) | Source} */
    POLLEN_PUFF = 676,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Anchor_Shot_(move) | Source} */
    ANCHOR_SHOT = 677,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psychic_Terrain_(move) | Source} */
    PSYCHIC_TERRAIN = 678,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lunge_(move) | Source} */
    LUNGE = 679,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fire_Lash_(move) | Source} */
    FIRE_LASH = 680,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Trip_(move) | Source} */
    POWER_TRIP = 681,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Burn_Up_(move) | Source} */
    BURN_UP = 682,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Speed_Swap_(move) | Source} */
    SPEED_SWAP = 683,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Smart_Strike_(move) | Source} */
    SMART_STRIKE = 684,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Purify_(move) | Source} */
    PURIFY = 685,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Revelation_Dance_(move) | Source} */
    REVELATION_DANCE = 686,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Core_Enforcer_(move) | Source} */
    CORE_ENFORCER = 687,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Trop_Kick_(move) | Source} */
    TROP_KICK = 688,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Instruct_(move) | Source} */
    INSTRUCT = 689,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Beak_Blast_(move) | Source} */
    BEAK_BLAST = 690,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Clanging_Scales_(move) | Source} */
    CLANGING_SCALES = 691,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Hammer_(move) | Source} */
    DRAGON_HAMMER = 692,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Brutal_Swing_(move) | Source} */
    BRUTAL_SWING = 693,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aurora_Veil_(move) | Source} */
    AURORA_VEIL = 694,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sinister_Arrow_Raid_(move) | Source} */
    SINISTER_ARROW_RAID = 695,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Malicious_Moonsault_(move) | Source} */
    MALICIOUS_MOONSAULT = 696,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Oceanic_Operetta_(move) | Source} */
    OCEANIC_OPERETTA = 697,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Guardian_Of_Alola_(move) | Source} */
    GUARDIAN_OF_ALOLA = 698,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Soul_Stealing_7_Star_Strike_(move) | Source} */
    SOUL_STEALING_7_STAR_STRIKE = 699,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stoked_Sparksurfer_(move) | Source} */
    STOKED_SPARKSURFER = 700,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pulverizing_Pancake_(move) | Source} */
    PULVERIZING_PANCAKE = 701,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Extreme_Evoboost_(move) | Source} */
    EXTREME_EVOBOOST = 702,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Genesis_Supernova_(move) | Source} */
    GENESIS_SUPERNOVA = 703,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shell_Trap_(move) | Source} */
    SHELL_TRAP = 704,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fleur_Cannon_(move) | Source} */
    FLEUR_CANNON = 705,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psychic_Fangs_(move) | Source} */
    PSYCHIC_FANGS = 706,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stomping_Tantrum_(move) | Source} */
    STOMPING_TANTRUM = 707,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shadow_Bone_(move) | Source} */
    SHADOW_BONE = 708,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Accelerock_(move) | Source} */
    ACCELEROCK = 709,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Liquidation_(move) | Source} */
    LIQUIDATION = 710,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Prismatic_Laser_(move) | Source} */
    PRISMATIC_LASER = 711,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spectral_Thief_(move) | Source} */
    SPECTRAL_THIEF = 712,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sunsteel_Strike_(move) | Source} */
    SUNSTEEL_STRIKE = 713,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Moongeist_Beam_(move) | Source} */
    MOONGEIST_BEAM = 714,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tearful_Look_(move) | Source} */
    TEARFUL_LOOK = 715,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zing_Zap_(move) | Source} */
    ZING_ZAP = 716,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Natures_Madness_(move) | Source} */
    NATURES_MADNESS = 717,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Multi_Attack_(move) | Source} */
    MULTI_ATTACK = 718,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ten_Million_Volt_Thunderbolt_(move) | Source} */
    TEN_MILLION_VOLT_THUNDERBOLT = 719,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mind_Blown_(move) | Source} */
    MIND_BLOWN = 720,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Plasma_Fists_(move) | Source} */
    PLASMA_FISTS = 721,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Photon_Geyser_(move) | Source} */
    PHOTON_GEYSER = 722,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Light_That_Burns_The_Sky_(move) | Source} */
    LIGHT_THAT_BURNS_THE_SKY = 723,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Searing_Sunraze_Smash_(move) | Source} */
    SEARING_SUNRAZE_SMASH = 724,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Menacing_Moonraze_Maelstrom_(move) | Source} */
    MENACING_MOONRAZE_MAELSTROM = 725,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lets_Snuggle_Forever_(move) | Source} */
    LETS_SNUGGLE_FOREVER = 726,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Splintered_Stormshards_(move) | Source} */
    SPLINTERED_STORMSHARDS = 727,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Clangorous_Soulblaze_(move) | Source} */
    CLANGOROUS_SOULBLAZE = 728,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zippy_Zap_(move) | Source} */
    ZIPPY_ZAP = 729,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Splishy_Splash_(move) | Source} */
    SPLISHY_SPLASH = 730,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Floaty_Fall_(move) | Source} */
    FLOATY_FALL = 731,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pika_Papow_(move) | Source} */
    PIKA_PAPOW = 732,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bouncy_Bubble_(move) | Source} */
    BOUNCY_BUBBLE = 733,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Buzzy_Buzz_(move) | Source} */
    BUZZY_BUZZ = 734,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sizzly_Slide_(move) | Source} */
    SIZZLY_SLIDE = 735,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Glitzy_Glow_(move) | Source} */
    GLITZY_GLOW = 736,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Baddy_Bad_(move) | Source} */
    BADDY_BAD = 737,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sappy_Seed_(move) | Source} */
    SAPPY_SEED = 738,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Freezy_Frost_(move) | Source} */
    FREEZY_FROST = 739,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sparkly_Swirl_(move) | Source} */
    SPARKLY_SWIRL = 740,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Veevee_Volley_(move) | Source} */
    VEEVEE_VOLLEY = 741,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Double_Iron_Bash_(move) | Source} */
    DOUBLE_IRON_BASH = 742,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Guard_(move) | Source} */
    MAX_GUARD = 743,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dynamax_Cannon_(move) | Source} */
    DYNAMAX_CANNON = 744,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Snipe_Shot_(move) | Source} */
    SNIPE_SHOT = 745,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Jaw_Lock_(move) | Source} */
    JAW_LOCK = 746,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stuff_Cheeks_(move) | Source} */
    STUFF_CHEEKS = 747,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/No_Retreat_(move) | Source} */
    NO_RETREAT = 748,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tar_Shot_(move) | Source} */
    TAR_SHOT = 749,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magic_Powder_(move) | Source} */
    MAGIC_POWDER = 750,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Darts_(move) | Source} */
    DRAGON_DARTS = 751,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Teatime_(move) | Source} */
    TEATIME = 752,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Octolock_(move) | Source} */
    OCTOLOCK = 753,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bolt_Beak_(move) | Source} */
    BOLT_BEAK = 754,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fishious_Rend_(move) | Source} */
    FISHIOUS_REND = 755,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Court_Change_(move) | Source} */
    COURT_CHANGE = 756,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Flare_(move) | Source} */
    MAX_FLARE = 757,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Flutterby_(move) | Source} */
    MAX_FLUTTERBY = 758,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Lightning_(move) | Source} */
    MAX_LIGHTNING = 759,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Strike_(move) | Source} */
    MAX_STRIKE = 760,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Knuckle_(move) | Source} */
    MAX_KNUCKLE = 761,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Phantasm_(move) | Source} */
    MAX_PHANTASM = 762,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Hailstorm_(move) | Source} */
    MAX_HAILSTORM = 763,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Ooze_(move) | Source} */
    MAX_OOZE = 764,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Geyser_(move) | Source} */
    MAX_GEYSER = 765,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Airstream_(move) | Source} */
    MAX_AIRSTREAM = 766,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Starfall_(move) | Source} */
    MAX_STARFALL = 767,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Wyrmwind_(move) | Source} */
    MAX_WYRMWIND = 768,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Mindstorm_(move) | Source} */
    MAX_MINDSTORM = 769,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Rockfall_(move) | Source} */
    MAX_ROCKFALL = 770,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Quake_(move) | Source} */
    MAX_QUAKE = 771,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Darkness_(move) | Source} */
    MAX_DARKNESS = 772,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Overgrowth_(move) | Source} */
    MAX_OVERGROWTH = 773,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Steelspike_(move) | Source} */
    MAX_STEELSPIKE = 774,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Clangorous_Soul_(move) | Source} */
    CLANGOROUS_SOUL = 775,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Body_Press_(move) | Source} */
    BODY_PRESS = 776,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Decorate_(move) | Source} */
    DECORATE = 777,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drum_Beating_(move) | Source} */
    DRUM_BEATING = 778,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Snap_Trap_(move) | Source} */
    SNAP_TRAP = 779,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pyro_Ball_(move) | Source} */
    PYRO_BALL = 780,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Behemoth_Blade_(move) | Source} */
    BEHEMOTH_BLADE = 781,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Behemoth_Bash_(move) | Source} */
    BEHEMOTH_BASH = 782,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aura_Wheel_(move) | Source} */
    AURA_WHEEL = 783,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Breaking_Swipe_(move) | Source} */
    BREAKING_SWIPE = 784,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Branch_Poke_(move) | Source} */
    BRANCH_POKE = 785,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Overdrive_(move) | Source} */
    OVERDRIVE = 786,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Apple_Acid_(move) | Source} */
    APPLE_ACID = 787,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grav_Apple_(move) | Source} */
    GRAV_APPLE = 788,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spirit_Break_(move) | Source} */
    SPIRIT_BREAK = 789,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Strange_Steam_(move) | Source} */
    STRANGE_STEAM = 790,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Life_Dew_(move) | Source} */
    LIFE_DEW = 791,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Obstruct_(move) | Source} */
    OBSTRUCT = 792,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/False_Surrender_(move) | Source} */
    FALSE_SURRENDER = 793,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Meteor_Assault_(move) | Source} */
    METEOR_ASSAULT = 794,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Eternabeam_(move) | Source} */
    ETERNABEAM = 795,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Steel_Beam_(move) | Source} */
    STEEL_BEAM = 796,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Expanding_Force_(move) | Source} */
    EXPANDING_FORCE = 797,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Steel_Roller_(move) | Source} */
    STEEL_ROLLER = 798,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scale_Shot_(move) | Source} */
    SCALE_SHOT = 799,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Meteor_Beam_(move) | Source} */
    METEOR_BEAM = 800,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shell_Side_Arm_(move) | Source} */
    SHELL_SIDE_ARM = 801,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Misty_Explosion_(move) | Source} */
    MISTY_EXPLOSION = 802,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grassy_Glide_(move) | Source} */
    GRASSY_GLIDE = 803,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rising_Voltage_(move) | Source} */
    RISING_VOLTAGE = 804,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Terrain_Pulse_(move) | Source} */
    TERRAIN_PULSE = 805,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Skitter_Smack_(move) | Source} */
    SKITTER_SMACK = 806,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Burning_Jealousy_(move) | Source} */
    BURNING_JEALOUSY = 807,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lash_Out_(move) | Source} */
    LASH_OUT = 808,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poltergeist_(move) | Source} */
    POLTERGEIST = 809,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Corrosive_Gas_(move) | Source} */
    CORROSIVE_GAS = 810,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Coaching_(move) | Source} */
    COACHING = 811,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flip_Turn_(move) | Source} */
    FLIP_TURN = 812,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Triple_Axel_(move) | Source} */
    TRIPLE_AXEL = 813,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dual_Wingbeat_(move) | Source} */
    DUAL_WINGBEAT = 814,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scorching_Sands_(move) | Source} */
    SCORCHING_SANDS = 815,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Jungle_Healing_(move) | Source} */
    JUNGLE_HEALING = 816,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wicked_Blow_(move) | Source} */
    WICKED_BLOW = 817,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Surging_Strikes_(move) | Source} */
    SURGING_STRIKES = 818,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunder_Cage_(move) | Source} */
    THUNDER_CAGE = 819,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Energy_(move) | Source} */
    DRAGON_ENERGY = 820,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Freezing_Glare_(move) | Source} */
    FREEZING_GLARE = 821,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fiery_Wrath_(move) | Source} */
    FIERY_WRATH = 822,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunderous_Kick_(move) | Source} */
    THUNDEROUS_KICK = 823,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Glacial_Lance_(move) | Source} */
    GLACIAL_LANCE = 824,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Astral_Barrage_(move) | Source} */
    ASTRAL_BARRAGE = 825,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Eerie_Spell_(move) | Source} */
    EERIE_SPELL = 826,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dire_Claw_(move) | Source} */
    DIRE_CLAW = 827,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psyshield_Bash_(move) | Source} */
    PSYSHIELD_BASH = 828,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Shift_(move) | Source} */
    POWER_SHIFT = 829,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stone_Axe_(move) | Source} */
    STONE_AXE = 830,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Springtide_Storm_(move) | Source} */
    SPRINGTIDE_STORM = 831,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mystical_Power_(move) | Source} */
    MYSTICAL_POWER = 832,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Raging_Fury_(move) | Source} */
    RAGING_FURY = 833,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wave_Crash_(move) | Source} */
    WAVE_CRASH = 834,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chloroblast_(move) | Source} */
    CHLOROBLAST = 835,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mountain_Gale_(move) | Source} */
    MOUNTAIN_GALE = 836,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Victory_Dance_(move) | Source} */
    VICTORY_DANCE = 837,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Headlong_Rush_(move) | Source} */
    HEADLONG_RUSH = 838,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Barb_Barrage_(move) | Source} */
    BARB_BARRAGE = 839,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Esper_Wing_(move) | Source} */
    ESPER_WING = 840,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bitter_Malice_(move) | Source} */
    BITTER_MALICE = 841,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shelter_(move) | Source} */
    SHELTER = 842,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Triple_Arrows_(move) | Source} */
    TRIPLE_ARROWS = 843,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Infernal_Parade_(move) | Source} */
    INFERNAL_PARADE = 844,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ceaseless_Edge_(move) | Source} */
    CEASELESS_EDGE = 845,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bleakwind_Storm_(move) | Source} */
    BLEAKWIND_STORM = 846,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wildbolt_Storm_(move) | Source} */
    WILDBOLT_STORM = 847,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sandsear_Storm_(move) | Source} */
    SANDSEAR_STORM = 848,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lunar_Blessing_(move) | Source} */
    LUNAR_BLESSING = 849,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Take_Heart_(move) | Source} */
    TAKE_HEART = 850,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tera_Blast_(move) | Source} */
    TERA_BLAST = 851,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Silk_Trap_(move) | Source} */
    SILK_TRAP = 852,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Axe_Kick_(move) | Source} */
    AXE_KICK = 853,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Last_Respects_(move) | Source} */
    LAST_RESPECTS = 854,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lumina_Crash_(move) | Source} */
    LUMINA_CRASH = 855,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Order_Up_(move) | Source} */
    ORDER_UP = 856,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Jet_Punch_(move) | Source} */
    JET_PUNCH = 857,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spicy_Extract_(move) | Source} */
    SPICY_EXTRACT = 858,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spin_Out_(move) | Source} */
    SPIN_OUT = 859,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Population_Bomb_(move) | Source} */
    POPULATION_BOMB = 860,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Spinner_(move) | Source} */
    ICE_SPINNER = 861,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Glaive_Rush_(move) | Source} */
    GLAIVE_RUSH = 862,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Revival_Blessing_(move) | Source} */
    REVIVAL_BLESSING = 863,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Salt_Cure_(move) | Source} */
    SALT_CURE = 864,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Triple_Dive_(move) | Source} */
    TRIPLE_DIVE = 865,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mortal_Spin_(move) | Source} */
    MORTAL_SPIN = 866,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Doodle_(move) | Source} */
    DOODLE = 867,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fillet_Away_(move) | Source} */
    FILLET_AWAY = 868,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kowtow_Cleave_(move) | Source} */
    KOWTOW_CLEAVE = 869,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flower_Trick_(move) | Source} */
    FLOWER_TRICK = 870,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Torch_Song_(move) | Source} */
    TORCH_SONG = 871,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aqua_Step_(move) | Source} */
    AQUA_STEP = 872,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Raging_Bull_(move) | Source} */
    RAGING_BULL = 873,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Make_It_Rain_(move) | Source} */
    MAKE_IT_RAIN = 874,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psyblade_(move) | Source} */
    PSYBLADE = 875,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hydro_Steam_(move) | Source} */
    HYDRO_STEAM = 876,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ruination_(move) | Source} */
    RUINATION = 877,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Collision_Course_(move) | Source} */
    COLLISION_COURSE = 878,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Electro_Drift_(move) | Source} */
    ELECTRO_DRIFT = 879,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shed_Tail_(move) | Source} */
    SHED_TAIL = 880,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chilly_Reception_(move) | Source} */
    CHILLY_RECEPTION = 881,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tidy_Up_(move) | Source} */
    TIDY_UP = 882,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Snowscape_(move) | Source} */
    SNOWSCAPE = 883,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pounce_(move) | Source} */
    POUNCE = 884,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Trailblaze_(move) | Source} */
    TRAILBLAZE = 885,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chilling_Water_(move) | Source} */
    CHILLING_WATER = 886,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hyper_Drill_(move) | Source} */
    HYPER_DRILL = 887,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Twin_Beam_(move) | Source} */
    TWIN_BEAM = 888,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rage_Fist_(move) | Source} */
    RAGE_FIST = 889,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Armor_Cannon_(move) | Source} */
    ARMOR_CANNON = 890,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bitter_Blade_(move) | Source} */
    BITTER_BLADE = 891,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Double_Shock_(move) | Source} */
    DOUBLE_SHOCK = 892,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gigaton_Hammer_(move) | Source} */
    GIGATON_HAMMER = 893,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Comeuppance_(move) | Source} */
    COMEUPPANCE = 894,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aqua_Cutter_(move) | Source} */
    AQUA_CUTTER = 895,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Blazing_Torque_(move) | Source} */
    BLAZING_TORQUE = 896,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wicked_Torque_(move) | Source} */
    WICKED_TORQUE = 897,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Noxious_Torque_(move) | Source} */
    NOXIOUS_TORQUE = 898,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Combat_Torque_(move) | Source} */
    COMBAT_TORQUE = 899,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magical_Torque_(move) | Source} */
    MAGICAL_TORQUE = 900,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Blood_Moon_(move) | Source} */
    BLOOD_MOON = 901,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Matcha_Gotcha_(move) | Source} */
    MATCHA_GOTCHA = 902,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Syrup_Bomb_(move) | Source} */
    SYRUP_BOMB = 903,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ivy_Cudgel_(move) | Source} */
    IVY_CUDGEL = 904,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Electro_Shot_(move) | Source} */
    ELECTRO_SHOT = 905,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tera_Starstorm_(move) | Source} */
    TERA_STARSTORM = 906,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fickle_Beam_(move) | Source} */
    FICKLE_BEAM = 907,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Burning_Bulwark_(move) | Source} */
    BURNING_BULWARK = 908,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunderclap_(move) | Source} */
    THUNDERCLAP = 909,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mighty_Cleave_(move) | Source} */
    MIGHTY_CLEAVE = 910,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tachyon_Cutter_(move) | Source} */
    TACHYON_CUTTER = 911,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hard_Press_(move) | Source} */
    HARD_PRESS = 912,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Cheer_(move) | Source} */
    DRAGON_CHEER = 913,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Alluring_Voice_(move) | Source} */
    ALLURING_VOICE = 914,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Temper_Flare_(move) | Source} */
    TEMPER_FLARE = 915,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Supercell_Slam_(move) | Source} */
    SUPERCELL_SLAM = 916,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psychic_Noise_(move) | Source} */
    PSYCHIC_NOISE = 917,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Upper_Hand_(move) | Source} */
    UPPER_HAND = 918,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Malignant_Chain_(move) | Source} */
    MALIGNANT_CHAIN = 919,
  }
}
declare module 'src/enums/species' {
  export enum Species {
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pokémon) | Source} */
    BULBASAUR = 1,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ivysaur_(Pokémon) | Source} */
    IVYSAUR = 2,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Venusaur_(Pokémon) | Source} */
    VENUSAUR = 3,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pokémon) | Source} */
    CHARMANDER = 4,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Charmeleon_(Pokémon) | Source} */
    CHARMELEON = 5,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pokémon) | Source} */
    CHARIZARD = 6,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pokémon) | Source} */
    SQUIRTLE = 7,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wartortle_(Pokémon) | Source} */
    WARTORTLE = 8,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pokémon) | Source} */
    BLASTOISE = 9,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pokémon) | Source} */
    CATERPIE = 10,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Metapod_(Pokémon) | Source} */
    METAPOD = 11,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Butterfree_(Pokémon) | Source} */
    BUTTERFREE = 12,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Weedle_(Pokémon) | Source} */
    WEEDLE = 13,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kakuna_(Pokémon) | Source} */
    KAKUNA = 14,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Beedrill_(Pokémon) | Source} */
    BEEDRILL = 15,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pidgey_(Pokémon) | Source} */
    PIDGEY = 16,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pidgeotto_(Pokémon) | Source} */
    PIDGEOTTO = 17,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pidgeot_(Pokémon) | Source} */
    PIDGEOT = 18,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rattata_(Pokémon) | Source} */
    RATTATA = 19,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Raticate_(Pokémon) | Source} */
    RATICATE = 20,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spearow_(Pokémon) | Source} */
    SPEAROW = 21,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fearow_(Pokémon) | Source} */
    FEAROW = 22,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pokémon) | Source} */
    EKANS = 23,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Arbok_(Pokémon) | Source} */
    ARBOK = 24,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pokémon) | Source} */
    PIKACHU = 25,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Raichu_(Pokémon) | Source} */
    RAICHU = 26,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sandshrew_(Pokémon) | Source} */
    SANDSHREW = 27,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sandslash_(Pokémon) | Source} */
    SANDSLASH = 28,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nidoran_F_(Pokémon) | Source} */
    NIDORAN_F = 29,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nidorina_(Pokémon) | Source} */
    NIDORINA = 30,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nidoqueen_(Pokémon) | Source} */
    NIDOQUEEN = 31,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nidoran_M_(Pokémon) | Source} */
    NIDORAN_M = 32,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nidorino_(Pokémon) | Source} */
    NIDORINO = 33,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nidoking_(Pokémon) | Source} */
    NIDOKING = 34,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Clefairy_(Pokémon) | Source} */
    CLEFAIRY = 35,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Clefable_(Pokémon) | Source} */
    CLEFABLE = 36,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vulpix_(Pokémon) | Source} */
    VULPIX = 37,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ninetales_(Pokémon) | Source} */
    NINETALES = 38,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(Pokémon) | Source} */
    JIGGLYPUFF = 39,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wigglytuff_(Pokémon) | Source} */
    WIGGLYTUFF = 40,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zubat_(Pokémon) | Source} */
    ZUBAT = 41,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Golbat_(Pokémon) | Source} */
    GOLBAT = 42,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Oddish_(Pokémon) | Source} */
    ODDISH = 43,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gloom_(Pokémon) | Source} */
    GLOOM = 44,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vileplume_(Pokémon) | Source} */
    VILEPLUME = 45,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Paras_(Pokémon) | Source} */
    PARAS = 46,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Parasect_(Pokémon) | Source} */
    PARASECT = 47,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Venonat_(Pokémon) | Source} */
    VENONAT = 48,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Venomoth_(Pokémon) | Source} */
    VENOMOTH = 49,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Diglett_(Pokémon) | Source} */
    DIGLETT = 50,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dugtrio_(Pokémon) | Source} */
    DUGTRIO = 51,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Meowth_(Pokémon) | Source} */
    MEOWTH = 52,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Persian_(Pokémon) | Source} */
    PERSIAN = 53,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psyduck_(Pokémon) | Source} */
    PSYDUCK = 54,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Golduck_(Pokémon) | Source} */
    GOLDUCK = 55,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mankey_(Pokémon) | Source} */
    MANKEY = 56,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Primeape_(Pokémon) | Source} */
    PRIMEAPE = 57,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Growlithe_(Pokémon) | Source} */
    GROWLITHE = 58,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Arcanine_(Pokémon) | Source} */
    ARCANINE = 59,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poliwag_(Pokémon) | Source} */
    POLIWAG = 60,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poliwhirl_(Pokémon) | Source} */
    POLIWHIRL = 61,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poliwrath_(Pokémon) | Source} */
    POLIWRATH = 62,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Abra_(Pokémon) | Source} */
    ABRA = 63,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kadabra_(Pokémon) | Source} */
    KADABRA = 64,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pokémon) | Source} */
    ALAKAZAM = 65,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Machop_(Pokémon) | Source} */
    MACHOP = 66,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Machoke_(Pokémon) | Source} */
    MACHOKE = 67,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Machamp_(Pokémon) | Source} */
    MACHAMP = 68,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bellsprout_(Pokémon) | Source} */
    BELLSPROUT = 69,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Weepinbell_(Pokémon) | Source} */
    WEEPINBELL = 70,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Victreebel_(Pokémon) | Source} */
    VICTREEBEL = 71,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tentacool_(Pokémon) | Source} */
    TENTACOOL = 72,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tentacruel_(Pokémon) | Source} */
    TENTACRUEL = 73,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Geodude_(Pokémon) | Source} */
    GEODUDE = 74,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Graveler_(Pokémon) | Source} */
    GRAVELER = 75,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Golem_(Pokémon) | Source} */
    GOLEM = 76,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ponyta_(Pokémon) | Source} */
    PONYTA = 77,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pokémon) | Source} */
    RAPIDASH = 78,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slowpoke_(Pokémon) | Source} */
    SLOWPOKE = 79,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slowbro_(Pokémon) | Source} */
    SLOWBRO = 80,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magnemite_(Pokémon) | Source} */
    MAGNEMITE = 81,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magneton_(Pokémon) | Source} */
    MAGNETON = 82,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Farfetchd_(Pokémon) | Source} */
    FARFETCHD = 83,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Doduo_(Pokémon) | Source} */
    DODUO = 84,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dodrio_(Pokémon) | Source} */
    DODRIO = 85,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Seel_(Pokémon) | Source} */
    SEEL = 86,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dewgong_(Pokémon) | Source} */
    DEWGONG = 87,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grimer_(Pokémon) | Source} */
    GRIMER = 88,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Muk_(Pokémon) | Source} */
    MUK = 89,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shellder_(Pokémon) | Source} */
    SHELLDER = 90,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cloyster_(Pokémon) | Source} */
    CLOYSTER = 91,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gastly_(Pokémon) | Source} */
    GASTLY = 92,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Haunter_(Pokémon) | Source} */
    HAUNTER = 93,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pokémon) | Source} */
    GENGAR = 94,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Onix_(Pokémon) | Source} */
    ONIX = 95,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drowzee_(Pokémon) | Source} */
    DROWZEE = 96,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hypno_(Pokémon) | Source} */
    HYPNO = 97,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Krabby_(Pokémon) | Source} */
    KRABBY = 98,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kingler_(Pokémon) | Source} */
    KINGLER = 99,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Voltorb_(Pokémon) | Source} */
    VOLTORB = 100,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Electrode_(Pokémon) | Source} */
    ELECTRODE = 101,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Exeggcute_(Pokémon) | Source} */
    EXEGGCUTE = 102,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Exeggutor_(Pokémon) | Source} */
    EXEGGUTOR = 103,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cubone_(Pokémon) | Source} */
    CUBONE = 104,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Marowak_(Pokémon) | Source} */
    MAROWAK = 105,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hitmonlee_(Pokémon) | Source} */
    HITMONLEE = 106,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hitmonchan_(Pokémon) | Source} */
    HITMONCHAN = 107,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lickitung_(Pokémon) | Source} */
    LICKITUNG = 108,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Koffing_(Pokémon) | Source} */
    KOFFING = 109,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Weezing_(Pokémon) | Source} */
    WEEZING = 110,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rhyhorn_(Pokémon) | Source} */
    RHYHORN = 111,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rhydon_(Pokémon) | Source} */
    RHYDON = 112,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chansey_(Pokémon) | Source} */
    CHANSEY = 113,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tangela_(Pokémon) | Source} */
    TANGELA = 114,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kangaskhan_(Pokémon) | Source} */
    KANGASKHAN = 115,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Horsea_(Pokémon) | Source} */
    HORSEA = 116,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Seadra_(Pokémon) | Source} */
    SEADRA = 117,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Goldeen_(Pokémon) | Source} */
    GOLDEEN = 118,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Seaking_(Pokémon) | Source} */
    SEAKING = 119,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Staryu_(Pokémon) | Source} */
    STARYU = 120,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Starmie_(Pokémon) | Source} */
    STARMIE = 121,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mr_Mime_(Pokémon) | Source} */
    MR_MIME = 122,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scyther_(Pokémon) | Source} */
    SCYTHER = 123,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Jynx_(Pokémon) | Source} */
    JYNX = 124,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Electabuzz_(Pokémon) | Source} */
    ELECTABUZZ = 125,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magmar_(Pokémon) | Source} */
    MAGMAR = 126,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pinsir_(Pokémon) | Source} */
    PINSIR = 127,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tauros_(Pokémon) | Source} */
    TAUROS = 128,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magikarp_(Pokémon) | Source} */
    MAGIKARP = 129,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gyarados_(Pokémon) | Source} */
    GYARADOS = 130,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lapras_(Pokémon) | Source} */
    LAPRAS = 131,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ditto_(Pokémon) | Source} */
    DITTO = 132,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Eevee_(Pokémon) | Source} */
    EEVEE = 133,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vaporeon_(Pokémon) | Source} */
    VAPOREON = 134,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Jolteon_(Pokémon) | Source} */
    JOLTEON = 135,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flareon_(Pokémon) | Source} */
    FLAREON = 136,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Porygon_(Pokémon) | Source} */
    PORYGON = 137,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Omanyte_(Pokémon) | Source} */
    OMANYTE = 138,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Omastar_(Pokémon) | Source} */
    OMASTAR = 139,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kabuto_(Pokémon) | Source} */
    KABUTO = 140,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kabutops_(Pokémon) | Source} */
    KABUTOPS = 141,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aerodactyl_(Pokémon) | Source} */
    AERODACTYL = 142,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pokémon) | Source} */
    SNORLAX = 143,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Articuno_(Pokémon) | Source} */
    ARTICUNO = 144,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pokémon) | Source} */
    ZAPDOS = 145,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pokémon) | Source} */
    MOLTRES = 146,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dratini_(Pokémon) | Source} */
    DRATINI = 147,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pokémon) | Source} */
    DRAGONAIR = 148,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragonite_(Pokémon) | Source} */
    DRAGONITE = 149,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mewtwo_(Pokémon) | Source} */
    MEWTWO = 150,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mew_(Pokémon) | Source} */
    MEW = 151,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chikorita_(Pokémon) | Source} */
    CHIKORITA = 152,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bayleef_(Pokémon) | Source} */
    BAYLEEF = 153,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Meganium_(Pokémon) | Source} */
    MEGANIUM = 154,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cyndaquil_(Pokémon) | Source} */
    CYNDAQUIL = 155,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Quilava_(Pokémon) | Source} */
    QUILAVA = 156,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pokémon) | Source} */
    TYPHLOSION = 157,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Totodile_(Pokémon) | Source} */
    TOTODILE = 158,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Croconaw_(Pokémon) | Source} */
    CROCONAW = 159,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Feraligatr_(Pokémon) | Source} */
    FERALIGATR = 160,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sentret_(Pokémon) | Source} */
    SENTRET = 161,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Furret_(Pokémon) | Source} */
    FURRET = 162,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hoothoot_(Pokémon) | Source} */
    HOOTHOOT = 163,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Noctowl_(Pokémon) | Source} */
    NOCTOWL = 164,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ledyba_(Pokémon) | Source} */
    LEDYBA = 165,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ledian_(Pokémon) | Source} */
    LEDIAN = 166,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spinarak_(Pokémon) | Source} */
    SPINARAK = 167,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ariados_(Pokémon) | Source} */
    ARIADOS = 168,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Crobat_(Pokémon) | Source} */
    CROBAT = 169,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chinchou_(Pokémon) | Source} */
    CHINCHOU = 170,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lanturn_(Pokémon) | Source} */
    LANTURN = 171,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pichu_(Pokémon) | Source} */
    PICHU = 172,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cleffa_(Pokémon) | Source} */
    CLEFFA = 173,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Igglybuff_(Pokémon) | Source} */
    IGGLYBUFF = 174,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Togepi_(Pokémon) | Source} */
    TOGEPI = 175,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Togetic_(Pokémon) | Source} */
    TOGETIC = 176,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Natu_(Pokémon) | Source} */
    NATU = 177,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Xatu_(Pokémon) | Source} */
    XATU = 178,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mareep_(Pokémon) | Source} */
    MAREEP = 179,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flaaffy_(Pokémon) | Source} */
    FLAAFFY = 180,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ampharos_(Pokémon) | Source} */
    AMPHAROS = 181,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bellossom_(Pokémon) | Source} */
    BELLOSSOM = 182,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Marill_(Pokémon) | Source} */
    MARILL = 183,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Azumarill_(Pokémon) | Source} */
    AZUMARILL = 184,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sudowoodo_(Pokémon) | Source} */
    SUDOWOODO = 185,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Politoed_(Pokémon) | Source} */
    POLITOED = 186,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hoppip_(Pokémon) | Source} */
    HOPPIP = 187,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Skiploom_(Pokémon) | Source} */
    SKIPLOOM = 188,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Jumpluff_(Pokémon) | Source} */
    JUMPLUFF = 189,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aipom_(Pokémon) | Source} */
    AIPOM = 190,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sunkern_(Pokémon) | Source} */
    SUNKERN = 191,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sunflora_(Pokémon) | Source} */
    SUNFLORA = 192,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Yanma_(Pokémon) | Source} */
    YANMA = 193,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wooper_(Pokémon) | Source} */
    WOOPER = 194,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Quagsire_(Pokémon) | Source} */
    QUAGSIRE = 195,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Espeon_(Pokémon) | Source} */
    ESPEON = 196,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Umbreon_(Pokémon) | Source} */
    UMBREON = 197,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Murkrow_(Pokémon) | Source} */
    MURKROW = 198,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slowking_(Pokémon) | Source} */
    SLOWKING = 199,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Misdreavus_(Pokémon) | Source} */
    MISDREAVUS = 200,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Unown_(Pokémon) | Source} */
    UNOWN = 201,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wobbuffet_(Pokémon) | Source} */
    WOBBUFFET = 202,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Girafarig_(Pokémon) | Source} */
    GIRAFARIG = 203,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pineco_(Pokémon) | Source} */
    PINECO = 204,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Forretress_(Pokémon) | Source} */
    FORRETRESS = 205,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dunsparce_(Pokémon) | Source} */
    DUNSPARCE = 206,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gligar_(Pokémon) | Source} */
    GLIGAR = 207,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Steelix_(Pokémon) | Source} */
    STEELIX = 208,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Snubbull_(Pokémon) | Source} */
    SNUBBULL = 209,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Granbull_(Pokémon) | Source} */
    GRANBULL = 210,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Qwilfish_(Pokémon) | Source} */
    QWILFISH = 211,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scizor_(Pokémon) | Source} */
    SCIZOR = 212,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shuckle_(Pokémon) | Source} */
    SHUCKLE = 213,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heracross_(Pokémon) | Source} */
    HERACROSS = 214,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sneasel_(Pokémon) | Source} */
    SNEASEL = 215,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Teddiursa_(Pokémon) | Source} */
    TEDDIURSA = 216,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ursaring_(Pokémon) | Source} */
    URSARING = 217,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slugma_(Pokémon) | Source} */
    SLUGMA = 218,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magcargo_(Pokémon) | Source} */
    MAGCARGO = 219,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swinub_(Pokémon) | Source} */
    SWINUB = 220,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Piloswine_(Pokémon) | Source} */
    PILOSWINE = 221,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Corsola_(Pokémon) | Source} */
    CORSOLA = 222,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Remoraid_(Pokémon) | Source} */
    REMORAID = 223,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Octillery_(Pokémon) | Source} */
    OCTILLERY = 224,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Delibird_(Pokémon) | Source} */
    DELIBIRD = 225,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mantine_(Pokémon) | Source} */
    MANTINE = 226,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Skarmory_(Pokémon) | Source} */
    SKARMORY = 227,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Houndour_(Pokémon) | Source} */
    HOUNDOUR = 228,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Houndoom_(Pokémon) | Source} */
    HOUNDOOM = 229,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kingdra_(Pokémon) | Source} */
    KINGDRA = 230,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Phanpy_(Pokémon) | Source} */
    PHANPY = 231,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Donphan_(Pokémon) | Source} */
    DONPHAN = 232,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Porygon2_(Pokémon) | Source} */
    PORYGON2 = 233,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stantler_(Pokémon) | Source} */
    STANTLER = 234,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Smeargle_(Pokémon) | Source} */
    SMEARGLE = 235,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tyrogue_(Pokémon) | Source} */
    TYROGUE = 236,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hitmontop_(Pokémon) | Source} */
    HITMONTOP = 237,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Smoochum_(Pokémon) | Source} */
    SMOOCHUM = 238,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Elekid_(Pokémon) | Source} */
    ELEKID = 239,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magby_(Pokémon) | Source} */
    MAGBY = 240,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Miltank_(Pokémon) | Source} */
    MILTANK = 241,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Blissey_(Pokémon) | Source} */
    BLISSEY = 242,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Raikou_(Pokémon) | Source} */
    RAIKOU = 243,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Entei_(Pokémon) | Source} */
    ENTEI = 244,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Suicune_(Pokémon) | Source} */
    SUICUNE = 245,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Larvitar_(Pokémon) | Source} */
    LARVITAR = 246,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pupitar_(Pokémon) | Source} */
    PUPITAR = 247,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tyranitar_(Pokémon) | Source} */
    TYRANITAR = 248,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lugia_(Pokémon) | Source} */
    LUGIA = 249,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ho_Oh_(Pokémon) | Source} */
    HO_OH = 250,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Celebi_(Pokémon) | Source} */
    CELEBI = 251,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Treecko_(Pokémon) | Source} */
    TREECKO = 252,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grovyle_(Pokémon) | Source} */
    GROVYLE = 253,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sceptile_(Pokémon) | Source} */
    SCEPTILE = 254,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Torchic_(Pokémon) | Source} */
    TORCHIC = 255,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Combusken_(Pokémon) | Source} */
    COMBUSKEN = 256,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Blaziken_(Pokémon) | Source} */
    BLAZIKEN = 257,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mudkip_(Pokémon) | Source} */
    MUDKIP = 258,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Marshtomp_(Pokémon) | Source} */
    MARSHTOMP = 259,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swampert_(Pokémon) | Source} */
    SWAMPERT = 260,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poochyena_(Pokémon) | Source} */
    POOCHYENA = 261,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mightyena_(Pokémon) | Source} */
    MIGHTYENA = 262,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zigzagoon_(Pokémon) | Source} */
    ZIGZAGOON = 263,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Linoone_(Pokémon) | Source} */
    LINOONE = 264,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wurmple_(Pokémon) | Source} */
    WURMPLE = 265,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Silcoon_(Pokémon) | Source} */
    SILCOON = 266,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Beautifly_(Pokémon) | Source} */
    BEAUTIFLY = 267,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cascoon_(Pokémon) | Source} */
    CASCOON = 268,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dustox_(Pokémon) | Source} */
    DUSTOX = 269,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lotad_(Pokémon) | Source} */
    LOTAD = 270,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lombre_(Pokémon) | Source} */
    LOMBRE = 271,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ludicolo_(Pokémon) | Source} */
    LUDICOLO = 272,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Seedot_(Pokémon) | Source} */
    SEEDOT = 273,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nuzleaf_(Pokémon) | Source} */
    NUZLEAF = 274,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shiftry_(Pokémon) | Source} */
    SHIFTRY = 275,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Taillow_(Pokémon) | Source} */
    TAILLOW = 276,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swellow_(Pokémon) | Source} */
    SWELLOW = 277,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wingull_(Pokémon) | Source} */
    WINGULL = 278,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pelipper_(Pokémon) | Source} */
    PELIPPER = 279,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ralts_(Pokémon) | Source} */
    RALTS = 280,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kirlia_(Pokémon) | Source} */
    KIRLIA = 281,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gardevoir_(Pokémon) | Source} */
    GARDEVOIR = 282,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Surskit_(Pokémon) | Source} */
    SURSKIT = 283,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Masquerain_(Pokémon) | Source} */
    MASQUERAIN = 284,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shroomish_(Pokémon) | Source} */
    SHROOMISH = 285,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Breloom_(Pokémon) | Source} */
    BRELOOM = 286,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slakoth_(Pokémon) | Source} */
    SLAKOTH = 287,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vigoroth_(Pokémon) | Source} */
    VIGOROTH = 288,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slaking_(Pokémon) | Source} */
    SLAKING = 289,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nincada_(Pokémon) | Source} */
    NINCADA = 290,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ninjask_(Pokémon) | Source} */
    NINJASK = 291,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pokémon) | Source} */
    SHEDINJA = 292,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Whismur_(Pokémon) | Source} */
    WHISMUR = 293,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Loudred_(Pokémon) | Source} */
    LOUDRED = 294,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Exploud_(Pokémon) | Source} */
    EXPLOUD = 295,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Makuhita_(Pokémon) | Source} */
    MAKUHITA = 296,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hariyama_(Pokémon) | Source} */
    HARIYAMA = 297,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Azurill_(Pokémon) | Source} */
    AZURILL = 298,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nosepass_(Pokémon) | Source} */
    NOSEPASS = 299,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Skitty_(Pokémon) | Source} */
    SKITTY = 300,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Delcatty_(Pokémon) | Source} */
    DELCATTY = 301,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sableye_(Pokémon) | Source} */
    SABLEYE = 302,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mawile_(Pokémon) | Source} */
    MAWILE = 303,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aron_(Pokémon) | Source} */
    ARON = 304,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lairon_(Pokémon) | Source} */
    LAIRON = 305,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aggron_(Pokémon) | Source} */
    AGGRON = 306,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Meditite_(Pokémon) | Source} */
    MEDITITE = 307,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Medicham_(Pokémon) | Source} */
    MEDICHAM = 308,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Electrike_(Pokémon) | Source} */
    ELECTRIKE = 309,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Manectric_(Pokémon) | Source} */
    MANECTRIC = 310,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Plusle_(Pokémon) | Source} */
    PLUSLE = 311,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Minun_(Pokémon) | Source} */
    MINUN = 312,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Volbeat_(Pokémon) | Source} */
    VOLBEAT = 313,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Illumise_(Pokémon) | Source} */
    ILLUMISE = 314,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Roselia_(Pokémon) | Source} */
    ROSELIA = 315,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gulpin_(Pokémon) | Source} */
    GULPIN = 316,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swalot_(Pokémon) | Source} */
    SWALOT = 317,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Carvanha_(Pokémon) | Source} */
    CARVANHA = 318,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sharpedo_(Pokémon) | Source} */
    SHARPEDO = 319,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wailmer_(Pokémon) | Source} */
    WAILMER = 320,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wailord_(Pokémon) | Source} */
    WAILORD = 321,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Numel_(Pokémon) | Source} */
    NUMEL = 322,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Camerupt_(Pokémon) | Source} */
    CAMERUPT = 323,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Torkoal_(Pokémon) | Source} */
    TORKOAL = 324,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spoink_(Pokémon) | Source} */
    SPOINK = 325,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grumpig_(Pokémon) | Source} */
    GRUMPIG = 326,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spinda_(Pokémon) | Source} */
    SPINDA = 327,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Trapinch_(Pokémon) | Source} */
    TRAPINCH = 328,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vibrava_(Pokémon) | Source} */
    VIBRAVA = 329,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flygon_(Pokémon) | Source} */
    FLYGON = 330,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cacnea_(Pokémon) | Source} */
    CACNEA = 331,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cacturne_(Pokémon) | Source} */
    CACTURNE = 332,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swablu_(Pokémon) | Source} */
    SWABLU = 333,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Altaria_(Pokémon) | Source} */
    ALTARIA = 334,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zangoose_(Pokémon) | Source} */
    ZANGOOSE = 335,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Seviper_(Pokémon) | Source} */
    SEVIPER = 336,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lunatone_(Pokémon) | Source} */
    LUNATONE = 337,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Solrock_(Pokémon) | Source} */
    SOLROCK = 338,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Barboach_(Pokémon) | Source} */
    BARBOACH = 339,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Whiscash_(Pokémon) | Source} */
    WHISCASH = 340,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Corphish_(Pokémon) | Source} */
    CORPHISH = 341,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Crawdaunt_(Pokémon) | Source} */
    CRAWDAUNT = 342,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Baltoy_(Pokémon) | Source} */
    BALTOY = 343,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Claydol_(Pokémon) | Source} */
    CLAYDOL = 344,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lileep_(Pokémon) | Source} */
    LILEEP = 345,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cradily_(Pokémon) | Source} */
    CRADILY = 346,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Anorith_(Pokémon) | Source} */
    ANORITH = 347,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Armaldo_(Pokémon) | Source} */
    ARMALDO = 348,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Feebas_(Pokémon) | Source} */
    FEEBAS = 349,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Milotic_(Pokémon) | Source} */
    MILOTIC = 350,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Castform_(Pokémon) | Source} */
    CASTFORM = 351,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kecleon_(Pokémon) | Source} */
    KECLEON = 352,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shuppet_(Pokémon) | Source} */
    SHUPPET = 353,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Banette_(Pokémon) | Source} */
    BANETTE = 354,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Duskull_(Pokémon) | Source} */
    DUSKULL = 355,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dusclops_(Pokémon) | Source} */
    DUSCLOPS = 356,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tropius_(Pokémon) | Source} */
    TROPIUS = 357,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chimecho_(Pokémon) | Source} */
    CHIMECHO = 358,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Absol_(Pokémon) | Source} */
    ABSOL = 359,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wynaut_(Pokémon) | Source} */
    WYNAUT = 360,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Snorunt_(Pokémon) | Source} */
    SNORUNT = 361,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Glalie_(Pokémon) | Source} */
    GLALIE = 362,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spheal_(Pokémon) | Source} */
    SPHEAL = 363,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sealeo_(Pokémon) | Source} */
    SEALEO = 364,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Walrein_(Pokémon) | Source} */
    WALREIN = 365,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Clamperl_(Pokémon) | Source} */
    CLAMPERL = 366,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Huntail_(Pokémon) | Source} */
    HUNTAIL = 367,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gorebyss_(Pokémon) | Source} */
    GOREBYSS = 368,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Relicanth_(Pokémon) | Source} */
    RELICANTH = 369,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Luvdisc_(Pokémon) | Source} */
    LUVDISC = 370,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bagon_(Pokémon) | Source} */
    BAGON = 371,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shelgon_(Pokémon) | Source} */
    SHELGON = 372,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Salamence_(Pokémon) | Source} */
    SALAMENCE = 373,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Beldum_(Pokémon) | Source} */
    BELDUM = 374,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Metang_(Pokémon) | Source} */
    METANG = 375,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Metagross_(Pokémon) | Source} */
    METAGROSS = 376,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Regirock_(Pokémon) | Source} */
    REGIROCK = 377,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Regice_(Pokémon) | Source} */
    REGICE = 378,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Registeel_(Pokémon) | Source} */
    REGISTEEL = 379,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Latias_(Pokémon) | Source} */
    LATIAS = 380,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Latios_(Pokémon) | Source} */
    LATIOS = 381,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kyogre_(Pokémon) | Source} */
    KYOGRE = 382,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Groudon_(Pokémon) | Source} */
    GROUDON = 383,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rayquaza_(Pokémon) | Source} */
    RAYQUAZA = 384,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Jirachi_(Pokémon) | Source} */
    JIRACHI = 385,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pokémon) | Source} */
    DEOXYS = 386,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Turtwig_(Pokémon) | Source} */
    TURTWIG = 387,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grotle_(Pokémon) | Source} */
    GROTLE = 388,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Torterra_(Pokémon) | Source} */
    TORTERRA = 389,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chimchar_(Pokémon) | Source} */
    CHIMCHAR = 390,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Monferno_(Pokémon) | Source} */
    MONFERNO = 391,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Infernape_(Pokémon) | Source} */
    INFERNAPE = 392,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Piplup_(Pokémon) | Source} */
    PIPLUP = 393,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Prinplup_(Pokémon) | Source} */
    PRINPLUP = 394,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Empoleon_(Pokémon) | Source} */
    EMPOLEON = 395,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Starly_(Pokémon) | Source} */
    STARLY = 396,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Staravia_(Pokémon) | Source} */
    STARAVIA = 397,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Staraptor_(Pokémon) | Source} */
    STARAPTOR = 398,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bidoof_(Pokémon) | Source} */
    BIDOOF = 399,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bibarel_(Pokémon) | Source} */
    BIBAREL = 400,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kricketot_(Pokémon) | Source} */
    KRICKETOT = 401,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kricketune_(Pokémon) | Source} */
    KRICKETUNE = 402,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shinx_(Pokémon) | Source} */
    SHINX = 403,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Luxio_(Pokémon) | Source} */
    LUXIO = 404,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Luxray_(Pokémon) | Source} */
    LUXRAY = 405,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Budew_(Pokémon) | Source} */
    BUDEW = 406,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Roserade_(Pokémon) | Source} */
    ROSERADE = 407,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cranidos_(Pokémon) | Source} */
    CRANIDOS = 408,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rampardos_(Pokémon) | Source} */
    RAMPARDOS = 409,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shieldon_(Pokémon) | Source} */
    SHIELDON = 410,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bastiodon_(Pokémon) | Source} */
    BASTIODON = 411,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Burmy_(Pokémon) | Source} */
    BURMY = 412,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wormadam_(Pokémon) | Source} */
    WORMADAM = 413,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mothim_(Pokémon) | Source} */
    MOTHIM = 414,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Combee_(Pokémon) | Source} */
    COMBEE = 415,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vespiquen_(Pokémon) | Source} */
    VESPIQUEN = 416,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pachirisu_(Pokémon) | Source} */
    PACHIRISU = 417,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Buizel_(Pokémon) | Source} */
    BUIZEL = 418,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Floatzel_(Pokémon) | Source} */
    FLOATZEL = 419,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cherubi_(Pokémon) | Source} */
    CHERUBI = 420,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cherrim_(Pokémon) | Source} */
    CHERRIM = 421,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shellos_(Pokémon) | Source} */
    SHELLOS = 422,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gastrodon_(Pokémon) | Source} */
    GASTRODON = 423,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ambipom_(Pokémon) | Source} */
    AMBIPOM = 424,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drifloon_(Pokémon) | Source} */
    DRIFLOON = 425,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drifblim_(Pokémon) | Source} */
    DRIFBLIM = 426,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Buneary_(Pokémon) | Source} */
    BUNEARY = 427,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lopunny_(Pokémon) | Source} */
    LOPUNNY = 428,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mismagius_(Pokémon) | Source} */
    MISMAGIUS = 429,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Honchkrow_(Pokémon) | Source} */
    HONCHKROW = 430,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Glameow_(Pokémon) | Source} */
    GLAMEOW = 431,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Purugly_(Pokémon) | Source} */
    PURUGLY = 432,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chingling_(Pokémon) | Source} */
    CHINGLING = 433,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stunky_(Pokémon) | Source} */
    STUNKY = 434,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Skuntank_(Pokémon) | Source} */
    SKUNTANK = 435,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bronzor_(Pokémon) | Source} */
    BRONZOR = 436,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bronzong_(Pokémon) | Source} */
    BRONZONG = 437,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bonsly_(Pokémon) | Source} */
    BONSLY = 438,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mime_Jr_(Pokémon) | Source} */
    MIME_JR = 439,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Happiny_(Pokémon) | Source} */
    HAPPINY = 440,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chatot_(Pokémon) | Source} */
    CHATOT = 441,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spiritomb_(Pokémon) | Source} */
    SPIRITOMB = 442,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gible_(Pokémon) | Source} */
    GIBLE = 443,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gabite_(Pokémon) | Source} */
    GABITE = 444,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Garchomp_(Pokémon) | Source} */
    GARCHOMP = 445,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Munchlax_(Pokémon) | Source} */
    MUNCHLAX = 446,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Riolu_(Pokémon) | Source} */
    RIOLU = 447,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lucario_(Pokémon) | Source} */
    LUCARIO = 448,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hippopotas_(Pokémon) | Source} */
    HIPPOPOTAS = 449,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hippowdon_(Pokémon) | Source} */
    HIPPOWDON = 450,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Skorupi_(Pokémon) | Source} */
    SKORUPI = 451,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drapion_(Pokémon) | Source} */
    DRAPION = 452,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Croagunk_(Pokémon) | Source} */
    CROAGUNK = 453,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Toxicroak_(Pokémon) | Source} */
    TOXICROAK = 454,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Carnivine_(Pokémon) | Source} */
    CARNIVINE = 455,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Finneon_(Pokémon) | Source} */
    FINNEON = 456,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lumineon_(Pokémon) | Source} */
    LUMINEON = 457,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mantyke_(Pokémon) | Source} */
    MANTYKE = 458,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Snover_(Pokémon) | Source} */
    SNOVER = 459,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Abomasnow_(Pokémon) | Source} */
    ABOMASNOW = 460,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Weavile_(Pokémon) | Source} */
    WEAVILE = 461,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magnezone_(Pokémon) | Source} */
    MAGNEZONE = 462,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lickilicky_(Pokémon) | Source} */
    LICKILICKY = 463,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rhyperior_(Pokémon) | Source} */
    RHYPERIOR = 464,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tangrowth_(Pokémon) | Source} */
    TANGROWTH = 465,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Electivire_(Pokémon) | Source} */
    ELECTIVIRE = 466,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magmortar_(Pokémon) | Source} */
    MAGMORTAR = 467,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Togekiss_(Pokémon) | Source} */
    TOGEKISS = 468,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Yanmega_(Pokémon) | Source} */
    YANMEGA = 469,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Leafeon_(Pokémon) | Source} */
    LEAFEON = 470,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Glaceon_(Pokémon) | Source} */
    GLACEON = 471,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gliscor_(Pokémon) | Source} */
    GLISCOR = 472,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mamoswine_(Pokémon) | Source} */
    MAMOSWINE = 473,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Porygon_Z_(Pokémon) | Source} */
    PORYGON_Z = 474,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gallade_(Pokémon) | Source} */
    GALLADE = 475,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Probopass_(Pokémon) | Source} */
    PROBOPASS = 476,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dusknoir_(Pokémon) | Source} */
    DUSKNOIR = 477,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Froslass_(Pokémon) | Source} */
    FROSLASS = 478,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pokémon) | Source} */
    ROTOM = 479,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Uxie_(Pokémon) | Source} */
    UXIE = 480,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mesprit_(Pokémon) | Source} */
    MESPRIT = 481,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Azelf_(Pokémon) | Source} */
    AZELF = 482,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dialga_(Pokémon) | Source} */
    DIALGA = 483,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Palkia_(Pokémon) | Source} */
    PALKIA = 484,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heatran_(Pokémon) | Source} */
    HEATRAN = 485,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Regigigas_(Pokémon) | Source} */
    REGIGIGAS = 486,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Giratina_(Pokémon) | Source} */
    GIRATINA = 487,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cresselia_(Pokémon) | Source} */
    CRESSELIA = 488,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Phione_(Pokémon) | Source} */
    PHIONE = 489,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Manaphy_(Pokémon) | Source} */
    MANAPHY = 490,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Darkrai_(Pokémon) | Source} */
    DARKRAI = 491,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shaymin_(Pokémon) | Source} */
    SHAYMIN = 492,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Arceus_(Pokémon) | Source} */
    ARCEUS = 493,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Victini_(Pokémon) | Source} */
    VICTINI = 494,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Snivy_(Pokémon) | Source} */
    SNIVY = 495,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Servine_(Pokémon) | Source} */
    SERVINE = 496,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Serperior_(Pokémon) | Source} */
    SERPERIOR = 497,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tepig_(Pokémon) | Source} */
    TEPIG = 498,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pignite_(Pokémon) | Source} */
    PIGNITE = 499,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Emboar_(Pokémon) | Source} */
    EMBOAR = 500,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Oshawott_(Pokémon) | Source} */
    OSHAWOTT = 501,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dewott_(Pokémon) | Source} */
    DEWOTT = 502,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Samurott_(Pokémon) | Source} */
    SAMUROTT = 503,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Patrat_(Pokémon) | Source} */
    PATRAT = 504,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Watchog_(Pokémon) | Source} */
    WATCHOG = 505,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lillipup_(Pokémon) | Source} */
    LILLIPUP = 506,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Herdier_(Pokémon) | Source} */
    HERDIER = 507,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stoutland_(Pokémon) | Source} */
    STOUTLAND = 508,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Purrloin_(Pokémon) | Source} */
    PURRLOIN = 509,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Liepard_(Pokémon) | Source} */
    LIEPARD = 510,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pansage_(Pokémon) | Source} */
    PANSAGE = 511,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Simisage_(Pokémon) | Source} */
    SIMISAGE = 512,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pansear_(Pokémon) | Source} */
    PANSEAR = 513,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Simisear_(Pokémon) | Source} */
    SIMISEAR = 514,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Panpour_(Pokémon) | Source} */
    PANPOUR = 515,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Simipour_(Pokémon) | Source} */
    SIMIPOUR = 516,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Munna_(Pokémon) | Source} */
    MUNNA = 517,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Musharna_(Pokémon) | Source} */
    MUSHARNA = 518,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pidove_(Pokémon) | Source} */
    PIDOVE = 519,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tranquill_(Pokémon) | Source} */
    TRANQUILL = 520,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Unfezant_(Pokémon) | Source} */
    UNFEZANT = 521,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Blitzle_(Pokémon) | Source} */
    BLITZLE = 522,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zebstrika_(Pokémon) | Source} */
    ZEBSTRIKA = 523,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Roggenrola_(Pokémon) | Source} */
    ROGGENROLA = 524,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Boldore_(Pokémon) | Source} */
    BOLDORE = 525,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gigalith_(Pokémon) | Source} */
    GIGALITH = 526,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Woobat_(Pokémon) | Source} */
    WOOBAT = 527,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swoobat_(Pokémon) | Source} */
    SWOOBAT = 528,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drilbur_(Pokémon) | Source} */
    DRILBUR = 529,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Excadrill_(Pokémon) | Source} */
    EXCADRILL = 530,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Audino_(Pokémon) | Source} */
    AUDINO = 531,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Timburr_(Pokémon) | Source} */
    TIMBURR = 532,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gurdurr_(Pokémon) | Source} */
    GURDURR = 533,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Conkeldurr_(Pokémon) | Source} */
    CONKELDURR = 534,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tympole_(Pokémon) | Source} */
    TYMPOLE = 535,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Palpitoad_(Pokémon) | Source} */
    PALPITOAD = 536,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Seismitoad_(Pokémon) | Source} */
    SEISMITOAD = 537,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Throh_(Pokémon) | Source} */
    THROH = 538,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sawk_(Pokémon) | Source} */
    SAWK = 539,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sewaddle_(Pokémon) | Source} */
    SEWADDLE = 540,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swadloon_(Pokémon) | Source} */
    SWADLOON = 541,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Leavanny_(Pokémon) | Source} */
    LEAVANNY = 542,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Venipede_(Pokémon) | Source} */
    VENIPEDE = 543,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Whirlipede_(Pokémon) | Source} */
    WHIRLIPEDE = 544,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scolipede_(Pokémon) | Source} */
    SCOLIPEDE = 545,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cottonee_(Pokémon) | Source} */
    COTTONEE = 546,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Whimsicott_(Pokémon) | Source} */
    WHIMSICOTT = 547,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Petilil_(Pokémon) | Source} */
    PETILIL = 548,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lilligant_(Pokémon) | Source} */
    LILLIGANT = 549,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Basculin_(Pokémon) | Source} */
    BASCULIN = 550,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sandile_(Pokémon) | Source} */
    SANDILE = 551,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Krokorok_(Pokémon) | Source} */
    KROKOROK = 552,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Krookodile_(Pokémon) | Source} */
    KROOKODILE = 553,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Darumaka_(Pokémon) | Source} */
    DARUMAKA = 554,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Darmanitan_(Pokémon) | Source} */
    DARMANITAN = 555,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Maractus_(Pokémon) | Source} */
    MARACTUS = 556,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dwebble_(Pokémon) | Source} */
    DWEBBLE = 557,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Crustle_(Pokémon) | Source} */
    CRUSTLE = 558,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scraggy_(Pokémon) | Source} */
    SCRAGGY = 559,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scrafty_(Pokémon) | Source} */
    SCRAFTY = 560,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sigilyph_(Pokémon) | Source} */
    SIGILYPH = 561,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Yamask_(Pokémon) | Source} */
    YAMASK = 562,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cofagrigus_(Pokémon) | Source} */
    COFAGRIGUS = 563,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tirtouga_(Pokémon) | Source} */
    TIRTOUGA = 564,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Carracosta_(Pokémon) | Source} */
    CARRACOSTA = 565,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Archen_(Pokémon) | Source} */
    ARCHEN = 566,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Archeops_(Pokémon) | Source} */
    ARCHEOPS = 567,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Trubbish_(Pokémon) | Source} */
    TRUBBISH = 568,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Garbodor_(Pokémon) | Source} */
    GARBODOR = 569,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zorua_(Pokémon) | Source} */
    ZORUA = 570,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zoroark_(Pokémon) | Source} */
    ZOROARK = 571,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Minccino_(Pokémon) | Source} */
    MINCCINO = 572,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cinccino_(Pokémon) | Source} */
    CINCCINO = 573,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gothita_(Pokémon) | Source} */
    GOTHITA = 574,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gothorita_(Pokémon) | Source} */
    GOTHORITA = 575,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gothitelle_(Pokémon) | Source} */
    GOTHITELLE = 576,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Solosis_(Pokémon) | Source} */
    SOLOSIS = 577,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Duosion_(Pokémon) | Source} */
    DUOSION = 578,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Reuniclus_(Pokémon) | Source} */
    REUNICLUS = 579,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ducklett_(Pokémon) | Source} */
    DUCKLETT = 580,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swanna_(Pokémon) | Source} */
    SWANNA = 581,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vanillite_(Pokémon) | Source} */
    VANILLITE = 582,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vanillish_(Pokémon) | Source} */
    VANILLISH = 583,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vanilluxe_(Pokémon) | Source} */
    VANILLUXE = 584,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Deerling_(Pokémon) | Source} */
    DEERLING = 585,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sawsbuck_(Pokémon) | Source} */
    SAWSBUCK = 586,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Emolga_(Pokémon) | Source} */
    EMOLGA = 587,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Karrablast_(Pokémon) | Source} */
    KARRABLAST = 588,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Escavalier_(Pokémon) | Source} */
    ESCAVALIER = 589,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Foongus_(Pokémon) | Source} */
    FOONGUS = 590,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Amoonguss_(Pokémon) | Source} */
    AMOONGUSS = 591,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Frillish_(Pokémon) | Source} */
    FRILLISH = 592,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Jellicent_(Pokémon) | Source} */
    JELLICENT = 593,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Alomomola_(Pokémon) | Source} */
    ALOMOMOLA = 594,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Joltik_(Pokémon) | Source} */
    JOLTIK = 595,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Galvantula_(Pokémon) | Source} */
    GALVANTULA = 596,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ferroseed_(Pokémon) | Source} */
    FERROSEED = 597,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ferrothorn_(Pokémon) | Source} */
    FERROTHORN = 598,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Klink_(Pokémon) | Source} */
    KLINK = 599,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Klang_(Pokémon) | Source} */
    KLANG = 600,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Klinklang_(Pokémon) | Source} */
    KLINKLANG = 601,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tynamo_(Pokémon) | Source} */
    TYNAMO = 602,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Eelektrik_(Pokémon) | Source} */
    EELEKTRIK = 603,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Eelektross_(Pokémon) | Source} */
    EELEKTROSS = 604,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Elgyem_(Pokémon) | Source} */
    ELGYEM = 605,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Beheeyem_(Pokémon) | Source} */
    BEHEEYEM = 606,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Litwick_(Pokémon) | Source} */
    LITWICK = 607,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lampent_(Pokémon) | Source} */
    LAMPENT = 608,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chandelure_(Pokémon) | Source} */
    CHANDELURE = 609,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Axew_(Pokémon) | Source} */
    AXEW = 610,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fraxure_(Pokémon) | Source} */
    FRAXURE = 611,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Haxorus_(Pokémon) | Source} */
    HAXORUS = 612,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cubchoo_(Pokémon) | Source} */
    CUBCHOO = 613,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Beartic_(Pokémon) | Source} */
    BEARTIC = 614,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cryogonal_(Pokémon) | Source} */
    CRYOGONAL = 615,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shelmet_(Pokémon) | Source} */
    SHELMET = 616,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Accelgor_(Pokémon) | Source} */
    ACCELGOR = 617,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stunfisk_(Pokémon) | Source} */
    STUNFISK = 618,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mienfoo_(Pokémon) | Source} */
    MIENFOO = 619,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mienshao_(Pokémon) | Source} */
    MIENSHAO = 620,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Druddigon_(Pokémon) | Source} */
    DRUDDIGON = 621,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Golett_(Pokémon) | Source} */
    GOLETT = 622,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Golurk_(Pokémon) | Source} */
    GOLURK = 623,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pawniard_(Pokémon) | Source} */
    PAWNIARD = 624,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bisharp_(Pokémon) | Source} */
    BISHARP = 625,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bouffalant_(Pokémon) | Source} */
    BOUFFALANT = 626,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rufflet_(Pokémon) | Source} */
    RUFFLET = 627,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Braviary_(Pokémon) | Source} */
    BRAVIARY = 628,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vullaby_(Pokémon) | Source} */
    VULLABY = 629,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mandibuzz_(Pokémon) | Source} */
    MANDIBUZZ = 630,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heatmor_(Pokémon) | Source} */
    HEATMOR = 631,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Durant_(Pokémon) | Source} */
    DURANT = 632,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Deino_(Pokémon) | Source} */
    DEINO = 633,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zweilous_(Pokémon) | Source} */
    ZWEILOUS = 634,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hydreigon_(Pokémon) | Source} */
    HYDREIGON = 635,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Larvesta_(Pokémon) | Source} */
    LARVESTA = 636,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Volcarona_(Pokémon) | Source} */
    VOLCARONA = 637,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cobalion_(Pokémon) | Source} */
    COBALION = 638,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Terrakion_(Pokémon) | Source} */
    TERRAKION = 639,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Virizion_(Pokémon) | Source} */
    VIRIZION = 640,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tornadus_(Pokémon) | Source} */
    TORNADUS = 641,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thundurus_(Pokémon) | Source} */
    THUNDURUS = 642,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pokémon) | Source} */
    RESHIRAM = 643,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zekrom_(Pokémon) | Source} */
    ZEKROM = 644,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Landorus_(Pokémon) | Source} */
    LANDORUS = 645,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kyurem_(Pokémon) | Source} */
    KYUREM = 646,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Keldeo_(Pokémon) | Source} */
    KELDEO = 647,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Meloetta_(Pokémon) | Source} */
    MELOETTA = 648,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Genesect_(Pokémon) | Source} */
    GENESECT = 649,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chespin_(Pokémon) | Source} */
    CHESPIN = 650,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Quilladin_(Pokémon) | Source} */
    QUILLADIN = 651,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chesnaught_(Pokémon) | Source} */
    CHESNAUGHT = 652,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fennekin_(Pokémon) | Source} */
    FENNEKIN = 653,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Braixen_(Pokémon) | Source} */
    BRAIXEN = 654,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Delphox_(Pokémon) | Source} */
    DELPHOX = 655,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Froakie_(Pokémon) | Source} */
    FROAKIE = 656,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Frogadier_(Pokémon) | Source} */
    FROGADIER = 657,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Greninja_(Pokémon) | Source} */
    GRENINJA = 658,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bunnelby_(Pokémon) | Source} */
    BUNNELBY = 659,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Diggersby_(Pokémon) | Source} */
    DIGGERSBY = 660,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fletchling_(Pokémon) | Source} */
    FLETCHLING = 661,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fletchinder_(Pokémon) | Source} */
    FLETCHINDER = 662,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Talonflame_(Pokémon) | Source} */
    TALONFLAME = 663,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scatterbug_(Pokémon) | Source} */
    SCATTERBUG = 664,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spewpa_(Pokémon) | Source} */
    SPEWPA = 665,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vivillon_(Pokémon) | Source} */
    VIVILLON = 666,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Litleo_(Pokémon) | Source} */
    LITLEO = 667,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pyroar_(Pokémon) | Source} */
    PYROAR = 668,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flabebe_(Pokémon) | Source} */
    FLABEBE = 669,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Floette_(Pokémon) | Source} */
    FLOETTE = 670,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Florges_(Pokémon) | Source} */
    FLORGES = 671,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Skiddo_(Pokémon) | Source} */
    SKIDDO = 672,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gogoat_(Pokémon) | Source} */
    GOGOAT = 673,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pancham_(Pokémon) | Source} */
    PANCHAM = 674,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pangoro_(Pokémon) | Source} */
    PANGORO = 675,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Furfrou_(Pokémon) | Source} */
    FURFROU = 676,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Espurr_(Pokémon) | Source} */
    ESPURR = 677,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Meowstic_(Pokémon) | Source} */
    MEOWSTIC = 678,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Honedge_(Pokémon) | Source} */
    HONEDGE = 679,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Doublade_(Pokémon) | Source} */
    DOUBLADE = 680,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aegislash_(Pokémon) | Source} */
    AEGISLASH = 681,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spritzee_(Pokémon) | Source} */
    SPRITZEE = 682,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aromatisse_(Pokémon) | Source} */
    AROMATISSE = 683,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swirlix_(Pokémon) | Source} */
    SWIRLIX = 684,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slurpuff_(Pokémon) | Source} */
    SLURPUFF = 685,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Inkay_(Pokémon) | Source} */
    INKAY = 686,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Malamar_(Pokémon) | Source} */
    MALAMAR = 687,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Binacle_(Pokémon) | Source} */
    BINACLE = 688,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Barbaracle_(Pokémon) | Source} */
    BARBARACLE = 689,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Skrelp_(Pokémon) | Source} */
    SKRELP = 690,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragalge_(Pokémon) | Source} */
    DRAGALGE = 691,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Clauncher_(Pokémon) | Source} */
    CLAUNCHER = 692,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Clawitzer_(Pokémon) | Source} */
    CLAWITZER = 693,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Helioptile_(Pokémon) | Source} */
    HELIOPTILE = 694,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heliolisk_(Pokémon) | Source} */
    HELIOLISK = 695,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tyrunt_(Pokémon) | Source} */
    TYRUNT = 696,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tyrantrum_(Pokémon) | Source} */
    TYRANTRUM = 697,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Amaura_(Pokémon) | Source} */
    AMAURA = 698,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aurorus_(Pokémon) | Source} */
    AURORUS = 699,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sylveon_(Pokémon) | Source} */
    SYLVEON = 700,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hawlucha_(Pokémon) | Source} */
    HAWLUCHA = 701,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dedenne_(Pokémon) | Source} */
    DEDENNE = 702,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Carbink_(Pokémon) | Source} */
    CARBINK = 703,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Goomy_(Pokémon) | Source} */
    GOOMY = 704,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sliggoo_(Pokémon) | Source} */
    SLIGGOO = 705,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Goodra_(Pokémon) | Source} */
    GOODRA = 706,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Klefki_(Pokémon) | Source} */
    KLEFKI = 707,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Phantump_(Pokémon) | Source} */
    PHANTUMP = 708,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Trevenant_(Pokémon) | Source} */
    TREVENANT = 709,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pumpkaboo_(Pokémon) | Source} */
    PUMPKABOO = 710,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gourgeist_(Pokémon) | Source} */
    GOURGEIST = 711,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bergmite_(Pokémon) | Source} */
    BERGMITE = 712,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Avalugg_(Pokémon) | Source} */
    AVALUGG = 713,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Noibat_(Pokémon) | Source} */
    NOIBAT = 714,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Noivern_(Pokémon) | Source} */
    NOIVERN = 715,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Xerneas_(Pokémon) | Source} */
    XERNEAS = 716,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Yveltal_(Pokémon) | Source} */
    YVELTAL = 717,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zygarde_(Pokémon) | Source} */
    ZYGARDE = 718,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Diancie_(Pokémon) | Source} */
    DIANCIE = 719,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hoopa_(Pokémon) | Source} */
    HOOPA = 720,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Volcanion_(Pokémon) | Source} */
    VOLCANION = 721,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rowlet_(Pokémon) | Source} */
    ROWLET = 722,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dartrix_(Pokémon) | Source} */
    DARTRIX = 723,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Decidueye_(Pokémon) | Source} */
    DECIDUEYE = 724,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Litten_(Pokémon) | Source} */
    LITTEN = 725,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Torracat_(Pokémon) | Source} */
    TORRACAT = 726,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Incineroar_(Pokémon) | Source} */
    INCINEROAR = 727,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Popplio_(Pokémon) | Source} */
    POPPLIO = 728,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Brionne_(Pokémon) | Source} */
    BRIONNE = 729,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Primarina_(Pokémon) | Source} */
    PRIMARINA = 730,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pikipek_(Pokémon) | Source} */
    PIKIPEK = 731,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Trumbeak_(Pokémon) | Source} */
    TRUMBEAK = 732,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Toucannon_(Pokémon) | Source} */
    TOUCANNON = 733,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Yungoos_(Pokémon) | Source} */
    YUNGOOS = 734,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gumshoos_(Pokémon) | Source} */
    GUMSHOOS = 735,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grubbin_(Pokémon) | Source} */
    GRUBBIN = 736,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Charjabug_(Pokémon) | Source} */
    CHARJABUG = 737,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vikavolt_(Pokémon) | Source} */
    VIKAVOLT = 738,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Crabrawler_(Pokémon) | Source} */
    CRABRAWLER = 739,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Crabominable_(Pokémon) | Source} */
    CRABOMINABLE = 740,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Oricorio_(Pokémon) | Source} */
    ORICORIO = 741,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cutiefly_(Pokémon) | Source} */
    CUTIEFLY = 742,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ribombee_(Pokémon) | Source} */
    RIBOMBEE = 743,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rockruff_(Pokémon) | Source} */
    ROCKRUFF = 744,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lycanroc_(Pokémon) | Source} */
    LYCANROC = 745,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wishiwashi_(Pokémon) | Source} */
    WISHIWASHI = 746,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mareanie_(Pokémon) | Source} */
    MAREANIE = 747,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Toxapex_(Pokémon) | Source} */
    TOXAPEX = 748,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mudbray_(Pokémon) | Source} */
    MUDBRAY = 749,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mudsdale_(Pokémon) | Source} */
    MUDSDALE = 750,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dewpider_(Pokémon) | Source} */
    DEWPIDER = 751,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Araquanid_(Pokémon) | Source} */
    ARAQUANID = 752,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fomantis_(Pokémon) | Source} */
    FOMANTIS = 753,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lurantis_(Pokémon) | Source} */
    LURANTIS = 754,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Morelull_(Pokémon) | Source} */
    MORELULL = 755,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shiinotic_(Pokémon) | Source} */
    SHIINOTIC = 756,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Salandit_(Pokémon) | Source} */
    SALANDIT = 757,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Salazzle_(Pokémon) | Source} */
    SALAZZLE = 758,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stufful_(Pokémon) | Source} */
    STUFFUL = 759,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bewear_(Pokémon) | Source} */
    BEWEAR = 760,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bounsweet_(Pokémon) | Source} */
    BOUNSWEET = 761,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Steenee_(Pokémon) | Source} */
    STEENEE = 762,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tsareena_(Pokémon) | Source} */
    TSAREENA = 763,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Comfey_(Pokémon) | Source} */
    COMFEY = 764,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Oranguru_(Pokémon) | Source} */
    ORANGURU = 765,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Passimian_(Pokémon) | Source} */
    PASSIMIAN = 766,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wimpod_(Pokémon) | Source} */
    WIMPOD = 767,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Golisopod_(Pokémon) | Source} */
    GOLISOPOD = 768,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sandygast_(Pokémon) | Source} */
    SANDYGAST = 769,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Palossand_(Pokémon) | Source} */
    PALOSSAND = 770,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pyukumuku_(Pokémon) | Source} */
    PYUKUMUKU = 771,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Type_Null_(Pokémon) | Source} */
    TYPE_NULL = 772,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Silvally_(Pokémon) | Source} */
    SILVALLY = 773,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Minior_(Pokémon) | Source} */
    MINIOR = 774,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Komala_(Pokémon) | Source} */
    KOMALA = 775,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Turtonator_(Pokémon) | Source} */
    TURTONATOR = 776,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Togedemaru_(Pokémon) | Source} */
    TOGEDEMARU = 777,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mimikyu_(Pokémon) | Source} */
    MIMIKYU = 778,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bruxish_(Pokémon) | Source} */
    BRUXISH = 779,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drampa_(Pokémon) | Source} */
    DRAMPA = 780,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dhelmise_(Pokémon) | Source} */
    DHELMISE = 781,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Jangmo_O_(Pokémon) | Source} */
    JANGMO_O = 782,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hakamo_O_(Pokémon) | Source} */
    HAKAMO_O = 783,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kommo_O_(Pokémon) | Source} */
    KOMMO_O = 784,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tapu_Koko_(Pokémon) | Source} */
    TAPU_KOKO = 785,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tapu_Lele_(Pokémon) | Source} */
    TAPU_LELE = 786,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tapu_Bulu_(Pokémon) | Source} */
    TAPU_BULU = 787,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tapu_Fini_(Pokémon) | Source} */
    TAPU_FINI = 788,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cosmog_(Pokémon) | Source} */
    COSMOG = 789,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cosmoem_(Pokémon) | Source} */
    COSMOEM = 790,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Solgaleo_(Pokémon) | Source} */
    SOLGALEO = 791,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lunala_(Pokémon) | Source} */
    LUNALA = 792,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nihilego_(Pokémon) | Source} */
    NIHILEGO = 793,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Buzzwole_(Pokémon) | Source} */
    BUZZWOLE = 794,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pheromosa_(Pokémon) | Source} */
    PHEROMOSA = 795,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Xurkitree_(Pokémon) | Source} */
    XURKITREE = 796,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Celesteela_(Pokémon) | Source} */
    CELESTEELA = 797,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kartana_(Pokémon) | Source} */
    KARTANA = 798,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Guzzlord_(Pokémon) | Source} */
    GUZZLORD = 799,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Necrozma_(Pokémon) | Source} */
    NECROZMA = 800,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magearna_(Pokémon) | Source} */
    MAGEARNA = 801,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Marshadow_(Pokémon) | Source} */
    MARSHADOW = 802,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poipole_(Pokémon) | Source} */
    POIPOLE = 803,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Naganadel_(Pokémon) | Source} */
    NAGANADEL = 804,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stakataka_(Pokémon) | Source} */
    STAKATAKA = 805,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Blacephalon_(Pokémon) | Source} */
    BLACEPHALON = 806,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zeraora_(Pokémon) | Source} */
    ZERAORA = 807,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Meltan_(Pokémon) | Source} */
    MELTAN = 808,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Melmetal_(Pokémon) | Source} */
    MELMETAL = 809,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grookey_(Pokémon) | Source} */
    GROOKEY = 810,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thwackey_(Pokémon) | Source} */
    THWACKEY = 811,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rillaboom_(Pokémon) | Source} */
    RILLABOOM = 812,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scorbunny_(Pokémon) | Source} */
    SCORBUNNY = 813,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Raboot_(Pokémon) | Source} */
    RABOOT = 814,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cinderace_(Pokémon) | Source} */
    CINDERACE = 815,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sobble_(Pokémon) | Source} */
    SOBBLE = 816,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drizzile_(Pokémon) | Source} */
    DRIZZILE = 817,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Inteleon_(Pokémon) | Source} */
    INTELEON = 818,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Skwovet_(Pokémon) | Source} */
    SKWOVET = 819,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Greedent_(Pokémon) | Source} */
    GREEDENT = 820,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rookidee_(Pokémon) | Source} */
    ROOKIDEE = 821,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Corvisquire_(Pokémon) | Source} */
    CORVISQUIRE = 822,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Corviknight_(Pokémon) | Source} */
    CORVIKNIGHT = 823,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Blipbug_(Pokémon) | Source} */
    BLIPBUG = 824,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dottler_(Pokémon) | Source} */
    DOTTLER = 825,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Orbeetle_(Pokémon) | Source} */
    ORBEETLE = 826,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nickit_(Pokémon) | Source} */
    NICKIT = 827,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thievul_(Pokémon) | Source} */
    THIEVUL = 828,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gossifleur_(Pokémon) | Source} */
    GOSSIFLEUR = 829,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Eldegoss_(Pokémon) | Source} */
    ELDEGOSS = 830,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wooloo_(Pokémon) | Source} */
    WOOLOO = 831,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dubwool_(Pokémon) | Source} */
    DUBWOOL = 832,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chewtle_(Pokémon) | Source} */
    CHEWTLE = 833,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drednaw_(Pokémon) | Source} */
    DREDNAW = 834,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Yamper_(Pokémon) | Source} */
    YAMPER = 835,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Boltund_(Pokémon) | Source} */
    BOLTUND = 836,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rolycoly_(Pokémon) | Source} */
    ROLYCOLY = 837,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Carkol_(Pokémon) | Source} */
    CARKOL = 838,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Coalossal_(Pokémon) | Source} */
    COALOSSAL = 839,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Applin_(Pokémon) | Source} */
    APPLIN = 840,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flapple_(Pokémon) | Source} */
    FLAPPLE = 841,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Appletun_(Pokémon) | Source} */
    APPLETUN = 842,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Silicobra_(Pokémon) | Source} */
    SILICOBRA = 843,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sandaconda_(Pokémon) | Source} */
    SANDACONDA = 844,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cramorant_(Pokémon) | Source} */
    CRAMORANT = 845,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Arrokuda_(Pokémon) | Source} */
    ARROKUDA = 846,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Barraskewda_(Pokémon) | Source} */
    BARRASKEWDA = 847,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Toxel_(Pokémon) | Source} */
    TOXEL = 848,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Toxtricity_(Pokémon) | Source} */
    TOXTRICITY = 849,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sizzlipede_(Pokémon) | Source} */
    SIZZLIPEDE = 850,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Centiskorch_(Pokémon) | Source} */
    CENTISKORCH = 851,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Clobbopus_(Pokémon) | Source} */
    CLOBBOPUS = 852,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grapploct_(Pokémon) | Source} */
    GRAPPLOCT = 853,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sinistea_(Pokémon) | Source} */
    SINISTEA = 854,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Polteageist_(Pokémon) | Source} */
    POLTEAGEIST = 855,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hatenna_(Pokémon) | Source} */
    HATENNA = 856,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hattrem_(Pokémon) | Source} */
    HATTREM = 857,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hatterene_(Pokémon) | Source} */
    HATTERENE = 858,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Impidimp_(Pokémon) | Source} */
    IMPIDIMP = 859,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Morgrem_(Pokémon) | Source} */
    MORGREM = 860,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grimmsnarl_(Pokémon) | Source} */
    GRIMMSNARL = 861,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Obstagoon_(Pokémon) | Source} */
    OBSTAGOON = 862,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Perrserker_(Pokémon) | Source} */
    PERRSERKER = 863,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cursola_(Pokémon) | Source} */
    CURSOLA = 864,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sirfetchd_(Pokémon) | Source} */
    SIRFETCHD = 865,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mr_Rime_(Pokémon) | Source} */
    MR_RIME = 866,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Runerigus_(Pokémon) | Source} */
    RUNERIGUS = 867,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Milcery_(Pokémon) | Source} */
    MILCERY = 868,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Alcremie_(Pokémon) | Source} */
    ALCREMIE = 869,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Falinks_(Pokémon) | Source} */
    FALINKS = 870,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pincurchin_(Pokémon) | Source} */
    PINCURCHIN = 871,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Snom_(Pokémon) | Source} */
    SNOM = 872,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Frosmoth_(Pokémon) | Source} */
    FROSMOTH = 873,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stonjourner_(Pokémon) | Source} */
    STONJOURNER = 874,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Eiscue_(Pokémon) | Source} */
    EISCUE = 875,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Indeedee_(Pokémon) | Source} */
    INDEEDEE = 876,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Morpeko_(Pokémon) | Source} */
    MORPEKO = 877,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cufant_(Pokémon) | Source} */
    CUFANT = 878,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Copperajah_(Pokémon) | Source} */
    COPPERAJAH = 879,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dracozolt_(Pokémon) | Source} */
    DRACOZOLT = 880,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Arctozolt_(Pokémon) | Source} */
    ARCTOZOLT = 881,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dracovish_(Pokémon) | Source} */
    DRACOVISH = 882,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Arctovish_(Pokémon) | Source} */
    ARCTOVISH = 883,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Duraludon_(Pokémon) | Source} */
    DURALUDON = 884,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dreepy_(Pokémon) | Source} */
    DREEPY = 885,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drakloak_(Pokémon) | Source} */
    DRAKLOAK = 886,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragapult_(Pokémon) | Source} */
    DRAGAPULT = 887,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zacian_(Pokémon) | Source} */
    ZACIAN = 888,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zamazenta_(Pokémon) | Source} */
    ZAMAZENTA = 889,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Eternatus_(Pokémon) | Source} */
    ETERNATUS = 890,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kubfu_(Pokémon) | Source} */
    KUBFU = 891,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Urshifu_(Pokémon) | Source} */
    URSHIFU = 892,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zarude_(Pokémon) | Source} */
    ZARUDE = 893,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Regieleki_(Pokémon) | Source} */
    REGIELEKI = 894,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Regidrago_(Pokémon) | Source} */
    REGIDRAGO = 895,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Glastrier_(Pokémon) | Source} */
    GLASTRIER = 896,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spectrier_(Pokémon) | Source} */
    SPECTRIER = 897,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Calyrex_(Pokémon) | Source} */
    CALYREX = 898,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wyrdeer_(Pokémon) | Source} */
    WYRDEER = 899,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kleavor_(Pokémon) | Source} */
    KLEAVOR = 900,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ursaluna_(Pokémon) | Source} */
    URSALUNA = 901,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Basculegion_(Pokémon) | Source} */
    BASCULEGION = 902,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sneasler_(Pokémon) | Source} */
    SNEASLER = 903,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Overqwil_(Pokémon) | Source} */
    OVERQWIL = 904,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Enamorus_(Pokémon) | Source} */
    ENAMORUS = 905,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sprigatito_(Pokémon) | Source} */
    SPRIGATITO = 906,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Floragato_(Pokémon) | Source} */
    FLORAGATO = 907,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Meowscarada_(Pokémon) | Source} */
    MEOWSCARADA = 908,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fuecoco_(Pokémon) | Source} */
    FUECOCO = 909,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Crocalor_(Pokémon) | Source} */
    CROCALOR = 910,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Skeledirge_(Pokémon) | Source} */
    SKELEDIRGE = 911,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Quaxly_(Pokémon) | Source} */
    QUAXLY = 912,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Quaxwell_(Pokémon) | Source} */
    QUAXWELL = 913,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Quaquaval_(Pokémon) | Source} */
    QUAQUAVAL = 914,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lechonk_(Pokémon) | Source} */
    LECHONK = 915,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Oinkologne_(Pokémon) | Source} */
    OINKOLOGNE = 916,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tarountula_(Pokémon) | Source} */
    TAROUNTULA = 917,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Spidops_(Pokémon) | Source} */
    SPIDOPS = 918,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nymble_(Pokémon) | Source} */
    NYMBLE = 919,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lokix_(Pokémon) | Source} */
    LOKIX = 920,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pawmi_(Pokémon) | Source} */
    PAWMI = 921,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pawmo_(Pokémon) | Source} */
    PAWMO = 922,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pawmot_(Pokémon) | Source} */
    PAWMOT = 923,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tandemaus_(Pokémon) | Source} */
    TANDEMAUS = 924,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Maushold_(Pokémon) | Source} */
    MAUSHOLD = 925,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fidough_(Pokémon) | Source} */
    FIDOUGH = 926,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dachsbun_(Pokémon) | Source} */
    DACHSBUN = 927,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Smoliv_(Pokémon) | Source} */
    SMOLIV = 928,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dolliv_(Pokémon) | Source} */
    DOLLIV = 929,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Arboliva_(Pokémon) | Source} */
    ARBOLIVA = 930,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Squawkabilly_(Pokémon) | Source} */
    SQUAWKABILLY = 931,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Nacli_(Pokémon) | Source} */
    NACLI = 932,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Naclstack_(Pokémon) | Source} */
    NACLSTACK = 933,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Garganacl_(Pokémon) | Source} */
    GARGANACL = 934,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Charcadet_(Pokémon) | Source} */
    CHARCADET = 935,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Armarouge_(Pokémon) | Source} */
    ARMAROUGE = 936,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ceruledge_(Pokémon) | Source} */
    CERULEDGE = 937,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tadbulb_(Pokémon) | Source} */
    TADBULB = 938,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bellibolt_(Pokémon) | Source} */
    BELLIBOLT = 939,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wattrel_(Pokémon) | Source} */
    WATTREL = 940,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kilowattrel_(Pokémon) | Source} */
    KILOWATTREL = 941,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Maschiff_(Pokémon) | Source} */
    MASCHIFF = 942,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mabosstiff_(Pokémon) | Source} */
    MABOSSTIFF = 943,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shroodle_(Pokémon) | Source} */
    SHROODLE = 944,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grafaiai_(Pokémon) | Source} */
    GRAFAIAI = 945,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bramblin_(Pokémon) | Source} */
    BRAMBLIN = 946,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Brambleghast_(Pokémon) | Source} */
    BRAMBLEGHAST = 947,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Toedscool_(Pokémon) | Source} */
    TOEDSCOOL = 948,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Toedscruel_(Pokémon) | Source} */
    TOEDSCRUEL = 949,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Klawf_(Pokémon) | Source} */
    KLAWF = 950,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Capsakid_(Pokémon) | Source} */
    CAPSAKID = 951,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scovillain_(Pokémon) | Source} */
    SCOVILLAIN = 952,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rellor_(Pokémon) | Source} */
    RELLOR = 953,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rabsca_(Pokémon) | Source} */
    RABSCA = 954,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flittle_(Pokémon) | Source} */
    FLITTLE = 955,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Espathra_(Pokémon) | Source} */
    ESPATHRA = 956,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tinkatink_(Pokémon) | Source} */
    TINKATINK = 957,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tinkatuff_(Pokémon) | Source} */
    TINKATUFF = 958,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tinkaton_(Pokémon) | Source} */
    TINKATON = 959,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wiglett_(Pokémon) | Source} */
    WIGLETT = 960,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wugtrio_(Pokémon) | Source} */
    WUGTRIO = 961,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bombirdier_(Pokémon) | Source} */
    BOMBIRDIER = 962,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Finizen_(Pokémon) | Source} */
    FINIZEN = 963,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Palafin_(Pokémon) | Source} */
    PALAFIN = 964,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Varoom_(Pokémon) | Source} */
    VAROOM = 965,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Revavroom_(Pokémon) | Source} */
    REVAVROOM = 966,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cyclizar_(Pokémon) | Source} */
    CYCLIZAR = 967,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Orthworm_(Pokémon) | Source} */
    ORTHWORM = 968,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Glimmet_(Pokémon) | Source} */
    GLIMMET = 969,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Glimmora_(Pokémon) | Source} */
    GLIMMORA = 970,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Greavard_(Pokémon) | Source} */
    GREAVARD = 971,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Houndstone_(Pokémon) | Source} */
    HOUNDSTONE = 972,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flamigo_(Pokémon) | Source} */
    FLAMIGO = 973,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cetoddle_(Pokémon) | Source} */
    CETODDLE = 974,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cetitan_(Pokémon) | Source} */
    CETITAN = 975,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Veluza_(Pokémon) | Source} */
    VELUZA = 976,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dondozo_(Pokémon) | Source} */
    DONDOZO = 977,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tatsugiri_(Pokémon) | Source} */
    TATSUGIRI = 978,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Annihilape_(Pokémon) | Source} */
    ANNIHILAPE = 979,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Clodsire_(Pokémon) | Source} */
    CLODSIRE = 980,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Farigiraf_(Pokémon) | Source} */
    FARIGIRAF = 981,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dudunsparce_(Pokémon) | Source} */
    DUDUNSPARCE = 982,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Kingambit_(Pokémon) | Source} */
    KINGAMBIT = 983,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Great_Tusk_(Pokémon) | Source} */
    GREAT_TUSK = 984,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scream_Tail_(Pokémon) | Source} */
    SCREAM_TAIL = 985,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Brute_Bonnet_(Pokémon) | Source} */
    BRUTE_BONNET = 986,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flutter_Mane_(Pokémon) | Source} */
    FLUTTER_MANE = 987,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slither_Wing_(Pokémon) | Source} */
    SLITHER_WING = 988,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sandy_Shocks_(Pokémon) | Source} */
    SANDY_SHOCKS = 989,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Treads_(Pokémon) | Source} */
    IRON_TREADS = 990,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Bundle_(Pokémon) | Source} */
    IRON_BUNDLE = 991,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Hands_(Pokémon) | Source} */
    IRON_HANDS = 992,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Jugulis_(Pokémon) | Source} */
    IRON_JUGULIS = 993,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Moth_(Pokémon) | Source} */
    IRON_MOTH = 994,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Thorns_(Pokémon) | Source} */
    IRON_THORNS = 995,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Frigibax_(Pokémon) | Source} */
    FRIGIBAX = 996,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Arctibax_(Pokémon) | Source} */
    ARCTIBAX = 997,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Baxcalibur_(Pokémon) | Source} */
    BAXCALIBUR = 998,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gimmighoul_(Pokémon) | Source} */
    GIMMIGHOUL = 999,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gholdengo_(Pokémon) | Source} */
    GHOLDENGO = 1000,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wo_Chien_(Pokémon) | Source} */
    WO_CHIEN = 1001,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chien_Pao_(Pokémon) | Source} */
    CHIEN_PAO = 1002,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ting_Lu_(Pokémon) | Source} */
    TING_LU = 1003,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chi_Yu_(Pokémon) | Source} */
    CHI_YU = 1004,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Roaring_Moon_(Pokémon) | Source} */
    ROARING_MOON = 1005,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Valiant_(Pokémon) | Source} */
    IRON_VALIANT = 1006,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Koraidon_(Pokémon) | Source} */
    KORAIDON = 1007,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Miraidon_(Pokémon) | Source} */
    MIRAIDON = 1008,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Walking_Wake_(Pokémon) | Source} */
    WALKING_WAKE = 1009,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Leaves_(Pokémon) | Source} */
    IRON_LEAVES = 1010,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dipplin_(Pokémon) | Source} */
    DIPPLIN = 1011,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poltchageist_(Pokémon) | Source} */
    POLTCHAGEIST = 1012,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sinistcha_(Pokémon) | Source} */
    SINISTCHA = 1013,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Okidogi_(Pokémon) | Source} */
    OKIDOGI = 1014,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Munkidori_(Pokémon) | Source} */
    MUNKIDORI = 1015,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fezandipiti_(Pokémon) | Source} */
    FEZANDIPITI = 1016,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ogerpon_(Pokémon) | Source} */
    OGERPON = 1017,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Archaludon_(Pokémon) | Source} */
    ARCHALUDON = 1018,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hydrapple_(Pokémon) | Source} */
    HYDRAPPLE = 1019,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gouging_Fire_(Pokémon) | Source} */
    GOUGING_FIRE = 1020,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Raging_Bolt_(Pokémon) | Source} */
    RAGING_BOLT = 1021,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Boulder_(Pokémon) | Source} */
    IRON_BOULDER = 1022,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Crown_(Pokémon) | Source} */
    IRON_CROWN = 1023,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Terapagos_(Pokémon) | Source} */
    TERAPAGOS = 1024,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pecharunt_(Pokémon) | Source} */
    PECHARUNT = 1025,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rattata_(Pokémon) | Source} */
    ALOLA_RATTATA = 2019,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Raticate_(Pokémon) | Source} */
    ALOLA_RATICATE = 2020,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Raichu_(Pokémon) | Source} */
    ALOLA_RAICHU = 2026,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sandshrew_(Pokémon) | Source} */
    ALOLA_SANDSHREW = 2027,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sandslash_(Pokémon) | Source} */
    ALOLA_SANDSLASH = 2028,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vulpix_(Pokémon) | Source} */
    ALOLA_VULPIX = 2037,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ninetales_(Pokémon) | Source} */
    ALOLA_NINETALES = 2038,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Diglett_(Pokémon) | Source} */
    ALOLA_DIGLETT = 2050,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dugtrio_(Pokémon) | Source} */
    ALOLA_DUGTRIO = 2051,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Meowth_(Pokémon) | Source} */
    ALOLA_MEOWTH = 2052,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Persian_(Pokémon) | Source} */
    ALOLA_PERSIAN = 2053,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Geodude_(Pokémon) | Source} */
    ALOLA_GEODUDE = 2074,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Graveler_(Pokémon) | Source} */
    ALOLA_GRAVELER = 2075,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Golem_(Pokémon) | Source} */
    ALOLA_GOLEM = 2076,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grimer_(Pokémon) | Source} */
    ALOLA_GRIMER = 2088,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Muk_(Pokémon) | Source} */
    ALOLA_MUK = 2089,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Exeggutor_(Pokémon) | Source} */
    ALOLA_EXEGGUTOR = 2103,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Marowak_(Pokémon) | Source} */
    ALOLA_MAROWAK = 2105,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Floette_(Pokémon) | Source} */
    ETERNAL_FLOETTE = 2670,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Meowth_(Pokémon) | Source} */
    GALAR_MEOWTH = 4052,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ponyta_(Pokémon) | Source} */
    GALAR_PONYTA = 4077,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pokémon) | Source} */
    GALAR_RAPIDASH = 4078,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slowpoke_(Pokémon) | Source} */
    GALAR_SLOWPOKE = 4079,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slowbro_(Pokémon) | Source} */
    GALAR_SLOWBRO = 4080,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Farfetchd_(Pokémon) | Source} */
    GALAR_FARFETCHD = 4083,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Weezing_(Pokémon) | Source} */
    GALAR_WEEZING = 4110,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mr_Mime_(Pokémon) | Source} */
    GALAR_MR_MIME = 4122,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Articuno_(Pokémon) | Source} */
    GALAR_ARTICUNO = 4144,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pokémon) | Source} */
    GALAR_ZAPDOS = 4145,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pokémon) | Source} */
    GALAR_MOLTRES = 4146,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slowking_(Pokémon) | Source} */
    GALAR_SLOWKING = 4199,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Corsola_(Pokémon) | Source} */
    GALAR_CORSOLA = 4222,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zigzagoon_(Pokémon) | Source} */
    GALAR_ZIGZAGOON = 4263,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Linoone_(Pokémon) | Source} */
    GALAR_LINOONE = 4264,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Darumaka_(Pokémon) | Source} */
    GALAR_DARUMAKA = 4554,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Darmanitan_(Pokémon) | Source} */
    GALAR_DARMANITAN = 4555,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Yamask_(Pokémon) | Source} */
    GALAR_YAMASK = 4562,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stunfisk_(Pokémon) | Source} */
    GALAR_STUNFISK = 4618,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Growlithe_(Pokémon) | Source} */
    HISUI_GROWLITHE = 6058,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Arcanine_(Pokémon) | Source} */
    HISUI_ARCANINE = 6059,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Voltorb_(Pokémon) | Source} */
    HISUI_VOLTORB = 6100,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Electrode_(Pokémon) | Source} */
    HISUI_ELECTRODE = 6101,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pokémon) | Source} */
    HISUI_TYPHLOSION = 6157,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Qwilfish_(Pokémon) | Source} */
    HISUI_QWILFISH = 6211,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sneasel_(Pokémon) | Source} */
    HISUI_SNEASEL = 6215,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Samurott_(Pokémon) | Source} */
    HISUI_SAMUROTT = 6503,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lilligant_(Pokémon) | Source} */
    HISUI_LILLIGANT = 6549,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zorua_(Pokémon) | Source} */
    HISUI_ZORUA = 6570,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zoroark_(Pokémon) | Source} */
    HISUI_ZOROARK = 6571,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Braviary_(Pokémon) | Source} */
    HISUI_BRAVIARY = 6628,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sliggoo_(Pokémon) | Source} */
    HISUI_SLIGGOO = 6705,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Goodra_(Pokémon) | Source} */
    HISUI_GOODRA = 6706,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Avalugg_(Pokémon) | Source} */
    HISUI_AVALUGG = 6713,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Decidueye_(Pokémon) | Source} */
    HISUI_DECIDUEYE = 6724,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tauros_(Pokémon) | Source} */
    PALDEA_TAUROS = 8128,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wooper_(Pokémon) | Source} */
    PALDEA_WOOPER = 8194,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ursaluna_(Pokémon) | Source} */
    BLOODMOON_URSALUNA = 8901,
  }
}
declare module 'src/data/pokemon-level-moves' {
  import {Moves} from 'src/enums/moves';
  export type LevelMoves = [number, Moves][];
  interface PokemonSpeciesLevelMoves {
    [key: number]: LevelMoves;
  }
  interface PokemonFormLevelMoves {
    [key: number]: LevelMoves;
  }
  interface PokemonSpeciesFormLevelMoves {
    [key: number]: PokemonFormLevelMoves;
  }
  export const pokemonSpeciesLevelMoves: PokemonSpeciesLevelMoves;
  export const pokemonFormLevelMoves: PokemonSpeciesFormLevelMoves;
}
declare module 'src/enums/biome' {
  export enum Biome {
    TOWN = 0,
    PLAINS = 1,
    GRASS = 2,
    TALL_GRASS = 3,
    METROPOLIS = 4,
    FOREST = 5,
    SEA = 6,
    SWAMP = 7,
    BEACH = 8,
    LAKE = 9,
    SEABED = 10,
    MOUNTAIN = 11,
    BADLANDS = 12,
    CAVE = 13,
    DESERT = 14,
    ICE_CAVE = 15,
    MEADOW = 16,
    POWER_PLANT = 17,
    VOLCANO = 18,
    GRAVEYARD = 19,
    DOJO = 20,
    FACTORY = 21,
    RUINS = 22,
    WASTELAND = 23,
    ABYSS = 24,
    SPACE = 25,
    CONSTRUCTION_SITE = 26,
    JUNGLE = 27,
    FAIRY_CAVE = 28,
    TEMPLE = 29,
    SLUM = 30,
    SNOWY_FOREST = 31,
    ISLAND = 40,
    LABORATORY = 41,
    END = 50,
  }
}
declare module 'src/enums/time-of-day' {
  export enum TimeOfDay {
    ALL = -1,
    DAWN = 0,
    DAY = 1,
    DUSK = 2,
    NIGHT = 3,
  }
}
declare module 'src/enums/trainer-type' {
  export enum TrainerType {
    UNKNOWN = 0,
    ACE_TRAINER = 1,
    ARTIST = 2,
    BACKERS = 3,
    BACKPACKER = 4,
    BAKER = 5,
    BEAUTY = 6,
    BIKER = 7,
    BLACK_BELT = 8,
    BREEDER = 9,
    CLERK = 10,
    CYCLIST = 11,
    DANCER = 12,
    DEPOT_AGENT = 13,
    DOCTOR = 14,
    FIREBREATHER = 15,
    FISHERMAN = 16,
    GUITARIST = 17,
    HARLEQUIN = 18,
    HIKER = 19,
    HOOLIGANS = 20,
    HOOPSTER = 21,
    INFIELDER = 22,
    JANITOR = 23,
    LINEBACKER = 24,
    MAID = 25,
    MUSICIAN = 26,
    HEX_MANIAC = 27,
    NURSERY_AIDE = 28,
    OFFICER = 29,
    PARASOL_LADY = 30,
    PILOT = 31,
    POKEFAN = 32,
    PRESCHOOLER = 33,
    PSYCHIC = 34,
    RANGER = 35,
    RICH = 36,
    RICH_KID = 37,
    ROUGHNECK = 38,
    SAILOR = 39,
    SCIENTIST = 40,
    SMASHER = 41,
    SNOW_WORKER = 42,
    STRIKER = 43,
    SCHOOL_KID = 44,
    SWIMMER = 45,
    TWINS = 46,
    VETERAN = 47,
    WAITER = 48,
    WORKER = 49,
    YOUNGSTER = 50,
    ROCKET_GRUNT = 51,
    MAGMA_GRUNT = 52,
    AQUA_GRUNT = 53,
    GALACTIC_GRUNT = 54,
    PLASMA_GRUNT = 55,
    FLARE_GRUNT = 56,
    ROCKET_BOSS_GIOVANNI_1 = 57,
    ROCKET_BOSS_GIOVANNI_2 = 58,
    MAXIE = 59,
    MAXIE_2 = 60,
    ARCHIE = 61,
    ARCHIE_2 = 62,
    CYRUS = 63,
    CYRUS_2 = 64,
    GHETSIS = 65,
    GHETSIS_2 = 66,
    LYSANDRE = 67,
    LYSANDRE_2 = 68,
    BROCK = 200,
    MISTY = 201,
    LT_SURGE = 202,
    ERIKA = 203,
    JANINE = 204,
    SABRINA = 205,
    BLAINE = 206,
    GIOVANNI = 207,
    FALKNER = 208,
    BUGSY = 209,
    WHITNEY = 210,
    MORTY = 211,
    CHUCK = 212,
    JASMINE = 213,
    PRYCE = 214,
    CLAIR = 215,
    ROXANNE = 216,
    BRAWLY = 217,
    WATTSON = 218,
    FLANNERY = 219,
    NORMAN = 220,
    WINONA = 221,
    TATE = 222,
    LIZA = 223,
    JUAN = 224,
    ROARK = 225,
    GARDENIA = 226,
    MAYLENE = 227,
    CRASHER_WAKE = 228,
    FANTINA = 229,
    BYRON = 230,
    CANDICE = 231,
    VOLKNER = 232,
    CILAN = 233,
    CHILI = 234,
    CRESS = 235,
    CHEREN = 236,
    LENORA = 237,
    ROXIE = 238,
    BURGH = 239,
    ELESA = 240,
    CLAY = 241,
    SKYLA = 242,
    BRYCEN = 243,
    DRAYDEN = 244,
    MARLON = 245,
    VIOLA = 246,
    GRANT = 247,
    KORRINA = 248,
    RAMOS = 249,
    CLEMONT = 250,
    VALERIE = 251,
    OLYMPIA = 252,
    WULFRIC = 253,
    MILO = 254,
    NESSA = 255,
    KABU = 256,
    BEA = 257,
    ALLISTER = 258,
    OPAL = 259,
    BEDE = 260,
    GORDIE = 261,
    MELONY = 262,
    PIERS = 263,
    MARNIE = 264,
    RAIHAN = 265,
    KATY = 266,
    BRASSIUS = 267,
    IONO = 268,
    KOFU = 269,
    LARRY = 270,
    RYME = 271,
    TULIP = 272,
    GRUSHA = 273,
    LORELEI = 300,
    BRUNO = 301,
    AGATHA = 302,
    LANCE = 303,
    WILL = 304,
    KOGA = 305,
    KAREN = 306,
    SIDNEY = 307,
    PHOEBE = 308,
    GLACIA = 309,
    DRAKE = 310,
    AARON = 311,
    BERTHA = 312,
    FLINT = 313,
    LUCIAN = 314,
    SHAUNTAL = 315,
    MARSHAL = 316,
    GRIMSLEY = 317,
    CAITLIN = 318,
    MALVA = 319,
    SIEBOLD = 320,
    WIKSTROM = 321,
    DRASNA = 322,
    HALA = 323,
    MOLAYNE = 324,
    OLIVIA = 325,
    ACEROLA = 326,
    KAHILI = 327,
    MARNIE_ELITE = 328,
    NESSA_ELITE = 329,
    BEA_ELITE = 330,
    ALLISTER_ELITE = 331,
    RAIHAN_ELITE = 332,
    RIKA = 333,
    POPPY = 334,
    LARRY_ELITE = 335,
    HASSEL = 336,
    CRISPIN = 337,
    AMARYS = 338,
    LACEY = 339,
    DRAYTON = 340,
    BLUE = 350,
    RED = 351,
    LANCE_CHAMPION = 352,
    STEVEN = 353,
    WALLACE = 354,
    CYNTHIA = 355,
    ALDER = 356,
    IRIS = 357,
    DIANTHA = 358,
    HAU = 359,
    LEON = 360,
    GEETA = 361,
    NEMONA = 362,
    KIERAN = 363,
    RIVAL = 375,
    RIVAL_2 = 376,
    RIVAL_3 = 377,
    RIVAL_4 = 378,
    RIVAL_5 = 379,
    RIVAL_6 = 380,
  }
}
declare module 'src/data/biomes' {
  import {Biome} from 'src/enums/biome';
  import {Species} from 'src/enums/species';
  import {TrainerType} from 'src/enums/trainer-type';
  export function getBiomeName(biome: Biome | -1): any;
  interface BiomeLinks {
    [key: number]: Biome | (Biome | [Biome, number])[];
  }
  interface BiomeDepths {
    [key: number]: [number, number];
  }
  export const biomeLinks: BiomeLinks;
  export const biomeDepths: BiomeDepths;
  export enum BiomePoolTier {
    COMMON = 0,
    UNCOMMON = 1,
    RARE = 2,
    SUPER_RARE = 3,
    ULTRA_RARE = 4,
    BOSS = 5,
    BOSS_RARE = 6,
    BOSS_SUPER_RARE = 7,
    BOSS_ULTRA_RARE = 8,
  }
  export const uncatchableSpecies: Species[];
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
  export const biomePokemonPools: BiomePokemonPools;
  export const biomeTrainerPools: BiomeTrainerPools;
  export function initBiomes(): void;
}
declare module 'src/enums/battle-spec' {
  export enum BattleSpec {
    DEFAULT = 0,
    FINAL_BOSS = 1,
  }
}
declare module 'src/messages' {
  import Pokemon from 'src/field/pokemon';
  /**
   * Builds a message by concatenating the Pokemon name with its potential affix and the given text
   * @param pokemon {@linkcode Pokemon} name and battle context will be retrieved from this instance for {@linkcode getPokemonNameWithAffix}
   * @param {string} content any text
   * @returns {string} ex: "Wild Gengar fainted!", "Ectoplasma sauvage est K.O!"
   * @see {@linkcode getPokemonNameWithAffix} for the Pokemon's name and potentiel affix
   */
  export function getPokemonMessage(pokemon: Pokemon, content: string): string;
  /**
   * Retrieves the Pokemon's name, potentially with an affix indicating its role (wild or foe) in the current battle context, translated
   * @param pokemon {@linkcode Pokemon} name and battle context will be retrieved from this instance
   * @returns {string} ex: "Wild Gengar", "Ectoplasma sauvage"
   */
  export function getPokemonNameWithAffix(pokemon: Pokemon): string;
}
declare module 'src/data/terrain' {
  import Pokemon from 'src/field/pokemon';
  import Move from 'src/data/move';
  import {Type} from 'src/data/type';
  import {BattlerIndex} from 'src/battle';
  export enum TerrainType {
    NONE = 0,
    MISTY = 1,
    ELECTRIC = 2,
    GRASSY = 3,
    PSYCHIC = 4,
  }
  export class Terrain {
    terrainType: TerrainType;
    turnsLeft: number;
    constructor(terrainType: TerrainType, turnsLeft?: number);
    lapse(): boolean;
    getAttackTypeMultiplier(attackType: Type): number;
    isMoveTerrainCancelled(user: Pokemon, targets: BattlerIndex[], move: Move): boolean;
  }
  export function getTerrainColor(terrainType: TerrainType): [number, number, number];
}
declare module 'src/data/tms' {
  import {ModifierTier} from 'src/modifier/modifier-tier';
  import {Moves} from 'src/enums/moves';
  import {Species} from 'src/enums/species';
  interface TmSpecies {
    [key: number]: Array<Species | Array<Species | string>>;
  }
  export const reverseCompatibleTms: Moves[];
  export const tmSpecies: TmSpecies;
  interface TmPoolTiers {
    [key: number]: ModifierTier;
  }
  export const tmPoolTiers: TmPoolTiers;
}
declare module 'src/ui/pokemon-icon-anim-handler' {
  import BattleScene from 'src/battle-scene';
  export enum PokemonIconAnimMode {
    NONE = 0,
    PASSIVE = 1,
    ACTIVE = 2,
  }
  type PokemonIcon = any | any;
  export default class PokemonIconAnimHandler {
    private icons;
    private toggled;
    setup(scene: BattleScene): void;
    getModeYDelta(mode: PokemonIconAnimMode): number;
    addOrUpdate(icons: PokemonIcon | PokemonIcon[], mode: PokemonIconAnimMode): void;
    remove(icons: PokemonIcon | PokemonIcon[]): void;
    removeAll(): void;
  }
}
declare module 'src/ui/move-info-overlay' {
  import BattleScene, {InfoToggle} from 'src/battle-scene';
  import Move from 'src/data/move';
  export interface MoveInfoOverlaySettings {
    delayVisibility?: boolean;
    scale?: number;
    top?: boolean;
    right?: boolean;
    onSide?: boolean;
    x?: number;
    y?: number;
    width?: number;
  }
  export default class MoveInfoOverlay implements InfoToggle {
    active: boolean;
    private move;
    private desc;
    private descScroll;
    private val;
    private pp;
    private pow;
    private acc;
    private typ;
    private cat;
    private options;
    constructor(scene: BattleScene, options?: MoveInfoOverlaySettings);
    show(move: Move): boolean;
    clear(): void;
    toggleInfo(force?: boolean): void;
    isActive(): boolean;
    static getWidth(scale: number, scene: BattleScene): number;
    static getHeight(scale: number, onSide?: boolean): number;
  }
}
declare module 'src/ui/party-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {PlayerPokemon, PokemonMove} from 'src/field/pokemon';
  import MessageUiHandler from 'src/ui/message-ui-handler';
  import {PokemonHeldItemModifier} from 'src/modifier/modifier';
  import {Button} from 'src/enums/buttons';
  export enum PartyUiMode {
    SWITCH = 0,
    FAINT_SWITCH = 1,
    POST_BATTLE_SWITCH = 2,
    REVIVAL_BLESSING = 3,
    MODIFIER = 4,
    MOVE_MODIFIER = 5,
    TM_MODIFIER = 6,
    REMEMBER_MOVE_MODIFIER = 7,
    MODIFIER_TRANSFER = 8,
    SPLICE = 9,
    RELEASE = 10,
    CHECK = 11,
  }
  export enum PartyOption {
    CANCEL = -1,
    SEND_OUT = 0,
    PASS_BATON = 1,
    REVIVE = 2,
    APPLY = 3,
    TEACH = 4,
    TRANSFER = 5,
    SUMMARY = 6,
    UNPAUSE_EVOLUTION = 7,
    SPLICE = 8,
    UNSPLICE = 9,
    RELEASE = 10,
    SCROLL_UP = 1000,
    SCROLL_DOWN = 1001,
    FORM_CHANGE_ITEM = 2000,
    MOVE_1 = 3000,
    MOVE_2 = 3001,
    MOVE_3 = 3002,
    MOVE_4 = 3003,
    ALL = 4000,
  }
  export type PartySelectCallback = (cursor: number, option: PartyOption) => void;
  export type PartyModifierTransferSelectCallback = (
    fromCursor: number,
    index: number,
    itemQuantity?: number,
    toCursor?: number
  ) => void;
  export type PartyModifierSpliceSelectCallback = (fromCursor: number, toCursor?: number) => void;
  export type PokemonSelectFilter = (pokemon: PlayerPokemon) => string;
  export type PokemonModifierTransferSelectFilter = (
    pokemon: PlayerPokemon,
    modifier: PokemonHeldItemModifier
  ) => string;
  export type PokemonMoveSelectFilter = (pokemonMove: PokemonMove) => string;
  export default class PartyUiHandler extends MessageUiHandler {
    private partyUiMode;
    private fieldIndex;
    private partyBg;
    private partyContainer;
    private partySlotsContainer;
    private partySlots;
    private partyCancelButton;
    private partyMessageBox;
    private moveInfoOverlay;
    private optionsMode;
    private optionsScroll;
    private optionsCursor;
    private optionsScrollCursor;
    private optionsScrollTotal;
    private optionsContainer;
    private optionsBg;
    private optionsCursorObj;
    private options;
    private transferMode;
    private transferOptionCursor;
    private transferCursor;
    /** Current quantity selection for every item held by the pokemon selected for the transfer */
    private transferQuantities;
    /** Stack size of every item that the selected pokemon is holding */
    private transferQuantitiesMax;
    /** Whether to transfer all items */
    private transferAll;
    private lastCursor;
    private selectCallback;
    private selectFilter;
    private moveSelectFilter;
    private tmMoveId;
    private showMovePp;
    private iconAnimHandler;
    private static FilterAll;
    static FilterNonFainted: (pokemon: PlayerPokemon) => any;
    static FilterFainted: (pokemon: PlayerPokemon) => any;
    /**
     * For consistency reasons, this looks like the above filters. However this is used only internally and is always enforced for switching.
     * @param pokemon The pokemon to check.
     * @returns
     */
    private FilterChallengeLegal;
    private static FilterAllMoves;
    static FilterItemMaxStacks: (pokemon: PlayerPokemon, modifier: PokemonHeldItemModifier) => any;
    static NoEffectMessage: any;
    private localizedOptions;
    constructor(scene: BattleScene);
    setup(): void;
    show(args: any[]): boolean;
    processInput(button: Button): boolean;
    populatePartySlots(): void;
    setCursor(cursor: number): boolean;
    showText(
      text: string,
      delay?: number,
      callback?: Function,
      callbackDelay?: number,
      prompt?: boolean,
      promptDelay?: number
    ): void;
    showOptions(): void;
    updateOptions(): void;
    startTransfer(): void;
    clearTransfer(): void;
    doRelease(slotIndex: number): void;
    getReleaseMessage(pokemonName: string): string;
    getOptionsCursorWithScroll(): number;
    clearOptions(): void;
    eraseOptionsCursor(): void;
    clear(): void;
    clearPartySlots(): void;
  }
}
declare module 'src/data/temp-battle-stat' {
  export enum TempBattleStat {
    ATK = 0,
    DEF = 1,
    SPATK = 2,
    SPDEF = 3,
    SPD = 4,
    ACC = 5,
    CRIT = 6,
  }
  export function getTempBattleStatName(tempBattleStat: TempBattleStat): any;
  export function getTempBattleStatBoosterItemName(
    tempBattleStat: TempBattleStat
  ): 'X Attack' | 'X Defense' | 'X Sp. Atk' | 'X Sp. Def' | 'X Speed' | 'X Accuracy' | 'Dire Hit';
}
declare module 'src/enums/battler-tag-type' {
  export enum BattlerTagType {
    NONE = 'NONE',
    RECHARGING = 'RECHARGING',
    FLINCHED = 'FLINCHED',
    INTERRUPTED = 'INTERRUPTED',
    CONFUSED = 'CONFUSED',
    INFATUATED = 'INFATUATED',
    SEEDED = 'SEEDED',
    NIGHTMARE = 'NIGHTMARE',
    FRENZY = 'FRENZY',
    CHARGING = 'CHARGING',
    ENCORE = 'ENCORE',
    HELPING_HAND = 'HELPING_HAND',
    INGRAIN = 'INGRAIN',
    AQUA_RING = 'AQUA_RING',
    DROWSY = 'DROWSY',
    TRAPPED = 'TRAPPED',
    BIND = 'BIND',
    WRAP = 'WRAP',
    FIRE_SPIN = 'FIRE_SPIN',
    WHIRLPOOL = 'WHIRLPOOL',
    CLAMP = 'CLAMP',
    SAND_TOMB = 'SAND_TOMB',
    MAGMA_STORM = 'MAGMA_STORM',
    SNAP_TRAP = 'SNAP_TRAP',
    THUNDER_CAGE = 'THUNDER_CAGE',
    INFESTATION = 'INFESTATION',
    PROTECTED = 'PROTECTED',
    SPIKY_SHIELD = 'SPIKY_SHIELD',
    KINGS_SHIELD = 'KINGS_SHIELD',
    OBSTRUCT = 'OBSTRUCT',
    SILK_TRAP = 'SILK_TRAP',
    BANEFUL_BUNKER = 'BANEFUL_BUNKER',
    BURNING_BULWARK = 'BURNING_BULWARK',
    ENDURING = 'ENDURING',
    STURDY = 'STURDY',
    PERISH_SONG = 'PERISH_SONG',
    TRUANT = 'TRUANT',
    SLOW_START = 'SLOW_START',
    PROTOSYNTHESIS = 'PROTOSYNTHESIS',
    QUARK_DRIVE = 'QUARK_DRIVE',
    FLYING = 'FLYING',
    UNDERGROUND = 'UNDERGROUND',
    UNDERWATER = 'UNDERWATER',
    HIDDEN = 'HIDDEN',
    FIRE_BOOST = 'FIRE_BOOST',
    CRIT_BOOST = 'CRIT_BOOST',
    ALWAYS_CRIT = 'ALWAYS_CRIT',
    NO_CRIT = 'NO_CRIT',
    IGNORE_ACCURACY = 'IGNORE_ACCURACY',
    BYPASS_SLEEP = 'BYPASS_SLEEP',
    IGNORE_FLYING = 'IGNORE_FLYING',
    SALT_CURED = 'SALT_CURED',
    CURSED = 'CURSED',
    CHARGED = 'CHARGED',
    ROOSTED = 'ROOSTED',
    MAGNET_RISEN = 'MAGNET_RISEN',
    MINIMIZED = 'MINIMIZED',
    DESTINY_BOND = 'DESTINY_BOND',
    CENTER_OF_ATTENTION = 'CENTER_OF_ATTENTION',
    ICE_FACE = 'ICE_FACE',
  }
}
declare module 'src/enums/berry-type' {
  export enum BerryType {
    SITRUS = 0,
    LUM = 1,
    ENIGMA = 2,
    LIECHI = 3,
    GANLON = 4,
    PETAYA = 5,
    APICOT = 6,
    SALAC = 7,
    LANSAT = 8,
    STARF = 9,
    LEPPA = 10,
  }
}
declare module 'src/data/berry' {
  import Pokemon from 'src/field/pokemon';
  import {BerryType} from 'src/enums/berry-type';
  export function getBerryName(berryType: BerryType): string;
  export function getBerryEffectDescription(berryType: BerryType): string;
  export type BerryPredicate = (pokemon: Pokemon) => boolean;
  export function getBerryPredicate(berryType: BerryType): BerryPredicate;
  export type BerryEffectFunc = (pokemon: Pokemon) => void;
  export function getBerryEffectFunc(berryType: BerryType): BerryEffectFunc;
}
declare module 'src/enums/challenges' {
  export enum Challenges {
    SINGLE_GENERATION = 0,
    SINGLE_TYPE = 1,
    LOWER_MAX_STARTER_COST = 2,
    LOWER_STARTER_POINTS = 3,
    FRESH_START = 4,
  }
}
declare module 'src/data/challenge' {
  import {GameData} from 'src/system/game-data';
  import {GameMode} from 'src/game-mode';
  import {Challenges} from 'src/enums/challenges';
  /**
   * An enum for all the challenge types. The parameter entries on these describe the
   * parameters to use when calling the applyChallenges function.
   */
  export enum ChallengeType {
    /**
     * Challenges which modify what starters you can choose
     * @param args [0] {@link PokemonSpecies} The species to check
     *             [1] {@link Utils.BooleanHolder} Sets to false if illegal, pass in true.
     */
    STARTER_CHOICE = 0,
    /**
     * Challenges which modify how many starter points you have
     * @param args [0] {@link Utils.NumberHolder} The amount of starter points you have
     */
    STARTER_POINTS = 1,
    /**
     * Challenges which modify your starters in some way
     * Not Fully Implemented
     */
    STARTER_MODIFY = 2,
    /**
     * Challenges which limit which pokemon you can have in battle.
     * @param args [0] {@link Pokemon} The pokemon to check
     *             [1] {@link Utils.BooleanHolder} Sets to false if illegal, pass in true.
     */
    POKEMON_IN_BATTLE = 3,
    /**
     * Adds or modifies the fixed battles in a run
     * @param args [0] number The wave to get a battle for
     *             [1] {@link FixedBattleConfig} A new fixed battle. It'll be modified if a battle exists.
     */
    FIXED_BATTLES = 4,
  }
  /**
   * A challenge object. Exists only to serve as a base class.
   */
  export abstract class Challenge {
    id: Challenges;
    value: number;
    maxValue: number;
    severity: number;
    maxSeverity: number;
    conditions: ChallengeCondition[];
    challengeTypes: ChallengeType[];
    /**
     * @param {Challenges} id The enum value for the challenge
     */
    constructor(id: Challenges, maxValue?: number);
    /**
     * Reset the challenge to a base state.
     */
    reset(): void;
    /**
     * Gets the localisation key for the challenge
     * @returns The i18n key for this challenge
     */
    geti18nKey(): string;
    /**
     * Used for unlockable challenges to check if they're unlocked.
     * @param {GameData} data The save data.
     * @returns {boolean} Whether this challenge is unlocked.
     */
    isUnlocked(data: GameData): boolean;
    /**
     * Adds an unlock condition to this challenge.
     * @param {ChallengeCondition} condition The condition to add.
     * @returns {Challenge} This challenge
     */
    condition(condition: ChallengeCondition): Challenge;
    /**
     * If this challenge is of a particular type
     * @param {ChallengeType} challengeType The challenge type to check.
     * @returns {Challenge} This challenge
     */
    isOfType(challengeType: ChallengeType): boolean;
    /**
     * Adds a challenge type to this challenge.
     * @param {ChallengeType} challengeType The challenge type to add.
     * @returns {Challenge} This challenge
     */
    addChallengeType(challengeType: ChallengeType): Challenge;
    /**
     * @returns {string} The localised name of this challenge.
     */
    getName(): string;
    /**
     * Returns the textual representation of a challenge's current value.
     * @param {value} overrideValue The value to check for. If undefined, gets the current value.
     * @returns {string} The localised name for the current value.
     */
    getValue(overrideValue?: number): string;
    /**
     * Returns the description of a challenge's current value.
     * @param {value} overrideValue The value to check for. If undefined, gets the current value.
     * @returns {string} The localised description for the current value.
     */
    getDescription(overrideValue?: number): string;
    /**
     * Increase the value of the challenge
     * @returns {boolean} Returns true if the value changed
     */
    increaseValue(): boolean;
    /**
     * Decrease the value of the challenge
     * @returns {boolean} Returns true if the value changed
     */
    decreaseValue(): boolean;
    /**
     * Whether to allow choosing this challenge's severity.
     */
    hasSeverity(): boolean;
    /**
     * Decrease the severity of the challenge
     * @returns {boolean} Returns true if the value changed
     */
    decreaseSeverity(): boolean;
    /**
     * Increase the severity of the challenge
     * @returns {boolean} Returns true if the value changed
     */
    increaseSeverity(): boolean;
    /**
     * Gets the "difficulty" value of this challenge.
     * @returns {number} The difficulty value.
     */
    getDifficulty(): number;
    /**
     * Gets the minimum difficulty added by this challenge.
     * @returns {number} The difficulty value.
     */
    getMinDifficulty(): number;
    /**
     * Modifies the data or game state in some way to apply the challenge.
     * @param {ChallengeType} challengeType Which challenge type this is being applied for.
     * @param args Irrelevant. See the specific challenge's apply function for additional information.
     */
    abstract apply(challengeType: ChallengeType, args: any[]): boolean;
    /**
     * Clones a challenge, either from another challenge or json. Chainable.
     * @param {Challenge | any} source The source challenge of json.
     * @returns {Challenge} This challenge.
     */
    static loadChallenge(source: Challenge | any): Challenge;
  }
  type ChallengeCondition = (data: GameData) => boolean;
  /**
   * Implements a mono generation challenge.
   */
  export class SingleGenerationChallenge extends Challenge {
    constructor();
    apply(challengeType: ChallengeType, args: any[]): boolean;
    /**
     * @overrides
     */
    getDifficulty(): number;
    /**
     * Returns the textual representation of a challenge's current value.
     * @param {value} overrideValue The value to check for. If undefined, gets the current value.
     * @returns {string} The localised name for the current value.
     */
    getValue(overrideValue?: number): string;
    /**
     * Returns the description of a challenge's current value.
     * @param {value} overrideValue The value to check for. If undefined, gets the current value.
     * @returns {string} The localised description for the current value.
     */
    getDescription(overrideValue?: number): string;
    static loadChallenge(source: SingleGenerationChallenge | any): SingleGenerationChallenge;
  }
  /**
   * Implements a mono type challenge.
   */
  export class SingleTypeChallenge extends Challenge {
    private static TYPE_OVERRIDES;
    constructor();
    apply(challengeType: ChallengeType, args: any[]): boolean;
    /**
     * @overrides
     */
    getDifficulty(): number;
    /**
     * Returns the textual representation of a challenge's current value.
     * @param {value} overrideValue The value to check for. If undefined, gets the current value.
     * @returns {string} The localised name for the current value.
     */
    getValue(overrideValue?: number): string;
    /**
     * Returns the description of a challenge's current value.
     * @param {value} overrideValue The value to check for. If undefined, gets the current value.
     * @returns {string} The localised description for the current value.
     */
    getDescription(overrideValue?: number): string;
    static loadChallenge(source: SingleTypeChallenge | any): SingleTypeChallenge;
  }
  /**
   * Implements a fresh start challenge.
   */
  export class FreshStartChallenge extends Challenge {
    constructor();
    apply(challengeType: ChallengeType, args: any[]): boolean;
    /**
     * @overrides
     */
    getDifficulty(): number;
    static loadChallenge(source: FreshStartChallenge | any): FreshStartChallenge;
  }
  /**
   * Lowers the amount of starter points available.
   */
  export class LowerStarterMaxCostChallenge extends Challenge {
    constructor();
    /**
     * @override
     */
    getValue(overrideValue?: number): string;
    apply(challengeType: ChallengeType, args: any[]): boolean;
    static loadChallenge(source: LowerStarterMaxCostChallenge | any): LowerStarterMaxCostChallenge;
  }
  /**
   * Lowers the maximum cost of starters available.
   */
  export class LowerStarterPointsChallenge extends Challenge {
    constructor();
    /**
     * @override
     */
    getValue(overrideValue?: number): string;
    apply(challengeType: ChallengeType, args: any[]): boolean;
    static loadChallenge(source: LowerStarterPointsChallenge | any): LowerStarterPointsChallenge;
  }
  /**
   * Apply all challenges of a given challenge type.
   * @param {GameMode} gameMode The current game mode
   * @param {ChallengeType} challengeType What challenge type to apply
   * @param {any[]} args Any args for that challenge type
   * @returns {boolean} True if any challenge was successfully applied.
   */
  export function applyChallenges(gameMode: GameMode, challengeType: ChallengeType, ...args: any[]): boolean;
  export function copyChallenge(source: Challenge | any): Challenge;
  export const allChallenges: Challenge[];
  export function initChallenges(): void;
}
declare module 'src/enums/abilities' {
  export enum Abilities {
    /**{@link https://bulbapedia.bulbagarden.net/wiki/None_(ability) | Source} */
    NONE = 0,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stench_(ability) | Source} */
    STENCH = 1,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drizzle_(ability) | Source} */
    DRIZZLE = 2,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Speed_Boost_(ability) | Source} */
    SPEED_BOOST = 3,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Battle_Armor_(ability) | Source} */
    BATTLE_ARMOR = 4,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sturdy_(ability) | Source} */
    STURDY = 5,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Damp_(ability) | Source} */
    DAMP = 6,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Limber_(ability) | Source} */
    LIMBER = 7,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sand_Veil_(ability) | Source} */
    SAND_VEIL = 8,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Static_(ability) | Source} */
    STATIC = 9,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Volt_Absorb_(ability) | Source} */
    VOLT_ABSORB = 10,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Absorb_(ability) | Source} */
    WATER_ABSORB = 11,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Oblivious_(ability) | Source} */
    OBLIVIOUS = 12,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cloud_Nine_(ability) | Source} */
    CLOUD_NINE = 13,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Compound_Eyes_(ability) | Source} */
    COMPOUND_EYES = 14,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Insomnia_(ability) | Source} */
    INSOMNIA = 15,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Color_Change_(ability) | Source} */
    COLOR_CHANGE = 16,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Immunity_(ability) | Source} */
    IMMUNITY = 17,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flash_Fire_(ability) | Source} */
    FLASH_FIRE = 18,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shield_Dust_(ability) | Source} */
    SHIELD_DUST = 19,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Own_Tempo_(ability) | Source} */
    OWN_TEMPO = 20,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Suction_Cups_(ability) | Source} */
    SUCTION_CUPS = 21,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Intimidate_(ability) | Source} */
    INTIMIDATE = 22,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shadow_Tag_(ability) | Source} */
    SHADOW_TAG = 23,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rough_Skin_(ability) | Source} */
    ROUGH_SKIN = 24,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wonder_Guard_(ability) | Source} */
    WONDER_GUARD = 25,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Levitate_(ability) | Source} */
    LEVITATE = 26,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Effect_Spore_(ability) | Source} */
    EFFECT_SPORE = 27,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Synchronize_(ability) | Source} */
    SYNCHRONIZE = 28,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Clear_Body_(ability) | Source} */
    CLEAR_BODY = 29,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Natural_Cure_(ability) | Source} */
    NATURAL_CURE = 30,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lightning_Rod_(ability) | Source} */
    LIGHTNING_ROD = 31,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Serene_Grace_(ability) | Source} */
    SERENE_GRACE = 32,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swift_Swim_(ability) | Source} */
    SWIFT_SWIM = 33,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chlorophyll_(ability) | Source} */
    CHLOROPHYLL = 34,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Illuminate_(ability) | Source} */
    ILLUMINATE = 35,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Trace_(ability) | Source} */
    TRACE = 36,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Huge_Power_(ability) | Source} */
    HUGE_POWER = 37,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Point_(ability) | Source} */
    POISON_POINT = 38,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Inner_Focus_(ability) | Source} */
    INNER_FOCUS = 39,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magma_Armor_(ability) | Source} */
    MAGMA_ARMOR = 40,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Veil_(ability) | Source} */
    WATER_VEIL = 41,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magnet_Pull_(ability) | Source} */
    MAGNET_PULL = 42,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Soundproof_(ability) | Source} */
    SOUNDPROOF = 43,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rain_Dish_(ability) | Source} */
    RAIN_DISH = 44,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sand_Stream_(ability) | Source} */
    SAND_STREAM = 45,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pressure_(ability) | Source} */
    PRESSURE = 46,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thick_Fat_(ability) | Source} */
    THICK_FAT = 47,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Early_Bird_(ability) | Source} */
    EARLY_BIRD = 48,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flame_Body_(ability) | Source} */
    FLAME_BODY = 49,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Run_Away_(ability) | Source} */
    RUN_AWAY = 50,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Keen_Eye_(ability) | Source} */
    KEEN_EYE = 51,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hyper_Cutter_(ability) | Source} */
    HYPER_CUTTER = 52,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pickup_(ability) | Source} */
    PICKUP = 53,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Truant_(ability) | Source} */
    TRUANT = 54,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hustle_(ability) | Source} */
    HUSTLE = 55,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cute_Charm_(ability) | Source} */
    CUTE_CHARM = 56,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Plus_(ability) | Source} */
    PLUS = 57,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Minus_(ability) | Source} */
    MINUS = 58,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Forecast_(ability) | Source} */
    FORECAST = 59,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sticky_Hold_(ability) | Source} */
    STICKY_HOLD = 60,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shed_Skin_(ability) | Source} */
    SHED_SKIN = 61,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Guts_(ability) | Source} */
    GUTS = 62,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Marvel_Scale_(ability) | Source} */
    MARVEL_SCALE = 63,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Liquid_Ooze_(ability) | Source} */
    LIQUID_OOZE = 64,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Overgrow_(ability) | Source} */
    OVERGROW = 65,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Blaze_(ability) | Source} */
    BLAZE = 66,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Torrent_(ability) | Source} */
    TORRENT = 67,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Swarm_(ability) | Source} */
    SWARM = 68,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Head_(ability) | Source} */
    ROCK_HEAD = 69,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Drought_(ability) | Source} */
    DROUGHT = 70,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Arena_Trap_(ability) | Source} */
    ARENA_TRAP = 71,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vital_Spirit_(ability) | Source} */
    VITAL_SPIRIT = 72,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/White_Smoke_(ability) | Source} */
    WHITE_SMOKE = 73,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pure_Power_(ability) | Source} */
    PURE_POWER = 74,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shell_Armor_(ability) | Source} */
    SHELL_ARMOR = 75,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Air_Lock_(ability) | Source} */
    AIR_LOCK = 76,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tangled_Feet_(ability) | Source} */
    TANGLED_FEET = 77,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Motor_Drive_(ability) | Source} */
    MOTOR_DRIVE = 78,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rivalry_(ability) | Source} */
    RIVALRY = 79,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Steadfast_(ability) | Source} */
    STEADFAST = 80,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Snow_Cloak_(ability) | Source} */
    SNOW_CLOAK = 81,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gluttony_(ability) | Source} */
    GLUTTONY = 82,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Anger_Point_(ability) | Source} */
    ANGER_POINT = 83,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Unburden_(ability) | Source} */
    UNBURDEN = 84,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heatproof_(ability) | Source} */
    HEATPROOF = 85,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Simple_(ability) | Source} */
    SIMPLE = 86,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dry_Skin_(ability) | Source} */
    DRY_SKIN = 87,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Download_(ability) | Source} */
    DOWNLOAD = 88,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Fist_(ability) | Source} */
    IRON_FIST = 89,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Heal_(ability) | Source} */
    POISON_HEAL = 90,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Adaptability_(ability) | Source} */
    ADAPTABILITY = 91,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Skill_Link_(ability) | Source} */
    SKILL_LINK = 92,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hydration_(ability) | Source} */
    HYDRATION = 93,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Solar_Power_(ability) | Source} */
    SOLAR_POWER = 94,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Quick_Feet_(ability) | Source} */
    QUICK_FEET = 95,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Normalize_(ability) | Source} */
    NORMALIZE = 96,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sniper_(ability) | Source} */
    SNIPER = 97,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magic_Guard_(ability) | Source} */
    MAGIC_GUARD = 98,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/No_Guard_(ability) | Source} */
    NO_GUARD = 99,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stall_(ability) | Source} */
    STALL = 100,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Technician_(ability) | Source} */
    TECHNICIAN = 101,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Leaf_Guard_(ability) | Source} */
    LEAF_GUARD = 102,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Klutz_(ability) | Source} */
    KLUTZ = 103,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mold_Breaker_(ability) | Source} */
    MOLD_BREAKER = 104,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Super_Luck_(ability) | Source} */
    SUPER_LUCK = 105,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aftermath_(ability) | Source} */
    AFTERMATH = 106,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Anticipation_(ability) | Source} */
    ANTICIPATION = 107,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Forewarn_(ability) | Source} */
    FOREWARN = 108,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Unaware_(ability) | Source} */
    UNAWARE = 109,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tinted_Lens_(ability) | Source} */
    TINTED_LENS = 110,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Filter_(ability) | Source} */
    FILTER = 111,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slow_Start_(ability) | Source} */
    SLOW_START = 112,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Scrappy_(ability) | Source} */
    SCRAPPY = 113,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Storm_Drain_(ability) | Source} */
    STORM_DRAIN = 114,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Body_(ability) | Source} */
    ICE_BODY = 115,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Solid_Rock_(ability) | Source} */
    SOLID_ROCK = 116,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Snow_Warning_(ability) | Source} */
    SNOW_WARNING = 117,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Honey_Gather_(ability) | Source} */
    HONEY_GATHER = 118,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Frisk_(ability) | Source} */
    FRISK = 119,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Reckless_(ability) | Source} */
    RECKLESS = 120,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Multitype_(ability) | Source} */
    MULTITYPE = 121,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flower_Gift_(ability) | Source} */
    FLOWER_GIFT = 122,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bad_Dreams_(ability) | Source} */
    BAD_DREAMS = 123,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pickpocket_(ability) | Source} */
    PICKPOCKET = 124,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sheer_Force_(ability) | Source} */
    SHEER_FORCE = 125,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Contrary_(ability) | Source} */
    CONTRARY = 126,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Unnerve_(ability) | Source} */
    UNNERVE = 127,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Defiant_(ability) | Source} */
    DEFIANT = 128,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Defeatist_(ability) | Source} */
    DEFEATIST = 129,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cursed_Body_(ability) | Source} */
    CURSED_BODY = 130,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Healer_(ability) | Source} */
    HEALER = 131,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Friend_Guard_(ability) | Source} */
    FRIEND_GUARD = 132,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Weak_Armor_(ability) | Source} */
    WEAK_ARMOR = 133,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Heavy_Metal_(ability) | Source} */
    HEAVY_METAL = 134,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Light_Metal_(ability) | Source} */
    LIGHT_METAL = 135,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Multiscale_(ability) | Source} */
    MULTISCALE = 136,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Toxic_Boost_(ability) | Source} */
    TOXIC_BOOST = 137,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flare_Boost_(ability) | Source} */
    FLARE_BOOST = 138,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Harvest_(ability) | Source} */
    HARVEST = 139,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Telepathy_(ability) | Source} */
    TELEPATHY = 140,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Moody_(ability) | Source} */
    MOODY = 141,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Overcoat_(ability) | Source} */
    OVERCOAT = 142,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Touch_(ability) | Source} */
    POISON_TOUCH = 143,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Regenerator_(ability) | Source} */
    REGENERATOR = 144,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Big_Pecks_(ability) | Source} */
    BIG_PECKS = 145,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sand_Rush_(ability) | Source} */
    SAND_RUSH = 146,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wonder_Skin_(ability) | Source} */
    WONDER_SKIN = 147,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Analytic_(ability) | Source} */
    ANALYTIC = 148,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Illusion_(ability) | Source} */
    ILLUSION = 149,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Imposter_(ability) | Source} */
    IMPOSTER = 150,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Infiltrator_(ability) | Source} */
    INFILTRATOR = 151,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mummy_(ability) | Source} */
    MUMMY = 152,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Moxie_(ability) | Source} */
    MOXIE = 153,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Justified_(ability) | Source} */
    JUSTIFIED = 154,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rattled_(ability) | Source} */
    RATTLED = 155,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magic_Bounce_(ability) | Source} */
    MAGIC_BOUNCE = 156,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sap_Sipper_(ability) | Source} */
    SAP_SIPPER = 157,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Prankster_(ability) | Source} */
    PRANKSTER = 158,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sand_Force_(ability) | Source} */
    SAND_FORCE = 159,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Barbs_(ability) | Source} */
    IRON_BARBS = 160,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zen_Mode_(ability) | Source} */
    ZEN_MODE = 161,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Victory_Star_(ability) | Source} */
    VICTORY_STAR = 162,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Turboblaze_(ability) | Source} */
    TURBOBLAZE = 163,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Teravolt_(ability) | Source} */
    TERAVOLT = 164,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aroma_Veil_(ability) | Source} */
    AROMA_VEIL = 165,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Flower_Veil_(ability) | Source} */
    FLOWER_VEIL = 166,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cheek_Pouch_(ability) | Source} */
    CHEEK_POUCH = 167,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Protean_(ability) | Source} */
    PROTEAN = 168,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fur_Coat_(ability) | Source} */
    FUR_COAT = 169,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Magician_(ability) | Source} */
    MAGICIAN = 170,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Bulletproof_(ability) | Source} */
    BULLETPROOF = 171,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Competitive_(ability) | Source} */
    COMPETITIVE = 172,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Strong_Jaw_(ability) | Source} */
    STRONG_JAW = 173,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Refrigerate_(ability) | Source} */
    REFRIGERATE = 174,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sweet_Veil_(ability) | Source} */
    SWEET_VEIL = 175,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stance_Change_(ability) | Source} */
    STANCE_CHANGE = 176,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gale_Wings_(ability) | Source} */
    GALE_WINGS = 177,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mega_Launcher_(ability) | Source} */
    MEGA_LAUNCHER = 178,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grass_Pelt_(ability) | Source} */
    GRASS_PELT = 179,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Symbiosis_(ability) | Source} */
    SYMBIOSIS = 180,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tough_Claws_(ability) | Source} */
    TOUGH_CLAWS = 181,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pixilate_(ability) | Source} */
    PIXILATE = 182,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gooey_(ability) | Source} */
    GOOEY = 183,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aerilate_(ability) | Source} */
    AERILATE = 184,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Parental_Bond_(ability) | Source} */
    PARENTAL_BOND = 185,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dark_Aura_(ability) | Source} */
    DARK_AURA = 186,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fairy_Aura_(ability) | Source} */
    FAIRY_AURA = 187,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Aura_Break_(ability) | Source} */
    AURA_BREAK = 188,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Primordial_Sea_(ability) | Source} */
    PRIMORDIAL_SEA = 189,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Desolate_Land_(ability) | Source} */
    DESOLATE_LAND = 190,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Delta_Stream_(ability) | Source} */
    DELTA_STREAM = 191,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stamina_(ability) | Source} */
    STAMINA = 192,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wimp_Out_(ability) | Source} */
    WIMP_OUT = 193,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Emergency_Exit_(ability) | Source} */
    EMERGENCY_EXIT = 194,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Compaction_(ability) | Source} */
    WATER_COMPACTION = 195,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Merciless_(ability) | Source} */
    MERCILESS = 196,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shields_Down_(ability) | Source} */
    SHIELDS_DOWN = 197,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stakeout_(ability) | Source} */
    STAKEOUT = 198,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Bubble_(ability) | Source} */
    WATER_BUBBLE = 199,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Steelworker_(ability) | Source} */
    STEELWORKER = 200,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Berserk_(ability) | Source} */
    BERSERK = 201,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Slush_Rush_(ability) | Source} */
    SLUSH_RUSH = 202,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Long_Reach_(ability) | Source} */
    LONG_REACH = 203,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Liquid_Voice_(ability) | Source} */
    LIQUID_VOICE = 204,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Triage_(ability) | Source} */
    TRIAGE = 205,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Galvanize_(ability) | Source} */
    GALVANIZE = 206,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Surge_Surfer_(ability) | Source} */
    SURGE_SURFER = 207,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Schooling_(ability) | Source} */
    SCHOOLING = 208,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Disguise_(ability) | Source} */
    DISGUISE = 209,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Battle_Bond_(ability) | Source} */
    BATTLE_BOND = 210,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Construct_(ability) | Source} */
    POWER_CONSTRUCT = 211,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Corrosion_(ability) | Source} */
    CORROSION = 212,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Comatose_(ability) | Source} */
    COMATOSE = 213,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Queenly_Majesty_(ability) | Source} */
    QUEENLY_MAJESTY = 214,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Innards_Out_(ability) | Source} */
    INNARDS_OUT = 215,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dancer_(ability) | Source} */
    DANCER = 216,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Battery_(ability) | Source} */
    BATTERY = 217,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Fluffy_(ability) | Source} */
    FLUFFY = 218,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dazzling_(ability) | Source} */
    DAZZLING = 219,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Soul_Heart_(ability) | Source} */
    SOUL_HEART = 220,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tangling_Hair_(ability) | Source} */
    TANGLING_HAIR = 221,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Receiver_(ability) | Source} */
    RECEIVER = 222,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Of_Alchemy_(ability) | Source} */
    POWER_OF_ALCHEMY = 223,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Beast_Boost_(ability) | Source} */
    BEAST_BOOST = 224,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rks_System_(ability) | Source} */
    RKS_SYSTEM = 225,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Electric_Surge_(ability) | Source} */
    ELECTRIC_SURGE = 226,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Psychic_Surge_(ability) | Source} */
    PSYCHIC_SURGE = 227,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Misty_Surge_(ability) | Source} */
    MISTY_SURGE = 228,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grassy_Surge_(ability) | Source} */
    GRASSY_SURGE = 229,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Full_Metal_Body_(ability) | Source} */
    FULL_METAL_BODY = 230,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Shadow_Shield_(ability) | Source} */
    SHADOW_SHIELD = 231,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Prism_Armor_(ability) | Source} */
    PRISM_ARMOR = 232,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Neuroforce_(ability) | Source} */
    NEUROFORCE = 233,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Intrepid_Sword_(ability) | Source} */
    INTREPID_SWORD = 234,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dauntless_Shield_(ability) | Source} */
    DAUNTLESS_SHIELD = 235,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Libero_(ability) | Source} */
    LIBERO = 236,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ball_Fetch_(ability) | Source} */
    BALL_FETCH = 237,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cotton_Down_(ability) | Source} */
    COTTON_DOWN = 238,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Propeller_Tail_(ability) | Source} */
    PROPELLER_TAIL = 239,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mirror_Armor_(ability) | Source} */
    MIRROR_ARMOR = 240,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gulp_Missile_(ability) | Source} */
    GULP_MISSILE = 241,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Stalwart_(ability) | Source} */
    STALWART = 242,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Steam_Engine_(ability) | Source} */
    STEAM_ENGINE = 243,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Punk_Rock_(ability) | Source} */
    PUNK_ROCK = 244,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sand_Spit_(ability) | Source} */
    SAND_SPIT = 245,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Scales_(ability) | Source} */
    ICE_SCALES = 246,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ripen_(ability) | Source} */
    RIPEN = 247,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Face_(ability) | Source} */
    ICE_FACE = 248,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Spot_(ability) | Source} */
    POWER_SPOT = 249,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mimicry_(ability) | Source} */
    MIMICRY = 250,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Screen_Cleaner_(ability) | Source} */
    SCREEN_CLEANER = 251,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Steely_Spirit_(ability) | Source} */
    STEELY_SPIRIT = 252,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Perish_Body_(ability) | Source} */
    PERISH_BODY = 253,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wandering_Spirit_(ability) | Source} */
    WANDERING_SPIRIT = 254,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Gorilla_Tactics_(ability) | Source} */
    GORILLA_TACTICS = 255,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Neutralizing_Gas_(ability) | Source} */
    NEUTRALIZING_GAS = 256,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Pastel_Veil_(ability) | Source} */
    PASTEL_VEIL = 257,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hunger_Switch_(ability) | Source} */
    HUNGER_SWITCH = 258,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Quick_Draw_(ability) | Source} */
    QUICK_DRAW = 259,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Unseen_Fist_(ability) | Source} */
    UNSEEN_FIST = 260,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Curious_Medicine_(ability) | Source} */
    CURIOUS_MEDICINE = 261,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Transistor_(ability) | Source} */
    TRANSISTOR = 262,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragons_Maw_(ability) | Source} */
    DRAGONS_MAW = 263,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Chilling_Neigh_(ability) | Source} */
    CHILLING_NEIGH = 264,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Grim_Neigh_(ability) | Source} */
    GRIM_NEIGH = 265,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/As_One_Glastrier_(ability) | Source} */
    AS_ONE_GLASTRIER = 266,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/As_One_Spectrier_(ability) | Source} */
    AS_ONE_SPECTRIER = 267,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Lingering_Aroma_(ability) | Source} */
    LINGERING_AROMA = 268,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Seed_Sower_(ability) | Source} */
    SEED_SOWER = 269,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Thermal_Exchange_(ability) | Source} */
    THERMAL_EXCHANGE = 270,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Anger_Shell_(ability) | Source} */
    ANGER_SHELL = 271,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Purifying_Salt_(ability) | Source} */
    PURIFYING_SALT = 272,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Well_Baked_Body_(ability) | Source} */
    WELL_BAKED_BODY = 273,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wind_Rider_(ability) | Source} */
    WIND_RIDER = 274,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Guard_Dog_(ability) | Source} */
    GUARD_DOG = 275,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Rocky_Payload_(ability) | Source} */
    ROCKY_PAYLOAD = 276,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Wind_Power_(ability) | Source} */
    WIND_POWER = 277,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Zero_To_Hero_(ability) | Source} */
    ZERO_TO_HERO = 278,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Commander_(ability) | Source} */
    COMMANDER = 279,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Electromorphosis_(ability) | Source} */
    ELECTROMORPHOSIS = 280,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Protosynthesis_(ability) | Source} */
    PROTOSYNTHESIS = 281,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Quark_Drive_(ability) | Source} */
    QUARK_DRIVE = 282,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Good_As_Gold_(ability) | Source} */
    GOOD_AS_GOLD = 283,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Vessel_Of_Ruin_(ability) | Source} */
    VESSEL_OF_RUIN = 284,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sword_Of_Ruin_(ability) | Source} */
    SWORD_OF_RUIN = 285,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tablets_Of_Ruin_(ability) | Source} */
    TABLETS_OF_RUIN = 286,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Beads_Of_Ruin_(ability) | Source} */
    BEADS_OF_RUIN = 287,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Orichalcum_Pulse_(ability) | Source} */
    ORICHALCUM_PULSE = 288,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hadron_Engine_(ability) | Source} */
    HADRON_ENGINE = 289,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Opportunist_(ability) | Source} */
    OPPORTUNIST = 290,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Cud_Chew_(ability) | Source} */
    CUD_CHEW = 291,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Sharpness_(ability) | Source} */
    SHARPNESS = 292,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Supreme_Overlord_(ability) | Source} */
    SUPREME_OVERLORD = 293,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Costar_(ability) | Source} */
    COSTAR = 294,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Toxic_Debris_(ability) | Source} */
    TOXIC_DEBRIS = 295,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Armor_Tail_(ability) | Source} */
    ARMOR_TAIL = 296,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Earth_Eater_(ability) | Source} */
    EARTH_EATER = 297,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Mycelium_Might_(ability) | Source} */
    MYCELIUM_MIGHT = 298,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Minds_Eye_(ability) | Source} */
    MINDS_EYE = 299,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Supersweet_Syrup_(ability) | Source} */
    SUPERSWEET_SYRUP = 300,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Hospitality_(ability) | Source} */
    HOSPITALITY = 301,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Toxic_Chain_(ability) | Source} */
    TOXIC_CHAIN = 302,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Embody_Aspect_Teal_(ability) | Source} */
    EMBODY_ASPECT_TEAL = 303,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Embody_Aspect_Wellspring_(ability) | Source} */
    EMBODY_ASPECT_WELLSPRING = 304,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Embody_Aspect_Hearthflame_(ability) | Source} */
    EMBODY_ASPECT_HEARTHFLAME = 305,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Embody_Aspect_Cornerstone_(ability) | Source} */
    EMBODY_ASPECT_CORNERSTONE = 306,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tera_Shift_(ability) | Source} */
    TERA_SHIFT = 307,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Tera_Shell_(ability) | Source} */
    TERA_SHELL = 308,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Teraform_Zero_(ability) | Source} */
    TERAFORM_ZERO = 309,
    /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Puppeteer_(ability) | Source} */
    POISON_PUPPETEER = 310,
  }
}
declare module 'src/enums/arena-tag-type' {
  export enum ArenaTagType {
    NONE = 'NONE',
    MUD_SPORT = 'MUD_SPORT',
    WATER_SPORT = 'WATER_SPORT',
    SPIKES = 'SPIKES',
    TOXIC_SPIKES = 'TOXIC_SPIKES',
    MIST = 'MIST',
    FUTURE_SIGHT = 'FUTURE_SIGHT',
    DOOM_DESIRE = 'DOOM_DESIRE',
    WISH = 'WISH',
    STEALTH_ROCK = 'STEALTH_ROCK',
    STICKY_WEB = 'STICKY_WEB',
    TRICK_ROOM = 'TRICK_ROOM',
    GRAVITY = 'GRAVITY',
    REFLECT = 'REFLECT',
    LIGHT_SCREEN = 'LIGHT_SCREEN',
    AURORA_VEIL = 'AURORA_VEIL',
    QUICK_GUARD = 'QUICK_GUARD',
    WIDE_GUARD = 'WIDE_GUARD',
    MAT_BLOCK = 'MAT_BLOCK',
    CRAFTY_SHIELD = 'CRAFTY_SHIELD',
    TAILWIND = 'TAILWIND',
    HAPPY_HOUR = 'HAPPY_HOUR',
  }
}
declare module 'src/data/arena-tag' {
  import {Arena} from 'src/field/arena';
  import {Type} from 'src/data/type';
  import {MoveCategory} from 'src/data/move';
  import Pokemon from 'src/field/pokemon';
  import {BattlerIndex} from 'src/battle';
  import {ArenaTagType} from 'src/enums/arena-tag-type';
  import {Moves} from 'src/enums/moves';
  export enum ArenaTagSide {
    BOTH = 0,
    PLAYER = 1,
    ENEMY = 2,
  }
  export abstract class ArenaTag {
    tagType: ArenaTagType;
    turnCount: number;
    sourceMove: Moves;
    sourceId: number;
    side: ArenaTagSide;
    constructor(tagType: ArenaTagType, turnCount: number, sourceMove: Moves, sourceId?: number, side?: ArenaTagSide);
    apply(arena: Arena, args: any[]): boolean;
    onAdd(arena: Arena, quiet?: boolean): void;
    onRemove(arena: Arena, quiet?: boolean): void;
    onOverlap(arena: Arena): void;
    lapse(arena: Arena): boolean;
    getMoveName(): string;
  }
  /**
   * Arena Tag class for {@link https://bulbapedia.bulbagarden.net/wiki/Mist_(move) Mist}.
   * Prevents Pokémon on the opposing side from lowering the stats of the Pokémon in the Mist.
   */
  export class MistTag extends ArenaTag {
    constructor(turnCount: number, sourceId: number, side: ArenaTagSide);
    onAdd(arena: Arena, quiet?: boolean): void;
    apply(arena: Arena, args: any[]): boolean;
  }
  /**
   * Reduces the damage of specific move categories in the arena.
   * @extends ArenaTag
   */
  export class WeakenMoveScreenTag extends ArenaTag {
    protected weakenedCategories: MoveCategory[];
    /**
     * Creates a new instance of the WeakenMoveScreenTag class.
     *
     * @param tagType - The type of the arena tag.
     * @param turnCount - The number of turns the tag is active.
     * @param sourceMove - The move that created the tag.
     * @param sourceId - The ID of the source of the tag.
     * @param side - The side (player or enemy) the tag affects.
     * @param weakenedCategories - The categories of moves that are weakened by this tag.
     */
    constructor(
      tagType: ArenaTagType,
      turnCount: number,
      sourceMove: Moves,
      sourceId: number,
      side: ArenaTagSide,
      weakenedCategories: MoveCategory[]
    );
    /**
     * Applies the weakening effect to the move.
     *
     * @param arena - The arena where the move is applied.
     * @param args - The arguments for the move application.
     * @param args[0] - The category of the move.
     * @param args[1] - A boolean indicating whether it is a double battle.
     * @param args[2] - An object of type `Utils.NumberHolder` that holds the damage multiplier
     *
     * @returns True if the move was weakened, otherwise false.
     */
    apply(arena: Arena, args: any[]): boolean;
  }
  /**
   * Abstract class to implement weakened moves of a specific type.
   */
  export class WeakenMoveTypeTag extends ArenaTag {
    private weakenedType;
    /**
     * Creates a new instance of the WeakenMoveTypeTag class.
     *
     * @param tagType - The type of the arena tag.
     * @param turnCount - The number of turns the tag is active.
     * @param type - The type being weakened from this tag.
     * @param sourceMove - The move that created the tag.
     * @param sourceId - The ID of the source of the tag.
     */
    constructor(tagType: ArenaTagType, turnCount: number, type: Type, sourceMove: Moves, sourceId: number);
    apply(arena: Arena, args: any[]): boolean;
  }
  /**
   * Abstract class to implement arena traps.
   */
  export class ArenaTrapTag extends ArenaTag {
    layers: number;
    maxLayers: number;
    /**
     * Creates a new instance of the ArenaTrapTag class.
     *
     * @param tagType - The type of the arena tag.
     * @param sourceMove - The move that created the tag.
     * @param sourceId - The ID of the source of the tag.
     * @param side - The side (player or enemy) the tag affects.
     * @param maxLayers - The maximum amount of layers this tag can have.
     */
    constructor(tagType: ArenaTagType, sourceMove: Moves, sourceId: number, side: ArenaTagSide, maxLayers: number);
    onOverlap(arena: Arena): void;
    apply(arena: Arena, args: any[]): boolean;
    activateTrap(pokemon: Pokemon): boolean;
    getMatchupScoreMultiplier(pokemon: Pokemon): number;
  }
  /**
   * Arena Tag class for {@link https://bulbapedia.bulbagarden.net/wiki/Trick_Room_(move) Trick Room}.
   * Reverses the Speed stats for all Pokémon on the field as long as this arena tag is up,
   * also reversing the turn order for all Pokémon on the field as well.
   */
  export class TrickRoomTag extends ArenaTag {
    constructor(turnCount: number, sourceId: number);
    apply(arena: Arena, args: any[]): boolean;
    onAdd(arena: Arena): void;
    onRemove(arena: Arena): void;
  }
  /**
   * Arena Tag class for {@link https://bulbapedia.bulbagarden.net/wiki/Gravity_(move) Gravity}.
   * Grounds all Pokémon on the field, including Flying-types and those with
   * {@linkcode Abilities.LEVITATE} for the duration of the arena tag, usually 5 turns.
   */
  export class GravityTag extends ArenaTag {
    constructor(turnCount: number);
    onAdd(arena: Arena): void;
    onRemove(arena: Arena): void;
  }
  export function getArenaTag(
    tagType: ArenaTagType,
    turnCount: number,
    sourceMove: Moves,
    sourceId: number,
    targetIndex?: BattlerIndex,
    side?: ArenaTagSide
  ): ArenaTag;
}
declare module 'src/events/arena' {
  import {ArenaTagSide} from 'src/data/arena-tag';
  import {ArenaTagType} from 'src/enums/arena-tag-type';
  import {TerrainType} from 'src/data/terrain';
  import {WeatherType} from 'src/data/weather';
  /** Alias for all {@linkcode ArenaEvent} type strings */
  export enum ArenaEventType {
    /** Triggers when a {@linkcode WeatherType} is added, overlapped, or removed */
    WEATHER_CHANGED = 'onWeatherChanged',
    /** Triggers when a {@linkcode TerrainType} is added, overlapped, or removed */
    TERRAIN_CHANGED = 'onTerrainChanged',
    /** Triggers when a {@linkcode ArenaTagType} is added */
    TAG_ADDED = 'onTagAdded',
    /** Triggers when a {@linkcode ArenaTagType} is removed */
    TAG_REMOVED = 'onTagRemoved',
  }
  /**
   * Base container class for all {@linkcode ArenaEventType} events
   * @extends Event
   */
  export class ArenaEvent extends Event {
    /** The total duration of the {@linkcode ArenaEventType} */
    duration: number;
    constructor(eventType: ArenaEventType, duration: number);
  }
  /**
   * Container class for {@linkcode ArenaEventType.WEATHER_CHANGED} events
   * @extends ArenaEvent
   */
  export class WeatherChangedEvent extends ArenaEvent {
    /** The {@linkcode WeatherType} being overridden */
    oldWeatherType: WeatherType;
    /** The {@linkcode WeatherType} being set */
    newWeatherType: WeatherType;
    constructor(oldWeatherType: WeatherType, newWeatherType: WeatherType, duration: number);
  }
  /**
   * Container class for {@linkcode ArenaEventType.TERRAIN_CHANGED} events
   * @extends ArenaEvent
   */
  export class TerrainChangedEvent extends ArenaEvent {
    /** The {@linkcode TerrainType} being overridden */
    oldTerrainType: TerrainType;
    /** The {@linkcode TerrainType} being set */
    newTerrainType: TerrainType;
    constructor(oldTerrainType: TerrainType, newTerrainType: TerrainType, duration: number);
  }
  /**
   * Container class for {@linkcode ArenaEventType.TAG_ADDED} events
   * @extends ArenaEvent
   */
  export class TagAddedEvent extends ArenaEvent {
    /** The {@linkcode ArenaTagType} being added */
    arenaTagType: ArenaTagType;
    /** The {@linkcode ArenaTagSide} the tag is being placed on */
    arenaTagSide: ArenaTagSide;
    /** The current number of layers of the arena trap. */
    arenaTagLayers: number;
    /** The maximum amount of layers of the arena trap. */
    arenaTagMaxLayers: number;
    constructor(
      arenaTagType: ArenaTagType,
      arenaTagSide: ArenaTagSide,
      duration: number,
      arenaTagLayers?: number,
      arenaTagMaxLayers?: number
    );
  }
  /**
   * Container class for {@linkcode ArenaEventType.TAG_REMOVED} events
   * @extends ArenaEvent
   */
  export class TagRemovedEvent extends ArenaEvent {
    /** The {@linkcode ArenaTagType} being removed */
    arenaTagType: ArenaTagType;
    /** The {@linkcode ArenaTagSide} the tag was being placed on */
    arenaTagSide: ArenaTagSide;
    constructor(arenaTagType: ArenaTagType, arenaTagSide: ArenaTagSide, duration: number);
  }
}
declare module 'src/field/arena' {
  import BattleScene from 'src/battle-scene';
  import {Constructor} from 'src/utils';
  import PokemonSpecies from 'src/data/pokemon-species';
  import {Weather, WeatherType} from 'src/data/weather';
  import {Type} from 'src/data/type';
  import Move from 'src/data/move';
  import {ArenaTag, ArenaTagSide} from 'src/data/arena-tag';
  import {BattlerIndex} from 'src/battle';
  import {Terrain, TerrainType} from 'src/data/terrain';
  import Pokemon from 'src/field/pokemon';
  import {ArenaTagType} from 'src/enums/arena-tag-type';
  import {Biome} from 'src/enums/biome';
  import {Moves} from 'src/enums/moves';
  import {TimeOfDay} from 'src/enums/time-of-day';
  import {TrainerType} from 'src/enums/trainer-type';
  export class Arena {
    scene: BattleScene;
    biomeType: Biome;
    weather: Weather;
    terrain: Terrain;
    tags: ArenaTag[];
    bgm: string;
    ignoreAbilities: boolean;
    private lastTimeOfDay;
    private pokemonPool;
    private trainerPool;
    readonly eventTarget: EventTarget;
    constructor(scene: BattleScene, biome: Biome, bgm: string);
    init(): void;
    updatePoolsForTimeOfDay(): void;
    randomSpecies(waveIndex: number, level: number, attempt?: number, luckValue?: number): PokemonSpecies;
    randomTrainerType(waveIndex: number): TrainerType;
    getSpeciesFormIndex(species: PokemonSpecies): number;
    getTypeForBiome():
      | Type.UNKNOWN
      | Type.NORMAL
      | Type.FIGHTING
      | Type.FLYING
      | Type.POISON
      | Type.GROUND
      | Type.ROCK
      | Type.BUG
      | Type.GHOST
      | Type.STEEL
      | Type.FIRE
      | Type.WATER
      | Type.GRASS
      | Type.ELECTRIC
      | Type.PSYCHIC
      | Type.ICE
      | Type.DRAGON
      | Type.DARK
      | Type.FAIRY;
    getBgTerrainColorRatioForBiome(): number;
    /**
     * Sets weather to the override specified in overrides.ts
     * @param weather new weather to set of type WeatherType
     * @returns true to force trySetWeather to return true
     */
    trySetWeatherOverride(weather: WeatherType): boolean;
    /**
     * Attempts to set a new weather to the battle
     * @param weather new weather to set of type WeatherType
     * @param hasPokemonSource is the new weather from a pokemon
     * @returns true if new weather set, false if no weather provided or attempting to set the same weather as currently in use
     */
    trySetWeather(weather: WeatherType, hasPokemonSource: boolean): boolean;
    trySetTerrain(terrain: TerrainType, hasPokemonSource: boolean, ignoreAnim?: boolean): boolean;
    isMoveWeatherCancelled(move: Move): boolean;
    isMoveTerrainCancelled(user: Pokemon, targets: BattlerIndex[], move: Move): boolean;
    getTerrainType(): TerrainType;
    getAttackTypeMultiplier(attackType: Type, grounded: boolean): number;
    getTrainerChance(): number;
    getTimeOfDay(): TimeOfDay;
    isOutside(): boolean;
    overrideTint(): [number, number, number];
    getDayTint(): [number, number, number];
    getDuskTint(): [number, number, number];
    getNightTint(): [number, number, number];
    setIgnoreAbilities(ignoreAbilities?: boolean): void;
    applyTagsForSide(tagType: ArenaTagType | Constructor<ArenaTag>, side: ArenaTagSide, ...args: unknown[]): void;
    applyTags(tagType: ArenaTagType | Constructor<ArenaTag>, ...args: unknown[]): void;
    addTag(
      tagType: ArenaTagType,
      turnCount: number,
      sourceMove: Moves,
      sourceId: number,
      side?: ArenaTagSide,
      quiet?: boolean,
      targetIndex?: BattlerIndex
    ): boolean;
    getTag(tagType: ArenaTagType | Constructor<ArenaTag>): ArenaTag;
    getTagOnSide(tagType: ArenaTagType | Constructor<ArenaTag>, side: ArenaTagSide): ArenaTag;
    findTags(tagPredicate: (t: ArenaTag) => boolean): ArenaTag[];
    findTagsOnSide(tagPredicate: (t: ArenaTag) => boolean, side: ArenaTagSide): ArenaTag[];
    lapseTags(): void;
    removeTag(tagType: ArenaTagType): boolean;
    removeTagOnSide(tagType: ArenaTagType, side: ArenaTagSide, quiet?: boolean): boolean;
    removeAllTags(): void;
    preloadBgm(): void;
    getBgmLoopPoint(): number;
  }
  export function getBiomeKey(biome: Biome): string;
  export function getBiomeHasProps(biomeType: Biome): boolean;
  export class ArenaBase {
    player: boolean;
    biome: Biome;
    propValue: number;
    base: any;
    props: any[];
    constructor(scene: BattleScene, player: boolean);
    setBiome(biome: Biome, propValue?: number): void;
  }
}
declare module 'src/game-mode' {
  import {FixedBattleConfig, FixedBattleConfigs} from 'src/battle';
  import BattleScene from 'src/battle-scene';
  import {Challenge} from 'src/data/challenge';
  import PokemonSpecies from 'src/data/pokemon-species';
  import {Arena} from 'src/field/arena';
  import {Biome} from 'src/enums/biome';
  export enum GameModes {
    CLASSIC = 0,
    ENDLESS = 1,
    SPLICED_ENDLESS = 2,
    DAILY = 3,
    CHALLENGE = 4,
  }
  interface GameModeConfig {
    isClassic?: boolean;
    isEndless?: boolean;
    isDaily?: boolean;
    hasTrainers?: boolean;
    hasNoShop?: boolean;
    hasShortBiomes?: boolean;
    hasRandomBiomes?: boolean;
    hasRandomBosses?: boolean;
    isSplicedOnly?: boolean;
    isChallenge?: boolean;
  }
  export class GameMode implements GameModeConfig {
    modeId: GameModes;
    isClassic: boolean;
    isEndless: boolean;
    isDaily: boolean;
    hasTrainers: boolean;
    hasNoShop: boolean;
    hasShortBiomes: boolean;
    hasRandomBiomes: boolean;
    hasRandomBosses: boolean;
    isSplicedOnly: boolean;
    isChallenge: boolean;
    challenges: Challenge[];
    battleConfig: FixedBattleConfigs;
    constructor(modeId: GameModes, config: GameModeConfig, battleConfig?: FixedBattleConfigs);
    /**
     * @returns either:
     * - override from overrides.ts
     * - 20 for Daily Runs
     * - 5 for all other modes
     */
    getStartingLevel(): number;
    /**
     * @returns either:
     * - override from overrides.ts
     * - 1000
     */
    getStartingMoney(): number;
    /**
     * @param scene current BattleScene
     * @returns either:
     * - random biome for Daily mode
     * - override from overrides.ts
     * - Town
     */
    getStartingBiome(scene: BattleScene): Biome;
    getWaveForDifficulty(waveIndex: number, ignoreCurveChanges?: boolean): number;
    isWaveTrainer(waveIndex: number, arena: Arena): boolean;
    isTrainerBoss(waveIndex: number, biomeType: Biome, offsetGym: boolean): boolean;
    getOverrideSpecies(waveIndex: number): PokemonSpecies;
    /**
     * Checks if wave provided is the final for current or specified game mode
     * @param waveIndex
     * @param modeId game mode
     * @returns if the current wave is final for classic or daily OR a minor boss in endless
     */
    isWaveFinal(waveIndex: number, modeId?: GameModes): boolean;
    /**
     * Every 10 waves is a boss battle
     * @returns true if waveIndex is a multiple of 10
     */
    isBoss(waveIndex: number): boolean;
    /**
     * Every 50 waves of an Endless mode is a boss
     * At this time it is paradox pokemon
     * @returns true if waveIndex is a multiple of 50 in Endless
     */
    isEndlessBoss(waveIndex: number): boolean;
    /**
     * Every 250 waves of an Endless mode is a minor boss
     * At this time it is Eternatus
     * @returns true if waveIndex is a multiple of 250 in Endless
     */
    isEndlessMinorBoss(waveIndex: number): boolean;
    /**
     * Every 1000 waves of an Endless mode is a major boss
     * At this time it is Eternamax Eternatus
     * @returns true if waveIndex is a multiple of 1000 in Endless
     */
    isEndlessMajorBoss(waveIndex: number): boolean;
    /**
     * Checks whether there is a fixed battle on this gamemode on a given wave.
     * @param {number} waveIndex The wave to check.
     * @returns {boolean} If this game mode has a fixed battle on this wave
     */
    isFixedBattle(waveIndex: number): boolean;
    /**
     * Returns the config for the fixed battle for a particular wave.
     * @param {number} waveIndex The wave to check.
     * @returns {boolean} The fixed battle for this wave.
     */
    getFixedBattle(waveIndex: number): FixedBattleConfig;
    getClearScoreBonus(): number;
    getEnemyModifierChance(isBoss: boolean): number;
    getName(): string;
    static getModeName(modeId: GameModes): string;
  }
  export function getGameMode(gameMode: GameModes): GameMode;
}
declare module 'src/system/unlockables' {
  export enum Unlockables {
    ENDLESS_MODE = 0,
    MINI_BLACK_HOLE = 1,
    SPLICED_ENDLESS_MODE = 2,
  }
  export function getUnlockableName(unlockable: Unlockables): string;
}
declare module 'src/enums/player-gender' {
  /**
   * enum for the players gender
   */
  export enum PlayerGender {
    UNSET = 0,
    MALE = 1,
    FEMALE = 2,
  }
}
declare module 'src/system/achv' {
  import {Modifier} from 'typescript';
  import BattleScene from 'src/battle-scene';
  import {PlayerGender} from 'src/enums/player-gender';
  import {Challenge} from 'src/data/challenge';
  export enum AchvTier {
    COMMON = 0,
    GREAT = 1,
    ULTRA = 2,
    ROGUE = 3,
    MASTER = 4,
  }
  export class Achv {
    localizationKey: string;
    id: string;
    name: string;
    description: string;
    iconImage: string;
    score: number;
    secret: boolean;
    hasParent: boolean;
    parentId: string;
    private conditionFunc;
    constructor(
      localizationKey: string,
      name: string,
      description: string,
      iconImage: string,
      score: number,
      conditionFunc?: (scene: BattleScene, args: any[]) => boolean
    );
    /**
     * Get the name of the achievement based on the gender of the player
     * @param playerGender - the gender of the player
     * @returns the name of the achievement localized for the player gender
     */
    getName(playerGender: PlayerGender): string;
    getDescription(): string;
    getIconImage(): string;
    setSecret(hasParent?: boolean): this;
    validate(scene: BattleScene, args: any[]): boolean;
    getTier(): AchvTier;
  }
  export class MoneyAchv extends Achv {
    moneyAmount: number;
    constructor(localizationKey: string, name: string, moneyAmount: number, iconImage: string, score: number);
  }
  export class RibbonAchv extends Achv {
    ribbonAmount: number;
    constructor(localizationKey: string, name: string, ribbonAmount: number, iconImage: string, score: number);
  }
  export class DamageAchv extends Achv {
    damageAmount: number;
    constructor(localizationKey: string, name: string, damageAmount: number, iconImage: string, score: number);
  }
  export class HealAchv extends Achv {
    healAmount: number;
    constructor(localizationKey: string, name: string, healAmount: number, iconImage: string, score: number);
  }
  export class LevelAchv extends Achv {
    level: number;
    constructor(localizationKey: string, name: string, level: number, iconImage: string, score: number);
  }
  export class ModifierAchv extends Achv {
    constructor(
      localizationKey: string,
      name: string,
      description: string,
      iconImage: string,
      score: number,
      modifierFunc: (modifier: Modifier) => boolean
    );
  }
  export class ChallengeAchv extends Achv {
    constructor(
      localizationKey: string,
      name: string,
      description: string,
      iconImage: string,
      score: number,
      challengeFunc: (challenge: Challenge) => boolean
    );
  }
  /**
   * Get the description of an achievement from the localization file with all the necessary variables filled in
   * @param localizationKey The localization key of the achievement
   * @returns The description of the achievement
   */
  export function getAchievementDescription(localizationKey: string): string;
  export const achvs: {
    _10K_MONEY: MoneyAchv;
    _100K_MONEY: MoneyAchv;
    _1M_MONEY: MoneyAchv;
    _10M_MONEY: MoneyAchv;
    _250_DMG: DamageAchv;
    _1000_DMG: DamageAchv;
    _2500_DMG: DamageAchv;
    _10000_DMG: DamageAchv;
    _250_HEAL: HealAchv;
    _1000_HEAL: HealAchv;
    _2500_HEAL: HealAchv;
    _10000_HEAL: HealAchv;
    LV_100: LevelAchv;
    LV_250: LevelAchv;
    LV_1000: LevelAchv;
    _10_RIBBONS: RibbonAchv;
    _25_RIBBONS: RibbonAchv;
    _50_RIBBONS: RibbonAchv;
    _75_RIBBONS: RibbonAchv;
    _100_RIBBONS: RibbonAchv;
    TRANSFER_MAX_BATTLE_STAT: Achv;
    MAX_FRIENDSHIP: Achv;
    MEGA_EVOLVE: Achv;
    GIGANTAMAX: Achv;
    TERASTALLIZE: Achv;
    STELLAR_TERASTALLIZE: Achv;
    SPLICE: Achv;
    MINI_BLACK_HOLE: ModifierAchv;
    CATCH_MYTHICAL: Achv;
    CATCH_SUB_LEGENDARY: Achv;
    CATCH_LEGENDARY: Achv;
    SEE_SHINY: Achv;
    SHINY_PARTY: Achv;
    HATCH_MYTHICAL: Achv;
    HATCH_SUB_LEGENDARY: Achv;
    HATCH_LEGENDARY: Achv;
    HATCH_SHINY: Achv;
    HIDDEN_ABILITY: Achv;
    PERFECT_IVS: Achv;
    CLASSIC_VICTORY: Achv;
    MONO_GEN_ONE_VICTORY: ChallengeAchv;
    MONO_GEN_TWO_VICTORY: ChallengeAchv;
    MONO_GEN_THREE_VICTORY: ChallengeAchv;
    MONO_GEN_FOUR_VICTORY: ChallengeAchv;
    MONO_GEN_FIVE_VICTORY: ChallengeAchv;
    MONO_GEN_SIX_VICTORY: ChallengeAchv;
    MONO_GEN_SEVEN_VICTORY: ChallengeAchv;
    MONO_GEN_EIGHT_VICTORY: ChallengeAchv;
    MONO_GEN_NINE_VICTORY: ChallengeAchv;
    MONO_NORMAL: ChallengeAchv;
    MONO_FIGHTING: ChallengeAchv;
    MONO_FLYING: ChallengeAchv;
    MONO_POISON: ChallengeAchv;
    MONO_GROUND: ChallengeAchv;
    MONO_ROCK: ChallengeAchv;
    MONO_BUG: ChallengeAchv;
    MONO_GHOST: ChallengeAchv;
    MONO_STEEL: ChallengeAchv;
    MONO_FIRE: ChallengeAchv;
    MONO_WATER: ChallengeAchv;
    MONO_GRASS: ChallengeAchv;
    MONO_ELECTRIC: ChallengeAchv;
    MONO_PSYCHIC: ChallengeAchv;
    MONO_ICE: ChallengeAchv;
    MONO_DRAGON: ChallengeAchv;
    MONO_DARK: ChallengeAchv;
    MONO_FAIRY: ChallengeAchv;
  };
  export function initAchievements(): void;
}
declare module 'src/data/dialogue' {
  export interface TrainerTypeMessages {
    encounter?: string | string[];
    victory?: string | string[];
    defeat?: string | string[];
  }
  export interface TrainerTypeDialogue {
    [key: number]: TrainerTypeMessages | Array<TrainerTypeMessages>;
  }
  export function getTrainerTypeDialogue(): TrainerTypeDialogue;
  export const trainerTypeDialogue: TrainerTypeDialogue;
  export const doubleBattleDialogue: {
    blue_red_double: {
      encounter: string[];
      victory: string[];
    };
    red_blue_double: {
      encounter: string[];
      victory: string[];
    };
    tate_liza_double: {
      encounter: string[];
      victory: string[];
    };
    liza_tate_double: {
      encounter: string[];
      victory: string[];
    };
    wallace_steven_double: {
      encounter: string[];
      victory: string[];
    };
    steven_wallace_double: {
      encounter: string[];
      victory: string[];
    };
    alder_iris_double: {
      encounter: string[];
      victory: string[];
    };
    iris_alder_double: {
      encounter: string[];
      victory: string[];
    };
    marnie_piers_double: {
      encounter: string[];
      victory: string[];
    };
    piers_marnie_double: {
      encounter: string[];
      victory: string[];
    };
  };
  export const battleSpecDialogue: {
    1: {
      encounter: string;
      firstStageWin: string;
      secondStageWin: string;
    };
  };
  export const miscDialogue: {
    ending: string[];
  };
  export function getCharVariantFromDialogue(message: string): string;
  export function initTrainerTypeDialogue(): void;
}
declare module 'src/plugins/i18n' {
  import i18next from 'i18next';
  export function initI18n(): Promise<void>;
  export default i18next;
  export function getIsInitialized(): boolean;
}
declare module 'src/enums/party-member-strength' {
  export enum PartyMemberStrength {
    WEAKEST = 0,
    WEAKER = 1,
    WEAK = 2,
    AVERAGE = 3,
    STRONG = 4,
    STRONGER = 5,
  }
}
declare module 'src/data/trainer-config' {
  import BattleScene from 'src/battle-scene';
  import {ModifierTypeFunc} from 'src/modifier/modifier-type';
  import {EnemyPokemon} from 'src/field/pokemon';
  import {PokemonSpeciesFilter} from 'src/data/pokemon-species';
  import {Type} from 'src/data/type';
  import {PersistentModifier} from 'src/modifier/modifier';
  import {TrainerVariant} from 'src/field/trainer';
  import {PartyMemberStrength} from 'src/enums/party-member-strength';
  import {Species} from 'src/enums/species';
  import {TrainerType} from 'src/enums/trainer-type';
  export enum TrainerPoolTier {
    COMMON = 0,
    UNCOMMON = 1,
    RARE = 2,
    SUPER_RARE = 3,
    ULTRA_RARE = 4,
  }
  export interface TrainerTierPools {
    [key: number]: Species[];
  }
  export enum TrainerSlot {
    NONE = 0,
    TRAINER = 1,
    TRAINER_PARTNER = 2,
  }
  export class TrainerPartyTemplate {
    size: number;
    strength: PartyMemberStrength;
    sameSpecies: boolean;
    balanced: boolean;
    constructor(size: number, strength: PartyMemberStrength, sameSpecies?: boolean, balanced?: boolean);
    getStrength(index: number): PartyMemberStrength;
    isSameSpecies(index: number): boolean;
    isBalanced(index: number): boolean;
  }
  export class TrainerPartyCompoundTemplate extends TrainerPartyTemplate {
    templates: TrainerPartyTemplate[];
    constructor(...templates: TrainerPartyTemplate[]);
    getStrength(index: number): PartyMemberStrength;
    isSameSpecies(index: number): boolean;
    isBalanced(index: number): boolean;
  }
  export const trainerPartyTemplates: {
    ONE_WEAK_ONE_STRONG: TrainerPartyCompoundTemplate;
    ONE_AVG: TrainerPartyTemplate;
    ONE_AVG_ONE_STRONG: TrainerPartyCompoundTemplate;
    ONE_STRONG: TrainerPartyTemplate;
    ONE_STRONGER: TrainerPartyTemplate;
    TWO_WEAKER: TrainerPartyTemplate;
    TWO_WEAK: TrainerPartyTemplate;
    TWO_WEAK_ONE_AVG: TrainerPartyCompoundTemplate;
    TWO_WEAK_SAME_ONE_AVG: TrainerPartyCompoundTemplate;
    TWO_WEAK_SAME_TWO_WEAK_SAME: TrainerPartyCompoundTemplate;
    TWO_WEAK_ONE_STRONG: TrainerPartyCompoundTemplate;
    TWO_AVG: TrainerPartyTemplate;
    TWO_AVG_ONE_STRONG: TrainerPartyCompoundTemplate;
    TWO_AVG_SAME_ONE_AVG: TrainerPartyCompoundTemplate;
    TWO_AVG_SAME_ONE_STRONG: TrainerPartyCompoundTemplate;
    TWO_AVG_SAME_TWO_AVG_SAME: TrainerPartyCompoundTemplate;
    TWO_STRONG: TrainerPartyTemplate;
    THREE_WEAK: TrainerPartyTemplate;
    THREE_WEAK_SAME: TrainerPartyTemplate;
    THREE_AVG: TrainerPartyTemplate;
    THREE_AVG_SAME: TrainerPartyTemplate;
    THREE_WEAK_BALANCED: TrainerPartyTemplate;
    FOUR_WEAKER: TrainerPartyTemplate;
    FOUR_WEAKER_SAME: TrainerPartyTemplate;
    FOUR_WEAK: TrainerPartyTemplate;
    FOUR_WEAK_SAME: TrainerPartyTemplate;
    FOUR_WEAK_BALANCED: TrainerPartyTemplate;
    FIVE_WEAKER: TrainerPartyTemplate;
    FIVE_WEAK: TrainerPartyTemplate;
    FIVE_WEAK_BALANCED: TrainerPartyTemplate;
    SIX_WEAKER: TrainerPartyTemplate;
    SIX_WEAKER_SAME: TrainerPartyTemplate;
    SIX_WEAK_SAME: TrainerPartyTemplate;
    SIX_WEAK_BALANCED: TrainerPartyTemplate;
    GYM_LEADER_1: TrainerPartyCompoundTemplate;
    GYM_LEADER_2: TrainerPartyCompoundTemplate;
    GYM_LEADER_3: TrainerPartyCompoundTemplate;
    GYM_LEADER_4: TrainerPartyCompoundTemplate;
    GYM_LEADER_5: TrainerPartyCompoundTemplate;
    ELITE_FOUR: TrainerPartyCompoundTemplate;
    CHAMPION: TrainerPartyCompoundTemplate;
    RIVAL: TrainerPartyCompoundTemplate;
    RIVAL_2: TrainerPartyCompoundTemplate;
    RIVAL_3: TrainerPartyCompoundTemplate;
    RIVAL_4: TrainerPartyCompoundTemplate;
    RIVAL_5: TrainerPartyCompoundTemplate;
    RIVAL_6: TrainerPartyCompoundTemplate;
  };
  type PartyTemplateFunc = (scene: BattleScene) => TrainerPartyTemplate;
  type PartyMemberFunc = (scene: BattleScene, level: number, strength: PartyMemberStrength) => EnemyPokemon;
  type GenModifiersFunc = (party: EnemyPokemon[]) => PersistentModifier[];
  export interface PartyMemberFuncs {
    [key: number]: PartyMemberFunc;
  }
  export class TrainerConfig {
    trainerType: TrainerType;
    trainerTypeDouble: TrainerType;
    name: string;
    nameFemale: string;
    nameDouble: string;
    title: string;
    titleDouble: string;
    hasGenders: boolean;
    hasDouble: boolean;
    hasCharSprite: boolean;
    doubleOnly: boolean;
    moneyMultiplier: number;
    isBoss: boolean;
    hasStaticParty: boolean;
    useSameSeedForAllMembers: boolean;
    mixedBattleBgm: string;
    battleBgm: string;
    encounterBgm: string;
    femaleEncounterBgm: string;
    doubleEncounterBgm: string;
    victoryBgm: string;
    genModifiersFunc: GenModifiersFunc;
    modifierRewardFuncs: ModifierTypeFunc[];
    partyTemplates: TrainerPartyTemplate[];
    partyTemplateFunc: PartyTemplateFunc;
    partyMemberFuncs: PartyMemberFuncs;
    speciesPools: TrainerTierPools;
    speciesFilter: PokemonSpeciesFilter;
    specialtyTypes: Type[];
    encounterMessages: string[];
    victoryMessages: string[];
    defeatMessages: string[];
    femaleEncounterMessages: string[];
    femaleVictoryMessages: string[];
    femaleDefeatMessages: string[];
    doubleEncounterMessages: string[];
    doubleVictoryMessages: string[];
    doubleDefeatMessages: string[];
    constructor(trainerType: TrainerType, allowLegendaries?: boolean);
    getKey(): string;
    getSpriteKey(female?: boolean, isDouble?: boolean): string;
    setName(name: string): TrainerConfig;
    setTitle(title: string): TrainerConfig;
    /**
     * Returns the derived trainer type for a given trainer type.
     * @param trainerTypeToDeriveFrom - The trainer type to derive from. (If null, the this.trainerType property will be used.)
     * @returns {TrainerType} - The derived trainer type.
     */
    getDerivedType(trainerTypeToDeriveFrom?: TrainerType): TrainerType;
    /**
     * Sets the configuration for trainers with genders, including the female name and encounter background music (BGM).
     * @param {string} [nameFemale] - The name of the female trainer. If 'Ivy', a localized name will be assigned.
     * @param {TrainerType | string} [femaleEncounterBgm] - The encounter BGM for the female trainer, which can be a TrainerType or a string.
     * @returns {TrainerConfig} - The updated TrainerConfig instance.
     **/
    setHasGenders(nameFemale?: string, femaleEncounterBgm?: TrainerType | string): TrainerConfig;
    /**
     * Sets the configuration for trainers with double battles, including the name of the double trainer and the encounter BGM.
     * @param nameDouble - The name of the double trainer (e.g., "Ace Duo" for Trainer Class Doubles or "red_blue_double" for NAMED trainer doubles).
     * @param doubleEncounterBgm - The encounter BGM for the double trainer, which can be a TrainerType or a string.
     * @returns {TrainerConfig} - The updated TrainerConfig instance.
     */
    setHasDouble(nameDouble: string, doubleEncounterBgm?: TrainerType | string): TrainerConfig;
    /**
     * Sets the trainer type for double battles.
     * @param trainerTypeDouble - The TrainerType of the partner in a double battle.
     * @returns {TrainerConfig} - The updated TrainerConfig instance.
     */
    setDoubleTrainerType(trainerTypeDouble: TrainerType): TrainerConfig;
    /**
     * Sets the encounter and victory messages for double trainers.
     * @param nameDouble - The name of the pair (e.g. "red_blue_double").
     */
    setDoubleMessages(nameDouble: string): void;
    /**
     * Sets the title for double trainers
     * @param titleDouble - the key for the title in the i18n file. (e.g., "champion_double").
     * @returns {TrainerConfig} - The updated TrainerConfig instance.
     */
    setDoubleTitle(titleDouble: string): TrainerConfig;
    setHasCharSprite(): TrainerConfig;
    setDoubleOnly(): TrainerConfig;
    setMoneyMultiplier(moneyMultiplier: number): TrainerConfig;
    setBoss(): TrainerConfig;
    setStaticParty(): TrainerConfig;
    setUseSameSeedForAllMembers(): TrainerConfig;
    setMixedBattleBgm(mixedBattleBgm: string): TrainerConfig;
    setBattleBgm(battleBgm: string): TrainerConfig;
    setEncounterBgm(encounterBgm: TrainerType | string): TrainerConfig;
    setVictoryBgm(victoryBgm: string): TrainerConfig;
    setPartyTemplates(...partyTemplates: TrainerPartyTemplate[]): TrainerConfig;
    setPartyTemplateFunc(partyTemplateFunc: PartyTemplateFunc): TrainerConfig;
    setPartyMemberFunc(slotIndex: number, partyMemberFunc: PartyMemberFunc): TrainerConfig;
    setSpeciesPools(speciesPools: TrainerTierPools | Species[]): TrainerConfig;
    setSpeciesFilter(speciesFilter: PokemonSpeciesFilter, allowLegendaries?: boolean): TrainerConfig;
    setSpecialtyTypes(...specialtyTypes: Type[]): TrainerConfig;
    setGenModifiersFunc(genModifiersFunc: GenModifiersFunc): TrainerConfig;
    setModifierRewardFuncs(...modifierTypeFuncs: (() => ModifierTypeFunc)[]): TrainerConfig;
    /**
     * Initializes the trainer configuration for an evil team leader. Temporarily hardcoding evil leader teams though.
     * @param {Species | Species[]} signatureSpecies - The signature species for the evil team leader.
     * @param {Type[]} specialtyTypes - The specialty types for the evil team Leader.
     * @param boolean whether or not this is the rematch fight
     * @returns {TrainerConfig} - The updated TrainerConfig instance.
     * **/
    initForEvilTeamLeader(
      title: string,
      signatureSpecies: (Species | Species[])[],
      rematch?: boolean,
      ...specialtyTypes: Type[]
    ): TrainerConfig;
    /**
     * Initializes the trainer configuration for a Gym Leader.
     * @param {Species | Species[]} signatureSpecies - The signature species for the Gym Leader.
     * @param {Type[]} specialtyTypes - The specialty types for the Gym Leader.
     * @param isMale - Whether the Gym Leader is Male or Not (for localization of the title).
     * @returns {TrainerConfig} - The updated TrainerConfig instance.
     * **/
    initForGymLeader(
      signatureSpecies: (Species | Species[])[],
      isMale: boolean,
      ...specialtyTypes: Type[]
    ): TrainerConfig;
    /**
     * Initializes the trainer configuration for an Elite Four member.
     * @param {Species | Species[]} signatureSpecies - The signature species for the Elite Four member.
     * @param {Type[]} specialtyTypes - The specialty types for the Elite Four member.
     * @param isMale - Whether the Elite Four Member is Male or Female (for localization of the title).
     * @returns {TrainerConfig} - The updated TrainerConfig instance.
     **/
    initForEliteFour(
      signatureSpecies: (Species | Species[])[],
      isMale: boolean,
      ...specialtyTypes: Type[]
    ): TrainerConfig;
    /**
     * Initializes the trainer configuration for a Champion.
     * @param {Species | Species[]} signatureSpecies - The signature species for the Champion.
     * @param isMale - Whether the Champion is Male or Female (for localization of the title).
     * @returns {TrainerConfig} - The updated TrainerConfig instance.
     **/
    initForChampion(signatureSpecies: (Species | Species[])[], isMale: boolean): TrainerConfig;
    /**
     * Retrieves the title for the trainer based on the provided trainer slot and variant.
     * @param {TrainerSlot} trainerSlot - The slot to determine which title to use. Defaults to TrainerSlot.NONE.
     * @param {TrainerVariant} variant - The variant of the trainer to determine the specific title.
     * @returns {string} - The title of the trainer.
     **/
    getTitle(trainerSlot: TrainerSlot, variant: TrainerVariant): string;
    loadAssets(scene: BattleScene, variant: TrainerVariant): Promise<void>;
  }
  interface TrainerConfigs {
    [key: number]: TrainerConfig;
  }
  type SignatureSpecies = {
    [key in string]: (Species | Species[])[];
  };
  export const signatureSpecies: SignatureSpecies;
  export const trainerConfigs: TrainerConfigs;
}
declare module 'src/system/voucher' {
  import BattleScene from 'src/battle-scene';
  import {AchvTier} from 'src/system/achv';
  import {PlayerGender} from 'src/enums/player-gender';
  export enum VoucherType {
    REGULAR = 0,
    PLUS = 1,
    PREMIUM = 2,
    GOLDEN = 3,
  }
  export class Voucher {
    id: string;
    voucherType: VoucherType;
    description: string;
    private conditionFunc;
    constructor(
      voucherType: VoucherType,
      description: string,
      conditionFunc?: (scene: BattleScene, args: any[]) => boolean
    );
    validate(scene: BattleScene, args: any[]): boolean;
    /**
     * Get the name of the voucher
     * @param playerGender - this is ignored here. It's only there to match the signature of the function in the Achv class
     * @returns the name of the voucher
     */
    getName(playerGender: PlayerGender): string;
    getIconImage(): string;
    getTier(): AchvTier;
  }
  export function getVoucherTypeName(voucherType: VoucherType): string;
  export function getVoucherTypeIcon(voucherType: VoucherType): string;
  export interface Vouchers {
    [key: string]: Voucher;
  }
  export const vouchers: Vouchers;
  export function initVouchers(): void;
}
declare module 'src/data/nature' {
  import {Stat} from 'src/data/pokemon-stat';
  import {UiTheme} from 'src/enums/ui-theme';
  export enum Nature {
    HARDY = 0,
    LONELY = 1,
    BRAVE = 2,
    ADAMANT = 3,
    NAUGHTY = 4,
    BOLD = 5,
    DOCILE = 6,
    RELAXED = 7,
    IMPISH = 8,
    LAX = 9,
    TIMID = 10,
    HASTY = 11,
    SERIOUS = 12,
    JOLLY = 13,
    NAIVE = 14,
    MODEST = 15,
    MILD = 16,
    QUIET = 17,
    BASHFUL = 18,
    RASH = 19,
    CALM = 20,
    GENTLE = 21,
    SASSY = 22,
    CAREFUL = 23,
    QUIRKY = 24,
  }
  export function getNatureName(
    nature: Nature,
    includeStatEffects?: boolean,
    forStarterSelect?: boolean,
    ignoreBBCode?: boolean,
    uiTheme?: UiTheme
  ): string;
  export function getNatureStatMultiplier(nature: Nature, stat: Stat): number;
}
declare module 'src/modifier/modifier-type' {
  import * as Modifiers from 'src/modifier/modifier';
  import {PokeballType} from 'src/data/pokeball';
  import Pokemon, {EnemyPokemon, PlayerPokemon} from 'src/field/pokemon';
  import {EvolutionItem} from 'src/data/pokemon-evolutions';
  import {Stat} from 'src/data/pokemon-stat';
  import {Type} from 'src/data/type';
  import {PokemonMoveSelectFilter, PokemonSelectFilter} from 'src/ui/party-ui-handler';
  import {TempBattleStat} from 'src/data/temp-battle-stat';
  import {StatusEffect} from 'src/data/status-effect';
  import BattleScene from 'src/battle-scene';
  import {VoucherType} from 'src/system/voucher';
  import {FormChangeItem} from 'src/data/pokemon-forms';
  import {ModifierTier} from 'src/modifier/modifier-tier';
  import {Nature} from 'src/data/nature';
  import {BerryType} from 'src/enums/berry-type';
  import {Moves} from 'src/enums/moves';
  import {Species} from 'src/enums/species';
  type Modifier = Modifiers.Modifier;
  export enum ModifierPoolType {
    PLAYER = 0,
    WILD = 1,
    TRAINER = 2,
    ENEMY_BUFF = 3,
    DAILY_STARTER = 4,
  }
  type NewModifierFunc = (type: ModifierType, args: any[]) => Modifier;
  export class ModifierType {
    id: string;
    localeKey: string;
    iconImage: string;
    group: string;
    soundName: string;
    tier: ModifierTier;
    protected newModifierFunc: NewModifierFunc;
    constructor(
      localeKey: string,
      iconImage: string,
      newModifierFunc: NewModifierFunc,
      group?: string,
      soundName?: string
    );
    get name(): string;
    getDescription(scene: BattleScene): string;
    setTier(tier: ModifierTier): void;
    getOrInferTier(poolType?: ModifierPoolType): ModifierTier;
    withIdFromFunc(func: ModifierTypeFunc): ModifierType;
    newModifier(...args: any[]): Modifier;
  }
  type ModifierTypeGeneratorFunc = (party: Pokemon[], pregenArgs?: any[]) => ModifierType;
  export class ModifierTypeGenerator extends ModifierType {
    private genTypeFunc;
    constructor(genTypeFunc: ModifierTypeGeneratorFunc);
    generateType(party: Pokemon[], pregenArgs?: any[]): ModifierType;
  }
  export interface GeneratedPersistentModifierType {
    getPregenArgs(): any[];
  }
  class AddPokeballModifierType extends ModifierType {
    private pokeballType;
    private count;
    constructor(iconImage: string, pokeballType: PokeballType, count: number);
    get name(): string;
    getDescription(scene: BattleScene): string;
  }
  class AddVoucherModifierType extends ModifierType {
    private voucherType;
    private count;
    constructor(voucherType: VoucherType, count: number);
    get name(): string;
    getDescription(scene: BattleScene): string;
  }
  export class PokemonModifierType extends ModifierType {
    selectFilter: PokemonSelectFilter;
    constructor(
      localeKey: string,
      iconImage: string,
      newModifierFunc: NewModifierFunc,
      selectFilter?: PokemonSelectFilter,
      group?: string,
      soundName?: string
    );
  }
  export class PokemonHeldItemModifierType extends PokemonModifierType {
    constructor(
      localeKey: string,
      iconImage: string,
      newModifierFunc: NewModifierFunc,
      group?: string,
      soundName?: string
    );
    newModifier(...args: any[]): Modifiers.PokemonHeldItemModifier;
  }
  export class PokemonHpRestoreModifierType extends PokemonModifierType {
    protected restorePoints: number;
    protected restorePercent: number;
    protected healStatus: boolean;
    constructor(
      localeKey: string,
      iconImage: string,
      restorePoints: number,
      restorePercent: number,
      healStatus?: boolean,
      newModifierFunc?: NewModifierFunc,
      selectFilter?: PokemonSelectFilter,
      group?: string
    );
    getDescription(scene: BattleScene): string;
  }
  export class PokemonReviveModifierType extends PokemonHpRestoreModifierType {
    constructor(localeKey: string, iconImage: string, restorePercent: number);
    getDescription(scene: BattleScene): string;
  }
  export class PokemonStatusHealModifierType extends PokemonModifierType {
    constructor(localeKey: string, iconImage: string);
    getDescription(scene: BattleScene): string;
  }
  export abstract class PokemonMoveModifierType extends PokemonModifierType {
    moveSelectFilter: PokemonMoveSelectFilter;
    constructor(
      localeKey: string,
      iconImage: string,
      newModifierFunc: NewModifierFunc,
      selectFilter?: PokemonSelectFilter,
      moveSelectFilter?: PokemonMoveSelectFilter,
      group?: string
    );
  }
  export class PokemonPpRestoreModifierType extends PokemonMoveModifierType {
    protected restorePoints: number;
    constructor(localeKey: string, iconImage: string, restorePoints: number);
    getDescription(scene: BattleScene): string;
  }
  export class PokemonAllMovePpRestoreModifierType extends PokemonModifierType {
    protected restorePoints: number;
    constructor(localeKey: string, iconImage: string, restorePoints: number);
    getDescription(scene: BattleScene): string;
  }
  export class PokemonPpUpModifierType extends PokemonMoveModifierType {
    protected upPoints: number;
    constructor(localeKey: string, iconImage: string, upPoints: number);
    getDescription(scene: BattleScene): string;
  }
  export class PokemonNatureChangeModifierType extends PokemonModifierType {
    protected nature: Nature;
    constructor(nature: Nature);
    get name(): string;
    getDescription(scene: BattleScene): string;
  }
  export class RememberMoveModifierType extends PokemonModifierType {
    constructor(localeKey: string, iconImage: string, group?: string);
  }
  export class DoubleBattleChanceBoosterModifierType extends ModifierType {
    battleCount: number;
    constructor(localeKey: string, iconImage: string, battleCount: number);
    getDescription(scene: BattleScene): string;
  }
  export class TempBattleStatBoosterModifierType extends ModifierType implements GeneratedPersistentModifierType {
    tempBattleStat: TempBattleStat;
    constructor(tempBattleStat: TempBattleStat);
    get name(): string;
    getDescription(scene: BattleScene): string;
    getPregenArgs(): any[];
  }
  export class BerryModifierType extends PokemonHeldItemModifierType implements GeneratedPersistentModifierType {
    private berryType;
    constructor(berryType: BerryType);
    get name(): string;
    getDescription(scene: BattleScene): string;
    getPregenArgs(): any[];
  }
  export class AttackTypeBoosterModifierType
    extends PokemonHeldItemModifierType
    implements GeneratedPersistentModifierType
  {
    moveType: Type;
    boostPercent: number;
    constructor(moveType: Type, boostPercent: number);
    get name(): string;
    getDescription(scene: BattleScene): string;
    getPregenArgs(): any[];
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
    private key;
    constructor(key: SpeciesStatBoosterItem);
    getPregenArgs(): any[];
  }
  export class PokemonLevelIncrementModifierType extends PokemonModifierType {
    constructor(localeKey: string, iconImage: string);
    getDescription(scene: BattleScene): string;
  }
  export class AllPokemonLevelIncrementModifierType extends ModifierType {
    constructor(localeKey: string, iconImage: string);
    getDescription(scene: BattleScene): string;
  }
  export class PokemonBaseStatBoosterModifierType
    extends PokemonHeldItemModifierType
    implements GeneratedPersistentModifierType
  {
    private localeName;
    private stat;
    constructor(localeName: string, stat: Stat);
    get name(): string;
    getDescription(scene: BattleScene): string;
    getPregenArgs(): any[];
  }
  class AllPokemonFullHpRestoreModifierType extends ModifierType {
    private descriptionKey;
    constructor(localeKey: string, iconImage: string, descriptionKey?: string, newModifierFunc?: NewModifierFunc);
    getDescription(scene: BattleScene): string;
  }
  class AllPokemonFullReviveModifierType extends AllPokemonFullHpRestoreModifierType {
    constructor(localeKey: string, iconImage: string);
  }
  export class MoneyRewardModifierType extends ModifierType {
    private moneyMultiplier;
    private moneyMultiplierDescriptorKey;
    constructor(localeKey: string, iconImage: string, moneyMultiplier: number, moneyMultiplierDescriptorKey: string);
    getDescription(scene: BattleScene): string;
  }
  export class ExpBoosterModifierType extends ModifierType {
    private boostPercent;
    constructor(localeKey: string, iconImage: string, boostPercent: number);
    getDescription(scene: BattleScene): string;
  }
  export class PokemonExpBoosterModifierType extends PokemonHeldItemModifierType {
    private boostPercent;
    constructor(localeKey: string, iconImage: string, boostPercent: number);
    getDescription(scene: BattleScene): string;
  }
  export class PokemonFriendshipBoosterModifierType extends PokemonHeldItemModifierType {
    constructor(localeKey: string, iconImage: string);
    getDescription(scene: BattleScene): string;
  }
  export class PokemonMoveAccuracyBoosterModifierType extends PokemonHeldItemModifierType {
    private amount;
    constructor(localeKey: string, iconImage: string, amount: number, group?: string, soundName?: string);
    getDescription(scene: BattleScene): string;
  }
  export class PokemonMultiHitModifierType extends PokemonHeldItemModifierType {
    constructor(localeKey: string, iconImage: string);
    getDescription(scene: BattleScene): string;
  }
  export class TmModifierType extends PokemonModifierType {
    moveId: Moves;
    constructor(moveId: Moves);
    get name(): string;
    getDescription(scene: BattleScene): string;
  }
  export class EvolutionItemModifierType extends PokemonModifierType implements GeneratedPersistentModifierType {
    evolutionItem: EvolutionItem;
    constructor(evolutionItem: EvolutionItem);
    get name(): string;
    getDescription(scene: BattleScene): string;
    getPregenArgs(): any[];
  }
  /**
   * Class that represents form changing items
   */
  export class FormChangeItemModifierType extends PokemonModifierType implements GeneratedPersistentModifierType {
    formChangeItem: FormChangeItem;
    constructor(formChangeItem: FormChangeItem);
    get name(): string;
    getDescription(scene: BattleScene): string;
    getPregenArgs(): any[];
  }
  export class FusePokemonModifierType extends PokemonModifierType {
    constructor(localeKey: string, iconImage: string);
    getDescription(scene: BattleScene): string;
  }
  class AttackTypeBoosterModifierTypeGenerator extends ModifierTypeGenerator {
    constructor();
  }
  /**
   * Modifier type generator for {@linkcode SpeciesStatBoosterModifierType}, which
   * encapsulates the logic for weighting the most useful held item from
   * the current list of {@linkcode items}.
   * @extends ModifierTypeGenerator
   */
  class SpeciesStatBoosterModifierTypeGenerator extends ModifierTypeGenerator {
    /** Object comprised of the currently available species-based stat boosting held items */
    static items: {
      LIGHT_BALL: {
        stats: Stat[];
        multiplier: number;
        species: Species[];
      };
      THICK_CLUB: {
        stats: Stat[];
        multiplier: number;
        species: Species[];
      };
      METAL_POWDER: {
        stats: Stat[];
        multiplier: number;
        species: Species[];
      };
      QUICK_POWDER: {
        stats: Stat[];
        multiplier: number;
        species: Species[];
      };
    };
    constructor();
  }
  class TmModifierTypeGenerator extends ModifierTypeGenerator {
    constructor(tier: ModifierTier);
  }
  class EvolutionItemModifierTypeGenerator extends ModifierTypeGenerator {
    constructor(rare: boolean);
  }
  class FormChangeItemModifierTypeGenerator extends ModifierTypeGenerator {
    constructor();
  }
  export class TerastallizeModifierType extends PokemonHeldItemModifierType implements GeneratedPersistentModifierType {
    private teraType;
    constructor(teraType: Type);
    get name(): string;
    getDescription(scene: BattleScene): string;
    getPregenArgs(): any[];
  }
  export class ContactHeldItemTransferChanceModifierType extends PokemonHeldItemModifierType {
    private chancePercent;
    constructor(localeKey: string, iconImage: string, chancePercent: number, group?: string, soundName?: string);
    getDescription(scene: BattleScene): string;
  }
  export class TurnHeldItemTransferModifierType extends PokemonHeldItemModifierType {
    constructor(localeKey: string, iconImage: string, group?: string, soundName?: string);
    getDescription(scene: BattleScene): string;
  }
  export class EnemyAttackStatusEffectChanceModifierType extends ModifierType {
    private chancePercent;
    private effect;
    constructor(localeKey: string, iconImage: string, chancePercent: number, effect: StatusEffect, stackCount?: number);
    getDescription(scene: BattleScene): string;
  }
  export class EnemyEndureChanceModifierType extends ModifierType {
    private chancePercent;
    constructor(localeKey: string, iconImage: string, chancePercent: number);
    getDescription(scene: BattleScene): string;
  }
  export type ModifierTypeFunc = () => ModifierType;
  type WeightedModifierTypeWeightFunc = (party: Pokemon[], rerollCount?: number) => number;
  class WeightedModifierType {
    modifierType: ModifierType;
    weight: number | WeightedModifierTypeWeightFunc;
    maxWeight: number;
    constructor(
      modifierTypeFunc: ModifierTypeFunc,
      weight: number | WeightedModifierTypeWeightFunc,
      maxWeight?: number
    );
    setTier(tier: ModifierTier): void;
  }
  export const modifierTypes: {
    POKEBALL: () => AddPokeballModifierType;
    GREAT_BALL: () => AddPokeballModifierType;
    ULTRA_BALL: () => AddPokeballModifierType;
    ROGUE_BALL: () => AddPokeballModifierType;
    MASTER_BALL: () => AddPokeballModifierType;
    RARE_CANDY: () => PokemonLevelIncrementModifierType;
    RARER_CANDY: () => AllPokemonLevelIncrementModifierType;
    EVOLUTION_ITEM: () => EvolutionItemModifierTypeGenerator;
    RARE_EVOLUTION_ITEM: () => EvolutionItemModifierTypeGenerator;
    FORM_CHANGE_ITEM: () => FormChangeItemModifierTypeGenerator;
    MEGA_BRACELET: () => ModifierType;
    DYNAMAX_BAND: () => ModifierType;
    TERA_ORB: () => ModifierType;
    MAP: () => ModifierType;
    POTION: () => PokemonHpRestoreModifierType;
    SUPER_POTION: () => PokemonHpRestoreModifierType;
    HYPER_POTION: () => PokemonHpRestoreModifierType;
    MAX_POTION: () => PokemonHpRestoreModifierType;
    FULL_RESTORE: () => PokemonHpRestoreModifierType;
    REVIVE: () => PokemonReviveModifierType;
    MAX_REVIVE: () => PokemonReviveModifierType;
    FULL_HEAL: () => PokemonStatusHealModifierType;
    SACRED_ASH: () => AllPokemonFullReviveModifierType;
    REVIVER_SEED: () => PokemonHeldItemModifierType;
    ETHER: () => PokemonPpRestoreModifierType;
    MAX_ETHER: () => PokemonPpRestoreModifierType;
    ELIXIR: () => PokemonAllMovePpRestoreModifierType;
    MAX_ELIXIR: () => PokemonAllMovePpRestoreModifierType;
    PP_UP: () => PokemonPpUpModifierType;
    PP_MAX: () => PokemonPpUpModifierType;
    LURE: () => DoubleBattleChanceBoosterModifierType;
    SUPER_LURE: () => DoubleBattleChanceBoosterModifierType;
    MAX_LURE: () => DoubleBattleChanceBoosterModifierType;
    SPECIES_STAT_BOOSTER: () => SpeciesStatBoosterModifierTypeGenerator;
    TEMP_STAT_BOOSTER: () => ModifierTypeGenerator;
    DIRE_HIT: () => TempBattleStatBoosterModifierType;
    BASE_STAT_BOOSTER: () => ModifierTypeGenerator;
    ATTACK_TYPE_BOOSTER: () => AttackTypeBoosterModifierTypeGenerator;
    MINT: () => ModifierTypeGenerator;
    TERA_SHARD: () => ModifierTypeGenerator;
    BERRY: () => ModifierTypeGenerator;
    TM_COMMON: () => TmModifierTypeGenerator;
    TM_GREAT: () => TmModifierTypeGenerator;
    TM_ULTRA: () => TmModifierTypeGenerator;
    MEMORY_MUSHROOM: () => RememberMoveModifierType;
    EXP_SHARE: () => ModifierType;
    EXP_BALANCE: () => ModifierType;
    OVAL_CHARM: () => ModifierType;
    EXP_CHARM: () => ExpBoosterModifierType;
    SUPER_EXP_CHARM: () => ExpBoosterModifierType;
    GOLDEN_EXP_CHARM: () => ExpBoosterModifierType;
    LUCKY_EGG: () => PokemonExpBoosterModifierType;
    GOLDEN_EGG: () => PokemonExpBoosterModifierType;
    SOOTHE_BELL: () => PokemonFriendshipBoosterModifierType;
    EVIOLITE: () => PokemonHeldItemModifierType;
    SOUL_DEW: () => PokemonHeldItemModifierType;
    NUGGET: () => MoneyRewardModifierType;
    BIG_NUGGET: () => MoneyRewardModifierType;
    RELIC_GOLD: () => MoneyRewardModifierType;
    AMULET_COIN: () => ModifierType;
    GOLDEN_PUNCH: () => PokemonHeldItemModifierType;
    COIN_CASE: () => ModifierType;
    LOCK_CAPSULE: () => ModifierType;
    GRIP_CLAW: () => ContactHeldItemTransferChanceModifierType;
    WIDE_LENS: () => PokemonMoveAccuracyBoosterModifierType;
    MULTI_LENS: () => PokemonMultiHitModifierType;
    HEALING_CHARM: () => ModifierType;
    CANDY_JAR: () => ModifierType;
    BERRY_POUCH: () => ModifierType;
    FOCUS_BAND: () => PokemonHeldItemModifierType;
    QUICK_CLAW: () => PokemonHeldItemModifierType;
    KINGS_ROCK: () => PokemonHeldItemModifierType;
    LEFTOVERS: () => PokemonHeldItemModifierType;
    SHELL_BELL: () => PokemonHeldItemModifierType;
    TOXIC_ORB: () => PokemonHeldItemModifierType;
    FLAME_ORB: () => PokemonHeldItemModifierType;
    BATON: () => PokemonHeldItemModifierType;
    SHINY_CHARM: () => ModifierType;
    ABILITY_CHARM: () => ModifierType;
    IV_SCANNER: () => ModifierType;
    DNA_SPLICERS: () => FusePokemonModifierType;
    MINI_BLACK_HOLE: () => TurnHeldItemTransferModifierType;
    VOUCHER: () => AddVoucherModifierType;
    VOUCHER_PLUS: () => AddVoucherModifierType;
    VOUCHER_PREMIUM: () => AddVoucherModifierType;
    GOLDEN_POKEBALL: () => ModifierType;
    ENEMY_DAMAGE_BOOSTER: () => ModifierType;
    ENEMY_DAMAGE_REDUCTION: () => ModifierType;
    ENEMY_HEAL: () => ModifierType;
    ENEMY_ATTACK_POISON_CHANCE: () => EnemyAttackStatusEffectChanceModifierType;
    ENEMY_ATTACK_PARALYZE_CHANCE: () => EnemyAttackStatusEffectChanceModifierType;
    ENEMY_ATTACK_BURN_CHANCE: () => EnemyAttackStatusEffectChanceModifierType;
    ENEMY_STATUS_EFFECT_HEAL_CHANCE: () => ModifierType;
    ENEMY_ENDURE_CHANCE: () => EnemyEndureChanceModifierType;
    ENEMY_FUSED_CHANCE: () => ModifierType;
  };
  interface ModifierPool {
    [tier: string]: WeightedModifierType[];
  }
  export function getModifierType(modifierTypeFunc: ModifierTypeFunc): ModifierType;
  export function getModifierPoolForType(poolType: ModifierPoolType): ModifierPool;
  export function regenerateModifierPoolThresholds(
    party: Pokemon[],
    poolType: ModifierPoolType,
    rerollCount?: number
  ): void;
  export function getModifierTypeFuncById(id: string): ModifierTypeFunc;
  export function getPlayerModifierTypeOptions(
    count: number,
    party: PlayerPokemon[],
    modifierTiers?: ModifierTier[]
  ): ModifierTypeOption[];
  export function getPlayerShopModifierTypeOptionsForWave(waveIndex: number, baseCost: number): ModifierTypeOption[];
  export function getEnemyBuffModifierForWave(
    tier: ModifierTier,
    enemyModifiers: Modifiers.PersistentModifier[],
    scene: BattleScene
  ): Modifiers.EnemyPersistentModifier;
  export function getEnemyModifierTypesForWave(
    waveIndex: number,
    count: number,
    party: EnemyPokemon[],
    poolType: ModifierPoolType.WILD | ModifierPoolType.TRAINER,
    upgradeChance?: number
  ): PokemonHeldItemModifierType[];
  export function getDailyRunStarterModifiers(party: PlayerPokemon[]): Modifiers.PokemonHeldItemModifier[];
  export function getDefaultModifierTypeForTier(tier: ModifierTier): ModifierType;
  export class ModifierTypeOption {
    type: ModifierType;
    upgradeCount: number;
    cost: number;
    constructor(type: ModifierType, upgradeCount: number, cost?: number);
  }
  export function getPartyLuckValue(party: Pokemon[]): number;
  export function getLuckString(luckValue: number): string;
  export function getLuckTextTint(luckValue: number): number;
}
declare module 'src/phase' {
  import BattleScene from 'src/battle-scene';
  export class Phase {
    protected scene: BattleScene;
    constructor(scene: BattleScene);
    start(): void;
    end(): void;
  }
}
declare module 'src/ui/evolution-scene-handler' {
  import BattleScene from 'src/battle-scene';
  import MessageUiHandler from 'src/ui/message-ui-handler';
  import {Button} from 'src/enums/buttons';
  export default class EvolutionSceneHandler extends MessageUiHandler {
    evolutionContainer: any;
    messageBg: any;
    messageContainer: any;
    canCancel: boolean;
    cancelled: boolean;
    constructor(scene: BattleScene);
    setup(): void;
    show(_args: any[]): boolean;
    processInput(button: Button): boolean;
    setCursor(_cursor: number): boolean;
    clear(): void;
  }
}
declare module 'src/field/anims' {
  import BattleScene from 'src/battle-scene';
  import {PokeballType} from 'src/data/pokeball';
  export function addPokeballOpenParticles(scene: BattleScene, x: number, y: number, pokeballType: PokeballType): void;
  export function addPokeballCaptureStars(scene: BattleScene, pokeball: any): void;
  export function sin(index: number, amplitude: number): number;
  export function cos(index: number, amplitude: number): number;
}
declare module 'src/evolution-phase' {
  import {Phase} from 'src/phase';
  import BattleScene from 'src/battle-scene';
  import {SpeciesFormEvolution} from 'src/data/pokemon-evolutions';
  import {PlayerPokemon} from 'src/field/pokemon';
  export class EvolutionPhase extends Phase {
    protected pokemon: PlayerPokemon;
    protected lastLevel: number;
    private evolution;
    protected evolutionContainer: any;
    protected evolutionBaseBg: any;
    protected evolutionBg: any;
    protected evolutionBgOverlay: any;
    protected evolutionOverlay: any;
    protected pokemonSprite: any;
    protected pokemonTintSprite: any;
    protected pokemonEvoSprite: any;
    protected pokemonEvoTintSprite: any;
    constructor(scene: BattleScene, pokemon: PlayerPokemon, evolution: SpeciesFormEvolution, lastLevel: number);
    validate(): boolean;
    setMode(): Promise<void>;
    start(): void;
    doEvolution(): void;
    doSpiralUpward(): void;
    doArcDownward(): void;
    doCycle(l: number, lastCycle?: number): Promise<boolean>;
    doCircleInward(): void;
    doSpray(): void;
    doSpiralUpwardParticle(trigIndex: number): void;
    doArcDownParticle(trigIndex: number): void;
    doCircleInwardParticle(trigIndex: number, speed: number): void;
    doSprayParticle(trigIndex: number): void;
  }
  export class EndEvolutionPhase extends Phase {
    constructor(scene: BattleScene);
    start(): void;
  }
}
declare module 'src/modifier/modifier' {
  import * as ModifierTypes from 'src/modifier/modifier-type';
  import BattleScene from 'src/battle-scene';
  import {PokeballType} from 'src/data/pokeball';
  import Pokemon, {PlayerPokemon} from 'src/field/pokemon';
  import {Stat} from 'src/data/pokemon-stat';
  import {Type} from 'src/data/type';
  import {TempBattleStat} from 'src/data/temp-battle-stat';
  import {BerryType} from 'src/enums/berry-type';
  import {StatusEffect} from 'src/data/status-effect';
  import {VoucherType} from 'src/system/voucher';
  import {FormChangeItem} from 'src/data/pokemon-forms';
  import {Nature} from 'src/data/nature';
  import {ModifierType} from 'src/modifier/modifier-type';
  import {Species} from 'src/enums/species';
  export type ModifierPredicate = (modifier: Modifier) => boolean;
  export const modifierSortFunc: (a: Modifier, b: Modifier) => number;
  export class ModifierBar {
    private player;
    private modifierCache;
    constructor(scene: BattleScene, enemy?: boolean);
    /**
     * Method to update content displayed in {@linkcode ModifierBar}
     * @param {PersistentModifier[]} modifiers - The list of modifiers to be displayed in the {@linkcode ModifierBar}
     * @param {boolean} hideHeldItems - If set to "true", only modifiers not assigned to a Pokémon are displayed
     */
    updateModifiers(modifiers: PersistentModifier[], hideHeldItems?: boolean): void;
    updateModifierOverflowVisibility(ignoreLimit: boolean): void;
    setModifierIconPosition(icon: any, modifierCount: number): void;
  }
  export abstract class Modifier {
    type: ModifierType;
    constructor(type: ModifierType);
    match(_modifier: Modifier): boolean;
    shouldApply(_args: any[]): boolean;
    abstract apply(args: any[]): boolean | Promise<boolean>;
  }
  export abstract class PersistentModifier extends Modifier {
    stackCount: number;
    virtualStackCount: number;
    constructor(type: ModifierType, stackCount: number);
    add(modifiers: PersistentModifier[], virtual: boolean, scene: BattleScene): boolean;
    abstract clone(): PersistentModifier;
    getArgs(): any[];
    incrementStack(scene: BattleScene, amount: number, virtual: boolean): boolean;
    getStackCount(): number;
    abstract getMaxStackCount(scene: BattleScene, forThreshold?: boolean): number;
    isIconVisible(scene: BattleScene): boolean;
    getIcon(scene: BattleScene, forSummary?: boolean): any;
    getIconStackText(scene: BattleScene, virtual?: boolean): any;
  }
  export abstract class ConsumableModifier extends Modifier {
    constructor(type: ModifierType);
    add(_modifiers: Modifier[]): boolean;
    shouldApply(args: any[]): boolean;
  }
  export class AddPokeballModifier extends ConsumableModifier {
    private pokeballType;
    private count;
    constructor(type: ModifierType, pokeballType: PokeballType, count: number);
    apply(args: any[]): boolean;
  }
  export class AddVoucherModifier extends ConsumableModifier {
    private voucherType;
    private count;
    constructor(type: ModifierType, voucherType: VoucherType, count: number);
    apply(args: any[]): boolean;
  }
  export abstract class LapsingPersistentModifier extends PersistentModifier {
    protected battlesLeft: number;
    constructor(type: ModifierTypes.ModifierType, battlesLeft?: number, stackCount?: number);
    lapse(args: any[]): boolean;
    getIcon(scene: BattleScene): any;
    getBattlesLeft(): number;
    getMaxStackCount(scene: BattleScene, forThreshold?: boolean): number;
  }
  export class DoubleBattleChanceBoosterModifier extends LapsingPersistentModifier {
    constructor(type: ModifierTypes.DoubleBattleChanceBoosterModifierType, battlesLeft: number, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): DoubleBattleChanceBoosterModifier;
    getArgs(): any[];
    /**
     * Modifies the chance of a double battle occurring
     * @param args A single element array containing the double battle chance as a NumberHolder
     * @returns {boolean} Returns true if the modifier was applied
     */
    apply(args: any[]): boolean;
  }
  export class TempBattleStatBoosterModifier extends LapsingPersistentModifier {
    private tempBattleStat;
    constructor(
      type: ModifierTypes.TempBattleStatBoosterModifierType,
      tempBattleStat: TempBattleStat,
      battlesLeft?: number,
      stackCount?: number
    );
    match(modifier: Modifier): boolean;
    clone(): TempBattleStatBoosterModifier;
    getArgs(): any[];
    apply(args: any[]): boolean;
  }
  export class MapModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    clone(): MapModifier;
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class MegaEvolutionAccessModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    clone(): MegaEvolutionAccessModifier;
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class GigantamaxAccessModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    clone(): GigantamaxAccessModifier;
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class TerastallizeAccessModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    clone(): TerastallizeAccessModifier;
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export abstract class PokemonHeldItemModifier extends PersistentModifier {
    pokemonId: number;
    constructor(type: ModifierType, pokemonId: number, stackCount: number);
    abstract matchType(_modifier: Modifier): boolean;
    match(modifier: Modifier): boolean;
    getArgs(): any[];
    shouldApply(args: any[]): boolean;
    getTransferrable(withinParty: boolean): boolean;
    isIconVisible(scene: BattleScene): boolean;
    getIcon(scene: BattleScene, forSummary?: boolean): any;
    getPokemon(scene: BattleScene): Pokemon;
    getScoreMultiplier(): number;
    getSecondaryChanceMultiplier(pokemon: Pokemon): number;
    getMaxStackCount(scene: BattleScene, forThreshold?: boolean): number;
    abstract getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export abstract class LapsingPokemonHeldItemModifier extends PokemonHeldItemModifier {
    protected battlesLeft: number;
    constructor(type: ModifierTypes.ModifierType, pokemonId: number, battlesLeft?: number, stackCount?: number);
    lapse(args: any[]): boolean;
    getIcon(scene: BattleScene, forSummary?: boolean): any;
    getBattlesLeft(): number;
    getMaxStackCount(scene: BattleScene, forThreshold?: boolean): number;
  }
  export class TerastallizeModifier extends LapsingPokemonHeldItemModifier {
    teraType: Type;
    constructor(
      type: ModifierTypes.TerastallizeModifierType,
      pokemonId: number,
      teraType: Type,
      battlesLeft?: number,
      stackCount?: number
    );
    matchType(modifier: Modifier): boolean;
    clone(): TerastallizeModifier;
    getArgs(): any[];
    apply(args: any[]): boolean;
    lapse(args: any[]): boolean;
    getTransferrable(withinParty: boolean): boolean;
    getScoreMultiplier(): number;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class PokemonBaseStatModifier extends PokemonHeldItemModifier {
    protected stat: Stat;
    constructor(
      type: ModifierTypes.PokemonBaseStatBoosterModifierType,
      pokemonId: number,
      stat: Stat,
      stackCount?: number
    );
    matchType(modifier: Modifier): boolean;
    clone(): PersistentModifier;
    getArgs(): any[];
    shouldApply(args: any[]): boolean;
    apply(args: any[]): boolean;
    getTransferrable(_withinParty: boolean): boolean;
    getScoreMultiplier(): number;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  /**
   * Modifier used for held items that apply {@linkcode Stat} boost(s)
   * using a multiplier.
   * @extends PokemonHeldItemModifier
   * @see {@linkcode apply}
   */
  export class StatBoosterModifier extends PokemonHeldItemModifier {
    /** The stats that the held item boosts */
    protected stats: Stat[];
    /** The multiplier used to increase the relevant stat(s) */
    protected multiplier: number;
    constructor(type: ModifierType, pokemonId: number, stats: Stat[], multiplier: number, stackCount?: number);
    clone(): StatBoosterModifier;
    getArgs(): any[];
    matchType(modifier: Modifier): boolean;
    /**
     * Checks if the incoming stat is listed in {@linkcode stats}
     * @param args [0] {@linkcode Pokemon} N/A
     *             [1] {@linkcode Stat} being checked at the time
     *             [2] {@linkcode Utils.NumberHolder} N/A
     * @returns true if the stat could be boosted, false otherwise
     */
    shouldApply(args: any[]): boolean;
    /**
     * Boosts the incoming stat by a {@linkcode multiplier} if the stat is listed
     * in {@linkcode stats}.
     * @param args [0] {@linkcode Pokemon} N/A
     *             [1] {@linkcode Stat} N/A
     *             [2] {@linkcode Utils.NumberHolder} that holds the resulting value of the stat
     * @returns true if the stat boost applies successfully, false otherwise
     * @see shouldApply
     */
    apply(args: any[]): boolean;
    getMaxHeldItemCount(_pokemon: Pokemon): number;
  }
  /**
   * Modifier used for held items, specifically Eviolite, that apply
   * {@linkcode Stat} boost(s) using a multiplier if the holder can evolve.
   * @extends StatBoosterModifier
   * @see {@linkcode apply}
   */
  export class EvolutionStatBoosterModifier extends StatBoosterModifier {
    clone(): EvolutionStatBoosterModifier;
    matchType(modifier: Modifier): boolean;
    /**
     * Boosts the incoming stat value by a {@linkcode multiplier} if the holder
     * can evolve. Note that, if the holder is a fusion, they will receive
     * only half of the boost if either of the fused members are fully
     * evolved. However, if they are both unevolved, the full boost
     * will apply.
     * @param args [0] {@linkcode Pokemon} that holds the held item
     *             [1] {@linkcode Stat} N/A
     *             [2] {@linkcode Utils.NumberHolder} that holds the resulting value of the stat
     * @returns true if the stat boost applies successfully, false otherwise
     * @see shouldApply
     */
    apply(args: any[]): boolean;
  }
  /**
   * Modifier used for held items that apply {@linkcode Stat} boost(s) using a
   * multiplier if the holder is of a specific {@linkcode Species}.
   * @extends StatBoosterModifier
   * @see {@linkcode apply}
   */
  export class SpeciesStatBoosterModifier extends StatBoosterModifier {
    /** The species that the held item's stat boost(s) apply to */
    private species;
    constructor(
      type: ModifierType,
      pokemonId: number,
      stats: Stat[],
      multiplier: number,
      species: Species[],
      stackCount?: number
    );
    clone(): SpeciesStatBoosterModifier;
    getArgs(): any[];
    matchType(modifier: Modifier): boolean;
    /**
     * Checks if the incoming stat is listed in {@linkcode stats} and if the holder's {@linkcode Species}
     * (or its fused species) is listed in {@linkcode species}.
     * @param args [0] {@linkcode Pokemon} that holds the held item
     *             [1] {@linkcode Stat} being checked at the time
     *             [2] {@linkcode Utils.NumberHolder} N/A
     * @returns true if the stat could be boosted, false otherwise
     */
    shouldApply(args: any[]): boolean;
    /**
     * Checks if either parameter is included in the corresponding lists
     * @param speciesId {@linkcode Species} being checked
     * @param stat {@linkcode Stat} being checked
     * @returns true if both parameters are in {@linkcode species} and {@linkcode stats} respectively, false otherwise
     */
    contains(speciesId: Species, stat: Stat): boolean;
  }
  /**
   * Applies Specific Type item boosts (e.g., Magnet)
   */
  export class AttackTypeBoosterModifier extends PokemonHeldItemModifier {
    private moveType;
    private boostMultiplier;
    constructor(type: ModifierType, pokemonId: number, moveType: Type, boostPercent: number, stackCount?: number);
    matchType(modifier: Modifier): boolean;
    clone(): AttackTypeBoosterModifier;
    getArgs(): any[];
    shouldApply(args: any[]): boolean;
    /**
     * @param {Array<any>} args Array
     *                          - Index 0: {Pokemon} Pokemon
     *                          - Index 1: {number} Move type
     *                          - Index 2: {Utils.NumberHolder} Move power
     * @returns {boolean} Returns true if boosts have been applied to the move.
     */
    apply(args: any[]): boolean;
    getScoreMultiplier(): number;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class SurviveDamageModifier extends PokemonHeldItemModifier {
    constructor(type: ModifierType, pokemonId: number, stackCount?: number);
    matchType(modifier: Modifier): boolean;
    clone(): SurviveDamageModifier;
    shouldApply(args: any[]): boolean;
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class BypassSpeedChanceModifier extends PokemonHeldItemModifier {
    constructor(type: ModifierType, pokemonId: number, stackCount?: number);
    matchType(modifier: Modifier): boolean;
    clone(): BypassSpeedChanceModifier;
    shouldApply(args: any[]): boolean;
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class FlinchChanceModifier extends PokemonHeldItemModifier {
    constructor(type: ModifierType, pokemonId: number, stackCount?: number);
    matchType(modifier: Modifier): boolean;
    clone(): FlinchChanceModifier;
    shouldApply(args: any[]): boolean;
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class TurnHealModifier extends PokemonHeldItemModifier {
    constructor(type: ModifierType, pokemonId: number, stackCount?: number);
    matchType(modifier: Modifier): boolean;
    clone(): TurnHealModifier;
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  /**
   * Modifier used for held items, namely Toxic Orb and Flame Orb, that apply a
   * set {@linkcode StatusEffect} at the end of a turn.
   * @extends PokemonHeldItemModifier
   * @see {@linkcode apply}
   */
  export class TurnStatusEffectModifier extends PokemonHeldItemModifier {
    /** The status effect to be applied by the held item */
    private effect;
    constructor(type: ModifierType, pokemonId: number, stackCount?: number);
    /**
     * Checks if {@linkcode modifier} is an instance of this class,
     * intentionally ignoring potentially different {@linkcode effect}s
     * to prevent held item stockpiling since the item obtained first
     * would be the only item able to {@linkcode apply} successfully.
     * @override
     * @param modifier {@linkcode Modifier} being type tested
     * @return true if {@linkcode modifier} is an instance of
     * TurnStatusEffectModifier, false otherwise
     */
    matchType(modifier: Modifier): boolean;
    clone(): TurnStatusEffectModifier;
    /**
     * Tries to inflicts the holder with the associated {@linkcode StatusEffect}.
     * @param args [0] {@linkcode Pokemon} that holds the held item
     * @returns true if the status effect was applied successfully, false if
     * otherwise
     */
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
    getStatusEffect(): StatusEffect;
  }
  export class HitHealModifier extends PokemonHeldItemModifier {
    constructor(type: ModifierType, pokemonId: number, stackCount?: number);
    matchType(modifier: Modifier): boolean;
    clone(): HitHealModifier;
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class LevelIncrementBoosterModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): LevelIncrementBoosterModifier;
    shouldApply(args: any[]): boolean;
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene, forThreshold?: boolean): number;
  }
  export class BerryModifier extends PokemonHeldItemModifier {
    berryType: BerryType;
    consumed: boolean;
    constructor(type: ModifierType, pokemonId: number, berryType: BerryType, stackCount?: number);
    matchType(modifier: Modifier): boolean;
    clone(): BerryModifier;
    getArgs(): any[];
    shouldApply(args: any[]): boolean;
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class PreserveBerryModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): PreserveBerryModifier;
    shouldApply(args: any[]): boolean;
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class PokemonInstantReviveModifier extends PokemonHeldItemModifier {
    constructor(type: ModifierType, pokemonId: number, stackCount?: number);
    matchType(modifier: Modifier): boolean;
    clone(): PokemonInstantReviveModifier;
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export abstract class ConsumablePokemonModifier extends ConsumableModifier {
    pokemonId: number;
    constructor(type: ModifierType, pokemonId: number);
    shouldApply(args: any[]): boolean;
    getPokemon(scene: BattleScene): PlayerPokemon;
  }
  export class PokemonHpRestoreModifier extends ConsumablePokemonModifier {
    private restorePoints;
    private restorePercent;
    private healStatus;
    fainted: boolean;
    constructor(
      type: ModifierType,
      pokemonId: number,
      restorePoints: number,
      restorePercent: number,
      healStatus: boolean,
      fainted?: boolean
    );
    shouldApply(args: any[]): boolean;
    apply(args: any[]): boolean;
  }
  export class PokemonStatusHealModifier extends ConsumablePokemonModifier {
    constructor(type: ModifierType, pokemonId: number);
    apply(args: any[]): boolean;
  }
  export abstract class ConsumablePokemonMoveModifier extends ConsumablePokemonModifier {
    moveIndex: number;
    constructor(type: ModifierType, pokemonId: number, moveIndex: number);
  }
  export class PokemonPpRestoreModifier extends ConsumablePokemonMoveModifier {
    private restorePoints;
    constructor(type: ModifierType, pokemonId: number, moveIndex: number, restorePoints: number);
    apply(args: any[]): boolean;
  }
  export class PokemonAllMovePpRestoreModifier extends ConsumablePokemonModifier {
    private restorePoints;
    constructor(type: ModifierType, pokemonId: number, restorePoints: number);
    apply(args: any[]): boolean;
  }
  export class PokemonPpUpModifier extends ConsumablePokemonMoveModifier {
    private upPoints;
    constructor(type: ModifierType, pokemonId: number, moveIndex: number, upPoints: number);
    apply(args: any[]): boolean;
  }
  export class PokemonNatureChangeModifier extends ConsumablePokemonModifier {
    nature: Nature;
    constructor(type: ModifierType, pokemonId: number, nature: Nature);
    apply(args: any[]): boolean;
  }
  export class PokemonLevelIncrementModifier extends ConsumablePokemonModifier {
    constructor(type: ModifierType, pokemonId: number);
    apply(args: any[]): boolean;
  }
  export class TmModifier extends ConsumablePokemonModifier {
    constructor(type: ModifierTypes.TmModifierType, pokemonId: number);
    apply(args: any[]): boolean;
  }
  export class RememberMoveModifier extends ConsumablePokemonModifier {
    levelMoveIndex: number;
    constructor(type: ModifierTypes.ModifierType, pokemonId: number, levelMoveIndex: number);
    apply(args: any[]): boolean;
  }
  export class EvolutionItemModifier extends ConsumablePokemonModifier {
    constructor(type: ModifierTypes.EvolutionItemModifierType, pokemonId: number);
    apply(args: any[]): boolean;
  }
  export class FusePokemonModifier extends ConsumablePokemonModifier {
    fusePokemonId: number;
    constructor(type: ModifierType, pokemonId: number, fusePokemonId: number);
    shouldApply(args: any[]): boolean;
    apply(args: any[]): Promise<boolean>;
  }
  export class MultipleParticipantExpBonusModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    match(modifier: Modifier): boolean;
    apply(_args: any[]): boolean;
    clone(): MultipleParticipantExpBonusModifier;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class HealingBoosterModifier extends PersistentModifier {
    private multiplier;
    constructor(type: ModifierType, multiplier: number, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): HealingBoosterModifier;
    getArgs(): any[];
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class ExpBoosterModifier extends PersistentModifier {
    private boostMultiplier;
    constructor(type: ModifierType, boostPercent: number, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): ExpBoosterModifier;
    getArgs(): any[];
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene, forThreshold?: boolean): number;
  }
  export class PokemonExpBoosterModifier extends PokemonHeldItemModifier {
    private boostMultiplier;
    constructor(
      type: ModifierTypes.PokemonExpBoosterModifierType,
      pokemonId: number,
      boostPercent: number,
      stackCount?: number
    );
    matchType(modifier: Modifier): boolean;
    clone(): PersistentModifier;
    getArgs(): any[];
    shouldApply(args: any[]): boolean;
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class ExpShareModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): ExpShareModifier;
    apply(_args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class ExpBalanceModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): ExpBalanceModifier;
    apply(_args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class PokemonFriendshipBoosterModifier extends PokemonHeldItemModifier {
    constructor(type: ModifierTypes.PokemonFriendshipBoosterModifierType, pokemonId: number, stackCount?: number);
    matchType(modifier: Modifier): boolean;
    clone(): PersistentModifier;
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class PokemonNatureWeightModifier extends PokemonHeldItemModifier {
    constructor(type: ModifierTypes.ModifierType, pokemonId: number, stackCount?: number);
    matchType(modifier: Modifier): boolean;
    clone(): PersistentModifier;
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class PokemonMoveAccuracyBoosterModifier extends PokemonHeldItemModifier {
    private accuracyAmount;
    constructor(
      type: ModifierTypes.PokemonMoveAccuracyBoosterModifierType,
      pokemonId: number,
      accuracy: number,
      stackCount?: number
    );
    matchType(modifier: Modifier): boolean;
    clone(): PersistentModifier;
    getArgs(): any[];
    shouldApply(args: any[]): boolean;
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class PokemonMultiHitModifier extends PokemonHeldItemModifier {
    constructor(type: ModifierTypes.PokemonMultiHitModifierType, pokemonId: number, stackCount?: number);
    matchType(modifier: Modifier): boolean;
    clone(): PersistentModifier;
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class PokemonFormChangeItemModifier extends PokemonHeldItemModifier {
    formChangeItem: FormChangeItem;
    active: boolean;
    constructor(
      type: ModifierTypes.FormChangeItemModifierType,
      pokemonId: number,
      formChangeItem: FormChangeItem,
      active: boolean,
      stackCount?: number
    );
    matchType(modifier: Modifier): boolean;
    clone(): PersistentModifier;
    getArgs(): any[];
    apply(args: any[]): boolean;
    getTransferrable(withinParty: boolean): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class MoneyRewardModifier extends ConsumableModifier {
    private moneyMultiplier;
    constructor(type: ModifierType, moneyMultiplier: number);
    apply(args: any[]): boolean;
  }
  export class MoneyMultiplierModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): MoneyMultiplierModifier;
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class DamageMoneyRewardModifier extends PokemonHeldItemModifier {
    constructor(type: ModifierType, pokemonId: number, stackCount?: number);
    matchType(modifier: Modifier): boolean;
    clone(): DamageMoneyRewardModifier;
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class MoneyInterestModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    match(modifier: Modifier): boolean;
    apply(args: any[]): boolean;
    clone(): MoneyInterestModifier;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class HiddenAbilityRateBoosterModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): HiddenAbilityRateBoosterModifier;
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class ShinyRateBoosterModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): ShinyRateBoosterModifier;
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class LockModifierTiersModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    match(modifier: Modifier): boolean;
    apply(args: any[]): boolean;
    clone(): LockModifierTiersModifier;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class SwitchEffectTransferModifier extends PokemonHeldItemModifier {
    constructor(type: ModifierType, pokemonId: number, stackCount?: number);
    matchType(modifier: Modifier): boolean;
    clone(): SwitchEffectTransferModifier;
    apply(args: any[]): boolean;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  /**
   * Abstract class for held items that steal other Pokemon's items.
   * @see {@linkcode TurnHeldItemTransferModifier}
   * @see {@linkcode ContactHeldItemTransferChanceModifier}
   */
  export abstract class HeldItemTransferModifier extends PokemonHeldItemModifier {
    constructor(type: ModifierType, pokemonId: number, stackCount?: number);
    /**
     * Determines the targets to transfer items from when this applies.
     * @param args\[0\] the {@linkcode Pokemon} holding this item
     * @returns the opponents of the source {@linkcode Pokemon}
     */
    getTargets(args: any[]): Pokemon[];
    /**
     * Steals an item from a set of target Pokemon.
     * This prioritizes high-tier held items when selecting the item to steal.
     * @param args \[0\] The {@linkcode Pokemon} holding this item
     * @returns true if an item was stolen; false otherwise.
     */
    apply(args: any[]): boolean;
    abstract getTransferredItemCount(): number;
    abstract getTransferMessage(pokemon: Pokemon, targetPokemon: Pokemon, item: ModifierTypes.ModifierType): string;
  }
  /**
   * Modifier for held items that steal items from the enemy at the end of
   * each turn.
   * @see {@linkcode modifierTypes[MINI_BLACK_HOLE]}
   */
  export class TurnHeldItemTransferModifier extends HeldItemTransferModifier {
    constructor(type: ModifierType, pokemonId: number, stackCount?: number);
    matchType(modifier: Modifier): boolean;
    clone(): TurnHeldItemTransferModifier;
    getTransferrable(withinParty: boolean): boolean;
    getTransferredItemCount(): number;
    getTransferMessage(pokemon: Pokemon, targetPokemon: Pokemon, item: ModifierTypes.ModifierType): string;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  /**
   * Modifier for held items that add a chance to steal items from the target of a
   * successful attack.
   * @see {@linkcode modifierTypes[GRIP_CLAW]}
   * @see {@linkcode HeldItemTransferModifier}
   */
  export class ContactHeldItemTransferChanceModifier extends HeldItemTransferModifier {
    private chance;
    constructor(type: ModifierType, pokemonId: number, chancePercent: number, stackCount?: number);
    /**
     * Determines the target to steal items from when this applies.
     * @param args\[0\] The {@linkcode Pokemon} holding this item
     * @param args\[1\] The {@linkcode Pokemon} the holder is targeting with an attack
     * @returns The target (args[1]) stored in array format for use in {@linkcode HeldItemTransferModifier.apply}
     */
    getTargets(args: any[]): Pokemon[];
    matchType(modifier: Modifier): boolean;
    clone(): ContactHeldItemTransferChanceModifier;
    getArgs(): any[];
    getTransferredItemCount(): number;
    getTransferMessage(pokemon: Pokemon, targetPokemon: Pokemon, item: ModifierTypes.ModifierType): string;
    getMaxHeldItemCount(pokemon: Pokemon): number;
  }
  export class IvScannerModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): IvScannerModifier;
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class ExtraModifierModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): ExtraModifierModifier;
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export abstract class EnemyPersistentModifier extends PersistentModifier {
    constructor(type: ModifierType, stackCount?: number);
    getMaxStackCount(scene: BattleScene): number;
  }
  abstract class EnemyDamageMultiplierModifier extends EnemyPersistentModifier {
    protected damageMultiplier: number;
    constructor(type: ModifierType, damageMultiplier: number, stackCount?: number);
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class EnemyDamageBoosterModifier extends EnemyDamageMultiplierModifier {
    constructor(type: ModifierType, boostPercent: number, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): EnemyDamageBoosterModifier;
    getArgs(): any[];
    getMaxStackCount(scene: BattleScene): number;
  }
  export class EnemyDamageReducerModifier extends EnemyDamageMultiplierModifier {
    constructor(type: ModifierType, reductionPercent: number, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): EnemyDamageReducerModifier;
    getArgs(): any[];
    getMaxStackCount(scene: BattleScene): number;
  }
  export class EnemyTurnHealModifier extends EnemyPersistentModifier {
    healPercent: number;
    constructor(type: ModifierType, healPercent: number, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): EnemyTurnHealModifier;
    getArgs(): any[];
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class EnemyAttackStatusEffectChanceModifier extends EnemyPersistentModifier {
    effect: StatusEffect;
    chance: number;
    constructor(type: ModifierType, effect: StatusEffect, chancePercent: number, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): EnemyAttackStatusEffectChanceModifier;
    getArgs(): any[];
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class EnemyStatusEffectHealChanceModifier extends EnemyPersistentModifier {
    chance: number;
    constructor(type: ModifierType, chancePercent: number, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): EnemyStatusEffectHealChanceModifier;
    getArgs(): any[];
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class EnemyEndureChanceModifier extends EnemyPersistentModifier {
    chance: number;
    constructor(type: ModifierType, chancePercent?: number, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): EnemyEndureChanceModifier;
    getArgs(): any[];
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  export class EnemyFusionChanceModifier extends EnemyPersistentModifier {
    private chance;
    constructor(type: ModifierType, chancePercent: number, stackCount?: number);
    match(modifier: Modifier): boolean;
    clone(): EnemyFusionChanceModifier;
    getArgs(): any[];
    apply(args: any[]): boolean;
    getMaxStackCount(scene: BattleScene): number;
  }
  /**
   * Uses override from overrides.ts to set PersistentModifiers for starting a new game
   * @param scene current BattleScene
   * @param player is this for player for enemy
   */
  export function overrideModifiers(scene: BattleScene, player?: boolean): void;
  /**
   * Uses override from overrides.ts to set PokemonHeldItemModifiers for starting a new game
   * @param scene current BattleScene
   * @param player is this for player for enemy
   */
  export function overrideHeldItems(scene: BattleScene, pokemon: Pokemon, player?: boolean): void;
}
declare module 'src/data/pokemon-forms' {
  import Pokemon from 'src/field/pokemon';
  import {StatusEffect} from 'src/data/status-effect';
  import {Constructor} from 'src/utils';
  import {Moves} from 'src/enums/moves';
  import {Species} from 'src/enums/species';
  import {TimeOfDay} from 'src/enums/time-of-day';
  export enum FormChangeItem {
    NONE = 0,
    ABOMASITE = 1,
    ABSOLITE = 2,
    AERODACTYLITE = 3,
    AGGRONITE = 4,
    ALAKAZITE = 5,
    ALTARIANITE = 6,
    AMPHAROSITE = 7,
    AUDINITE = 8,
    BANETTITE = 9,
    BEEDRILLITE = 10,
    BLASTOISINITE = 11,
    BLAZIKENITE = 12,
    CAMERUPTITE = 13,
    CHARIZARDITE_X = 14,
    CHARIZARDITE_Y = 15,
    DIANCITE = 16,
    GALLADITE = 17,
    GARCHOMPITE = 18,
    GARDEVOIRITE = 19,
    GENGARITE = 20,
    GLALITITE = 21,
    GYARADOSITE = 22,
    HERACRONITE = 23,
    HOUNDOOMINITE = 24,
    KANGASKHANITE = 25,
    LATIASITE = 26,
    LATIOSITE = 27,
    LOPUNNITE = 28,
    LUCARIONITE = 29,
    MANECTITE = 30,
    MAWILITE = 31,
    MEDICHAMITE = 32,
    METAGROSSITE = 33,
    MEWTWONITE_X = 34,
    MEWTWONITE_Y = 35,
    PIDGEOTITE = 36,
    PINSIRITE = 37,
    RAYQUAZITE = 38,
    SABLENITE = 39,
    SALAMENCITE = 40,
    SCEPTILITE = 41,
    SCIZORITE = 42,
    SHARPEDONITE = 43,
    SLOWBRONITE = 44,
    STEELIXITE = 45,
    SWAMPERTITE = 46,
    TYRANITARITE = 47,
    VENUSAURITE = 48,
    BLUE_ORB = 50,
    RED_ORB = 51,
    SHARP_METEORITE = 52,
    HARD_METEORITE = 53,
    SMOOTH_METEORITE = 54,
    ADAMANT_CRYSTAL = 55,
    LUSTROUS_GLOBE = 56,
    GRISEOUS_CORE = 57,
    REVEAL_GLASS = 58,
    GRACIDEA = 59,
    MAX_MUSHROOMS = 60,
    DARK_STONE = 61,
    LIGHT_STONE = 62,
    PRISON_BOTTLE = 63,
    N_LUNARIZER = 64,
    N_SOLARIZER = 65,
    RUSTED_SWORD = 66,
    RUSTED_SHIELD = 67,
    ICY_REINS_OF_UNITY = 68,
    SHADOW_REINS_OF_UNITY = 69,
    WELLSPRING_MASK = 70,
    HEARTHFLAME_MASK = 71,
    CORNERSTONE_MASK = 72,
    SHOCK_DRIVE = 73,
    BURN_DRIVE = 74,
    CHILL_DRIVE = 75,
    DOUSE_DRIVE = 76,
    FIST_PLATE = 100,
    SKY_PLATE = 101,
    TOXIC_PLATE = 102,
    EARTH_PLATE = 103,
    STONE_PLATE = 104,
    INSECT_PLATE = 105,
    SPOOKY_PLATE = 106,
    IRON_PLATE = 107,
    FLAME_PLATE = 108,
    SPLASH_PLATE = 109,
    MEADOW_PLATE = 110,
    ZAP_PLATE = 111,
    MIND_PLATE = 112,
    ICICLE_PLATE = 113,
    DRACO_PLATE = 114,
    DREAD_PLATE = 115,
    PIXIE_PLATE = 116,
    BLANK_PLATE = 117,
    LEGEND_PLATE = 118,
    FIGHTING_MEMORY = 119,
    FLYING_MEMORY = 120,
    POISON_MEMORY = 121,
    GROUND_MEMORY = 122,
    ROCK_MEMORY = 123,
    BUG_MEMORY = 124,
    GHOST_MEMORY = 125,
    STEEL_MEMORY = 126,
    FIRE_MEMORY = 127,
    WATER_MEMORY = 128,
    GRASS_MEMORY = 129,
    ELECTRIC_MEMORY = 130,
    PSYCHIC_MEMORY = 131,
    ICE_MEMORY = 132,
    DRAGON_MEMORY = 133,
    DARK_MEMORY = 134,
    FAIRY_MEMORY = 135,
    BLANK_MEMORY = 136,
  }
  export type SpeciesFormChangeConditionPredicate = (p: Pokemon) => boolean;
  export type SpeciesFormChangeConditionEnforceFunc = (p: Pokemon) => void;
  export class SpeciesFormChange {
    speciesId: Species;
    preFormKey: string;
    formKey: string;
    trigger: SpeciesFormChangeTrigger;
    quiet: boolean;
    private conditions;
    constructor(
      speciesId: Species,
      preFormKey: string,
      evoFormKey: string,
      trigger: SpeciesFormChangeTrigger,
      quiet?: boolean,
      ...conditions: SpeciesFormChangeCondition[]
    );
    canChange(pokemon: Pokemon): boolean;
    findTrigger(triggerType: Constructor<SpeciesFormChangeTrigger>): SpeciesFormChangeTrigger;
  }
  export class SpeciesFormChangeCondition {
    predicate: SpeciesFormChangeConditionPredicate;
    enforceFunc: SpeciesFormChangeConditionEnforceFunc;
    constructor(predicate: SpeciesFormChangeConditionPredicate, enforceFunc?: SpeciesFormChangeConditionEnforceFunc);
  }
  export abstract class SpeciesFormChangeTrigger {
    canChange(pokemon: Pokemon): boolean;
    hasTriggerType(triggerType: Constructor<SpeciesFormChangeTrigger>): boolean;
  }
  export class SpeciesFormChangeManualTrigger extends SpeciesFormChangeTrigger {
    canChange(pokemon: Pokemon): boolean;
  }
  export class SpeciesFormChangeCompoundTrigger {
    triggers: SpeciesFormChangeTrigger[];
    constructor(...triggers: SpeciesFormChangeTrigger[]);
    canChange(pokemon: Pokemon): boolean;
    hasTriggerType(triggerType: Constructor<SpeciesFormChangeTrigger>): boolean;
  }
  export class SpeciesFormChangeItemTrigger extends SpeciesFormChangeTrigger {
    item: FormChangeItem;
    active: boolean;
    constructor(item: FormChangeItem, active?: boolean);
    canChange(pokemon: Pokemon): boolean;
  }
  export class SpeciesFormChangeTimeOfDayTrigger extends SpeciesFormChangeTrigger {
    timesOfDay: TimeOfDay[];
    constructor(...timesOfDay: TimeOfDay[]);
    canChange(pokemon: Pokemon): boolean;
  }
  export class SpeciesFormChangeActiveTrigger extends SpeciesFormChangeTrigger {
    active: boolean;
    constructor(active?: boolean);
    canChange(pokemon: Pokemon): boolean;
  }
  export class SpeciesFormChangeStatusEffectTrigger extends SpeciesFormChangeTrigger {
    statusEffects: StatusEffect[];
    invert: boolean;
    constructor(statusEffects: StatusEffect | StatusEffect[], invert?: boolean);
    canChange(pokemon: Pokemon): boolean;
  }
  export class SpeciesFormChangeMoveLearnedTrigger extends SpeciesFormChangeTrigger {
    move: Moves;
    known: boolean;
    constructor(move: Moves, known?: boolean);
    canChange(pokemon: Pokemon): boolean;
  }
  export abstract class SpeciesFormChangeMoveTrigger extends SpeciesFormChangeTrigger {
    movePredicate: (m: Moves) => boolean;
    used: boolean;
    constructor(move: Moves | ((m: Moves) => boolean), used?: boolean);
  }
  export class SpeciesFormChangePreMoveTrigger extends SpeciesFormChangeMoveTrigger {
    canChange(pokemon: Pokemon): boolean;
  }
  export class SpeciesFormChangePostMoveTrigger extends SpeciesFormChangeMoveTrigger {
    canChange(pokemon: Pokemon): boolean;
  }
  export class SpeciesDefaultFormMatchTrigger extends SpeciesFormChangeTrigger {
    private formKey;
    constructor(formKey: string);
    canChange(pokemon: Pokemon): boolean;
  }
  export function getSpeciesFormChangeMessage(pokemon: Pokemon, formChange: SpeciesFormChange, preName: string): string;
  interface PokemonFormChanges {
    [key: string]: SpeciesFormChange[];
  }
  export const pokemonFormChanges: PokemonFormChanges;
  export function initPokemonForms(): void;
}
declare module 'src/data/battler-tags' {
  import {CommonAnim} from 'src/data/battle-anims';
  import Pokemon from 'src/field/pokemon';
  import {Stat} from 'src/data/pokemon-stat';
  import {Type} from 'src/data/type';
  import {TerrainType} from 'src/data/terrain';
  import {WeatherType} from 'src/data/weather';
  import {BattleStat} from 'src/data/battle-stat';
  import {Abilities} from 'src/enums/abilities';
  import {BattlerTagType} from 'src/enums/battler-tag-type';
  import {Moves} from 'src/enums/moves';
  export enum BattlerTagLapseType {
    FAINT = 0,
    MOVE = 1,
    PRE_MOVE = 2,
    AFTER_MOVE = 3,
    MOVE_EFFECT = 4,
    TURN_END = 5,
    CUSTOM = 6,
  }
  export class BattlerTag {
    tagType: BattlerTagType;
    lapseType: BattlerTagLapseType;
    turnCount: number;
    sourceMove: Moves;
    sourceId?: number;
    constructor(
      tagType: BattlerTagType,
      lapseType: BattlerTagLapseType,
      turnCount: number,
      sourceMove: Moves,
      sourceId?: number
    );
    canAdd(pokemon: Pokemon): boolean;
    onAdd(pokemon: Pokemon): void;
    onRemove(pokemon: Pokemon): void;
    onOverlap(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
    getDescriptor(): string;
    isSourceLinked(): boolean;
    getMoveName(): string;
    /**
     * When given a battler tag or json representing one, load the data for it.
     * This is meant to be inherited from by any battler tag with custom attributes
     * @param {BattlerTag | any} source A battler tag
     */
    loadTag(source: BattlerTag | any): void;
  }
  export interface WeatherBattlerTag {
    weatherTypes: WeatherType[];
  }
  export interface TerrainBattlerTag {
    terrainTypes: TerrainType[];
  }
  export class RechargingTag extends BattlerTag {
    constructor(sourceMove: Moves);
    onAdd(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  export class TrappedTag extends BattlerTag {
    constructor(
      tagType: BattlerTagType,
      lapseType: BattlerTagLapseType,
      turnCount: number,
      sourceMove: Moves,
      sourceId: number
    );
    canAdd(pokemon: Pokemon): boolean;
    onAdd(pokemon: Pokemon): void;
    onRemove(pokemon: Pokemon): void;
    getDescriptor(): string;
    isSourceLinked(): boolean;
    getTrapMessage(pokemon: Pokemon): string;
  }
  export class FlinchedTag extends BattlerTag {
    constructor(sourceMove: Moves);
    onAdd(pokemon: Pokemon): void;
    canAdd(pokemon: Pokemon): boolean;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
    getDescriptor(): string;
  }
  export class InterruptedTag extends BattlerTag {
    constructor(sourceMove: Moves);
    canAdd(pokemon: Pokemon): boolean;
    onAdd(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  /**
   * BattlerTag that represents the {@link https://bulbapedia.bulbagarden.net/wiki/Confusion_(status_condition)}
   */
  export class ConfusedTag extends BattlerTag {
    constructor(turnCount: number, sourceMove: Moves);
    canAdd(pokemon: Pokemon): boolean;
    onAdd(pokemon: Pokemon): void;
    onRemove(pokemon: Pokemon): void;
    onOverlap(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
    getDescriptor(): string;
  }
  /**
   * Tag applied to the {@linkcode Move.DESTINY_BOND} user.
   * @extends BattlerTag
   * @see {@linkcode apply}
   */
  export class DestinyBondTag extends BattlerTag {
    constructor(sourceMove: Moves, sourceId: number);
    /**
     * Lapses either before the user's move and does nothing
     * or after receiving fatal damage. When the damage is fatal,
     * the attacking Pokemon is taken down as well, unless it's a boss.
     *
     * @param {Pokemon} pokemon Pokemon that is attacking the Destiny Bond user.
     * @param {BattlerTagLapseType} lapseType CUSTOM or PRE_MOVE
     * @returns false if the tag source fainted or one turn has passed since the application
     */
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  export class InfatuatedTag extends BattlerTag {
    constructor(sourceMove: number, sourceId: number);
    canAdd(pokemon: Pokemon): boolean;
    onAdd(pokemon: Pokemon): void;
    onOverlap(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
    onRemove(pokemon: Pokemon): void;
    isSourceLinked(): boolean;
    getDescriptor(): string;
  }
  export class SeedTag extends BattlerTag {
    private sourceIndex;
    constructor(sourceId: number);
    /**
     * When given a battler tag or json representing one, load the data for it.
     * @param {BattlerTag | any} source A battler tag
     */
    loadTag(source: BattlerTag | any): void;
    canAdd(pokemon: Pokemon): boolean;
    onAdd(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
    getDescriptor(): string;
  }
  export class NightmareTag extends BattlerTag {
    constructor();
    onAdd(pokemon: Pokemon): void;
    onOverlap(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
    getDescriptor(): string;
  }
  export class FrenzyTag extends BattlerTag {
    constructor(sourceMove: Moves, sourceId: number);
    onRemove(pokemon: Pokemon): void;
  }
  export class ChargingTag extends BattlerTag {
    constructor(sourceMove: Moves, sourceId: number);
  }
  export class EncoreTag extends BattlerTag {
    moveId: Moves;
    constructor(sourceId: number);
    /**
     * When given a battler tag or json representing one, load the data for it.
     * @param {BattlerTag | any} source A battler tag
     */
    loadTag(source: BattlerTag | any): void;
    canAdd(pokemon: Pokemon): boolean;
    onAdd(pokemon: Pokemon): void;
    onRemove(pokemon: Pokemon): void;
  }
  export class HelpingHandTag extends BattlerTag {
    constructor(sourceId: number);
    onAdd(pokemon: Pokemon): void;
  }
  /**
   * Applies the Ingrain tag to a pokemon
   * @extends TrappedTag
   */
  export class IngrainTag extends TrappedTag {
    constructor(sourceId: number);
    /**
     * Check if the Ingrain tag can be added to the pokemon
     * @param pokemon {@linkcode Pokemon} The pokemon to check if the tag can be added to
     * @returns boolean True if the tag can be added, false otherwise
     */
    canAdd(pokemon: Pokemon): boolean;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
    getTrapMessage(pokemon: Pokemon): string;
    getDescriptor(): string;
  }
  export class AquaRingTag extends BattlerTag {
    constructor();
    onAdd(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  /** Tag used to allow moves that interact with {@link Moves.MINIMIZE} to function */
  export class MinimizeTag extends BattlerTag {
    constructor();
    canAdd(pokemon: Pokemon): boolean;
    onAdd(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
    onRemove(pokemon: Pokemon): void;
  }
  export class DrowsyTag extends BattlerTag {
    constructor();
    canAdd(pokemon: Pokemon): boolean;
    onAdd(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
    getDescriptor(): string;
  }
  export abstract class DamagingTrapTag extends TrappedTag {
    private commonAnim;
    constructor(
      tagType: BattlerTagType,
      commonAnim: CommonAnim,
      turnCount: number,
      sourceMove: Moves,
      sourceId: number
    );
    /**
     * When given a battler tag or json representing one, load the data for it.
     * @param {BattlerTag | any} source A battler tag
     */
    loadTag(source: BattlerTag | any): void;
    canAdd(pokemon: Pokemon): boolean;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  export class BindTag extends DamagingTrapTag {
    constructor(turnCount: number, sourceId: number);
    getTrapMessage(pokemon: Pokemon): string;
  }
  export class WrapTag extends DamagingTrapTag {
    constructor(turnCount: number, sourceId: number);
    getTrapMessage(pokemon: Pokemon): string;
  }
  export abstract class VortexTrapTag extends DamagingTrapTag {
    constructor(
      tagType: BattlerTagType,
      commonAnim: CommonAnim,
      turnCount: number,
      sourceMove: Moves,
      sourceId: number
    );
    getTrapMessage(pokemon: Pokemon): string;
  }
  export class FireSpinTag extends VortexTrapTag {
    constructor(turnCount: number, sourceId: number);
  }
  export class WhirlpoolTag extends VortexTrapTag {
    constructor(turnCount: number, sourceId: number);
  }
  export class ClampTag extends DamagingTrapTag {
    constructor(turnCount: number, sourceId: number);
    getTrapMessage(pokemon: Pokemon): string;
  }
  export class SandTombTag extends DamagingTrapTag {
    constructor(turnCount: number, sourceId: number);
    getTrapMessage(pokemon: Pokemon): string;
  }
  export class MagmaStormTag extends DamagingTrapTag {
    constructor(turnCount: number, sourceId: number);
    getTrapMessage(pokemon: Pokemon): string;
  }
  export class SnapTrapTag extends DamagingTrapTag {
    constructor(turnCount: number, sourceId: number);
    getTrapMessage(pokemon: Pokemon): string;
  }
  export class ThunderCageTag extends DamagingTrapTag {
    constructor(turnCount: number, sourceId: number);
    getTrapMessage(pokemon: Pokemon): string;
  }
  export class InfestationTag extends DamagingTrapTag {
    constructor(turnCount: number, sourceId: number);
    getTrapMessage(pokemon: Pokemon): string;
  }
  export class ProtectedTag extends BattlerTag {
    constructor(sourceMove: Moves, tagType?: BattlerTagType);
    onAdd(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  export class ContactDamageProtectedTag extends ProtectedTag {
    private damageRatio;
    constructor(sourceMove: Moves, damageRatio: number);
    /**
     * When given a battler tag or json representing one, load the data for it.
     * @param {BattlerTag | any} source A battler tag
     */
    loadTag(source: BattlerTag | any): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  export class ContactStatChangeProtectedTag extends ProtectedTag {
    private stat;
    private levels;
    constructor(sourceMove: Moves, tagType: BattlerTagType, stat: BattleStat, levels: number);
    /**
     * When given a battler tag or json representing one, load the data for it.
     * @param {BattlerTag | any} source A battler tag
     */
    loadTag(source: BattlerTag | any): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  export class ContactPoisonProtectedTag extends ProtectedTag {
    constructor(sourceMove: Moves);
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  export class ContactBurnProtectedTag extends ProtectedTag {
    constructor(sourceMove: Moves);
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  export class EnduringTag extends BattlerTag {
    constructor(sourceMove: Moves);
    onAdd(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  export class SturdyTag extends BattlerTag {
    constructor(sourceMove: Moves);
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  export class PerishSongTag extends BattlerTag {
    constructor(turnCount: number);
    canAdd(pokemon: Pokemon): boolean;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  /**
   * Applies the "Center of Attention" volatile status effect, the effect applied by Follow Me, Rage Powder, and Spotlight.
   * @see {@link https://bulbapedia.bulbagarden.net/wiki/Center_of_attention | Center of Attention}
   */
  export class CenterOfAttentionTag extends BattlerTag {
    powder: boolean;
    constructor(sourceMove: Moves);
    /** "Center of Attention" can't be added if an ally is already the Center of Attention. */
    canAdd(pokemon: Pokemon): boolean;
    onAdd(pokemon: Pokemon): void;
  }
  export class AbilityBattlerTag extends BattlerTag {
    ability: Abilities;
    constructor(tagType: BattlerTagType, ability: Abilities, lapseType: BattlerTagLapseType, turnCount: number);
    /**
     * When given a battler tag or json representing one, load the data for it.
     * @param {BattlerTag | any} source A battler tag
     */
    loadTag(source: BattlerTag | any): void;
  }
  export class TruantTag extends AbilityBattlerTag {
    constructor();
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  export class SlowStartTag extends AbilityBattlerTag {
    constructor();
    onAdd(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
    onRemove(pokemon: Pokemon): void;
  }
  export class HighestStatBoostTag extends AbilityBattlerTag {
    stat: Stat;
    multiplier: number;
    constructor(tagType: BattlerTagType, ability: Abilities);
    /**
     * When given a battler tag or json representing one, load the data for it.
     * @param {BattlerTag | any} source A battler tag
     */
    loadTag(source: BattlerTag | any): void;
    onAdd(pokemon: Pokemon): void;
    onRemove(pokemon: Pokemon): void;
  }
  export class WeatherHighestStatBoostTag extends HighestStatBoostTag implements WeatherBattlerTag {
    weatherTypes: WeatherType[];
    constructor(tagType: BattlerTagType, ability: Abilities, ...weatherTypes: WeatherType[]);
    /**
     * When given a battler tag or json representing one, load the data for it.
     * @param {BattlerTag | any} source A battler tag
     */
    loadTag(source: BattlerTag | any): void;
  }
  export class TerrainHighestStatBoostTag extends HighestStatBoostTag implements TerrainBattlerTag {
    terrainTypes: TerrainType[];
    constructor(tagType: BattlerTagType, ability: Abilities, ...terrainTypes: TerrainType[]);
    /**
     * When given a battler tag or json representing one, load the data for it.
     * @param {BattlerTag | any} source A battler tag
     */
    loadTag(source: BattlerTag | any): void;
  }
  export class SemiInvulnerableTag extends BattlerTag {
    constructor(tagType: BattlerTagType, turnCount: number, sourceMove: Moves);
    onAdd(pokemon: Pokemon): void;
    onRemove(pokemon: Pokemon): void;
  }
  export class TypeImmuneTag extends BattlerTag {
    immuneType: Type;
    constructor(tagType: BattlerTagType, sourceMove: Moves, immuneType: Type, length?: number);
    /**
     * When given a battler tag or json representing one, load the data for it.
     * @param {BattlerTag | any} source A battler tag
     */
    loadTag(source: BattlerTag | any): void;
  }
  export class MagnetRisenTag extends TypeImmuneTag {
    constructor(tagType: BattlerTagType, sourceMove: Moves);
    onAdd(pokemon: Pokemon): void;
    onRemove(pokemon: Pokemon): void;
  }
  export class TypeBoostTag extends BattlerTag {
    boostedType: Type;
    boostValue: number;
    oneUse: boolean;
    constructor(tagType: BattlerTagType, sourceMove: Moves, boostedType: Type, boostValue: number, oneUse: boolean);
    /**
     * When given a battler tag or json representing one, load the data for it.
     * @param {BattlerTag | any} source A battler tag
     */
    loadTag(source: BattlerTag | any): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  export class CritBoostTag extends BattlerTag {
    constructor(tagType: BattlerTagType, sourceMove: Moves);
    onAdd(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
    onRemove(pokemon: Pokemon): void;
  }
  export class AlwaysCritTag extends BattlerTag {
    constructor(sourceMove: Moves);
  }
  export class IgnoreAccuracyTag extends BattlerTag {
    constructor(sourceMove: Moves);
  }
  export class SaltCuredTag extends BattlerTag {
    private sourceIndex;
    constructor(sourceId: number);
    /**
     * When given a battler tag or json representing one, load the data for it.
     * @param {BattlerTag | any} source A battler tag
     */
    loadTag(source: BattlerTag | any): void;
    onAdd(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  export class CursedTag extends BattlerTag {
    private sourceIndex;
    constructor(sourceId: number);
    /**
     * When given a battler tag or json representing one, load the data for it.
     * @param {BattlerTag | any} source A battler tag
     */
    loadTag(source: BattlerTag | any): void;
    onAdd(pokemon: Pokemon): void;
    lapse(pokemon: Pokemon, lapseType: BattlerTagLapseType): boolean;
  }
  /**
   * Battler tag for effects that ground the source, allowing Ground-type moves to hit them. Encompasses two tag types:
   * @item IGNORE_FLYING: Persistent grounding effects (i.e. from Smack Down and Thousand Waves)
   * @item ROOSTED: One-turn grounding effects (i.e. from Roost)
   */
  export class GroundedTag extends BattlerTag {
    constructor(tagType: BattlerTagType, lapseType: BattlerTagLapseType, sourceMove: Moves);
  }
  /**
   * Provides the Ice Face ability's effects.
   */
  export class IceFaceTag extends BattlerTag {
    constructor(sourceMove: Moves);
    /**
     * Determines if the Ice Face tag can be added to the Pokémon.
     * @param {Pokemon} pokemon - The Pokémon to which the tag might be added.
     * @returns {boolean} - True if the tag can be added, false otherwise.
     */
    canAdd(pokemon: Pokemon): boolean;
    /**
     * Applies the Ice Face tag to the Pokémon.
     * Triggers a form change to Ice Face if the Pokémon is not in its Ice Face form.
     * @param {Pokemon} pokemon - The Pokémon to which the tag is added.
     */
    onAdd(pokemon: Pokemon): void;
    /**
     * Removes the Ice Face tag from the Pokémon.
     * Triggers a form change to Noice when the tag is removed.
     * @param {Pokemon} pokemon - The Pokémon from which the tag is removed.
     */
    onRemove(pokemon: Pokemon): void;
  }
  export function getBattlerTag(
    tagType: BattlerTagType,
    turnCount: number,
    sourceMove: Moves,
    sourceId: number
  ): BattlerTag;
  /**
   * When given a battler tag or json representing one, creates an actual BattlerTag object with the same data.
   * @param {BattlerTag | any} source A battler tag
   * @return {BattlerTag} The valid battler tag
   */
  export function loadBattlerTag(source: BattlerTag | any): BattlerTag;
}
declare module 'src/data/ability' {
  import Pokemon, {HitResult, PokemonMove} from 'src/field/pokemon';
  import {Type} from 'src/data/type';
  import {Constructor} from 'src/utils';
  import * as Utils from 'src/utils';
  import {BattleStat} from 'src/data/battle-stat';
  import {Weather, WeatherType} from 'src/data/weather';
  import {BattlerTag} from 'src/data/battler-tags';
  import {StatusEffect} from 'src/data/status-effect';
  import Move, {MoveCategory} from 'src/data/move';
  import {Stat} from 'src/data/pokemon-stat';
  import {PokemonHeldItemModifier} from 'src/modifier/modifier';
  import {TerrainType} from 'src/data/terrain';
  import {
    AbilityTranslationEntries,
    Localizable,
    SimpleTranslationEntries,
    StatusEffectTranslationEntries,
  } from 'src/interfaces/locales';
  import {BattlerIndex} from 'src/battle';
  import {Abilities} from 'src/enums/abilities';
  import {ArenaTagType} from 'src/enums/arena-tag-type';
  import {BattlerTagType} from 'src/enums/battler-tag-type';
  import {Moves} from 'src/enums/moves';
  export class Ability implements Localizable {
    id: Abilities;
    private nameAppend;
    name: string;
    description: string;
    generation: number;
    isBypassFaint: boolean;
    isIgnorable: boolean;
    attrs: AbAttr[];
    conditions: AbAttrCondition[];
    constructor(id: Abilities, generation: number);
    localize(): void;
    /**
     * Get all ability attributes that match `attrType`
     * @param attrType any attribute that extends {@linkcode AbAttr}
     * @returns Array of attributes that match `attrType`, Empty Array if none match.
     */
    getAttrs<T extends AbAttr>(attrType: Constructor<T>): T[];
    /**
     * Check if an ability has an attribute that matches `attrType`
     * @param attrType any attribute that extends {@linkcode AbAttr}
     * @returns true if the ability has attribute `attrType`
     */
    hasAttr<T extends AbAttr>(attrType: Constructor<T>): boolean;
    attr<T extends Constructor<AbAttr>>(AttrType: T, ...args: ConstructorParameters<T>): Ability;
    conditionalAttr<T extends Constructor<AbAttr>>(
      condition: AbAttrCondition,
      AttrType: T,
      ...args: ConstructorParameters<T>
    ): Ability;
    bypassFaint(): Ability;
    ignorable(): Ability;
    condition(condition: AbAttrCondition): Ability;
    partial(): this;
    unimplemented(): this;
  }
  type AbAttrCondition = (pokemon: Pokemon) => boolean;
  type PokemonAttackCondition = (user: Pokemon, target: Pokemon, move: Move) => boolean;
  type PokemonDefendCondition = (target: Pokemon, user: Pokemon, move: Move) => boolean;
  type PokemonStatChangeCondition = (target: Pokemon, statsChanged: BattleStat[], levels: number) => boolean;
  export abstract class AbAttr {
    showAbility: boolean;
    private extraCondition;
    constructor(showAbility?: boolean);
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean | Promise<boolean>;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
    getCondition(): AbAttrCondition | null;
    addCondition(condition: AbAttrCondition): AbAttr;
  }
  export class BlockRecoilDamageAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): any;
  }
  export class DoubleBattleChanceAbAttr extends AbAttr {
    constructor();
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class PostBattleInitAbAttr extends AbAttr {
    applyPostBattleInit(pokemon: Pokemon, passive: boolean, args: any[]): boolean | Promise<boolean>;
  }
  export class PostBattleInitFormChangeAbAttr extends PostBattleInitAbAttr {
    private formFunc;
    constructor(formFunc: (p: Pokemon) => number);
    applyPostBattleInit(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostBattleInitStatChangeAbAttr extends PostBattleInitAbAttr {
    private stats;
    private levels;
    private selfTarget;
    constructor(stats: BattleStat | BattleStat[], levels: number, selfTarget?: boolean);
    applyPostBattleInit(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  type PreDefendAbAttrCondition = (pokemon: Pokemon, attacker: Pokemon, move: Move) => boolean;
  export class PreDefendAbAttr extends AbAttr {
    applyPreDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean | Promise<boolean>;
  }
  export class PreDefendFormChangeAbAttr extends PreDefendAbAttr {
    private formFunc;
    constructor(formFunc: (p: Pokemon) => number);
    applyPreDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
  }
  export class PreDefendFullHpEndureAbAttr extends PreDefendAbAttr {
    applyPreDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
  }
  export class BlockItemTheftAbAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  export class StabBoostAbAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class ReceivedMoveDamageMultiplierAbAttr extends PreDefendAbAttr {
    protected condition: PokemonDefendCondition;
    private damageMultiplier;
    constructor(condition: PokemonDefendCondition, damageMultiplier: number);
    applyPreDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
  }
  export class ReceivedTypeDamageMultiplierAbAttr extends ReceivedMoveDamageMultiplierAbAttr {
    constructor(moveType: Type, damageMultiplier: number);
  }
  export class PreDefendMoveDamageToOneAbAttr extends ReceivedMoveDamageMultiplierAbAttr {
    constructor(condition: PokemonDefendCondition);
    applyPreDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
  }
  /**
   * Determines whether a Pokemon is immune to a move because of an ability.
   * @extends PreDefendAbAttr
   * @see {@linkcode applyPreDefend}
   * @see {@linkcode getCondition}
   */
  export class TypeImmunityAbAttr extends PreDefendAbAttr {
    private immuneType;
    private condition;
    constructor(immuneType: Type, condition?: AbAttrCondition);
    /**
     * Applies immunity if this ability grants immunity to the type of the given move.
     * @param pokemon {@linkcode Pokemon} the defending Pokemon
     * @param passive N/A
     * @param attacker {@linkcode Pokemon} the attacking Pokemon
     * @param move {@linkcode Move} the attacking move
     * @param cancelled N/A
     * @param args [0] {@linkcode Utils.NumberHolder} gets set to 0 if move is immuned by an ability.
     * @param args [1] {@linkcode Utils.NumberHolder} type of move being defended against in case it has changed from default type
     */
    applyPreDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
    getCondition(): AbAttrCondition;
  }
  export class TypeImmunityHealAbAttr extends TypeImmunityAbAttr {
    constructor(immuneType: Type);
    applyPreDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
  }
  export class NonSuperEffectiveImmunityAbAttr extends TypeImmunityAbAttr {
    constructor(condition?: AbAttrCondition);
    applyPreDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  export class PostDefendAbAttr extends AbAttr {
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean | Promise<boolean>;
  }
  export class PostDefendDisguiseAbAttr extends PostDefendAbAttr {
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class PostDefendFormChangeAbAttr extends PostDefendAbAttr {
    private formFunc;
    constructor(formFunc: (p: Pokemon) => number);
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class FieldPriorityMoveImmunityAbAttr extends PreDefendAbAttr {
    applyPreDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
  }
  export class PostStatChangeAbAttr extends AbAttr {
    applyPostStatChange(
      pokemon: Pokemon,
      statsChanged: BattleStat[],
      levelChanged: number,
      selfTarget: boolean,
      args: any[]
    ): boolean | Promise<boolean>;
  }
  export class MoveImmunityAbAttr extends PreDefendAbAttr {
    private immuneCondition;
    constructor(immuneCondition: PreDefendAbAttrCondition);
    applyPreDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  /**
   * Reduces the accuracy of status moves used against the Pokémon with this ability to 50%.
   * Used by Wonder Skin.
   *
   * @extends PreDefendAbAttr
   */
  export class WonderSkinAbAttr extends PreDefendAbAttr {
    applyPreDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
  }
  export class MoveImmunityStatChangeAbAttr extends MoveImmunityAbAttr {
    private stat;
    private levels;
    constructor(immuneCondition: PreDefendAbAttrCondition, stat: BattleStat, levels: number);
    applyPreDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
  }
  /**
   * Class for abilities that make drain moves deal damage to user instead of healing them.
   * @extends PostDefendAbAttr
   * @see {@linkcode applyPostDefend}
   */
  export class ReverseDrainAbAttr extends PostDefendAbAttr {
    /**
     * Determines if a damage and draining move was used to check if this ability should stop the healing.
     * Examples include: Absorb, Draining Kiss, Bitter Blade, etc.
     * Also displays a message to show this ability was activated.
     * @param pokemon {@linkcode Pokemon} with this ability
     * @param passive N/A
     * @param attacker {@linkcode Pokemon} that is attacking this Pokemon
     * @param move {@linkcode PokemonMove} that is being used
     * @param hitResult N/A
     * @args N/A
     * @returns true if healing should be reversed on a healing move, false otherwise.
     */
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class PostDefendStatChangeAbAttr extends PostDefendAbAttr {
    private condition;
    private stat;
    private levels;
    private selfTarget;
    private allOthers;
    constructor(
      condition: PokemonDefendCondition,
      stat: BattleStat,
      levels: number,
      selfTarget?: boolean,
      allOthers?: boolean
    );
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class PostDefendHpGatedStatChangeAbAttr extends PostDefendAbAttr {
    private condition;
    private hpGate;
    private stats;
    private levels;
    private selfTarget;
    constructor(
      condition: PokemonDefendCondition,
      hpGate: number,
      stats: BattleStat[],
      levels: number,
      selfTarget?: boolean
    );
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class PostDefendApplyArenaTrapTagAbAttr extends PostDefendAbAttr {
    private condition;
    private tagType;
    constructor(condition: PokemonDefendCondition, tagType: ArenaTagType);
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class PostDefendApplyBattlerTagAbAttr extends PostDefendAbAttr {
    private condition;
    private tagType;
    constructor(condition: PokemonDefendCondition, tagType: BattlerTagType);
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class PostDefendTypeChangeAbAttr extends PostDefendAbAttr {
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  export class PostDefendTerrainChangeAbAttr extends PostDefendAbAttr {
    private terrainType;
    constructor(terrainType: TerrainType);
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class PostDefendContactApplyStatusEffectAbAttr extends PostDefendAbAttr {
    private chance;
    private effects;
    constructor(chance: number, ...effects: StatusEffect[]);
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class EffectSporeAbAttr extends PostDefendContactApplyStatusEffectAbAttr {
    constructor();
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class PostDefendContactApplyTagChanceAbAttr extends PostDefendAbAttr {
    private chance;
    private tagType;
    private turnCount;
    constructor(chance: number, tagType: BattlerTagType, turnCount?: number);
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class PostDefendCritStatChangeAbAttr extends PostDefendAbAttr {
    private stat;
    private levels;
    constructor(stat: BattleStat, levels: number);
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
    getCondition(): AbAttrCondition;
  }
  export class PostDefendContactDamageAbAttr extends PostDefendAbAttr {
    private damageRatio;
    constructor(damageRatio: number);
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  /**
   * @description: This ability applies the Perish Song tag to the attacking pokemon
   * and the defending pokemon if the move makes physical contact and neither pokemon
   * already has the Perish Song tag.
   * @class PostDefendPerishSongAbAttr
   * @extends {PostDefendAbAttr}
   */
  export class PostDefendPerishSongAbAttr extends PostDefendAbAttr {
    private turns;
    constructor(turns: number);
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  export class PostDefendWeatherChangeAbAttr extends PostDefendAbAttr {
    private weatherType;
    constructor(weatherType: WeatherType);
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class PostDefendAbilitySwapAbAttr extends PostDefendAbAttr {
    constructor();
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  export class PostDefendAbilityGiveAbAttr extends PostDefendAbAttr {
    private ability;
    constructor(ability: Abilities);
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  export class PostDefendMoveDisableAbAttr extends PostDefendAbAttr {
    private chance;
    private attacker;
    private move;
    constructor(chance: number);
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  export class PostStatChangeStatChangeAbAttr extends PostStatChangeAbAttr {
    private condition;
    private statsToChange;
    private levels;
    constructor(condition: PokemonStatChangeCondition, statsToChange: BattleStat[], levels: number);
    applyPostStatChange(
      pokemon: Pokemon,
      statsChanged: BattleStat[],
      levelsChanged: number,
      selfTarget: boolean,
      args: any[]
    ): boolean;
  }
  export class PreAttackAbAttr extends AbAttr {
    applyPreAttack(
      pokemon: Pokemon,
      passive: boolean,
      defender: Pokemon,
      move: Move,
      args: any[]
    ): boolean | Promise<boolean>;
  }
  /**
   * Modifies moves additional effects with multipliers, ie. Sheer Force, Serene Grace.
   * @extends AbAttr
   * @see {@linkcode apply}
   */
  export class MoveEffectChanceMultiplierAbAttr extends AbAttr {
    private chanceMultiplier;
    constructor(chanceMultiplier?: number);
    /**
     * @param args [0]: {@linkcode Utils.NumberHolder} Move additional effect chance. Has to be higher than or equal to 0.
     *             [1]: {@linkcode Moves } Move used by the ability user.
     */
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  /**
   * Sets incoming moves additional effect chance to zero, ignoring all effects from moves. ie. Shield Dust.
   * @extends PreDefendAbAttr
   * @see {@linkcode applyPreDefend}
   */
  export class IgnoreMoveEffectsAbAttr extends PreDefendAbAttr {
    /**
     * @param args [0]: {@linkcode Utils.NumberHolder} Move additional effect chance.
     */
    applyPreDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
  }
  export class VariableMovePowerAbAttr extends PreAttackAbAttr {
    applyPreAttack(pokemon: Pokemon, passive: boolean, defender: Pokemon, move: Move, args: any[]): boolean;
  }
  export class FieldPreventExplosiveMovesAbAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean | Promise<boolean>;
  }
  /**
   * Multiplies a BattleStat if the checked Pokemon lacks this ability.
   * If this ability cannot stack, a BooleanHolder can be used to prevent this from stacking.
   * @see {@link applyFieldBattleStatMultiplierAbAttrs}
   * @see {@link applyFieldBattleStat}
   * @see {@link Utils.BooleanHolder}
   */
  export class FieldMultiplyBattleStatAbAttr extends AbAttr {
    private stat;
    private multiplier;
    private canStack;
    constructor(stat: Stat, multiplier: number, canStack?: boolean);
    /**
     * applyFieldBattleStat: Tries to multiply a Pokemon's BattleStat
     * @param pokemon {@linkcode Pokemon} the Pokemon using this ability
     * @param passive {@linkcode boolean} unused
     * @param stat {@linkcode Stat} the type of the checked stat
     * @param statValue {@linkcode Utils.NumberHolder} the value of the checked stat
     * @param checkedPokemon {@linkcode Pokemon} the Pokemon this ability is targeting
     * @param hasApplied {@linkcode Utils.BooleanHolder} whether or not another multiplier has been applied to this stat
     * @param args {any[]} unused
     * @returns true if this changed the checked stat, false otherwise.
     */
    applyFieldBattleStat(
      pokemon: Pokemon,
      passive: boolean,
      stat: Stat,
      statValue: Utils.NumberHolder,
      checkedPokemon: Pokemon,
      hasApplied: Utils.BooleanHolder,
      args: any[]
    ): boolean;
  }
  export class MoveTypeChangeAttr extends PreAttackAbAttr {
    private newType;
    private powerMultiplier;
    private condition?;
    constructor(newType: Type, powerMultiplier: number, condition?: PokemonAttackCondition);
    applyPreAttack(pokemon: Pokemon, passive: boolean, defender: Pokemon, move: Move, args: any[]): boolean;
  }
  /** Ability attribute for changing a pokemon's type before using a move */
  export class PokemonTypeChangeAbAttr extends PreAttackAbAttr {
    private moveType;
    constructor();
    applyPreAttack(pokemon: Pokemon, passive: boolean, defender: Pokemon, move: Move, args: any[]): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  /**
   * Class for abilities that convert single-strike moves to two-strike moves (i.e. Parental Bond).
   * @param damageMultiplier the damage multiplier for the second strike, relative to the first.
   */
  export class AddSecondStrikeAbAttr extends PreAttackAbAttr {
    private damageMultiplier;
    constructor(damageMultiplier: number);
    /**
     * Determines whether this attribute can apply to a given move.
     * @param {Move} move the move to which this attribute may apply
     * @param numTargets the number of {@linkcode Pokemon} targeted by this move
     * @returns true if the attribute can apply to the move, false otherwise
     */
    canApplyPreAttack(move: Move, numTargets: number): boolean;
    /**
     * If conditions are met, this doubles the move's hit count (via args[1])
     * or multiplies the damage of secondary strikes (via args[2])
     * @param {Pokemon} pokemon the Pokemon using the move
     * @param passive n/a
     * @param defender n/a
     * @param {Move} move the move used by the ability source
     * @param args\[0\] the number of Pokemon this move is targeting
     * @param {Utils.IntegerHolder} args\[1\] the number of strikes with this move
     * @param {Utils.NumberHolder} args\[2\] the damage multiplier for the current strike
     * @returns
     */
    applyPreAttack(pokemon: Pokemon, passive: boolean, defender: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Class for abilities that boost the damage of moves
   * For abilities that boost the base power of moves, see VariableMovePowerAbAttr
   * @param damageMultiplier the amount to multiply the damage by
   * @param condition the condition for this ability to be applied
   */
  export class DamageBoostAbAttr extends PreAttackAbAttr {
    private damageMultiplier;
    private condition;
    constructor(damageMultiplier: number, condition: PokemonAttackCondition);
    /**
     *
     * @param pokemon the attacker pokemon
     * @param passive N/A
     * @param defender the target pokemon
     * @param move the move used by the attacker pokemon
     * @param args Utils.NumberHolder as damage
     * @returns true if the function succeeds
     */
    applyPreAttack(pokemon: Pokemon, passive: boolean, defender: Pokemon, move: Move, args: any[]): boolean;
  }
  export class MovePowerBoostAbAttr extends VariableMovePowerAbAttr {
    private condition;
    private powerMultiplier;
    constructor(condition: PokemonAttackCondition, powerMultiplier: number, showAbility?: boolean);
    applyPreAttack(pokemon: Pokemon, passive: boolean, defender: Pokemon, move: Move, args: any[]): boolean;
  }
  export class MoveTypePowerBoostAbAttr extends MovePowerBoostAbAttr {
    constructor(boostedType: Type, powerMultiplier?: number);
  }
  export class LowHpMoveTypePowerBoostAbAttr extends MoveTypePowerBoostAbAttr {
    constructor(boostedType: Type);
    getCondition(): AbAttrCondition;
  }
  /**
   * Abilities which cause a variable amount of power increase.
   * @extends VariableMovePowerAbAttr
   * @see {@link applyPreAttack}
   */
  export class VariableMovePowerBoostAbAttr extends VariableMovePowerAbAttr {
    private mult;
    /**
     * @param mult A function which takes the user, target, and move, and returns the power multiplier. 1 means no multiplier.
     * @param {boolean} showAbility Whether to show the ability when it activates.
     */
    constructor(mult: (user: Pokemon, target: Pokemon, move: Move) => number, showAbility?: boolean);
    /**
     * @override
     */
    applyPreAttack(pokemon: Pokemon, passive: boolean, defender: Pokemon, move: any, args: any[]): boolean;
  }
  /**
   * Boosts the power of a Pokémon's move under certain conditions.
   * @extends AbAttr
   */
  export class FieldMovePowerBoostAbAttr extends AbAttr {
    private condition;
    private powerMultiplier;
    /**
     * @param condition - A function that determines whether the power boost condition is met.
     * @param powerMultiplier - The multiplier to apply to the move's power when the condition is met.
     */
    constructor(condition: PokemonAttackCondition, powerMultiplier: number);
    applyPreAttack(pokemon: Pokemon, passive: boolean, defender: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Boosts the power of a specific type of move.
   * @extends FieldMovePowerBoostAbAttr
   */
  export class PreAttackFieldMoveTypePowerBoostAbAttr extends FieldMovePowerBoostAbAttr {
    /**
     * @param boostedType - The type of move that will receive the power boost.
     * @param powerMultiplier - The multiplier to apply to the move's power, defaults to 1.5 if not provided.
     */
    constructor(boostedType: Type, powerMultiplier?: number);
  }
  /**
   * Boosts the power of a specific type of move for all Pokemon in the field.
   * @extends PreAttackFieldMoveTypePowerBoostAbAttr
   */
  export class FieldMoveTypePowerBoostAbAttr extends PreAttackFieldMoveTypePowerBoostAbAttr {}
  /**
   * Boosts the power of a specific type of move for the user and its allies.
   * @extends PreAttackFieldMoveTypePowerBoostAbAttr
   */
  export class UserFieldMoveTypePowerBoostAbAttr extends PreAttackFieldMoveTypePowerBoostAbAttr {}
  /**
   * Boosts the power of moves in specified categories.
   * @extends FieldMovePowerBoostAbAttr
   */
  export class AllyMoveCategoryPowerBoostAbAttr extends FieldMovePowerBoostAbAttr {
    /**
     * @param boostedCategories - The categories of moves that will receive the power boost.
     * @param powerMultiplier - The multiplier to apply to the move's power.
     */
    constructor(boostedCategories: MoveCategory[], powerMultiplier: number);
  }
  export class BattleStatMultiplierAbAttr extends AbAttr {
    private battleStat;
    private multiplier;
    private condition;
    constructor(battleStat: BattleStat, multiplier: number, condition?: PokemonAttackCondition);
    applyBattleStat(
      pokemon: Pokemon,
      passive: boolean,
      battleStat: BattleStat,
      statValue: Utils.NumberHolder,
      args: any[]
    ): boolean | Promise<boolean>;
  }
  export class PostAttackAbAttr extends AbAttr {
    applyPostAttack(
      pokemon: Pokemon,
      passive: boolean,
      defender: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean | Promise<boolean>;
  }
  export class PostAttackStealHeldItemAbAttr extends PostAttackAbAttr {
    private condition;
    constructor(condition?: PokemonAttackCondition);
    applyPostAttack(
      pokemon: Pokemon,
      passive: boolean,
      defender: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): Promise<boolean>;
    getTargetHeldItems(target: Pokemon): PokemonHeldItemModifier[];
  }
  export class PostAttackApplyStatusEffectAbAttr extends PostAttackAbAttr {
    private contactRequired;
    private chance;
    private effects;
    constructor(contactRequired: boolean, chance: number, ...effects: StatusEffect[]);
    applyPostAttack(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class PostAttackContactApplyStatusEffectAbAttr extends PostAttackApplyStatusEffectAbAttr {
    constructor(chance: number, ...effects: StatusEffect[]);
  }
  export class PostAttackApplyBattlerTagAbAttr extends PostAttackAbAttr {
    private contactRequired;
    private chance;
    private effects;
    constructor(
      contactRequired: boolean,
      chance: (user: Pokemon, target: Pokemon, move: Move) => number,
      ...effects: BattlerTagType[]
    );
    applyPostAttack(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class PostDefendStealHeldItemAbAttr extends PostDefendAbAttr {
    private condition;
    constructor(condition?: PokemonDefendCondition);
    applyPostDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): Promise<boolean>;
    getTargetHeldItems(target: Pokemon): PokemonHeldItemModifier[];
  }
  export class PostVictoryAbAttr extends AbAttr {
    applyPostVictory(pokemon: Pokemon, passive: boolean, args: any[]): boolean | Promise<boolean>;
  }
  export class PostVictoryFormChangeAbAttr extends PostVictoryAbAttr {
    private formFunc;
    constructor(formFunc: (p: Pokemon) => number);
    applyPostVictory(pokemon: Pokemon, passive: boolean, args: any[]): boolean | Promise<boolean>;
  }
  export class PostKnockOutAbAttr extends AbAttr {
    applyPostKnockOut(pokemon: Pokemon, passive: boolean, knockedOut: Pokemon, args: any[]): boolean | Promise<boolean>;
  }
  export class PostKnockOutStatChangeAbAttr extends PostKnockOutAbAttr {
    private stat;
    private levels;
    constructor(stat: BattleStat | ((p: Pokemon) => BattleStat), levels: number);
    applyPostKnockOut(pokemon: Pokemon, passive: boolean, knockedOut: Pokemon, args: any[]): boolean | Promise<boolean>;
  }
  export class CopyFaintedAllyAbilityAbAttr extends PostKnockOutAbAttr {
    constructor();
    applyPostKnockOut(pokemon: Pokemon, passive: boolean, knockedOut: Pokemon, args: any[]): boolean | Promise<boolean>;
  }
  export class IgnoreOpponentStatChangesAbAttr extends AbAttr {
    constructor();
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  /**
   * Ignores opponent's evasion stat changes when determining if a move hits or not
   * @extends AbAttr
   * @see {@linkcode apply}
   */
  export class IgnoreOpponentEvasionAbAttr extends AbAttr {
    constructor();
    /**
     * Checks if enemy Pokemon is trapped by an Arena Trap-esque ability
     * @param pokemon N/A
     * @param passive N/A
     * @param cancelled N/A
     * @param args [0] {@linkcode Utils.IntegerHolder} of BattleStat.EVA
     * @returns if evasion level was successfully considered as 0
     */
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class IntimidateImmunityAbAttr extends AbAttr {
    constructor();
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  export class PostIntimidateStatChangeAbAttr extends AbAttr {
    private stats;
    private levels;
    private overwrites;
    constructor(stats: BattleStat[], levels: number, overwrites?: boolean);
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  /**
   * Base class for defining all {@linkcode Ability} Attributes post summon
   * @see {@linkcode applyPostSummon()}
   */
  export class PostSummonAbAttr extends AbAttr {
    /**
     * Applies ability post summon (after switching in)
     * @param pokemon {@linkcode Pokemon} with this ability
     * @param passive Whether this ability is a passive
     * @param args Set of unique arguments needed by this attribute
     * @returns true if application of the ability succeeds
     */
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean | Promise<boolean>;
  }
  /**
   * Removes specified arena tags when a Pokemon is summoned.
   */
  export class PostSummonRemoveArenaTagAbAttr extends PostSummonAbAttr {
    private arenaTags;
    /**
     * @param arenaTags {@linkcode ArenaTagType[]} - the arena tags to be removed
     */
    constructor(arenaTags: ArenaTagType[]);
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean | Promise<boolean>;
  }
  export class PostSummonMessageAbAttr extends PostSummonAbAttr {
    private messageFunc;
    constructor(messageFunc: (pokemon: Pokemon) => string);
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostSummonUnnamedMessageAbAttr extends PostSummonAbAttr {
    private message;
    constructor(message: string);
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostSummonAddBattlerTagAbAttr extends PostSummonAbAttr {
    private tagType;
    private turnCount;
    constructor(tagType: BattlerTagType, turnCount: number, showAbility?: boolean);
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostSummonStatChangeAbAttr extends PostSummonAbAttr {
    private stats;
    private levels;
    private selfTarget;
    private intimidate;
    constructor(stats: BattleStat | BattleStat[], levels: number, selfTarget?: boolean, intimidate?: boolean);
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostSummonAllyHealAbAttr extends PostSummonAbAttr {
    private healRatio;
    private showAnim;
    constructor(healRatio: number, showAnim?: boolean);
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  /**
   * Resets an ally's temporary stat boots to zero with no regard to
   * whether this is a positive or negative change
   * @param pokemon The {@link Pokemon} with this {@link AbAttr}
   * @param passive N/A
   * @param args N/A
   * @returns if the move was successful
   */
  export class PostSummonClearAllyStatsAbAttr extends PostSummonAbAttr {
    constructor();
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  /**
   * Download raises either the Attack stat or Special Attack stat by one stage depending on the foe's currently lowest defensive stat:
   * it will raise Attack if the foe's current Defense is lower than its current Special Defense stat;
   * otherwise, it will raise Special Attack.
   * @extends PostSummonAbAttr
   * @see {applyPostSummon}
   */
  export class DownloadAbAttr extends PostSummonAbAttr {
    private enemyDef;
    private enemySpDef;
    private enemyCountTally;
    private stats;
    /**
     * Checks to see if it is the opening turn (starting a new game), if so, Download won't work. This is because Download takes into account
     * vitamins and items, so it needs to use the BattleStat and the stat alone.
     * @param {Pokemon} pokemon Pokemon that is using the move, as well as seeing the opposing pokemon.
     * @param {boolean} passive N/A
     * @param {any[]} args N/A
     * @returns Returns true if ability is used successful, false if not.
     */
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostSummonWeatherChangeAbAttr extends PostSummonAbAttr {
    private weatherType;
    constructor(weatherType: WeatherType);
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostSummonTerrainChangeAbAttr extends PostSummonAbAttr {
    private terrainType;
    constructor(terrainType: TerrainType);
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostSummonFormChangeAbAttr extends PostSummonAbAttr {
    private formFunc;
    constructor(formFunc: (p: Pokemon) => number);
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  /** Attempts to copy a pokemon's ability */
  export class PostSummonCopyAbilityAbAttr extends PostSummonAbAttr {
    private target;
    private targetAbilityName;
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  /** Attempt to copy the stat changes on an ally pokemon */
  export class PostSummonCopyAllyStatsAbAttr extends PostSummonAbAttr {
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  export class PostSummonTransformAbAttr extends PostSummonAbAttr {
    constructor();
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PreSwitchOutAbAttr extends AbAttr {
    constructor();
    applyPreSwitchOut(pokemon: Pokemon, passive: boolean, args: any[]): boolean | Promise<boolean>;
  }
  export class PreSwitchOutResetStatusAbAttr extends PreSwitchOutAbAttr {
    applyPreSwitchOut(pokemon: Pokemon, passive: boolean, args: any[]): boolean | Promise<boolean>;
  }
  /**
   * Clears Desolate Land/Primordial Sea/Delta Stream upon the Pokemon switching out.
   */
  export class PreSwitchOutClearWeatherAbAttr extends PreSwitchOutAbAttr {
    /**
     * @param pokemon The {@linkcode Pokemon} with the ability
     * @param passive N/A
     * @param args N/A
     * @returns {boolean} Returns true if the weather clears, otherwise false.
     */
    applyPreSwitchOut(pokemon: Pokemon, passive: boolean, args: any[]): boolean | Promise<boolean>;
  }
  export class PreSwitchOutHealAbAttr extends PreSwitchOutAbAttr {
    applyPreSwitchOut(pokemon: Pokemon, passive: boolean, args: any[]): boolean | Promise<boolean>;
  }
  /**
   * Attribute for form changes that occur on switching out
   * @extends PreSwitchOutAbAttr
   * @see {@linkcode applyPreSwitchOut}
   */
  export class PreSwitchOutFormChangeAbAttr extends PreSwitchOutAbAttr {
    private formFunc;
    constructor(formFunc: (p: Pokemon) => number);
    /**
     * On switch out, trigger the form change to the one defined in the ability
     * @param pokemon The pokemon switching out and changing form {@linkcode Pokemon}
     * @param passive N/A
     * @param args N/A
     * @returns true if the form change was successful
     */
    applyPreSwitchOut(pokemon: Pokemon, passive: boolean, args: any[]): boolean | Promise<boolean>;
  }
  export class PreStatChangeAbAttr extends AbAttr {
    applyPreStatChange(
      pokemon: Pokemon,
      passive: boolean,
      stat: BattleStat,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean | Promise<boolean>;
  }
  export class ProtectStatAbAttr extends PreStatChangeAbAttr {
    private protectedStat;
    constructor(protectedStat?: BattleStat);
    applyPreStatChange(
      pokemon: Pokemon,
      passive: boolean,
      stat: BattleStat,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  /**
   * This attribute applies confusion to the target whenever the user
   * directly poisons them with a move, e.g. Poison Puppeteer.
   * Called in {@linkcode StatusEffectAttr}.
   * @extends PostAttackAbAttr
   * @see {@linkcode applyPostAttack}
   */
  export class ConfusionOnStatusEffectAbAttr extends PostAttackAbAttr {
    /** List of effects to apply confusion after */
    private effects;
    constructor(...effects: StatusEffect[]);
    /**
     * Applies confusion to the target pokemon.
     * @param pokemon {@link Pokemon} attacking
     * @param passive N/A
     * @param defender {@link Pokemon} defending
     * @param move {@link Move} used to apply status effect and confusion
     * @param hitResult N/A
     * @param args [0] {@linkcode StatusEffect} applied by move
     * @returns true if defender is confused
     */
    applyPostAttack(
      pokemon: Pokemon,
      passive: boolean,
      defender: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class PreSetStatusAbAttr extends AbAttr {
    applyPreSetStatus(
      pokemon: Pokemon,
      passive: boolean,
      effect: StatusEffect,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean | Promise<boolean>;
  }
  export class StatusEffectImmunityAbAttr extends PreSetStatusAbAttr {
    private immuneEffects;
    constructor(...immuneEffects: StatusEffect[]);
    applyPreSetStatus(
      pokemon: Pokemon,
      passive: boolean,
      effect: StatusEffect,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  export class PreApplyBattlerTagAbAttr extends AbAttr {
    applyPreApplyBattlerTag(
      pokemon: Pokemon,
      passive: boolean,
      tag: BattlerTag,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean | Promise<boolean>;
  }
  export class BattlerTagImmunityAbAttr extends PreApplyBattlerTagAbAttr {
    private immuneTagType;
    constructor(immuneTagType: BattlerTagType);
    applyPreApplyBattlerTag(
      pokemon: Pokemon,
      passive: boolean,
      tag: BattlerTag,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  export class BlockCritAbAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class BonusCritAbAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class MultCritAbAttr extends AbAttr {
    multAmount: number;
    constructor(multAmount: number);
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  /**
   * Guarantees a critical hit according to the given condition, except if target prevents critical hits. ie. Merciless
   * @extends AbAttr
   * @see {@linkcode apply}
   */
  export class ConditionalCritAbAttr extends AbAttr {
    private condition;
    constructor(condition: PokemonAttackCondition, checkUser?: boolean);
    /**
     * @param pokemon {@linkcode Pokemon} user.
     * @param args [0] {@linkcode Utils.BooleanHolder} If true critical hit is guaranteed.
     *             [1] {@linkcode Pokemon} Target.
     *             [2] {@linkcode Move} used by ability user.
     */
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class BlockNonDirectDamageAbAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  /**
   * This attribute will block any status damage that you put in the parameter.
   */
  export class BlockStatusDamageAbAttr extends AbAttr {
    private effects;
    /**
     * @param {StatusEffect[]} effects The status effect(s) that will be blocked from damaging the ability pokemon
     */
    constructor(...effects: StatusEffect[]);
    /**
     * @param {Pokemon} pokemon The pokemon with the ability
     * @param {boolean} passive N/A
     * @param {Utils.BooleanHolder} cancelled Whether to cancel the status damage
     * @param {any[]} args N/A
     * @returns Returns true if status damage is blocked
     */
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class BlockOneHitKOAbAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class IncrementMovePriorityAbAttr extends AbAttr {
    private moveIncrementFunc;
    private increaseAmount;
    constructor(moveIncrementFunc: (pokemon: Pokemon, move: Move) => boolean, increaseAmount?: number);
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class IgnoreContactAbAttr extends AbAttr {}
  export class PreWeatherEffectAbAttr extends AbAttr {
    applyPreWeatherEffect(
      pokemon: Pokemon,
      passive: boolean,
      weather: Weather,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean | Promise<boolean>;
  }
  export class PreWeatherDamageAbAttr extends PreWeatherEffectAbAttr {}
  export class BlockWeatherDamageAttr extends PreWeatherDamageAbAttr {
    private weatherTypes;
    constructor(...weatherTypes: WeatherType[]);
    applyPreWeatherEffect(
      pokemon: Pokemon,
      passive: boolean,
      weather: Weather,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
  }
  export class SuppressWeatherEffectAbAttr extends PreWeatherEffectAbAttr {
    affectsImmutable: boolean;
    constructor(affectsImmutable?: boolean);
    applyPreWeatherEffect(
      pokemon: Pokemon,
      passive: boolean,
      weather: Weather,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
  }
  export class ForewarnAbAttr extends PostSummonAbAttr {
    constructor();
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class FriskAbAttr extends PostSummonAbAttr {
    constructor();
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostWeatherChangeAbAttr extends AbAttr {
    applyPostWeatherChange(pokemon: Pokemon, passive: boolean, weather: WeatherType, args: any[]): boolean;
  }
  export class PostWeatherChangeAddBattlerTagAttr extends PostWeatherChangeAbAttr {
    private tagType;
    private turnCount;
    private weatherTypes;
    constructor(tagType: BattlerTagType, turnCount: number, ...weatherTypes: WeatherType[]);
    applyPostWeatherChange(pokemon: Pokemon, passive: boolean, weather: WeatherType, args: any[]): boolean;
  }
  export class PostWeatherLapseAbAttr extends AbAttr {
    protected weatherTypes: WeatherType[];
    constructor(...weatherTypes: WeatherType[]);
    applyPostWeatherLapse(
      pokemon: Pokemon,
      passive: boolean,
      weather: Weather,
      args: any[]
    ): boolean | Promise<boolean>;
    getCondition(): AbAttrCondition;
  }
  export class PostWeatherLapseHealAbAttr extends PostWeatherLapseAbAttr {
    private healFactor;
    constructor(healFactor: number, ...weatherTypes: WeatherType[]);
    applyPostWeatherLapse(pokemon: Pokemon, passive: boolean, weather: Weather, args: any[]): boolean;
  }
  export class PostWeatherLapseDamageAbAttr extends PostWeatherLapseAbAttr {
    private damageFactor;
    constructor(damageFactor: number, ...weatherTypes: WeatherType[]);
    applyPostWeatherLapse(pokemon: Pokemon, passive: boolean, weather: Weather, args: any[]): boolean;
  }
  export class PostTerrainChangeAbAttr extends AbAttr {
    applyPostTerrainChange(pokemon: Pokemon, passive: boolean, terrain: TerrainType, args: any[]): boolean;
  }
  export class PostTerrainChangeAddBattlerTagAttr extends PostTerrainChangeAbAttr {
    private tagType;
    private turnCount;
    private terrainTypes;
    constructor(tagType: BattlerTagType, turnCount: number, ...terrainTypes: TerrainType[]);
    applyPostTerrainChange(pokemon: Pokemon, passive: boolean, terrain: TerrainType, args: any[]): boolean;
  }
  export class PostTurnAbAttr extends AbAttr {
    applyPostTurn(pokemon: Pokemon, passive: boolean, args: any[]): boolean | Promise<boolean>;
  }
  /**
   * This attribute will heal 1/8th HP if the ability pokemon has the correct status.
   */
  export class PostTurnStatusHealAbAttr extends PostTurnAbAttr {
    private effects;
    /**
     * @param {StatusEffect[]} effects The status effect(s) that will qualify healing the ability pokemon
     */
    constructor(...effects: StatusEffect[]);
    /**
     * @param {Pokemon} pokemon The pokemon with the ability that will receive the healing
     * @param {Boolean} passive N/A
     * @param {any[]} args N/A
     * @returns Returns true if healed from status, false if not
     */
    applyPostTurn(pokemon: Pokemon, passive: boolean, args: any[]): boolean | Promise<boolean>;
  }
  /**
   * After the turn ends, resets the status of either the ability holder or their ally
   * @param {boolean} allyTarget Whether to target ally, defaults to false (self-target)
   */
  export class PostTurnResetStatusAbAttr extends PostTurnAbAttr {
    private allyTarget;
    private target;
    constructor(allyTarget?: boolean);
    applyPostTurn(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  /**
   * After the turn ends, try to create an extra item
   */
  export class PostTurnLootAbAttr extends PostTurnAbAttr {
    /** Extend itemType to add more options */
    private itemType;
    private procChance;
    /**
     * @param itemType - The type of item to create
     * @param procChance - Chance to create an item
     * @see {@linkcode applyPostTurn()}
     */
    constructor(
      /** Extend itemType to add more options */
      itemType: 'EATEN_BERRIES' | 'HELD_BERRIES',
      procChance: (pokemon: Pokemon) => number
    );
    applyPostTurn(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
    /**
     * Create a new berry chosen randomly from the berries the pokemon ate this battle
     * @param pokemon The pokemon with this ability
     * @returns whether a new berry was created
     */
    createEatenBerry(pokemon: Pokemon): boolean;
  }
  export class MoodyAbAttr extends PostTurnAbAttr {
    constructor();
    applyPostTurn(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostTurnStatChangeAbAttr extends PostTurnAbAttr {
    private stats;
    private levels;
    constructor(stats: BattleStat | BattleStat[], levels: number);
    applyPostTurn(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostTurnHealAbAttr extends PostTurnAbAttr {
    applyPostTurn(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostTurnFormChangeAbAttr extends PostTurnAbAttr {
    private formFunc;
    constructor(formFunc: (p: Pokemon) => number);
    applyPostTurn(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  /**
   * Attribute used for abilities (Bad Dreams) that damages the opponents for being asleep
   */
  export class PostTurnHurtIfSleepingAbAttr extends PostTurnAbAttr {
    /**
     * Deals damage to all sleeping opponents equal to 1/8 of their max hp (min 1)
     * @param {Pokemon} pokemon Pokemon that has this ability
     * @param {boolean} passive N/A
     * @param {any[]} args N/A
     * @returns {boolean} true if any opponents are sleeping
     */
    applyPostTurn(pokemon: Pokemon, passive: boolean, args: any[]): boolean | Promise<boolean>;
  }
  /**
   * Grabs the last failed Pokeball used
   * @extends PostTurnAbAttr
   * @see {@linkcode applyPostTurn} */
  export class FetchBallAbAttr extends PostTurnAbAttr {
    constructor();
    /**
     * Adds the last used Pokeball back into the player's inventory
     * @param pokemon {@linkcode Pokemon} with this ability
     * @param passive N/A
     * @param args N/A
     * @returns true if player has used a pokeball and this pokemon is owned by the player
     */
    applyPostTurn(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostBiomeChangeAbAttr extends AbAttr {}
  export class PostBiomeChangeWeatherChangeAbAttr extends PostBiomeChangeAbAttr {
    private weatherType;
    constructor(weatherType: WeatherType);
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class PostBiomeChangeTerrainChangeAbAttr extends PostBiomeChangeAbAttr {
    private terrainType;
    constructor(terrainType: TerrainType);
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  /**
   * Triggers just after a move is used either by the opponent or the player
   * @extends AbAttr
   */
  export class PostMoveUsedAbAttr extends AbAttr {
    applyPostMoveUsed(
      pokemon: Pokemon,
      move: PokemonMove,
      source: Pokemon,
      targets: BattlerIndex[],
      args: any[]
    ): boolean | Promise<boolean>;
  }
  /**
   * Triggers after a dance move is used either by the opponent or the player
   * @extends PostMoveUsedAbAttr
   */
  export class PostDancingMoveAbAttr extends PostMoveUsedAbAttr {
    /**
     * Resolves the Dancer ability by replicating the move used by the source of the dance
     * either on the source itself or on the target of the dance
     * @param dancer {@linkcode Pokemon} with Dancer ability
     * @param move {@linkcode PokemonMove} Dancing move used by the source
     * @param source {@linkcode Pokemon} that used the dancing move
     * @param targets {@linkcode BattlerIndex}Targets of the dancing move
     * @param args N/A
     *
     * @return true if the Dancer ability was resolved
     */
    applyPostMoveUsed(
      dancer: Pokemon,
      move: PokemonMove,
      source: Pokemon,
      targets: BattlerIndex[],
      args: any[]
    ): boolean | Promise<boolean>;
    /**
     * Get the correct targets of Dancer ability
     *
     * @param dancer {@linkcode Pokemon} Pokemon with Dancer ability
     * @param source {@linkcode Pokemon} Source of the dancing move
     * @param targets {@linkcode BattlerIndex} Targets of the dancing move
     */
    getTarget(dancer: Pokemon, source: Pokemon, targets: BattlerIndex[]): BattlerIndex[];
  }
  export class StatChangeMultiplierAbAttr extends AbAttr {
    private multiplier;
    constructor(multiplier: number);
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class StatChangeCopyAbAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean | Promise<boolean>;
  }
  export class BypassBurnDamageReductionAbAttr extends AbAttr {
    constructor();
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class DoubleBerryEffectAbAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class PreventBerryUseAbAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  /**
   * A Pokemon with this ability heals by a percentage of their maximum hp after eating a berry
   * @param healPercent - Percent of Max HP to heal
   * @see {@linkcode apply()} for implementation
   */
  export class HealFromBerryUseAbAttr extends AbAttr {
    /** Percent of Max HP to heal */
    private healPercent;
    constructor(healPercent: number);
    apply(pokemon: Pokemon, passive: boolean, ...args: [Utils.BooleanHolder, any[]]): boolean;
  }
  export class RunSuccessAbAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  type ArenaTrapCondition = (user: Pokemon, target: Pokemon) => boolean;
  /**
   * Base class for checking if a Pokemon is trapped by arena trap
   * @extends AbAttr
   * @field {@linkcode arenaTrapCondition} Conditional for trapping abilities.
   * For example, Magnet Pull will only activate if opponent is Steel type.
   * @see {@linkcode applyCheckTrapped}
   */
  export class CheckTrappedAbAttr extends AbAttr {
    protected arenaTrapCondition: ArenaTrapCondition;
    constructor(condition: ArenaTrapCondition);
    applyCheckTrapped(
      pokemon: Pokemon,
      passive: boolean,
      trapped: Utils.BooleanHolder,
      otherPokemon: Pokemon,
      args: any[]
    ): boolean | Promise<boolean>;
  }
  /**
   * Determines whether a Pokemon is blocked from switching/running away
   * because of a trapping ability or move.
   * @extends CheckTrappedAbAttr
   * @see {@linkcode applyCheckTrapped}
   */
  export class ArenaTrapAbAttr extends CheckTrappedAbAttr {
    /**
     * Checks if enemy Pokemon is trapped by an Arena Trap-esque ability
     * If the enemy is a Ghost type, it is not trapped
     * If the enemy has the ability Run Away, it is not trapped.
     * If the user has Magnet Pull and the enemy is not a Steel type, it is not trapped.
     * If the user has Arena Trap and the enemy is not grounded, it is not trapped.
     * @param pokemon The {@link Pokemon} with this {@link AbAttr}
     * @param passive N/A
     * @param trapped {@link Utils.BooleanHolder} indicating whether the other Pokemon is trapped or not
     * @param otherPokemon The {@link Pokemon} that is affected by an Arena Trap ability
     * @param args N/A
     * @returns if enemy Pokemon is trapped or not
     */
    applyCheckTrapped(
      pokemon: Pokemon,
      passive: boolean,
      trapped: Utils.BooleanHolder,
      otherPokemon: Pokemon,
      args: any[]
    ): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  export class MaxMultiHitAbAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class PostBattleAbAttr extends AbAttr {
    constructor();
    applyPostBattle(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostBattleLootAbAttr extends PostBattleAbAttr {
    applyPostBattle(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  export class PostFaintAbAttr extends AbAttr {
    applyPostFaint(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  /**
   * Clears Desolate Land/Primordial Sea/Delta Stream upon the Pokemon fainting
   */
  export class PostFaintClearWeatherAbAttr extends PostFaintAbAttr {
    /**
     * @param pokemon The {@linkcode Pokemon} with the ability
     * @param passive N/A
     * @param attacker N/A
     * @param move N/A
     * @param hitResult N/A
     * @param args N/A
     * @returns {boolean} Returns true if the weather clears, otherwise false.
     */
    applyPostFaint(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
  }
  export class PostFaintContactDamageAbAttr extends PostFaintAbAttr {
    private damageRatio;
    constructor(damageRatio: number);
    applyPostFaint(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  /**
   * Attribute used for abilities (Innards Out) that damage the opponent based on how much HP the last attack used to knock out the owner of the ability.
   */
  export class PostFaintHPDamageAbAttr extends PostFaintAbAttr {
    constructor();
    applyPostFaint(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      hitResult: HitResult,
      args: any[]
    ): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  export class RedirectMoveAbAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
    canRedirect(moveId: Moves): boolean;
  }
  export class RedirectTypeMoveAbAttr extends RedirectMoveAbAttr {
    type: Type;
    constructor(type: Type);
    canRedirect(moveId: Moves): boolean;
  }
  export class BlockRedirectAbAttr extends AbAttr {}
  export class ReduceStatusEffectDurationAbAttr extends AbAttr {
    private statusEffect;
    constructor(statusEffect: StatusEffect);
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class FlinchEffectAbAttr extends AbAttr {
    constructor();
  }
  export class FlinchStatChangeAbAttr extends FlinchEffectAbAttr {
    private stats;
    private levels;
    constructor(stats: BattleStat | BattleStat[], levels: number);
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class IncreasePpAbAttr extends AbAttr {}
  export class ForceSwitchOutImmunityAbAttr extends AbAttr {
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class ReduceBerryUseThresholdAbAttr extends AbAttr {
    constructor();
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class WeightMultiplierAbAttr extends AbAttr {
    private multiplier;
    constructor(multiplier: number);
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class SyncEncounterNatureAbAttr extends AbAttr {
    constructor();
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class MoveAbilityBypassAbAttr extends AbAttr {
    private moveIgnoreFunc;
    constructor(moveIgnoreFunc?: (pokemon: Pokemon, move: Move) => boolean);
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class SuppressFieldAbilitiesAbAttr extends AbAttr {
    constructor();
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  export class AlwaysHitAbAttr extends AbAttr {}
  /** Attribute for abilities that allow moves that make contact to ignore protection (i.e. Unseen Fist) */
  export class IgnoreProtectOnContactAbAttr extends AbAttr {}
  export class UncopiableAbilityAbAttr extends AbAttr {
    constructor();
  }
  export class UnsuppressableAbilityAbAttr extends AbAttr {
    constructor();
  }
  export class UnswappableAbilityAbAttr extends AbAttr {
    constructor();
  }
  export class NoTransformAbilityAbAttr extends AbAttr {
    constructor();
  }
  export class NoFusionAbilityAbAttr extends AbAttr {
    constructor();
  }
  export class IgnoreTypeImmunityAbAttr extends AbAttr {
    private defenderType;
    private allowedMoveTypes;
    constructor(defenderType: Type, allowedMoveTypes: Type[]);
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  /**
   * Ignores the type immunity to Status Effects of the defender if the defender is of a certain type
   */
  export class IgnoreTypeStatusEffectImmunityAbAttr extends AbAttr {
    private statusEffect;
    private defenderType;
    constructor(statusEffect: StatusEffect[], defenderType: Type[]);
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
  }
  /**
   * Gives money to the user after the battle.
   *
   * @extends PostBattleAbAttr
   * @see {@linkcode applyPostBattle}
   */
  export class MoneyAbAttr extends PostBattleAbAttr {
    constructor();
    /**
     * @param pokemon {@linkcode Pokemon} that is the user of this ability.
     * @param passive N/A
     * @param args N/A
     * @returns true
     */
    applyPostBattle(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  /**
   * Applies a stat change after a Pokémon is summoned,
   * conditioned on the presence of a specific arena tag.
   *
   * @extends {PostSummonStatChangeAbAttr}
   */
  export class PostSummonStatChangeOnArenaAbAttr extends PostSummonStatChangeAbAttr {
    /**
     * The type of arena tag that conditions the stat change.
     * @private
     * @type {ArenaTagType}
     */
    private tagType;
    /**
     * Creates an instance of PostSummonStatChangeOnArenaAbAttr.
     * Initializes the stat change to increase Attack by 1 stage if the specified arena tag is present.
     *
     * @param {ArenaTagType} tagType - The type of arena tag to check for.
     */
    constructor(tagType: ArenaTagType);
    /**
     * Applies the post-summon stat change if the specified arena tag is present on pokemon's side.
     * This is used in Wind Rider ability.
     *
     * @param {Pokemon} pokemon - The Pokémon being summoned.
     * @param {boolean} passive - Whether the effect is passive.
     * @param {any[]} args - Additional arguments.
     * @returns {boolean} - Returns true if the stat change was applied, otherwise false.
     */
    applyPostSummon(pokemon: Pokemon, passive: boolean, args: any[]): boolean;
  }
  /**
   * Takes no damage from the first hit of a physical move.
   * This is used in Ice Face ability.
   */
  export class IceFaceBlockPhysicalAbAttr extends ReceivedMoveDamageMultiplierAbAttr {
    private multiplier;
    constructor(condition: PokemonDefendCondition, multiplier: number);
    /**
     * Applies the Ice Face pre-defense ability to the Pokémon.
     * Removes BattlerTagType.ICE_FACE when hit by physical attack and is in Ice Face form.
     *
     * @param {Pokemon} pokemon - The Pokémon with the Ice Face ability.
     * @param {boolean} passive - Whether the ability is passive.
     * @param {Pokemon} attacker - The attacking Pokémon.
     * @param {PokemonMove} move - The move being used.
     * @param {Utils.BooleanHolder} cancelled - A holder for whether the move was cancelled.
     * @param {any[]} args - Additional arguments.
     * @returns {boolean} - Whether the immunity was applied.
     */
    applyPreDefend(
      pokemon: Pokemon,
      passive: boolean,
      attacker: Pokemon,
      move: Move,
      cancelled: Utils.BooleanHolder,
      args: any[]
    ): boolean;
    /**
     * Gets the message triggered when the Pokémon avoids damage using the Ice Face ability.
     * @param {Pokemon} pokemon - The Pokémon with the Ice Face ability.
     * @param {string} abilityName - The name of the ability.
     * @param {...any} args - Additional arguments.
     * @returns {string} - The trigger message.
     */
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  /**
   * If a Pokémon with this Ability selects a damaging move, it has a 30% chance of going first in its priority bracket. If the Ability activates, this is announced at the start of the turn (after move selection).
   *
   * @extends AbAttr
   */
  export class BypassSpeedChanceAbAttr extends AbAttr {
    chance: number;
    /**
     * @param {number} chance probability of ability being active.
     */
    constructor(chance: number);
    /**
     * bypass move order in their priority bracket when pokemon choose damaging move
     * @param {Pokemon} pokemon {@linkcode Pokemon}  the Pokemon applying this ability
     * @param {boolean} passive N/A
     * @param {Utils.BooleanHolder} cancelled N/A
     * @param {any[]} args [0] {@linkcode Utils.BooleanHolder} set to true when the ability activated
     * @returns {boolean} - whether the ability was activated.
     */
    apply(pokemon: Pokemon, passive: boolean, cancelled: Utils.BooleanHolder, args: any[]): boolean;
    getTriggerMessage(pokemon: Pokemon, abilityName: string, ...args: any[]): string;
  }
  export function applyAbAttrs(
    attrType: Constructor<AbAttr>,
    pokemon: Pokemon,
    cancelled: Utils.BooleanHolder,
    ...args: any[]
  ): Promise<void>;
  export function applyPostBattleInitAbAttrs(
    attrType: Constructor<PostBattleInitAbAttr>,
    pokemon: Pokemon,
    ...args: any[]
  ): Promise<void>;
  export function applyPreDefendAbAttrs(
    attrType: Constructor<PreDefendAbAttr>,
    pokemon: Pokemon,
    attacker: Pokemon,
    move: Move,
    cancelled: Utils.BooleanHolder,
    ...args: any[]
  ): Promise<void>;
  export function applyPostDefendAbAttrs(
    attrType: Constructor<PostDefendAbAttr>,
    pokemon: Pokemon,
    attacker: Pokemon,
    move: Move,
    hitResult: HitResult,
    ...args: any[]
  ): Promise<void>;
  export function applyPostMoveUsedAbAttrs(
    attrType: Constructor<PostMoveUsedAbAttr>,
    pokemon: Pokemon,
    move: PokemonMove,
    source: Pokemon,
    targets: BattlerIndex[],
    ...args: any[]
  ): Promise<void>;
  export function applyBattleStatMultiplierAbAttrs(
    attrType: Constructor<BattleStatMultiplierAbAttr>,
    pokemon: Pokemon,
    battleStat: BattleStat,
    statValue: Utils.NumberHolder,
    ...args: any[]
  ): Promise<void>;
  /**
   * Applies a field Battle Stat multiplier attribute
   * @param attrType {@linkcode FieldMultiplyBattleStatAbAttr} should always be FieldMultiplyBattleStatAbAttr for the time being
   * @param pokemon {@linkcode Pokemon} the Pokemon applying this ability
   * @param stat {@linkcode Stat} the type of the checked stat
   * @param statValue {@linkcode Utils.NumberHolder} the value of the checked stat
   * @param checkedPokemon {@linkcode Pokemon} the Pokemon with the checked stat
   * @param hasApplied {@linkcode Utils.BooleanHolder} whether or not a FieldMultiplyBattleStatAbAttr has already affected this stat
   * @param args unused
   */
  export function applyFieldBattleStatMultiplierAbAttrs(
    attrType: Constructor<FieldMultiplyBattleStatAbAttr>,
    pokemon: Pokemon,
    stat: Stat,
    statValue: Utils.NumberHolder,
    checkedPokemon: Pokemon,
    hasApplied: Utils.BooleanHolder,
    ...args: any[]
  ): Promise<void>;
  export function applyPreAttackAbAttrs(
    attrType: Constructor<PreAttackAbAttr>,
    pokemon: Pokemon,
    defender: Pokemon,
    move: Move,
    ...args: any[]
  ): Promise<void>;
  export function applyPostAttackAbAttrs(
    attrType: Constructor<PostAttackAbAttr>,
    pokemon: Pokemon,
    defender: Pokemon,
    move: Move,
    hitResult: HitResult,
    ...args: any[]
  ): Promise<void>;
  export function applyPostKnockOutAbAttrs(
    attrType: Constructor<PostKnockOutAbAttr>,
    pokemon: Pokemon,
    knockedOut: Pokemon,
    ...args: any[]
  ): Promise<void>;
  export function applyPostVictoryAbAttrs(
    attrType: Constructor<PostVictoryAbAttr>,
    pokemon: Pokemon,
    ...args: any[]
  ): Promise<void>;
  export function applyPostSummonAbAttrs(
    attrType: Constructor<PostSummonAbAttr>,
    pokemon: Pokemon,
    ...args: any[]
  ): Promise<void>;
  export function applyPreSwitchOutAbAttrs(
    attrType: Constructor<PreSwitchOutAbAttr>,
    pokemon: Pokemon,
    ...args: any[]
  ): Promise<void>;
  export function applyPreStatChangeAbAttrs(
    attrType: Constructor<PreStatChangeAbAttr>,
    pokemon: Pokemon,
    stat: BattleStat,
    cancelled: Utils.BooleanHolder,
    ...args: any[]
  ): Promise<void>;
  export function applyPostStatChangeAbAttrs(
    attrType: Constructor<PostStatChangeAbAttr>,
    pokemon: Pokemon,
    stats: BattleStat[],
    levels: number,
    selfTarget: boolean,
    ...args: any[]
  ): Promise<void>;
  export function applyPreSetStatusAbAttrs(
    attrType: Constructor<PreSetStatusAbAttr>,
    pokemon: Pokemon,
    effect: StatusEffect,
    cancelled: Utils.BooleanHolder,
    ...args: any[]
  ): Promise<void>;
  export function applyPreApplyBattlerTagAbAttrs(
    attrType: Constructor<PreApplyBattlerTagAbAttr>,
    pokemon: Pokemon,
    tag: BattlerTag,
    cancelled: Utils.BooleanHolder,
    ...args: any[]
  ): Promise<void>;
  export function applyPreWeatherEffectAbAttrs(
    attrType: Constructor<PreWeatherEffectAbAttr>,
    pokemon: Pokemon,
    weather: Weather,
    cancelled: Utils.BooleanHolder,
    ...args: any[]
  ): Promise<void>;
  export function applyPostTurnAbAttrs(
    attrType: Constructor<PostTurnAbAttr>,
    pokemon: Pokemon,
    ...args: any[]
  ): Promise<void>;
  export function applyPostWeatherChangeAbAttrs(
    attrType: Constructor<PostWeatherChangeAbAttr>,
    pokemon: Pokemon,
    weather: WeatherType,
    ...args: any[]
  ): Promise<void>;
  export function applyPostWeatherLapseAbAttrs(
    attrType: Constructor<PostWeatherLapseAbAttr>,
    pokemon: Pokemon,
    weather: Weather,
    ...args: any[]
  ): Promise<void>;
  export function applyPostTerrainChangeAbAttrs(
    attrType: Constructor<PostTerrainChangeAbAttr>,
    pokemon: Pokemon,
    terrain: TerrainType,
    ...args: any[]
  ): Promise<void>;
  export function applyCheckTrappedAbAttrs(
    attrType: Constructor<CheckTrappedAbAttr>,
    pokemon: Pokemon,
    trapped: Utils.BooleanHolder,
    otherPokemon: Pokemon,
    ...args: any[]
  ): Promise<void>;
  export function applyPostBattleAbAttrs(
    attrType: Constructor<PostBattleAbAttr>,
    pokemon: Pokemon,
    ...args: any[]
  ): Promise<void>;
  export function applyPostFaintAbAttrs(
    attrType: Constructor<PostFaintAbAttr>,
    pokemon: Pokemon,
    attacker: Pokemon,
    move: Move,
    hitResult: HitResult,
    ...args: any[]
  ): Promise<void>;
  export const allAbilities: Ability[];
  export function initAbilities(): void;
}
declare module 'src/data/weather' {
  import Pokemon from 'src/field/pokemon';
  import {Type} from 'src/data/type';
  import Move from 'src/data/move';
  import BattleScene from 'src/battle-scene';
  import {TerrainType} from 'src/data/terrain';
  export enum WeatherType {
    NONE = 0,
    SUNNY = 1,
    RAIN = 2,
    SANDSTORM = 3,
    HAIL = 4,
    SNOW = 5,
    FOG = 6,
    HEAVY_RAIN = 7,
    HARSH_SUN = 8,
    STRONG_WINDS = 9,
  }
  export class Weather {
    weatherType: WeatherType;
    turnsLeft: number;
    constructor(weatherType: WeatherType, turnsLeft?: number);
    lapse(): boolean;
    isImmutable(): boolean;
    isDamaging(): boolean;
    isTypeDamageImmune(type: Type): boolean;
    getAttackTypeMultiplier(attackType: Type): number;
    isMoveWeatherCancelled(move: Move): boolean;
    isEffectSuppressed(scene: BattleScene): boolean;
  }
  export function getWeatherStartMessage(weatherType: WeatherType): string;
  export function getWeatherLapseMessage(weatherType: WeatherType): string;
  export function getWeatherDamageMessage(weatherType: WeatherType, pokemon: Pokemon): string;
  export function getWeatherClearMessage(weatherType: WeatherType): string;
  export function getTerrainStartMessage(terrainType: TerrainType): string;
  export function getTerrainClearMessage(terrainType: TerrainType): string;
  export function getTerrainBlockMessage(pokemon: Pokemon, terrainType: TerrainType): string;
  export function getRandomWeatherType(arena: any): WeatherType;
}
declare module 'src/enums/variant-tiers' {
  export enum VariantTier {
    COMMON = 0,
    RARE = 1,
    EPIC = 2,
  }
}
declare module 'src/overrides' {
  import {WeatherType} from 'src/data/weather';
  import {Variant} from 'src/data/variant';
  import {TempBattleStat} from 'src/data/temp-battle-stat';
  import {Nature} from 'src/data/nature';
  import {Type} from 'src/data/type';
  import {Stat} from 'src/data/pokemon-stat';
  import {PokeballCounts} from 'src/battle-scene';
  import {Gender} from 'src/data/gender';
  import {StatusEffect} from 'src/data/status-effect';
  import {SpeciesStatBoosterItem, modifierTypes} from 'src/modifier/modifier-type';
  import {VariantTier} from 'src/enums/variant-tiers';
  import {EggTier} from 'src/enums/egg-type';
  import {Abilities} from 'src/enums/abilities';
  import {BerryType} from 'src/enums/berry-type';
  import {Biome} from 'src/enums/biome';
  import {Moves} from 'src/enums/moves';
  import {Species} from 'src/enums/species';
  import {TimeOfDay} from 'src/enums/time-of-day';
  /**
   * Overrides for testing different in game situations
   * if an override name starts with "STARTING", it will apply when a new run begins
   */
  /**
   * OVERALL OVERRIDES
   */
  export const SEED_OVERRIDE: string;
  export const WEATHER_OVERRIDE: WeatherType;
  export const DOUBLE_BATTLE_OVERRIDE: boolean;
  export const SINGLE_BATTLE_OVERRIDE: boolean;
  export const STARTING_WAVE_OVERRIDE: number;
  export const STARTING_BIOME_OVERRIDE: Biome;
  export const ARENA_TINT_OVERRIDE: TimeOfDay;
  export const XP_MULTIPLIER_OVERRIDE: number;
  export const STARTING_MONEY_OVERRIDE: number;
  export const FREE_CANDY_UPGRADE_OVERRIDE: boolean;
  export const POKEBALL_OVERRIDE: {
    active: boolean;
    pokeballs: PokeballCounts;
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
  export const STARTER_FORM_OVERRIDES: Partial<Record<Species, number>>;
  export const STARTING_LEVEL_OVERRIDE: number;
  /**
   * SPECIES OVERRIDE
   * will only apply to the first starter in your party or each enemy pokemon
   * default is 0 to not override
   * @example SPECIES_OVERRIDE = Species.Bulbasaur;
   */
  export const STARTER_SPECIES_OVERRIDE: Species | number;
  export const ABILITY_OVERRIDE: Abilities;
  export const PASSIVE_ABILITY_OVERRIDE: Abilities;
  export const STATUS_OVERRIDE: StatusEffect;
  export const GENDER_OVERRIDE: Gender;
  export const MOVESET_OVERRIDE: Array<Moves>;
  export const SHINY_OVERRIDE: boolean;
  export const VARIANT_OVERRIDE: Variant;
  /**
   * OPPONENT / ENEMY OVERRIDES
   */
  export const OPP_SPECIES_OVERRIDE: Species | number;
  export const OPP_LEVEL_OVERRIDE: number;
  export const OPP_ABILITY_OVERRIDE: Abilities;
  export const OPP_PASSIVE_ABILITY_OVERRIDE: Abilities;
  export const OPP_STATUS_OVERRIDE: StatusEffect;
  export const OPP_GENDER_OVERRIDE: Gender;
  export const OPP_MOVESET_OVERRIDE: Array<Moves>;
  export const OPP_SHINY_OVERRIDE: boolean;
  export const OPP_VARIANT_OVERRIDE: Variant;
  export const OPP_IVS_OVERRIDE: number | number[];
  /**
   * EGG OVERRIDES
   */
  export const EGG_IMMEDIATE_HATCH_OVERRIDE: boolean;
  export const EGG_TIER_OVERRIDE: EggTier;
  export const EGG_SHINY_OVERRIDE: boolean;
  export const EGG_VARIANT_OVERRIDE: VariantTier;
  export const EGG_FREE_GACHA_PULLS_OVERRIDE: boolean;
  export const EGG_GACHA_PULL_COUNT_OVERRIDE: number;
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
    name: keyof typeof modifierTypes & string;
    count?: number;
    type?: TempBattleStat | Stat | Nature | Type | BerryType | SpeciesStatBoosterItem;
  }
  export const STARTING_MODIFIER_OVERRIDE: Array<ModifierOverride>;
  export const OPP_MODIFIER_OVERRIDE: Array<ModifierOverride>;
  export const STARTING_HELD_ITEMS_OVERRIDE: Array<ModifierOverride>;
  export const OPP_HELD_ITEMS_OVERRIDE: Array<ModifierOverride>;
  export const NEVER_CRIT_OVERRIDE: boolean;
  /**
   * An array of items by keys as defined in the "modifierTypes" object in the "modifier/modifier-type.ts" file.
   * Items listed will replace the normal rolls.
   * If less items are listed than rolled, only some items will be replaced
   * If more items are listed than rolled, only the first X items will be shown, where X is the number of items rolled.
   */
  export const ITEM_REWARD_OVERRIDE: Array<string>;
}
declare module 'src/system/pokemon-data' {
  import {BattleType} from 'src/battle';
  import BattleScene from 'src/battle-scene';
  import {Gender} from 'src/data/gender';
  import {Nature} from 'src/data/nature';
  import {PokeballType} from 'src/data/pokeball';
  import {Status} from 'src/data/status-effect';
  import Pokemon, {PokemonMove, PokemonSummonData} from 'src/field/pokemon';
  import {Variant} from 'src/data/variant';
  import {Biome} from 'src/enums/biome';
  import {Species} from 'src/enums/species';
  export default class PokemonData {
    id: number;
    player: boolean;
    species: Species;
    formIndex: number;
    abilityIndex: number;
    passive: boolean;
    shiny: boolean;
    variant: Variant;
    pokeball: PokeballType;
    level: number;
    exp: number;
    levelExp: number;
    gender: Gender;
    hp: number;
    stats: number[];
    ivs: number[];
    nature: Nature;
    natureOverride: Nature | -1;
    moveset: PokemonMove[];
    status: Status;
    friendship: number;
    metLevel: number;
    metBiome: Biome | -1;
    luck: number;
    pauseEvolutions: boolean;
    pokerus: boolean;
    fusionSpecies: Species;
    fusionFormIndex: number;
    fusionAbilityIndex: number;
    fusionShiny: boolean;
    fusionVariant: Variant;
    fusionGender: Gender;
    fusionLuck: number;
    boss: boolean;
    bossSegments?: number;
    summonData: PokemonSummonData;
    constructor(source: Pokemon | any, forHistory?: boolean);
    toPokemon(scene: BattleScene, battleType?: BattleType, partyMemberIndex?: number, double?: boolean): Pokemon;
  }
}
declare module 'src/system/modifier-data' {
  import BattleScene from 'src/battle-scene';
  import {PersistentModifier} from 'src/modifier/modifier';
  export default class ModifierData {
    private player;
    private typeId;
    private typePregenArgs;
    private args;
    private stackCount;
    className: string;
    constructor(source: PersistentModifier | any, player: boolean);
    toModifier(scene: BattleScene, constructor: any): PersistentModifier;
  }
}
declare module 'src/system/arena-data' {
  import {Arena} from 'src/field/arena';
  import {ArenaTag} from 'src/data/arena-tag';
  import {Biome} from 'src/enums/biome';
  import {Weather} from 'src/data/weather';
  import {Terrain} from 'src/data/terrain';
  export default class ArenaData {
    biome: Biome;
    weather: Weather;
    terrain: Terrain;
    tags: ArenaTag[];
    constructor(source: Arena | any);
  }
}
declare module 'src/system/trainer-data' {
  import BattleScene from 'src/battle-scene';
  import {TrainerType} from 'src/enums/trainer-type';
  import Trainer, {TrainerVariant} from 'src/field/trainer';
  export default class TrainerData {
    trainerType: TrainerType;
    variant: TrainerVariant;
    partyTemplateIndex: number;
    name: string;
    partnerName: string;
    constructor(source: Trainer | any);
    toTrainer(scene: BattleScene): Trainer;
  }
}
declare module 'src/touch-controls' {
  import BattleScene from 'src/battle-scene';
  export default class TouchControl {
    events: any;
    private buttonLock;
    private inputInterval;
    constructor(scene: BattleScene);
    /**
     * Initialize touch controls by binding keys to buttons.
     */
    init(): void;
    /**
     * Binds a node to a specific key to simulate keyboard events on touch.
     *
     * @param node - The DOM element to bind the key to.
     * @param key - The key to simulate.
     * @param events - The event emitter for handling input events.
     *
     * @remarks
     * This function binds touch events to a node to simulate 'keydown' and 'keyup' keyboard events.
     * It adds the key to the keys map and tracks the keydown state. When a touch starts, it simulates
     * a 'keydown' event and adds an 'active' class to the node. When the touch ends, it simulates a 'keyup'
     * event, removes the keydown state, and removes the 'active' class from the node and the last touched element.
     */
    bindKey(node: HTMLElement, key: string): void;
    touchButtonDown(node: HTMLElement, key: string): void;
    touchButtonUp(node: HTMLElement, key: string, id: string): void;
    /**
     * Simulates a keyboard event on the canvas.
     *
     * @param eventType - The type of the keyboard event ('keydown' or 'keyup').
     * @param key - The key to simulate.
     *
     * @remarks
     * This function checks if the key exists in the Button enum. If it does, it retrieves the corresponding button
     * and emits the appropriate event ('input_down' or 'input_up') based on the event type.
     */
    simulateKeyboardEvent(eventType: string, key: string): void;
    /**
     * {@link https://stackoverflow.com/a/39778831/4622620|Source}
     *
     * Prevent zoom on specified element
     * @param {HTMLElement} element
     */
    preventElementZoom(element: HTMLElement): void;
    /**
     * Deactivates all currently pressed keys.
     */
    deactivatePressedKey(): void;
  }
  /**
   * Check if the device has a touchscreen.
   *
   * @returns `true` if the device has a touchscreen, otherwise `false`.
   */
  export function hasTouchscreen(): boolean;
  /**
   * Check if the device is a mobile device.
   *
   * @returns `true` if the device is a mobile device, otherwise `false`.
   */
  export function isMobile(): boolean;
}
declare module 'src/ui/settings/navigationMenu' {
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import {Button} from 'src/enums/buttons';
  /**
   * Manages navigation and menus tabs within the setting menu.
   */
  export class NavigationManager {
    private static instance;
    modes: Mode[];
    selectedMode: Mode;
    navigationMenus: NavigationMenu[];
    labels: string[];
    /**
     * Creates an instance of NavigationManager.
     * To create a new tab in the menu, add the mode to the modes array and the label to the labels array.
     * and instantiate a new NavigationMenu instance in your handler
     * like: this.navigationContainer = new NavigationMenu(this.scene, 0, 0);
     */
    constructor();
    reset(): void;
    /**
     * Gets the singleton instance of the NavigationManager.
     * @returns The singleton instance of NavigationManager.
     */
    static getInstance(): NavigationManager;
    /**
     * Navigates modes based on given direction
     * @param scene The current BattleScene instance
     * @param direction LEFT or RIGHT
     */
    navigate(scene: any, direction: any): void;
    /**
     * Updates all navigation menus.
     */
    updateNavigationMenus(): void;
    /**
     * Updates icons for all navigation menus.
     */
    updateIcons(): void;
  }
  export default class NavigationMenu {
    private navigationIcons;
    scene: BattleScene;
    protected headerTitles: any[];
    /**
     * Creates an instance of NavigationMenu.
     * @param scene The current BattleScene instance.
     * @param x The x position of the NavigationMenu.
     * @param y The y position of the NavigationMenu.
     */
    constructor(scene: BattleScene, x: number, y: number);
    /**
     * Sets up the NavigationMenu by adding windows, icons, and labels.
     */
    setup(): void;
    /**
     * Updates the NavigationMenu's header titles based on the selected mode.
     */
    update(): void;
    /**
     * Updates the icons in the NavigationMenu based on the latest input recorded.
     */
    updateIcons(): void;
    /**
     * Handles navigation based on the button pressed.
     * @param button The button pressed for navigation.
     * @returns A boolean indicating if the navigation was handled.
     */
    navigate(button: Button): boolean;
  }
}
declare module 'src/ui/settings/abstract-settings-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import UiHandler from 'src/ui/ui-handler';
  import {Button} from 'src/enums/buttons';
  import {InputsIcons} from 'src/ui/settings/abstract-control-settings-ui-handler';
  import {Setting} from 'src/system/settings/settings';
  /**
   * Abstract class for handling UI elements related to settings.
   */
  export default class AbstractSettingsUiHandler extends UiHandler {
    private settingsContainer;
    private optionsContainer;
    private navigationContainer;
    private scrollCursor;
    private optionsBg;
    private optionCursors;
    private settingLabels;
    private optionValueLabels;
    protected navigationIcons: InputsIcons;
    private cursorObj;
    private reloadSettings;
    private reloadRequired;
    protected rowsToDisplay: number;
    protected title: string;
    protected settings: Array<Setting>;
    protected localStorageKey: string;
    constructor(scene: BattleScene, mode?: Mode);
    /**
     * Setup UI elements
     */
    setup(): void;
    /**
     * Update the bindings for the current active device configuration.
     */
    updateBindings(): void;
    /**
     * Show the UI with the provided arguments.
     *
     * @param args - Arguments to be passed to the show method.
     * @returns `true` if successful.
     */
    show(args: any[]): boolean;
    /**
     * Processes input from a specified button.
     * This method handles navigation through a UI menu, including movement through menu items
     * and handling special actions like cancellation. Each button press may adjust the cursor
     * position or the menu scroll, and plays a sound effect if the action was successful.
     *
     * @param button - The button pressed by the user.
     * @returns `true` if the action associated with the button was successfully processed, `false` otherwise.
     */
    processInput(button: Button): boolean;
    /**
     * Set the cursor to the specified position.
     *
     * @param cursor - The cursor position to set.
     * @returns `true` if the cursor was set successfully.
     */
    setCursor(cursor: number): boolean;
    /**
     * Set the option cursor to the specified position.
     *
     * @param settingIndex - The index of the setting.
     * @param cursor - The cursor position to set.
     * @param save - Whether to save the setting to local storage.
     * @returns `true` if the option cursor was set successfully.
     */
    setOptionCursor(settingIndex: number, cursor: number, save?: boolean): boolean;
    /**
     * Set the scroll cursor to the specified position.
     *
     * @param scrollCursor - The scroll cursor position to set.
     * @returns `true` if the scroll cursor was set successfully.
     */
    setScrollCursor(scrollCursor: number): boolean;
    /**
     * Update the scroll position of the settings UI.
     */
    updateSettingsScroll(): void;
    /**
     * Clear the UI elements and state.
     */
    clear(): void;
    /**
     * Erase the cursor from the UI.
     */
    eraseCursor(): void;
  }
}
declare module 'src/ui/settings/settings-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import AbstractSettingsUiHandler from 'src/ui/settings/abstract-settings-ui-handler';
  export default class SettingsUiHandler extends AbstractSettingsUiHandler {
    /**
     * Creates an instance of SettingsGamepadUiHandler.
     *
     * @param scene - The BattleScene instance.
     * @param mode - The UI mode, optional.
     */
    constructor(scene: BattleScene, mode?: Mode);
  }
}
declare module 'src/enums/ease-type' {
  export enum EaseType {
    NONE = 0,
    LINEAR = 'Linear',
    QUADRATIC = 'Quad',
    CUBIC = 'Cubic',
    QUARTIC = 'Quart',
    QUINTIC = 'Quint',
    SINUSOIDAL = 'Sine',
    EXPONENTIAL = 'Expo',
    CIRCULAR = 'Circ',
    ELASTIC = 'Elastic',
    BACK = 'Back',
    BOUNCE = 'Bounce',
    STEPPED = 'Stepped',
  }
}
declare module 'src/system/settings/settings' {
  import BattleScene from 'src/battle-scene';
  /**
   * Types for helping separate settings to different menus
   */
  export enum SettingType {
    GENERAL = 0,
    DISPLAY = 1,
    AUDIO = 2,
  }
  type SettingOption = {
    value: string;
    label: string;
  };
  export interface Setting {
    key: string;
    label: string;
    options: SettingOption[];
    default: number;
    type: SettingType;
    requireReload?: boolean;
  }
  /**
   * Setting Keys for existing settings
   * to be used when trying to find or update Settings
   */
  export const SettingKeys: {
    Game_Speed: string;
    HP_Bar_Speed: string;
    EXP_Gains_Speed: string;
    EXP_Party_Display: string;
    Skip_Seen_Dialogues: string;
    Battle_Style: string;
    Enable_Retries: string;
    Tutorials: string;
    Touch_Controls: string;
    Vibration: string;
    Language: string;
    UI_Theme: string;
    Window_Type: string;
    Money_Format: string;
    Damage_Numbers: string;
    Move_Animations: string;
    Show_Stats_on_Level_Up: string;
    Candy_Upgrade_Notification: string;
    Candy_Upgrade_Display: string;
    Move_Info: string;
    Show_Moveset_Flyout: string;
    Show_Arena_Flyout: string;
    Show_Time_Of_Day_Widget: string;
    Time_Of_Day_Animation: string;
    Sprite_Set: string;
    Fusion_Palette_Swaps: string;
    Player_Gender: string;
    Type_Hints: string;
    Master_Volume: string;
    BGM_Volume: string;
    SE_Volume: string;
    Music_Preference: string;
    Show_BGM_Bar: string;
  };
  /**
   * All Settings not related to controls
   */
  export const Setting: Array<Setting>;
  /**
   * Return the index of a Setting
   * @param key SettingKey
   * @returns index or -1 if doesn't exist
   */
  export function settingIndex(key: string): number;
  /**
   * Resets all settings to their defaults
   * @param scene current BattleScene
   */
  export function resetSettings(scene: BattleScene): void;
  /**
   * Updates a setting for current BattleScene
   * @param scene current BattleScene
   * @param setting string ideally from SettingKeys
   * @param value value to update setting with
   * @returns true if successful, false if not
   */
  export function setSetting(scene: BattleScene, setting: string, value: number): boolean;
}
declare module 'src/data/egg' {
  import BattleScene from 'src/battle-scene';
  import PokemonSpecies from 'src/data/pokemon-species';
  import {VariantTier} from 'src/enums/variant-tiers';
  import {PlayerPokemon} from 'src/field/pokemon';
  import {EggTier} from 'src/enums/egg-type';
  import {Species} from 'src/enums/species';
  import {EggSourceType} from 'src/enums/egg-source-types';
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
    private _id;
    private _tier;
    private _sourceType;
    private _hatchWaves;
    private _timestamp;
    private _species;
    private _isShiny;
    private _variantTier;
    private _eggMoveIndex;
    private _overrideHiddenAbility;
    get id(): number;
    get tier(): EggTier;
    get sourceType(): EggSourceType | undefined;
    get hatchWaves(): number;
    set hatchWaves(value: number);
    get timestamp(): number;
    get species(): Species;
    get isShiny(): boolean;
    get variantTier(): VariantTier;
    get eggMoveIndex(): number;
    get overrideHiddenAbility(): boolean;
    constructor(eggOptions?: IEggOptions);
    isManaphyEgg(): boolean;
    getKey(): string;
    generatePlayerPokemon(scene: BattleScene): PlayerPokemon;
    addEggToGameData(scene: BattleScene): void;
    getEggDescriptor(): string;
    getEggHatchWavesMessage(): string;
    getEggTypeDescriptor(scene: BattleScene): string;
    private rollEggMoveIndex;
    private getEggTierDefaultHatchWaves;
    private rollEggTier;
    private rollSpecies;
    /**
     * Rolls whether the egg is shiny or not.
     * @returns True if the egg is shiny
     **/
    private rollShiny;
    private rollVariant;
    private checkForPityTierOverrides;
    private increasePullStatistic;
    private getEggTierFromSpeciesStarterValue;
  }
  export function getLegendaryGachaSpeciesForTimestamp(scene: BattleScene, timestamp: number): Species;
  /**
   * Check for a given species EggTier Value
   * @param species - Species for wich we will check the egg tier it belongs to
   * @returns The egg tier of a given pokemon species
   */
  export function getEggTierForSpecies(pokemonSpecies: PokemonSpecies): EggTier;
}
declare module 'src/system/egg-data' {
  import {EggTier} from 'src/enums/egg-type';
  import {Species} from 'src/enums/species';
  import {VariantTier} from 'src/enums/variant-tiers';
  import {Egg} from 'src/data/egg';
  import {EggSourceType} from 'src/enums/egg-source-types';
  export default class EggData {
    id: number;
    tier: EggTier;
    sourceType: EggSourceType;
    hatchWaves: number;
    timestamp: number;
    variantTier: VariantTier;
    isShiny: boolean;
    species: Species;
    eggMoveIndex: number;
    overrideHiddenAbility: boolean;
    constructor(source: Egg | any);
    toEgg(): Egg;
  }
}
declare module 'src/system/game-stats' {
  export class GameStats {
    playTime: number;
    battles: number;
    classicSessionsPlayed: number;
    sessionsWon: number;
    ribbonsOwned: number;
    dailyRunSessionsPlayed: number;
    dailyRunSessionsWon: number;
    endlessSessionsPlayed: number;
    highestEndlessWave: number;
    highestLevel: number;
    highestMoney: number;
    highestDamage: number;
    highestHeal: number;
    pokemonSeen: number;
    pokemonDefeated: number;
    pokemonCaught: number;
    pokemonHatched: number;
    subLegendaryPokemonSeen: number;
    subLegendaryPokemonCaught: number;
    subLegendaryPokemonHatched: number;
    legendaryPokemonSeen: number;
    legendaryPokemonCaught: number;
    legendaryPokemonHatched: number;
    mythicalPokemonSeen: number;
    mythicalPokemonCaught: number;
    mythicalPokemonHatched: number;
    shinyPokemonSeen: number;
    shinyPokemonCaught: number;
    shinyPokemonHatched: number;
    pokemonFused: number;
    trainersDefeated: number;
    eggsPulled: number;
    rareEggsPulled: number;
    epicEggsPulled: number;
    legendaryEggsPulled: number;
    manaphyEggsPulled: number;
    constructor(source?: any);
  }
}
declare module 'src/tutorial' {
  import BattleScene from 'src/battle-scene';
  export enum Tutorial {
    Intro = 'INTRO',
    Access_Menu = 'ACCESS_MENU',
    Menu = 'MENU',
    Starter_Select = 'STARTER_SELECT',
    Pokerus = 'POKERUS',
    Stat_Change = 'STAT_CHANGE',
    Select_Item = 'SELECT_ITEM',
    Egg_Gacha = 'EGG_GACHA',
  }
  export function handleTutorial(scene: BattleScene, tutorial: Tutorial): Promise<boolean>;
}
declare module 'src/data/egg-moves' {
  import {Moves} from 'src/enums/moves';
  export const speciesEggMoves: {
    1: Moves[];
    4: Moves[];
    7: Moves[];
    10: Moves[];
    13: Moves[];
    16: Moves[];
    19: Moves[];
    21: Moves[];
    23: Moves[];
    27: Moves[];
    29: Moves[];
    32: Moves[];
    37: Moves[];
    41: Moves[];
    43: Moves[];
    46: Moves[];
    48: Moves[];
    50: Moves[];
    52: Moves[];
    54: Moves[];
    56: Moves[];
    58: Moves[];
    60: Moves[];
    63: Moves[];
    66: Moves[];
    69: Moves[];
    72: Moves[];
    74: Moves[];
    77: Moves[];
    79: Moves[];
    81: Moves[];
    83: Moves[];
    84: Moves[];
    86: Moves[];
    88: Moves[];
    90: Moves[];
    92: Moves[];
    95: Moves[];
    96: Moves[];
    98: Moves[];
    100: Moves[];
    102: Moves[];
    104: Moves[];
    108: Moves[];
    109: Moves[];
    111: Moves[];
    114: Moves[];
    115: Moves[];
    116: Moves[];
    118: Moves[];
    120: Moves[];
    123: Moves[];
    127: Moves[];
    128: Moves[];
    129: Moves[];
    131: Moves[];
    132: Moves[];
    133: Moves[];
    137: Moves[];
    138: Moves[];
    140: Moves[];
    142: Moves[];
    144: Moves[];
    145: Moves[];
    146: Moves[];
    147: Moves[];
    150: Moves[];
    151: Moves[];
    152: Moves[];
    155: Moves[];
    158: Moves[];
    161: Moves[];
    163: Moves[];
    165: Moves[];
    167: Moves[];
    170: Moves[];
    172: Moves[];
    173: Moves[];
    174: Moves[];
    175: Moves[];
    177: Moves[];
    179: Moves[];
    187: Moves[];
    190: Moves[];
    191: Moves[];
    193: Moves[];
    194: Moves[];
    198: Moves[];
    200: Moves[];
    201: Moves[];
    203: Moves[];
    204: Moves[];
    206: Moves[];
    207: Moves[];
    209: Moves[];
    211: Moves[];
    213: Moves[];
    214: Moves[];
    215: Moves[];
    216: Moves[];
    218: Moves[];
    220: Moves[];
    222: Moves[];
    223: Moves[];
    225: Moves[];
    227: Moves[];
    228: Moves[];
    231: Moves[];
    234: Moves[];
    235: Moves[];
    236: Moves[];
    238: Moves[];
    239: Moves[];
    240: Moves[];
    241: Moves[];
    243: Moves[];
    244: Moves[];
    245: Moves[];
    246: Moves[];
    249: Moves[];
    250: Moves[];
    251: Moves[];
    252: Moves[];
    255: Moves[];
    258: Moves[];
    261: Moves[];
    263: Moves[];
    265: Moves[];
    270: Moves[];
    273: Moves[];
    276: Moves[];
    278: Moves[];
    280: Moves[];
    283: Moves[];
    285: Moves[];
    287: Moves[];
    290: Moves[];
    293: Moves[];
    296: Moves[];
    298: Moves[];
    299: Moves[];
    300: Moves[];
    302: Moves[];
    303: Moves[];
    304: Moves[];
    307: Moves[];
    309: Moves[];
    311: Moves[];
    312: Moves[];
    313: Moves[];
    314: Moves[];
    316: Moves[];
    318: Moves[];
    320: Moves[];
    322: Moves[];
    324: Moves[];
    325: Moves[];
    327: Moves[];
    328: Moves[];
    331: Moves[];
    333: Moves[];
    335: Moves[];
    336: Moves[];
    337: Moves[];
    338: Moves[];
    339: Moves[];
    341: Moves[];
    343: Moves[];
    345: Moves[];
    347: Moves[];
    349: Moves[];
    351: Moves[];
    352: Moves[];
    353: Moves[];
    355: Moves[];
    357: Moves[];
    359: Moves[];
    360: Moves[];
    361: Moves[];
    363: Moves[];
    366: Moves[];
    369: Moves[];
    370: Moves[];
    371: Moves[];
    374: Moves[];
    377: Moves[];
    378: Moves[];
    379: Moves[];
    380: Moves[];
    381: Moves[];
    382: Moves[];
    383: Moves[];
    384: Moves[];
    385: Moves[];
    386: Moves[];
    387: Moves[];
    390: Moves[];
    393: Moves[];
    396: Moves[];
    399: Moves[];
    401: Moves[];
    403: Moves[];
    406: Moves[];
    408: Moves[];
    410: Moves[];
    412: Moves[];
    415: Moves[];
    417: Moves[];
    418: Moves[];
    420: Moves[];
    422: Moves[];
    425: Moves[];
    427: Moves[];
    431: Moves[];
    433: Moves[];
    434: Moves[];
    436: Moves[];
    438: Moves[];
    439: Moves[];
    440: Moves[];
    441: Moves[];
    442: Moves[];
    443: Moves[];
    446: Moves[];
    447: Moves[];
    449: Moves[];
    451: Moves[];
    453: Moves[];
    455: Moves[];
    456: Moves[];
    458: Moves[];
    459: Moves[];
    479: Moves[];
    480: Moves[];
    481: Moves[];
    482: Moves[];
    483: Moves[];
    484: Moves[];
    485: Moves[];
    486: Moves[];
    487: Moves[];
    488: Moves[];
    489: Moves[];
    490: Moves[];
    491: Moves[];
    492: Moves[];
    493: Moves[];
    494: Moves[];
    495: Moves[];
    498: Moves[];
    501: Moves[];
    504: Moves[];
    506: Moves[];
    509: Moves[];
    511: Moves[];
    513: Moves[];
    515: Moves[];
    517: Moves[];
    519: Moves[];
    522: Moves[];
    524: Moves[];
    527: Moves[];
    529: Moves[];
    531: Moves[];
    532: Moves[];
    535: Moves[];
    538: Moves[];
    539: Moves[];
    540: Moves[];
    543: Moves[];
    546: Moves[];
    548: Moves[];
    550: Moves[];
    551: Moves[];
    554: Moves[];
    556: Moves[];
    557: Moves[];
    559: Moves[];
    561: Moves[];
    562: Moves[];
    564: Moves[];
    566: Moves[];
    568: Moves[];
    570: Moves[];
    572: Moves[];
    574: Moves[];
    577: Moves[];
    580: Moves[];
    582: Moves[];
    585: Moves[];
    587: Moves[];
    588: Moves[];
    590: Moves[];
    592: Moves[];
    594: Moves[];
    595: Moves[];
    597: Moves[];
    599: Moves[];
    602: Moves[];
    605: Moves[];
    607: Moves[];
    610: Moves[];
    613: Moves[];
    615: Moves[];
    616: Moves[];
    618: Moves[];
    619: Moves[];
    621: Moves[];
    622: Moves[];
    624: Moves[];
    626: Moves[];
    627: Moves[];
    629: Moves[];
    631: Moves[];
    632: Moves[];
    633: Moves[];
    636: Moves[];
    638: Moves[];
    639: Moves[];
    640: Moves[];
    641: Moves[];
    642: Moves[];
    643: Moves[];
    644: Moves[];
    645: Moves[];
    646: Moves[];
    647: Moves[];
    648: Moves[];
    649: Moves[];
    650: Moves[];
    653: Moves[];
    656: Moves[];
    659: Moves[];
    661: Moves[];
    664: Moves[];
    667: Moves[];
    669: Moves[];
    672: Moves[];
    674: Moves[];
    676: Moves[];
    677: Moves[];
    679: Moves[];
    682: Moves[];
    684: Moves[];
    686: Moves[];
    688: Moves[];
    690: Moves[];
    692: Moves[];
    694: Moves[];
    696: Moves[];
    698: Moves[];
    701: Moves[];
    702: Moves[];
    703: Moves[];
    704: Moves[];
    707: Moves[];
    708: Moves[];
    710: Moves[];
    712: Moves[];
    714: Moves[];
    716: Moves[];
    717: Moves[];
    718: Moves[];
    719: Moves[];
    720: Moves[];
    721: Moves[];
    722: Moves[];
    725: Moves[];
    728: Moves[];
    731: Moves[];
    734: Moves[];
    736: Moves[];
    739: Moves[];
    741: Moves[];
    742: Moves[];
    744: Moves[];
    746: Moves[];
    747: Moves[];
    749: Moves[];
    751: Moves[];
    753: Moves[];
    755: Moves[];
    757: Moves[];
    759: Moves[];
    761: Moves[];
    764: Moves[];
    765: Moves[];
    766: Moves[];
    767: Moves[];
    769: Moves[];
    771: Moves[];
    772: Moves[];
    774: Moves[];
    775: Moves[];
    776: Moves[];
    777: Moves[];
    778: Moves[];
    779: Moves[];
    780: Moves[];
    781: Moves[];
    782: Moves[];
    785: Moves[];
    786: Moves[];
    787: Moves[];
    788: Moves[];
    789: Moves[];
    793: Moves[];
    794: Moves[];
    795: Moves[];
    796: Moves[];
    797: Moves[];
    798: Moves[];
    799: Moves[];
    800: Moves[];
    801: Moves[];
    802: Moves[];
    803: Moves[];
    805: Moves[];
    806: Moves[];
    807: Moves[];
    808: Moves[];
    810: Moves[];
    813: Moves[];
    816: Moves[];
    819: Moves[];
    821: Moves[];
    824: Moves[];
    827: Moves[];
    829: Moves[];
    831: Moves[];
    833: Moves[];
    835: Moves[];
    837: Moves[];
    840: Moves[];
    843: Moves[];
    845: Moves[];
    846: Moves[];
    848: Moves[];
    850: Moves[];
    852: Moves[];
    854: Moves[];
    856: Moves[];
    859: Moves[];
    868: Moves[];
    870: Moves[];
    871: Moves[];
    872: Moves[];
    874: Moves[];
    875: Moves[];
    876: Moves[];
    877: Moves[];
    878: Moves[];
    880: Moves[];
    881: Moves[];
    882: Moves[];
    883: Moves[];
    884: Moves[];
    885: Moves[];
    888: Moves[];
    889: Moves[];
    890: Moves[];
    891: Moves[];
    893: Moves[];
    894: Moves[];
    895: Moves[];
    896: Moves[];
    897: Moves[];
    898: Moves[];
    905: Moves[];
    906: Moves[];
    909: Moves[];
    912: Moves[];
    915: Moves[];
    917: Moves[];
    919: Moves[];
    921: Moves[];
    924: Moves[];
    926: Moves[];
    928: Moves[];
    931: Moves[];
    932: Moves[];
    935: Moves[];
    938: Moves[];
    940: Moves[];
    942: Moves[];
    944: Moves[];
    946: Moves[];
    948: Moves[];
    950: Moves[];
    951: Moves[];
    953: Moves[];
    955: Moves[];
    957: Moves[];
    960: Moves[];
    962: Moves[];
    963: Moves[];
    965: Moves[];
    967: Moves[];
    968: Moves[];
    969: Moves[];
    971: Moves[];
    973: Moves[];
    974: Moves[];
    976: Moves[];
    977: Moves[];
    978: Moves[];
    984: Moves[];
    985: Moves[];
    986: Moves[];
    987: Moves[];
    988: Moves[];
    989: Moves[];
    990: Moves[];
    991: Moves[];
    992: Moves[];
    993: Moves[];
    994: Moves[];
    995: Moves[];
    996: Moves[];
    999: Moves[];
    1001: Moves[];
    1002: Moves[];
    1003: Moves[];
    1004: Moves[];
    1005: Moves[];
    1006: Moves[];
    1007: Moves[];
    1008: Moves[];
    1009: Moves[];
    1010: Moves[];
    1012: Moves[];
    1014: Moves[];
    1015: Moves[];
    1016: Moves[];
    1017: Moves[];
    1020: Moves[];
    1021: Moves[];
    1022: Moves[];
    1023: Moves[];
    1024: Moves[];
    1025: Moves[];
    2019: Moves[];
    2027: Moves[];
    2037: Moves[];
    2050: Moves[];
    2052: Moves[];
    2074: Moves[];
    2088: Moves[];
    2670: Moves[];
    4052: Moves[];
    4077: Moves[];
    4079: Moves[];
    4083: Moves[];
    4144: Moves[];
    4145: Moves[];
    4146: Moves[];
    4222: Moves[];
    4263: Moves[];
    4554: Moves[];
    4562: Moves[];
    4618: Moves[];
    6058: Moves[];
    6100: Moves[];
    6211: Moves[];
    6215: Moves[];
    6570: Moves[];
    8128: Moves[];
    8194: Moves[];
    8901: Moves[];
  };
  export function initEggMoves(): void;
}
declare module 'src/configs/inputs/pad_xbox360' {
  import {SettingGamepad} from 'src/system/settings/settings-gamepad';
  import {Button} from 'src/enums/buttons';
  /**
   * Generic pad mapping
   */
  const pad_xbox360: {
    padID: string;
    padType: string;
    deviceMapping: {
      RC_S: number;
      RC_E: number;
      RC_W: number;
      RC_N: number;
      START: number;
      SELECT: number;
      LB: number;
      RB: number;
      LT: number;
      RT: number;
      LS: number;
      RS: number;
      LC_N: number;
      LC_S: number;
      LC_W: number;
      LC_E: number;
    };
    icons: {
      RC_S: string;
      RC_E: string;
      RC_W: string;
      RC_N: string;
      START: string;
      SELECT: string;
      LB: string;
      RB: string;
      LT: string;
      RT: string;
      LS: string;
      RS: string;
      LC_N: string;
      LC_S: string;
      LC_W: string;
      LC_E: string;
    };
    settings: {
      BUTTON_UP: Button;
      BUTTON_DOWN: Button;
      BUTTON_LEFT: Button;
      BUTTON_RIGHT: Button;
      BUTTON_ACTION: Button;
      BUTTON_CANCEL: Button;
      BUTTON_CYCLE_NATURE: Button;
      BUTTON_CYCLE_VARIANT: Button;
      BUTTON_MENU: Button;
      BUTTON_STATS: Button;
      BUTTON_CYCLE_FORM: Button;
      BUTTON_CYCLE_SHINY: Button;
      BUTTON_CYCLE_GENDER: Button;
      BUTTON_CYCLE_ABILITY: Button;
      BUTTON_SPEED_UP: Button;
      BUTTON_SLOW_DOWN: Button;
    };
    default: {
      LC_N: SettingGamepad;
      LC_S: SettingGamepad;
      LC_W: SettingGamepad;
      LC_E: SettingGamepad;
      RC_S: SettingGamepad;
      RC_E: SettingGamepad;
      RC_W: SettingGamepad;
      RC_N: SettingGamepad;
      START: SettingGamepad;
      SELECT: SettingGamepad;
      LB: SettingGamepad;
      RB: SettingGamepad;
      LT: SettingGamepad;
      RT: SettingGamepad;
      LS: SettingGamepad;
      RS: SettingGamepad;
    };
  };
  export default pad_xbox360;
}
declare module 'src/configs/inputs/pad_dualshock' {
  import {SettingGamepad} from 'src/system/settings/settings-gamepad';
  import {Button} from 'src/enums/buttons';
  /**
   * Dualshock mapping
   */
  const pad_dualshock: {
    padID: string;
    padType: string;
    deviceMapping: {
      RC_S: number;
      RC_E: number;
      RC_W: number;
      RC_N: number;
      START: number;
      SELECT: number;
      LB: number;
      RB: number;
      LT: number;
      RT: number;
      LS: number;
      RS: number;
      LC_N: number;
      LC_S: number;
      LC_W: number;
      LC_E: number;
      TOUCH: number;
    };
    icons: {
      RC_S: string;
      RC_E: string;
      RC_W: string;
      RC_N: string;
      START: string;
      SELECT: string;
      LB: string;
      RB: string;
      LT: string;
      RT: string;
      LS: string;
      RS: string;
      LC_N: string;
      LC_S: string;
      LC_W: string;
      LC_E: string;
      TOUCH: string;
    };
    settings: {
      BUTTON_UP: Button;
      BUTTON_DOWN: Button;
      BUTTON_LEFT: Button;
      BUTTON_RIGHT: Button;
      BUTTON_ACTION: Button;
      BUTTON_CANCEL: Button;
      BUTTON_CYCLE_NATURE: Button;
      BUTTON_CYCLE_VARIANT: Button;
      BUTTON_MENU: Button;
      BUTTON_STATS: Button;
      BUTTON_CYCLE_FORM: Button;
      BUTTON_CYCLE_SHINY: Button;
      BUTTON_CYCLE_GENDER: Button;
      BUTTON_CYCLE_ABILITY: Button;
      BUTTON_SPEED_UP: Button;
      BUTTON_SLOW_DOWN: Button;
      BUTTON_SUBMIT: Button;
    };
    default: {
      LC_N: SettingGamepad;
      LC_S: SettingGamepad;
      LC_W: SettingGamepad;
      LC_E: SettingGamepad;
      RC_S: SettingGamepad;
      RC_E: SettingGamepad;
      RC_W: SettingGamepad;
      RC_N: SettingGamepad;
      START: SettingGamepad;
      SELECT: SettingGamepad;
      LB: SettingGamepad;
      RB: SettingGamepad;
      LT: SettingGamepad;
      RT: SettingGamepad;
      LS: SettingGamepad;
      RS: SettingGamepad;
      TOUCH: SettingGamepad;
    };
  };
  export default pad_dualshock;
}
declare module 'src/configs/inputs/pad_unlicensedSNES' {
  import {SettingGamepad} from 'src/system/settings/settings-gamepad';
  import {Button} from 'src/enums/buttons';
  /**
   * 081f-e401 - UnlicensedSNES
   */
  const pad_unlicensedSNES: {
    padID: string;
    padType: string;
    deviceMapping: {
      RC_S: number;
      RC_E: number;
      RC_W: number;
      RC_N: number;
      START: number;
      SELECT: number;
      LB: number;
      RB: number;
      LC_N: number;
      LC_S: number;
      LC_W: number;
      LC_E: number;
    };
    icons: {
      RC_S: string;
      RC_E: string;
      RC_W: string;
      RC_N: string;
      START: string;
      SELECT: string;
      LB: string;
      RB: string;
      LC_N: string;
      LC_S: string;
      LC_W: string;
      LC_E: string;
    };
    settings: {
      BUTTON_UP: Button;
      BUTTON_DOWN: Button;
      BUTTON_LEFT: Button;
      BUTTON_RIGHT: Button;
      BUTTON_ACTION: Button;
      BUTTON_CANCEL: Button;
      BUTTON_CYCLE_NATURE: Button;
      BUTTON_CYCLE_VARIANT: Button;
      BUTTON_MENU: Button;
      BUTTON_STATS: Button;
      BUTTON_CYCLE_FORM: Button;
      BUTTON_CYCLE_SHINY: Button;
      BUTTON_CYCLE_GENDER: Button;
      BUTTON_CYCLE_ABILITY: Button;
      BUTTON_SPEED_UP: Button;
      BUTTON_SLOW_DOWN: Button;
    };
    default: {
      LC_N: SettingGamepad;
      LC_S: SettingGamepad;
      LC_W: SettingGamepad;
      LC_E: SettingGamepad;
      RC_S: SettingGamepad;
      RC_E: SettingGamepad;
      RC_W: SettingGamepad;
      RC_N: SettingGamepad;
      START: SettingGamepad;
      SELECT: SettingGamepad;
      LB: SettingGamepad;
      RB: SettingGamepad;
      LT: number;
      RT: number;
      LS: number;
      RS: number;
    };
  };
  export default pad_unlicensedSNES;
}
declare module 'src/configs/inputs/pad_generic' {
  import {SettingGamepad} from 'src/system/settings/settings-gamepad';
  import {Button} from 'src/enums/buttons';
  /**
   * Generic pad mapping
   */
  const pad_generic: {
    padID: string;
    padType: string;
    deviceMapping: {
      RC_S: number;
      RC_E: number;
      RC_W: number;
      RC_N: number;
      START: number;
      SELECT: number;
      LB: number;
      RB: number;
      LT: number;
      RT: number;
      LS: number;
      RS: number;
      LC_N: number;
      LC_S: number;
      LC_W: number;
      LC_E: number;
    };
    icons: {
      RC_S: string;
      RC_E: string;
      RC_W: string;
      RC_N: string;
      START: string;
      SELECT: string;
      LB: string;
      RB: string;
      LT: string;
      RT: string;
      LS: string;
      RS: string;
      LC_N: string;
      LC_S: string;
      LC_W: string;
      LC_E: string;
    };
    settings: {
      BUTTON_UP: Button;
      BUTTON_DOWN: Button;
      BUTTON_LEFT: Button;
      BUTTON_RIGHT: Button;
      BUTTON_ACTION: Button;
      BUTTON_CANCEL: Button;
      BUTTON_CYCLE_NATURE: Button;
      BUTTON_CYCLE_VARIANT: Button;
      BUTTON_MENU: Button;
      BUTTON_STATS: Button;
      BUTTON_CYCLE_FORM: Button;
      BUTTON_CYCLE_SHINY: Button;
      BUTTON_CYCLE_GENDER: Button;
      BUTTON_CYCLE_ABILITY: Button;
      BUTTON_SPEED_UP: Button;
      BUTTON_SLOW_DOWN: Button;
    };
    default: {
      LC_N: SettingGamepad;
      LC_S: SettingGamepad;
      LC_W: SettingGamepad;
      LC_E: SettingGamepad;
      RC_S: SettingGamepad;
      RC_E: SettingGamepad;
      RC_W: SettingGamepad;
      RC_N: SettingGamepad;
      START: SettingGamepad;
      SELECT: SettingGamepad;
      LB: SettingGamepad;
      RB: SettingGamepad;
      LT: SettingGamepad;
      RT: SettingGamepad;
      LS: SettingGamepad;
      RS: SettingGamepad;
    };
    blacklist: string[];
  };
  export default pad_generic;
}
declare module 'src/configs/inputs/pad_procon' {
  import {Button} from 'src/enums/buttons';
  /**
   * Nintendo Pro Controller mapping
   */
  const pad_procon: {
    padID: string;
    padType: string;
    deviceMapping: {
      RC_S: number;
      RC_E: number;
      RC_W: number;
      RC_N: number;
      START: number;
      SELECT: number;
      LB: number;
      RB: number;
      LT: number;
      RT: number;
      LS: number;
      RS: number;
      LC_N: number;
      LC_S: number;
      LC_W: number;
      LC_E: number;
      MENU: number;
    };
    icons: {
      RC_S: string;
      RC_E: string;
      RC_W: string;
      RC_N: string;
      START: string;
      SELECT: string;
      LB: string;
      RB: string;
      LT: string;
      RT: string;
      LS: string;
      RS: string;
      LC_N: string;
      LC_S: string;
      LC_W: string;
      LC_E: string;
    };
    settings: {
      [x: number]: Button;
    };
    default: {
      LC_N: any;
      LC_S: any;
      LC_W: any;
      LC_E: any;
      RC_S: any;
      RC_E: any;
      RC_W: any;
      RC_N: any;
      START: any;
      SELECT: any;
      LB: any;
      RB: any;
      LT: any;
      RT: any;
      LS: any;
      RS: any;
    };
  };
  export default pad_procon;
}
declare module 'src/system/settings/settings-keyboard' {
  import BattleScene from 'src/battle-scene';
  export enum SettingKeyboard {
    Button_Up = 'BUTTON_UP',
    Alt_Button_Up = 'ALT_BUTTON_UP',
    Button_Down = 'BUTTON_DOWN',
    Alt_Button_Down = 'ALT_BUTTON_DOWN',
    Button_Left = 'BUTTON_LEFT',
    Alt_Button_Left = 'ALT_BUTTON_LEFT',
    Button_Right = 'BUTTON_RIGHT',
    Alt_Button_Right = 'ALT_BUTTON_RIGHT',
    Button_Action = 'BUTTON_ACTION',
    Alt_Button_Action = 'ALT_BUTTON_ACTION',
    Button_Cancel = 'BUTTON_CANCEL',
    Alt_Button_Cancel = 'ALT_BUTTON_CANCEL',
    Button_Menu = 'BUTTON_MENU',
    Alt_Button_Menu = 'ALT_BUTTON_MENU',
    Button_Stats = 'BUTTON_STATS',
    Alt_Button_Stats = 'ALT_BUTTON_STATS',
    Button_Cycle_Form = 'BUTTON_CYCLE_FORM',
    Alt_Button_Cycle_Form = 'ALT_BUTTON_CYCLE_FORM',
    Button_Cycle_Shiny = 'BUTTON_CYCLE_SHINY',
    Alt_Button_Cycle_Shiny = 'ALT_BUTTON_CYCLE_SHINY',
    Button_Cycle_Gender = 'BUTTON_CYCLE_GENDER',
    Alt_Button_Cycle_Gender = 'ALT_BUTTON_CYCLE_GENDER',
    Button_Cycle_Ability = 'BUTTON_CYCLE_ABILITY',
    Alt_Button_Cycle_Ability = 'ALT_BUTTON_CYCLE_ABILITY',
    Button_Cycle_Nature = 'BUTTON_CYCLE_NATURE',
    Alt_Button_Cycle_Nature = 'ALT_BUTTON_CYCLE_NATURE',
    Button_Cycle_Variant = 'BUTTON_CYCLE_VARIANT',
    Alt_Button_Cycle_Variant = 'ALT_BUTTON_CYCLE_VARIANT',
    Button_Speed_Up = 'BUTTON_SPEED_UP',
    Alt_Button_Speed_Up = 'ALT_BUTTON_SPEED_UP',
    Button_Slow_Down = 'BUTTON_SLOW_DOWN',
    Alt_Button_Slow_Down = 'ALT_BUTTON_SLOW_DOWN',
    Button_Submit = 'BUTTON_SUBMIT',
    Alt_Button_Submit = 'ALT_BUTTON_SUBMIT',
  }
  export const settingKeyboardOptions: {
    BUTTON_UP: any[];
    BUTTON_DOWN: any[];
    ALT_BUTTON_UP: any[];
    BUTTON_LEFT: any[];
    BUTTON_RIGHT: any[];
    BUTTON_ACTION: any[];
    BUTTON_MENU: any[];
    BUTTON_SUBMIT: any[];
    ALT_BUTTON_DOWN: any[];
    ALT_BUTTON_LEFT: any[];
    ALT_BUTTON_RIGHT: any[];
    ALT_BUTTON_ACTION: any[];
    BUTTON_CANCEL: any[];
    ALT_BUTTON_CANCEL: any[];
    ALT_BUTTON_MENU: any[];
    BUTTON_STATS: any[];
    ALT_BUTTON_STATS: any[];
    BUTTON_CYCLE_FORM: any[];
    ALT_BUTTON_CYCLE_FORM: any[];
    BUTTON_CYCLE_SHINY: any[];
    ALT_BUTTON_CYCLE_SHINY: any[];
    BUTTON_CYCLE_GENDER: any[];
    ALT_BUTTON_CYCLE_GENDER: any[];
    BUTTON_CYCLE_ABILITY: any[];
    ALT_BUTTON_CYCLE_ABILITY: any[];
    BUTTON_CYCLE_NATURE: any[];
    ALT_BUTTON_CYCLE_NATURE: any[];
    BUTTON_CYCLE_VARIANT: any[];
    ALT_BUTTON_CYCLE_VARIANT: any[];
    BUTTON_SPEED_UP: any[];
    ALT_BUTTON_SPEED_UP: any[];
    BUTTON_SLOW_DOWN: any[];
    ALT_BUTTON_SLOW_DOWN: any[];
    ALT_BUTTON_SUBMIT: any[];
  };
  export const settingKeyboardDefaults: {
    BUTTON_UP: number;
    BUTTON_DOWN: number;
    BUTTON_LEFT: number;
    BUTTON_RIGHT: number;
    BUTTON_ACTION: number;
    BUTTON_MENU: number;
    BUTTON_SUBMIT: number;
    ALT_BUTTON_UP: number;
    ALT_BUTTON_DOWN: number;
    ALT_BUTTON_LEFT: number;
    ALT_BUTTON_RIGHT: number;
    ALT_BUTTON_ACTION: number;
    BUTTON_CANCEL: number;
    ALT_BUTTON_CANCEL: number;
    ALT_BUTTON_MENU: number;
    BUTTON_STATS: number;
    ALT_BUTTON_STATS: number;
    BUTTON_CYCLE_FORM: number;
    ALT_BUTTON_CYCLE_FORM: number;
    BUTTON_CYCLE_SHINY: number;
    ALT_BUTTON_CYCLE_SHINY: number;
    BUTTON_CYCLE_GENDER: number;
    ALT_BUTTON_CYCLE_GENDER: number;
    BUTTON_CYCLE_ABILITY: number;
    ALT_BUTTON_CYCLE_ABILITY: number;
    BUTTON_CYCLE_NATURE: number;
    ALT_BUTTON_CYCLE_NATURE: number;
    BUTTON_CYCLE_VARIANT: number;
    ALT_BUTTON_CYCLE_VARIANT: number;
    BUTTON_SPEED_UP: number;
    ALT_BUTTON_SPEED_UP: number;
    BUTTON_SLOW_DOWN: number;
    ALT_BUTTON_SLOW_DOWN: number;
    ALT_BUTTON_SUBMIT: number;
  };
  export const settingKeyboardBlackList: SettingKeyboard[];
  export function setSettingKeyboard(scene: BattleScene, setting: SettingKeyboard, value: number): boolean;
}
declare module 'src/configs/inputs/cfg_keyboard_qwerty' {
  import {Button} from 'src/enums/buttons';
  import {SettingKeyboard} from 'src/system/settings/settings-keyboard';
  const cfg_keyboard_qwerty: {
    padID: string;
    padType: string;
    deviceMapping: {
      KEY_A: number;
      KEY_B: number;
      KEY_C: number;
      KEY_D: number;
      KEY_E: number;
      KEY_F: number;
      KEY_G: number;
      KEY_H: number;
      KEY_I: number;
      KEY_J: number;
      KEY_K: number;
      KEY_L: number;
      KEY_M: number;
      KEY_N: number;
      KEY_O: number;
      KEY_P: number;
      KEY_Q: number;
      KEY_R: number;
      KEY_S: number;
      KEY_T: number;
      KEY_U: number;
      KEY_V: number;
      KEY_W: number;
      KEY_X: number;
      KEY_Y: number;
      KEY_Z: number;
      KEY_0: number;
      KEY_1: number;
      KEY_2: number;
      KEY_3: number;
      KEY_4: number;
      KEY_5: number;
      KEY_6: number;
      KEY_7: number;
      KEY_8: number;
      KEY_9: number;
      KEY_CTRL: number;
      KEY_DEL: number;
      KEY_END: number;
      KEY_ENTER: number;
      KEY_ESC: number;
      KEY_F1: number;
      KEY_F2: number;
      KEY_F3: number;
      KEY_F4: number;
      KEY_F5: number;
      KEY_F6: number;
      KEY_F7: number;
      KEY_F8: number;
      KEY_F9: number;
      KEY_F10: number;
      KEY_F11: number;
      KEY_F12: number;
      KEY_HOME: number;
      KEY_INSERT: number;
      KEY_PAGE_DOWN: number;
      KEY_PAGE_UP: number;
      KEY_PLUS: number;
      KEY_MINUS: number;
      KEY_QUOTATION: number;
      KEY_SHIFT: number;
      KEY_SPACE: number;
      KEY_TAB: number;
      KEY_TILDE: number;
      KEY_ARROW_UP: number;
      KEY_ARROW_DOWN: number;
      KEY_ARROW_LEFT: number;
      KEY_ARROW_RIGHT: number;
      KEY_LEFT_BRACKET: number;
      KEY_RIGHT_BRACKET: number;
      KEY_SEMICOLON: number;
      KEY_BACKSPACE: number;
      KEY_ALT: number;
    };
    icons: {
      KEY_A: string;
      KEY_B: string;
      KEY_C: string;
      KEY_D: string;
      KEY_E: string;
      KEY_F: string;
      KEY_G: string;
      KEY_H: string;
      KEY_I: string;
      KEY_J: string;
      KEY_K: string;
      KEY_L: string;
      KEY_M: string;
      KEY_N: string;
      KEY_O: string;
      KEY_P: string;
      KEY_Q: string;
      KEY_R: string;
      KEY_S: string;
      KEY_T: string;
      KEY_U: string;
      KEY_V: string;
      KEY_W: string;
      KEY_X: string;
      KEY_Y: string;
      KEY_Z: string;
      KEY_0: string;
      KEY_1: string;
      KEY_2: string;
      KEY_3: string;
      KEY_4: string;
      KEY_5: string;
      KEY_6: string;
      KEY_7: string;
      KEY_8: string;
      KEY_9: string;
      KEY_F1: string;
      KEY_F2: string;
      KEY_F3: string;
      KEY_F4: string;
      KEY_F5: string;
      KEY_F6: string;
      KEY_F7: string;
      KEY_F8: string;
      KEY_F9: string;
      KEY_F10: string;
      KEY_F11: string;
      KEY_F12: string;
      KEY_PAGE_DOWN: string;
      KEY_PAGE_UP: string;
      KEY_CTRL: string;
      KEY_DEL: string;
      KEY_END: string;
      KEY_ENTER: string;
      KEY_ESC: string;
      KEY_HOME: string;
      KEY_INSERT: string;
      KEY_PLUS: string;
      KEY_MINUS: string;
      KEY_QUOTATION: string;
      KEY_SHIFT: string;
      KEY_SPACE: string;
      KEY_TAB: string;
      KEY_TILDE: string;
      KEY_ARROW_UP: string;
      KEY_ARROW_DOWN: string;
      KEY_ARROW_LEFT: string;
      KEY_ARROW_RIGHT: string;
      KEY_LEFT_BRACKET: string;
      KEY_RIGHT_BRACKET: string;
      KEY_SEMICOLON: string;
      KEY_BACKSPACE: string;
      KEY_ALT: string;
    };
    settings: {
      BUTTON_UP: Button;
      BUTTON_DOWN: Button;
      BUTTON_LEFT: Button;
      BUTTON_RIGHT: Button;
      BUTTON_SUBMIT: Button;
      BUTTON_ACTION: Button;
      BUTTON_CANCEL: Button;
      BUTTON_MENU: Button;
      BUTTON_STATS: Button;
      BUTTON_CYCLE_SHINY: Button;
      BUTTON_CYCLE_FORM: Button;
      BUTTON_CYCLE_GENDER: Button;
      BUTTON_CYCLE_ABILITY: Button;
      BUTTON_CYCLE_NATURE: Button;
      BUTTON_CYCLE_VARIANT: Button;
      BUTTON_SPEED_UP: Button;
      BUTTON_SLOW_DOWN: Button;
      ALT_BUTTON_UP: Button;
      ALT_BUTTON_DOWN: Button;
      ALT_BUTTON_LEFT: Button;
      ALT_BUTTON_RIGHT: Button;
      ALT_BUTTON_SUBMIT: Button;
      ALT_BUTTON_ACTION: Button;
      ALT_BUTTON_CANCEL: Button;
      ALT_BUTTON_MENU: Button;
      ALT_BUTTON_STATS: Button;
      ALT_BUTTON_CYCLE_SHINY: Button;
      ALT_BUTTON_CYCLE_FORM: Button;
      ALT_BUTTON_CYCLE_GENDER: Button;
      ALT_BUTTON_CYCLE_ABILITY: Button;
      ALT_BUTTON_CYCLE_NATURE: Button;
      ALT_BUTTON_CYCLE_VARIANT: Button;
      ALT_BUTTON_SPEED_UP: Button;
      ALT_BUTTON_SLOW_DOWN: Button;
    };
    default: {
      KEY_ARROW_UP: SettingKeyboard;
      KEY_ARROW_DOWN: SettingKeyboard;
      KEY_ARROW_LEFT: SettingKeyboard;
      KEY_ARROW_RIGHT: SettingKeyboard;
      KEY_ENTER: SettingKeyboard;
      KEY_SPACE: SettingKeyboard;
      KEY_BACKSPACE: SettingKeyboard;
      KEY_ESC: SettingKeyboard;
      KEY_C: SettingKeyboard;
      KEY_R: SettingKeyboard;
      KEY_F: SettingKeyboard;
      KEY_G: SettingKeyboard;
      KEY_E: SettingKeyboard;
      KEY_N: SettingKeyboard;
      KEY_V: SettingKeyboard;
      KEY_PLUS: number;
      KEY_MINUS: number;
      KEY_A: SettingKeyboard;
      KEY_B: number;
      KEY_D: SettingKeyboard;
      KEY_H: number;
      KEY_I: number;
      KEY_J: number;
      KEY_K: number;
      KEY_L: number;
      KEY_M: SettingKeyboard;
      KEY_O: number;
      KEY_P: number;
      KEY_Q: number;
      KEY_S: SettingKeyboard;
      KEY_T: SettingKeyboard;
      KEY_U: number;
      KEY_W: SettingKeyboard;
      KEY_X: SettingKeyboard;
      KEY_Y: SettingKeyboard;
      KEY_Z: SettingKeyboard;
      KEY_0: number;
      KEY_1: number;
      KEY_2: number;
      KEY_3: number;
      KEY_4: number;
      KEY_5: number;
      KEY_6: number;
      KEY_7: number;
      KEY_8: number;
      KEY_9: number;
      KEY_CTRL: number;
      KEY_DEL: number;
      KEY_END: number;
      KEY_F1: number;
      KEY_F2: number;
      KEY_F3: number;
      KEY_F4: number;
      KEY_F5: number;
      KEY_F6: number;
      KEY_F7: number;
      KEY_F8: number;
      KEY_F9: number;
      KEY_F10: number;
      KEY_F11: number;
      KEY_F12: number;
      KEY_HOME: number;
      KEY_INSERT: number;
      KEY_PAGE_DOWN: SettingKeyboard;
      KEY_PAGE_UP: SettingKeyboard;
      KEY_QUOTATION: number;
      KEY_SHIFT: SettingKeyboard;
      KEY_TAB: number;
      KEY_TILDE: number;
      KEY_LEFT_BRACKET: number;
      KEY_RIGHT_BRACKET: number;
      KEY_SEMICOLON: number;
      KEY_ALT: number;
    };
    blacklist: string[];
  };
  export default cfg_keyboard_qwerty;
}
declare module 'src/enums/devices' {
  export enum Device {
    GAMEPAD = 0,
    KEYBOARD = 1,
  }
}
declare module 'src/configs/inputs/configHandler' {
  /**
   * Retrieves the key associated with the specified keycode from the mapping.
   *
   * @param config - The configuration object containing the mapping.
   * @param keycode - The keycode to search for.
   * @returns The key associated with the specified keycode.
   */
  export function getKeyWithKeycode(config: any, keycode: any): string;
  /**
   * Retrieves the setting name associated with the specified keycode.
   *
   * @param config - The configuration object containing custom settings.
   * @param keycode - The keycode to search for.
   * @returns The setting name associated with the specified keycode.
   */
  export function getSettingNameWithKeycode(config: any, keycode: any): any;
  /**
   * Retrieves the icon associated with the specified keycode.
   *
   * @param config - The configuration object containing icons.
   * @param keycode - The keycode to search for.
   * @returns The icon associated with the specified keycode.
   */
  export function getIconWithKeycode(config: any, keycode: any): any;
  /**
   * Retrieves the button associated with the specified keycode.
   *
   * @param config - The configuration object containing settings.
   * @param keycode - The keycode to search for.
   * @returns The button associated with the specified keycode.
   */
  export function getButtonWithKeycode(config: any, keycode: any): any;
  /**
   * Retrieves the key associated with the specified setting name.
   *
   * @param config - The configuration object containing custom settings.
   * @param settingName - The setting name to search for.
   * @returns The key associated with the specified setting name.
   */
  export function getKeyWithSettingName(config: any, settingName: any): string;
  /**
   * Retrieves the setting name associated with the specified key.
   *
   * @param config - The configuration object containing custom settings.
   * @param key - The key to search for.
   * @returns The setting name associated with the specified key.
   */
  export function getSettingNameWithKey(config: any, key: any): any;
  /**
   * Retrieves the icon associated with the specified key.
   *
   * @param config - The configuration object containing icons.
   * @param key - The key to search for.
   * @returns The icon associated with the specified key.
   */
  export function getIconWithKey(config: any, key: any): any;
  /**
   * Retrieves the icon associated with the specified setting name.
   *
   * @param config - The configuration object containing icons.
   * @param settingName - The setting name to search for.
   * @returns The icon associated with the specified setting name.
   */
  export function getIconWithSettingName(config: any, settingName: any): any;
  export function getIconForLatestInput(configs: any, source: any, devices: any, settingName: any): any;
  export function assign(config: any, settingNameTarget: any, keycode: any): boolean;
  export function swap(config: any, settingNameTarget: any, keycode: any): boolean;
  /**
   * Deletes the binding of the specified setting name.
   *
   * @param config - The configuration object containing custom settings.
   * @param settingName - The setting name to delete.
   */
  export function deleteBind(config: any, settingName: any): boolean;
  export function canIAssignThisKey(config: any, key: any): boolean;
  export function canIOverrideThisSetting(config: any, settingName: any): boolean;
  export function canIDeleteThisKey(config: any, key: any): boolean;
}
declare module 'src/ui/settings/settings-keyboard-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import {setSettingKeyboard} from 'src/system/settings/settings-keyboard';
  import AbstractControlSettingsUiHandler from 'src/ui/settings/abstract-control-settings-ui-handler';
  import {InterfaceConfig} from 'src/inputs-controller';
  /**
   * Class representing the settings UI handler for keyboards.
   *
   * @extends AbstractControlSettingsUiHandler
   */
  export default class SettingsKeyboardUiHandler extends AbstractControlSettingsUiHandler {
    /**
     * Creates an instance of SettingsKeyboardUiHandler.
     *
     * @param scene - The BattleScene instance.
     * @param mode - The UI mode, optional.
     */
    constructor(scene: BattleScene, mode?: Mode);
    setSetting: typeof setSettingKeyboard;
    /**
     * Setup UI elements.
     */
    setup(): void;
    /**
     * Handle the home key press event.
     */
    onHomeDown(): void;
    /**
     * Handle the delete key press event.
     */
    onDeleteDown(): void;
    /**
     * Set the layout for the active configuration.
     *
     * @param activeConfig - The active keyboard configuration.
     * @returns `true` if the layout was successfully applied, otherwise `false`.
     */
    setLayout(activeConfig: InterfaceConfig): boolean;
    /**
     * Update the display of the chosen keyboard layout.
     */
    updateChosenKeyboardDisplay(): void;
    /**
     * Save the custom keyboard mapping to local storage.
     *
     * @param config - The configuration to save.
     */
    saveCustomKeyboardMappingToLocalStorage(config: any): void;
    /**
     * Save the setting to local storage.
     *
     * @param settingName - The name of the setting to save.
     * @param cursor - The cursor position to save.
     */
    saveSettingToLocalStorage(settingName: any, cursor: any): void;
  }
}
declare module 'src/inputs-controller' {
  import BattleScene from 'src/battle-scene';
  import {SettingGamepad} from 'src/system/settings/settings-gamepad';
  import {SettingKeyboard} from 'src/system/settings/settings-keyboard';
  import {Button} from 'src/enums/buttons';
  import {Device} from 'src/enums/devices';
  export interface DeviceMapping {
    [key: string]: number;
  }
  export interface IconsMapping {
    [key: string]: string;
  }
  export interface SettingMapping {
    [key: string]: Button;
  }
  export interface MappingLayout {
    [key: string]: SettingGamepad | SettingKeyboard | number;
  }
  export interface InterfaceConfig {
    padID: string;
    padType: string;
    deviceMapping: DeviceMapping;
    icons: IconsMapping;
    settings: SettingMapping;
    default: MappingLayout;
    custom?: MappingLayout;
  }
  module 'phaser' {
    namespace Input {
      namespace Gamepad {
        interface GamepadPlugin {
          /**
           * Refreshes the list of connected Gamepads.
           * This is called automatically when a gamepad is connected or disconnected, and during the update loop.
           */
          refreshPads(): void;
        }
      }
    }
  }
  /**
   * Manages and handles all input controls for the game, including keyboard and gamepad interactions.
   *
   * @remarks
   * This class is designed to centralize input management across the game. It facilitates the setup,
   * configuration, and handling of all game inputs, making it easier to manage various input devices
   * such as keyboards and gamepads. The class provides methods for setting up input devices, handling
   * their events, and responding to changes in input state (e.g., button presses, releases).
   *
   * The `InputsController` class also includes mechanisms to handle game focus events to ensure input
   * states are correctly reset and managed when the game loses or regains focus, maintaining robust
   * and responsive control handling throughout the game's lifecycle.
   *
   * Key responsibilities include:
   * - Initializing and configuring gamepad and keyboard controls.
   * - Emitting events related to specific input actions.
   * - Responding to external changes such as gamepad connection/disconnection.
   * - Managing game state transitions in response to input events, particularly focus loss and recovery.
   *
   * Usage of this class is intended to simplify input management across various parts of the game,
   * providing a unified interface for all input-related interactions.
   */
  export class InputsController {
    private gamepads;
    private scene;
    events: any;
    private buttonLock;
    private interactions;
    private configs;
    gamepadSupport: boolean;
    selectedDevice: any;
    private disconnectedGamepads;
    lastSource: string;
    private inputInterval;
    private touchControls;
    /**
     * Initializes a new instance of the game control system, setting up initial state and configurations.
     *
     * @param scene - The Phaser scene associated with this instance.
     *
     * @remarks
     * This constructor initializes the game control system with necessary setups for handling inputs.
     * It prepares an interactions array indexed by button identifiers and configures default states for each button.
     * Specific buttons like MENU and STATS are set not to repeat their actions.
     * It concludes by calling the `init` method to complete the setup.
     */
    constructor(scene: BattleScene);
    /**
     * Sets up event handlers and initializes gamepad and keyboard controls.
     *
     * @remarks
     * This method configures event listeners for both gamepad and keyboard inputs.
     * It handles gamepad connections/disconnections and button press events, and ensures keyboard controls are set up.
     * Additionally, it manages the game's behavior when it loses focus to prevent unwanted game actions during this state.
     */
    init(): void;
    /**
     * Handles actions to take when the game loses focus, such as deactivating pressed keys.
     *
     * @remarks
     * This method is triggered when the game or the browser tab loses focus. It ensures that any keys pressed are deactivated to prevent stuck keys affecting gameplay when the game is not active.
     */
    loseFocus(): void;
    /**
     * Enables or disables support for gamepad input.
     *
     * @param value - A boolean indicating whether gamepad support should be enabled (true) or disabled (false).
     *
     * @remarks
     * This method toggles gamepad support. If disabled, it also ensures that all currently pressed gamepad buttons are deactivated to avoid stuck inputs.
     */
    setGamepadSupport(value: boolean): void;
    /**
     * Sets the currently chosen gamepad and initializes related settings.
     * This method first deactivates any active key presses and then initializes the gamepad settings.
     *
     * @param gamepad - The identifier of the gamepad to set as chosen.
     */
    setChosenGamepad(gamepad: string): void;
    /**
     * Sets the currently chosen keyboard layout and initializes related settings.
     *
     * @param layoutKeyboard - The identifier of the keyboard layout to set as chosen.
     */
    setChosenKeyboardLayout(layoutKeyboard: string): void;
    /**
     * Retrieves the identifiers of all connected gamepads, excluding any that are currently marked as disconnected.
     * @returns Array<String> An array of strings representing the IDs of the connected gamepads.
     */
    getGamepadsName(): Array<string>;
    /**
     * Initializes the chosen gamepad by setting its identifier in the local storage and updating the UI to reflect the chosen gamepad.
     * If a gamepad name is provided, it uses that as the chosen gamepad; otherwise, it defaults to the currently chosen gamepad.
     * @param gamepadName Optional parameter to specify the name of the gamepad to initialize as chosen.
     */
    initChosenGamepad(gamepadName?: string): void;
    /**
     * Initializes the chosen keyboard layout by setting its identifier in the local storage and updating the UI to reflect the chosen layout.
     * If a layout name is provided, it uses that as the chosen layout; otherwise, it defaults to the currently chosen layout.
     * @param layoutKeyboard Optional parameter to specify the name of the keyboard layout to initialize as chosen.
     */
    initChosenLayoutKeyboard(layoutKeyboard?: string): void;
    /**
     * Handles the disconnection of a gamepad by adding its identifier to a list of disconnected gamepads.
     * This is necessary because Phaser retains memory of previously connected gamepads, and without tracking
     * disconnections, it would be impossible to determine the connection status of gamepads. This method ensures
     * that disconnected gamepads are recognized and can be appropriately hidden in the gamepad selection menu.
     *
     * @param thisGamepad The gamepad that has been disconnected.
     */
    onDisconnect(thisGamepad: any): void;
    /**
     * Updates the tracking of disconnected gamepads when a gamepad is reconnected.
     * It removes the reconnected gamepad's identifier from the `disconnectedGamepads` array,
     * effectively updating its status to connected.
     *
     * @param thisGamepad The gamepad that has been reconnected.
     */
    onReconnect(thisGamepad: any): void;
    /**
     * Initializes or updates configurations for connected gamepads.
     * It retrieves the names of all connected gamepads, sets up their configurations according to stored or default settings,
     * and ensures these configurations are saved. If the connected gamepad is the currently chosen one,
     * it reinitializes the chosen gamepad settings.
     *
     * @param thisGamepad The gamepad that is being set up.
     */
    setupGamepad(thisGamepad: any): void;
    /**
     * Initializes or updates configurations for connected keyboards.
     */
    setupKeyboard(): void;
    /**
     * Refreshes and re-indexes the list of connected gamepads.
     *
     * @remarks
     * This method updates the list of gamepads to exclude any that are undefined.
     * It corrects the index of each gamepad to account for any previously undefined entries,
     * ensuring that all gamepads are properly indexed and can be accurately referenced within the game.
     */
    refreshGamepads(): void;
    /**
     * Ensures the keyboard is initialized by checking if there is an active configuration for the keyboard.
     * If not, it sets up the keyboard with default configurations.
     */
    ensureKeyboardIsInit(): void;
    /**
     * Handles the keydown event for the keyboard.
     *
     * @param event The keyboard event.
     */
    keyboardKeyDown(event: any): void;
    /**
     * Handles the keyup event for the keyboard.
     *
     * @param event The keyboard event.
     */
    keyboardKeyUp(event: any): void;
    /**
     * Handles button press events on a gamepad. This method sets the gamepad as chosen on the first input if no gamepad is currently chosen.
     * It checks if gamepad support is enabled and if the event comes from the chosen gamepad. If so, it maps the button press to a specific
     * action using a custom configuration, emits an event for the button press, and records the time of the action.
     *
     * @param pad The gamepad on which the button was pressed.
     * @param button The specific button that was pressed.
     * @param value The intensity or value of the button press, if applicable.
     */
    gamepadButtonDown(pad: any, button: any, value: number): void;
    /**
     * Responds to a button release event on a gamepad by checking if the gamepad is supported and currently chosen.
     * If conditions are met, it identifies the configured action for the button, emits an event signaling the button release,
     * and clears the record of the button.
     *
     * @param pad The gamepad from which the button was released.
     * @param button The specific button that was released.
     * @param value The intensity or value of the button release, if applicable.
     */
    gamepadButtonUp(pad: any, button: any, value: number): void;
    /**
     * Retrieves the configuration object for a gamepad based on its identifier. The method identifies specific gamepad models
     * based on substrings in the identifier and returns predefined configurations for recognized models.
     * If no specific configuration matches, it defaults to a generic gamepad configuration.
     *
     * @param id The identifier string of the gamepad.
     * @returns InterfaceConfig The configuration object corresponding to the identified gamepad type.
     */
    getConfig(id: string): InterfaceConfig;
    /**
     * Retrieves the configuration object for a keyboard layout based on its identifier.
     *
     * @param id The identifier string of the keyboard layout.
     * @returns InterfaceConfig The configuration object corresponding to the identified keyboard layout.
     */
    getConfigKeyboard(id: string): InterfaceConfig;
    /**
     * Deactivates all currently pressed keys.
     */
    deactivatePressedKey(): void;
    /**
     * Retrieves the active configuration for the currently chosen device.
     * It checks if a specific device ID is stored in configurations and returns it.
     *
     * @returns InterfaceConfig The configuration object for the active gamepad, or null if not set.
     */
    getActiveConfig(device: Device): any;
    getIconForLatestInputRecorded(settingName: any): any;
    getLastSourceDevice(): Device;
    getLastSourceConfig(): any;
    getLastSourceType(): any;
    /**
     * Injects a custom mapping configuration into the configuration for a specific gamepad.
     * If the device does not have an existing configuration, it initializes one first.
     *
     * @param selectedDevice The identifier of the device to configure.
     * @param mappingConfigs The mapping configuration to apply to the device.
     */
    injectConfig(selectedDevice: string, mappingConfigs: any): void;
    resetConfigs(): void;
    /**
     * Swaps a binding in the configuration.
     *
     * @param config The configuration object.
     * @param settingName The name of the setting to swap.
     * @param pressedButton The button that was pressed.
     */
    assignBinding(config: any, settingName: any, pressedButton: any): boolean;
  }
}
declare module 'src/ui/settings/settings-gamepad-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import {setSettingGamepad} from 'src/system/settings/settings-gamepad';
  import {InterfaceConfig} from 'src/inputs-controller';
  import AbstractControlSettingsUiHandler from 'src/ui/settings/abstract-control-settings-ui-handler';
  /**
   * Class representing the settings UI handler for gamepads.
   *
   * @extends AbstractControlSettingsUiHandler
   */
  export default class SettingsGamepadUiHandler extends AbstractControlSettingsUiHandler {
    /**
     * Creates an instance of SettingsGamepadUiHandler.
     *
     * @param scene - The BattleScene instance.
     * @param mode - The UI mode, optional.
     */
    constructor(scene: BattleScene, mode?: Mode);
    setSetting: typeof setSettingGamepad;
    /**
     * Setup UI elements.
     */
    setup(): void;
    /**
     * Set the layout for the active configuration.
     *
     * @param activeConfig - The active gamepad configuration.
     * @returns `true` if the layout was successfully applied, otherwise `false`.
     */
    setLayout(activeConfig: InterfaceConfig): boolean;
    /**
     * Update the display of the chosen gamepad.
     */
    updateChosenGamepadDisplay(): void;
    /**
     * Save the setting to local storage.
     *
     * @param settingName - The setting to save.
     * @param cursor - The cursor position to save.
     */
    saveSettingToLocalStorage(settingName: any, cursor: any): void;
  }
}
declare module 'src/system/settings/settings-gamepad' {
  import BattleScene from 'src/battle-scene';
  import {SettingKeyboard} from 'src/system/settings/settings-keyboard';
  export enum SettingGamepad {
    Controller = 'CONTROLLER',
    Gamepad_Support = 'GAMEPAD_SUPPORT',
    Button_Up = 'BUTTON_UP',
    Button_Down = 'BUTTON_DOWN',
    Button_Left = 'BUTTON_LEFT',
    Button_Right = 'BUTTON_RIGHT',
    Button_Action = 'BUTTON_ACTION',
    Button_Cancel = 'BUTTON_CANCEL',
    Button_Menu = 'BUTTON_MENU',
    Button_Stats = 'BUTTON_STATS',
    Button_Cycle_Form = 'BUTTON_CYCLE_FORM',
    Button_Cycle_Shiny = 'BUTTON_CYCLE_SHINY',
    Button_Cycle_Gender = 'BUTTON_CYCLE_GENDER',
    Button_Cycle_Ability = 'BUTTON_CYCLE_ABILITY',
    Button_Cycle_Nature = 'BUTTON_CYCLE_NATURE',
    Button_Cycle_Variant = 'BUTTON_CYCLE_VARIANT',
    Button_Speed_Up = 'BUTTON_SPEED_UP',
    Button_Slow_Down = 'BUTTON_SLOW_DOWN',
    Button_Submit = 'BUTTON_SUBMIT',
  }
  export const settingGamepadOptions: {
    CONTROLLER: string[];
    GAMEPAD_SUPPORT: string[];
    BUTTON_UP: string[];
    BUTTON_DOWN: string[];
    BUTTON_LEFT: string[];
    BUTTON_RIGHT: string[];
    BUTTON_ACTION: string[];
    BUTTON_CANCEL: string[];
    BUTTON_MENU: string[];
    BUTTON_STATS: string[];
    BUTTON_CYCLE_FORM: string[];
    BUTTON_CYCLE_SHINY: string[];
    BUTTON_CYCLE_GENDER: string[];
    BUTTON_CYCLE_ABILITY: string[];
    BUTTON_CYCLE_NATURE: string[];
    BUTTON_CYCLE_VARIANT: string[];
    BUTTON_SPEED_UP: string[];
    BUTTON_SLOW_DOWN: string[];
    BUTTON_SUBMIT: string[];
  };
  export const settingGamepadDefaults: {
    CONTROLLER: number;
    GAMEPAD_SUPPORT: number;
    BUTTON_UP: number;
    BUTTON_DOWN: number;
    BUTTON_LEFT: number;
    BUTTON_RIGHT: number;
    BUTTON_ACTION: number;
    BUTTON_CANCEL: number;
    BUTTON_MENU: number;
    BUTTON_STATS: number;
    BUTTON_CYCLE_FORM: number;
    BUTTON_CYCLE_SHINY: number;
    BUTTON_CYCLE_GENDER: number;
    BUTTON_CYCLE_ABILITY: number;
    BUTTON_CYCLE_NATURE: number;
    BUTTON_CYCLE_VARIANT: number;
    BUTTON_SPEED_UP: number;
    BUTTON_SLOW_DOWN: number;
    BUTTON_SUBMIT: number;
  };
  export const settingGamepadBlackList: SettingKeyboard[];
  export function setSettingGamepad(scene: BattleScene, setting: SettingGamepad, value: number): boolean;
}
declare module 'src/system/challenge-data' {
  import {Challenge} from 'src/data/challenge';
  export default class ChallengeData {
    id: number;
    value: number;
    severity: number;
    constructor(source: Challenge | any);
    toChallenge(): Challenge;
  }
}
declare module 'src/enums/game-data-type' {
  /**
   * enum for the game data types
   */
  export enum GameDataType {
    SYSTEM = 0,
    SESSION = 1,
    SETTINGS = 2,
    TUTORIALS = 3,
    SEEN_DIALOGUES = 4,
  }
}
declare module 'src/system/game-data' {
  import BattleScene, {PokeballCounts} from 'src/battle-scene';
  import Pokemon from 'src/field/pokemon';
  import PokemonSpecies from 'src/data/pokemon-species';
  import PokemonData from 'src/system/pokemon-data';
  import PersistentModifierData from 'src/system/modifier-data';
  import ArenaData from 'src/system/arena-data';
  import {GameModes} from 'src/game-mode';
  import {BattleType} from 'src/battle';
  import TrainerData from 'src/system/trainer-data';
  import EggData from 'src/system/egg-data';
  import {Egg} from 'src/data/egg';
  import {Nature} from 'src/data/nature';
  import {GameStats} from 'src/system/game-stats';
  import {Tutorial} from 'src/tutorial';
  import {Variant} from 'src/data/variant';
  import {SettingGamepad} from 'src/system/settings/settings-gamepad';
  import {SettingKeyboard} from 'src/system/settings/settings-keyboard';
  import ChallengeData from 'src/system/challenge-data';
  import {Device} from 'src/enums/devices';
  import {GameDataType} from 'src/enums/game-data-type';
  import {Moves} from 'src/enums/moves';
  import {PlayerGender} from 'src/enums/player-gender';
  import {Species} from 'src/enums/species';
  export const defaultStarterSpecies: Species[];
  export function getDataTypeKey(dataType: GameDataType, slotId?: number): string;
  export function encrypt(data: string, bypassLogin: boolean): string;
  export function decrypt(data: string, bypassLogin: boolean): string;
  interface SystemSaveData {
    trainerId: number;
    secretId: number;
    gender: PlayerGender;
    dexData: DexData;
    starterData: StarterData;
    gameStats: GameStats;
    unlocks: Unlocks;
    achvUnlocks: AchvUnlocks;
    voucherUnlocks: VoucherUnlocks;
    voucherCounts: VoucherCounts;
    eggs: EggData[];
    gameVersion: string;
    timestamp: number;
    eggPity: number[];
    unlockPity: number[];
  }
  export interface SessionSaveData {
    seed: string;
    playTime: number;
    gameMode: GameModes;
    party: PokemonData[];
    enemyParty: PokemonData[];
    modifiers: PersistentModifierData[];
    enemyModifiers: PersistentModifierData[];
    arena: ArenaData;
    pokeballCounts: PokeballCounts;
    money: number;
    score: number;
    waveIndex: number;
    battleType: BattleType;
    trainer: TrainerData;
    gameVersion: string;
    timestamp: number;
    challenges: ChallengeData[];
  }
  interface Unlocks {
    [key: number]: boolean;
  }
  interface AchvUnlocks {
    [key: string]: number;
  }
  interface VoucherUnlocks {
    [key: string]: number;
  }
  export interface VoucherCounts {
    [type: string]: number;
  }
  export interface DexData {
    [key: number]: DexEntry;
  }
  export interface DexEntry {
    seenAttr: bigint;
    caughtAttr: bigint;
    natureAttr: number;
    seenCount: number;
    caughtCount: number;
    hatchedCount: number;
    ivs: number[];
  }
  export const DexAttr: {
    NON_SHINY: bigint;
    SHINY: bigint;
    MALE: bigint;
    FEMALE: bigint;
    DEFAULT_VARIANT: bigint;
    VARIANT_2: bigint;
    VARIANT_3: bigint;
    DEFAULT_FORM: bigint;
  };
  export interface DexAttrProps {
    shiny: boolean;
    female: boolean;
    variant: Variant;
    formIndex: number;
  }
  export const AbilityAttr: {
    ABILITY_1: number;
    ABILITY_2: number;
    ABILITY_HIDDEN: number;
  };
  export type StarterMoveset = [Moves] | [Moves, Moves] | [Moves, Moves, Moves] | [Moves, Moves, Moves, Moves];
  export interface StarterFormMoveData {
    [key: number]: StarterMoveset;
  }
  export interface StarterMoveData {
    [key: number]: StarterMoveset | StarterFormMoveData;
  }
  export interface StarterAttributes {
    nature?: number;
    ability?: number;
    variant?: number;
    form?: number;
    female?: boolean;
  }
  export interface StarterPreferences {
    [key: number]: StarterAttributes;
  }
  export class StarterPrefs {
    static load(): StarterPreferences;
    static save(prefs: StarterPreferences): void;
  }
  export interface StarterDataEntry {
    moveset: StarterMoveset | StarterFormMoveData;
    eggMoves: number;
    candyCount: number;
    friendship: number;
    abilityAttr: number;
    passiveAttr: number;
    valueReduction: number;
    classicWinCount: number;
  }
  export interface StarterData {
    [key: number]: StarterDataEntry;
  }
  export interface TutorialFlags {
    [key: string]: boolean;
  }
  export interface SeenDialogues {
    [key: string]: boolean;
  }
  export class GameData {
    private scene;
    trainerId: number;
    secretId: number;
    gender: PlayerGender;
    dexData: DexData;
    private defaultDexData;
    starterData: StarterData;
    gameStats: GameStats;
    unlocks: Unlocks;
    achvUnlocks: AchvUnlocks;
    voucherUnlocks: VoucherUnlocks;
    voucherCounts: VoucherCounts;
    eggs: Egg[];
    eggPity: number[];
    unlockPity: number[];
    constructor(scene: BattleScene);
    getSystemSaveData(): SystemSaveData;
    saveSystem(): Promise<boolean>;
    loadSystem(): Promise<boolean>;
    initSystem(systemDataStr: string, cachedSystemDataStr?: string): Promise<boolean>;
    parseSystemData(dataStr: string): SystemSaveData;
    convertSystemDataStr(dataStr: string, shorten?: boolean): string;
    verify(): Promise<boolean>;
    clearLocalData(): void;
    /**
     * Saves a setting to localStorage
     * @param setting string ideally of SettingKeys
     * @param valueIndex index of the setting's option
     * @returns true
     */
    saveSetting(setting: string, valueIndex: number): boolean;
    /**
     * Saves the mapping configurations for a specified device.
     *
     * @param deviceName - The name of the device for which the configurations are being saved.
     * @param config - The configuration object containing custom mapping details.
     * @returns `true` if the configurations are successfully saved.
     */
    saveMappingConfigs(deviceName: string, config: any): boolean;
    /**
     * Loads the mapping configurations from localStorage and injects them into the input controller.
     *
     * @returns `true` if the configurations are successfully loaded and injected; `false` if no configurations are found in localStorage.
     *
     * @remarks
     * This method checks if the 'mappingConfigs' entry exists in localStorage. If it does not exist, the method returns `false`.
     * If 'mappingConfigs' exists, it parses the configurations and injects each configuration into the input controller
     * for the corresponding gamepad or device key. The method then returns `true` to indicate success.
     */
    loadMappingConfigs(): boolean;
    resetMappingToFactory(): boolean;
    /**
     * Saves a gamepad setting to localStorage.
     *
     * @param setting - The gamepad setting to save.
     * @param valueIndex - The index of the value to set for the gamepad setting.
     * @returns `true` if the setting is successfully saved.
     *
     * @remarks
     * This method initializes an empty object for gamepad settings if none exist in localStorage.
     * It then updates the setting in the current scene and iterates over the default gamepad settings
     * to update the specified setting with the new value. Finally, it saves the updated settings back
     * to localStorage and returns `true` to indicate success.
     */
    saveControlSetting(
      device: Device,
      localStoragePropertyName: string,
      setting: SettingGamepad | SettingKeyboard,
      settingDefaults: any,
      valueIndex: number
    ): boolean;
    /**
     * Loads Settings from local storage if available
     * @returns true if succesful, false if not
     */
    private loadSettings;
    private loadGamepadSettings;
    saveTutorialFlag(tutorial: Tutorial, flag: boolean): boolean;
    getTutorialFlags(): TutorialFlags;
    saveSeenDialogue(dialogue: string): boolean;
    getSeenDialogues(): SeenDialogues;
    private getSessionSaveData;
    getSession(slotId: number): Promise<SessionSaveData>;
    loadSession(scene: BattleScene, slotId: number, sessionData?: SessionSaveData): Promise<boolean>;
    deleteSession(slotId: number): Promise<boolean>;
    offlineNewClear(scene: BattleScene): Promise<boolean>;
    tryClearSession(scene: BattleScene, slotId: number): Promise<[success: boolean, newClear: boolean]>;
    parseSessionData(dataStr: string): SessionSaveData;
    saveAll(
      scene: BattleScene,
      skipVerification?: boolean,
      sync?: boolean,
      useCachedSession?: boolean,
      useCachedSystem?: boolean
    ): Promise<boolean>;
    tryExportData(dataType: GameDataType, slotId?: number): Promise<boolean>;
    importData(dataType: GameDataType, slotId?: number): void;
    private initDexData;
    private initStarterData;
    setPokemonSeen(pokemon: Pokemon, incrementCount?: boolean, trainer?: boolean): void;
    setPokemonCaught(pokemon: Pokemon, incrementCount?: boolean, fromEgg?: boolean): Promise<void>;
    setPokemonSpeciesCaught(
      pokemon: Pokemon,
      species: PokemonSpecies,
      incrementCount?: boolean,
      fromEgg?: boolean
    ): Promise<void>;
    incrementRibbonCount(species: PokemonSpecies, forStarter?: boolean): number;
    addStarterCandy(species: PokemonSpecies, count: number): void;
    setEggMoveUnlocked(species: PokemonSpecies, eggMoveIndex: number): Promise<boolean>;
    updateSpeciesDexIvs(speciesId: Species, ivs: number[]): void;
    getSpeciesCount(dexEntryPredicate: (entry: DexEntry) => boolean): number;
    getStarterCount(dexEntryPredicate: (entry: DexEntry) => boolean): number;
    getSpeciesDefaultDexAttr(species: PokemonSpecies, forSeen?: boolean, optimistic?: boolean): bigint;
    getSpeciesDexAttrProps(species: PokemonSpecies, dexAttr: bigint): DexAttrProps;
    getStarterSpeciesDefaultAbilityIndex(species: PokemonSpecies): number;
    getSpeciesDefaultNature(species: PokemonSpecies): Nature;
    getSpeciesDefaultNatureAttr(species: PokemonSpecies): number;
    getDexAttrLuck(dexAttr: bigint): number;
    getNaturesForAttr(natureAttr: number): Nature[];
    getSpeciesStarterValue(speciesId: Species): number;
    getFormIndex(attr: bigint): number;
    getFormAttr(formIndex: number): bigint;
    consolidateDexData(dexData: DexData): void;
    migrateStarterAbilities(systemData: SystemSaveData, initialStarterData?: StarterData): void;
    fixVariantData(systemData: SystemSaveData): void;
    fixStarterData(systemData: SystemSaveData): void;
    fixLegendaryStats(systemData: SystemSaveData): void;
  }
}
declare module 'src/interfaces/locales' {
  export interface Localizable {
    localize(): void;
  }
  export interface TranslationEntries {
    [key: string]:
      | string
      | {
          [key: string]: string;
        };
  }
  export interface SimpleTranslationEntries {
    [key: string]: string;
  }
  export interface MoveTranslationEntry {
    name: string;
    effect: string;
  }
  export interface MoveTranslationEntries {
    [key: string]: MoveTranslationEntry;
  }
  export interface AbilityTranslationEntry {
    name: string;
    description: string;
  }
  export interface AbilityTranslationEntries {
    [key: string]: AbilityTranslationEntry;
  }
  export interface ModifierTypeTranslationEntry {
    name?: string;
    description?: string;
    extra?: SimpleTranslationEntries;
  }
  export interface ModifierTypeTranslationEntries {
    ModifierType: {
      [key: string]: ModifierTypeTranslationEntry;
    };
    SpeciesBoosterItem: {
      [key: string]: ModifierTypeTranslationEntry;
    };
    AttackTypeBoosterItem: SimpleTranslationEntries;
    TempBattleStatBoosterItem: SimpleTranslationEntries;
    TempBattleStatBoosterStatName: SimpleTranslationEntries;
    BaseStatBoosterItem: SimpleTranslationEntries;
    EvolutionItem: SimpleTranslationEntries;
    FormChangeItem: SimpleTranslationEntries;
  }
  export interface PokemonInfoTranslationEntries {
    Stat: SimpleTranslationEntries;
    Type: SimpleTranslationEntries;
  }
  export interface BerryTranslationEntry {
    name: string;
    effect: string;
  }
  export interface BerryTranslationEntries {
    [key: string]: BerryTranslationEntry;
  }
  export interface StatusEffectTranslationEntries {
    [key: string]: StatusEffectTranslationEntry;
  }
  export interface StatusEffectTranslationEntry {
    name: string;
    obtain: string;
    obtainSource: string;
    activation: string;
    overlap: string;
    heal: string;
    description: string;
  }
  export interface AchievementTranslationEntry {
    name?: string;
    description?: string;
  }
  export interface AchievementTranslationEntries {
    [key: string]: AchievementTranslationEntry;
  }
  export interface DialogueTranslationEntry {
    [key: number]: string;
  }
  export interface DialogueTranslationCategory {
    [category: string]: DialogueTranslationEntry;
  }
  export interface DialogueTranslationEntries {
    [trainertype: string]: DialogueTranslationCategory;
  }
}
declare module 'src/data/pokemon-species' {
  import BattleScene, {AnySound} from 'src/battle-scene';
  import {Variant} from 'src/data/variant';
  import {GrowthRate} from 'src/data/exp';
  import {Type} from 'src/data/type';
  import {LevelMoves} from 'src/data/pokemon-level-moves';
  import {StarterMoveset} from 'src/system/game-data';
  import {GameMode} from 'src/game-mode';
  import {Localizable} from 'src/interfaces/locales';
  import {Stat} from 'src/data/pokemon-stat';
  import {Abilities} from 'src/enums/abilities';
  import {PartyMemberStrength} from 'src/enums/party-member-strength';
  import {Species} from 'src/enums/species';
  export enum Region {
    NORMAL = 0,
    ALOLA = 1,
    GALAR = 2,
    HISUI = 3,
    PALDEA = 4,
  }
  export function getPokemonSpecies(species: Species): PokemonSpecies;
  export function getPokemonSpeciesForm(species: Species, formIndex: number): PokemonSpeciesForm;
  export function getFusedSpeciesName(speciesAName: string, speciesBName: string): string;
  export type PokemonSpeciesFilter = (species: PokemonSpecies) => boolean;
  export abstract class PokemonSpeciesForm {
    speciesId: Species;
    formIndex: number;
    generation: number;
    type1: Type;
    type2: Type;
    height: number;
    weight: number;
    ability1: Abilities;
    ability2: Abilities;
    abilityHidden: Abilities;
    baseTotal: number;
    baseStats: number[];
    catchRate: number;
    baseFriendship: number;
    baseExp: number;
    genderDiffs: boolean;
    isStarterSelectable: boolean;
    constructor(
      type1: Type,
      type2: Type,
      height: number,
      weight: number,
      ability1: Abilities,
      ability2: Abilities,
      abilityHidden: Abilities,
      baseTotal: number,
      baseHp: number,
      baseAtk: number,
      baseDef: number,
      baseSpatk: number,
      baseSpdef: number,
      baseSpd: number,
      catchRate: number,
      baseFriendship: number,
      baseExp: number,
      genderDiffs: boolean,
      isStarterSelectable: boolean
    );
    /**
     * Method to get the root species id of a Pokemon.
     * Magmortar.getRootSpeciesId(true) => Magmar
     * Magmortar.getRootSpeciesId(false) => Magby
     * @param forStarter boolean to get the nonbaby form of a starter
     * @returns The species
     */
    getRootSpeciesId(forStarter?: boolean): Species;
    isOfType(type: number): boolean;
    getAbilityCount(): number;
    getAbility(abilityIndex: number): Abilities;
    getLevelMoves(): LevelMoves;
    getRegion(): Region;
    isObtainable(): boolean;
    isCatchable(): boolean;
    isRegional(): boolean;
    isTrainerForbidden(): boolean;
    isRareRegional(): boolean;
    /**
     * Gets the species' base stat amount for the given stat.
     * @param stat  The desired stat.
     * @returns The species' base stat amount.
     */
    getBaseStat(stat: Stat): number;
    getBaseExp(): number;
    getSpriteAtlasPath(female: boolean, formIndex?: number, shiny?: boolean, variant?: number): string;
    getSpriteId(female: boolean, formIndex?: number, shiny?: boolean, variant?: number, back?: boolean): string;
    getSpriteKey(female: boolean, formIndex?: number, shiny?: boolean, variant?: number): string;
    abstract getFormSpriteKey(formIndex?: number): string;
    /**
     * Variant Data key/index is either species id or species id followed by -formkey
     * @param formIndex optional form index for pokemon with different forms
     * @returns species id if no additional forms, index with formkey if a pokemon with a form
     */
    getVariantDataIndex(formIndex?: number): string | number;
    getIconAtlasKey(formIndex?: number, shiny?: boolean, variant?: number): string;
    getIconId(female: boolean, formIndex?: number, shiny?: boolean, variant?: number): string;
    getCryKey(formIndex?: number): string;
    validateStarterMoveset(moveset: StarterMoveset, eggMoves: number): boolean;
    loadAssets(
      scene: BattleScene,
      female: boolean,
      formIndex?: number,
      shiny?: boolean,
      variant?: Variant,
      startLoad?: boolean
    ): Promise<void>;
    cry(scene: BattleScene, soundConfig?: any, ignorePlay?: boolean): AnySound;
    generateCandyColors(scene: BattleScene): number[][];
  }
  export default class PokemonSpecies extends PokemonSpeciesForm implements Localizable {
    name: string;
    subLegendary: boolean;
    legendary: boolean;
    mythical: boolean;
    species: string;
    growthRate: GrowthRate;
    malePercent: number;
    genderDiffs: boolean;
    canChangeForm: boolean;
    forms: PokemonForm[];
    constructor(
      id: Species,
      generation: number,
      subLegendary: boolean,
      legendary: boolean,
      mythical: boolean,
      species: string,
      type1: Type,
      type2: Type,
      height: number,
      weight: number,
      ability1: Abilities,
      ability2: Abilities,
      abilityHidden: Abilities,
      baseTotal: number,
      baseHp: number,
      baseAtk: number,
      baseDef: number,
      baseSpatk: number,
      baseSpdef: number,
      baseSpd: number,
      catchRate: number,
      baseFriendship: number,
      baseExp: number,
      growthRate: GrowthRate,
      malePercent: number,
      genderDiffs: boolean,
      canChangeForm?: boolean,
      ...forms: PokemonForm[]
    );
    getName(formIndex?: number): string;
    localize(): void;
    getWildSpeciesForLevel(level: number, allowEvolving: boolean, isBoss: boolean, gameMode: GameMode): Species;
    getTrainerSpeciesForLevel(level: number, allowEvolving: boolean, strength: PartyMemberStrength): Species;
    private getStrengthLevelDiff;
    getSpeciesForLevel(
      level: number,
      allowEvolving?: boolean,
      forTrainer?: boolean,
      strength?: PartyMemberStrength
    ): Species;
    getEvolutionLevels(): any[];
    getPrevolutionLevels(): any[];
    getSimulatedEvolutionChain(
      currentLevel: number,
      forTrainer?: boolean,
      isBoss?: boolean,
      player?: boolean
    ): [Species, number][];
    getCompatibleFusionSpeciesFilter(): PokemonSpeciesFilter;
    isObtainable(): boolean;
    hasVariants(): any;
    getFormSpriteKey(formIndex?: number): string;
  }
  export class PokemonForm extends PokemonSpeciesForm {
    formName: string;
    formKey: string;
    formSpriteKey: string;
    private starterSelectableKeys;
    constructor(
      formName: string,
      formKey: string,
      type1: Type,
      type2: Type,
      height: number,
      weight: number,
      ability1: Abilities,
      ability2: Abilities,
      abilityHidden: Abilities,
      baseTotal: number,
      baseHp: number,
      baseAtk: number,
      baseDef: number,
      baseSpatk: number,
      baseSpdef: number,
      baseSpd: number,
      catchRate: number,
      baseFriendship: number,
      baseExp: number,
      genderDiffs?: boolean,
      formSpriteKey?: string,
      isStarterSelectable?: boolean
    );
    getFormSpriteKey(_formIndex?: number): string;
  }
  export enum SpeciesFormKey {
    MEGA = 'mega',
    MEGA_X = 'mega-x',
    MEGA_Y = 'mega-y',
    PRIMAL = 'primal',
    ORIGIN = 'origin',
    INCARNATE = 'incarnate',
    THERIAN = 'therian',
    GIGANTAMAX = 'gigantamax',
    GIGANTAMAX_SINGLE = 'gigantamax-single',
    GIGANTAMAX_RAPID = 'gigantamax-rapid',
    ETERNAMAX = 'eternamax',
  }
  export const allSpecies: PokemonSpecies[];
  export function initSpecies(): void;
  export const speciesStarters: {
    1: number;
    4: number;
    7: number;
    10: number;
    13: number;
    16: number;
    19: number;
    21: number;
    23: number;
    25: number;
    27: number;
    29: number;
    32: number;
    35: number;
    37: number;
    39: number;
    41: number;
    43: number;
    46: number;
    48: number;
    50: number;
    52: number;
    54: number;
    56: number;
    58: number;
    60: number;
    63: number;
    66: number;
    69: number;
    72: number;
    74: number;
    77: number;
    79: number;
    81: number;
    83: number;
    84: number;
    86: number;
    88: number;
    90: number;
    92: number;
    95: number;
    96: number;
    98: number;
    100: number;
    102: number;
    104: number;
    106: number;
    107: number;
    108: number;
    109: number;
    111: number;
    113: number;
    114: number;
    115: number;
    116: number;
    118: number;
    120: number;
    122: number;
    123: number;
    124: number;
    125: number;
    126: number;
    127: number;
    128: number;
    129: number;
    131: number;
    132: number;
    133: number;
    137: number;
    138: number;
    140: number;
    142: number;
    143: number;
    144: number;
    145: number;
    146: number;
    147: number;
    150: number;
    151: number;
    152: number;
    155: number;
    158: number;
    161: number;
    163: number;
    165: number;
    167: number;
    170: number;
    172: number;
    173: number;
    174: number;
    175: number;
    177: number;
    179: number;
    183: number;
    185: number;
    187: number;
    190: number;
    191: number;
    193: number;
    194: number;
    198: number;
    200: number;
    201: number;
    202: number;
    203: number;
    204: number;
    206: number;
    207: number;
    209: number;
    211: number;
    213: number;
    214: number;
    215: number;
    216: number;
    218: number;
    220: number;
    222: number;
    223: number;
    225: number;
    226: number;
    227: number;
    228: number;
    231: number;
    234: number;
    235: number;
    236: number;
    238: number;
    239: number;
    240: number;
    241: number;
    243: number;
    244: number;
    245: number;
    246: number;
    249: number;
    250: number;
    251: number;
    252: number;
    255: number;
    258: number;
    261: number;
    263: number;
    265: number;
    270: number;
    273: number;
    276: number;
    278: number;
    280: number;
    283: number;
    285: number;
    287: number;
    290: number;
    293: number;
    296: number;
    298: number;
    299: number;
    300: number;
    302: number;
    303: number;
    304: number;
    307: number;
    309: number;
    311: number;
    312: number;
    313: number;
    314: number;
    315: number;
    316: number;
    318: number;
    320: number;
    322: number;
    324: number;
    325: number;
    327: number;
    328: number;
    331: number;
    333: number;
    335: number;
    336: number;
    337: number;
    338: number;
    339: number;
    341: number;
    343: number;
    345: number;
    347: number;
    349: number;
    351: number;
    352: number;
    353: number;
    355: number;
    357: number;
    358: number;
    359: number;
    360: number;
    361: number;
    363: number;
    366: number;
    369: number;
    370: number;
    371: number;
    374: number;
    377: number;
    378: number;
    379: number;
    380: number;
    381: number;
    382: number;
    383: number;
    384: number;
    385: number;
    386: number;
    387: number;
    390: number;
    393: number;
    396: number;
    399: number;
    401: number;
    403: number;
    406: number;
    408: number;
    410: number;
    412: number;
    415: number;
    417: number;
    418: number;
    420: number;
    422: number;
    425: number;
    427: number;
    431: number;
    433: number;
    434: number;
    436: number;
    438: number;
    439: number;
    440: number;
    441: number;
    442: number;
    443: number;
    446: number;
    447: number;
    449: number;
    451: number;
    453: number;
    455: number;
    456: number;
    458: number;
    459: number;
    479: number;
    480: number;
    481: number;
    482: number;
    483: number;
    484: number;
    485: number;
    486: number;
    487: number;
    488: number;
    489: number;
    490: number;
    491: number;
    492: number;
    493: number;
    494: number;
    495: number;
    498: number;
    501: number;
    504: number;
    506: number;
    509: number;
    511: number;
    513: number;
    515: number;
    517: number;
    519: number;
    522: number;
    524: number;
    527: number;
    529: number;
    531: number;
    532: number;
    535: number;
    538: number;
    539: number;
    540: number;
    543: number;
    546: number;
    548: number;
    550: number;
    551: number;
    554: number;
    556: number;
    557: number;
    559: number;
    561: number;
    562: number;
    564: number;
    566: number;
    568: number;
    570: number;
    572: number;
    574: number;
    577: number;
    580: number;
    582: number;
    585: number;
    587: number;
    588: number;
    590: number;
    592: number;
    594: number;
    595: number;
    597: number;
    599: number;
    602: number;
    605: number;
    607: number;
    610: number;
    613: number;
    615: number;
    616: number;
    618: number;
    619: number;
    621: number;
    622: number;
    624: number;
    626: number;
    627: number;
    629: number;
    631: number;
    632: number;
    633: number;
    636: number;
    638: number;
    639: number;
    640: number;
    641: number;
    642: number;
    643: number;
    644: number;
    645: number;
    646: number;
    647: number;
    648: number;
    649: number;
    650: number;
    653: number;
    656: number;
    659: number;
    661: number;
    664: number;
    667: number;
    669: number;
    672: number;
    674: number;
    676: number;
    677: number;
    679: number;
    682: number;
    684: number;
    686: number;
    688: number;
    690: number;
    692: number;
    694: number;
    696: number;
    698: number;
    701: number;
    702: number;
    703: number;
    704: number;
    707: number;
    708: number;
    710: number;
    712: number;
    714: number;
    716: number;
    717: number;
    718: number;
    719: number;
    720: number;
    721: number;
    2670: number;
    722: number;
    725: number;
    728: number;
    731: number;
    734: number;
    736: number;
    739: number;
    741: number;
    742: number;
    744: number;
    746: number;
    747: number;
    749: number;
    751: number;
    753: number;
    755: number;
    757: number;
    759: number;
    761: number;
    764: number;
    765: number;
    766: number;
    767: number;
    769: number;
    771: number;
    772: number;
    774: number;
    775: number;
    776: number;
    777: number;
    778: number;
    779: number;
    780: number;
    781: number;
    782: number;
    785: number;
    786: number;
    787: number;
    788: number;
    789: number;
    793: number;
    794: number;
    795: number;
    796: number;
    797: number;
    798: number;
    799: number;
    800: number;
    801: number;
    802: number;
    803: number;
    805: number;
    806: number;
    807: number;
    808: number;
    2019: number;
    2027: number;
    2037: number;
    2050: number;
    2052: number;
    2074: number;
    2088: number;
    810: number;
    813: number;
    816: number;
    819: number;
    821: number;
    824: number;
    827: number;
    829: number;
    831: number;
    833: number;
    835: number;
    837: number;
    840: number;
    843: number;
    845: number;
    846: number;
    848: number;
    850: number;
    852: number;
    854: number;
    856: number;
    859: number;
    868: number;
    870: number;
    871: number;
    872: number;
    874: number;
    875: number;
    876: number;
    877: number;
    878: number;
    880: number;
    881: number;
    882: number;
    883: number;
    884: number;
    885: number;
    888: number;
    889: number;
    890: number;
    891: number;
    893: number;
    894: number;
    895: number;
    896: number;
    897: number;
    898: number;
    4052: number;
    4077: number;
    4079: number;
    4083: number;
    4222: number;
    4263: number;
    4554: number;
    4562: number;
    4618: number;
    4122: number;
    4144: number;
    4145: number;
    4146: number;
    6058: number;
    6100: number;
    6211: number;
    6215: number;
    6570: number;
    905: number;
    906: number;
    909: number;
    912: number;
    915: number;
    917: number;
    919: number;
    921: number;
    924: number;
    926: number;
    928: number;
    931: number;
    932: number;
    935: number;
    938: number;
    940: number;
    942: number;
    944: number;
    946: number;
    948: number;
    950: number;
    951: number;
    953: number;
    955: number;
    957: number;
    960: number;
    962: number;
    963: number;
    965: number;
    967: number;
    968: number;
    969: number;
    971: number;
    973: number;
    974: number;
    976: number;
    977: number;
    978: number;
    984: number;
    985: number;
    986: number;
    987: number;
    988: number;
    989: number;
    990: number;
    991: number;
    992: number;
    993: number;
    994: number;
    995: number;
    996: number;
    999: number;
    1001: number;
    1002: number;
    1003: number;
    1004: number;
    1005: number;
    1006: number;
    1007: number;
    1008: number;
    1009: number;
    1010: number;
    1012: number;
    1014: number;
    1015: number;
    1016: number;
    1017: number;
    1020: number;
    1021: number;
    1022: number;
    1023: number;
    1024: number;
    1025: number;
    8128: number;
    8194: number;
    8901: number;
  };
  export const noStarterFormKeys: string[];
  export function getStarterValueFriendshipCap(value: number): number;
  export const starterPassiveAbilities: {
    1: Abilities;
    4: Abilities;
    7: Abilities;
    10: Abilities;
    13: Abilities;
    16: Abilities;
    19: Abilities;
    21: Abilities;
    23: Abilities;
    27: Abilities;
    29: Abilities;
    32: Abilities;
    37: Abilities;
    41: Abilities;
    43: Abilities;
    46: Abilities;
    48: Abilities;
    50: Abilities;
    52: Abilities;
    54: Abilities;
    56: Abilities;
    58: Abilities;
    60: Abilities;
    63: Abilities;
    66: Abilities;
    69: Abilities;
    72: Abilities;
    74: Abilities;
    77: Abilities;
    79: Abilities;
    81: Abilities;
    83: Abilities;
    84: Abilities;
    86: Abilities;
    88: Abilities;
    90: Abilities;
    92: Abilities;
    95: Abilities;
    96: Abilities;
    98: Abilities;
    100: Abilities;
    102: Abilities;
    104: Abilities;
    108: Abilities;
    109: Abilities;
    111: Abilities;
    114: Abilities;
    115: Abilities;
    116: Abilities;
    118: Abilities;
    120: Abilities;
    123: Abilities;
    127: Abilities;
    128: Abilities;
    129: Abilities;
    131: Abilities;
    132: Abilities;
    133: Abilities;
    137: Abilities;
    138: Abilities;
    140: Abilities;
    142: Abilities;
    144: Abilities;
    145: Abilities;
    146: Abilities;
    147: Abilities;
    150: Abilities;
    151: Abilities;
    152: Abilities;
    155: Abilities;
    158: Abilities;
    161: Abilities;
    163: Abilities;
    165: Abilities;
    167: Abilities;
    170: Abilities;
    172: Abilities;
    173: Abilities;
    174: Abilities;
    175: Abilities;
    177: Abilities;
    179: Abilities;
    187: Abilities;
    190: Abilities;
    191: Abilities;
    193: Abilities;
    194: Abilities;
    198: Abilities;
    200: Abilities;
    201: Abilities;
    203: Abilities;
    204: Abilities;
    206: Abilities;
    207: Abilities;
    209: Abilities;
    211: Abilities;
    213: Abilities;
    214: Abilities;
    215: Abilities;
    216: Abilities;
    218: Abilities;
    220: Abilities;
    222: Abilities;
    223: Abilities;
    225: Abilities;
    227: Abilities;
    228: Abilities;
    231: Abilities;
    234: Abilities;
    235: Abilities;
    236: Abilities;
    238: Abilities;
    239: Abilities;
    240: Abilities;
    241: Abilities;
    243: Abilities;
    244: Abilities;
    245: Abilities;
    246: Abilities;
    249: Abilities;
    250: Abilities;
    251: Abilities;
    252: Abilities;
    255: Abilities;
    258: Abilities;
    261: Abilities;
    263: Abilities;
    265: Abilities;
    270: Abilities;
    273: Abilities;
    276: Abilities;
    278: Abilities;
    280: Abilities;
    283: Abilities;
    285: Abilities;
    287: Abilities;
    290: Abilities;
    293: Abilities;
    296: Abilities;
    298: Abilities;
    299: Abilities;
    300: Abilities;
    302: Abilities;
    303: Abilities;
    304: Abilities;
    307: Abilities;
    309: Abilities;
    311: Abilities;
    312: Abilities;
    313: Abilities;
    314: Abilities;
    316: Abilities;
    318: Abilities;
    320: Abilities;
    322: Abilities;
    324: Abilities;
    325: Abilities;
    327: Abilities;
    328: Abilities;
    331: Abilities;
    333: Abilities;
    335: Abilities;
    336: Abilities;
    337: Abilities;
    338: Abilities;
    339: Abilities;
    341: Abilities;
    343: Abilities;
    345: Abilities;
    347: Abilities;
    349: Abilities;
    351: Abilities;
    352: Abilities;
    353: Abilities;
    355: Abilities;
    357: Abilities;
    359: Abilities;
    360: Abilities;
    361: Abilities;
    363: Abilities;
    366: Abilities;
    369: Abilities;
    370: Abilities;
    371: Abilities;
    374: Abilities;
    377: Abilities;
    378: Abilities;
    379: Abilities;
    380: Abilities;
    381: Abilities;
    382: Abilities;
    383: Abilities;
    384: Abilities;
    385: Abilities;
    386: Abilities;
    387: Abilities;
    390: Abilities;
    393: Abilities;
    396: Abilities;
    399: Abilities;
    401: Abilities;
    403: Abilities;
    406: Abilities;
    408: Abilities;
    410: Abilities;
    412: Abilities;
    415: Abilities;
    417: Abilities;
    418: Abilities;
    420: Abilities;
    422: Abilities;
    425: Abilities;
    427: Abilities;
    431: Abilities;
    433: Abilities;
    434: Abilities;
    436: Abilities;
    438: Abilities;
    439: Abilities;
    440: Abilities;
    441: Abilities;
    442: Abilities;
    443: Abilities;
    446: Abilities;
    447: Abilities;
    449: Abilities;
    451: Abilities;
    453: Abilities;
    455: Abilities;
    456: Abilities;
    458: Abilities;
    459: Abilities;
    479: Abilities;
    480: Abilities;
    481: Abilities;
    482: Abilities;
    483: Abilities;
    484: Abilities;
    485: Abilities;
    486: Abilities;
    487: Abilities;
    488: Abilities;
    489: Abilities;
    490: Abilities;
    491: Abilities;
    492: Abilities;
    493: Abilities;
    494: Abilities;
    495: Abilities;
    498: Abilities;
    501: Abilities;
    504: Abilities;
    506: Abilities;
    509: Abilities;
    511: Abilities;
    513: Abilities;
    515: Abilities;
    517: Abilities;
    519: Abilities;
    522: Abilities;
    524: Abilities;
    527: Abilities;
    529: Abilities;
    531: Abilities;
    532: Abilities;
    535: Abilities;
    538: Abilities;
    539: Abilities;
    540: Abilities;
    543: Abilities;
    546: Abilities;
    548: Abilities;
    550: Abilities;
    551: Abilities;
    554: Abilities;
    556: Abilities;
    557: Abilities;
    559: Abilities;
    561: Abilities;
    562: Abilities;
    564: Abilities;
    566: Abilities;
    568: Abilities;
    570: Abilities;
    572: Abilities;
    574: Abilities;
    577: Abilities;
    580: Abilities;
    582: Abilities;
    585: Abilities;
    587: Abilities;
    588: Abilities;
    590: Abilities;
    592: Abilities;
    594: Abilities;
    595: Abilities;
    597: Abilities;
    599: Abilities;
    602: Abilities;
    605: Abilities;
    607: Abilities;
    610: Abilities;
    613: Abilities;
    615: Abilities;
    616: Abilities;
    618: Abilities;
    619: Abilities;
    621: Abilities;
    622: Abilities;
    624: Abilities;
    626: Abilities;
    627: Abilities;
    629: Abilities;
    631: Abilities;
    632: Abilities;
    633: Abilities;
    636: Abilities;
    638: Abilities;
    639: Abilities;
    640: Abilities;
    641: Abilities;
    642: Abilities;
    643: Abilities;
    644: Abilities;
    645: Abilities;
    646: Abilities;
    647: Abilities;
    648: Abilities;
    649: Abilities;
    650: Abilities;
    653: Abilities;
    656: Abilities;
    659: Abilities;
    661: Abilities;
    664: Abilities;
    667: Abilities;
    669: Abilities;
    672: Abilities;
    674: Abilities;
    676: Abilities;
    677: Abilities;
    679: Abilities;
    682: Abilities;
    684: Abilities;
    686: Abilities;
    688: Abilities;
    690: Abilities;
    692: Abilities;
    694: Abilities;
    696: Abilities;
    698: Abilities;
    701: Abilities;
    702: Abilities;
    703: Abilities;
    704: Abilities;
    707: Abilities;
    708: Abilities;
    710: Abilities;
    712: Abilities;
    714: Abilities;
    716: Abilities;
    717: Abilities;
    718: Abilities;
    719: Abilities;
    720: Abilities;
    721: Abilities;
    722: Abilities;
    725: Abilities;
    728: Abilities;
    731: Abilities;
    734: Abilities;
    736: Abilities;
    739: Abilities;
    741: Abilities;
    742: Abilities;
    744: Abilities;
    746: Abilities;
    747: Abilities;
    749: Abilities;
    751: Abilities;
    753: Abilities;
    755: Abilities;
    757: Abilities;
    759: Abilities;
    761: Abilities;
    764: Abilities;
    765: Abilities;
    766: Abilities;
    767: Abilities;
    769: Abilities;
    771: Abilities;
    772: Abilities;
    774: Abilities;
    775: Abilities;
    776: Abilities;
    777: Abilities;
    778: Abilities;
    779: Abilities;
    780: Abilities;
    781: Abilities;
    782: Abilities;
    785: Abilities;
    786: Abilities;
    787: Abilities;
    788: Abilities;
    789: Abilities;
    793: Abilities;
    794: Abilities;
    795: Abilities;
    796: Abilities;
    797: Abilities;
    798: Abilities;
    799: Abilities;
    800: Abilities;
    801: Abilities;
    802: Abilities;
    803: Abilities;
    805: Abilities;
    806: Abilities;
    807: Abilities;
    808: Abilities;
    810: Abilities;
    813: Abilities;
    816: Abilities;
    819: Abilities;
    821: Abilities;
    824: Abilities;
    827: Abilities;
    829: Abilities;
    831: Abilities;
    833: Abilities;
    835: Abilities;
    837: Abilities;
    840: Abilities;
    843: Abilities;
    845: Abilities;
    846: Abilities;
    848: Abilities;
    850: Abilities;
    852: Abilities;
    854: Abilities;
    856: Abilities;
    859: Abilities;
    868: Abilities;
    870: Abilities;
    871: Abilities;
    872: Abilities;
    874: Abilities;
    875: Abilities;
    876: Abilities;
    877: Abilities;
    878: Abilities;
    880: Abilities;
    881: Abilities;
    882: Abilities;
    883: Abilities;
    884: Abilities;
    885: Abilities;
    888: Abilities;
    889: Abilities;
    890: Abilities;
    891: Abilities;
    893: Abilities;
    894: Abilities;
    895: Abilities;
    896: Abilities;
    897: Abilities;
    898: Abilities;
    905: Abilities;
    906: Abilities;
    909: Abilities;
    912: Abilities;
    915: Abilities;
    917: Abilities;
    919: Abilities;
    921: Abilities;
    924: Abilities;
    926: Abilities;
    928: Abilities;
    931: Abilities;
    932: Abilities;
    935: Abilities;
    938: Abilities;
    940: Abilities;
    942: Abilities;
    944: Abilities;
    946: Abilities;
    948: Abilities;
    950: Abilities;
    951: Abilities;
    953: Abilities;
    955: Abilities;
    957: Abilities;
    960: Abilities;
    962: Abilities;
    963: Abilities;
    965: Abilities;
    967: Abilities;
    968: Abilities;
    969: Abilities;
    971: Abilities;
    973: Abilities;
    974: Abilities;
    976: Abilities;
    977: Abilities;
    978: Abilities;
    984: Abilities;
    985: Abilities;
    986: Abilities;
    987: Abilities;
    988: Abilities;
    989: Abilities;
    990: Abilities;
    991: Abilities;
    992: Abilities;
    993: Abilities;
    994: Abilities;
    995: Abilities;
    996: Abilities;
    999: Abilities;
    1001: Abilities;
    1002: Abilities;
    1003: Abilities;
    1004: Abilities;
    1005: Abilities;
    1006: Abilities;
    1007: Abilities;
    1008: Abilities;
    1009: Abilities;
    1010: Abilities;
    1012: Abilities;
    1014: Abilities;
    1015: Abilities;
    1016: Abilities;
    1017: Abilities;
    1020: Abilities;
    1021: Abilities;
    1022: Abilities;
    1023: Abilities;
    1024: Abilities;
    1025: Abilities;
    2019: Abilities;
    2027: Abilities;
    2037: Abilities;
    2050: Abilities;
    2052: Abilities;
    2074: Abilities;
    2088: Abilities;
    2670: Abilities;
    4052: Abilities;
    4077: Abilities;
    4079: Abilities;
    4083: Abilities;
    4144: Abilities;
    4145: Abilities;
    4146: Abilities;
    4222: Abilities;
    4263: Abilities;
    4554: Abilities;
    4562: Abilities;
    4618: Abilities;
    6058: Abilities;
    6100: Abilities;
    6211: Abilities;
    6215: Abilities;
    6570: Abilities;
    8128: Abilities;
    8194: Abilities;
    8901: Abilities;
  };
}
declare module 'src/data/pokemon-evolutions' {
  import Pokemon from 'src/field/pokemon';
  import {Species} from 'src/enums/species';
  export enum SpeciesWildEvolutionDelay {
    NONE = 0,
    SHORT = 1,
    MEDIUM = 2,
    LONG = 3,
    VERY_LONG = 4,
  }
  export enum EvolutionItem {
    NONE = 0,
    LINKING_CORD = 1,
    SUN_STONE = 2,
    MOON_STONE = 3,
    LEAF_STONE = 4,
    FIRE_STONE = 5,
    WATER_STONE = 6,
    THUNDER_STONE = 7,
    ICE_STONE = 8,
    DUSK_STONE = 9,
    DAWN_STONE = 10,
    SHINY_STONE = 11,
    CRACKED_POT = 12,
    SWEET_APPLE = 13,
    TART_APPLE = 14,
    STRAWBERRY_SWEET = 15,
    UNREMARKABLE_TEACUP = 16,
    CHIPPED_POT = 51,
    BLACK_AUGURITE = 52,
    GALARICA_CUFF = 53,
    GALARICA_WREATH = 54,
    PEAT_BLOCK = 55,
    AUSPICIOUS_ARMOR = 56,
    MALICIOUS_ARMOR = 57,
    MASTERPIECE_TEACUP = 58,
    METAL_ALLOY = 59,
    SCROLL_OF_DARKNESS = 60,
    SCROLL_OF_WATERS = 61,
    SYRUPY_APPLE = 62,
  }
  export type EvolutionConditionPredicate = (p: Pokemon) => boolean;
  export type EvolutionConditionEnforceFunc = (p: Pokemon) => void;
  export class SpeciesFormEvolution {
    speciesId: Species;
    preFormKey: string;
    evoFormKey: string;
    level: number;
    item: EvolutionItem;
    condition: SpeciesEvolutionCondition;
    wildDelay: SpeciesWildEvolutionDelay;
    constructor(
      speciesId: Species,
      preFormKey: string,
      evoFormKey: string,
      level: number,
      item: EvolutionItem,
      condition: SpeciesEvolutionCondition,
      wildDelay?: SpeciesWildEvolutionDelay
    );
  }
  export class SpeciesEvolution extends SpeciesFormEvolution {
    constructor(
      speciesId: Species,
      level: number,
      item: EvolutionItem,
      condition: SpeciesEvolutionCondition,
      wildDelay?: SpeciesWildEvolutionDelay
    );
  }
  export class FusionSpeciesFormEvolution extends SpeciesFormEvolution {
    primarySpeciesId: Species;
    constructor(primarySpeciesId: Species, evolution: SpeciesFormEvolution);
  }
  export class SpeciesEvolutionCondition {
    predicate: EvolutionConditionPredicate;
    enforceFunc: EvolutionConditionEnforceFunc;
    constructor(predicate: EvolutionConditionPredicate, enforceFunc?: EvolutionConditionEnforceFunc);
  }
  export class SpeciesFriendshipEvolutionCondition extends SpeciesEvolutionCondition {
    constructor(
      friendshipAmount: number,
      predicate?: EvolutionConditionPredicate,
      enforceFunc?: EvolutionConditionEnforceFunc
    );
  }
  interface PokemonEvolutions {
    [key: string]: SpeciesFormEvolution[];
  }
  export const pokemonEvolutions: PokemonEvolutions;
  interface PokemonPrevolutions {
    [key: string]: Species;
  }
  export const pokemonPrevolutions: PokemonPrevolutions;
  export function initPokemonPrevolutions(): void;
}
declare module 'src/data/trainer-names' {
  export const trainerNamePools: {
    1: string[][];
    2: string[][];
    3: string[][];
    4: string[][];
    5: string[];
    6: string[];
    7: string[];
    8: string[][];
    9: string[][];
    10: string[][];
    11: string[][];
    12: string[];
    13: string[];
    14: string[][];
    15: string[];
    16: string[];
    17: string[];
    18: string[];
    19: string[];
    20: string[];
    21: string[];
    22: string[];
    23: string[];
    24: string[];
    25: string[];
    26: string[];
    28: string[];
    29: string[];
    30: string[];
    31: string[];
    32: string[][];
    33: string[][];
    34: string[][];
    35: string[][];
    36: string[][];
    37: string[][];
    38: string[];
    39: string[];
    40: string[][];
    41: string[];
    42: string[][];
    43: string[];
    44: string[][];
    45: string[][];
    46: string[];
    47: string[][];
    48: string[][];
    49: string[][];
    50: string[][];
    27: string[];
  };
}
declare module 'src/field/trainer' {
  import BattleScene from 'src/battle-scene';
  import PokemonSpecies from 'src/data/pokemon-species';
  import {TrainerConfig, TrainerPartyTemplate, TrainerSlot} from 'src/data/trainer-config';
  import {EnemyPokemon} from 'src/field/pokemon';
  import {PersistentModifier} from 'src/modifier/modifier';
  import {PartyMemberStrength} from 'src/enums/party-member-strength';
  import {TrainerType} from 'src/enums/trainer-type';
  export enum TrainerVariant {
    DEFAULT = 0,
    FEMALE = 1,
    DOUBLE = 2,
  }
  export default class Trainer {
    config: TrainerConfig;
    variant: TrainerVariant;
    partyTemplateIndex: number;
    name: string;
    partnerName: string;
    constructor(
      scene: BattleScene,
      trainerType: TrainerType,
      variant: TrainerVariant,
      partyTemplateIndex?: number,
      name?: string,
      partnerName?: string
    );
    getKey(forceFemale?: boolean): string;
    /**
     * Returns the name of the trainer based on the provided trainer slot and the option to include a title.
     * @param {TrainerSlot} trainerSlot - The slot to determine which name to use. Defaults to TrainerSlot.NONE.
     * @param {boolean} includeTitle - Whether to include the title in the returned name. Defaults to false.
     * @returns {string} - The formatted name of the trainer.
     **/
    getName(trainerSlot?: TrainerSlot, includeTitle?: boolean): string;
    isDouble(): boolean;
    getMixedBattleBgm(): string;
    getBattleBgm(): string;
    getEncounterBgm(): string;
    getEncounterMessages(): string[];
    getVictoryMessages(): string[];
    getDefeatMessages(): string[];
    getPartyTemplate(): TrainerPartyTemplate;
    getPartyLevels(waveIndex: number): number[];
    genPartyMember(index: number): EnemyPokemon;
    genNewPartyMemberSpecies(level: number, strength: PartyMemberStrength, attempt?: number): PokemonSpecies;
    getPartyMemberMatchupScores(trainerSlot?: TrainerSlot, forSwitch?: boolean): [number, number][];
    getSortedPartyMemberMatchupScores(partyMemberScores?: [number, number][]): [number, number][];
    getNextSummonIndex(trainerSlot?: TrainerSlot, partyMemberScores?: [number, number][]): number;
    getPartyMemberModifierChanceMultiplier(index: number): number;
    genModifiers(party: EnemyPokemon[]): PersistentModifier[];
    loadAssets(): Promise<void>;
    initSprite(): void;
    /**
     * Attempts to animate a given set of {@linkcode any}
     * @see {@linkcode any.play}
     * @param sprite {@linkcode any} to animate
     * @param tintSprite {@linkcode any} placed on top of the sprite to add a color tint
     * @param animConfig {@linkcode any} to pass to {@linkcode any.play}
     * @returns true if the sprite was able to be animated
     */
    tryPlaySprite(sprite: any, tintSprite: any, animConfig: any): boolean;
    playAnim(): void;
    getSprites(): any[];
    getTintSprites(): any[];
    tint(color: number, alpha?: number, duration?: number, ease?: string): void;
    untint(duration: number, ease?: string): void;
  }
  export default interface Trainer {
    scene: BattleScene;
  }
}
declare module 'src/battle' {
  import BattleScene from 'src/battle-scene';
  import {EnemyPokemon, PlayerPokemon, QueuedMove} from 'src/field/pokemon';
  import {Command} from 'src/ui/command-ui-handler';
  import Trainer from 'src/field/trainer';
  import {GameMode} from 'src/game-mode';
  import {PokemonHeldItemModifier} from 'src/modifier/modifier';
  import {PokeballType} from 'src/data/pokeball';
  import {BattleSpec} from 'src/enums/battle-spec';
  import {Moves} from 'src/enums/moves';
  export enum BattleType {
    WILD = 0,
    TRAINER = 1,
    CLEAR = 2,
  }
  export enum BattlerIndex {
    ATTACKER = -1,
    PLAYER = 0,
    PLAYER_2 = 1,
    ENEMY = 2,
    ENEMY_2 = 3,
  }
  export interface TurnCommand {
    command: Command;
    cursor?: number;
    move?: QueuedMove;
    targets?: BattlerIndex[];
    skip?: boolean;
    args?: any[];
  }
  interface TurnCommands {
    [key: number]: TurnCommand;
  }
  export default class Battle {
    protected gameMode: GameMode;
    waveIndex: number;
    battleType: BattleType;
    battleSpec: BattleSpec;
    trainer: Trainer;
    enemyLevels: number[];
    enemyParty: EnemyPokemon[];
    seenEnemyPartyMemberIds: Set<number>;
    double: boolean;
    started: boolean;
    enemySwitchCounter: number;
    turn: number;
    turnCommands: TurnCommands;
    playerParticipantIds: Set<number>;
    battleScore: number;
    postBattleLoot: PokemonHeldItemModifier[];
    escapeAttempts: number;
    lastMove: Moves;
    battleSeed: string;
    private battleSeedState;
    moneyScattered: number;
    lastUsedPokeball: PokeballType;
    playerFaints: number;
    enemyFaints: number;
    private rngCounter;
    constructor(gameMode: GameMode, waveIndex: number, battleType: BattleType, trainer: Trainer, double: boolean);
    private initBattleSpec;
    private getLevelForWave;
    randSeedGaussForLevel(value: number): number;
    getBattlerCount(): number;
    incrementTurn(scene: BattleScene): void;
    addParticipant(playerPokemon: PlayerPokemon): void;
    removeFaintedParticipant(playerPokemon: PlayerPokemon): void;
    addPostBattleLoot(enemyPokemon: EnemyPokemon): void;
    pickUpScatteredMoney(scene: BattleScene): void;
    addBattleScore(scene: BattleScene): void;
    getBgmOverride(scene: BattleScene): string;
    randSeedInt(scene: BattleScene, range: number, min?: number): number;
  }
  export class FixedBattle extends Battle {
    constructor(scene: BattleScene, waveIndex: number, config: FixedBattleConfig);
  }
  type GetTrainerFunc = (scene: BattleScene) => Trainer;
  type GetEnemyPartyFunc = (scene: BattleScene) => EnemyPokemon[];
  export class FixedBattleConfig {
    battleType: BattleType;
    double: boolean;
    getTrainer: GetTrainerFunc;
    getEnemyParty: GetEnemyPartyFunc;
    seedOffsetWaveIndex: number;
    setBattleType(battleType: BattleType): FixedBattleConfig;
    setDouble(double: boolean): FixedBattleConfig;
    setGetTrainerFunc(getTrainerFunc: GetTrainerFunc): FixedBattleConfig;
    setGetEnemyPartyFunc(getEnemyPartyFunc: GetEnemyPartyFunc): FixedBattleConfig;
    setSeedOffsetWave(seedOffsetWaveIndex: number): FixedBattleConfig;
  }
  export interface FixedBattleConfigs {
    [key: number]: FixedBattleConfig;
  }
  /**
   * Youngster/Lass on 5
   * Rival on 8, 55, 95, 145, 195
   * Evil team grunts on 35, 62, 64, 66, 112, 114
   * Evil leader on 115, 165
   * E4 on 182, 184, 186, 188
   * Champion on 190
   */
  export const classicFixedBattles: FixedBattleConfigs;
}
declare module 'src/data/battle-anims' {
  import BattleScene from 'src/battle-scene';
  import Pokemon from 'src/field/pokemon';
  import {BattlerIndex} from 'src/battle';
  import {Moves} from 'src/enums/moves';
  export enum AnimFrameTarget {
    USER = 0,
    TARGET = 1,
    GRAPHIC = 2,
  }
  enum AnimFocus {
    TARGET = 1,
    USER = 2,
    USER_TARGET = 3,
    SCREEN = 4,
  }
  enum AnimBlendType {
    NORMAL = 0,
    ADD = 1,
    SUBTRACT = 2,
  }
  export enum ChargeAnim {
    FLY_CHARGING = 1000,
    BOUNCE_CHARGING = 1001,
    DIG_CHARGING = 1002,
    FUTURE_SIGHT_CHARGING = 1003,
    DIVE_CHARGING = 1004,
    SOLAR_BEAM_CHARGING = 1005,
    SHADOW_FORCE_CHARGING = 1006,
    SKULL_BASH_CHARGING = 1007,
    FREEZE_SHOCK_CHARGING = 1008,
    SKY_DROP_CHARGING = 1009,
    SKY_ATTACK_CHARGING = 1010,
    ICE_BURN_CHARGING = 1011,
    DOOM_DESIRE_CHARGING = 1012,
    RAZOR_WIND_CHARGING = 1013,
    PHANTOM_FORCE_CHARGING = 1014,
    GEOMANCY_CHARGING = 1015,
    SHADOW_BLADE_CHARGING = 1016,
    SOLAR_BLADE_CHARGING = 1017,
    BEAK_BLAST_CHARGING = 1018,
    METEOR_BEAM_CHARGING = 1019,
    ELECTRO_SHOT_CHARGING = 1020,
  }
  export enum CommonAnim {
    USE_ITEM = 2000,
    HEALTH_UP = 2001,
    POISON = 2010,
    TOXIC = 2011,
    PARALYSIS = 2012,
    SLEEP = 2013,
    FROZEN = 2014,
    BURN = 2015,
    CONFUSION = 2016,
    ATTRACT = 2017,
    BIND = 2018,
    WRAP = 2019,
    CURSE_NO_GHOST = 2020,
    LEECH_SEED = 2021,
    FIRE_SPIN = 2022,
    PROTECT = 2023,
    COVET = 2024,
    WHIRLPOOL = 2025,
    BIDE = 2026,
    SAND_TOMB = 2027,
    QUICK_GUARD = 2028,
    WIDE_GUARD = 2029,
    CURSE = 2030,
    MAGMA_STORM = 2031,
    CLAMP = 2032,
    SNAP_TRAP = 2033,
    THUNDER_CAGE = 2034,
    INFESTATION = 2035,
    ORDER_UP_CURLY = 2036,
    ORDER_UP_DROOPY = 2037,
    ORDER_UP_STRETCHY = 2038,
    RAGING_BULL_FIRE = 2039,
    RAGING_BULL_WATER = 2040,
    SALT_CURE = 2041,
    SUNNY = 2100,
    RAIN = 2101,
    SANDSTORM = 2102,
    HAIL = 2103,
    SNOW = 2104,
    WIND = 2105,
    HEAVY_RAIN = 2106,
    HARSH_SUN = 2107,
    STRONG_WINDS = 2108,
    MISTY_TERRAIN = 2110,
    ELECTRIC_TERRAIN = 2111,
    GRASSY_TERRAIN = 2112,
    PSYCHIC_TERRAIN = 2113,
    LOCK_ON = 2120,
  }
  export class AnimConfig {
    id: number;
    graphic: string;
    frames: AnimFrame[][];
    frameTimedEvents: Map<number, AnimTimedEvent[]>;
    position: number;
    hue: number;
    constructor(source?: any);
    getSoundResourceNames(): string[];
    getBackgroundResourceNames(): string[];
  }
  class AnimFrame {
    x: number;
    y: number;
    zoomX: number;
    zoomY: number;
    angle: number;
    mirror: boolean;
    visible: boolean;
    blendType: AnimBlendType;
    target: AnimFrameTarget;
    graphicFrame: number;
    opacity: number;
    color: number[];
    tone: number[];
    flash: number[];
    locked: boolean;
    priority: number;
    focus: AnimFocus;
    constructor(
      x: number,
      y: number,
      zoomX: number,
      zoomY: number,
      angle: number,
      mirror: boolean,
      visible: boolean,
      blendType: AnimBlendType,
      pattern: number,
      opacity: number,
      colorR: number,
      colorG: number,
      colorB: number,
      colorA: number,
      toneR: number,
      toneG: number,
      toneB: number,
      toneA: number,
      flashR: number,
      flashG: number,
      flashB: number,
      flashA: number,
      locked: boolean,
      priority: number,
      focus: AnimFocus,
      init?: boolean
    );
  }
  abstract class AnimTimedEvent {
    frameIndex: number;
    resourceName: string;
    constructor(frameIndex: number, resourceName: string);
    abstract execute(scene: BattleScene, battleAnim: BattleAnim): number;
    abstract getEventType(): string;
  }
  export const moveAnims: Map<Moves, AnimConfig | [AnimConfig, AnimConfig]>;
  export const chargeAnims: Map<ChargeAnim, AnimConfig | [AnimConfig, AnimConfig]>;
  export const commonAnims: Map<CommonAnim, AnimConfig>;
  export function initCommonAnims(scene: BattleScene): Promise<void>;
  export function initMoveAnim(scene: BattleScene, move: Moves): Promise<void>;
  export function initMoveChargeAnim(scene: BattleScene, chargeAnim: ChargeAnim): Promise<void>;
  export function loadCommonAnimAssets(scene: BattleScene, startLoad?: boolean): Promise<void>;
  export function loadMoveAnimAssets(scene: BattleScene, moveIds: Moves[], startLoad?: boolean): Promise<void>;
  export abstract class BattleAnim {
    user: Pokemon;
    target: Pokemon;
    sprites: any[];
    bgSprite: any | any;
    private srcLine;
    private dstLine;
    constructor(user: Pokemon, target: Pokemon);
    abstract getAnim(): AnimConfig;
    abstract isOppAnim(): boolean;
    protected isHideUser(): boolean;
    protected isHideTarget(): boolean;
    private getGraphicFrameData;
    play(scene: BattleScene, callback?: Function): void;
  }
  export class CommonBattleAnim extends BattleAnim {
    commonAnim: CommonAnim;
    constructor(commonAnim: CommonAnim, user: Pokemon, target?: Pokemon);
    getAnim(): AnimConfig;
    isOppAnim(): boolean;
  }
  export class MoveAnim extends BattleAnim {
    move: Moves;
    constructor(move: Moves, user: Pokemon, target: BattlerIndex);
    getAnim(): AnimConfig;
    isOppAnim(): boolean;
    protected isHideUser(): boolean;
    protected isHideTarget(): boolean;
  }
  export class MoveChargeAnim extends MoveAnim {
    private chargeAnim;
    constructor(chargeAnim: ChargeAnim, move: Moves, user: Pokemon);
    isOppAnim(): boolean;
    getAnim(): AnimConfig;
  }
  export function populateAnims(): Promise<void>;
}
declare module 'src/data/move' {
  import {ChargeAnim} from 'src/data/battle-anims';
  import {BattleStat} from 'src/data/battle-stat';
  import Pokemon from 'src/field/pokemon';
  import {StatusEffect} from 'src/data/status-effect';
  import {Type} from 'src/data/type';
  import {Constructor} from 'src/utils';
  import * as Utils from 'src/utils';
  import {WeatherType} from 'src/data/weather';
  import {PokemonHeldItemModifier, BerryModifier} from 'src/modifier/modifier';
  import {BattlerIndex} from 'src/battle';
  import {Stat} from 'src/data/pokemon-stat';
  import {TerrainType} from 'src/data/terrain';
  import {Localizable} from 'src/interfaces/locales';
  import {Abilities} from 'src/enums/abilities';
  import {ArenaTagType} from 'src/enums/arena-tag-type';
  import {BattlerTagType} from 'src/enums/battler-tag-type';
  import {Moves} from 'src/enums/moves';
  export enum MoveCategory {
    PHYSICAL = 0,
    SPECIAL = 1,
    STATUS = 2,
  }
  export enum MoveTarget {
    /** {@link https://bulbapedia.bulbagarden.net/wiki/Category:Moves_that_target_the_user Moves that target the User} */
    USER = 0,
    OTHER = 1,
    ALL_OTHERS = 2,
    NEAR_OTHER = 3,
    /** {@link https://bulbapedia.bulbagarden.net/wiki/Category:Moves_that_target_all_adjacent_Pok%C3%A9mon Moves that target all adjacent Pokemon} */
    ALL_NEAR_OTHERS = 4,
    NEAR_ENEMY = 5,
    /** {@link https://bulbapedia.bulbagarden.net/wiki/Category:Moves_that_target_all_adjacent_foes Moves that target all adjacent foes} */
    ALL_NEAR_ENEMIES = 6,
    RANDOM_NEAR_ENEMY = 7,
    ALL_ENEMIES = 8,
    /** {@link https://bulbapedia.bulbagarden.net/wiki/Category:Counterattacks Counterattacks} */
    ATTACKER = 9,
    /** {@link https://bulbapedia.bulbagarden.net/wiki/Category:Moves_that_target_one_adjacent_ally Moves that target one adjacent ally} */
    NEAR_ALLY = 10,
    ALLY = 11,
    USER_OR_NEAR_ALLY = 12,
    USER_AND_ALLIES = 13,
    /** {@link https://bulbapedia.bulbagarden.net/wiki/Category:Moves_that_target_all_Pok%C3%A9mon Moves that target all Pokemon} */
    ALL = 14,
    USER_SIDE = 15,
    /** {@link https://bulbapedia.bulbagarden.net/wiki/Category:Entry_hazard-creating_moves Entry hazard-creating moves} */
    ENEMY_SIDE = 16,
    BOTH_SIDES = 17,
    PARTY = 18,
    CURSE = 19,
  }
  export enum MoveFlags {
    NONE = 0,
    MAKES_CONTACT = 1,
    IGNORE_PROTECT = 2,
    IGNORE_VIRTUAL = 4,
    SOUND_BASED = 8,
    HIDE_USER = 16,
    HIDE_TARGET = 32,
    BITING_MOVE = 64,
    PULSE_MOVE = 128,
    PUNCHING_MOVE = 256,
    SLICING_MOVE = 512,
    /**
     * Indicates a move should be affected by {@linkcode Abilities.RECKLESS}
     * @see {@linkcode Move.recklessMove()}
     */
    RECKLESS_MOVE = 1024,
    BALLBOMB_MOVE = 2048,
    POWDER_MOVE = 4096,
    DANCE_MOVE = 8192,
    WIND_MOVE = 16384,
    TRIAGE_MOVE = 32768,
    IGNORE_ABILITIES = 65536,
    /**
     * Enables all hits of a multi-hit move to be accuracy checked individually
     */
    CHECK_ALL_HITS = 131072,
  }
  type MoveConditionFunc = (user: Pokemon, target: Pokemon, move: Move) => boolean;
  type UserMoveConditionFunc = (user: Pokemon, move: Move) => boolean;
  export default class Move implements Localizable {
    id: Moves;
    name: string;
    type: Type;
    defaultType: Type;
    category: MoveCategory;
    moveTarget: MoveTarget;
    power: number;
    accuracy: number;
    pp: number;
    effect: string;
    chance: number;
    priority: number;
    generation: number;
    attrs: MoveAttr[];
    private conditions;
    private flags;
    private nameAppend;
    constructor(
      id: Moves,
      type: Type,
      category: MoveCategory,
      defaultMoveTarget: MoveTarget,
      power: number,
      accuracy: number,
      pp: number,
      chance: number,
      priority: number,
      generation: number
    );
    localize(): void;
    /**
     * Get all move attributes that match `attrType`
     * @param attrType any attribute that extends {@linkcode MoveAttr}
     * @returns Array of attributes that match `attrType`, Empty Array if none match.
     */
    getAttrs<T extends MoveAttr>(attrType: Constructor<T>): T[];
    /**
     * Check if a move has an attribute that matches `attrType`
     * @param attrType any attribute that extends {@linkcode MoveAttr}
     * @returns true if the move has attribute `attrType`
     */
    hasAttr<T extends MoveAttr>(attrType: Constructor<T>): boolean;
    /**
     * Takes as input a boolean function and returns the first MoveAttr in attrs that matches true
     * @param attrPredicate
     * @returns the first {@linkcode MoveAttr} element in attrs that makes the input function return true
     */
    findAttr(attrPredicate: (attr: MoveAttr) => boolean): MoveAttr;
    /**
     * Adds a new MoveAttr to the move (appends to the attr array)
     * if the MoveAttr also comes with a condition, also adds that to the conditions array: {@linkcode MoveCondition}
     * @param AttrType {@linkcode MoveAttr} the constructor of a MoveAttr class
     * @param args the args needed to instantiate a the given class
     * @returns the called object {@linkcode Move}
     */
    attr<T extends Constructor<MoveAttr>>(AttrType: T, ...args: ConstructorParameters<T>): this;
    /**
     * Adds a new MoveAttr to the move (appends to the attr array)
     * if the MoveAttr also comes with a condition, also adds that to the conditions array: {@linkcode MoveCondition}
     * Almost identical to {@link attr}, except you are passing in a MoveAttr object, instead of a constructor and it's arguments
     * @param attrAdd {@linkcode MoveAttr} the attribute to add
     * @returns the called object {@linkcode Move}
     */
    addAttr(attrAdd: MoveAttr): this;
    /**
     * Sets the move target of this move
     * @param moveTarget {@linkcode MoveTarget} the move target to set
     * @returns the called object {@linkcode Move}
     */
    target(moveTarget: MoveTarget): this;
    /**
     * Getter function that returns if this Move has a MoveFlag
     * @param flag {@linkcode MoveFlags} to check
     * @returns boolean
     */
    hasFlag(flag: MoveFlags): boolean;
    /**
     * Getter function that returns if the move hits multiple targets
     * @returns boolean
     */
    isMultiTarget(): boolean;
    /**
     * Getter function that returns if the move targets itself or an ally
     * @returns boolean
     */
    isAllyTarget(): boolean;
    /**
     * Checks if the move is immune to certain types.
     * Currently looks at cases of Grass types with powder moves and Dark types with moves affected by Prankster.
     * @param {Pokemon} user the source of this move
     * @param {Pokemon} target the target of this move
     * @param {Type} type the type of the move's target
     * @returns boolean
     */
    isTypeImmune(user: Pokemon, target: Pokemon, type: Type): boolean;
    /**
     * Adds a move condition to the move
     * @param condition {@linkcode MoveCondition} or {@linkcode MoveConditionFunc}, appends to conditions array a new MoveCondition object
     * @returns the called object {@linkcode Move}
     */
    condition(condition: MoveCondition | MoveConditionFunc): this;
    /**
     * Marks the move as "partial": appends texts to the move name
     * @returns the called object {@linkcode Move}
     */
    partial(): this;
    /**
     * Marks the move as "unimplemented": appends texts to the move name
     * @returns the called object {@linkcode Move}
     */
    unimplemented(): this;
    /**
     * Sets the flags of the move
     * @param flag {@linkcode MoveFlags}
     * @param on a boolean, if True, then "ORs" the flag onto existing ones, if False then "XORs" the flag onto existing ones
     */
    private setFlag;
    /**
     * Sets the {@linkcode MoveFlags.MAKES_CONTACT} flag for the calling Move
     * @param makesContact The value (boolean) to set the flag to
     * @returns The {@linkcode Move} that called this function
     */
    makesContact(makesContact?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.IGNORE_PROTECT} flag for the calling Move
     * @param ignoresProtect The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.CURSE}
     * @returns The {@linkcode Move} that called this function
     */
    ignoresProtect(ignoresProtect?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.IGNORE_VIRTUAL} flag for the calling Move
     * @param ignoresVirtual The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.NATURE_POWER}
     * @returns The {@linkcode Move} that called this function
     */
    ignoresVirtual(ignoresVirtual?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.SOUND_BASED} flag for the calling Move
     * @param soundBased The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.UPROAR}
     * @returns The {@linkcode Move} that called this function
     */
    soundBased(soundBased?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.HIDE_USER} flag for the calling Move
     * @param hidesUser The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.TELEPORT}
     * @returns The {@linkcode Move} that called this function
     */
    hidesUser(hidesUser?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.HIDE_TARGET} flag for the calling Move
     * @param hidesTarget The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.WHIRLWIND}
     * @returns The {@linkcode Move} that called this function
     */
    hidesTarget(hidesTarget?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.BITING_MOVE} flag for the calling Move
     * @param bitingMove The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.BITE}
     * @returns The {@linkcode Move} that called this function
     */
    bitingMove(bitingMove?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.PULSE_MOVE} flag for the calling Move
     * @param pulseMove The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.WATER_PULSE}
     * @returns The {@linkcode Move} that called this function
     */
    pulseMove(pulseMove?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.PUNCHING_MOVE} flag for the calling Move
     * @param punchingMove The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.DRAIN_PUNCH}
     * @returns The {@linkcode Move} that called this function
     */
    punchingMove(punchingMove?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.SLICING_MOVE} flag for the calling Move
     * @param slicingMove The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.X_SCISSOR}
     * @returns The {@linkcode Move} that called this function
     */
    slicingMove(slicingMove?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.RECKLESS_MOVE} flag for the calling Move
     * @see {@linkcode Abilities.RECKLESS}
     * @param recklessMove The value to set the flag to
     * @returns The {@linkcode Move} that called this function
     */
    recklessMove(recklessMove?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.BALLBOMB_MOVE} flag for the calling Move
     * @param ballBombMove The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.ELECTRO_BALL}
     * @returns The {@linkcode Move} that called this function
     */
    ballBombMove(ballBombMove?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.POWDER_MOVE} flag for the calling Move
     * @param powderMove The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.STUN_SPORE}
     * @returns The {@linkcode Move} that called this function
     */
    powderMove(powderMove?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.DANCE_MOVE} flag for the calling Move
     * @param danceMove The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.PETAL_DANCE}
     * @returns The {@linkcode Move} that called this function
     */
    danceMove(danceMove?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.WIND_MOVE} flag for the calling Move
     * @param windMove The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.HURRICANE}
     * @returns The {@linkcode Move} that called this function
     */
    windMove(windMove?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.TRIAGE_MOVE} flag for the calling Move
     * @param triageMove The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.ABSORB}
     * @returns The {@linkcode Move} that called this function
     */
    triageMove(triageMove?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.IGNORE_ABILITIES} flag for the calling Move
     * @param ignoresAbilities sThe value (boolean) to set the flag to
     * example: @see {@linkcode Moves.SUNSTEEL_STRIKE}
     * @returns The {@linkcode Move} that called this function
     */
    ignoresAbilities(ignoresAbilities?: boolean): this;
    /**
     * Sets the {@linkcode MoveFlags.CHECK_ALL_HITS} flag for the calling Move
     * @param checkAllHits The value (boolean) to set the flag to
     * example: @see {@linkcode Moves.TRIPLE_AXEL}
     * @returns The {@linkcode Move} that called this function
     */
    checkAllHits(checkAllHits?: boolean): this;
    /**
     * Checks if the move flag applies to the pokemon(s) using/receiving the move
     * @param flag {@linkcode MoveFlags} MoveFlag to check on user and/or target
     * @param user {@linkcode Pokemon} the Pokemon using the move
     * @param target {@linkcode Pokemon} the Pokemon receiving the move
     * @returns boolean
     */
    checkFlag(flag: MoveFlags, user: Pokemon, target: Pokemon): boolean;
    /**
     * Applies each {@linkcode MoveCondition} of this move to the params
     * @param user {@linkcode Pokemon} to apply conditions to
     * @param target {@linkcode Pokemon} to apply conditions to
     * @param move {@linkcode Move} to apply conditions to
     * @returns boolean: false if any of the apply()'s return false, else true
     */
    applyConditions(user: Pokemon, target: Pokemon, move: Move): boolean;
    /**
     * Sees if, given the target pokemon, a move fails on it (by looking at each {@linkcode MoveAttr} of this move
     * @param user {@linkcode Pokemon} using the move
     * @param target {@linkcode Pokemon} receiving the move
     * @param move {@linkcode Move} using the move
     * @param cancelled {@linkcode Utils.BooleanHolder} to hold boolean value
     * @returns string of the failed text, or null
     */
    getFailedText(user: Pokemon, target: Pokemon, move: Move, cancelled: Utils.BooleanHolder): string | null;
    /**
     * Calculates the userBenefitScore across all the attributes and conditions
     * @param user {@linkcode Pokemon} using the move
     * @param target {@linkcode Pokemon} receiving the move
     * @param move {@linkcode Move} using the move
     * @returns number representing the total benefitScore
     */
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
    /**
     * Calculates the targetBenefitScore across all the attributes
     * @param user {@linkcode Pokemon} using the move
     * @param target {@linkcode Pokemon} receiving the move
     * @param move {@linkcode Move} using the move
     * @returns number representing the total benefitScore
     */
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class AttackMove extends Move {
    constructor(
      id: Moves,
      type: Type,
      category: MoveCategory,
      power: number,
      accuracy: number,
      pp: number,
      chance: number,
      priority: number,
      generation: number
    );
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class StatusMove extends Move {
    constructor(
      id: Moves,
      type: Type,
      accuracy: number,
      pp: number,
      chance: number,
      priority: number,
      generation: number
    );
  }
  export class SelfStatusMove extends Move {
    constructor(
      id: Moves,
      type: Type,
      accuracy: number,
      pp: number,
      chance: number,
      priority: number,
      generation: number
    );
  }
  /**
   * Base class defining all {@linkcode Move} Attributes
   * @abstract
   * @see {@linkcode apply}
   */
  export abstract class MoveAttr {
    /** Should this {@linkcode Move} target the user? */
    selfTarget: boolean;
    constructor(selfTarget?: boolean);
    /**
     * Applies move attributes
     * @see {@linkcode applyMoveAttrsInternal}
     * @virtual
     * @param user {@linkcode Pokemon} using the move
     * @param target {@linkcode Pokemon} target of the move
     * @param move {@linkcode Move} with this attribute
     * @param args Set of unique arguments needed by this attribute
     * @returns true if application of the ability succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean | Promise<boolean>;
    /**
     * @virtual
     * @returns the {@linkcode MoveCondition} or {@linkcode MoveConditionFunc} for this {@linkcode Move}
     */
    getCondition(): MoveCondition | MoveConditionFunc;
    /**
     * @virtual
     * @param user {@linkcode Pokemon} using the move
     * @param target {@linkcode Pokemon} target of the move
     * @param move {@linkcode Move} with this attribute
     * @param cancelled {@linkcode Utils.BooleanHolder} which stores if the move should fail
     * @returns the string representing failure of this {@linkcode Move}
     */
    getFailedText(user: Pokemon, target: Pokemon, move: Move, cancelled: Utils.BooleanHolder): string | null;
    /**
     * Used by the Enemy AI to rank an attack based on a given user
     * @see {@linkcode EnemyPokemon.getNextMove}
     * @virtual
     */
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
    /**
     * Used by the Enemy AI to rank an attack based on a given target
     * @see {@linkcode EnemyPokemon.getNextMove}
     * @virtual
     */
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export enum MoveEffectTrigger {
    PRE_APPLY = 0,
    POST_APPLY = 1,
    HIT = 2,
    /** Triggers one time after all target effects have applied */
    POST_TARGET = 3,
  }
  /** Base class defining all Move Effect Attributes
   * @extends MoveAttr
   * @see {@linkcode apply}
   */
  export class MoveEffectAttr extends MoveAttr {
    /** Defines when this effect should trigger in the move's effect order
     * @see {@linkcode phases.MoveEffectPhase.start}
     */
    trigger: MoveEffectTrigger;
    /** Should this effect only apply on the first hit? */
    firstHitOnly: boolean;
    /** Should this effect only apply on the last hit? */
    lastHitOnly: boolean;
    /** Should this effect only apply on the first target hit? */
    firstTargetOnly: boolean;
    constructor(
      selfTarget?: boolean,
      trigger?: MoveEffectTrigger,
      firstHitOnly?: boolean,
      lastHitOnly?: boolean,
      firstTargetOnly?: boolean
    );
    /**
     * Determines whether the {@linkcode Move}'s effects are valid to {@linkcode apply}
     * @virtual
     * @param user {@linkcode Pokemon} using the move
     * @param target {@linkcode Pokemon} target of the move
     * @param move {@linkcode Move} with this attribute
     * @param args Set of unique arguments needed by this attribute
     * @returns true if basic application of the ability attribute should be possible
     */
    canApply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    /** Applies move effects so long as they are able based on {@linkcode canApply} */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean | Promise<boolean>;
    /**
     * Gets the used move's additional effect chance.
     * If user's ability has MoveEffectChanceMultiplierAbAttr or IgnoreMoveEffectsAbAttr modifies the base chance.
     * @param user {@linkcode Pokemon} using this move
     * @param target {@linkcode Pokemon} target of this move
     * @param move {@linkcode Move} being used
     * @param selfEffect {@linkcode Boolean} if move targets user.
     * @returns Move chance value.
     */
    getMoveChance(user: Pokemon, target: Pokemon, move: Move, selfEffect?: boolean): number;
  }
  export class PreMoveMessageAttr extends MoveAttr {
    private message;
    constructor(message: string | ((user: Pokemon, target: Pokemon, move: Move) => string));
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class StatusMoveTypeImmunityAttr extends MoveAttr {
    immuneType: Type;
    constructor(immuneType: Type);
  }
  export class IgnoreOpponentStatChangesAttr extends MoveAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class HighCritAttr extends MoveAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class CritOnlyAttr extends MoveAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class FixedDamageAttr extends MoveAttr {
    private damage;
    constructor(damage: number);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getDamage(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class UserHpDamageAttr extends FixedDamageAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class TargetHalfHpDamageAttr extends FixedDamageAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class MatchHpAttr extends FixedDamageAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  type MoveFilter = (move: Move) => boolean;
  export class CounterDamageAttr extends FixedDamageAttr {
    private moveFilter;
    private multiplier;
    constructor(moveFilter: MoveFilter, multiplier: number);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  export class LevelDamageAttr extends FixedDamageAttr {
    constructor();
    getDamage(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class RandomLevelDamageAttr extends FixedDamageAttr {
    constructor();
    getDamage(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class ModifiedDamageAttr extends MoveAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getModifiedDamage(user: Pokemon, target: Pokemon, move: Move, damage: number): number;
  }
  export class SurviveDamageAttr extends ModifiedDamageAttr {
    getModifiedDamage(user: Pokemon, target: Pokemon, move: Move, damage: number): number;
    getCondition(): MoveConditionFunc;
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class RecoilAttr extends MoveEffectAttr {
    private useHp;
    private damageRatio;
    private unblockable;
    constructor(useHp?: boolean, damageRatio?: number, unblockable?: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  /**
   * Attribute used for moves which self KO the user regardless if the move hits a target
   * @extends MoveEffectAttr
   * @see {@linkcode apply}
   **/
  export class SacrificialAttr extends MoveEffectAttr {
    constructor();
    /**
     * Deals damage to the user equal to their current hp
     * @param user {@linkcode Pokemon} that used the move
     * @param target {@linkcode Pokemon} target of the move
     * @param move {@linkcode Move} with this attribute
     * @param args N/A
     * @returns true if the function succeeds
     **/
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  /**
   * Attribute used for moves which self KO the user but only if the move hits a target
   * @extends MoveEffectAttr
   * @see {@linkcode apply}
   **/
  export class SacrificialAttrOnHit extends MoveEffectAttr {
    constructor();
    /**
     * Deals damage to the user equal to their current hp if the move lands
     * @param user {@linkcode Pokemon} that used the move
     * @param target {@linkcode Pokemon} target of the move
     * @param move {@linkcode Move} with this attribute
     * @param args N/A
     * @returns true if the function succeeds
     **/
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  /**
   * Attribute used for moves which cut the user's Max HP in half.
   * Triggers using {@linkcode MoveEffectTrigger.POST_TARGET}.
   * @extends MoveEffectAttr
   * @see {@linkcode apply}
   */
  export class HalfSacrificialAttr extends MoveEffectAttr {
    constructor();
    /**
     * Cut's the user's Max HP in half and displays the appropriate recoil message
     * @param user {@linkcode Pokemon} that used the move
     * @param target N/A
     * @param move {@linkcode Move} with this attribute
     * @param args N/A
     * @returns true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export enum MultiHitType {
    _2 = 0,
    _2_TO_5 = 1,
    _3 = 2,
    _10 = 3,
    BEAT_UP = 4,
  }
  /**
   * Heals the user or target by {@linkcode healRatio} depending on the value of {@linkcode selfTarget}
   * @extends MoveEffectAttr
   * @see {@linkcode apply}
   */
  export class HealAttr extends MoveEffectAttr {
    /** The percentage of {@linkcode Stat.HP} to heal */
    private healRatio;
    /** Should an animation be shown? */
    private showAnim;
    constructor(healRatio?: number, showAnim?: boolean, selfTarget?: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    /**
     * Creates a new {@linkcode PokemonHealPhase}.
     * This heals the target and shows the appropriate message.
     */
    addHealPhase(target: Pokemon, healRatio: number): void;
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  /**
   * Cures the user's party of non-volatile status conditions, ie. Heal Bell, Aromatherapy
   * @extends MoveEffectAttr
   * @see {@linkcode apply}
   */
  export class PartyStatusCureAttr extends MoveEffectAttr {
    /** Message to display after using move */
    private message;
    /** Skips mons with this ability, ie. Soundproof */
    private abilityCondition;
    constructor(message: string, abilityCondition: Abilities);
    canApply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    addPartyCurePhase(user: Pokemon): void;
  }
  export class SacrificialFullRestoreAttr extends SacrificialAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
    getCondition(): MoveConditionFunc;
  }
  /**
   * Attribute used for moves which ignore type-based debuffs from weather, namely Hydro Steam.
   * Called during damage calculation after getting said debuff from getAttackTypeMultiplier in the Pokemon class.
   * @extends MoveAttr
   * @see {@linkcode apply}
   */
  export class IgnoreWeatherTypeDebuffAttr extends MoveAttr {
    /** The {@linkcode WeatherType} this move ignores */
    weather: WeatherType;
    constructor(weather: WeatherType);
    /**
     * Changes the type-based weather modifier if this move's power would be reduced by it
     * @param user {@linkcode Pokemon} that used the move
     * @param target N/A
     * @param move {@linkcode Move} with this attribute
     * @param args [0] {@linkcode Utils.NumberHolder} for arenaAttackTypeMultiplier
     * @returns true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export abstract class WeatherHealAttr extends HealAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    abstract getWeatherHealRatio(weatherType: WeatherType): number;
  }
  export class PlantHealAttr extends WeatherHealAttr {
    getWeatherHealRatio(weatherType: WeatherType): number;
  }
  export class SandHealAttr extends WeatherHealAttr {
    getWeatherHealRatio(weatherType: WeatherType): number;
  }
  /**
   * Heals the target or the user by either {@linkcode normalHealRatio} or {@linkcode boostedHealRatio}
   * depending on the evaluation of {@linkcode condition}
   * @extends HealAttr
   * @see {@linkcode apply}
   */
  export class BoostHealAttr extends HealAttr {
    /** Healing received when {@linkcode condition} is false */
    private normalHealRatio?;
    /** Healing received when {@linkcode condition} is true */
    private boostedHealRatio?;
    /** The lambda expression to check against when boosting the healing value */
    private condition?;
    constructor(
      normalHealRatio?: number,
      boostedHealRatio?: number,
      showAnim?: boolean,
      selfTarget?: boolean,
      condition?: MoveConditionFunc
    );
    /**
     * @param user {@linkcode Pokemon} using the move
     * @param target {@linkcode Pokemon} target of the move
     * @param move {@linkcode Move} with this attribute
     * @param args N/A
     * @returns true if the move was successful
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Heals the target only if it is the ally
   * @extends HealAttr
   * @see {@linkcode apply}
   */
  export class HealOnAllyAttr extends HealAttr {
    /**
     * @param user {@linkcode Pokemon} using the move
     * @param target {@linkcode Pokemon} target of the move
     * @param move {@linkcode Move} with this attribute
     * @param args N/A
     * @returns true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Heals user as a side effect of a move that hits a target.
   * Healing is based on {@linkcode healRatio} * the amount of damage dealt or a stat of the target.
   * @extends MoveEffectAttr
   * @see {@linkcode apply}
   * @see {@linkcode getUserBenefitScore}
   */
  export class HitHealAttr extends MoveEffectAttr {
    private healRatio;
    private message;
    private healStat;
    constructor(healRatio?: number, healStat?: Stat);
    /**
     * Heals the user the determined amount and possibly displays a message about regaining health.
     * If the target has the {@linkcode ReverseDrainAbAttr}, all healing is instead converted
     * to damage to the user.
     * @param user {@linkcode Pokemon} using this move
     * @param target {@linkcode Pokemon} target of this move
     * @param move {@linkcode Move} being used
     * @param args N/A
     * @returns true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    /**
     * Used by the Enemy AI to rank an attack based on a given user
     * @param user {@linkcode Pokemon} using this move
     * @param target {@linkcode Pokemon} target of this move
     * @param move {@linkcode Move} being used
     * @returns an number. Higher means enemy is more likely to use that move.
     */
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  /**
   * Attribute used for moves that change priority in a turn given a condition,
   * e.g. Grassy Glide
   * Called when move order is calculated in {@linkcode TurnStartPhase}.
   * @extends MoveAttr
   * @see {@linkcode apply}
   */
  export class IncrementMovePriorityAttr extends MoveAttr {
    /** The condition for a move's priority being incremented */
    private moveIncrementFunc;
    /** The amount to increment priority by, if condition passes. */
    private increaseAmount;
    constructor(moveIncrementFunc: (pokemon: Pokemon, target: Pokemon, move: Move) => boolean, increaseAmount?: number);
    /**
     * Increments move priority by set amount if condition passes
     * @param user {@linkcode Pokemon} using this move
     * @param target {@linkcode Pokemon} target of this move
     * @param move {@linkcode Move} being used
     * @param args [0] {@linkcode Utils.IntegerHolder} for move priority.
     * @returns true if function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Attribute used for attack moves that hit multiple times per use, e.g. Bullet Seed.
   *
   * Applied at the beginning of {@linkcode MoveEffectPhase}.
   *
   * @extends MoveAttr
   * @see {@linkcode apply}
   */
  export class MultiHitAttr extends MoveAttr {
    private multiHitType;
    constructor(multiHitType?: MultiHitType);
    /**
     * Set the hit count of an attack based on this attribute instance's {@linkcode MultiHitType}.
     * If the target has an immunity to this attack's types, the hit count will always be 1.
     *
     * @param user {@linkcode Pokemon} that used the attack
     * @param target {@linkcode Pokemon} targeted by the attack
     * @param move {@linkcode Move} being used
     * @param args [0] {@linkcode Utils.IntegerHolder} storing the hit count of the attack
     * @returns True
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
    /**
     * Calculate the number of hits that an attack should have given this attribute's
     * {@linkcode MultiHitType}.
     *
     * @param user {@linkcode Pokemon} using the attack
     * @param target {@linkcode Pokemon} targeted by the attack
     * @returns The number of hits this attack should deal
     */
    getHitCount(user: Pokemon, target: Pokemon): number;
  }
  export class ChangeMultiHitTypeAttr extends MoveAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class WaterShurikenMultiHitTypeAttr extends ChangeMultiHitTypeAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class StatusEffectAttr extends MoveEffectAttr {
    effect: StatusEffect;
    cureTurn: number;
    overrideStatus: boolean;
    constructor(effect: StatusEffect, selfTarget?: boolean, cureTurn?: number, overrideStatus?: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class MultiStatusEffectAttr extends StatusEffectAttr {
    effects: StatusEffect[];
    constructor(effects: StatusEffect[], selfTarget?: boolean, cureTurn?: number, overrideStatus?: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class PsychoShiftEffectAttr extends MoveEffectAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  /**
   * The following needs to be implemented for Thief
   * "If the user faints due to the target's Ability (Rough Skin or Iron Barbs) or held Rocky Helmet, it cannot remove the target's held item."
   * "If Knock Off causes a Pokémon with the Sticky Hold Ability to faint, it can now remove that Pokémon's held item."
   */
  export class StealHeldItemChanceAttr extends MoveEffectAttr {
    private chance;
    constructor(chance: number);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): Promise<boolean>;
    getTargetHeldItems(target: Pokemon): PokemonHeldItemModifier[];
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  /**
   * Removes a random held item (or berry) from target.
   * Used for Incinerate and Knock Off.
   * Not Implemented Cases: (Same applies for Thief)
   * "If the user faints due to the target's Ability (Rough Skin or Iron Barbs) or held Rocky Helmet, it cannot remove the target's held item."
   * "If Knock Off causes a Pokémon with the Sticky Hold Ability to faint, it can now remove that Pokémon's held item."
   */
  export class RemoveHeldItemAttr extends MoveEffectAttr {
    /** Optional restriction for item pool to berries only i.e. Differentiating Incinerate and Knock Off */
    private berriesOnly;
    constructor(berriesOnly: boolean);
    /**
     *
     * @param user {@linkcode Pokemon} that used the move
     * @param target Target {@linkcode Pokemon} that the moves applies to
     * @param move {@linkcode Move} that is used
     * @param args N/A
     * @returns {boolean} True if an item was removed
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getTargetHeldItems(target: Pokemon): PokemonHeldItemModifier[];
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  /**
   * Attribute that causes targets of the move to eat a berry. Used for Teatime, Stuff Cheeks
   */
  export class EatBerryAttr extends MoveEffectAttr {
    protected chosenBerry: BerryModifier;
    constructor();
    /**
     * Causes the target to eat a berry.
     * @param user {@linkcode Pokemon} Pokemon that used the move
     * @param target {@linkcode Pokemon} Pokemon that will eat a berry
     * @param move {@linkcode Move} The move being used
     * @param args Unused
     * @returns {boolean} true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getTargetHeldBerries(target: Pokemon): BerryModifier[];
    reduceBerryModifier(target: Pokemon): void;
    eatBerry(consumer: Pokemon): void;
  }
  /**
   *  Attribute used for moves that steal a random berry from the target. The user then eats the stolen berry.
   *  Used for Pluck & Bug Bite.
   */
  export class StealEatBerryAttr extends EatBerryAttr {
    constructor();
    /**
     * User steals a random berry from the target and then eats it.
     * @param {Pokemon} user Pokemon that used the move and will eat the stolen berry
     * @param {Pokemon} target Pokemon that will have its berry stolen
     * @param {Move} move Move being used
     * @param {any[]} args Unused
     * @returns {boolean} true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Move attribute that signals that the move should cure a status effect
   * @extends MoveEffectAttr
   * @see {@linkcode apply()}
   */
  export class HealStatusEffectAttr extends MoveEffectAttr {
    /** List of Status Effects to cure */
    private effects;
    /**
     * @param selfTarget - Whether this move targets the user
     * @param ...effects - List of status effects to cure
     */
    constructor(selfTarget: boolean, ...effects: StatusEffect[]);
    /**
     * @param user {@linkcode Pokemon} source of the move
     * @param target {@linkcode Pokemon} target of the move
     * @param move the {@linkcode Move} being used
     * @returns true if the status is cured
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    isOfEffect(effect: StatusEffect): boolean;
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class BypassSleepAttr extends MoveAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Attribute used for moves that bypass the burn damage reduction of physical moves, currently only facade
   * Called during damage calculation
   * @extends MoveAttr
   * @see {@linkcode apply}
   */
  export class BypassBurnDamageReductionAttr extends MoveAttr {
    /** Prevents the move's damage from being reduced by burn
     * @param user N/A
     * @param target N/A
     * @param move {@linkcode Move} with this attribute
     * @param args [0] {@linkcode Utils.BooleanHolder} for burnDamageReductionCancelled
     * @returns true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class WeatherChangeAttr extends MoveEffectAttr {
    private weatherType;
    constructor(weatherType: WeatherType);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  export class ClearWeatherAttr extends MoveEffectAttr {
    private weatherType;
    constructor(weatherType: WeatherType);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class TerrainChangeAttr extends MoveEffectAttr {
    private terrainType;
    constructor(terrainType: TerrainType);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class ClearTerrainAttr extends MoveEffectAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class OneHitKOAttr extends MoveAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  export class OverrideMoveEffectAttr extends MoveAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean | Promise<boolean>;
  }
  export class ChargeAttr extends OverrideMoveEffectAttr {
    chargeAnim: ChargeAnim;
    private chargeText;
    private tagType;
    private chargeEffect;
    sameTurn: boolean;
    followUpPriority: number;
    constructor(
      chargeAnim: ChargeAnim,
      chargeText: string,
      tagType?: BattlerTagType,
      chargeEffect?: boolean,
      sameTurn?: boolean,
      followUpPriority?: number
    );
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): Promise<boolean>;
    usedChargeEffect(user: Pokemon, target: Pokemon, move: Move): boolean;
  }
  export class SunlightChargeAttr extends ChargeAttr {
    constructor(chargeAnim: ChargeAnim, chargeText: string);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): Promise<boolean>;
  }
  export class ElectroShotChargeAttr extends ChargeAttr {
    private statIncreaseApplied;
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): Promise<boolean>;
  }
  export class DelayedAttackAttr extends OverrideMoveEffectAttr {
    tagType: ArenaTagType;
    chargeAnim: ChargeAnim;
    private chargeText;
    constructor(tagType: ArenaTagType, chargeAnim: ChargeAnim, chargeText: string);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): Promise<boolean>;
  }
  export class StatChangeAttr extends MoveEffectAttr {
    stats: BattleStat[];
    levels: number;
    private condition;
    private showMessage;
    constructor(
      stats: BattleStat | BattleStat[],
      levels: number,
      selfTarget?: boolean,
      condition?: MoveConditionFunc,
      showMessage?: boolean,
      firstHitOnly?: boolean,
      moveEffectTrigger?: MoveEffectTrigger,
      firstTargetOnly?: boolean
    );
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean | Promise<boolean>;
    getLevels(_user: Pokemon): number;
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class PostVictoryStatChangeAttr extends MoveAttr {
    private stats;
    private levels;
    private condition;
    private showMessage;
    constructor(
      stats: BattleStat | BattleStat[],
      levels: number,
      selfTarget?: boolean,
      condition?: MoveConditionFunc,
      showMessage?: boolean,
      firstHitOnly?: boolean
    );
    applyPostVictory(user: Pokemon, target: Pokemon, move: Move): void;
  }
  export class AcupressureStatChangeAttr extends MoveEffectAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean | Promise<boolean>;
  }
  export class GrowthStatChangeAttr extends StatChangeAttr {
    constructor();
    getLevels(user: Pokemon): number;
  }
  export class HalfHpStatMaxAttr extends StatChangeAttr {
    constructor(stat: BattleStat);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): Promise<boolean>;
    getCondition(): MoveConditionFunc;
  }
  export class CutHpStatBoostAttr extends StatChangeAttr {
    private cutRatio;
    constructor(stat: BattleStat | BattleStat[], levels: number, cutRatio: number);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): Promise<boolean>;
    getCondition(): MoveConditionFunc;
  }
  export class CopyStatsAttr extends MoveEffectAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class InvertStatsAttr extends MoveEffectAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class ResetStatsAttr extends MoveEffectAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Attribute used for moves which swap the user and the target's stat changes.
   */
  export class SwapStatsAttr extends MoveEffectAttr {
    /**
     * Swaps the user and the target's stat changes.
     * @param user Pokemon that used the move
     * @param target The target of the move
     * @param move Move with this attribute
     * @param args N/A
     * @returns true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class HpSplitAttr extends MoveEffectAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): Promise<boolean>;
  }
  export class VariablePowerAttr extends MoveAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class LessPPMorePowerAttr extends VariablePowerAttr {
    /**
     * Power up moves when less PP user has
     * @param user {@linkcode Pokemon} using this move
     * @param target {@linkcode Pokemon} target of this move
     * @param move {@linkcode Move} being used
     * @param args [0] {@linkcode Utils.NumberHolder} of power
     * @returns true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class MovePowerMultiplierAttr extends VariablePowerAttr {
    private powerMultiplierFunc;
    constructor(powerMultiplier: (user: Pokemon, target: Pokemon, move: Move) => number);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class BeatUpAttr extends VariablePowerAttr {
    /**
     * Gets the next party member to contribute to a Beat Up hit, and calculates the base power for it.
     * @param user Pokemon that used the move
     * @param _target N/A
     * @param _move Move with this attribute
     * @param args N/A
     * @returns true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class DoublePowerChanceAttr extends VariablePowerAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export abstract class ConsecutiveUsePowerMultiplierAttr extends MovePowerMultiplierAttr {
    constructor(limit: number, resetOnFail: boolean, resetOnLimit?: boolean, ...comboMoves: Moves[]);
    abstract getMultiplier(count: number): number;
  }
  export class ConsecutiveUseDoublePowerAttr extends ConsecutiveUsePowerMultiplierAttr {
    getMultiplier(count: number): number;
  }
  export class ConsecutiveUseMultiBasePowerAttr extends ConsecutiveUsePowerMultiplierAttr {
    getMultiplier(count: number): number;
  }
  export class WeightPowerAttr extends VariablePowerAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Attribute used for Electro Ball move.
   * @extends VariablePowerAttr
   * @see {@linkcode apply}
   **/
  export class ElectroBallPowerAttr extends VariablePowerAttr {
    /**
     * Move that deals more damage the faster {@linkcode BattleStat.SPD}
     * the user is compared to the target.
     * @param user Pokemon that used the move
     * @param target The target of the move
     * @param move Move with this attribute
     * @param args N/A
     * @returns true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Attribute used for Gyro Ball move.
   * @extends VariablePowerAttr
   * @see {@linkcode apply}
   **/
  export class GyroBallPowerAttr extends VariablePowerAttr {
    /**
     * Move that deals more damage the slower {@linkcode BattleStat.SPD}
     * the user is compared to the target.
     * @param user Pokemon that used the move
     * @param target The target of the move
     * @param move Move with this attribute
     * @param args N/A
     * @returns true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class LowHpPowerAttr extends VariablePowerAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class CompareWeightPowerAttr extends VariablePowerAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class HpPowerAttr extends VariablePowerAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class OpponentHighHpPowerAttr extends VariablePowerAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class FirstAttackDoublePowerAttr extends VariablePowerAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class TurnDamagedDoublePowerAttr extends VariablePowerAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class MagnitudePowerAttr extends VariablePowerAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class AntiSunlightPowerDecreaseAttr extends VariablePowerAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class FriendshipPowerAttr extends VariablePowerAttr {
    private invert;
    constructor(invert?: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class HitCountPowerAttr extends VariablePowerAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Attribute that increases power based on the amount of positive stat increases.
   */
  export class StatChangeCountPowerAttr extends VariablePowerAttr {
    /**
     * @param {Pokemon} user The pokemon that is being used to calculate the amount of positive stats
     * @param {Pokemon} target N/A
     * @param {Move} move N/A
     * @param {any[]} args The argument for VariablePowerAttr, accumulates and sets the amount of power multiplied by stats
     * @returns {boolean} Returns true if attribute is applied
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Punishment normally has a base power of 60,
   * but gains 20 power for every increased stat stage the target has,
   * up to a maximum of 200 base power in total.
   */
  export class PunishmentPowerAttr extends VariablePowerAttr {
    private PUNISHMENT_MIN_BASE_POWER;
    private PUNISHMENT_MAX_BASE_POWER;
    /**
     * @param {Pokemon} user N/A
     * @param {Pokemon} target The pokemon that the move is being used against, as well as calculating the stats for the min/max base power
     * @param {Move} move N/A
     * @param {any[]} args The value that is being changed due to VariablePowerAttr
     * @returns Returns true if attribute is applied
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class PresentPowerAttr extends VariablePowerAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class WaterShurikenPowerAttr extends VariablePowerAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Attribute used for multi-hit moves that increase power in increments of the
   * move's base power for each hit, namely Triple Kick and Triple Axel.
   * @extends VariablePowerAttr
   * @see {@linkcode apply}
   */
  export class MultiHitPowerIncrementAttr extends VariablePowerAttr {
    /** The max number of base power increments allowed for this move */
    private maxHits;
    constructor(maxHits: number);
    /**
     * Increases power of move in increments of the base power for the amount of times
     * the move hit. In the case that the move is extended, it will circle back to the
     * original base power of the move after incrementing past the maximum amount of
     * hits.
     * @param user {@linkcode Pokemon} that used the move
     * @param target {@linkcode Pokemon} that the move was used on
     * @param move {@linkcode Move} with this attribute
     * @param args [0] {@linkcode Utils.NumberHolder} for final calculated power of move
     * @returns true if attribute application succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class VariableAtkAttr extends MoveAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class TargetAtkUserAtkAttr extends VariableAtkAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class DefAtkAttr extends VariableAtkAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class VariableDefAttr extends MoveAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class DefDefAttr extends VariableDefAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class VariableAccuracyAttr extends MoveAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class ThunderAccuracyAttr extends VariableAccuracyAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Attribute used for moves which never miss
   * against Pokemon with the {@linkcode BattlerTagType.MINIMIZED}
   * @extends VariableAccuracyAttr
   * @see {@linkcode apply}
   */
  export class MinimizeAccuracyAttr extends VariableAccuracyAttr {
    /**
     * @see {@linkcode apply}
     * @param user N/A
     * @param target {@linkcode Pokemon} target of the move
     * @param move N/A
     * @param args [0] Accuracy of the move to be modified
     * @returns true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class ToxicAccuracyAttr extends VariableAccuracyAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class BlizzardAccuracyAttr extends VariableAccuracyAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class VariableMoveCategoryAttr extends MoveAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class PhotonGeyserCategoryAttr extends VariableMoveCategoryAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class TeraBlastCategoryAttr extends VariableMoveCategoryAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Change the move category to status when used on the ally
   * @extends VariableMoveCategoryAttr
   * @see {@linkcode apply}
   */
  export class StatusCategoryOnAllyAttr extends VariableMoveCategoryAttr {
    /**
     * @param user {@linkcode Pokemon} using the move
     * @param target {@linkcode Pokemon} target of the move
     * @param move {@linkcode Move} with this attribute
     * @param args [0] {@linkcode Utils.IntegerHolder} The category of the move
     * @returns true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class ShellSideArmCategoryAttr extends VariableMoveCategoryAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class VariableMoveTypeAttr extends MoveAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class FormChangeItemTypeAttr extends VariableMoveTypeAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class TechnoBlastTypeAttr extends VariableMoveTypeAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class AuraWheelTypeAttr extends VariableMoveTypeAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class RagingBullTypeAttr extends VariableMoveTypeAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class IvyCudgelTypeAttr extends VariableMoveTypeAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class WeatherBallTypeAttr extends VariableMoveTypeAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Changes the move's type to match the current terrain.
   * Has no effect if the user is not grounded.
   * @extends VariableMoveTypeAttr
   * @see {@linkcode apply}
   */
  export class TerrainPulseTypeAttr extends VariableMoveTypeAttr {
    /**
     * @param user {@linkcode Pokemon} using this move
     * @param target N/A
     * @param move N/A
     * @param args [0] {@linkcode Utils.IntegerHolder} The move's type to be modified
     * @returns true if the function succeeds
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class HiddenPowerTypeAttr extends VariableMoveTypeAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class MatchUserTypeAttr extends VariableMoveTypeAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class VariableMoveTypeMultiplierAttr extends MoveAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class NeutralDamageAgainstFlyingTypeMultiplierAttr extends VariableMoveTypeMultiplierAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class WaterSuperEffectTypeMultiplierAttr extends VariableMoveTypeMultiplierAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class IceNoEffectTypeAttr extends VariableMoveTypeMultiplierAttr {
    /**
     * Checks to see if the Target is Ice-Type or not. If so, the move will have no effect.
     * @param {Pokemon} user N/A
     * @param {Pokemon} target Pokemon that is being checked whether Ice-Type or not.
     * @param {Move} move N/A
     * @param {any[]} args Sets to false if the target is Ice-Type, so it should do no damage/no effect.
     * @returns {boolean} Returns true if move is successful, false if Ice-Type.
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class FlyingTypeMultiplierAttr extends VariableMoveTypeMultiplierAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class OneHitKOAccuracyAttr extends VariableAccuracyAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class SheerColdAccuracyAttr extends OneHitKOAccuracyAttr {
    /**
     * Changes the normal One Hit KO Accuracy Attr to implement the Gen VII changes,
     * where if the user is Ice-Type, it has more accuracy.
     * @param {Pokemon} user Pokemon that is using the move; checks the Pokemon's level.
     * @param {Pokemon} target Pokemon that is receiving the move; checks the Pokemon's level.
     * @param {Move} move N/A
     * @param {any[]} args Uses the accuracy argument, allowing to change it from either 0 if it doesn't pass
     * the first if/else, or 30/20 depending on the type of the user Pokemon.
     * @returns Returns true if move is successful, false if misses.
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class MissEffectAttr extends MoveAttr {
    private missEffectFunc;
    constructor(missEffectFunc: UserMoveConditionFunc);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class NoEffectAttr extends MoveAttr {
    private noEffectFunc;
    constructor(noEffectFunc: UserMoveConditionFunc);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class TypelessAttr extends MoveAttr {}
  /**
   * Attribute used for moves which ignore redirection effects, and always target their original target, i.e. Snipe Shot
   * Bypasses Storm Drain, Follow Me, Ally Switch, and the like.
   */
  export class BypassRedirectAttr extends MoveAttr {}
  export class DisableMoveAttr extends MoveEffectAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class FrenzyAttr extends MoveEffectAttr {
    constructor();
    canApply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export const frenzyMissFunc: UserMoveConditionFunc;
  export class AddBattlerTagAttr extends MoveEffectAttr {
    tagType: BattlerTagType;
    turnCountMin: number;
    turnCountMax: number;
    private failOnOverlap;
    constructor(
      tagType: BattlerTagType,
      selfTarget?: boolean,
      failOnOverlap?: boolean,
      turnCountMin?: number,
      turnCountMax?: number,
      lastHitOnly?: boolean
    );
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
    getTagTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class CurseAttr extends MoveEffectAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class LapseBattlerTagAttr extends MoveEffectAttr {
    tagTypes: BattlerTagType[];
    constructor(tagTypes: BattlerTagType[], selfTarget?: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class RemoveBattlerTagAttr extends MoveEffectAttr {
    tagTypes: BattlerTagType[];
    constructor(tagTypes: BattlerTagType[], selfTarget?: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class FlinchAttr extends AddBattlerTagAttr {
    constructor();
  }
  export class ConfuseAttr extends AddBattlerTagAttr {
    constructor(selfTarget?: boolean);
  }
  export class RechargeAttr extends AddBattlerTagAttr {
    constructor();
  }
  export class TrapAttr extends AddBattlerTagAttr {
    constructor(tagType: BattlerTagType);
  }
  export class ProtectAttr extends AddBattlerTagAttr {
    constructor(tagType?: BattlerTagType);
    getCondition(): MoveConditionFunc;
  }
  export class EndureAttr extends ProtectAttr {
    constructor();
  }
  export class IgnoreAccuracyAttr extends AddBattlerTagAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class AlwaysCritsAttr extends AddBattlerTagAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class FaintCountdownAttr extends AddBattlerTagAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Attribute used when a move hits a {@linkcode BattlerTagType} for double damage
   * @extends MoveAttr
   */
  export class HitsTagAttr extends MoveAttr {
    /** The {@linkcode BattlerTagType} this move hits */
    tagType: BattlerTagType;
    /** Should this move deal double damage against {@linkcode HitsTagAttr.tagType}? */
    doubleDamage: boolean;
    constructor(tagType: BattlerTagType, doubleDamage?: boolean);
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class AddArenaTagAttr extends MoveEffectAttr {
    tagType: ArenaTagType;
    turnCount: number;
    private failOnOverlap;
    selfSideTarget: boolean;
    constructor(tagType: ArenaTagType, turnCount?: number, failOnOverlap?: boolean, selfSideTarget?: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  /**
   * Generic class for removing arena tags
   * @param tagTypes: The types of tags that can be removed
   * @param selfSideTarget: Is the user removing tags from its own side?
   */
  export class RemoveArenaTagsAttr extends MoveEffectAttr {
    tagTypes: ArenaTagType[];
    selfSideTarget: boolean;
    constructor(tagTypes: ArenaTagType[], selfSideTarget: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class AddArenaTrapTagAttr extends AddArenaTagAttr {
    getCondition(): MoveConditionFunc;
  }
  /**
   * Attribute used for Stone Axe and Ceaseless Edge.
   * Applies the given ArenaTrapTag when move is used.
   * @extends AddArenaTagAttr
   * @see {@linkcode apply}
   */
  export class AddArenaTrapTagHitAttr extends AddArenaTagAttr {
    /**
     * @param user {@linkcode Pokemon} using this move
     * @param target {@linkcode Pokemon} target of this move
     * @param move {@linkcode Move} being used
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class RemoveArenaTrapAttr extends MoveEffectAttr {
    private targetBothSides;
    constructor(targetBothSides?: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class RemoveScreensAttr extends MoveEffectAttr {
    private targetBothSides;
    constructor(targetBothSides?: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class SwapArenaTagsAttr extends MoveEffectAttr {
    SwapTags: ArenaTagType[];
    constructor(SwapTags: ArenaTagType[]);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  /**
   * Attribute used for Revival Blessing.
   * @extends MoveEffectAttr
   * @see {@linkcode apply}
   */
  export class RevivalBlessingAttr extends MoveEffectAttr {
    constructor(user?: boolean);
    /**
     *
     * @param user {@linkcode Pokemon} using this move
     * @param target {@linkcode Pokemon} target of this move
     * @param move {@linkcode Move} being used
     * @param args N/A
     * @returns Promise, true if function succeeds.
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): Promise<boolean>;
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class ForceSwitchOutAttr extends MoveEffectAttr {
    private user;
    private batonPass;
    constructor(user?: boolean, batonPass?: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): Promise<boolean>;
    getCondition(): MoveConditionFunc;
    getFailedText(user: Pokemon, target: Pokemon, move: Move, cancelled: Utils.BooleanHolder): string | null;
    getSwitchOutCondition(): MoveConditionFunc;
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class RemoveTypeAttr extends MoveEffectAttr {
    private removedType;
    private messageCallback;
    constructor(removedType: Type, messageCallback?: (user: Pokemon) => void);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class CopyTypeAttr extends MoveEffectAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  export class CopyBiomeTypeAttr extends MoveEffectAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class ChangeTypeAttr extends MoveEffectAttr {
    private type;
    constructor(type: Type);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  export class AddTypeAttr extends MoveEffectAttr {
    private type;
    constructor(type: Type);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  export class FirstMoveTypeAttr extends MoveEffectAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class RandomMovesetMoveAttr extends OverrideMoveEffectAttr {
    private enemyMoveset;
    constructor(enemyMoveset?: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class RandomMoveAttr extends OverrideMoveEffectAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): Promise<boolean>;
  }
  export class NaturePowerAttr extends OverrideMoveEffectAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): Promise<boolean>;
  }
  export class CopyMoveAttr extends OverrideMoveEffectAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  /**
   *  Attribute used for moves that reduce PP of the target's last used move.
   *  Used for Spite.
   */
  export class ReducePpMoveAttr extends MoveEffectAttr {
    protected reduction: number;
    constructor(reduction: number);
    /**
     * Reduces the PP of the target's last-used move by an amount based on this attribute instance's {@linkcode reduction}.
     *
     * @param user {@linkcode Pokemon} that used the attack
     * @param target {@linkcode Pokemon} targeted by the attack
     * @param move {@linkcode Move} being used
     * @param args N/A
     * @returns {boolean} true
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
    getTargetBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  /**
   *  Attribute used for moves that damage target, and then reduce PP of the target's last used move.
   *  Used for Eerie Spell.
   */
  export class AttackReducePpMoveAttr extends ReducePpMoveAttr {
    constructor(reduction: number);
    /**
     * Checks if the target has used a move prior to the attack. PP-reduction is applied through the super class if so.
     *
     * @param user {@linkcode Pokemon} that used the attack
     * @param target {@linkcode Pokemon} targeted by the attack
     * @param move {@linkcode Move} being used
     * @param args N/A
     * @returns {boolean} true
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  export class MovesetCopyMoveAttr extends OverrideMoveEffectAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  export class SketchAttr extends MoveEffectAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  export class AbilityChangeAttr extends MoveEffectAttr {
    ability: Abilities;
    constructor(ability: Abilities, selfTarget?: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  export class AbilityCopyAttr extends MoveEffectAttr {
    copyToPartner: boolean;
    constructor(copyToPartner?: boolean);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  export class AbilityGiveAttr extends MoveEffectAttr {
    copyToPartner: boolean;
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  export class SwitchAbilitiesAttr extends MoveEffectAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    getCondition(): MoveConditionFunc;
  }
  /**
   * Attribute used for moves that suppress abilities like {@linkcode Moves.GASTRO_ACID}.
   * A suppressed ability cannot be activated.
   *
   * @extends MoveEffectAttr
   * @see {@linkcode apply}
   * @see {@linkcode getCondition}
   */
  export class SuppressAbilitiesAttr extends MoveEffectAttr {
    /** Sets ability suppression for the target pokemon and displays a message. */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
    /** Causes the effect to fail when the target's ability is unsupressable or already suppressed. */
    getCondition(): MoveConditionFunc;
  }
  /**
   * Applies the effects of {@linkcode SuppressAbilitiesAttr} if the target has already moved this turn.
   * @extends MoveEffectAttr
   * @see {@linkcode Moves.CORE_ENFORCER} (the move which uses this effect)
   */
  export class SuppressAbilitiesIfActedAttr extends MoveEffectAttr {
    /**
     * If the target has already acted this turn, apply a {@linkcode SuppressAbilitiesAttr} effect unless the
     * abillity cannot be suppressed. This is a secondary effect and has no bearing on the success or failure of the move.
     *
     * @returns True if the move occurred, otherwise false. Note that true will be returned even if the target has not
     * yet moved or if the suppression failed to apply.
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class TransformAttr extends MoveEffectAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): Promise<boolean>;
  }
  export class DiscourageFrequentUseAttr extends MoveAttr {
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class MoneyAttr extends MoveEffectAttr {
    constructor();
    apply(user: Pokemon, target: Pokemon, move: Move): boolean;
  }
  /**
   * Applies {@linkcode BattlerTagType.DESTINY_BOND} to the user.
   *
   * @extends MoveEffectAttr
   */
  export class DestinyBondAttr extends MoveEffectAttr {
    constructor();
    /**
     * Applies {@linkcode BattlerTagType.DESTINY_BOND} to the user.
     * @param user {@linkcode Pokemon} that is having the tag applied to.
     * @param target {@linkcode Pokemon} N/A
     * @param move {@linkcode Move} {@linkcode Move.DESTINY_BOND}
     * @param {any[]} args N/A
     * @returns true
     */
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export class LastResortAttr extends MoveAttr {
    getCondition(): MoveConditionFunc;
  }
  /**
   * The move only works if the target has a transferable held item
   * @extends MoveAttr
   * @see {@linkcode getCondition}
   */
  export class AttackedByItemAttr extends MoveAttr {
    /**
     * @returns the {@linkcode MoveConditionFunc} for this {@linkcode Move}
     */
    getCondition(): MoveConditionFunc;
  }
  export class VariableTargetAttr extends MoveAttr {
    private targetChangeFunc;
    constructor(targetChange: (user: Pokemon, target: Pokemon, move: Move) => number);
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export type MoveAttrFilter = (attr: MoveAttr) => boolean;
  export function applyMoveAttrs(
    attrType: Constructor<MoveAttr>,
    user: Pokemon,
    target: Pokemon,
    move: Move,
    ...args: any[]
  ): Promise<void>;
  export function applyFilteredMoveAttrs(
    attrFilter: MoveAttrFilter,
    user: Pokemon,
    target: Pokemon,
    move: Move,
    ...args: any[]
  ): Promise<void>;
  export class MoveCondition {
    protected func: MoveConditionFunc;
    constructor(func: MoveConditionFunc);
    apply(user: Pokemon, target: Pokemon, move: Move): boolean;
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class FirstMoveCondition extends MoveCondition {
    constructor();
    getUserBenefitScore(user: Pokemon, target: Pokemon, move: Move): number;
  }
  export class hitsSameTypeAttr extends VariableMoveTypeMultiplierAttr {
    apply(user: Pokemon, target: Pokemon, move: Move, args: any[]): boolean;
  }
  export type MoveTargetSet = {
    targets: BattlerIndex[];
    multiple: boolean;
  };
  export function getMoveTargets(user: Pokemon, move: Moves): MoveTargetSet;
  export const allMoves: Move[];
  export function initMoves(): void;
}
declare module 'src/events/battle-scene' {
  import Move from 'src/data/move';
  import {BerryModifier} from 'src/modifier/modifier';
  /** Alias for all {@linkcode BattleScene} events */
  export enum BattleSceneEventType {
    /**
     * Triggers when the corresponding setting is changed
     * @see {@linkcode CandyUpgradeNotificationChangedEvent}
     */
    CANDY_UPGRADE_NOTIFICATION_CHANGED = 'onCandyUpgradeNotificationChanged',
    /**
     * Triggers when a move is successfully used
     * @see {@linkcode MoveUsedEvent}
     */
    MOVE_USED = 'onMoveUsed',
    /**
     * Triggers when a berry gets successfully used
     * @see {@linkcode BerryUsedEvent}
     */
    BERRY_USED = 'onBerryUsed',
    /**
     * Triggers at the start of each new encounter
     * @see {@linkcode EncounterPhaseEvent}
     */
    ENCOUNTER_PHASE = 'onEncounterPhase',
    /**
     * Triggers on the first turn of a new battle
     * @see {@linkcode TurnInitEvent}
     */
    TURN_INIT = 'onTurnInit',
    /**
     * Triggers after a turn ends in battle
     * @see {@linkcode TurnEndEvent}
     */
    TURN_END = 'onTurnEnd',
    /**
     * Triggers when a new {@linkcode Arena} is created during initialization
     * @see {@linkcode NewArenaEvent}
     */
    NEW_ARENA = 'onNewArena',
  }
  /**
   * Container class for {@linkcode BattleSceneEventType.CANDY_UPGRADE_NOTIFICATION_CHANGED} events
   * @extends Event
   */
  export class CandyUpgradeNotificationChangedEvent extends Event {
    /** The new value the setting was changed to */
    newValue: number;
    constructor(newValue: number);
  }
  /**
   * Container class for {@linkcode BattleSceneEventType.MOVE_USED} events
   * @extends Event
   */
  export class MoveUsedEvent extends Event {
    /** The ID of the {@linkcode Pokemon} that used the {@linkcode Move} */
    pokemonId: number;
    /** The {@linkcode Move} used */
    move: Move;
    /** The amount of PP used on the {@linkcode Move} this turn */
    ppUsed: number;
    constructor(userId: number, move: Move, ppUsed: number);
  }
  /**
   * Container class for {@linkcode BattleSceneEventType.BERRY_USED} events
   * @extends Event
   */
  export class BerryUsedEvent extends Event {
    /** The {@linkcode BerryModifier} being used */
    berryModifier: BerryModifier;
    constructor(berry: BerryModifier);
  }
  /**
   * Container class for {@linkcode BattleSceneEventType.ENCOUNTER_PHASE} events
   * @extends Event
   */
  export class EncounterPhaseEvent extends Event {
    constructor();
  }
  /**
   * Container class for {@linkcode BattleSceneEventType.TURN_INIT} events
   * @extends Event
   */
  export class TurnInitEvent extends Event {
    constructor();
  }
  /**
   * Container class for {@linkcode BattleSceneEventType.TURN_END} events
   * @extends Event
   */
  export class TurnEndEvent extends Event {
    /** The amount of turns in the current battle */
    turnCount: number;
    constructor(turnCount: number);
  }
  /**
   * Container class for {@linkcode BattleSceneEventType.NEW_ARENA} events
   * @extends Event
   */
  export class NewArenaEvent extends Event {
    constructor();
  }
}
declare module 'src/ui/battle-flyout' {
  import {default as Pokemon} from 'src/field/pokemon';
  /** A Flyout Menu attached to each {@linkcode BattleInfo} object on the field UI */
  export default class BattleFlyout {
    /** An alias for the scene typecast to a {@linkcode BattleScene} */
    private battleScene;
    /** Is this object linked to a player's Pokemon? */
    private player;
    /** The Pokemon this object is linked to */
    private pokemon;
    /** The restricted width of the flyout which should be drawn to */
    private flyoutWidth;
    /** The restricted height of the flyout which should be drawn to */
    private flyoutHeight;
    /** The amount of translation animation on the x-axis */
    private translationX;
    /** The x-axis point where the flyout should sit when activated */
    private anchorX;
    /** The y-axis point where the flyout should sit when activated */
    private anchorY;
    /** The initial container which defines where the flyout should be attached */
    private flyoutParent;
    /** The background {@linkcode any;} for the flyout */
    private flyoutBackground;
    /** The container which defines the drawable dimensions of the flyout */
    private flyoutContainer;
    /** The array of {@linkcode any} objects which are drawn on the flyout */
    private flyoutText;
    /** The array of {@linkcode MoveInfo} used to track moves for the {@linkcode Pokemon} linked to the flyout */
    private moveInfo;
    /** Current state of the flyout's visibility */
    flyoutVisible: boolean;
    private readonly onMoveUsedEvent;
    private readonly onBerryUsedEvent;
    constructor(scene: any, player: boolean);
    /**
     * Links the given {@linkcode Pokemon} and subscribes to the {@linkcode BattleSceneEventType.MOVE_USED} event
     * @param pokemon {@linkcode Pokemon} to link to this flyout
     */
    initInfo(pokemon: Pokemon): void;
    /** Sets and formats the text property for all {@linkcode any} in the flyoutText array */
    private setText;
    /** Updates all of the {@linkcode MoveInfo} objects in the moveInfo array */
    private onMoveUsed;
    private onBerryUsed;
    /** Animates the flyout to either show or hide it by applying a fade and translation */
    toggleFlyout(visible: boolean): void;
    destroy(fromScene?: boolean): void;
  }
}
declare module 'src/ui/battle-info' {
  import {EnemyPokemon, default as Pokemon} from 'src/field/pokemon';
  import BattleFlyout from 'src/ui/battle-flyout';
  export default class BattleInfo {
    private baseY;
    private player;
    private mini;
    private boss;
    private bossSegments;
    private offset;
    private lastName;
    private lastTeraType;
    private lastStatus;
    private lastHp;
    private lastMaxHp;
    private lastHpFrame;
    private lastExp;
    private lastLevelExp;
    private lastLevel;
    private lastLevelCapped;
    private lastBattleStats;
    private box;
    private nameText;
    private genderText;
    private ownedIcon;
    private championRibbon;
    private teraIcon;
    private shinyIcon;
    private fusionShinyIcon;
    private splicedIcon;
    private statusIndicator;
    private levelContainer;
    private hpBar;
    private hpBarSegmentDividers;
    private levelNumbersContainer;
    private hpNumbersContainer;
    private type1Icon;
    private type2Icon;
    private type3Icon;
    private expBar;
    private effectivenessContainer;
    private effectivenessWindow;
    private effectivenessText;
    private currentEffectiveness?;
    expMaskRect: any;
    private statsContainer;
    private statsBox;
    private statValuesContainer;
    private statNumbers;
    flyoutMenu?: BattleFlyout;
    constructor(scene: any, x: number, y: number, player: boolean);
    initInfo(pokemon: Pokemon): void;
    getTextureName(): string;
    setMini(mini: boolean): void;
    toggleStats(visible: boolean): void;
    updateBossSegments(pokemon: EnemyPokemon): void;
    updateBossSegmentDividers(pokemon: EnemyPokemon): void;
    setOffset(offset: boolean): void;
    updateInfo(pokemon: Pokemon, instant?: boolean): Promise<void>;
    updateNameText(pokemon: Pokemon): void;
    updatePokemonExp(pokemon: Pokemon, instant?: boolean, levelDurationMultiplier?: number): Promise<void>;
    setLevel(level: number): void;
    setHpNumbers(hp: number, maxHp: number): void;
    updateBattleStats(battleStats: number[]): void;
    /**
     * Request the flyoutMenu to toggle if available and hides or shows the effectiveness window where necessary
     */
    toggleFlyout(visible: boolean): void;
    /**
     * Show or hide the type effectiveness multiplier window
     * Passing undefined will hide the window
     */
    updateEffectiveness(effectiveness?: string): void;
    getBaseY(): number;
    resetY(): void;
  }
  export class PlayerBattleInfo extends BattleInfo {
    constructor(scene: any);
  }
  export class EnemyBattleInfo extends BattleInfo {
    constructor(scene: any);
    setMini(mini: boolean): void;
  }
}
declare module 'src/field/pokemon' {
  import BattleScene, {AnySound} from 'src/battle-scene';
  import {Variant} from 'src/data/variant';
  import BattleInfo from 'src/ui/battle-info';
  import Move from 'src/data/move';
  import {default as PokemonSpecies, PokemonSpeciesForm} from 'src/data/pokemon-species';
  import {Constructor} from 'src/utils';
  import {Type, TypeDamageMultiplier} from 'src/data/type';
  import {Stat} from 'src/data/pokemon-stat';
  import {PokemonHeldItemModifier} from 'src/modifier/modifier';
  import {PokeballType} from 'src/data/pokeball';
  import {Gender} from 'src/data/gender';
  import {Status, StatusEffect} from 'src/data/status-effect';
  import {SpeciesFormEvolution} from 'src/data/pokemon-evolutions';
  import {BattlerTag, BattlerTagLapseType} from 'src/data/battler-tags';
  import {Ability, AbAttr} from 'src/data/ability';
  import PokemonData from 'src/system/pokemon-data';
  import {BattlerIndex} from 'src/battle';
  import {LevelMoves} from 'src/data/pokemon-level-moves';
  import {StarterMoveset} from 'src/system/game-data';
  import {Nature} from 'src/data/nature';
  import {SpeciesFormChange} from 'src/data/pokemon-forms';
  import {TrainerSlot} from 'src/data/trainer-config';
  import {Abilities} from 'src/enums/abilities';
  import {BattlerTagType} from 'src/enums/battler-tag-type';
  import {BerryType} from 'src/enums/berry-type';
  import {Biome} from 'src/enums/biome';
  import {Moves} from 'src/enums/moves';
  export enum FieldPosition {
    CENTER = 0,
    LEFT = 1,
    RIGHT = 2,
  }
  export default abstract class Pokemon {
    id: number;
    name: string;
    species: PokemonSpecies;
    formIndex: number;
    abilityIndex: number;
    passive: boolean;
    shiny: boolean;
    variant: Variant;
    pokeball: PokeballType;
    protected battleInfo: BattleInfo;
    level: number;
    exp: number;
    levelExp: number;
    gender: Gender;
    hp: number;
    stats: number[];
    ivs: number[];
    nature: Nature;
    natureOverride: Nature | -1;
    moveset: PokemonMove[];
    status: Status;
    friendship: number;
    metLevel: number;
    metBiome: Biome | -1;
    luck: number;
    pauseEvolutions: boolean;
    pokerus: boolean;
    fusionSpecies: PokemonSpecies;
    fusionFormIndex: number;
    fusionAbilityIndex: number;
    fusionShiny: boolean;
    fusionVariant: Variant;
    fusionGender: Gender;
    fusionLuck: number;
    private summonDataPrimer;
    summonData: PokemonSummonData;
    battleData: PokemonBattleData;
    battleSummonData: PokemonBattleSummonData;
    turnData: PokemonTurnData;
    fieldPosition: FieldPosition;
    maskEnabled: boolean;
    maskSprite: any;
    private shinySparkle;
    constructor(
      scene: BattleScene,
      x: number,
      y: number,
      species: PokemonSpecies,
      level: number,
      abilityIndex?: number,
      formIndex?: number,
      gender?: Gender,
      shiny?: boolean,
      variant?: Variant,
      ivs?: number[],
      nature?: Nature,
      dataSource?: Pokemon | PokemonData
    );
    init(): void;
    abstract initBattleInfo(): void;
    isOnField(): boolean;
    isFainted(checkStatus?: boolean): boolean;
    /**
     * Check if this pokemon is both not fainted and allowed to be in battle.
     * This is frequently a better alternative to {@link isFainted}
     * @returns {boolean} True if pokemon is allowed in battle
     */
    isAllowedInBattle(): boolean;
    isActive(onField?: boolean): boolean;
    getDexAttr(): bigint;
    generateName(): void;
    abstract isPlayer(): boolean;
    abstract hasTrainer(): boolean;
    abstract getFieldIndex(): number;
    abstract getBattlerIndex(): BattlerIndex;
    loadAssets(ignoreOverride?: boolean): Promise<void>;
    getFormKey(): string;
    getFusionFormKey(): string;
    getSpriteAtlasPath(ignoreOverride?: boolean): string;
    getBattleSpriteAtlasPath(back?: boolean, ignoreOverride?: boolean): string;
    getSpriteId(ignoreOverride?: boolean): string;
    getBattleSpriteId(back?: boolean, ignoreOverride?: boolean): string;
    getSpriteKey(ignoreOverride?: boolean): string;
    getBattleSpriteKey(back?: boolean, ignoreOverride?: boolean): string;
    getFusionSpriteId(ignoreOverride?: boolean): string;
    getFusionBattleSpriteId(back?: boolean, ignoreOverride?: boolean): string;
    getFusionBattleSpriteKey(back?: boolean, ignoreOverride?: boolean): string;
    getFusionBattleSpriteAtlasPath(back?: boolean, ignoreOverride?: boolean): string;
    getIconAtlasKey(ignoreOverride?: boolean): string;
    getFusionIconAtlasKey(ignoreOverride?: boolean): string;
    getIconId(ignoreOverride?: boolean): string;
    getFusionIconId(ignoreOverride?: boolean): string;
    getSpeciesForm(ignoreOverride?: boolean): PokemonSpeciesForm;
    getFusionSpeciesForm(ignoreOverride?: boolean): PokemonSpeciesForm;
    getSprite(): any;
    getTintSprite(): any;
    getSpriteScale(): number;
    getHeldItems(): PokemonHeldItemModifier[];
    updateScale(): void;
    updateSpritePipelineData(): void;
    initShinySparkle(): void;
    /**
     * Attempts to animate a given {@linkcode any}
     * @see {@linkcode any.play}
     * @param sprite {@linkcode any} to animate
     * @param tintSprite {@linkcode any} placed on top of the sprite to add a color tint
     * @param animConfig {@linkcode String} to pass to {@linkcode any.play}
     * @returns true if the sprite was able to be animated
     */
    tryPlaySprite(sprite: any, tintSprite: any, key: string): boolean;
    playAnim(): void;
    getFieldPositionOffset(): [number, number];
    setFieldPosition(fieldPosition: FieldPosition, duration?: number): Promise<void>;
    getStat(stat: Stat): number;
    getBattleStat(stat: Stat, opponent?: Pokemon, move?: Move, isCritical?: boolean): number;
    calculateStats(): void;
    getNature(): Nature;
    setNature(nature: Nature): void;
    generateNature(naturePool?: Nature[]): void;
    getMaxHp(): number;
    getInverseHp(): number;
    getHpRatio(precise?: boolean): number;
    generateGender(): void;
    getGender(ignoreOverride?: boolean): Gender;
    getFusionGender(ignoreOverride?: boolean): Gender;
    isShiny(): boolean;
    getVariant(): Variant;
    getLuck(): number;
    isFusion(): boolean;
    abstract isBoss(): boolean;
    getMoveset(ignoreOverride?: boolean): PokemonMove[];
    /**
     * All moves that could be relearned by this pokemon at this point. Used for memory mushrooms.
     * @returns {Moves[]} The valid moves
     */
    getLearnableLevelMoves(): Moves[];
    /**
     * Gets the types of a pokemon
     * @param includeTeraType boolean to include tera-formed type, default false
     * @param forDefend boolean if the pokemon is defending from an attack
     * @param ignoreOverride boolean if true, ignore ability changing effects
     * @returns array of {@linkcode Type}
     */
    getTypes(includeTeraType?: boolean, forDefend?: boolean, ignoreOverride?: boolean): Type[];
    isOfType(type: Type, includeTeraType?: boolean, forDefend?: boolean, ignoreOverride?: boolean): boolean;
    /**
     * Gets the non-passive ability of the pokemon. This accounts for fusions and ability changing effects.
     * This should rarely be called, most of the time {@link hasAbility} or {@link hasAbilityWithAttr} are better used as
     * those check both the passive and non-passive abilities and account for ability suppression.
     * @see {@link hasAbility} {@link hasAbilityWithAttr} Intended ways to check abilities in most cases
     * @param {boolean} ignoreOverride If true, ignore ability changing effects
     * @returns {Ability} The non-passive ability of the pokemon
     */
    getAbility(ignoreOverride?: boolean): Ability;
    /**
     * Gets the passive ability of the pokemon. This should rarely be called, most of the time
     * {@link hasAbility} or {@link hasAbilityWithAttr} are better used as those check both the passive and
     * non-passive abilities and account for ability suppression.
     * @see {@link hasAbility} {@link hasAbilityWithAttr} Intended ways to check abilities in most cases
     * @returns {Ability} The passive ability of the pokemon
     */
    getPassiveAbility(): Ability;
    /**
     * Gets a list of all instances of a given ability attribute among abilities this pokemon has.
     * Accounts for all the various effects which can affect whether an ability will be present or
     * in effect, and both passive and non-passive.
     * @param attrType {@linkcode AbAttr} The ability attribute to check for.
     * @param canApply {@linkcode Boolean} If false, it doesn't check whether the ability is currently active
     * @param ignoreOverride {@linkcode Boolean} If true, it ignores ability changing effects
     * @returns {AbAttr[]} A list of all the ability attributes on this ability.
     */
    getAbilityAttrs(
      attrType: {
        new (...args: any[]): AbAttr;
      },
      canApply?: boolean,
      ignoreOverride?: boolean
    ): AbAttr[];
    /**
     * Checks if a pokemon has a passive either from:
     *  - bought with starter candy
     *  - set by override
     *  - is a boss pokemon
     * @returns whether or not a pokemon should have a passive
     */
    hasPassive(): boolean;
    /**
     * Checks whether an ability of a pokemon can be currently applied. This should rarely be
     * directly called, as {@link hasAbility} and {@link hasAbilityWithAttr} already call this.
     * @see {@link hasAbility} {@link hasAbilityWithAttr} Intended ways to check abilities in most cases
     * @param {boolean} passive If true, check if passive can be applied instead of non-passive
     * @returns {Ability} The passive ability of the pokemon
     */
    canApplyAbility(passive?: boolean): boolean;
    /**
     * Checks whether a pokemon has the specified ability and it's in effect. Accounts for all the various
     * effects which can affect whether an ability will be present or in effect, and both passive and
     * non-passive. This is the primary way to check whether a pokemon has a particular ability.
     * @param {Abilities} ability The ability to check for
     * @param {boolean} canApply If false, it doesn't check whether the abiltiy is currently active
     * @param {boolean} ignoreOverride If true, it ignores ability changing effects
     * @returns {boolean} Whether the ability is present and active
     */
    hasAbility(ability: Abilities, canApply?: boolean, ignoreOverride?: boolean): boolean;
    /**
     * Checks whether a pokemon has an ability with the specified attribute and it's in effect.
     * Accounts for all the various effects which can affect whether an ability will be present or
     * in effect, and both passive and non-passive. This is one of the two primary ways to check
     * whether a pokemon has a particular ability.
     * @param {AbAttr} attrType The ability attribute to check for
     * @param {boolean} canApply If false, it doesn't check whether the ability is currently active
     * @param {boolean} ignoreOverride If true, it ignores ability changing effects
     * @returns {boolean} Whether an ability with that attribute is present and active
     */
    hasAbilityWithAttr(attrType: Constructor<AbAttr>, canApply?: boolean, ignoreOverride?: boolean): boolean;
    getWeight(): number;
    /**
     * Gets the tera-formed type of the pokemon, or UNKNOWN if not present
     * @returns the {@linkcode Type}
     */
    getTeraType(): Type;
    isTerastallized(): boolean;
    isGrounded(): boolean;
    /**
     * Calculates the effectiveness of a move against the Pokémon.
     *
     * @param source - The Pokémon using the move.
     * @param move - The move being used.
     * @returns The type damage multiplier or undefined if it's a status move
     */
    getMoveEffectiveness(source: Pokemon, move: PokemonMove): TypeDamageMultiplier | undefined;
    /**
     * Calculates the effectiveness of an attack move against the Pokémon.
     *
     * @param source - The attacking Pokémon.
     * @param pokemonMove - The move being used by the attacking Pokémon.
     * @param ignoreAbility - Whether to check for abilities that might affect type effectiveness or immunity.
     * @returns The type damage multiplier, indicating the effectiveness of the move
     */
    getAttackMoveEffectiveness(
      source: Pokemon,
      pokemonMove: PokemonMove,
      ignoreAbility?: boolean
    ): TypeDamageMultiplier;
    getAttackTypeEffectiveness(moveType: Type, source?: Pokemon, ignoreStrongWinds?: boolean): TypeDamageMultiplier;
    getMatchupScore(pokemon: Pokemon): number;
    getEvolution(): SpeciesFormEvolution;
    /**
     * Gets all level up moves in a given range for a particular pokemon.
     * @param {number} startingLevel Don't include moves below this level
     * @param {boolean} includeEvolutionMoves Whether to include evolution moves
     * @param {boolean} simulateEvolutionChain Whether to include moves from prior evolutions
     * @param {boolean} includeRelearnerMoves Whether to include moves that would require a relearner. Note the move relearner inherently allows evolution moves
     * @returns {LevelMoves} A list of moves and the levels they can be learned at
     */
    getLevelMoves(
      startingLevel?: number,
      includeEvolutionMoves?: boolean,
      simulateEvolutionChain?: boolean,
      includeRelearnerMoves?: boolean
    ): LevelMoves;
    setMove(moveIndex: number, moveId: Moves): void;
    /**
     * Function that tries to set a Pokemon shiny based on the trainer's trainer ID and secret ID
     * Endless Pokemon in the end biome are unable to be set to shiny
     *
     * The exact mechanic is that it calculates E as the XOR of the player's trainer ID and secret ID
     * F is calculated as the XOR of the first 16 bits of the Pokemon's ID with the last 16 bits
     * The XOR of E and F are then compared to the thresholdOverride (default case 32) to see whether or not to generate a shiny
     * @param thresholdOverride number that is divided by 2^16 (65536) to get the shiny chance
     * @returns true if the Pokemon has been set as a shiny, false otherwise
     */
    trySetShiny(thresholdOverride?: number): boolean;
    /**
     * Generates a variant
     * Has a 10% of returning 2 (epic variant)
     * And a 30% of returning 1 (rare variant)
     * Returns 0 (basic shiny) if there is no variant or 60% of the time otherwise
     * @returns the shiny variant
     */
    generateVariant(): Variant;
    generateFusionSpecies(forStarter?: boolean): void;
    clearFusionSpecies(): void;
    generateAndPopulateMoveset(): void;
    trySelectMove(moveIndex: number, ignorePp?: boolean): boolean;
    showInfo(): void;
    hideInfo(): Promise<void>;
    updateInfo(instant?: boolean): Promise<void>;
    /**
     * Show or hide the type effectiveness multiplier window
     * Passing undefined will hide the window
     */
    updateEffectiveness(effectiveness?: string): void;
    toggleStats(visible: boolean): void;
    toggleFlyout(visible: boolean): void;
    addExp(exp: number): void;
    getOpponent(targetIndex: number): Pokemon;
    getOpponents(): Pokemon[];
    getOpponentDescriptor(): string;
    getAlly(): Pokemon;
    apply(source: Pokemon, move: Move): HitResult;
    damage(damage: number, ignoreSegments?: boolean, preventEndure?: boolean, ignoreFaintPhase?: boolean): number;
    damageAndUpdate(
      damage: number,
      result?: DamageResult,
      critical?: boolean,
      ignoreSegments?: boolean,
      preventEndure?: boolean,
      ignoreFaintPhase?: boolean
    ): number;
    heal(amount: number): number;
    isBossImmune(): boolean;
    isMax(): boolean;
    addTag(tagType: BattlerTagType, turnCount?: number, sourceMove?: Moves, sourceId?: number): boolean;
    getTag(tagType: BattlerTagType | Constructor<BattlerTag>): BattlerTag;
    findTag(tagFilter: (tag: BattlerTag) => boolean): BattlerTag;
    getTags(tagType: BattlerTagType | Constructor<BattlerTag>): BattlerTag[];
    findTags(tagFilter: (tag: BattlerTag) => boolean): BattlerTag[];
    lapseTag(tagType: BattlerTagType): boolean;
    lapseTags(lapseType: BattlerTagLapseType): void;
    removeTag(tagType: BattlerTagType): boolean;
    findAndRemoveTags(tagFilter: (tag: BattlerTag) => boolean): boolean;
    removeTagsBySourceId(sourceId: number): void;
    transferTagsBySourceId(sourceId: number, newSourceId: number): void;
    /**
     * Transferring stat changes and Tags
     * @param source {@linkcode Pokemon} the pokemon whose stats/Tags are to be passed on from, ie: the Pokemon using Baton Pass
     */
    transferSummon(source: Pokemon): void;
    getMoveHistory(): TurnMove[];
    pushMoveHistory(turnMove: TurnMove): void;
    getLastXMoves(turnCount?: number): TurnMove[];
    getMoveQueue(): QueuedMove[];
    /**
     * If this Pokemon is using a multi-hit move, cancels all subsequent strikes
     * @param {Pokemon} target If specified, this only cancels subsequent strikes against the given target
     */
    stopMultiHit(target?: Pokemon): void;
    changeForm(formChange: SpeciesFormChange): Promise<void>;
    cry(soundConfig?: any, sceneOverride?: BattleScene): AnySound;
    faintCry(callback: Function): void;
    private fusionFaintCry;
    isOppositeGender(pokemon: Pokemon): boolean;
    canSetStatus(effect: StatusEffect, quiet?: boolean, overrideStatus?: boolean, sourcePokemon?: Pokemon): boolean;
    trySetStatus(
      effect: StatusEffect,
      asPhase?: boolean,
      sourcePokemon?: Pokemon,
      cureTurn?: number,
      sourceText?: string
    ): boolean;
    /**
     * Resets the status of a pokemon.
     * @param revive Whether revive should be cured; defaults to true.
     * @param confusion Whether resetStatus should include confusion or not; defaults to false.
     * @param reloadAssets Whether to reload the assets or not; defaults to false.
     */
    resetStatus(revive?: boolean, confusion?: boolean, reloadAssets?: boolean): void;
    primeSummonData(summonDataPrimer: PokemonSummonData): void;
    resetSummonData(): void;
    resetBattleData(): void;
    resetBattleSummonData(): void;
    resetTurnData(): void;
    getExpValue(): number;
    setFrameRate(frameRate: number): void;
    tint(color: number, alpha?: number, duration?: number, ease?: string): void;
    untint(duration: number, ease?: string): void;
    enableMask(): void;
    disableMask(): void;
    sparkle(): void;
    updateFusionPalette(ignoreOveride?: boolean): void;
    randSeedInt(range: number, min?: number): number;
    randSeedIntRange(min: number, max: number): number;
    destroy(): void;
    getBattleInfo(): BattleInfo;
  }
  export default interface Pokemon {
    scene: BattleScene;
  }
  export class PlayerPokemon extends Pokemon {
    compatibleTms: Moves[];
    constructor(
      scene: BattleScene,
      species: PokemonSpecies,
      level: number,
      abilityIndex: number,
      formIndex: number,
      gender: Gender,
      shiny: boolean,
      variant: Variant,
      ivs: number[],
      nature: Nature,
      dataSource: Pokemon | PokemonData
    );
    initBattleInfo(): void;
    isPlayer(): boolean;
    hasTrainer(): boolean;
    isBoss(): boolean;
    getFieldIndex(): number;
    getBattlerIndex(): BattlerIndex;
    generateCompatibleTms(): void;
    tryPopulateMoveset(moveset: StarterMoveset): boolean;
    switchOut(batonPass: boolean, removeFromField?: boolean): Promise<void>;
    addFriendship(friendship: number): void;
    /**
     * Handles Revival Blessing when used by player.
     * @returns Promise to revive a pokemon.
     * @see {@linkcode RevivalBlessingAttr}
     */
    revivalBlessing(): Promise<void>;
    getPossibleEvolution(evolution: SpeciesFormEvolution): Promise<Pokemon>;
    evolve(evolution: SpeciesFormEvolution): Promise<void>;
    private handleSpecialEvolutions;
    getPossibleForm(formChange: SpeciesFormChange): Promise<Pokemon>;
    changeForm(formChange: SpeciesFormChange): Promise<void>;
    clearFusionSpecies(): void;
    /**
     * Returns a Promise to fuse two PlayerPokemon together
     * @param pokemon The PlayerPokemon to fuse to this one
     */
    fuse(pokemon: PlayerPokemon): Promise<void>;
    unfuse(): Promise<void>;
    /** Returns a deep copy of this Pokemon's moveset array */
    copyMoveset(): PokemonMove[];
  }
  export class EnemyPokemon extends Pokemon {
    trainerSlot: TrainerSlot;
    aiType: AiType;
    bossSegments: number;
    bossSegmentIndex: number;
    /** To indicate of the instance was populated with a dataSource -> e.g. loaded & populated from session data */
    readonly isPopulatedFromDataSource: boolean;
    constructor(
      scene: BattleScene,
      species: PokemonSpecies,
      level: number,
      trainerSlot: TrainerSlot,
      boss: boolean,
      dataSource: PokemonData
    );
    initBattleInfo(): void;
    /**
     * Sets the pokemons boss status. If true initializes the boss segments either from the arguments
     * or through the the Scene.getEncounterBossSegments function
     *
     * @param boss if the pokemon is a boss
     * @param bossSegments amount of boss segments (health-bar segments)
     */
    setBoss(boss?: boolean, bossSegments?: number): void;
    generateAndPopulateMoveset(formIndex?: number): void;
    getNextMove(): QueuedMove;
    getNextTargets(moveId: Moves): BattlerIndex[];
    isPlayer(): boolean;
    hasTrainer(): boolean;
    isBoss(): boolean;
    getBossSegmentIndex(): number;
    damage(damage: number, ignoreSegments?: boolean, preventEndure?: boolean, ignoreFaintPhase?: boolean): number;
    canBypassBossSegments(segmentCount?: number): boolean;
    handleBossSegmentCleared(segmentIndex: number): void;
    heal(amount: number): number;
    getFieldIndex(): number;
    getBattlerIndex(): BattlerIndex;
    addToParty(pokeballType: PokeballType): PlayerPokemon;
  }
  export interface TurnMove {
    move: Moves;
    targets?: BattlerIndex[];
    result: MoveResult;
    virtual?: boolean;
    turn?: number;
  }
  export interface QueuedMove {
    move: Moves;
    targets: BattlerIndex[];
    ignorePP?: boolean;
  }
  export interface AttackMoveResult {
    move: Moves;
    result: DamageResult;
    damage: number;
    critical: boolean;
    sourceId: number;
  }
  export class PokemonSummonData {
    battleStats: number[];
    moveQueue: QueuedMove[];
    disabledMove: Moves;
    disabledTurns: number;
    tags: BattlerTag[];
    abilitySuppressed: boolean;
    abilitiesApplied: Abilities[];
    speciesForm: PokemonSpeciesForm;
    fusionSpeciesForm: PokemonSpeciesForm;
    ability: Abilities;
    gender: Gender;
    fusionGender: Gender;
    stats: number[];
    moveset: PokemonMove[];
    types: Type[];
  }
  export class PokemonBattleData {
    hitCount: number;
    endured: boolean;
    berriesEaten: BerryType[];
    abilitiesApplied: Abilities[];
    abilityRevealed: boolean;
  }
  export class PokemonBattleSummonData {
    /** The number of turns the pokemon has passed since entering the battle */
    turnCount: number;
    /** The list of moves the pokemon has used since entering the battle */
    moveHistory: TurnMove[];
  }
  export class PokemonTurnData {
    flinched: boolean;
    acted: boolean;
    hitCount: number;
    hitsLeft: number;
    damageDealt: number;
    currDamageDealt: number;
    damageTaken: number;
    attacksReceived: AttackMoveResult[];
  }
  export enum AiType {
    RANDOM = 0,
    SMART_RANDOM = 1,
    SMART = 2,
  }
  export enum MoveResult {
    PENDING = 0,
    SUCCESS = 1,
    FAIL = 2,
    MISS = 3,
    OTHER = 4,
  }
  export enum HitResult {
    EFFECTIVE = 1,
    SUPER_EFFECTIVE = 2,
    NOT_VERY_EFFECTIVE = 3,
    ONE_HIT_KO = 4,
    NO_EFFECT = 5,
    STATUS = 6,
    HEAL = 7,
    FAIL = 8,
    MISS = 9,
    OTHER = 10,
    IMMUNE = 11,
  }
  export type DamageResult =
    | HitResult.EFFECTIVE
    | HitResult.SUPER_EFFECTIVE
    | HitResult.NOT_VERY_EFFECTIVE
    | HitResult.ONE_HIT_KO
    | HitResult.OTHER;
  /**
   * Wrapper class for the {@linkcode Move} class for Pokemon to interact with.
   * These are the moves assigned to a {@linkcode Pokemon} object.
   * It links to {@linkcode Move} class via the move ID.
   * Compared to {@linkcode Move}, this class also tracks if a move has received.
   * PP Ups, amount of PP used, and things like that.
   * @see {@linkcode isUsable} - checks if move is disabled, out of PP, or not implemented.
   * @see {@linkcode getMove} - returns {@linkcode Move} object by looking it up via ID.
   * @see {@linkcode usePp} - removes a point of PP from the move.
   * @see {@linkcode getMovePp} - returns amount of PP a move currently has.
   * @see {@linkcode getPpRatio} - returns the current PP amount / max PP amount.
   * @see {@linkcode getName} - returns name of {@linkcode Move}.
   **/
  export class PokemonMove {
    moveId: Moves;
    ppUsed: number;
    ppUp: number;
    virtual: boolean;
    constructor(moveId: Moves, ppUsed?: number, ppUp?: number, virtual?: boolean);
    isUsable(pokemon: Pokemon, ignorePp?: boolean): boolean;
    getMove(): Move;
    /**
     * Sets {@link ppUsed} for this move and ensures the value does not exceed {@link getMovePp}
     * @param {number} count Amount of PP to use
     */
    usePp(count?: number): void;
    getMovePp(): number;
    getPpRatio(): number;
    getName(): string;
    /**
     * Copies an existing move or creates a valid PokemonMove object from json representing one
     * @param {PokemonMove | any} source The data for the move to copy
     * @return {PokemonMove} A valid pokemonmove object
     */
    static loadMove(source: PokemonMove | any): PokemonMove;
  }
}
declare module 'src/ui/summary-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import UiHandler from 'src/ui/ui-handler';
  import Move from 'src/data/move';
  import {Button} from 'src/enums/buttons';
  enum Page {
    PROFILE = 0,
    STATS = 1,
    MOVES = 2,
  }
  export enum SummaryUiMode {
    DEFAULT = 0,
    LEARN_MOVE = 1,
  }
  export default class SummaryUiHandler extends UiHandler {
    private summaryUiMode;
    private summaryContainer;
    private tabSprite;
    private shinyOverlay;
    private numberText;
    private pokemonSprite;
    private nameText;
    private splicedIcon;
    private pokeball;
    private levelText;
    private genderText;
    private shinyIcon;
    private fusionShinyIcon;
    private candyShadow;
    private candyIcon;
    private candyOverlay;
    private candyCountText;
    private championRibbon;
    private statusContainer;
    private status;
    /** The pixel button prompt indicating a passive is unlocked */
    private abilityPrompt;
    /** Object holding everything needed to display an ability */
    private abilityContainer;
    /** Object holding everything needed to display a passive */
    private passiveContainer;
    private summaryPageContainer;
    private movesContainer;
    private moveDescriptionText;
    private moveCursorObj;
    private selectedMoveCursorObj;
    private moveRowsContainer;
    private extraMoveRowContainer;
    private moveEffectContainer;
    private movePowerText;
    private moveAccuracyText;
    private moveCategoryIcon;
    private summaryPageTransitionContainer;
    private descriptionScrollTween;
    private moveCursorBlinkTimer;
    private pokemon;
    private newMove;
    private moveSelectFunction;
    private transitioning;
    private statusVisible;
    private moveEffectsVisible;
    private moveSelect;
    private moveCursor;
    private selectedMoveIndex;
    constructor(scene: BattleScene);
    setup(): void;
    getPageKey(page?: number): string;
    show(args: any[]): boolean;
    processInput(button: Button): boolean;
    setCursor(cursor: number, overrideChanged?: boolean): boolean;
    populatePageContainer(pageContainer: any, page?: Page): void;
    showStatus(instant?: boolean): void;
    hideStatus(instant?: boolean): void;
    getSelectedMove(): Move;
    showMoveSelect(): void;
    hideMoveSelect(): void;
    destroyBlinkCursor(): void;
    showMoveEffect(instant?: boolean): void;
    hideMoveEffect(instant?: boolean): void;
    clear(): void;
  }
}
declare module 'src/ui/abstact-option-select-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import UiHandler from 'src/ui/ui-handler';
  import {Button} from 'src/enums/buttons';
  export interface OptionSelectConfig {
    xOffset?: number;
    yOffset?: number;
    options: OptionSelectItem[];
    maxOptions?: number;
    delay?: number;
    noCancel?: boolean;
    supportHover?: boolean;
  }
  export interface OptionSelectItem {
    label: string;
    handler: () => boolean;
    onHover?: () => void;
    keepOpen?: boolean;
    overrideSound?: boolean;
    item?: string;
    itemArgs?: any[];
  }
  export default abstract class AbstractOptionSelectUiHandler extends UiHandler {
    protected optionSelectContainer: any;
    protected optionSelectBg: any;
    protected optionSelectText: any;
    protected optionSelectIcons: any[];
    protected config: OptionSelectConfig;
    protected blockInput: boolean;
    protected scrollCursor: number;
    private cursorObj;
    constructor(scene: BattleScene, mode?: Mode);
    abstract getWindowWidth(): number;
    getWindowHeight(): number;
    setup(): void;
    protected setupOptions(): void;
    show(args: any[]): boolean;
    processInput(button: Button): boolean;
    unblockInput(): void;
    getOptionsWithScroll(): OptionSelectItem[];
    setCursor(cursor: number): boolean;
    clear(): void;
    eraseCursor(): void;
  }
}
declare module 'src/ui/stats-container' {
  import BattleScene from 'src/battle-scene';
  export class StatsContainer {
    private showDiff;
    private statsIvsCache;
    private ivChart;
    private ivStatValueTexts;
    constructor(scene: BattleScene, x: number, y: number, showDiff?: boolean);
    setup(): void;
    updateIvs(ivs: number[], originalIvs?: number[]): void;
  }
}
declare module 'src/enums/passive' {
  /**
   * enum for passive
   */
  export enum Passive {
    UNLOCKED = 1,
    ENABLED = 2,
  }
}
declare module 'src/ui/starter-select-ui-handler' {
  import {Variant} from 'src/data/variant';
  import BattleScene from 'src/battle-scene';
  import {Nature} from 'src/data/nature';
  import PokemonSpecies from 'src/data/pokemon-species';
  import {Type} from 'src/data/type';
  import {StarterMoveset} from 'src/system/game-data';
  import MessageUiHandler from 'src/ui/message-ui-handler';
  import {Moves} from 'src/enums/moves';
  import {Button} from 'src/enums/buttons';
  export type StarterSelectCallback = (starters: Starter[]) => void;
  export interface Starter {
    species: PokemonSpecies;
    dexAttr: bigint;
    abilityIndex: number;
    passive: boolean;
    nature: Nature;
    moveset?: StarterMoveset;
    pokerus: boolean;
  }
  export default class StarterSelectUiHandler extends MessageUiHandler {
    private starterSelectContainer;
    private shinyOverlay;
    private starterSelectGenIconContainers;
    private pokemonNumberText;
    private pokemonSprite;
    private pokemonNameText;
    private pokemonGrowthRateLabelText;
    private pokemonGrowthRateText;
    private type1Icon;
    private type2Icon;
    private pokemonLuckLabelText;
    private pokemonLuckText;
    private pokemonGenderText;
    private pokemonUncaughtText;
    private pokemonAbilityLabelText;
    private pokemonAbilityText;
    private pokemonPassiveLabelText;
    private pokemonPassiveText;
    private pokemonNatureLabelText;
    private pokemonNatureText;
    private pokemonMovesContainer;
    private pokemonMoveContainers;
    private pokemonMoveBgs;
    private pokemonMoveLabels;
    private pokemonAdditionalMoveCountLabel;
    private pokemonEggMovesContainer;
    private pokemonEggMoveContainers;
    private pokemonEggMoveBgs;
    private pokemonEggMoveLabels;
    private pokemonCandyIcon;
    private pokemonCandyDarknessOverlay;
    private pokemonCandyOverlayIcon;
    private pokemonCandyCountText;
    private pokemonCaughtHatchedContainer;
    private pokemonCaughtCountText;
    private pokemonHatchedIcon;
    private pokemonHatchedCountText;
    private pokemonShinyIcon;
    private genOptionsText;
    private instructionsContainer;
    private shinyIconElement;
    private formIconElement;
    private abilityIconElement;
    private genderIconElement;
    private natureIconElement;
    private variantIconElement;
    private shinyLabel;
    private formLabel;
    private genderLabel;
    private abilityLabel;
    private natureLabel;
    private variantLabel;
    private starterSelectMessageBox;
    private starterSelectMessageBoxContainer;
    private statsContainer;
    private pokemonFormText;
    private moveInfoOverlay;
    private genMode;
    private statsMode;
    private dexAttrCursor;
    private abilityCursor;
    private natureCursor;
    private genCursor;
    private genScrollCursor;
    private starterMoveset;
    private genSpecies;
    private lastSpecies;
    private speciesLoaded;
    starterGens: number[];
    starterCursors: number[];
    private pokerusGens;
    private pokerusCursors;
    private starterAttr;
    private starterAbilityIndexes;
    private starterNatures;
    private starterMovesets;
    private speciesStarterDexEntry;
    private speciesStarterMoves;
    private canCycleShiny;
    private canCycleForm;
    private canCycleGender;
    private canCycleAbility;
    private canCycleNature;
    private canCycleVariant;
    private value;
    private canAddParty;
    private assetLoadCancelled;
    cursorObj: any;
    private starterCursorObjs;
    private pokerusCursorObjs;
    private starterIcons;
    private genCursorObj;
    private genCursorHighlightObj;
    private valueLimitLabel;
    private startCursorObj;
    private starterValueLabels;
    private shinyIcons;
    private hiddenAbilityIcons;
    private classicWinIcons;
    private candyUpgradeIcon;
    private candyUpgradeOverlayIcon;
    private iconAnimHandler;
    private instructionRowX;
    private instructionRowY;
    private instructionRowTextOffset;
    private starterSelectCallback;
    private starterPreferences;
    protected blockInput: boolean;
    constructor(scene: BattleScene);
    setup(): void;
    show(args: any[]): boolean;
    showText(
      text: string,
      delay?: number,
      callback?: Function,
      callbackDelay?: number,
      prompt?: boolean,
      promptDelay?: number
    ): void;
    /**
     * Determines if 'Icon' based upgrade notifications should be shown
     * @returns true if upgrade notifications are enabled and set to display an 'Icon'
     */
    isUpgradeIconEnabled(): boolean;
    /**
     * Determines if 'Animation' based upgrade notifications should be shown
     * @returns true if upgrade notifications are enabled and set to display an 'Animation'
     */
    isUpgradeAnimationEnabled(): boolean;
    /**
     * Determines if a passive upgrade is available for the given species ID
     * @param speciesId The ID of the species to check the passive of
     * @returns true if the user has enough candies and a passive has not been unlocked already
     */
    isPassiveAvailable(speciesId: number): boolean;
    /**
     * Determines if a value reduction upgrade is available for the given species ID
     * @param speciesId The ID of the species to check the value reduction of
     * @returns true if the user has enough candies and all value reductions have not been unlocked already
     */
    isValueReductionAvailable(speciesId: number): boolean;
    /**
     * Determines if an same species egg can be baught for the given species ID
     * @param speciesId The ID of the species to check the value reduction of
     * @returns true if the user has enough candies
     */
    isSameSpeciesEggAvailable(speciesId: number): boolean;
    /**
     * Sets a bounce animation if enabled and the Pokemon has an upgrade
     * @param icon {@linkcode any} to animate
     * @param species {@linkcode PokemonSpecies} of the icon used to check for upgrades
     * @param startPaused Should this animation be paused after it is added?
     */
    setUpgradeAnimation(icon: any, species: PokemonSpecies, startPaused?: boolean): void;
    /**
     * Sets the visibility of a Candy Upgrade Icon given an index
     * @param index The UI index of the icon within this generation container
     */
    setUpgradeIcon(index: number): void;
    /**
     * Processes an {@linkcode CandyUpgradeNotificationChangedEvent} sent when the corresponding setting changes
     * @param event {@linkcode Event} sent by the callback
     */
    onCandyUpgradeDisplayChanged(event: Event): void;
    processInput(button: Button): boolean;
    switchMoveHandler(i: number, newMove: Moves, move: Moves): void;
    updateButtonIcon(iconSetting: any, gamepadType: any, iconElement: any, controlLabel: any): void;
    updateInstructions(): void;
    getValueLimit(): number;
    setCursor(cursor: number): boolean;
    getGenCursorWithScroll(): number;
    updateGenOptions(): void;
    setGenMode(genMode: boolean): boolean;
    setSpecies(species: PokemonSpecies): void;
    setSpeciesDetails(
      species: PokemonSpecies,
      shiny: boolean,
      formIndex: number,
      female: boolean,
      variant: Variant,
      abilityIndex: number,
      natureIndex: number,
      forSeen?: boolean
    ): void;
    setTypeIcons(type1: Type, type2: Type): void;
    popStarter(): void;
    updateStarterValueLabel(cursor: number): void;
    tryUpdateValue(add?: number): boolean;
    tryStart(manualTrigger?: boolean): boolean;
    toggleStatsMode(on?: boolean): void;
    showStats(): void;
    clearText(): void;
    hideInstructions(): void;
    clear(): void;
    checkIconId(icon: any, species: PokemonSpecies, female: any, formIndex: any, shiny: any, variant: any): void;
  }
}
declare module 'src/ui/egg-hatch-scene-handler' {
  import BattleScene from 'src/battle-scene';
  import UiHandler from 'src/ui/ui-handler';
  import {Button} from 'src/enums/buttons';
  export default class EggHatchSceneHandler extends UiHandler {
    eggHatchContainer: any;
    /**
     * Allows subscribers to listen for events
     *
     * Current Events:
     * - {@linkcode EggEventType.EGG_COUNT_CHANGED} {@linkcode EggCountChangedEvent}
     */
    readonly eventTarget: EventTarget;
    constructor(scene: BattleScene);
    setup(): void;
    show(_args: any[]): boolean;
    processInput(button: Button): boolean;
    setCursor(_cursor: number): boolean;
    clear(): void;
  }
}
declare module 'src/ui/confirm-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import AbstractOptionSelectUiHandler from 'src/ui/abstact-option-select-ui-handler';
  import {Button} from 'src/enums/buttons';
  export default class ConfirmUiHandler extends AbstractOptionSelectUiHandler {
    static readonly windowWidth: number;
    private switchCheck;
    private switchCheckCursor;
    constructor(scene: BattleScene);
    getWindowWidth(): number;
    show(args: any[]): boolean;
    processInput(button: Button): boolean;
    setCursor(cursor: number): boolean;
  }
}
declare module 'src/ui/pokemon-info-container' {
  import BattleScene from 'src/battle-scene';
  import Pokemon from 'src/field/pokemon';
  import {StatsContainer} from 'src/ui/stats-container';
  export default class PokemonInfoContainer {
    private readonly infoWindowWidth;
    private pokemonFormLabelText;
    private pokemonFormText;
    private pokemonGenderText;
    private pokemonGenderNewText;
    private pokemonAbilityLabelText;
    private pokemonAbilityText;
    private pokemonNatureLabelText;
    private pokemonNatureText;
    private pokemonShinyIcon;
    private pokemonShinyNewIcon;
    private pokemonFusionShinyIcon;
    private pokemonMovesContainer;
    private pokemonMovesContainers;
    private pokemonMoveBgs;
    private pokemonMoveLabels;
    private numCharsBeforeCutoff;
    private initialX;
    private movesContainerInitialX;
    statsContainer: StatsContainer;
    shown: boolean;
    constructor(scene: BattleScene, x?: number, y?: number);
    setup(): void;
    show(pokemon: Pokemon, showMoves?: boolean, speedMultiplier?: number): Promise<void>;
    makeRoomForConfirmUi(speedMultiplier?: number): Promise<void>;
    hide(speedMultiplier?: number): Promise<void>;
  }
  export default interface PokemonInfoContainer {
    scene: BattleScene;
  }
}
declare module 'src/ui/egg-counter-container' {
  import BattleScene from 'src/battle-scene';
  /**
   * A container that displays the count of hatching eggs.
   * Extends any.
   */
  export default class EggCounterContainer {
    private readonly WINDOW_DEFAULT_WIDTH;
    private readonly WINDOW_MEDIUM_WIDTH;
    private readonly WINDOW_HEIGHT;
    private readonly onEggCountChangedEvent;
    private battleScene;
    private eggCount;
    private eggCountWindow;
    eggCountText: any;
    /**
     * @param {BattleScene} scene - The scene to which this container belongs.
     * @param {number} eggCount - The number of eggs to hatch.
     */
    constructor(scene: BattleScene, eggCount: number);
    /**
     * Sets up the container, creating the window, egg sprite, and egg count text.
     */
    private setup;
    /**
     * Resets the window size to the default width and height.
     */
    private setWindowToDefaultSize;
    /**
     * Handles window size, the egg count to show, and whether it should be displayed.
     *
     * @param event {@linkcode Event} being sent
     * @returns void
     */
    private onEggCountChanged;
  }
}
declare module 'src/events/egg' {
  export enum EggEventType {
    /**
     * Triggers when egg count is changed.
     * @see {@linkcode MoveUsedEvent}
     */
    EGG_COUNT_CHANGED = 'onEggCountChanged',
  }
  /**
   * Container class for {@linkcode EggEventType.EGG_COUNT_CHANGED} events
   * @extends Event
   */
  export class EggCountChangedEvent extends Event {
    /** The updated egg count. */
    eggCount: number;
    constructor(eggCount: number);
  }
}
declare module 'src/egg-hatch-phase' {
  import {Phase} from 'src/phase';
  import BattleScene from 'src/battle-scene';
  import {Egg} from 'src/data/egg';
  import {PlayerPokemon} from 'src/field/pokemon';
  /**
   * Class that represents egg hatching
   */
  export class EggHatchPhase extends Phase {
    /** The egg that is hatching */
    private egg;
    /** The number of eggs that are hatching */
    private eggsToHatchCount;
    /** The container that lists how many eggs are hatching */
    private eggCounterContainer;
    /** The scene handler for egg hatching */
    private eggHatchHandler;
    /** The phaser gameobject container that holds everything */
    private eggHatchContainer;
    /** The phaser image that is the background */
    private eggHatchBg;
    /** The phaser rectangle that overlays during the scene */
    private eggHatchOverlay;
    /** The phaser container that holds the egg */
    private eggContainer;
    /** The phaser sprite of the egg */
    private eggSprite;
    /** The phaser sprite of the cracks in an egg */
    private eggCrackSprite;
    /** The phaser sprite that represents the overlaid light rays */
    private eggLightraysOverlay;
    /** The phaser sprite of the hatched Pokemon */
    private pokemonSprite;
    /** The phaser sprite for shiny sparkles */
    private pokemonShinySparkle;
    /** The {@link PokemonInfoContainer} of the newly hatched Pokemon */
    private infoContainer;
    /** The newly hatched {@link PlayerPokemon} */
    private pokemon;
    /** The index of which egg move is unlocked. 0-2 is common, 3 is rare */
    private eggMoveIndex;
    /** Internal booleans representing if the egg is hatched, able to be skipped, or skipped */
    private hatched;
    private canSkip;
    private skipped;
    /** The sound effect being played when the egg is hatched */
    private evolutionBgm;
    constructor(scene: BattleScene, egg: Egg, eggsToHatchCount: number);
    start(): void;
    end(): void;
    /**
     * Function that animates egg shaking
     * @param intensity of horizontal shaking. Doubled on the first call (where count is 0)
     * @param repeatCount the number of times this function should be called (asynchronous recursion?!?)
     * @param count the current number of times this function has been called.
     * @returns nothing since it's a Promise<void>
     */
    doEggShake(intensity: number, repeatCount?: number, count?: number): Promise<void>;
    /**
     * Tries to skip the hatching animation
     * @returns false if cannot be skipped or already skipped. True otherwise
     */
    trySkip(): boolean;
    /**
     * Plays the animation of an egg hatch
     */
    doHatch(): void;
    /**
     * Function to do the logic and animation of completing a hatch and revealing the Pokemon
     */
    doReveal(): void;
    /**
     * Helper function to generate sine. (Why is this not a Utils?!?)
     * @param index random number from 0-7 being passed in to scale pi/128
     * @param amplitude Scaling
     * @returns a number
     */
    sin(index: number, amplitude: number): number;
    /**
     * Animates spraying
     * @param intensity number of times this is repeated (this is a badly named variable)
     * @param offsetY how much to offset the Y coordinates
     */
    doSpray(intensity: number, offsetY?: number): void;
    /**
     * Animates a particle used in the spray animation
     * @param trigIndex Used to modify the particle's vertical speed, is a random number from 0-7
     * @param offsetY how much to offset the Y coordinate
     */
    doSprayParticle(trigIndex: number, offsetY: number): void;
    /**
     * Generates a Pokemon to be hatched by the egg
     * @returns the hatched PlayerPokemon
     */
    generatePokemon(): PlayerPokemon;
  }
}
declare module 'src/ui/modifier-select-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {ModifierTypeOption} from 'src/modifier/modifier-type';
  import AwaitableUiHandler from 'src/ui/awaitable-ui-handler';
  import {Button} from 'src/enums/buttons';
  export const SHOP_OPTIONS_ROW_LIMIT = 6;
  export default class ModifierSelectUiHandler extends AwaitableUiHandler {
    private modifierContainer;
    private rerollButtonContainer;
    private lockRarityButtonContainer;
    private transferButtonContainer;
    private checkButtonContainer;
    private rerollCostText;
    private lockRarityButtonText;
    private moveInfoOverlay;
    private moveInfoOverlayActive;
    private rowCursor;
    private player;
    private rerollCost;
    private transferButtonWidth;
    private checkButtonWidth;
    options: ModifierOption[];
    shopOptionsRows: ModifierOption[][];
    private cursorObj;
    constructor(scene: BattleScene);
    setup(): void;
    show(args: any[]): boolean;
    processInput(button: Button): boolean;
    setCursor(cursor: number): boolean;
    setRowCursor(rowCursor: number): boolean;
    private getRowItems;
    setRerollCost(rerollCost: number): void;
    updateCostText(): void;
    updateRerollCostText(): void;
    updateLockRaritiesText(): void;
    clear(): void;
    eraseCursor(): void;
  }
  class ModifierOption {
    modifierTypeOption: ModifierTypeOption;
    private pb;
    private pbTint;
    private itemContainer;
    private item;
    private itemTint;
    private itemText;
    private itemCostText;
    constructor(scene: BattleScene, x: number, y: number, modifierTypeOption: ModifierTypeOption);
    setup(): void;
    show(remainingDuration: number, upgradeCountOffset: number): void;
    getPbAtlasKey(tierOffset?: number): string;
    updateCostText(): void;
  }
}
declare module 'src/ui/save-slot-select-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Button} from 'src/enums/buttons';
  import MessageUiHandler from 'src/ui/message-ui-handler';
  export enum SaveSlotUiMode {
    LOAD = 0,
    SAVE = 1,
  }
  export type SaveSlotSelectCallback = (cursor: number) => void;
  export default class SaveSlotSelectUiHandler extends MessageUiHandler {
    private saveSlotSelectContainer;
    private sessionSlotsContainer;
    private saveSlotSelectMessageBox;
    private saveSlotSelectMessageBoxContainer;
    private sessionSlots;
    private uiMode;
    private saveSlotSelectCallback;
    private scrollCursor;
    private cursorObj;
    private sessionSlotsContainerInitialY;
    constructor(scene: BattleScene);
    setup(): void;
    show(args: any[]): boolean;
    processInput(button: Button): boolean;
    populateSessionSlots(): void;
    showText(
      text: string,
      delay?: number,
      callback?: Function,
      callbackDelay?: number,
      prompt?: boolean,
      promptDelay?: number
    ): void;
    setCursor(cursor: number): boolean;
    setScrollCursor(scrollCursor: number): boolean;
    clear(): void;
    eraseCursor(): void;
    clearSessionSlots(): void;
  }
}
declare module 'src/data/daily-run' {
  import BattleScene from 'src/battle-scene';
  import {Starter} from 'src/ui/starter-select-ui-handler';
  export interface DailyRunConfig {
    seed: number;
    starters: Starter;
  }
  export function fetchDailyRunSeed(): Promise<string>;
  export function getDailyRunStarters(scene: BattleScene, seed: string): Starter[];
}
declare module 'src/enums/battle-style' {
  /**
   * Determines the selected battle style.
   * - 'Switch' - The option to switch the active pokemon at the start of a battle will be displayed.
   * - 'Set' - The option to switch the active pokemon at the start of a battle will not display.
   */
  export enum BattleStyle {
    SWITCH = 0,
    SET = 1,
  }
}
declare module 'src/enums/exp-notification' {
  /**
   * Determines exp notification style.
   * - Default - the normal exp gain display, nothing changed
   * - Only level up - we display the level up in the small frame instead of a message
   * - Skip - no level up frame nor message
   */
  export enum ExpNotification {
    DEFAULT = 0,
    ONLY_LEVEL_UP = 1,
    SKIP = 2,
  }
}
declare module 'src/phases' {
  import BattleScene from 'src/battle-scene';
  import {default as Pokemon, PlayerPokemon, EnemyPokemon, PokemonMove, DamageResult} from 'src/field/pokemon';
  import {Command} from 'src/ui/command-ui-handler';
  import {Modifier} from 'src/modifier/modifier';
  import {PokeballType} from 'src/data/pokeball';
  import {CommonAnim} from 'src/data/battle-anims';
  import {StatusEffect} from 'src/data/status-effect';
  import {Phase} from 'src/phase';
  import {BattleStat} from 'src/data/battle-stat';
  import {ModifierTier} from 'src/modifier/modifier-tier';
  import {ModifierPoolType, ModifierType, ModifierTypeFunc, ModifierTypeOption} from 'src/modifier/modifier-type';
  import {Starter} from 'src/ui/starter-select-ui-handler';
  import {Weather} from 'src/data/weather';
  import {Unlockables} from 'src/system/unlockables';
  import {BattlerIndex} from 'src/battle';
  import {TrainerSlot} from 'src/data/trainer-config';
  import {GameModes} from 'src/game-mode';
  import PokemonSpecies from 'src/data/pokemon-species';
  import {Abilities} from 'src/enums/abilities';
  import {Biome} from 'src/enums/biome';
  import {Moves} from 'src/enums/moves';
  import {TrainerType} from 'src/enums/trainer-type';
  export class LoginPhase extends Phase {
    private showText;
    constructor(scene: BattleScene, showText?: boolean);
    start(): void;
    end(): void;
  }
  export class TitlePhase extends Phase {
    private loaded;
    private lastSessionData;
    gameMode: GameModes;
    constructor(scene: BattleScene);
    start(): void;
    showOptions(): void;
    loadSaveSlot(slotId: number): void;
    initDailyRun(): void;
    end(): void;
  }
  export class UnavailablePhase extends Phase {
    constructor(scene: BattleScene);
    start(): void;
  }
  export class ReloadSessionPhase extends Phase {
    private systemDataStr;
    constructor(scene: BattleScene, systemDataStr?: string);
    start(): void;
  }
  export class OutdatedPhase extends Phase {
    constructor(scene: BattleScene);
    start(): void;
  }
  export class SelectGenderPhase extends Phase {
    constructor(scene: BattleScene);
    start(): void;
    end(): void;
  }
  export class SelectChallengePhase extends Phase {
    constructor(scene: BattleScene);
    start(): void;
  }
  export class SelectStarterPhase extends Phase {
    constructor(scene: BattleScene);
    start(): void;
    /**
     * Initialize starters before starting the first battle
     * @param starters {@linkcode Pokemon} with which to start the first battle
     */
    initBattle(starters: Starter[]): void;
  }
  export class BattlePhase extends Phase {
    constructor(scene: BattleScene);
    showEnemyTrainer(trainerSlot?: TrainerSlot): void;
    hideEnemyTrainer(): void;
  }
  type PokemonFunc = (pokemon: Pokemon) => void;
  export abstract class FieldPhase extends BattlePhase {
    getOrder(): BattlerIndex[];
    executeForAll(func: PokemonFunc): void;
  }
  export abstract class PokemonPhase extends FieldPhase {
    protected battlerIndex: BattlerIndex | number;
    player: boolean;
    fieldIndex: number;
    constructor(scene: BattleScene, battlerIndex: BattlerIndex | number);
    getPokemon(): Pokemon;
  }
  export abstract class PartyMemberPokemonPhase extends FieldPhase {
    protected partyMemberIndex: number;
    protected fieldIndex: number;
    protected player: boolean;
    constructor(scene: BattleScene, partyMemberIndex: number, player: boolean);
    getParty(): Pokemon[];
    getPokemon(): Pokemon;
  }
  export abstract class PlayerPartyMemberPokemonPhase extends PartyMemberPokemonPhase {
    constructor(scene: BattleScene, partyMemberIndex: number);
    getPlayerPokemon(): PlayerPokemon;
  }
  export abstract class EnemyPartyMemberPokemonPhase extends PartyMemberPokemonPhase {
    constructor(scene: BattleScene, partyMemberIndex: number);
    getEnemyPokemon(): EnemyPokemon;
  }
  export class EncounterPhase extends BattlePhase {
    private loaded;
    constructor(scene: BattleScene, loaded?: boolean);
    start(): void;
    doEncounter(): void;
    getEncounterMessage(): string;
    doEncounterCommon(showEncounterMessage?: boolean): void;
    end(): void;
    tryOverrideForBattleSpec(): boolean;
  }
  export class NextEncounterPhase extends EncounterPhase {
    constructor(scene: BattleScene);
    start(): void;
    doEncounter(): void;
  }
  export class NewBiomeEncounterPhase extends NextEncounterPhase {
    constructor(scene: BattleScene);
    doEncounter(): void;
  }
  export class PostSummonPhase extends PokemonPhase {
    constructor(scene: BattleScene, battlerIndex: BattlerIndex);
    start(): void;
  }
  export class SelectBiomePhase extends BattlePhase {
    constructor(scene: BattleScene);
    start(): void;
    generateNextBiome(): Biome;
  }
  export class SwitchBiomePhase extends BattlePhase {
    private nextBiome;
    constructor(scene: BattleScene, nextBiome: Biome);
    start(): void;
  }
  export class SummonPhase extends PartyMemberPokemonPhase {
    private loaded;
    constructor(scene: BattleScene, fieldIndex: number, player?: boolean, loaded?: boolean);
    start(): void;
    /**
     * Sends out a Pokemon before the battle begins and shows the appropriate messages
     */
    preSummon(): void;
    summon(): void;
    onEnd(): void;
    queuePostSummon(): void;
    end(): void;
  }
  export class SwitchSummonPhase extends SummonPhase {
    private slotIndex;
    private doReturn;
    private batonPass;
    private lastPokemon;
    constructor(
      scene: BattleScene,
      fieldIndex: number,
      slotIndex: number,
      doReturn: boolean,
      batonPass: boolean,
      player?: boolean
    );
    start(): void;
    preSummon(): void;
    switchAndSummon(): void;
    onEnd(): void;
    queuePostSummon(): void;
  }
  export class ReturnPhase extends SwitchSummonPhase {
    constructor(scene: BattleScene, fieldIndex: number);
    switchAndSummon(): void;
    summon(): void;
    onEnd(): void;
  }
  export class ShowTrainerPhase extends BattlePhase {
    constructor(scene: BattleScene);
    start(): void;
  }
  export class ToggleDoublePositionPhase extends BattlePhase {
    private double;
    constructor(scene: BattleScene, double: boolean);
    start(): void;
  }
  export class CheckSwitchPhase extends BattlePhase {
    protected fieldIndex: number;
    protected useName: boolean;
    constructor(scene: BattleScene, fieldIndex: number, useName: boolean);
    start(): void;
  }
  export class SummonMissingPhase extends SummonPhase {
    constructor(scene: BattleScene, fieldIndex: number);
    preSummon(): void;
  }
  export class LevelCapPhase extends FieldPhase {
    constructor(scene: BattleScene);
    start(): void;
  }
  export class TurnInitPhase extends FieldPhase {
    constructor(scene: BattleScene);
    start(): void;
  }
  export class CommandPhase extends FieldPhase {
    protected fieldIndex: number;
    constructor(scene: BattleScene, fieldIndex: number);
    start(): void;
    handleCommand(command: Command, cursor: number, ...args: any[]): boolean;
    cancel(): void;
    checkFightOverride(): boolean;
    getFieldIndex(): number;
    getPokemon(): PlayerPokemon;
    end(): void;
  }
  export class EnemyCommandPhase extends FieldPhase {
    protected fieldIndex: number;
    constructor(scene: BattleScene, fieldIndex: number);
    start(): void;
  }
  export class SelectTargetPhase extends PokemonPhase {
    constructor(scene: BattleScene, fieldIndex: number);
    start(): void;
  }
  export class TurnStartPhase extends FieldPhase {
    constructor(scene: BattleScene);
    start(): void;
  }
  /** The phase after attacks where the pokemon eat berries */
  export class BerryPhase extends FieldPhase {
    start(): void;
  }
  export class TurnEndPhase extends FieldPhase {
    constructor(scene: BattleScene);
    start(): void;
  }
  export class BattleEndPhase extends BattlePhase {
    start(): void;
  }
  export class NewBattlePhase extends BattlePhase {
    start(): void;
  }
  export class CommonAnimPhase extends PokemonPhase {
    private anim;
    private targetIndex;
    constructor(scene: BattleScene, battlerIndex: BattlerIndex, targetIndex: BattlerIndex, anim: CommonAnim);
    setAnimation(anim: CommonAnim): void;
    start(): void;
  }
  export class MovePhase extends BattlePhase {
    pokemon: Pokemon;
    move: PokemonMove;
    targets: BattlerIndex[];
    protected followUp: boolean;
    protected ignorePp: boolean;
    protected failed: boolean;
    protected cancelled: boolean;
    constructor(
      scene: BattleScene,
      pokemon: Pokemon,
      targets: BattlerIndex[],
      move: PokemonMove,
      followUp?: boolean,
      ignorePp?: boolean
    );
    canMove(): boolean;
    /**Signifies the current move should fail but still use PP */
    fail(): void;
    /**Signifies the current move should cancel and retain PP */
    cancel(): void;
    start(): void;
    getEffectPhase(): MoveEffectPhase;
    showMoveText(): void;
    showFailedText(failedText?: string): void;
    end(): void;
  }
  export class MoveEffectPhase extends PokemonPhase {
    move: PokemonMove;
    protected targets: BattlerIndex[];
    constructor(scene: BattleScene, battlerIndex: BattlerIndex, targets: BattlerIndex[], move: PokemonMove);
    start(): void;
    end(): void;
    hitCheck(target: Pokemon): boolean;
    getUserPokemon(): Pokemon;
    getTargets(): Pokemon[];
    getTarget(): Pokemon;
    removeTarget(target: Pokemon): void;
    stopMultiHit(target?: Pokemon): void;
    getNewHitPhase(): MoveEffectPhase;
  }
  export class MoveEndPhase extends PokemonPhase {
    constructor(scene: BattleScene, battlerIndex: BattlerIndex);
    start(): void;
  }
  export class MoveAnimTestPhase extends BattlePhase {
    private moveQueue;
    constructor(scene: BattleScene, moveQueue?: Moves[]);
    start(): void;
    playMoveAnim(moveQueue: Moves[], player: boolean): void;
  }
  export class ShowAbilityPhase extends PokemonPhase {
    private passive;
    constructor(scene: BattleScene, battlerIndex: BattlerIndex, passive?: boolean);
    start(): void;
  }
  export class StatChangePhase extends PokemonPhase {
    private stats;
    private selfTarget;
    private levels;
    private showMessage;
    private ignoreAbilities;
    private canBeCopied;
    constructor(
      scene: BattleScene,
      battlerIndex: BattlerIndex,
      selfTarget: boolean,
      stats: BattleStat[],
      levels: number,
      showMessage?: boolean,
      ignoreAbilities?: boolean,
      canBeCopied?: boolean
    );
    start(): void;
    getRandomStat(): BattleStat;
    aggregateStatChanges(random?: boolean): void;
    getStatChangeMessages(stats: BattleStat[], levels: number, relLevels: number[]): string[];
  }
  export class WeatherEffectPhase extends CommonAnimPhase {
    weather: Weather;
    constructor(scene: BattleScene);
    start(): void;
  }
  export class ObtainStatusEffectPhase extends PokemonPhase {
    private statusEffect;
    private cureTurn;
    private sourceText;
    private sourcePokemon;
    constructor(
      scene: BattleScene,
      battlerIndex: BattlerIndex,
      statusEffect: StatusEffect,
      cureTurn?: number,
      sourceText?: string,
      sourcePokemon?: Pokemon
    );
    start(): void;
  }
  export class PostTurnStatusEffectPhase extends PokemonPhase {
    constructor(scene: BattleScene, battlerIndex: BattlerIndex);
    start(): void;
  }
  export class MessagePhase extends Phase {
    private text;
    private callbackDelay;
    private prompt;
    private promptDelay;
    constructor(scene: BattleScene, text: string, callbackDelay?: number, prompt?: boolean, promptDelay?: number);
    start(): void;
    end(): void;
  }
  export class DamagePhase extends PokemonPhase {
    private amount;
    private damageResult;
    private critical;
    constructor(
      scene: BattleScene,
      battlerIndex: BattlerIndex,
      amount: number,
      damageResult?: DamageResult,
      critical?: boolean
    );
    start(): void;
    updateAmount(amount: number): void;
    applyDamage(): void;
    end(): void;
  }
  export class FaintPhase extends PokemonPhase {
    private preventEndure;
    constructor(scene: BattleScene, battlerIndex: BattlerIndex, preventEndure?: boolean);
    start(): void;
    doFaint(): void;
    tryOverrideForBattleSpec(): boolean;
  }
  export class VictoryPhase extends PokemonPhase {
    constructor(scene: BattleScene, battlerIndex: BattlerIndex);
    start(): void;
  }
  export class TrainerVictoryPhase extends BattlePhase {
    constructor(scene: BattleScene);
    start(): void;
  }
  export class MoneyRewardPhase extends BattlePhase {
    private moneyMultiplier;
    constructor(scene: BattleScene, moneyMultiplier: number);
    start(): void;
  }
  export class ModifierRewardPhase extends BattlePhase {
    protected modifierType: ModifierType;
    constructor(scene: BattleScene, modifierTypeFunc: ModifierTypeFunc);
    start(): void;
    doReward(): Promise<void>;
  }
  export class GameOverModifierRewardPhase extends ModifierRewardPhase {
    constructor(scene: BattleScene, modifierTypeFunc: ModifierTypeFunc);
    doReward(): Promise<void>;
  }
  export class RibbonModifierRewardPhase extends ModifierRewardPhase {
    private species;
    constructor(scene: BattleScene, modifierTypeFunc: ModifierTypeFunc, species: PokemonSpecies);
    doReward(): Promise<void>;
  }
  export class GameOverPhase extends BattlePhase {
    private victory;
    private firstRibbons;
    constructor(scene: BattleScene, victory?: boolean);
    start(): void;
    handleGameOver(): void;
    handleUnlocks(): void;
    awardRibbon(pokemon: Pokemon, forStarter?: boolean): void;
  }
  export class EndCardPhase extends Phase {
    endCard: any;
    text: any;
    constructor(scene: BattleScene);
    start(): void;
  }
  export class UnlockPhase extends Phase {
    private unlockable;
    constructor(scene: BattleScene, unlockable: Unlockables);
    start(): void;
  }
  export class PostGameOverPhase extends Phase {
    private endCardPhase;
    constructor(scene: BattleScene, endCardPhase: EndCardPhase);
    start(): void;
  }
  export class SwitchPhase extends BattlePhase {
    protected fieldIndex: number;
    private isModal;
    private doReturn;
    constructor(scene: BattleScene, fieldIndex: number, isModal: boolean, doReturn: boolean);
    start(): void;
  }
  export class ExpPhase extends PlayerPartyMemberPokemonPhase {
    private expValue;
    constructor(scene: BattleScene, partyMemberIndex: number, expValue: number);
    start(): void;
  }
  export class ShowPartyExpBarPhase extends PlayerPartyMemberPokemonPhase {
    private expValue;
    constructor(scene: BattleScene, partyMemberIndex: number, expValue: number);
    start(): void;
  }
  export class HidePartyExpBarPhase extends BattlePhase {
    constructor(scene: BattleScene);
    start(): void;
  }
  export class LevelUpPhase extends PlayerPartyMemberPokemonPhase {
    private lastLevel;
    private level;
    constructor(scene: BattleScene, partyMemberIndex: number, lastLevel: number, level: number);
    start(): void;
  }
  export class LearnMovePhase extends PlayerPartyMemberPokemonPhase {
    private moveId;
    constructor(scene: BattleScene, partyMemberIndex: number, moveId: Moves);
    start(): void;
  }
  export class PokemonHealPhase extends CommonAnimPhase {
    private hpHealed;
    private message;
    private showFullHpMessage;
    private skipAnim;
    private revive;
    private healStatus;
    private preventFullHeal;
    constructor(
      scene: BattleScene,
      battlerIndex: BattlerIndex,
      hpHealed: number,
      message: string,
      showFullHpMessage: boolean,
      skipAnim?: boolean,
      revive?: boolean,
      healStatus?: boolean,
      preventFullHeal?: boolean
    );
    start(): void;
    end(): void;
  }
  export class AttemptCapturePhase extends PokemonPhase {
    private pokeballType;
    private pokeball;
    private originalY;
    constructor(scene: BattleScene, targetIndex: number, pokeballType: PokeballType);
    start(): void;
    failCatch(shakeCount: number): void;
    catch(): void;
    removePb(): void;
  }
  export class AttemptRunPhase extends PokemonPhase {
    constructor(scene: BattleScene, fieldIndex: number);
    start(): void;
  }
  export class SelectModifierPhase extends BattlePhase {
    private rerollCount;
    private modifierTiers;
    constructor(scene: BattleScene, rerollCount?: number, modifierTiers?: ModifierTier[]);
    start(): void;
    updateSeed(): void;
    isPlayer(): boolean;
    getRerollCost(typeOptions: ModifierTypeOption[], lockRarities: boolean): number;
    getPoolType(): ModifierPoolType;
    getModifierTypeOptions(modifierCount: number): ModifierTypeOption[];
    addModifier(modifier: Modifier): Promise<boolean>;
  }
  export class EggLapsePhase extends Phase {
    constructor(scene: BattleScene);
    start(): void;
  }
  export class AddEnemyBuffModifierPhase extends Phase {
    constructor(scene: BattleScene);
    start(): void;
  }
  /**
   * Cures the party of all non-volatile status conditions, shows a message
   * @param {BattleScene} scene The current scene
   * @param {Pokemon} user The user of the move that cures the party
   * @param {string} message The message that should be displayed
   * @param {Abilities} abilityCondition Pokemon with this ability will not be affected ie. Soundproof
   */
  export class PartyStatusCurePhase extends BattlePhase {
    private user;
    private message;
    private abilityCondition;
    constructor(scene: BattleScene, user: Pokemon, message: string, abilityCondition: Abilities);
    start(): void;
  }
  export class PartyHealPhase extends BattlePhase {
    private resumeBgm;
    constructor(scene: BattleScene, resumeBgm: boolean);
    start(): void;
  }
  export class ShinySparklePhase extends PokemonPhase {
    constructor(scene: BattleScene, battlerIndex: BattlerIndex);
    start(): void;
  }
  export class ScanIvsPhase extends PokemonPhase {
    private shownIvs;
    constructor(scene: BattleScene, battlerIndex: BattlerIndex, shownIvs: number);
    start(): void;
  }
  export class TrainerMessageTestPhase extends BattlePhase {
    private trainerTypes;
    constructor(scene: BattleScene, ...trainerTypes: TrainerType[]);
    start(): void;
  }
  export class TestMessagePhase extends MessagePhase {
    constructor(scene: BattleScene, message: string);
  }
}
declare module 'src/ui/command-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import UiHandler from 'src/ui/ui-handler';
  import {Button} from 'src/enums/buttons';
  export enum Command {
    FIGHT = 0,
    BALL = 1,
    POKEMON = 2,
    RUN = 3,
  }
  export default class CommandUiHandler extends UiHandler {
    private commandsContainer;
    private cursorObj;
    protected fieldIndex: number;
    protected cursor2: number;
    constructor(scene: BattleScene);
    setup(): void;
    show(args: any[]): boolean;
    processInput(button: Button): boolean;
    getCursor(): number;
    setCursor(cursor: number): boolean;
    clear(): void;
    eraseCursor(): void;
  }
}
declare module 'src/ui/fight-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import UiHandler from 'src/ui/ui-handler';
  import {Button} from 'src/enums/buttons';
  export default class FightUiHandler extends UiHandler {
    private movesContainer;
    private moveInfoContainer;
    private typeIcon;
    private ppLabel;
    private ppText;
    private powerLabel;
    private powerText;
    private accuracyLabel;
    private accuracyText;
    private cursorObj;
    private moveCategoryIcon;
    protected fieldIndex: number;
    protected cursor2: number;
    constructor(scene: BattleScene);
    setup(): void;
    show(args: any[]): boolean;
    processInput(button: Button): boolean;
    getCursor(): number;
    setCursor(cursor: number): boolean;
    /**
     * Gets multiplier text for a pokemon's move against a specific opponent
     * Returns undefined if it's a status move
     */
    private getEffectivenessText;
    displayMoves(): void;
    /**
     * Returns a specific move's color based on its type effectiveness against opponents
     * If there are multiple opponents, the highest effectiveness' color is returned
     * @returns A color or undefined if the default color should be used
     */
    private getMoveColor;
    clear(): void;
    clearMoves(): void;
    eraseCursor(): void;
  }
}
declare module 'src/ui/ball-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import UiHandler from 'src/ui/ui-handler';
  import {Button} from 'src/enums/buttons';
  export default class BallUiHandler extends UiHandler {
    private pokeballSelectContainer;
    private pokeballSelectBg;
    private countsText;
    private cursorObj;
    constructor(scene: BattleScene);
    setup(): void;
    show(args: any[]): boolean;
    processInput(button: Button): boolean;
    updateCounts(): void;
    setCursor(cursor: number): boolean;
    clear(): void;
    eraseCursor(): void;
  }
}
declare module 'src/ui/target-select-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import UiHandler from 'src/ui/ui-handler';
  import {Button} from 'src/enums/buttons';
  export type TargetSelectCallback = (cursor: number) => void;
  export default class TargetSelectUiHandler extends UiHandler {
    private fieldIndex;
    private move;
    private targetSelectCallback;
    private targets;
    private targetFlashTween;
    private targetBattleInfoMoveTween;
    constructor(scene: BattleScene);
    setup(): void;
    show(args: any[]): boolean;
    processInput(button: Button): boolean;
    setCursor(cursor: number): boolean;
    eraseCursor(): void;
    clear(): void;
  }
}
declare module 'src/ui/challenges-select-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import UiHandler from 'src/ui/ui-handler';
  import {Button} from 'src/enums/buttons';
  import {Challenge} from 'src/data/challenge';
  /**
   * Handles all the UI for choosing optional challenges.
   */
  export default class GameChallengesUiHandler extends UiHandler {
    private challengesContainer;
    private valuesContainer;
    private scrollCursor;
    private optionsBg;
    private descriptionText;
    private challengeLabels;
    private cursorObj;
    private startCursor;
    constructor(scene: BattleScene, mode?: Mode);
    setup(): void;
    /**
     * Adds the default text color to the description text
     * @param text text to set to the BBCode description
     */
    setDescription(text: string): void;
    /**
     * initLabels
     * init all challenge labels
     */
    initLabels(): void;
    /**
     * update the text the cursor is on
     */
    updateText(): void;
    show(args: any[]): boolean;
    /**
     * Processes input from a specified button.
     * This method handles navigation through a UI menu, including movement through menu items
     * and handling special actions like cancellation. Each button press may adjust the cursor
     * position or the menu scroll, and plays a sound effect if the action was successful.
     *
     * @param button - The button pressed by the user.
     * @returns `true` if the action associated with the button was successfully processed, `false` otherwise.
     */
    processInput(button: Button): boolean;
    setCursor(cursor: number): boolean;
    setScrollCursor(scrollCursor: number): boolean;
    getActiveChallenge(): Challenge;
    clear(): void;
    eraseCursor(): void;
  }
}
declare module 'src/ui/achv-bar' {
  import BattleScene from 'src/battle-scene';
  import {Achv} from 'src/system/achv';
  import {Voucher} from 'src/system/voucher';
  import {PlayerGender} from 'src/enums/player-gender';
  export default class AchvBar {
    private defaultWidth;
    private defaultHeight;
    private bg;
    private icon;
    private titleText;
    private scoreText;
    private descriptionText;
    private queue;
    private playerGender;
    shown: boolean;
    constructor(scene: BattleScene);
    setup(): void;
    showAchv(achv: Achv | Voucher): void;
    protected hide(playerGender: PlayerGender): void;
  }
}
declare module 'src/ui/bgm-bar' {
  import BattleScene from 'src/battle-scene';
  export default class BgmBar {
    private defaultWidth;
    private defaultHeight;
    private bg;
    private musicText;
    private noteText;
    private tween;
    private autoHideTimer;
    private queue;
    shown: boolean;
    constructor(scene: BattleScene);
    setup(): void;
    setBgmToBgmBar(bgmName: string): void;
    toggleBgmBar(visible: boolean): void;
    getRealBgmName(bgmName: string): string;
  }
}
declare module 'src/ui/menu-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import MessageUiHandler from 'src/ui/message-ui-handler';
  import {OptionSelectConfig} from 'src/ui/abstact-option-select-ui-handler';
  import {Button} from 'src/enums/buttons';
  import BgmBar from 'src/ui/bgm-bar';
  enum MenuOptions {
    GAME_SETTINGS = 0,
    ACHIEVEMENTS = 1,
    STATS = 2,
    VOUCHERS = 3,
    EGG_LIST = 4,
    EGG_GACHA = 5,
    MANAGE_DATA = 6,
    COMMUNITY = 7,
    SAVE_AND_QUIT = 8,
    LOG_OUT = 9,
  }
  export default class MenuUiHandler extends MessageUiHandler {
    private menuContainer;
    private menuMessageBoxContainer;
    private menuOverlay;
    private menuBg;
    protected optionSelectText: any;
    private cursorObj;
    protected ignoredMenuOptions: MenuOptions[];
    protected menuOptions: MenuOptions[];
    protected manageDataConfig: OptionSelectConfig;
    protected communityConfig: OptionSelectConfig;
    bgmBar: BgmBar;
    constructor(scene: BattleScene, mode?: Mode);
    setup(): void;
    show(args: any[]): boolean;
    processInput(button: Button): boolean;
    showText(
      text: string,
      delay?: number,
      callback?: Function,
      callbackDelay?: number,
      prompt?: boolean,
      promptDelay?: number
    ): void;
    setCursor(cursor: number): boolean;
    clear(): void;
    eraseCursor(): void;
  }
}
declare module 'src/ui/achvs-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Button} from 'src/enums/buttons';
  import {Achv} from 'src/system/achv';
  import MessageUiHandler from 'src/ui/message-ui-handler';
  import {Mode} from 'src/ui/ui';
  export default class AchvsUiHandler extends MessageUiHandler {
    private achvsContainer;
    private achvIconsContainer;
    private achvIconsBg;
    private achvIcons;
    private titleText;
    private scoreText;
    private unlockText;
    private cursorObj;
    constructor(scene: BattleScene, mode?: Mode);
    setup(): void;
    show(args: any[]): boolean;
    protected showAchv(achv: Achv): void;
    processInput(button: Button): boolean;
    setCursor(cursor: number): boolean;
    clear(): void;
    eraseCursor(): void;
  }
}
declare module 'src/ui/settings/option-select-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import AbstractOptionSelectUiHandler from 'src/ui/abstact-option-select-ui-handler';
  import {Mode} from 'src/ui/ui';
  export default class OptionSelectUiHandler extends AbstractOptionSelectUiHandler {
    constructor(scene: BattleScene, mode?: Mode);
    getWindowWidth(): number;
  }
}
declare module 'src/ui/egg-list-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import MessageUiHandler from 'src/ui/message-ui-handler';
  import {Egg} from 'src/data/egg';
  import {Button} from 'src/enums/buttons';
  export default class EggListUiHandler extends MessageUiHandler {
    private eggListContainer;
    private eggListIconContainer;
    private eggSprite;
    private eggNameText;
    private eggDateText;
    private eggHatchWavesText;
    private eggGachaInfoText;
    private eggListMessageBoxContainer;
    private cursorObj;
    private iconAnimHandler;
    constructor(scene: BattleScene);
    setup(): void;
    show(args: any[]): boolean;
    processInput(button: Button): boolean;
    setEggDetails(egg: Egg): void;
    setCursor(cursor: number): boolean;
    clear(): void;
  }
}
declare module 'src/enums/gacha-types' {
  export enum GachaType {
    MOVE = 0,
    LEGENDARY = 1,
    SHINY = 2,
  }
}
declare module 'src/ui/egg-gacha-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import MessageUiHandler from 'src/ui/message-ui-handler';
  import {Egg} from 'src/data/egg';
  import {VoucherType} from 'src/system/voucher';
  import {Button} from 'src/enums/buttons';
  import {GachaType} from 'src/enums/gacha-types';
  import {EggTier} from 'src/enums/egg-type';
  export default class EggGachaUiHandler extends MessageUiHandler {
    private eggGachaContainer;
    private eggGachaMessageBox;
    private eggGachaOptionsContainer;
    private eggGachaOptionSelectBg;
    private gachaContainers;
    private gachaKnobs;
    private gachaHatches;
    private gachaInfoContainers;
    private eggGachaOverlay;
    private eggGachaSummaryContainer;
    private voucherCountLabels;
    private gachaCursor;
    private cursorObj;
    private transitioning;
    private transitionCancelled;
    private defaultText;
    constructor(scene: BattleScene);
    setup(): void;
    show(args: any[]): boolean;
    getDelayValue(delay: number): number;
    pull(pullCount?: number, count?: number, eggs?: Egg[]): void;
    getGuaranteedEggTierFromPullCount(pullCount: number): EggTier;
    showSummary(eggs: Egg[]): void;
    hideSummary(): void;
    updateGachaInfo(gachaType: GachaType): void;
    consumeVouchers(voucherType: VoucherType, count: number): void;
    updateVoucherCounts(): void;
    showText(
      text: string,
      delay?: number,
      callback?: Function,
      callbackDelay?: number,
      prompt?: boolean,
      promptDelay?: number
    ): void;
    showError(text: string): void;
    setTransitioning(transitioning: boolean): void;
    processInput(button: Button): boolean;
    setCursor(cursor: number): boolean;
    setGachaCursor(cursor: number): boolean;
    clear(): void;
  }
}
declare module 'src/ui/vouchers-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Button} from 'src/enums/buttons';
  import {Voucher} from 'src/system/voucher';
  import MessageUiHandler from 'src/ui/message-ui-handler';
  import {Mode} from 'src/ui/ui';
  export default class VouchersUiHandler extends MessageUiHandler {
    private vouchersContainer;
    private voucherIconsContainer;
    private voucherIconsBg;
    private voucherIcons;
    private titleText;
    private unlockText;
    private itemsTotal;
    private scrollCursor;
    private cursorObj;
    constructor(scene: BattleScene, mode?: Mode);
    setup(): void;
    show(args: any[]): boolean;
    protected showVoucher(voucher: Voucher): void;
    processInput(button: Button): boolean;
    setCursor(cursor: number): boolean;
    setScrollCursor(scrollCursor: number): boolean;
    updateVoucherIcons(): void;
    clear(): void;
    eraseCursor(): void;
  }
}
declare module 'src/ui/modal-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import UiHandler from 'src/ui/ui-handler';
  import {Button} from 'src/enums/buttons';
  export interface ModalConfig {
    buttonActions: Function[];
  }
  export abstract class ModalUiHandler extends UiHandler {
    protected modalContainer: any;
    protected modalBg: any;
    protected titleText: any;
    protected buttonContainers: any[];
    protected buttonBgs: any[];
    constructor(scene: BattleScene, mode?: Mode);
    abstract getModalTitle(config?: ModalConfig): string;
    abstract getWidth(config?: ModalConfig): number;
    abstract getHeight(config?: ModalConfig): number;
    abstract getMargin(config?: ModalConfig): [number, number, number, number];
    abstract getButtonLabels(config?: ModalConfig): string[];
    getButtonTopMargin(): number;
    setup(): void;
    show(args: any[]): boolean;
    updateContainer(config?: ModalConfig): void;
    processInput(button: Button): boolean;
    clear(): void;
  }
}
declare module 'src/ui/form-modal-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {ModalConfig, ModalUiHandler} from 'src/ui/modal-ui-handler';
  import {Mode} from 'src/ui/ui';
  import {Button} from 'src/enums/buttons';
  export interface FormModalConfig extends ModalConfig {
    errorMessage?: string;
  }
  export abstract class FormModalUiHandler extends ModalUiHandler {
    protected editing: boolean;
    protected inputContainers: any[];
    protected inputs: any[];
    protected errorMessage: any;
    protected submitAction: Function;
    protected tween: any;
    constructor(scene: BattleScene, mode?: Mode);
    abstract getFields(): string[];
    getHeight(config?: ModalConfig): number;
    getReadableErrorMessage(error: string): string;
    setup(): void;
    show(args: any[]): boolean;
    processInput(button: Button): boolean;
    sanitizeInputs(): void;
    updateContainer(config?: ModalConfig): void;
    clear(): void;
  }
}
declare module 'src/ui/login-form-ui-handler' {
  import {FormModalUiHandler} from 'src/ui/form-modal-ui-handler';
  import {ModalConfig} from 'src/ui/modal-ui-handler';
  export default class LoginFormUiHandler extends FormModalUiHandler {
    getModalTitle(config?: ModalConfig): string;
    getFields(config?: ModalConfig): string[];
    getWidth(config?: ModalConfig): number;
    getMargin(config?: ModalConfig): [number, number, number, number];
    getButtonLabels(config?: ModalConfig): string[];
    getReadableErrorMessage(error: string): string;
    show(args: any[]): boolean;
  }
}
declare module 'src/ui/registration-form-ui-handler' {
  import {FormModalUiHandler} from 'src/ui/form-modal-ui-handler';
  import {ModalConfig} from 'src/ui/modal-ui-handler';
  export default class RegistrationFormUiHandler extends FormModalUiHandler {
    getModalTitle(config?: ModalConfig): string;
    getFields(config?: ModalConfig): string[];
    getWidth(config?: ModalConfig): number;
    getMargin(config?: ModalConfig): [number, number, number, number];
    getButtonTopMargin(): number;
    getButtonLabels(config?: ModalConfig): string[];
    getReadableErrorMessage(error: string): string;
    setup(): void;
    show(args: any[]): boolean;
  }
}
declare module 'src/ui/loading-modal-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {ModalUiHandler} from 'src/ui/modal-ui-handler';
  import {Mode} from 'src/ui/ui';
  export default class LoadingModalUiHandler extends ModalUiHandler {
    constructor(scene: BattleScene, mode?: Mode);
    getModalTitle(): string;
    getWidth(): number;
    getHeight(): number;
    getMargin(): [number, number, number, number];
    getButtonLabels(): string[];
    setup(): void;
  }
}
declare module 'src/ui/game-stats-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import UiHandler from 'src/ui/ui-handler';
  import {Button} from 'src/enums/buttons';
  export default class GameStatsUiHandler extends UiHandler {
    private gameStatsContainer;
    private statsContainer;
    private statLabels;
    private statValues;
    constructor(scene: BattleScene, mode?: Mode);
    setup(): void;
    show(args: any[]): boolean;
    updateStats(): void;
    processInput(button: Button): boolean;
    setCursor(cursor: number): boolean;
    clear(): void;
  }
  export function initStatsKeys(): void;
}
declare module 'src/data/splash-messages' {
  export function getBattleCountSplashMessage(): string;
  export function getSplashMessages(): string[];
}
declare module 'src/ui/title-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import OptionSelectUiHandler from 'src/ui/settings/option-select-ui-handler';
  import {Mode} from 'src/ui/ui';
  export default class TitleUiHandler extends OptionSelectUiHandler {
    private titleContainer;
    private playerCountLabel;
    private splashMessage;
    private splashMessageText;
    private eventDisplay;
    private titleStatsTimer;
    constructor(scene: BattleScene, mode?: Mode);
    setup(): void;
    updateTitleStats(): void;
    show(args: any[]): boolean;
    clear(): void;
  }
}
declare module 'src/ui/saving-icon-handler' {
  import BattleScene from 'src/battle-scene';
  export default class SavingIconHandler {
    private icon;
    private animActive;
    private shown;
    constructor(scene: BattleScene);
    setup(): void;
    show(): void;
    hide(): void;
  }
}
declare module 'src/ui/unavailable-modal-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {ModalUiHandler} from 'src/ui/modal-ui-handler';
  import {Mode} from 'src/ui/ui';
  export default class UnavailableModalUiHandler extends ModalUiHandler {
    private reconnectTimer;
    private reconnectDuration;
    private reconnectCallback;
    private readonly minTime;
    private readonly maxTime;
    private readonly randVarianceTime;
    constructor(scene: BattleScene, mode?: Mode);
    getModalTitle(): string;
    getWidth(): number;
    getHeight(): number;
    getMargin(): [number, number, number, number];
    getButtonLabels(): string[];
    setup(): void;
    tryReconnect(): void;
    show(args: any[]): boolean;
  }
}
declare module 'src/ui/outdated-modal-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {ModalUiHandler} from 'src/ui/modal-ui-handler';
  import {Mode} from 'src/ui/ui';
  export default class OutdatedModalUiHandler extends ModalUiHandler {
    constructor(scene: BattleScene, mode?: Mode);
    getModalTitle(): string;
    getWidth(): number;
    getHeight(): number;
    getMargin(): [number, number, number, number];
    getButtonLabels(): string[];
    setup(): void;
    show(args: any[]): boolean;
  }
}
declare module 'src/ui/session-reload-modal-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {ModalUiHandler} from 'src/ui/modal-ui-handler';
  import {Mode} from 'src/ui/ui';
  export default class SessionReloadModalUiHandler extends ModalUiHandler {
    constructor(scene: BattleScene, mode?: Mode);
    getModalTitle(): string;
    getWidth(): number;
    getHeight(): number;
    getMargin(): [number, number, number, number];
    getButtonLabels(): string[];
    setup(): void;
    show(args: any[]): boolean;
  }
}
declare module 'src/ui/settings/abstract-binding-ui-handler' {
  import UiHandler from 'src/ui/ui-handler';
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import {Button} from 'src/enums/buttons';
  /**
   * Abstract class for handling UI elements related to button bindings.
   */
  export default abstract class AbstractBindingUiHandler extends UiHandler {
    protected optionSelectContainer: any;
    protected actionsContainer: any;
    protected titleBg: any;
    protected actionBg: any;
    protected optionSelectBg: any;
    protected unlockText: any;
    protected timerText: any;
    protected swapText: any;
    protected actionLabel: any;
    protected cancelLabel: any;
    protected listening: boolean;
    protected buttonPressed: number | null;
    protected newButtonIcon: any;
    protected targetButtonIcon: any;
    protected cancelFn: (boolean?: any) => boolean;
    abstract swapAction(): boolean;
    protected timeLeftAutoClose: number;
    protected countdownTimer: any;
    protected target: any;
    /**
     * Constructor for the AbstractBindingUiHandler.
     *
     * @param scene - The BattleScene instance.
     * @param mode - The UI mode.
     */
    constructor(scene: BattleScene, mode?: Mode);
    /**
     * Setup UI elements.
     */
    setup(): void;
    manageAutoCloseTimer(): void;
    /**
     * Show the UI with the provided arguments.
     *
     * @param args - Arguments to be passed to the show method.
     * @returns `true` if successful.
     */
    show(args: any[]): boolean;
    /**
     * Get the width of the window.
     *
     * @returns The window width.
     */
    getWindowWidth(): number;
    /**
     * Get the height of the window.
     *
     * @returns The window height.
     */
    getWindowHeight(): number;
    /**
     * Process the input for the given button.
     *
     * @param button - The button to process.
     * @returns `true` if the input was processed successfully.
     */
    processInput(button: Button): boolean;
    /**
     * Set the cursor to the specified position.
     *
     * @param cursor - The cursor position to set.
     * @returns `true` if the cursor was set successfully.
     */
    setCursor(cursor: number): boolean;
    /**
     * Clear the UI elements and state.
     */
    clear(): void;
    /**
     * Handle input down events.
     *
     * @param buttonIcon - The icon of the button that was pressed.
     * @param assignedButtonIcon - The icon of the button that is assigned.
     * @param type - The type of button press.
     */
    onInputDown(buttonIcon: string, assignedButtonIcon: string, type: string): void;
  }
}
declare module 'src/ui/settings/gamepad-binding-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import AbstractBindingUiHandler from 'src/ui/settings/abstract-binding-ui-handler';
  import {Mode} from 'src/ui/ui';
  export default class GamepadBindingUiHandler extends AbstractBindingUiHandler {
    constructor(scene: BattleScene, mode?: Mode);
    setup(): void;
    getSelectedDevice(): any;
    gamepadButtonDown(pad: any, button: any, value: number): void;
    swapAction(): boolean;
    /**
     * Clear the UI elements and state.
     */
    clear(): void;
  }
}
declare module 'src/ui/settings/keyboard-binding-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import AbstractBindingUiHandler from 'src/ui/settings/abstract-binding-ui-handler';
  import {Mode} from 'src/ui/ui';
  export default class KeyboardBindingUiHandler extends AbstractBindingUiHandler {
    constructor(scene: BattleScene, mode?: Mode);
    setup(): void;
    getSelectedDevice(): any;
    onKeyDown(event: any): void;
    swapAction(): boolean;
  }
}
declare module 'src/ui/settings/settings-display-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import AbstractSettingsUiHandler from 'src/ui/settings/abstract-settings-ui-handler';
  export default class SettingsDisplayUiHandler extends AbstractSettingsUiHandler {
    /**
     * Creates an instance of SettingsGamepadUiHandler.
     *
     * @param scene - The BattleScene instance.
     * @param mode - The UI mode, optional.
     */
    constructor(scene: BattleScene, mode?: Mode);
  }
}
declare module 'src/ui/settings/settings-audio-ui-handler' {
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import AbstractSettingsUiHandler from 'src/ui/settings/abstract-settings-ui-handler';
  export default class SettingsAudioUiHandler extends AbstractSettingsUiHandler {
    /**
     * Creates an instance of SettingsAudioUiHandler.
     *
     * @param scene - The BattleScene instance.
     * @param mode - The UI mode, optional.
     */
    constructor(scene: BattleScene, mode?: Mode);
  }
}
declare module 'src/ui/ui' {
  import {default as BattleScene} from 'src/battle-scene';
  import UiHandler from 'src/ui/ui-handler';
  import BattleMessageUiHandler from 'src/ui/battle-message-ui-handler';
  import AchvBar from 'src/ui/achv-bar';
  import SavingIconHandler from 'src/ui/saving-icon-handler';
  import {Button} from 'src/enums/buttons';
  import BgmBar from 'src/ui/bgm-bar';
  export enum Mode {
    MESSAGE = 0,
    TITLE = 1,
    COMMAND = 2,
    FIGHT = 3,
    BALL = 4,
    TARGET_SELECT = 5,
    MODIFIER_SELECT = 6,
    SAVE_SLOT = 7,
    PARTY = 8,
    SUMMARY = 9,
    STARTER_SELECT = 10,
    EVOLUTION_SCENE = 11,
    EGG_HATCH_SCENE = 12,
    CONFIRM = 13,
    OPTION_SELECT = 14,
    MENU = 15,
    MENU_OPTION_SELECT = 16,
    SETTINGS = 17,
    SETTINGS_DISPLAY = 18,
    SETTINGS_AUDIO = 19,
    SETTINGS_GAMEPAD = 20,
    GAMEPAD_BINDING = 21,
    SETTINGS_KEYBOARD = 22,
    KEYBOARD_BINDING = 23,
    ACHIEVEMENTS = 24,
    GAME_STATS = 25,
    VOUCHERS = 26,
    EGG_LIST = 27,
    EGG_GACHA = 28,
    LOGIN_FORM = 29,
    REGISTRATION_FORM = 30,
    LOADING = 31,
    SESSION_RELOAD = 32,
    UNAVAILABLE = 33,
    OUTDATED = 34,
    CHALLENGE_SELECT = 35,
  }
  export default class UI {
    private mode;
    private modeChain;
    handlers: UiHandler[];
    private overlay;
    achvBar: AchvBar;
    bgmBar: BgmBar;
    savingIcon: SavingIconHandler;
    private tooltipContainer;
    private tooltipBg;
    private tooltipTitle;
    private tooltipContent;
    private overlayActive;
    constructor(scene: BattleScene);
    setup(): void;
    private setupTooltip;
    getHandler(): UiHandler;
    getMessageHandler(): BattleMessageUiHandler;
    processInfoButton(pressed: boolean): boolean;
    processInput(button: Button): boolean;
    showText(
      text: string,
      delay?: number,
      callback?: Function,
      callbackDelay?: number,
      prompt?: boolean,
      promptDelay?: number
    ): void;
    showDialogue(
      text: string,
      name: string,
      delay: number,
      callback: Function,
      callbackDelay?: number,
      promptDelay?: number
    ): void;
    shouldSkipDialogue(text: any): boolean;
    showTooltip(title: string, content: string, overlap?: boolean): void;
    hideTooltip(): void;
    update(): void;
    clearText(): void;
    setCursor(cursor: number): boolean;
    playSelect(): void;
    playError(): void;
    fadeOut(duration: number): Promise<void>;
    fadeIn(duration: number): Promise<void>;
    private setModeInternal;
    getMode(): Mode;
    setMode(mode: Mode, ...args: any[]): Promise<void>;
    setModeForceTransition(mode: Mode, ...args: any[]): Promise<void>;
    setModeWithoutClear(mode: Mode, ...args: any[]): Promise<void>;
    setOverlayMode(mode: Mode, ...args: any[]): Promise<void>;
    revertMode(): Promise<boolean>;
    revertModes(): Promise<void>;
  }
}
declare module 'src/system/game-speed' {
  export function initGameSpeed(): void;
}
declare module 'src/ui/ability-bar' {
  import BattleScene from 'src/battle-scene';
  import Pokemon from 'src/field/pokemon';
  export default class AbilityBar {
    private bg;
    private abilityBarText;
    private tween;
    private autoHideTimer;
    shown: boolean;
    constructor(scene: BattleScene);
    setup(): void;
    showAbility(pokemon: Pokemon, passive?: boolean): void;
    hide(): void;
    resetAutoHideTimer(): void;
  }
}
declare module 'src/pipelines/field-sprite' {
  export default class FieldSpritePipeline {
    constructor(game: any, config?: any);
    onPreRender(): void;
    onBind(gameObject: any): void;
    onBatch(gameObject: any): void;
  }
}
declare module 'src/pipelines/sprite' {
  import FieldSpritePipeline from 'src/pipelines/field-sprite';
  export default class SpritePipeline extends FieldSpritePipeline {
    private _tone;
    constructor(game: any);
    onPreRender(): void;
    onBind(gameObject: any): void;
    onBatch(gameObject: any): void;
    batchQuad(
      gameObject: any,
      x0: number,
      y0: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number,
      u0: number,
      v0: number,
      u1: number,
      v1: number,
      tintTL: number,
      tintTR: number,
      tintBL: number,
      tintBR: number,
      tintEffect: number | boolean,
      texture?: any,
      unit?: number
    ): boolean;
    get tone(): number[];
    set tone(value: number[]);
  }
}
declare module 'src/ui/party-exp-bar' {
  import BattleScene from 'src/battle-scene';
  import Pokemon from 'src/field/pokemon';
  export default class PartyExpBar {
    private bg;
    private pokemonIcon;
    private expText;
    private tween;
    shown: boolean;
    constructor(scene: BattleScene);
    setup(): void;
    showPokemonExp(pokemon: Pokemon, expValue: number, showOnlyLevelUp: boolean, newLevel: number): Promise<void>;
    hide(): Promise<void>;
  }
}
declare module 'src/ui/pokeball-tray' {
  import BattleScene from 'src/battle-scene';
  import Pokemon from 'src/field/pokemon';
  export default class PokeballTray {
    private player;
    private bg;
    private balls;
    shown: boolean;
    constructor(scene: BattleScene, player: boolean);
    setup(): void;
    showPbTray(party: Pokemon[]): Promise<void>;
    hide(): Promise<void>;
  }
}
declare module 'src/pipelines/invert' {
  export default class InvertPostFX {
    constructor(game: any);
  }
}
declare module 'src/form-change-phase' {
  import BattleScene from 'src/battle-scene';
  import {SpeciesFormChange} from 'src/data/pokemon-forms';
  import {EvolutionPhase} from 'src/evolution-phase';
  import Pokemon, {PlayerPokemon} from 'src/field/pokemon';
  import {BattlePhase} from 'src/phases';
  export class FormChangePhase extends EvolutionPhase {
    private formChange;
    private modal;
    constructor(scene: BattleScene, pokemon: PlayerPokemon, formChange: SpeciesFormChange, modal: boolean);
    validate(): boolean;
    setMode(): Promise<void>;
    doEvolution(): void;
    end(): void;
  }
  export class QuietFormChangePhase extends BattlePhase {
    protected pokemon: Pokemon;
    protected formChange: SpeciesFormChange;
    constructor(scene: BattleScene, pokemon: Pokemon, formChange: SpeciesFormChange);
    start(): void;
    end(): void;
  }
}
declare module 'src/field/pokemon-sprite-sparkle-handler' {
  import BattleScene from 'src/battle-scene';
  export default class PokemonSpriteSparkleHandler {
    private sprites;
    setup(scene: BattleScene): void;
    onLapse(): void;
    add(sprites: any | any[]): void;
    remove(sprites: any | any[]): void;
    removeAll(): void;
  }
}
declare module 'src/ui/char-sprite' {
  import BattleScene from 'src/battle-scene';
  export default class CharSprite {
    private sprite;
    private transitionSprite;
    key: string;
    variant: string;
    shown: boolean;
    constructor(scene: BattleScene);
    setup(): void;
    showCharacter(key: string, variant: string): Promise<void>;
    setVariant(variant: string): Promise<void>;
    hide(): Promise<void>;
  }
}
declare module 'src/field/damage-number-handler' {
  import Pokemon, {DamageResult, HitResult} from 'src/field/pokemon';
  export default class DamageNumberHandler {
    private damageNumbers;
    constructor();
    add(target: Pokemon, amount: number, result?: DamageResult | HitResult.HEAL, critical?: boolean): void;
  }
}
declare module 'src/ui/candy-bar' {
  import BattleScene from 'src/battle-scene';
  import {Species} from 'src/enums/species';
  export default class CandyBar {
    private bg;
    private candyIcon;
    private candyOverlayIcon;
    private countText;
    private speciesId;
    private tween;
    private autoHideTimer;
    shown: boolean;
    constructor(scene: BattleScene);
    setup(): void;
    showStarterSpeciesCandy(starterSpeciesId: Species, count: number): Promise<void>;
    hide(): Promise<void>;
    resetAutoHideTimer(): void;
  }
}
declare module 'src/ui-inputs' {
  import {InputsController} from 'src/inputs-controller';
  import {Button} from 'src/enums/buttons';
  import BattleScene from 'src/battle-scene';
  type ActionKeys = Record<Button, () => void>;
  export class UiInputs {
    private scene;
    private events;
    private inputsController;
    constructor(scene: BattleScene, inputsController: InputsController);
    init(): void;
    detectInputMethod(evt: any): void;
    listenInputs(): void;
    doVibration(inputSuccess: boolean, vibrationLength: number): void;
    getActionsKeyDown(): ActionKeys;
    getActionsKeyUp(): ActionKeys;
    buttonDirection(direction: Button): void;
    buttonAb(button: Button): void;
    buttonTouch(): void;
    buttonStats(pressed?: boolean): void;
    buttonInfo(pressed?: boolean): void;
    buttonMenu(): void;
    buttonCycleOption(button: Button): void;
    buttonSpeedChange(up?: boolean): void;
  }
}
declare module 'src/ui/time-of-day-widget' {
  /** A small self contained UI element that displays the time of day as an icon */
  export default class TimeOfDayWidget {
    /** An alias for the scene typecast to a {@linkcode BattleScene} */
    private battleScene;
    /** The {@linkcode any} that represents the foreground of the current time of day */
    private readonly timeOfDayIconFgs;
    /** The {@linkcode any} that represents the middle-ground of the current time of day */
    private readonly timeOfDayIconMgs;
    /** The {@linkcode any} that represents the background of the current time of day */
    private readonly timeOfDayIconBgs;
    /** An array containing all timeOfDayIcon objects for easier iteration */
    private timeOfDayIcons;
    /** A map containing all timeOfDayIcon arrays with a matching string key for easier iteration */
    private timeOfDayIconPairs;
    /** The current time of day */
    private currentTime;
    /** The previous time of day */
    private previousTime;
    private readonly onEncounterPhaseEvent;
    private _parentVisible;
    /** Is the parent object visible? */
    get parentVisible(): boolean;
    /** On set, resumes any paused tweens if true */
    set parentVisible(visible: boolean);
    constructor(scene: any, x?: number, y?: number);
    /**
     * Creates a tween animation based on the 'Back' ease algorithm
     * @returns an array of all tweens in the animation
     */
    private getBackTween;
    /**
     * Creates a tween animation based on the 'Bounce' ease algorithm
     * @returns an array of all tweens in the animation
     */
    private getBounceTween;
    /** Resets all icons to the proper depth, texture, and alpha so they are ready to tween */
    private resetIcons;
    /** Adds the proper tween for all icons */
    private tweenTimeOfDayIcon;
    /**
     * Grabs the current time of day from the arena and calls {@linkcode tweenTimeOfDayIcon}
     * @param event {@linkcode Event} being sent
     */
    private onEncounterPhase;
  }
}
declare module 'src/ui/arena-flyout' {
  export default class ArenaFlyout {
    /** An alias for the scene typecast to a {@linkcode BattleScene} */
    private battleScene;
    /** The restricted width of the flyout which should be drawn to */
    private flyoutWidth;
    /** The restricted height of the flyout which should be drawn to */
    private flyoutHeight;
    /** The amount of translation animation on the x-axis */
    private translationX;
    /** The x-axis point where the flyout should sit when activated */
    private anchorX;
    /** The y-axis point where the flyout should sit when activated */
    private anchorY;
    /** The initial container which defines where the flyout should be attached */
    private flyoutParent;
    /** The container which defines the drawable dimensions of the flyout */
    private flyoutContainer;
    /** The background {@linkcode any} window for the flyout */
    private flyoutWindow;
    /** The header {@linkcode any} window for the flyout */
    private flyoutWindowHeader;
    /** The {@linkcode any} that goes inside of the header */
    private flyoutTextHeader;
    private timeOfDayWidget;
    /** The {@linkcode any} header used to indicate the player's effects */
    private flyoutTextHeaderPlayer;
    /** The {@linkcode any} header used to indicate the enemy's effects */
    private flyoutTextHeaderEnemy;
    /** The {@linkcode any} header used to indicate neutral effects */
    private flyoutTextHeaderField;
    /** The {@linkcode any} used to indicate the player's effects */
    private flyoutTextPlayer;
    /** The {@linkcode any} used to indicate the enemy's effects */
    private flyoutTextEnemy;
    /** The {@linkcode any} used to indicate neutral effects */
    private flyoutTextField;
    /** Container for all field effects observed by this object */
    private readonly fieldEffectInfo;
    private readonly onNewArenaEvent;
    private readonly onTurnEndEvent;
    private readonly onFieldEffectChangedEvent;
    constructor(scene: any);
    private onNewArena;
    /** Clears out the current string stored in all arena effect texts */
    private clearText;
    /** Parses through all set Arena Effects and puts them into the proper {@linkcode any} object */
    private updateFieldText;
    /**
     * Parses the {@linkcode Event} being passed and updates the state of the fieldEffectInfo array
     * @param event {@linkcode Event} being sent
     */
    private onFieldEffectChanged;
    /**
     * Iterates through the fieldEffectInfo array and decrements the duration of each item
     * @param event {@linkcode Event} being sent
     */
    private onTurnEnd;
    /**
     * Animates the flyout to either show or hide it by applying a fade and translation
     * @param visible Should the flyout be shown?
     */
    toggleFlyout(visible: boolean): void;
    destroy(fromScene?: boolean): void;
  }
}
declare module 'src/battle-scene' {
  import UI from 'src/ui/ui';
  import {MovePhase} from 'src/phases';
  import Pokemon, {PlayerPokemon, EnemyPokemon} from 'src/field/pokemon';
  import PokemonSpecies, {PokemonSpeciesFilter} from 'src/data/pokemon-species';
  import {Constructor} from 'src/utils';
  import {
    Modifier,
    ModifierBar,
    PersistentModifier,
    PokemonHeldItemModifier,
    ModifierPredicate,
  } from 'src/modifier/modifier';
  import {Phase} from 'src/phase';
  import {Arena, ArenaBase} from 'src/field/arena';
  import {GameData} from 'src/system/game-data';
  import AbilityBar from 'src/ui/ability-bar';
  import Battle, {BattleType} from 'src/battle';
  import {GameMode} from 'src/game-mode';
  import FieldSpritePipeline from 'src/pipelines/field-sprite';
  import SpritePipeline from 'src/pipelines/sprite';
  import PartyExpBar from 'src/ui/party-exp-bar';
  import {TrainerSlot} from 'src/data/trainer-config';
  import Trainer from 'src/field/trainer';
  import TrainerData from 'src/system/trainer-data';
  import PokeballTray from 'src/ui/pokeball-tray';
  import {Achv} from 'src/system/achv';
  import {Voucher} from 'src/system/voucher';
  import {Gender} from 'src/data/gender';
  import PokemonData from 'src/system/pokemon-data';
  import {Nature} from 'src/data/nature';
  import {SpeciesFormChangeTrigger} from 'src/data/pokemon-forms';
  import CharSprite from 'src/ui/char-sprite';
  import DamageNumberHandler from 'src/field/damage-number-handler';
  import PokemonInfoContainer from 'src/ui/pokemon-info-container';
  import {SceneBase} from 'src/scene-base';
  import CandyBar from 'src/ui/candy-bar';
  import {Variant} from 'src/data/variant';
  import {InputsController} from 'src/inputs-controller';
  import {UiInputs} from 'src/ui-inputs';
  import ArenaFlyout from 'src/ui/arena-flyout';
  import {EaseType} from 'src/enums/ease-type';
  import {Biome} from 'src/enums/biome';
  import {ExpNotification} from 'src/enums/exp-notification';
  import {MoneyFormat} from 'src/enums/money-format';
  import {UiTheme} from 'src/enums/ui-theme';
  import {TimedEventManager} from 'src/timed-event-manager';
  export const bypassLogin: boolean;
  export const startingWave: number;
  export let starterColors: StarterColors;
  interface StarterColors {
    [key: string]: [string, string];
  }
  export interface PokeballCounts {
    [pb: string]: number;
  }
  export type AnySound = any | any | any;
  export interface InfoToggle {
    toggleInfo(force?: boolean): void;
    isActive(): boolean;
  }
  export default class BattleScene extends SceneBase {
    rexUI: any;
    inputController: InputsController;
    uiInputs: UiInputs;
    sessionPlayTime: number;
    lastSavePlayTime: number;
    masterVolume: number;
    bgmVolume: number;
    seVolume: number;
    gameSpeed: number;
    damageNumbersMode: number;
    reroll: boolean;
    showMovesetFlyout: boolean;
    showArenaFlyout: boolean;
    showTimeOfDayWidget: boolean;
    timeOfDayAnimation: EaseType;
    showLevelUpStats: boolean;
    enableTutorials: boolean;
    enableMoveInfo: boolean;
    enableRetries: boolean;
    /**
     * Determines the condition for a notification should be shown for Candy Upgrades
     * - 0 = 'Off'
     * - 1 = 'Passives Only'
     * - 2 = 'On'
     */
    candyUpgradeNotification: number;
    /**
     * Determines what type of notification is used for Candy Upgrades
     * - 0 = 'Icon'
     * - 1 = 'Animation'
     */
    candyUpgradeDisplay: number;
    moneyFormat: MoneyFormat;
    uiTheme: UiTheme;
    windowType: number;
    experimentalSprites: boolean;
    musicPreference: number;
    moveAnimations: boolean;
    expGainsSpeed: number;
    skipSeenDialogues: boolean;
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
    expParty: ExpNotification;
    hpBarSpeed: number;
    fusionPaletteSwaps: boolean;
    enableTouchControls: boolean;
    enableVibration: boolean;
    showBgmBar: boolean;
    /**
     * Determines the selected battle style.
     * - 0 = 'Switch'
     * - 1 = 'Set' - The option to switch the active pokemon at the start of a battle will not display.
     */
    battleStyle: number;
    /**
     * Defines whether or not to show type effectiveness hints
     * - true: No hints
     * - false: Show hints for moves
     */
    typeHints: boolean;
    disableMenu: boolean;
    gameData: GameData;
    sessionSlotId: number;
    phaseQueue: Phase[];
    conditionalQueue: Array<[() => boolean, Phase]>;
    private phaseQueuePrepend;
    private phaseQueuePrependSpliceIndex;
    private nextCommandPhaseQueue;
    private currentPhase;
    private standbyPhase;
    field: any;
    fieldUI: any;
    charSprite: CharSprite;
    pbTray: PokeballTray;
    pbTrayEnemy: PokeballTray;
    abilityBar: AbilityBar;
    partyExpBar: PartyExpBar;
    candyBar: CandyBar;
    arenaBg: any;
    arenaBgTransition: any;
    arenaPlayer: ArenaBase;
    arenaPlayerTransition: ArenaBase;
    arenaEnemy: ArenaBase;
    arenaNextEnemy: ArenaBase;
    arena: Arena;
    gameMode: GameMode;
    score: number;
    lockModifierTiers: boolean;
    trainer: any;
    lastEnemyTrainer: Trainer;
    currentBattle: Battle;
    pokeballCounts: PokeballCounts;
    money: number;
    pokemonInfoContainer: PokemonInfoContainer;
    private party;
    /** Combined Biome and Wave count text */
    private biomeWaveText;
    private moneyText;
    private scoreText;
    private luckLabelText;
    private luckText;
    private modifierBar;
    private enemyModifierBar;
    arenaFlyout: ArenaFlyout;
    private fieldOverlay;
    private shopOverlay;
    modifiers: PersistentModifier[];
    private enemyModifiers;
    uiContainer: any;
    ui: UI;
    seed: string;
    waveSeed: string;
    waveCycleOffset: number;
    offsetGym: boolean;
    damageNumberHandler: DamageNumberHandler;
    private spriteSparkleHandler;
    fieldSpritePipeline: FieldSpritePipeline;
    spritePipeline: SpritePipeline;
    private bgm;
    private bgmResumeTimer;
    private bgmCache;
    private playTimeTimer;
    rngCounter: number;
    rngSeedOverride: string;
    rngOffset: number;
    inputMethod: string;
    private infoToggles;
    eventManager: TimedEventManager;
    /**
     * Allows subscribers to listen for events
     *
     * Current Events:
     * - {@linkcode BattleSceneEventType.MOVE_USED} {@linkcode MoveUsedEvent}
     * - {@linkcode BattleSceneEventType.TURN_INIT} {@linkcode TurnInitEvent}
     * - {@linkcode BattleSceneEventType.TURN_END} {@linkcode TurnEndEvent}
     * - {@linkcode BattleSceneEventType.NEW_ARENA} {@linkcode NewArenaEvent}
     */
    readonly eventTarget: EventTarget;
    constructor();
    loadPokemonAtlas(key: string, atlasPath: string, experimental?: boolean): void;
    preload(): Promise<void>;
    create(): void;
    update(): void;
    launchBattle(): void;
    initSession(): void;
    initExpSprites(): Promise<void>;
    initVariantData(): Promise<void>;
    cachedFetch(url: string, init?: RequestInit): Promise<Response>;
    initStarterColors(): Promise<void>;
    hasExpSprite(key: string): boolean;
    getParty(): PlayerPokemon[];
    getPlayerPokemon(): PlayerPokemon;
    /**
     * Returns an array of PlayerPokemon of length 1 or 2 depending on if double battles or not
     * @returns array of {@linkcode PlayerPokemon}
     */
    getPlayerField(): PlayerPokemon[];
    getEnemyParty(): EnemyPokemon[];
    getEnemyPokemon(): EnemyPokemon;
    /**
     * Returns an array of EnemyPokemon of length 1 or 2 depending on if double battles or not
     * @returns array of {@linkcode EnemyPokemon}
     */
    getEnemyField(): EnemyPokemon[];
    getField(activeOnly?: boolean): Pokemon[];
    /**
     * Returns the ModifierBar of this scene, which is declared private and therefore not accessible elsewhere
     * @returns {ModifierBar}
     */
    getModifierBar(): ModifierBar;
    addInfoToggle(infoToggle: InfoToggle): void;
    getInfoToggles(activeOnly?: boolean): InfoToggle[];
    getPokemonById(pokemonId: number): Pokemon;
    addPlayerPokemon(
      species: PokemonSpecies,
      level: number,
      abilityIndex: number,
      formIndex: number,
      gender?: Gender,
      shiny?: boolean,
      variant?: Variant,
      ivs?: number[],
      nature?: Nature,
      dataSource?: Pokemon | PokemonData,
      postProcess?: (playerPokemon: PlayerPokemon) => void
    ): PlayerPokemon;
    addEnemyPokemon(
      species: PokemonSpecies,
      level: number,
      trainerSlot: TrainerSlot,
      boss?: boolean,
      dataSource?: PokemonData,
      postProcess?: (enemyPokemon: EnemyPokemon) => void
    ): EnemyPokemon;
    addPokemonIcon(
      pokemon: Pokemon,
      x: number,
      y: number,
      originX?: number,
      originY?: number,
      ignoreOverride?: boolean
    ): any;
    setSeed(seed: string): void;
    randBattleSeedInt(range: number, min?: number): number;
    reset(clearScene?: boolean, clearData?: boolean, reloadI18n?: boolean): void;
    newBattle(waveIndex?: number, battleType?: BattleType, trainerData?: TrainerData, double?: boolean): Battle;
    newArena(biome: Biome): Arena;
    updateFieldScale(): Promise<void>;
    setFieldScale(scale: number, instant?: boolean): Promise<void>;
    getSpeciesFormIndex(species: PokemonSpecies, gender?: Gender, nature?: Nature, ignoreArena?: boolean): number;
    private getGeneratedOffsetGym;
    private getGeneratedWaveCycleOffset;
    getEncounterBossSegments(waveIndex: number, level: number, species?: PokemonSpecies, forceBoss?: boolean): number;
    trySpreadPokerus(): void;
    resetSeed(waveIndex?: number): void;
    executeWithSeedOffset(func: Function, offset: number, seedOverride?: string): void;
    addFieldSprite(
      x: number,
      y: number,
      texture: string | any,
      frame?: string | number,
      terrainColorRatio?: number
    ): any;
    addPokemonSprite(
      pokemon: Pokemon,
      x: number,
      y: number,
      texture: string | any,
      frame?: string | number,
      hasShadow?: boolean,
      ignoreOverride?: boolean
    ): any;
    initPokemonSprite(sprite: any, pokemon?: Pokemon, hasShadow?: boolean, ignoreOverride?: boolean): any;
    moveBelowOverlay<T>(gameObject: T): void;
    processInfoButton(pressed: boolean): void;
    showFieldOverlay(duration: number): Promise<void>;
    hideFieldOverlay(duration: number): Promise<void>;
    showShopOverlay(duration: number): Promise<void>;
    hideShopOverlay(duration: number): Promise<void>;
    showEnemyModifierBar(): void;
    hideEnemyModifierBar(): void;
    updateBiomeWaveText(): void;
    updateMoneyText(forceVisible?: boolean): void;
    animateMoneyChanged(positiveChange: boolean): void;
    updateScoreText(): void;
    updateAndShowText(duration: number): void;
    hideLuckText(duration: number): void;
    updateUIPositions(): void;
    /**
     * Pushes all {@linkcode any} objects in the top right to the bottom of the canvas
     */
    sendTextToBack(): void;
    addFaintedEnemyScore(enemy: EnemyPokemon): void;
    getMaxExpLevel(ignoreLevelCap?: boolean): number;
    randomSpecies(
      waveIndex: number,
      level: number,
      fromArenaPool?: boolean,
      speciesFilter?: PokemonSpeciesFilter,
      filterAllEvolutions?: boolean
    ): PokemonSpecies;
    generateRandomBiome(waveIndex: number): Biome;
    isBgmPlaying(): boolean;
    playBgm(bgmName?: string, fadeOut?: boolean): void;
    pauseBgm(): boolean;
    resumeBgm(): boolean;
    updateSoundVolume(): void;
    fadeOutBgm(duration?: number, destroy?: boolean): boolean;
    playSound(sound: string | AnySound, config?: object): AnySound;
    playSoundWithoutBgm(soundName: string, pauseDuration?: number): AnySound;
    getBgmLoopPoint(bgmName: string): number;
    toggleInvert(invert: boolean): void;
    getCurrentPhase(): Phase;
    getStandbyPhase(): Phase;
    /**
     * Adds a phase to the conditional queue and ensures it is executed only when the specified condition is met.
     *
     * This method allows deferring the execution of a phase until certain conditions are met, which is useful for handling
     * situations like abilities and entry hazards that depend on specific game states.
     *
     * @param {Phase} phase - The phase to be added to the conditional queue.
     * @param {() => boolean} condition - A function that returns a boolean indicating whether the phase should be executed.
     *
     */
    pushConditionalPhase(phase: Phase, condition: () => boolean): void;
    pushPhase(phase: Phase, defer?: boolean): void;
    unshiftPhase(phase: Phase): void;
    clearPhaseQueue(): void;
    setPhaseQueueSplice(): void;
    clearPhaseQueueSplice(): void;
    shiftPhase(): void;
    overridePhase(phase: Phase): boolean;
    findPhase(phaseFilter: (phase: Phase) => boolean): Phase;
    tryReplacePhase(phaseFilter: (phase: Phase) => boolean, phase: Phase): boolean;
    tryRemovePhase(phaseFilter: (phase: Phase) => boolean): boolean;
    pushMovePhase(movePhase: MovePhase, priorityOverride?: number): void;
    queueMessage(
      message: string,
      callbackDelay?: number,
      prompt?: boolean,
      promptDelay?: number,
      defer?: boolean
    ): void;
    populatePhaseQueue(): void;
    addMoney(amount: number): void;
    getWaveMoneyAmount(moneyMultiplier: number): number;
    addModifier(
      modifier: Modifier,
      ignoreUpdate?: boolean,
      playSound?: boolean,
      virtual?: boolean,
      instant?: boolean
    ): Promise<boolean>;
    addEnemyModifier(modifier: PersistentModifier, ignoreUpdate?: boolean, instant?: boolean): Promise<void>;
    /**
     * Try to transfer a held item to another pokemon.
     * If the recepient already has the maximum amount allowed for this item, the transfer is cancelled.
     * The quantity to transfer is automatically capped at how much the recepient can take before reaching the maximum stack size for the item.
     * A transfer that moves a quantity smaller than what is specified in the transferQuantity parameter is still considered successful.
     * @param itemModifier {@linkcode PokemonHeldItemModifier} item to transfer (represents the whole stack)
     * @param target {@linkcode Pokemon} pokemon recepient in this transfer
     * @param playSound {boolean}
     * @param transferQuantity {@linkcode number} how many items of the stack to transfer. Optional, defaults to 1
     * @param instant {boolean}
     * @param ignoreUpdate {boolean}
     * @returns true if the transfer was successful
     */
    tryTransferHeldItemModifier(
      itemModifier: PokemonHeldItemModifier,
      target: Pokemon,
      playSound: boolean,
      transferQuantity?: number,
      instant?: boolean,
      ignoreUpdate?: boolean
    ): Promise<boolean>;
    removePartyMemberModifiers(partyMemberIndex: number): Promise<void>;
    generateEnemyModifiers(): Promise<void>;
    /**
     * Removes all modifiers from enemy of PersistentModifier type
     */
    clearEnemyModifiers(): void;
    /**
     * Removes all modifiers from enemy of PokemonHeldItemModifier type
     */
    clearEnemyHeldItemModifiers(): void;
    setModifiersVisible(visible: boolean): void;
    updateModifiers(player?: boolean, instant?: boolean): Promise<void>;
    updatePartyForModifiers(party: Pokemon[], instant?: boolean): Promise<void>;
    removeModifier(modifier: PersistentModifier, enemy?: boolean): boolean;
    /**
     * Get all of the modifiers that match `modifierType`
     * @param modifierType The type of modifier to apply; must extend {@linkcode PersistentModifier}
     * @param player Whether to search the player (`true`) or the enemy (`false`); Defaults to `true`
     * @returns the list of all modifiers that matched `modifierType`.
     */
    getModifiers<T extends PersistentModifier>(modifierType: Constructor<T>, player?: boolean): T[];
    findModifiers(modifierFilter: ModifierPredicate, player?: boolean): PersistentModifier[];
    findModifier(modifierFilter: ModifierPredicate, player?: boolean): PersistentModifier;
    applyShuffledModifiers(
      scene: BattleScene,
      modifierType: Constructor<Modifier>,
      player?: boolean,
      ...args: any[]
    ): PersistentModifier[];
    applyModifiers(modifierType: Constructor<Modifier>, player?: boolean, ...args: any[]): PersistentModifier[];
    applyModifiersInternal(modifiers: PersistentModifier[], player: boolean, args: any[]): PersistentModifier[];
    applyModifier(modifierType: Constructor<Modifier>, player?: boolean, ...args: any[]): PersistentModifier;
    triggerPokemonFormChange(
      pokemon: Pokemon,
      formChangeTriggerType: Constructor<SpeciesFormChangeTrigger>,
      delayed?: boolean,
      modal?: boolean
    ): boolean;
    validateAchvs(achvType: Constructor<Achv>, ...args: unknown[]): void;
    validateAchv(achv: Achv, args?: any[]): boolean;
    validateVoucher(voucher: Voucher, args?: any[]): boolean;
    updateGameInfo(): void;
  }
}
declare module 'src/account' {
  export interface UserInfo {
    username: string;
    lastSessionSlot: number;
  }
  export let loggedInUser: UserInfo;
  export const clientSessionId: string;
  export function initLoggedInUser(): void;
  export function updateUserInfo(): Promise<[boolean, number]>;
}
declare module 'src/plugins/cache-busted-loader-plugin' {
  export default class CacheBustedLoaderPlugin {
    constructor(scene: any);
    get manifest(): object;
    set manifest(manifestObj: object);
    addFile(file: any): void;
  }
}
declare module 'src/loading-scene' {
  import {SceneBase} from 'src/scene-base';
  export class LoadingScene extends SceneBase {
    readonly LOAD_EVENTS: any;
    constructor();
    preload(): void;
    loadLoadingScreen(): void;
    get gameHeight(): number;
    get gameWidth(): number;
    create(): Promise<void>;
  }
}
declare module 'src/main' {
  module 'phaser' {
    namespace GameObjects {
      interface Container {
        /**
         * Sets this object's position relative to another object with a given offset
         * @param guideObject {@linkcode any} to base the position off of
         * @param x The relative x position
         * @param y The relative y position
         */
        setPositionRelative(guideObject: any, x: number, y: number): void;
      }
      interface Sprite {
        /**
         * Sets this object's position relative to another object with a given offset
         * @param guideObject {@linkcode any} to base the position off of
         * @param x The relative x position
         * @param y The relative y position
         */
        setPositionRelative(guideObject: any, x: number, y: number): void;
      }
      interface Image {
        /**
         * Sets this object's position relative to another object with a given offset
         * @param guideObject {@linkcode any} to base the position off of
         * @param x The relative x position
         * @param y The relative y position
         */
        setPositionRelative(guideObject: any, x: number, y: number): void;
      }
      interface NineSlice {
        /**
         * Sets this object's position relative to another object with a given offset
         * @param guideObject {@linkcode any} to base the position off of
         * @param x The relative x position
         * @param y The relative y position
         */
        setPositionRelative(guideObject: any, x: number, y: number): void;
      }
      interface Text {
        /**
         * Sets this object's position relative to another object with a given offset
         * @param guideObject {@linkcode any} to base the position off of
         * @param x The relative x position
         * @param y The relative y position
         */
        setPositionRelative(guideObject: any, x: number, y: number): void;
      }
      interface Rectangle {
        /**
         * Sets this object's position relative to another object with a given offset
         * @param guideObject {@linkcode any} to base the position off of
         * @param x The relative x position
         * @param y The relative y position
         */
        setPositionRelative(guideObject: any, x: number, y: number): void;
      }
    }
  }
  let game: any;
  export default game;
}
declare module 'src/timed-event-manager' {
  import BattleScene from 'src/battle-scene';
  export enum EventType {
    SHINY = 0,
  }
  interface TimedEvent {
    name: string;
    eventType: EventType;
    shinyMultiplier?: number;
    startDate: Date;
    endDate: Date;
    bannerFilename?: string;
  }
  export class TimedEventManager {
    constructor();
    isActive(event: TimedEvent): boolean;
    activeEvent(): TimedEvent | undefined;
    isEventActive(): boolean;
    activeEventHasBanner(): boolean;
    getShinyMultiplier(): number;
    getEventBannerFilename(): string;
  }
  export class TimedEventDisplay {
    private event;
    private eventTimerText;
    private banner;
    private bannerShadow;
    private eventTimer;
    constructor(scene: BattleScene, x: number, y: number, event: TimedEvent);
    setup(): void;
    show(): void;
    clear(): void;
    private timeToGo;
    updateCountdown(): void;
  }
}
declare module 'src/utils.test' {}
declare module 'src/data/api-generator.script' {
  export function printPokemon(): Promise<void>;
  export function printAbilities(): Promise<void>;
  export function printMoves(): Promise<void>;
  export function printTmSpecies(): Promise<void>;
}
declare module 'src/enums/color' {
  export enum Color {
    WHITE = '#ffffff',
    OFF_WHITE = '#f8f8f8',
    LIGHT_GREY = '#a0a0a0',
    GREY = '#484848',
    DARK_GREY = '#404040',
    PINK = '#f89890',
    RED = '#e13d3d',
    RED2 = '#e70808',
    REDORANGE = '#d64b00',
    ORANGE = '#f8b050',
    LIGHT_YELLOW = '#e8e8a8',
    YELLOW = '#ccbe00',
    DARK_YELLOW = '#a68e17',
    GREEN = '#78c850',
    BLUE = '#40c8f8',
    COMMON = '#ffffff',
    GREAT = '#3890f8',
    ULTRA = '#f8d038',
    ROGUE = '#d52929',
    MASTER = '#e020c0',
    LUXURY = '#e64a18',
  }
  export enum TypeColor {
    NORMAL = '#ADA594',
    FIGHTING = '#A55239',
    FLYING = '#9CADF7',
    POISON = '#9141CB',
    GROUND = '#AE7A3B',
    ROCK = '#BDA55A',
    BUG = '#ADBD21',
    GHOST = '#6363B5',
    STEEL = '#81A6BE',
    FIRE = '#F75231',
    WATER = '#399CFF',
    GRASS = '#7BCE52',
    ELECTRIC = '#FFC631',
    PSYCHIC = '#EF4179',
    ICE = '#5ACEE7',
    DRAGON = '#7B63E7',
    DARK = '#735A4A',
    FAIRY = '#EF70EF',
  }
  export enum TypeShadow {
    NORMAL = '#574F4A',
    FIGHTING = '#4E637C',
    FLYING = '#4E637C',
    POISON = '#352166',
    GROUND = '#572D1E',
    ROCK = '#5F442D',
    BUG = '#5F5010',
    GHOST = '#323D5B',
    STEEL = '#415C5F',
    FIRE = '#7C1818',
    WATER = '#1C4E80',
    GRASS = '#4F6729',
    ELECTRIC = '#804618',
    PSYCHIC = '#782155',
    ICE = '#2D5C74',
    DRAGON = '#313874',
    DARK = '#392725',
    FAIRY = '#663878',
  }
  export enum ShadowColor {
    GREY = '#636363',
    PURPLE = '#6b5a73',
    LIGHT_GREY = '#d0d0c8',
    BROWN = '#69402a',
    PINK = '#fca2a2',
    BRIGHT_RED = '#f83018',
    RED = '#984038',
    MAROON = '#632929',
    GREEN = '#306850',
    BLUE = '#006090',
    LIGHT_YELLOW = '#ded6b5',
    YELLOW = '#ebd773',
    DARK_YELLOW = '#a0a060',
    ORANGE = '#c07800',
    LIGHT_ORANGE = '#ffbd73',
  }
}
declare module 'src/enums/egg-source-types' {
  export enum EggSourceType {
    GACHA_MOVE = 0,
    GACHA_LEGENDARY = 1,
    GACHA_SHINY = 2,
    SAME_SPECIES_EGG = 3,
    EVENT = 4,
  }
}
declare module 'src/enums/variant-tier' {
  export enum VariantTier {
    STANDARD = 0,
    RARE = 1,
    EPIC = 2,
  }
}
declare module 'src/locales/de/ability-trigger' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const abilityTriggers: SimpleTranslationEntries;
}
declare module 'src/locales/de/ability' {
  import {AbilityTranslationEntries} from 'src/interfaces/locales';
  export const ability: AbilityTranslationEntries;
}
declare module 'src/locales/de/achv' {
  import {AchievementTranslationEntries} from 'src/interfaces/locales';
  export const PGMachv: AchievementTranslationEntries;
  export const PGFachv: AchievementTranslationEntries;
}
declare module 'src/locales/de/battle-message-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battleMessageUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/de/battle' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battle: SimpleTranslationEntries;
}
declare module 'src/locales/de/berry' {
  import {BerryTranslationEntries} from 'src/interfaces/locales';
  export const berry: BerryTranslationEntries;
}
declare module 'src/locales/de/bgm-name' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const bgmName: SimpleTranslationEntries;
}
declare module 'src/locales/de/biome' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const biome: SimpleTranslationEntries;
}
declare module 'src/locales/de/challenges' {
  import {TranslationEntries} from 'src/interfaces/locales';
  export const challenges: TranslationEntries;
}
declare module 'src/locales/de/command-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const commandUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/de/common' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const common: SimpleTranslationEntries;
}
declare module 'src/locales/de/dialogue' {
  import {DialogueTranslationEntries, SimpleTranslationEntries} from 'src/interfaces/locales';
  export const PGMdialogue: DialogueTranslationEntries;
  export const PGFdialogue: DialogueTranslationEntries;
  export const PGMbattleSpecDialogue: SimpleTranslationEntries;
  export const PGFbattleSpecDialogue: SimpleTranslationEntries;
  export const PGMmiscDialogue: SimpleTranslationEntries;
  export const PGFmiscDialogue: SimpleTranslationEntries;
  export const PGMdoubleBattleDialogue: DialogueTranslationEntries;
  export const PGFdoubleBattleDialogue: DialogueTranslationEntries;
}
declare module 'src/locales/de/egg' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const egg: SimpleTranslationEntries;
}
declare module 'src/locales/de/fight-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const fightUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/de/game-mode' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameMode: SimpleTranslationEntries;
}
declare module 'src/locales/de/game-stats-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameStatsUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/de/growth' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const growth: SimpleTranslationEntries;
}
declare module 'src/locales/de/menu' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const menu: SimpleTranslationEntries;
}
declare module 'src/locales/de/menu-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const menuUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/de/modifier-type' {
  import {ModifierTypeTranslationEntries} from 'src/interfaces/locales';
  export const modifierType: ModifierTypeTranslationEntries;
}
declare module 'src/locales/de/move' {
  import {MoveTranslationEntries} from 'src/interfaces/locales';
  export const move: MoveTranslationEntries;
}
declare module 'src/locales/de/nature' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const nature: SimpleTranslationEntries;
}
declare module 'src/locales/de/pokeball' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokeball: SimpleTranslationEntries;
}
declare module 'src/locales/de/pokemon' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemon: SimpleTranslationEntries;
}
declare module 'src/locales/de/pokemon-info' {
  import {PokemonInfoTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfo: PokemonInfoTranslationEntries;
}
declare module 'src/locales/de/pokemon-info-container' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfoContainer: SimpleTranslationEntries;
}
declare module 'src/locales/de/save-slot-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const saveSlotSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/de/splash-messages' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const splashMessages: SimpleTranslationEntries;
}
declare module 'src/locales/de/starter-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const starterSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/de/status-effect' {
  import {StatusEffectTranslationEntries} from 'src/interfaces/locales';
  export const statusEffect: StatusEffectTranslationEntries;
}
declare module 'src/locales/de/trainers' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const titles: SimpleTranslationEntries;
  export const trainerClasses: SimpleTranslationEntries;
  export const trainerNames: SimpleTranslationEntries;
}
declare module 'src/locales/de/tutorial' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const tutorial: SimpleTranslationEntries;
}
declare module 'src/locales/de/voucher' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const voucher: SimpleTranslationEntries;
}
declare module 'src/locales/de/weather' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The weather namespace holds text displayed when weather is active during a battle
   */
  export const weather: SimpleTranslationEntries;
}
declare module 'src/locales/de/party-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const partyUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/de/settings' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const settings: SimpleTranslationEntries;
}
declare module 'src/locales/de/modifier-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const modifierSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/de/config' {
  export const deConfig: {
    ability: any;
    abilityTriggers: import('src/interfaces/locales').SimpleTranslationEntries;
    battle: import('src/interfaces/locales').SimpleTranslationEntries;
    battleMessageUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    berry: import('src/interfaces/locales').BerryTranslationEntries;
    bgmName: import('src/interfaces/locales').SimpleTranslationEntries;
    biome: import('src/interfaces/locales').SimpleTranslationEntries;
    challenges: import('src/interfaces/locales').TranslationEntries;
    commandUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    common: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMachv: any;
    PGFachv: any;
    PGMdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGMbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    egg: import('src/interfaces/locales').SimpleTranslationEntries;
    fightUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    gameMode: import('src/interfaces/locales').SimpleTranslationEntries;
    gameStatsUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    growth: import('src/interfaces/locales').SimpleTranslationEntries;
    menu: import('src/interfaces/locales').SimpleTranslationEntries;
    menuUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierType: import('src/interfaces/locales').ModifierTypeTranslationEntries;
    move: import('src/interfaces/locales').MoveTranslationEntries;
    nature: import('src/interfaces/locales').SimpleTranslationEntries;
    pokeball: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemon: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemonInfo: import('src/interfaces/locales').PokemonInfoTranslationEntries;
    pokemonInfoContainer: import('src/interfaces/locales').SimpleTranslationEntries;
    saveSlotSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    settings: any;
    splashMessages: import('src/interfaces/locales').SimpleTranslationEntries;
    starterSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    statusEffect: any;
    titles: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerClasses: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerNames: import('src/interfaces/locales').SimpleTranslationEntries;
    tutorial: import('src/interfaces/locales').SimpleTranslationEntries;
    voucher: import('src/interfaces/locales').SimpleTranslationEntries;
    weather: import('src/interfaces/locales').SimpleTranslationEntries;
    partyUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
  };
}
declare module 'src/locales/en/ability-trigger' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const abilityTriggers: SimpleTranslationEntries;
}
declare module 'src/locales/en/ability' {
  import {AbilityTranslationEntries} from 'src/interfaces/locales';
  export const ability: AbilityTranslationEntries;
}
declare module 'src/locales/en/achv' {
  import {AchievementTranslationEntries} from 'src/interfaces/locales';
  export const PGMachv: AchievementTranslationEntries;
  export const PGFachv: AchievementTranslationEntries;
}
declare module 'src/locales/en/battle-message-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battleMessageUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/en/battle' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battle: SimpleTranslationEntries;
}
declare module 'src/locales/en/berry' {
  import {BerryTranslationEntries} from 'src/interfaces/locales';
  export const berry: BerryTranslationEntries;
}
declare module 'src/locales/en/bgm-name' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const bgmName: SimpleTranslationEntries;
}
declare module 'src/locales/en/biome' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const biome: SimpleTranslationEntries;
}
declare module 'src/locales/en/challenges' {
  import {TranslationEntries} from 'src/interfaces/locales';
  export const challenges: TranslationEntries;
}
declare module 'src/locales/en/command-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const commandUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/en/common' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const common: SimpleTranslationEntries;
}
declare module 'src/locales/en/settings' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const settings: SimpleTranslationEntries;
}
declare module 'src/locales/en/dialogue' {
  import {DialogueTranslationEntries, SimpleTranslationEntries} from 'src/interfaces/locales';
  export const PGMdialogue: DialogueTranslationEntries;
  export const PGFdialogue: DialogueTranslationEntries;
  export const PGMbattleSpecDialogue: SimpleTranslationEntries;
  export const PGFbattleSpecDialogue: SimpleTranslationEntries;
  export const PGMmiscDialogue: SimpleTranslationEntries;
  export const PGFmiscDialogue: SimpleTranslationEntries;
  export const PGMdoubleBattleDialogue: DialogueTranslationEntries;
  export const PGFdoubleBattleDialogue: DialogueTranslationEntries;
}
declare module 'src/locales/en/egg' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const egg: SimpleTranslationEntries;
}
declare module 'src/locales/en/fight-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const fightUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/en/game-mode' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameMode: SimpleTranslationEntries;
}
declare module 'src/locales/en/game-stats-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameStatsUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/en/growth' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const growth: SimpleTranslationEntries;
}
declare module 'src/locales/en/menu' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const menu: SimpleTranslationEntries;
}
declare module 'src/locales/en/menu-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const menuUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/en/modifier-type' {
  import {ModifierTypeTranslationEntries} from 'src/interfaces/locales';
  export const modifierType: ModifierTypeTranslationEntries;
}
declare module 'src/locales/en/move' {
  import {MoveTranslationEntries} from 'src/interfaces/locales';
  export const move: MoveTranslationEntries;
}
declare module 'src/locales/en/nature' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const nature: SimpleTranslationEntries;
}
declare module 'src/locales/en/party-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const partyUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/en/pokeball' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokeball: SimpleTranslationEntries;
}
declare module 'src/locales/en/pokemon' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemon: SimpleTranslationEntries;
}
declare module 'src/locales/en/pokemon-info' {
  import {PokemonInfoTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfo: PokemonInfoTranslationEntries;
}
declare module 'src/locales/en/pokemon-info-container' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfoContainer: SimpleTranslationEntries;
}
declare module 'src/locales/en/save-slot-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const saveSlotSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/en/splash-messages' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const splashMessages: SimpleTranslationEntries;
}
declare module 'src/locales/en/starter-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const starterSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/en/status-effect' {
  import {StatusEffectTranslationEntries} from 'src/interfaces/locales';
  export const statusEffect: StatusEffectTranslationEntries;
}
declare module 'src/locales/en/trainers' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const titles: SimpleTranslationEntries;
  export const trainerClasses: SimpleTranslationEntries;
  export const trainerNames: SimpleTranslationEntries;
}
declare module 'src/locales/en/tutorial' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const tutorial: SimpleTranslationEntries;
}
declare module 'src/locales/en/voucher' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const voucher: SimpleTranslationEntries;
}
declare module 'src/locales/en/weather' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The weather namespace holds text displayed when weather is active during a battle
   */
  export const weather: SimpleTranslationEntries;
}
declare module 'src/locales/en/modifier-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const modifierSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/en/config' {
  export const enConfig: {
    ability: any;
    abilityTriggers: import('src/interfaces/locales').SimpleTranslationEntries;
    battle: import('src/interfaces/locales').SimpleTranslationEntries;
    battleMessageUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    berry: import('src/interfaces/locales').BerryTranslationEntries;
    bgmName: import('src/interfaces/locales').SimpleTranslationEntries;
    biome: import('src/interfaces/locales').SimpleTranslationEntries;
    challenges: any;
    commandUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    common: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMachv: any;
    PGFachv: any;
    PGMdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGMbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    egg: import('src/interfaces/locales').SimpleTranslationEntries;
    fightUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    gameMode: import('src/interfaces/locales').SimpleTranslationEntries;
    gameStatsUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    growth: import('src/interfaces/locales').SimpleTranslationEntries;
    menu: import('src/interfaces/locales').SimpleTranslationEntries;
    menuUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierType: import('src/interfaces/locales').ModifierTypeTranslationEntries;
    move: import('src/interfaces/locales').MoveTranslationEntries;
    nature: import('src/interfaces/locales').SimpleTranslationEntries;
    partyUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    pokeball: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemon: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemonInfo: import('src/interfaces/locales').PokemonInfoTranslationEntries;
    pokemonInfoContainer: import('src/interfaces/locales').SimpleTranslationEntries;
    saveSlotSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    settings: any;
    splashMessages: import('src/interfaces/locales').SimpleTranslationEntries;
    starterSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    statusEffect: any;
    titles: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerClasses: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerNames: import('src/interfaces/locales').SimpleTranslationEntries;
    tutorial: import('src/interfaces/locales').SimpleTranslationEntries;
    voucher: import('src/interfaces/locales').SimpleTranslationEntries;
    weather: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
  };
}
declare module 'src/locales/es/ability-trigger' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const abilityTriggers: SimpleTranslationEntries;
}
declare module 'src/locales/es/ability' {
  import {AbilityTranslationEntries} from 'src/interfaces/locales';
  export const ability: AbilityTranslationEntries;
}
declare module 'src/locales/es/achv' {
  import {AchievementTranslationEntries} from 'src/interfaces/locales';
  export const PGMachv: AchievementTranslationEntries;
  export const PGFachv: AchievementTranslationEntries;
}
declare module 'src/locales/es/battle-message-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battleMessageUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/es/battle' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battle: SimpleTranslationEntries;
}
declare module 'src/locales/es/berry' {
  import {BerryTranslationEntries} from 'src/interfaces/locales';
  export const berry: BerryTranslationEntries;
}
declare module 'src/locales/es/bgm-name' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const bgmName: SimpleTranslationEntries;
}
declare module 'src/locales/es/biome' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const biome: SimpleTranslationEntries;
}
declare module 'src/locales/es/challenges' {
  import {TranslationEntries} from 'src/interfaces/locales';
  export const challenges: TranslationEntries;
}
declare module 'src/locales/es/command-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const commandUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/es/common' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const common: SimpleTranslationEntries;
}
declare module 'src/locales/es/dialogue' {
  import {DialogueTranslationEntries, SimpleTranslationEntries} from 'src/interfaces/locales';
  export const PGMdialogue: DialogueTranslationEntries;
  export const PGFdialogue: DialogueTranslationEntries;
  export const PGMbattleSpecDialogue: SimpleTranslationEntries;
  export const PGFbattleSpecDialogue: SimpleTranslationEntries;
  export const PGMmiscDialogue: SimpleTranslationEntries;
  export const PGFmiscDialogue: SimpleTranslationEntries;
  export const PGMdoubleBattleDialogue: DialogueTranslationEntries;
  export const PGFdoubleBattleDialogue: DialogueTranslationEntries;
}
declare module 'src/locales/es/egg' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const egg: SimpleTranslationEntries;
}
declare module 'src/locales/es/fight-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const fightUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/es/game-mode' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameMode: SimpleTranslationEntries;
}
declare module 'src/locales/es/game-stats-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameStatsUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/es/growth' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const growth: SimpleTranslationEntries;
}
declare module 'src/locales/es/menu' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const menu: SimpleTranslationEntries;
}
declare module 'src/locales/es/menu-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const menuUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/es/modifier-type' {
  import {ModifierTypeTranslationEntries} from 'src/interfaces/locales';
  export const modifierType: ModifierTypeTranslationEntries;
}
declare module 'src/locales/es/move' {
  import {MoveTranslationEntries} from 'src/interfaces/locales';
  export const move: MoveTranslationEntries;
}
declare module 'src/locales/es/nature' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const nature: SimpleTranslationEntries;
}
declare module 'src/locales/es/pokeball' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokeball: SimpleTranslationEntries;
}
declare module 'src/locales/es/pokemon' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemon: SimpleTranslationEntries;
}
declare module 'src/locales/es/pokemon-info' {
  import {PokemonInfoTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfo: PokemonInfoTranslationEntries;
}
declare module 'src/locales/es/pokemon-info-container' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfoContainer: SimpleTranslationEntries;
}
declare module 'src/locales/es/save-slot-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const saveSlotSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/es/splash-messages' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const splashMessages: SimpleTranslationEntries;
}
declare module 'src/locales/es/starter-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const starterSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/es/status-effect' {
  import {StatusEffectTranslationEntries} from 'src/interfaces/locales';
  export const statusEffect: StatusEffectTranslationEntries;
}
declare module 'src/locales/es/trainers' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const titles: SimpleTranslationEntries;
  export const trainerClasses: SimpleTranslationEntries;
  export const trainerNames: SimpleTranslationEntries;
}
declare module 'src/locales/es/tutorial' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const tutorial: SimpleTranslationEntries;
}
declare module 'src/locales/es/voucher' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const voucher: SimpleTranslationEntries;
}
declare module 'src/locales/es/weather' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The weather namespace holds text displayed when weather is active during a battle
   */
  export const weather: SimpleTranslationEntries;
}
declare module 'src/locales/es/party-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const partyUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/es/settings' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const settings: SimpleTranslationEntries;
}
declare module 'src/locales/es/modifier-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const modifierSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/es/config' {
  export const esConfig: {
    ability: any;
    abilityTriggers: import('src/interfaces/locales').SimpleTranslationEntries;
    battle: import('src/interfaces/locales').SimpleTranslationEntries;
    battleMessageUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    berry: import('src/interfaces/locales').BerryTranslationEntries;
    bgmName: import('src/interfaces/locales').SimpleTranslationEntries;
    biome: import('src/interfaces/locales').SimpleTranslationEntries;
    challenges: import('src/interfaces/locales').TranslationEntries;
    commandUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    common: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMachv: any;
    PGFachv: any;
    PGMdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGMbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    egg: import('src/interfaces/locales').SimpleTranslationEntries;
    fightUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    gameMode: import('src/interfaces/locales').SimpleTranslationEntries;
    gameStatsUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    growth: import('src/interfaces/locales').SimpleTranslationEntries;
    menu: import('src/interfaces/locales').SimpleTranslationEntries;
    menuUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierType: import('src/interfaces/locales').ModifierTypeTranslationEntries;
    move: import('src/interfaces/locales').MoveTranslationEntries;
    nature: import('src/interfaces/locales').SimpleTranslationEntries;
    pokeball: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemon: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemonInfo: import('src/interfaces/locales').PokemonInfoTranslationEntries;
    pokemonInfoContainer: import('src/interfaces/locales').SimpleTranslationEntries;
    saveSlotSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    settings: any;
    splashMessages: import('src/interfaces/locales').SimpleTranslationEntries;
    starterSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    statusEffect: any;
    titles: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerClasses: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerNames: import('src/interfaces/locales').SimpleTranslationEntries;
    tutorial: import('src/interfaces/locales').SimpleTranslationEntries;
    voucher: import('src/interfaces/locales').SimpleTranslationEntries;
    weather: import('src/interfaces/locales').SimpleTranslationEntries;
    partyUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
  };
}
declare module 'src/locales/fr/ability-trigger' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const abilityTriggers: SimpleTranslationEntries;
}
declare module 'src/locales/fr/ability' {
  import {AbilityTranslationEntries} from 'src/interfaces/locales';
  export const ability: AbilityTranslationEntries;
}
declare module 'src/locales/fr/achv' {
  import {AchievementTranslationEntries} from 'src/interfaces/locales';
  export const PGMachv: AchievementTranslationEntries;
  export const PGFachv: AchievementTranslationEntries;
}
declare module 'src/locales/fr/battle-message-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battleMessageUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/fr/battle' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battle: SimpleTranslationEntries;
}
declare module 'src/locales/fr/berry' {
  import {BerryTranslationEntries} from 'src/interfaces/locales';
  export const berry: BerryTranslationEntries;
}
declare module 'src/locales/fr/bgm-name' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const bgmName: SimpleTranslationEntries;
}
declare module 'src/locales/fr/biome' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const biome: SimpleTranslationEntries;
}
declare module 'src/locales/fr/challenges' {
  import {TranslationEntries} from 'src/interfaces/locales';
  export const challenges: TranslationEntries;
}
declare module 'src/locales/fr/command-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const commandUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/fr/common' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const common: SimpleTranslationEntries;
}
declare module 'src/locales/fr/dialogue' {
  import {DialogueTranslationEntries, SimpleTranslationEntries} from 'src/interfaces/locales';
  export const PGMdialogue: DialogueTranslationEntries;
  export const PGFdialogue: DialogueTranslationEntries;
  export const PGMbattleSpecDialogue: SimpleTranslationEntries;
  export const PGFbattleSpecDialogue: SimpleTranslationEntries;
  export const PGMmiscDialogue: SimpleTranslationEntries;
  export const PGFmiscDialogue: SimpleTranslationEntries;
  export const PGMdoubleBattleDialogue: DialogueTranslationEntries;
  export const PGFdoubleBattleDialogue: DialogueTranslationEntries;
}
declare module 'src/locales/fr/egg' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const egg: SimpleTranslationEntries;
}
declare module 'src/locales/fr/fight-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const fightUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/fr/game-mode' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameMode: SimpleTranslationEntries;
}
declare module 'src/locales/fr/game-stats-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameStatsUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/fr/growth' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const growth: SimpleTranslationEntries;
}
declare module 'src/locales/fr/menu' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const menu: SimpleTranslationEntries;
}
declare module 'src/locales/fr/menu-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const menuUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/fr/modifier-type' {
  import {ModifierTypeTranslationEntries} from 'src/interfaces/locales';
  export const modifierType: ModifierTypeTranslationEntries;
}
declare module 'src/locales/fr/move' {
  import {MoveTranslationEntries} from 'src/interfaces/locales';
  export const move: MoveTranslationEntries;
}
declare module 'src/locales/fr/nature' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const nature: SimpleTranslationEntries;
}
declare module 'src/locales/fr/pokeball' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokeball: SimpleTranslationEntries;
}
declare module 'src/locales/fr/pokemon' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemon: SimpleTranslationEntries;
}
declare module 'src/locales/fr/pokemon-info' {
  import {PokemonInfoTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfo: PokemonInfoTranslationEntries;
}
declare module 'src/locales/fr/pokemon-info-container' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfoContainer: SimpleTranslationEntries;
}
declare module 'src/locales/fr/save-slot-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const saveSlotSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/fr/splash-messages' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const splashMessages: SimpleTranslationEntries;
}
declare module 'src/locales/fr/starter-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const starterSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/fr/status-effect' {
  import {StatusEffectTranslationEntries} from 'src/interfaces/locales';
  export const statusEffect: StatusEffectTranslationEntries;
}
declare module 'src/locales/fr/trainers' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const titles: SimpleTranslationEntries;
  export const trainerClasses: SimpleTranslationEntries;
  export const trainerNames: SimpleTranslationEntries;
}
declare module 'src/locales/fr/tutorial' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const tutorial: SimpleTranslationEntries;
}
declare module 'src/locales/fr/voucher' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const voucher: SimpleTranslationEntries;
}
declare module 'src/locales/fr/weather' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The weather namespace holds text displayed when weather is active during a battle
   */
  export const weather: SimpleTranslationEntries;
}
declare module 'src/locales/fr/party-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const partyUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/fr/settings' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const settings: SimpleTranslationEntries;
}
declare module 'src/locales/fr/modifier-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const modifierSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/fr/config' {
  export const frConfig: {
    ability: any;
    abilityTriggers: import('src/interfaces/locales').SimpleTranslationEntries;
    battle: import('src/interfaces/locales').SimpleTranslationEntries;
    battleMessageUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    berry: import('src/interfaces/locales').BerryTranslationEntries;
    bgmName: import('src/interfaces/locales').SimpleTranslationEntries;
    biome: import('src/interfaces/locales').SimpleTranslationEntries;
    challenges: import('src/interfaces/locales').TranslationEntries;
    commandUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    common: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMachv: any;
    PGFachv: any;
    PGMdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGMbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    egg: import('src/interfaces/locales').SimpleTranslationEntries;
    fightUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    gameMode: import('src/interfaces/locales').SimpleTranslationEntries;
    gameStatsUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    growth: import('src/interfaces/locales').SimpleTranslationEntries;
    menu: import('src/interfaces/locales').SimpleTranslationEntries;
    menuUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierType: import('src/interfaces/locales').ModifierTypeTranslationEntries;
    move: import('src/interfaces/locales').MoveTranslationEntries;
    nature: import('src/interfaces/locales').SimpleTranslationEntries;
    pokeball: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemon: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemonInfo: import('src/interfaces/locales').PokemonInfoTranslationEntries;
    pokemonInfoContainer: import('src/interfaces/locales').SimpleTranslationEntries;
    saveSlotSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    settings: any;
    splashMessages: import('src/interfaces/locales').SimpleTranslationEntries;
    starterSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    statusEffect: any;
    titles: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerClasses: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerNames: import('src/interfaces/locales').SimpleTranslationEntries;
    tutorial: import('src/interfaces/locales').SimpleTranslationEntries;
    voucher: import('src/interfaces/locales').SimpleTranslationEntries;
    weather: import('src/interfaces/locales').SimpleTranslationEntries;
    partyUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
  };
}
declare module 'src/locales/it/ability-trigger' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const abilityTriggers: SimpleTranslationEntries;
}
declare module 'src/locales/it/ability' {
  import {AbilityTranslationEntries} from 'src/interfaces/locales';
  export const ability: AbilityTranslationEntries;
}
declare module 'src/locales/it/achv' {
  import {AchievementTranslationEntries} from 'src/interfaces/locales';
  export const PGMachv: AchievementTranslationEntries;
  export const PGFachv: AchievementTranslationEntries;
}
declare module 'src/locales/it/battle-message-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battleMessageUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/it/battle' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battle: SimpleTranslationEntries;
}
declare module 'src/locales/it/berry' {
  import {BerryTranslationEntries} from 'src/interfaces/locales';
  export const berry: BerryTranslationEntries;
}
declare module 'src/locales/it/bgm-name' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const bgmName: SimpleTranslationEntries;
}
declare module 'src/locales/it/biome' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const biome: SimpleTranslationEntries;
}
declare module 'src/locales/it/challenges' {
  import {TranslationEntries} from 'src/interfaces/locales';
  export const challenges: TranslationEntries;
}
declare module 'src/locales/it/command-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const commandUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/it/common' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const common: SimpleTranslationEntries;
}
declare module 'src/locales/it/dialogue' {
  import {DialogueTranslationEntries, SimpleTranslationEntries} from 'src/interfaces/locales';
  export const PGMdialogue: DialogueTranslationEntries;
  export const PGFdialogue: DialogueTranslationEntries;
  export const PGMbattleSpecDialogue: SimpleTranslationEntries;
  export const PGFbattleSpecDialogue: SimpleTranslationEntries;
  export const PGMmiscDialogue: SimpleTranslationEntries;
  export const PGFmiscDialogue: SimpleTranslationEntries;
  export const PGMdoubleBattleDialogue: DialogueTranslationEntries;
  export const PGFdoubleBattleDialogue: DialogueTranslationEntries;
}
declare module 'src/locales/it/egg' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const egg: SimpleTranslationEntries;
}
declare module 'src/locales/it/fight-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const fightUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/it/game-mode' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameMode: SimpleTranslationEntries;
}
declare module 'src/locales/it/game-stats-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameStatsUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/it/growth' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const growth: SimpleTranslationEntries;
}
declare module 'src/locales/it/menu' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const menu: SimpleTranslationEntries;
}
declare module 'src/locales/it/menu-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const menuUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/it/modifier-type' {
  import {ModifierTypeTranslationEntries} from 'src/interfaces/locales';
  export const modifierType: ModifierTypeTranslationEntries;
}
declare module 'src/locales/it/move' {
  import {MoveTranslationEntries} from 'src/interfaces/locales';
  export const move: MoveTranslationEntries;
}
declare module 'src/locales/it/nature' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const nature: SimpleTranslationEntries;
}
declare module 'src/locales/it/pokeball' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokeball: SimpleTranslationEntries;
}
declare module 'src/locales/it/pokemon' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemon: SimpleTranslationEntries;
}
declare module 'src/locales/it/pokemon-info' {
  import {PokemonInfoTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfo: PokemonInfoTranslationEntries;
}
declare module 'src/locales/it/pokemon-info-container' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfoContainer: SimpleTranslationEntries;
}
declare module 'src/locales/it/save-slot-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const saveSlotSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/it/splash-messages' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const splashMessages: SimpleTranslationEntries;
}
declare module 'src/locales/it/starter-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const starterSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/it/status-effect' {
  import {StatusEffectTranslationEntries} from 'src/interfaces/locales';
  export const statusEffect: StatusEffectTranslationEntries;
}
declare module 'src/locales/it/trainers' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const titles: SimpleTranslationEntries;
  export const trainerClasses: SimpleTranslationEntries;
  export const trainerNames: SimpleTranslationEntries;
}
declare module 'src/locales/it/tutorial' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const tutorial: SimpleTranslationEntries;
}
declare module 'src/locales/it/voucher' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const voucher: SimpleTranslationEntries;
}
declare module 'src/locales/it/weather' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The weather namespace holds text displayed when weather is active during a battle
   */
  export const weather: SimpleTranslationEntries;
}
declare module 'src/locales/it/party-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const partyUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/it/settings' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const settings: SimpleTranslationEntries;
}
declare module 'src/locales/it/modifier-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const modifierSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/it/config' {
  export const itConfig: {
    ability: any;
    abilityTriggers: import('src/interfaces/locales').SimpleTranslationEntries;
    battle: import('src/interfaces/locales').SimpleTranslationEntries;
    battleMessageUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    berry: import('src/interfaces/locales').BerryTranslationEntries;
    bgmName: import('src/interfaces/locales').SimpleTranslationEntries;
    biome: import('src/interfaces/locales').SimpleTranslationEntries;
    challenges: import('src/interfaces/locales').TranslationEntries;
    commandUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    common: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMachv: any;
    PGFachv: any;
    PGMdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGMbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    egg: import('src/interfaces/locales').SimpleTranslationEntries;
    fightUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    gameMode: import('src/interfaces/locales').SimpleTranslationEntries;
    gameStatsUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    growth: import('src/interfaces/locales').SimpleTranslationEntries;
    menu: import('src/interfaces/locales').SimpleTranslationEntries;
    menuUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierType: import('src/interfaces/locales').ModifierTypeTranslationEntries;
    move: import('src/interfaces/locales').MoveTranslationEntries;
    nature: import('src/interfaces/locales').SimpleTranslationEntries;
    pokeball: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemon: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemonInfo: import('src/interfaces/locales').PokemonInfoTranslationEntries;
    pokemonInfoContainer: import('src/interfaces/locales').SimpleTranslationEntries;
    saveSlotSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    settings: any;
    splashMessages: import('src/interfaces/locales').SimpleTranslationEntries;
    starterSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    statusEffect: any;
    titles: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerClasses: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerNames: import('src/interfaces/locales').SimpleTranslationEntries;
    tutorial: import('src/interfaces/locales').SimpleTranslationEntries;
    voucher: import('src/interfaces/locales').SimpleTranslationEntries;
    weather: import('src/interfaces/locales').SimpleTranslationEntries;
    partyUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
  };
}
declare module 'src/locales/ko/ability-trigger' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const abilityTriggers: SimpleTranslationEntries;
}
declare module 'src/locales/ko/ability' {
  import {AbilityTranslationEntries} from 'src/interfaces/locales';
  /**
   * 본가 게임과 텍스트가 다를 경우 주석으로 표시
   */
  export const ability: AbilityTranslationEntries;
}
declare module 'src/locales/ko/achv' {
  import {AchievementTranslationEntries} from 'src/interfaces/locales';
  export const PGMachv: AchievementTranslationEntries;
  export const PGFachv: AchievementTranslationEntries;
}
declare module 'src/locales/ko/battle-message-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battleMessageUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/ko/battle' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battle: SimpleTranslationEntries;
}
declare module 'src/locales/ko/berry' {
  import {BerryTranslationEntries} from 'src/interfaces/locales';
  export const berry: BerryTranslationEntries;
}
declare module 'src/locales/ko/bgm-name' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const bgmName: SimpleTranslationEntries;
}
declare module 'src/locales/ko/biome' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const biome: SimpleTranslationEntries;
}
declare module 'src/locales/ko/challenges' {
  import {TranslationEntries} from 'src/interfaces/locales';
  export const challenges: TranslationEntries;
}
declare module 'src/locales/ko/command-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const commandUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/ko/common' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const common: SimpleTranslationEntries;
}
declare module 'src/locales/ko/dialogue' {
  import {DialogueTranslationEntries, SimpleTranslationEntries} from 'src/interfaces/locales';
  export const PGMdialogue: DialogueTranslationEntries;
  export const PGFdialogue: DialogueTranslationEntries;
  export const PGMbattleSpecDialogue: SimpleTranslationEntries;
  export const PGFbattleSpecDialogue: SimpleTranslationEntries;
  export const PGMmiscDialogue: SimpleTranslationEntries;
  export const PGFmiscDialogue: SimpleTranslationEntries;
  export const PGMdoubleBattleDialogue: DialogueTranslationEntries;
  export const PGFdoubleBattleDialogue: DialogueTranslationEntries;
}
declare module 'src/locales/ko/egg' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const egg: SimpleTranslationEntries;
}
declare module 'src/locales/ko/fight-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const fightUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/ko/game-mode' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameMode: SimpleTranslationEntries;
}
declare module 'src/locales/ko/game-stats-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameStatsUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/ko/growth' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const growth: SimpleTranslationEntries;
}
declare module 'src/locales/ko/menu' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const menu: SimpleTranslationEntries;
}
declare module 'src/locales/ko/menu-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const menuUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/ko/modifier-type' {
  import {ModifierTypeTranslationEntries} from 'src/interfaces/locales';
  export const modifierType: ModifierTypeTranslationEntries;
}
declare module 'src/locales/ko/move' {
  import {MoveTranslationEntries} from 'src/interfaces/locales';
  /**
   * 본가 게임과 텍스트가 다르거나 번역문을 완전히 확인하지 못한 경우 주석으로 표시
   */
  export const move: MoveTranslationEntries;
}
declare module 'src/locales/ko/nature' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const nature: SimpleTranslationEntries;
}
declare module 'src/locales/ko/pokeball' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokeball: SimpleTranslationEntries;
}
declare module 'src/locales/ko/pokemon' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemon: SimpleTranslationEntries;
}
declare module 'src/locales/ko/pokemon-info' {
  import {PokemonInfoTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfo: PokemonInfoTranslationEntries;
}
declare module 'src/locales/ko/pokemon-info-container' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfoContainer: SimpleTranslationEntries;
}
declare module 'src/locales/ko/save-slot-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const saveSlotSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/ko/splash-messages' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const splashMessages: SimpleTranslationEntries;
}
declare module 'src/locales/ko/starter-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const starterSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/ko/status-effect' {
  import {StatusEffectTranslationEntries} from 'src/interfaces/locales';
  export const statusEffect: StatusEffectTranslationEntries;
}
declare module 'src/locales/ko/trainers' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const titles: SimpleTranslationEntries;
  export const trainerClasses: SimpleTranslationEntries;
  export const trainerNames: SimpleTranslationEntries;
}
declare module 'src/locales/ko/tutorial' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const tutorial: SimpleTranslationEntries;
}
declare module 'src/locales/ko/voucher' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const voucher: SimpleTranslationEntries;
}
declare module 'src/locales/ko/weather' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The weather namespace holds text displayed when weather is active during a battle
   */
  export const weather: SimpleTranslationEntries;
}
declare module 'src/locales/ko/party-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const partyUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/ko/settings' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const settings: SimpleTranslationEntries;
}
declare module 'src/locales/ko/modifier-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const modifierSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/ko/config' {
  export const koConfig: {
    ability: any;
    abilityTriggers: import('src/interfaces/locales').SimpleTranslationEntries;
    battle: import('src/interfaces/locales').SimpleTranslationEntries;
    battleMessageUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    berry: import('src/interfaces/locales').BerryTranslationEntries;
    bgmName: import('src/interfaces/locales').SimpleTranslationEntries;
    biome: import('src/interfaces/locales').SimpleTranslationEntries;
    challenges: import('src/interfaces/locales').TranslationEntries;
    commandUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    common: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMachv: any;
    PGFachv: any;
    PGMdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGMbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    egg: import('src/interfaces/locales').SimpleTranslationEntries;
    fightUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    gameMode: import('src/interfaces/locales').SimpleTranslationEntries;
    gameStatsUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    growth: import('src/interfaces/locales').SimpleTranslationEntries;
    menu: import('src/interfaces/locales').SimpleTranslationEntries;
    menuUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierType: import('src/interfaces/locales').ModifierTypeTranslationEntries;
    move: import('src/interfaces/locales').MoveTranslationEntries;
    nature: import('src/interfaces/locales').SimpleTranslationEntries;
    pokeball: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemon: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemonInfo: import('src/interfaces/locales').PokemonInfoTranslationEntries;
    pokemonInfoContainer: import('src/interfaces/locales').SimpleTranslationEntries;
    saveSlotSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    settings: any;
    splashMessages: import('src/interfaces/locales').SimpleTranslationEntries;
    starterSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    statusEffect: any;
    titles: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerClasses: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerNames: import('src/interfaces/locales').SimpleTranslationEntries;
    tutorial: import('src/interfaces/locales').SimpleTranslationEntries;
    voucher: import('src/interfaces/locales').SimpleTranslationEntries;
    weather: import('src/interfaces/locales').SimpleTranslationEntries;
    partyUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
  };
}
declare module 'src/locales/pt_BR/ability-trigger' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const abilityTriggers: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/ability' {
  import {AbilityTranslationEntries} from 'src/interfaces/locales';
  export const ability: AbilityTranslationEntries;
}
declare module 'src/locales/pt_BR/achv' {
  import {AchievementTranslationEntries} from 'src/interfaces/locales';
  export const PGMachv: AchievementTranslationEntries;
  export const PGFachv: AchievementTranslationEntries;
}
declare module 'src/locales/pt_BR/battle-message-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battleMessageUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/battle' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battle: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/berry' {
  import {BerryTranslationEntries} from 'src/interfaces/locales';
  export const berry: BerryTranslationEntries;
}
declare module 'src/locales/pt_BR/bgm-name' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const bgmName: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/biome' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const biome: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/challenges' {
  import {TranslationEntries} from 'src/interfaces/locales';
  export const challenges: TranslationEntries;
}
declare module 'src/locales/pt_BR/command-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const commandUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/common' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const common: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/dialogue' {
  import {DialogueTranslationEntries, SimpleTranslationEntries} from 'src/interfaces/locales';
  export const PGMdialogue: DialogueTranslationEntries;
  export const PGFdialogue: DialogueTranslationEntries;
  export const PGMbattleSpecDialogue: SimpleTranslationEntries;
  export const PGFbattleSpecDialogue: SimpleTranslationEntries;
  export const PGMmiscDialogue: SimpleTranslationEntries;
  export const PGFmiscDialogue: SimpleTranslationEntries;
  export const PGMdoubleBattleDialogue: DialogueTranslationEntries;
  export const PGFdoubleBattleDialogue: DialogueTranslationEntries;
}
declare module 'src/locales/pt_BR/egg' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const egg: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/fight-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const fightUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/game-mode' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameMode: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/game-stats-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameStatsUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/growth' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const growth: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/menu' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const menu: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/menu-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const menuUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/modifier-type' {
  import {ModifierTypeTranslationEntries} from 'src/interfaces/locales';
  export const modifierType: ModifierTypeTranslationEntries;
}
declare module 'src/locales/pt_BR/move' {
  import {MoveTranslationEntries} from 'src/interfaces/locales';
  export const move: MoveTranslationEntries;
}
declare module 'src/locales/pt_BR/nature' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const nature: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/pokeball' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokeball: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/pokemon' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemon: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/pokemon-info' {
  import {PokemonInfoTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfo: PokemonInfoTranslationEntries;
}
declare module 'src/locales/pt_BR/pokemon-info-container' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfoContainer: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/save-slot-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const saveSlotSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/splash-messages' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const splashMessages: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/starter-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const starterSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/status-effect' {
  import {StatusEffectTranslationEntries} from 'src/interfaces/locales';
  export const statusEffect: StatusEffectTranslationEntries;
}
declare module 'src/locales/pt_BR/trainers' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const titles: SimpleTranslationEntries;
  export const trainerClasses: SimpleTranslationEntries;
  export const trainerNames: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/tutorial' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const tutorial: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/voucher' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const voucher: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/weather' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The weather namespace holds text displayed when weather is active during a battle
   */
  export const weather: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/party-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const partyUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/settings' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const settings: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/modifier-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const modifierSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/pt_BR/config' {
  export const ptBrConfig: {
    ability: any;
    abilityTriggers: import('src/interfaces/locales').SimpleTranslationEntries;
    battle: import('src/interfaces/locales').SimpleTranslationEntries;
    battleMessageUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    berry: import('src/interfaces/locales').BerryTranslationEntries;
    bgmName: import('src/interfaces/locales').SimpleTranslationEntries;
    biome: import('src/interfaces/locales').SimpleTranslationEntries;
    challenges: import('src/interfaces/locales').TranslationEntries;
    commandUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    common: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMachv: any;
    PGFachv: any;
    PGMdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGMbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    egg: import('src/interfaces/locales').SimpleTranslationEntries;
    fightUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    gameMode: import('src/interfaces/locales').SimpleTranslationEntries;
    gameStatsUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    growth: import('src/interfaces/locales').SimpleTranslationEntries;
    menu: import('src/interfaces/locales').SimpleTranslationEntries;
    menuUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierType: import('src/interfaces/locales').ModifierTypeTranslationEntries;
    move: import('src/interfaces/locales').MoveTranslationEntries;
    nature: import('src/interfaces/locales').SimpleTranslationEntries;
    partyUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    pokeball: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemon: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemonInfo: import('src/interfaces/locales').PokemonInfoTranslationEntries;
    pokemonInfoContainer: import('src/interfaces/locales').SimpleTranslationEntries;
    saveSlotSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    statusEffect: any;
    settings: any;
    splashMessages: import('src/interfaces/locales').SimpleTranslationEntries;
    starterSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    titles: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerClasses: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerNames: import('src/interfaces/locales').SimpleTranslationEntries;
    tutorial: import('src/interfaces/locales').SimpleTranslationEntries;
    voucher: import('src/interfaces/locales').SimpleTranslationEntries;
    weather: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
  };
}
declare module 'src/locales/zh_CN/ability-trigger' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const abilityTriggers: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/ability' {
  import {AbilityTranslationEntries} from 'src/interfaces/locales';
  export const ability: AbilityTranslationEntries;
}
declare module 'src/locales/zh_CN/achv' {
  import {AchievementTranslationEntries} from 'src/interfaces/locales';
  export const PGMachv: AchievementTranslationEntries;
  export const PGFachv: AchievementTranslationEntries;
}
declare module 'src/locales/zh_CN/battle-message-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battleMessageUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/battle' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battle: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/berry' {
  import {BerryTranslationEntries} from 'src/interfaces/locales';
  export const berry: BerryTranslationEntries;
}
declare module 'src/locales/zh_CN/bgm-name' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const bgmName: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/biome' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const biome: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/challenges' {
  import {TranslationEntries} from 'src/interfaces/locales';
  export const challenges: TranslationEntries;
}
declare module 'src/locales/zh_CN/command-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const commandUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/common' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const common: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/dialogue' {
  import {DialogueTranslationEntries, SimpleTranslationEntries} from 'src/interfaces/locales';
  export const PGMdialogue: DialogueTranslationEntries;
  export const PGFdialogue: DialogueTranslationEntries;
  export const PGMbattleSpecDialogue: SimpleTranslationEntries;
  export const PGFbattleSpecDialogue: SimpleTranslationEntries;
  export const PGMmiscDialogue: SimpleTranslationEntries;
  export const PGFmiscDialogue: SimpleTranslationEntries;
  export const PGMdoubleBattleDialogue: DialogueTranslationEntries;
  export const PGFdoubleBattleDialogue: DialogueTranslationEntries;
}
declare module 'src/locales/zh_CN/egg' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const egg: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/fight-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const fightUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/game-mode' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameMode: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/game-stats-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameStatsUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/growth' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const growth: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/menu' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const menu: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/menu-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const menuUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/modifier-type' {
  import {ModifierTypeTranslationEntries} from 'src/interfaces/locales';
  export const modifierType: ModifierTypeTranslationEntries;
}
declare module 'src/locales/zh_CN/move' {
  import {MoveTranslationEntries} from 'src/interfaces/locales';
  export const move: MoveTranslationEntries;
}
declare module 'src/locales/zh_CN/nature' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const nature: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/pokeball' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokeball: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/pokemon' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemon: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/pokemon-info' {
  import {PokemonInfoTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfo: PokemonInfoTranslationEntries;
}
declare module 'src/locales/zh_CN/pokemon-info-container' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfoContainer: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/save-slot-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const saveSlotSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/splash-messages' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const splashMessages: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/starter-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const starterSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/status-effect' {
  import {StatusEffectTranslationEntries} from 'src/interfaces/locales';
  export const statusEffect: StatusEffectTranslationEntries;
}
declare module 'src/locales/zh_CN/trainers' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const titles: SimpleTranslationEntries;
  export const trainerClasses: SimpleTranslationEntries;
  export const trainerNames: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/tutorial' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const tutorial: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/voucher' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const voucher: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/weather' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The weather namespace holds text displayed when weather is active during a battle
   */
  export const weather: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/party-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const partyUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/settings' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const settings: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/modifier-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const modifierSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_CN/config' {
  export const zhCnConfig: {
    ability: any;
    abilityTriggers: import('src/interfaces/locales').SimpleTranslationEntries;
    battle: import('src/interfaces/locales').SimpleTranslationEntries;
    battleMessageUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    berry: import('src/interfaces/locales').BerryTranslationEntries;
    bgmName: import('src/interfaces/locales').SimpleTranslationEntries;
    biome: import('src/interfaces/locales').SimpleTranslationEntries;
    challenges: import('src/interfaces/locales').TranslationEntries;
    commandUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    common: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMachv: any;
    PGFachv: any;
    PGMdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGMbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    egg: import('src/interfaces/locales').SimpleTranslationEntries;
    fightUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    gameMode: import('src/interfaces/locales').SimpleTranslationEntries;
    gameStatsUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    growth: import('src/interfaces/locales').SimpleTranslationEntries;
    menu: import('src/interfaces/locales').SimpleTranslationEntries;
    menuUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierType: import('src/interfaces/locales').ModifierTypeTranslationEntries;
    move: import('src/interfaces/locales').MoveTranslationEntries;
    nature: import('src/interfaces/locales').SimpleTranslationEntries;
    pokeball: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemon: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemonInfo: import('src/interfaces/locales').PokemonInfoTranslationEntries;
    pokemonInfoContainer: import('src/interfaces/locales').SimpleTranslationEntries;
    saveSlotSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    settings: any;
    splashMessages: import('src/interfaces/locales').SimpleTranslationEntries;
    starterSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    statusEffect: any;
    titles: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerClasses: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerNames: import('src/interfaces/locales').SimpleTranslationEntries;
    tutorial: import('src/interfaces/locales').SimpleTranslationEntries;
    voucher: import('src/interfaces/locales').SimpleTranslationEntries;
    weather: import('src/interfaces/locales').SimpleTranslationEntries;
    partyUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
  };
}
declare module 'src/locales/zh_TW/ability-trigger' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const abilityTriggers: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/ability' {
  import {AbilityTranslationEntries} from 'src/interfaces/locales';
  export const ability: AbilityTranslationEntries;
}
declare module 'src/locales/zh_TW/achv' {
  import {AchievementTranslationEntries} from 'src/interfaces/locales';
  export const PGMachv: AchievementTranslationEntries;
  export const PGFachv: AchievementTranslationEntries;
}
declare module 'src/locales/zh_TW/battle-message-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battleMessageUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/battle' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const battle: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/berry' {
  import {BerryTranslationEntries} from 'src/interfaces/locales';
  export const berry: BerryTranslationEntries;
}
declare module 'src/locales/zh_TW/bgm-name' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const bgmName: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/biome' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const biome: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/challenges' {
  import {TranslationEntries} from 'src/interfaces/locales';
  export const challenges: TranslationEntries;
}
declare module 'src/locales/zh_TW/command-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const commandUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/common' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const common: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/dialogue' {
  import {DialogueTranslationEntries, SimpleTranslationEntries} from 'src/interfaces/locales';
  export const PGMdialogue: DialogueTranslationEntries;
  export const PGFdialogue: DialogueTranslationEntries;
  export const PGMbattleSpecDialogue: SimpleTranslationEntries;
  export const PGFbattleSpecDialogue: SimpleTranslationEntries;
  export const PGMmiscDialogue: SimpleTranslationEntries;
  export const PGFmiscDialogue: SimpleTranslationEntries;
  export const PGMdoubleBattleDialogue: DialogueTranslationEntries;
  export const PGFdoubleBattleDialogue: DialogueTranslationEntries;
}
declare module 'src/locales/zh_TW/egg' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const egg: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/fight-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const fightUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/game-mode' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameMode: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/game-stats-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const gameStatsUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/growth' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const growth: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/menu' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const menu: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/menu-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const menuUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/modifier-type' {
  import {ModifierTypeTranslationEntries} from 'src/interfaces/locales';
  export const modifierType: ModifierTypeTranslationEntries;
}
declare module 'src/locales/zh_TW/move' {
  import {MoveTranslationEntries} from 'src/interfaces/locales';
  export const move: MoveTranslationEntries;
}
declare module 'src/locales/zh_TW/nature' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const nature: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/pokeball' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokeball: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/pokemon' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemon: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/pokemon-info' {
  import {PokemonInfoTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfo: PokemonInfoTranslationEntries;
}
declare module 'src/locales/zh_TW/pokemon-info-container' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const pokemonInfoContainer: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/save-slot-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const saveSlotSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/splash-messages' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const splashMessages: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/starter-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The menu namespace holds most miscellaneous text that isn't directly part of the game's
   * contents or directly related to Pokemon data. This includes menu navigation, settings,
   * account interactions, descriptive text, etc.
   */
  export const starterSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/status-effect' {
  import {StatusEffectTranslationEntries} from 'src/interfaces/locales';
  export const statusEffect: StatusEffectTranslationEntries;
}
declare module 'src/locales/zh_TW/trainers' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const titles: SimpleTranslationEntries;
  export const trainerClasses: SimpleTranslationEntries;
  export const trainerNames: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/tutorial' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const tutorial: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/voucher' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const voucher: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/weather' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  /**
   * The weather namespace holds text displayed when weather is active during a battle
   */
  export const weather: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/party-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const partyUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/settings' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const settings: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/modifier-select-ui-handler' {
  import {SimpleTranslationEntries} from 'src/interfaces/locales';
  export const modifierSelectUiHandler: SimpleTranslationEntries;
}
declare module 'src/locales/zh_TW/config' {
  export const zhTwConfig: {
    ability: any;
    abilityTriggers: import('src/interfaces/locales').SimpleTranslationEntries;
    battle: import('src/interfaces/locales').SimpleTranslationEntries;
    battleMessageUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    berry: import('src/interfaces/locales').BerryTranslationEntries;
    bgmName: import('src/interfaces/locales').SimpleTranslationEntries;
    biome: import('src/interfaces/locales').SimpleTranslationEntries;
    challenges: import('src/interfaces/locales').TranslationEntries;
    commandUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    common: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMachv: any;
    PGFachv: any;
    PGMdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGMbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFbattleSpecDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGFmiscDialogue: import('src/interfaces/locales').SimpleTranslationEntries;
    PGMdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    PGFdoubleBattleDialogue: import('src/interfaces/locales').DialogueTranslationEntries;
    egg: import('src/interfaces/locales').SimpleTranslationEntries;
    fightUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    gameMode: import('src/interfaces/locales').SimpleTranslationEntries;
    gameStatsUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    growth: import('src/interfaces/locales').SimpleTranslationEntries;
    menu: import('src/interfaces/locales').SimpleTranslationEntries;
    menuUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierType: import('src/interfaces/locales').ModifierTypeTranslationEntries;
    move: import('src/interfaces/locales').MoveTranslationEntries;
    nature: import('src/interfaces/locales').SimpleTranslationEntries;
    pokeball: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemon: import('src/interfaces/locales').SimpleTranslationEntries;
    pokemonInfo: import('src/interfaces/locales').PokemonInfoTranslationEntries;
    pokemonInfoContainer: import('src/interfaces/locales').SimpleTranslationEntries;
    saveSlotSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    settings: any;
    splashMessages: import('src/interfaces/locales').SimpleTranslationEntries;
    starterSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    statusEffect: any;
    titles: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerClasses: import('src/interfaces/locales').SimpleTranslationEntries;
    trainerNames: import('src/interfaces/locales').SimpleTranslationEntries;
    tutorial: import('src/interfaces/locales').SimpleTranslationEntries;
    voucher: import('src/interfaces/locales').SimpleTranslationEntries;
    weather: import('src/interfaces/locales').SimpleTranslationEntries;
    partyUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
    modifierSelectUiHandler: import('src/interfaces/locales').SimpleTranslationEntries;
  };
}
declare module 'src/system/session-history' {
  import {GameModes} from 'src/game-mode';
  import PokemonData from 'src/system/pokemon-data';
  import PersistentModifierData from 'src/system/modifier-data';
  export enum SessionHistoryResult {
    ACTIVE = 0,
    WIN = 1,
    LOSS = 2,
  }
  export interface SessionHistory {
    seed: string;
    playTime: number;
    result: SessionHistoryResult;
    gameMode: GameModes;
    party: PokemonData[];
    modifiers: PersistentModifierData[];
    money: number;
    waveIndex: number;
    gameVersion: string;
    timestamp: number;
  }
}
declare module 'src/test/account.spec' {}
declare module 'src/test/utils/testUtils' {
  /**
   * Sets up the i18next mock.
   * Includes a i18next.t mocked implementation only returning the raw key (`(key) => key`)
   *
   * @returns A spy/mock of i18next
   */
  export function mockI18next(): any;
  /**
   * Creates an array of range `start - end`
   *
   * @param start start number e.g. 1
   * @param end end number e.g. 10
   * @returns an array of numbers
   */
  export function arrayOfRange(start: number, end: number): number[];
}
declare module 'src/test/battle-stat.spec' {}
declare class FontFaceMock {
  family: string;
  source: string;
  descriptors: any;
  constructor(family: string, source: string, descriptors?: any);
  load(): Promise<FontFaceMock>;
}
declare module 'src/test/imports.test' {}
declare module 'src/test/vitest.setup' {
  import 'src/test/fontFace.setup';
  import 'vitest-canvas-mock';
}
declare module 'src/test/utils/mocks/mocksContainer/mockGraphics' {
  export default class MockGraphics {
    private scene;
    list: any[];
    constructor(textureManager: any, config: any);
    fillStyle(color: any): void;
    beginPath(): void;
    fillRect(x: any, y: any, width: any, height: any): void;
    createGeometryMask(): void;
    setOrigin(x: any, y: any): void;
    setAlpha(alpha: any): void;
    setVisible(visible: any): void;
    setName(name: any): void;
    once(event: any, callback: any, source: any): void;
    removeFromDisplayList(): void;
    addedToScene(): void;
    setPositionRelative(source: any, x: any, y: any): void;
    destroy(): void;
    setScale(scale: any): void;
    off(event: any, callback: any, source: any): void;
    add(obj: any): void;
    removeAll(): void;
    addAt(obj: any, index: any): void;
    remove(obj: any): void;
    getIndex(obj: any): number;
    getAt(index: any): any;
    getAll(): any[];
  }
}
declare module 'src/test/utils/mocks/mocksContainer/mockContainer' {
  import MockTextureManager from 'src/test/utils/mocks/mockTextureManager';
  export default class MockContainer {
    protected x: any;
    protected y: any;
    protected scene: any;
    protected width: any;
    protected height: any;
    protected visible: any;
    private alpha;
    private style;
    frame: any;
    protected textureManager: any;
    list: any[];
    constructor(textureManager: MockTextureManager, x: any, y: any);
    setVisible(visible: any): void;
    once(event: any, callback: any, source: any): void;
    off(event: any, callback: any, source: any): void;
    removeFromDisplayList(): void;
    addedToScene(): void;
    setSize(width: any, height: any): void;
    setMask(): void;
    setPositionRelative(source: any, x: any, y: any): void;
    setInteractive(hitArea?: any, callback?: any, dropZone?: any): void;
    setOrigin(x: any, y: any): void;
    setAlpha(alpha: any): void;
    setFrame(frame: any, updateSize?: boolean, updateOrigin?: boolean): void;
    setScale(scale: any): void;
    setPosition(x: any, y: any): void;
    setX(x: any): void;
    setY(y: any): void;
    destroy(): void;
    setShadow(shadowXpos: any, shadowYpos: any, shadowColor: any): void;
    setLineSpacing(lineSpacing: any): void;
    setText(text: any): void;
    setAngle(angle: any): void;
    setShadowOffset(offsetX: any, offsetY: any): void;
    setWordWrapWidth(width: any): void;
    setFontSize(fontSize: any): void;
    getBounds(): {
      width: any;
      height: any;
    };
    setColor(color: any): void;
    setShadowColor(color: any): void;
    setTint(color: any): void;
    setStrokeStyle(thickness: any, color: any): this;
    setDepth(depth: any): void;
    setTexture(texture: any): void;
    clearTint(): void;
    sendToBack(): void;
    moveAbove(obj: any): void;
    moveBelow(obj: any): void;
    setName(name: any): void;
    bringToTop(obj: any): void;
    on(event: any, callback: any, source: any): void;
    add(obj: any): void;
    removeAll(): void;
    addAt(obj: any, index: any): void;
    remove(obj: any): void;
    getIndex(obj: any): number;
    getAt(index: any): any;
    getAll(): any[];
  }
}
declare module 'src/test/utils/mocks/mocksContainer/mockSprite' {
  export default class MockSprite {
    private phaserSprite;
    pipelineData: any;
    texture: any;
    key: any;
    frame: any;
    textureManager: any;
    scene: any;
    anims: any;
    list: any[];
    constructor(textureManager: any, x: any, y: any, texture: any);
    setTexture(key: string, frame?: string | number): this;
    setSizeToFrame(frame?: boolean | any): any;
    setPipeline(obj: any): any;
    off(event: any, callback: any, source: any): void;
    setTintFill(color: any): any;
    setScale(scale: any): any;
    setOrigin(x: any, y: any): any;
    setSize(width: any, height: any): any;
    once(event: any, callback: any, source: any): any;
    removeFromDisplayList(): any;
    addedToScene(): any;
    setVisible(visible: any): any;
    setPosition(x: any, y: any): any;
    stop(): any;
    setInteractive(hitArea: any, hitAreaCallback: any, dropZone: any): any;
    on(event: any, callback: any, source: any): any;
    setAlpha(alpha: any): any;
    setTint(color: any): any;
    setFrame(frame: any, updateSize?: boolean, updateOrigin?: boolean): any;
    setPositionRelative(source: any, x: any, y: any): any;
    setY(y: any): any;
    setCrop(x: any, y: any, width: any, height: any): any;
    clearTint(): any;
    disableInteractive(): any;
    apply(): any;
    play(): this;
    setPipelineData(key: any, value: any): void;
    destroy(): any;
    setName(name: any): any;
    setAngle(angle: any): any;
    setMask(): void;
    add(obj: any): void;
    removeAll(): void;
    addAt(obj: any, index: any): void;
    remove(obj: any): void;
    getIndex(obj: any): number;
    getAt(index: any): any;
    getAll(): any[];
  }
}
declare module 'src/test/utils/mocks/mocksContainer/mockRectangle' {
  export default class MockRectangle {
    private fillColor;
    private scene;
    list: any[];
    constructor(textureManager: any, x: any, y: any, width: any, height: any, fillColor: any);
    setOrigin(x: any, y: any): void;
    setAlpha(alpha: any): void;
    setVisible(visible: any): void;
    setName(name: any): void;
    once(event: any, callback: any, source: any): void;
    removeFromDisplayList(): void;
    addedToScene(): void;
    setPositionRelative(source: any, x: any, y: any): void;
    destroy(): void;
    add(obj: any): void;
    removeAll(): void;
    addAt(obj: any, index: any): void;
    remove(obj: any): void;
    getIndex(obj: any): number;
    getAt(index: any): any;
    getAll(): any[];
    setScale(scale: any): void;
  }
}
declare module 'src/test/utils/mocks/mocksContainer/mockNineslice' {
  import MockContainer from 'src/test/utils/mocks/mocksContainer/mockContainer';
  export default class MockNineslice extends MockContainer {
    private texture;
    private leftWidth;
    private rightWidth;
    private topHeight;
    private bottomHeight;
    constructor(
      textureManager: any,
      x: any,
      y: any,
      texture: any,
      frame: any,
      width: any,
      height: any,
      leftWidth: any,
      rightWidth: any,
      topHeight: any,
      bottomHeight: any
    );
  }
}
declare module 'src/test/utils/mocks/mocksContainer/mockImage' {
  import MockContainer from 'src/test/utils/mocks/mocksContainer/mockContainer';
  export default class MockImage extends MockContainer {
    private texture;
    constructor(textureManager: any, x: any, y: any, texture: any);
  }
}
declare module 'src/test/utils/mocks/mocksContainer/mockText' {
  export default class MockText {
    private phaserText;
    private wordWrapWidth;
    private splitRegExp;
    private scene;
    private textureManager;
    list: any[];
    style: any;
    constructor(textureManager: any, x: any, y: any, content: any, styleOptions: any);
    runWordWrap(text: any): string;
    showText(text: any, delay: any, callback: any, callbackDelay: any, prompt: any, promptDelay: any): void;
    setScale(scale: any): void;
    setShadow(shadowXpos: any, shadowYpos: any, shadowColor: any): void;
    setLineSpacing(lineSpacing: any): void;
    setOrigin(x: any, y: any): void;
    once(event: any, callback: any, source: any): void;
    off(event: any, callback: any, obj: any): void;
    removedFromScene(): void;
    addToDisplayList(): void;
    setStroke(color: any, thickness: any): void;
    removeFromDisplayList(): void;
    addedToScene(): void;
    setVisible(visible: any): void;
    setY(y: any): void;
    setX(x: any): void;
    /**
     * Sets the position of this Game Object.
     * @param x The x position of this Game Object. Default 0.
     * @param y The y position of this Game Object. If not set it will use the `x` value. Default x.
     * @param z The z position of this Game Object. Default 0.
     * @param w The w position of this Game Object. Default 0.
     */
    setPosition(x?: number, y?: number, z?: number, w?: number): void;
    setText(text: any): void;
    setAngle(angle: any): void;
    setPositionRelative(source: any, x: any, y: any): void;
    setShadowOffset(offsetX: any, offsetY: any): void;
    setWordWrapWidth(width: any): void;
    setFontSize(fontSize: any): void;
    getBounds(): {
      width: number;
    };
    setColor(color: any): void;
    setShadowColor(color: any): void;
    setTint(color: any): void;
    setStrokeStyle(thickness: any, color: any): void;
    destroy(): void;
    setAlpha(alpha: any): void;
    setName(name: any): void;
    setAlign(align: any): void;
    setMask(): void;
    getBottomLeft(): {
      x: number;
      y: number;
    };
    getTopLeft(): {
      x: number;
      y: number;
    };
    add(obj: any): void;
    removeAll(): void;
    addAt(obj: any, index: any): void;
    remove(obj: any): void;
    getIndex(obj: any): number;
    getAt(index: any): any;
    getAll(): any[];
  }
}
declare module 'src/test/utils/mocks/mocksContainer/mockPolygon' {
  import MockContainer from 'src/test/utils/mocks/mocksContainer/mockContainer';
  export default class MockPolygon extends MockContainer {
    constructor(textureManager: any, x: any, y: any, content: any, fillColor: any, fillAlpha: any);
  }
}
declare module 'src/test/utils/mocks/mockTextureManager' {
  import MockContainer from 'src/test/utils/mocks/mocksContainer/mockContainer';
  import MockSprite from 'src/test/utils/mocks/mocksContainer/mockSprite';
  import MockRectangle from 'src/test/utils/mocks/mocksContainer/mockRectangle';
  import MockNineslice from 'src/test/utils/mocks/mocksContainer/mockNineslice';
  import MockImage from 'src/test/utils/mocks/mocksContainer/mockImage';
  import MockText from 'src/test/utils/mocks/mocksContainer/mockText';
  import MockPolygon from 'src/test/utils/mocks/mocksContainer/mockPolygon';
  export default class MockTextureManager {
    private textures;
    private scene;
    add: any;
    displayList: any;
    list: any[];
    constructor(scene: any);
    container(x: any, y: any): MockContainer;
    sprite(x: any, y: any, texture: any): MockSprite;
    existing(obj: any): void;
    rectangle(x: any, y: any, width: any, height: any, fillColor: any): MockRectangle;
    nineslice(
      x: any,
      y: any,
      texture: any,
      frame: any,
      width: any,
      height: any,
      leftWidth: any,
      rightWidth: any,
      topHeight: any,
      bottomHeight: any
    ): MockNineslice;
    image(x: any, y: any, texture: any): MockImage;
    text(x: any, y: any, content: any, styleOptions: any): MockText;
    polygon(x: any, y: any, content: any, fillColor: any, fillAlpha: any): MockPolygon;
  }
}
declare module 'src/test/utils/gameManagerUtils' {
  import {Species} from 'src/enums/species';
  import {Starter} from 'src/ui/starter-select-ui-handler';
  export function blobToString(blob: any): Promise<unknown>;
  export function holdOn(ms: number): Promise<unknown>;
  export function generateStarter(scene: any, species?: Species[]): Starter[];
  export function waitUntil(truth: any): Promise<unknown>;
  export function getMovePosition(scene: any, pokemonIndex: any, moveIndex: any): any;
}
declare module 'src/test/utils/mocks/mockLocalStorage' {
  const mockLocalStorage: () => {
    getItem(key: string): any;
    setItem(key: string, value: string): void;
    hasOwnProperty(key: string): boolean;
    removeItem(key: string): void;
    clear(): void;
  };
  export default mockLocalStorage;
}
declare module 'src/test/utils/mocks/mockConsoleLog' {
  const MockConsoleLog: (
    _logDisabled?: boolean,
    _phaseText?: boolean
  ) => {
    log(...args: any[]): void;
    error(...args: any[]): void;
    debug(...args: any[]): void;
    warn(...args: any[]): void;
    notify(msg: any): void;
    getLogs(): any[];
    clearLogs(): void;
    getStr(...args: any[]): string;
  };
  export default MockConsoleLog;
}
declare module 'src/test/utils/mocks/mockLoader' {
  export default class MockLoader {
    cacheManager: any;
    constructor(scene: any);
    once(event: any, callback: any): void;
    setBaseURL(url: any): any;
    video(): any;
    spritesheet(key: any, url: any, frameConfig: any): void;
    audio(key: any, url: any): void;
    isLoading(): boolean;
    start(): void;
    image(): void;
    atlas(key: any, textureUrl: any, atlasUrl: any): void;
  }
}
declare module 'src/test/utils/mocks/mockFetch' {
  export const MockFetch: (
    input: any,
    init: any
  ) => Promise<{
    ok: boolean;
    status: number;
    json: any;
    text: any;
  }>;
}
declare module 'src/test/utils/mocks/mockClock' {
  export class MockClock {
    overrideDelay: number;
    constructor(scene: any);
    addEvent(config: any): any;
  }
}
declare module 'src/test/utils/gameWrapper' {
  import BattleScene from 'src/battle-scene';
  export default class GameWrapper {
    game: any;
    scene: BattleScene;
    constructor(phaserGame: any, bypassLogin: boolean);
    setScene(scene: BattleScene): void;
    injectMandatory(): void;
  }
}
declare module 'src/test/utils/errorInterceptor' {
  export default class ErrorInterceptor {
    private static instance;
    running: any;
    constructor();
    static getInstance(): ErrorInterceptor;
    clear(): void;
    add(obj: any): void;
    remove(obj: any): void;
  }
}
declare module 'src/test/utils/phaseInterceptor' {
  import {Mode} from 'src/ui/ui';
  export default class PhaseInterceptor {
    scene: any;
    phases: {};
    log: any;
    private onHold;
    private interval;
    private promptInterval;
    private intervalRun;
    private prompts;
    private phaseFrom;
    private inProgress;
    private originalSetMode;
    private originalSuperEnd;
    /**
     * List of phases with their corresponding start methods.
     */
    private PHASES;
    private endBySetMode;
    /**
     * Constructor to initialize the scene and properties, and to start the phase handling.
     * @param scene - The scene to be managed.
     */
    constructor(scene: any);
    rejectAll(error: any): void;
    /**
     * Method to set the starting phase.
     * @param phaseFrom - The phase to start from.
     * @returns The instance of the PhaseInterceptor.
     */
    runFrom(phaseFrom: any): this;
    /**
     * Method to transition to a target phase.
     * @param phaseTo - The phase to transition to.
     * @returns A promise that resolves when the transition is complete.
     */
    to(phaseTo: any, runTarget?: boolean): Promise<void>;
    /**
     * Method to run a phase with an optional skip function.
     * @param phaseTarget - The phase to run.
     * @param skipFn - Optional skip function.
     * @returns A promise that resolves when the phase is run.
     */
    run(phaseTarget: any, skipFn?: any): Promise<void>;
    whenAboutToRun(phaseTarget: any, skipFn?: any): Promise<void>;
    pop(): void;
    /**
     * Method to initialize phases and their corresponding methods.
     */
    initPhases(): void;
    /**
     * Method to start a phase and log it.
     * @param phase - The phase to start.
     */
    startPhase(phase: any): void;
    unlock(): void;
    /**
     * Method to end a phase and log it.
     * @param phase - The phase to start.
     */
    superEndPhase(): void;
    /**
     * m2m to set mode.
     * @param phase - The phase to start.
     */
    setMode(mode: Mode, ...args: any[]): Promise<void>;
    /**
     * Method to start the prompt handler.
     */
    startPromptHandler(): void;
    /**
     * Method to add an action to the next prompt.
     * @param phaseTarget - The target phase for the prompt.
     * @param mode - The mode of the UI.
     * @param callback - The callback function to execute.
     * @param expireFn - The function to determine if the prompt has expired.
     */
    addToNextPrompt(
      phaseTarget: string,
      mode: Mode,
      callback: () => void,
      expireFn: () => void,
      awaitingActionInput?: boolean
    ): void;
    /**
     * Restores the original state of phases and clears intervals.
     *
     * This function iterates through all phases and resets their `start` method to the original
     * function stored in `this.phases`. Additionally, it clears the `promptInterval` and `interval`.
     */
    restoreOg(): void;
  }
}
declare module 'src/test/utils/TextInterceptor' {
  export default class TextInterceptor {
    private scene;
    logs: any[];
    constructor(scene: any);
    showText(
      text: string,
      delay?: number,
      callback?: Function,
      callbackDelay?: number,
      prompt?: boolean,
      promptDelay?: number
    ): void;
    getLatestMessage(): string;
  }
}
declare module 'src/test/utils/inputsHandler' {
  import BattleScene from 'src/battle-scene';
  export default class InputsHandler {
    private scene;
    private events;
    private inputController;
    log: any[];
    logUp: any[];
    private fakePad;
    private fakeMobile;
    constructor(scene: BattleScene);
    pressTouch(button: string, duration: number): Promise<void>;
    pressGamepadButton(button: number, duration: number): Promise<void>;
    pressKeyboardKey(key: number, duration: number): Promise<void>;
    init(): void;
    listenInputs(): void;
  }
}
declare module 'src/test/utils/gameManager' {
  import GameWrapper from 'src/test/utils/gameWrapper';
  import {Mode} from 'src/ui/ui';
  import BattleScene from 'src/battle-scene';
  import PhaseInterceptor from 'src/test/utils/phaseInterceptor';
  import TextInterceptor from 'src/test/utils/TextInterceptor';
  import InputsHandler from 'src/test/utils/inputsHandler';
  import {EnemyPokemon, PlayerPokemon} from 'src/field/pokemon';
  import {Species} from 'src/enums/species';
  import {BattlerIndex} from 'src/battle';
  /**
   * Class to manage the game state and transitions between phases.
   */
  export default class GameManager {
    gameWrapper: GameWrapper;
    scene: BattleScene;
    phaseInterceptor: PhaseInterceptor;
    textInterceptor: TextInterceptor;
    inputsHandler: InputsHandler;
    /**
     * Creates an instance of GameManager.
     * @param phaserGame - The Phaser game instance.
     * @param bypassLogin - Whether to bypass the login phase.
     */
    constructor(phaserGame: any, bypassLogin?: boolean);
    /**
     * Sets the game mode.
     * @param mode - The mode to set.
     */
    setMode(mode: Mode): void;
    /**
     * Waits until the specified mode is set.
     * @param mode - The mode to wait for.
     * @returns A promise that resolves when the mode is set.
     */
    waitMode(mode: Mode): Promise<void>;
    /**
     * Ends the current phase.
     */
    endPhase(): void;
    /**
     * Adds an action to be executed on the next prompt.
     * @param phaseTarget - The target phase.
     * @param mode - The mode to wait for.
     * @param callback - The callback to execute.
     * @param expireFn - Optional function to determine if the prompt has expired.
     */
    onNextPrompt(
      phaseTarget: string,
      mode: Mode,
      callback: () => void,
      expireFn?: () => void,
      awaitingActionInput?: boolean
    ): void;
    /**
     * Runs the game to the title phase.
     * @returns A promise that resolves when the title phase is reached.
     */
    runToTitle(): Promise<void>;
    /**
     * Runs the game to the summon phase.
     * @param species - Optional array of species to summon.
     * @returns A promise that resolves when the summon phase is reached.
     */
    runToSummon(species?: Species[]): Promise<void>;
    /**
     * Transitions to the start of a battle.
     * @param species - Optional array of species to start the battle with.
     * @returns A promise that resolves when the battle is started.
     */
    startBattle(species?: Species[]): Promise<void>;
    /**
     * Emulate a player attack
     * @param movePosition the index of the move in the pokemon's moveset array
     */
    doAttack(movePosition: number): void;
    /**
     * Emulate a player's target selection after an attack is chosen,
     * usually called after {@linkcode doAttack} in a double battle.
     * @param {BattlerIndex} targetIndex the index of the attack target
     */
    doSelectTarget(targetIndex: BattlerIndex): void;
    /** Faint all opponents currently on the field */
    doKillOpponents(): Promise<void>;
    /** Emulate selecting a modifier (item) */
    doSelectModifier(): void;
    forceOpponentToSwitch(): void;
    /** Transition to the next upcoming {@linkcode CommandPhase} */
    toNextTurn(): Promise<void>;
    /** Emulate selecting a modifier (item) and transition to the next upcoming {@linkcode CommandPhase} */
    toNextWave(): Promise<void>;
    /**
     * Checks if the player has won the battle.
     * @returns True if the player has won, otherwise false.
     */
    isVictory(): any;
    /**
     * Checks if the current phase matches the target phase.
     * @param phaseTarget - The target phase.
     * @returns True if the current phase matches the target phase, otherwise false.
     */
    isCurrentPhase(phaseTarget: any): boolean;
    /**
     * Checks if the current mode matches the target mode.
     * @param mode - The target mode.
     * @returns True if the current mode matches the target mode, otherwise false.
     */
    isCurrentMode(mode: Mode): boolean;
    /**
     * Exports the save data to import it in a test game.
     * @returns A promise that resolves with the exported save data.
     */
    exportSaveToTest(): Promise<string>;
    /**
     * Imports game data from a file.
     * @param path - The path to the data file.
     * @returns A promise that resolves with a tuple containing a boolean indicating success and an number status code.
     */
    importData(path: any): Promise<[boolean, number]>;
    killPokemon(pokemon: PlayerPokemon | EnemyPokemon): Promise<void>;
    /**
     * Switch pokemon and transition to the enemy command phase
     * @param pokemonIndex the index of the pokemon in your party to switch to
     */
    doSwitchPokemon(pokemonIndex: number): void;
  }
}
declare module 'src/test/abilities/aura_break.test' {}
declare module 'src/test/abilities/battery.test' {}
declare module 'src/test/abilities/battle_bond.test' {}
declare module 'src/test/abilities/costar.test' {}
declare module 'src/test/abilities/disguise.test' {}
declare module 'src/test/abilities/dry_skin.test' {}
declare module 'src/test/abilities/ice_face.test' {}
declare module 'src/test/abilities/intimidate.test' {}
declare module 'src/test/abilities/intrepid_sword.test' {}
declare module 'src/test/abilities/libero.test' {}
declare module 'src/test/abilities/moxie.test' {}
declare module 'src/test/abilities/parental_bond.test' {}
declare module 'src/test/abilities/power_construct.test' {}
declare module 'src/test/abilities/power_spot.test' {}
declare module 'src/test/abilities/protean.test' {}
declare module 'src/test/abilities/quick_draw.test' {}
declare module 'src/test/abilities/sand_veil.test' {}
declare module 'src/test/abilities/sap_sipper.test' {}
declare module 'src/test/abilities/schooling.test' {}
declare module 'src/test/abilities/screen_cleaner.test' {}
declare module 'src/test/abilities/serene_grace.test' {}
declare module 'src/test/abilities/sheer_force.test' {}
declare module 'src/test/abilities/shield_dust.test' {}
declare module 'src/test/abilities/shields_down.test' {}
declare module 'src/test/abilities/steely_spirit.test' {}
declare module 'src/test/abilities/sturdy.test' {}
declare module 'src/test/abilities/unseen_fist.test' {}
declare module 'src/test/abilities/volt_absorb.test' {}
declare module 'src/test/abilities/wind_power.test' {}
declare module 'src/test/abilities/wind_rider.test' {}
declare module 'src/test/abilities/wonder_skin.test' {}
declare module 'src/test/abilities/zen_mode.test' {}
declare module 'src/test/abilities/zero_to_hero.test' {}
declare module 'src/test/achievements/achievement.test' {}
declare module 'src/test/battle/battle-order.test' {}
declare module 'src/test/battle/battle.test' {}
declare module 'src/test/battle/error-handling.test' {}
declare module 'src/test/battle/special_battle.test' {}
declare module 'src/test/eggs/egg.test' {}
declare module 'src/test/inputs/inputs.test' {}
declare module 'src/test/items/eviolite.test' {}
declare module 'src/test/items/grip_claw.test' {}
declare module 'src/test/items/light_ball.test' {}
declare module 'src/test/items/metal_powder.test' {}
declare module 'src/test/items/quick_powder.test' {}
declare module 'src/test/items/thick_club.test' {}
declare module 'src/test/items/toxic_orb.test' {}
declare module 'src/test/lokalisation/battle-stat.test' {}
declare module 'src/test/lokalisation/french.test' {}
declare module 'src/test/lokalisation/status-effect.test' {}
declare module 'src/test/moves/aurora_veil.test' {}
declare module 'src/test/moves/flower_shield.test' {}
declare module 'src/test/moves/follow_me.test' {}
declare module 'src/test/moves/gastro_acid.test' {}
declare module 'src/test/moves/growth.test' {}
declare module 'src/test/moves/light_screen.test' {}
declare module 'src/test/moves/magnet_rise.test' {}
declare module 'src/test/moves/make_it_rain.test' {}
declare module 'src/test/moves/purify.test' {}
declare module 'src/test/moves/rage_powder.test' {}
declare module 'src/test/moves/reflect.test' {}
declare module 'src/test/moves/roost.test' {}
declare module 'src/test/moves/spikes.test' {}
declare module 'src/test/moves/spotlight.test' {}
declare module 'src/test/moves/tackle.test' {}
declare module 'src/test/moves/tail_whip.test' {}
declare module 'src/test/moves/tailwind.test' {}
declare module 'src/test/moves/thousand_arrows.test' {}
declare module 'src/test/moves/tidy_up.test' {}
declare module 'src/test/phases/phases.test' {}
declare module 'src/test/settingMenu/helpers/menuManip' {
  export class MenuManip {
    private config;
    private settingName;
    private keycode;
    private icon;
    private iconDisplayed;
    private specialCaseIcon;
    constructor(config: any);
    convertNameToButtonString(input: any): any;
    whenCursorIsOnSetting(settingName: any): this;
    iconDisplayedIs(icon: any): this;
    thereShouldBeNoIconAnymore(): this;
    thereShouldBeNoIcon(): this;
    nothingShouldHappen(): this;
    weWantThisBindInstead(keycode: any): this;
    whenWeDelete(settingName?: string): this;
    whenWeTryToDelete(settingName?: string): this;
    confirmAssignment(): void;
    butLetsForceIt(): void;
    confirm(): void;
    weCantAssignThisKey(): this;
    weCantOverrideThisBind(): this;
    weCantDelete(): this;
  }
}
declare module 'src/test/settingMenu/helpers/inGameManip' {
  export class InGameManip {
    private config;
    private keycode;
    private settingName;
    private icon;
    private configs;
    private latestSource;
    private selectedDevice;
    constructor(configs: any, config: any, selectedDevice: any);
    whenWePressOnKeyboard(keycode: any): this;
    nothingShouldHappen(): this;
    forTheWantedBind(settingName: any): this;
    weShouldSeeTheIcon(icon: any): this;
    forTheSource(source: any): this;
    normalizeSettingNameString(input: any): any;
    weShouldTriggerTheButton(settingName: any): this;
  }
}
declare module 'src/test/settingMenu/rebinding_setting.test' {}
declare module 'src/test/sprites/spritesUtils' {
  export function getAppRootDir(): string;
}
declare module 'src/test/sprites/pokemonSprite.test' {}
declare module 'src/test/ui/starter-select.test' {}
declare module 'src/test/utils/misc.test' {}
declare module 'src/ui/daily-run-scoreboard' {
  import BattleScene from 'src/battle-scene';
  interface RankingEntry {
    rank: number;
    username: string;
    score: number;
    wave: number;
  }
  enum ScoreboardCategory {
    DAILY = 0,
    WEEKLY = 1,
  }
  export class DailyRunScoreboard {
    private loadingLabel;
    private titleLabel;
    private rankingsContainer;
    private prevCategoryButton;
    private nextCategoryButton;
    private prevPageButton;
    private pageNumberLabel;
    private nextPageButton;
    private pageCount;
    private page;
    private category;
    private _isUpdating;
    constructor(scene: BattleScene, x: number, y: number);
    /**
     * Sets the updating state and updates button states accordingly.
     * If value is true (updating), disables the buttons; if false, enables the buttons.
     * @param {boolean} value - The new updating state.
     */
    set isUpdating(value: boolean);
    /**
     * Gets the current updating state.
     * @returns {boolean} - The current updating state.
     */
    get isUpdating(): boolean;
    setup(): void;
    updateRankings(rankings: RankingEntry[]): void;
    /**
     * Updates the scoreboard rankings based on the selected category and page.
     *
     * If the update process is already ongoing, the method exits early. Otherwise, it begins the update process by clearing
     * the current rankings and showing a loading label. If the category changes, the page is reset to 1.
     *
     * The method fetches the total page count if necessary, followed by fetching the rankings for the specified category
     * and page. It updates the UI with the fetched rankings or shows an appropriate message if no rankings are found.
     *
     * @param {ScoreboardCategory} [category=this.category] - The category to fetch rankings for. Defaults to the current category.
     * @param {number} [page=this.page] - The page number to fetch. Defaults to the current page.
     */
    update(category?: ScoreboardCategory, page?: number): void;
    /**
     * Sets the state of the navigation buttons.
     * @param {boolean} [enabled=true] - Whether the buttons should be enabled or disabled.
     */
    setButtonsState(enabled?: boolean): void;
  }
  export interface DailyRunScoreboard {
    scene: BattleScene;
  }
}
declare module 'src/ui/settings/abstract-control-settings-ui-handler' {
  import UiHandler from 'src/ui/ui-handler';
  import BattleScene from 'src/battle-scene';
  import {Mode} from 'src/ui/ui';
  import {InterfaceConfig} from 'src/inputs-controller';
  import NavigationMenu from 'src/ui/settings/navigationMenu';
  import {Device} from 'src/enums/devices';
  import {Button} from 'src/enums/buttons';
  export interface InputsIcons {
    [key: string]: any;
  }
  export interface LayoutConfig {
    optionsContainer: any;
    inputsIcons: InputsIcons;
    settingLabels: any[];
    optionValueLabels: any[][];
    optionCursors: number[];
    keys: string[];
    bindingSettings: Array<string>;
  }
  /**
   * Abstract class for handling UI elements related to control settings.
   */
  export default abstract class AbstractControlSettingsUiHandler extends UiHandler {
    protected settingsContainer: any;
    protected optionsContainer: any;
    protected navigationContainer: NavigationMenu;
    protected scrollCursor: number;
    protected optionCursors: number[];
    protected cursorObj: any;
    protected optionsBg: any;
    protected actionsBg: any;
    protected settingLabels: any[];
    protected optionValueLabels: any[][];
    protected layout: Map<string, LayoutConfig>;
    protected inputsIcons: InputsIcons;
    protected navigationIcons: InputsIcons;
    protected keys: Array<string>;
    protected bindingSettings: Array<string>;
    protected setting: any;
    protected settingBlacklisted: any;
    protected settingDeviceDefaults: any;
    protected settingDeviceOptions: any;
    protected configs: any;
    protected commonSettingsCount: any;
    protected textureOverride: any;
    protected titleSelected: any;
    protected localStoragePropertyName: any;
    protected rowsToDisplay: number;
    protected device: Device;
    abstract saveSettingToLocalStorage(setting: any, cursor: any): void;
    abstract setSetting(scene: BattleScene, setting: any, value: number): boolean;
    /**
     * Constructor for the AbstractSettingsUiHandler.
     *
     * @param scene - The BattleScene instance.
     * @param mode - The UI mode.
     */
    constructor(scene: BattleScene, mode?: Mode);
    getLocalStorageSetting(): object;
    private camelize;
    /**
     * Setup UI elements.
     */
    setup(): void;
    /**
     * Get the active configuration.
     *
     * @returns The active configuration for current device
     */
    getActiveConfig(): InterfaceConfig;
    /**
     * Update the bindings for the current active device configuration.
     */
    updateBindings(): void;
    updateNavigationDisplay(): void;
    /**
     * Show the UI with the provided arguments.
     *
     * @param args - Arguments to be passed to the show method.
     * @returns `true` if successful.
     */
    show(args: any[]): boolean;
    /**
     * Set the UI layout for the active device configuration.
     *
     * @param activeConfig - The active device configuration.
     * @returns `true` if the layout was successfully applied, otherwise `false`.
     */
    setLayout(activeConfig: InterfaceConfig): boolean;
    /**
     * Process the input for the given button.
     *
     * @param button - The button to process.
     * @returns `true` if the input was processed successfully.
     */
    processInput(button: Button): boolean;
    resetScroll(): void;
    /**
     * Set the cursor to the specified position.
     *
     * @param cursor - The cursor position to set.
     * @returns `true` if the cursor was set successfully.
     */
    setCursor(cursor: number): boolean;
    /**
     * Set the scroll cursor to the specified position.
     *
     * @param scrollCursor - The scroll cursor position to set.
     * @returns `true` if the scroll cursor was set successfully.
     */
    setScrollCursor(scrollCursor: number): boolean;
    /**
     * Set the option cursor to the specified position.
     *
     * @param settingIndex - The index of the setting.
     * @param cursor - The cursor position to set.
     * @param save - Whether to save the setting to local storage.
     * @returns `true` if the option cursor was set successfully.
     */
    setOptionCursor(settingIndex: number, cursor: number, save?: boolean): boolean;
    /**
     * Update the scroll position of the settings UI.
     */
    updateSettingsScroll(): void;
    /**
     * Clear the UI elements and state.
     */
    clear(): void;
    /**
     * Erase the cursor from the UI.
     */
    eraseCursor(): void;
  }
}
