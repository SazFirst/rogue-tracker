import Message from './message';
import MessageId from './message_id';
import {SessionSaveData} from '../pokerogue/system/game-data';

export default class BGGetSaveDataMessage extends Message {
  type: string;
  data: SessionSaveData;
  slotId: number;

  constructor(sessionSaveData: SessionSaveData, slotId: number) {
    super(MessageId.BG_GET_SAVEDATA);
    this.type = MessageId[MessageId.BG_GET_SAVEDATA];
    this.data = sessionSaveData;
    this.slotId = slotId;
  }

  static [Symbol.hasInstance](instance: Message): boolean {
    return instance.id === MessageId.BG_GET_SAVEDATA;
  }
}
