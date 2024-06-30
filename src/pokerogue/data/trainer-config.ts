import BattleScene from '../battle-scene';
import {EnemyPokemon} from '../field/pokemon';
import {ModifierTypeFunc} from '../modifier/modifier-type';
import {PartyMemberStrength} from '../enums/party-member-strength';
import {PersistentModifier} from '../modifier/modifier';
import {PokemonSpeciesFilter} from './pokemon-species';
import {Species} from '../enums/species';
import {TrainerType} from '../enums/trainer-type';
import {Type} from './type';

export enum TrainerPoolTier {
  COMMON,
  UNCOMMON,
  RARE,
  SUPER_RARE,
  ULTRA_RARE,
}

export interface TrainerTierPools {
  [key: number]: Species[];
}

export enum TrainerSlot {
  NONE,
  TRAINER,
  TRAINER_PARTNER,
}

export class TrainerPartyTemplate {
  public size: number;
  public strength: PartyMemberStrength;
  public sameSpecies: boolean;
  public balanced: boolean;

  constructor(size: number, strength: PartyMemberStrength, sameSpecies?: boolean, balanced?: boolean) {
    this.size = size;
    this.strength = strength;
    this.sameSpecies = !!sameSpecies;
    this.balanced = !!balanced;
  }
}

export class TrainerPartyCompoundTemplate extends TrainerPartyTemplate {
  public templates: TrainerPartyTemplate[];

  constructor(...templates: TrainerPartyTemplate[]) {
    super(
      templates.reduce((total: number, template: TrainerPartyTemplate) => {
        total += template.size;
        return total;
      }, 0),
      PartyMemberStrength.AVERAGE
    );
    this.templates = templates;
  }
}

type PartyTemplateFunc = (scene: BattleScene) => TrainerPartyTemplate;
type PartyMemberFunc = (scene: BattleScene, level: number, strength: PartyMemberStrength) => EnemyPokemon;
type GenModifiersFunc = (party: EnemyPokemon[]) => PersistentModifier[];

export interface PartyMemberFuncs {
  [key: number]: PartyMemberFunc;
}

export class TrainerConfig {
  public trainerType: TrainerType = {} as TrainerType;
  public trainerTypeDouble: TrainerType = {} as TrainerType;
  public name: string = '';
  public nameFemale: string = '';
  public nameDouble: string = '';
  public title: string = '';
  public titleDouble: string = '';
  public hasGenders: boolean = false;
  public hasDouble: boolean = false;
  public hasCharSprite: boolean = false;
  public doubleOnly: boolean = false;
  public moneyMultiplier: number = 1;
  public isBoss: boolean = false;
  public hasStaticParty: boolean = false;
  public useSameSeedForAllMembers: boolean = false;
  public mixedBattleBgm: string = '';
  public battleBgm: string = '';
  public encounterBgm: string = '';
  public femaleEncounterBgm: string = '';
  public doubleEncounterBgm: string = '';
  public victoryBgm: string = '';
  public genModifiersFunc: GenModifiersFunc = {} as GenModifiersFunc;
  public modifierRewardFuncs: ModifierTypeFunc[] = [];
  public partyTemplates: TrainerPartyTemplate[] = [];
  public partyTemplateFunc: PartyTemplateFunc = {} as PartyTemplateFunc;
  public partyMemberFuncs: PartyMemberFuncs = {};
  public speciesPools: TrainerTierPools = {} as TrainerTierPools;
  public speciesFilter: PokemonSpeciesFilter = {} as PokemonSpeciesFilter;
  public specialtyTypes: Type[] = [];

  public encounterMessages: string[] = [];
  public victoryMessages: string[] = [];
  public defeatMessages: string[] = [];

  public femaleEncounterMessages: string[] = [];
  public femaleVictoryMessages: string[] = [];
  public femaleDefeatMessages: string[] = [];

  public doubleEncounterMessages: string[] = [];
  public doubleVictoryMessages: string[] = [];
  public doubleDefeatMessages: string[] = [];
}
