import MessageId from './message_id';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class Message {
  id: MessageId;

  constructor(id: MessageId) {
    this.id = id;
  }

  static [Symbol.hasInstance](instance: Message): boolean {
    if (instance.id in MessageId) {
      return true;
    }
    return false;
  }
}
