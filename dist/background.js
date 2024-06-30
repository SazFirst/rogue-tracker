/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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

"use strict";

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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var MessageId;
(function (MessageId) {
    MessageId[MessageId["BG_GET_SAVEDATA"] = 0] = "BG_GET_SAVEDATA";
    MessageId[MessageId["UPDATE_ENEMIES_DIV"] = 1] = "UPDATE_ENEMIES_DIV";
    MessageId[MessageId["UPDATE_ALLIES_DIV"] = 2] = "UPDATE_ALLIES_DIV";
})(MessageId || (MessageId = {}));
exports["default"] = MessageId;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNatureStatMultiplier = exports.Nature = void 0;
const pokemon_stat_1 = __webpack_require__(5);
var Nature;
(function (Nature) {
    Nature[Nature["HARDY"] = 0] = "HARDY";
    Nature[Nature["LONELY"] = 1] = "LONELY";
    Nature[Nature["BRAVE"] = 2] = "BRAVE";
    Nature[Nature["ADAMANT"] = 3] = "ADAMANT";
    Nature[Nature["NAUGHTY"] = 4] = "NAUGHTY";
    Nature[Nature["BOLD"] = 5] = "BOLD";
    Nature[Nature["DOCILE"] = 6] = "DOCILE";
    Nature[Nature["RELAXED"] = 7] = "RELAXED";
    Nature[Nature["IMPISH"] = 8] = "IMPISH";
    Nature[Nature["LAX"] = 9] = "LAX";
    Nature[Nature["TIMID"] = 10] = "TIMID";
    Nature[Nature["HASTY"] = 11] = "HASTY";
    Nature[Nature["SERIOUS"] = 12] = "SERIOUS";
    Nature[Nature["JOLLY"] = 13] = "JOLLY";
    Nature[Nature["NAIVE"] = 14] = "NAIVE";
    Nature[Nature["MODEST"] = 15] = "MODEST";
    Nature[Nature["MILD"] = 16] = "MILD";
    Nature[Nature["QUIET"] = 17] = "QUIET";
    Nature[Nature["BASHFUL"] = 18] = "BASHFUL";
    Nature[Nature["RASH"] = 19] = "RASH";
    Nature[Nature["CALM"] = 20] = "CALM";
    Nature[Nature["GENTLE"] = 21] = "GENTLE";
    Nature[Nature["SASSY"] = 22] = "SASSY";
    Nature[Nature["CAREFUL"] = 23] = "CAREFUL";
    Nature[Nature["QUIRKY"] = 24] = "QUIRKY";
})(Nature || (exports.Nature = Nature = {}));
function getNatureStatMultiplier(nature, stat) {
    switch (stat) {
        case pokemon_stat_1.Stat.ATK:
            switch (nature) {
                case Nature.LONELY:
                case Nature.BRAVE:
                case Nature.ADAMANT:
                case Nature.NAUGHTY:
                    return 1.1;
                case Nature.BOLD:
                case Nature.TIMID:
                case Nature.MODEST:
                case Nature.CALM:
                    return 0.9;
            }
            break;
        case pokemon_stat_1.Stat.DEF:
            switch (nature) {
                case Nature.BOLD:
                case Nature.RELAXED:
                case Nature.IMPISH:
                case Nature.LAX:
                    return 1.1;
                case Nature.LONELY:
                case Nature.HASTY:
                case Nature.MILD:
                case Nature.GENTLE:
                    return 0.9;
            }
            break;
        case pokemon_stat_1.Stat.SPATK:
            switch (nature) {
                case Nature.MODEST:
                case Nature.MILD:
                case Nature.QUIET:
                case Nature.RASH:
                    return 1.1;
                case Nature.ADAMANT:
                case Nature.IMPISH:
                case Nature.JOLLY:
                case Nature.CAREFUL:
                    return 0.9;
            }
            break;
        case pokemon_stat_1.Stat.SPDEF:
            switch (nature) {
                case Nature.CALM:
                case Nature.GENTLE:
                case Nature.SASSY:
                case Nature.CAREFUL:
                    return 1.1;
                case Nature.NAUGHTY:
                case Nature.LAX:
                case Nature.NAIVE:
                case Nature.RASH:
                    return 0.9;
            }
            break;
        case pokemon_stat_1.Stat.SPD:
            switch (nature) {
                case Nature.TIMID:
                case Nature.HASTY:
                case Nature.JOLLY:
                case Nature.NAIVE:
                    return 1.1;
                case Nature.BRAVE:
                case Nature.RELAXED:
                case Nature.QUIET:
                case Nature.SASSY:
                    return 0.9;
            }
            break;
    }
    return 1;
}
exports.getNatureStatMultiplier = getNatureStatMultiplier;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getStatName = exports.Stat = void 0;
const i18next_1 = __webpack_require__(6);
var Stat;
(function (Stat) {
    Stat[Stat["HP"] = 0] = "HP";
    Stat[Stat["ATK"] = 1] = "ATK";
    Stat[Stat["DEF"] = 2] = "DEF";
    Stat[Stat["SPATK"] = 3] = "SPATK";
    Stat[Stat["SPDEF"] = 4] = "SPDEF";
    Stat[Stat["SPD"] = 5] = "SPD";
})(Stat || (exports.Stat = Stat = {}));
function getStatName(stat, shorten = false) {
    let ret;
    switch (stat) {
        case Stat.HP:
            ret = !shorten ? i18next_1.default.t("pokemonInfo:Stat.HP") : i18next_1.default.t("pokemonInfo:Stat.HPshortened");
            break;
        case Stat.ATK:
            ret = !shorten ? i18next_1.default.t("pokemonInfo:Stat.ATK") : i18next_1.default.t("pokemonInfo:Stat.ATKshortened");
            break;
        case Stat.DEF:
            ret = !shorten ? i18next_1.default.t("pokemonInfo:Stat.DEF") : i18next_1.default.t("pokemonInfo:Stat.DEFshortened");
            break;
        case Stat.SPATK:
            ret = !shorten ? i18next_1.default.t("pokemonInfo:Stat.SPATK") : i18next_1.default.t("pokemonInfo:Stat.SPATKshortened");
            break;
        case Stat.SPDEF:
            ret = !shorten ? i18next_1.default.t("pokemonInfo:Stat.SPDEF") : i18next_1.default.t("pokemonInfo:Stat.SPDEFshortened");
            break;
        case Stat.SPD:
            ret = !shorten ? i18next_1.default.t("pokemonInfo:Stat.SPD") : i18next_1.default.t("pokemonInfo:Stat.SPDshortened");
            break;
    }
    return ret;
}
exports.getStatName = getStatName;


/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


const consoleLogger = {
  type: 'logger',
  log(args) {
    this.output('log', args);
  },
  warn(args) {
    this.output('warn', args);
  },
  error(args) {
    this.output('error', args);
  },
  output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};
class Logger {
  constructor(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.init(concreteLogger, options);
  }
  init(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.prefix = options.prefix || 'i18next:';
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.forward(args, 'log', '', true);
  }
  warn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this.forward(args, 'warn', '', true);
  }
  error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this.forward(args, 'error', '');
  }
  deprecate() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    if (typeof args[0] === 'string') args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
}
var baseLogger = new Logger();

class EventEmitter {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(' ').forEach(event => {
      if (!this.observers[event]) this.observers[event] = new Map();
      const numListeners = this.observers[event].get(listener) || 0;
      this.observers[event].set(listener, numListeners + 1);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event]) return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.observers[event]) {
      const cloned = Array.from(this.observers[event].entries());
      cloned.forEach(_ref => {
        let [observer, numTimesAdded] = _ref;
        for (let i = 0; i < numTimesAdded; i++) {
          observer(...args);
        }
      });
    }
    if (this.observers['*']) {
      const cloned = Array.from(this.observers['*'].entries());
      cloned.forEach(_ref2 => {
        let [observer, numTimesAdded] = _ref2;
        for (let i = 0; i < numTimesAdded; i++) {
          observer.apply(observer, [event, ...args]);
        }
      });
    }
  }
}

