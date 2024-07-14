import {browserApi} from './libs/browser';
import BGGetSaveDataMessage from './messaging/bg_get_save_data_message';

console.log('content script start');

// inject injected script
const s = document.createElement('script');
s.src = browserApi.runtime.getURL('injected.js');
s.onload = function (): void {
  // TODO 주석 해제
  // this.remove();
};
(document.head || document.documentElement).appendChild(s);

// receive message from injected script
window.addEventListener('message', e => {
  if (e.data.type === 'GET_SAVEDATA') {
    browserApi.runtime.sendMessage(new BGGetSaveDataMessage(e.data.data, e.data.slotId)).then(response => {
      if (response && response.success) {
        console.log('Successfully updated game info');
      } else {
        console.error('Failed to update game info');
      }
    });
  }
});
