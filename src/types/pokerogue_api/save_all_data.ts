import {SessionSaveData, SystemSaveData} from '../../pokerogue/system/game-data';

export interface SaveAllData {
  system: SystemSaveData;
  session: SessionSaveData;
  sessionSlotId: number;
  clientSessionId: string;
}
