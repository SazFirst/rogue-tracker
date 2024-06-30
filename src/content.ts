import {HttpUtils} from './libs/httputils';
import {LocalStorageUtils} from './libs/localstorageutils';
import Message from './messaging/message';
import UpdateAlliesDivMessage from './messaging/update_allies_div_message';
import UpdateEnemiesDivMessage from './messaging/update_enemies_div_message';
import {browserApi} from './libs/browser';

// RogueDex is running! 렌더링
// HttpUtils.createTopBannerDiv();
HttpUtils.createWrapperDivs();

chrome.runtime.onMessage.addListener((message: Message, sender, sendResponse) => {
  console.log(
    'Got message:',
    message,
    'from',
    sender,
    'current message:',
    document.getElementById('touchControls')?.getAttribute('data-ui-mode')
  );
  const uiMode = touchControlsElement?.getAttribute('data-ui-mode');
  console.log('Current ui mode: ', uiMode);

  if (message instanceof UpdateAlliesDivMessage) {
    LocalStorageUtils.slotId = message.slotId;
    if (uiMode === 'SAVE_SLOT') LocalStorageUtils.cleanSessionData();
    if (uiMode === 'TITLE' || uiMode === 'SAVE_SLOT') return sendResponse({success: true});

    HttpUtils.updateFromMessage(message);
    HttpUtils.createCardsDiv('allies');
    sendResponse({success: true});
  } else if (message instanceof UpdateEnemiesDivMessage) {
    LocalStorageUtils.slotId = message.slotId;
    if (uiMode === 'SAVE_SLOT') LocalStorageUtils.cleanSessionData();
    if (uiMode === 'TITLE' || uiMode === 'SAVE_SLOT') return sendResponse({success: true});

    HttpUtils.updateFromMessage(message);
    HttpUtils.createCardsDiv('enemies');
    sendResponse({success: true});
  }
});

const touchControlsElement = document.getElementById('touchControls');
if (touchControlsElement) {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(async mutation => {
      if (!(mutation.type === 'attributes' && mutation.attributeName === 'data-ui-mode')) return;
      const newValue = touchControlsElement.getAttribute('data-ui-mode');
      console.log('New data-ui-mode:', newValue);
      if (newValue === 'MESSAGE' || newValue === 'COMMAND' || newValue === 'CONFIRM') {
        browserApi.runtime.sendMessage({
          type: 'BG_GET_SAVEDATA',
          data: LocalStorageUtils.getCurrentSessionData(localStorage),
          slotId: LocalStorageUtils.slotId,
        });
      } else {
        if (newValue === 'SAVE_SLOT') {
          //TODO: Perhaps observe changes in local storage?
          setTimeout(LocalStorageUtils.cleanSessionData, 1000);
        }
        HttpUtils.deleteWrapperDivs();
      }
    });
  });

  observer.observe(touchControlsElement, {attributes: true});
}