function defer() {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  return '' + object;
}
function copy(a, s, t) {
  a.forEach(m => {
    if (s[m]) t[m] = s[m];
  });
}
const lastOfPathSeparatorRegExp = /###/g;
function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(lastOfPathSeparatorRegExp, '.') : key;
  }
  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }
  const stack = typeof path !== 'string' ? path : path.split('.');
  let stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper()) return {};
    const key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty) object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
}
function setPath(object, path, newValue) {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  if (obj !== undefined || path.length === 1) {
    obj[k] = newValue;
    return;
  }
  let e = path[path.length - 1];
  let p = path.slice(0, path.length - 1);
  let last = getLastOfPath(object, p, Object);
  while (last.obj === undefined && p.length) {
    e = `${p[p.length - 1]}.${e}`;
    p = p.slice(0, p.length - 1);
    last = getLastOfPath(object, p, Object);
    if (last && last.obj && typeof last.obj[`${last.k}.${e}`] !== 'undefined') {
      last.obj = undefined;
    }
  }
  last.obj[`${last.k}.${e}`] = newValue;
}
function pushPath(object, path, newValue, concat) {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  const {
    obj,
    k
  } = getLastOfPath(object, path);
  if (!obj) return undefined;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  const value = getPath(data, key);
  if (value !== undefined) {
    return value;
  }
  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (const prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, s => _entityMap[s]);
  }
  return data;
}
class RegExpCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.regExpMap = new Map();
    this.regExpQueue = [];
  }
  getRegExp(pattern) {
    const regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== undefined) {
      return regExpFromCache;
    }
    const regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  }
}
const chars = [' ', ',', '?', '!', ';'];
const looksLikeObjectPathRegExpCache = new RegExpCache(20);
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || '';
  keySeparator = keySeparator || '';
  const possibleChars = chars.filter(c => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
  if (possibleChars.length === 0) return true;
  const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map(c => c === '?' ? '\\?' : c).join('|')})`);
  let matched = !r.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
}
function deepFind(obj, path) {
  let keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  if (!obj) return undefined;
  if (obj[path]) return obj[path];
  const tokens = path.split(keySeparator);
  let current = obj;
  for (let i = 0; i < tokens.length;) {
    if (!current || typeof current !== 'object') {
      return undefined;
    }
    let next;
    let nextPath = '';
    for (let j = i; j < tokens.length; ++j) {
      if (j !== i) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current[nextPath];
      if (next !== undefined) {
        if (['string', 'number', 'boolean'].indexOf(typeof next) > -1 && j < tokens.length - 1) {
          continue;
        }
        i += j - i + 1;
        break;
      }
    }
    current = next;
  }
  return current;
}
function getCleanedCode(code) {
  if (code && code.indexOf('_') > 0) return code.replace('_', '-');
  return code;
}

class ResourceStore extends EventEmitter {
  constructor(data) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = '.';
    }
    if (this.options.ignoreJSONStructure === undefined) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path;
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
    } else {
      path = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          path.push(...key);
        } else if (typeof key === 'string' && keySeparator) {
          path.push(...key.split(keySeparator));
        } else {
          path.push(key);
        }
      }
    }
    const result = getPath(this.data, path);
    if (!result && !ns && !key && lng.indexOf('.') > -1) {
      lng = path[0];
      ns = path[1];
      key = path.slice(2).join('.');
    }
    if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
    return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
  }
  addResource(lng, ns, key, value) {
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      silent: false
    };
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    let path = [lng, ns];
    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      value = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path, value);
    if (!options.silent) this.emit('added', lng, ns, key, value);
  }
  addResources(lng, ns, resources) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
      silent: false
    };
    for (const m in resources) {
      if (typeof resources[m] === 'string' || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], {
        silent: true
      });
    }
    if (!options.silent) this.emit('added', lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite) {
    let options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
      silent: false,
      skipCopy: false
    };
    let path = [lng, ns];
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      deep = resources;
      resources = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path) || {};
    if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources
      };
    }
    setPath(this.data, path, pack);
    if (!options.silent) this.emit('added', lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit('removed', lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== undefined;
  }
  getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;
    if (this.options.compatibilityAPI === 'v1') return {
      ...{},
      ...this.getResource(lng, ns)
    };
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n = data && Object.keys(data) || [];
    return !!n.find(v => data[v] && Object.keys(data[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}

var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach(processor => {
      if (this.processors[processor]) value = this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

const checkedLoadedFor = {};
class Translator extends EventEmitter {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super();
    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, this);
    this.options = options;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = '.';
    }
    this.logger = baseLogger.create('translator');
  }
  changeLanguage(lng) {
    if (lng) this.language = lng;
  }
  exists(key) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      interpolation: {}
    };
    if (key === undefined || key === null) {
      return false;
    }
    const resolved = this.resolve(key, options);
    return resolved && resolved.res !== undefined;
  }
  extractFromKey(key, options) {
    let nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === undefined) nsSeparator = ':';
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    let namespaces = options.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key,
          namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    if (typeof namespaces === 'string') namespaces = [namespaces];
    return {
      key,
      namespaces
    };
  }
  translate(keys, options, lastKey) {
    if (typeof options !== 'object' && this.options.overloadTranslationOptionHandler) {
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof options === 'object') options = {
      ...options
    };
    if (!options) options = {};
    if (keys === undefined || keys === null) return '';
    if (!Array.isArray(keys)) keys = [String(keys)];
    const returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], options);
    const namespace = namespaces[namespaces.length - 1];
    const lng = options.lng || this.language;
    const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng && lng.toLowerCase() === 'cimode') {
      if (appendNamespaceToCIMode) {
        const nsSeparator = options.nsSeparator || this.options.nsSeparator;
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(options)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(options)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, options);
    let res = resolved && resolved.res;
    const resUsedKey = resolved && resolved.usedKey || key;
    const resExactUsedKey = resolved && resolved.exactUsedKey || key;
    const resType = Object.prototype.toString.apply(res);
    const noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
    const joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';
    if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && Array.isArray(res))) {
      if (!options.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        }
        const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, {
          ...options,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r;
          resolved.usedParams = this.getUsedParamsDetails(options);
          return resolved;
        }
        return r;
      }
      if (keySeparator) {
        const resTypeIsArray = Array.isArray(res);
        const copy = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m in res) {
          if (Object.prototype.hasOwnProperty.call(res, m)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m}`;
            copy[m] = this.translate(deepKey, {
              ...options,
              ...{
                joinArrays: false,
                ns: namespaces
              }
            });
            if (copy[m] === deepKey) copy[m] = res[m];
          }
        }
        res = copy;
      }
    } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, keys, options, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      const needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
      const hasDefaultValue = Translator.hasDefaultValue(options);
      const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
      const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
        ordinal: false
      }) : '';
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const defaultValue = needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] || options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...options,
            keySeparator: false
          });
          if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === 'all') {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
          } else if (this.backendConnector && this.backendConnector.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
          }
          this.emit('missingKey', l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach(language => {
              const suffixes = this.pluralResolver.getSuffixes(language, options);
              if (needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                suffixes.push(`${this.options.pluralSeparator}zero`);
              }
              suffixes.forEach(suffix => {
                send([language], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, options, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = `${namespace}:${key}`;
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        if (this.options.compatibilityAPI !== 'v1') {
          res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : undefined);
        } else {
          res = this.options.parseMissingKeyHandler(res);
        }
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(options);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, options, resolved, lastKey) {
    var _this = this;
    if (this.i18nFormat && this.i18nFormat.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...options
      }, options.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!options.skipInterpolation) {
      if (options.interpolation) this.interpolator.init({
        ...options,
        ...{
          interpolation: {
            ...this.options.interpolation,
            ...options.interpolation
          }
        }
      });
      const skipOnVariables = typeof res === 'string' && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
      if (this.options.interpolation.defaultVariables) data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
      res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft) options.nest = false;
      }
      if (!options.lng && this.options.compatibilityAPI !== 'v1' && resolved && resolved.res) options.lng = resolved.usedLng;
      if (options.nest !== false) res = this.interpolator.nest(res, function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (lastKey && lastKey[0] === args[0] && !options.context) {
          _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
          return null;
        }
        return _this.translate(...args, key);
      }, options);
      if (options.interpolation) this.interpolator.reset();
    }
    const postProcess = options.postProcess || this.options.postProcess;
    const postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;
    if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(options)
        },
        ...options
      } : options, this);
    }
    return res;
  }
  resolve(keys) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (typeof keys === 'string') keys = [keys];
    keys.forEach(k => {
      if (this.isValidLookup(found)) return;
      const extracted = this.extractFromKey(k, options);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const needsContextHandling = options.context !== undefined && (typeof options.context === 'string' || typeof options.context === 'number') && options.context !== '';
      const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
      namespaces.forEach(ns => {
        if (this.isValidLookup(found)) return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(', ')}" won't get resolved as namespace "${usedNS}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        }
        codes.forEach(code => {
          if (this.isValidLookup(found)) return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            let pluralSuffix;
            if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, options.count, options);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              finalKeys.push(key + pluralSuffix);
              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                finalKeys.push(contextKey + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
  }
  getResource(code, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const optionsKeys = ['defaultValue', 'ordinal', 'context', 'replace', 'lng', 'lngs', 'fallbackLng', 'ns', 'keySeparator', 'nsSeparator', 'returnObjects', 'returnDetails', 'joinArrays', 'postProcess', 'interpolation'];
    const useOptionsReplaceForData = options.replace && typeof options.replace !== 'string';
    let data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== 'undefined') {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
    }
    if (!useOptionsReplaceForData) {
      data = {
        ...data
      };
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options) {
    const prefix = 'defaultValue';
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
        return true;
      }
    }
    return false;
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
class LanguageUtil {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf('-') < 0) return null;
    const p = code.split('-');
    if (p.length === 2) return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === 'x') return null;
    return this.formatLanguageCode(p.join('-'));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf('-') < 0) return code;
    const p = code.split('-');
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (typeof code === 'string' && code.indexOf('-') > -1) {
      const specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let p = code.split('-');
      if (this.options.lowerCaseLng) {
        p = p.map(part => part.toLowerCase());
      } else if (p.length === 2) {
        p[0] = p[0].toLowerCase();
        p[1] = p[1].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
      } else if (p.length === 3) {
        p[0] = p[0].toLowerCase();
        if (p[1].length === 2) p[1] = p[1].toUpperCase();
        if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
      }
      return p.join('-');
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes) return null;
    let found;
    codes.forEach(code => {
      if (found) return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach(code => {
        if (found) return;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly)) return found = lngOnly;
        found = this.options.supportedLngs.find(supportedLng => {
          if (supportedLng === lngOnly) return supportedLng;
          if (supportedLng.indexOf('-') < 0 && lngOnly.indexOf('-') < 0) return;
          if (supportedLng.indexOf('-') > 0 && lngOnly.indexOf('-') < 0 && supportedLng.substring(0, supportedLng.indexOf('-')) === lngOnly) return supportedLng;
          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
        });
      });
    }
    if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
    if (typeof fallbacks === 'string') fallbacks = [fallbacks];
    if (Array.isArray(fallbacks)) return fallbacks;
    if (!code) return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found) found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = c => {
      if (!c) return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
      }
    };
    if (typeof code === 'string' && (code.indexOf('-') > -1 || code.indexOf('_') > -1)) {
      if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
      if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
    } else if (typeof code === 'string') {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach(fc => {
      if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
}

let sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he', 'iw'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
let _rulesPluralsTypes = {
  1: function (n) {
    return Number(n > 1);
  },
  2: function (n) {
    return Number(n != 1);
  },
  3: function (n) {
    return 0;
  },
  4: function (n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function (n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function (n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function (n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function (n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function (n) {
    return Number(n >= 2);
  },
  10: function (n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function (n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function (n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function (n) {
    return Number(n !== 0);
  },
  14: function (n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function (n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function (n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function (n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function (n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function (n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function (n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function (n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function (n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
const nonIntlVersions = ['v1', 'v2', 'v3'];
const intlVersions = ['v4'];
const suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function createRules() {
  const rules = {};
  sets.forEach(set => {
    set.lngs.forEach(l => {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}
class PluralResolver {
  constructor(languageUtils) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    if ((!this.options.compatibilityJSON || intlVersions.includes(this.options.compatibilityJSON)) && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
      this.options.compatibilityJSON = 'v3';
      this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
    }
    this.rules = createRules();
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  getRule(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      try {
        return new Intl.PluralRules(getCleanedCode(code === 'dev' ? 'en' : code), {
          type: options.ordinal ? 'ordinal' : 'cardinal'
        });
      } catch (err) {
        return;
      }
    }
    return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  }
  needsPlural(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (this.shouldUseIntlApi()) {
      return rule && rule.resolvedOptions().pluralCategories.length > 1;
    }
    return rule && rule.numbers.length > 1;
  }
  getPluralFormsOfKey(code, key) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return this.getSuffixes(code, options).map(suffix => `${key}${suffix}`);
  }
  getSuffixes(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (!rule) {
      return [];
    }
    if (this.shouldUseIntlApi()) {
      return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map(pluralCategory => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${pluralCategory}`);
    }
    return rule.numbers.map(number => this.getSuffix(code, number, options));
  }
  getSuffix(code, count) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const rule = this.getRule(code, options);
    if (rule) {
      if (this.shouldUseIntlApi()) {
        return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${rule.select(count)}`;
      }
      return this.getSuffixRetroCompatible(rule, count);
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return '';
  }
  getSuffixRetroCompatible(rule, count) {
    const idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
    let suffix = rule.numbers[idx];
    if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      if (suffix === 2) {
        suffix = 'plural';
      } else if (suffix === 1) {
        suffix = '';
      }
    }
    const returnSuffix = () => this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
    if (this.options.compatibilityJSON === 'v1') {
      if (suffix === 1) return '';
      if (typeof suffix === 'number') return `_plural_${suffix.toString()}`;
      return returnSuffix();
    } else if (this.options.compatibilityJSON === 'v2') {
      return returnSuffix();
    } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      return returnSuffix();
    }
    return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
  }
  shouldUseIntlApi() {
    return !nonIntlVersions.includes(this.options.compatibilityJSON);
  }
}

function deepFindWithDefaults(data, defaultData, key) {
  let keySeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
  let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  let path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && typeof key === 'string') {
    path = deepFind(data, key, keySeparator);
    if (path === undefined) path = deepFind(defaultData, key, keySeparator);
  }
  return path;
}
class Interpolator {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.logger = baseLogger.create('interpolator');
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || (value => value);
    this.init(options);
  }
  init() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!options.interpolation) options.interpolation = {
      escapeValue: true
    };
    const {
      escape: escape$1,
      escapeValue,
      useRawValueToEscape,
      prefix,
      prefixEscaped,
      suffix,
      suffixEscaped,
      formatSeparator,
      unescapeSuffix,
      unescapePrefix,
      nestingPrefix,
      nestingPrefixEscaped,
      nestingSuffix,
      nestingSuffixEscaped,
      nestingOptionsSeparator,
      maxReplaces,
      alwaysFormat
    } = options.interpolation;
    this.escape = escape$1 !== undefined ? escape$1 : escape;
    this.escapeValue = escapeValue !== undefined ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== undefined ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || '{{';
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || '}}';
    this.formatSeparator = formatSeparator || ',';
    this.unescapePrefix = unescapeSuffix ? '' : unescapePrefix || '-';
    this.unescapeSuffix = this.unescapePrefix ? '' : unescapeSuffix || '';
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape('$t(');
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(')');
    this.nestingOptionsSeparator = nestingOptionsSeparator || ',';
    this.maxReplaces = maxReplaces || 1000;
    this.alwaysFormat = alwaysFormat !== undefined ? alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options) this.init(this.options);
  }
  resetRegExp() {
    const getOrResetRegExp = (existingRegExp, pattern) => {
      if (existingRegExp && existingRegExp.source === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, 'g');
    };
    this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(str, data, lng, options) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function regexSafe(val) {
      return val.replace(/\$/g, '$$$$');
    }
    const handleFormat = key => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path, undefined, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
        ...options,
        ...data,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: val => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: val => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach(todo => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            const temp = missingInterpolationHandler(str, match, options);
            value = typeof temp === 'string' ? temp : '';
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = '';
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = '';
          }
        } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let match;
    let value;
    let clonedOptions;
    function handleHasOptions(key, inheritedOptions) {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0) return key;
      const c = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c[1]}`;
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions) clonedOptions = {
          ...inheritedOptions,
          ...clonedOptions
        };
      } catch (e) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
        return `${key}${sep}${optionsString}`;
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
      return key;
    }
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && typeof clonedOptions.replace !== 'string' ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      let doReduce = false;
      if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
        const r = match[1].split(this.formatSeparator).map(elem => elem.trim());
        match[1] = r.shift();
        formatters = r;
        doReduce = true;
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && typeof value !== 'string') return value;
      if (typeof value !== 'string') value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = '';
      }
      if (doReduce) {
        value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
}

function parseFormatStr(formatStr) {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf('(') > -1) {
    const p = formatStr.split('(');
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(';');
      opts.forEach(opt => {
        if (opt) {
          const [key, ...rest] = opt.split(':');
          const val = rest.join(':').trim().replace(/^'+|'+$/g, '');
          const trimmedKey = key.trim();
          if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
          if (val === 'false') formatOptions[trimmedKey] = false;
          if (val === 'true') formatOptions[trimmedKey] = true;
          if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
}
function createCachedFormatter(fn) {
  const cache = {};
  return function invokeFormatter(val, lng, options) {
    const key = lng + JSON.stringify(options);
    let formatter = cache[key];
    if (!formatter) {
      formatter = fn(getCleanedCode(lng), options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
}
class Formatter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.logger = baseLogger.create('formatter');
    this.options = options;
    this.formats = {
      number: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      }),
      currency: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: 'currency'
        });
        return val => formatter.format(val);
      }),
      datetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      }),
      relativetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return val => formatter.format(val, opt.range || 'day');
      }),
      list: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      })
    };
    this.init(options);
  }
  init(services) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      interpolation: {}
    };
    const iOpts = options.interpolation;
    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const formats = format.split(this.formatSeparator);
    const result = formats.reduce((mem, f) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
}

function removePending(q, name) {
  if (q.pending[name] !== undefined) {
    delete q.pending[name];
    q.pendingCount--;
  }
}
class Connector extends EventEmitter {
  constructor(backend, store, services) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create('backendConnector');
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    if (this.backend && this.backend.init) {
      this.backend.init(services, options.backend, options);
    }
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach(lng => {
      let hasAllNamespaces = true;
      namespaces.forEach(ns => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0) ; else if (this.state[name] === 1) {
          if (pending[name] === undefined) pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === undefined) pending[name] = true;
          if (toLoad[name] === undefined) toLoad[name] = true;
          if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces) toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split('|');
    const lng = s[0];
    const ns = s[1];
    if (err) this.emit('failedLoading', lng, ns, err);
    if (data) {
      this.store.addResourceBundle(lng, ns, data, undefined, undefined, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    const loaded = {};
    this.queue.forEach(q => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err) q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach(l => {
          if (!loaded[l]) loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach(n => {
              if (loaded[l][n] === undefined) loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit('loaded', loaded);
    this.queue = this.queue.filter(q => !q.done);
  }
  read(lng, ns, fcName) {
    let tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    let wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
    let callback = arguments.length > 5 ? arguments[5] : undefined;
    if (!lng.length) return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r = fc(lng, ns);
        if (r && typeof r.then === 'function') {
          r.then(data => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let callback = arguments.length > 3 ? arguments[3] : undefined;
    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
      return callback && callback();
    }
    if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
    if (typeof namespaces === 'string') namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback();
      return null;
    }
    toLoad.toLoad.forEach(name => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name) {
    let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    const s = name.split('|');
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, 'read', undefined, undefined, (err, data) => {
      if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    let options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    let clb = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : () => {};
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
      return;
    }
    if (key === undefined || key === null || key === '') return;
    if (this.backend && this.backend.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r;
          if (fc.length === 5) {
            r = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r = fc(languages, namespace, key, fallbackValue);
          }
          if (r && typeof r.then === 'function') {
            r.then(data => clb(null, data)).catch(clb);
          } else {
            clb(null, r);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
}

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: 'all',
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: 'fallback',
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: false,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      let ret = {};
      if (typeof args[1] === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];
      if (typeof args[2] === 'object' || typeof args[3] === 'object') {
        const options = args[3] || args[2];
        Object.keys(options).forEach(key => {
          ret[key] = options[key];
        });
      }
      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: value => value,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1000,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }
  return options;
}

function noop() {}
function bindMemberFunctions(inst) {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(mem => {
    if (typeof inst[mem] === 'function') {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}
class I18n extends EventEmitter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initImmediate) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init() {
    var _this = this;
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    this.isInitializing = true;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!options.defaultNS && options.defaultNS !== false && options.ns) {
      if (typeof options.ns === 'string') {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf('translation') < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    if (this.options.compatibilityAPI !== 'v1') {
      this.options.interpolation = {
        ...defOpts.interpolation,
        ...this.options.interpolation
      };
    }
    if (options.keySeparator !== undefined) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== undefined) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    function createClassOnDemand(ClassOrObject) {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === 'function') return new ClassOrObject();
      return ClassOrObject;
    }
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else if (typeof Intl !== 'undefined') {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on('*', function (event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        _this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init) s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on('*', function (event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        _this.emit(event, ...args);
      });
      this.modules.external.forEach(m => {
        if (m.init) m.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback) callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn('init: no languageDetector is used and no lng is defined');
    }
    const storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
    storeApi.forEach(fcName => {
      this[fcName] = function () {
        return _this.store[fcName](...arguments);
      };
    });
    const storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
    storeApiChained.forEach(fcName => {
      this[fcName] = function () {
        _this.store[fcName](...arguments);
        return _this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn('init: i18next is already initialized. You should call init just once!');
        this.isInitialized = true;
        if (!this.options.isClone) this.logger.log('initialized', this.options);
        this.emit('initialized', this.options);
        deferred.resolve(t);
        callback(err, t);
      };
      if (this.languages && this.options.compatibilityAPI !== 'v1' && !this.isInitialized) return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language) {
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    let usedCallback = callback;
    const usedLng = typeof language === 'string' ? language : this.language;
    if (typeof language === 'function') usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng && usedLng.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
      const toLoad = [];
      const append = lng => {
        if (!lng) return;
        if (lng === 'cimode') return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach(l => {
          if (l === 'cimode') return;
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach(l => append(l));
      } else {
        append(usedLng);
      }
      if (this.options.preload) {
        this.options.preload.forEach(l => append(l));
      }
      this.services.backendConnector.load(toLoad, this.options.ns, e => {
        if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    if (!callback) callback = noop;
    this.services.backendConnector.reload(lngs, ns, err => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
    if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
    if (module.type === 'backend') {
      this.modules.backend = module;
    }
    if (module.type === 'logger' || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === 'languageDetector') {
      this.modules.languageDetector = module;
    }
    if (module.type === 'i18nFormat') {
      this.modules.i18nFormat = module;
    }
    if (module.type === 'postProcessor') {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === 'formatter') {
      this.modules.formatter = module;
    }
    if (module.type === '3rdParty') {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages) return;
    if (['cimode', 'dev'].indexOf(l) > -1) return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
  }
  changeLanguage(lng, callback) {
    var _this2 = this;
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit('languageChanging', lng);
    const setLngProps = l => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = undefined;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        setLngProps(l);
        this.translator.changeLanguage(l);
        this.isLanguageChangingTo = undefined;
        this.emit('languageChanged', l);
        this.logger.log('languageChanged', l);
      } else {
        this.isLanguageChangingTo = undefined;
      }
      deferred.resolve(function () {
        return _this2.t(...arguments);
      });
      if (callback) callback(err, function () {
        return _this2.t(...arguments);
      });
    };
    const setLng = lngs => {
      if (!lng && !lngs && this.services.languageDetector) lngs = [];
      const l = typeof lngs === 'string' ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language) this.translator.changeLanguage(l);
        if (this.services.languageDetector && this.services.languageDetector.cacheUserLanguage) this.services.languageDetector.cacheUserLanguage(l);
      }
      this.loadResources(l, err => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    var _this3 = this;
    const fixedT = function (key, opts) {
      let options;
      if (typeof opts !== 'object') {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }
        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        options = {
          ...opts
        };
      }
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = _this3.options.keySeparator || '.';
      let resultKey;
      if (options.keyPrefix && Array.isArray(key)) {
        resultKey = key.map(k => `${options.keyPrefix}${keySeparator}${k}`);
      } else {
        resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
      }
      return _this3.t(resultKey, options);
    };
    if (typeof lng === 'string') {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!this.isInitialized) {
      this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === 'cimode') return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state[`${l}|${n}`];
      return loadState === -1 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== undefined) return preResult;
    }
    if (this.hasResourceBundle(lng, ns)) return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback) callback();
      return Promise.resolve();
    }
    if (typeof ns === 'string') ns = [ns];
    ns.forEach(n => {
      if (this.options.ns.indexOf(n) < 0) this.options.ns.push(n);
    });
    this.loadResources(err => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (typeof lngs === 'string') lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter(lng => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
    if (!newLngs.length) {
      if (callback) callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources(err => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
    if (!lng) return 'rtl';
    const rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
    const languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
  }
  static createInstance() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    return new I18n(options, callback);
  }
  cloneInstance() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore) delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== undefined || options.prefix !== undefined) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ['store', 'services', 'language'];
    membersToCopy.forEach(m => {
      clone[m] = this[m];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      clone.store = new ResourceStore(this.store.data, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on('*', function (event) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;

module.exports = instance;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utils = void 0;
const pokeapi_1 = __webpack_require__(8);
async function _calculateTypesEffectiveness(types) {
    const typeEffectiveness = await Promise.all(types.map(pokeapi_1.pokeApi.getTypeEffectiveness));
    const weaknesses = new Set();
    const resistances = new Set();
    const immunities = new Set();
    if (types.length === 1) {
        const data = typeEffectiveness[0];
        data.double_damage_from.forEach(t => weaknesses.add(t.name));
        data.half_damage_from.forEach(t => resistances.add(t.name));
        data.no_damage_from.forEach(t => immunities.add(t.name));
    }
    else if (types.length === 2) {
        const type1Effectiveness = typeEffectiveness[0];
        const type2Effectiveness = typeEffectiveness[1];
        // Calculate weaknesses
        type1Effectiveness.double_damage_from.forEach(t => {
            if (!type2Effectiveness.half_damage_from.some(r => r.name === t.name)) {
                weaknesses.add(t.name);
            }
        });
        type2Effectiveness.double_damage_from.forEach(t => {
            if (!type1Effectiveness.half_damage_from.some(r => r.name === t.name)) {
                weaknesses.add(t.name);
            }
        });
        // Calculate resistances
        type1Effectiveness.half_damage_from.forEach(t => {
            if (!type2Effectiveness.double_damage_from.some(r => r.name === t.name)) {
                resistances.add(t.name);
            }
        });
        type2Effectiveness.half_damage_from.forEach(t => {
            if (!type1Effectiveness.double_damage_from.some(r => r.name === t.name)) {
                resistances.add(t.name);
            }
        });
        // Calculate immunities
        type1Effectiveness.no_damage_from.forEach(t => immunities.add(t.name));
        type2Effectiveness.no_damage_from.forEach(t => immunities.add(t.name));
        immunities.forEach(immunity => {
            weaknesses.delete(immunity);
            resistances.delete(immunity);
        });
    }
    return { weaknesses, resistances, immunities };
}
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Utils {
    // Function that converts PokeRogue pokemon ID to pokeAPI pokemon ID
    static convertPokemonId(pokemonId) {
        const conversionList = {
            2019: 10091,
            2020: 10092,
            2026: 10100,
            2027: 10101,
            2028: 10102,
            2037: 10103,
            2038: 10104,
            2050: 10105,
            2051: 10106,
            2052: 10107,
            2053: 10108,
            2074: 10109,
            2075: 10110,
            2076: 10111,
            2088: 10112,
            2089: 10113,
            2103: 10114,
            2105: 10115,
            2670: 10061,
            4052: 10162,
            4077: 10163,
            4078: 10164,
            4079: 10165,
            4080: 10166,
            4083: 10167,
            4110: 10168,
            4122: 10169,
            4144: 10170,
            4145: 10171,
            4146: 10172,
            4199: 10173,
            4222: 10174,
            4263: 10175,
            4264: 10176,
            4554: 10177,
            4555: 10178,
            4562: 10179,
            4618: 10180,
            6058: 10229,
            6059: 10230,
            6100: 10231,
            6101: 10232,
            6157: 10233,
            6211: 10234,
            6215: 10235,
            6503: 10236,
            6549: 10237,
            6570: 10238,
            6571: 10239,
            6628: 10240,
            6705: 10241,
            6706: 10242,
            6713: 10243,
            6724: 10244,
            8128: 10252,
            8194: 10253,
            8901: 10272,
        };
        if (pokemonId in conversionList) {
            return conversionList[pokemonId];
        }
        else {
            return pokemonId;
        }
    }
    // Function to calculate weaknesses, resistances, and immunities
    static async getPokemonTypeEffectiveness(id) {
        const types = await pokeapi_1.pokeApi.getPokemonType(id);
        return await _calculateTypesEffectiveness(types);
    }
}
exports.Utils = Utils;


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pokeApi = void 0;
const pokenode_ts_1 = __webpack_require__(9);
class PokeApi {
    constructor() {
        this.pokemonClient = new pokenode_ts_1.PokemonClient();
    }
    async getTypeEffectiveness(type) {
        try {
            const response = await this.pokemonClient.getTypeByName(type);
            return response.damage_relations;
        }
        catch (error) {
            console.error(`Error fetching type effectiveness for ${type}:`, error);
            return {
                double_damage_from: [],
                double_damage_to: [],
                half_damage_from: [],
                half_damage_to: [],
                no_damage_from: [],
                no_damage_to: [],
            };
        }
    }
    async getAbility(pokemonId, abilityIndex) {
        let name = 'Unknown';
        let description = 'Unknown';
        let isHidden = false;
        try {
            const pokemonData = await this.pokemonClient.getPokemonById(pokemonId);
            const abilityLength = pokemonData.abilities.length;
            if (abilityIndex >= abilityLength) {
                abilityIndex = abilityLength - 1; // Pokerogue uses a "None" ability as padding when pokémon have less than 3.
            }
            isHidden = pokemonData.abilities[abilityIndex].is_hidden;
            const abilityName = pokemonData.abilities[abilityIndex].ability.name;
            const abilityData = await this.pokemonClient.getAbilityByName(abilityName);
            name = abilityName.toUpperCase().replace('-', ' ');
            for (const flavorTextEntry of abilityData.flavor_text_entries) {
                if (flavorTextEntry.language.name === 'ko') {
                    description = flavorTextEntry.flavor_text;
                }
            }
        }
        catch (error) {
            console.error('Error fetching Pokémons ability:', error);
        }
        return {
            name: name,
            description: description,
            isHidden: isHidden,
        };
    }
    // Function to get Pokémon type
    async getPokemonType(id) {
        try {
            const response = await this.pokemonClient.getPokemonById(id);
            const types = response.types.map(type => type.type.name);
            return types;
        }
        catch (error) {
            console.error('Error fetching Pokémon type:', error);
            return [];
        }
    }
}
exports.pokeApi = new PokeApi();


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value: true})); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
/**
 * Version 1.20.0 | 6/22/2023
 * Build with Node v16.16.0
 * Licensed under the MIT license
 *  _
 * |_) _  |   _   _   _   _|  _  __  _|_  _
 * |  (_) |< (/_ | | (_) (_| (/_      |_ _>
 *
 * A lightweight Node.js wrapper for the PokéAPI with built-in types.
 * Gabb-c <https://github.com/Gabb-c>
 */

var l=Object.defineProperty;var i=(A,e)=>l(A,"name",{value:e,configurable:!0});var f=(A,e)=>{for(var a in e)l(A,a,{get:e[a],enumerable:!0})};var w={};f(w,{BERRIES:()=>W,BERRY_FIRMNESSES:()=>v,BERRY_FLAVORS:()=>k,BaseURL:()=>O,CONTEST_TYPES:()=>b,EGG_GROUPS:()=>At,ENCOUNTER_CONDITIONS:()=>J,ENCOUNTER_CONDITION_VALUES:()=>Q,ENCOUNTER_METHODS:()=>X,ENDPOINTS:()=>n,EVOLUTION_TRIGGERS:()=>q,GENDERS:()=>Ot,GENERATIONS:()=>Z,GROWTH_RATES:()=>ct,ITEM_ATTRIBUTES:()=>Pt,ITEM_CATEGORIES:()=>mt,ITEM_FLING_EFFECTS:()=>gt,ITEM_POCKETS:()=>pt,LANGUAGES:()=>_t,MOVE_AILMENTS:()=>Et,MOVE_BATTLE_STYLES:()=>st,MOVE_CATEGORIES:()=>nt,MOVE_DAMAGE_CLASSES:()=>rt,MOVE_LEARN_METHODS:()=>it,MOVE_TARGETS:()=>ot,NATURES:()=>Rt,PAL_PARK_AREAS:()=>at,POKEATHLON_STATS:()=>Tt,POKEDEXES:()=>j,POKEMON_COLORS:()=>Nt,POKEMON_HABITATS:()=>ht,POKEMON_SHAPES:()=>It,REGIONS:()=>et,STATS:()=>Lt,TYPES:()=>St,VERSIONS:()=>z,VERSION_GROUPS:()=>tt});var O;(function(A){A.REST="https://pokeapi.co/api/v2"})(O||(O= exports.BaseURL ={}));var n={BERRY:"/berry",BERRY_FIRMNESS:"/berry-firmness",BERRY_FLAVOR:"/berry-flavor",CONTEST_TYPE:"/contest-type",CONTEST_EFFECT:"/contest-effect",SUPER_CONTEST_EFFECT:"/super-contest-effect",ENCOUNTER_METHOD:"/encounter-method",ENCOUNTER_CONDITION:"/encounter-condition",ENCOUNTER_CONDITION_VALUE:"/encounter-condition-value",EVOLUTION_CHAIN:"/evolution-chain",EVOLUTION_TRIGGER:"/evolution-trigger",GENERATION:"/generation",POKEDEX:"/pokedex",VERSION:"/version",VERSION_GROUP:"/version-group",ITEM:"/item",ITEM_ATTRIBUTE:"/item-attribute",ITEM_CATEGORY:"/item-category",ITEM_FLING_EFFECT:"/item-fling-effect",ITEM_POCKET:"/item-pocket",LOCATION:"/location",LOCATION_AREA:"/location-area",PALPARK_AREA:"/pal-park-area",REGION:"/region",MACHINE:"/machine",MOVE:"/move",MOVE_AILMENT:"/move-ailment",MOVE_BATTLE_STYLE:"/move-battle-style",MOVE_CATEGORY:"/move-category",MOVE_DAMAGE_CLASS:"/move-damage-class",MOVE_LEARN_METHOD:"/move-learn-method",MOVE_TARGET:"/move-target",ABILITY:"/ability",CHARACTERISTIC:"/characteristic",EGG_GROUP:"/egg-group",GENDER:"/gender",GROWTH_RATE:"/growth-rate",NATURE:"/nature",POKEATHLON_STAT:"/pokeathlon-stat",POKEMON:"/pokemon",POKEMON_LOCATION_AREA:"/pokemon/:id/encounters",POKEMON_COLOR:"/pokemon-color",POKEMON_FORM:"/pokemon-form",POKEMON_HABITAT:"/pokemon-habitat",POKEMON_SHAPE:"/pokemon-shape",POKEMON_SPECIES:"/pokemon-species",STAT:"/stat",TYPE:"/type",LANGUAGE:"/language"};var W={CHERI:1,CHESTO:2,PECHA:3,RAWST:4,ASPEAR:5,LEPPA:6,ORAN:7,PERSIM:8,LUM:9,SITRUS:10,FIGY:11,WIKI:12,MAGO:13,AGUAV:14,IAPAPA:15,RAZZ:16,BLUK:17,NANAB:18,WEPEAR:19,PINAP:20,POMEG:21,KELPSY:22,QUALOT:23,HONDEW:24,GREPA:25,TAMATO:26,CORNN:27,MAGOST:28,RABUTA:29,NOMEL:30,SPELON:31,PAMTRE:32,WATMEL:33,DURIN:34,BELUE:35,OCCA:36,PASSHO:37,WACAN:38,RINDO:39,YACHE:40,CHOPLE:41,KEBIA:42,SHUCA:43,COBA:44,PAYAPA:45,TANGA:46,CHARTI:47,KASIB:48,HABAN:49,COLBUR:50,BABIRI:51,CHILAN:52,LIECHI:53,GANLON:54,SALAC:55,PETAYA:56,APICOT:57,LANSAT:58,STARF:59,ENIGMA:60,MICLE:61,CUSTAP:62,JABOCA:63,ROWAP:64},v= exports.BERRY_FIRMNESSES ={VERY_SOFT:1,SOFT:2,HARD:3,VERY_HARD:4,SUPER_HARD:5},k= exports.BERRY_FLAVORS ={SPICY:1,DRY:2,SWEET:3,BITTER:4,SOUR:5};var b={COOL:1,BEAUTY:2,CUTE:3,SMART:4,TOUGH:5};var X={WALK:1,OLD_ROD:2,GOOD_ROD:3,SUPER_ROD:4,SURF:5,ROCK_SMASH:6,HEADBUTT:7,DARK_GRASS:8,GRASS_SPOTS:9,CAVE_SPOTS:10,BRIDGE_SPOTS:11,SUPER_ROD_SPOTS:12,SURF_SPOTS:13,YELLOW_FLOWERS:14,PURPLE_FLOWERS:15,RED_FLOWERS:16,ROUGH_TERRAIN:17,GIFT:18,GIFT_EGG:19,ONLY_ONE:20,POKEFLUTE:21,HEADBUTT_LOW:22,HEADBUTT_NORMAL:23,HEADBUT_HIGH:24,SQUIRT_BOTTLE:25,WAILMER_PAIL:26,SEAWEED:27},J= exports.ENCOUNTER_CONDITIONS ={SWARM:1,TIME:2,RADAR:3,SLOT2:4,RADIO:5,SEASON:6,STARTER:7,TV_OPTION:8,STORY_PROGRESS:9,OTHER:10},Q= exports.ENCOUNTER_CONDITION_VALUES ={SWARM_YES:1,SWARM_NO:2,TIME_MORNING:3,TIME_DAY:4,TIME_NIGHT:5,RADAR_ON:6,RADAR_OFF:7,SLOT2_NONE:8,SLOT2_RUBY:9,SLOT2_SAPHIRE:10,SLOT2_EMERALD:11,SLOT2_FIRERED:12,SLOT2_LEAFGREEN:13,RADIO_OFF:14,RADIO_HOEN:15,RADIO_SINNOH:16,SEASON_SPRING:17,SEASON_SUMMER:18,SWASON_AUTUMN:19,SEASON_WINTER:20,STARTER_BULBASAUR:21,STARTER_SQUIRTLE:22,STARTER_CHARMANDER:23,STARTER_CHESPIN:24,STARTER_FENNEKIN:25,STARTER_FROAKIE:26,TV_OPTION_BLUE:27,TV_OPTION_RED:28,STORY_PROGRESS_AWAKENED_BEASTS:29,STORY_PROGRESS_BEAT_GALACTIC_CORONET:30,STORY_PROGRESS_OAK_ETERNA_CITY:31,STORY_PROGRESS_OAK_VERMILION_COPYCAT:32,STORY_PROGRESS_MET_TORNADUS_THUNDURUS:33,STORY_PROGRESS_BEAT_ELITE_FOUR_ROUND_TWO:34,STORY_PROGRESS_HALL_OF_FAME:35,STORY_PROGRESS_NONE:36,STORY_PROGRESS_NATIONAL_DEX:37,OTHER_NONE:38,OTHER_SNORLAX_LL_BEAT_LEAGUE:39};var q={LEVEL_UP:1,TRADE:2,USE_ITEM:3,SHED:4,SPIN:5,TOWER_OF_DARKNESS:6,TOWER_OF_WATER:7,THREE_CRITICAL_HITS:8,TAKE_DAMAGE:9,OTHER:10};var Z={GENERATION_I:1,GENERATION_II:2,GENERATION_III:3,GENERATION_IV:4,GENERATION_V:5,GENERATION_VI:6,GENERATION_VII:7,GENERATION_VIII:8},j= exports.POKEDEXES ={NATIONAL:1,KANTO:2,ORIGINAL_JOHTO:3,HOENN:4,ORIGINAL_SINNOH:5,EXTENDED_SINNOH:6,UPDATED_JOHTO:7,ORIGINAL_UNOVA:8,UPDATED_UNOVA:9,CONQUEST_GALLERY:11,KALOS_CENTRAL:12,KALOS_COASTAL:13,KALOS_MONTAIN:14,UPDATED_HOENN:15,ORIGINAL_ALOLA:16,ORIGINAL_MELEMELE:17,ORIGINAL_AKALA:18,ORIGINAL_ULAULA:19,ORIGINAL_PONI:20,UPDATED_ALOLA:21,UPDATED_MELEMELE:22,UPDATED_AKALA:23,UPDATED_ULAULA:24,UPDATED_PONI:25,UPDATED_KANTO:26,GALAR:27,ISLE_OF_ARMOR:28,CROWN_TUNDRA:29},z= exports.VERSIONS ={RED:1,BLUE:2,YELLOW:3,GOLD:4,SILVER:5,CRYSTAL:6,RUBY:7,SAPPHIRE:8,EMERALD:9,FIRERED:10,LEAFGREEN:11,DIAMOND:12,PEARL:13,PLATINUM:14,HEARTGOLD:15,SOULSILVER:16,BLACK:17,WHITE:18,COLOSSEUM:19,XD:20,BLACK_2:21,WHITE_2:22,X:23,Y:24,OMEGA_RUBY:25,ALPHA_SAPPHIRE:26,SUN:27,MOON:28,ULTRA_SUN:29,ULTRA_MOON:30,LETS_GO_PIKACHU:31,LETS_GO_EEVEE:32,SWORD:33,SHIELD:34,THE_ISLE_OF_ARMOR:35,THE_CROWN_TUNDRA:36,BRILLIANT_DIAMOND:37,SHINING_PEARL:38,LEGENDS_ARCEUS:39},tt= exports.VERSION_GROUPS ={RED_BLUE:1,YELLOW:2,GOLD_SILVER:3,CRYSTAL:4,RUBY_SAPPHIRE:5,EMERALD:6,FIRERED_LEAFGREEN:7,DIAMOND_PEARL:8,PLATINUM:9,HEARTGOLD_SOULSILVER:10,BLACK_WHITE:11,COLOSSEUM:12,XD:13,BLACK_2_WHITE_2:14,X_Y:15,OMEGA_RUBY_ALPHA_SAPPHIRE:16,SUN_MOON:17,ULTRA_SUN_ULTRA_MOON:18,LETS_GO:19,SWORD_SHIELD:20,THE_ISLE_OF_ARMOR:21,THE_CROWN_TUNDRA:22,BRILLIANT_DIAMOND_AND_SHINING_PEARL:23,LEGENDS_ARCEUS:24};var et={KANTO:1,JOHTO:2,HOENN:3,SINNOH:4,UNOVA:5,KALOS:6,ALOLA:7,GALAR:8,HISUI:9},at= exports.PAL_PARK_AREAS ={FOREST:1,FIELD:2,MOUNTAIN:3,POND:4,SEA:5};var Et={UNKNOWN:-1,NONE:0,PARALYSIS:1,SLEEP:2,FREEZE:3,BURN:4,POISON:5,CONFUSION:6,INFATUATION:7,TRAP:8,NIGHTMARE:9,TORMENT:12,DISABLE:13,YAWN:14,HEAL_BLOCK:15,NO_TYPE_IMMUNITY:17,LEECH_SEED:18,EMBARGO:19,PERISH_SONG:20,INGRAIN:21,SILENCE:24,TAR_SHOT:42},st= exports.MOVE_BATTLE_STYLES ={ATTACK:1,DEFENSE:2,SUPPORT:3},nt= exports.MOVE_CATEGORIES ={DAMAGE:0,AILMENT:1,NET_GOOD_STATS:2,HEAL:3,DAMAGE_AILMENT:4,SWAGGER:5,DAMAGE_LOWER:6,DAMAGE_RAISE:7,DAMAGE_HEAL:8,OHKO:9,WHOLE_FIELD_EFFECT:10,FIELD_EFFECT:11,FORCE_SWITCH:12,UNIQUE:13},rt= exports.MOVE_DAMAGE_CLASSES ={STATUS:1,PHYSICAL:2,SPECIAL:3},it= exports.MOVE_LEARN_METHODS ={LEVEL_UP:1,EGG:2,TUTOR:3,MACHINE:4,STADIUM_SURFING_PIKACHU:5,LIGHT_BALL_EGG:6,COLOSSEUM_PURIFICATION:7,XD_SHADOW:8,XD_PURIFICATION:9,FORM_CHANGE:10},ot= exports.MOVE_TARGETS ={SPECIFIC_MOVE:1,SELECTED_POKEMON_ME_FIRST:2,ALLY:3,USERS_FIELD:4,USER_OR_ALLY:5,OPPONENTS_FIELD:6,USER:7,RANDOM_OPPONENT:8,ALL_OTHER_POKEMON:9,SELECTED_POKEMON:10,ALL_OPPONENTS:11,ENTIRE_FIELD:12,USER_AND_ALIES:13,ALL_POKEMON:14,ALL_ALLIES:15};var At={MONSTER:1,WATER1:2,BUG:3,FLYING:4,GROUND:5,FAIRY:6,PLANT:7,HUMANSHAPE:8,WATER3:9,MINERAL:10,INDETERMINATE:11,WATER2:12,DITTO:13,DRAGON:14,NO_EGGS:15},Ot= exports.GENDERS ={FEMALE:1,MALE:2,GENDERLESS:3},ct= exports.GROWTH_RATES ={SLOW:1,MEDIUM:2,FAST:3,MEDIUM_SLOW:4,SLOW_THEN_VERY_FAST:5,FAST_THEN_VERY_SLOW:6},Rt= exports.NATURES ={HARDY:1,BOLD:2,MODEST:3,CALM:4,TIMID:5,LONELY:6,DOCILE:7,MILD:8,GENTLE:9,HASTY:10,ADAMANT:11,IMPISH:12,BASHFUL:13,CAREFUL:14,RASH:15,JOLLY:16,NAUGHTY:17,LAX:18,QUIRKY:19,NAIVE:20,BRAVE:21,RELAXED:22,QUIET:23,SASSY:24,SERIOUS:25},Tt= exports.POKEATHLON_STATS ={SPEED:1,POWER:2,SKILL:3,STAMINA:4,JUMP:5},Nt= exports.POKEMON_COLORS ={BLACK:1,BLUE:2,BROWN:3,GRAY:4,GREEN:5,PINK:6,PURPLE:7,RED:8,WHITE:9,YELLOW:10},ht= exports.POKEMON_HABITATS ={CAVE:1,FOREST:2,GRASSLAND:3,MONTAIN:4,RARE:5,ROUGH_TERRAIN:6,SEA:7,URBAN:8,WATERS_EDGE:9},It= exports.POKEMON_SHAPES ={BALL:1,SQUIGGLE:2,FISH:3,ARMS:4,BLOB:5,UPRIGHT:6,LEGS:7,QUADRUPED:8,WINGS:9,TENTACLES:10,HEADS:11,HUMANOID:12,BUG_WINGS:13,ARMOR:14},Lt= exports.STATS ={HP:1,ATTACK:2,DEFENSE:3,SPECIAL_ATTACK:4,SPECIAL_DEFENSE:5,SPEED:6,ACCURACY:7,EVASION:8},St= exports.TYPES ={NORMAL:1,FIGHTING:2,FLYING:3,POISON:4,GROUND:5,ROCK:6,BUG:7,GHOST:8,STEEL:9,FIRE:10,WATER:11,GRASS:12,ELECTRIC:13,PSYCHIC:14,ICE:15,DRAGON:16,DARK:17,FAIRY:18,UNKNOWN:10001,SHADOW:10002};var _t={JA_HRKT:1,ROOMAJI:2,KO:3,ZH_HANT:4,FR:5,DE:6,ES:7,IT:8,EN:9,CS:10,JA:11,ZH_HANS:12,PT_BR:13};var Pt={COUNTABLE:1,CONSUMABLE:2,USABLE_OVERWORLD:3,USABLE_IN_BATTLE:4,HOLDABLE:5,HOLDABLE_PASSIVE:6,HOLDABLE_ACTIVE:7,UNDERGROUND:8},mt= exports.ITEM_CATEGORIES ={STAT_BOOSTS:1,EFFORT_DROP:2,MEDICINE:3,OTHER:4,IN_A_PINCH:5,PICKY_HEALING:6,TYPE_PROTECTION:7,BAKING_ONLY:8,COLLECTIBLES:9,EVOLUTION:10,SPELUNKING:11,HELD_ITEMS:12,CHOICE:13,EFFORT_TRAINING:14,BAD_HELD_ITEMS:15,TRAINING:16,PLATES:17,SPECIES_SPECIFIC:18,TYPE_ENHANCEMENT:19,EVENT_ITEMS:20,GAMEPLAY:21,PLOT_ADVANCEMENT:22,UNUSED:23,LOOT:24,ALL_MAIL:25,VITAMINS:26,HEALING:27,PP_RECOVERY:28,REVIVAL:29,STATUS_CURES:30,MULCH:32,SPECIAL_BALLS:33,STANDARD_BALLS:34,DEX_COMPLETION:35,SCARVES:36,ALL_MACHINES:37,FLUTES:38,APRICORN_BALLS:39,APRICORN_BOX:40,DATA_CARDS:41,JEWELS:42,MIRACLE_SHOOTER:43,MEGA_STONES:44,MEMORIES:45,Z_CRYSTALS:46,SPECIES_CANDIES:47,CATCHING_BONUS:48,DYNAMAX_CRISTALS:49,NATURE_MINTS:50,CURRY_INGREDIENTS:51},gt= exports.ITEM_FLING_EFFECTS ={BADLY_POISON:1,BURN:2,BERRY_EFFECT:3,HERB_EFFECT:4,PARALYZE:5,POISON:6,FLINCH:7},pt= exports.ITEM_POCKETS ={MISC:1,MEDICINE:2,POKEBALLS:3,MACHINES:4,BERRIES:5,MAIL:6,BATTLE:7,KEY:8};var F=i((A,e)=>(e&&console.log(`[ Request Config ] ${_optionalChain([A, 'access', _2 => _2.method, 'optionalAccess', _3 => _3.toUpperCase, 'call', _4 => _4()])||""} | ${A.url||""}`),A),"handleRequest"),Y=i((A,e)=>(e&&console.error(`[ Request Error ] CODE ${A.code||"UNKNOWN"} | ${A.message}`),Promise.reject(A)),"handleRequestError"),V=i((A,e)=>(e&&console.log(`[ Response ] STATUS ${A.status} | ${A.cached?"CACHED":"NOT CACHED"}`),A),"handleResponse"),K=i((A,e)=>(e&&console.error(`[ Response Error ] CODE ${A.code||"UNKNOWN"} | ${A.message}`),Promise.reject(A)),"handleResponseError");var _axios = __webpack_require__(10); var _axios2 = _interopRequireDefault(_axios);var _axioscacheinterceptor = __webpack_require__(11);var g=class{constructor(e){this.api=_axioscacheinterceptor.setupCache.call(void 0, _axios2.default.create({baseURL:_nullishCoalesce(_optionalChain([e, 'optionalAccess', _5 => _5.baseURL]), () => (O.REST)),headers:{"Content-Type":"application/json"}}),_optionalChain([e, 'optionalAccess', _6 => _6.cacheOptions])),this.api.interceptors.request.use(a=>F(a,_optionalChain([e, 'optionalAccess', _7 => _7.logs])),a=>Y(a,_optionalChain([e, 'optionalAccess', _8 => _8.logs]))),this.api.interceptors.response.use(a=>V(a,_optionalChain([e, 'optionalAccess', _9 => _9.logs])),a=>K(a,_optionalChain([e, 'optionalAccess', _10 => _10.logs])))}getListURL(e,a,E){return`${e}?offset=${_nullishCoalesce(a, () => (0))}&limit=${_nullishCoalesce(E, () => (20))}`}},o= exports.BaseClient =g;i(g,"BaseClient");var p=class extends o{async getBerryByName(e){return new Promise((a,E)=>{this.api.get(`${n.BERRY}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getBerryById(e){return new Promise((a,E)=>{this.api.get(`${n.BERRY}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getBerryFirmnessById(e){return new Promise((a,E)=>{this.api.get(`${n.BERRY_FIRMNESS}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getBerryFirmnessByName(e){return new Promise((a,E)=>{this.api.get(`${n.BERRY_FIRMNESS}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getBerryFlavorById(e){return new Promise((a,E)=>{this.api.get(`${n.BERRY_FLAVOR}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getBerryFlavorByName(e){return new Promise((a,E)=>{this.api.get(`${n.BERRY_FLAVOR}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}listBerries(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.BERRY,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}listBerryFirmnesses(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.BERRY_FIRMNESS,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}listBerryFlavors(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.BERRY_FLAVOR,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}},c= exports.BerryClient =p;i(p,"BerryClient");var M=class extends o{async getContestTypeByName(e){return new Promise((a,E)=>{this.api.get(`${n.CONTEST_TYPE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getContestTypeById(e){return new Promise((a,E)=>{this.api.get(`${n.CONTEST_TYPE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getContestEffectById(e){return new Promise((a,E)=>{this.api.get(`${n.CONTEST_EFFECT}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getSuperContestEffectById(e){return new Promise((a,E)=>{this.api.get(`${n.SUPER_CONTEST_EFFECT}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async listContestTypes(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.CONTEST_TYPE,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listContestEffects(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.CONTEST_EFFECT,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listSuperContestEffects(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.SUPER_CONTEST_EFFECT,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}},R= exports.ContestClient =M;i(M,"ContestClient");var C=class extends o{async getEncounterMethodByName(e){return new Promise((a,E)=>{this.api.get(`${n.ENCOUNTER_METHOD}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getEncounterMethodById(e){return new Promise((a,E)=>{this.api.get(`${n.ENCOUNTER_METHOD}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getEncounterConditionById(e){return new Promise((a,E)=>{this.api.get(`${n.ENCOUNTER_CONDITION}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getEncounterConditionByName(e){return new Promise((a,E)=>{this.api.get(`${n.ENCOUNTER_CONDITION}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getEncounterConditionValueByName(e){return new Promise((a,E)=>{this.api.get(`${n.ENCOUNTER_CONDITION_VALUE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getEncounterConditionValueById(e){return new Promise((a,E)=>{this.api.get(`${n.ENCOUNTER_CONDITION_VALUE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async listEncounterMethods(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.ENCOUNTER_METHOD,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listEncounterConditions(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.ENCOUNTER_CONDITION,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listEncounterConditionValues(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.ENCOUNTER_CONDITION_VALUE,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}},T= exports.EncounterClient =C;i(C,"EncounterClient");var U=class extends o{async getEvolutionChainById(e){return new Promise((a,E)=>{this.api.get(`${n.EVOLUTION_CHAIN}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getEvolutionTriggerById(e){return new Promise((a,E)=>{this.api.get(`${n.EVOLUTION_TRIGGER}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getEvolutionTriggerByName(e){return new Promise((a,E)=>{this.api.get(`${n.EVOLUTION_TRIGGER}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async listEvolutionChains(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.EVOLUTION_CHAIN,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listEvolutionTriggers(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.EVOLUTION_TRIGGER,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}},N= exports.EvolutionClient =U;i(U,"EvolutionClient");var y=class extends o{async getGenerationByName(e){return new Promise((a,E)=>{this.api.get(`${n.GENERATION}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getGenerationById(e){return new Promise((a,E)=>{this.api.get(`${n.GENERATION}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokedexByName(e){return new Promise((a,E)=>{this.api.get(`${n.POKEDEX}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokedexById(e){return new Promise((a,E)=>{this.api.get(`${n.POKEDEX}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getVersionByName(e){return new Promise((a,E)=>{this.api.get(`${n.VERSION}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getVersionById(e){return new Promise((a,E)=>{this.api.get(`${n.VERSION}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getVersionGroupByName(e){return new Promise((a,E)=>{this.api.get(`${n.VERSION_GROUP}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getVersionGroupById(e){return new Promise((a,E)=>{this.api.get(`${n.VERSION_GROUP}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async listGenerations(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.GENERATION,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listPokedexes(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.POKEDEX,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listVersions(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.VERSION,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listVersionGroups(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.VERSION_GROUP,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}},h= exports.GameClient =y;i(y,"GameClient");var u=class extends o{async getItemByName(e){return new Promise((a,E)=>{this.api.get(`${n.ITEM}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getItemById(e){return new Promise((a,E)=>{this.api.get(`${n.ITEM}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getItemAttributeByName(e){return new Promise((a,E)=>{this.api.get(`${n.ITEM_ATTRIBUTE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getItemAttributeById(e){return new Promise((a,E)=>{this.api.get(`${n.ITEM_ATTRIBUTE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getItemCategoryByName(e){return new Promise((a,E)=>{this.api.get(`${n.ITEM_CATEGORY}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getItemCategoryById(e){return new Promise((a,E)=>{this.api.get(`${n.ITEM_CATEGORY}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getItemFlingEffectByName(e){return new Promise((a,E)=>{this.api.get(`${n.ITEM_FLING_EFFECT}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getItemFlingEffectById(e){return new Promise((a,E)=>{this.api.get(`${n.ITEM_FLING_EFFECT}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getItemPocketByName(e){return new Promise((a,E)=>{this.api.get(`${n.ITEM_POCKET}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getItemPocketById(e){return new Promise((a,E)=>{this.api.get(`${n.ITEM_POCKET}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async listItems(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.ITEM,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listItemAttributes(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.ITEM_ATTRIBUTE,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listItemCategories(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.ITEM_CATEGORY,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listItemFilingEffects(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.ITEM_FLING_EFFECT,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listItemPockets(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.ITEM_POCKET,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}},I= exports.ItemClient =u;i(u,"ItemClient");var d=class extends o{async getLocationByName(e){return new Promise((a,E)=>{this.api.get(`${n.LOCATION}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getLocationById(e){return new Promise((a,E)=>{this.api.get(`${n.LOCATION}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getLocationAreaByName(e){return new Promise((a,E)=>{this.api.get(`${n.LOCATION_AREA}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getLocationAreaById(e){return new Promise((a,E)=>{this.api.get(`${n.LOCATION_AREA}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPalParkAreaByName(e){return new Promise((a,E)=>{this.api.get(`${n.PALPARK_AREA}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPalParkAreaById(e){return new Promise((a,E)=>{this.api.get(`${n.PALPARK_AREA}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getRegionByName(e){return new Promise((a,E)=>{this.api.get(`${n.REGION}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getRegionById(e){return new Promise((a,E)=>{this.api.get(`${n.REGION}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async listLocations(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.LOCATION,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listLocationAreas(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.LOCATION_AREA,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listPalParkAreas(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.PALPARK_AREA,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listRegions(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.REGION,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}},L= exports.LocationClient =d;i(d,"LocationClient");var B=class extends o{async getMachineById(e){return new Promise((a,E)=>{this.api.get(`${n.MACHINE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async listMachines(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.MACHINE,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}},S= exports.MachineClient =B;i(B,"MachineClient");var G=class extends o{async getMoveByName(e){return new Promise((a,E)=>{this.api.get(`${n.MOVE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getMoveById(e){return new Promise((a,E)=>{this.api.get(`${n.MOVE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getMoveAilmentByName(e){return new Promise((a,E)=>{this.api.get(`${n.MOVE_AILMENT}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getMoveAilmentById(e){return new Promise((a,E)=>{this.api.get(`${n.MOVE_AILMENT}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getMoveBattleStyleByName(e){return new Promise((a,E)=>{this.api.get(`${n.MOVE_BATTLE_STYLE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getMoveBattleStyleById(e){return new Promise((a,E)=>{this.api.get(`${n.MOVE_BATTLE_STYLE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getMoveCategoryByName(e){return new Promise((a,E)=>{this.api.get(`${n.MOVE_CATEGORY}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getMoveCategoryById(e){return new Promise((a,E)=>{this.api.get(`${n.MOVE_CATEGORY}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getMoveDamageClassByName(e){return new Promise((a,E)=>{this.api.get(`${n.MOVE_DAMAGE_CLASS}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getMoveDamageClassById(e){return new Promise((a,E)=>{this.api.get(`${n.MOVE_DAMAGE_CLASS}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getMoveLearnMethodByName(e){return new Promise((a,E)=>{this.api.get(`${n.MOVE_LEARN_METHOD}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getMoveLearnMethodById(e){return new Promise((a,E)=>{this.api.get(`${n.MOVE_LEARN_METHOD}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getMoveTargetByName(e){return new Promise((a,E)=>{this.api.get(`${n.MOVE_TARGET}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getMoveTargetById(e){return new Promise((a,E)=>{this.api.get(`${n.MOVE_TARGET}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async listMoves(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.MOVE,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listMoveAilments(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.MOVE_AILMENT,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listMoveBattleStyles(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.MOVE_BATTLE_STYLE,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listMoveCategories(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.MOVE_CATEGORY,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listMoveDamageClasses(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.MOVE_DAMAGE_CLASS,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listMoveLearnMethods(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.MOVE_LEARN_METHOD,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listMoveTargets(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.MOVE_TARGET,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}},_= exports.MoveClient =G;i(G,"MoveClient");var D=class extends o{async getAbilityByName(e){return new Promise((a,E)=>{this.api.get(`${n.ABILITY}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getAbilityById(e){return new Promise((a,E)=>{this.api.get(`${n.ABILITY}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getCharacteristicById(e){return new Promise((a,E)=>{this.api.get(`${n.CHARACTERISTIC}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getEggGroupByName(e){return new Promise((a,E)=>{this.api.get(`${n.EGG_GROUP}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getEggGroupById(e){return new Promise((a,E)=>{this.api.get(`${n.EGG_GROUP}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getGenderByName(e){return new Promise((a,E)=>{this.api.get(`${n.GENDER}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getGenderById(e){return new Promise((a,E)=>{this.api.get(`${n.GENDER}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getGrowthRateByName(e){return new Promise((a,E)=>{this.api.get(`${n.GROWTH_RATE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getGrowthRateById(e){return new Promise((a,E)=>{this.api.get(`${n.GROWTH_RATE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getNatureByName(e){return new Promise((a,E)=>{this.api.get(`${n.NATURE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getNatureById(e){return new Promise((a,E)=>{this.api.get(`${n.NATURE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokeathlonStatByName(e){return new Promise((a,E)=>{this.api.get(`${n.POKEATHLON_STAT}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokeathlonStatById(e){return new Promise((a,E)=>{this.api.get(`${n.POKEATHLON_STAT}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokemonByName(e){return new Promise((a,E)=>{this.api.get(`${n.POKEMON}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokemonById(e){return new Promise((a,E)=>{this.api.get(`${n.POKEMON}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokemonLocationAreaById(e){return new Promise((a,E)=>{this.api.get(`${n.POKEMON_LOCATION_AREA.replace(":id",e.toString())}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokemonColorByName(e){return new Promise((a,E)=>{this.api.get(`${n.POKEMON_COLOR}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokemonColorById(e){return new Promise((a,E)=>{this.api.get(`${n.POKEMON_COLOR}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokemonFormByName(e){return new Promise((a,E)=>{this.api.get(`${n.POKEMON_FORM}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokemonFormById(e){return new Promise((a,E)=>{this.api.get(`${n.POKEMON_FORM}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokemonHabitatByName(e){return new Promise((a,E)=>{this.api.get(`${n.POKEMON_HABITAT}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokemonHabitatById(e){return new Promise((a,E)=>{this.api.get(`${n.POKEMON_HABITAT}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokemonShapeByName(e){return new Promise((a,E)=>{this.api.get(`${n.POKEMON_SHAPE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokemonShapeById(e){return new Promise((a,E)=>{this.api.get(`${n.POKEMON_SHAPE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokemonSpeciesByName(e){return new Promise((a,E)=>{this.api.get(`${n.POKEMON_SPECIES}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getPokemonSpeciesById(e){return new Promise((a,E)=>{this.api.get(`${n.POKEMON_SPECIES}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getStatByName(e){return new Promise((a,E)=>{this.api.get(`${n.STAT}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getStatById(e){return new Promise((a,E)=>{this.api.get(`${n.STAT}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getTypeByName(e){return new Promise((a,E)=>{this.api.get(`${n.TYPE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getTypeById(e){return new Promise((a,E)=>{this.api.get(`${n.TYPE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async listAbilities(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.ABILITY,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listCharacteristics(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.CHARACTERISTIC,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listEggGroups(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.EGG_GROUP,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listGenders(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.GENDER,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listGrowthRates(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.GROWTH_RATE,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listNatures(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.NATURE,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listPokeathlonStats(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.POKEATHLON_STAT,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listPokemons(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.POKEMON,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listPokemonColors(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.POKEMON_COLOR,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listPokemonForms(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.POKEMON_FORM,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listPokemonHabitats(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.POKEMON_HABITAT,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listPokemonShapes(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.POKEMON_SHAPE,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listPokemonSpecies(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.POKEMON_SPECIES,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listStats(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.STAT,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}async listTypes(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.TYPE,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}},P= exports.PokemonClient =D;i(D,"PokemonClient");var $=class extends o{async getLanguageById(e){return new Promise((a,E)=>{this.api.get(`${n.LANGUAGE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getLanguageByName(e){return new Promise((a,E)=>{this.api.get(`${n.LANGUAGE}/${e}`).then(t=>a(t.data)).catch(t=>E(t))})}async getResourceByUrl(e){return new Promise((a,E)=>{this.api.get(e,{baseURL:""}).then(t=>a(t.data)).catch(t=>E(t))})}listLanguages(e,a){return new Promise((E,t)=>{let r=this.getListURL(n.LANGUAGE,e,a);this.api.get(r).then(s=>E(s.data)).catch(s=>t(s))})}},m= exports.UtilityClient =$;i($,"UtilityClient");var H=class extends o{constructor(e){super(e),this.berry=new c(e),this.contest=new R(e),this.encounter=new T(e),this.evolution=new N(e),this.game=new h(e),this.item=new I(e),this.location=new L(e),this.machine=new S(e),this.move=new _(e),this.pokemon=new P(e),this.utility=new m(e)}},x= exports.MainClient =H;i(H,"MainClient");exports.BERRIES = W; exports.BERRY_FIRMNESSES = v; exports.BERRY_FLAVORS = k; exports.BaseClient = o; exports.BaseURL = O; exports.BerryClient = c; exports.CONTEST_TYPES = b; exports.Constants = w; exports.ContestClient = R; exports.EGG_GROUPS = At; exports.ENCOUNTER_CONDITIONS = J; exports.ENCOUNTER_CONDITION_VALUES = Q; exports.ENCOUNTER_METHODS = X; exports.ENDPOINTS = n; exports.EVOLUTION_TRIGGERS = q; exports.EncounterClient = T; exports.EvolutionClient = N; exports.GENDERS = Ot; exports.GENERATIONS = Z; exports.GROWTH_RATES = ct; exports.GameClient = h; exports.ITEM_ATTRIBUTES = Pt; exports.ITEM_CATEGORIES = mt; exports.ITEM_FLING_EFFECTS = gt; exports.ITEM_POCKETS = pt; exports.ItemClient = I; exports.LANGUAGES = _t; exports.LocationClient = L; exports.MOVE_AILMENTS = Et; exports.MOVE_BATTLE_STYLES = st; exports.MOVE_CATEGORIES = nt; exports.MOVE_DAMAGE_CLASSES = rt; exports.MOVE_LEARN_METHODS = it; exports.MOVE_TARGETS = ot; exports.MachineClient = S; exports.MainClient = x; exports.MoveClient = _; exports.NATURES = Rt; exports.PAL_PARK_AREAS = at; exports.POKEATHLON_STATS = Tt; exports.POKEDEXES = j; exports.POKEMON_COLORS = Nt; exports.POKEMON_HABITATS = ht; exports.POKEMON_SHAPES = It; exports.PokemonClient = P; exports.REGIONS = et; exports.STATS = Lt; exports.TYPES = St; exports.UtilityClient = m; exports.VERSIONS = z; exports.VERSION_GROUPS = tt;


/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Axios v1.7.2 Copyright (c) 2024 Matt Zabriskie and contributors


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : __webpack_require__.g)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0];
  }

  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

var utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils$1.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype$1 = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);

  utils$1.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

// eslint-disable-next-line strict
var httpAdapter = null;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils$1.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);

  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils$1.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils$1.isArray(value) && isFlatArray(value)) ||
        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils$1.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

var InterceptorManager$1 = InterceptorManager;

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

var platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};

const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = (
  (product) => {
    return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0
  })(typeof navigator !== 'undefined' && navigator.product);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

const origin = hasBrowserEnv && window.location.href || 'http://localhost';

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  hasBrowserEnv: hasBrowserEnv,
  hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
  hasStandardBrowserEnv: hasStandardBrowserEnv,
  origin: origin
});

var platform = {
  ...utils,
  ...platform$1
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};

    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils$1.isObject(data);

    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils$1.isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils$1.isArrayBuffer(data) ||
      utils$1.isBuffer(data) ||
      utils$1.isStream(data) ||
      utils$1.isFile(data) ||
      utils$1.isBlob(data) ||
      utils$1.isReadableStream(data)
    ) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }

    if (data && utils$1.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

var defaults$1 = defaults;

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils$1.isString(value)) return;

  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils$1.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils$1.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils$1.freezeMethods(AxiosHeaders);

var AxiosHeaders$1 = AxiosHeaders;

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils$1.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  const threshold = 1000 / freq;
  let timer = null;
  return function throttled() {
    const force = this === true;

    const now = Date.now();
    if (force || now - timestamp > threshold) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timestamp = now;
      return fn.apply(null, arguments);
    }
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        timestamp = Date.now();
        return fn.apply(null, arguments);
      }, threshold - (now - timestamp));
    }
  };
}

var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return throttle(e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  }, freq);
};

var isURLSameOrigin = platform.hasStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils$1.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })();

var cookies = platform.hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      utils$1.isString(path) && cookie.push('path=' + path);

      utils$1.isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  };

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({caseless}, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

var resolveConfig = (config) => {
  const newConfig = mergeConfig({}, config);

  let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;

  newConfig.headers = headers = AxiosHeaders$1.from(headers);

  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' +
      btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
    );
  }

  let contentType;

  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // Let the browser set it
    } else if ((contentType = headers.getContentType()) !== false) {
      // fix semicolon duplication issue for ReactNative FormData implementation
      const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

    if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
      // Add xsrf header
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
};

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
    let {responseType} = _config;
    let onCanceled;
    function done() {
      if (_config.cancelToken) {
        _config.cancelToken.unsubscribe(onCanceled);
      }

      if (_config.signal) {
        _config.signal.removeEventListener('abort', onCanceled);
      }
    }

    let request = new XMLHttpRequest();

    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, _config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, _config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        _config,
        request));

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (typeof _config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(_config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof _config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(_config.onUploadProgress));
    }

    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(_config.url);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};

const composeSignals = (signals, timeout) => {
  let controller = new AbortController();

  let aborted;

  const onabort = function (cancel) {
    if (!aborted) {
      aborted = true;
      unsubscribe();
      const err = cancel instanceof Error ? cancel : this.reason;
      controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
    }
  };

  let timer = timeout && setTimeout(() => {
    onabort(new AxiosError(`timeout ${timeout} of ms exceeded`, AxiosError.ETIMEDOUT));
  }, timeout);

  const unsubscribe = () => {
    if (signals) {
      timer && clearTimeout(timer);
      timer = null;
      signals.forEach(signal => {
        signal &&
        (signal.removeEventListener ? signal.removeEventListener('abort', onabort) : signal.unsubscribe(onabort));
      });
      signals = null;
    }
  };

  signals.forEach((signal) => signal && signal.addEventListener && signal.addEventListener('abort', onabort));

  const {signal} = controller;

  signal.unsubscribe = unsubscribe;

  return [signal, () => {
    timer && clearTimeout(timer);
    timer = null;
  }];
};

var composeSignals$1 = composeSignals;

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};

const readBytes = async function* (iterable, chunkSize, encode) {
  for await (const chunk of iterable) {
    yield* streamChunk(ArrayBuffer.isView(chunk) ? chunk : (await encode(String(chunk))), chunkSize);
  }
};

const trackStream = (stream, chunkSize, onProgress, onFinish, encode) => {
  const iterator = readBytes(stream, chunkSize, encode);

  let bytes = 0;

  return new ReadableStream({
    type: 'bytes',

    async pull(controller) {
      const {done, value} = await iterator.next();

      if (done) {
        controller.close();
        onFinish();
        return;
      }

      let len = value.byteLength;
      onProgress && onProgress(bytes += len);
      controller.enqueue(new Uint8Array(value));
    },
    cancel(reason) {
      onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  })
};

const fetchProgressDecorator = (total, fn) => {
  const lengthComputable = total != null;
  return (loaded) => setTimeout(() => fn({
    lengthComputable,
    total,
    loaded
  }));
};

const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
    ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
    async (str) => new Uint8Array(await new Response(str).arrayBuffer())
);

const supportsRequestStream = isReadableStreamSupported && (() => {
  let duplexAccessed = false;

  const hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: 'POST',
    get duplex() {
      duplexAccessed = true;
      return 'half';
    },
  }).headers.has('Content-Type');

  return duplexAccessed && !hasContentType;
})();

const DEFAULT_CHUNK_SIZE = 64 * 1024;

const supportsResponseStream = isReadableStreamSupported && !!(()=> {
  try {
    return utils$1.isReadableStream(new Response('').body);
  } catch(err) {
    // return undefined
  }
})();

const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};

isFetchSupported && (((res) => {
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
    !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? (res) => res[type]() :
      (_, config) => {
        throw new AxiosError(`Response type '${type}' is not supported`, AxiosError.ERR_NOT_SUPPORT, config);
      });
  });
})(new Response));

const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }

  if(utils$1.isBlob(body)) {
    return body.size;
  }

  if(utils$1.isSpecCompliantForm(body)) {
    return (await new Request(body).arrayBuffer()).byteLength;
  }

  if(utils$1.isArrayBufferView(body)) {
    return body.byteLength;
  }

  if(utils$1.isURLSearchParams(body)) {
    body = body + '';
  }

  if(utils$1.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};

const resolveBodyLength = async (headers, body) => {
  const length = utils$1.toFiniteNumber(headers.getContentLength());

  return length == null ? getBodyLength(body) : length;
};

var fetchAdapter = isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = 'same-origin',
    fetchOptions
  } = resolveConfig(config);

  responseType = responseType ? (responseType + '').toLowerCase() : 'text';

  let [composedSignal, stopTimeout] = (signal || cancelToken || timeout) ?
    composeSignals$1([signal, cancelToken], timeout) : [];

  let finished, request;

  const onFinish = () => {
    !finished && setTimeout(() => {
      composedSignal && composedSignal.unsubscribe();
    });

    finished = true;
  };

  let requestContentLength;

  try {
    if (
      onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
      (requestContentLength = await resolveBodyLength(headers, data)) !== 0
    ) {
      let _request = new Request(url, {
        method: 'POST',
        body: data,
        duplex: "half"
      });

      let contentTypeHeader;

      if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
        headers.setContentType(contentTypeHeader);
      }

      if (_request.body) {
        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, fetchProgressDecorator(
          requestContentLength,
          progressEventReducer(onUploadProgress)
        ), null, encodeText);
      }
    }

    if (!utils$1.isString(withCredentials)) {
      withCredentials = withCredentials ? 'cors' : 'omit';
    }

    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      withCredentials
    });

    let response = await fetch(request);

    const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

    if (supportsResponseStream && (onDownloadProgress || isStreamResponse)) {
      const options = {};

      ['status', 'statusText', 'headers'].forEach(prop => {
        options[prop] = response[prop];
      });

      const responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));

      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onDownloadProgress && fetchProgressDecorator(
          responseContentLength,
          progressEventReducer(onDownloadProgress, true)
        ), isStreamResponse && onFinish, encodeText),
        options
      );
    }

    responseType = responseType || 'text';

    let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);

    !isStreamResponse && onFinish();

    stopTimeout && stopTimeout();

    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: AxiosHeaders$1.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      });
    })
  } catch (err) {
    onFinish();

    if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) {
      throw Object.assign(
        new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      )
    }

    throw AxiosError.from(err, err && err.code, config, request);
  }
});

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: fetchAdapter
};

utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;

var adapters = {
  getAdapter: (adapters) => {
    adapters = utils$1.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new AxiosError(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders$1.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

const VERSION = "1.7.2";

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy;

        Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack;
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils$1.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

var Axios$1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

var CancelToken$1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils$1.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

var HttpStatusCode$1 = HttpStatusCode;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils$1.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults$1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;

module.exports = axios;
//# sourceMappingURL=axios.cjs.map


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var cacheParser = __webpack_require__(12);
var fastDefer = __webpack_require__(13);
var objectCode = __webpack_require__(14);

const Header = Object.freeze({
  /**
   * ```txt
   * If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
   * ```
   *
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since
   */
  IfModifiedSince: 'if-modified-since',
  /**
   * ```txt
   * Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
   * ```
   *
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified
   */
  LastModified: 'last-modified',
  /**
   * ```txt
   * If-None-Match: "<etag_value>"
   * If-None-Match: "<etag_value>", "<etag_value>", …
   * If-None-Match: *
   * ```
   *
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match
   */
  IfNoneMatch: 'if-none-match',
  /**
   * ```txt
   * Cache-Control: max-age=604800
   * ```
   *
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
   */
  CacheControl: 'cache-control',
  /**
   * ```txt
   * Pragma: no - cache;
   * ```
   *
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Pragma
   */
  Pragma: 'pragma',
  /**
   * ```txt
   * ETag: W / '<etag_value>';
   * ETag: '<etag_value>';
   * ```
   *
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag
   */
  ETag: 'etag',
  /**
   * ```txt
   * Expires: <http-date>
   * ```
   *
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires
   */
  Expires: 'expires',
  /**
   * ```txt
   * Age: <delta-seconds>
   * ```
   *
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Age
   */
  Age: 'age',
  /**
   * Used internally as metadata to mark the cache item as revalidatable and enabling
   * stale cache state Contains a string of ASCII characters that can be used as ETag for
   * `If-Match` header Provided by user using `cache.etag` value.
   *
   * ```txt
   * X-Axios-Cache-Etag: "<etag_value>"
   * ```
   */
  XAxiosCacheEtag: 'x-axios-cache-etag',
  /**
   * Used internally as metadata to mark the cache item as revalidatable and enabling
   * stale cache state may contain `'use-cache-timestamp'` if `cache.modifiedSince` is
   * `true`, otherwise will contain a date from `cache.modifiedSince`. If a date is
   * provided, it can be used for `If-Modified-Since` header, otherwise the cache
   * timestamp can be used for `If-Modified-Since` header.
   *
   * ```txt
   * X-Axios-Cache-Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
   * X-Axios-Cache-Last-Modified: use-cache-timestamp
   * ```
   */
  XAxiosCacheLastModified: 'x-axios-cache-last-modified',
  /**
   * Used internally as metadata to mark the cache item able to be used if the server
   * returns an error. The stale-if-error response directive indicates that the cache can
   * reuse a stale response when any error occurs.
   *
   * ```txt
   * XAxiosCacheStaleIfError: <seconds>
   * ```
   */
  XAxiosCacheStaleIfError: 'x-axios-cache-stale-if-error'
});

const defaultHeaderInterpreter = headers => {
  if (!headers) return 'not enough headers';
  const cacheControl = headers[Header.CacheControl];
  if (cacheControl) {
    const {
      noCache,
      noStore,
      maxAge,
      maxStale,
      immutable,
      staleWhileRevalidate
    } = cacheParser.parse(String(cacheControl));
    // Header told that this response should not be cached.
    if (noCache || noStore) {
      return 'dont cache';
    }
    if (immutable) {
      // 1 year is sufficient, as Infinity may cause problems with certain storages.
      // It might not be the best way, but a year is better than none. Facebook shows
      // that a browser session stays at the most 1 month.
      return {
        cache: 1000 * 60 * 60 * 24 * 365
      };
    }
    if (maxAge !== undefined) {
      const age = headers[Header.Age];
      return {
        cache: age ?
        // If age is present, we must subtract it from maxAge
        (maxAge - Number(age)) * 1000 : maxAge * 1000,
        // Already out of date, must be requested again
        stale:
        // I couldn't find any documentation about who should be used, as they
        // are not meant to overlap each other. But, as we cannot request in the
        // background, as the stale-while-revalidate says, and we just increase
        // its staleTtl when its present, max-stale is being preferred over
        // stale-while-revalidate.
        maxStale !== undefined ? maxStale * 1000 : staleWhileRevalidate !== undefined ? staleWhileRevalidate * 1000 : undefined
      };
    }
  }
  const expires = headers[Header.Expires];
  if (expires) {
    const milliseconds = Date.parse(String(expires)) - Date.now();
    return milliseconds >= 0 ? {
      cache: milliseconds
    } : 'dont cache';
  }
  return 'not enough headers';
};

/**
 * Creates a new validateStatus function that will use the one already used and also
 * accept status code 304.
 */
function createValidateStatus(oldValidate) {
  return oldValidate ? status => oldValidate(status) || status === 304 : status => status >= 200 && status < 300 || status === 304;
}
/** Checks if the given method is in the methods array */
function isMethodIn(requestMethod = 'get', methodList = []) {
  requestMethod = requestMethod.toLowerCase();
  return methodList.some(method => method === requestMethod);
}
/**
 * This function updates the cache when the request is stale. So, the next request to the
 * server will be made with proper header / settings.
 */
function updateStaleRequest(cache, config) {
  config.headers || (config.headers = {});
  const {
    etag,
    modifiedSince
  } = config.cache;
  if (etag) {
    var _cache$data;
    const etagValue = etag === true ? (_cache$data = cache.data) == null ? void 0 : _cache$data.headers[Header.ETag] : etag;
    if (etagValue) {
      config.headers[Header.IfNoneMatch] = etagValue;
    }
  }
  if (modifiedSince) {
    config.headers[Header.IfModifiedSince] = modifiedSince === true ?
    // If last-modified is not present, use the createdAt timestamp
    cache.data.headers[Header.LastModified] || new Date(cache.createdAt).toUTCString() : modifiedSince.toUTCString();
  }
}
/**
 * Creates the new date to the cache by the provided response. Also handles possible 304
 * Not Modified by updating response properties.
 */
function createCacheResponse(response, previousCache) {
  if (response.status === 304 && previousCache) {
    // Set the cache information into the response object
    response.cached = true;
    response.data = previousCache.data;
    response.status = previousCache.status;
    response.statusText = previousCache.statusText;
    // Update possible new headers
    response.headers = {
      ...previousCache.headers,
      ...response.headers
    };
    // return the old cache
    return previousCache;
  }
  // New Response
  return {
    data: response.data,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  };
}

function defaultRequestInterceptor(axios) {
  const onFulfilled = async config => {
    config.id = axios.generateKey(config);
    if (config.cache === false) {
      return config;
    }
    // merge defaults with per request configuration
    config.cache = {
      ...axios.defaults.cache,
      ...config.cache
    };
    if (typeof config.cache.cachePredicate === 'object' && config.cache.cachePredicate.ignoreUrls && config.url) {
      for (const url of config.cache.cachePredicate.ignoreUrls) {
        if (url instanceof RegExp ? (
        // Handles stateful regexes
        // biome-ignore lint: reduces the number of checks
        url.lastIndex = 0, url.test(config.url)) : config.url.includes(url)) {
          return config;
        }
      }
    }
    // Applies sufficient headers to prevent other cache systems to work along with this one
    //
    // Its currently used before isMethodIn because if the isMethodIn returns false, the request
    // shouldn't be cached an therefore neither in the browser.
    if (config.cache.cacheTakeover) {
      var _config$headers, _Header$CacheControl, _config$headers$_Head, _config$headers2, _Header$Pragma, _config$headers2$_Hea, _config$headers3, _Header$Expires, _config$headers3$_Hea;
      (_config$headers$_Head = (_config$headers = config.headers)[_Header$CacheControl = Header.CacheControl]) != null ? _config$headers$_Head : _config$headers[_Header$CacheControl] = 'no-cache';
      (_config$headers2$_Hea = (_config$headers2 = config.headers)[_Header$Pragma = Header.Pragma]) != null ? _config$headers2$_Hea : _config$headers2[_Header$Pragma] = 'no-cache';
      (_config$headers3$_Hea = (_config$headers3 = config.headers)[_Header$Expires = Header.Expires]) != null ? _config$headers3$_Hea : _config$headers3[_Header$Expires] = '0';
    }
    if (!isMethodIn(config.method, config.cache.methods)) {
      return config;
    }
    // Assumes that the storage handled staled responses
    let cache = await axios.storage.get(config.id, config);
    const overrideCache = config.cache.override;
    // Not cached, continue the request, and mark it as fetching
    // biome-ignore lint/suspicious/noConfusingLabels: required to break condition in simultaneous accesses
    ignoreAndRequest: if (cache.state === 'empty' || cache.state === 'stale' || cache.state === 'must-revalidate' || overrideCache) {
      // This checks for simultaneous access to a new key. The js event loop jumps on the
      // first await statement, so the second (asynchronous call) request may have already
      // started executing.
      if (axios.waiting[config.id] && !overrideCache) {
        cache = await axios.storage.get(config.id, config);
        // @ts-expect-error This check is required when a request has it own cache deleted manually, lets
        // say by a `axios.storage.delete(key)` and has a concurrent loading request.
        // Because in this case, the cache will be empty and may still has a pending key
        // on waiting map.
        if (cache.state !== 'empty' && cache.state !== 'must-revalidate') {
          break ignoreAndRequest;
        }
      }
      // Create a deferred to resolve other requests for the same key when it's completed
      axios.waiting[config.id] = fastDefer.deferred();
      // Adds a default reject handler to catch when the request gets aborted without
      // others waiting for it.
      axios.waiting[config.id].catch(() => undefined);
      await axios.storage.set(config.id, {
        state: 'loading',
        previous: overrideCache ?
        // Simply determine if the request is stale or not
        // based if it had previous data or not
        cache.data ? 'stale' : 'empty' :
        // Typescript doesn't know that cache.state here can only be 'empty' or 'stale'
        cache.state,
        data: cache.data,
        // If the cache is empty and asked to override it, use the current timestamp
        createdAt: overrideCache && !cache.createdAt ? Date.now() : cache.createdAt
      }, config);
      if (cache.state === 'stale' || cache.state === 'must-revalidate') {
        updateStaleRequest(cache, config);
      }
      config.validateStatus = createValidateStatus(config.validateStatus);
      // Hydrates any UI temporarily, if cache is available
      if (cache.state === 'stale' || cache.data && cache.state !== 'must-revalidate') {
        await (config.cache.hydrate == null ? void 0 : config.cache.hydrate(cache));
      }
      return config;
    }
    let cachedResponse;
    if (cache.state === 'loading') {
      const deferred = axios.waiting[config.id];
      // The deferred may not exists when the process is using a persistent
      // storage and cancelled  in the middle of a request, this would result in
      // a pending loading state in the storage but no current promises to resolve
      if (!deferred) {
        // Hydrates any UI temporarily, if cache is available
        if (cache.data) {
          await (config.cache.hydrate == null ? void 0 : config.cache.hydrate(cache));
        }
        return config;
      }
      try {
        cachedResponse = await deferred;
      } catch (err) {
        // Hydrates any UI temporarily, if cache is available
        /* c8 ignore next 3 */
        if (cache.data) {
          await (config.cache.hydrate == null ? void 0 : config.cache.hydrate(cache));
        }
        // The deferred is rejected when the request that we are waiting rejects its cache.
        // In this case, we need to redo the request all over again.
        return onFulfilled(config);
      }
    } else {
      cachedResponse = cache.data;
    }
    // The cached data is already transformed after receiving the response from the server.
    // Reapplying the transformation on the transformed data will have an unintended effect.
    // Since the cached data is already in the desired format, there is no need to apply the transformation function again.
    config.transformResponse = undefined;
    // Even though the response interceptor receives this one from here,
    // it has been configured to ignore cached responses = true
    config.adapter = function cachedAdapter() {
      return Promise.resolve({
        config,
        data: cachedResponse.data,
        headers: cachedResponse.headers,
        status: cachedResponse.status,
        statusText: cachedResponse.statusText,
        cached: true,
        id: config.id
      });
    };
    return config;
  };
  return {
    onFulfilled,
    apply: () => axios.interceptors.request.use(onFulfilled)
  };
}

/** Tests an response against a {@link CachePredicateObject}. */
async function testCachePredicate(response, predicate) {
  if (typeof predicate === 'function') {
    return predicate(response);
  }
  const {
    statusCheck,
    responseMatch,
    containsHeaders
  } = predicate;
  if (statusCheck && !(await statusCheck(response.status)) || responseMatch && !(await responseMatch(response))) {
    return false;
  }
  if (containsHeaders) {
    for (const [header, predicate] of Object.entries(containsHeaders)) {
      var _response$headers$hea;
      if (!(await predicate( // Avoid bugs in case the header is not in lower case
      (_response$headers$hea = response.headers[header.toLowerCase()]) != null ? _response$headers$hea : response.headers[header]))) {
        return false;
      }
    }
  }
  return true;
}

/** Function to update all caches, from CacheProperties.update, with the new data. */
async function updateCache(storage, data, cacheUpdater) {
  // Global cache update function.
  if (typeof cacheUpdater === 'function') {
    return cacheUpdater(data);
  }
  for (const [cacheKey, updater] of Object.entries(cacheUpdater)) {
    if (updater === 'delete') {
      await storage.remove(cacheKey, data.config);
      continue;
    }
    const value = await storage.get(cacheKey, data.config);
    if (value.state === 'loading') {
      continue;
    }
    const newValue = await updater(value, data);
    if (newValue === 'delete') {
      await storage.remove(cacheKey, data.config);
      continue;
    }
    if (newValue !== 'ignore') {
      await storage.set(cacheKey, newValue, data.config);
    }
  }
}

function defaultResponseInterceptor(axios) {
  /**
   * Rejects cache for an response response.
   *
   * Also update the waiting list for this key by rejecting it.
   */
  const rejectResponse = async (responseId, config) => {
    var _axios$waiting$respon;
    // Updates the cache to empty to prevent infinite loading state
    await axios.storage.remove(responseId, config);
    // Rejects the deferred, if present
    (_axios$waiting$respon = axios.waiting[responseId]) == null || _axios$waiting$respon.reject();
    delete axios.waiting[responseId];
  };
  const onFulfilled = async response => {
    var _response$cached;
    // When response.config is not present, the response is indeed a error.
    if (!(response != null && response.config)) {
      // Re-throws the error
      throw response;
    }
    response.id = response.config.id;
    (_response$cached = response.cached) != null ? _response$cached : response.cached = false;
    const config = response.config;
    // Request interceptor merges defaults with per request configuration
    const cacheConfig = config.cache;
    // Response is already cached
    if (response.cached) {
      return response;
    }
    // Skip cache: either false or weird behavior
    // config.cache should always exists, at least from global config merge.
    if (!cacheConfig) {
      response.cached = false;
      return response;
    }
    // Update other entries before updating himself
    if (cacheConfig.update) {
      await updateCache(axios.storage, response, cacheConfig.update);
    }
    if (!isMethodIn(config.method, cacheConfig.methods)) {
      return response;
    }
    const cache = await axios.storage.get(response.id, config);
    if (
    // If the request interceptor had a problem or it wasn't cached
    cache.state !== 'loading') {
      return response;
    }
    // Config told that this response should be cached.
    if (
    // For 'loading' values (previous: stale), this check already ran in the past.
    !cache.data && !(await testCachePredicate(response, cacheConfig.cachePredicate))) {
      await rejectResponse(response.id, config);
      return response;
    }
    // Avoid remnant headers from remote server to break implementation
    for (const header of Object.keys(response.headers)) {
      if (header.startsWith('x-axios-cache')) {
        delete response.headers[header];
      }
    }
    if (cacheConfig.etag && cacheConfig.etag !== true) {
      response.headers[Header.XAxiosCacheEtag] = cacheConfig.etag;
    }
    if (cacheConfig.modifiedSince) {
      response.headers[Header.XAxiosCacheLastModified] = cacheConfig.modifiedSince === true ? 'use-cache-timestamp' : cacheConfig.modifiedSince.toUTCString();
    }
    let ttl = cacheConfig.ttl || -1; // always set from global config
    let staleTtl;
    if (cacheConfig.interpretHeader) {
      const expirationTime = axios.headerInterpreter(response.headers);
      // Cache should not be used
      if (expirationTime === 'dont cache') {
        await rejectResponse(response.id, config);
        return response;
      }
      if (expirationTime !== 'not enough headers') {
        if (typeof expirationTime === 'number') {
          ttl = expirationTime;
        } else {
          ttl = expirationTime.cache;
          staleTtl = expirationTime.stale;
        }
      }
    }
    const data = createCacheResponse(response, cache.data);
    if (typeof ttl === 'function') {
      ttl = await ttl(response);
    }
    if (cacheConfig.staleIfError) {
      response.headers[Header.XAxiosCacheStaleIfError] = String(ttl);
    }
    const newCache = {
      state: 'cached',
      ttl,
      staleTtl,
      createdAt: Date.now(),
      data
    };
    // Resolve all other requests waiting for this response
    const waiting = axios.waiting[response.id];
    if (waiting) {
      waiting.resolve(newCache.data);
      delete axios.waiting[response.id];
    }
    // Define this key as cache on the storage
    await axios.storage.set(response.id, newCache, config);
    // Return the response with cached as false, because it was not cached at all
    return response;
  };
  const onRejected = async error => {
    // When response.config is not present, the response is indeed a error.
    if (!error.isAxiosError || !error.config) {
      // We should probably re-request the response to avoid an infinite loading state here
      // but, since this is an unknown error, we cannot figure out what request ID to use.
      // And the only solution is to let the storage actively reject the current loading state.
      throw error;
    }
    const config = error.config;
    const id = config.id;
    const cacheConfig = config.cache;
    const response = error.response;
    // config.cache should always exist, at least from global config merge.
    if (!cacheConfig || !id) {
      throw error;
    }
    if (!isMethodIn(config.method, cacheConfig.methods)) {
      // Rejects all other requests waiting for this response
      await rejectResponse(id, config);
      throw error;
    }
    const cache = await axios.storage.get(id, config);
    if (
    // This will only not be loading if the interceptor broke
    cache.state !== 'loading' || cache.previous !== 'stale') {
      // Rejects all other requests waiting for this response
      await rejectResponse(id, config);
      throw error;
    }
    if (cacheConfig.staleIfError) {
      const cacheControl = String(response == null ? void 0 : response.headers[Header.CacheControl]);
      const staleHeader = cacheControl && cacheParser.parse(cacheControl).staleIfError;
      const staleIfError = typeof cacheConfig.staleIfError === 'function' ? await cacheConfig.staleIfError(response, cache, error) : cacheConfig.staleIfError === true && staleHeader ? staleHeader * 1000 //staleIfError is in seconds
      : cacheConfig.staleIfError;
      if (staleIfError === true ||
      // staleIfError is the number of seconds that stale is allowed to be used
      typeof staleIfError === 'number' && cache.createdAt + staleIfError > Date.now()) {
        var _axios$waiting$id;
        // Resolve all other requests waiting for this response
        (_axios$waiting$id = axios.waiting[id]) == null || _axios$waiting$id.resolve(cache.data);
        delete axios.waiting[id];
        // re-mark the cache as stale
        await axios.storage.set(id, {
          state: 'stale',
          createdAt: Date.now(),
          data: cache.data
        }, config);
        return {
          cached: true,
          config,
          id,
          data: cache.data.data,
          headers: cache.data.headers,
          status: cache.data.status,
          statusText: cache.data.statusText
        };
      }
    }
    // Rejects all other requests waiting for this response
    await rejectResponse(id, config);
    throw error;
  };
  return {
    onFulfilled,
    onRejected,
    apply: () => axios.interceptors.response.use(onFulfilled, onRejected)
  };
}

/** Returns true if the provided object was created from {@link buildStorage} function. */
const isStorage = obj => !!obj && !!obj['is-storage'];
function hasUniqueIdentifierHeader(value) {
  const headers = value.data.headers;
  return Header.ETag in headers || Header.LastModified in headers || Header.XAxiosCacheEtag in headers || Header.XAxiosCacheLastModified in headers;
}
/** Returns true if value must be revalidated */
function mustRevalidate(value) {
  // Must revalidate is a special case and should not serve stale values
  // We could use cache-control's parse function, but this is way faster and simpler
  return String(value.data.headers[Header.CacheControl]).includes('must-revalidate');
}
/** Returns true if this has sufficient properties to stale instead of expire. */
function canStale(value) {
  if (hasUniqueIdentifierHeader(value)) {
    return true;
  }
  return value.state === 'cached' && value.staleTtl !== undefined &&
  // Only allow stale values after the ttl is already in the past and the staleTtl is in the future.
  // In cases that just createdAt + ttl > Date.now(), isn't enough because the staleTtl could be <= 0.
  // This logic only returns true when Date.now() is between the (createdAt + ttl) and (createdAt + ttl + staleTtl).
  // Following the example below:
  // |--createdAt--:--ttl--:---staleTtl--->
  // [        past        ][now is in here]
  Math.abs(Date.now() - (value.createdAt + value.ttl)) <= value.staleTtl;
}
/**
 * Checks if the provided cache is expired. You should also check if the cache
 * {@link canStale} and {@link mayUseStale}
 */
function isExpired(value) {
  return value.ttl !== undefined && value.createdAt + value.ttl <= Date.now();
}
/**
 * All integrated storages are wrappers around the `buildStorage` function. External
 * libraries use it and if you want to build your own, `buildStorage` is the way to go!
 *
 * The exported `buildStorage` function abstracts the storage interface and requires a
 * super simple object to build the storage.
 *
 * **Note**: You can only create an custom storage with this function.
 *
 * @example
 *
 * ```js
 * const myStorage = buildStorage({
 *   find: () => {...},
 *   set: () => {...},
 *   remove: () => {...}
 * });
 *
 * const axios = setupCache(axios, { storage: myStorage });
 * ```
 *
 * @see https://axios-cache-interceptor.js.org/guide/storages#buildstorage
 */
function buildStorage({
  set,
  find,
  remove
}) {
  return {
    //@ts-expect-error - we don't want to expose this
    'is-storage': 1,
    set,
    remove,
    get: async (key, config) => {
      let value = await find(key, config);
      if (!value) {
        return {
          state: 'empty'
        };
      }
      if (value.state === 'empty' || value.state === 'loading' || value.state === 'must-revalidate') {
        return value;
      }
      // Handle cached values
      if (value.state === 'cached') {
        if (!isExpired(value)) {
          return value;
        }
        // Tries to stale expired value
        if (!canStale(value)) {
          await remove(key, config);
          return {
            state: 'empty'
          };
        }
        value = {
          state: 'stale',
          createdAt: value.createdAt,
          data: value.data,
          ttl: value.staleTtl !== undefined ? value.staleTtl + value.ttl : undefined
        };
        await set(key, value, config);
        // Must revalidate is a special case and should not serve stale values
        if (mustRevalidate(value)) {
          return {
            ...value,
            state: 'must-revalidate'
          };
        }
      }
      // A second check in case the new stale value was created already expired.
      if (!isExpired(value)) {
        return value;
      }
      if (hasUniqueIdentifierHeader(value)) {
        return value;
      }
      await remove(key, config);
      return {
        state: 'empty'
      };
    }
  };
}

/**
 * Creates a simple in-memory storage. This means that if you need to persist data between
 * page or server reloads, this will not help.
 *
 * This is the storage used by default.
 *
 * If you need to modify it's data, you can do by the `data` property.
 *
 * @example
 *
 * ```js
 * const memoryStorage = buildMemoryStorage();
 *
 * setupCache(axios, { storage: memoryStorage });
 *
 * // Simple example to force delete the request cache
 *
 * const { id } = axios.get('url');
 *
 * delete memoryStorage.data[id];
 * ```
 *
 * @param {boolean | 'double'} cloneData Use `true` if the data returned by `find()`
 *   should be cloned to avoid mutating the original data outside the `set()` method. Use
 *   `'double'` to also clone before saving value in storage using `set()`. Disabled is
 *   default
 * @param {number | false} cleanupInterval The interval in milliseconds to run a
 *   setInterval job of cleaning old entries. If false, the job will not be created.
 *   Disabled is default
 * @param {number | false} maxEntries The maximum number of entries to keep in the
 *   storage. Its hard to determine the size of the entries, so a smart FIFO order is used
 *   to determine eviction. If false, no check will be done and you may grow up memory
 *   usage. Disabled is default
 */
function buildMemoryStorage(cloneData = false, cleanupInterval = false, maxEntries = false) {
  const storage = buildStorage({
    set: (key, value) => {
      if (maxEntries) {
        let keys = Object.keys(storage.data);
        // Tries to cleanup first
        if (keys.length >= maxEntries) {
          storage.cleanup();
          // Recalculates the keys
          keys = Object.keys(storage.data);
          // Keeps deleting until there's space
          while (keys.length >= maxEntries) {
            // There's always at least one key here, otherwise it would not be
            // in the loop.
            delete storage.data[keys.shift()];
          }
        }
      }
      storage.data[key] =
      // Clone the value before storing to prevent future mutations
      // from affecting cached data.
      cloneData === 'double' ? /* c8 ignore next 3 */
      typeof structuredClone === 'function' ? structuredClone(value) : JSON.parse(JSON.stringify(value)) : value;
    },
    remove: key => {
      delete storage.data[key];
    },
    find: key => {
      const value = storage.data[key];
      /* c8 ignore next 7 */
      if (cloneData && value !== undefined) {
        if (typeof structuredClone === 'function') {
          return structuredClone(value);
        }
        return JSON.parse(JSON.stringify(value));
      }
      return value;
    }
  });
  storage.data = Object.create(null);
  // When this program gets running for more than the specified interval, there's a good
  // chance of it being a long-running process or at least have a lot of entries. Therefore,
  // "faster" loop is more important than code readability.
  storage.cleanup = () => {
    const keys = Object.keys(storage.data);
    let i = -1;
    let value;
    let key;
    // Looping forward, as older entries are more likely to be expired
    // than newer ones.
    while (++i < keys.length) {
      key = keys[i];
      value = storage.data[key];
      if (value.state === 'empty') {
        // this storage returns void.
        storage.remove(key);
        continue;
      }
      // If the value is expired and can't be stale, remove it
      if (value.state === 'cached' && isExpired(value) && !canStale(value)) {
        // this storage returns void.
        storage.remove(key);
      }
    }
  };
  if (cleanupInterval) {
    storage.cleaner = setInterval(storage.cleanup, cleanupInterval);
  }
  return storage;
}

// Remove first and last '/' char, if present
const SLASHES_REGEX = /^\/|\/$/g;
/**
 * Builds an generator that receives a {@link CacheRequestConfig} and returns a value
 * hashed by {@link hash}.
 *
 * The value is hashed into a signed integer when the returned value from the provided
 * generator is not a `string` or a `number`.
 *
 * You can return any type of data structure.
 *
 * @example
 *
 * ```js
 * // This generator will return a hash code.
 * // The code will only be the same if url, method and data are the same.
 * const generator = buildKeyGenerator(({ url, method, data }) => ({
 *   url,
 *   method,
 *   data
 * }));
 * ```
 */
function buildKeyGenerator(generator) {
  return request => {
    if (request.id) {
      return request.id;
    }
    const key = generator(request);
    if (typeof key === 'string' || typeof key === 'number') {
      return `${key}`;
    }
    return `${objectCode.hash(key)}`;
  };
}
const defaultKeyGenerator = buildKeyGenerator(({
  baseURL,
  url,
  method,
  params,
  data
}) => {
  // Remove trailing slashes to avoid generating different keys for the "same" final url.
  if (baseURL !== undefined) {
    baseURL = baseURL.replace(SLASHES_REGEX, '');
  } else {
    // just to have a consistent hash
    baseURL = '';
  }
  if (url !== undefined) {
    url = url.replace(SLASHES_REGEX, '');
  } else {
    // just to have a consistent hash
    url = '';
  }
  if (method !== undefined) {
    method = method.toLowerCase();
  } else {
    // just to have a consistent hash
    method = 'get';
  }
  return {
    url: baseURL + (baseURL && url ? '/' : '') + url,
    params: params,
    method: method,
    data: data
  };
});

/**
 * Apply the caching interceptors for a already created axios instance.
 *
 * ```ts
 * const axios = setupCache(axios, OPTIONS);
 * ```
 *
 * The `setupCache` function receives global options and all [request
 * specifics](https://axios-cache-interceptor.js.org/config/request-specifics) ones too.
 * This way, you can customize the defaults for all requests.
 *
 * @param axios The already created axios instance
 * @param config The config for the caching interceptors
 * @returns The same instance with extended typescript types.
 * @see https://axios-cache-interceptor.js.org/config
 */
function setupCache(axios, options = {}) {
  var _options$ttl, _options$etag, _options$modifiedSinc, _options$interpretHea, _options$cacheTakeove, _options$staleIfError, _options$override, _options$hydrate;
  const axiosCache = axios;
  if (axiosCache.defaults.cache) {
    throw new Error('setupCache() should be called only once');
  }
  axiosCache.storage = options.storage || buildMemoryStorage();
  if (!isStorage(axiosCache.storage)) {
    throw new Error('Use buildStorage() function');
  }
  axiosCache.waiting = options.waiting || {};
  axiosCache.generateKey = options.generateKey || defaultKeyGenerator;
  axiosCache.headerInterpreter = options.headerInterpreter || defaultHeaderInterpreter;
  axiosCache.requestInterceptor = options.requestInterceptor || defaultRequestInterceptor(axiosCache);
  axiosCache.responseInterceptor = options.responseInterceptor || defaultResponseInterceptor(axiosCache);
  axiosCache.debug = options.debug || function noop() {};
  // CacheRequestConfig values
  axiosCache.defaults.cache = {
    update: options.update || {},
    ttl: (_options$ttl = options.ttl) != null ? _options$ttl : 1000 * 60 * 5,
    // Although RFC 7231 also marks POST as cacheable, most users don't know that
    // and may have problems about why their "create X" route not working.
    methods: options.methods || ['get', 'head'],
    cachePredicate: options.cachePredicate || {
      // All cacheable status codes defined in RFC 7231
      statusCheck: status => [200, 203, 300, 301, 302, 404, 405, 410, 414, 501].includes(status)
    },
    etag: (_options$etag = options.etag) != null ? _options$etag : true,
    // This option is going to be ignored by servers when ETag is enabled
    // Checks strict equality to false to avoid undefined-ish values
    modifiedSince: (_options$modifiedSinc = options.modifiedSince) != null ? _options$modifiedSinc : options.etag === false,
    interpretHeader: (_options$interpretHea = options.interpretHeader) != null ? _options$interpretHea : true,
    cacheTakeover: (_options$cacheTakeove = options.cacheTakeover) != null ? _options$cacheTakeove : true,
    staleIfError: (_options$staleIfError = options.staleIfError) != null ? _options$staleIfError : true,
    override: (_options$override = options.override) != null ? _options$override : false,
    hydrate: (_options$hydrate = options.hydrate) != null ? _options$hydrate : undefined
  };
  // Apply interceptors
  axiosCache.requestInterceptor.apply();
  axiosCache.responseInterceptor.apply();
  return axiosCache;
}

/**
 * Creates a simple storage. You can persist his data by using `sessionStorage` or
 * `localStorage` with it.
 *
 * **ImplNote**: Without polyfill, this storage only works on browser environments.
 *
 * @example
 *
 * ```js
 * const fromLocalStorage = buildWebStorage(localStorage);
 * const fromSessionStorage = buildWebStorage(sessionStorage);
 *
 * const myStorage = new Storage();
 * const fromMyStorage = buildWebStorage(myStorage);
 * ```
 *
 * @param storage The type of web storage to use. localStorage or sessionStorage.
 * @param prefix The prefix to index the storage. Useful to prevent collision between
 *   multiple places using the same storage.
 */
function buildWebStorage(storage, prefix = 'axios-cache-') {
  return buildStorage({
    find: key => {
      const json = storage.getItem(prefix + key);
      return json ? JSON.parse(json) : undefined;
    },
    remove: key => {
      storage.removeItem(prefix + key);
    },
    set: (key, value) => {
      const save = () => storage.setItem(prefix + key, JSON.stringify(value));
      try {
        return save();
      } catch (error) {
        const allValues = Object.entries(storage).filter(item => item[0].startsWith(prefix)).map(item => [item[0], JSON.parse(item[1])]);
        // Remove all expired values
        for (const value of allValues) {
          if (value[1].state === 'cached' && isExpired(value[1]) && !canStale(value[1])) {
            storage.removeItem(value[0]);
          }
        }
        // Try save again after removing expired values
        try {
          return save();
        } catch {
          // Storage still full, try removing the oldest value until it can be saved
          // Descending sort by createdAt
          const sortedItems = allValues.sort((a, b) => (a[1].createdAt || 0) - (b[1].createdAt || 0));
          for (const item of sortedItems) {
            storage.removeItem(item[0]);
            try {
              return save();
            } catch {
              // This key didn't free all the required space
            }
          }
        }
        // Clear the cache for the specified key
        storage.removeItem(prefix + key);
      }
    }
  });
}

exports.Header = Header;
exports.buildKeyGenerator = buildKeyGenerator;
exports.buildMemoryStorage = buildMemoryStorage;
exports.buildStorage = buildStorage;
exports.buildWebStorage = buildWebStorage;
exports.canStale = canStale;
exports.createCacheResponse = createCacheResponse;
exports.createValidateStatus = createValidateStatus;
exports.defaultHeaderInterpreter = defaultHeaderInterpreter;
exports.defaultKeyGenerator = defaultKeyGenerator;
exports.defaultRequestInterceptor = defaultRequestInterceptor;
exports.defaultResponseInterceptor = defaultResponseInterceptor;
exports.isExpired = isExpired;
exports.isMethodIn = isMethodIn;
exports.isStorage = isStorage;
exports.mustRevalidate = mustRevalidate;
exports.setupCache = setupCache;
exports.testCachePredicate = testCachePredicate;
exports.updateCache = updateCache;
exports.updateStaleRequest = updateStaleRequest;
//# sourceMappingURL=index.cjs.map


/***/ }),
/* 12 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCacheControl: () => (/* binding */ s),
/* harmony export */   parse: () => (/* binding */ o),
/* harmony export */   tokenize: () => (/* binding */ i)
/* harmony export */ });
var e=Symbol("cache-parser");function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function t(e){return("string"==typeof e||"number"==typeof e)&&(e=Number(e))>=0&&e<Infinity}function a(e){return!0===e||"number"==typeof e||"string"==typeof e&&"false"!==e}var n=Number;function o(o){var i=Object.defineProperty({},e,{enumerable:!1,value:1});if(!o||"string"!=typeof o)return i;var s=function(e){for(var t,a={},n=function(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(e))){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(e.toLowerCase().replace(/\s+/g,"").split(","));!(t=n()).done;){var o,i=t.value.split("=",2);a[i[0]]=null==(o=i[1])||o}return a}(o),l=s["max-age"],u=s["max-stale"],m=s["min-fresh"],p=s["s-maxage"],f=s["stale-if-error"],c=s["stale-while-revalidate"];return a(s.immutable)&&(i.immutable=!0),t(l)&&(i.maxAge=n(l)),t(u)&&(i.maxStale=n(u)),t(m)&&(i.minFresh=n(m)),a(s["must-revalidate"])&&(i.mustRevalidate=!0),a(s["must-understand"])&&(i.mustUnderstand=!0),a(s["no-cache"])&&(i.noCache=!0),a(s["no-store"])&&(i.noStore=!0),a(s["no-transform"])&&(i.noTransform=!0),a(s["only-if-cached"])&&(i.onlyIfCached=!0),a(s.private)&&(i.private=!0),a(s["proxy-revalidate"])&&(i.proxyRevalidate=!0),a(s.public)&&(i.public=!0),t(p)&&(i.sMaxAge=n(p)),t(f)&&(i.staleIfError=n(f)),t(c)&&(i.staleWhileRevalidate=n(c)),i}function i(e){if(!e||"object"!=typeof e)return[];var r=[];return a(e.immutable)&&r.push("immutable"),t(e.maxAge)&&r.push("max-age="+e.maxAge),t(e.maxStale)&&r.push("max-stale="+e.maxStale),t(e.minFresh)&&r.push("min-fresh="+e.minFresh),a(e.mustRevalidate)&&r.push("must-revalidate"),a(e.mustUnderstand)&&r.push("must-understand"),a(e.noCache)&&r.push("no-cache"),a(e.noStore)&&r.push("no-store"),a(e.noTransform)&&r.push("no-transform"),a(e.onlyIfCached)&&r.push("only-if-cached"),a(e.private)&&r.push("private"),a(e.proxyRevalidate)&&r.push("proxy-revalidate"),a(e.public)&&r.push("public"),t(e.sMaxAge)&&r.push("s-maxage="+e.sMaxAge),t(e.staleIfError)&&r.push("stale-if-error="+e.staleIfError),t(e.staleWhileRevalidate)&&r.push("stale-while-revalidate="+e.staleWhileRevalidate),r}function s(r){return!!r&&!!r[e]}
//# sourceMappingURL=index.mjs.map


/***/ }),
/* 13 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deferred: () => (/* binding */ e),
/* harmony export */   isDeferred: () => (/* binding */ n)
/* harmony export */ });
var r=Symbol();function e(){var e,n,o=new Promise(function(r,o){e=r,n=o});return o.resolve=e,o.reject=n,o[r]=1,o}function n(e){return!!e&&!!e[r]}
//# sourceMappingURL=index.mjs.map


/***/ }),
/* 14 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hash: () => (/* binding */ r),
/* harmony export */   sortNumbers: () => (/* binding */ t)
/* harmony export */ });
function t(t,r){return t>r?1:-1}function r(o,e){var n=5381;if("object"==typeof o&&null!==o&&(o.toString===Object.prototype.toString||o.toString===Array.prototype.toString)){e||(e=new WeakSet);for(var i=Object.keys(o).sort(t),a=0;a<i.length;a++){var c=i[a],g=o[c];if(n=33*n^r(c,e),"object"==typeof g&&null!==g&&(o.toString===Object.prototype.toString||o.toString===Array.prototype.toString)){if(e.has(g))continue;e.add(g)}n=33*n^r(g,e)}return 33*n^r(o.constructor,e)}var p=typeof o;try{o instanceof Date?p+=o.getTime():p+=String(o)}catch(t){p+=String(Object.assign({},o))}for(var f=0;f<p.length;f++)n=33*n^p.charCodeAt(f);return n}
//# sourceMappingURL=index.mjs.map


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Weather = exports.WeatherType = void 0;
var WeatherType;
(function (WeatherType) {
    WeatherType[WeatherType["NONE"] = 0] = "NONE";
    WeatherType[WeatherType["SUNNY"] = 1] = "SUNNY";
    WeatherType[WeatherType["RAIN"] = 2] = "RAIN";
    WeatherType[WeatherType["SANDSTORM"] = 3] = "SANDSTORM";
    WeatherType[WeatherType["HAIL"] = 4] = "HAIL";
    WeatherType[WeatherType["SNOW"] = 5] = "SNOW";
    WeatherType[WeatherType["FOG"] = 6] = "FOG";
    WeatherType[WeatherType["HEAVY_RAIN"] = 7] = "HEAVY_RAIN";
    WeatherType[WeatherType["HARSH_SUN"] = 8] = "HARSH_SUN";
    WeatherType[WeatherType["STRONG_WINDS"] = 9] = "STRONG_WINDS";
})(WeatherType || (exports.WeatherType = WeatherType = {}));
class Weather {
    constructor() {
        this.weatherType = {};
        this.turnsLeft = 0;
    }
}
exports.Weather = Weather;


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.browserApi = void 0;
exports.browserApi = (_a = chrome !== null && chrome !== void 0 ? chrome : window.browser) !== null && _a !== void 0 ? _a : window.chrome;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.natureDescription = void 0;
const nature_1 = __webpack_require__(4);
const pokemon_stat_1 = __webpack_require__(5);
const natureDescription = {};
exports.natureDescription = natureDescription;
// natureDescription 초기화
for (const key in nature_1.Nature) {
    if (Object.prototype.hasOwnProperty.call(nature_1.Nature, key)) {
        const value = nature_1.Nature[key];
        natureDescription[value] = _getNatureDescription(value);
    }
}
function _getNatureDescription(nature) {
    let ret = '(-)';
    let increasedStat = 0;
    let decreasedStat = 0;
    for (const key in pokemon_stat_1.Stat) {
        if (Object.prototype.hasOwnProperty.call(pokemon_stat_1.Stat, key)) {
            const stat = pokemon_stat_1.Stat[key];
            const multiplier = (0, nature_1.getNatureStatMultiplier)(nature, stat);
            if (multiplier > 1) {
                increasedStat = stat;
            }
            else if (multiplier < 1) {
                decreasedStat = stat;
            }
        }
    }
    if (increasedStat && decreasedStat)
        ret = `(+${pokemon_stat_1.Stat[increasedStat]}/-${pokemon_stat_1.Stat[decreasedStat]})`;
    else if (increasedStat)
        ret = `(+${pokemon_stat_1.Stat[increasedStat]})`;
    else if (decreasedStat)
        ret = `(-${pokemon_stat_1.Stat[decreasedStat]})`;
    return ret;
}


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const bg_get_save_data_message_1 = __webpack_require__(1);
const nature_1 = __webpack_require__(4);
const utils_1 = __webpack_require__(7);
const weather_1 = __webpack_require__(15);
const browser_1 = __webpack_require__(16);
const pokerogueutils_1 = __webpack_require__(17);
const pokeapi_1 = __webpack_require__(8);
// const browserApi = window.browser ?? window.chrome;
let slotId = -1;
async function updateDiv(pokemon, weather, message) {
    await browser_1.browserApi.tabs.query({ active: true, currentWindow: true }).then(tabs => {
        if (tabs.length > 0 && tabs[0].id) {
            browser_1.browserApi.tabs.sendMessage(tabs[0].id, { type: message, pokemon: pokemon, weather: weather, slotId: slotId });
        }
    });
}
function sortById(a, b) {
    if (a.id > b.id)
        return 1;
    else if (a.id < b.id)
        return -1;
    else
        return 0;
}
// message can be either "UPDATE_ALLIES_DIV" or "UPDATE_ENEMIES_DIV"
function appendPokemonArrayToDiv(pokemonArray, arena, message) {
    const frontendPokemonArray = [];
    let itemsProcessed = 0;
    pokemonArray.forEach((pokemon, index, array) => {
        const pokemonId = utils_1.Utils.convertPokemonId(pokemon.species);
        let weather = {
            type: 'Unknown',
            turnsLeft: 0,
        };
        if (arena.weather && arena.weather.weatherType) {
            weather = {
                type: weather_1.WeatherType[arena.weather.weatherType],
                turnsLeft: arena.weather.turnsLeft || 0,
            };
        }
        pokeapi_1.pokeApi.getAbility(pokemonId, pokemon.abilityIndex).then(ability => {
            utils_1.Utils.getPokemonTypeEffectiveness(pokemonId).then(typeEffectiveness => {
                console.log('Got pokemon', pokemonId, 'ability', ability, 'type effectiveness', typeEffectiveness);
                frontendPokemonArray.push({
                    id: pokemonId,
                    typeEffectiveness: typeEffectiveness,
                    ivs: pokemon.ivs,
                    ability: ability,
                    nature: {
                        name: nature_1.Nature[pokemon.nature],
                        description: pokerogueutils_1.natureDescription[pokemon.nature],
                    },
                });
                itemsProcessed++;
                if (itemsProcessed === array.length)
                    updateDiv(frontendPokemonArray.sort(sortById), weather, message);
            });
        });
    });
}
browser_1.browserApi.runtime.onMessage.addListener((request) => {
    // Happens when loading a savegame or continuing an old run
    if (request instanceof bg_get_save_data_message_1.default) {
        const savedata = request.data;
        slotId = request.slotId;
        console.log('Received save data', savedata);
        appendPokemonArrayToDiv(savedata.enemyParty, savedata.arena, 'UPDATE_ENEMIES_DIV');
        appendPokemonArrayToDiv(savedata.party, savedata.arena, 'UPDATE_ALLIES_DIV');
    }
});
browser_1.browserApi.webRequest.onBeforeRequest.addListener(details => {
    var _a, _b, _c;
    if (details.method === 'POST' && details.url.includes('updateall')) {
        try {
            const saveAllData = JSON.parse(new TextDecoder().decode((_c = (_b = (_a = details.requestBody) === null || _a === void 0 ? void 0 : _a.raw) === null || _b === void 0 ? void 0 : _b.at(0)) === null || _c === void 0 ? void 0 : _c.bytes));
            console.log('POST Session data:', saveAllData);
            const sessionData = saveAllData.session;
            appendPokemonArrayToDiv(sessionData.enemyParty, sessionData.arena, 'UPDATE_ENEMIES_DIV');
            appendPokemonArrayToDiv(sessionData.party, sessionData.arena, 'UPDATE_ALLIES_DIV');
        }
        catch (e) {
            console.error('Error while intercepting web request: ', e);
        }
    }
}, {
    urls: ['https://api.pokerogue.net/savedata/update?datatype=1*', 'https://api.pokerogue.net/savedata/updateall'],
}, ['requestBody']);

})();

/******/ })()
;