/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const message_1 = __webpack_require__(2);
const message_id_1 = __webpack_require__(3);
class BGGetSaveDataMessage extends message_1.default {
    constructor(sessionSaveData, slotId) {
        super(message_id_1.default.BG_GET_SAVEDATA);
        this.type = message_id_1.default[message_id_1.default.BG_GET_SAVEDATA];
        this.data = sessionSaveData;
        this.slotId = slotId;
    }
    static [Symbol.hasInstance](instance) {
        return instance.id === message_id_1.default.BG_GET_SAVEDATA;
    }
}
exports["default"] = BGGetSaveDataMessage;


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const message_id_1 = __webpack_require__(3);
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Message {
    constructor(id) {
        this.id = id;
    }
    static [Symbol.hasInstance](instance) {
        if (instance.id in message_id_1.default) {
            return true;
        }
        return false;
    }
}
exports["default"] = Message;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var MessageId;
(function (MessageId) {
    MessageId[MessageId["BG_GET_SAVEDATA"] = 0] = "BG_GET_SAVEDATA";
    MessageId[MessageId["UPDATE_ENEMIES_DIV"] = 1] = "UPDATE_ENEMIES_DIV";
    MessageId[MessageId["UPDATE_ALLIES_DIV"] = 2] = "UPDATE_ALLIES_DIV";
})(MessageId || (MessageId = {}));
exports["default"] = MessageId;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const bg_get_save_data_message_1 = __webpack_require__(1);
console.log('content script start');
const browserApi = (_a = window.browser) !== null && _a !== void 0 ? _a : window.chrome;
// inject injected script
const s = document.createElement('script');
s.src = browserApi.runtime.getURL('injected.js');
s.onload = function () {
    // TODO 주석 해제
    // this.remove();
};
(document.head || document.documentElement).appendChild(s);
// receive message from injected script
window.addEventListener('message', e => {
    if (e.data.type === 'GET_SAVEDATA') {
        browserApi.runtime.sendMessage(new bg_get_save_data_message_1.default(e.data.data, e.data.slotId)).then(response => {
            if (response && response.success) {
                console.log('Successfully updated game info');
            }
            else {
                console.error('Failed to update game info');
            }
        });
    }
});

})();

/******/ })()
;