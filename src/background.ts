import {SessionSaveData, SystemSaveData} from 'pokerogue/system/game-data';
import {browserApi} from './libs/browser';
import BGGetSaveDataMessage from './messaging/bg_get_save_data_message';
import Message from './messaging/message';
import UpdateAlliesDivMessage from './messaging/update_allies_div_message';
import UpdateEnemiesDivMessage from './messaging/update_enemies_div_message';
import {convertToFrontendPokemons} from './types/frontend';

// const browserApi = window.browser ?? window.chrome;
let slotId = -1;

async function sendMessageToActiveTab(message: Message): Promise<void> {
  console.trace('sendMessageToActiveTab 호출', message);

  const tabs = await browserApi.tabs.query({active: true, currentWindow: true});
  if (tabs.length > 0 && tabs[0].id) {
    browserApi.tabs.sendMessage(tabs[0].id, message);
  }
}

browserApi.runtime.onMessage.addListener(async (request: Message) => {
  // Happens when loading a savegame or continuing an old run
  console.log('background received message: ', request);
  if (request instanceof BGGetSaveDataMessage) {
    const savedata = request.data;
    slotId = request.slotId;
    console.log('Received save data', savedata);
    const enemyParty = await convertToFrontendPokemons(savedata.enemyParty);
    sendMessageToActiveTab(new UpdateEnemiesDivMessage(enemyParty, savedata.arena.weather, slotId));
    const alliesParty = await convertToFrontendPokemons(savedata.party);
    sendMessageToActiveTab(new UpdateAlliesDivMessage(alliesParty, savedata.arena.weather, slotId));
  }
});

interface SaveAllData {
  system: SystemSaveData;
  session: SessionSaveData;
  sessionSlotId: number;
  clientSessionId: string;
}

browserApi.webRequest.onBeforeRequest.addListener(
  details => {
    if (details.method === 'POST' && details.url.includes('updateall')) {
      try {
        const saveAllData: SaveAllData = JSON.parse(new TextDecoder().decode(details.requestBody?.raw?.at(0)?.bytes));
        console.log('POST Session data:', saveAllData);
        const sessionData = saveAllData.session;

        convertToFrontendPokemons(sessionData.enemyParty).then(enemyParty => {
          sendMessageToActiveTab(new UpdateEnemiesDivMessage(enemyParty, sessionData.arena.weather, slotId));
        });

        convertToFrontendPokemons(sessionData.party).then(alliesParty => {
          sendMessageToActiveTab(new UpdateAlliesDivMessage(alliesParty, sessionData.arena.weather, slotId));
        });
      } catch (e) {
        console.error('Error while intercepting web request: ', e);
      }
    }
  },
  {
    urls: ['https://api.pokerogue.net/savedata/update?datatype=1*', 'https://api.pokerogue.net/savedata/updateall'],
  },
  ['requestBody']
);
