import { klona } from 'klona';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var splitTokens = new RegExp('[-_.+*/:? ]', 'g');
/**
 * String to camel case
 * @param {string} s
 * @returns {string}
 */

var stringToCamelCase = function stringToCamelCase(s) {
  var result = s.split(splitTokens).map(function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }).join('');
  return result.charAt(0).toLowerCase() + result.slice(1);
};
/**
 * String to pascal case
 * @param {string} s
 * @returns {string}
 */


var stringToPascalCase = function stringToPascalCase(s) {
  return String(s).split(splitTokens).map(function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }).join('');
};
/**
 * Sanitize data
 * @param data
 * @returns {any}
 */


var sanitize = function sanitize(data) {
  return klona(_objectSpread({}, data));
};
/**
 * Fill data to model
 * @param {Object} data
 * @param {Object} model
 */


var fill = function fill(model, data) {
  for (var prop in data) {
    if (Object.prototype.hasOwnProperty.call(data, prop)) {
      model[prop] = data[prop];
    }
  }
};
/**
 * Set default attributes
 * @param {Object} model
 * @param {Object} $defaultAttributes
 * @param {Array} getters
 * @returns {*}
 */


var setDefaultAttributes = function setDefaultAttributes(model, $defaultAttributes) {
  var getters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  for (var prop in $defaultAttributes) {
    if (!Object.prototype.hasOwnProperty.call(model, prop) && Object.prototype.hasOwnProperty.call($defaultAttributes, prop)) {
      model[prop] = model[prop] || $defaultAttributes[prop];
    }
  }

  var _iterator = _createForOfIteratorHelper(getters),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var g = _step.value;

      if (!Object.prototype.hasOwnProperty.call(model, g)) {
        Object.defineProperty(model, g, {
          enumerable: true
        });
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return model;
};
/**
 * Lifting all properties and methods from the prototype chain
 * @param {Class} constructor
 * @param {array} properties
 * @returns {*[]}
 */


var getStaticMethodsNamesDeep = function getStaticMethodsNamesDeep(constructor) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!constructor) {
    return toConsumableArray(new Set(properties));
  }

  var op = Reflect.ownKeys(constructor).filter(function (prop) {
    return typeof prop === 'string';
  }).filter(function (prop) {
    return !['arguments', 'callee', 'caller'].includes(prop);
  }).filter(function (prop) {
    return typeof constructor[prop] === 'function';
  });
  properties.push.apply(properties, toConsumableArray(op));
  return getStaticMethodsNamesDeep(Object.getPrototypeOf(constructor), properties);
};
/**
 * Check property is fillable
 * @param {string} prop
 * @param {array} fillable
 * @return {boolean}
 */


var fillableCheck = function fillableCheck(prop) {
  var fillable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  // If the property is not contained in the array of properties available for assignment,
  // it is forbidden to set its value
  if (fillable.length) {
    return fillable.includes(prop);
  }

  return true;
};
/**
 * Setter handler
 * @param model
 * @param prop
 * @param value
 * @param receiver
 * @returns {boolean}
 */


var setter = function setter(model, prop, value, receiver) {
  if (model[prop] === value) {
    return Reflect.set(model, prop, value, receiver);
  }

  if (!fillableCheck(prop, model.constructor.fillable)) {
    return false;
  } // validate value


  var pascalProp = stringToPascalCase(prop);
  var validator = typeof prop === 'string' && "validate".concat(pascalProp);
  typeof model.constructor[validator] === 'function' && model.constructor[validator](model, prop, value);
  var setter = typeof prop === 'string' && "setter".concat(pascalProp);

  if (typeof model.constructor[setter] === 'function') {
    return model.constructor[setter](model, prop, value, receiver);
  }

  Reflect.set(model, prop, value, receiver);
};
/**
 * Getter handler
 * @param target
 * @param prop
 * @param receiver
 * @returns {any}
 */


var getter = function getter(target, prop, receiver) {
  var pascalProp = stringToPascalCase(prop);
  var getter = typeof prop === 'string' && "getter".concat(pascalProp);

  if (typeof target.constructor[getter] === 'function') {
    return target.constructor[getter](target, prop, receiver);
  }

  return Reflect.get(target, prop, receiver);
};
/**
 * Active record model
 * @param {object} data
 * @param {object} $attributes
 */


