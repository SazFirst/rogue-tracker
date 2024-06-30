import {TrainerConfig} from '../data/trainer-config';

export enum TrainerVariant {
  DEFAULT,
  FEMALE,
  DOUBLE,
}

export default class Trainer {
  public config: TrainerConfig = {} as TrainerConfig;
  public variant: TrainerVariant = {} as TrainerVariant;
  public partyTemplateIndex: number = 0;
  public name: string = '';
  public partnerName: string = '';
}

// export default interface Trainer {
//   scene: BattleScene;
// }
