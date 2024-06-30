import {Abilities} from '../enums/abilities';
import {GrowthRate} from 'pokenode-ts';
import {Species} from '../enums/species';
import {Type} from './type';

export enum Region {
  NORMAL,
  ALOLA,
  GALAR,
  HISUI,
  PALDEA,
}

export type PokemonSpeciesFilter = (species: PokemonSpecies) => boolean;

export abstract class PokemonSpeciesForm {
  public speciesId: Species = {} as Species;
  public formIndex: number = 0;
  public generation: number = 0;
  public type1: Type;
  public type2: Type;
  public height: number;
  public weight: number;
  public ability1: Abilities;
  public ability2: Abilities;
  public abilityHidden: Abilities;
  public baseTotal: number;
  public baseStats: number[];
  public catchRate: number;
  public baseFriendship: number;
  public baseExp: number;
  public genderDiffs: boolean;
  public isStarterSelectable: boolean;

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
  ) {
    this.type1 = type1;
    this.type2 = type2;
    this.height = height;
    this.weight = weight;
    this.ability1 = ability1;
    this.ability2 = ability2;
    this.abilityHidden = abilityHidden;
    this.baseTotal = baseTotal;
    this.baseStats = [baseHp, baseAtk, baseDef, baseSpatk, baseSpdef, baseSpd];
    this.catchRate = catchRate;
    this.baseFriendship = baseFriendship;
    this.baseExp = baseExp;
    this.genderDiffs = genderDiffs;
    this.isStarterSelectable = isStarterSelectable;
  }
}

export default class PokemonSpecies extends PokemonSpeciesForm {
  public name: string = '';
  public subLegendary: boolean;
  public legendary: boolean;
  public mythical: boolean;
  public species: string;
  public growthRate: GrowthRate = {} as GrowthRate;
  public malePercent: number;
  public genderDiffs: boolean;
  public canChangeForm: boolean;
  public forms: PokemonForm[];

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
  ) {
    super(
      type1,
      type2,
      height,
      weight,
      ability1,
      ability2,
      abilityHidden,
      baseTotal,
      baseHp,
      baseAtk,
      baseDef,
      baseSpatk,
      baseSpdef,
      baseSpd,
      catchRate,
      baseFriendship,
      baseExp,
      genderDiffs,
      false
    );
    this.speciesId = id;
    this.formIndex = 0;
    this.generation = generation;
    this.subLegendary = subLegendary;
    this.legendary = legendary;
    this.mythical = mythical;
    this.species = species;
    this.growthRate = growthRate;
    this.malePercent = malePercent;
    this.genderDiffs = genderDiffs;
    this.canChangeForm = !!canChangeForm;
    this.forms = forms;

    forms.forEach((form, f) => {
      form.speciesId = id;
      form.formIndex = f;
      form.generation = generation;
    });
  }
}

export class PokemonForm extends PokemonSpeciesForm {
  public formName: string;
  public formKey: string;
  public formSpriteKey: string = '';

  // This is a collection of form keys that have in-run form changes, but should still be separately selectable from the start screen
  private starterSelectableKeys: string[] = [
    '10',
    '50',
    '10-pc',
    '50-pc',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];

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
  ) {
    super(
      type1,
      type2,
      height,
      weight,
      ability1,
      ability2,
      abilityHidden,
      baseTotal,
      baseHp,
      baseAtk,
      baseDef,
      baseSpatk,
      baseSpdef,
      baseSpd,
      catchRate,
      baseFriendship,
      baseExp,
      !!genderDiffs,
      !!isStarterSelectable || !formKey
    );
    this.formName = formName;
    this.formKey = formKey;
  }
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