var ActiveModel = /*#__PURE__*/function () {
  createClass(ActiveModel, [{
    key: "toString",
    value: function toString() {
      return JSON.stringify(this);
    }
    /**
     * Make model readonly
     * @return {Readonly<ActiveModel>}
     */

  }, {
    key: "makeFreeze",
    value: function makeFreeze() {
      return Object.freeze(this);
    }
    /**
     * Constructor
     * @param {object} data
     * @returns {Proxy<ActiveModel>|{}}
     */

  }], [{
    key: "$attributes",
    get: function get() {
      return {};
    }
    /**
     * An array of the properties available for assignment via constructor argument `data`
     * @return {*[]}
     */

  }, {
    key: "fillable",
    get: function get() {
      return [];
    }
    /**
     * List of fields that cannot be deleted
     * @return {*[]}
     */

  }, {
    key: "required",
    get: function get() {
      return [];
    }
    /**
     * List of fields to exclude from ownKeys, such as ' password`
     * @returns {Array}
     */

  }, {
    key: "hidden",
    get: function get() {
      return [];
    }
  }]);

  function ActiveModel() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck(this, ActiveModel);

    var self = this;
    var handler = {
      get: function get(target, prop, receiver) {
        return getter(target, prop, receiver);
      },
      set: function set(target, prop, value, receiver) {
        setter(target, prop, value, receiver);
        return true;
      },
      apply: function apply(target, thisArg, argumentsList) {
        return Reflect.apply(target, thisArg, argumentsList);
      },
      getPrototypeOf: function getPrototypeOf() {
        return Reflect.getPrototypeOf(self);
      },
      deleteProperty: function deleteProperty(target, prop) {
        if (self.constructor.required && self.constructor.required.includes(prop)) {
          throw new TypeError("Property \"".concat(prop, "\" is required!"));
        }

        return Reflect.deleteProperty(target, prop);
      },
      has: function has(target, prop) {
        return Reflect.has(target, prop);
      }
    };
    var getters = getStaticMethodsNamesDeep(this.constructor).filter(function (fn) {
      return fn.startsWith('getter');
    }).map(function (fn) {
      return stringToCamelCase(fn.substring(6));
    });

    if (getters.length) {
      handler.ownKeys = function (target) {
        return toConsumableArray(new Set(Reflect.ownKeys(target).concat(getters))).filter(function (property) {
          return !self.constructor.hidden.includes(property);
        });
      };
    }

    var model = new Proxy(this, handler);
    data = setDefaultAttributes(sanitize(data || {}), this.constructor.$attributes, getters);
    fill(model, data);
    return model;
  }

  return ActiveModel;
}();

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }

  return value;
}

var classPrivateFieldSet = _classPrivateFieldSet;

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

var classPrivateFieldGet = _classPrivateFieldGet;

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _map = new WeakMap();

var _default = new WeakMap();

var Enum = /*#__PURE__*/function () {
  /**
   * @param entries
   * @param defaultValue
   */
  function Enum() {
    var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var defaultValue = arguments.length > 1 ? arguments[1] : undefined;

    classCallCheck(this, Enum);

    _map.set(this, {
      writable: true,
      value: new Map()
    });

    _default.set(this, {
      writable: true,
      value: undefined
    });

    var _iterator = _createForOfIteratorHelper$1(entries),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;

        classPrivateFieldGet(this, _map).set(key, key);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    classPrivateFieldSet(this, _default, defaultValue);
  }
  /**
   * Get default value
   * @return {any}
   */


  createClass(Enum, [{
    key: "values",

    /**
     * Get enum values
     * @return {any[]}
     */
    value: function values() {
      return Array.from(classPrivateFieldGet(this, _map).values());
    }
    /**
     * Get value by key
     * @param key
     * @return {any}
     */

  }, {
    key: "get",
    value: function get(key) {
      return classPrivateFieldGet(this, _map).get(key);
    }
    /**
     * Check exist value in enum
     * @param key
     * @return {boolean}
     */

  }, {
    key: "has",
    value: function has(key) {
      return classPrivateFieldGet(this, _map).has(key);
    }
    /**
     *
     * @return {any[]}
     */

  }, {
    key: "keys",
    value: function keys() {
      return Array.from(classPrivateFieldGet(this, _map).keys());
    }
    /**
     *
     * @return {[any, any][]}
     */

  }, {
    key: "entries",
    value: function entries() {
      return Array.from(classPrivateFieldGet(this, _map).entries());
    }
    /**
     * Validate values
     * @param {array|string} value
     * @return {boolean}
     */

  }, {
    key: "validate",
    value: function validate(value) {
      value = Array.isArray(value) ? value : [value];

      var _iterator2 = _createForOfIteratorHelper$1(value),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var v = _step2.value;

          if (!this.has(v)) {
            throw new Error("Value must be include one of type: ".concat(this.values().join(', '), "; Provide value \"").concat(v, "\""));
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return true;
    }
  }, {
    key: "default",
    get: function get() {
      return classPrivateFieldGet(this, _default);
    }
  }]);

  return Enum;
}();

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

var isNativeFunction = _isNativeFunction;

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var isNativeReflectConstruct = _isNativeReflectConstruct;

var construct = createCommonjsModule(function (module) {
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
});

var wrapNativeSuper = createCommonjsModule(function (module) {
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
});

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Callable class
 */
var CallableModel = /*#__PURE__*/function (_Function) {
  inherits(CallableModel, _Function);

  var _super = _createSuper(CallableModel);

  createClass(CallableModel, [{
    key: "__call",
    value: function __call() {
      throw new TypeError('Method "__call" must be implemented');
    }
  }]);

  function CallableModel() {
    var _this;

    classCallCheck(this, CallableModel);

    _this = _super.call(this);

    if (!Object.prototype.hasOwnProperty.call(assertThisInitialized(_this), '__call') && typeof _this.__call === 'function') {
      throw new TypeError('Class mast be implement method "__call"');
    }

    return possibleConstructorReturn(_this, new Proxy(assertThisInitialized(_this), {
      apply: function apply(target, thisArg, args) {
        return target.__call.apply(target, toConsumableArray(args));
      }
    }));
  }

  return CallableModel;
}( /*#__PURE__*/wrapNativeSuper(Function));

export { ActiveModel, CallableModel, Enum };
//# sourceMappingURL=index.es.js.map
