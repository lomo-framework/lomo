(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("object-assign"));
	else if(typeof define === 'function' && define.amd)
		define(["object-assign"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("object-assign")) : factory(root["object-assign"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _DisplayObject = __webpack_require__(1);

	var _DisplayObject2 = _interopRequireDefault(_DisplayObject);

	var _startup = __webpack_require__(4);

	var _startup2 = _interopRequireDefault(_startup);

	var _Image = __webpack_require__(5);

	var _Image2 = _interopRequireDefault(_Image);

	var _TextField = __webpack_require__(6);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _Button = __webpack_require__(7);

	var _Button2 = _interopRequireDefault(_Button);

	var _objectAssign = __webpack_require__(8);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by vincent on 17/3/11.
	 */
	(0, _objectAssign2.default)(_startup2.default, {
	    DisplayObject: _DisplayObject2.default,
	    Image: _Image2.default,
	    TextField: _TextField2.default,
	    Button: _Button2.default
	});
	module.exports = _startup2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by vincent on 17/3/11.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _warning = __webpack_require__(3);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var hashCode = 0;

	var DisplayObject = function () {
	    _createClass(DisplayObject, [{
	        key: 'hashCode',
	        get: function get() {
	            return this._hashCode;
	        }
	    }, {
	        key: 'element',
	        get: function get() {
	            return this._element;
	        }
	    }, {
	        key: 'parent',
	        get: function get() {
	            return this._parent;
	        }
	    }, {
	        key: 'children',
	        get: function get() {
	            return this._children;
	        }
	    }, {
	        key: 'tagName',
	        get: function get() {
	            return 'div';
	        }
	    }]);

	    function DisplayObject() {
	        _classCallCheck(this, DisplayObject);

	        this._hashCode = hashCode++;
	        this._children = [];

	        this._createElement();
	    }

	    _createClass(DisplayObject, [{
	        key: 'getChildIndex',
	        value: function getChildIndex(child) {
	            return this._children.indexOf(child);
	        }
	    }, {
	        key: 'getChildAt',
	        value: function getChildAt(index) {
	            if (index <= -1) {
	                index = this._children.length + index;
	            }
	            if (index >= 0 && index <= this._children.length - 1) {
	                return this._children[index];
	            }
	        }
	    }, {
	        key: 'addChild',
	        value: function addChild(child) {
	            this.addChildAt(child, -1);
	        }
	    }, {
	        key: 'addChildAt',
	        value: function addChildAt(child, index) {
	            if (index <= -1) {
	                index = this._children.length + index + 1;
	            }
	            if (index >= 0 || index <= this._children.length) {
	                this._element.appendChild(child._element);
	                child._parent = this;
	                this._children.splice(index, 0, child);
	                child._onAdded();
	                return child;
	            } else {
	                (0, _warning2.default)(false, '\u53C2\u6570\u975E\u6CD5(index:' + index + ')');
	            }
	        }
	    }, {
	        key: 'removeChild',
	        value: function removeChild(child) {
	            var index = this.getChildIndex(child);
	            return this.removeChildAt(index);
	        }
	    }, {
	        key: 'removeChildAt',
	        value: function removeChildAt(index) {
	            if (index <= -1) {
	                index = this._children.length + index;
	            }
	            if (index >= 0 && index <= this._children.length - 1) {
	                var child = this._children[index];
	                this._element.removeChild(child._element);
	                child._parent = null;
	                this._children.splice(index, 1);
	                child._onRemoved();
	                return child;
	            } else {
	                (0, _warning2.default)(false, '\u53C2\u6570\u975E\u6CD5(index:' + index + ')');
	            }
	        }
	    }, {
	        key: 'removeChildren',
	        value: function removeChildren() {
	            var startIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	            var endIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

	            if (startIndex <= -1) {
	                startIndex = this._children.length + startIndex;
	            }
	            if (endIndex <= -1) {
	                endIndex = this._children.length + endIndex;
	            }
	            for (var i = startIndex; i <= endIndex; i++) {
	                this.removeChildAt(i);
	            }
	        }
	    }, {
	        key: 'removeFromContainer',
	        value: function removeFromContainer() {
	            this.parent && this.parent.removeChild(this);
	        }
	    }, {
	        key: 'contains',
	        value: function contains(child) {
	            return child == this || child.parent == this || this.children.some(function (item) {
	                return item.contains(child);
	            });
	        }
	    }, {
	        key: 'dangerouslySetInnerHTML',
	        value: function dangerouslySetInnerHTML(innerHTML) {
	            this._element.innerHTML = innerHTML;
	        }
	    }, {
	        key: '_createElement',
	        value: function _createElement() {
	            this._element = document.createElement(this.tagName);
	            process.env.NODE_ENV == 'development' && this._element.setAttribute('data-lomo-id', this.hashCode);
	        }
	    }, {
	        key: '_onAdded',
	        value: function _onAdded() {
	            // fixme
	            // this.dispatchEvent('addedToStage');
	        }
	    }, {
	        key: '_onRemoved',
	        value: function _onRemoved() {
	            // fixme
	            // this.dispatchEvent('removedFromStage');
	        }
	    }, {
	        key: 'addEventListener',
	        value: function addEventListener() {
	            var _element;

	            (_element = this.element).addEventListener.apply(_element, arguments);
	        }
	    }, {
	        key: 'removeEventListener',
	        value: function removeEventListener() {
	            var _element2;

	            (_element2 = this.element).removeEventListener.apply(_element2, arguments);
	        }
	    }, {
	        key: 'classList',
	        get: function get() {
	            return this._element.classList;
	        }
	    }, {
	        key: 'style',
	        get: function get() {
	            return this._element.style;
	        }
	    }]);

	    return DisplayObject;
	}();

	exports.default = DisplayObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (element, RootClass) {
	    var stage = new _DisplayObject2.default();
	    stage._parent = stage;
	    element.appendChild(stage.element);

	    var rootInstance = new RootClass();
	    stage.addChild(rootInstance);
	};

	var _DisplayObject = __webpack_require__(1);

	var _DisplayObject2 = _interopRequireDefault(_DisplayObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DisplayObject2 = __webpack_require__(1);

	var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by vincent on 17/3/11.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Image = function (_DisplayObject) {
	    _inherits(Image, _DisplayObject);

	    function Image() {
	        _classCallCheck(this, Image);

	        return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
	    }

	    _createClass(Image, [{
	        key: 'tagName',
	        get: function get() {
	            return 'img';
	        }
	    }, {
	        key: 'src',
	        get: function get() {
	            return this._src;
	        },
	        set: function set(value) {
	            this._src = value;
	            this._element.src = value;
	        }
	    }]);

	    return Image;
	}(_DisplayObject3.default);

	exports.default = Image;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DisplayObject2 = __webpack_require__(1);

	var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by vincent on 17/3/11.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var TextField = function (_DisplayObject) {
	    _inherits(TextField, _DisplayObject);

	    function TextField() {
	        _classCallCheck(this, TextField);

	        return _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));
	    }

	    _createClass(TextField, [{
	        key: 'tagName',
	        get: function get() {
	            return 'p';
	        }
	    }, {
	        key: 'text',
	        get: function get() {
	            return this._text;
	        },
	        set: function set(value) {
	            this._text = value;
	            this._element.textContent = value;
	        }
	    }]);

	    return TextField;
	}(_DisplayObject3.default);

	exports.default = TextField;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DisplayObject2 = __webpack_require__(1);

	var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by vincent on 17/3/11.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Button = function (_DisplayObject) {
	    _inherits(Button, _DisplayObject);

	    function Button() {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	    }

	    _createClass(Button, [{
	        key: 'tagName',
	        get: function get() {
	            return 'button';
	        }
	    }, {
	        key: 'label',
	        get: function get() {
	            return this._label;
	        },
	        set: function set(value) {
	            this._label = value;
	            this._element.textContent = value;
	        }
	    }]);

	    return Button;
	}(_DisplayObject3.default);

	exports.default = Button;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }
/******/ ])
});
;