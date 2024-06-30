import {SystemSaveData} from '../pokerogue/system/game-data';

const saveKey = 'x0i2O7WRiANTqPmZ';
let currentSessionData = '';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class LocalStorageUtils {
  static slotId = -1;

  static getCurrentSessionData(localStorage: Storage): SystemSaveData {
    Object.keys(localStorage).some(key => {
      if ((this.slotId > 0 && key.includes(`sessionData${this.slotId}`)) || key.includes('sessionData')) {
        const data = localStorage.getItem(key);
        if (data) {
          currentSessionData = data;
        }
      }
    });
    return JSON.parse(CryptoJS.AES.decrypt(currentSessionData, saveKey).toString(CryptoJS.enc.Utf8));
  }

  static cleanSessionData(): boolean {
    const removeKeys: string[] = [];
    Object.keys(localStorage).some(key => {
      if (key.includes('sessionData')) removeKeys.push(key);
    });
    console.log('Found the following keys in localStorage:', removeKeys);
    for (const key of removeKeys) {
      localStorage.removeItem(key);
    }

    return removeKeys.length > 0;
  }
}
