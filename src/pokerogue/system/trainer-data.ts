import {TrainerType} from '../enums/trainer-type';
import {TrainerVariant} from '../field/trainer';

export default class TrainerData {
  public trainerType: TrainerType = {} as TrainerType;
  public variant: TrainerVariant = {} as TrainerVariant;
  public partyTemplateIndex: number = 0;
  public name: string = '';
  public partnerName: string = '';
}
