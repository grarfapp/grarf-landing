var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// <define:import.meta.env>
var define_import_meta_env_default;
var init_define_import_meta_env = __esm({
  "<define:import.meta.env>"() {
    define_import_meta_env_default = { DEV: false, PROD: true, MODE: "production", VITE_OPERATIONAL_INGEST_PROVIDER: "grarf_cloud", VITE_GRARF_OPERATIONAL_INGEST_URL: "https://grarf-operational-service.grarf.workers.dev", VITE_SPORTSCAPE_EDITORIAL_API_URL: "https://grarf-operational-service.grarf.workers.dev/sportscape-editorial", VITE_TRACE_FINAL_LIVE_FIELDS: "", VITE_ENABLE_ESPN_RESOLVER: "false", VITE_POSTHOG_KEY: "", VITE_POSTHOG_HOST: "" };
  }
});

// node_modules/react/cjs/react.production.js
var require_react_production = __commonJS({
  "node_modules/react/cjs/react.production.js"(exports) {
    "use strict";
    init_define_import_meta_env();
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
    var REACT_MEMO_TYPE = Symbol.for("react.memo");
    var REACT_LAZY_TYPE = Symbol.for("react.lazy");
    var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    };
    var assign = Object.assign;
    var emptyObject = {};
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    function ComponentDummy() {
    }
    ComponentDummy.prototype = Component.prototype;
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent;
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    var isArrayImpl = Array.isArray;
    function noop() {
    }
    var ReactSharedInternals = { H: null, A: null, T: null, S: null };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function ReactElement(type, key, props) {
      var refProp = props.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== refProp ? refProp : null,
        props
      };
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      return ReactElement(oldElement.type, newKey, oldElement.props);
    }
    function isValidElement(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    var userProvidedKeyEscapeRegex = /\/+/g;
    function getElementKey(element, index) {
      return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
    }
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
            function(fulfilledValue) {
              "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
            },
            function(error) {
              "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
            }
          )), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = false;
      if (null === children) invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(
                  invokeCallback(children._payload),
                  array,
                  escapedPrefix,
                  nameSoFar,
                  callback
                );
            }
        }
      if (invokeCallback)
        return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(
          callback,
          escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(
            userProvidedKeyEscapeRegex,
            "$&/"
          ) + "/") + invokeCallback
        )), array.push(callback)), 1;
      invokeCallback = 0;
      var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if (i = getIteratorFn(children), "function" === typeof i)
        for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function(moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 1, payload._result = moduleObject;
          },
          function(error) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 2, payload._result = error;
          }
        );
        -1 === payload._status && (payload._status = 0, payload._result = ctor);
      }
      if (1 === payload._status) return payload._result.default;
      throw payload._result;
    }
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
    var Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function() {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    exports.Activity = REACT_ACTIVITY_TYPE;
    exports.Children = Children;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(size) {
        return ReactSharedInternals.H.useMemoCache(size);
      }
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.cacheSignal = function() {
      return null;
    };
    exports.cloneElement = function(element, config, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " + element + "."
        );
      var props = assign({}, element.props), key = element.key;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        for (var childArray = Array(propName), i = 0; i < propName; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      return ReactElement(element.type, key, props);
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      return defaultValue;
    };
    exports.createElement = function(type, config, children) {
      var propName, props = {}, key = null;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) props.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          void 0 === props[propName] && (props[propName] = childrenLength[propName]);
      return ReactElement(type, key, props);
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(render) {
      return { $$typeof: REACT_FORWARD_REF_TYPE, render };
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function(type, compare) {
      return {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: void 0 === compare ? null : compare
      };
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return ReactSharedInternals.H.useCacheRefresh();
    };
    exports.use = function(usable) {
      return ReactSharedInternals.H.use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return ReactSharedInternals.H.useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
      return ReactSharedInternals.H.useContext(Context);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(value, initialValue) {
      return ReactSharedInternals.H.useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create2, deps) {
      return ReactSharedInternals.H.useEffect(create2, deps);
    };
    exports.useEffectEvent = function(callback) {
      return ReactSharedInternals.H.useEffectEvent(callback);
    };
    exports.useId = function() {
      return ReactSharedInternals.H.useId();
    };
    exports.useImperativeHandle = function(ref, create2, deps) {
      return ReactSharedInternals.H.useImperativeHandle(ref, create2, deps);
    };
    exports.useInsertionEffect = function(create2, deps) {
      return ReactSharedInternals.H.useInsertionEffect(create2, deps);
    };
    exports.useLayoutEffect = function(create2, deps) {
      return ReactSharedInternals.H.useLayoutEffect(create2, deps);
    };
    exports.useMemo = function(create2, deps) {
      return ReactSharedInternals.H.useMemo(create2, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
      return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
      return ReactSharedInternals.H.useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return ReactSharedInternals.H.useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return ReactSharedInternals.H.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports.useTransition = function() {
      return ReactSharedInternals.H.useTransition();
    };
    exports.version = "19.2.7";
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    if (true) {
      module.exports = require_react_production();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/scheduler/cjs/scheduler.production.js
var require_scheduler_production = __commonJS({
  "node_modules/scheduler/cjs/scheduler.production.js"(exports) {
    "use strict";
    init_define_import_meta_env();
    function push(heap, node) {
      var index = heap.length;
      heap.push(node);
      a: for (; 0 < index; ) {
        var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
        if (0 < compare(parent, node))
          heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
        else break a;
      }
    }
    function peek(heap) {
      return 0 === heap.length ? null : heap[0];
    }
    function pop(heap) {
      if (0 === heap.length) return null;
      var first = heap[0], last = heap.pop();
      if (last !== first) {
        heap[0] = last;
        a: for (var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength; ) {
          var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
          if (0 > compare(left, last))
            rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
          else if (rightIndex < length && 0 > compare(right, last))
            heap[index] = right, heap[rightIndex] = last, index = rightIndex;
          else break a;
        }
      }
      return first;
    }
    function compare(a, b) {
      var diff = a.sortIndex - b.sortIndex;
      return 0 !== diff ? diff : a.id - b.id;
    }
    exports.unstable_now = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
      localPerformance = performance;
      exports.unstable_now = function() {
        return localPerformance.now();
      };
    } else {
      localDate = Date, initialTime = localDate.now();
      exports.unstable_now = function() {
        return localDate.now() - initialTime;
      };
    }
    var localPerformance;
    var localDate;
    var initialTime;
    var taskQueue = [];
    var timerQueue = [];
    var taskIdCounter = 1;
    var currentTask = null;
    var currentPriorityLevel = 3;
    var isPerformingWork = false;
    var isHostCallbackScheduled = false;
    var isHostTimeoutScheduled = false;
    var needsPaint = false;
    var localSetTimeout = "function" === typeof setTimeout ? setTimeout : null;
    var localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null;
    var localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
    function advanceTimers(currentTime) {
      for (var timer = peek(timerQueue); null !== timer; ) {
        if (null === timer.callback) pop(timerQueue);
        else if (timer.startTime <= currentTime)
          pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
        else break;
        timer = peek(timerQueue);
      }
    }
    function handleTimeout(currentTime) {
      isHostTimeoutScheduled = false;
      advanceTimers(currentTime);
      if (!isHostCallbackScheduled)
        if (null !== peek(taskQueue))
          isHostCallbackScheduled = true, isMessageLoopRunning || (isMessageLoopRunning = true, schedulePerformWorkUntilDeadline());
        else {
          var firstTimer = peek(timerQueue);
          null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
    }
    var isMessageLoopRunning = false;
    var taskTimeoutID = -1;
    var frameInterval = 5;
    var startTime = -1;
    function shouldYieldToHost() {
      return needsPaint ? true : exports.unstable_now() - startTime < frameInterval ? false : true;
    }
    function performWorkUntilDeadline() {
      needsPaint = false;
      if (isMessageLoopRunning) {
        var currentTime = exports.unstable_now();
        startTime = currentTime;
        var hasMoreWork = true;
        try {
          a: {
            isHostCallbackScheduled = false;
            isHostTimeoutScheduled && (isHostTimeoutScheduled = false, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
            isPerformingWork = true;
            var previousPriorityLevel = currentPriorityLevel;
            try {
              b: {
                advanceTimers(currentTime);
                for (currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost()); ) {
                  var callback = currentTask.callback;
                  if ("function" === typeof callback) {
                    currentTask.callback = null;
                    currentPriorityLevel = currentTask.priorityLevel;
                    var continuationCallback = callback(
                      currentTask.expirationTime <= currentTime
                    );
                    currentTime = exports.unstable_now();
                    if ("function" === typeof continuationCallback) {
                      currentTask.callback = continuationCallback;
                      advanceTimers(currentTime);
                      hasMoreWork = true;
                      break b;
                    }
                    currentTask === peek(taskQueue) && pop(taskQueue);
                    advanceTimers(currentTime);
                  } else pop(taskQueue);
                  currentTask = peek(taskQueue);
                }
                if (null !== currentTask) hasMoreWork = true;
                else {
                  var firstTimer = peek(timerQueue);
                  null !== firstTimer && requestHostTimeout(
                    handleTimeout,
                    firstTimer.startTime - currentTime
                  );
                  hasMoreWork = false;
                }
              }
              break a;
            } finally {
              currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = false;
            }
            hasMoreWork = void 0;
          }
        } finally {
          hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = false;
        }
      }
    }
    var schedulePerformWorkUntilDeadline;
    if ("function" === typeof localSetImmediate)
      schedulePerformWorkUntilDeadline = function() {
        localSetImmediate(performWorkUntilDeadline);
      };
    else if ("undefined" !== typeof MessageChannel) {
      channel = new MessageChannel(), port = channel.port2;
      channel.port1.onmessage = performWorkUntilDeadline;
      schedulePerformWorkUntilDeadline = function() {
        port.postMessage(null);
      };
    } else
      schedulePerformWorkUntilDeadline = function() {
        localSetTimeout(performWorkUntilDeadline, 0);
      };
    var channel;
    var port;
    function requestHostTimeout(callback, ms) {
      taskTimeoutID = localSetTimeout(function() {
        callback(exports.unstable_now());
      }, ms);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(task) {
      task.callback = null;
    };
    exports.unstable_forceFrameRate = function(fps) {
      0 > fps || 125 < fps ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return currentPriorityLevel;
    };
    exports.unstable_next = function(eventHandler) {
      switch (currentPriorityLevel) {
        case 1:
        case 2:
        case 3:
          var priorityLevel = 3;
          break;
        default:
          priorityLevel = currentPriorityLevel;
      }
      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;
      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    };
    exports.unstable_requestPaint = function() {
      needsPaint = true;
    };
    exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
      switch (priorityLevel) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          priorityLevel = 3;
      }
      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;
      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    };
    exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
      var currentTime = exports.unstable_now();
      "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
      switch (priorityLevel) {
        case 1:
          var timeout = -1;
          break;
        case 2:
          timeout = 250;
          break;
        case 5:
          timeout = 1073741823;
          break;
        case 4:
          timeout = 1e4;
          break;
        default:
          timeout = 5e3;
      }
      timeout = options + timeout;
      priorityLevel = {
        id: taskIdCounter++,
        callback,
        priorityLevel,
        startTime: options,
        expirationTime: timeout,
        sortIndex: -1
      };
      options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = true, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = true, isMessageLoopRunning || (isMessageLoopRunning = true, schedulePerformWorkUntilDeadline())));
      return priorityLevel;
    };
    exports.unstable_shouldYield = shouldYieldToHost;
    exports.unstable_wrapCallback = function(callback) {
      var parentPriorityLevel = currentPriorityLevel;
      return function() {
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = parentPriorityLevel;
        try {
          return callback.apply(this, arguments);
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
    };
  }
});

// node_modules/scheduler/index.js
var require_scheduler = __commonJS({
  "node_modules/scheduler/index.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    if (true) {
      module.exports = require_scheduler_production();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/react-dom/cjs/react-dom.production.js
var require_react_dom_production = __commonJS({
  "node_modules/react-dom/cjs/react-dom.production.js"(exports) {
    "use strict";
    init_define_import_meta_env();
    var React2 = require_react();
    function formatProdErrorMessage(code) {
      var url = "https://react.dev/errors/" + code;
      if (1 < arguments.length) {
        url += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var i = 2; i < arguments.length; i++)
          url += "&args[]=" + encodeURIComponent(arguments[i]);
      }
      return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function noop() {
    }
    var Internals = {
      d: {
        f: noop,
        r: function() {
          throw Error(formatProdErrorMessage(522));
        },
        D: noop,
        C: noop,
        L: noop,
        m: noop,
        X: noop,
        S: noop,
        M: noop
      },
      p: 0,
      findDOMNode: null
    };
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    function createPortal$1(children, containerInfo, implementation) {
      var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: REACT_PORTAL_TYPE,
        key: null == key ? null : "" + key,
        children,
        containerInfo,
        implementation
      };
    }
    var ReactSharedInternals = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function getCrossOriginStringAs(as, input) {
      if ("font" === as) return "";
      if ("string" === typeof input)
        return "use-credentials" === input ? input : "";
    }
    exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
    exports.createPortal = function(children, container) {
      var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType)
        throw Error(formatProdErrorMessage(299));
      return createPortal$1(children, container, null, key);
    };
    exports.flushSync = function(fn) {
      var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
      try {
        if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
      } finally {
        ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
      }
    };
    exports.preconnect = function(href, options) {
      "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
    };
    exports.prefetchDNS = function(href) {
      "string" === typeof href && Internals.d.D(href);
    };
    exports.preinit = function(href, options) {
      if ("string" === typeof href && options && "string" === typeof options.as) {
        var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
        "style" === as ? Internals.d.S(
          href,
          "string" === typeof options.precedence ? options.precedence : void 0,
          {
            crossOrigin,
            integrity,
            fetchPriority
          }
        ) : "script" === as && Internals.d.X(href, {
          crossOrigin,
          integrity,
          fetchPriority,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0
        });
      }
    };
    exports.preinitModule = function(href, options) {
      if ("string" === typeof href)
        if ("object" === typeof options && null !== options) {
          if (null == options.as || "script" === options.as) {
            var crossOrigin = getCrossOriginStringAs(
              options.as,
              options.crossOrigin
            );
            Internals.d.M(href, {
              crossOrigin,
              integrity: "string" === typeof options.integrity ? options.integrity : void 0,
              nonce: "string" === typeof options.nonce ? options.nonce : void 0
            });
          }
        } else null == options && Internals.d.M(href);
    };
    exports.preload = function(href, options) {
      if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
        var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
        Internals.d.L(href, as, {
          crossOrigin,
          integrity: "string" === typeof options.integrity ? options.integrity : void 0,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0,
          type: "string" === typeof options.type ? options.type : void 0,
          fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
          referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
          imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
          imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
          media: "string" === typeof options.media ? options.media : void 0
        });
      }
    };
    exports.preloadModule = function(href, options) {
      if ("string" === typeof href)
        if (options) {
          var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
          Internals.d.m(href, {
            as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
            crossOrigin,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0
          });
        } else Internals.d.m(href);
    };
    exports.requestFormReset = function(form) {
      Internals.d.r(form);
    };
    exports.unstable_batchedUpdates = function(fn, a) {
      return fn(a);
    };
    exports.useFormState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useFormState(action, initialState, permalink);
    };
    exports.useFormStatus = function() {
      return ReactSharedInternals.H.useHostTransitionStatus();
    };
    exports.version = "19.2.7";
  }
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "node_modules/react-dom/index.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      if (false) {
        throw new Error("^_^");
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    if (true) {
      checkDCE();
      module.exports = require_react_dom_production();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/react-dom/cjs/react-dom-client.production.js
var require_react_dom_client_production = __commonJS({
  "node_modules/react-dom/cjs/react-dom-client.production.js"(exports) {
    "use strict";
    init_define_import_meta_env();
    var Scheduler = require_scheduler();
    var React2 = require_react();
    var ReactDOM = require_react_dom();
    function formatProdErrorMessage(code) {
      var url = "https://react.dev/errors/" + code;
      if (1 < arguments.length) {
        url += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var i = 2; i < arguments.length; i++)
          url += "&args[]=" + encodeURIComponent(arguments[i]);
      }
      return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function isValidContainer(node) {
      return !(!node || 1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType);
    }
    function getNearestMountedFiber(fiber) {
      var node = fiber, nearestMounted = fiber;
      if (fiber.alternate) for (; node.return; ) node = node.return;
      else {
        fiber = node;
        do
          node = fiber, 0 !== (node.flags & 4098) && (nearestMounted = node.return), fiber = node.return;
        while (fiber);
      }
      return 3 === node.tag ? nearestMounted : null;
    }
    function getSuspenseInstanceFromFiber(fiber) {
      if (13 === fiber.tag) {
        var suspenseState = fiber.memoizedState;
        null === suspenseState && (fiber = fiber.alternate, null !== fiber && (suspenseState = fiber.memoizedState));
        if (null !== suspenseState) return suspenseState.dehydrated;
      }
      return null;
    }
    function getActivityInstanceFromFiber(fiber) {
      if (31 === fiber.tag) {
        var activityState = fiber.memoizedState;
        null === activityState && (fiber = fiber.alternate, null !== fiber && (activityState = fiber.memoizedState));
        if (null !== activityState) return activityState.dehydrated;
      }
      return null;
    }
    function assertIsMounted(fiber) {
      if (getNearestMountedFiber(fiber) !== fiber)
        throw Error(formatProdErrorMessage(188));
    }
    function findCurrentFiberUsingSlowPath(fiber) {
      var alternate = fiber.alternate;
      if (!alternate) {
        alternate = getNearestMountedFiber(fiber);
        if (null === alternate) throw Error(formatProdErrorMessage(188));
        return alternate !== fiber ? null : fiber;
      }
      for (var a = fiber, b = alternate; ; ) {
        var parentA = a.return;
        if (null === parentA) break;
        var parentB = parentA.alternate;
        if (null === parentB) {
          b = parentA.return;
          if (null !== b) {
            a = b;
            continue;
          }
          break;
        }
        if (parentA.child === parentB.child) {
          for (parentB = parentA.child; parentB; ) {
            if (parentB === a) return assertIsMounted(parentA), fiber;
            if (parentB === b) return assertIsMounted(parentA), alternate;
            parentB = parentB.sibling;
          }
          throw Error(formatProdErrorMessage(188));
        }
        if (a.return !== b.return) a = parentA, b = parentB;
        else {
          for (var didFindChild = false, child$0 = parentA.child; child$0; ) {
            if (child$0 === a) {
              didFindChild = true;
              a = parentA;
              b = parentB;
              break;
            }
            if (child$0 === b) {
              didFindChild = true;
              b = parentA;
              a = parentB;
              break;
            }
            child$0 = child$0.sibling;
          }
          if (!didFindChild) {
            for (child$0 = parentB.child; child$0; ) {
              if (child$0 === a) {
                didFindChild = true;
                a = parentB;
                b = parentA;
                break;
              }
              if (child$0 === b) {
                didFindChild = true;
                b = parentB;
                a = parentA;
                break;
              }
              child$0 = child$0.sibling;
            }
            if (!didFindChild) throw Error(formatProdErrorMessage(189));
          }
        }
        if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
      }
      if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
      return a.stateNode.current === a ? fiber : alternate;
    }
    function findCurrentHostFiberImpl(node) {
      var tag = node.tag;
      if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
      for (node = node.child; null !== node; ) {
        tag = findCurrentHostFiberImpl(node);
        if (null !== tag) return tag;
        node = node.sibling;
      }
      return null;
    }
    var assign = Object.assign;
    var REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element");
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
    var REACT_MEMO_TYPE = Symbol.for("react.memo");
    var REACT_LAZY_TYPE = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
    Symbol.for("react.legacy_hidden");
    Symbol.for("react.tracing_marker");
    var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
    Symbol.for("react.view_transition");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if ("object" === typeof type)
        switch (type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return type.displayName || "Context";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {
            }
        }
      return null;
    }
    var isArrayImpl = Array.isArray;
    var ReactSharedInternals = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    var ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    var sharedNotPendingObject = {
      pending: false,
      data: null,
      method: null,
      action: null
    };
    var valueStack = [];
    var index = -1;
    function createCursor(defaultValue) {
      return { current: defaultValue };
    }
    function pop(cursor) {
      0 > index || (cursor.current = valueStack[index], valueStack[index] = null, index--);
    }
    function push(cursor, value) {
      index++;
      valueStack[index] = cursor.current;
      cursor.current = value;
    }
    var contextStackCursor = createCursor(null);
    var contextFiberStackCursor = createCursor(null);
    var rootInstanceStackCursor = createCursor(null);
    var hostTransitionProviderCursor = createCursor(null);
    function pushHostContainer(fiber, nextRootInstance) {
      push(rootInstanceStackCursor, nextRootInstance);
      push(contextFiberStackCursor, fiber);
      push(contextStackCursor, null);
      switch (nextRootInstance.nodeType) {
        case 9:
        case 11:
          fiber = (fiber = nextRootInstance.documentElement) ? (fiber = fiber.namespaceURI) ? getOwnHostContext(fiber) : 0 : 0;
          break;
        default:
          if (fiber = nextRootInstance.tagName, nextRootInstance = nextRootInstance.namespaceURI)
            nextRootInstance = getOwnHostContext(nextRootInstance), fiber = getChildHostContextProd(nextRootInstance, fiber);
          else
            switch (fiber) {
              case "svg":
                fiber = 1;
                break;
              case "math":
                fiber = 2;
                break;
              default:
                fiber = 0;
            }
      }
      pop(contextStackCursor);
      push(contextStackCursor, fiber);
    }
    function popHostContainer() {
      pop(contextStackCursor);
      pop(contextFiberStackCursor);
      pop(rootInstanceStackCursor);
    }
    function pushHostContext(fiber) {
      null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
      var context = contextStackCursor.current;
      var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
      context !== JSCompiler_inline_result && (push(contextFiberStackCursor, fiber), push(contextStackCursor, JSCompiler_inline_result));
    }
    function popHostContext(fiber) {
      contextFiberStackCursor.current === fiber && (pop(contextStackCursor), pop(contextFiberStackCursor));
      hostTransitionProviderCursor.current === fiber && (pop(hostTransitionProviderCursor), HostTransitionContext._currentValue = sharedNotPendingObject);
    }
    var prefix;
    var suffix;
    function describeBuiltInComponentFrame(name) {
      if (void 0 === prefix)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = match && match[1] || "";
          suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return "\n" + prefix + name + suffix;
    }
    var reentry = false;
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry) return "";
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function() {
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if ("object" === typeof Reflect && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$1) {
                    control = x$1;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$2) {
                  control = x$2;
                }
                (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                });
              }
            } catch (sample) {
              if (sample && control && "string" === typeof sample.stack)
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name"
        );
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
          for (namePropDescriptor = RunInRootFrame = 0; RunInRootFrame < sampleLines.length && !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot"); )
            RunInRootFrame++;
          for (; namePropDescriptor < controlLines.length && !controlLines[namePropDescriptor].includes(
            "DetermineComponentFrameRoot"
          ); )
            namePropDescriptor++;
          if (RunInRootFrame === sampleLines.length || namePropDescriptor === controlLines.length)
            for (RunInRootFrame = sampleLines.length - 1, namePropDescriptor = controlLines.length - 1; 1 <= RunInRootFrame && 0 <= namePropDescriptor && sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]; )
              namePropDescriptor--;
          for (; 1 <= RunInRootFrame && 0 <= namePropDescriptor; RunInRootFrame--, namePropDescriptor--)
            if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
              if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
                do
                  if (RunInRootFrame--, namePropDescriptor--, 0 > namePropDescriptor || sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
                    var frame = "\n" + sampleLines[RunInRootFrame].replace(" at new ", " at ");
                    fn.displayName && frame.includes("<anonymous>") && (frame = frame.replace("<anonymous>", fn.displayName));
                    return frame;
                  }
                while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
              }
              break;
            }
        }
      } finally {
        reentry = false, Error.prepareStackTrace = previousPrepareStackTrace;
      }
      return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(previousPrepareStackTrace) : "";
    }
    function describeFiber(fiber, childFiber) {
      switch (fiber.tag) {
        case 26:
        case 27:
        case 5:
          return describeBuiltInComponentFrame(fiber.type);
        case 16:
          return describeBuiltInComponentFrame("Lazy");
        case 13:
          return fiber.child !== childFiber && null !== childFiber ? describeBuiltInComponentFrame("Suspense Fallback") : describeBuiltInComponentFrame("Suspense");
        case 19:
          return describeBuiltInComponentFrame("SuspenseList");
        case 0:
        case 15:
          return describeNativeComponentFrame(fiber.type, false);
        case 11:
          return describeNativeComponentFrame(fiber.type.render, false);
        case 1:
          return describeNativeComponentFrame(fiber.type, true);
        case 31:
          return describeBuiltInComponentFrame("Activity");
        default:
          return "";
      }
    }
    function getStackByFiberInDevAndProd(workInProgress2) {
      try {
        var info = "", previous = null;
        do
          info += describeFiber(workInProgress2, previous), previous = workInProgress2, workInProgress2 = workInProgress2.return;
        while (workInProgress2);
        return info;
      } catch (x) {
        return "\nError generating stack: " + x.message + "\n" + x.stack;
      }
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var scheduleCallback$3 = Scheduler.unstable_scheduleCallback;
    var cancelCallback$1 = Scheduler.unstable_cancelCallback;
    var shouldYield = Scheduler.unstable_shouldYield;
    var requestPaint = Scheduler.unstable_requestPaint;
    var now = Scheduler.unstable_now;
    var getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel;
    var ImmediatePriority = Scheduler.unstable_ImmediatePriority;
    var UserBlockingPriority = Scheduler.unstable_UserBlockingPriority;
    var NormalPriority$1 = Scheduler.unstable_NormalPriority;
    var LowPriority = Scheduler.unstable_LowPriority;
    var IdlePriority = Scheduler.unstable_IdlePriority;
    var log$1 = Scheduler.log;
    var unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue;
    var rendererID = null;
    var injectedHook = null;
    function setIsStrictModeForDevtools(newIsStrictMode) {
      "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
      if (injectedHook && "function" === typeof injectedHook.setStrictMode)
        try {
          injectedHook.setStrictMode(rendererID, newIsStrictMode);
        } catch (err) {
        }
    }
    var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
    var log = Math.log;
    var LN2 = Math.LN2;
    function clz32Fallback(x) {
      x >>>= 0;
      return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
    }
    var nextTransitionUpdateLane = 256;
    var nextTransitionDeferredLane = 262144;
    var nextRetryLane = 4194304;
    function getHighestPriorityLanes(lanes) {
      var pendingSyncLanes = lanes & 42;
      if (0 !== pendingSyncLanes) return pendingSyncLanes;
      switch (lanes & -lanes) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return lanes & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return lanes & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return lanes & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return lanes;
      }
    }
    function getNextLanes(root2, wipLanes, rootHasPendingCommit) {
      var pendingLanes = root2.pendingLanes;
      if (0 === pendingLanes) return 0;
      var nextLanes = 0, suspendedLanes = root2.suspendedLanes, pingedLanes = root2.pingedLanes;
      root2 = root2.warmLanes;
      var nonIdlePendingLanes = pendingLanes & 134217727;
      0 !== nonIdlePendingLanes ? (pendingLanes = nonIdlePendingLanes & ~suspendedLanes, 0 !== pendingLanes ? nextLanes = getHighestPriorityLanes(pendingLanes) : (pingedLanes &= nonIdlePendingLanes, 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = nonIdlePendingLanes & ~root2, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))))) : (nonIdlePendingLanes = pendingLanes & ~suspendedLanes, 0 !== nonIdlePendingLanes ? nextLanes = getHighestPriorityLanes(nonIdlePendingLanes) : 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = pendingLanes & ~root2, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
      return 0 === nextLanes ? 0 : 0 !== wipLanes && wipLanes !== nextLanes && 0 === (wipLanes & suspendedLanes) && (suspendedLanes = nextLanes & -nextLanes, rootHasPendingCommit = wipLanes & -wipLanes, suspendedLanes >= rootHasPendingCommit || 32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)) ? wipLanes : nextLanes;
    }
    function checkIfRootIsPrerendering(root2, renderLanes2) {
      return 0 === (root2.pendingLanes & ~(root2.suspendedLanes & ~root2.pingedLanes) & renderLanes2);
    }
    function computeExpirationTime(lane, currentTime) {
      switch (lane) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return currentTime + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return currentTime + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function claimNextRetryLane() {
      var lane = nextRetryLane;
      nextRetryLane <<= 1;
      0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
      return lane;
    }
    function createLaneMap(initial) {
      for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
      return laneMap;
    }
    function markRootUpdated$1(root2, updateLane) {
      root2.pendingLanes |= updateLane;
      268435456 !== updateLane && (root2.suspendedLanes = 0, root2.pingedLanes = 0, root2.warmLanes = 0);
    }
    function markRootFinished(root2, finishedLanes, remainingLanes, spawnedLane, updatedLanes, suspendedRetryLanes) {
      var previouslyPendingLanes = root2.pendingLanes;
      root2.pendingLanes = remainingLanes;
      root2.suspendedLanes = 0;
      root2.pingedLanes = 0;
      root2.warmLanes = 0;
      root2.expiredLanes &= remainingLanes;
      root2.entangledLanes &= remainingLanes;
      root2.errorRecoveryDisabledLanes &= remainingLanes;
      root2.shellSuspendCounter = 0;
      var entanglements = root2.entanglements, expirationTimes = root2.expirationTimes, hiddenUpdates = root2.hiddenUpdates;
      for (remainingLanes = previouslyPendingLanes & ~remainingLanes; 0 < remainingLanes; ) {
        var index$7 = 31 - clz32(remainingLanes), lane = 1 << index$7;
        entanglements[index$7] = 0;
        expirationTimes[index$7] = -1;
        var hiddenUpdatesForLane = hiddenUpdates[index$7];
        if (null !== hiddenUpdatesForLane)
          for (hiddenUpdates[index$7] = null, index$7 = 0; index$7 < hiddenUpdatesForLane.length; index$7++) {
            var update = hiddenUpdatesForLane[index$7];
            null !== update && (update.lane &= -536870913);
          }
        remainingLanes &= ~lane;
      }
      0 !== spawnedLane && markSpawnedDeferredLane(root2, spawnedLane, 0);
      0 !== suspendedRetryLanes && 0 === updatedLanes && 0 !== root2.tag && (root2.suspendedLanes |= suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
    }
    function markSpawnedDeferredLane(root2, spawnedLane, entangledLanes) {
      root2.pendingLanes |= spawnedLane;
      root2.suspendedLanes &= ~spawnedLane;
      var spawnedLaneIndex = 31 - clz32(spawnedLane);
      root2.entangledLanes |= spawnedLane;
      root2.entanglements[spawnedLaneIndex] = root2.entanglements[spawnedLaneIndex] | 1073741824 | entangledLanes & 261930;
    }
    function markRootEntangled(root2, entangledLanes) {
      var rootEntangledLanes = root2.entangledLanes |= entangledLanes;
      for (root2 = root2.entanglements; rootEntangledLanes; ) {
        var index$8 = 31 - clz32(rootEntangledLanes), lane = 1 << index$8;
        lane & entangledLanes | root2[index$8] & entangledLanes && (root2[index$8] |= entangledLanes);
        rootEntangledLanes &= ~lane;
      }
    }
    function getBumpedLaneForHydration(root2, renderLanes2) {
      var renderLane = renderLanes2 & -renderLanes2;
      renderLane = 0 !== (renderLane & 42) ? 1 : getBumpedLaneForHydrationByLane(renderLane);
      return 0 !== (renderLane & (root2.suspendedLanes | renderLanes2)) ? 0 : renderLane;
    }
    function getBumpedLaneForHydrationByLane(lane) {
      switch (lane) {
        case 2:
          lane = 1;
          break;
        case 8:
          lane = 4;
          break;
        case 32:
          lane = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          lane = 128;
          break;
        case 268435456:
          lane = 134217728;
          break;
        default:
          lane = 0;
      }
      return lane;
    }
    function lanesToEventPriority(lanes) {
      lanes &= -lanes;
      return 2 < lanes ? 8 < lanes ? 0 !== (lanes & 134217727) ? 32 : 268435456 : 8 : 2;
    }
    function resolveUpdatePriority() {
      var updatePriority = ReactDOMSharedInternals.p;
      if (0 !== updatePriority) return updatePriority;
      updatePriority = window.event;
      return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
    }
    function runWithPriority(priority, fn) {
      var previousPriority = ReactDOMSharedInternals.p;
      try {
        return ReactDOMSharedInternals.p = priority, fn();
      } finally {
        ReactDOMSharedInternals.p = previousPriority;
      }
    }
    var randomKey = Math.random().toString(36).slice(2);
    var internalInstanceKey = "__reactFiber$" + randomKey;
    var internalPropsKey = "__reactProps$" + randomKey;
    var internalContainerInstanceKey = "__reactContainer$" + randomKey;
    var internalEventHandlersKey = "__reactEvents$" + randomKey;
    var internalEventHandlerListenersKey = "__reactListeners$" + randomKey;
    var internalEventHandlesSetKey = "__reactHandles$" + randomKey;
    var internalRootNodeResourcesKey = "__reactResources$" + randomKey;
    var internalHoistableMarker = "__reactMarker$" + randomKey;
    function detachDeletedInstance(node) {
      delete node[internalInstanceKey];
      delete node[internalPropsKey];
      delete node[internalEventHandlersKey];
      delete node[internalEventHandlerListenersKey];
      delete node[internalEventHandlesSetKey];
    }
    function getClosestInstanceFromNode(targetNode) {
      var targetInst = targetNode[internalInstanceKey];
      if (targetInst) return targetInst;
      for (var parentNode = targetNode.parentNode; parentNode; ) {
        if (targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey]) {
          parentNode = targetInst.alternate;
          if (null !== targetInst.child || null !== parentNode && null !== parentNode.child)
            for (targetNode = getParentHydrationBoundary(targetNode); null !== targetNode; ) {
              if (parentNode = targetNode[internalInstanceKey]) return parentNode;
              targetNode = getParentHydrationBoundary(targetNode);
            }
          return targetInst;
        }
        targetNode = parentNode;
        parentNode = targetNode.parentNode;
      }
      return null;
    }
    function getInstanceFromNode(node) {
      if (node = node[internalInstanceKey] || node[internalContainerInstanceKey]) {
        var tag = node.tag;
        if (5 === tag || 6 === tag || 13 === tag || 31 === tag || 26 === tag || 27 === tag || 3 === tag)
          return node;
      }
      return null;
    }
    function getNodeFromInstance(inst) {
      var tag = inst.tag;
      if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
      throw Error(formatProdErrorMessage(33));
    }
    function getResourcesFromRoot(root2) {
      var resources = root2[internalRootNodeResourcesKey];
      resources || (resources = root2[internalRootNodeResourcesKey] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() });
      return resources;
    }
    function markNodeAsHoistable(node) {
      node[internalHoistableMarker] = true;
    }
    var allNativeEvents = /* @__PURE__ */ new Set();
    var registrationNameDependencies = {};
    function registerTwoPhaseEvent(registrationName, dependencies) {
      registerDirectEvent(registrationName, dependencies);
      registerDirectEvent(registrationName + "Capture", dependencies);
    }
    function registerDirectEvent(registrationName, dependencies) {
      registrationNameDependencies[registrationName] = dependencies;
      for (registrationName = 0; registrationName < dependencies.length; registrationName++)
        allNativeEvents.add(dependencies[registrationName]);
    }
    var VALID_ATTRIBUTE_NAME_REGEX = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    );
    var illegalAttributeNameCache = {};
    var validatedAttributeNameCache = {};
    function isAttributeNameSafe(attributeName) {
      if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
        return true;
      if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
      if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
        return validatedAttributeNameCache[attributeName] = true;
      illegalAttributeNameCache[attributeName] = true;
      return false;
    }
    function setValueForAttribute(node, name, value) {
      if (isAttributeNameSafe(name))
        if (null === value) node.removeAttribute(name);
        else {
          switch (typeof value) {
            case "undefined":
            case "function":
            case "symbol":
              node.removeAttribute(name);
              return;
            case "boolean":
              var prefix$10 = name.toLowerCase().slice(0, 5);
              if ("data-" !== prefix$10 && "aria-" !== prefix$10) {
                node.removeAttribute(name);
                return;
              }
          }
          node.setAttribute(name, "" + value);
        }
    }
    function setValueForKnownAttribute(node, name, value) {
      if (null === value) node.removeAttribute(name);
      else {
        switch (typeof value) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            node.removeAttribute(name);
            return;
        }
        node.setAttribute(name, "" + value);
      }
    }
    function setValueForNamespacedAttribute(node, namespace, name, value) {
      if (null === value) node.removeAttribute(name);
      else {
        switch (typeof value) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            node.removeAttribute(name);
            return;
        }
        node.setAttributeNS(namespace, name, "" + value);
      }
    }
    function getToStringValue(value) {
      switch (typeof value) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return value;
        case "object":
          return value;
        default:
          return "";
      }
    }
    function isCheckable(elem) {
      var type = elem.type;
      return (elem = elem.nodeName) && "input" === elem.toLowerCase() && ("checkbox" === type || "radio" === type);
    }
    function trackValueOnNode(node, valueField, currentValue) {
      var descriptor = Object.getOwnPropertyDescriptor(
        node.constructor.prototype,
        valueField
      );
      if (!node.hasOwnProperty(valueField) && "undefined" !== typeof descriptor && "function" === typeof descriptor.get && "function" === typeof descriptor.set) {
        var get = descriptor.get, set = descriptor.set;
        Object.defineProperty(node, valueField, {
          configurable: true,
          get: function() {
            return get.call(this);
          },
          set: function(value) {
            currentValue = "" + value;
            set.call(this, value);
          }
        });
        Object.defineProperty(node, valueField, {
          enumerable: descriptor.enumerable
        });
        return {
          getValue: function() {
            return currentValue;
          },
          setValue: function(value) {
            currentValue = "" + value;
          },
          stopTracking: function() {
            node._valueTracker = null;
            delete node[valueField];
          }
        };
      }
    }
    function track(node) {
      if (!node._valueTracker) {
        var valueField = isCheckable(node) ? "checked" : "value";
        node._valueTracker = trackValueOnNode(
          node,
          valueField,
          "" + node[valueField]
        );
      }
    }
    function updateValueIfChanged(node) {
      if (!node) return false;
      var tracker = node._valueTracker;
      if (!tracker) return true;
      var lastValue = tracker.getValue();
      var value = "";
      node && (value = isCheckable(node) ? node.checked ? "true" : "false" : node.value);
      node = value;
      return node !== lastValue ? (tracker.setValue(node), true) : false;
    }
    function getActiveElement(doc) {
      doc = doc || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof doc) return null;
      try {
        return doc.activeElement || doc.body;
      } catch (e) {
        return doc.body;
      }
    }
    var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
    function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
      return value.replace(
        escapeSelectorAttributeValueInsideDoubleQuotesRegex,
        function(ch) {
          return "\\" + ch.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function updateInput(element, value, defaultValue, lastDefaultValue, checked, defaultChecked, type, name) {
      element.name = "";
      null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type ? element.type = type : element.removeAttribute("type");
      if (null != value)
        if ("number" === type) {
          if (0 === value && "" === element.value || element.value != value)
            element.value = "" + getToStringValue(value);
        } else
          element.value !== "" + getToStringValue(value) && (element.value = "" + getToStringValue(value));
      else
        "submit" !== type && "reset" !== type || element.removeAttribute("value");
      null != value ? setDefaultValue(element, type, getToStringValue(value)) : null != defaultValue ? setDefaultValue(element, type, getToStringValue(defaultValue)) : null != lastDefaultValue && element.removeAttribute("value");
      null == checked && null != defaultChecked && (element.defaultChecked = !!defaultChecked);
      null != checked && (element.checked = checked && "function" !== typeof checked && "symbol" !== typeof checked);
      null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name ? element.name = "" + getToStringValue(name) : element.removeAttribute("name");
    }
    function initInput(element, value, defaultValue, checked, defaultChecked, type, name, isHydrating2) {
      null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type && (element.type = type);
      if (null != value || null != defaultValue) {
        if (!("submit" !== type && "reset" !== type || void 0 !== value && null !== value)) {
          track(element);
          return;
        }
        defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
        value = null != value ? "" + getToStringValue(value) : defaultValue;
        isHydrating2 || value === element.value || (element.value = value);
        element.defaultValue = value;
      }
      checked = null != checked ? checked : defaultChecked;
      checked = "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
      element.checked = isHydrating2 ? element.checked : !!checked;
      element.defaultChecked = !!checked;
      null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name && (element.name = name);
      track(element);
    }
    function setDefaultValue(node, type, value) {
      "number" === type && getActiveElement(node.ownerDocument) === node || node.defaultValue === "" + value || (node.defaultValue = "" + value);
    }
    function updateOptions(node, multiple, propValue, setDefaultSelected) {
      node = node.options;
      if (multiple) {
        multiple = {};
        for (var i = 0; i < propValue.length; i++)
          multiple["$" + propValue[i]] = true;
        for (propValue = 0; propValue < node.length; propValue++)
          i = multiple.hasOwnProperty("$" + node[propValue].value), node[propValue].selected !== i && (node[propValue].selected = i), i && setDefaultSelected && (node[propValue].defaultSelected = true);
      } else {
        propValue = "" + getToStringValue(propValue);
        multiple = null;
        for (i = 0; i < node.length; i++) {
          if (node[i].value === propValue) {
            node[i].selected = true;
            setDefaultSelected && (node[i].defaultSelected = true);
            return;
          }
          null !== multiple || node[i].disabled || (multiple = node[i]);
        }
        null !== multiple && (multiple.selected = true);
      }
    }
    function updateTextarea(element, value, defaultValue) {
      if (null != value && (value = "" + getToStringValue(value), value !== element.value && (element.value = value), null == defaultValue)) {
        element.defaultValue !== value && (element.defaultValue = value);
        return;
      }
      element.defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
    }
    function initTextarea(element, value, defaultValue, children) {
      if (null == value) {
        if (null != children) {
          if (null != defaultValue) throw Error(formatProdErrorMessage(92));
          if (isArrayImpl(children)) {
            if (1 < children.length) throw Error(formatProdErrorMessage(93));
            children = children[0];
          }
          defaultValue = children;
        }
        null == defaultValue && (defaultValue = "");
        value = defaultValue;
      }
      defaultValue = getToStringValue(value);
      element.defaultValue = defaultValue;
      children = element.textContent;
      children === defaultValue && "" !== children && null !== children && (element.value = children);
      track(element);
    }
    function setTextContent(node, text) {
      if (text) {
        var firstChild = node.firstChild;
        if (firstChild && firstChild === node.lastChild && 3 === firstChild.nodeType) {
          firstChild.nodeValue = text;
          return;
        }
      }
      node.textContent = text;
    }
    var unitlessNumbers = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    );
    function setValueForStyle(style2, styleName, value) {
      var isCustomProperty = 0 === styleName.indexOf("--");
      null == value || "boolean" === typeof value || "" === value ? isCustomProperty ? style2.setProperty(styleName, "") : "float" === styleName ? style2.cssFloat = "" : style2[styleName] = "" : isCustomProperty ? style2.setProperty(styleName, value) : "number" !== typeof value || 0 === value || unitlessNumbers.has(styleName) ? "float" === styleName ? style2.cssFloat = value : style2[styleName] = ("" + value).trim() : style2[styleName] = value + "px";
    }
    function setValueForStyles(node, styles, prevStyles) {
      if (null != styles && "object" !== typeof styles)
        throw Error(formatProdErrorMessage(62));
      node = node.style;
      if (null != prevStyles) {
        for (var styleName in prevStyles)
          !prevStyles.hasOwnProperty(styleName) || null != styles && styles.hasOwnProperty(styleName) || (0 === styleName.indexOf("--") ? node.setProperty(styleName, "") : "float" === styleName ? node.cssFloat = "" : node[styleName] = "");
        for (var styleName$16 in styles)
          styleName = styles[styleName$16], styles.hasOwnProperty(styleName$16) && prevStyles[styleName$16] !== styleName && setValueForStyle(node, styleName$16, styleName);
      } else
        for (var styleName$17 in styles)
          styles.hasOwnProperty(styleName$17) && setValueForStyle(node, styleName$17, styles[styleName$17]);
    }
    function isCustomElement(tagName) {
      if (-1 === tagName.indexOf("-")) return false;
      switch (tagName) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var aliases = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]);
    var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function sanitizeURL(url) {
      return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
    }
    function noop$1() {
    }
    var currentReplayingEvent = null;
    function getEventTarget(nativeEvent) {
      nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
      nativeEvent.correspondingUseElement && (nativeEvent = nativeEvent.correspondingUseElement);
      return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
    }
    var restoreTarget = null;
    var restoreQueue = null;
    function restoreStateOfTarget(target) {
      var internalInstance = getInstanceFromNode(target);
      if (internalInstance && (target = internalInstance.stateNode)) {
        var props = target[internalPropsKey] || null;
        a: switch (target = internalInstance.stateNode, internalInstance.type) {
          case "input":
            updateInput(
              target,
              props.value,
              props.defaultValue,
              props.defaultValue,
              props.checked,
              props.defaultChecked,
              props.type,
              props.name
            );
            internalInstance = props.name;
            if ("radio" === props.type && null != internalInstance) {
              for (props = target; props.parentNode; ) props = props.parentNode;
              props = props.querySelectorAll(
                'input[name="' + escapeSelectorAttributeValueInsideDoubleQuotes(
                  "" + internalInstance
                ) + '"][type="radio"]'
              );
              for (internalInstance = 0; internalInstance < props.length; internalInstance++) {
                var otherNode = props[internalInstance];
                if (otherNode !== target && otherNode.form === target.form) {
                  var otherProps = otherNode[internalPropsKey] || null;
                  if (!otherProps) throw Error(formatProdErrorMessage(90));
                  updateInput(
                    otherNode,
                    otherProps.value,
                    otherProps.defaultValue,
                    otherProps.defaultValue,
                    otherProps.checked,
                    otherProps.defaultChecked,
                    otherProps.type,
                    otherProps.name
                  );
                }
              }
              for (internalInstance = 0; internalInstance < props.length; internalInstance++)
                otherNode = props[internalInstance], otherNode.form === target.form && updateValueIfChanged(otherNode);
            }
            break a;
          case "textarea":
            updateTextarea(target, props.value, props.defaultValue);
            break a;
          case "select":
            internalInstance = props.value, null != internalInstance && updateOptions(target, !!props.multiple, internalInstance, false);
        }
      }
    }
    var isInsideEventHandler = false;
    function batchedUpdates$1(fn, a, b) {
      if (isInsideEventHandler) return fn(a, b);
      isInsideEventHandler = true;
      try {
        var JSCompiler_inline_result = fn(a);
        return JSCompiler_inline_result;
      } finally {
        if (isInsideEventHandler = false, null !== restoreTarget || null !== restoreQueue) {
          if (flushSyncWork$1(), restoreTarget && (a = restoreTarget, fn = restoreQueue, restoreQueue = restoreTarget = null, restoreStateOfTarget(a), fn))
            for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
        }
      }
    }
    function getListener(inst, registrationName) {
      var stateNode = inst.stateNode;
      if (null === stateNode) return null;
      var props = stateNode[internalPropsKey] || null;
      if (null === props) return null;
      stateNode = props[registrationName];
      a: switch (registrationName) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (props = !props.disabled) || (inst = inst.type, props = !("button" === inst || "input" === inst || "select" === inst || "textarea" === inst));
          inst = !props;
          break a;
        default:
          inst = false;
      }
      if (inst) return null;
      if (stateNode && "function" !== typeof stateNode)
        throw Error(
          formatProdErrorMessage(231, registrationName, typeof stateNode)
        );
      return stateNode;
    }
    var canUseDOM = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
    var passiveBrowserEventsSupported = false;
    if (canUseDOM)
      try {
        options = {};
        Object.defineProperty(options, "passive", {
          get: function() {
            passiveBrowserEventsSupported = true;
          }
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
      } catch (e) {
        passiveBrowserEventsSupported = false;
      }
    var options;
    var root = null;
    var startText = null;
    var fallbackText = null;
    function getData() {
      if (fallbackText) return fallbackText;
      var start, startValue = startText, startLength = startValue.length, end, endValue = "value" in root ? root.value : root.textContent, endLength = endValue.length;
      for (start = 0; start < startLength && startValue[start] === endValue[start]; start++) ;
      var minEnd = startLength - start;
      for (end = 1; end <= minEnd && startValue[startLength - end] === endValue[endLength - end]; end++) ;
      return fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0);
    }
    function getEventCharCode(nativeEvent) {
      var keyCode = nativeEvent.keyCode;
      "charCode" in nativeEvent ? (nativeEvent = nativeEvent.charCode, 0 === nativeEvent && 13 === keyCode && (nativeEvent = 13)) : nativeEvent = keyCode;
      10 === nativeEvent && (nativeEvent = 13);
      return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
    }
    function functionThatReturnsTrue() {
      return true;
    }
    function functionThatReturnsFalse() {
      return false;
    }
    function createSyntheticEvent(Interface) {
      function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
        this._reactName = reactName;
        this._targetInst = targetInst;
        this.type = reactEventType;
        this.nativeEvent = nativeEvent;
        this.target = nativeEventTarget;
        this.currentTarget = null;
        for (var propName in Interface)
          Interface.hasOwnProperty(propName) && (reactName = Interface[propName], this[propName] = reactName ? reactName(nativeEvent) : nativeEvent[propName]);
        this.isDefaultPrevented = (null != nativeEvent.defaultPrevented ? nativeEvent.defaultPrevented : false === nativeEvent.returnValue) ? functionThatReturnsTrue : functionThatReturnsFalse;
        this.isPropagationStopped = functionThatReturnsFalse;
        return this;
      }
      assign(SyntheticBaseEvent.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var event = this.nativeEvent;
          event && (event.preventDefault ? event.preventDefault() : "unknown" !== typeof event.returnValue && (event.returnValue = false), this.isDefaultPrevented = functionThatReturnsTrue);
        },
        stopPropagation: function() {
          var event = this.nativeEvent;
          event && (event.stopPropagation ? event.stopPropagation() : "unknown" !== typeof event.cancelBubble && (event.cancelBubble = true), this.isPropagationStopped = functionThatReturnsTrue);
        },
        persist: function() {
        },
        isPersistent: functionThatReturnsTrue
      });
      return SyntheticBaseEvent;
    }
    var EventInterface = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(event) {
        return event.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    };
    var SyntheticEvent = createSyntheticEvent(EventInterface);
    var UIEventInterface = assign({}, EventInterface, { view: 0, detail: 0 });
    var SyntheticUIEvent = createSyntheticEvent(UIEventInterface);
    var lastMovementX;
    var lastMovementY;
    var lastMouseEvent;
    var MouseEventInterface = assign({}, UIEventInterface, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: getEventModifierState,
      button: 0,
      buttons: 0,
      relatedTarget: function(event) {
        return void 0 === event.relatedTarget ? event.fromElement === event.srcElement ? event.toElement : event.fromElement : event.relatedTarget;
      },
      movementX: function(event) {
        if ("movementX" in event) return event.movementX;
        event !== lastMouseEvent && (lastMouseEvent && "mousemove" === event.type ? (lastMovementX = event.screenX - lastMouseEvent.screenX, lastMovementY = event.screenY - lastMouseEvent.screenY) : lastMovementY = lastMovementX = 0, lastMouseEvent = event);
        return lastMovementX;
      },
      movementY: function(event) {
        return "movementY" in event ? event.movementY : lastMovementY;
      }
    });
    var SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
    var DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 });
    var SyntheticDragEvent = createSyntheticEvent(DragEventInterface);
    var FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 });
    var SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface);
    var AnimationEventInterface = assign({}, EventInterface, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    var SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface);
    var ClipboardEventInterface = assign({}, EventInterface, {
      clipboardData: function(event) {
        return "clipboardData" in event ? event.clipboardData : window.clipboardData;
      }
    });
    var SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface);
    var CompositionEventInterface = assign({}, EventInterface, { data: 0 });
    var SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface);
    var normalizeKey = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    };
    var translateToKey = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    var modifierKeyToProp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function modifierStateGetter(keyArg) {
      var nativeEvent = this.nativeEvent;
      return nativeEvent.getModifierState ? nativeEvent.getModifierState(keyArg) : (keyArg = modifierKeyToProp[keyArg]) ? !!nativeEvent[keyArg] : false;
    }
    function getEventModifierState() {
      return modifierStateGetter;
    }
    var KeyboardEventInterface = assign({}, UIEventInterface, {
      key: function(nativeEvent) {
        if (nativeEvent.key) {
          var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
          if ("Unidentified" !== key) return key;
        }
        return "keypress" === nativeEvent.type ? (nativeEvent = getEventCharCode(nativeEvent), 13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent)) : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type ? translateToKey[nativeEvent.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: getEventModifierState,
      charCode: function(event) {
        return "keypress" === event.type ? getEventCharCode(event) : 0;
      },
      keyCode: function(event) {
        return "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
      },
      which: function(event) {
        return "keypress" === event.type ? getEventCharCode(event) : "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
      }
    });
    var SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface);
    var PointerEventInterface = assign({}, MouseEventInterface, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    });
    var SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface);
    var TouchEventInterface = assign({}, UIEventInterface, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: getEventModifierState
    });
    var SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface);
    var TransitionEventInterface = assign({}, EventInterface, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    var SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface);
    var WheelEventInterface = assign({}, MouseEventInterface, {
      deltaX: function(event) {
        return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
      },
      deltaY: function(event) {
        return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    });
    var SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface);
    var ToggleEventInterface = assign({}, EventInterface, {
      newState: 0,
      oldState: 0
    });
    var SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface);
    var END_KEYCODES = [9, 13, 27, 32];
    var canUseCompositionEvent = canUseDOM && "CompositionEvent" in window;
    var documentMode = null;
    canUseDOM && "documentMode" in document && (documentMode = document.documentMode);
    var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode;
    var useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && 8 < documentMode && 11 >= documentMode);
    var SPACEBAR_CHAR = String.fromCharCode(32);
    var hasSpaceKeypress = false;
    function isFallbackCompositionEnd(domEventName, nativeEvent) {
      switch (domEventName) {
        case "keyup":
          return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
        case "keydown":
          return 229 !== nativeEvent.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function getDataFromCustomEvent(nativeEvent) {
      nativeEvent = nativeEvent.detail;
      return "object" === typeof nativeEvent && "data" in nativeEvent ? nativeEvent.data : null;
    }
    var isComposing = false;
    function getNativeBeforeInputChars(domEventName, nativeEvent) {
      switch (domEventName) {
        case "compositionend":
          return getDataFromCustomEvent(nativeEvent);
        case "keypress":
          if (32 !== nativeEvent.which) return null;
          hasSpaceKeypress = true;
          return SPACEBAR_CHAR;
        case "textInput":
          return domEventName = nativeEvent.data, domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName;
        default:
          return null;
      }
    }
    function getFallbackBeforeInputChars(domEventName, nativeEvent) {
      if (isComposing)
        return "compositionend" === domEventName || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent) ? (domEventName = getData(), fallbackText = startText = root = null, isComposing = false, domEventName) : null;
      switch (domEventName) {
        case "paste":
          return null;
        case "keypress":
          if (!(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) || nativeEvent.ctrlKey && nativeEvent.altKey) {
            if (nativeEvent.char && 1 < nativeEvent.char.length)
              return nativeEvent.char;
            if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
          }
          return null;
        case "compositionend":
          return useFallbackCompositionData && "ko" !== nativeEvent.locale ? null : nativeEvent.data;
        default:
          return null;
      }
    }
    var supportedInputTypes = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function isTextInputElement(elem) {
      var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
      return "input" === nodeName ? !!supportedInputTypes[elem.type] : "textarea" === nodeName ? true : false;
    }
    function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
      restoreTarget ? restoreQueue ? restoreQueue.push(target) : restoreQueue = [target] : restoreTarget = target;
      inst = accumulateTwoPhaseListeners(inst, "onChange");
      0 < inst.length && (nativeEvent = new SyntheticEvent(
        "onChange",
        "change",
        null,
        nativeEvent,
        target
      ), dispatchQueue.push({ event: nativeEvent, listeners: inst }));
    }
    var activeElement$1 = null;
    var activeElementInst$1 = null;
    function runEventInBatch(dispatchQueue) {
      processDispatchQueue(dispatchQueue, 0);
    }
    function getInstIfValueChanged(targetInst) {
      var targetNode = getNodeFromInstance(targetInst);
      if (updateValueIfChanged(targetNode)) return targetInst;
    }
    function getTargetInstForChangeEvent(domEventName, targetInst) {
      if ("change" === domEventName) return targetInst;
    }
    var isInputEventSupported = false;
    if (canUseDOM) {
      if (canUseDOM) {
        isSupported$jscomp$inline_427 = "oninput" in document;
        if (!isSupported$jscomp$inline_427) {
          element$jscomp$inline_428 = document.createElement("div");
          element$jscomp$inline_428.setAttribute("oninput", "return;");
          isSupported$jscomp$inline_427 = "function" === typeof element$jscomp$inline_428.oninput;
        }
        JSCompiler_inline_result$jscomp$286 = isSupported$jscomp$inline_427;
      } else JSCompiler_inline_result$jscomp$286 = false;
      isInputEventSupported = JSCompiler_inline_result$jscomp$286 && (!document.documentMode || 9 < document.documentMode);
    }
    var JSCompiler_inline_result$jscomp$286;
    var isSupported$jscomp$inline_427;
    var element$jscomp$inline_428;
    function stopWatchingForValueChange() {
      activeElement$1 && (activeElement$1.detachEvent("onpropertychange", handlePropertyChange), activeElementInst$1 = activeElement$1 = null);
    }
    function handlePropertyChange(nativeEvent) {
      if ("value" === nativeEvent.propertyName && getInstIfValueChanged(activeElementInst$1)) {
        var dispatchQueue = [];
        createAndAccumulateChangeEvent(
          dispatchQueue,
          activeElementInst$1,
          nativeEvent,
          getEventTarget(nativeEvent)
        );
        batchedUpdates$1(runEventInBatch, dispatchQueue);
      }
    }
    function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
      "focusin" === domEventName ? (stopWatchingForValueChange(), activeElement$1 = target, activeElementInst$1 = targetInst, activeElement$1.attachEvent("onpropertychange", handlePropertyChange)) : "focusout" === domEventName && stopWatchingForValueChange();
    }
    function getTargetInstForInputEventPolyfill(domEventName) {
      if ("selectionchange" === domEventName || "keyup" === domEventName || "keydown" === domEventName)
        return getInstIfValueChanged(activeElementInst$1);
    }
    function getTargetInstForClickEvent(domEventName, targetInst) {
      if ("click" === domEventName) return getInstIfValueChanged(targetInst);
    }
    function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
      if ("input" === domEventName || "change" === domEventName)
        return getInstIfValueChanged(targetInst);
    }
    function is(x, y) {
      return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    var objectIs = "function" === typeof Object.is ? Object.is : is;
    function shallowEqual(objA, objB) {
      if (objectIs(objA, objB)) return true;
      if ("object" !== typeof objA || null === objA || "object" !== typeof objB || null === objB)
        return false;
      var keysA = Object.keys(objA), keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) return false;
      for (keysB = 0; keysB < keysA.length; keysB++) {
        var currentKey = keysA[keysB];
        if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey]))
          return false;
      }
      return true;
    }
    function getLeafNode(node) {
      for (; node && node.firstChild; ) node = node.firstChild;
      return node;
    }
    function getNodeForCharacterOffset(root2, offset) {
      var node = getLeafNode(root2);
      root2 = 0;
      for (var nodeEnd; node; ) {
        if (3 === node.nodeType) {
          nodeEnd = root2 + node.textContent.length;
          if (root2 <= offset && nodeEnd >= offset)
            return { node, offset: offset - root2 };
          root2 = nodeEnd;
        }
        a: {
          for (; node; ) {
            if (node.nextSibling) {
              node = node.nextSibling;
              break a;
            }
            node = node.parentNode;
          }
          node = void 0;
        }
        node = getLeafNode(node);
      }
    }
    function containsNode(outerNode, innerNode) {
      return outerNode && innerNode ? outerNode === innerNode ? true : outerNode && 3 === outerNode.nodeType ? false : innerNode && 3 === innerNode.nodeType ? containsNode(outerNode, innerNode.parentNode) : "contains" in outerNode ? outerNode.contains(innerNode) : outerNode.compareDocumentPosition ? !!(outerNode.compareDocumentPosition(innerNode) & 16) : false : false;
    }
    function getActiveElementDeep(containerInfo) {
      containerInfo = null != containerInfo && null != containerInfo.ownerDocument && null != containerInfo.ownerDocument.defaultView ? containerInfo.ownerDocument.defaultView : window;
      for (var element = getActiveElement(containerInfo.document); element instanceof containerInfo.HTMLIFrameElement; ) {
        try {
          var JSCompiler_inline_result = "string" === typeof element.contentWindow.location.href;
        } catch (err) {
          JSCompiler_inline_result = false;
        }
        if (JSCompiler_inline_result) containerInfo = element.contentWindow;
        else break;
        element = getActiveElement(containerInfo.document);
      }
      return element;
    }
    function hasSelectionCapabilities(elem) {
      var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
      return nodeName && ("input" === nodeName && ("text" === elem.type || "search" === elem.type || "tel" === elem.type || "url" === elem.type || "password" === elem.type) || "textarea" === nodeName || "true" === elem.contentEditable);
    }
    var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && 11 >= document.documentMode;
    var activeElement = null;
    var activeElementInst = null;
    var lastSelection = null;
    var mouseDown = false;
    function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
      var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : 9 === nativeEventTarget.nodeType ? nativeEventTarget : nativeEventTarget.ownerDocument;
      mouseDown || null == activeElement || activeElement !== getActiveElement(doc) || (doc = activeElement, "selectionStart" in doc && hasSelectionCapabilities(doc) ? doc = { start: doc.selectionStart, end: doc.selectionEnd } : (doc = (doc.ownerDocument && doc.ownerDocument.defaultView || window).getSelection(), doc = {
        anchorNode: doc.anchorNode,
        anchorOffset: doc.anchorOffset,
        focusNode: doc.focusNode,
        focusOffset: doc.focusOffset
      }), lastSelection && shallowEqual(lastSelection, doc) || (lastSelection = doc, doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect"), 0 < doc.length && (nativeEvent = new SyntheticEvent(
        "onSelect",
        "select",
        null,
        nativeEvent,
        nativeEventTarget
      ), dispatchQueue.push({ event: nativeEvent, listeners: doc }), nativeEvent.target = activeElement)));
    }
    function makePrefixMap(styleProp, eventName) {
      var prefixes = {};
      prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
      prefixes["Webkit" + styleProp] = "webkit" + eventName;
      prefixes["Moz" + styleProp] = "moz" + eventName;
      return prefixes;
    }
    var vendorPrefixes = {
      animationend: makePrefixMap("Animation", "AnimationEnd"),
      animationiteration: makePrefixMap("Animation", "AnimationIteration"),
      animationstart: makePrefixMap("Animation", "AnimationStart"),
      transitionrun: makePrefixMap("Transition", "TransitionRun"),
      transitionstart: makePrefixMap("Transition", "TransitionStart"),
      transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
      transitionend: makePrefixMap("Transition", "TransitionEnd")
    };
    var prefixedEventNames = {};
    var style = {};
    canUseDOM && (style = document.createElement("div").style, "AnimationEvent" in window || (delete vendorPrefixes.animationend.animation, delete vendorPrefixes.animationiteration.animation, delete vendorPrefixes.animationstart.animation), "TransitionEvent" in window || delete vendorPrefixes.transitionend.transition);
    function getVendorPrefixedEventName(eventName) {
      if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
      if (!vendorPrefixes[eventName]) return eventName;
      var prefixMap = vendorPrefixes[eventName], styleProp;
      for (styleProp in prefixMap)
        if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
          return prefixedEventNames[eventName] = prefixMap[styleProp];
      return eventName;
    }
    var ANIMATION_END = getVendorPrefixedEventName("animationend");
    var ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration");
    var ANIMATION_START = getVendorPrefixedEventName("animationstart");
    var TRANSITION_RUN = getVendorPrefixedEventName("transitionrun");
    var TRANSITION_START = getVendorPrefixedEventName("transitionstart");
    var TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel");
    var TRANSITION_END = getVendorPrefixedEventName("transitionend");
    var topLevelEventsToReactNames = /* @__PURE__ */ new Map();
    var simpleEventPluginEvents = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    simpleEventPluginEvents.push("scrollEnd");
    function registerSimpleEvent(domEventName, reactName) {
      topLevelEventsToReactNames.set(domEventName, reactName);
      registerTwoPhaseEvent(reactName, [domEventName]);
    }
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
    var concurrentQueues = [];
    var concurrentQueuesIndex = 0;
    var concurrentlyUpdatedLanes = 0;
    function finishQueueingConcurrentUpdates() {
      for (var endIndex = concurrentQueuesIndex, i = concurrentlyUpdatedLanes = concurrentQueuesIndex = 0; i < endIndex; ) {
        var fiber = concurrentQueues[i];
        concurrentQueues[i++] = null;
        var queue = concurrentQueues[i];
        concurrentQueues[i++] = null;
        var update = concurrentQueues[i];
        concurrentQueues[i++] = null;
        var lane = concurrentQueues[i];
        concurrentQueues[i++] = null;
        if (null !== queue && null !== update) {
          var pending = queue.pending;
          null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
          queue.pending = update;
        }
        0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
      }
    }
    function enqueueUpdate$1(fiber, queue, update, lane) {
      concurrentQueues[concurrentQueuesIndex++] = fiber;
      concurrentQueues[concurrentQueuesIndex++] = queue;
      concurrentQueues[concurrentQueuesIndex++] = update;
      concurrentQueues[concurrentQueuesIndex++] = lane;
      concurrentlyUpdatedLanes |= lane;
      fiber.lanes |= lane;
      fiber = fiber.alternate;
      null !== fiber && (fiber.lanes |= lane);
    }
    function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
      enqueueUpdate$1(fiber, queue, update, lane);
      return getRootForUpdatedFiber(fiber);
    }
    function enqueueConcurrentRenderForLane(fiber, lane) {
      enqueueUpdate$1(fiber, null, null, lane);
      return getRootForUpdatedFiber(fiber);
    }
    function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
      sourceFiber.lanes |= lane;
      var alternate = sourceFiber.alternate;
      null !== alternate && (alternate.lanes |= lane);
      for (var isHidden = false, parent = sourceFiber.return; null !== parent; )
        parent.childLanes |= lane, alternate = parent.alternate, null !== alternate && (alternate.childLanes |= lane), 22 === parent.tag && (sourceFiber = parent.stateNode, null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = true)), sourceFiber = parent, parent = parent.return;
      return 3 === sourceFiber.tag ? (parent = sourceFiber.stateNode, isHidden && null !== update && (isHidden = 31 - clz32(lane), sourceFiber = parent.hiddenUpdates, alternate = sourceFiber[isHidden], null === alternate ? sourceFiber[isHidden] = [update] : alternate.push(update), update.lane = lane | 536870912), parent) : null;
    }
    function getRootForUpdatedFiber(sourceFiber) {
      if (50 < nestedUpdateCount)
        throw nestedUpdateCount = 0, rootWithNestedUpdates = null, Error(formatProdErrorMessage(185));
      for (var parent = sourceFiber.return; null !== parent; )
        sourceFiber = parent, parent = sourceFiber.return;
      return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
    }
    var emptyContextObject = {};
    function FiberNode(tag, pendingProps, key, mode) {
      this.tag = tag;
      this.key = key;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.refCleanup = this.ref = null;
      this.pendingProps = pendingProps;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = mode;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function createFiberImplClass(tag, pendingProps, key, mode) {
      return new FiberNode(tag, pendingProps, key, mode);
    }
    function shouldConstruct(Component) {
      Component = Component.prototype;
      return !(!Component || !Component.isReactComponent);
    }
    function createWorkInProgress(current, pendingProps) {
      var workInProgress2 = current.alternate;
      null === workInProgress2 ? (workInProgress2 = createFiberImplClass(
        current.tag,
        pendingProps,
        current.key,
        current.mode
      ), workInProgress2.elementType = current.elementType, workInProgress2.type = current.type, workInProgress2.stateNode = current.stateNode, workInProgress2.alternate = current, current.alternate = workInProgress2) : (workInProgress2.pendingProps = pendingProps, workInProgress2.type = current.type, workInProgress2.flags = 0, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null);
      workInProgress2.flags = current.flags & 65011712;
      workInProgress2.childLanes = current.childLanes;
      workInProgress2.lanes = current.lanes;
      workInProgress2.child = current.child;
      workInProgress2.memoizedProps = current.memoizedProps;
      workInProgress2.memoizedState = current.memoizedState;
      workInProgress2.updateQueue = current.updateQueue;
      pendingProps = current.dependencies;
      workInProgress2.dependencies = null === pendingProps ? null : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
      workInProgress2.sibling = current.sibling;
      workInProgress2.index = current.index;
      workInProgress2.ref = current.ref;
      workInProgress2.refCleanup = current.refCleanup;
      return workInProgress2;
    }
    function resetWorkInProgress(workInProgress2, renderLanes2) {
      workInProgress2.flags &= 65011714;
      var current = workInProgress2.alternate;
      null === current ? (workInProgress2.childLanes = 0, workInProgress2.lanes = renderLanes2, workInProgress2.child = null, workInProgress2.subtreeFlags = 0, workInProgress2.memoizedProps = null, workInProgress2.memoizedState = null, workInProgress2.updateQueue = null, workInProgress2.dependencies = null, workInProgress2.stateNode = null) : (workInProgress2.childLanes = current.childLanes, workInProgress2.lanes = current.lanes, workInProgress2.child = current.child, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null, workInProgress2.memoizedProps = current.memoizedProps, workInProgress2.memoizedState = current.memoizedState, workInProgress2.updateQueue = current.updateQueue, workInProgress2.type = current.type, renderLanes2 = current.dependencies, workInProgress2.dependencies = null === renderLanes2 ? null : {
        lanes: renderLanes2.lanes,
        firstContext: renderLanes2.firstContext
      });
      return workInProgress2;
    }
    function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
      var fiberTag = 0;
      owner = type;
      if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
      else if ("string" === typeof type)
        fiberTag = isHostHoistableType(
          type,
          pendingProps,
          contextStackCursor.current
        ) ? 26 : "html" === type || "head" === type || "body" === type ? 27 : 5;
      else
        a: switch (type) {
          case REACT_ACTIVITY_TYPE:
            return type = createFiberImplClass(31, pendingProps, key, mode), type.elementType = REACT_ACTIVITY_TYPE, type.lanes = lanes, type;
          case REACT_FRAGMENT_TYPE:
            return createFiberFromFragment(pendingProps.children, mode, lanes, key);
          case REACT_STRICT_MODE_TYPE:
            fiberTag = 8;
            mode |= 24;
            break;
          case REACT_PROFILER_TYPE:
            return type = createFiberImplClass(12, pendingProps, key, mode | 2), type.elementType = REACT_PROFILER_TYPE, type.lanes = lanes, type;
          case REACT_SUSPENSE_TYPE:
            return type = createFiberImplClass(13, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_TYPE, type.lanes = lanes, type;
          case REACT_SUSPENSE_LIST_TYPE:
            return type = createFiberImplClass(19, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_LIST_TYPE, type.lanes = lanes, type;
          default:
            if ("object" === typeof type && null !== type)
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  fiberTag = 10;
                  break a;
                case REACT_CONSUMER_TYPE:
                  fiberTag = 9;
                  break a;
                case REACT_FORWARD_REF_TYPE:
                  fiberTag = 11;
                  break a;
                case REACT_MEMO_TYPE:
                  fiberTag = 14;
                  break a;
                case REACT_LAZY_TYPE:
                  fiberTag = 16;
                  owner = null;
                  break a;
              }
            fiberTag = 29;
            pendingProps = Error(
              formatProdErrorMessage(130, null === type ? "null" : typeof type, "")
            );
            owner = null;
        }
      key = createFiberImplClass(fiberTag, pendingProps, key, mode);
      key.elementType = type;
      key.type = owner;
      key.lanes = lanes;
      return key;
    }
    function createFiberFromFragment(elements, mode, lanes, key) {
      elements = createFiberImplClass(7, elements, key, mode);
      elements.lanes = lanes;
      return elements;
    }
    function createFiberFromText(content, mode, lanes) {
      content = createFiberImplClass(6, content, null, mode);
      content.lanes = lanes;
      return content;
    }
    function createFiberFromDehydratedFragment(dehydratedNode) {
      var fiber = createFiberImplClass(18, null, null, 0);
      fiber.stateNode = dehydratedNode;
      return fiber;
    }
    function createFiberFromPortal(portal, mode, lanes) {
      mode = createFiberImplClass(
        4,
        null !== portal.children ? portal.children : [],
        portal.key,
        mode
      );
      mode.lanes = lanes;
      mode.stateNode = {
        containerInfo: portal.containerInfo,
        pendingChildren: null,
        implementation: portal.implementation
      };
      return mode;
    }
    var CapturedStacks = /* @__PURE__ */ new WeakMap();
    function createCapturedValueAtFiber(value, source) {
      if ("object" === typeof value && null !== value) {
        var existing = CapturedStacks.get(value);
        if (void 0 !== existing) return existing;
        source = {
          value,
          source,
          stack: getStackByFiberInDevAndProd(source)
        };
        CapturedStacks.set(value, source);
        return source;
      }
      return {
        value,
        source,
        stack: getStackByFiberInDevAndProd(source)
      };
    }
    var forkStack = [];
    var forkStackIndex = 0;
    var treeForkProvider = null;
    var treeForkCount = 0;
    var idStack = [];
    var idStackIndex = 0;
    var treeContextProvider = null;
    var treeContextId = 1;
    var treeContextOverflow = "";
    function pushTreeFork(workInProgress2, totalChildren) {
      forkStack[forkStackIndex++] = treeForkCount;
      forkStack[forkStackIndex++] = treeForkProvider;
      treeForkProvider = workInProgress2;
      treeForkCount = totalChildren;
    }
    function pushTreeId(workInProgress2, totalChildren, index2) {
      idStack[idStackIndex++] = treeContextId;
      idStack[idStackIndex++] = treeContextOverflow;
      idStack[idStackIndex++] = treeContextProvider;
      treeContextProvider = workInProgress2;
      var baseIdWithLeadingBit = treeContextId;
      workInProgress2 = treeContextOverflow;
      var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
      baseIdWithLeadingBit &= ~(1 << baseLength);
      index2 += 1;
      var length = 32 - clz32(totalChildren) + baseLength;
      if (30 < length) {
        var numberOfOverflowBits = baseLength - baseLength % 5;
        length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
        baseIdWithLeadingBit >>= numberOfOverflowBits;
        baseLength -= numberOfOverflowBits;
        treeContextId = 1 << 32 - clz32(totalChildren) + baseLength | index2 << baseLength | baseIdWithLeadingBit;
        treeContextOverflow = length + workInProgress2;
      } else
        treeContextId = 1 << length | index2 << baseLength | baseIdWithLeadingBit, treeContextOverflow = workInProgress2;
    }
    function pushMaterializedTreeId(workInProgress2) {
      null !== workInProgress2.return && (pushTreeFork(workInProgress2, 1), pushTreeId(workInProgress2, 1, 0));
    }
    function popTreeContext(workInProgress2) {
      for (; workInProgress2 === treeForkProvider; )
        treeForkProvider = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null, treeForkCount = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null;
      for (; workInProgress2 === treeContextProvider; )
        treeContextProvider = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextOverflow = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextId = idStack[--idStackIndex], idStack[idStackIndex] = null;
    }
    function restoreSuspendedTreeContext(workInProgress2, suspendedContext) {
      idStack[idStackIndex++] = treeContextId;
      idStack[idStackIndex++] = treeContextOverflow;
      idStack[idStackIndex++] = treeContextProvider;
      treeContextId = suspendedContext.id;
      treeContextOverflow = suspendedContext.overflow;
      treeContextProvider = workInProgress2;
    }
    var hydrationParentFiber = null;
    var nextHydratableInstance = null;
    var isHydrating = false;
    var hydrationErrors = null;
    var rootOrSingletonContext = false;
    var HydrationMismatchException = Error(formatProdErrorMessage(519));
    function throwOnHydrationMismatch(fiber) {
      var error = Error(
        formatProdErrorMessage(
          418,
          1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML",
          ""
        )
      );
      queueHydrationError(createCapturedValueAtFiber(error, fiber));
      throw HydrationMismatchException;
    }
    function prepareToHydrateHostInstance(fiber) {
      var instance = fiber.stateNode, type = fiber.type, props = fiber.memoizedProps;
      instance[internalInstanceKey] = fiber;
      instance[internalPropsKey] = props;
      switch (type) {
        case "dialog":
          listenToNonDelegatedEvent("cancel", instance);
          listenToNonDelegatedEvent("close", instance);
          break;
        case "iframe":
        case "object":
        case "embed":
          listenToNonDelegatedEvent("load", instance);
          break;
        case "video":
        case "audio":
          for (type = 0; type < mediaEventTypes.length; type++)
            listenToNonDelegatedEvent(mediaEventTypes[type], instance);
          break;
        case "source":
          listenToNonDelegatedEvent("error", instance);
          break;
        case "img":
        case "image":
        case "link":
          listenToNonDelegatedEvent("error", instance);
          listenToNonDelegatedEvent("load", instance);
          break;
        case "details":
          listenToNonDelegatedEvent("toggle", instance);
          break;
        case "input":
          listenToNonDelegatedEvent("invalid", instance);
          initInput(
            instance,
            props.value,
            props.defaultValue,
            props.checked,
            props.defaultChecked,
            props.type,
            props.name,
            true
          );
          break;
        case "select":
          listenToNonDelegatedEvent("invalid", instance);
          break;
        case "textarea":
          listenToNonDelegatedEvent("invalid", instance), initTextarea(instance, props.value, props.defaultValue, props.children);
      }
      type = props.children;
      "string" !== typeof type && "number" !== typeof type && "bigint" !== typeof type || instance.textContent === "" + type || true === props.suppressHydrationWarning || checkForUnmatchedText(instance.textContent, type) ? (null != props.popover && (listenToNonDelegatedEvent("beforetoggle", instance), listenToNonDelegatedEvent("toggle", instance)), null != props.onScroll && listenToNonDelegatedEvent("scroll", instance), null != props.onScrollEnd && listenToNonDelegatedEvent("scrollend", instance), null != props.onClick && (instance.onclick = noop$1), instance = true) : instance = false;
      instance || throwOnHydrationMismatch(fiber, true);
    }
    function popToNextHostParent(fiber) {
      for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
        switch (hydrationParentFiber.tag) {
          case 5:
          case 31:
          case 13:
            rootOrSingletonContext = false;
            return;
          case 27:
          case 3:
            rootOrSingletonContext = true;
            return;
          default:
            hydrationParentFiber = hydrationParentFiber.return;
        }
    }
    function popHydrationState(fiber) {
      if (fiber !== hydrationParentFiber) return false;
      if (!isHydrating) return popToNextHostParent(fiber), isHydrating = true, false;
      var tag = fiber.tag, JSCompiler_temp;
      if (JSCompiler_temp = 3 !== tag && 27 !== tag) {
        if (JSCompiler_temp = 5 === tag)
          JSCompiler_temp = fiber.type, JSCompiler_temp = !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) || shouldSetTextContent(fiber.type, fiber.memoizedProps);
        JSCompiler_temp = !JSCompiler_temp;
      }
      JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
      popToNextHostParent(fiber);
      if (13 === tag) {
        fiber = fiber.memoizedState;
        fiber = null !== fiber ? fiber.dehydrated : null;
        if (!fiber) throw Error(formatProdErrorMessage(317));
        nextHydratableInstance = getNextHydratableInstanceAfterHydrationBoundary(fiber);
      } else if (31 === tag) {
        fiber = fiber.memoizedState;
        fiber = null !== fiber ? fiber.dehydrated : null;
        if (!fiber) throw Error(formatProdErrorMessage(317));
        nextHydratableInstance = getNextHydratableInstanceAfterHydrationBoundary(fiber);
      } else
        27 === tag ? (tag = nextHydratableInstance, isSingletonScope(fiber.type) ? (fiber = previousHydratableOnEnteringScopedSingleton, previousHydratableOnEnteringScopedSingleton = null, nextHydratableInstance = fiber) : nextHydratableInstance = tag) : nextHydratableInstance = hydrationParentFiber ? getNextHydratable(fiber.stateNode.nextSibling) : null;
      return true;
    }
    function resetHydrationState() {
      nextHydratableInstance = hydrationParentFiber = null;
      isHydrating = false;
    }
    function upgradeHydrationErrorsToRecoverable() {
      var queuedErrors = hydrationErrors;
      null !== queuedErrors && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = queuedErrors : workInProgressRootRecoverableErrors.push.apply(
        workInProgressRootRecoverableErrors,
        queuedErrors
      ), hydrationErrors = null);
      return queuedErrors;
    }
    function queueHydrationError(error) {
      null === hydrationErrors ? hydrationErrors = [error] : hydrationErrors.push(error);
    }
    var valueCursor = createCursor(null);
    var currentlyRenderingFiber$1 = null;
    var lastContextDependency = null;
    function pushProvider(providerFiber, context, nextValue) {
      push(valueCursor, context._currentValue);
      context._currentValue = nextValue;
    }
    function popProvider(context) {
      context._currentValue = valueCursor.current;
      pop(valueCursor);
    }
    function scheduleContextWorkOnParentPath(parent, renderLanes2, propagationRoot) {
      for (; null !== parent; ) {
        var alternate = parent.alternate;
        (parent.childLanes & renderLanes2) !== renderLanes2 ? (parent.childLanes |= renderLanes2, null !== alternate && (alternate.childLanes |= renderLanes2)) : null !== alternate && (alternate.childLanes & renderLanes2) !== renderLanes2 && (alternate.childLanes |= renderLanes2);
        if (parent === propagationRoot) break;
        parent = parent.return;
      }
    }
    function propagateContextChanges(workInProgress2, contexts, renderLanes2, forcePropagateEntireTree) {
      var fiber = workInProgress2.child;
      null !== fiber && (fiber.return = workInProgress2);
      for (; null !== fiber; ) {
        var list = fiber.dependencies;
        if (null !== list) {
          var nextFiber = fiber.child;
          list = list.firstContext;
          a: for (; null !== list; ) {
            var dependency = list;
            list = fiber;
            for (var i = 0; i < contexts.length; i++)
              if (dependency.context === contexts[i]) {
                list.lanes |= renderLanes2;
                dependency = list.alternate;
                null !== dependency && (dependency.lanes |= renderLanes2);
                scheduleContextWorkOnParentPath(
                  list.return,
                  renderLanes2,
                  workInProgress2
                );
                forcePropagateEntireTree || (nextFiber = null);
                break a;
              }
            list = dependency.next;
          }
        } else if (18 === fiber.tag) {
          nextFiber = fiber.return;
          if (null === nextFiber) throw Error(formatProdErrorMessage(341));
          nextFiber.lanes |= renderLanes2;
          list = nextFiber.alternate;
          null !== list && (list.lanes |= renderLanes2);
          scheduleContextWorkOnParentPath(nextFiber, renderLanes2, workInProgress2);
          nextFiber = null;
        } else nextFiber = fiber.child;
        if (null !== nextFiber) nextFiber.return = fiber;
        else
          for (nextFiber = fiber; null !== nextFiber; ) {
            if (nextFiber === workInProgress2) {
              nextFiber = null;
              break;
            }
            fiber = nextFiber.sibling;
            if (null !== fiber) {
              fiber.return = nextFiber.return;
              nextFiber = fiber;
              break;
            }
            nextFiber = nextFiber.return;
          }
        fiber = nextFiber;
      }
    }
    function propagateParentContextChanges(current, workInProgress2, renderLanes2, forcePropagateEntireTree) {
      current = null;
      for (var parent = workInProgress2, isInsidePropagationBailout = false; null !== parent; ) {
        if (!isInsidePropagationBailout) {
          if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = true;
          else if (0 !== (parent.flags & 262144)) break;
        }
        if (10 === parent.tag) {
          var currentParent = parent.alternate;
          if (null === currentParent) throw Error(formatProdErrorMessage(387));
          currentParent = currentParent.memoizedProps;
          if (null !== currentParent) {
            var context = parent.type;
            objectIs(parent.pendingProps.value, currentParent.value) || (null !== current ? current.push(context) : current = [context]);
          }
        } else if (parent === hostTransitionProviderCursor.current) {
          currentParent = parent.alternate;
          if (null === currentParent) throw Error(formatProdErrorMessage(387));
          currentParent.memoizedState.memoizedState !== parent.memoizedState.memoizedState && (null !== current ? current.push(HostTransitionContext) : current = [HostTransitionContext]);
        }
        parent = parent.return;
      }
      null !== current && propagateContextChanges(
        workInProgress2,
        current,
        renderLanes2,
        forcePropagateEntireTree
      );
      workInProgress2.flags |= 262144;
    }
    function checkIfContextChanged(currentDependencies) {
      for (currentDependencies = currentDependencies.firstContext; null !== currentDependencies; ) {
        if (!objectIs(
          currentDependencies.context._currentValue,
          currentDependencies.memoizedValue
        ))
          return true;
        currentDependencies = currentDependencies.next;
      }
      return false;
    }
    function prepareToReadContext(workInProgress2) {
      currentlyRenderingFiber$1 = workInProgress2;
      lastContextDependency = null;
      workInProgress2 = workInProgress2.dependencies;
      null !== workInProgress2 && (workInProgress2.firstContext = null);
    }
    function readContext(context) {
      return readContextForConsumer(currentlyRenderingFiber$1, context);
    }
    function readContextDuringReconciliation(consumer, context) {
      null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
      return readContextForConsumer(consumer, context);
    }
    function readContextForConsumer(consumer, context) {
      var value = context._currentValue;
      context = { context, memoizedValue: value, next: null };
      if (null === lastContextDependency) {
        if (null === consumer) throw Error(formatProdErrorMessage(308));
        lastContextDependency = context;
        consumer.dependencies = { lanes: 0, firstContext: context };
        consumer.flags |= 524288;
      } else lastContextDependency = lastContextDependency.next = context;
      return value;
    }
    var AbortControllerLocal = "undefined" !== typeof AbortController ? AbortController : function() {
      var listeners = [], signal = this.signal = {
        aborted: false,
        addEventListener: function(type, listener) {
          listeners.push(listener);
        }
      };
      this.abort = function() {
        signal.aborted = true;
        listeners.forEach(function(listener) {
          return listener();
        });
      };
    };
    var scheduleCallback$2 = Scheduler.unstable_scheduleCallback;
    var NormalPriority = Scheduler.unstable_NormalPriority;
    var CacheContext = {
      $$typeof: REACT_CONTEXT_TYPE,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function createCache() {
      return {
        controller: new AbortControllerLocal(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function releaseCache(cache) {
      cache.refCount--;
      0 === cache.refCount && scheduleCallback$2(NormalPriority, function() {
        cache.controller.abort();
      });
    }
    var currentEntangledListeners = null;
    var currentEntangledPendingCount = 0;
    var currentEntangledLane = 0;
    var currentEntangledActionThenable = null;
    function entangleAsyncAction(transition, thenable) {
      if (null === currentEntangledListeners) {
        var entangledListeners = currentEntangledListeners = [];
        currentEntangledPendingCount = 0;
        currentEntangledLane = requestTransitionLane();
        currentEntangledActionThenable = {
          status: "pending",
          value: void 0,
          then: function(resolve) {
            entangledListeners.push(resolve);
          }
        };
      }
      currentEntangledPendingCount++;
      thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
      return thenable;
    }
    function pingEngtangledActionScope() {
      if (0 === --currentEntangledPendingCount && null !== currentEntangledListeners) {
        null !== currentEntangledActionThenable && (currentEntangledActionThenable.status = "fulfilled");
        var listeners = currentEntangledListeners;
        currentEntangledListeners = null;
        currentEntangledLane = 0;
        currentEntangledActionThenable = null;
        for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
      }
    }
    function chainThenableValue(thenable, result) {
      var listeners = [], thenableWithOverride = {
        status: "pending",
        value: null,
        reason: null,
        then: function(resolve) {
          listeners.push(resolve);
        }
      };
      thenable.then(
        function() {
          thenableWithOverride.status = "fulfilled";
          thenableWithOverride.value = result;
          for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
        },
        function(error) {
          thenableWithOverride.status = "rejected";
          thenableWithOverride.reason = error;
          for (error = 0; error < listeners.length; error++)
            (0, listeners[error])(void 0);
        }
      );
      return thenableWithOverride;
    }
    var prevOnStartTransitionFinish = ReactSharedInternals.S;
    ReactSharedInternals.S = function(transition, returnValue) {
      globalMostRecentTransitionTime = now();
      "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && entangleAsyncAction(transition, returnValue);
      null !== prevOnStartTransitionFinish && prevOnStartTransitionFinish(transition, returnValue);
    };
    var resumedCache = createCursor(null);
    function peekCacheFromPool() {
      var cacheResumedFromPreviousRender = resumedCache.current;
      return null !== cacheResumedFromPreviousRender ? cacheResumedFromPreviousRender : workInProgressRoot.pooledCache;
    }
    function pushTransition(offscreenWorkInProgress, prevCachePool) {
      null === prevCachePool ? push(resumedCache, resumedCache.current) : push(resumedCache, prevCachePool.pool);
    }
    function getSuspendedCache() {
      var cacheFromPool = peekCacheFromPool();
      return null === cacheFromPool ? null : { parent: CacheContext._currentValue, pool: cacheFromPool };
    }
    var SuspenseException = Error(formatProdErrorMessage(460));
    var SuspenseyCommitException = Error(formatProdErrorMessage(474));
    var SuspenseActionException = Error(formatProdErrorMessage(542));
    var noopSuspenseyCommitThenable = { then: function() {
    } };
    function isThenableResolved(thenable) {
      thenable = thenable.status;
      return "fulfilled" === thenable || "rejected" === thenable;
    }
    function trackUsedThenable(thenableState2, thenable, index2) {
      index2 = thenableState2[index2];
      void 0 === index2 ? thenableState2.push(thenable) : index2 !== thenable && (thenable.then(noop$1, noop$1), thenable = index2);
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenableState2 = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState2), thenableState2;
        default:
          if ("string" === typeof thenable.status) thenable.then(noop$1, noop$1);
          else {
            thenableState2 = workInProgressRoot;
            if (null !== thenableState2 && 100 < thenableState2.shellSuspendCounter)
              throw Error(formatProdErrorMessage(482));
            thenableState2 = thenable;
            thenableState2.status = "pending";
            thenableState2.then(
              function(fulfilledValue) {
                if ("pending" === thenable.status) {
                  var fulfilledThenable = thenable;
                  fulfilledThenable.status = "fulfilled";
                  fulfilledThenable.value = fulfilledValue;
                }
              },
              function(error) {
                if ("pending" === thenable.status) {
                  var rejectedThenable = thenable;
                  rejectedThenable.status = "rejected";
                  rejectedThenable.reason = error;
                }
              }
            );
          }
          switch (thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenableState2 = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState2), thenableState2;
          }
          suspendedThenable = thenable;
          throw SuspenseException;
      }
    }
    function resolveLazy(lazyType) {
      try {
        var init = lazyType._init;
        return init(lazyType._payload);
      } catch (x) {
        if (null !== x && "object" === typeof x && "function" === typeof x.then)
          throw suspendedThenable = x, SuspenseException;
        throw x;
      }
    }
    var suspendedThenable = null;
    function getSuspendedThenable() {
      if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
      var thenable = suspendedThenable;
      suspendedThenable = null;
      return thenable;
    }
    function checkIfUseWrappedInAsyncCatch(rejectedReason) {
      if (rejectedReason === SuspenseException || rejectedReason === SuspenseActionException)
        throw Error(formatProdErrorMessage(483));
    }
    var thenableState$1 = null;
    var thenableIndexCounter$1 = 0;
    function unwrapThenable(thenable) {
      var index2 = thenableIndexCounter$1;
      thenableIndexCounter$1 += 1;
      null === thenableState$1 && (thenableState$1 = []);
      return trackUsedThenable(thenableState$1, thenable, index2);
    }
    function coerceRef(workInProgress2, element) {
      element = element.props.ref;
      workInProgress2.ref = void 0 !== element ? element : null;
    }
    function throwOnInvalidObjectTypeImpl(returnFiber, newChild) {
      if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
        throw Error(formatProdErrorMessage(525));
      returnFiber = Object.prototype.toString.call(newChild);
      throw Error(
        formatProdErrorMessage(
          31,
          "[object Object]" === returnFiber ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : returnFiber
        )
      );
    }
    function createChildReconciler(shouldTrackSideEffects) {
      function deleteChild(returnFiber, childToDelete) {
        if (shouldTrackSideEffects) {
          var deletions = returnFiber.deletions;
          null === deletions ? (returnFiber.deletions = [childToDelete], returnFiber.flags |= 16) : deletions.push(childToDelete);
        }
      }
      function deleteRemainingChildren(returnFiber, currentFirstChild) {
        if (!shouldTrackSideEffects) return null;
        for (; null !== currentFirstChild; )
          deleteChild(returnFiber, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
        return null;
      }
      function mapRemainingChildren(currentFirstChild) {
        for (var existingChildren = /* @__PURE__ */ new Map(); null !== currentFirstChild; )
          null !== currentFirstChild.key ? existingChildren.set(currentFirstChild.key, currentFirstChild) : existingChildren.set(currentFirstChild.index, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
        return existingChildren;
      }
      function useFiber(fiber, pendingProps) {
        fiber = createWorkInProgress(fiber, pendingProps);
        fiber.index = 0;
        fiber.sibling = null;
        return fiber;
      }
      function placeChild(newFiber, lastPlacedIndex, newIndex) {
        newFiber.index = newIndex;
        if (!shouldTrackSideEffects)
          return newFiber.flags |= 1048576, lastPlacedIndex;
        newIndex = newFiber.alternate;
        if (null !== newIndex)
          return newIndex = newIndex.index, newIndex < lastPlacedIndex ? (newFiber.flags |= 67108866, lastPlacedIndex) : newIndex;
        newFiber.flags |= 67108866;
        return lastPlacedIndex;
      }
      function placeSingleChild(newFiber) {
        shouldTrackSideEffects && null === newFiber.alternate && (newFiber.flags |= 67108866);
        return newFiber;
      }
      function updateTextNode(returnFiber, current, textContent, lanes) {
        if (null === current || 6 !== current.tag)
          return current = createFiberFromText(textContent, returnFiber.mode, lanes), current.return = returnFiber, current;
        current = useFiber(current, textContent);
        current.return = returnFiber;
        return current;
      }
      function updateElement(returnFiber, current, element, lanes) {
        var elementType = element.type;
        if (elementType === REACT_FRAGMENT_TYPE)
          return updateFragment(
            returnFiber,
            current,
            element.props.children,
            lanes,
            element.key
          );
        if (null !== current && (current.elementType === elementType || "object" === typeof elementType && null !== elementType && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === current.type))
          return current = useFiber(current, element.props), coerceRef(current, element), current.return = returnFiber, current;
        current = createFiberFromTypeAndProps(
          element.type,
          element.key,
          element.props,
          null,
          returnFiber.mode,
          lanes
        );
        coerceRef(current, element);
        current.return = returnFiber;
        return current;
      }
      function updatePortal(returnFiber, current, portal, lanes) {
        if (null === current || 4 !== current.tag || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation)
          return current = createFiberFromPortal(portal, returnFiber.mode, lanes), current.return = returnFiber, current;
        current = useFiber(current, portal.children || []);
        current.return = returnFiber;
        return current;
      }
      function updateFragment(returnFiber, current, fragment, lanes, key) {
        if (null === current || 7 !== current.tag)
          return current = createFiberFromFragment(
            fragment,
            returnFiber.mode,
            lanes,
            key
          ), current.return = returnFiber, current;
        current = useFiber(current, fragment);
        current.return = returnFiber;
        return current;
      }
      function createChild(returnFiber, newChild, lanes) {
        if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
          return newChild = createFiberFromText(
            "" + newChild,
            returnFiber.mode,
            lanes
          ), newChild.return = returnFiber, newChild;
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              return lanes = createFiberFromTypeAndProps(
                newChild.type,
                newChild.key,
                newChild.props,
                null,
                returnFiber.mode,
                lanes
              ), coerceRef(lanes, newChild), lanes.return = returnFiber, lanes;
            case REACT_PORTAL_TYPE:
              return newChild = createFiberFromPortal(
                newChild,
                returnFiber.mode,
                lanes
              ), newChild.return = returnFiber, newChild;
            case REACT_LAZY_TYPE:
              return newChild = resolveLazy(newChild), createChild(returnFiber, newChild, lanes);
          }
          if (isArrayImpl(newChild) || getIteratorFn(newChild))
            return newChild = createFiberFromFragment(
              newChild,
              returnFiber.mode,
              lanes,
              null
            ), newChild.return = returnFiber, newChild;
          if ("function" === typeof newChild.then)
            return createChild(returnFiber, unwrapThenable(newChild), lanes);
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return createChild(
              returnFiber,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectTypeImpl(returnFiber, newChild);
        }
        return null;
      }
      function updateSlot(returnFiber, oldFiber, newChild, lanes) {
        var key = null !== oldFiber ? oldFiber.key : null;
        if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
          return null !== key ? null : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              return newChild.key === key ? updateElement(returnFiber, oldFiber, newChild, lanes) : null;
            case REACT_PORTAL_TYPE:
              return newChild.key === key ? updatePortal(returnFiber, oldFiber, newChild, lanes) : null;
            case REACT_LAZY_TYPE:
              return newChild = resolveLazy(newChild), updateSlot(returnFiber, oldFiber, newChild, lanes);
          }
          if (isArrayImpl(newChild) || getIteratorFn(newChild))
            return null !== key ? null : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
          if ("function" === typeof newChild.then)
            return updateSlot(
              returnFiber,
              oldFiber,
              unwrapThenable(newChild),
              lanes
            );
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return updateSlot(
              returnFiber,
              oldFiber,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectTypeImpl(returnFiber, newChild);
        }
        return null;
      }
      function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
        if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
          return existingChildren = existingChildren.get(newIdx) || null, updateTextNode(returnFiber, existingChildren, "" + newChild, lanes);
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              return existingChildren = existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null, updateElement(returnFiber, existingChildren, newChild, lanes);
            case REACT_PORTAL_TYPE:
              return existingChildren = existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null, updatePortal(returnFiber, existingChildren, newChild, lanes);
            case REACT_LAZY_TYPE:
              return newChild = resolveLazy(newChild), updateFromMap(
                existingChildren,
                returnFiber,
                newIdx,
                newChild,
                lanes
              );
          }
          if (isArrayImpl(newChild) || getIteratorFn(newChild))
            return existingChildren = existingChildren.get(newIdx) || null, updateFragment(returnFiber, existingChildren, newChild, lanes, null);
          if ("function" === typeof newChild.then)
            return updateFromMap(
              existingChildren,
              returnFiber,
              newIdx,
              unwrapThenable(newChild),
              lanes
            );
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return updateFromMap(
              existingChildren,
              returnFiber,
              newIdx,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectTypeImpl(returnFiber, newChild);
        }
        return null;
      }
      function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
        for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null; null !== oldFiber && newIdx < newChildren.length; newIdx++) {
          oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
          var newFiber = updateSlot(
            returnFiber,
            oldFiber,
            newChildren[newIdx],
            lanes
          );
          if (null === newFiber) {
            null === oldFiber && (oldFiber = nextOldFiber);
            break;
          }
          shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
          currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
          null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
          previousNewFiber = newFiber;
          oldFiber = nextOldFiber;
        }
        if (newIdx === newChildren.length)
          return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
        if (null === oldFiber) {
          for (; newIdx < newChildren.length; newIdx++)
            oldFiber = createChild(returnFiber, newChildren[newIdx], lanes), null !== oldFiber && (currentFirstChild = placeChild(
              oldFiber,
              currentFirstChild,
              newIdx
            ), null === previousNewFiber ? resultingFirstChild = oldFiber : previousNewFiber.sibling = oldFiber, previousNewFiber = oldFiber);
          isHydrating && pushTreeFork(returnFiber, newIdx);
          return resultingFirstChild;
        }
        for (oldFiber = mapRemainingChildren(oldFiber); newIdx < newChildren.length; newIdx++)
          nextOldFiber = updateFromMap(
            oldFiber,
            returnFiber,
            newIdx,
            newChildren[newIdx],
            lanes
          ), null !== nextOldFiber && (shouldTrackSideEffects && null !== nextOldFiber.alternate && oldFiber.delete(
            null === nextOldFiber.key ? newIdx : nextOldFiber.key
          ), currentFirstChild = placeChild(
            nextOldFiber,
            currentFirstChild,
            newIdx
          ), null === previousNewFiber ? resultingFirstChild = nextOldFiber : previousNewFiber.sibling = nextOldFiber, previousNewFiber = nextOldFiber);
        shouldTrackSideEffects && oldFiber.forEach(function(child) {
          return deleteChild(returnFiber, child);
        });
        isHydrating && pushTreeFork(returnFiber, newIdx);
        return resultingFirstChild;
      }
      function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildren, lanes) {
        if (null == newChildren) throw Error(formatProdErrorMessage(151));
        for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null, step = newChildren.next(); null !== oldFiber && !step.done; newIdx++, step = newChildren.next()) {
          oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
          var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
          if (null === newFiber) {
            null === oldFiber && (oldFiber = nextOldFiber);
            break;
          }
          shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
          currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
          null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
          previousNewFiber = newFiber;
          oldFiber = nextOldFiber;
        }
        if (step.done)
          return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
        if (null === oldFiber) {
          for (; !step.done; newIdx++, step = newChildren.next())
            step = createChild(returnFiber, step.value, lanes), null !== step && (currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
          isHydrating && pushTreeFork(returnFiber, newIdx);
          return resultingFirstChild;
        }
        for (oldFiber = mapRemainingChildren(oldFiber); !step.done; newIdx++, step = newChildren.next())
          step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes), null !== step && (shouldTrackSideEffects && null !== step.alternate && oldFiber.delete(null === step.key ? newIdx : step.key), currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
        shouldTrackSideEffects && oldFiber.forEach(function(child) {
          return deleteChild(returnFiber, child);
        });
        isHydrating && pushTreeFork(returnFiber, newIdx);
        return resultingFirstChild;
      }
      function reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes) {
        "object" === typeof newChild && null !== newChild && newChild.type === REACT_FRAGMENT_TYPE && null === newChild.key && (newChild = newChild.props.children);
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              a: {
                for (var key = newChild.key; null !== currentFirstChild; ) {
                  if (currentFirstChild.key === key) {
                    key = newChild.type;
                    if (key === REACT_FRAGMENT_TYPE) {
                      if (7 === currentFirstChild.tag) {
                        deleteRemainingChildren(
                          returnFiber,
                          currentFirstChild.sibling
                        );
                        lanes = useFiber(
                          currentFirstChild,
                          newChild.props.children
                        );
                        lanes.return = returnFiber;
                        returnFiber = lanes;
                        break a;
                      }
                    } else if (currentFirstChild.elementType === key || "object" === typeof key && null !== key && key.$$typeof === REACT_LAZY_TYPE && resolveLazy(key) === currentFirstChild.type) {
                      deleteRemainingChildren(
                        returnFiber,
                        currentFirstChild.sibling
                      );
                      lanes = useFiber(currentFirstChild, newChild.props);
                      coerceRef(lanes, newChild);
                      lanes.return = returnFiber;
                      returnFiber = lanes;
                      break a;
                    }
                    deleteRemainingChildren(returnFiber, currentFirstChild);
                    break;
                  } else deleteChild(returnFiber, currentFirstChild);
                  currentFirstChild = currentFirstChild.sibling;
                }
                newChild.type === REACT_FRAGMENT_TYPE ? (lanes = createFiberFromFragment(
                  newChild.props.children,
                  returnFiber.mode,
                  lanes,
                  newChild.key
                ), lanes.return = returnFiber, returnFiber = lanes) : (lanes = createFiberFromTypeAndProps(
                  newChild.type,
                  newChild.key,
                  newChild.props,
                  null,
                  returnFiber.mode,
                  lanes
                ), coerceRef(lanes, newChild), lanes.return = returnFiber, returnFiber = lanes);
              }
              return placeSingleChild(returnFiber);
            case REACT_PORTAL_TYPE:
              a: {
                for (key = newChild.key; null !== currentFirstChild; ) {
                  if (currentFirstChild.key === key)
                    if (4 === currentFirstChild.tag && currentFirstChild.stateNode.containerInfo === newChild.containerInfo && currentFirstChild.stateNode.implementation === newChild.implementation) {
                      deleteRemainingChildren(
                        returnFiber,
                        currentFirstChild.sibling
                      );
                      lanes = useFiber(currentFirstChild, newChild.children || []);
                      lanes.return = returnFiber;
                      returnFiber = lanes;
                      break a;
                    } else {
                      deleteRemainingChildren(returnFiber, currentFirstChild);
                      break;
                    }
                  else deleteChild(returnFiber, currentFirstChild);
                  currentFirstChild = currentFirstChild.sibling;
                }
                lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
                lanes.return = returnFiber;
                returnFiber = lanes;
              }
              return placeSingleChild(returnFiber);
            case REACT_LAZY_TYPE:
              return newChild = resolveLazy(newChild), reconcileChildFibersImpl(
                returnFiber,
                currentFirstChild,
                newChild,
                lanes
              );
          }
          if (isArrayImpl(newChild))
            return reconcileChildrenArray(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes
            );
          if (getIteratorFn(newChild)) {
            key = getIteratorFn(newChild);
            if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
            newChild = key.call(newChild);
            return reconcileChildrenIterator(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes
            );
          }
          if ("function" === typeof newChild.then)
            return reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              unwrapThenable(newChild),
              lanes
            );
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectTypeImpl(returnFiber, newChild);
        }
        return "string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild ? (newChild = "" + newChild, null !== currentFirstChild && 6 === currentFirstChild.tag ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling), lanes = useFiber(currentFirstChild, newChild), lanes.return = returnFiber, returnFiber = lanes) : (deleteRemainingChildren(returnFiber, currentFirstChild), lanes = createFiberFromText(newChild, returnFiber.mode, lanes), lanes.return = returnFiber, returnFiber = lanes), placeSingleChild(returnFiber)) : deleteRemainingChildren(returnFiber, currentFirstChild);
      }
      return function(returnFiber, currentFirstChild, newChild, lanes) {
        try {
          thenableIndexCounter$1 = 0;
          var firstChildFiber = reconcileChildFibersImpl(
            returnFiber,
            currentFirstChild,
            newChild,
            lanes
          );
          thenableState$1 = null;
          return firstChildFiber;
        } catch (x) {
          if (x === SuspenseException || x === SuspenseActionException) throw x;
          var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
          fiber.lanes = lanes;
          fiber.return = returnFiber;
          return fiber;
        } finally {
        }
      };
    }
    var reconcileChildFibers = createChildReconciler(true);
    var mountChildFibers = createChildReconciler(false);
    var hasForceUpdate = false;
    function initializeUpdateQueue(fiber) {
      fiber.updateQueue = {
        baseState: fiber.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function cloneUpdateQueue(current, workInProgress2) {
      current = current.updateQueue;
      workInProgress2.updateQueue === current && (workInProgress2.updateQueue = {
        baseState: current.baseState,
        firstBaseUpdate: current.firstBaseUpdate,
        lastBaseUpdate: current.lastBaseUpdate,
        shared: current.shared,
        callbacks: null
      });
    }
    function createUpdate(lane) {
      return { lane, tag: 0, payload: null, callback: null, next: null };
    }
    function enqueueUpdate(fiber, update, lane) {
      var updateQueue = fiber.updateQueue;
      if (null === updateQueue) return null;
      updateQueue = updateQueue.shared;
      if (0 !== (executionContext & 2)) {
        var pending = updateQueue.pending;
        null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
        updateQueue.pending = update;
        update = getRootForUpdatedFiber(fiber);
        markUpdateLaneFromFiberToRoot(fiber, null, lane);
        return update;
      }
      enqueueUpdate$1(fiber, updateQueue, update, lane);
      return getRootForUpdatedFiber(fiber);
    }
    function entangleTransitions(root2, fiber, lane) {
      fiber = fiber.updateQueue;
      if (null !== fiber && (fiber = fiber.shared, 0 !== (lane & 4194048))) {
        var queueLanes = fiber.lanes;
        queueLanes &= root2.pendingLanes;
        lane |= queueLanes;
        fiber.lanes = lane;
        markRootEntangled(root2, lane);
      }
    }
    function enqueueCapturedUpdate(workInProgress2, capturedUpdate) {
      var queue = workInProgress2.updateQueue, current = workInProgress2.alternate;
      if (null !== current && (current = current.updateQueue, queue === current)) {
        var newFirst = null, newLast = null;
        queue = queue.firstBaseUpdate;
        if (null !== queue) {
          do {
            var clone = {
              lane: queue.lane,
              tag: queue.tag,
              payload: queue.payload,
              callback: null,
              next: null
            };
            null === newLast ? newFirst = newLast = clone : newLast = newLast.next = clone;
            queue = queue.next;
          } while (null !== queue);
          null === newLast ? newFirst = newLast = capturedUpdate : newLast = newLast.next = capturedUpdate;
        } else newFirst = newLast = capturedUpdate;
        queue = {
          baseState: current.baseState,
          firstBaseUpdate: newFirst,
          lastBaseUpdate: newLast,
          shared: current.shared,
          callbacks: current.callbacks
        };
        workInProgress2.updateQueue = queue;
        return;
      }
      workInProgress2 = queue.lastBaseUpdate;
      null === workInProgress2 ? queue.firstBaseUpdate = capturedUpdate : workInProgress2.next = capturedUpdate;
      queue.lastBaseUpdate = capturedUpdate;
    }
    var didReadFromEntangledAsyncAction = false;
    function suspendIfUpdateReadFromEntangledAsyncAction() {
      if (didReadFromEntangledAsyncAction) {
        var entangledActionThenable = currentEntangledActionThenable;
        if (null !== entangledActionThenable) throw entangledActionThenable;
      }
    }
    function processUpdateQueue(workInProgress$jscomp$0, props, instance$jscomp$0, renderLanes2) {
      didReadFromEntangledAsyncAction = false;
      var queue = workInProgress$jscomp$0.updateQueue;
      hasForceUpdate = false;
      var firstBaseUpdate = queue.firstBaseUpdate, lastBaseUpdate = queue.lastBaseUpdate, pendingQueue = queue.shared.pending;
      if (null !== pendingQueue) {
        queue.shared.pending = null;
        var lastPendingUpdate = pendingQueue, firstPendingUpdate = lastPendingUpdate.next;
        lastPendingUpdate.next = null;
        null === lastBaseUpdate ? firstBaseUpdate = firstPendingUpdate : lastBaseUpdate.next = firstPendingUpdate;
        lastBaseUpdate = lastPendingUpdate;
        var current = workInProgress$jscomp$0.alternate;
        null !== current && (current = current.updateQueue, pendingQueue = current.lastBaseUpdate, pendingQueue !== lastBaseUpdate && (null === pendingQueue ? current.firstBaseUpdate = firstPendingUpdate : pendingQueue.next = firstPendingUpdate, current.lastBaseUpdate = lastPendingUpdate));
      }
      if (null !== firstBaseUpdate) {
        var newState = queue.baseState;
        lastBaseUpdate = 0;
        current = firstPendingUpdate = lastPendingUpdate = null;
        pendingQueue = firstBaseUpdate;
        do {
          var updateLane = pendingQueue.lane & -536870913, isHiddenUpdate = updateLane !== pendingQueue.lane;
          if (isHiddenUpdate ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes2 & updateLane) === updateLane) {
            0 !== updateLane && updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction = true);
            null !== current && (current = current.next = {
              lane: 0,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: null,
              next: null
            });
            a: {
              var workInProgress2 = workInProgress$jscomp$0, update = pendingQueue;
              updateLane = props;
              var instance = instance$jscomp$0;
              switch (update.tag) {
                case 1:
                  workInProgress2 = update.payload;
                  if ("function" === typeof workInProgress2) {
                    newState = workInProgress2.call(instance, newState, updateLane);
                    break a;
                  }
                  newState = workInProgress2;
                  break a;
                case 3:
                  workInProgress2.flags = workInProgress2.flags & -65537 | 128;
                case 0:
                  workInProgress2 = update.payload;
                  updateLane = "function" === typeof workInProgress2 ? workInProgress2.call(instance, newState, updateLane) : workInProgress2;
                  if (null === updateLane || void 0 === updateLane) break a;
                  newState = assign({}, newState, updateLane);
                  break a;
                case 2:
                  hasForceUpdate = true;
              }
            }
            updateLane = pendingQueue.callback;
            null !== updateLane && (workInProgress$jscomp$0.flags |= 64, isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192), isHiddenUpdate = queue.callbacks, null === isHiddenUpdate ? queue.callbacks = [updateLane] : isHiddenUpdate.push(updateLane));
          } else
            isHiddenUpdate = {
              lane: updateLane,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: pendingQueue.callback,
              next: null
            }, null === current ? (firstPendingUpdate = current = isHiddenUpdate, lastPendingUpdate = newState) : current = current.next = isHiddenUpdate, lastBaseUpdate |= updateLane;
          pendingQueue = pendingQueue.next;
          if (null === pendingQueue)
            if (pendingQueue = queue.shared.pending, null === pendingQueue)
              break;
            else
              isHiddenUpdate = pendingQueue, pendingQueue = isHiddenUpdate.next, isHiddenUpdate.next = null, queue.lastBaseUpdate = isHiddenUpdate, queue.shared.pending = null;
        } while (1);
        null === current && (lastPendingUpdate = newState);
        queue.baseState = lastPendingUpdate;
        queue.firstBaseUpdate = firstPendingUpdate;
        queue.lastBaseUpdate = current;
        null === firstBaseUpdate && (queue.shared.lanes = 0);
        workInProgressRootSkippedLanes |= lastBaseUpdate;
        workInProgress$jscomp$0.lanes = lastBaseUpdate;
        workInProgress$jscomp$0.memoizedState = newState;
      }
    }
    function callCallback(callback, context) {
      if ("function" !== typeof callback)
        throw Error(formatProdErrorMessage(191, callback));
      callback.call(context);
    }
    function commitCallbacks(updateQueue, context) {
      var callbacks = updateQueue.callbacks;
      if (null !== callbacks)
        for (updateQueue.callbacks = null, updateQueue = 0; updateQueue < callbacks.length; updateQueue++)
          callCallback(callbacks[updateQueue], context);
    }
    var currentTreeHiddenStackCursor = createCursor(null);
    var prevEntangledRenderLanesCursor = createCursor(0);
    function pushHiddenContext(fiber, context) {
      fiber = entangledRenderLanes;
      push(prevEntangledRenderLanesCursor, fiber);
      push(currentTreeHiddenStackCursor, context);
      entangledRenderLanes = fiber | context.baseLanes;
    }
    function reuseHiddenContextOnStack() {
      push(prevEntangledRenderLanesCursor, entangledRenderLanes);
      push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
    }
    function popHiddenContext() {
      entangledRenderLanes = prevEntangledRenderLanesCursor.current;
      pop(currentTreeHiddenStackCursor);
      pop(prevEntangledRenderLanesCursor);
    }
    var suspenseHandlerStackCursor = createCursor(null);
    var shellBoundary = null;
    function pushPrimaryTreeSuspenseHandler(handler) {
      var current = handler.alternate;
      push(suspenseStackCursor, suspenseStackCursor.current & 1);
      push(suspenseHandlerStackCursor, handler);
      null === shellBoundary && (null === current || null !== currentTreeHiddenStackCursor.current ? shellBoundary = handler : null !== current.memoizedState && (shellBoundary = handler));
    }
    function pushDehydratedActivitySuspenseHandler(fiber) {
      push(suspenseStackCursor, suspenseStackCursor.current);
      push(suspenseHandlerStackCursor, fiber);
      null === shellBoundary && (shellBoundary = fiber);
    }
    function pushOffscreenSuspenseHandler(fiber) {
      22 === fiber.tag ? (push(suspenseStackCursor, suspenseStackCursor.current), push(suspenseHandlerStackCursor, fiber), null === shellBoundary && (shellBoundary = fiber)) : reuseSuspenseHandlerOnStack(fiber);
    }
    function reuseSuspenseHandlerOnStack() {
      push(suspenseStackCursor, suspenseStackCursor.current);
      push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
    }
    function popSuspenseHandler(fiber) {
      pop(suspenseHandlerStackCursor);
      shellBoundary === fiber && (shellBoundary = null);
      pop(suspenseStackCursor);
    }
    var suspenseStackCursor = createCursor(0);
    function findFirstSuspended(row) {
      for (var node = row; null !== node; ) {
        if (13 === node.tag) {
          var state = node.memoizedState;
          if (null !== state && (state = state.dehydrated, null === state || isSuspenseInstancePending(state) || isSuspenseInstanceFallback(state)))
            return node;
        } else if (19 === node.tag && ("forwards" === node.memoizedProps.revealOrder || "backwards" === node.memoizedProps.revealOrder || "unstable_legacy-backwards" === node.memoizedProps.revealOrder || "together" === node.memoizedProps.revealOrder)) {
          if (0 !== (node.flags & 128)) return node;
        } else if (null !== node.child) {
          node.child.return = node;
          node = node.child;
          continue;
        }
        if (node === row) break;
        for (; null === node.sibling; ) {
          if (null === node.return || node.return === row) return null;
          node = node.return;
        }
        node.sibling.return = node.return;
        node = node.sibling;
      }
      return null;
    }
    var renderLanes = 0;
    var currentlyRenderingFiber = null;
    var currentHook = null;
    var workInProgressHook = null;
    var didScheduleRenderPhaseUpdate = false;
    var didScheduleRenderPhaseUpdateDuringThisPass = false;
    var shouldDoubleInvokeUserFnsInHooksDEV = false;
    var localIdCounter = 0;
    var thenableIndexCounter = 0;
    var thenableState = null;
    var globalClientIdCounter = 0;
    function throwInvalidHookError() {
      throw Error(formatProdErrorMessage(321));
    }
    function areHookInputsEqual(nextDeps, prevDeps) {
      if (null === prevDeps) return false;
      for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
        if (!objectIs(nextDeps[i], prevDeps[i])) return false;
      return true;
    }
    function renderWithHooks(current, workInProgress2, Component, props, secondArg, nextRenderLanes) {
      renderLanes = nextRenderLanes;
      currentlyRenderingFiber = workInProgress2;
      workInProgress2.memoizedState = null;
      workInProgress2.updateQueue = null;
      workInProgress2.lanes = 0;
      ReactSharedInternals.H = null === current || null === current.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate;
      shouldDoubleInvokeUserFnsInHooksDEV = false;
      nextRenderLanes = Component(props, secondArg);
      shouldDoubleInvokeUserFnsInHooksDEV = false;
      didScheduleRenderPhaseUpdateDuringThisPass && (nextRenderLanes = renderWithHooksAgain(
        workInProgress2,
        Component,
        props,
        secondArg
      ));
      finishRenderingHooks(current);
      return nextRenderLanes;
    }
    function finishRenderingHooks(current) {
      ReactSharedInternals.H = ContextOnlyDispatcher;
      var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
      renderLanes = 0;
      workInProgressHook = currentHook = currentlyRenderingFiber = null;
      didScheduleRenderPhaseUpdate = false;
      thenableIndexCounter = 0;
      thenableState = null;
      if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
      null === current || didReceiveUpdate || (current = current.dependencies, null !== current && checkIfContextChanged(current) && (didReceiveUpdate = true));
    }
    function renderWithHooksAgain(workInProgress2, Component, props, secondArg) {
      currentlyRenderingFiber = workInProgress2;
      var numberOfReRenders = 0;
      do {
        didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
        thenableIndexCounter = 0;
        didScheduleRenderPhaseUpdateDuringThisPass = false;
        if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
        numberOfReRenders += 1;
        workInProgressHook = currentHook = null;
        if (null != workInProgress2.updateQueue) {
          var children = workInProgress2.updateQueue;
          children.lastEffect = null;
          children.events = null;
          children.stores = null;
          null != children.memoCache && (children.memoCache.index = 0);
        }
        ReactSharedInternals.H = HooksDispatcherOnRerender;
        children = Component(props, secondArg);
      } while (didScheduleRenderPhaseUpdateDuringThisPass);
      return children;
    }
    function TransitionAwareHostComponent() {
      var dispatcher = ReactSharedInternals.H, maybeThenable = dispatcher.useState()[0];
      maybeThenable = "function" === typeof maybeThenable.then ? useThenable(maybeThenable) : maybeThenable;
      dispatcher = dispatcher.useState()[0];
      (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher && (currentlyRenderingFiber.flags |= 1024);
      return maybeThenable;
    }
    function checkDidRenderIdHook() {
      var didRenderIdHook = 0 !== localIdCounter;
      localIdCounter = 0;
      return didRenderIdHook;
    }
    function bailoutHooks(current, workInProgress2, lanes) {
      workInProgress2.updateQueue = current.updateQueue;
      workInProgress2.flags &= -2053;
      current.lanes &= ~lanes;
    }
    function resetHooksOnUnwind(workInProgress2) {
      if (didScheduleRenderPhaseUpdate) {
        for (workInProgress2 = workInProgress2.memoizedState; null !== workInProgress2; ) {
          var queue = workInProgress2.queue;
          null !== queue && (queue.pending = null);
          workInProgress2 = workInProgress2.next;
        }
        didScheduleRenderPhaseUpdate = false;
      }
      renderLanes = 0;
      workInProgressHook = currentHook = currentlyRenderingFiber = null;
      didScheduleRenderPhaseUpdateDuringThisPass = false;
      thenableIndexCounter = localIdCounter = 0;
      thenableState = null;
    }
    function mountWorkInProgressHook() {
      var hook = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = hook : workInProgressHook = workInProgressHook.next = hook;
      return workInProgressHook;
    }
    function updateWorkInProgressHook() {
      if (null === currentHook) {
        var nextCurrentHook = currentlyRenderingFiber.alternate;
        nextCurrentHook = null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
      } else nextCurrentHook = currentHook.next;
      var nextWorkInProgressHook = null === workInProgressHook ? currentlyRenderingFiber.memoizedState : workInProgressHook.next;
      if (null !== nextWorkInProgressHook)
        workInProgressHook = nextWorkInProgressHook, currentHook = nextCurrentHook;
      else {
        if (null === nextCurrentHook) {
          if (null === currentlyRenderingFiber.alternate)
            throw Error(formatProdErrorMessage(467));
          throw Error(formatProdErrorMessage(310));
        }
        currentHook = nextCurrentHook;
        nextCurrentHook = {
          memoizedState: currentHook.memoizedState,
          baseState: currentHook.baseState,
          baseQueue: currentHook.baseQueue,
          queue: currentHook.queue,
          next: null
        };
        null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = nextCurrentHook : workInProgressHook = workInProgressHook.next = nextCurrentHook;
      }
      return workInProgressHook;
    }
    function createFunctionComponentUpdateQueue() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function useThenable(thenable) {
      var index2 = thenableIndexCounter;
      thenableIndexCounter += 1;
      null === thenableState && (thenableState = []);
      thenable = trackUsedThenable(thenableState, thenable, index2);
      index2 = currentlyRenderingFiber;
      null === (null === workInProgressHook ? index2.memoizedState : workInProgressHook.next) && (index2 = index2.alternate, ReactSharedInternals.H = null === index2 || null === index2.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate);
      return thenable;
    }
    function use(usable) {
      if (null !== usable && "object" === typeof usable) {
        if ("function" === typeof usable.then) return useThenable(usable);
        if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
      }
      throw Error(formatProdErrorMessage(438, String(usable)));
    }
    function useMemoCache(size) {
      var memoCache = null, updateQueue = currentlyRenderingFiber.updateQueue;
      null !== updateQueue && (memoCache = updateQueue.memoCache);
      if (null == memoCache) {
        var current = currentlyRenderingFiber.alternate;
        null !== current && (current = current.updateQueue, null !== current && (current = current.memoCache, null != current && (memoCache = {
          data: current.data.map(function(array) {
            return array.slice();
          }),
          index: 0
        })));
      }
      null == memoCache && (memoCache = { data: [], index: 0 });
      null === updateQueue && (updateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = updateQueue);
      updateQueue.memoCache = memoCache;
      updateQueue = memoCache.data[memoCache.index];
      if (void 0 === updateQueue)
        for (updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0; current < size; current++)
          updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
      memoCache.index++;
      return updateQueue;
    }
    function basicStateReducer(state, action) {
      return "function" === typeof action ? action(state) : action;
    }
    function updateReducer(reducer) {
      var hook = updateWorkInProgressHook();
      return updateReducerImpl(hook, currentHook, reducer);
    }
    function updateReducerImpl(hook, current, reducer) {
      var queue = hook.queue;
      if (null === queue) throw Error(formatProdErrorMessage(311));
      queue.lastRenderedReducer = reducer;
      var baseQueue = hook.baseQueue, pendingQueue = queue.pending;
      if (null !== pendingQueue) {
        if (null !== baseQueue) {
          var baseFirst = baseQueue.next;
          baseQueue.next = pendingQueue.next;
          pendingQueue.next = baseFirst;
        }
        current.baseQueue = baseQueue = pendingQueue;
        queue.pending = null;
      }
      pendingQueue = hook.baseState;
      if (null === baseQueue) hook.memoizedState = pendingQueue;
      else {
        current = baseQueue.next;
        var newBaseQueueFirst = baseFirst = null, newBaseQueueLast = null, update = current, didReadFromEntangledAsyncAction$60 = false;
        do {
          var updateLane = update.lane & -536870913;
          if (updateLane !== update.lane ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
            var revertLane = update.revertLane;
            if (0 === revertLane)
              null !== newBaseQueueLast && (newBaseQueueLast = newBaseQueueLast.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }), updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction$60 = true);
            else if ((renderLanes & revertLane) === revertLane) {
              update = update.next;
              revertLane === currentEntangledLane && (didReadFromEntangledAsyncAction$60 = true);
              continue;
            } else
              updateLane = {
                lane: 0,
                revertLane: update.revertLane,
                gesture: null,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = updateLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = updateLane, currentlyRenderingFiber.lanes |= revertLane, workInProgressRootSkippedLanes |= revertLane;
            updateLane = update.action;
            shouldDoubleInvokeUserFnsInHooksDEV && reducer(pendingQueue, updateLane);
            pendingQueue = update.hasEagerState ? update.eagerState : reducer(pendingQueue, updateLane);
          } else
            revertLane = {
              lane: updateLane,
              revertLane: update.revertLane,
              gesture: update.gesture,
              action: update.action,
              hasEagerState: update.hasEagerState,
              eagerState: update.eagerState,
              next: null
            }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = revertLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = revertLane, currentlyRenderingFiber.lanes |= updateLane, workInProgressRootSkippedLanes |= updateLane;
          update = update.next;
        } while (null !== update && update !== current);
        null === newBaseQueueLast ? baseFirst = pendingQueue : newBaseQueueLast.next = newBaseQueueFirst;
        if (!objectIs(pendingQueue, hook.memoizedState) && (didReceiveUpdate = true, didReadFromEntangledAsyncAction$60 && (reducer = currentEntangledActionThenable, null !== reducer)))
          throw reducer;
        hook.memoizedState = pendingQueue;
        hook.baseState = baseFirst;
        hook.baseQueue = newBaseQueueLast;
        queue.lastRenderedState = pendingQueue;
      }
      null === baseQueue && (queue.lanes = 0);
      return [hook.memoizedState, queue.dispatch];
    }
    function rerenderReducer(reducer) {
      var hook = updateWorkInProgressHook(), queue = hook.queue;
      if (null === queue) throw Error(formatProdErrorMessage(311));
      queue.lastRenderedReducer = reducer;
      var dispatch = queue.dispatch, lastRenderPhaseUpdate = queue.pending, newState = hook.memoizedState;
      if (null !== lastRenderPhaseUpdate) {
        queue.pending = null;
        var update = lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
        do
          newState = reducer(newState, update.action), update = update.next;
        while (update !== lastRenderPhaseUpdate);
        objectIs(newState, hook.memoizedState) || (didReceiveUpdate = true);
        hook.memoizedState = newState;
        null === hook.baseQueue && (hook.baseState = newState);
        queue.lastRenderedState = newState;
      }
      return [newState, dispatch];
    }
    function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
      var fiber = currentlyRenderingFiber, hook = updateWorkInProgressHook(), isHydrating$jscomp$0 = isHydrating;
      if (isHydrating$jscomp$0) {
        if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
        getServerSnapshot = getServerSnapshot();
      } else getServerSnapshot = getSnapshot();
      var snapshotChanged = !objectIs(
        (currentHook || hook).memoizedState,
        getServerSnapshot
      );
      snapshotChanged && (hook.memoizedState = getServerSnapshot, didReceiveUpdate = true);
      hook = hook.queue;
      updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [
        subscribe
      ]);
      if (hook.getSnapshot !== getSnapshot || snapshotChanged || null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1) {
        fiber.flags |= 2048;
        pushSimpleEffect(
          9,
          { destroy: void 0 },
          updateStoreInstance.bind(
            null,
            fiber,
            hook,
            getServerSnapshot,
            getSnapshot
          ),
          null
        );
        if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
        isHydrating$jscomp$0 || 0 !== (renderLanes & 127) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
      }
      return getServerSnapshot;
    }
    function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
      fiber.flags |= 16384;
      fiber = { getSnapshot, value: renderedSnapshot };
      getSnapshot = currentlyRenderingFiber.updateQueue;
      null === getSnapshot ? (getSnapshot = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = getSnapshot, getSnapshot.stores = [fiber]) : (renderedSnapshot = getSnapshot.stores, null === renderedSnapshot ? getSnapshot.stores = [fiber] : renderedSnapshot.push(fiber));
    }
    function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
      inst.value = nextSnapshot;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
    }
    function subscribeToStore(fiber, inst, subscribe) {
      return subscribe(function() {
        checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
      });
    }
    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      inst = inst.value;
      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(inst, nextValue);
      } catch (error) {
        return true;
      }
    }
    function forceStoreRerender(fiber) {
      var root2 = enqueueConcurrentRenderForLane(fiber, 2);
      null !== root2 && scheduleUpdateOnFiber(root2, fiber, 2);
    }
    function mountStateImpl(initialState) {
      var hook = mountWorkInProgressHook();
      if ("function" === typeof initialState) {
        var initialStateInitializer = initialState;
        initialState = initialStateInitializer();
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
          setIsStrictModeForDevtools(true);
          try {
            initialStateInitializer();
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
      }
      hook.memoizedState = hook.baseState = initialState;
      hook.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: basicStateReducer,
        lastRenderedState: initialState
      };
      return hook;
    }
    function updateOptimisticImpl(hook, current, passthrough, reducer) {
      hook.baseState = passthrough;
      return updateReducerImpl(
        hook,
        currentHook,
        "function" === typeof reducer ? reducer : basicStateReducer
      );
    }
    function dispatchActionState(fiber, actionQueue, setPendingState, setState, payload) {
      if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
      fiber = actionQueue.action;
      if (null !== fiber) {
        var actionNode = {
          payload,
          action: fiber,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(listener) {
            actionNode.listeners.push(listener);
          }
        };
        null !== ReactSharedInternals.T ? setPendingState(true) : actionNode.isTransition = false;
        setState(actionNode);
        setPendingState = actionQueue.pending;
        null === setPendingState ? (actionNode.next = actionQueue.pending = actionNode, runActionStateAction(actionQueue, actionNode)) : (actionNode.next = setPendingState.next, actionQueue.pending = setPendingState.next = actionNode);
      }
    }
    function runActionStateAction(actionQueue, node) {
      var action = node.action, payload = node.payload, prevState = actionQueue.state;
      if (node.isTransition) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = action(prevState, payload), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          handleActionReturnValue(actionQueue, node, returnValue);
        } catch (error) {
          onActionError(actionQueue, node, error);
        } finally {
          null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      } else
        try {
          prevTransition = action(prevState, payload), handleActionReturnValue(actionQueue, node, prevTransition);
        } catch (error$66) {
          onActionError(actionQueue, node, error$66);
        }
    }
    function handleActionReturnValue(actionQueue, node, returnValue) {
      null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then ? returnValue.then(
        function(nextState) {
          onActionSuccess(actionQueue, node, nextState);
        },
        function(error) {
          return onActionError(actionQueue, node, error);
        }
      ) : onActionSuccess(actionQueue, node, returnValue);
    }
    function onActionSuccess(actionQueue, actionNode, nextState) {
      actionNode.status = "fulfilled";
      actionNode.value = nextState;
      notifyActionListeners(actionNode);
      actionQueue.state = nextState;
      actionNode = actionQueue.pending;
      null !== actionNode && (nextState = actionNode.next, nextState === actionNode ? actionQueue.pending = null : (nextState = nextState.next, actionNode.next = nextState, runActionStateAction(actionQueue, nextState)));
    }
    function onActionError(actionQueue, actionNode, error) {
      var last = actionQueue.pending;
      actionQueue.pending = null;
      if (null !== last) {
        last = last.next;
        do
          actionNode.status = "rejected", actionNode.reason = error, notifyActionListeners(actionNode), actionNode = actionNode.next;
        while (actionNode !== last);
      }
      actionQueue.action = null;
    }
    function notifyActionListeners(actionNode) {
      actionNode = actionNode.listeners;
      for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
    }
    function actionStateReducer(oldState, newState) {
      return newState;
    }
    function mountActionState(action, initialStateProp) {
      if (isHydrating) {
        var ssrFormState = workInProgressRoot.formState;
        if (null !== ssrFormState) {
          a: {
            var JSCompiler_inline_result = currentlyRenderingFiber;
            if (isHydrating) {
              if (nextHydratableInstance) {
                b: {
                  var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
                  for (var inRootOrSingleton = rootOrSingletonContext; 8 !== JSCompiler_inline_result$jscomp$0.nodeType; ) {
                    if (!inRootOrSingleton) {
                      JSCompiler_inline_result$jscomp$0 = null;
                      break b;
                    }
                    JSCompiler_inline_result$jscomp$0 = getNextHydratable(
                      JSCompiler_inline_result$jscomp$0.nextSibling
                    );
                    if (null === JSCompiler_inline_result$jscomp$0) {
                      JSCompiler_inline_result$jscomp$0 = null;
                      break b;
                    }
                  }
                  inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
                  JSCompiler_inline_result$jscomp$0 = "F!" === inRootOrSingleton || "F" === inRootOrSingleton ? JSCompiler_inline_result$jscomp$0 : null;
                }
                if (JSCompiler_inline_result$jscomp$0) {
                  nextHydratableInstance = getNextHydratable(
                    JSCompiler_inline_result$jscomp$0.nextSibling
                  );
                  JSCompiler_inline_result = "F!" === JSCompiler_inline_result$jscomp$0.data;
                  break a;
                }
              }
              throwOnHydrationMismatch(JSCompiler_inline_result);
            }
            JSCompiler_inline_result = false;
          }
          JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
        }
      }
      ssrFormState = mountWorkInProgressHook();
      ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
      JSCompiler_inline_result = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: actionStateReducer,
        lastRenderedState: initialStateProp
      };
      ssrFormState.queue = JSCompiler_inline_result;
      ssrFormState = dispatchSetState.bind(
        null,
        currentlyRenderingFiber,
        JSCompiler_inline_result
      );
      JSCompiler_inline_result.dispatch = ssrFormState;
      JSCompiler_inline_result = mountStateImpl(false);
      inRootOrSingleton = dispatchOptimisticSetState.bind(
        null,
        currentlyRenderingFiber,
        false,
        JSCompiler_inline_result.queue
      );
      JSCompiler_inline_result = mountWorkInProgressHook();
      JSCompiler_inline_result$jscomp$0 = {
        state: initialStateProp,
        dispatch: null,
        action,
        pending: null
      };
      JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
      ssrFormState = dispatchActionState.bind(
        null,
        currentlyRenderingFiber,
        JSCompiler_inline_result$jscomp$0,
        inRootOrSingleton,
        ssrFormState
      );
      JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
      JSCompiler_inline_result.memoizedState = action;
      return [initialStateProp, ssrFormState, false];
    }
    function updateActionState(action) {
      var stateHook = updateWorkInProgressHook();
      return updateActionStateImpl(stateHook, currentHook, action);
    }
    function updateActionStateImpl(stateHook, currentStateHook, action) {
      currentStateHook = updateReducerImpl(
        stateHook,
        currentStateHook,
        actionStateReducer
      )[0];
      stateHook = updateReducer(basicStateReducer)[0];
      if ("object" === typeof currentStateHook && null !== currentStateHook && "function" === typeof currentStateHook.then)
        try {
          var state = useThenable(currentStateHook);
        } catch (x) {
          if (x === SuspenseException) throw SuspenseActionException;
          throw x;
        }
      else state = currentStateHook;
      currentStateHook = updateWorkInProgressHook();
      var actionQueue = currentStateHook.queue, dispatch = actionQueue.dispatch;
      action !== currentStateHook.memoizedState && (currentlyRenderingFiber.flags |= 2048, pushSimpleEffect(
        9,
        { destroy: void 0 },
        actionStateActionEffect.bind(null, actionQueue, action),
        null
      ));
      return [state, dispatch, stateHook];
    }
    function actionStateActionEffect(actionQueue, action) {
      actionQueue.action = action;
    }
    function rerenderActionState(action) {
      var stateHook = updateWorkInProgressHook(), currentStateHook = currentHook;
      if (null !== currentStateHook)
        return updateActionStateImpl(stateHook, currentStateHook, action);
      updateWorkInProgressHook();
      stateHook = stateHook.memoizedState;
      currentStateHook = updateWorkInProgressHook();
      var dispatch = currentStateHook.queue.dispatch;
      currentStateHook.memoizedState = action;
      return [stateHook, dispatch, false];
    }
    function pushSimpleEffect(tag, inst, create2, deps) {
      tag = { tag, create: create2, deps, inst, next: null };
      inst = currentlyRenderingFiber.updateQueue;
      null === inst && (inst = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = inst);
      create2 = inst.lastEffect;
      null === create2 ? inst.lastEffect = tag.next = tag : (deps = create2.next, create2.next = tag, tag.next = deps, inst.lastEffect = tag);
      return tag;
    }
    function updateRef() {
      return updateWorkInProgressHook().memoizedState;
    }
    function mountEffectImpl(fiberFlags, hookFlags, create2, deps) {
      var hook = mountWorkInProgressHook();
      currentlyRenderingFiber.flags |= fiberFlags;
      hook.memoizedState = pushSimpleEffect(
        1 | hookFlags,
        { destroy: void 0 },
        create2,
        void 0 === deps ? null : deps
      );
    }
    function updateEffectImpl(fiberFlags, hookFlags, create2, deps) {
      var hook = updateWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var inst = hook.memoizedState.inst;
      null !== currentHook && null !== deps && areHookInputsEqual(deps, currentHook.memoizedState.deps) ? hook.memoizedState = pushSimpleEffect(hookFlags, inst, create2, deps) : (currentlyRenderingFiber.flags |= fiberFlags, hook.memoizedState = pushSimpleEffect(
        1 | hookFlags,
        inst,
        create2,
        deps
      ));
    }
    function mountEffect(create2, deps) {
      mountEffectImpl(8390656, 8, create2, deps);
    }
    function updateEffect(create2, deps) {
      updateEffectImpl(2048, 8, create2, deps);
    }
    function useEffectEventImpl(payload) {
      currentlyRenderingFiber.flags |= 4;
      var componentUpdateQueue = currentlyRenderingFiber.updateQueue;
      if (null === componentUpdateQueue)
        componentUpdateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = componentUpdateQueue, componentUpdateQueue.events = [payload];
      else {
        var events = componentUpdateQueue.events;
        null === events ? componentUpdateQueue.events = [payload] : events.push(payload);
      }
    }
    function updateEvent(callback) {
      var ref = updateWorkInProgressHook().memoizedState;
      useEffectEventImpl({ ref, nextImpl: callback });
      return function() {
        if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
        return ref.impl.apply(void 0, arguments);
      };
    }
    function updateInsertionEffect(create2, deps) {
      return updateEffectImpl(4, 2, create2, deps);
    }
    function updateLayoutEffect(create2, deps) {
      return updateEffectImpl(4, 4, create2, deps);
    }
    function imperativeHandleEffect(create2, ref) {
      if ("function" === typeof ref) {
        create2 = create2();
        var refCleanup = ref(create2);
        return function() {
          "function" === typeof refCleanup ? refCleanup() : ref(null);
        };
      }
      if (null !== ref && void 0 !== ref)
        return create2 = create2(), ref.current = create2, function() {
          ref.current = null;
        };
    }
    function updateImperativeHandle(ref, create2, deps) {
      deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
      updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create2, ref), deps);
    }
    function mountDebugValue() {
    }
    function updateCallback(callback, deps) {
      var hook = updateWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var prevState = hook.memoizedState;
      if (null !== deps && areHookInputsEqual(deps, prevState[1]))
        return prevState[0];
      hook.memoizedState = [callback, deps];
      return callback;
    }
    function updateMemo(nextCreate, deps) {
      var hook = updateWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var prevState = hook.memoizedState;
      if (null !== deps && areHookInputsEqual(deps, prevState[1]))
        return prevState[0];
      prevState = nextCreate();
      if (shouldDoubleInvokeUserFnsInHooksDEV) {
        setIsStrictModeForDevtools(true);
        try {
          nextCreate();
        } finally {
          setIsStrictModeForDevtools(false);
        }
      }
      hook.memoizedState = [prevState, deps];
      return prevState;
    }
    function mountDeferredValueImpl(hook, value, initialValue) {
      if (void 0 === initialValue || 0 !== (renderLanes & 1073741824) && 0 === (workInProgressRootRenderLanes & 261930))
        return hook.memoizedState = value;
      hook.memoizedState = initialValue;
      hook = requestDeferredLane();
      currentlyRenderingFiber.lanes |= hook;
      workInProgressRootSkippedLanes |= hook;
      return initialValue;
    }
    function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
      if (objectIs(value, prevValue)) return value;
      if (null !== currentTreeHiddenStackCursor.current)
        return hook = mountDeferredValueImpl(hook, value, initialValue), objectIs(hook, prevValue) || (didReceiveUpdate = true), hook;
      if (0 === (renderLanes & 42) || 0 !== (renderLanes & 1073741824) && 0 === (workInProgressRootRenderLanes & 261930))
        return didReceiveUpdate = true, hook.memoizedState = value;
      hook = requestDeferredLane();
      currentlyRenderingFiber.lanes |= hook;
      workInProgressRootSkippedLanes |= hook;
      return prevValue;
    }
    function startTransition(fiber, queue, pendingState, finishedState, callback) {
      var previousPriority = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      dispatchOptimisticSetState(fiber, false, queue, pendingState);
      try {
        var returnValue = callback(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        if (null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then) {
          var thenableForFinishedState = chainThenableValue(
            returnValue,
            finishedState
          );
          dispatchSetStateInternal(
            fiber,
            queue,
            thenableForFinishedState,
            requestUpdateLane(fiber)
          );
        } else
          dispatchSetStateInternal(
            fiber,
            queue,
            finishedState,
            requestUpdateLane(fiber)
          );
      } catch (error) {
        dispatchSetStateInternal(
          fiber,
          queue,
          { then: function() {
          }, status: "rejected", reason: error },
          requestUpdateLane()
        );
      } finally {
        ReactDOMSharedInternals.p = previousPriority, null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
      }
    }
    function noop() {
    }
    function startHostTransition(formFiber, pendingState, action, formData) {
      if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
      var queue = ensureFormComponentIsStateful(formFiber).queue;
      startTransition(
        formFiber,
        queue,
        pendingState,
        sharedNotPendingObject,
        null === action ? noop : function() {
          requestFormReset$1(formFiber);
          return action(formData);
        }
      );
    }
    function ensureFormComponentIsStateful(formFiber) {
      var existingStateHook = formFiber.memoizedState;
      if (null !== existingStateHook) return existingStateHook;
      existingStateHook = {
        memoizedState: sharedNotPendingObject,
        baseState: sharedNotPendingObject,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: basicStateReducer,
          lastRenderedState: sharedNotPendingObject
        },
        next: null
      };
      var initialResetState = {};
      existingStateHook.next = {
        memoizedState: initialResetState,
        baseState: initialResetState,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: basicStateReducer,
          lastRenderedState: initialResetState
        },
        next: null
      };
      formFiber.memoizedState = existingStateHook;
      formFiber = formFiber.alternate;
      null !== formFiber && (formFiber.memoizedState = existingStateHook);
      return existingStateHook;
    }
    function requestFormReset$1(formFiber) {
      var stateHook = ensureFormComponentIsStateful(formFiber);
      null === stateHook.next && (stateHook = formFiber.alternate.memoizedState);
      dispatchSetStateInternal(
        formFiber,
        stateHook.next.queue,
        {},
        requestUpdateLane()
      );
    }
    function useHostTransitionStatus() {
      return readContext(HostTransitionContext);
    }
    function updateId() {
      return updateWorkInProgressHook().memoizedState;
    }
    function updateRefresh() {
      return updateWorkInProgressHook().memoizedState;
    }
    function refreshCache(fiber) {
      for (var provider = fiber.return; null !== provider; ) {
        switch (provider.tag) {
          case 24:
          case 3:
            var lane = requestUpdateLane();
            fiber = createUpdate(lane);
            var root$69 = enqueueUpdate(provider, fiber, lane);
            null !== root$69 && (scheduleUpdateOnFiber(root$69, provider, lane), entangleTransitions(root$69, provider, lane));
            provider = { cache: createCache() };
            fiber.payload = provider;
            return;
        }
        provider = provider.return;
      }
    }
    function dispatchReducerAction(fiber, queue, action) {
      var lane = requestUpdateLane();
      action = {
        lane,
        revertLane: 0,
        gesture: null,
        action,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      isRenderPhaseUpdate(fiber) ? enqueueRenderPhaseUpdate(queue, action) : (action = enqueueConcurrentHookUpdate(fiber, queue, action, lane), null !== action && (scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane)));
    }
    function dispatchSetState(fiber, queue, action) {
      var lane = requestUpdateLane();
      dispatchSetStateInternal(fiber, queue, action, lane);
    }
    function dispatchSetStateInternal(fiber, queue, action, lane) {
      var update = {
        lane,
        revertLane: 0,
        gesture: null,
        action,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
      else {
        var alternate = fiber.alternate;
        if (0 === fiber.lanes && (null === alternate || 0 === alternate.lanes) && (alternate = queue.lastRenderedReducer, null !== alternate))
          try {
            var currentState = queue.lastRenderedState, eagerState = alternate(currentState, action);
            update.hasEagerState = true;
            update.eagerState = eagerState;
            if (objectIs(eagerState, currentState))
              return enqueueUpdate$1(fiber, queue, update, 0), null === workInProgressRoot && finishQueueingConcurrentUpdates(), false;
          } catch (error) {
          } finally {
          }
        action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
        if (null !== action)
          return scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane), true;
      }
      return false;
    }
    function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
      action = {
        lane: 2,
        revertLane: requestTransitionLane(),
        gesture: null,
        action,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (isRenderPhaseUpdate(fiber)) {
        if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
      } else
        throwIfDuringRender = enqueueConcurrentHookUpdate(
          fiber,
          queue,
          action,
          2
        ), null !== throwIfDuringRender && scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
    }
    function isRenderPhaseUpdate(fiber) {
      var alternate = fiber.alternate;
      return fiber === currentlyRenderingFiber || null !== alternate && alternate === currentlyRenderingFiber;
    }
    function enqueueRenderPhaseUpdate(queue, update) {
      didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
      var pending = queue.pending;
      null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
      queue.pending = update;
    }
    function entangleTransitionUpdate(root2, queue, lane) {
      if (0 !== (lane & 4194048)) {
        var queueLanes = queue.lanes;
        queueLanes &= root2.pendingLanes;
        lane |= queueLanes;
        queue.lanes = lane;
        markRootEntangled(root2, lane);
      }
    }
    var ContextOnlyDispatcher = {
      readContext,
      use,
      useCallback: throwInvalidHookError,
      useContext: throwInvalidHookError,
      useEffect: throwInvalidHookError,
      useImperativeHandle: throwInvalidHookError,
      useLayoutEffect: throwInvalidHookError,
      useInsertionEffect: throwInvalidHookError,
      useMemo: throwInvalidHookError,
      useReducer: throwInvalidHookError,
      useRef: throwInvalidHookError,
      useState: throwInvalidHookError,
      useDebugValue: throwInvalidHookError,
      useDeferredValue: throwInvalidHookError,
      useTransition: throwInvalidHookError,
      useSyncExternalStore: throwInvalidHookError,
      useId: throwInvalidHookError,
      useHostTransitionStatus: throwInvalidHookError,
      useFormState: throwInvalidHookError,
      useActionState: throwInvalidHookError,
      useOptimistic: throwInvalidHookError,
      useMemoCache: throwInvalidHookError,
      useCacheRefresh: throwInvalidHookError
    };
    ContextOnlyDispatcher.useEffectEvent = throwInvalidHookError;
    var HooksDispatcherOnMount = {
      readContext,
      use,
      useCallback: function(callback, deps) {
        mountWorkInProgressHook().memoizedState = [
          callback,
          void 0 === deps ? null : deps
        ];
        return callback;
      },
      useContext: readContext,
      useEffect: mountEffect,
      useImperativeHandle: function(ref, create2, deps) {
        deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
        mountEffectImpl(
          4194308,
          4,
          imperativeHandleEffect.bind(null, create2, ref),
          deps
        );
      },
      useLayoutEffect: function(create2, deps) {
        return mountEffectImpl(4194308, 4, create2, deps);
      },
      useInsertionEffect: function(create2, deps) {
        mountEffectImpl(4, 2, create2, deps);
      },
      useMemo: function(nextCreate, deps) {
        var hook = mountWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var nextValue = nextCreate();
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
          setIsStrictModeForDevtools(true);
          try {
            nextCreate();
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
        hook.memoizedState = [nextValue, deps];
        return nextValue;
      },
      useReducer: function(reducer, initialArg, init) {
        var hook = mountWorkInProgressHook();
        if (void 0 !== init) {
          var initialState = init(initialArg);
          if (shouldDoubleInvokeUserFnsInHooksDEV) {
            setIsStrictModeForDevtools(true);
            try {
              init(initialArg);
            } finally {
              setIsStrictModeForDevtools(false);
            }
          }
        } else initialState = initialArg;
        hook.memoizedState = hook.baseState = initialState;
        reducer = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: reducer,
          lastRenderedState: initialState
        };
        hook.queue = reducer;
        reducer = reducer.dispatch = dispatchReducerAction.bind(
          null,
          currentlyRenderingFiber,
          reducer
        );
        return [hook.memoizedState, reducer];
      },
      useRef: function(initialValue) {
        var hook = mountWorkInProgressHook();
        initialValue = { current: initialValue };
        return hook.memoizedState = initialValue;
      },
      useState: function(initialState) {
        initialState = mountStateImpl(initialState);
        var queue = initialState.queue, dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
        queue.dispatch = dispatch;
        return [initialState.memoizedState, dispatch];
      },
      useDebugValue: mountDebugValue,
      useDeferredValue: function(value, initialValue) {
        var hook = mountWorkInProgressHook();
        return mountDeferredValueImpl(hook, value, initialValue);
      },
      useTransition: function() {
        var stateHook = mountStateImpl(false);
        stateHook = startTransition.bind(
          null,
          currentlyRenderingFiber,
          stateHook.queue,
          true,
          false
        );
        mountWorkInProgressHook().memoizedState = stateHook;
        return [false, stateHook];
      },
      useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
        var fiber = currentlyRenderingFiber, hook = mountWorkInProgressHook();
        if (isHydrating) {
          if (void 0 === getServerSnapshot)
            throw Error(formatProdErrorMessage(407));
          getServerSnapshot = getServerSnapshot();
        } else {
          getServerSnapshot = getSnapshot();
          if (null === workInProgressRoot)
            throw Error(formatProdErrorMessage(349));
          0 !== (workInProgressRootRenderLanes & 127) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
        }
        hook.memoizedState = getServerSnapshot;
        var inst = { value: getServerSnapshot, getSnapshot };
        hook.queue = inst;
        mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
          subscribe
        ]);
        fiber.flags |= 2048;
        pushSimpleEffect(
          9,
          { destroy: void 0 },
          updateStoreInstance.bind(
            null,
            fiber,
            inst,
            getServerSnapshot,
            getSnapshot
          ),
          null
        );
        return getServerSnapshot;
      },
      useId: function() {
        var hook = mountWorkInProgressHook(), identifierPrefix = workInProgressRoot.identifierPrefix;
        if (isHydrating) {
          var JSCompiler_inline_result = treeContextOverflow;
          var idWithLeadingBit = treeContextId;
          JSCompiler_inline_result = (idWithLeadingBit & ~(1 << 32 - clz32(idWithLeadingBit) - 1)).toString(32) + JSCompiler_inline_result;
          identifierPrefix = "_" + identifierPrefix + "R_" + JSCompiler_inline_result;
          JSCompiler_inline_result = localIdCounter++;
          0 < JSCompiler_inline_result && (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
          identifierPrefix += "_";
        } else
          JSCompiler_inline_result = globalClientIdCounter++, identifierPrefix = "_" + identifierPrefix + "r_" + JSCompiler_inline_result.toString(32) + "_";
        return hook.memoizedState = identifierPrefix;
      },
      useHostTransitionStatus,
      useFormState: mountActionState,
      useActionState: mountActionState,
      useOptimistic: function(passthrough) {
        var hook = mountWorkInProgressHook();
        hook.memoizedState = hook.baseState = passthrough;
        var queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        hook.queue = queue;
        hook = dispatchOptimisticSetState.bind(
          null,
          currentlyRenderingFiber,
          true,
          queue
        );
        queue.dispatch = hook;
        return [passthrough, hook];
      },
      useMemoCache,
      useCacheRefresh: function() {
        return mountWorkInProgressHook().memoizedState = refreshCache.bind(
          null,
          currentlyRenderingFiber
        );
      },
      useEffectEvent: function(callback) {
        var hook = mountWorkInProgressHook(), ref = { impl: callback };
        hook.memoizedState = ref;
        return function() {
          if (0 !== (executionContext & 2))
            throw Error(formatProdErrorMessage(440));
          return ref.impl.apply(void 0, arguments);
        };
      }
    };
    var HooksDispatcherOnUpdate = {
      readContext,
      use,
      useCallback: updateCallback,
      useContext: readContext,
      useEffect: updateEffect,
      useImperativeHandle: updateImperativeHandle,
      useInsertionEffect: updateInsertionEffect,
      useLayoutEffect: updateLayoutEffect,
      useMemo: updateMemo,
      useReducer: updateReducer,
      useRef: updateRef,
      useState: function() {
        return updateReducer(basicStateReducer);
      },
      useDebugValue: mountDebugValue,
      useDeferredValue: function(value, initialValue) {
        var hook = updateWorkInProgressHook();
        return updateDeferredValueImpl(
          hook,
          currentHook.memoizedState,
          value,
          initialValue
        );
      },
      useTransition: function() {
        var booleanOrThenable = updateReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
        return [
          "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
          start
        ];
      },
      useSyncExternalStore: updateSyncExternalStore,
      useId: updateId,
      useHostTransitionStatus,
      useFormState: updateActionState,
      useActionState: updateActionState,
      useOptimistic: function(passthrough, reducer) {
        var hook = updateWorkInProgressHook();
        return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
      },
      useMemoCache,
      useCacheRefresh: updateRefresh
    };
    HooksDispatcherOnUpdate.useEffectEvent = updateEvent;
    var HooksDispatcherOnRerender = {
      readContext,
      use,
      useCallback: updateCallback,
      useContext: readContext,
      useEffect: updateEffect,
      useImperativeHandle: updateImperativeHandle,
      useInsertionEffect: updateInsertionEffect,
      useLayoutEffect: updateLayoutEffect,
      useMemo: updateMemo,
      useReducer: rerenderReducer,
      useRef: updateRef,
      useState: function() {
        return rerenderReducer(basicStateReducer);
      },
      useDebugValue: mountDebugValue,
      useDeferredValue: function(value, initialValue) {
        var hook = updateWorkInProgressHook();
        return null === currentHook ? mountDeferredValueImpl(hook, value, initialValue) : updateDeferredValueImpl(
          hook,
          currentHook.memoizedState,
          value,
          initialValue
        );
      },
      useTransition: function() {
        var booleanOrThenable = rerenderReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
        return [
          "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
          start
        ];
      },
      useSyncExternalStore: updateSyncExternalStore,
      useId: updateId,
      useHostTransitionStatus,
      useFormState: rerenderActionState,
      useActionState: rerenderActionState,
      useOptimistic: function(passthrough, reducer) {
        var hook = updateWorkInProgressHook();
        if (null !== currentHook)
          return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
        hook.baseState = passthrough;
        return [passthrough, hook.queue.dispatch];
      },
      useMemoCache,
      useCacheRefresh: updateRefresh
    };
    HooksDispatcherOnRerender.useEffectEvent = updateEvent;
    function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
      ctor = workInProgress2.memoizedState;
      getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
      getDerivedStateFromProps = null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps ? ctor : assign({}, ctor, getDerivedStateFromProps);
      workInProgress2.memoizedState = getDerivedStateFromProps;
      0 === workInProgress2.lanes && (workInProgress2.updateQueue.baseState = getDerivedStateFromProps);
    }
    var classComponentUpdater = {
      enqueueSetState: function(inst, payload, callback) {
        inst = inst._reactInternals;
        var lane = requestUpdateLane(), update = createUpdate(lane);
        update.payload = payload;
        void 0 !== callback && null !== callback && (update.callback = callback);
        payload = enqueueUpdate(inst, update, lane);
        null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
      },
      enqueueReplaceState: function(inst, payload, callback) {
        inst = inst._reactInternals;
        var lane = requestUpdateLane(), update = createUpdate(lane);
        update.tag = 1;
        update.payload = payload;
        void 0 !== callback && null !== callback && (update.callback = callback);
        payload = enqueueUpdate(inst, update, lane);
        null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
      },
      enqueueForceUpdate: function(inst, callback) {
        inst = inst._reactInternals;
        var lane = requestUpdateLane(), update = createUpdate(lane);
        update.tag = 2;
        void 0 !== callback && null !== callback && (update.callback = callback);
        callback = enqueueUpdate(inst, update, lane);
        null !== callback && (scheduleUpdateOnFiber(callback, inst, lane), entangleTransitions(callback, inst, lane));
      }
    };
    function checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) {
      workInProgress2 = workInProgress2.stateNode;
      return "function" === typeof workInProgress2.shouldComponentUpdate ? workInProgress2.shouldComponentUpdate(newProps, newState, nextContext) : ctor.prototype && ctor.prototype.isPureReactComponent ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState) : true;
    }
    function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
      workInProgress2 = instance.state;
      "function" === typeof instance.componentWillReceiveProps && instance.componentWillReceiveProps(newProps, nextContext);
      "function" === typeof instance.UNSAFE_componentWillReceiveProps && instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
      instance.state !== workInProgress2 && classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
    }
    function resolveClassComponentProps(Component, baseProps) {
      var newProps = baseProps;
      if ("ref" in baseProps) {
        newProps = {};
        for (var propName in baseProps)
          "ref" !== propName && (newProps[propName] = baseProps[propName]);
      }
      if (Component = Component.defaultProps) {
        newProps === baseProps && (newProps = assign({}, newProps));
        for (var propName$73 in Component)
          void 0 === newProps[propName$73] && (newProps[propName$73] = Component[propName$73]);
      }
      return newProps;
    }
    function defaultOnUncaughtError(error) {
      reportGlobalError(error);
    }
    function defaultOnCaughtError(error) {
      console.error(error);
    }
    function defaultOnRecoverableError(error) {
      reportGlobalError(error);
    }
    function logUncaughtError(root2, errorInfo) {
      try {
        var onUncaughtError = root2.onUncaughtError;
        onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
      } catch (e$74) {
        setTimeout(function() {
          throw e$74;
        });
      }
    }
    function logCaughtError(root2, boundary, errorInfo) {
      try {
        var onCaughtError = root2.onCaughtError;
        onCaughtError(errorInfo.value, {
          componentStack: errorInfo.stack,
          errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
        });
      } catch (e$75) {
        setTimeout(function() {
          throw e$75;
        });
      }
    }
    function createRootErrorUpdate(root2, errorInfo, lane) {
      lane = createUpdate(lane);
      lane.tag = 3;
      lane.payload = { element: null };
      lane.callback = function() {
        logUncaughtError(root2, errorInfo);
      };
      return lane;
    }
    function createClassErrorUpdate(lane) {
      lane = createUpdate(lane);
      lane.tag = 3;
      return lane;
    }
    function initializeClassErrorUpdate(update, root2, fiber, errorInfo) {
      var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
      if ("function" === typeof getDerivedStateFromError) {
        var error = errorInfo.value;
        update.payload = function() {
          return getDerivedStateFromError(error);
        };
        update.callback = function() {
          logCaughtError(root2, fiber, errorInfo);
        };
      }
      var inst = fiber.stateNode;
      null !== inst && "function" === typeof inst.componentDidCatch && (update.callback = function() {
        logCaughtError(root2, fiber, errorInfo);
        "function" !== typeof getDerivedStateFromError && (null === legacyErrorBoundariesThatAlreadyFailed ? legacyErrorBoundariesThatAlreadyFailed = /* @__PURE__ */ new Set([this]) : legacyErrorBoundariesThatAlreadyFailed.add(this));
        var stack = errorInfo.stack;
        this.componentDidCatch(errorInfo.value, {
          componentStack: null !== stack ? stack : ""
        });
      });
    }
    function throwException(root2, returnFiber, sourceFiber, value, rootRenderLanes) {
      sourceFiber.flags |= 32768;
      if (null !== value && "object" === typeof value && "function" === typeof value.then) {
        returnFiber = sourceFiber.alternate;
        null !== returnFiber && propagateParentContextChanges(
          returnFiber,
          sourceFiber,
          rootRenderLanes,
          true
        );
        sourceFiber = suspenseHandlerStackCursor.current;
        if (null !== sourceFiber) {
          switch (sourceFiber.tag) {
            case 31:
            case 13:
              return null === shellBoundary ? renderDidSuspendDelayIfPossible() : null === sourceFiber.alternate && 0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 3), sourceFiber.flags &= -257, sourceFiber.flags |= 65536, sourceFiber.lanes = rootRenderLanes, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? sourceFiber.updateQueue = /* @__PURE__ */ new Set([value]) : returnFiber.add(value), attachPingListener(root2, value, rootRenderLanes)), false;
            case 22:
              return sourceFiber.flags |= 65536, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? (returnFiber = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([value])
              }, sourceFiber.updateQueue = returnFiber) : (sourceFiber = returnFiber.retryQueue, null === sourceFiber ? returnFiber.retryQueue = /* @__PURE__ */ new Set([value]) : sourceFiber.add(value)), attachPingListener(root2, value, rootRenderLanes)), false;
          }
          throw Error(formatProdErrorMessage(435, sourceFiber.tag));
        }
        attachPingListener(root2, value, rootRenderLanes);
        renderDidSuspendDelayIfPossible();
        return false;
      }
      if (isHydrating)
        return returnFiber = suspenseHandlerStackCursor.current, null !== returnFiber ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256), returnFiber.flags |= 65536, returnFiber.lanes = rootRenderLanes, value !== HydrationMismatchException && (root2 = Error(formatProdErrorMessage(422), { cause: value }), queueHydrationError(createCapturedValueAtFiber(root2, sourceFiber)))) : (value !== HydrationMismatchException && (returnFiber = Error(formatProdErrorMessage(423), {
          cause: value
        }), queueHydrationError(
          createCapturedValueAtFiber(returnFiber, sourceFiber)
        )), root2 = root2.current.alternate, root2.flags |= 65536, rootRenderLanes &= -rootRenderLanes, root2.lanes |= rootRenderLanes, value = createCapturedValueAtFiber(value, sourceFiber), rootRenderLanes = createRootErrorUpdate(
          root2.stateNode,
          value,
          rootRenderLanes
        ), enqueueCapturedUpdate(root2, rootRenderLanes), 4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2)), false;
      var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
      wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
      null === workInProgressRootConcurrentErrors ? workInProgressRootConcurrentErrors = [wrapperError] : workInProgressRootConcurrentErrors.push(wrapperError);
      4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
      if (null === returnFiber) return true;
      value = createCapturedValueAtFiber(value, sourceFiber);
      sourceFiber = returnFiber;
      do {
        switch (sourceFiber.tag) {
          case 3:
            return sourceFiber.flags |= 65536, root2 = rootRenderLanes & -rootRenderLanes, sourceFiber.lanes |= root2, root2 = createRootErrorUpdate(sourceFiber.stateNode, value, root2), enqueueCapturedUpdate(sourceFiber, root2), false;
          case 1:
            if (returnFiber = sourceFiber.type, wrapperError = sourceFiber.stateNode, 0 === (sourceFiber.flags & 128) && ("function" === typeof returnFiber.getDerivedStateFromError || null !== wrapperError && "function" === typeof wrapperError.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError))))
              return sourceFiber.flags |= 65536, rootRenderLanes &= -rootRenderLanes, sourceFiber.lanes |= rootRenderLanes, rootRenderLanes = createClassErrorUpdate(rootRenderLanes), initializeClassErrorUpdate(
                rootRenderLanes,
                root2,
                sourceFiber,
                value
              ), enqueueCapturedUpdate(sourceFiber, rootRenderLanes), false;
        }
        sourceFiber = sourceFiber.return;
      } while (null !== sourceFiber);
      return false;
    }
    var SelectiveHydrationException = Error(formatProdErrorMessage(461));
    var didReceiveUpdate = false;
    function reconcileChildren(current, workInProgress2, nextChildren, renderLanes2) {
      workInProgress2.child = null === current ? mountChildFibers(workInProgress2, null, nextChildren, renderLanes2) : reconcileChildFibers(
        workInProgress2,
        current.child,
        nextChildren,
        renderLanes2
      );
    }
    function updateForwardRef(current, workInProgress2, Component, nextProps, renderLanes2) {
      Component = Component.render;
      var ref = workInProgress2.ref;
      if ("ref" in nextProps) {
        var propsWithoutRef = {};
        for (var key in nextProps)
          "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
      } else propsWithoutRef = nextProps;
      prepareToReadContext(workInProgress2);
      nextProps = renderWithHooks(
        current,
        workInProgress2,
        Component,
        propsWithoutRef,
        ref,
        renderLanes2
      );
      key = checkDidRenderIdHook();
      if (null !== current && !didReceiveUpdate)
        return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      isHydrating && key && pushMaterializedTreeId(workInProgress2);
      workInProgress2.flags |= 1;
      reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
      return workInProgress2.child;
    }
    function updateMemoComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      if (null === current) {
        var type = Component.type;
        if ("function" === typeof type && !shouldConstruct(type) && void 0 === type.defaultProps && null === Component.compare)
          return workInProgress2.tag = 15, workInProgress2.type = type, updateSimpleMemoComponent(
            current,
            workInProgress2,
            type,
            nextProps,
            renderLanes2
          );
        current = createFiberFromTypeAndProps(
          Component.type,
          null,
          nextProps,
          workInProgress2,
          workInProgress2.mode,
          renderLanes2
        );
        current.ref = workInProgress2.ref;
        current.return = workInProgress2;
        return workInProgress2.child = current;
      }
      type = current.child;
      if (!checkScheduledUpdateOrContext(current, renderLanes2)) {
        var prevProps = type.memoizedProps;
        Component = Component.compare;
        Component = null !== Component ? Component : shallowEqual;
        if (Component(prevProps, nextProps) && current.ref === workInProgress2.ref)
          return bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      }
      workInProgress2.flags |= 1;
      current = createWorkInProgress(type, nextProps);
      current.ref = workInProgress2.ref;
      current.return = workInProgress2;
      return workInProgress2.child = current;
    }
    function updateSimpleMemoComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      if (null !== current) {
        var prevProps = current.memoizedProps;
        if (shallowEqual(prevProps, nextProps) && current.ref === workInProgress2.ref)
          if (didReceiveUpdate = false, workInProgress2.pendingProps = nextProps = prevProps, checkScheduledUpdateOrContext(current, renderLanes2))
            0 !== (current.flags & 131072) && (didReceiveUpdate = true);
          else
            return workInProgress2.lanes = current.lanes, bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      }
      return updateFunctionComponent(
        current,
        workInProgress2,
        Component,
        nextProps,
        renderLanes2
      );
    }
    function updateOffscreenComponent(current, workInProgress2, renderLanes2, nextProps) {
      var nextChildren = nextProps.children, prevState = null !== current ? current.memoizedState : null;
      null === current && null === workInProgress2.stateNode && (workInProgress2.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      });
      if ("hidden" === nextProps.mode) {
        if (0 !== (workInProgress2.flags & 128)) {
          prevState = null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2;
          if (null !== current) {
            nextProps = workInProgress2.child = current.child;
            for (nextChildren = 0; null !== nextProps; )
              nextChildren = nextChildren | nextProps.lanes | nextProps.childLanes, nextProps = nextProps.sibling;
            nextProps = nextChildren & ~prevState;
          } else nextProps = 0, workInProgress2.child = null;
          return deferHiddenOffscreenComponent(
            current,
            workInProgress2,
            prevState,
            renderLanes2,
            nextProps
          );
        }
        if (0 !== (renderLanes2 & 536870912))
          workInProgress2.memoizedState = { baseLanes: 0, cachePool: null }, null !== current && pushTransition(
            workInProgress2,
            null !== prevState ? prevState.cachePool : null
          ), null !== prevState ? pushHiddenContext(workInProgress2, prevState) : reuseHiddenContextOnStack(), pushOffscreenSuspenseHandler(workInProgress2);
        else
          return nextProps = workInProgress2.lanes = 536870912, deferHiddenOffscreenComponent(
            current,
            workInProgress2,
            null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2,
            renderLanes2,
            nextProps
          );
      } else
        null !== prevState ? (pushTransition(workInProgress2, prevState.cachePool), pushHiddenContext(workInProgress2, prevState), reuseSuspenseHandlerOnStack(workInProgress2), workInProgress2.memoizedState = null) : (null !== current && pushTransition(workInProgress2, null), reuseHiddenContextOnStack(), reuseSuspenseHandlerOnStack(workInProgress2));
      reconcileChildren(current, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    function bailoutOffscreenComponent(current, workInProgress2) {
      null !== current && 22 === current.tag || null !== workInProgress2.stateNode || (workInProgress2.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      });
      return workInProgress2.sibling;
    }
    function deferHiddenOffscreenComponent(current, workInProgress2, nextBaseLanes, renderLanes2, remainingChildLanes) {
      var JSCompiler_inline_result = peekCacheFromPool();
      JSCompiler_inline_result = null === JSCompiler_inline_result ? null : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
      workInProgress2.memoizedState = {
        baseLanes: nextBaseLanes,
        cachePool: JSCompiler_inline_result
      };
      null !== current && pushTransition(workInProgress2, null);
      reuseHiddenContextOnStack();
      pushOffscreenSuspenseHandler(workInProgress2);
      null !== current && propagateParentContextChanges(current, workInProgress2, renderLanes2, true);
      workInProgress2.childLanes = remainingChildLanes;
      return null;
    }
    function mountActivityChildren(workInProgress2, nextProps) {
      nextProps = mountWorkInProgressOffscreenFiber(
        { mode: nextProps.mode, children: nextProps.children },
        workInProgress2.mode
      );
      nextProps.ref = workInProgress2.ref;
      workInProgress2.child = nextProps;
      nextProps.return = workInProgress2;
      return nextProps;
    }
    function retryActivityComponentWithoutHydrating(current, workInProgress2, renderLanes2) {
      reconcileChildFibers(workInProgress2, current.child, null, renderLanes2);
      current = mountActivityChildren(workInProgress2, workInProgress2.pendingProps);
      current.flags |= 2;
      popSuspenseHandler(workInProgress2);
      workInProgress2.memoizedState = null;
      return current;
    }
    function updateActivityComponent(current, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps, didSuspend = 0 !== (workInProgress2.flags & 128);
      workInProgress2.flags &= -129;
      if (null === current) {
        if (isHydrating) {
          if ("hidden" === nextProps.mode)
            return current = mountActivityChildren(workInProgress2, nextProps), workInProgress2.lanes = 536870912, bailoutOffscreenComponent(null, current);
          pushDehydratedActivitySuspenseHandler(workInProgress2);
          (current = nextHydratableInstance) ? (current = canHydrateHydrationBoundary(
            current,
            rootOrSingletonContext
          ), current = null !== current && "&" === current.data ? current : null, null !== current && (workInProgress2.memoizedState = {
            dehydrated: current,
            treeContext: null !== treeContextProvider ? { id: treeContextId, overflow: treeContextOverflow } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, renderLanes2 = createFiberFromDehydratedFragment(current), renderLanes2.return = workInProgress2, workInProgress2.child = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null)) : current = null;
          if (null === current) throw throwOnHydrationMismatch(workInProgress2);
          workInProgress2.lanes = 536870912;
          return null;
        }
        return mountActivityChildren(workInProgress2, nextProps);
      }
      var prevState = current.memoizedState;
      if (null !== prevState) {
        var dehydrated = prevState.dehydrated;
        pushDehydratedActivitySuspenseHandler(workInProgress2);
        if (didSuspend)
          if (workInProgress2.flags & 256)
            workInProgress2.flags &= -257, workInProgress2 = retryActivityComponentWithoutHydrating(
              current,
              workInProgress2,
              renderLanes2
            );
          else if (null !== workInProgress2.memoizedState)
            workInProgress2.child = current.child, workInProgress2.flags |= 128, workInProgress2 = null;
          else throw Error(formatProdErrorMessage(558));
        else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress2, renderLanes2, false), didSuspend = 0 !== (renderLanes2 & current.childLanes), didReceiveUpdate || didSuspend) {
          nextProps = workInProgressRoot;
          if (null !== nextProps && (dehydrated = getBumpedLaneForHydration(nextProps, renderLanes2), 0 !== dehydrated && dehydrated !== prevState.retryLane))
            throw prevState.retryLane = dehydrated, enqueueConcurrentRenderForLane(current, dehydrated), scheduleUpdateOnFiber(nextProps, current, dehydrated), SelectiveHydrationException;
          renderDidSuspendDelayIfPossible();
          workInProgress2 = retryActivityComponentWithoutHydrating(
            current,
            workInProgress2,
            renderLanes2
          );
        } else
          current = prevState.treeContext, nextHydratableInstance = getNextHydratable(dehydrated.nextSibling), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, rootOrSingletonContext = false, null !== current && restoreSuspendedTreeContext(workInProgress2, current), workInProgress2 = mountActivityChildren(workInProgress2, nextProps), workInProgress2.flags |= 4096;
        return workInProgress2;
      }
      current = createWorkInProgress(current.child, {
        mode: nextProps.mode,
        children: nextProps.children
      });
      current.ref = workInProgress2.ref;
      workInProgress2.child = current;
      current.return = workInProgress2;
      return current;
    }
    function markRef(current, workInProgress2) {
      var ref = workInProgress2.ref;
      if (null === ref)
        null !== current && null !== current.ref && (workInProgress2.flags |= 4194816);
      else {
        if ("function" !== typeof ref && "object" !== typeof ref)
          throw Error(formatProdErrorMessage(284));
        if (null === current || current.ref !== ref)
          workInProgress2.flags |= 4194816;
      }
    }
    function updateFunctionComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      prepareToReadContext(workInProgress2);
      Component = renderWithHooks(
        current,
        workInProgress2,
        Component,
        nextProps,
        void 0,
        renderLanes2
      );
      nextProps = checkDidRenderIdHook();
      if (null !== current && !didReceiveUpdate)
        return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      isHydrating && nextProps && pushMaterializedTreeId(workInProgress2);
      workInProgress2.flags |= 1;
      reconcileChildren(current, workInProgress2, Component, renderLanes2);
      return workInProgress2.child;
    }
    function replayFunctionComponent(current, workInProgress2, nextProps, Component, secondArg, renderLanes2) {
      prepareToReadContext(workInProgress2);
      workInProgress2.updateQueue = null;
      nextProps = renderWithHooksAgain(
        workInProgress2,
        Component,
        nextProps,
        secondArg
      );
      finishRenderingHooks(current);
      Component = checkDidRenderIdHook();
      if (null !== current && !didReceiveUpdate)
        return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      isHydrating && Component && pushMaterializedTreeId(workInProgress2);
      workInProgress2.flags |= 1;
      reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
      return workInProgress2.child;
    }
    function updateClassComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      prepareToReadContext(workInProgress2);
      if (null === workInProgress2.stateNode) {
        var context = emptyContextObject, contextType = Component.contextType;
        "object" === typeof contextType && null !== contextType && (context = readContext(contextType));
        context = new Component(nextProps, context);
        workInProgress2.memoizedState = null !== context.state && void 0 !== context.state ? context.state : null;
        context.updater = classComponentUpdater;
        workInProgress2.stateNode = context;
        context._reactInternals = workInProgress2;
        context = workInProgress2.stateNode;
        context.props = nextProps;
        context.state = workInProgress2.memoizedState;
        context.refs = {};
        initializeUpdateQueue(workInProgress2);
        contextType = Component.contextType;
        context.context = "object" === typeof contextType && null !== contextType ? readContext(contextType) : emptyContextObject;
        context.state = workInProgress2.memoizedState;
        contextType = Component.getDerivedStateFromProps;
        "function" === typeof contextType && (applyDerivedStateFromProps(
          workInProgress2,
          Component,
          contextType,
          nextProps
        ), context.state = workInProgress2.memoizedState);
        "function" === typeof Component.getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || (contextType = context.state, "function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount(), contextType !== context.state && classComponentUpdater.enqueueReplaceState(context, context.state, null), processUpdateQueue(workInProgress2, nextProps, context, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction(), context.state = workInProgress2.memoizedState);
        "function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308);
        nextProps = true;
      } else if (null === current) {
        context = workInProgress2.stateNode;
        var unresolvedOldProps = workInProgress2.memoizedProps, oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
        context.props = oldProps;
        var oldContext = context.context, contextType$jscomp$0 = Component.contextType;
        contextType = emptyContextObject;
        "object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 && (contextType = readContext(contextType$jscomp$0));
        var getDerivedStateFromProps = Component.getDerivedStateFromProps;
        contextType$jscomp$0 = "function" === typeof getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate;
        unresolvedOldProps = workInProgress2.pendingProps !== unresolvedOldProps;
        contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (unresolvedOldProps || oldContext !== contextType) && callComponentWillReceiveProps(
          workInProgress2,
          context,
          nextProps,
          contextType
        );
        hasForceUpdate = false;
        var oldState = workInProgress2.memoizedState;
        context.state = oldState;
        processUpdateQueue(workInProgress2, nextProps, context, renderLanes2);
        suspendIfUpdateReadFromEntangledAsyncAction();
        oldContext = workInProgress2.memoizedState;
        unresolvedOldProps || oldState !== oldContext || hasForceUpdate ? ("function" === typeof getDerivedStateFromProps && (applyDerivedStateFromProps(
          workInProgress2,
          Component,
          getDerivedStateFromProps,
          nextProps
        ), oldContext = workInProgress2.memoizedState), (oldProps = hasForceUpdate || checkShouldComponentUpdate(
          workInProgress2,
          Component,
          oldProps,
          nextProps,
          oldState,
          oldContext,
          contextType
        )) ? (contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || ("function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount()), "function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308)) : ("function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = oldContext), context.props = nextProps, context.state = oldContext, context.context = contextType, nextProps = oldProps) : ("function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308), nextProps = false);
      } else {
        context = workInProgress2.stateNode;
        cloneUpdateQueue(current, workInProgress2);
        contextType = workInProgress2.memoizedProps;
        contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
        context.props = contextType$jscomp$0;
        getDerivedStateFromProps = workInProgress2.pendingProps;
        oldState = context.context;
        oldContext = Component.contextType;
        oldProps = emptyContextObject;
        "object" === typeof oldContext && null !== oldContext && (oldProps = readContext(oldContext));
        unresolvedOldProps = Component.getDerivedStateFromProps;
        (oldContext = "function" === typeof unresolvedOldProps || "function" === typeof context.getSnapshotBeforeUpdate) || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (contextType !== getDerivedStateFromProps || oldState !== oldProps) && callComponentWillReceiveProps(
          workInProgress2,
          context,
          nextProps,
          oldProps
        );
        hasForceUpdate = false;
        oldState = workInProgress2.memoizedState;
        context.state = oldState;
        processUpdateQueue(workInProgress2, nextProps, context, renderLanes2);
        suspendIfUpdateReadFromEntangledAsyncAction();
        var newState = workInProgress2.memoizedState;
        contextType !== getDerivedStateFromProps || oldState !== newState || hasForceUpdate || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies) ? ("function" === typeof unresolvedOldProps && (applyDerivedStateFromProps(
          workInProgress2,
          Component,
          unresolvedOldProps,
          nextProps
        ), newState = workInProgress2.memoizedState), (contextType$jscomp$0 = hasForceUpdate || checkShouldComponentUpdate(
          workInProgress2,
          Component,
          contextType$jscomp$0,
          nextProps,
          oldState,
          newState,
          oldProps
        ) || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies)) ? (oldContext || "function" !== typeof context.UNSAFE_componentWillUpdate && "function" !== typeof context.componentWillUpdate || ("function" === typeof context.componentWillUpdate && context.componentWillUpdate(nextProps, newState, oldProps), "function" === typeof context.UNSAFE_componentWillUpdate && context.UNSAFE_componentWillUpdate(
          nextProps,
          newState,
          oldProps
        )), "function" === typeof context.componentDidUpdate && (workInProgress2.flags |= 4), "function" === typeof context.getSnapshotBeforeUpdate && (workInProgress2.flags |= 1024)) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 1024), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = newState), context.props = nextProps, context.state = newState, context.context = oldProps, nextProps = contextType$jscomp$0) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 1024), nextProps = false);
      }
      context = nextProps;
      markRef(current, workInProgress2);
      nextProps = 0 !== (workInProgress2.flags & 128);
      context || nextProps ? (context = workInProgress2.stateNode, Component = nextProps && "function" !== typeof Component.getDerivedStateFromError ? null : context.render(), workInProgress2.flags |= 1, null !== current && nextProps ? (workInProgress2.child = reconcileChildFibers(
        workInProgress2,
        current.child,
        null,
        renderLanes2
      ), workInProgress2.child = reconcileChildFibers(
        workInProgress2,
        null,
        Component,
        renderLanes2
      )) : reconcileChildren(current, workInProgress2, Component, renderLanes2), workInProgress2.memoizedState = context.state, current = workInProgress2.child) : current = bailoutOnAlreadyFinishedWork(
        current,
        workInProgress2,
        renderLanes2
      );
      return current;
    }
    function mountHostRootWithoutHydrating(current, workInProgress2, nextChildren, renderLanes2) {
      resetHydrationState();
      workInProgress2.flags |= 256;
      reconcileChildren(current, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    var SUSPENDED_MARKER = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function mountSuspenseOffscreenState(renderLanes2) {
      return { baseLanes: renderLanes2, cachePool: getSuspendedCache() };
    }
    function getRemainingWorkInPrimaryTree(current, primaryTreeDidDefer, renderLanes2) {
      current = null !== current ? current.childLanes & ~renderLanes2 : 0;
      primaryTreeDidDefer && (current |= workInProgressDeferredLane);
      return current;
    }
    function updateSuspenseComponent(current, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps, showFallback = false, didSuspend = 0 !== (workInProgress2.flags & 128), JSCompiler_temp;
      (JSCompiler_temp = didSuspend) || (JSCompiler_temp = null !== current && null === current.memoizedState ? false : 0 !== (suspenseStackCursor.current & 2));
      JSCompiler_temp && (showFallback = true, workInProgress2.flags &= -129);
      JSCompiler_temp = 0 !== (workInProgress2.flags & 32);
      workInProgress2.flags &= -33;
      if (null === current) {
        if (isHydrating) {
          showFallback ? pushPrimaryTreeSuspenseHandler(workInProgress2) : reuseSuspenseHandlerOnStack(workInProgress2);
          (current = nextHydratableInstance) ? (current = canHydrateHydrationBoundary(
            current,
            rootOrSingletonContext
          ), current = null !== current && "&" !== current.data ? current : null, null !== current && (workInProgress2.memoizedState = {
            dehydrated: current,
            treeContext: null !== treeContextProvider ? { id: treeContextId, overflow: treeContextOverflow } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, renderLanes2 = createFiberFromDehydratedFragment(current), renderLanes2.return = workInProgress2, workInProgress2.child = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null)) : current = null;
          if (null === current) throw throwOnHydrationMismatch(workInProgress2);
          isSuspenseInstanceFallback(current) ? workInProgress2.lanes = 32 : workInProgress2.lanes = 536870912;
          return null;
        }
        var nextPrimaryChildren = nextProps.children;
        nextProps = nextProps.fallback;
        if (showFallback)
          return reuseSuspenseHandlerOnStack(workInProgress2), showFallback = workInProgress2.mode, nextPrimaryChildren = mountWorkInProgressOffscreenFiber(
            { mode: "hidden", children: nextPrimaryChildren },
            showFallback
          ), nextProps = createFiberFromFragment(
            nextProps,
            showFallback,
            renderLanes2,
            null
          ), nextPrimaryChildren.return = workInProgress2, nextProps.return = workInProgress2, nextPrimaryChildren.sibling = nextProps, workInProgress2.child = nextPrimaryChildren, nextProps = workInProgress2.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes2), nextProps.childLanes = getRemainingWorkInPrimaryTree(
            current,
            JSCompiler_temp,
            renderLanes2
          ), workInProgress2.memoizedState = SUSPENDED_MARKER, bailoutOffscreenComponent(null, nextProps);
        pushPrimaryTreeSuspenseHandler(workInProgress2);
        return mountSuspensePrimaryChildren(workInProgress2, nextPrimaryChildren);
      }
      var prevState = current.memoizedState;
      if (null !== prevState && (nextPrimaryChildren = prevState.dehydrated, null !== nextPrimaryChildren)) {
        if (didSuspend)
          workInProgress2.flags & 256 ? (pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags &= -257, workInProgress2 = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress2,
            renderLanes2
          )) : null !== workInProgress2.memoizedState ? (reuseSuspenseHandlerOnStack(workInProgress2), workInProgress2.child = current.child, workInProgress2.flags |= 128, workInProgress2 = null) : (reuseSuspenseHandlerOnStack(workInProgress2), nextPrimaryChildren = nextProps.fallback, showFallback = workInProgress2.mode, nextProps = mountWorkInProgressOffscreenFiber(
            { mode: "visible", children: nextProps.children },
            showFallback
          ), nextPrimaryChildren = createFiberFromFragment(
            nextPrimaryChildren,
            showFallback,
            renderLanes2,
            null
          ), nextPrimaryChildren.flags |= 2, nextProps.return = workInProgress2, nextPrimaryChildren.return = workInProgress2, nextProps.sibling = nextPrimaryChildren, workInProgress2.child = nextProps, reconcileChildFibers(
            workInProgress2,
            current.child,
            null,
            renderLanes2
          ), nextProps = workInProgress2.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes2), nextProps.childLanes = getRemainingWorkInPrimaryTree(
            current,
            JSCompiler_temp,
            renderLanes2
          ), workInProgress2.memoizedState = SUSPENDED_MARKER, workInProgress2 = bailoutOffscreenComponent(null, nextProps));
        else if (pushPrimaryTreeSuspenseHandler(workInProgress2), isSuspenseInstanceFallback(nextPrimaryChildren)) {
          JSCompiler_temp = nextPrimaryChildren.nextSibling && nextPrimaryChildren.nextSibling.dataset;
          if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
          JSCompiler_temp = digest;
          nextProps = Error(formatProdErrorMessage(419));
          nextProps.stack = "";
          nextProps.digest = JSCompiler_temp;
          queueHydrationError({ value: nextProps, source: null, stack: null });
          workInProgress2 = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress2,
            renderLanes2
          );
        } else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress2, renderLanes2, false), JSCompiler_temp = 0 !== (renderLanes2 & current.childLanes), didReceiveUpdate || JSCompiler_temp) {
          JSCompiler_temp = workInProgressRoot;
          if (null !== JSCompiler_temp && (nextProps = getBumpedLaneForHydration(JSCompiler_temp, renderLanes2), 0 !== nextProps && nextProps !== prevState.retryLane))
            throw prevState.retryLane = nextProps, enqueueConcurrentRenderForLane(current, nextProps), scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps), SelectiveHydrationException;
          isSuspenseInstancePending(nextPrimaryChildren) || renderDidSuspendDelayIfPossible();
          workInProgress2 = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress2,
            renderLanes2
          );
        } else
          isSuspenseInstancePending(nextPrimaryChildren) ? (workInProgress2.flags |= 192, workInProgress2.child = current.child, workInProgress2 = null) : (current = prevState.treeContext, nextHydratableInstance = getNextHydratable(
            nextPrimaryChildren.nextSibling
          ), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, rootOrSingletonContext = false, null !== current && restoreSuspendedTreeContext(workInProgress2, current), workInProgress2 = mountSuspensePrimaryChildren(
            workInProgress2,
            nextProps.children
          ), workInProgress2.flags |= 4096);
        return workInProgress2;
      }
      if (showFallback)
        return reuseSuspenseHandlerOnStack(workInProgress2), nextPrimaryChildren = nextProps.fallback, showFallback = workInProgress2.mode, prevState = current.child, digest = prevState.sibling, nextProps = createWorkInProgress(prevState, {
          mode: "hidden",
          children: nextProps.children
        }), nextProps.subtreeFlags = prevState.subtreeFlags & 65011712, null !== digest ? nextPrimaryChildren = createWorkInProgress(
          digest,
          nextPrimaryChildren
        ) : (nextPrimaryChildren = createFiberFromFragment(
          nextPrimaryChildren,
          showFallback,
          renderLanes2,
          null
        ), nextPrimaryChildren.flags |= 2), nextPrimaryChildren.return = workInProgress2, nextProps.return = workInProgress2, nextProps.sibling = nextPrimaryChildren, workInProgress2.child = nextProps, bailoutOffscreenComponent(null, nextProps), nextProps = workInProgress2.child, nextPrimaryChildren = current.child.memoizedState, null === nextPrimaryChildren ? nextPrimaryChildren = mountSuspenseOffscreenState(renderLanes2) : (showFallback = nextPrimaryChildren.cachePool, null !== showFallback ? (prevState = CacheContext._currentValue, showFallback = showFallback.parent !== prevState ? { parent: prevState, pool: prevState } : showFallback) : showFallback = getSuspendedCache(), nextPrimaryChildren = {
          baseLanes: nextPrimaryChildren.baseLanes | renderLanes2,
          cachePool: showFallback
        }), nextProps.memoizedState = nextPrimaryChildren, nextProps.childLanes = getRemainingWorkInPrimaryTree(
          current,
          JSCompiler_temp,
          renderLanes2
        ), workInProgress2.memoizedState = SUSPENDED_MARKER, bailoutOffscreenComponent(current.child, nextProps);
      pushPrimaryTreeSuspenseHandler(workInProgress2);
      renderLanes2 = current.child;
      current = renderLanes2.sibling;
      renderLanes2 = createWorkInProgress(renderLanes2, {
        mode: "visible",
        children: nextProps.children
      });
      renderLanes2.return = workInProgress2;
      renderLanes2.sibling = null;
      null !== current && (JSCompiler_temp = workInProgress2.deletions, null === JSCompiler_temp ? (workInProgress2.deletions = [current], workInProgress2.flags |= 16) : JSCompiler_temp.push(current));
      workInProgress2.child = renderLanes2;
      workInProgress2.memoizedState = null;
      return renderLanes2;
    }
    function mountSuspensePrimaryChildren(workInProgress2, primaryChildren) {
      primaryChildren = mountWorkInProgressOffscreenFiber(
        { mode: "visible", children: primaryChildren },
        workInProgress2.mode
      );
      primaryChildren.return = workInProgress2;
      return workInProgress2.child = primaryChildren;
    }
    function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
      offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
      offscreenProps.lanes = 0;
      return offscreenProps;
    }
    function retrySuspenseComponentWithoutHydrating(current, workInProgress2, renderLanes2) {
      reconcileChildFibers(workInProgress2, current.child, null, renderLanes2);
      current = mountSuspensePrimaryChildren(
        workInProgress2,
        workInProgress2.pendingProps.children
      );
      current.flags |= 2;
      workInProgress2.memoizedState = null;
      return current;
    }
    function scheduleSuspenseWorkOnFiber(fiber, renderLanes2, propagationRoot) {
      fiber.lanes |= renderLanes2;
      var alternate = fiber.alternate;
      null !== alternate && (alternate.lanes |= renderLanes2);
      scheduleContextWorkOnParentPath(fiber.return, renderLanes2, propagationRoot);
    }
    function initSuspenseListRenderState(workInProgress2, isBackwards, tail, lastContentRow, tailMode, treeForkCount2) {
      var renderState = workInProgress2.memoizedState;
      null === renderState ? workInProgress2.memoizedState = {
        isBackwards,
        rendering: null,
        renderingStartTime: 0,
        last: lastContentRow,
        tail,
        tailMode,
        treeForkCount: treeForkCount2
      } : (renderState.isBackwards = isBackwards, renderState.rendering = null, renderState.renderingStartTime = 0, renderState.last = lastContentRow, renderState.tail = tail, renderState.tailMode = tailMode, renderState.treeForkCount = treeForkCount2);
    }
    function updateSuspenseListComponent(current, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps, revealOrder = nextProps.revealOrder, tailMode = nextProps.tail;
      nextProps = nextProps.children;
      var suspenseContext = suspenseStackCursor.current, shouldForceFallback = 0 !== (suspenseContext & 2);
      shouldForceFallback ? (suspenseContext = suspenseContext & 1 | 2, workInProgress2.flags |= 128) : suspenseContext &= 1;
      push(suspenseStackCursor, suspenseContext);
      reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
      nextProps = isHydrating ? treeForkCount : 0;
      if (!shouldForceFallback && null !== current && 0 !== (current.flags & 128))
        a: for (current = workInProgress2.child; null !== current; ) {
          if (13 === current.tag)
            null !== current.memoizedState && scheduleSuspenseWorkOnFiber(current, renderLanes2, workInProgress2);
          else if (19 === current.tag)
            scheduleSuspenseWorkOnFiber(current, renderLanes2, workInProgress2);
          else if (null !== current.child) {
            current.child.return = current;
            current = current.child;
            continue;
          }
          if (current === workInProgress2) break a;
          for (; null === current.sibling; ) {
            if (null === current.return || current.return === workInProgress2)
              break a;
            current = current.return;
          }
          current.sibling.return = current.return;
          current = current.sibling;
        }
      switch (revealOrder) {
        case "forwards":
          renderLanes2 = workInProgress2.child;
          for (revealOrder = null; null !== renderLanes2; )
            current = renderLanes2.alternate, null !== current && null === findFirstSuspended(current) && (revealOrder = renderLanes2), renderLanes2 = renderLanes2.sibling;
          renderLanes2 = revealOrder;
          null === renderLanes2 ? (revealOrder = workInProgress2.child, workInProgress2.child = null) : (revealOrder = renderLanes2.sibling, renderLanes2.sibling = null);
          initSuspenseListRenderState(
            workInProgress2,
            false,
            revealOrder,
            renderLanes2,
            tailMode,
            nextProps
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          renderLanes2 = null;
          revealOrder = workInProgress2.child;
          for (workInProgress2.child = null; null !== revealOrder; ) {
            current = revealOrder.alternate;
            if (null !== current && null === findFirstSuspended(current)) {
              workInProgress2.child = revealOrder;
              break;
            }
            current = revealOrder.sibling;
            revealOrder.sibling = renderLanes2;
            renderLanes2 = revealOrder;
            revealOrder = current;
          }
          initSuspenseListRenderState(
            workInProgress2,
            true,
            renderLanes2,
            null,
            tailMode,
            nextProps
          );
          break;
        case "together":
          initSuspenseListRenderState(
            workInProgress2,
            false,
            null,
            null,
            void 0,
            nextProps
          );
          break;
        default:
          workInProgress2.memoizedState = null;
      }
      return workInProgress2.child;
    }
    function bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2) {
      null !== current && (workInProgress2.dependencies = current.dependencies);
      workInProgressRootSkippedLanes |= workInProgress2.lanes;
      if (0 === (renderLanes2 & workInProgress2.childLanes))
        if (null !== current) {
          if (propagateParentContextChanges(
            current,
            workInProgress2,
            renderLanes2,
            false
          ), 0 === (renderLanes2 & workInProgress2.childLanes))
            return null;
        } else return null;
      if (null !== current && workInProgress2.child !== current.child)
        throw Error(formatProdErrorMessage(153));
      if (null !== workInProgress2.child) {
        current = workInProgress2.child;
        renderLanes2 = createWorkInProgress(current, current.pendingProps);
        workInProgress2.child = renderLanes2;
        for (renderLanes2.return = workInProgress2; null !== current.sibling; )
          current = current.sibling, renderLanes2 = renderLanes2.sibling = createWorkInProgress(current, current.pendingProps), renderLanes2.return = workInProgress2;
        renderLanes2.sibling = null;
      }
      return workInProgress2.child;
    }
    function checkScheduledUpdateOrContext(current, renderLanes2) {
      if (0 !== (current.lanes & renderLanes2)) return true;
      current = current.dependencies;
      return null !== current && checkIfContextChanged(current) ? true : false;
    }
    function attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress2, renderLanes2) {
      switch (workInProgress2.tag) {
        case 3:
          pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
          pushProvider(workInProgress2, CacheContext, current.memoizedState.cache);
          resetHydrationState();
          break;
        case 27:
        case 5:
          pushHostContext(workInProgress2);
          break;
        case 4:
          pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
          break;
        case 10:
          pushProvider(
            workInProgress2,
            workInProgress2.type,
            workInProgress2.memoizedProps.value
          );
          break;
        case 31:
          if (null !== workInProgress2.memoizedState)
            return workInProgress2.flags |= 128, pushDehydratedActivitySuspenseHandler(workInProgress2), null;
          break;
        case 13:
          var state$102 = workInProgress2.memoizedState;
          if (null !== state$102) {
            if (null !== state$102.dehydrated)
              return pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags |= 128, null;
            if (0 !== (renderLanes2 & workInProgress2.child.childLanes))
              return updateSuspenseComponent(current, workInProgress2, renderLanes2);
            pushPrimaryTreeSuspenseHandler(workInProgress2);
            current = bailoutOnAlreadyFinishedWork(
              current,
              workInProgress2,
              renderLanes2
            );
            return null !== current ? current.sibling : null;
          }
          pushPrimaryTreeSuspenseHandler(workInProgress2);
          break;
        case 19:
          var didSuspendBefore = 0 !== (current.flags & 128);
          state$102 = 0 !== (renderLanes2 & workInProgress2.childLanes);
          state$102 || (propagateParentContextChanges(
            current,
            workInProgress2,
            renderLanes2,
            false
          ), state$102 = 0 !== (renderLanes2 & workInProgress2.childLanes));
          if (didSuspendBefore) {
            if (state$102)
              return updateSuspenseListComponent(
                current,
                workInProgress2,
                renderLanes2
              );
            workInProgress2.flags |= 128;
          }
          didSuspendBefore = workInProgress2.memoizedState;
          null !== didSuspendBefore && (didSuspendBefore.rendering = null, didSuspendBefore.tail = null, didSuspendBefore.lastEffect = null);
          push(suspenseStackCursor, suspenseStackCursor.current);
          if (state$102) break;
          else return null;
        case 22:
          return workInProgress2.lanes = 0, updateOffscreenComponent(
            current,
            workInProgress2,
            renderLanes2,
            workInProgress2.pendingProps
          );
        case 24:
          pushProvider(workInProgress2, CacheContext, current.memoizedState.cache);
      }
      return bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
    }
    function beginWork(current, workInProgress2, renderLanes2) {
      if (null !== current)
        if (current.memoizedProps !== workInProgress2.pendingProps)
          didReceiveUpdate = true;
        else {
          if (!checkScheduledUpdateOrContext(current, renderLanes2) && 0 === (workInProgress2.flags & 128))
            return didReceiveUpdate = false, attemptEarlyBailoutIfNoScheduledUpdate(
              current,
              workInProgress2,
              renderLanes2
            );
          didReceiveUpdate = 0 !== (current.flags & 131072) ? true : false;
        }
      else
        didReceiveUpdate = false, isHydrating && 0 !== (workInProgress2.flags & 1048576) && pushTreeId(workInProgress2, treeForkCount, workInProgress2.index);
      workInProgress2.lanes = 0;
      switch (workInProgress2.tag) {
        case 16:
          a: {
            var props = workInProgress2.pendingProps;
            current = resolveLazy(workInProgress2.elementType);
            workInProgress2.type = current;
            if ("function" === typeof current)
              shouldConstruct(current) ? (props = resolveClassComponentProps(current, props), workInProgress2.tag = 1, workInProgress2 = updateClassComponent(
                null,
                workInProgress2,
                current,
                props,
                renderLanes2
              )) : (workInProgress2.tag = 0, workInProgress2 = updateFunctionComponent(
                null,
                workInProgress2,
                current,
                props,
                renderLanes2
              ));
            else {
              if (void 0 !== current && null !== current) {
                var $$typeof = current.$$typeof;
                if ($$typeof === REACT_FORWARD_REF_TYPE) {
                  workInProgress2.tag = 11;
                  workInProgress2 = updateForwardRef(
                    null,
                    workInProgress2,
                    current,
                    props,
                    renderLanes2
                  );
                  break a;
                } else if ($$typeof === REACT_MEMO_TYPE) {
                  workInProgress2.tag = 14;
                  workInProgress2 = updateMemoComponent(
                    null,
                    workInProgress2,
                    current,
                    props,
                    renderLanes2
                  );
                  break a;
                }
              }
              workInProgress2 = getComponentNameFromType(current) || current;
              throw Error(formatProdErrorMessage(306, workInProgress2, ""));
            }
          }
          return workInProgress2;
        case 0:
          return updateFunctionComponent(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 1:
          return props = workInProgress2.type, $$typeof = resolveClassComponentProps(
            props,
            workInProgress2.pendingProps
          ), updateClassComponent(
            current,
            workInProgress2,
            props,
            $$typeof,
            renderLanes2
          );
        case 3:
          a: {
            pushHostContainer(
              workInProgress2,
              workInProgress2.stateNode.containerInfo
            );
            if (null === current) throw Error(formatProdErrorMessage(387));
            props = workInProgress2.pendingProps;
            var prevState = workInProgress2.memoizedState;
            $$typeof = prevState.element;
            cloneUpdateQueue(current, workInProgress2);
            processUpdateQueue(workInProgress2, props, null, renderLanes2);
            var nextState = workInProgress2.memoizedState;
            props = nextState.cache;
            pushProvider(workInProgress2, CacheContext, props);
            props !== prevState.cache && propagateContextChanges(
              workInProgress2,
              [CacheContext],
              renderLanes2,
              true
            );
            suspendIfUpdateReadFromEntangledAsyncAction();
            props = nextState.element;
            if (prevState.isDehydrated)
              if (prevState = {
                element: props,
                isDehydrated: false,
                cache: nextState.cache
              }, workInProgress2.updateQueue.baseState = prevState, workInProgress2.memoizedState = prevState, workInProgress2.flags & 256) {
                workInProgress2 = mountHostRootWithoutHydrating(
                  current,
                  workInProgress2,
                  props,
                  renderLanes2
                );
                break a;
              } else if (props !== $$typeof) {
                $$typeof = createCapturedValueAtFiber(
                  Error(formatProdErrorMessage(424)),
                  workInProgress2
                );
                queueHydrationError($$typeof);
                workInProgress2 = mountHostRootWithoutHydrating(
                  current,
                  workInProgress2,
                  props,
                  renderLanes2
                );
                break a;
              } else {
                current = workInProgress2.stateNode.containerInfo;
                switch (current.nodeType) {
                  case 9:
                    current = current.body;
                    break;
                  default:
                    current = "HTML" === current.nodeName ? current.ownerDocument.body : current;
                }
                nextHydratableInstance = getNextHydratable(current.firstChild);
                hydrationParentFiber = workInProgress2;
                isHydrating = true;
                hydrationErrors = null;
                rootOrSingletonContext = true;
                renderLanes2 = mountChildFibers(
                  workInProgress2,
                  null,
                  props,
                  renderLanes2
                );
                for (workInProgress2.child = renderLanes2; renderLanes2; )
                  renderLanes2.flags = renderLanes2.flags & -3 | 4096, renderLanes2 = renderLanes2.sibling;
              }
            else {
              resetHydrationState();
              if (props === $$typeof) {
                workInProgress2 = bailoutOnAlreadyFinishedWork(
                  current,
                  workInProgress2,
                  renderLanes2
                );
                break a;
              }
              reconcileChildren(current, workInProgress2, props, renderLanes2);
            }
            workInProgress2 = workInProgress2.child;
          }
          return workInProgress2;
        case 26:
          return markRef(current, workInProgress2), null === current ? (renderLanes2 = getResource(
            workInProgress2.type,
            null,
            workInProgress2.pendingProps,
            null
          )) ? workInProgress2.memoizedState = renderLanes2 : isHydrating || (renderLanes2 = workInProgress2.type, current = workInProgress2.pendingProps, props = getOwnerDocumentFromRootContainer(
            rootInstanceStackCursor.current
          ).createElement(renderLanes2), props[internalInstanceKey] = workInProgress2, props[internalPropsKey] = current, setInitialProperties(props, renderLanes2, current), markNodeAsHoistable(props), workInProgress2.stateNode = props) : workInProgress2.memoizedState = getResource(
            workInProgress2.type,
            current.memoizedProps,
            workInProgress2.pendingProps,
            current.memoizedState
          ), null;
        case 27:
          return pushHostContext(workInProgress2), null === current && isHydrating && (props = workInProgress2.stateNode = resolveSingletonInstance(
            workInProgress2.type,
            workInProgress2.pendingProps,
            rootInstanceStackCursor.current
          ), hydrationParentFiber = workInProgress2, rootOrSingletonContext = true, $$typeof = nextHydratableInstance, isSingletonScope(workInProgress2.type) ? (previousHydratableOnEnteringScopedSingleton = $$typeof, nextHydratableInstance = getNextHydratable(props.firstChild)) : nextHydratableInstance = $$typeof), reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), markRef(current, workInProgress2), null === current && (workInProgress2.flags |= 4194304), workInProgress2.child;
        case 5:
          if (null === current && isHydrating) {
            if ($$typeof = props = nextHydratableInstance)
              props = canHydrateInstance(
                props,
                workInProgress2.type,
                workInProgress2.pendingProps,
                rootOrSingletonContext
              ), null !== props ? (workInProgress2.stateNode = props, hydrationParentFiber = workInProgress2, nextHydratableInstance = getNextHydratable(props.firstChild), rootOrSingletonContext = false, $$typeof = true) : $$typeof = false;
            $$typeof || throwOnHydrationMismatch(workInProgress2);
          }
          pushHostContext(workInProgress2);
          $$typeof = workInProgress2.type;
          prevState = workInProgress2.pendingProps;
          nextState = null !== current ? current.memoizedProps : null;
          props = prevState.children;
          shouldSetTextContent($$typeof, prevState) ? props = null : null !== nextState && shouldSetTextContent($$typeof, nextState) && (workInProgress2.flags |= 32);
          null !== workInProgress2.memoizedState && ($$typeof = renderWithHooks(
            current,
            workInProgress2,
            TransitionAwareHostComponent,
            null,
            null,
            renderLanes2
          ), HostTransitionContext._currentValue = $$typeof);
          markRef(current, workInProgress2);
          reconcileChildren(current, workInProgress2, props, renderLanes2);
          return workInProgress2.child;
        case 6:
          if (null === current && isHydrating) {
            if (current = renderLanes2 = nextHydratableInstance)
              renderLanes2 = canHydrateTextInstance(
                renderLanes2,
                workInProgress2.pendingProps,
                rootOrSingletonContext
              ), null !== renderLanes2 ? (workInProgress2.stateNode = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null, current = true) : current = false;
            current || throwOnHydrationMismatch(workInProgress2);
          }
          return null;
        case 13:
          return updateSuspenseComponent(current, workInProgress2, renderLanes2);
        case 4:
          return pushHostContainer(
            workInProgress2,
            workInProgress2.stateNode.containerInfo
          ), props = workInProgress2.pendingProps, null === current ? workInProgress2.child = reconcileChildFibers(
            workInProgress2,
            null,
            props,
            renderLanes2
          ) : reconcileChildren(current, workInProgress2, props, renderLanes2), workInProgress2.child;
        case 11:
          return updateForwardRef(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 7:
          return reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps,
            renderLanes2
          ), workInProgress2.child;
        case 8:
          return reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), workInProgress2.child;
        case 12:
          return reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), workInProgress2.child;
        case 10:
          return props = workInProgress2.pendingProps, pushProvider(workInProgress2, workInProgress2.type, props.value), reconcileChildren(current, workInProgress2, props.children, renderLanes2), workInProgress2.child;
        case 9:
          return $$typeof = workInProgress2.type._context, props = workInProgress2.pendingProps.children, prepareToReadContext(workInProgress2), $$typeof = readContext($$typeof), props = props($$typeof), workInProgress2.flags |= 1, reconcileChildren(current, workInProgress2, props, renderLanes2), workInProgress2.child;
        case 14:
          return updateMemoComponent(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 15:
          return updateSimpleMemoComponent(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 19:
          return updateSuspenseListComponent(current, workInProgress2, renderLanes2);
        case 31:
          return updateActivityComponent(current, workInProgress2, renderLanes2);
        case 22:
          return updateOffscreenComponent(
            current,
            workInProgress2,
            renderLanes2,
            workInProgress2.pendingProps
          );
        case 24:
          return prepareToReadContext(workInProgress2), props = readContext(CacheContext), null === current ? ($$typeof = peekCacheFromPool(), null === $$typeof && ($$typeof = workInProgressRoot, prevState = createCache(), $$typeof.pooledCache = prevState, prevState.refCount++, null !== prevState && ($$typeof.pooledCacheLanes |= renderLanes2), $$typeof = prevState), workInProgress2.memoizedState = { parent: props, cache: $$typeof }, initializeUpdateQueue(workInProgress2), pushProvider(workInProgress2, CacheContext, $$typeof)) : (0 !== (current.lanes & renderLanes2) && (cloneUpdateQueue(current, workInProgress2), processUpdateQueue(workInProgress2, null, null, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction()), $$typeof = current.memoizedState, prevState = workInProgress2.memoizedState, $$typeof.parent !== props ? ($$typeof = { parent: props, cache: props }, workInProgress2.memoizedState = $$typeof, 0 === workInProgress2.lanes && (workInProgress2.memoizedState = workInProgress2.updateQueue.baseState = $$typeof), pushProvider(workInProgress2, CacheContext, props)) : (props = prevState.cache, pushProvider(workInProgress2, CacheContext, props), props !== $$typeof.cache && propagateContextChanges(
            workInProgress2,
            [CacheContext],
            renderLanes2,
            true
          ))), reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), workInProgress2.child;
        case 29:
          throw workInProgress2.pendingProps;
      }
      throw Error(formatProdErrorMessage(156, workInProgress2.tag));
    }
    function markUpdate(workInProgress2) {
      workInProgress2.flags |= 4;
    }
    function preloadInstanceAndSuspendIfNeeded(workInProgress2, type, oldProps, newProps, renderLanes2) {
      if (type = 0 !== (workInProgress2.mode & 32)) type = false;
      if (type) {
        if (workInProgress2.flags |= 16777216, (renderLanes2 & 335544128) === renderLanes2)
          if (workInProgress2.stateNode.complete) workInProgress2.flags |= 8192;
          else if (shouldRemainOnPreviousScreen()) workInProgress2.flags |= 8192;
          else
            throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
      } else workInProgress2.flags &= -16777217;
    }
    function preloadResourceAndSuspendIfNeeded(workInProgress2, resource) {
      if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
        workInProgress2.flags &= -16777217;
      else if (workInProgress2.flags |= 16777216, !preloadResource(resource))
        if (shouldRemainOnPreviousScreen()) workInProgress2.flags |= 8192;
        else
          throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
    }
    function scheduleRetryEffect(workInProgress2, retryQueue) {
      null !== retryQueue && (workInProgress2.flags |= 4);
      workInProgress2.flags & 16384 && (retryQueue = 22 !== workInProgress2.tag ? claimNextRetryLane() : 536870912, workInProgress2.lanes |= retryQueue, workInProgressSuspendedRetryLanes |= retryQueue);
    }
    function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
      if (!isHydrating)
        switch (renderState.tailMode) {
          case "hidden":
            hasRenderedATailFallback = renderState.tail;
            for (var lastTailNode = null; null !== hasRenderedATailFallback; )
              null !== hasRenderedATailFallback.alternate && (lastTailNode = hasRenderedATailFallback), hasRenderedATailFallback = hasRenderedATailFallback.sibling;
            null === lastTailNode ? renderState.tail = null : lastTailNode.sibling = null;
            break;
          case "collapsed":
            lastTailNode = renderState.tail;
            for (var lastTailNode$106 = null; null !== lastTailNode; )
              null !== lastTailNode.alternate && (lastTailNode$106 = lastTailNode), lastTailNode = lastTailNode.sibling;
            null === lastTailNode$106 ? hasRenderedATailFallback || null === renderState.tail ? renderState.tail = null : renderState.tail.sibling = null : lastTailNode$106.sibling = null;
        }
    }
    function bubbleProperties(completedWork) {
      var didBailout = null !== completedWork.alternate && completedWork.alternate.child === completedWork.child, newChildLanes = 0, subtreeFlags = 0;
      if (didBailout)
        for (var child$107 = completedWork.child; null !== child$107; )
          newChildLanes |= child$107.lanes | child$107.childLanes, subtreeFlags |= child$107.subtreeFlags & 65011712, subtreeFlags |= child$107.flags & 65011712, child$107.return = completedWork, child$107 = child$107.sibling;
      else
        for (child$107 = completedWork.child; null !== child$107; )
          newChildLanes |= child$107.lanes | child$107.childLanes, subtreeFlags |= child$107.subtreeFlags, subtreeFlags |= child$107.flags, child$107.return = completedWork, child$107 = child$107.sibling;
      completedWork.subtreeFlags |= subtreeFlags;
      completedWork.childLanes = newChildLanes;
      return didBailout;
    }
    function completeWork(current, workInProgress2, renderLanes2) {
      var newProps = workInProgress2.pendingProps;
      popTreeContext(workInProgress2);
      switch (workInProgress2.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return bubbleProperties(workInProgress2), null;
        case 1:
          return bubbleProperties(workInProgress2), null;
        case 3:
          renderLanes2 = workInProgress2.stateNode;
          newProps = null;
          null !== current && (newProps = current.memoizedState.cache);
          workInProgress2.memoizedState.cache !== newProps && (workInProgress2.flags |= 2048);
          popProvider(CacheContext);
          popHostContainer();
          renderLanes2.pendingContext && (renderLanes2.context = renderLanes2.pendingContext, renderLanes2.pendingContext = null);
          if (null === current || null === current.child)
            popHydrationState(workInProgress2) ? markUpdate(workInProgress2) : null === current || current.memoizedState.isDehydrated && 0 === (workInProgress2.flags & 256) || (workInProgress2.flags |= 1024, upgradeHydrationErrorsToRecoverable());
          bubbleProperties(workInProgress2);
          return null;
        case 26:
          var type = workInProgress2.type, nextResource = workInProgress2.memoizedState;
          null === current ? (markUpdate(workInProgress2), null !== nextResource ? (bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(workInProgress2, nextResource)) : (bubbleProperties(workInProgress2), preloadInstanceAndSuspendIfNeeded(
            workInProgress2,
            type,
            null,
            newProps,
            renderLanes2
          ))) : nextResource ? nextResource !== current.memoizedState ? (markUpdate(workInProgress2), bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(workInProgress2, nextResource)) : (bubbleProperties(workInProgress2), workInProgress2.flags &= -16777217) : (current = current.memoizedProps, current !== newProps && markUpdate(workInProgress2), bubbleProperties(workInProgress2), preloadInstanceAndSuspendIfNeeded(
            workInProgress2,
            type,
            current,
            newProps,
            renderLanes2
          ));
          return null;
        case 27:
          popHostContext(workInProgress2);
          renderLanes2 = rootInstanceStackCursor.current;
          type = workInProgress2.type;
          if (null !== current && null != workInProgress2.stateNode)
            current.memoizedProps !== newProps && markUpdate(workInProgress2);
          else {
            if (!newProps) {
              if (null === workInProgress2.stateNode)
                throw Error(formatProdErrorMessage(166));
              bubbleProperties(workInProgress2);
              return null;
            }
            current = contextStackCursor.current;
            popHydrationState(workInProgress2) ? prepareToHydrateHostInstance(workInProgress2, current) : (current = resolveSingletonInstance(type, newProps, renderLanes2), workInProgress2.stateNode = current, markUpdate(workInProgress2));
          }
          bubbleProperties(workInProgress2);
          return null;
        case 5:
          popHostContext(workInProgress2);
          type = workInProgress2.type;
          if (null !== current && null != workInProgress2.stateNode)
            current.memoizedProps !== newProps && markUpdate(workInProgress2);
          else {
            if (!newProps) {
              if (null === workInProgress2.stateNode)
                throw Error(formatProdErrorMessage(166));
              bubbleProperties(workInProgress2);
              return null;
            }
            nextResource = contextStackCursor.current;
            if (popHydrationState(workInProgress2))
              prepareToHydrateHostInstance(workInProgress2, nextResource);
            else {
              var ownerDocument = getOwnerDocumentFromRootContainer(
                rootInstanceStackCursor.current
              );
              switch (nextResource) {
                case 1:
                  nextResource = ownerDocument.createElementNS(
                    "http://www.w3.org/2000/svg",
                    type
                  );
                  break;
                case 2:
                  nextResource = ownerDocument.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    type
                  );
                  break;
                default:
                  switch (type) {
                    case "svg":
                      nextResource = ownerDocument.createElementNS(
                        "http://www.w3.org/2000/svg",
                        type
                      );
                      break;
                    case "math":
                      nextResource = ownerDocument.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        type
                      );
                      break;
                    case "script":
                      nextResource = ownerDocument.createElement("div");
                      nextResource.innerHTML = "<script><\/script>";
                      nextResource = nextResource.removeChild(
                        nextResource.firstChild
                      );
                      break;
                    case "select":
                      nextResource = "string" === typeof newProps.is ? ownerDocument.createElement("select", {
                        is: newProps.is
                      }) : ownerDocument.createElement("select");
                      newProps.multiple ? nextResource.multiple = true : newProps.size && (nextResource.size = newProps.size);
                      break;
                    default:
                      nextResource = "string" === typeof newProps.is ? ownerDocument.createElement(type, { is: newProps.is }) : ownerDocument.createElement(type);
                  }
              }
              nextResource[internalInstanceKey] = workInProgress2;
              nextResource[internalPropsKey] = newProps;
              a: for (ownerDocument = workInProgress2.child; null !== ownerDocument; ) {
                if (5 === ownerDocument.tag || 6 === ownerDocument.tag)
                  nextResource.appendChild(ownerDocument.stateNode);
                else if (4 !== ownerDocument.tag && 27 !== ownerDocument.tag && null !== ownerDocument.child) {
                  ownerDocument.child.return = ownerDocument;
                  ownerDocument = ownerDocument.child;
                  continue;
                }
                if (ownerDocument === workInProgress2) break a;
                for (; null === ownerDocument.sibling; ) {
                  if (null === ownerDocument.return || ownerDocument.return === workInProgress2)
                    break a;
                  ownerDocument = ownerDocument.return;
                }
                ownerDocument.sibling.return = ownerDocument.return;
                ownerDocument = ownerDocument.sibling;
              }
              workInProgress2.stateNode = nextResource;
              a: switch (setInitialProperties(nextResource, type, newProps), type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  newProps = !!newProps.autoFocus;
                  break a;
                case "img":
                  newProps = true;
                  break a;
                default:
                  newProps = false;
              }
              newProps && markUpdate(workInProgress2);
            }
          }
          bubbleProperties(workInProgress2);
          preloadInstanceAndSuspendIfNeeded(
            workInProgress2,
            workInProgress2.type,
            null === current ? null : current.memoizedProps,
            workInProgress2.pendingProps,
            renderLanes2
          );
          return null;
        case 6:
          if (current && null != workInProgress2.stateNode)
            current.memoizedProps !== newProps && markUpdate(workInProgress2);
          else {
            if ("string" !== typeof newProps && null === workInProgress2.stateNode)
              throw Error(formatProdErrorMessage(166));
            current = rootInstanceStackCursor.current;
            if (popHydrationState(workInProgress2)) {
              current = workInProgress2.stateNode;
              renderLanes2 = workInProgress2.memoizedProps;
              newProps = null;
              type = hydrationParentFiber;
              if (null !== type)
                switch (type.tag) {
                  case 27:
                  case 5:
                    newProps = type.memoizedProps;
                }
              current[internalInstanceKey] = workInProgress2;
              current = current.nodeValue === renderLanes2 || null !== newProps && true === newProps.suppressHydrationWarning || checkForUnmatchedText(current.nodeValue, renderLanes2) ? true : false;
              current || throwOnHydrationMismatch(workInProgress2, true);
            } else
              current = getOwnerDocumentFromRootContainer(current).createTextNode(
                newProps
              ), current[internalInstanceKey] = workInProgress2, workInProgress2.stateNode = current;
          }
          bubbleProperties(workInProgress2);
          return null;
        case 31:
          renderLanes2 = workInProgress2.memoizedState;
          if (null === current || null !== current.memoizedState) {
            newProps = popHydrationState(workInProgress2);
            if (null !== renderLanes2) {
              if (null === current) {
                if (!newProps) throw Error(formatProdErrorMessage(318));
                current = workInProgress2.memoizedState;
                current = null !== current ? current.dehydrated : null;
                if (!current) throw Error(formatProdErrorMessage(557));
                current[internalInstanceKey] = workInProgress2;
              } else
                resetHydrationState(), 0 === (workInProgress2.flags & 128) && (workInProgress2.memoizedState = null), workInProgress2.flags |= 4;
              bubbleProperties(workInProgress2);
              current = false;
            } else
              renderLanes2 = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = renderLanes2), current = true;
            if (!current) {
              if (workInProgress2.flags & 256)
                return popSuspenseHandler(workInProgress2), workInProgress2;
              popSuspenseHandler(workInProgress2);
              return null;
            }
            if (0 !== (workInProgress2.flags & 128))
              throw Error(formatProdErrorMessage(558));
          }
          bubbleProperties(workInProgress2);
          return null;
        case 13:
          newProps = workInProgress2.memoizedState;
          if (null === current || null !== current.memoizedState && null !== current.memoizedState.dehydrated) {
            type = popHydrationState(workInProgress2);
            if (null !== newProps && null !== newProps.dehydrated) {
              if (null === current) {
                if (!type) throw Error(formatProdErrorMessage(318));
                type = workInProgress2.memoizedState;
                type = null !== type ? type.dehydrated : null;
                if (!type) throw Error(formatProdErrorMessage(317));
                type[internalInstanceKey] = workInProgress2;
              } else
                resetHydrationState(), 0 === (workInProgress2.flags & 128) && (workInProgress2.memoizedState = null), workInProgress2.flags |= 4;
              bubbleProperties(workInProgress2);
              type = false;
            } else
              type = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = type), type = true;
            if (!type) {
              if (workInProgress2.flags & 256)
                return popSuspenseHandler(workInProgress2), workInProgress2;
              popSuspenseHandler(workInProgress2);
              return null;
            }
          }
          popSuspenseHandler(workInProgress2);
          if (0 !== (workInProgress2.flags & 128))
            return workInProgress2.lanes = renderLanes2, workInProgress2;
          renderLanes2 = null !== newProps;
          current = null !== current && null !== current.memoizedState;
          renderLanes2 && (newProps = workInProgress2.child, type = null, null !== newProps.alternate && null !== newProps.alternate.memoizedState && null !== newProps.alternate.memoizedState.cachePool && (type = newProps.alternate.memoizedState.cachePool.pool), nextResource = null, null !== newProps.memoizedState && null !== newProps.memoizedState.cachePool && (nextResource = newProps.memoizedState.cachePool.pool), nextResource !== type && (newProps.flags |= 2048));
          renderLanes2 !== current && renderLanes2 && (workInProgress2.child.flags |= 8192);
          scheduleRetryEffect(workInProgress2, workInProgress2.updateQueue);
          bubbleProperties(workInProgress2);
          return null;
        case 4:
          return popHostContainer(), null === current && listenToAllSupportedEvents(workInProgress2.stateNode.containerInfo), bubbleProperties(workInProgress2), null;
        case 10:
          return popProvider(workInProgress2.type), bubbleProperties(workInProgress2), null;
        case 19:
          pop(suspenseStackCursor);
          newProps = workInProgress2.memoizedState;
          if (null === newProps) return bubbleProperties(workInProgress2), null;
          type = 0 !== (workInProgress2.flags & 128);
          nextResource = newProps.rendering;
          if (null === nextResource)
            if (type) cutOffTailIfNeeded(newProps, false);
            else {
              if (0 !== workInProgressRootExitStatus || null !== current && 0 !== (current.flags & 128))
                for (current = workInProgress2.child; null !== current; ) {
                  nextResource = findFirstSuspended(current);
                  if (null !== nextResource) {
                    workInProgress2.flags |= 128;
                    cutOffTailIfNeeded(newProps, false);
                    current = nextResource.updateQueue;
                    workInProgress2.updateQueue = current;
                    scheduleRetryEffect(workInProgress2, current);
                    workInProgress2.subtreeFlags = 0;
                    current = renderLanes2;
                    for (renderLanes2 = workInProgress2.child; null !== renderLanes2; )
                      resetWorkInProgress(renderLanes2, current), renderLanes2 = renderLanes2.sibling;
                    push(
                      suspenseStackCursor,
                      suspenseStackCursor.current & 1 | 2
                    );
                    isHydrating && pushTreeFork(workInProgress2, newProps.treeForkCount);
                    return workInProgress2.child;
                  }
                  current = current.sibling;
                }
              null !== newProps.tail && now() > workInProgressRootRenderTargetTime && (workInProgress2.flags |= 128, type = true, cutOffTailIfNeeded(newProps, false), workInProgress2.lanes = 4194304);
            }
          else {
            if (!type)
              if (current = findFirstSuspended(nextResource), null !== current) {
                if (workInProgress2.flags |= 128, type = true, current = current.updateQueue, workInProgress2.updateQueue = current, scheduleRetryEffect(workInProgress2, current), cutOffTailIfNeeded(newProps, true), null === newProps.tail && "hidden" === newProps.tailMode && !nextResource.alternate && !isHydrating)
                  return bubbleProperties(workInProgress2), null;
              } else
                2 * now() - newProps.renderingStartTime > workInProgressRootRenderTargetTime && 536870912 !== renderLanes2 && (workInProgress2.flags |= 128, type = true, cutOffTailIfNeeded(newProps, false), workInProgress2.lanes = 4194304);
            newProps.isBackwards ? (nextResource.sibling = workInProgress2.child, workInProgress2.child = nextResource) : (current = newProps.last, null !== current ? current.sibling = nextResource : workInProgress2.child = nextResource, newProps.last = nextResource);
          }
          if (null !== newProps.tail)
            return current = newProps.tail, newProps.rendering = current, newProps.tail = current.sibling, newProps.renderingStartTime = now(), current.sibling = null, renderLanes2 = suspenseStackCursor.current, push(
              suspenseStackCursor,
              type ? renderLanes2 & 1 | 2 : renderLanes2 & 1
            ), isHydrating && pushTreeFork(workInProgress2, newProps.treeForkCount), current;
          bubbleProperties(workInProgress2);
          return null;
        case 22:
        case 23:
          return popSuspenseHandler(workInProgress2), popHiddenContext(), newProps = null !== workInProgress2.memoizedState, null !== current ? null !== current.memoizedState !== newProps && (workInProgress2.flags |= 8192) : newProps && (workInProgress2.flags |= 8192), newProps ? 0 !== (renderLanes2 & 536870912) && 0 === (workInProgress2.flags & 128) && (bubbleProperties(workInProgress2), workInProgress2.subtreeFlags & 6 && (workInProgress2.flags |= 8192)) : bubbleProperties(workInProgress2), renderLanes2 = workInProgress2.updateQueue, null !== renderLanes2 && scheduleRetryEffect(workInProgress2, renderLanes2.retryQueue), renderLanes2 = null, null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (renderLanes2 = current.memoizedState.cachePool.pool), newProps = null, null !== workInProgress2.memoizedState && null !== workInProgress2.memoizedState.cachePool && (newProps = workInProgress2.memoizedState.cachePool.pool), newProps !== renderLanes2 && (workInProgress2.flags |= 2048), null !== current && pop(resumedCache), null;
        case 24:
          return renderLanes2 = null, null !== current && (renderLanes2 = current.memoizedState.cache), workInProgress2.memoizedState.cache !== renderLanes2 && (workInProgress2.flags |= 2048), popProvider(CacheContext), bubbleProperties(workInProgress2), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(formatProdErrorMessage(156, workInProgress2.tag));
    }
    function unwindWork(current, workInProgress2) {
      popTreeContext(workInProgress2);
      switch (workInProgress2.tag) {
        case 1:
          return current = workInProgress2.flags, current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 3:
          return popProvider(CacheContext), popHostContainer(), current = workInProgress2.flags, 0 !== (current & 65536) && 0 === (current & 128) ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 26:
        case 27:
        case 5:
          return popHostContext(workInProgress2), null;
        case 31:
          if (null !== workInProgress2.memoizedState) {
            popSuspenseHandler(workInProgress2);
            if (null === workInProgress2.alternate)
              throw Error(formatProdErrorMessage(340));
            resetHydrationState();
          }
          current = workInProgress2.flags;
          return current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 13:
          popSuspenseHandler(workInProgress2);
          current = workInProgress2.memoizedState;
          if (null !== current && null !== current.dehydrated) {
            if (null === workInProgress2.alternate)
              throw Error(formatProdErrorMessage(340));
            resetHydrationState();
          }
          current = workInProgress2.flags;
          return current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 19:
          return pop(suspenseStackCursor), null;
        case 4:
          return popHostContainer(), null;
        case 10:
          return popProvider(workInProgress2.type), null;
        case 22:
        case 23:
          return popSuspenseHandler(workInProgress2), popHiddenContext(), null !== current && pop(resumedCache), current = workInProgress2.flags, current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 24:
          return popProvider(CacheContext), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function unwindInterruptedWork(current, interruptedWork) {
      popTreeContext(interruptedWork);
      switch (interruptedWork.tag) {
        case 3:
          popProvider(CacheContext);
          popHostContainer();
          break;
        case 26:
        case 27:
        case 5:
          popHostContext(interruptedWork);
          break;
        case 4:
          popHostContainer();
          break;
        case 31:
          null !== interruptedWork.memoizedState && popSuspenseHandler(interruptedWork);
          break;
        case 13:
          popSuspenseHandler(interruptedWork);
          break;
        case 19:
          pop(suspenseStackCursor);
          break;
        case 10:
          popProvider(interruptedWork.type);
          break;
        case 22:
        case 23:
          popSuspenseHandler(interruptedWork);
          popHiddenContext();
          null !== current && pop(resumedCache);
          break;
        case 24:
          popProvider(CacheContext);
      }
    }
    function commitHookEffectListMount(flags, finishedWork) {
      try {
        var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
        if (null !== lastEffect) {
          var firstEffect = lastEffect.next;
          updateQueue = firstEffect;
          do {
            if ((updateQueue.tag & flags) === flags) {
              lastEffect = void 0;
              var create2 = updateQueue.create, inst = updateQueue.inst;
              lastEffect = create2();
              inst.destroy = lastEffect;
            }
            updateQueue = updateQueue.next;
          } while (updateQueue !== firstEffect);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor$jscomp$0) {
      try {
        var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
        if (null !== lastEffect) {
          var firstEffect = lastEffect.next;
          updateQueue = firstEffect;
          do {
            if ((updateQueue.tag & flags) === flags) {
              var inst = updateQueue.inst, destroy = inst.destroy;
              if (void 0 !== destroy) {
                inst.destroy = void 0;
                lastEffect = finishedWork;
                var nearestMountedAncestor = nearestMountedAncestor$jscomp$0, destroy_ = destroy;
                try {
                  destroy_();
                } catch (error) {
                  captureCommitPhaseError(
                    lastEffect,
                    nearestMountedAncestor,
                    error
                  );
                }
              }
            }
            updateQueue = updateQueue.next;
          } while (updateQueue !== firstEffect);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function commitClassCallbacks(finishedWork) {
      var updateQueue = finishedWork.updateQueue;
      if (null !== updateQueue) {
        var instance = finishedWork.stateNode;
        try {
          commitCallbacks(updateQueue, instance);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
    }
    function safelyCallComponentWillUnmount(current, nearestMountedAncestor, instance) {
      instance.props = resolveClassComponentProps(
        current.type,
        current.memoizedProps
      );
      instance.state = current.memoizedState;
      try {
        instance.componentWillUnmount();
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      }
    }
    function safelyAttachRef(current, nearestMountedAncestor) {
      try {
        var ref = current.ref;
        if (null !== ref) {
          switch (current.tag) {
            case 26:
            case 27:
            case 5:
              var instanceToUse = current.stateNode;
              break;
            case 30:
              instanceToUse = current.stateNode;
              break;
            default:
              instanceToUse = current.stateNode;
          }
          "function" === typeof ref ? current.refCleanup = ref(instanceToUse) : ref.current = instanceToUse;
        }
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      }
    }
    function safelyDetachRef(current, nearestMountedAncestor) {
      var ref = current.ref, refCleanup = current.refCleanup;
      if (null !== ref)
        if ("function" === typeof refCleanup)
          try {
            refCleanup();
          } catch (error) {
            captureCommitPhaseError(current, nearestMountedAncestor, error);
          } finally {
            current.refCleanup = null, current = current.alternate, null != current && (current.refCleanup = null);
          }
        else if ("function" === typeof ref)
          try {
            ref(null);
          } catch (error$140) {
            captureCommitPhaseError(current, nearestMountedAncestor, error$140);
          }
        else ref.current = null;
    }
    function commitHostMount(finishedWork) {
      var type = finishedWork.type, props = finishedWork.memoizedProps, instance = finishedWork.stateNode;
      try {
        a: switch (type) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            props.autoFocus && instance.focus();
            break a;
          case "img":
            props.src ? instance.src = props.src : props.srcSet && (instance.srcset = props.srcSet);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function commitHostUpdate(finishedWork, newProps, oldProps) {
      try {
        var domElement = finishedWork.stateNode;
        updateProperties(domElement, finishedWork.type, oldProps, newProps);
        domElement[internalPropsKey] = newProps;
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function isHostParent(fiber) {
      return 5 === fiber.tag || 3 === fiber.tag || 26 === fiber.tag || 27 === fiber.tag && isSingletonScope(fiber.type) || 4 === fiber.tag;
    }
    function getHostSibling(fiber) {
      a: for (; ; ) {
        for (; null === fiber.sibling; ) {
          if (null === fiber.return || isHostParent(fiber.return)) return null;
          fiber = fiber.return;
        }
        fiber.sibling.return = fiber.return;
        for (fiber = fiber.sibling; 5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag; ) {
          if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
          if (fiber.flags & 2) continue a;
          if (null === fiber.child || 4 === fiber.tag) continue a;
          else fiber.child.return = fiber, fiber = fiber.child;
        }
        if (!(fiber.flags & 2)) return fiber.stateNode;
      }
    }
    function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
      var tag = node.tag;
      if (5 === tag || 6 === tag)
        node = node.stateNode, before ? (9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent).insertBefore(node, before) : (before = 9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent, before.appendChild(node), parent = parent._reactRootContainer, null !== parent && void 0 !== parent || null !== before.onclick || (before.onclick = noop$1));
      else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode, before = null), node = node.child, null !== node))
        for (insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling; null !== node; )
          insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling;
    }
    function insertOrAppendPlacementNode(node, before, parent) {
      var tag = node.tag;
      if (5 === tag || 6 === tag)
        node = node.stateNode, before ? parent.insertBefore(node, before) : parent.appendChild(node);
      else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode), node = node.child, null !== node))
        for (insertOrAppendPlacementNode(node, before, parent), node = node.sibling; null !== node; )
          insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
    }
    function commitHostSingletonAcquisition(finishedWork) {
      var singleton = finishedWork.stateNode, props = finishedWork.memoizedProps;
      try {
        for (var type = finishedWork.type, attributes = singleton.attributes; attributes.length; )
          singleton.removeAttributeNode(attributes[0]);
        setInitialProperties(singleton, type, props);
        singleton[internalInstanceKey] = finishedWork;
        singleton[internalPropsKey] = props;
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    var offscreenSubtreeIsHidden = false;
    var offscreenSubtreeWasHidden = false;
    var needsFormReset = false;
    var PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set;
    var nextEffect = null;
    function commitBeforeMutationEffects(root2, firstChild) {
      root2 = root2.containerInfo;
      eventsEnabled = _enabled;
      root2 = getActiveElementDeep(root2);
      if (hasSelectionCapabilities(root2)) {
        if ("selectionStart" in root2)
          var JSCompiler_temp = {
            start: root2.selectionStart,
            end: root2.selectionEnd
          };
        else
          a: {
            JSCompiler_temp = (JSCompiler_temp = root2.ownerDocument) && JSCompiler_temp.defaultView || window;
            var selection = JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
            if (selection && 0 !== selection.rangeCount) {
              JSCompiler_temp = selection.anchorNode;
              var anchorOffset = selection.anchorOffset, focusNode = selection.focusNode;
              selection = selection.focusOffset;
              try {
                JSCompiler_temp.nodeType, focusNode.nodeType;
              } catch (e$20) {
                JSCompiler_temp = null;
                break a;
              }
              var length = 0, start = -1, end = -1, indexWithinAnchor = 0, indexWithinFocus = 0, node = root2, parentNode = null;
              b: for (; ; ) {
                for (var next; ; ) {
                  node !== JSCompiler_temp || 0 !== anchorOffset && 3 !== node.nodeType || (start = length + anchorOffset);
                  node !== focusNode || 0 !== selection && 3 !== node.nodeType || (end = length + selection);
                  3 === node.nodeType && (length += node.nodeValue.length);
                  if (null === (next = node.firstChild)) break;
                  parentNode = node;
                  node = next;
                }
                for (; ; ) {
                  if (node === root2) break b;
                  parentNode === JSCompiler_temp && ++indexWithinAnchor === anchorOffset && (start = length);
                  parentNode === focusNode && ++indexWithinFocus === selection && (end = length);
                  if (null !== (next = node.nextSibling)) break;
                  node = parentNode;
                  parentNode = node.parentNode;
                }
                node = next;
              }
              JSCompiler_temp = -1 === start || -1 === end ? null : { start, end };
            } else JSCompiler_temp = null;
          }
        JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
      } else JSCompiler_temp = null;
      selectionInformation = { focusedElem: root2, selectionRange: JSCompiler_temp };
      _enabled = false;
      for (nextEffect = firstChild; null !== nextEffect; )
        if (firstChild = nextEffect, root2 = firstChild.child, 0 !== (firstChild.subtreeFlags & 1028) && null !== root2)
          root2.return = firstChild, nextEffect = root2;
        else
          for (; null !== nextEffect; ) {
            firstChild = nextEffect;
            focusNode = firstChild.alternate;
            root2 = firstChild.flags;
            switch (firstChild.tag) {
              case 0:
                if (0 !== (root2 & 4) && (root2 = firstChild.updateQueue, root2 = null !== root2 ? root2.events : null, null !== root2))
                  for (JSCompiler_temp = 0; JSCompiler_temp < root2.length; JSCompiler_temp++)
                    anchorOffset = root2[JSCompiler_temp], anchorOffset.ref.impl = anchorOffset.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (0 !== (root2 & 1024) && null !== focusNode) {
                  root2 = void 0;
                  JSCompiler_temp = firstChild;
                  anchorOffset = focusNode.memoizedProps;
                  focusNode = focusNode.memoizedState;
                  selection = JSCompiler_temp.stateNode;
                  try {
                    var resolvedPrevProps = resolveClassComponentProps(
                      JSCompiler_temp.type,
                      anchorOffset
                    );
                    root2 = selection.getSnapshotBeforeUpdate(
                      resolvedPrevProps,
                      focusNode
                    );
                    selection.__reactInternalSnapshotBeforeUpdate = root2;
                  } catch (error) {
                    captureCommitPhaseError(
                      JSCompiler_temp,
                      JSCompiler_temp.return,
                      error
                    );
                  }
                }
                break;
              case 3:
                if (0 !== (root2 & 1024)) {
                  if (root2 = firstChild.stateNode.containerInfo, JSCompiler_temp = root2.nodeType, 9 === JSCompiler_temp)
                    clearContainerSparingly(root2);
                  else if (1 === JSCompiler_temp)
                    switch (root2.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        clearContainerSparingly(root2);
                        break;
                      default:
                        root2.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (0 !== (root2 & 1024)) throw Error(formatProdErrorMessage(163));
            }
            root2 = firstChild.sibling;
            if (null !== root2) {
              root2.return = firstChild.return;
              nextEffect = root2;
              break;
            }
            nextEffect = firstChild.return;
          }
    }
    function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
      var flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 15:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          flags & 4 && commitHookEffectListMount(5, finishedWork);
          break;
        case 1:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          if (flags & 4)
            if (finishedRoot = finishedWork.stateNode, null === current)
              try {
                finishedRoot.componentDidMount();
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            else {
              var prevProps = resolveClassComponentProps(
                finishedWork.type,
                current.memoizedProps
              );
              current = current.memoizedState;
              try {
                finishedRoot.componentDidUpdate(
                  prevProps,
                  current,
                  finishedRoot.__reactInternalSnapshotBeforeUpdate
                );
              } catch (error$139) {
                captureCommitPhaseError(
                  finishedWork,
                  finishedWork.return,
                  error$139
                );
              }
            }
          flags & 64 && commitClassCallbacks(finishedWork);
          flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
          break;
        case 3:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          if (flags & 64 && (finishedRoot = finishedWork.updateQueue, null !== finishedRoot)) {
            current = null;
            if (null !== finishedWork.child)
              switch (finishedWork.child.tag) {
                case 27:
                case 5:
                  current = finishedWork.child.stateNode;
                  break;
                case 1:
                  current = finishedWork.child.stateNode;
              }
            try {
              commitCallbacks(finishedRoot, current);
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          }
          break;
        case 27:
          null === current && flags & 4 && commitHostSingletonAcquisition(finishedWork);
        case 26:
        case 5:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          null === current && flags & 4 && commitHostMount(finishedWork);
          flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
          break;
        case 12:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          break;
        case 31:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
          break;
        case 13:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
          flags & 64 && (finishedRoot = finishedWork.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot && (finishedWork = retryDehydratedSuspenseBoundary.bind(
            null,
            finishedWork
          ), registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
          break;
        case 22:
          flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
          if (!flags) {
            current = null !== current && null !== current.memoizedState || offscreenSubtreeWasHidden;
            prevProps = offscreenSubtreeIsHidden;
            var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
            offscreenSubtreeIsHidden = flags;
            (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden ? recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              0 !== (finishedWork.subtreeFlags & 8772)
            ) : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            offscreenSubtreeIsHidden = prevProps;
            offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
          }
          break;
        case 30:
          break;
        default:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      }
    }
    function detachFiberAfterEffects(fiber) {
      var alternate = fiber.alternate;
      null !== alternate && (fiber.alternate = null, detachFiberAfterEffects(alternate));
      fiber.child = null;
      fiber.deletions = null;
      fiber.sibling = null;
      5 === fiber.tag && (alternate = fiber.stateNode, null !== alternate && detachDeletedInstance(alternate));
      fiber.stateNode = null;
      fiber.return = null;
      fiber.dependencies = null;
      fiber.memoizedProps = null;
      fiber.memoizedState = null;
      fiber.pendingProps = null;
      fiber.stateNode = null;
      fiber.updateQueue = null;
    }
    var hostParent = null;
    var hostParentIsContainer = false;
    function recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, parent) {
      for (parent = parent.child; null !== parent; )
        commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent), parent = parent.sibling;
    }
    function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
      if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
        try {
          injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
        } catch (err) {
        }
      switch (deletedFiber.tag) {
        case 26:
          offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          deletedFiber.memoizedState ? deletedFiber.memoizedState.count-- : deletedFiber.stateNode && (deletedFiber = deletedFiber.stateNode, deletedFiber.parentNode.removeChild(deletedFiber));
          break;
        case 27:
          offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
          var prevHostParent = hostParent, prevHostParentIsContainer = hostParentIsContainer;
          isSingletonScope(deletedFiber.type) && (hostParent = deletedFiber.stateNode, hostParentIsContainer = false);
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          releaseSingletonInstance(deletedFiber.stateNode);
          hostParent = prevHostParent;
          hostParentIsContainer = prevHostParentIsContainer;
          break;
        case 5:
          offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
        case 6:
          prevHostParent = hostParent;
          prevHostParentIsContainer = hostParentIsContainer;
          hostParent = null;
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          hostParent = prevHostParent;
          hostParentIsContainer = prevHostParentIsContainer;
          if (null !== hostParent)
            if (hostParentIsContainer)
              try {
                (9 === hostParent.nodeType ? hostParent.body : "HTML" === hostParent.nodeName ? hostParent.ownerDocument.body : hostParent).removeChild(deletedFiber.stateNode);
              } catch (error) {
                captureCommitPhaseError(
                  deletedFiber,
                  nearestMountedAncestor,
                  error
                );
              }
            else
              try {
                hostParent.removeChild(deletedFiber.stateNode);
              } catch (error) {
                captureCommitPhaseError(
                  deletedFiber,
                  nearestMountedAncestor,
                  error
                );
              }
          break;
        case 18:
          null !== hostParent && (hostParentIsContainer ? (finishedRoot = hostParent, clearHydrationBoundary(
            9 === finishedRoot.nodeType ? finishedRoot.body : "HTML" === finishedRoot.nodeName ? finishedRoot.ownerDocument.body : finishedRoot,
            deletedFiber.stateNode
          ), retryIfBlockedOn(finishedRoot)) : clearHydrationBoundary(hostParent, deletedFiber.stateNode));
          break;
        case 4:
          prevHostParent = hostParent;
          prevHostParentIsContainer = hostParentIsContainer;
          hostParent = deletedFiber.stateNode.containerInfo;
          hostParentIsContainer = true;
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          hostParent = prevHostParent;
          hostParentIsContainer = prevHostParentIsContainer;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
          offscreenSubtreeWasHidden || commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          break;
        case 1:
          offscreenSubtreeWasHidden || (safelyDetachRef(deletedFiber, nearestMountedAncestor), prevHostParent = deletedFiber.stateNode, "function" === typeof prevHostParent.componentWillUnmount && safelyCallComponentWillUnmount(
            deletedFiber,
            nearestMountedAncestor,
            prevHostParent
          ));
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          break;
        case 21:
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          break;
        case 22:
          offscreenSubtreeWasHidden = (prevHostParent = offscreenSubtreeWasHidden) || null !== deletedFiber.memoizedState;
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          offscreenSubtreeWasHidden = prevHostParent;
          break;
        default:
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
      }
    }
    function commitActivityHydrationCallbacks(finishedRoot, finishedWork) {
      if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot))) {
        finishedRoot = finishedRoot.dehydrated;
        try {
          retryIfBlockedOn(finishedRoot);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
    }
    function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
      if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot))))
        try {
          retryIfBlockedOn(finishedRoot);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
    }
    function getRetryCache(finishedWork) {
      switch (finishedWork.tag) {
        case 31:
        case 13:
        case 19:
          var retryCache = finishedWork.stateNode;
          null === retryCache && (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
          return retryCache;
        case 22:
          return finishedWork = finishedWork.stateNode, retryCache = finishedWork._retryCache, null === retryCache && (retryCache = finishedWork._retryCache = new PossiblyWeakSet()), retryCache;
        default:
          throw Error(formatProdErrorMessage(435, finishedWork.tag));
      }
    }
    function attachSuspenseRetryListeners(finishedWork, wakeables) {
      var retryCache = getRetryCache(finishedWork);
      wakeables.forEach(function(wakeable) {
        if (!retryCache.has(wakeable)) {
          retryCache.add(wakeable);
          var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
          wakeable.then(retry, retry);
        }
      });
    }
    function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
      var deletions = parentFiber.deletions;
      if (null !== deletions)
        for (var i = 0; i < deletions.length; i++) {
          var childToDelete = deletions[i], root2 = root$jscomp$0, returnFiber = parentFiber, parent = returnFiber;
          a: for (; null !== parent; ) {
            switch (parent.tag) {
              case 27:
                if (isSingletonScope(parent.type)) {
                  hostParent = parent.stateNode;
                  hostParentIsContainer = false;
                  break a;
                }
                break;
              case 5:
                hostParent = parent.stateNode;
                hostParentIsContainer = false;
                break a;
              case 3:
              case 4:
                hostParent = parent.stateNode.containerInfo;
                hostParentIsContainer = true;
                break a;
            }
            parent = parent.return;
          }
          if (null === hostParent) throw Error(formatProdErrorMessage(160));
          commitDeletionEffectsOnFiber(root2, returnFiber, childToDelete);
          hostParent = null;
          hostParentIsContainer = false;
          root2 = childToDelete.alternate;
          null !== root2 && (root2.return = null);
          childToDelete.return = null;
        }
      if (parentFiber.subtreeFlags & 13886)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitMutationEffectsOnFiber(parentFiber, root$jscomp$0), parentFiber = parentFiber.sibling;
    }
    var currentHoistableRoot = null;
    function commitMutationEffectsOnFiber(finishedWork, root2) {
      var current = finishedWork.alternate, flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 4 && (commitHookEffectListUnmount(3, finishedWork, finishedWork.return), commitHookEffectListMount(3, finishedWork), commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
          break;
        case 1:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          flags & 64 && offscreenSubtreeIsHidden && (finishedWork = finishedWork.updateQueue, null !== finishedWork && (flags = finishedWork.callbacks, null !== flags && (current = finishedWork.shared.hiddenCallbacks, finishedWork.shared.hiddenCallbacks = null === current ? flags : current.concat(flags))));
          break;
        case 26:
          var hoistableRoot = currentHoistableRoot;
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          if (flags & 4) {
            var currentResource = null !== current ? current.memoizedState : null;
            flags = finishedWork.memoizedState;
            if (null === current)
              if (null === flags)
                if (null === finishedWork.stateNode) {
                  a: {
                    flags = finishedWork.type;
                    current = finishedWork.memoizedProps;
                    hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
                    b: switch (flags) {
                      case "title":
                        currentResource = hoistableRoot.getElementsByTagName("title")[0];
                        if (!currentResource || currentResource[internalHoistableMarker] || currentResource[internalInstanceKey] || "http://www.w3.org/2000/svg" === currentResource.namespaceURI || currentResource.hasAttribute("itemprop"))
                          currentResource = hoistableRoot.createElement(flags), hoistableRoot.head.insertBefore(
                            currentResource,
                            hoistableRoot.querySelector("head > title")
                          );
                        setInitialProperties(currentResource, flags, current);
                        currentResource[internalInstanceKey] = finishedWork;
                        markNodeAsHoistable(currentResource);
                        flags = currentResource;
                        break a;
                      case "link":
                        var maybeNodes = getHydratableHoistableCache(
                          "link",
                          "href",
                          hoistableRoot
                        ).get(flags + (current.href || ""));
                        if (maybeNodes) {
                          for (var i = 0; i < maybeNodes.length; i++)
                            if (currentResource = maybeNodes[i], currentResource.getAttribute("href") === (null == current.href || "" === current.href ? null : current.href) && currentResource.getAttribute("rel") === (null == current.rel ? null : current.rel) && currentResource.getAttribute("title") === (null == current.title ? null : current.title) && currentResource.getAttribute("crossorigin") === (null == current.crossOrigin ? null : current.crossOrigin)) {
                              maybeNodes.splice(i, 1);
                              break b;
                            }
                        }
                        currentResource = hoistableRoot.createElement(flags);
                        setInitialProperties(currentResource, flags, current);
                        hoistableRoot.head.appendChild(currentResource);
                        break;
                      case "meta":
                        if (maybeNodes = getHydratableHoistableCache(
                          "meta",
                          "content",
                          hoistableRoot
                        ).get(flags + (current.content || ""))) {
                          for (i = 0; i < maybeNodes.length; i++)
                            if (currentResource = maybeNodes[i], currentResource.getAttribute("content") === (null == current.content ? null : "" + current.content) && currentResource.getAttribute("name") === (null == current.name ? null : current.name) && currentResource.getAttribute("property") === (null == current.property ? null : current.property) && currentResource.getAttribute("http-equiv") === (null == current.httpEquiv ? null : current.httpEquiv) && currentResource.getAttribute("charset") === (null == current.charSet ? null : current.charSet)) {
                              maybeNodes.splice(i, 1);
                              break b;
                            }
                        }
                        currentResource = hoistableRoot.createElement(flags);
                        setInitialProperties(currentResource, flags, current);
                        hoistableRoot.head.appendChild(currentResource);
                        break;
                      default:
                        throw Error(formatProdErrorMessage(468, flags));
                    }
                    currentResource[internalInstanceKey] = finishedWork;
                    markNodeAsHoistable(currentResource);
                    flags = currentResource;
                  }
                  finishedWork.stateNode = flags;
                } else
                  mountHoistable(
                    hoistableRoot,
                    finishedWork.type,
                    finishedWork.stateNode
                  );
              else
                finishedWork.stateNode = acquireResource(
                  hoistableRoot,
                  flags,
                  finishedWork.memoizedProps
                );
            else
              currentResource !== flags ? (null === currentResource ? null !== current.stateNode && (current = current.stateNode, current.parentNode.removeChild(current)) : currentResource.count--, null === flags ? mountHoistable(
                hoistableRoot,
                finishedWork.type,
                finishedWork.stateNode
              ) : acquireResource(
                hoistableRoot,
                flags,
                finishedWork.memoizedProps
              )) : null === flags && null !== finishedWork.stateNode && commitHostUpdate(
                finishedWork,
                finishedWork.memoizedProps,
                current.memoizedProps
              );
          }
          break;
        case 27:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          null !== current && flags & 4 && commitHostUpdate(
            finishedWork,
            finishedWork.memoizedProps,
            current.memoizedProps
          );
          break;
        case 5:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          if (finishedWork.flags & 32) {
            hoistableRoot = finishedWork.stateNode;
            try {
              setTextContent(hoistableRoot, "");
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          }
          flags & 4 && null != finishedWork.stateNode && (hoistableRoot = finishedWork.memoizedProps, commitHostUpdate(
            finishedWork,
            hoistableRoot,
            null !== current ? current.memoizedProps : hoistableRoot
          ));
          flags & 1024 && (needsFormReset = true);
          break;
        case 6:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          if (flags & 4) {
            if (null === finishedWork.stateNode)
              throw Error(formatProdErrorMessage(162));
            flags = finishedWork.memoizedProps;
            current = finishedWork.stateNode;
            try {
              current.nodeValue = flags;
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          }
          break;
        case 3:
          tagCaches = null;
          hoistableRoot = currentHoistableRoot;
          currentHoistableRoot = getHoistableRoot(root2.containerInfo);
          recursivelyTraverseMutationEffects(root2, finishedWork);
          currentHoistableRoot = hoistableRoot;
          commitReconciliationEffects(finishedWork);
          if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
            try {
              retryIfBlockedOn(root2.containerInfo);
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          needsFormReset && (needsFormReset = false, recursivelyResetForms(finishedWork));
          break;
        case 4:
          flags = currentHoistableRoot;
          currentHoistableRoot = getHoistableRoot(
            finishedWork.stateNode.containerInfo
          );
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          currentHoistableRoot = flags;
          break;
        case 12:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          break;
        case 31:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
          break;
        case 13:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          finishedWork.child.flags & 8192 && null !== finishedWork.memoizedState !== (null !== current && null !== current.memoizedState) && (globalMostRecentFallbackTime = now());
          flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
          break;
        case 22:
          hoistableRoot = null !== finishedWork.memoizedState;
          var wasHidden = null !== current && null !== current.memoizedState, prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden, prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
          offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
          offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
          recursivelyTraverseMutationEffects(root2, finishedWork);
          offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
          offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
          commitReconciliationEffects(finishedWork);
          if (flags & 8192)
            a: for (root2 = finishedWork.stateNode, root2._visibility = hoistableRoot ? root2._visibility & -2 : root2._visibility | 1, hoistableRoot && (null === current || wasHidden || offscreenSubtreeIsHidden || offscreenSubtreeWasHidden || recursivelyTraverseDisappearLayoutEffects(finishedWork)), current = null, root2 = finishedWork; ; ) {
              if (5 === root2.tag || 26 === root2.tag) {
                if (null === current) {
                  wasHidden = current = root2;
                  try {
                    if (currentResource = wasHidden.stateNode, hoistableRoot)
                      maybeNodes = currentResource.style, "function" === typeof maybeNodes.setProperty ? maybeNodes.setProperty("display", "none", "important") : maybeNodes.display = "none";
                    else {
                      i = wasHidden.stateNode;
                      var styleProp = wasHidden.memoizedProps.style, display = void 0 !== styleProp && null !== styleProp && styleProp.hasOwnProperty("display") ? styleProp.display : null;
                      i.style.display = null == display || "boolean" === typeof display ? "" : ("" + display).trim();
                    }
                  } catch (error) {
                    captureCommitPhaseError(wasHidden, wasHidden.return, error);
                  }
                }
              } else if (6 === root2.tag) {
                if (null === current) {
                  wasHidden = root2;
                  try {
                    wasHidden.stateNode.nodeValue = hoistableRoot ? "" : wasHidden.memoizedProps;
                  } catch (error) {
                    captureCommitPhaseError(wasHidden, wasHidden.return, error);
                  }
                }
              } else if (18 === root2.tag) {
                if (null === current) {
                  wasHidden = root2;
                  try {
                    var instance = wasHidden.stateNode;
                    hoistableRoot ? hideOrUnhideDehydratedBoundary(instance, true) : hideOrUnhideDehydratedBoundary(wasHidden.stateNode, false);
                  } catch (error) {
                    captureCommitPhaseError(wasHidden, wasHidden.return, error);
                  }
                }
              } else if ((22 !== root2.tag && 23 !== root2.tag || null === root2.memoizedState || root2 === finishedWork) && null !== root2.child) {
                root2.child.return = root2;
                root2 = root2.child;
                continue;
              }
              if (root2 === finishedWork) break a;
              for (; null === root2.sibling; ) {
                if (null === root2.return || root2.return === finishedWork) break a;
                current === root2 && (current = null);
                root2 = root2.return;
              }
              current === root2 && (current = null);
              root2.sibling.return = root2.return;
              root2 = root2.sibling;
            }
          flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (current = flags.retryQueue, null !== current && (flags.retryQueue = null, attachSuspenseRetryListeners(finishedWork, current))));
          break;
        case 19:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          recursivelyTraverseMutationEffects(root2, finishedWork), commitReconciliationEffects(finishedWork);
      }
    }
    function commitReconciliationEffects(finishedWork) {
      var flags = finishedWork.flags;
      if (flags & 2) {
        try {
          for (var hostParentFiber, parentFiber = finishedWork.return; null !== parentFiber; ) {
            if (isHostParent(parentFiber)) {
              hostParentFiber = parentFiber;
              break;
            }
            parentFiber = parentFiber.return;
          }
          if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
          switch (hostParentFiber.tag) {
            case 27:
              var parent = hostParentFiber.stateNode, before = getHostSibling(finishedWork);
              insertOrAppendPlacementNode(finishedWork, before, parent);
              break;
            case 5:
              var parent$141 = hostParentFiber.stateNode;
              hostParentFiber.flags & 32 && (setTextContent(parent$141, ""), hostParentFiber.flags &= -33);
              var before$142 = getHostSibling(finishedWork);
              insertOrAppendPlacementNode(finishedWork, before$142, parent$141);
              break;
            case 3:
            case 4:
              var parent$143 = hostParentFiber.stateNode.containerInfo, before$144 = getHostSibling(finishedWork);
              insertOrAppendPlacementNodeIntoContainer(
                finishedWork,
                before$144,
                parent$143
              );
              break;
            default:
              throw Error(formatProdErrorMessage(161));
          }
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
        finishedWork.flags &= -3;
      }
      flags & 4096 && (finishedWork.flags &= -4097);
    }
    function recursivelyResetForms(parentFiber) {
      if (parentFiber.subtreeFlags & 1024)
        for (parentFiber = parentFiber.child; null !== parentFiber; ) {
          var fiber = parentFiber;
          recursivelyResetForms(fiber);
          5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
          parentFiber = parentFiber.sibling;
        }
    }
    function recursivelyTraverseLayoutEffects(root2, parentFiber) {
      if (parentFiber.subtreeFlags & 8772)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitLayoutEffectOnFiber(root2, parentFiber.alternate, parentFiber), parentFiber = parentFiber.sibling;
    }
    function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        var finishedWork = parentFiber;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 1:
            safelyDetachRef(finishedWork, finishedWork.return);
            var instance = finishedWork.stateNode;
            "function" === typeof instance.componentWillUnmount && safelyCallComponentWillUnmount(
              finishedWork,
              finishedWork.return,
              instance
            );
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 27:
            releaseSingletonInstance(finishedWork.stateNode);
          case 26:
          case 5:
            safelyDetachRef(finishedWork, finishedWork.return);
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 22:
            null === finishedWork.memoizedState && recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 30:
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          default:
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function recursivelyTraverseReappearLayoutEffects(finishedRoot$jscomp$0, parentFiber, includeWorkInProgressEffects) {
      includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        var current = parentFiber.alternate, finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            commitHookEffectListMount(4, finishedWork);
            break;
          case 1:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            current = finishedWork;
            finishedRoot = current.stateNode;
            if ("function" === typeof finishedRoot.componentDidMount)
              try {
                finishedRoot.componentDidMount();
              } catch (error) {
                captureCommitPhaseError(current, current.return, error);
              }
            current = finishedWork;
            finishedRoot = current.updateQueue;
            if (null !== finishedRoot) {
              var instance = current.stateNode;
              try {
                var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
                if (null !== hiddenCallbacks)
                  for (finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0; finishedRoot < hiddenCallbacks.length; finishedRoot++)
                    callCallback(hiddenCallbacks[finishedRoot], instance);
              } catch (error) {
                captureCommitPhaseError(current, current.return, error);
              }
            }
            includeWorkInProgressEffects && flags & 64 && commitClassCallbacks(finishedWork);
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 27:
            commitHostSingletonAcquisition(finishedWork);
          case 26:
          case 5:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && null === current && flags & 4 && commitHostMount(finishedWork);
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 12:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            break;
          case 31:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
            break;
          case 13:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
            break;
          case 22:
            null === finishedWork.memoizedState && recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 30:
            break;
          default:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function commitOffscreenPassiveMountEffects(current, finishedWork) {
      var previousCache = null;
      null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (previousCache = current.memoizedState.cachePool.pool);
      current = null;
      null !== finishedWork.memoizedState && null !== finishedWork.memoizedState.cachePool && (current = finishedWork.memoizedState.cachePool.pool);
      current !== previousCache && (null != current && current.refCount++, null != previousCache && releaseCache(previousCache));
    }
    function commitCachePassiveMountEffect(current, finishedWork) {
      current = null;
      null !== finishedWork.alternate && (current = finishedWork.alternate.memoizedState.cache);
      finishedWork = finishedWork.memoizedState.cache;
      finishedWork !== current && (finishedWork.refCount++, null != current && releaseCache(current));
    }
    function recursivelyTraversePassiveMountEffects(root2, parentFiber, committedLanes, committedTransitions) {
      if (parentFiber.subtreeFlags & 10256)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitPassiveMountOnFiber(
            root2,
            parentFiber,
            committedLanes,
            committedTransitions
          ), parentFiber = parentFiber.sibling;
    }
    function commitPassiveMountOnFiber(finishedRoot, finishedWork, committedLanes, committedTransitions) {
      var flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 15:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          flags & 2048 && commitHookEffectListMount(9, finishedWork);
          break;
        case 1:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          break;
        case 3:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          flags & 2048 && (finishedRoot = null, null !== finishedWork.alternate && (finishedRoot = finishedWork.alternate.memoizedState.cache), finishedWork = finishedWork.memoizedState.cache, finishedWork !== finishedRoot && (finishedWork.refCount++, null != finishedRoot && releaseCache(finishedRoot)));
          break;
        case 12:
          if (flags & 2048) {
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
            finishedRoot = finishedWork.stateNode;
            try {
              var _finishedWork$memoize2 = finishedWork.memoizedProps, id = _finishedWork$memoize2.id, onPostCommit = _finishedWork$memoize2.onPostCommit;
              "function" === typeof onPostCommit && onPostCommit(
                id,
                null === finishedWork.alternate ? "mount" : "update",
                finishedRoot.passiveEffectDuration,
                -0
              );
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          } else
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
          break;
        case 31:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          break;
        case 13:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          break;
        case 23:
          break;
        case 22:
          _finishedWork$memoize2 = finishedWork.stateNode;
          id = finishedWork.alternate;
          null !== finishedWork.memoizedState ? _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          ) : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork) : _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          ) : (_finishedWork$memoize2._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions,
            0 !== (finishedWork.subtreeFlags & 10256) || false
          ));
          flags & 2048 && commitOffscreenPassiveMountEffects(id, finishedWork);
          break;
        case 24:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
          break;
        default:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
      }
    }
    function recursivelyTraverseReconnectPassiveEffects(finishedRoot$jscomp$0, parentFiber, committedLanes$jscomp$0, committedTransitions$jscomp$0, includeWorkInProgressEffects) {
      includeWorkInProgressEffects = includeWorkInProgressEffects && (0 !== (parentFiber.subtreeFlags & 10256) || false);
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, committedLanes = committedLanes$jscomp$0, committedTransitions = committedTransitions$jscomp$0, flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
            commitHookEffectListMount(8, finishedWork);
            break;
          case 23:
            break;
          case 22:
            var instance = finishedWork.stateNode;
            null !== finishedWork.memoizedState ? instance._visibility & 2 ? recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ) : recursivelyTraverseAtomicPassiveEffects(
              finishedRoot,
              finishedWork
            ) : (instance._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ));
            includeWorkInProgressEffects && flags & 2048 && commitOffscreenPassiveMountEffects(
              finishedWork.alternate,
              finishedWork
            );
            break;
          case 24:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
            break;
          default:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function recursivelyTraverseAtomicPassiveEffects(finishedRoot$jscomp$0, parentFiber) {
      if (parentFiber.subtreeFlags & 10256)
        for (parentFiber = parentFiber.child; null !== parentFiber; ) {
          var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
          switch (finishedWork.tag) {
            case 22:
              recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
              flags & 2048 && commitOffscreenPassiveMountEffects(
                finishedWork.alternate,
                finishedWork
              );
              break;
            case 24:
              recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
              flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
              break;
            default:
              recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          }
          parentFiber = parentFiber.sibling;
        }
    }
    var suspenseyCommitFlag = 8192;
    function recursivelyAccumulateSuspenseyCommit(parentFiber, committedLanes, suspendedState) {
      if (parentFiber.subtreeFlags & suspenseyCommitFlag)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          accumulateSuspenseyCommitOnFiber(
            parentFiber,
            committedLanes,
            suspendedState
          ), parentFiber = parentFiber.sibling;
    }
    function accumulateSuspenseyCommitOnFiber(fiber, committedLanes, suspendedState) {
      switch (fiber.tag) {
        case 26:
          recursivelyAccumulateSuspenseyCommit(
            fiber,
            committedLanes,
            suspendedState
          );
          fiber.flags & suspenseyCommitFlag && null !== fiber.memoizedState && suspendResource(
            suspendedState,
            currentHoistableRoot,
            fiber.memoizedState,
            fiber.memoizedProps
          );
          break;
        case 5:
          recursivelyAccumulateSuspenseyCommit(
            fiber,
            committedLanes,
            suspendedState
          );
          break;
        case 3:
        case 4:
          var previousHoistableRoot = currentHoistableRoot;
          currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
          recursivelyAccumulateSuspenseyCommit(
            fiber,
            committedLanes,
            suspendedState
          );
          currentHoistableRoot = previousHoistableRoot;
          break;
        case 22:
          null === fiber.memoizedState && (previousHoistableRoot = fiber.alternate, null !== previousHoistableRoot && null !== previousHoistableRoot.memoizedState ? (previousHoistableRoot = suspenseyCommitFlag, suspenseyCommitFlag = 16777216, recursivelyAccumulateSuspenseyCommit(
            fiber,
            committedLanes,
            suspendedState
          ), suspenseyCommitFlag = previousHoistableRoot) : recursivelyAccumulateSuspenseyCommit(
            fiber,
            committedLanes,
            suspendedState
          ));
          break;
        default:
          recursivelyAccumulateSuspenseyCommit(
            fiber,
            committedLanes,
            suspendedState
          );
      }
    }
    function detachAlternateSiblings(parentFiber) {
      var previousFiber = parentFiber.alternate;
      if (null !== previousFiber && (parentFiber = previousFiber.child, null !== parentFiber)) {
        previousFiber.child = null;
        do
          previousFiber = parentFiber.sibling, parentFiber.sibling = null, parentFiber = previousFiber;
        while (null !== parentFiber);
      }
    }
    function recursivelyTraversePassiveUnmountEffects(parentFiber) {
      var deletions = parentFiber.deletions;
      if (0 !== (parentFiber.flags & 16)) {
        if (null !== deletions)
          for (var i = 0; i < deletions.length; i++) {
            var childToDelete = deletions[i];
            nextEffect = childToDelete;
            commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
              childToDelete,
              parentFiber
            );
          }
        detachAlternateSiblings(parentFiber);
      }
      if (parentFiber.subtreeFlags & 10256)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitPassiveUnmountOnFiber(parentFiber), parentFiber = parentFiber.sibling;
    }
    function commitPassiveUnmountOnFiber(finishedWork) {
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 15:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
          finishedWork.flags & 2048 && commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
          break;
        case 3:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
          break;
        case 12:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
          break;
        case 22:
          var instance = finishedWork.stateNode;
          null !== finishedWork.memoizedState && instance._visibility & 2 && (null === finishedWork.return || 13 !== finishedWork.return.tag) ? (instance._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(finishedWork)) : recursivelyTraversePassiveUnmountEffects(finishedWork);
          break;
        default:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
      }
    }
    function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
      var deletions = parentFiber.deletions;
      if (0 !== (parentFiber.flags & 16)) {
        if (null !== deletions)
          for (var i = 0; i < deletions.length; i++) {
            var childToDelete = deletions[i];
            nextEffect = childToDelete;
            commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
              childToDelete,
              parentFiber
            );
          }
        detachAlternateSiblings(parentFiber);
      }
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        deletions = parentFiber;
        switch (deletions.tag) {
          case 0:
          case 11:
          case 15:
            commitHookEffectListUnmount(8, deletions, deletions.return);
            recursivelyTraverseDisconnectPassiveEffects(deletions);
            break;
          case 22:
            i = deletions.stateNode;
            i._visibility & 2 && (i._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(deletions));
            break;
          default:
            recursivelyTraverseDisconnectPassiveEffects(deletions);
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
      for (; null !== nextEffect; ) {
        var fiber = nextEffect;
        switch (fiber.tag) {
          case 0:
          case 11:
          case 15:
            commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
            break;
          case 23:
          case 22:
            if (null !== fiber.memoizedState && null !== fiber.memoizedState.cachePool) {
              var cache = fiber.memoizedState.cachePool.pool;
              null != cache && cache.refCount++;
            }
            break;
          case 24:
            releaseCache(fiber.memoizedState.cache);
        }
        cache = fiber.child;
        if (null !== cache) cache.return = fiber, nextEffect = cache;
        else
          a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
            cache = nextEffect;
            var sibling = cache.sibling, returnFiber = cache.return;
            detachFiberAfterEffects(cache);
            if (cache === fiber) {
              nextEffect = null;
              break a;
            }
            if (null !== sibling) {
              sibling.return = returnFiber;
              nextEffect = sibling;
              break a;
            }
            nextEffect = returnFiber;
          }
      }
    }
    var DefaultAsyncDispatcher = {
      getCacheForType: function(resourceType) {
        var cache = readContext(CacheContext), cacheForType = cache.data.get(resourceType);
        void 0 === cacheForType && (cacheForType = resourceType(), cache.data.set(resourceType, cacheForType));
        return cacheForType;
      },
      cacheSignal: function() {
        return readContext(CacheContext).controller.signal;
      }
    };
    var PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map;
    var executionContext = 0;
    var workInProgressRoot = null;
    var workInProgress = null;
    var workInProgressRootRenderLanes = 0;
    var workInProgressSuspendedReason = 0;
    var workInProgressThrownValue = null;
    var workInProgressRootDidSkipSuspendedSiblings = false;
    var workInProgressRootIsPrerendering = false;
    var workInProgressRootDidAttachPingListener = false;
    var entangledRenderLanes = 0;
    var workInProgressRootExitStatus = 0;
    var workInProgressRootSkippedLanes = 0;
    var workInProgressRootInterleavedUpdatedLanes = 0;
    var workInProgressRootPingedLanes = 0;
    var workInProgressDeferredLane = 0;
    var workInProgressSuspendedRetryLanes = 0;
    var workInProgressRootConcurrentErrors = null;
    var workInProgressRootRecoverableErrors = null;
    var workInProgressRootDidIncludeRecursiveRenderUpdate = false;
    var globalMostRecentFallbackTime = 0;
    var globalMostRecentTransitionTime = 0;
    var workInProgressRootRenderTargetTime = Infinity;
    var workInProgressTransitions = null;
    var legacyErrorBoundariesThatAlreadyFailed = null;
    var pendingEffectsStatus = 0;
    var pendingEffectsRoot = null;
    var pendingFinishedWork = null;
    var pendingEffectsLanes = 0;
    var pendingEffectsRemainingLanes = 0;
    var pendingPassiveTransitions = null;
    var pendingRecoverableErrors = null;
    var nestedUpdateCount = 0;
    var rootWithNestedUpdates = null;
    function requestUpdateLane() {
      return 0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes ? workInProgressRootRenderLanes & -workInProgressRootRenderLanes : null !== ReactSharedInternals.T ? requestTransitionLane() : resolveUpdatePriority();
    }
    function requestDeferredLane() {
      if (0 === workInProgressDeferredLane)
        if (0 === (workInProgressRootRenderLanes & 536870912) || isHydrating) {
          var lane = nextTransitionDeferredLane;
          nextTransitionDeferredLane <<= 1;
          0 === (nextTransitionDeferredLane & 3932160) && (nextTransitionDeferredLane = 262144);
          workInProgressDeferredLane = lane;
        } else workInProgressDeferredLane = 536870912;
      lane = suspenseHandlerStackCursor.current;
      null !== lane && (lane.flags |= 32);
      return workInProgressDeferredLane;
    }
    function scheduleUpdateOnFiber(root2, fiber, lane) {
      if (root2 === workInProgressRoot && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root2.cancelPendingCommit)
        prepareFreshStack(root2, 0), markRootSuspended(
          root2,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane,
          false
        );
      markRootUpdated$1(root2, lane);
      if (0 === (executionContext & 2) || root2 !== workInProgressRoot)
        root2 === workInProgressRoot && (0 === (executionContext & 2) && (workInProgressRootInterleavedUpdatedLanes |= lane), 4 === workInProgressRootExitStatus && markRootSuspended(
          root2,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane,
          false
        )), ensureRootIsScheduled(root2);
    }
    function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
      if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
      var shouldTimeSlice = !forceSync && 0 === (lanes & 127) && 0 === (lanes & root$jscomp$0.expiredLanes) || checkIfRootIsPrerendering(root$jscomp$0, lanes), exitStatus = shouldTimeSlice ? renderRootConcurrent(root$jscomp$0, lanes) : renderRootSync(root$jscomp$0, lanes, true), renderWasConcurrent = shouldTimeSlice;
      do {
        if (0 === exitStatus) {
          workInProgressRootIsPrerendering && !shouldTimeSlice && markRootSuspended(root$jscomp$0, lanes, 0, false);
          break;
        } else {
          forceSync = root$jscomp$0.current.alternate;
          if (renderWasConcurrent && !isRenderConsistentWithExternalStores(forceSync)) {
            exitStatus = renderRootSync(root$jscomp$0, lanes, false);
            renderWasConcurrent = false;
            continue;
          }
          if (2 === exitStatus) {
            renderWasConcurrent = lanes;
            if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
              var JSCompiler_inline_result = 0;
            else
              JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913, JSCompiler_inline_result = 0 !== JSCompiler_inline_result ? JSCompiler_inline_result : JSCompiler_inline_result & 536870912 ? 536870912 : 0;
            if (0 !== JSCompiler_inline_result) {
              lanes = JSCompiler_inline_result;
              a: {
                var root2 = root$jscomp$0;
                exitStatus = workInProgressRootConcurrentErrors;
                var wasRootDehydrated = root2.current.memoizedState.isDehydrated;
                wasRootDehydrated && (prepareFreshStack(root2, JSCompiler_inline_result).flags |= 256);
                JSCompiler_inline_result = renderRootSync(
                  root2,
                  JSCompiler_inline_result,
                  false
                );
                if (2 !== JSCompiler_inline_result) {
                  if (workInProgressRootDidAttachPingListener && !wasRootDehydrated) {
                    root2.errorRecoveryDisabledLanes |= renderWasConcurrent;
                    workInProgressRootInterleavedUpdatedLanes |= renderWasConcurrent;
                    exitStatus = 4;
                    break a;
                  }
                  renderWasConcurrent = workInProgressRootRecoverableErrors;
                  workInProgressRootRecoverableErrors = exitStatus;
                  null !== renderWasConcurrent && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = renderWasConcurrent : workInProgressRootRecoverableErrors.push.apply(
                    workInProgressRootRecoverableErrors,
                    renderWasConcurrent
                  ));
                }
                exitStatus = JSCompiler_inline_result;
              }
              renderWasConcurrent = false;
              if (2 !== exitStatus) continue;
            }
          }
          if (1 === exitStatus) {
            prepareFreshStack(root$jscomp$0, 0);
            markRootSuspended(root$jscomp$0, lanes, 0, true);
            break;
          }
          a: {
            shouldTimeSlice = root$jscomp$0;
            renderWasConcurrent = exitStatus;
            switch (renderWasConcurrent) {
              case 0:
              case 1:
                throw Error(formatProdErrorMessage(345));
              case 4:
                if ((lanes & 4194048) !== lanes) break;
              case 6:
                markRootSuspended(
                  shouldTimeSlice,
                  lanes,
                  workInProgressDeferredLane,
                  !workInProgressRootDidSkipSuspendedSiblings
                );
                break a;
              case 2:
                workInProgressRootRecoverableErrors = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(formatProdErrorMessage(329));
            }
            if ((lanes & 62914560) === lanes && (exitStatus = globalMostRecentFallbackTime + 300 - now(), 10 < exitStatus)) {
              markRootSuspended(
                shouldTimeSlice,
                lanes,
                workInProgressDeferredLane,
                !workInProgressRootDidSkipSuspendedSiblings
              );
              if (0 !== getNextLanes(shouldTimeSlice, 0, true)) break a;
              pendingEffectsLanes = lanes;
              shouldTimeSlice.timeoutHandle = scheduleTimeout(
                commitRootWhenReady.bind(
                  null,
                  shouldTimeSlice,
                  forceSync,
                  workInProgressRootRecoverableErrors,
                  workInProgressTransitions,
                  workInProgressRootDidIncludeRecursiveRenderUpdate,
                  lanes,
                  workInProgressDeferredLane,
                  workInProgressRootInterleavedUpdatedLanes,
                  workInProgressSuspendedRetryLanes,
                  workInProgressRootDidSkipSuspendedSiblings,
                  renderWasConcurrent,
                  "Throttled",
                  -0,
                  0
                ),
                exitStatus
              );
              break a;
            }
            commitRootWhenReady(
              shouldTimeSlice,
              forceSync,
              workInProgressRootRecoverableErrors,
              workInProgressTransitions,
              workInProgressRootDidIncludeRecursiveRenderUpdate,
              lanes,
              workInProgressDeferredLane,
              workInProgressRootInterleavedUpdatedLanes,
              workInProgressSuspendedRetryLanes,
              workInProgressRootDidSkipSuspendedSiblings,
              renderWasConcurrent,
              null,
              -0,
              0
            );
          }
        }
        break;
      } while (1);
      ensureRootIsScheduled(root$jscomp$0);
    }
    function commitRootWhenReady(root2, finishedWork, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, lanes, spawnedLane, updatedLanes, suspendedRetryLanes, didSkipSuspendedSiblings, exitStatus, suspendedCommitReason, completedRenderStartTime, completedRenderEndTime) {
      root2.timeoutHandle = -1;
      suspendedCommitReason = finishedWork.subtreeFlags;
      if (suspendedCommitReason & 8192 || 16785408 === (suspendedCommitReason & 16785408)) {
        suspendedCommitReason = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: noop$1
        };
        accumulateSuspenseyCommitOnFiber(
          finishedWork,
          lanes,
          suspendedCommitReason
        );
        var timeoutOffset = (lanes & 62914560) === lanes ? globalMostRecentFallbackTime - now() : (lanes & 4194048) === lanes ? globalMostRecentTransitionTime - now() : 0;
        timeoutOffset = waitForCommitToBeReady(
          suspendedCommitReason,
          timeoutOffset
        );
        if (null !== timeoutOffset) {
          pendingEffectsLanes = lanes;
          root2.cancelPendingCommit = timeoutOffset(
            commitRoot.bind(
              null,
              root2,
              finishedWork,
              lanes,
              recoverableErrors,
              transitions,
              didIncludeRenderPhaseUpdate,
              spawnedLane,
              updatedLanes,
              suspendedRetryLanes,
              exitStatus,
              suspendedCommitReason,
              null,
              completedRenderStartTime,
              completedRenderEndTime
            )
          );
          markRootSuspended(root2, lanes, spawnedLane, !didSkipSuspendedSiblings);
          return;
        }
      }
      commitRoot(
        root2,
        finishedWork,
        lanes,
        recoverableErrors,
        transitions,
        didIncludeRenderPhaseUpdate,
        spawnedLane,
        updatedLanes,
        suspendedRetryLanes
      );
    }
    function isRenderConsistentWithExternalStores(finishedWork) {
      for (var node = finishedWork; ; ) {
        var tag = node.tag;
        if ((0 === tag || 11 === tag || 15 === tag) && node.flags & 16384 && (tag = node.updateQueue, null !== tag && (tag = tag.stores, null !== tag)))
          for (var i = 0; i < tag.length; i++) {
            var check = tag[i], getSnapshot = check.getSnapshot;
            check = check.value;
            try {
              if (!objectIs(getSnapshot(), check)) return false;
            } catch (error) {
              return false;
            }
          }
        tag = node.child;
        if (node.subtreeFlags & 16384 && null !== tag)
          tag.return = node, node = tag;
        else {
          if (node === finishedWork) break;
          for (; null === node.sibling; ) {
            if (null === node.return || node.return === finishedWork) return true;
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
      }
      return true;
    }
    function markRootSuspended(root2, suspendedLanes, spawnedLane, didAttemptEntireTree) {
      suspendedLanes &= ~workInProgressRootPingedLanes;
      suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
      root2.suspendedLanes |= suspendedLanes;
      root2.pingedLanes &= ~suspendedLanes;
      didAttemptEntireTree && (root2.warmLanes |= suspendedLanes);
      didAttemptEntireTree = root2.expirationTimes;
      for (var lanes = suspendedLanes; 0 < lanes; ) {
        var index$6 = 31 - clz32(lanes), lane = 1 << index$6;
        didAttemptEntireTree[index$6] = -1;
        lanes &= ~lane;
      }
      0 !== spawnedLane && markSpawnedDeferredLane(root2, spawnedLane, suspendedLanes);
    }
    function flushSyncWork$1() {
      return 0 === (executionContext & 6) ? (flushSyncWorkAcrossRoots_impl(0, false), false) : true;
    }
    function resetWorkInProgressStack() {
      if (null !== workInProgress) {
        if (0 === workInProgressSuspendedReason)
          var interruptedWork = workInProgress.return;
        else
          interruptedWork = workInProgress, lastContextDependency = currentlyRenderingFiber$1 = null, resetHooksOnUnwind(interruptedWork), thenableState$1 = null, thenableIndexCounter$1 = 0, interruptedWork = workInProgress;
        for (; null !== interruptedWork; )
          unwindInterruptedWork(interruptedWork.alternate, interruptedWork), interruptedWork = interruptedWork.return;
        workInProgress = null;
      }
    }
    function prepareFreshStack(root2, lanes) {
      var timeoutHandle = root2.timeoutHandle;
      -1 !== timeoutHandle && (root2.timeoutHandle = -1, cancelTimeout(timeoutHandle));
      timeoutHandle = root2.cancelPendingCommit;
      null !== timeoutHandle && (root2.cancelPendingCommit = null, timeoutHandle());
      pendingEffectsLanes = 0;
      resetWorkInProgressStack();
      workInProgressRoot = root2;
      workInProgress = timeoutHandle = createWorkInProgress(root2.current, null);
      workInProgressRootRenderLanes = lanes;
      workInProgressSuspendedReason = 0;
      workInProgressThrownValue = null;
      workInProgressRootDidSkipSuspendedSiblings = false;
      workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root2, lanes);
      workInProgressRootDidAttachPingListener = false;
      workInProgressSuspendedRetryLanes = workInProgressDeferredLane = workInProgressRootPingedLanes = workInProgressRootInterleavedUpdatedLanes = workInProgressRootSkippedLanes = workInProgressRootExitStatus = 0;
      workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors = null;
      workInProgressRootDidIncludeRecursiveRenderUpdate = false;
      0 !== (lanes & 8) && (lanes |= lanes & 32);
      var allEntangledLanes = root2.entangledLanes;
      if (0 !== allEntangledLanes)
        for (root2 = root2.entanglements, allEntangledLanes &= lanes; 0 < allEntangledLanes; ) {
          var index$4 = 31 - clz32(allEntangledLanes), lane = 1 << index$4;
          lanes |= root2[index$4];
          allEntangledLanes &= ~lane;
        }
      entangledRenderLanes = lanes;
      finishQueueingConcurrentUpdates();
      return timeoutHandle;
    }
    function handleThrow(root2, thrownValue) {
      currentlyRenderingFiber = null;
      ReactSharedInternals.H = ContextOnlyDispatcher;
      thrownValue === SuspenseException || thrownValue === SuspenseActionException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 3) : thrownValue === SuspenseyCommitException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 4) : workInProgressSuspendedReason = thrownValue === SelectiveHydrationException ? 8 : null !== thrownValue && "object" === typeof thrownValue && "function" === typeof thrownValue.then ? 6 : 1;
      workInProgressThrownValue = thrownValue;
      null === workInProgress && (workInProgressRootExitStatus = 1, logUncaughtError(
        root2,
        createCapturedValueAtFiber(thrownValue, root2.current)
      ));
    }
    function shouldRemainOnPreviousScreen() {
      var handler = suspenseHandlerStackCursor.current;
      return null === handler ? true : (workInProgressRootRenderLanes & 4194048) === workInProgressRootRenderLanes ? null === shellBoundary ? true : false : (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes || 0 !== (workInProgressRootRenderLanes & 536870912) ? handler === shellBoundary : false;
    }
    function pushDispatcher() {
      var prevDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = ContextOnlyDispatcher;
      return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
    }
    function pushAsyncDispatcher() {
      var prevAsyncDispatcher = ReactSharedInternals.A;
      ReactSharedInternals.A = DefaultAsyncDispatcher;
      return prevAsyncDispatcher;
    }
    function renderDidSuspendDelayIfPossible() {
      workInProgressRootExitStatus = 4;
      workInProgressRootDidSkipSuspendedSiblings || (workInProgressRootRenderLanes & 4194048) !== workInProgressRootRenderLanes && null !== suspenseHandlerStackCursor.current || (workInProgressRootIsPrerendering = true);
      0 === (workInProgressRootSkippedLanes & 134217727) && 0 === (workInProgressRootInterleavedUpdatedLanes & 134217727) || null === workInProgressRoot || markRootSuspended(
        workInProgressRoot,
        workInProgressRootRenderLanes,
        workInProgressDeferredLane,
        false
      );
    }
    function renderRootSync(root2, lanes, shouldYieldForPrerendering) {
      var prevExecutionContext = executionContext;
      executionContext |= 2;
      var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
      if (workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes)
        workInProgressTransitions = null, prepareFreshStack(root2, lanes);
      lanes = false;
      var exitStatus = workInProgressRootExitStatus;
      a: do
        try {
          if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
            var unitOfWork = workInProgress, thrownValue = workInProgressThrownValue;
            switch (workInProgressSuspendedReason) {
              case 8:
                resetWorkInProgressStack();
                exitStatus = 6;
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                null === suspenseHandlerStackCursor.current && (lanes = true);
                var reason = workInProgressSuspendedReason;
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, reason);
                if (shouldYieldForPrerendering && workInProgressRootIsPrerendering) {
                  exitStatus = 0;
                  break a;
                }
                break;
              default:
                reason = workInProgressSuspendedReason, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, reason);
            }
          }
          workLoopSync();
          exitStatus = workInProgressRootExitStatus;
          break;
        } catch (thrownValue$165) {
          handleThrow(root2, thrownValue$165);
        }
      while (1);
      lanes && root2.shellSuspendCounter++;
      lastContextDependency = currentlyRenderingFiber$1 = null;
      executionContext = prevExecutionContext;
      ReactSharedInternals.H = prevDispatcher;
      ReactSharedInternals.A = prevAsyncDispatcher;
      null === workInProgress && (workInProgressRoot = null, workInProgressRootRenderLanes = 0, finishQueueingConcurrentUpdates());
      return exitStatus;
    }
    function workLoopSync() {
      for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
    }
    function renderRootConcurrent(root2, lanes) {
      var prevExecutionContext = executionContext;
      executionContext |= 2;
      var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
      workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes ? (workInProgressTransitions = null, workInProgressRootRenderTargetTime = now() + 500, prepareFreshStack(root2, lanes)) : workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
        root2,
        lanes
      );
      a: do
        try {
          if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
            lanes = workInProgress;
            var thrownValue = workInProgressThrownValue;
            b: switch (workInProgressSuspendedReason) {
              case 1:
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root2, lanes, thrownValue, 1);
                break;
              case 2:
              case 9:
                if (isThenableResolved(thrownValue)) {
                  workInProgressSuspendedReason = 0;
                  workInProgressThrownValue = null;
                  replaySuspendedUnitOfWork(lanes);
                  break;
                }
                lanes = function() {
                  2 !== workInProgressSuspendedReason && 9 !== workInProgressSuspendedReason || workInProgressRoot !== root2 || (workInProgressSuspendedReason = 7);
                  ensureRootIsScheduled(root2);
                };
                thrownValue.then(lanes, lanes);
                break a;
              case 3:
                workInProgressSuspendedReason = 7;
                break a;
              case 4:
                workInProgressSuspendedReason = 5;
                break a;
              case 7:
                isThenableResolved(thrownValue) ? (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, replaySuspendedUnitOfWork(lanes)) : (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root2, lanes, thrownValue, 7));
                break;
              case 5:
                var resource = null;
                switch (workInProgress.tag) {
                  case 26:
                    resource = workInProgress.memoizedState;
                  case 5:
                  case 27:
                    var hostFiber = workInProgress;
                    if (resource ? preloadResource(resource) : hostFiber.stateNode.complete) {
                      workInProgressSuspendedReason = 0;
                      workInProgressThrownValue = null;
                      var sibling = hostFiber.sibling;
                      if (null !== sibling) workInProgress = sibling;
                      else {
                        var returnFiber = hostFiber.return;
                        null !== returnFiber ? (workInProgress = returnFiber, completeUnitOfWork(returnFiber)) : workInProgress = null;
                      }
                      break b;
                    }
                }
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root2, lanes, thrownValue, 5);
                break;
              case 6:
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root2, lanes, thrownValue, 6);
                break;
              case 8:
                resetWorkInProgressStack();
                workInProgressRootExitStatus = 6;
                break a;
              default:
                throw Error(formatProdErrorMessage(462));
            }
          }
          workLoopConcurrentByScheduler();
          break;
        } catch (thrownValue$167) {
          handleThrow(root2, thrownValue$167);
        }
      while (1);
      lastContextDependency = currentlyRenderingFiber$1 = null;
      ReactSharedInternals.H = prevDispatcher;
      ReactSharedInternals.A = prevAsyncDispatcher;
      executionContext = prevExecutionContext;
      if (null !== workInProgress) return 0;
      workInProgressRoot = null;
      workInProgressRootRenderLanes = 0;
      finishQueueingConcurrentUpdates();
      return workInProgressRootExitStatus;
    }
    function workLoopConcurrentByScheduler() {
      for (; null !== workInProgress && !shouldYield(); )
        performUnitOfWork(workInProgress);
    }
    function performUnitOfWork(unitOfWork) {
      var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
      unitOfWork.memoizedProps = unitOfWork.pendingProps;
      null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
    }
    function replaySuspendedUnitOfWork(unitOfWork) {
      var next = unitOfWork;
      var current = next.alternate;
      switch (next.tag) {
        case 15:
        case 0:
          next = replayFunctionComponent(
            current,
            next,
            next.pendingProps,
            next.type,
            void 0,
            workInProgressRootRenderLanes
          );
          break;
        case 11:
          next = replayFunctionComponent(
            current,
            next,
            next.pendingProps,
            next.type.render,
            next.ref,
            workInProgressRootRenderLanes
          );
          break;
        case 5:
          resetHooksOnUnwind(next);
        default:
          unwindInterruptedWork(current, next), next = workInProgress = resetWorkInProgress(next, entangledRenderLanes), next = beginWork(current, next, entangledRenderLanes);
      }
      unitOfWork.memoizedProps = unitOfWork.pendingProps;
      null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
    }
    function throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, suspendedReason) {
      lastContextDependency = currentlyRenderingFiber$1 = null;
      resetHooksOnUnwind(unitOfWork);
      thenableState$1 = null;
      thenableIndexCounter$1 = 0;
      var returnFiber = unitOfWork.return;
      try {
        if (throwException(
          root2,
          returnFiber,
          unitOfWork,
          thrownValue,
          workInProgressRootRenderLanes
        )) {
          workInProgressRootExitStatus = 1;
          logUncaughtError(
            root2,
            createCapturedValueAtFiber(thrownValue, root2.current)
          );
          workInProgress = null;
          return;
        }
      } catch (error) {
        if (null !== returnFiber) throw workInProgress = returnFiber, error;
        workInProgressRootExitStatus = 1;
        logUncaughtError(
          root2,
          createCapturedValueAtFiber(thrownValue, root2.current)
        );
        workInProgress = null;
        return;
      }
      if (unitOfWork.flags & 32768) {
        if (isHydrating || 1 === suspendedReason) root2 = true;
        else if (workInProgressRootIsPrerendering || 0 !== (workInProgressRootRenderLanes & 536870912))
          root2 = false;
        else if (workInProgressRootDidSkipSuspendedSiblings = root2 = true, 2 === suspendedReason || 9 === suspendedReason || 3 === suspendedReason || 6 === suspendedReason)
          suspendedReason = suspenseHandlerStackCursor.current, null !== suspendedReason && 13 === suspendedReason.tag && (suspendedReason.flags |= 16384);
        unwindUnitOfWork(unitOfWork, root2);
      } else completeUnitOfWork(unitOfWork);
    }
    function completeUnitOfWork(unitOfWork) {
      var completedWork = unitOfWork;
      do {
        if (0 !== (completedWork.flags & 32768)) {
          unwindUnitOfWork(
            completedWork,
            workInProgressRootDidSkipSuspendedSiblings
          );
          return;
        }
        unitOfWork = completedWork.return;
        var next = completeWork(
          completedWork.alternate,
          completedWork,
          entangledRenderLanes
        );
        if (null !== next) {
          workInProgress = next;
          return;
        }
        completedWork = completedWork.sibling;
        if (null !== completedWork) {
          workInProgress = completedWork;
          return;
        }
        workInProgress = completedWork = unitOfWork;
      } while (null !== completedWork);
      0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
    }
    function unwindUnitOfWork(unitOfWork, skipSiblings) {
      do {
        var next = unwindWork(unitOfWork.alternate, unitOfWork);
        if (null !== next) {
          next.flags &= 32767;
          workInProgress = next;
          return;
        }
        next = unitOfWork.return;
        null !== next && (next.flags |= 32768, next.subtreeFlags = 0, next.deletions = null);
        if (!skipSiblings && (unitOfWork = unitOfWork.sibling, null !== unitOfWork)) {
          workInProgress = unitOfWork;
          return;
        }
        workInProgress = unitOfWork = next;
      } while (null !== unitOfWork);
      workInProgressRootExitStatus = 6;
      workInProgress = null;
    }
    function commitRoot(root2, finishedWork, lanes, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes) {
      root2.cancelPendingCommit = null;
      do
        flushPendingEffects();
      while (0 !== pendingEffectsStatus);
      if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
      if (null !== finishedWork) {
        if (finishedWork === root2.current) throw Error(formatProdErrorMessage(177));
        didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
        didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
        markRootFinished(
          root2,
          lanes,
          didIncludeRenderPhaseUpdate,
          spawnedLane,
          updatedLanes,
          suspendedRetryLanes
        );
        root2 === workInProgressRoot && (workInProgress = workInProgressRoot = null, workInProgressRootRenderLanes = 0);
        pendingFinishedWork = finishedWork;
        pendingEffectsRoot = root2;
        pendingEffectsLanes = lanes;
        pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
        pendingPassiveTransitions = transitions;
        pendingRecoverableErrors = recoverableErrors;
        0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? (root2.callbackNode = null, root2.callbackPriority = 0, scheduleCallback$1(NormalPriority$1, function() {
          flushPassiveEffects();
          return null;
        })) : (root2.callbackNode = null, root2.callbackPriority = 0);
        recoverableErrors = 0 !== (finishedWork.flags & 13878);
        if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
          recoverableErrors = ReactSharedInternals.T;
          ReactSharedInternals.T = null;
          transitions = ReactDOMSharedInternals.p;
          ReactDOMSharedInternals.p = 2;
          spawnedLane = executionContext;
          executionContext |= 4;
          try {
            commitBeforeMutationEffects(root2, finishedWork, lanes);
          } finally {
            executionContext = spawnedLane, ReactDOMSharedInternals.p = transitions, ReactSharedInternals.T = recoverableErrors;
          }
        }
        pendingEffectsStatus = 1;
        flushMutationEffects();
        flushLayoutEffects();
        flushSpawnedWork();
      }
    }
    function flushMutationEffects() {
      if (1 === pendingEffectsStatus) {
        pendingEffectsStatus = 0;
        var root2 = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
        if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
          rootMutationHasEffect = ReactSharedInternals.T;
          ReactSharedInternals.T = null;
          var previousPriority = ReactDOMSharedInternals.p;
          ReactDOMSharedInternals.p = 2;
          var prevExecutionContext = executionContext;
          executionContext |= 4;
          try {
            commitMutationEffectsOnFiber(finishedWork, root2);
            var priorSelectionInformation = selectionInformation, curFocusedElem = getActiveElementDeep(root2.containerInfo), priorFocusedElem = priorSelectionInformation.focusedElem, priorSelectionRange = priorSelectionInformation.selectionRange;
            if (curFocusedElem !== priorFocusedElem && priorFocusedElem && priorFocusedElem.ownerDocument && containsNode(
              priorFocusedElem.ownerDocument.documentElement,
              priorFocusedElem
            )) {
              if (null !== priorSelectionRange && hasSelectionCapabilities(priorFocusedElem)) {
                var start = priorSelectionRange.start, end = priorSelectionRange.end;
                void 0 === end && (end = start);
                if ("selectionStart" in priorFocusedElem)
                  priorFocusedElem.selectionStart = start, priorFocusedElem.selectionEnd = Math.min(
                    end,
                    priorFocusedElem.value.length
                  );
                else {
                  var doc = priorFocusedElem.ownerDocument || document, win = doc && doc.defaultView || window;
                  if (win.getSelection) {
                    var selection = win.getSelection(), length = priorFocusedElem.textContent.length, start$jscomp$0 = Math.min(priorSelectionRange.start, length), end$jscomp$0 = void 0 === priorSelectionRange.end ? start$jscomp$0 : Math.min(priorSelectionRange.end, length);
                    !selection.extend && start$jscomp$0 > end$jscomp$0 && (curFocusedElem = end$jscomp$0, end$jscomp$0 = start$jscomp$0, start$jscomp$0 = curFocusedElem);
                    var startMarker = getNodeForCharacterOffset(
                      priorFocusedElem,
                      start$jscomp$0
                    ), endMarker = getNodeForCharacterOffset(
                      priorFocusedElem,
                      end$jscomp$0
                    );
                    if (startMarker && endMarker && (1 !== selection.rangeCount || selection.anchorNode !== startMarker.node || selection.anchorOffset !== startMarker.offset || selection.focusNode !== endMarker.node || selection.focusOffset !== endMarker.offset)) {
                      var range = doc.createRange();
                      range.setStart(startMarker.node, startMarker.offset);
                      selection.removeAllRanges();
                      start$jscomp$0 > end$jscomp$0 ? (selection.addRange(range), selection.extend(endMarker.node, endMarker.offset)) : (range.setEnd(endMarker.node, endMarker.offset), selection.addRange(range));
                    }
                  }
                }
              }
              doc = [];
              for (selection = priorFocusedElem; selection = selection.parentNode; )
                1 === selection.nodeType && doc.push({
                  element: selection,
                  left: selection.scrollLeft,
                  top: selection.scrollTop
                });
              "function" === typeof priorFocusedElem.focus && priorFocusedElem.focus();
              for (priorFocusedElem = 0; priorFocusedElem < doc.length; priorFocusedElem++) {
                var info = doc[priorFocusedElem];
                info.element.scrollLeft = info.left;
                info.element.scrollTop = info.top;
              }
            }
            _enabled = !!eventsEnabled;
            selectionInformation = eventsEnabled = null;
          } finally {
            executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootMutationHasEffect;
          }
        }
        root2.current = finishedWork;
        pendingEffectsStatus = 2;
      }
    }
    function flushLayoutEffects() {
      if (2 === pendingEffectsStatus) {
        pendingEffectsStatus = 0;
        var root2 = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
        if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
          rootHasLayoutEffect = ReactSharedInternals.T;
          ReactSharedInternals.T = null;
          var previousPriority = ReactDOMSharedInternals.p;
          ReactDOMSharedInternals.p = 2;
          var prevExecutionContext = executionContext;
          executionContext |= 4;
          try {
            commitLayoutEffectOnFiber(root2, finishedWork.alternate, finishedWork);
          } finally {
            executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootHasLayoutEffect;
          }
        }
        pendingEffectsStatus = 3;
      }
    }
    function flushSpawnedWork() {
      if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
        pendingEffectsStatus = 0;
        requestPaint();
        var root2 = pendingEffectsRoot, finishedWork = pendingFinishedWork, lanes = pendingEffectsLanes, recoverableErrors = pendingRecoverableErrors;
        0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? pendingEffectsStatus = 5 : (pendingEffectsStatus = 0, pendingFinishedWork = pendingEffectsRoot = null, releaseRootPooledCache(root2, root2.pendingLanes));
        var remainingLanes = root2.pendingLanes;
        0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
        lanesToEventPriority(lanes);
        finishedWork = finishedWork.stateNode;
        if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
          try {
            injectedHook.onCommitFiberRoot(
              rendererID,
              finishedWork,
              void 0,
              128 === (finishedWork.current.flags & 128)
            );
          } catch (err) {
          }
        if (null !== recoverableErrors) {
          finishedWork = ReactSharedInternals.T;
          remainingLanes = ReactDOMSharedInternals.p;
          ReactDOMSharedInternals.p = 2;
          ReactSharedInternals.T = null;
          try {
            for (var onRecoverableError = root2.onRecoverableError, i = 0; i < recoverableErrors.length; i++) {
              var recoverableError = recoverableErrors[i];
              onRecoverableError(recoverableError.value, {
                componentStack: recoverableError.stack
              });
            }
          } finally {
            ReactSharedInternals.T = finishedWork, ReactDOMSharedInternals.p = remainingLanes;
          }
        }
        0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
        ensureRootIsScheduled(root2);
        remainingLanes = root2.pendingLanes;
        0 !== (lanes & 261930) && 0 !== (remainingLanes & 42) ? root2 === rootWithNestedUpdates ? nestedUpdateCount++ : (nestedUpdateCount = 0, rootWithNestedUpdates = root2) : nestedUpdateCount = 0;
        flushSyncWorkAcrossRoots_impl(0, false);
      }
    }
    function releaseRootPooledCache(root2, remainingLanes) {
      0 === (root2.pooledCacheLanes &= remainingLanes) && (remainingLanes = root2.pooledCache, null != remainingLanes && (root2.pooledCache = null, releaseCache(remainingLanes)));
    }
    function flushPendingEffects() {
      flushMutationEffects();
      flushLayoutEffects();
      flushSpawnedWork();
      return flushPassiveEffects();
    }
    function flushPassiveEffects() {
      if (5 !== pendingEffectsStatus) return false;
      var root2 = pendingEffectsRoot, remainingLanes = pendingEffectsRemainingLanes;
      pendingEffectsRemainingLanes = 0;
      var renderPriority = lanesToEventPriority(pendingEffectsLanes), prevTransition = ReactSharedInternals.T, previousPriority = ReactDOMSharedInternals.p;
      try {
        ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
        ReactSharedInternals.T = null;
        renderPriority = pendingPassiveTransitions;
        pendingPassiveTransitions = null;
        var root$jscomp$0 = pendingEffectsRoot, lanes = pendingEffectsLanes;
        pendingEffectsStatus = 0;
        pendingFinishedWork = pendingEffectsRoot = null;
        pendingEffectsLanes = 0;
        if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
        var prevExecutionContext = executionContext;
        executionContext |= 4;
        commitPassiveUnmountOnFiber(root$jscomp$0.current);
        commitPassiveMountOnFiber(
          root$jscomp$0,
          root$jscomp$0.current,
          lanes,
          renderPriority
        );
        executionContext = prevExecutionContext;
        flushSyncWorkAcrossRoots_impl(0, false);
        if (injectedHook && "function" === typeof injectedHook.onPostCommitFiberRoot)
          try {
            injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
          } catch (err) {
          }
        return true;
      } finally {
        ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition, releaseRootPooledCache(root2, remainingLanes);
      }
    }
    function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
      sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
      sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
      rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
      null !== rootFiber && (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
    }
    function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
      if (3 === sourceFiber.tag)
        captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
      else
        for (; null !== nearestMountedAncestor; ) {
          if (3 === nearestMountedAncestor.tag) {
            captureCommitPhaseErrorOnRoot(
              nearestMountedAncestor,
              sourceFiber,
              error
            );
            break;
          } else if (1 === nearestMountedAncestor.tag) {
            var instance = nearestMountedAncestor.stateNode;
            if ("function" === typeof nearestMountedAncestor.type.getDerivedStateFromError || "function" === typeof instance.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(instance))) {
              sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
              error = createClassErrorUpdate(2);
              instance = enqueueUpdate(nearestMountedAncestor, error, 2);
              null !== instance && (initializeClassErrorUpdate(
                error,
                instance,
                nearestMountedAncestor,
                sourceFiber
              ), markRootUpdated$1(instance, 2), ensureRootIsScheduled(instance));
              break;
            }
          }
          nearestMountedAncestor = nearestMountedAncestor.return;
        }
    }
    function attachPingListener(root2, wakeable, lanes) {
      var pingCache = root2.pingCache;
      if (null === pingCache) {
        pingCache = root2.pingCache = new PossiblyWeakMap();
        var threadIDs = /* @__PURE__ */ new Set();
        pingCache.set(wakeable, threadIDs);
      } else
        threadIDs = pingCache.get(wakeable), void 0 === threadIDs && (threadIDs = /* @__PURE__ */ new Set(), pingCache.set(wakeable, threadIDs));
      threadIDs.has(lanes) || (workInProgressRootDidAttachPingListener = true, threadIDs.add(lanes), root2 = pingSuspendedRoot.bind(null, root2, wakeable, lanes), wakeable.then(root2, root2));
    }
    function pingSuspendedRoot(root2, wakeable, pingedLanes) {
      var pingCache = root2.pingCache;
      null !== pingCache && pingCache.delete(wakeable);
      root2.pingedLanes |= root2.suspendedLanes & pingedLanes;
      root2.warmLanes &= ~pingedLanes;
      workInProgressRoot === root2 && (workInProgressRootRenderLanes & pingedLanes) === pingedLanes && (4 === workInProgressRootExitStatus || 3 === workInProgressRootExitStatus && (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes && 300 > now() - globalMostRecentFallbackTime ? 0 === (executionContext & 2) && prepareFreshStack(root2, 0) : workInProgressRootPingedLanes |= pingedLanes, workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes && (workInProgressSuspendedRetryLanes = 0));
      ensureRootIsScheduled(root2);
    }
    function retryTimedOutBoundary(boundaryFiber, retryLane) {
      0 === retryLane && (retryLane = claimNextRetryLane());
      boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
      null !== boundaryFiber && (markRootUpdated$1(boundaryFiber, retryLane), ensureRootIsScheduled(boundaryFiber));
    }
    function retryDehydratedSuspenseBoundary(boundaryFiber) {
      var suspenseState = boundaryFiber.memoizedState, retryLane = 0;
      null !== suspenseState && (retryLane = suspenseState.retryLane);
      retryTimedOutBoundary(boundaryFiber, retryLane);
    }
    function resolveRetryWakeable(boundaryFiber, wakeable) {
      var retryLane = 0;
      switch (boundaryFiber.tag) {
        case 31:
        case 13:
          var retryCache = boundaryFiber.stateNode;
          var suspenseState = boundaryFiber.memoizedState;
          null !== suspenseState && (retryLane = suspenseState.retryLane);
          break;
        case 19:
          retryCache = boundaryFiber.stateNode;
          break;
        case 22:
          retryCache = boundaryFiber.stateNode._retryCache;
          break;
        default:
          throw Error(formatProdErrorMessage(314));
      }
      null !== retryCache && retryCache.delete(wakeable);
      retryTimedOutBoundary(boundaryFiber, retryLane);
    }
    function scheduleCallback$1(priorityLevel, callback) {
      return scheduleCallback$3(priorityLevel, callback);
    }
    var firstScheduledRoot = null;
    var lastScheduledRoot = null;
    var didScheduleMicrotask = false;
    var mightHavePendingSyncWork = false;
    var isFlushingWork = false;
    var currentEventTransitionLane = 0;
    function ensureRootIsScheduled(root2) {
      root2 !== lastScheduledRoot && null === root2.next && (null === lastScheduledRoot ? firstScheduledRoot = lastScheduledRoot = root2 : lastScheduledRoot = lastScheduledRoot.next = root2);
      mightHavePendingSyncWork = true;
      didScheduleMicrotask || (didScheduleMicrotask = true, scheduleImmediateRootScheduleTask());
    }
    function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
      if (!isFlushingWork && mightHavePendingSyncWork) {
        isFlushingWork = true;
        do {
          var didPerformSomeWork = false;
          for (var root$170 = firstScheduledRoot; null !== root$170; ) {
            if (!onlyLegacy)
              if (0 !== syncTransitionLanes) {
                var pendingLanes = root$170.pendingLanes;
                if (0 === pendingLanes) var JSCompiler_inline_result = 0;
                else {
                  var suspendedLanes = root$170.suspendedLanes, pingedLanes = root$170.pingedLanes;
                  JSCompiler_inline_result = (1 << 31 - clz32(42 | syncTransitionLanes) + 1) - 1;
                  JSCompiler_inline_result &= pendingLanes & ~(suspendedLanes & ~pingedLanes);
                  JSCompiler_inline_result = JSCompiler_inline_result & 201326741 ? JSCompiler_inline_result & 201326741 | 1 : JSCompiler_inline_result ? JSCompiler_inline_result | 2 : 0;
                }
                0 !== JSCompiler_inline_result && (didPerformSomeWork = true, performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
              } else
                JSCompiler_inline_result = workInProgressRootRenderLanes, JSCompiler_inline_result = getNextLanes(
                  root$170,
                  root$170 === workInProgressRoot ? JSCompiler_inline_result : 0,
                  null !== root$170.cancelPendingCommit || -1 !== root$170.timeoutHandle
                ), 0 === (JSCompiler_inline_result & 3) || checkIfRootIsPrerendering(root$170, JSCompiler_inline_result) || (didPerformSomeWork = true, performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
            root$170 = root$170.next;
          }
        } while (didPerformSomeWork);
        isFlushingWork = false;
      }
    }
    function processRootScheduleInImmediateTask() {
      processRootScheduleInMicrotask();
    }
    function processRootScheduleInMicrotask() {
      mightHavePendingSyncWork = didScheduleMicrotask = false;
      var syncTransitionLanes = 0;
      0 !== currentEventTransitionLane && shouldAttemptEagerTransition() && (syncTransitionLanes = currentEventTransitionLane);
      for (var currentTime = now(), prev = null, root2 = firstScheduledRoot; null !== root2; ) {
        var next = root2.next, nextLanes = scheduleTaskForRootDuringMicrotask(root2, currentTime);
        if (0 === nextLanes)
          root2.next = null, null === prev ? firstScheduledRoot = next : prev.next = next, null === next && (lastScheduledRoot = prev);
        else if (prev = root2, 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
          mightHavePendingSyncWork = true;
        root2 = next;
      }
      0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus || flushSyncWorkAcrossRoots_impl(syncTransitionLanes, false);
      0 !== currentEventTransitionLane && (currentEventTransitionLane = 0);
    }
    function scheduleTaskForRootDuringMicrotask(root2, currentTime) {
      for (var suspendedLanes = root2.suspendedLanes, pingedLanes = root2.pingedLanes, expirationTimes = root2.expirationTimes, lanes = root2.pendingLanes & -62914561; 0 < lanes; ) {
        var index$5 = 31 - clz32(lanes), lane = 1 << index$5, expirationTime = expirationTimes[index$5];
        if (-1 === expirationTime) {
          if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
            expirationTimes[index$5] = computeExpirationTime(lane, currentTime);
        } else expirationTime <= currentTime && (root2.expiredLanes |= lane);
        lanes &= ~lane;
      }
      currentTime = workInProgressRoot;
      suspendedLanes = workInProgressRootRenderLanes;
      suspendedLanes = getNextLanes(
        root2,
        root2 === currentTime ? suspendedLanes : 0,
        null !== root2.cancelPendingCommit || -1 !== root2.timeoutHandle
      );
      pingedLanes = root2.callbackNode;
      if (0 === suspendedLanes || root2 === currentTime && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root2.cancelPendingCommit)
        return null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes), root2.callbackNode = null, root2.callbackPriority = 0;
      if (0 === (suspendedLanes & 3) || checkIfRootIsPrerendering(root2, suspendedLanes)) {
        currentTime = suspendedLanes & -suspendedLanes;
        if (currentTime === root2.callbackPriority) return currentTime;
        null !== pingedLanes && cancelCallback$1(pingedLanes);
        switch (lanesToEventPriority(suspendedLanes)) {
          case 2:
          case 8:
            suspendedLanes = UserBlockingPriority;
            break;
          case 32:
            suspendedLanes = NormalPriority$1;
            break;
          case 268435456:
            suspendedLanes = IdlePriority;
            break;
          default:
            suspendedLanes = NormalPriority$1;
        }
        pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root2);
        suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
        root2.callbackPriority = currentTime;
        root2.callbackNode = suspendedLanes;
        return currentTime;
      }
      null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
      root2.callbackPriority = 2;
      root2.callbackNode = null;
      return 2;
    }
    function performWorkOnRootViaSchedulerTask(root2, didTimeout) {
      if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus)
        return root2.callbackNode = null, root2.callbackPriority = 0, null;
      var originalCallbackNode = root2.callbackNode;
      if (flushPendingEffects() && root2.callbackNode !== originalCallbackNode)
        return null;
      var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
      workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
        root2,
        root2 === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0,
        null !== root2.cancelPendingCommit || -1 !== root2.timeoutHandle
      );
      if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
      performWorkOnRoot(root2, workInProgressRootRenderLanes$jscomp$0, didTimeout);
      scheduleTaskForRootDuringMicrotask(root2, now());
      return null != root2.callbackNode && root2.callbackNode === originalCallbackNode ? performWorkOnRootViaSchedulerTask.bind(null, root2) : null;
    }
    function performSyncWorkOnRoot(root2, lanes) {
      if (flushPendingEffects()) return null;
      performWorkOnRoot(root2, lanes, true);
    }
    function scheduleImmediateRootScheduleTask() {
      scheduleMicrotask(function() {
        0 !== (executionContext & 6) ? scheduleCallback$3(
          ImmediatePriority,
          processRootScheduleInImmediateTask
        ) : processRootScheduleInMicrotask();
      });
    }
    function requestTransitionLane() {
      if (0 === currentEventTransitionLane) {
        var actionScopeLane = currentEntangledLane;
        0 === actionScopeLane && (actionScopeLane = nextTransitionUpdateLane, nextTransitionUpdateLane <<= 1, 0 === (nextTransitionUpdateLane & 261888) && (nextTransitionUpdateLane = 256));
        currentEventTransitionLane = actionScopeLane;
      }
      return currentEventTransitionLane;
    }
    function coerceFormActionProp(actionProp) {
      return null == actionProp || "symbol" === typeof actionProp || "boolean" === typeof actionProp ? null : "function" === typeof actionProp ? actionProp : sanitizeURL("" + actionProp);
    }
    function createFormDataWithSubmitter(form, submitter) {
      var temp = submitter.ownerDocument.createElement("input");
      temp.name = submitter.name;
      temp.value = submitter.value;
      form.id && temp.setAttribute("form", form.id);
      submitter.parentNode.insertBefore(temp, submitter);
      form = new FormData(form);
      temp.parentNode.removeChild(temp);
      return form;
    }
    function extractEvents$1(dispatchQueue, domEventName, maybeTargetInst, nativeEvent, nativeEventTarget) {
      if ("submit" === domEventName && maybeTargetInst && maybeTargetInst.stateNode === nativeEventTarget) {
        var action = coerceFormActionProp(
          (nativeEventTarget[internalPropsKey] || null).action
        ), submitter = nativeEvent.submitter;
        submitter && (domEventName = (domEventName = submitter[internalPropsKey] || null) ? coerceFormActionProp(domEventName.formAction) : submitter.getAttribute("formAction"), null !== domEventName && (action = domEventName, submitter = null));
        var event = new SyntheticEvent(
          "action",
          "action",
          null,
          nativeEvent,
          nativeEventTarget
        );
        dispatchQueue.push({
          event,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (nativeEvent.defaultPrevented) {
                  if (0 !== currentEventTransitionLane) {
                    var formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget);
                    startHostTransition(
                      maybeTargetInst,
                      {
                        pending: true,
                        data: formData,
                        method: nativeEventTarget.method,
                        action
                      },
                      null,
                      formData
                    );
                  }
                } else
                  "function" === typeof action && (event.preventDefault(), formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget), startHostTransition(
                    maybeTargetInst,
                    {
                      pending: true,
                      data: formData,
                      method: nativeEventTarget.method,
                      action
                    },
                    action,
                    formData
                  ));
              },
              currentTarget: nativeEventTarget
            }
          ]
        });
      }
    }
    for (i$jscomp$inline_1577 = 0; i$jscomp$inline_1577 < simpleEventPluginEvents.length; i$jscomp$inline_1577++) {
      eventName$jscomp$inline_1578 = simpleEventPluginEvents[i$jscomp$inline_1577], domEventName$jscomp$inline_1579 = eventName$jscomp$inline_1578.toLowerCase(), capitalizedEvent$jscomp$inline_1580 = eventName$jscomp$inline_1578[0].toUpperCase() + eventName$jscomp$inline_1578.slice(1);
      registerSimpleEvent(
        domEventName$jscomp$inline_1579,
        "on" + capitalizedEvent$jscomp$inline_1580
      );
    }
    var eventName$jscomp$inline_1578;
    var domEventName$jscomp$inline_1579;
    var capitalizedEvent$jscomp$inline_1580;
    var i$jscomp$inline_1577;
    registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
    registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
    registerSimpleEvent(ANIMATION_START, "onAnimationStart");
    registerSimpleEvent("dblclick", "onDoubleClick");
    registerSimpleEvent("focusin", "onFocus");
    registerSimpleEvent("focusout", "onBlur");
    registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
    registerSimpleEvent(TRANSITION_START, "onTransitionStart");
    registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
    registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
    registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
    registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
    registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
    registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
    registerTwoPhaseEvent(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(" ")
    );
    registerTwoPhaseEvent(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    );
    registerTwoPhaseEvent("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]);
    registerTwoPhaseEvent(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    );
    registerTwoPhaseEvent(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    );
    registerTwoPhaseEvent(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var mediaEventTypes = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    );
    var nonDelegatedEvents = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mediaEventTypes)
    );
    function processDispatchQueue(dispatchQueue, eventSystemFlags) {
      eventSystemFlags = 0 !== (eventSystemFlags & 4);
      for (var i = 0; i < dispatchQueue.length; i++) {
        var _dispatchQueue$i = dispatchQueue[i], event = _dispatchQueue$i.event;
        _dispatchQueue$i = _dispatchQueue$i.listeners;
        a: {
          var previousInstance = void 0;
          if (eventSystemFlags)
            for (var i$jscomp$0 = _dispatchQueue$i.length - 1; 0 <= i$jscomp$0; i$jscomp$0--) {
              var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0], instance = _dispatchListeners$i.instance, currentTarget = _dispatchListeners$i.currentTarget;
              _dispatchListeners$i = _dispatchListeners$i.listener;
              if (instance !== previousInstance && event.isPropagationStopped())
                break a;
              previousInstance = _dispatchListeners$i;
              event.currentTarget = currentTarget;
              try {
                previousInstance(event);
              } catch (error) {
                reportGlobalError(error);
              }
              event.currentTarget = null;
              previousInstance = instance;
            }
          else
            for (i$jscomp$0 = 0; i$jscomp$0 < _dispatchQueue$i.length; i$jscomp$0++) {
              _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
              instance = _dispatchListeners$i.instance;
              currentTarget = _dispatchListeners$i.currentTarget;
              _dispatchListeners$i = _dispatchListeners$i.listener;
              if (instance !== previousInstance && event.isPropagationStopped())
                break a;
              previousInstance = _dispatchListeners$i;
              event.currentTarget = currentTarget;
              try {
                previousInstance(event);
              } catch (error) {
                reportGlobalError(error);
              }
              event.currentTarget = null;
              previousInstance = instance;
            }
        }
      }
    }
    function listenToNonDelegatedEvent(domEventName, targetElement) {
      var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
      void 0 === JSCompiler_inline_result && (JSCompiler_inline_result = targetElement[internalEventHandlersKey] = /* @__PURE__ */ new Set());
      var listenerSetKey = domEventName + "__bubble";
      JSCompiler_inline_result.has(listenerSetKey) || (addTrappedEventListener(targetElement, domEventName, 2, false), JSCompiler_inline_result.add(listenerSetKey));
    }
    function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
      var eventSystemFlags = 0;
      isCapturePhaseListener && (eventSystemFlags |= 4);
      addTrappedEventListener(
        target,
        domEventName,
        eventSystemFlags,
        isCapturePhaseListener
      );
    }
    var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
    function listenToAllSupportedEvents(rootContainerElement) {
      if (!rootContainerElement[listeningMarker]) {
        rootContainerElement[listeningMarker] = true;
        allNativeEvents.forEach(function(domEventName) {
          "selectionchange" !== domEventName && (nonDelegatedEvents.has(domEventName) || listenToNativeEvent(domEventName, false, rootContainerElement), listenToNativeEvent(domEventName, true, rootContainerElement));
        });
        var ownerDocument = 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
        null === ownerDocument || ownerDocument[listeningMarker] || (ownerDocument[listeningMarker] = true, listenToNativeEvent("selectionchange", false, ownerDocument));
      }
    }
    function addTrappedEventListener(targetContainer, domEventName, eventSystemFlags, isCapturePhaseListener) {
      switch (getEventPriority(domEventName)) {
        case 2:
          var listenerWrapper = dispatchDiscreteEvent;
          break;
        case 8:
          listenerWrapper = dispatchContinuousEvent;
          break;
        default:
          listenerWrapper = dispatchEvent;
      }
      eventSystemFlags = listenerWrapper.bind(
        null,
        domEventName,
        eventSystemFlags,
        targetContainer
      );
      listenerWrapper = void 0;
      !passiveBrowserEventsSupported || "touchstart" !== domEventName && "touchmove" !== domEventName && "wheel" !== domEventName || (listenerWrapper = true);
      isCapturePhaseListener ? void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
        capture: true,
        passive: listenerWrapper
      }) : targetContainer.addEventListener(domEventName, eventSystemFlags, true) : void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
        passive: listenerWrapper
      }) : targetContainer.addEventListener(domEventName, eventSystemFlags, false);
    }
    function dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst$jscomp$0, targetContainer) {
      var ancestorInst = targetInst$jscomp$0;
      if (0 === (eventSystemFlags & 1) && 0 === (eventSystemFlags & 2) && null !== targetInst$jscomp$0)
        a: for (; ; ) {
          if (null === targetInst$jscomp$0) return;
          var nodeTag = targetInst$jscomp$0.tag;
          if (3 === nodeTag || 4 === nodeTag) {
            var container = targetInst$jscomp$0.stateNode.containerInfo;
            if (container === targetContainer) break;
            if (4 === nodeTag)
              for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
                var grandTag = nodeTag.tag;
                if ((3 === grandTag || 4 === grandTag) && nodeTag.stateNode.containerInfo === targetContainer)
                  return;
                nodeTag = nodeTag.return;
              }
            for (; null !== container; ) {
              nodeTag = getClosestInstanceFromNode(container);
              if (null === nodeTag) return;
              grandTag = nodeTag.tag;
              if (5 === grandTag || 6 === grandTag || 26 === grandTag || 27 === grandTag) {
                targetInst$jscomp$0 = ancestorInst = nodeTag;
                continue a;
              }
              container = container.parentNode;
            }
          }
          targetInst$jscomp$0 = targetInst$jscomp$0.return;
        }
      batchedUpdates$1(function() {
        var targetInst = ancestorInst, nativeEventTarget = getEventTarget(nativeEvent), dispatchQueue = [];
        a: {
          var reactName = topLevelEventsToReactNames.get(domEventName);
          if (void 0 !== reactName) {
            var SyntheticEventCtor = SyntheticEvent, reactEventType = domEventName;
            switch (domEventName) {
              case "keypress":
                if (0 === getEventCharCode(nativeEvent)) break a;
              case "keydown":
              case "keyup":
                SyntheticEventCtor = SyntheticKeyboardEvent;
                break;
              case "focusin":
                reactEventType = "focus";
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
              case "focusout":
                reactEventType = "blur";
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
              case "beforeblur":
              case "afterblur":
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
              case "click":
                if (2 === nativeEvent.button) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                SyntheticEventCtor = SyntheticMouseEvent;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                SyntheticEventCtor = SyntheticDragEvent;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                SyntheticEventCtor = SyntheticTouchEvent;
                break;
              case ANIMATION_END:
              case ANIMATION_ITERATION:
              case ANIMATION_START:
                SyntheticEventCtor = SyntheticAnimationEvent;
                break;
              case TRANSITION_END:
                SyntheticEventCtor = SyntheticTransitionEvent;
                break;
              case "scroll":
              case "scrollend":
                SyntheticEventCtor = SyntheticUIEvent;
                break;
              case "wheel":
                SyntheticEventCtor = SyntheticWheelEvent;
                break;
              case "copy":
              case "cut":
              case "paste":
                SyntheticEventCtor = SyntheticClipboardEvent;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                SyntheticEventCtor = SyntheticPointerEvent;
                break;
              case "toggle":
              case "beforetoggle":
                SyntheticEventCtor = SyntheticToggleEvent;
            }
            var inCapturePhase = 0 !== (eventSystemFlags & 4), accumulateTargetOnly = !inCapturePhase && ("scroll" === domEventName || "scrollend" === domEventName), reactEventName = inCapturePhase ? null !== reactName ? reactName + "Capture" : null : reactName;
            inCapturePhase = [];
            for (var instance = targetInst, lastHostComponent; null !== instance; ) {
              var _instance = instance;
              lastHostComponent = _instance.stateNode;
              _instance = _instance.tag;
              5 !== _instance && 26 !== _instance && 27 !== _instance || null === lastHostComponent || null === reactEventName || (_instance = getListener(instance, reactEventName), null != _instance && inCapturePhase.push(
                createDispatchListener(instance, _instance, lastHostComponent)
              ));
              if (accumulateTargetOnly) break;
              instance = instance.return;
            }
            0 < inCapturePhase.length && (reactName = new SyntheticEventCtor(
              reactName,
              reactEventType,
              null,
              nativeEvent,
              nativeEventTarget
            ), dispatchQueue.push({ event: reactName, listeners: inCapturePhase }));
          }
        }
        if (0 === (eventSystemFlags & 7)) {
          a: {
            reactName = "mouseover" === domEventName || "pointerover" === domEventName;
            SyntheticEventCtor = "mouseout" === domEventName || "pointerout" === domEventName;
            if (reactName && nativeEvent !== currentReplayingEvent && (reactEventType = nativeEvent.relatedTarget || nativeEvent.fromElement) && (getClosestInstanceFromNode(reactEventType) || reactEventType[internalContainerInstanceKey]))
              break a;
            if (SyntheticEventCtor || reactName) {
              reactName = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget : (reactName = nativeEventTarget.ownerDocument) ? reactName.defaultView || reactName.parentWindow : window;
              if (SyntheticEventCtor) {
                if (reactEventType = nativeEvent.relatedTarget || nativeEvent.toElement, SyntheticEventCtor = targetInst, reactEventType = reactEventType ? getClosestInstanceFromNode(reactEventType) : null, null !== reactEventType && (accumulateTargetOnly = getNearestMountedFiber(reactEventType), inCapturePhase = reactEventType.tag, reactEventType !== accumulateTargetOnly || 5 !== inCapturePhase && 27 !== inCapturePhase && 6 !== inCapturePhase))
                  reactEventType = null;
              } else SyntheticEventCtor = null, reactEventType = targetInst;
              if (SyntheticEventCtor !== reactEventType) {
                inCapturePhase = SyntheticMouseEvent;
                _instance = "onMouseLeave";
                reactEventName = "onMouseEnter";
                instance = "mouse";
                if ("pointerout" === domEventName || "pointerover" === domEventName)
                  inCapturePhase = SyntheticPointerEvent, _instance = "onPointerLeave", reactEventName = "onPointerEnter", instance = "pointer";
                accumulateTargetOnly = null == SyntheticEventCtor ? reactName : getNodeFromInstance(SyntheticEventCtor);
                lastHostComponent = null == reactEventType ? reactName : getNodeFromInstance(reactEventType);
                reactName = new inCapturePhase(
                  _instance,
                  instance + "leave",
                  SyntheticEventCtor,
                  nativeEvent,
                  nativeEventTarget
                );
                reactName.target = accumulateTargetOnly;
                reactName.relatedTarget = lastHostComponent;
                _instance = null;
                getClosestInstanceFromNode(nativeEventTarget) === targetInst && (inCapturePhase = new inCapturePhase(
                  reactEventName,
                  instance + "enter",
                  reactEventType,
                  nativeEvent,
                  nativeEventTarget
                ), inCapturePhase.target = lastHostComponent, inCapturePhase.relatedTarget = accumulateTargetOnly, _instance = inCapturePhase);
                accumulateTargetOnly = _instance;
                if (SyntheticEventCtor && reactEventType)
                  b: {
                    inCapturePhase = getParent;
                    reactEventName = SyntheticEventCtor;
                    instance = reactEventType;
                    lastHostComponent = 0;
                    for (_instance = reactEventName; _instance; _instance = inCapturePhase(_instance))
                      lastHostComponent++;
                    _instance = 0;
                    for (var tempB = instance; tempB; tempB = inCapturePhase(tempB))
                      _instance++;
                    for (; 0 < lastHostComponent - _instance; )
                      reactEventName = inCapturePhase(reactEventName), lastHostComponent--;
                    for (; 0 < _instance - lastHostComponent; )
                      instance = inCapturePhase(instance), _instance--;
                    for (; lastHostComponent--; ) {
                      if (reactEventName === instance || null !== instance && reactEventName === instance.alternate) {
                        inCapturePhase = reactEventName;
                        break b;
                      }
                      reactEventName = inCapturePhase(reactEventName);
                      instance = inCapturePhase(instance);
                    }
                    inCapturePhase = null;
                  }
                else inCapturePhase = null;
                null !== SyntheticEventCtor && accumulateEnterLeaveListenersForEvent(
                  dispatchQueue,
                  reactName,
                  SyntheticEventCtor,
                  inCapturePhase,
                  false
                );
                null !== reactEventType && null !== accumulateTargetOnly && accumulateEnterLeaveListenersForEvent(
                  dispatchQueue,
                  accumulateTargetOnly,
                  reactEventType,
                  inCapturePhase,
                  true
                );
              }
            }
          }
          a: {
            reactName = targetInst ? getNodeFromInstance(targetInst) : window;
            SyntheticEventCtor = reactName.nodeName && reactName.nodeName.toLowerCase();
            if ("select" === SyntheticEventCtor || "input" === SyntheticEventCtor && "file" === reactName.type)
              var getTargetInstFunc = getTargetInstForChangeEvent;
            else if (isTextInputElement(reactName))
              if (isInputEventSupported)
                getTargetInstFunc = getTargetInstForInputOrChangeEvent;
              else {
                getTargetInstFunc = getTargetInstForInputEventPolyfill;
                var handleEventFunc = handleEventsForInputEventPolyfill;
              }
            else
              SyntheticEventCtor = reactName.nodeName, !SyntheticEventCtor || "input" !== SyntheticEventCtor.toLowerCase() || "checkbox" !== reactName.type && "radio" !== reactName.type ? targetInst && isCustomElement(targetInst.elementType) && (getTargetInstFunc = getTargetInstForChangeEvent) : getTargetInstFunc = getTargetInstForClickEvent;
            if (getTargetInstFunc && (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))) {
              createAndAccumulateChangeEvent(
                dispatchQueue,
                getTargetInstFunc,
                nativeEvent,
                nativeEventTarget
              );
              break a;
            }
            handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
            "focusout" === domEventName && targetInst && "number" === reactName.type && null != targetInst.memoizedProps.value && setDefaultValue(reactName, "number", reactName.value);
          }
          handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
          switch (domEventName) {
            case "focusin":
              if (isTextInputElement(handleEventFunc) || "true" === handleEventFunc.contentEditable)
                activeElement = handleEventFunc, activeElementInst = targetInst, lastSelection = null;
              break;
            case "focusout":
              lastSelection = activeElementInst = activeElement = null;
              break;
            case "mousedown":
              mouseDown = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              mouseDown = false;
              constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
              break;
            case "selectionchange":
              if (skipSelectionChangeEvent) break;
            case "keydown":
            case "keyup":
              constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
          }
          var fallbackData;
          if (canUseCompositionEvent)
            b: {
              switch (domEventName) {
                case "compositionstart":
                  var eventType = "onCompositionStart";
                  break b;
                case "compositionend":
                  eventType = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  eventType = "onCompositionUpdate";
                  break b;
              }
              eventType = void 0;
            }
          else
            isComposing ? isFallbackCompositionEnd(domEventName, nativeEvent) && (eventType = "onCompositionEnd") : "keydown" === domEventName && 229 === nativeEvent.keyCode && (eventType = "onCompositionStart");
          eventType && (useFallbackCompositionData && "ko" !== nativeEvent.locale && (isComposing || "onCompositionStart" !== eventType ? "onCompositionEnd" === eventType && isComposing && (fallbackData = getData()) : (root = nativeEventTarget, startText = "value" in root ? root.value : root.textContent, isComposing = true)), handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType), 0 < handleEventFunc.length && (eventType = new SyntheticCompositionEvent(
            eventType,
            domEventName,
            null,
            nativeEvent,
            nativeEventTarget
          ), dispatchQueue.push({ event: eventType, listeners: handleEventFunc }), fallbackData ? eventType.data = fallbackData : (fallbackData = getDataFromCustomEvent(nativeEvent), null !== fallbackData && (eventType.data = fallbackData))));
          if (fallbackData = canUseTextInputEvent ? getNativeBeforeInputChars(domEventName, nativeEvent) : getFallbackBeforeInputChars(domEventName, nativeEvent))
            eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput"), 0 < eventType.length && (handleEventFunc = new SyntheticCompositionEvent(
              "onBeforeInput",
              "beforeinput",
              null,
              nativeEvent,
              nativeEventTarget
            ), dispatchQueue.push({
              event: handleEventFunc,
              listeners: eventType
            }), handleEventFunc.data = fallbackData);
          extractEvents$1(
            dispatchQueue,
            domEventName,
            targetInst,
            nativeEvent,
            nativeEventTarget
          );
        }
        processDispatchQueue(dispatchQueue, eventSystemFlags);
      });
    }
    function createDispatchListener(instance, listener, currentTarget) {
      return {
        instance,
        listener,
        currentTarget
      };
    }
    function accumulateTwoPhaseListeners(targetFiber, reactName) {
      for (var captureName = reactName + "Capture", listeners = []; null !== targetFiber; ) {
        var _instance2 = targetFiber, stateNode = _instance2.stateNode;
        _instance2 = _instance2.tag;
        5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2 || null === stateNode || (_instance2 = getListener(targetFiber, captureName), null != _instance2 && listeners.unshift(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ), _instance2 = getListener(targetFiber, reactName), null != _instance2 && listeners.push(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ));
        if (3 === targetFiber.tag) return listeners;
        targetFiber = targetFiber.return;
      }
      return [];
    }
    function getParent(inst) {
      if (null === inst) return null;
      do
        inst = inst.return;
      while (inst && 5 !== inst.tag && 27 !== inst.tag);
      return inst ? inst : null;
    }
    function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common, inCapturePhase) {
      for (var registrationName = event._reactName, listeners = []; null !== target && target !== common; ) {
        var _instance3 = target, alternate = _instance3.alternate, stateNode = _instance3.stateNode;
        _instance3 = _instance3.tag;
        if (null !== alternate && alternate === common) break;
        5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3 || null === stateNode || (alternate = stateNode, inCapturePhase ? (stateNode = getListener(target, registrationName), null != stateNode && listeners.unshift(
          createDispatchListener(target, stateNode, alternate)
        )) : inCapturePhase || (stateNode = getListener(target, registrationName), null != stateNode && listeners.push(
          createDispatchListener(target, stateNode, alternate)
        )));
        target = target.return;
      }
      0 !== listeners.length && dispatchQueue.push({ event, listeners });
    }
    var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
    var NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
    function normalizeMarkupForTextOrAttribute(markup) {
      return ("string" === typeof markup ? markup : "" + markup).replace(NORMALIZE_NEWLINES_REGEX, "\n").replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
    }
    function checkForUnmatchedText(serverText, clientText) {
      clientText = normalizeMarkupForTextOrAttribute(clientText);
      return normalizeMarkupForTextOrAttribute(serverText) === clientText ? true : false;
    }
    function setProp(domElement, tag, key, value, props, prevValue) {
      switch (key) {
        case "children":
          "string" === typeof value ? "body" === tag || "textarea" === tag && "" === value || setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && "body" !== tag && setTextContent(domElement, "" + value);
          break;
        case "className":
          setValueForKnownAttribute(domElement, "class", value);
          break;
        case "tabIndex":
          setValueForKnownAttribute(domElement, "tabindex", value);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          setValueForKnownAttribute(domElement, key, value);
          break;
        case "style":
          setValueForStyles(domElement, value, prevValue);
          break;
        case "data":
          if ("object" !== tag) {
            setValueForKnownAttribute(domElement, "data", value);
            break;
          }
        case "src":
        case "href":
          if ("" === value && ("a" !== tag || "href" !== key)) {
            domElement.removeAttribute(key);
            break;
          }
          if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) {
            domElement.removeAttribute(key);
            break;
          }
          value = sanitizeURL("" + value);
          domElement.setAttribute(key, value);
          break;
        case "action":
        case "formAction":
          if ("function" === typeof value) {
            domElement.setAttribute(
              key,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            "function" === typeof prevValue && ("formAction" === key ? ("input" !== tag && setProp(domElement, tag, "name", props.name, props, null), setProp(
              domElement,
              tag,
              "formEncType",
              props.formEncType,
              props,
              null
            ), setProp(
              domElement,
              tag,
              "formMethod",
              props.formMethod,
              props,
              null
            ), setProp(
              domElement,
              tag,
              "formTarget",
              props.formTarget,
              props,
              null
            )) : (setProp(domElement, tag, "encType", props.encType, props, null), setProp(domElement, tag, "method", props.method, props, null), setProp(domElement, tag, "target", props.target, props, null)));
          if (null == value || "symbol" === typeof value || "boolean" === typeof value) {
            domElement.removeAttribute(key);
            break;
          }
          value = sanitizeURL("" + value);
          domElement.setAttribute(key, value);
          break;
        case "onClick":
          null != value && (domElement.onclick = noop$1);
          break;
        case "onScroll":
          null != value && listenToNonDelegatedEvent("scroll", domElement);
          break;
        case "onScrollEnd":
          null != value && listenToNonDelegatedEvent("scrollend", domElement);
          break;
        case "dangerouslySetInnerHTML":
          if (null != value) {
            if ("object" !== typeof value || !("__html" in value))
              throw Error(formatProdErrorMessage(61));
            key = value.__html;
            if (null != key) {
              if (null != props.children) throw Error(formatProdErrorMessage(60));
              domElement.innerHTML = key;
            }
          }
          break;
        case "multiple":
          domElement.multiple = value && "function" !== typeof value && "symbol" !== typeof value;
          break;
        case "muted":
          domElement.muted = value && "function" !== typeof value && "symbol" !== typeof value;
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (null == value || "function" === typeof value || "boolean" === typeof value || "symbol" === typeof value) {
            domElement.removeAttribute("xlink:href");
            break;
          }
          key = sanitizeURL("" + value);
          domElement.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            key
          );
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "" + value) : domElement.removeAttribute(key);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "") : domElement.removeAttribute(key);
          break;
        case "capture":
        case "download":
          true === value ? domElement.setAttribute(key, "") : false !== value && null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          null != value && "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
          break;
        case "rowSpan":
        case "start":
          null == value || "function" === typeof value || "symbol" === typeof value || isNaN(value) ? domElement.removeAttribute(key) : domElement.setAttribute(key, value);
          break;
        case "popover":
          listenToNonDelegatedEvent("beforetoggle", domElement);
          listenToNonDelegatedEvent("toggle", domElement);
          setValueForAttribute(domElement, "popover", value);
          break;
        case "xlinkActuate":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:actuate",
            value
          );
          break;
        case "xlinkArcrole":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:arcrole",
            value
          );
          break;
        case "xlinkRole":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:role",
            value
          );
          break;
        case "xlinkShow":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:show",
            value
          );
          break;
        case "xlinkTitle":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:title",
            value
          );
          break;
        case "xlinkType":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:type",
            value
          );
          break;
        case "xmlBase":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/XML/1998/namespace",
            "xml:base",
            value
          );
          break;
        case "xmlLang":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/XML/1998/namespace",
            "xml:lang",
            value
          );
          break;
        case "xmlSpace":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/XML/1998/namespace",
            "xml:space",
            value
          );
          break;
        case "is":
          setValueForAttribute(domElement, "is", value);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!(2 < key.length) || "o" !== key[0] && "O" !== key[0] || "n" !== key[1] && "N" !== key[1])
            key = aliases.get(key) || key, setValueForAttribute(domElement, key, value);
      }
    }
    function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
      switch (key) {
        case "style":
          setValueForStyles(domElement, value, prevValue);
          break;
        case "dangerouslySetInnerHTML":
          if (null != value) {
            if ("object" !== typeof value || !("__html" in value))
              throw Error(formatProdErrorMessage(61));
            key = value.__html;
            if (null != key) {
              if (null != props.children) throw Error(formatProdErrorMessage(60));
              domElement.innerHTML = key;
            }
          }
          break;
        case "children":
          "string" === typeof value ? setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && setTextContent(domElement, "" + value);
          break;
        case "onScroll":
          null != value && listenToNonDelegatedEvent("scroll", domElement);
          break;
        case "onScrollEnd":
          null != value && listenToNonDelegatedEvent("scrollend", domElement);
          break;
        case "onClick":
          null != value && (domElement.onclick = noop$1);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!registrationNameDependencies.hasOwnProperty(key))
            a: {
              if ("o" === key[0] && "n" === key[1] && (props = key.endsWith("Capture"), tag = key.slice(2, props ? key.length - 7 : void 0), prevValue = domElement[internalPropsKey] || null, prevValue = null != prevValue ? prevValue[key] : null, "function" === typeof prevValue && domElement.removeEventListener(tag, prevValue, props), "function" === typeof value)) {
                "function" !== typeof prevValue && null !== prevValue && (key in domElement ? domElement[key] = null : domElement.hasAttribute(key) && domElement.removeAttribute(key));
                domElement.addEventListener(tag, value, props);
                break a;
              }
              key in domElement ? domElement[key] = value : true === value ? domElement.setAttribute(key, "") : setValueForAttribute(domElement, key, value);
            }
      }
    }
    function setInitialProperties(domElement, tag, props) {
      switch (tag) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          listenToNonDelegatedEvent("error", domElement);
          listenToNonDelegatedEvent("load", domElement);
          var hasSrc = false, hasSrcSet = false, propKey;
          for (propKey in props)
            if (props.hasOwnProperty(propKey)) {
              var propValue = props[propKey];
              if (null != propValue)
                switch (propKey) {
                  case "src":
                    hasSrc = true;
                    break;
                  case "srcSet":
                    hasSrcSet = true;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(formatProdErrorMessage(137, tag));
                  default:
                    setProp(domElement, tag, propKey, propValue, props, null);
                }
            }
          hasSrcSet && setProp(domElement, tag, "srcSet", props.srcSet, props, null);
          hasSrc && setProp(domElement, tag, "src", props.src, props, null);
          return;
        case "input":
          listenToNonDelegatedEvent("invalid", domElement);
          var defaultValue = propKey = propValue = hasSrcSet = null, checked = null, defaultChecked = null;
          for (hasSrc in props)
            if (props.hasOwnProperty(hasSrc)) {
              var propValue$184 = props[hasSrc];
              if (null != propValue$184)
                switch (hasSrc) {
                  case "name":
                    hasSrcSet = propValue$184;
                    break;
                  case "type":
                    propValue = propValue$184;
                    break;
                  case "checked":
                    checked = propValue$184;
                    break;
                  case "defaultChecked":
                    defaultChecked = propValue$184;
                    break;
                  case "value":
                    propKey = propValue$184;
                    break;
                  case "defaultValue":
                    defaultValue = propValue$184;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (null != propValue$184)
                      throw Error(formatProdErrorMessage(137, tag));
                    break;
                  default:
                    setProp(domElement, tag, hasSrc, propValue$184, props, null);
                }
            }
          initInput(
            domElement,
            propKey,
            defaultValue,
            checked,
            defaultChecked,
            propValue,
            hasSrcSet,
            false
          );
          return;
        case "select":
          listenToNonDelegatedEvent("invalid", domElement);
          hasSrc = propValue = propKey = null;
          for (hasSrcSet in props)
            if (props.hasOwnProperty(hasSrcSet) && (defaultValue = props[hasSrcSet], null != defaultValue))
              switch (hasSrcSet) {
                case "value":
                  propKey = defaultValue;
                  break;
                case "defaultValue":
                  propValue = defaultValue;
                  break;
                case "multiple":
                  hasSrc = defaultValue;
                default:
                  setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
              }
          tag = propKey;
          props = propValue;
          domElement.multiple = !!hasSrc;
          null != tag ? updateOptions(domElement, !!hasSrc, tag, false) : null != props && updateOptions(domElement, !!hasSrc, props, true);
          return;
        case "textarea":
          listenToNonDelegatedEvent("invalid", domElement);
          propKey = hasSrcSet = hasSrc = null;
          for (propValue in props)
            if (props.hasOwnProperty(propValue) && (defaultValue = props[propValue], null != defaultValue))
              switch (propValue) {
                case "value":
                  hasSrc = defaultValue;
                  break;
                case "defaultValue":
                  hasSrcSet = defaultValue;
                  break;
                case "children":
                  propKey = defaultValue;
                  break;
                case "dangerouslySetInnerHTML":
                  if (null != defaultValue) throw Error(formatProdErrorMessage(91));
                  break;
                default:
                  setProp(domElement, tag, propValue, defaultValue, props, null);
              }
          initTextarea(domElement, hasSrc, hasSrcSet, propKey);
          return;
        case "option":
          for (checked in props)
            if (props.hasOwnProperty(checked) && (hasSrc = props[checked], null != hasSrc))
              switch (checked) {
                case "selected":
                  domElement.selected = hasSrc && "function" !== typeof hasSrc && "symbol" !== typeof hasSrc;
                  break;
                default:
                  setProp(domElement, tag, checked, hasSrc, props, null);
              }
          return;
        case "dialog":
          listenToNonDelegatedEvent("beforetoggle", domElement);
          listenToNonDelegatedEvent("toggle", domElement);
          listenToNonDelegatedEvent("cancel", domElement);
          listenToNonDelegatedEvent("close", domElement);
          break;
        case "iframe":
        case "object":
          listenToNonDelegatedEvent("load", domElement);
          break;
        case "video":
        case "audio":
          for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
            listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
          break;
        case "image":
          listenToNonDelegatedEvent("error", domElement);
          listenToNonDelegatedEvent("load", domElement);
          break;
        case "details":
          listenToNonDelegatedEvent("toggle", domElement);
          break;
        case "embed":
        case "source":
        case "link":
          listenToNonDelegatedEvent("error", domElement), listenToNonDelegatedEvent("load", domElement);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (defaultChecked in props)
            if (props.hasOwnProperty(defaultChecked) && (hasSrc = props[defaultChecked], null != hasSrc))
              switch (defaultChecked) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(formatProdErrorMessage(137, tag));
                default:
                  setProp(domElement, tag, defaultChecked, hasSrc, props, null);
              }
          return;
        default:
          if (isCustomElement(tag)) {
            for (propValue$184 in props)
              props.hasOwnProperty(propValue$184) && (hasSrc = props[propValue$184], void 0 !== hasSrc && setPropOnCustomElement(
                domElement,
                tag,
                propValue$184,
                hasSrc,
                props,
                void 0
              ));
            return;
          }
      }
      for (defaultValue in props)
        props.hasOwnProperty(defaultValue) && (hasSrc = props[defaultValue], null != hasSrc && setProp(domElement, tag, defaultValue, hasSrc, props, null));
    }
    function updateProperties(domElement, tag, lastProps, nextProps) {
      switch (tag) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var name = null, type = null, value = null, defaultValue = null, lastDefaultValue = null, checked = null, defaultChecked = null;
          for (propKey in lastProps) {
            var lastProp = lastProps[propKey];
            if (lastProps.hasOwnProperty(propKey) && null != lastProp)
              switch (propKey) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  lastDefaultValue = lastProp;
                default:
                  nextProps.hasOwnProperty(propKey) || setProp(domElement, tag, propKey, null, nextProps, lastProp);
              }
          }
          for (var propKey$201 in nextProps) {
            var propKey = nextProps[propKey$201];
            lastProp = lastProps[propKey$201];
            if (nextProps.hasOwnProperty(propKey$201) && (null != propKey || null != lastProp))
              switch (propKey$201) {
                case "type":
                  type = propKey;
                  break;
                case "name":
                  name = propKey;
                  break;
                case "checked":
                  checked = propKey;
                  break;
                case "defaultChecked":
                  defaultChecked = propKey;
                  break;
                case "value":
                  value = propKey;
                  break;
                case "defaultValue":
                  defaultValue = propKey;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (null != propKey)
                    throw Error(formatProdErrorMessage(137, tag));
                  break;
                default:
                  propKey !== lastProp && setProp(
                    domElement,
                    tag,
                    propKey$201,
                    propKey,
                    nextProps,
                    lastProp
                  );
              }
          }
          updateInput(
            domElement,
            value,
            defaultValue,
            lastDefaultValue,
            checked,
            defaultChecked,
            type,
            name
          );
          return;
        case "select":
          propKey = value = defaultValue = propKey$201 = null;
          for (type in lastProps)
            if (lastDefaultValue = lastProps[type], lastProps.hasOwnProperty(type) && null != lastDefaultValue)
              switch (type) {
                case "value":
                  break;
                case "multiple":
                  propKey = lastDefaultValue;
                default:
                  nextProps.hasOwnProperty(type) || setProp(
                    domElement,
                    tag,
                    type,
                    null,
                    nextProps,
                    lastDefaultValue
                  );
              }
          for (name in nextProps)
            if (type = nextProps[name], lastDefaultValue = lastProps[name], nextProps.hasOwnProperty(name) && (null != type || null != lastDefaultValue))
              switch (name) {
                case "value":
                  propKey$201 = type;
                  break;
                case "defaultValue":
                  defaultValue = type;
                  break;
                case "multiple":
                  value = type;
                default:
                  type !== lastDefaultValue && setProp(
                    domElement,
                    tag,
                    name,
                    type,
                    nextProps,
                    lastDefaultValue
                  );
              }
          tag = defaultValue;
          lastProps = value;
          nextProps = propKey;
          null != propKey$201 ? updateOptions(domElement, !!lastProps, propKey$201, false) : !!nextProps !== !!lastProps && (null != tag ? updateOptions(domElement, !!lastProps, tag, true) : updateOptions(domElement, !!lastProps, lastProps ? [] : "", false));
          return;
        case "textarea":
          propKey = propKey$201 = null;
          for (defaultValue in lastProps)
            if (name = lastProps[defaultValue], lastProps.hasOwnProperty(defaultValue) && null != name && !nextProps.hasOwnProperty(defaultValue))
              switch (defaultValue) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  setProp(domElement, tag, defaultValue, null, nextProps, name);
              }
          for (value in nextProps)
            if (name = nextProps[value], type = lastProps[value], nextProps.hasOwnProperty(value) && (null != name || null != type))
              switch (value) {
                case "value":
                  propKey$201 = name;
                  break;
                case "defaultValue":
                  propKey = name;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (null != name) throw Error(formatProdErrorMessage(91));
                  break;
                default:
                  name !== type && setProp(domElement, tag, value, name, nextProps, type);
              }
          updateTextarea(domElement, propKey$201, propKey);
          return;
        case "option":
          for (var propKey$217 in lastProps)
            if (propKey$201 = lastProps[propKey$217], lastProps.hasOwnProperty(propKey$217) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$217))
              switch (propKey$217) {
                case "selected":
                  domElement.selected = false;
                  break;
                default:
                  setProp(
                    domElement,
                    tag,
                    propKey$217,
                    null,
                    nextProps,
                    propKey$201
                  );
              }
          for (lastDefaultValue in nextProps)
            if (propKey$201 = nextProps[lastDefaultValue], propKey = lastProps[lastDefaultValue], nextProps.hasOwnProperty(lastDefaultValue) && propKey$201 !== propKey && (null != propKey$201 || null != propKey))
              switch (lastDefaultValue) {
                case "selected":
                  domElement.selected = propKey$201 && "function" !== typeof propKey$201 && "symbol" !== typeof propKey$201;
                  break;
                default:
                  setProp(
                    domElement,
                    tag,
                    lastDefaultValue,
                    propKey$201,
                    nextProps,
                    propKey
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var propKey$222 in lastProps)
            propKey$201 = lastProps[propKey$222], lastProps.hasOwnProperty(propKey$222) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$222) && setProp(domElement, tag, propKey$222, null, nextProps, propKey$201);
          for (checked in nextProps)
            if (propKey$201 = nextProps[checked], propKey = lastProps[checked], nextProps.hasOwnProperty(checked) && propKey$201 !== propKey && (null != propKey$201 || null != propKey))
              switch (checked) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (null != propKey$201)
                    throw Error(formatProdErrorMessage(137, tag));
                  break;
                default:
                  setProp(
                    domElement,
                    tag,
                    checked,
                    propKey$201,
                    nextProps,
                    propKey
                  );
              }
          return;
        default:
          if (isCustomElement(tag)) {
            for (var propKey$227 in lastProps)
              propKey$201 = lastProps[propKey$227], lastProps.hasOwnProperty(propKey$227) && void 0 !== propKey$201 && !nextProps.hasOwnProperty(propKey$227) && setPropOnCustomElement(
                domElement,
                tag,
                propKey$227,
                void 0,
                nextProps,
                propKey$201
              );
            for (defaultChecked in nextProps)
              propKey$201 = nextProps[defaultChecked], propKey = lastProps[defaultChecked], !nextProps.hasOwnProperty(defaultChecked) || propKey$201 === propKey || void 0 === propKey$201 && void 0 === propKey || setPropOnCustomElement(
                domElement,
                tag,
                defaultChecked,
                propKey$201,
                nextProps,
                propKey
              );
            return;
          }
      }
      for (var propKey$232 in lastProps)
        propKey$201 = lastProps[propKey$232], lastProps.hasOwnProperty(propKey$232) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$232) && setProp(domElement, tag, propKey$232, null, nextProps, propKey$201);
      for (lastProp in nextProps)
        propKey$201 = nextProps[lastProp], propKey = lastProps[lastProp], !nextProps.hasOwnProperty(lastProp) || propKey$201 === propKey || null == propKey$201 && null == propKey || setProp(domElement, tag, lastProp, propKey$201, nextProps, propKey);
    }
    function isLikelyStaticResource(initiatorType) {
      switch (initiatorType) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function estimateBandwidth() {
      if ("function" === typeof performance.getEntriesByType) {
        for (var count = 0, bits = 0, resourceEntries = performance.getEntriesByType("resource"), i = 0; i < resourceEntries.length; i++) {
          var entry = resourceEntries[i], transferSize = entry.transferSize, initiatorType = entry.initiatorType, duration = entry.duration;
          if (transferSize && duration && isLikelyStaticResource(initiatorType)) {
            initiatorType = 0;
            duration = entry.responseEnd;
            for (i += 1; i < resourceEntries.length; i++) {
              var overlapEntry = resourceEntries[i], overlapStartTime = overlapEntry.startTime;
              if (overlapStartTime > duration) break;
              var overlapTransferSize = overlapEntry.transferSize, overlapInitiatorType = overlapEntry.initiatorType;
              overlapTransferSize && isLikelyStaticResource(overlapInitiatorType) && (overlapEntry = overlapEntry.responseEnd, initiatorType += overlapTransferSize * (overlapEntry < duration ? 1 : (duration - overlapStartTime) / (overlapEntry - overlapStartTime)));
            }
            --i;
            bits += 8 * (transferSize + initiatorType) / (entry.duration / 1e3);
            count++;
            if (10 < count) break;
          }
        }
        if (0 < count) return bits / count / 1e6;
      }
      return navigator.connection && (count = navigator.connection.downlink, "number" === typeof count) ? count : 5;
    }
    var eventsEnabled = null;
    var selectionInformation = null;
    function getOwnerDocumentFromRootContainer(rootContainerElement) {
      return 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
    }
    function getOwnHostContext(namespaceURI) {
      switch (namespaceURI) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function getChildHostContextProd(parentNamespace, type) {
      if (0 === parentNamespace)
        switch (type) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return 1 === parentNamespace && "foreignObject" === type ? 0 : parentNamespace;
    }
    function shouldSetTextContent(type, props) {
      return "textarea" === type || "noscript" === type || "string" === typeof props.children || "number" === typeof props.children || "bigint" === typeof props.children || "object" === typeof props.dangerouslySetInnerHTML && null !== props.dangerouslySetInnerHTML && null != props.dangerouslySetInnerHTML.__html;
    }
    var currentPopstateTransitionEvent = null;
    function shouldAttemptEagerTransition() {
      var event = window.event;
      if (event && "popstate" === event.type) {
        if (event === currentPopstateTransitionEvent) return false;
        currentPopstateTransitionEvent = event;
        return true;
      }
      currentPopstateTransitionEvent = null;
      return false;
    }
    var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0;
    var cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0;
    var localPromise = "function" === typeof Promise ? Promise : void 0;
    var scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof localPromise ? function(callback) {
      return localPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
    } : scheduleTimeout;
    function handleErrorInNextTick(error) {
      setTimeout(function() {
        throw error;
      });
    }
    function isSingletonScope(type) {
      return "head" === type;
    }
    function clearHydrationBoundary(parentInstance, hydrationInstance) {
      var node = hydrationInstance, depth = 0;
      do {
        var nextNode = node.nextSibling;
        parentInstance.removeChild(node);
        if (nextNode && 8 === nextNode.nodeType)
          if (node = nextNode.data, "/$" === node || "/&" === node) {
            if (0 === depth) {
              parentInstance.removeChild(nextNode);
              retryIfBlockedOn(hydrationInstance);
              return;
            }
            depth--;
          } else if ("$" === node || "$?" === node || "$~" === node || "$!" === node || "&" === node)
            depth++;
          else if ("html" === node)
            releaseSingletonInstance(parentInstance.ownerDocument.documentElement);
          else if ("head" === node) {
            node = parentInstance.ownerDocument.head;
            releaseSingletonInstance(node);
            for (var node$jscomp$0 = node.firstChild; node$jscomp$0; ) {
              var nextNode$jscomp$0 = node$jscomp$0.nextSibling, nodeName = node$jscomp$0.nodeName;
              node$jscomp$0[internalHoistableMarker] || "SCRIPT" === nodeName || "STYLE" === nodeName || "LINK" === nodeName && "stylesheet" === node$jscomp$0.rel.toLowerCase() || node.removeChild(node$jscomp$0);
              node$jscomp$0 = nextNode$jscomp$0;
            }
          } else
            "body" === node && releaseSingletonInstance(parentInstance.ownerDocument.body);
        node = nextNode;
      } while (node);
      retryIfBlockedOn(hydrationInstance);
    }
    function hideOrUnhideDehydratedBoundary(suspenseInstance, isHidden) {
      var node = suspenseInstance;
      suspenseInstance = 0;
      do {
        var nextNode = node.nextSibling;
        1 === node.nodeType ? isHidden ? (node._stashedDisplay = node.style.display, node.style.display = "none") : (node.style.display = node._stashedDisplay || "", "" === node.getAttribute("style") && node.removeAttribute("style")) : 3 === node.nodeType && (isHidden ? (node._stashedText = node.nodeValue, node.nodeValue = "") : node.nodeValue = node._stashedText || "");
        if (nextNode && 8 === nextNode.nodeType)
          if (node = nextNode.data, "/$" === node)
            if (0 === suspenseInstance) break;
            else suspenseInstance--;
          else
            "$" !== node && "$?" !== node && "$~" !== node && "$!" !== node || suspenseInstance++;
        node = nextNode;
      } while (node);
    }
    function clearContainerSparingly(container) {
      var nextNode = container.firstChild;
      nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
      for (; nextNode; ) {
        var node = nextNode;
        nextNode = nextNode.nextSibling;
        switch (node.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            clearContainerSparingly(node);
            detachDeletedInstance(node);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if ("stylesheet" === node.rel.toLowerCase()) continue;
        }
        container.removeChild(node);
      }
    }
    function canHydrateInstance(instance, type, props, inRootOrSingleton) {
      for (; 1 === instance.nodeType; ) {
        var anyProps = props;
        if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
          if (!inRootOrSingleton && ("INPUT" !== instance.nodeName || "hidden" !== instance.type))
            break;
        } else if (!inRootOrSingleton)
          if ("input" === type && "hidden" === instance.type) {
            var name = null == anyProps.name ? null : "" + anyProps.name;
            if ("hidden" === anyProps.type && instance.getAttribute("name") === name)
              return instance;
          } else return instance;
        else if (!instance[internalHoistableMarker])
          switch (type) {
            case "meta":
              if (!instance.hasAttribute("itemprop")) break;
              return instance;
            case "link":
              name = instance.getAttribute("rel");
              if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
                break;
              else if (name !== anyProps.rel || instance.getAttribute("href") !== (null == anyProps.href || "" === anyProps.href ? null : anyProps.href) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) || instance.getAttribute("title") !== (null == anyProps.title ? null : anyProps.title))
                break;
              return instance;
            case "style":
              if (instance.hasAttribute("data-precedence")) break;
              return instance;
            case "script":
              name = instance.getAttribute("src");
              if ((name !== (null == anyProps.src ? null : anyProps.src) || instance.getAttribute("type") !== (null == anyProps.type ? null : anyProps.type) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) && name && instance.hasAttribute("async") && !instance.hasAttribute("itemprop"))
                break;
              return instance;
            default:
              return instance;
          }
        instance = getNextHydratable(instance.nextSibling);
        if (null === instance) break;
      }
      return null;
    }
    function canHydrateTextInstance(instance, text, inRootOrSingleton) {
      if ("" === text) return null;
      for (; 3 !== instance.nodeType; ) {
        if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton)
          return null;
        instance = getNextHydratable(instance.nextSibling);
        if (null === instance) return null;
      }
      return instance;
    }
    function canHydrateHydrationBoundary(instance, inRootOrSingleton) {
      for (; 8 !== instance.nodeType; ) {
        if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton)
          return null;
        instance = getNextHydratable(instance.nextSibling);
        if (null === instance) return null;
      }
      return instance;
    }
    function isSuspenseInstancePending(instance) {
      return "$?" === instance.data || "$~" === instance.data;
    }
    function isSuspenseInstanceFallback(instance) {
      return "$!" === instance.data || "$?" === instance.data && "loading" !== instance.ownerDocument.readyState;
    }
    function registerSuspenseInstanceRetry(instance, callback) {
      var ownerDocument = instance.ownerDocument;
      if ("$~" === instance.data) instance._reactRetry = callback;
      else if ("$?" !== instance.data || "loading" !== ownerDocument.readyState)
        callback();
      else {
        var listener = function() {
          callback();
          ownerDocument.removeEventListener("DOMContentLoaded", listener);
        };
        ownerDocument.addEventListener("DOMContentLoaded", listener);
        instance._reactRetry = listener;
      }
    }
    function getNextHydratable(node) {
      for (; null != node; node = node.nextSibling) {
        var nodeType = node.nodeType;
        if (1 === nodeType || 3 === nodeType) break;
        if (8 === nodeType) {
          nodeType = node.data;
          if ("$" === nodeType || "$!" === nodeType || "$?" === nodeType || "$~" === nodeType || "&" === nodeType || "F!" === nodeType || "F" === nodeType)
            break;
          if ("/$" === nodeType || "/&" === nodeType) return null;
        }
      }
      return node;
    }
    var previousHydratableOnEnteringScopedSingleton = null;
    function getNextHydratableInstanceAfterHydrationBoundary(hydrationInstance) {
      hydrationInstance = hydrationInstance.nextSibling;
      for (var depth = 0; hydrationInstance; ) {
        if (8 === hydrationInstance.nodeType) {
          var data = hydrationInstance.data;
          if ("/$" === data || "/&" === data) {
            if (0 === depth)
              return getNextHydratable(hydrationInstance.nextSibling);
            depth--;
          } else
            "$" !== data && "$!" !== data && "$?" !== data && "$~" !== data && "&" !== data || depth++;
        }
        hydrationInstance = hydrationInstance.nextSibling;
      }
      return null;
    }
    function getParentHydrationBoundary(targetInstance) {
      targetInstance = targetInstance.previousSibling;
      for (var depth = 0; targetInstance; ) {
        if (8 === targetInstance.nodeType) {
          var data = targetInstance.data;
          if ("$" === data || "$!" === data || "$?" === data || "$~" === data || "&" === data) {
            if (0 === depth) return targetInstance;
            depth--;
          } else "/$" !== data && "/&" !== data || depth++;
        }
        targetInstance = targetInstance.previousSibling;
      }
      return null;
    }
    function resolveSingletonInstance(type, props, rootContainerInstance) {
      props = getOwnerDocumentFromRootContainer(rootContainerInstance);
      switch (type) {
        case "html":
          type = props.documentElement;
          if (!type) throw Error(formatProdErrorMessage(452));
          return type;
        case "head":
          type = props.head;
          if (!type) throw Error(formatProdErrorMessage(453));
          return type;
        case "body":
          type = props.body;
          if (!type) throw Error(formatProdErrorMessage(454));
          return type;
        default:
          throw Error(formatProdErrorMessage(451));
      }
    }
    function releaseSingletonInstance(instance) {
      for (var attributes = instance.attributes; attributes.length; )
        instance.removeAttributeNode(attributes[0]);
      detachDeletedInstance(instance);
    }
    var preloadPropsMap = /* @__PURE__ */ new Map();
    var preconnectsSet = /* @__PURE__ */ new Set();
    function getHoistableRoot(container) {
      return "function" === typeof container.getRootNode ? container.getRootNode() : 9 === container.nodeType ? container : container.ownerDocument;
    }
    var previousDispatcher = ReactDOMSharedInternals.d;
    ReactDOMSharedInternals.d = {
      f: flushSyncWork,
      r: requestFormReset,
      D: prefetchDNS,
      C: preconnect,
      L: preload,
      m: preloadModule,
      X: preinitScript,
      S: preinitStyle,
      M: preinitModuleScript
    };
    function flushSyncWork() {
      var previousWasRendering = previousDispatcher.f(), wasRendering = flushSyncWork$1();
      return previousWasRendering || wasRendering;
    }
    function requestFormReset(form) {
      var formInst = getInstanceFromNode(form);
      null !== formInst && 5 === formInst.tag && "form" === formInst.type ? requestFormReset$1(formInst) : previousDispatcher.r(form);
    }
    var globalDocument = "undefined" === typeof document ? null : document;
    function preconnectAs(rel, href, crossOrigin) {
      var ownerDocument = globalDocument;
      if (ownerDocument && "string" === typeof href && href) {
        var limitedEscapedHref = escapeSelectorAttributeValueInsideDoubleQuotes(href);
        limitedEscapedHref = 'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
        "string" === typeof crossOrigin && (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
        preconnectsSet.has(limitedEscapedHref) || (preconnectsSet.add(limitedEscapedHref), rel = { rel, crossOrigin, href }, null === ownerDocument.querySelector(limitedEscapedHref) && (href = ownerDocument.createElement("link"), setInitialProperties(href, "link", rel), markNodeAsHoistable(href), ownerDocument.head.appendChild(href)));
      }
    }
    function prefetchDNS(href) {
      previousDispatcher.D(href);
      preconnectAs("dns-prefetch", href, null);
    }
    function preconnect(href, crossOrigin) {
      previousDispatcher.C(href, crossOrigin);
      preconnectAs("preconnect", href, crossOrigin);
    }
    function preload(href, as, options2) {
      previousDispatcher.L(href, as, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && href && as) {
        var preloadSelector = 'link[rel="preload"][as="' + escapeSelectorAttributeValueInsideDoubleQuotes(as) + '"]';
        "image" === as ? options2 && options2.imageSrcSet ? (preloadSelector += '[imagesrcset="' + escapeSelectorAttributeValueInsideDoubleQuotes(
          options2.imageSrcSet
        ) + '"]', "string" === typeof options2.imageSizes && (preloadSelector += '[imagesizes="' + escapeSelectorAttributeValueInsideDoubleQuotes(
          options2.imageSizes
        ) + '"]')) : preloadSelector += '[href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]' : preloadSelector += '[href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]';
        var key = preloadSelector;
        switch (as) {
          case "style":
            key = getStyleKey(href);
            break;
          case "script":
            key = getScriptKey(href);
        }
        preloadPropsMap.has(key) || (href = assign(
          {
            rel: "preload",
            href: "image" === as && options2 && options2.imageSrcSet ? void 0 : href,
            as
          },
          options2
        ), preloadPropsMap.set(key, href), null !== ownerDocument.querySelector(preloadSelector) || "style" === as && ownerDocument.querySelector(getStylesheetSelectorFromKey(key)) || "script" === as && ownerDocument.querySelector(getScriptSelectorFromKey(key)) || (as = ownerDocument.createElement("link"), setInitialProperties(as, "link", href), markNodeAsHoistable(as), ownerDocument.head.appendChild(as)));
      }
    }
    function preloadModule(href, options2) {
      previousDispatcher.m(href, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && href) {
        var as = options2 && "string" === typeof options2.as ? options2.as : "script", preloadSelector = 'link[rel="modulepreload"][as="' + escapeSelectorAttributeValueInsideDoubleQuotes(as) + '"][href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]', key = preloadSelector;
        switch (as) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            key = getScriptKey(href);
        }
        if (!preloadPropsMap.has(key) && (href = assign({ rel: "modulepreload", href }, options2), preloadPropsMap.set(key, href), null === ownerDocument.querySelector(preloadSelector))) {
          switch (as) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
                return;
          }
          as = ownerDocument.createElement("link");
          setInitialProperties(as, "link", href);
          markNodeAsHoistable(as);
          ownerDocument.head.appendChild(as);
        }
      }
    }
    function preinitStyle(href, precedence, options2) {
      previousDispatcher.S(href, precedence, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && href) {
        var styles = getResourcesFromRoot(ownerDocument).hoistableStyles, key = getStyleKey(href);
        precedence = precedence || "default";
        var resource = styles.get(key);
        if (!resource) {
          var state = { loading: 0, preload: null };
          if (resource = ownerDocument.querySelector(
            getStylesheetSelectorFromKey(key)
          ))
            state.loading = 5;
          else {
            href = assign(
              { rel: "stylesheet", href, "data-precedence": precedence },
              options2
            );
            (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(href, options2);
            var link = resource = ownerDocument.createElement("link");
            markNodeAsHoistable(link);
            setInitialProperties(link, "link", href);
            link._p = new Promise(function(resolve, reject) {
              link.onload = resolve;
              link.onerror = reject;
            });
            link.addEventListener("load", function() {
              state.loading |= 1;
            });
            link.addEventListener("error", function() {
              state.loading |= 2;
            });
            state.loading |= 4;
            insertStylesheet(resource, precedence, ownerDocument);
          }
          resource = {
            type: "stylesheet",
            instance: resource,
            count: 1,
            state
          };
          styles.set(key, resource);
        }
      }
    }
    function preinitScript(src, options2) {
      previousDispatcher.X(src, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && src) {
        var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
        resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({ src, async: true }, options2), (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options2), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
          type: "script",
          instance: resource,
          count: 1,
          state: null
        }, scripts.set(key, resource));
      }
    }
    function preinitModuleScript(src, options2) {
      previousDispatcher.M(src, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && src) {
        var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
        resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({ src, async: true, type: "module" }, options2), (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options2), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
          type: "script",
          instance: resource,
          count: 1,
          state: null
        }, scripts.set(key, resource));
      }
    }
    function getResource(type, currentProps, pendingProps, currentResource) {
      var JSCompiler_inline_result = (JSCompiler_inline_result = rootInstanceStackCursor.current) ? getHoistableRoot(JSCompiler_inline_result) : null;
      if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
      switch (type) {
        case "meta":
        case "title":
          return null;
        case "style":
          return "string" === typeof pendingProps.precedence && "string" === typeof pendingProps.href ? (currentProps = getStyleKey(pendingProps.href), pendingProps = getResourcesFromRoot(
            JSCompiler_inline_result
          ).hoistableStyles, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, pendingProps.set(currentProps, currentResource)), currentResource) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if ("stylesheet" === pendingProps.rel && "string" === typeof pendingProps.href && "string" === typeof pendingProps.precedence) {
            type = getStyleKey(pendingProps.href);
            var styles$243 = getResourcesFromRoot(
              JSCompiler_inline_result
            ).hoistableStyles, resource$244 = styles$243.get(type);
            resource$244 || (JSCompiler_inline_result = JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result, resource$244 = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: 0, preload: null }
            }, styles$243.set(type, resource$244), (styles$243 = JSCompiler_inline_result.querySelector(
              getStylesheetSelectorFromKey(type)
            )) && !styles$243._p && (resource$244.instance = styles$243, resource$244.state.loading = 5), preloadPropsMap.has(type) || (pendingProps = {
              rel: "preload",
              as: "style",
              href: pendingProps.href,
              crossOrigin: pendingProps.crossOrigin,
              integrity: pendingProps.integrity,
              media: pendingProps.media,
              hrefLang: pendingProps.hrefLang,
              referrerPolicy: pendingProps.referrerPolicy
            }, preloadPropsMap.set(type, pendingProps), styles$243 || preloadStylesheet(
              JSCompiler_inline_result,
              type,
              pendingProps,
              resource$244.state
            )));
            if (currentProps && null === currentResource)
              throw Error(formatProdErrorMessage(528, ""));
            return resource$244;
          }
          if (currentProps && null !== currentResource)
            throw Error(formatProdErrorMessage(529, ""));
          return null;
        case "script":
          return currentProps = pendingProps.async, pendingProps = pendingProps.src, "string" === typeof pendingProps && currentProps && "function" !== typeof currentProps && "symbol" !== typeof currentProps ? (currentProps = getScriptKey(pendingProps), pendingProps = getResourcesFromRoot(
            JSCompiler_inline_result
          ).hoistableScripts, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, pendingProps.set(currentProps, currentResource)), currentResource) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(formatProdErrorMessage(444, type));
      }
    }
    function getStyleKey(href) {
      return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
    }
    function getStylesheetSelectorFromKey(key) {
      return 'link[rel="stylesheet"][' + key + "]";
    }
    function stylesheetPropsFromRawProps(rawProps) {
      return assign({}, rawProps, {
        "data-precedence": rawProps.precedence,
        precedence: null
      });
    }
    function preloadStylesheet(ownerDocument, key, preloadProps, state) {
      ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]") ? state.loading = 1 : (key = ownerDocument.createElement("link"), state.preload = key, key.addEventListener("load", function() {
        return state.loading |= 1;
      }), key.addEventListener("error", function() {
        return state.loading |= 2;
      }), setInitialProperties(key, "link", preloadProps), markNodeAsHoistable(key), ownerDocument.head.appendChild(key));
    }
    function getScriptKey(src) {
      return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
    }
    function getScriptSelectorFromKey(key) {
      return "script[async]" + key;
    }
    function acquireResource(hoistableRoot, resource, props) {
      resource.count++;
      if (null === resource.instance)
        switch (resource.type) {
          case "style":
            var instance = hoistableRoot.querySelector(
              'style[data-href~="' + escapeSelectorAttributeValueInsideDoubleQuotes(props.href) + '"]'
            );
            if (instance)
              return resource.instance = instance, markNodeAsHoistable(instance), instance;
            var styleProps = assign({}, props, {
              "data-href": props.href,
              "data-precedence": props.precedence,
              href: null,
              precedence: null
            });
            instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
              "style"
            );
            markNodeAsHoistable(instance);
            setInitialProperties(instance, "style", styleProps);
            insertStylesheet(instance, props.precedence, hoistableRoot);
            return resource.instance = instance;
          case "stylesheet":
            styleProps = getStyleKey(props.href);
            var instance$249 = hoistableRoot.querySelector(
              getStylesheetSelectorFromKey(styleProps)
            );
            if (instance$249)
              return resource.state.loading |= 4, resource.instance = instance$249, markNodeAsHoistable(instance$249), instance$249;
            instance = stylesheetPropsFromRawProps(props);
            (styleProps = preloadPropsMap.get(styleProps)) && adoptPreloadPropsForStylesheet(instance, styleProps);
            instance$249 = (hoistableRoot.ownerDocument || hoistableRoot).createElement("link");
            markNodeAsHoistable(instance$249);
            var linkInstance = instance$249;
            linkInstance._p = new Promise(function(resolve, reject) {
              linkInstance.onload = resolve;
              linkInstance.onerror = reject;
            });
            setInitialProperties(instance$249, "link", instance);
            resource.state.loading |= 4;
            insertStylesheet(instance$249, props.precedence, hoistableRoot);
            return resource.instance = instance$249;
          case "script":
            instance$249 = getScriptKey(props.src);
            if (styleProps = hoistableRoot.querySelector(
              getScriptSelectorFromKey(instance$249)
            ))
              return resource.instance = styleProps, markNodeAsHoistable(styleProps), styleProps;
            instance = props;
            if (styleProps = preloadPropsMap.get(instance$249))
              instance = assign({}, props), adoptPreloadPropsForScript(instance, styleProps);
            hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
            styleProps = hoistableRoot.createElement("script");
            markNodeAsHoistable(styleProps);
            setInitialProperties(styleProps, "link", instance);
            hoistableRoot.head.appendChild(styleProps);
            return resource.instance = styleProps;
          case "void":
            return null;
          default:
            throw Error(formatProdErrorMessage(443, resource.type));
        }
      else
        "stylesheet" === resource.type && 0 === (resource.state.loading & 4) && (instance = resource.instance, resource.state.loading |= 4, insertStylesheet(instance, props.precedence, hoistableRoot));
      return resource.instance;
    }
    function insertStylesheet(instance, precedence, root2) {
      for (var nodes = root2.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), last = nodes.length ? nodes[nodes.length - 1] : null, prior = last, i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.dataset.precedence === precedence) prior = node;
        else if (prior !== last) break;
      }
      prior ? prior.parentNode.insertBefore(instance, prior.nextSibling) : (precedence = 9 === root2.nodeType ? root2.head : root2, precedence.insertBefore(instance, precedence.firstChild));
    }
    function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
      null == stylesheetProps.crossOrigin && (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
      null == stylesheetProps.referrerPolicy && (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
      null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
    }
    function adoptPreloadPropsForScript(scriptProps, preloadProps) {
      null == scriptProps.crossOrigin && (scriptProps.crossOrigin = preloadProps.crossOrigin);
      null == scriptProps.referrerPolicy && (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
      null == scriptProps.integrity && (scriptProps.integrity = preloadProps.integrity);
    }
    var tagCaches = null;
    function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
      if (null === tagCaches) {
        var cache = /* @__PURE__ */ new Map();
        var caches = tagCaches = /* @__PURE__ */ new Map();
        caches.set(ownerDocument, cache);
      } else
        caches = tagCaches, cache = caches.get(ownerDocument), cache || (cache = /* @__PURE__ */ new Map(), caches.set(ownerDocument, cache));
      if (cache.has(type)) return cache;
      cache.set(type, null);
      ownerDocument = ownerDocument.getElementsByTagName(type);
      for (caches = 0; caches < ownerDocument.length; caches++) {
        var node = ownerDocument[caches];
        if (!(node[internalHoistableMarker] || node[internalInstanceKey] || "link" === type && "stylesheet" === node.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== node.namespaceURI) {
          var nodeKey = node.getAttribute(keyAttribute) || "";
          nodeKey = type + nodeKey;
          var existing = cache.get(nodeKey);
          existing ? existing.push(node) : cache.set(nodeKey, [node]);
        }
      }
      return cache;
    }
    function mountHoistable(hoistableRoot, type, instance) {
      hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
      hoistableRoot.head.insertBefore(
        instance,
        "title" === type ? hoistableRoot.querySelector("head > title") : null
      );
    }
    function isHostHoistableType(type, props, hostContext) {
      if (1 === hostContext || null != props.itemProp) return false;
      switch (type) {
        case "meta":
        case "title":
          return true;
        case "style":
          if ("string" !== typeof props.precedence || "string" !== typeof props.href || "" === props.href)
            break;
          return true;
        case "link":
          if ("string" !== typeof props.rel || "string" !== typeof props.href || "" === props.href || props.onLoad || props.onError)
            break;
          switch (props.rel) {
            case "stylesheet":
              return type = props.disabled, "string" === typeof props.precedence && null == type;
            default:
              return true;
          }
        case "script":
          if (props.async && "function" !== typeof props.async && "symbol" !== typeof props.async && !props.onLoad && !props.onError && props.src && "string" === typeof props.src)
            return true;
      }
      return false;
    }
    function preloadResource(resource) {
      return "stylesheet" === resource.type && 0 === (resource.state.loading & 3) ? false : true;
    }
    function suspendResource(state, hoistableRoot, resource, props) {
      if ("stylesheet" === resource.type && ("string" !== typeof props.media || false !== matchMedia(props.media).matches) && 0 === (resource.state.loading & 4)) {
        if (null === resource.instance) {
          var key = getStyleKey(props.href), instance = hoistableRoot.querySelector(
            getStylesheetSelectorFromKey(key)
          );
          if (instance) {
            hoistableRoot = instance._p;
            null !== hoistableRoot && "object" === typeof hoistableRoot && "function" === typeof hoistableRoot.then && (state.count++, state = onUnsuspend.bind(state), hoistableRoot.then(state, state));
            resource.state.loading |= 4;
            resource.instance = instance;
            markNodeAsHoistable(instance);
            return;
          }
          instance = hoistableRoot.ownerDocument || hoistableRoot;
          props = stylesheetPropsFromRawProps(props);
          (key = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(props, key);
          instance = instance.createElement("link");
          markNodeAsHoistable(instance);
          var linkInstance = instance;
          linkInstance._p = new Promise(function(resolve, reject) {
            linkInstance.onload = resolve;
            linkInstance.onerror = reject;
          });
          setInitialProperties(instance, "link", props);
          resource.instance = instance;
        }
        null === state.stylesheets && (state.stylesheets = /* @__PURE__ */ new Map());
        state.stylesheets.set(resource, hoistableRoot);
        (hoistableRoot = resource.state.preload) && 0 === (resource.state.loading & 3) && (state.count++, resource = onUnsuspend.bind(state), hoistableRoot.addEventListener("load", resource), hoistableRoot.addEventListener("error", resource));
      }
    }
    var estimatedBytesWithinLimit = 0;
    function waitForCommitToBeReady(state, timeoutOffset) {
      state.stylesheets && 0 === state.count && insertSuspendedStylesheets(state, state.stylesheets);
      return 0 < state.count || 0 < state.imgCount ? function(commit) {
        var stylesheetTimer = setTimeout(function() {
          state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets);
          if (state.unsuspend) {
            var unsuspend = state.unsuspend;
            state.unsuspend = null;
            unsuspend();
          }
        }, 6e4 + timeoutOffset);
        0 < state.imgBytes && 0 === estimatedBytesWithinLimit && (estimatedBytesWithinLimit = 62500 * estimateBandwidth());
        var imgTimer = setTimeout(
          function() {
            state.waitingForImages = false;
            if (0 === state.count && (state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets), state.unsuspend)) {
              var unsuspend = state.unsuspend;
              state.unsuspend = null;
              unsuspend();
            }
          },
          (state.imgBytes > estimatedBytesWithinLimit ? 50 : 800) + timeoutOffset
        );
        state.unsuspend = commit;
        return function() {
          state.unsuspend = null;
          clearTimeout(stylesheetTimer);
          clearTimeout(imgTimer);
        };
      } : null;
    }
    function onUnsuspend() {
      this.count--;
      if (0 === this.count && (0 === this.imgCount || !this.waitingForImages)) {
        if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
        else if (this.unsuspend) {
          var unsuspend = this.unsuspend;
          this.unsuspend = null;
          unsuspend();
        }
      }
    }
    var precedencesByRoot = null;
    function insertSuspendedStylesheets(state, resources) {
      state.stylesheets = null;
      null !== state.unsuspend && (state.count++, precedencesByRoot = /* @__PURE__ */ new Map(), resources.forEach(insertStylesheetIntoRoot, state), precedencesByRoot = null, onUnsuspend.call(state));
    }
    function insertStylesheetIntoRoot(root2, resource) {
      if (!(resource.state.loading & 4)) {
        var precedences = precedencesByRoot.get(root2);
        if (precedences) var last = precedences.get(null);
        else {
          precedences = /* @__PURE__ */ new Map();
          precedencesByRoot.set(root2, precedences);
          for (var nodes = root2.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if ("LINK" === node.nodeName || "not all" !== node.getAttribute("media"))
              precedences.set(node.dataset.precedence, node), last = node;
          }
          last && precedences.set(null, last);
        }
        nodes = resource.instance;
        node = nodes.getAttribute("data-precedence");
        i = precedences.get(node) || last;
        i === last && precedences.set(null, nodes);
        precedences.set(node, nodes);
        this.count++;
        last = onUnsuspend.bind(this);
        nodes.addEventListener("load", last);
        nodes.addEventListener("error", last);
        i ? i.parentNode.insertBefore(nodes, i.nextSibling) : (root2 = 9 === root2.nodeType ? root2.head : root2, root2.insertBefore(nodes, root2.firstChild));
        resource.state.loading |= 4;
      }
    }
    var HostTransitionContext = {
      $$typeof: REACT_CONTEXT_TYPE,
      Provider: null,
      Consumer: null,
      _currentValue: sharedNotPendingObject,
      _currentValue2: sharedNotPendingObject,
      _threadCount: 0
    };
    function FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator, formState) {
      this.tag = 1;
      this.containerInfo = containerInfo;
      this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
      this.callbackPriority = 0;
      this.expirationTimes = createLaneMap(-1);
      this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = createLaneMap(0);
      this.hiddenUpdates = createLaneMap(null);
      this.identifierPrefix = identifierPrefix;
      this.onUncaughtError = onUncaughtError;
      this.onCaughtError = onCaughtError;
      this.onRecoverableError = onRecoverableError;
      this.pooledCache = null;
      this.pooledCacheLanes = 0;
      this.formState = formState;
      this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, identifierPrefix, formState, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator) {
      containerInfo = new FiberRootNode(
        containerInfo,
        tag,
        hydrate,
        identifierPrefix,
        onUncaughtError,
        onCaughtError,
        onRecoverableError,
        onDefaultTransitionIndicator,
        formState
      );
      tag = 1;
      true === isStrictMode && (tag |= 24);
      isStrictMode = createFiberImplClass(3, null, null, tag);
      containerInfo.current = isStrictMode;
      isStrictMode.stateNode = containerInfo;
      tag = createCache();
      tag.refCount++;
      containerInfo.pooledCache = tag;
      tag.refCount++;
      isStrictMode.memoizedState = {
        element: initialChildren,
        isDehydrated: hydrate,
        cache: tag
      };
      initializeUpdateQueue(isStrictMode);
      return containerInfo;
    }
    function getContextForSubtree(parentComponent) {
      if (!parentComponent) return emptyContextObject;
      parentComponent = emptyContextObject;
      return parentComponent;
    }
    function updateContainerImpl(rootFiber, lane, element, container, parentComponent, callback) {
      parentComponent = getContextForSubtree(parentComponent);
      null === container.context ? container.context = parentComponent : container.pendingContext = parentComponent;
      container = createUpdate(lane);
      container.payload = { element };
      callback = void 0 === callback ? null : callback;
      null !== callback && (container.callback = callback);
      element = enqueueUpdate(rootFiber, container, lane);
      null !== element && (scheduleUpdateOnFiber(element, rootFiber, lane), entangleTransitions(element, rootFiber, lane));
    }
    function markRetryLaneImpl(fiber, retryLane) {
      fiber = fiber.memoizedState;
      if (null !== fiber && null !== fiber.dehydrated) {
        var a = fiber.retryLane;
        fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
      }
    }
    function markRetryLaneIfNotHydrated(fiber, retryLane) {
      markRetryLaneImpl(fiber, retryLane);
      (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
    }
    function attemptContinuousHydration(fiber) {
      if (13 === fiber.tag || 31 === fiber.tag) {
        var root2 = enqueueConcurrentRenderForLane(fiber, 67108864);
        null !== root2 && scheduleUpdateOnFiber(root2, fiber, 67108864);
        markRetryLaneIfNotHydrated(fiber, 67108864);
      }
    }
    function attemptHydrationAtCurrentPriority(fiber) {
      if (13 === fiber.tag || 31 === fiber.tag) {
        var lane = requestUpdateLane();
        lane = getBumpedLaneForHydrationByLane(lane);
        var root2 = enqueueConcurrentRenderForLane(fiber, lane);
        null !== root2 && scheduleUpdateOnFiber(root2, fiber, lane);
        markRetryLaneIfNotHydrated(fiber, lane);
      }
    }
    var _enabled = true;
    function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
      var prevTransition = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      try {
        ReactDOMSharedInternals.p = 2, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
      } finally {
        ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
      }
    }
    function dispatchContinuousEvent(domEventName, eventSystemFlags, container, nativeEvent) {
      var prevTransition = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      try {
        ReactDOMSharedInternals.p = 8, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
      } finally {
        ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
      }
    }
    function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
      if (_enabled) {
        var blockedOn = findInstanceBlockingEvent(nativeEvent);
        if (null === blockedOn)
          dispatchEventForPluginEventSystem(
            domEventName,
            eventSystemFlags,
            nativeEvent,
            return_targetInst,
            targetContainer
          ), clearIfContinuousEvent(domEventName, nativeEvent);
        else if (queueIfContinuousEvent(
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        ))
          nativeEvent.stopPropagation();
        else if (clearIfContinuousEvent(domEventName, nativeEvent), eventSystemFlags & 4 && -1 < discreteReplayableEvents.indexOf(domEventName)) {
          for (; null !== blockedOn; ) {
            var fiber = getInstanceFromNode(blockedOn);
            if (null !== fiber)
              switch (fiber.tag) {
                case 3:
                  fiber = fiber.stateNode;
                  if (fiber.current.memoizedState.isDehydrated) {
                    var lanes = getHighestPriorityLanes(fiber.pendingLanes);
                    if (0 !== lanes) {
                      var root2 = fiber;
                      root2.pendingLanes |= 2;
                      for (root2.entangledLanes |= 2; lanes; ) {
                        var lane = 1 << 31 - clz32(lanes);
                        root2.entanglements[1] |= lane;
                        lanes &= ~lane;
                      }
                      ensureRootIsScheduled(fiber);
                      0 === (executionContext & 6) && (workInProgressRootRenderTargetTime = now() + 500, flushSyncWorkAcrossRoots_impl(0, false));
                    }
                  }
                  break;
                case 31:
                case 13:
                  root2 = enqueueConcurrentRenderForLane(fiber, 2), null !== root2 && scheduleUpdateOnFiber(root2, fiber, 2), flushSyncWork$1(), markRetryLaneIfNotHydrated(fiber, 2);
              }
            fiber = findInstanceBlockingEvent(nativeEvent);
            null === fiber && dispatchEventForPluginEventSystem(
              domEventName,
              eventSystemFlags,
              nativeEvent,
              return_targetInst,
              targetContainer
            );
            if (fiber === blockedOn) break;
            blockedOn = fiber;
          }
          null !== blockedOn && nativeEvent.stopPropagation();
        } else
          dispatchEventForPluginEventSystem(
            domEventName,
            eventSystemFlags,
            nativeEvent,
            null,
            targetContainer
          );
      }
    }
    function findInstanceBlockingEvent(nativeEvent) {
      nativeEvent = getEventTarget(nativeEvent);
      return findInstanceBlockingTarget(nativeEvent);
    }
    var return_targetInst = null;
    function findInstanceBlockingTarget(targetNode) {
      return_targetInst = null;
      targetNode = getClosestInstanceFromNode(targetNode);
      if (null !== targetNode) {
        var nearestMounted = getNearestMountedFiber(targetNode);
        if (null === nearestMounted) targetNode = null;
        else {
          var tag = nearestMounted.tag;
          if (13 === tag) {
            targetNode = getSuspenseInstanceFromFiber(nearestMounted);
            if (null !== targetNode) return targetNode;
            targetNode = null;
          } else if (31 === tag) {
            targetNode = getActivityInstanceFromFiber(nearestMounted);
            if (null !== targetNode) return targetNode;
            targetNode = null;
          } else if (3 === tag) {
            if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
              return 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
            targetNode = null;
          } else nearestMounted !== targetNode && (targetNode = null);
        }
      }
      return_targetInst = targetNode;
      return null;
    }
    function getEventPriority(domEventName) {
      switch (domEventName) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (getCurrentPriorityLevel()) {
            case ImmediatePriority:
              return 2;
            case UserBlockingPriority:
              return 8;
            case NormalPriority$1:
            case LowPriority:
              return 32;
            case IdlePriority:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hasScheduledReplayAttempt = false;
    var queuedFocus = null;
    var queuedDrag = null;
    var queuedMouse = null;
    var queuedPointers = /* @__PURE__ */ new Map();
    var queuedPointerCaptures = /* @__PURE__ */ new Map();
    var queuedExplicitHydrationTargets = [];
    var discreteReplayableEvents = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    );
    function clearIfContinuousEvent(domEventName, nativeEvent) {
      switch (domEventName) {
        case "focusin":
        case "focusout":
          queuedFocus = null;
          break;
        case "dragenter":
        case "dragleave":
          queuedDrag = null;
          break;
        case "mouseover":
        case "mouseout":
          queuedMouse = null;
          break;
        case "pointerover":
        case "pointerout":
          queuedPointers.delete(nativeEvent.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          queuedPointerCaptures.delete(nativeEvent.pointerId);
      }
    }
    function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
      if (null === existingQueuedEvent || existingQueuedEvent.nativeEvent !== nativeEvent)
        return existingQueuedEvent = {
          blockedOn,
          domEventName,
          eventSystemFlags,
          nativeEvent,
          targetContainers: [targetContainer]
        }, null !== blockedOn && (blockedOn = getInstanceFromNode(blockedOn), null !== blockedOn && attemptContinuousHydration(blockedOn)), existingQueuedEvent;
      existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
      blockedOn = existingQueuedEvent.targetContainers;
      null !== targetContainer && -1 === blockedOn.indexOf(targetContainer) && blockedOn.push(targetContainer);
      return existingQueuedEvent;
    }
    function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
      switch (domEventName) {
        case "focusin":
          return queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedFocus,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          ), true;
        case "dragenter":
          return queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedDrag,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          ), true;
        case "mouseover":
          return queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedMouse,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          ), true;
        case "pointerover":
          var pointerId = nativeEvent.pointerId;
          queuedPointers.set(
            pointerId,
            accumulateOrCreateContinuousQueuedReplayableEvent(
              queuedPointers.get(pointerId) || null,
              blockedOn,
              domEventName,
              eventSystemFlags,
              targetContainer,
              nativeEvent
            )
          );
          return true;
        case "gotpointercapture":
          return pointerId = nativeEvent.pointerId, queuedPointerCaptures.set(
            pointerId,
            accumulateOrCreateContinuousQueuedReplayableEvent(
              queuedPointerCaptures.get(pointerId) || null,
              blockedOn,
              domEventName,
              eventSystemFlags,
              targetContainer,
              nativeEvent
            )
          ), true;
      }
      return false;
    }
    function attemptExplicitHydrationTarget(queuedTarget) {
      var targetInst = getClosestInstanceFromNode(queuedTarget.target);
      if (null !== targetInst) {
        var nearestMounted = getNearestMountedFiber(targetInst);
        if (null !== nearestMounted) {
          if (targetInst = nearestMounted.tag, 13 === targetInst) {
            if (targetInst = getSuspenseInstanceFromFiber(nearestMounted), null !== targetInst) {
              queuedTarget.blockedOn = targetInst;
              runWithPriority(queuedTarget.priority, function() {
                attemptHydrationAtCurrentPriority(nearestMounted);
              });
              return;
            }
          } else if (31 === targetInst) {
            if (targetInst = getActivityInstanceFromFiber(nearestMounted), null !== targetInst) {
              queuedTarget.blockedOn = targetInst;
              runWithPriority(queuedTarget.priority, function() {
                attemptHydrationAtCurrentPriority(nearestMounted);
              });
              return;
            }
          } else if (3 === targetInst && nearestMounted.stateNode.current.memoizedState.isDehydrated) {
            queuedTarget.blockedOn = 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
            return;
          }
        }
      }
      queuedTarget.blockedOn = null;
    }
    function attemptReplayContinuousQueuedEvent(queuedEvent) {
      if (null !== queuedEvent.blockedOn) return false;
      for (var targetContainers = queuedEvent.targetContainers; 0 < targetContainers.length; ) {
        var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
        if (null === nextBlockedOn) {
          nextBlockedOn = queuedEvent.nativeEvent;
          var nativeEventClone = new nextBlockedOn.constructor(
            nextBlockedOn.type,
            nextBlockedOn
          );
          currentReplayingEvent = nativeEventClone;
          nextBlockedOn.target.dispatchEvent(nativeEventClone);
          currentReplayingEvent = null;
        } else
          return targetContainers = getInstanceFromNode(nextBlockedOn), null !== targetContainers && attemptContinuousHydration(targetContainers), queuedEvent.blockedOn = nextBlockedOn, false;
        targetContainers.shift();
      }
      return true;
    }
    function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
      attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
    }
    function replayUnblockedEvents() {
      hasScheduledReplayAttempt = false;
      null !== queuedFocus && attemptReplayContinuousQueuedEvent(queuedFocus) && (queuedFocus = null);
      null !== queuedDrag && attemptReplayContinuousQueuedEvent(queuedDrag) && (queuedDrag = null);
      null !== queuedMouse && attemptReplayContinuousQueuedEvent(queuedMouse) && (queuedMouse = null);
      queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
      queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
    }
    function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
      queuedEvent.blockedOn === unblocked && (queuedEvent.blockedOn = null, hasScheduledReplayAttempt || (hasScheduledReplayAttempt = true, Scheduler.unstable_scheduleCallback(
        Scheduler.unstable_NormalPriority,
        replayUnblockedEvents
      )));
    }
    var lastScheduledReplayQueue = null;
    function scheduleReplayQueueIfNeeded(formReplayingQueue) {
      lastScheduledReplayQueue !== formReplayingQueue && (lastScheduledReplayQueue = formReplayingQueue, Scheduler.unstable_scheduleCallback(
        Scheduler.unstable_NormalPriority,
        function() {
          lastScheduledReplayQueue === formReplayingQueue && (lastScheduledReplayQueue = null);
          for (var i = 0; i < formReplayingQueue.length; i += 3) {
            var form = formReplayingQueue[i], submitterOrAction = formReplayingQueue[i + 1], formData = formReplayingQueue[i + 2];
            if ("function" !== typeof submitterOrAction)
              if (null === findInstanceBlockingTarget(submitterOrAction || form))
                continue;
              else break;
            var formInst = getInstanceFromNode(form);
            null !== formInst && (formReplayingQueue.splice(i, 3), i -= 3, startHostTransition(
              formInst,
              {
                pending: true,
                data: formData,
                method: form.method,
                action: submitterOrAction
              },
              submitterOrAction,
              formData
            ));
          }
        }
      ));
    }
    function retryIfBlockedOn(unblocked) {
      function unblock(queuedEvent) {
        return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
      }
      null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
      null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
      null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
      queuedPointers.forEach(unblock);
      queuedPointerCaptures.forEach(unblock);
      for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
        var queuedTarget = queuedExplicitHydrationTargets[i];
        queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
      }
      for (; 0 < queuedExplicitHydrationTargets.length && (i = queuedExplicitHydrationTargets[0], null === i.blockedOn); )
        attemptExplicitHydrationTarget(i), null === i.blockedOn && queuedExplicitHydrationTargets.shift();
      i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
      if (null != i)
        for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
          var form = i[queuedTarget], submitterOrAction = i[queuedTarget + 1], formProps = form[internalPropsKey] || null;
          if ("function" === typeof submitterOrAction)
            formProps || scheduleReplayQueueIfNeeded(i);
          else if (formProps) {
            var action = null;
            if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
              if (form = submitterOrAction, formProps = submitterOrAction[internalPropsKey] || null)
                action = formProps.formAction;
              else {
                if (null !== findInstanceBlockingTarget(form)) continue;
              }
            else action = formProps.action;
            "function" === typeof action ? i[queuedTarget + 1] = action : (i.splice(queuedTarget, 3), queuedTarget -= 3);
            scheduleReplayQueueIfNeeded(i);
          }
        }
    }
    function defaultOnDefaultTransitionIndicator() {
      function handleNavigate(event) {
        event.canIntercept && "react-transition" === event.info && event.intercept({
          handler: function() {
            return new Promise(function(resolve) {
              return pendingResolve = resolve;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function handleNavigateComplete() {
        null !== pendingResolve && (pendingResolve(), pendingResolve = null);
        isCancelled || setTimeout(startFakeNavigation, 20);
      }
      function startFakeNavigation() {
        if (!isCancelled && !navigation.transition) {
          var currentEntry = navigation.currentEntry;
          currentEntry && null != currentEntry.url && navigation.navigate(currentEntry.url, {
            state: currentEntry.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if ("object" === typeof navigation) {
        var isCancelled = false, pendingResolve = null;
        navigation.addEventListener("navigate", handleNavigate);
        navigation.addEventListener("navigatesuccess", handleNavigateComplete);
        navigation.addEventListener("navigateerror", handleNavigateComplete);
        setTimeout(startFakeNavigation, 100);
        return function() {
          isCancelled = true;
          navigation.removeEventListener("navigate", handleNavigate);
          navigation.removeEventListener("navigatesuccess", handleNavigateComplete);
          navigation.removeEventListener("navigateerror", handleNavigateComplete);
          null !== pendingResolve && (pendingResolve(), pendingResolve = null);
        };
      }
    }
    function ReactDOMRoot(internalRoot) {
      this._internalRoot = internalRoot;
    }
    ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render = function(children) {
      var root2 = this._internalRoot;
      if (null === root2) throw Error(formatProdErrorMessage(409));
      var current = root2.current, lane = requestUpdateLane();
      updateContainerImpl(current, lane, children, root2, null, null);
    };
    ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount = function() {
      var root2 = this._internalRoot;
      if (null !== root2) {
        this._internalRoot = null;
        var container = root2.containerInfo;
        updateContainerImpl(root2.current, 2, null, root2, null, null);
        flushSyncWork$1();
        container[internalContainerInstanceKey] = null;
      }
    };
    function ReactDOMHydrationRoot(internalRoot) {
      this._internalRoot = internalRoot;
    }
    ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function(target) {
      if (target) {
        var updatePriority = resolveUpdatePriority();
        target = { blockedOn: null, target, priority: updatePriority };
        for (var i = 0; i < queuedExplicitHydrationTargets.length && 0 !== updatePriority && updatePriority < queuedExplicitHydrationTargets[i].priority; i++) ;
        queuedExplicitHydrationTargets.splice(i, 0, target);
        0 === i && attemptExplicitHydrationTarget(target);
      }
    };
    var isomorphicReactPackageVersion$jscomp$inline_1840 = React2.version;
    if ("19.2.7" !== isomorphicReactPackageVersion$jscomp$inline_1840)
      throw Error(
        formatProdErrorMessage(
          527,
          isomorphicReactPackageVersion$jscomp$inline_1840,
          "19.2.7"
        )
      );
    ReactDOMSharedInternals.findDOMNode = function(componentOrElement) {
      var fiber = componentOrElement._reactInternals;
      if (void 0 === fiber) {
        if ("function" === typeof componentOrElement.render)
          throw Error(formatProdErrorMessage(188));
        componentOrElement = Object.keys(componentOrElement).join(",");
        throw Error(formatProdErrorMessage(268, componentOrElement));
      }
      componentOrElement = findCurrentFiberUsingSlowPath(fiber);
      componentOrElement = null !== componentOrElement ? findCurrentHostFiberImpl(componentOrElement) : null;
      componentOrElement = null === componentOrElement ? null : componentOrElement.stateNode;
      return componentOrElement;
    };
    var internals$jscomp$inline_2347 = {
      bundleType: 0,
      version: "19.2.7",
      rendererPackageName: "react-dom",
      currentDispatcherRef: ReactSharedInternals,
      reconcilerVersion: "19.2.7"
    };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      hook$jscomp$inline_2348 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!hook$jscomp$inline_2348.isDisabled && hook$jscomp$inline_2348.supportsFiber)
        try {
          rendererID = hook$jscomp$inline_2348.inject(
            internals$jscomp$inline_2347
          ), injectedHook = hook$jscomp$inline_2348;
        } catch (err) {
        }
    }
    var hook$jscomp$inline_2348;
    exports.createRoot = function(container, options2) {
      if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
      var isStrictMode = false, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError;
      null !== options2 && void 0 !== options2 && (true === options2.unstable_strictMode && (isStrictMode = true), void 0 !== options2.identifierPrefix && (identifierPrefix = options2.identifierPrefix), void 0 !== options2.onUncaughtError && (onUncaughtError = options2.onUncaughtError), void 0 !== options2.onCaughtError && (onCaughtError = options2.onCaughtError), void 0 !== options2.onRecoverableError && (onRecoverableError = options2.onRecoverableError));
      options2 = createFiberRoot(
        container,
        1,
        false,
        null,
        null,
        isStrictMode,
        identifierPrefix,
        null,
        onUncaughtError,
        onCaughtError,
        onRecoverableError,
        defaultOnDefaultTransitionIndicator
      );
      container[internalContainerInstanceKey] = options2.current;
      listenToAllSupportedEvents(container);
      return new ReactDOMRoot(options2);
    };
    exports.hydrateRoot = function(container, initialChildren, options2) {
      if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
      var isStrictMode = false, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError, formState = null;
      null !== options2 && void 0 !== options2 && (true === options2.unstable_strictMode && (isStrictMode = true), void 0 !== options2.identifierPrefix && (identifierPrefix = options2.identifierPrefix), void 0 !== options2.onUncaughtError && (onUncaughtError = options2.onUncaughtError), void 0 !== options2.onCaughtError && (onCaughtError = options2.onCaughtError), void 0 !== options2.onRecoverableError && (onRecoverableError = options2.onRecoverableError), void 0 !== options2.formState && (formState = options2.formState));
      initialChildren = createFiberRoot(
        container,
        1,
        true,
        initialChildren,
        null != options2 ? options2 : null,
        isStrictMode,
        identifierPrefix,
        formState,
        onUncaughtError,
        onCaughtError,
        onRecoverableError,
        defaultOnDefaultTransitionIndicator
      );
      initialChildren.context = getContextForSubtree(null);
      options2 = initialChildren.current;
      isStrictMode = requestUpdateLane();
      isStrictMode = getBumpedLaneForHydrationByLane(isStrictMode);
      identifierPrefix = createUpdate(isStrictMode);
      identifierPrefix.callback = null;
      enqueueUpdate(options2, identifierPrefix, isStrictMode);
      options2 = isStrictMode;
      initialChildren.current.lanes = options2;
      markRootUpdated$1(initialChildren, options2);
      ensureRootIsScheduled(initialChildren);
      container[internalContainerInstanceKey] = initialChildren.current;
      listenToAllSupportedEvents(container);
      return new ReactDOMHydrationRoot(initialChildren);
    };
    exports.version = "19.2.7";
  }
});

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      if (false) {
        throw new Error("^_^");
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    if (true) {
      checkDCE();
      module.exports = require_react_dom_client_production();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/react/cjs/react-jsx-runtime.production.js
var require_react_jsx_runtime_production = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.production.js"(exports) {
    "use strict";
    init_define_import_meta_env();
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    function jsxProd(type, config, maybeKey) {
      var key = null;
      void 0 !== maybeKey && (key = "" + maybeKey);
      void 0 !== config.key && (key = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      config = maybeKey.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== config ? config : null,
        props: maybeKey
      };
    }
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = jsxProd;
    exports.jsxs = jsxProd;
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    if (true) {
      module.exports = require_react_jsx_runtime_production();
    } else {
      module.exports = null;
    }
  }
});

// admin.tsx
init_define_import_meta_env();
var import_react9 = __toESM(require_react());
var import_client = __toESM(require_client());

// src/admin/GRARFAdminApp.tsx
init_define_import_meta_env();
var import_react8 = __toESM(require_react());

// src/admin/AdminSidebar.tsx
init_define_import_meta_env();

// src/admin/adminNav.ts
init_define_import_meta_env();
var ADMIN_NAV_ITEMS = [
  { id: "operations", label: "Operations", enabled: true },
  { id: "editorial", label: "Editorial", enabled: false },
  { id: "featured-games", label: "Featured Games", enabled: false },
  { id: "streams", label: "Streams", enabled: false },
  { id: "navigation", label: "Navigation", enabled: false },
  { id: "waitlist", label: "Waitlist", enabled: false },
  { id: "analytics", label: "Analytics", enabled: false },
  { id: "settings", label: "Settings", enabled: false }
];

// src/admin/AdminSidebar.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
function AdminSidebar({ activeItemId, onSelect }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { className: "grarf-admin__sidebar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "grarf-admin__brand", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "grarf-admin__brand-title", children: "GRARF Admin" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "grarf-admin__brand-subtitle", children: "Operations & editorial tools" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { className: "grarf-admin__nav", "aria-label": "Admin navigation", children: ADMIN_NAV_ITEMS.map((item) => {
      const isActive = item.id === activeItemId;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          type: "button",
          className: isActive ? "grarf-admin__nav-item grarf-admin__nav-item--active" : "grarf-admin__nav-item",
          disabled: !item.enabled,
          "aria-current": isActive ? "page" : void 0,
          title: item.enabled ? void 0 : "Coming soon",
          onClick: () => {
            if (item.enabled) onSelect(item.id);
          },
          children: item.label
        },
        item.id
      );
    }) })
  ] });
}

// src/admin/modules/OperationsModule.tsx
init_define_import_meta_env();
var import_react7 = __toESM(require_react());

// ../grarf/desktop/src/lib/featuredGames/featuredGamesAdminApi.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/sportscape/editorial/fetchSportscapeEditorialWithFailover.ts
init_define_import_meta_env();

// ../grarf/desktop/src/config/sportscapeEditorialConfig.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/platform/isGrarfWebRenderer.ts
init_define_import_meta_env();
function isGrarfElectronRenderer() {
  return typeof window !== "undefined" && window.GRARF_ELECTRON === true;
}
function isGrarfWebRenderer() {
  if (isGrarfElectronRenderer()) return false;
  return typeof window !== "undefined" && window.GRARF_WEB_CONFIG != null;
}

// ../grarf/desktop/src/config/sportscapeEditorialConfig.ts
var SPORTSCAPE_EDITORIAL_PRIMARY_API_URL = "https://grarf-operational-service.grarf.workers.dev/sportscape-editorial";
var SPORTSCAPE_EDITORIAL_FALLBACK_API_URL = "https://grarf-sportscape-editorial.grarf.workers.dev";
var SPORTSCAPE_EDITORIAL_FAILOVER_BASE_URLS = [
  SPORTSCAPE_EDITORIAL_PRIMARY_API_URL,
  SPORTSCAPE_EDITORIAL_FALLBACK_API_URL
];
var DEFAULT_SPORTSCAPE_EDITORIAL_API_URL = SPORTSCAPE_EDITORIAL_FALLBACK_API_URL;
var WEB_SPORTSCAPE_EDITORIAL_API_URL = SPORTSCAPE_EDITORIAL_PRIMARY_API_URL;
function resolveWebSportscapeEditorialApiUrl() {
  if (typeof window === "undefined") return null;
  return window.GRARF_WEB_CONFIG?.sportscapeEditorialApiUrl?.trim() || null;
}
function resolveSameOriginSportscapeEditorialApiUrl() {
  if (typeof window === "undefined") return null;
  const { hostname } = window.location;
  if (hostname !== "localhost" && hostname !== "127.0.0.1") return null;
  return `${window.location.origin}/api/sportscape-editorial`;
}
function getSportscapeEditorialApiBaseUrl() {
  return resolveSportscapeEditorialApiBaseUrls()[0] ?? DEFAULT_SPORTSCAPE_EDITORIAL_API_URL;
}
function resolveSportscapeEditorialApiBaseUrls() {
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  const push = (url) => {
    const normalized = url?.trim().replace(/\/+$/, "");
    if (!normalized || seen.has(normalized)) return;
    seen.add(normalized);
    out.push(normalized);
  };
  if (isGrarfWebRenderer() && typeof window !== "undefined") {
    push(resolveSameOriginSportscapeEditorialApiUrl());
    for (const base of SPORTSCAPE_EDITORIAL_FAILOVER_BASE_URLS) {
      push(base);
    }
    push(resolveWebSportscapeEditorialApiUrl());
    if (out.length === 0) {
      push(WEB_SPORTSCAPE_EDITORIAL_API_URL);
    }
    return out;
  }
  for (const base of SPORTSCAPE_EDITORIAL_FAILOVER_BASE_URLS) {
    push(base);
  }
  push(define_import_meta_env_default.VITE_SPORTSCAPE_EDITORIAL_API_URL?.trim());
  push(DEFAULT_SPORTSCAPE_EDITORIAL_API_URL);
  return out;
}
function sportscapeEditorialUrlForBase(base, path) {
  const normalized = base.replace(/\/+$/, "");
  if (path === "/" || path === "") return `${normalized}/`;
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${normalized}${suffix}`;
}
function sportscapeEditorialApiUrl(path) {
  return sportscapeEditorialUrlForBase(getSportscapeEditorialApiBaseUrl(), path);
}

// ../grarf/desktop/src/lib/sportscape/editorial/fetchSportscapeEditorialWithFailover.ts
var FETCH_TIMEOUT_MS = 15e3;
var LOG = "[Sportscape Editorial]";
function isTransportFailure(err) {
  if (!(err instanceof Error)) return true;
  const msg = err.message.toLowerCase();
  return msg === "failed to fetch" || msg.includes("network") || msg.includes("cors") || msg.includes("aborted") || err.name === "AbortError" || err.name === "TypeError";
}
function shouldFailoverOnStatus(status) {
  return status === 404 || status === 405 || status === 501 || status === 500 || status === 502 || status === 503 || status === 504;
}
async function fetchOne(baseUrl, path, init) {
  const url = sportscapeEditorialUrlForBase(baseUrl, path);
  return fetch(url, {
    ...init,
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS)
  });
}
async function fetchSportscapeEditorialWithFailover(path, init, options) {
  const shouldFailover = options?.failoverOnStatus ?? shouldFailoverOnStatus;
  const errors = [];
  const baseUrls = resolveSportscapeEditorialApiBaseUrls();
  for (let i = 0; i < baseUrls.length; i++) {
    const baseUrl = baseUrls[i];
    const isLast = i === baseUrls.length - 1;
    try {
      const response = await fetchOne(baseUrl, path, init);
      if (!response.ok && shouldFailover(response.status) && !isLast) {
        errors.push(`${baseUrl}: HTTP ${response.status}`);
        continue;
      }
      console.log(`${LOG} Connected via ${baseUrl}`);
      return { response, baseUrl };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      errors.push(`${baseUrl}: ${message}`);
      if (!isLast && isTransportFailure(err)) continue;
      if (isLast) break;
      if (!isTransportFailure(err)) throw err instanceof Error ? err : new Error(message);
    }
  }
  throw new Error(
    "Unable to reach Sportscape Editorial API"
  );
}

// ../grarf/desktop/src/lib/sportscape/editorial/sportscapeEditorialAdminAuth.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/admin/grarfAdminFlag.ts
init_define_import_meta_env();
var SPORTSCAPE_ADMIN_SESSION_KEY = "grarf-sportscape-admin-token";

// ../grarf/desktop/src/lib/sportscape/editorial/sportscapeEditorialAdminAuth.ts
function getSportscapeAdminToken() {
  try {
    const token = sessionStorage.getItem(SPORTSCAPE_ADMIN_SESSION_KEY)?.trim();
    return token || null;
  } catch {
    return null;
  }
}

// ../grarf/desktop/src/lib/featuredGames/featuredGamesAdminApi.ts
function workerWriteHeaders() {
  const headers = { "Content-Type": "application/json" };
  const token = getSportscapeAdminToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}
async function fetchPersistedFeaturedGames() {
  const { response: res } = await fetchSportscapeEditorialWithFailover("/", { method: "GET" });
  if (!res.ok) throw new Error(`featured_games_load_failed_${res.status}`);
  const body = await res.json();
  const fg = body.document?.featuredGames ?? {};
  const out = {};
  for (const [key, entry] of Object.entries(fg)) {
    if (!entry || typeof entry !== "object") continue;
    const priority = entry.briefingPriority ?? entry.featuredRank;
    if (priority == null || !Number.isFinite(priority)) continue;
    out[key] = Math.round(priority);
  }
  return out;
}
async function upsertFeaturedGamePriority(gameKey, briefingPriority) {
  const { response: res } = await fetchSportscapeEditorialWithFailover("/featured-games", {
    method: "POST",
    headers: workerWriteHeaders(),
    body: JSON.stringify({ gameKey, briefingPriority })
  });
  if (!res.ok) throw new Error(`featured_game_save_failed_${res.status}`);
}

// src/admin/components/OperationsConsole.tsx
init_define_import_meta_env();
var import_react = __toESM(require_react());

// src/admin/components/OperationsOverridesEditor.tsx
init_define_import_meta_env();
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function ConsoleOverrideTextInput({
  id,
  label,
  value,
  onChange,
  placeholder,
  monospace
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "grarf-admin__console-override-field", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { className: "grarf-admin__console-override-label", htmlFor: id, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        id,
        type: "text",
        className: monospace ? "grarf-admin__console-input grarf-admin__console-input--mono" : "grarf-admin__console-input",
        value,
        placeholder,
        onChange: (event) => onChange(event.target.value)
      }
    )
  ] });
}
function ConsoleOverrideTextarea({
  id,
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
  monospace
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "grarf-admin__console-override-field", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { className: "grarf-admin__console-override-label", htmlFor: id, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "textarea",
      {
        id,
        className: monospace ? "grarf-admin__console-textarea grarf-admin__console-textarea--mono" : "grarf-admin__console-textarea",
        value,
        rows,
        placeholder,
        onChange: (event) => onChange(event.target.value)
      }
    )
  ] });
}
function ConsoleOverrideSelect({
  id,
  label,
  value,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "grarf-admin__console-override-field", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { className: "grarf-admin__console-override-label", htmlFor: id, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "select",
      {
        id,
        className: "grarf-admin__console-select",
        value,
        onChange: (event) => onChange(event.target.value),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: "Not set" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "Y", children: "Yes" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "N", children: "No" })
        ]
      }
    )
  ] });
}
function OperationsOverridesEditor({
  game,
  draft,
  onFieldChange
}) {
  const fieldId = (suffix) => `ops-override-${game.gameKey}-${suffix}`;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "grarf-admin__console-override-grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ConsoleOverrideTextInput,
      {
        id: fieldId("primary-stream"),
        label: "Primary Stream",
        value: draft.primaryStream,
        placeholder: "Stream URL or channel URL",
        monospace: true,
        onChange: (value) => onFieldChange("primaryStream", value)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ConsoleOverrideTextarea,
      {
        id: fieldId("alternative-streams"),
        label: "Alternative Streams",
        value: draft.alternativeStreams,
        placeholder: "One stream per line (Display Name \u2014 URL)",
        rows: 4,
        monospace: true,
        onChange: (value) => onFieldChange("alternativeStreams", value)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ConsoleOverrideTextInput,
      {
        id: fieldId("broadcast-override"),
        label: "Broadcast Override",
        value: draft.broadcastOverride,
        placeholder: "Comma-separated broadcast labels",
        onChange: (value) => onFieldChange("broadcastOverride", value)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ConsoleOverrideTextInput,
      {
        id: fieldId("center-pane-url"),
        label: "Center Pane URL When Game Card Clicked",
        value: draft.centerPaneUrlWhenGameCardClicked,
        placeholder: "https://",
        monospace: true,
        onChange: (value) => onFieldChange("centerPaneUrlWhenGameCardClicked", value)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ConsoleOverrideSelect,
      {
        id: fieldId("center-pane"),
        label: "Center Pane",
        value: draft.centerPane,
        onChange: (value) => onFieldChange("centerPane", value)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ConsoleOverrideSelect,
      {
        id: fieldId("browser-tab"),
        label: "Browser Tab",
        value: draft.browserTab,
        onChange: (value) => onFieldChange("browserTab", value)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ConsoleOverrideTextarea,
      {
        id: fieldId("manual-highlights"),
        label: "Manual Highlights",
        value: draft.manualHighlights,
        placeholder: "Highlights configuration or notes",
        rows: 3,
        onChange: (value) => onFieldChange("manualHighlights", value)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ConsoleOverrideTextarea,
      {
        id: fieldId("manual-social-posts"),
        label: "Manual Social Posts",
        value: draft.manualSocialPosts,
        placeholder: "Social post references or copy",
        rows: 3,
        onChange: (value) => onFieldChange("manualSocialPosts", value)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ConsoleOverrideTextarea,
      {
        id: fieldId("operational-notes"),
        label: "Operational Notes",
        value: draft.operationalNotes,
        placeholder: "Internal operator notes",
        rows: 4,
        onChange: (value) => onFieldChange("operationalNotes", value)
      }
    )
  ] });
}

// src/admin/components/OperationsConsole.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function formatTimestamp(ms) {
  if (ms == null || !Number.isFinite(ms)) return null;
  return new Date(ms).toLocaleString(void 0, {
    dateStyle: "medium",
    timeStyle: "short"
  });
}
function formatParticipants(game) {
  const away = game.participants.away.trim();
  const home = game.participants.home.trim();
  if (away && home) return `${away} @ ${home}`;
  if (away) return away;
  if (home) return home;
  return "\u2014";
}
function formatBroadcasts(broadcasts) {
  const labels = broadcasts.map((label) => label.trim()).filter(Boolean);
  if (labels.length === 0) return null;
  return labels.join(", ");
}
function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function ConsoleField({
  label,
  value,
  monospace
}) {
  const populated = hasText(value);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grarf-admin__console-field", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grarf-admin__console-field-label", children: label }),
    populated ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        className: monospace ? "grarf-admin__console-field-value grarf-admin__console-field-value--mono" : "grarf-admin__console-field-value",
        children: value
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grarf-admin__console-field-empty", children: "No value set" })
  ] });
}
function ConsoleSection({
  title,
  description,
  children,
  prominent
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "section",
    {
      className: prominent ? "grarf-admin__console-section grarf-admin__console-section--prominent" : "grarf-admin__console-section",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: "grarf-admin__console-section-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "grarf-admin__console-section-title", children: title }),
          description ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "grarf-admin__console-section-description", children: description }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grarf-admin__console-section-body", children })
      ]
    }
  );
}
function OperationsConsole({
  game,
  operationalDateKey,
  assembledAt,
  draft,
  currentGameChangeCount,
  onFieldChange,
  onDiscardCurrent
}) {
  const [systemOpen, setSystemOpen] = (0, import_react.useState)(false);
  const hasChanges = currentGameChangeCount > 0;
  const featuredLabel = game.featuredRank != null && Number.isFinite(game.featuredRank) ? `Yes \u2014 Rank #${game.featuredRank}` : "No";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grarf-admin__console", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      ConsoleSection,
      {
        title: "Game Information",
        description: "What GRARF currently knows about this game from ingest and operational assembly.",
        prominent: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grarf-admin__console-game-summary", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grarf-admin__console-game-title", children: game.eventName }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grarf-admin__console-game-meta", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "grarf-admin__console-status-pill", children: game.status }),
              game.statusLine ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "grarf-admin__console-status-line", children: game.statusLine }) : null
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grarf-admin__console-field-grid", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "League", value: game.leagueLabel }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Game / Event", value: game.eventName }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Participants", value: formatParticipants(game) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Status", value: game.status }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Start Time", value: formatTimestamp(game.startTimeMs) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "End Time", value: formatTimestamp(game.endTimeMs) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Broadcast(s)", value: formatBroadcasts(game.broadcasts) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Operational Date", value: operationalDateKey }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Featured Game", value: featuredLabel })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      ConsoleSection,
      {
        title: "Operational Overrides",
        description: "Edit manual operational fields for this game. Changes stay in Pending Changes until Save All.",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(OperationsOverridesEditor, { game, draft, onFieldChange }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grarf-admin__console-save-bar", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grarf-admin__console-save-meta", children: hasChanges ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "grarf-admin__console-save-pending", children: [
              currentGameChangeCount,
              " unsaved change",
              currentGameChangeCount === 1 ? "" : "s",
              " for this game"
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "grarf-admin__console-save-pending grarf-admin__console-save-pending--idle", children: "No changes from snapshot" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "button",
              {
                type: "button",
                className: "grarf-admin__pending-discard-button",
                disabled: !hasChanges,
                onClick: onDiscardCurrent,
                children: "Discard"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "grarf-admin__console-section grarf-admin__console-section--system", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "button",
        {
          type: "button",
          className: "grarf-admin__console-system-toggle",
          "aria-expanded": systemOpen,
          onClick: () => setSystemOpen((open) => !open),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "grarf-admin__console-system-toggle-label", children: "System Information" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "grarf-admin__console-system-toggle-icon", "aria-hidden": true, children: systemOpen ? "\u2212" : "+" })
          ]
        }
      ),
      systemOpen ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grarf-admin__console-section-body grarf-admin__console-system-body", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grarf-admin__console-field-grid grarf-admin__console-field-grid--compact", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Game Key", value: game.gameKey, monospace: true }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "GRARF Game ID", value: game.grarfGameId ?? game.game.grarfGameId, monospace: true }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "League Key", value: String(game.league), monospace: true }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Source", value: game.source }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Section Kind", value: game.sectionKind }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Spine Section", value: game.spineSectionLabel }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Spine Section Key", value: game.spineSectionKey, monospace: true }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Ingest Game ID", value: game.game.id, monospace: true }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Scheduled Date Key", value: game.scheduledDateKey ?? null, monospace: true }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          ConsoleField,
          {
            label: "Stream Provider",
            value: game.streamProvider ?? game.game.streamProvider ?? null
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Snapshot Assembled", value: assembledAt ? new Date(assembledAt).toLocaleString() : null }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConsoleField, { label: "Operational Date Key", value: operationalDateKey, monospace: true })
      ] }) }) : null
    ] })
  ] });
}

// src/admin/components/OperationsGameIndicatorBadges.tsx
init_define_import_meta_env();

// src/admin/lib/resolveOperationsGameIndicators.ts
init_define_import_meta_env();
var UPCOMING_OR_LIVE_STATUSES = /* @__PURE__ */ new Set(["scheduled", "live"]);
function hasText2(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function readOverrideString(override, key) {
  if (!override || typeof override !== "object") return null;
  const value = override[key];
  if (typeof value === "string" && value.trim()) return value.trim();
  return null;
}
function hasPrimaryStream(game) {
  if (hasText2(game.streamUrl)) return true;
  const channelUrl = game.game.metadata?.manualGamesSpine?.channelUrl;
  return hasText2(channelUrl);
}
function isUpcomingOrLive(game) {
  return UPCOMING_OR_LIVE_STATUSES.has(game.status);
}
function evaluateFeaturedGame(game) {
  return game.featuredRank != null && Number.isFinite(game.featuredRank);
}
function evaluateMissingStream(game) {
  return isUpcomingOrLive(game) && !hasPrimaryStream(game);
}
function evaluateNavigationOverride(game) {
  if (game.navigationOverride) return true;
  const override = game.manualGameOverride;
  if (!override) return false;
  return hasText2(override.centerPaneUrlWhenGameCardClicked) || hasText2(override.centerPane) || hasText2(override.browserTab);
}
function evaluateManualOverride(game) {
  if (evaluateNavigationOverride(game)) return true;
  const override = game.manualGameOverride;
  if (!override) return false;
  if (hasText2(override.streamUrl) || hasText2(override.streamProvider) || hasText2(override.channel) || hasText2(override.channelUrl) || hasText2(override.launchMode)) {
    return true;
  }
  if (override.broadcasts && override.broadcasts.some((label) => hasText2(label))) return true;
  if (override.channels && override.channels.some((label) => hasText2(label))) return true;
  if (override.watchOptions && override.watchOptions.length > 0) return true;
  if (readOverrideString(override, "manualHighlights") || readOverrideString(override, "manualSocialPosts") || readOverrideString(override, "operationalNotes")) {
    return true;
  }
  return false;
}
var OPERATIONS_GAME_INDICATOR_DEFINITIONS = [
  { id: "featured", emoji: "\u2B50", label: "Featured Game" },
  { id: "missing-stream", emoji: "\u{1F534}", label: "Missing Stream" },
  { id: "manual-override", emoji: "\u{1F7E3}", label: "Manual Override" },
  { id: "navigation-override", emoji: "\u{1F7E2}", label: "Navigation Override" },
  { id: "needs-attention", emoji: "\u26A0", label: "Needs Attention" }
];
var OPERATIONS_GAME_INDICATOR_EVALUATORS = {
  featured: evaluateFeaturedGame,
  "missing-stream": evaluateMissingStream,
  "manual-override": evaluateManualOverride,
  "navigation-override": evaluateNavigationOverride
};
var NEEDS_ATTENTION_RULES = [(activeById) => activeById["missing-stream"]];
function evaluateNeedsAttention(activeById) {
  return NEEDS_ATTENTION_RULES.some((rule) => rule(activeById));
}
function resolveOperationsGameIndicators(game) {
  const activeById = {};
  for (const [id, evaluate] of Object.entries(OPERATIONS_GAME_INDICATOR_EVALUATORS)) {
    activeById[id] = evaluate(game);
  }
  activeById["needs-attention"] = evaluateNeedsAttention(activeById);
  return OPERATIONS_GAME_INDICATOR_DEFINITIONS.map((definition) => ({
    ...definition,
    active: activeById[definition.id]
  }));
}
function resolveActiveOperationsGameIndicators(game) {
  return resolveOperationsGameIndicators(game).filter((indicator) => indicator.active);
}

// src/admin/components/OperationsGameIndicatorBadges.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
function OperationsGameIndicatorBadges({ game }) {
  const indicators = resolveActiveOperationsGameIndicators(game);
  if (indicators.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "grarf-admin__game-indicators", "aria-label": "Operational status indicators", children: indicators.map((indicator) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "span",
    {
      className: `grarf-admin__game-indicator grarf-admin__game-indicator--${indicator.id}`,
      title: indicator.label,
      "aria-label": indicator.label,
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "grarf-admin__game-indicator-emoji", "aria-hidden": true, children: indicator.emoji })
    },
    indicator.id
  )) });
}

// src/admin/components/OperationsPendingChangesBar.tsx
init_define_import_meta_env();

// src/admin/lib/operationsChangeSet.ts
init_define_import_meta_env();
function normalizeDraftValue(value) {
  return value.trim();
}
function parseCommaSeparatedLabels(value) {
  return value.split(",").map((label) => label.trim()).filter(Boolean);
}
function parseAlternativeStreamsDraft(value) {
  return value.split("\n").map((line) => line.trim()).filter(Boolean).map((line, index) => {
    const separator = line.indexOf(" \u2014 ");
    if (separator >= 0) {
      return {
        id: `manual-alt-${index}`,
        displayName: line.slice(0, separator).trim(),
        deepLink: line.slice(separator + 3).trim()
      };
    }
    return {
      id: `manual-alt-${index}`,
      displayName: line
    };
  });
}
var DRAFT_FIELD_SPECS = [
  {
    draftKey: "primaryStream",
    canonicalKey: "streamUrl",
    label: "Primary Stream",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => editedValue.trim() ? { streamUrl: editedValue.trim() } : { streamUrl: "" }
  },
  {
    draftKey: "alternativeStreams",
    canonicalKey: "watchOptions",
    label: "Alternative Streams",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      watchOptions: parseAlternativeStreamsDraft(editedValue)
    })
  },
  {
    draftKey: "broadcastOverride",
    canonicalKey: "broadcasts",
    label: "Broadcast Override",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      broadcasts: parseCommaSeparatedLabels(editedValue)
    })
  },
  {
    draftKey: "centerPaneUrlWhenGameCardClicked",
    canonicalKey: "centerPaneUrlWhenGameCardClicked",
    label: "Center Pane URL When Game Card Clicked",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      centerPaneUrlWhenGameCardClicked: editedValue.trim()
    })
  },
  {
    draftKey: "centerPane",
    canonicalKey: "centerPane",
    label: "Center Pane",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      centerPane: editedValue.trim().toUpperCase()
    })
  },
  {
    draftKey: "browserTab",
    canonicalKey: "browserTab",
    label: "Browser Tab",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      browserTab: editedValue.trim().toUpperCase()
    })
  },
  {
    draftKey: "manualHighlights",
    canonicalKey: "manualHighlights",
    label: "Manual Highlights",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      manualHighlights: editedValue.trim()
    })
  },
  {
    draftKey: "manualSocialPosts",
    canonicalKey: "manualSocialPosts",
    label: "Manual Social Posts",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      manualSocialPosts: editedValue.trim()
    })
  },
  {
    draftKey: "operationalNotes",
    canonicalKey: "operationalNotes",
    label: "Operational Notes",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      operationalNotes: editedValue.trim()
    })
  }
];
function resolveOperationsChangeFields(originalDraft, editedDraft) {
  const changes = [];
  for (const spec of DRAFT_FIELD_SPECS) {
    const originalValue = normalizeDraftValue(originalDraft[spec.draftKey]);
    const editedValue = normalizeDraftValue(editedDraft[spec.draftKey]);
    if (originalValue === editedValue) continue;
    changes.push({
      fieldKey: spec.canonicalKey,
      label: spec.label,
      section: spec.section,
      originalValue,
      editedValue
    });
  }
  return changes;
}
function validateOperationalOverrideDraft(draft) {
  const errors = [];
  const navigationUrl = draft.centerPaneUrlWhenGameCardClicked.trim();
  const centerPane = draft.centerPane.trim().toUpperCase();
  const browserTab = draft.browserTab.trim().toUpperCase();
  if (navigationUrl) {
    if (centerPane !== "Y" && browserTab !== "Y") {
      errors.push(
        "Navigation override requires Center Pane or Browser Tab to be set to Yes when a URL is provided."
      );
    }
    if (centerPane === "Y" && browserTab === "Y") {
      errors.push("Center Pane and Browser Tab cannot both be Yes.");
    }
  }
  if ((centerPane === "Y" || browserTab === "Y") && !navigationUrl) {
    errors.push("Center Pane URL is required when Center Pane or Browser Tab is Yes.");
  }
  if (centerPane && centerPane !== "Y" && centerPane !== "N") {
    errors.push('Center Pane must be "Yes", "No", or not set.');
  }
  if (browserTab && browserTab !== "Y" && browserTab !== "N") {
    errors.push('Browser Tab must be "Yes", "No", or not set.');
  }
  return errors.length > 0 ? { ok: false, errors } : { ok: true };
}
function buildOperationsChangeSet(input) {
  const changes = resolveOperationsChangeFields(input.originalDraft, input.editedDraft);
  const patch = {};
  for (const change of changes) {
    const spec = DRAFT_FIELD_SPECS.find((row) => row.canonicalKey === change.fieldKey);
    if (!spec) continue;
    Object.assign(patch, spec.toPatchFragment(change.editedValue, input.editedDraft));
  }
  return {
    operationalDateKey: input.operationalDateKey,
    gameKey: input.game.gameKey,
    grarfGameId: input.game.grarfGameId ?? input.game.game.grarfGameId,
    leagueKey: String(input.game.league),
    section: "manualGameOverrides",
    assembledAt: (/* @__PURE__ */ new Date()).toISOString(),
    changes,
    patch
  };
}
function countOperationsPendingFieldChanges(pendingEdits) {
  return pendingEdits.reduce(
    (total, entry) => total + resolveOperationsChangeFields(entry.originalDraft, entry.editedDraft).length,
    0
  );
}
function validateAndBuildOperationsPendingChangesCollection(operationalDateKey, pendingEdits) {
  const issues = [];
  for (const entry of pendingEdits) {
    const validation = validateOperationalOverrideDraft(entry.editedDraft);
    if (!validation.ok) {
      issues.push({
        gameKey: entry.gameKey,
        eventName: entry.eventName,
        errors: validation.errors
      });
    }
  }
  if (issues.length > 0) {
    return { ok: false, issues };
  }
  const changeSets = pendingEdits.map(
    (entry) => buildOperationsChangeSet({
      game: entry.game,
      operationalDateKey: entry.operationalDateKey,
      originalDraft: entry.originalDraft,
      editedDraft: entry.editedDraft
    })
  );
  return {
    ok: true,
    collection: {
      operationalDateKey,
      assembledAt: (/* @__PURE__ */ new Date()).toISOString(),
      gameCount: changeSets.filter((changeSet) => changeSet.changes.length > 0).length,
      fieldChangeCount: countOperationsPendingFieldChanges(pendingEdits),
      changeSets
    }
  };
}

// src/admin/components/OperationsChangeSetSummary.tsx
init_define_import_meta_env();
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
function OperationsChangeSetSummary({ changeSet }) {
  if (changeSet.changes.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "grarf-admin__console-save-message", children: "Validation passed. No operational fields differ from the loaded snapshot." });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "grarf-admin__console-change-set", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "grarf-admin__console-save-message", children: [
      "Operations Change Set ready \u2014 ",
      changeSet.changes.length,
      " field",
      changeSet.changes.length === 1 ? "" : "s",
      " changed in",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "grarf-admin__mono", children: changeSet.section }),
      "."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { className: "grarf-admin__console-change-set-list", children: changeSet.changes.map((change) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("li", { className: "grarf-admin__console-change-set-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "grarf-admin__console-change-set-field", children: change.label }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "grarf-admin__console-change-set-values", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "grarf-admin__console-change-set-original", children: change.originalValue || "\u2014" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "grarf-admin__console-change-set-arrow", "aria-hidden": true, children: "\u2192" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "grarf-admin__console-change-set-edited", children: change.editedValue || "\u2014" })
      ] })
    ] }, change.fieldKey)) })
  ] });
}

// src/admin/components/OperationsPendingChangesBar.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
function OperationsPendingChangesBar({
  pendingEdits,
  pendingGameCount,
  totalPendingFieldChanges,
  featuredPriorityChangeCount = 0,
  featuredSaveError,
  saving = false,
  saveAllState,
  onSaveAll,
  onDiscardAll
}) {
  const hasPending = pendingGameCount > 0 || featuredPriorityChangeCount > 0;
  const totalCount = totalPendingFieldChanges + featuredPriorityChangeCount;
  const eventNameByGameKey = new Map(
    pendingEdits.map((entry) => [entry.gameKey, entry.eventName])
  );
  function buildSubtitle() {
    const parts = [];
    if (pendingGameCount > 0) {
      parts.push(`${pendingGameCount} game${pendingGameCount === 1 ? "" : "s"} with unsaved edits`);
    }
    if (featuredPriorityChangeCount > 0) {
      parts.push(`${featuredPriorityChangeCount} featured priority change${featuredPriorityChangeCount === 1 ? "" : "s"}`);
    }
    return parts.length > 0 ? parts.join(" \xB7 ") : "No unsaved operational edits";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "grarf-admin__pending-bar", "aria-label": "Pending operational changes", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grarf-admin__pending-bar-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grarf-admin__pending-bar-summary", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "grarf-admin__pending-bar-count", children: totalCount }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grarf-admin__pending-bar-copy", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "grarf-admin__pending-bar-title", children: "Pending Changes" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "grarf-admin__pending-bar-subtitle", children: buildSubtitle() })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grarf-admin__pending-bar-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "button",
          {
            type: "button",
            className: "grarf-admin__pending-discard-button",
            disabled: !hasPending || saving,
            onClick: onDiscardAll,
            children: "Discard All"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "button",
          {
            type: "button",
            className: "grarf-admin__console-save-button",
            disabled: !hasPending || saving,
            onClick: () => void onSaveAll(),
            children: saving ? "Saving\u2026" : "Save All"
          }
        )
      ] })
    ] }),
    hasPending ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "grarf-admin__pending-game-list", children: pendingEdits.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PendingGameListItem, { entry }, entry.gameKey)) }) : null,
    saveAllState.status === "validation_error" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grarf-admin__console-save-feedback grarf-admin__console-save-feedback--error", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "grarf-admin__console-save-feedback-title", children: "Save All validation failed" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "grarf-admin__console-save-error-list", children: saveAllState.issues.map((issue) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("strong", { children: issue.eventName }),
        ": ",
        issue.errors.join(" ")
      ] }, issue.gameKey)) })
    ] }) : null,
    saveAllState.status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grarf-admin__console-save-feedback grarf-admin__console-save-feedback--success", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "grarf-admin__console-save-feedback-title", children: "Pending changes collection ready" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "grarf-admin__console-save-message", children: [
        saveAllState.collection.gameCount,
        " game",
        saveAllState.collection.gameCount === 1 ? "" : "s",
        " \xB7",
        " ",
        saveAllState.collection.fieldChangeCount,
        " field change",
        saveAllState.collection.fieldChangeCount === 1 ? "" : "s",
        " ready for the future Operations API."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "grarf-admin__pending-collection", children: saveAllState.collection.changeSets.filter((changeSet) => changeSet.changes.length > 0).map((changeSet) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grarf-admin__pending-collection-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "grarf-admin__pending-collection-game", children: eventNameByGameKey.get(changeSet.gameKey) ?? changeSet.gameKey }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(OperationsChangeSetSummary, { changeSet })
      ] }, changeSet.gameKey)) })
    ] }) : null,
    featuredSaveError ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grarf-admin__console-save-feedback grarf-admin__console-save-feedback--error", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "grarf-admin__console-save-feedback-title", children: "Featured priority save failed" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "grarf-admin__console-save-message", children: featuredSaveError })
    ] }) : null
  ] });
}
function PendingGameListItem({ entry }) {
  const changeCount = resolveOperationsChangeFields(entry.originalDraft, entry.editedDraft).length;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { className: "grarf-admin__pending-game-item", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "grarf-admin__pending-game-marker", "aria-hidden": true }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grarf-admin__pending-game-copy", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "grarf-admin__pending-game-name", children: entry.eventName }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grarf-admin__pending-game-meta", children: [
        entry.leagueLabel,
        " \xB7 ",
        changeCount,
        " field change",
        changeCount === 1 ? "" : "s"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "grarf-admin__pending-game-ready", children: "Ready" })
  ] });
}

// src/admin/components/OperationsSnapshotSearchBar.tsx
init_define_import_meta_env();
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
function OperationsSnapshotSearchBar({
  value,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grarf-admin__operations-search", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "grarf-admin__operations-search-label", htmlFor: "operations-snapshot-search", children: "Search snapshot" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "input",
      {
        id: "operations-snapshot-search",
        type: "search",
        className: "grarf-admin__operations-search-input",
        value,
        placeholder: "Search games, teams, players, leagues...",
        onChange: (event) => onChange(event.target.value),
        autoComplete: "off",
        spellCheck: false
      }
    )
  ] });
}

// src/admin/hooks/useAdminOperationsDateSnapshot.ts
init_define_import_meta_env();
var import_react5 = __toESM(require_react());

// ../grarf/desktop/src/lib/operations/buildOperationsDateSnapshot.ts
init_define_import_meta_env();

// ../grarf/desktop/src/data/gamesColumnLeagues.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/leaguePriority/index.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/leaguePriority/leaguePriorityService.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/leaguePriority/leaguePriorityAliases.ts
init_define_import_meta_env();
var LEAGUE_PRIORITY_ALIASES = {
  MCWS: "NCAABB",
  "NCAA BASEBALL": "NCAABB",
  "WORLD CUP": "WORLDCUP",
  "FIFA WORLD CUP": "WORLDCUP",
  "TOUR DE FRANCE": "TDF",
  "TOUR-DE-FRANCE": "TDF",
  GTWORLD: "GT_WORLD_CHALLENGE",
  "FORMULA 1": "F1",
  "FORMULA ONE": "F1",
  "NASCAR CUP SERIES": "NASCAR",
  "NASCAR OREILLY AUTO PARTS SERIES": "NASCAR",
  "NBA SUMMER LEAGUE": "NBASUMMER"
};
var LEAGUE_PRIORITY_MANUAL_AFTER = {
  "GT WORLD": "WEC",
  "GT-WORLD-CHALLENGE": "WEC"
};

// ../grarf/desktop/src/lib/leaguePriority/leaguePrioritySeed.ts
init_define_import_meta_env();
var LEAGUE_PRIORITY_SEED_ORDER = [
  "WORLDCUP",
  "PGA",
  "WIMBLEDON_MEN",
  "WIMBLEDON_WOMEN",
  "MLB",
  "F1",
  "TDF",
  "NBASUMMER",
  "WNBA",
  "ATP",
  "WTA",
  "WWC",
  "EURO",
  "EPL",
  "NBA",
  "NHL",
  "COPA",
  "UFC",
  "UCL",
  "MLS",
  "LALIGA",
  "BUNDESLIGA",
  "SERIEA",
  "LIGUE1",
  "UEL",
  "LPGA",
  "INDYCAR",
  "NASCAR",
  "NATIONS",
  "GOLDCUP",
  "NWSL",
  "NCAABB",
  "CLUBWC",
  "LIGAMX",
  "SUPERLIG",
  "EREDIVISIE",
  "SAUDI",
  "SPFL",
  "USLCUP",
  "LIV",
  "WEC",
  "GT_WORLD_CHALLENGE",
  "AFL",
  "CHAMPIONS"
];
function getLeaguePrioritySeedOrder() {
  return LEAGUE_PRIORITY_SEED_ORDER;
}

// ../grarf/desktop/src/lib/leaguePriority/leaguePriorityService.ts
function normalizeLeagueLabel(value) {
  return value.trim().toUpperCase().replace(/['']/g, "'");
}
function buildScoreByLeagueKey(order) {
  return new Map(order.map((key, index) => [key, order.length - index]));
}
var scoreByLeagueKey = buildScoreByLeagueKey(getLeaguePrioritySeedOrder());
function resolveManualEditorialLeagueImportanceScore(raw) {
  const anchor = LEAGUE_PRIORITY_MANUAL_AFTER[normalizeLeagueLabel(raw)];
  if (!anchor) return null;
  const anchorScore = scoreByLeagueKey.get(anchor) ?? 0;
  return anchorScore > 0 ? anchorScore - 0.5 : null;
}
function getLeaguePriorityOrder() {
  return getLeaguePrioritySeedOrder();
}
function resolveCanonicalLeagueImportanceKey(raw) {
  if (!raw) return null;
  const normalized = normalizeLeagueLabel(raw);
  if (scoreByLeagueKey.has(normalized)) {
    return normalized;
  }
  const alias = LEAGUE_PRIORITY_ALIASES[normalized];
  return alias ?? null;
}
function resolveLeagueImportanceScore(raw) {
  if (!raw) return 0;
  const manualScore = resolveManualEditorialLeagueImportanceScore(raw);
  if (manualScore != null) return manualScore;
  const key = resolveCanonicalLeagueImportanceKey(raw);
  if (!key) return 0;
  return scoreByLeagueKey.get(key) ?? 0;
}
function sortGrarfLeagueKeysByImportance(keys) {
  return [...keys].sort((a, b) => {
    const importanceDelta = resolveLeagueImportanceScore(b) - resolveLeagueImportanceScore(a);
    if (importanceDelta !== 0) return importanceDelta;
    return a.localeCompare(b);
  });
}

// ../grarf/desktop/src/lib/leaguePriority/leaguePriorityConsumers.ts
init_define_import_meta_env();
var GAMES_COLUMN_PRESENTATION_ONLY_LEAGUE_KEYS = /* @__PURE__ */ new Set([
  "WIMBLEDON_MEN",
  "WIMBLEDON_WOMEN"
]);
function getGamesColumnLeagueOrder() {
  return getLeaguePriorityOrder().filter(
    (key) => !GAMES_COLUMN_PRESENTATION_ONLY_LEAGUE_KEYS.has(key)
  );
}

// ../grarf/desktop/src/data/gamesColumnLeagues.ts
var GAMES_COLUMN_LEAGUE_LABEL = {
  MLB: "MLB",
  NCAABB: "NCAA Baseball",
  NBA: "NBA",
  NBASUMMER: "NBA Summer League",
  WNBA: "WNBA",
  NHL: "NHL",
  AFL: "AFL",
  MLS: "MLS",
  EPL: "EPL",
  LALIGA: "LaLiga",
  NWSL: "NWSL",
  LIGAMX: "Liga MX",
  SERIEA: "Serie A",
  LIGUE1: "Ligue 1",
  EREDIVISIE: "Eredivisie",
  BUNDESLIGA: "Bundesliga",
  UCL: "Champions League",
  UEL: "Europa League",
  WWC: "Women's World Cup",
  EURO: "UEFA Euro",
  COPA: "Copa America",
  GOLDCUP: "Gold Cup",
  NATIONS: "Nations League",
  CLUBWC: "Club World Cup",
  SPFL: "SPFL",
  SAUDI: "RSL",
  SUPERLIG: "Super Lig",
  USLCUP: "USL Cup",
  WORLDCUP: "FIFA World Cup",
  ATP: "ATP",
  WTA: "WTA",
  TDF: "Tour de France",
  UFC: "UFC",
  F1: "Formula 1",
  NASCAR: "NASCAR",
  INDYCAR: "IndyCar",
  WEC: "WEC",
  PGA: "PGA Tour",
  LPGA: "LPGA Tour",
  LIV: "LIV Golf",
  CHAMPIONS: "PGA Champions"
};

// ../grarf/desktop/src/lib/gamesSpine/gamesSpineLeagueDisplayLabel.ts
init_define_import_meta_env();

// ../grarf/desktop/src/data/espnOperationalLeagueEndpoints.ts
init_define_import_meta_env();

// ../grarf/desktop/src/data/espnOperationalLeagueRegistry.generated.ts
init_define_import_meta_env();
var ESPN_OPERATIONAL_INGEST_LEAGUES = [
  {
    "key": "AFL",
    "sport": "australian-football",
    "label": "AFL",
    "slug": "afl",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/australian-football/afl/scoreboard"
  },
  {
    "key": "ARG1",
    "sport": "soccer",
    "label": "Argentine Primera",
    "slug": "arg.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/arg.1/scoreboard"
  },
  {
    "key": "ATP",
    "sport": "tennis",
    "label": "ATP Tour",
    "slug": "atp",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/tennis/atp/scoreboard"
  },
  {
    "key": "BEL1",
    "sport": "soccer",
    "label": "Belgian Pro League",
    "slug": "bel.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/bel.1/scoreboard"
  },
  {
    "key": "BRA1",
    "sport": "soccer",
    "label": "Brasileir\xE3o",
    "slug": "bra.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/bra.1/scoreboard"
  },
  {
    "key": "BUNDESLIGA",
    "sport": "soccer",
    "label": "Bundesliga",
    "slug": "ger.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard"
  },
  {
    "key": "CFL",
    "sport": "football",
    "label": "CFL",
    "slug": "cfl",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/football/cfl/scoreboard"
  },
  {
    "key": "CHAMPIONS",
    "sport": "golf",
    "label": "PGA Tour Champions",
    "slug": "champions-tour",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/golf/champions-tour/scoreboard"
  },
  {
    "key": "CLUBWC",
    "sport": "soccer",
    "label": "Club World Cup",
    "slug": "fifa.cwc",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.cwc/scoreboard"
  },
  {
    "key": "CONCACAF_CL",
    "sport": "soccer",
    "label": "CONCACAF Champions Cup",
    "slug": "concacaf.champions",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.champions/scoreboard"
  },
  {
    "key": "CONCACAF_NG",
    "sport": "soccer",
    "label": "CONCACAF Nations League",
    "slug": "concacaf.nations.league",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.nations.league/scoreboard"
  },
  {
    "key": "CONCACAF_WC",
    "sport": "soccer",
    "label": "CONCACAF World Cup Qual",
    "slug": "fifa.worldq.concacaf",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.worldq.concacaf/scoreboard"
  },
  {
    "key": "COPA",
    "sport": "soccer",
    "label": "Copa America",
    "slug": "conmebol.america",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/conmebol.america/scoreboard"
  },
  {
    "key": "CRICKET_BBL",
    "sport": "cricket",
    "label": "Big Bash League",
    "slug": "24136",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/cricket/24136/scoreboard"
  },
  {
    "key": "CRICKET_ICC",
    "sport": "cricket",
    "label": "ICC Cricket",
    "slug": "24527",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/cricket/24527/scoreboard"
  },
  {
    "key": "DP_WORLD",
    "sport": "golf",
    "label": "DP World Tour",
    "slug": "eur",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/golf/eur/scoreboard"
  },
  {
    "key": "EPL",
    "sport": "soccer",
    "label": "Premier League",
    "slug": "eng.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard"
  },
  {
    "key": "EREDIVISIE",
    "sport": "soccer",
    "label": "Eredivisie",
    "slug": "ned.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/scoreboard"
  },
  {
    "key": "EURO",
    "sport": "soccer",
    "label": "UEFA Euro",
    "slug": "uefa.euro",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.euro/scoreboard"
  },
  {
    "key": "F1",
    "sport": "racing",
    "label": "Formula 1",
    "slug": "f1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/racing/f1/scoreboard"
  },
  {
    "key": "GOLDCUP",
    "sport": "soccer",
    "label": "Gold Cup",
    "slug": "concacaf.gold",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.gold/scoreboard"
  },
  {
    "key": "INDYCAR",
    "sport": "racing",
    "label": "IndyCar Series",
    "slug": "irl",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/racing/irl/scoreboard"
  },
  {
    "key": "INTFRIENDLY",
    "sport": "soccer",
    "label": "International Friendlies",
    "slug": "fifa.friendly",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.friendly/scoreboard"
  },
  {
    "key": "LALIGA",
    "sport": "soccer",
    "label": "La Liga",
    "slug": "esp.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard"
  },
  {
    "key": "LIBERTADORES",
    "sport": "soccer",
    "label": "Copa Libertadores",
    "slug": "conmebol.libertadores",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/conmebol.libertadores/scoreboard"
  },
  {
    "key": "LIGAMX",
    "sport": "soccer",
    "label": "Liga MX",
    "slug": "mex.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/mex.1/scoreboard"
  },
  {
    "key": "LIGUE1",
    "sport": "soccer",
    "label": "Ligue 1",
    "slug": "fra.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/scoreboard"
  },
  {
    "key": "LIV",
    "sport": "golf",
    "label": "LIV Golf",
    "slug": "liv",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/golf/liv/scoreboard"
  },
  {
    "key": "LPGA",
    "sport": "golf",
    "label": "LPGA Tour",
    "slug": "lpga",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/golf/lpga/scoreboard"
  },
  {
    "key": "MLB",
    "sport": "baseball",
    "label": "MLB",
    "slug": "mlb",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard"
  },
  {
    "key": "MLS",
    "sport": "soccer",
    "label": "MLS",
    "slug": "usa.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard"
  },
  {
    "key": "MNCAAB",
    "sport": "basketball",
    "label": "NCAA Men's Basketball",
    "slug": "mens-college-basketball",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard"
  },
  {
    "key": "NASCAR",
    "sport": "racing",
    "label": "NASCAR Cup Series",
    "slug": "nascar-premier",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/racing/nascar-premier/scoreboard"
  },
  {
    "key": "NASCAR_TRUCK",
    "sport": "racing",
    "label": "NASCAR Truck Series",
    "slug": "nascar-truck",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/racing/nascar-truck/scoreboard"
  },
  {
    "key": "NASCAR_XFINITY",
    "sport": "racing",
    "label": "NASCAR O'Reilly Auto Parts",
    "slug": "nascar-secondary",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/racing/nascar-secondary/scoreboard"
  },
  {
    "key": "NATIONS",
    "sport": "soccer",
    "label": "UEFA Nations League",
    "slug": "uefa.nations",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.nations/scoreboard"
  },
  {
    "key": "NBA",
    "sport": "basketball",
    "label": "NBA",
    "slug": "nba",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard"
  },
  {
    "key": "NBA2K",
    "sport": "basketball",
    "label": "NBA G League",
    "slug": "nba-development",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba-development/scoreboard"
  },
  {
    "key": "NBASUMMER",
    "sport": "basketball",
    "label": "NBA Summer League",
    "slug": "nba-summer",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba-summer/scoreboard"
  },
  {
    "key": "NCAABB",
    "sport": "baseball",
    "label": "NCAA Baseball",
    "slug": "college-baseball",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/baseball/college-baseball/scoreboard"
  },
  {
    "key": "NCAAF",
    "sport": "football",
    "label": "College Football",
    "slug": "college-football",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard"
  },
  {
    "key": "NCAAFH",
    "sport": "field-hockey",
    "label": "NCAA Field Hockey",
    "slug": "womens-college-field-hockey",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/field-hockey/womens-college-field-hockey/scoreboard"
  },
  {
    "key": "NCAALAX",
    "sport": "lacrosse",
    "label": "NCAA Lacrosse",
    "slug": "mens-college-lacrosse",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/lacrosse/mens-college-lacrosse/scoreboard"
  },
  {
    "key": "NCAAVB",
    "sport": "volleyball",
    "label": "NCAA Women's Volleyball",
    "slug": "womens-college-volleyball",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/volleyball/womens-college-volleyball/scoreboard"
  },
  {
    "key": "NCAAVB_M",
    "sport": "volleyball",
    "label": "NCAA Men's Volleyball",
    "slug": "mens-college-volleyball",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/volleyball/mens-college-volleyball/scoreboard"
  },
  {
    "key": "NCAAWP",
    "sport": "water-polo",
    "label": "NCAA Water Polo",
    "slug": "mens-college-water-polo",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/water-polo/mens-college-water-polo/scoreboard"
  },
  {
    "key": "NFL",
    "sport": "football",
    "label": "NFL",
    "slug": "nfl",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
  },
  {
    "key": "NHL",
    "sport": "hockey",
    "label": "NHL",
    "slug": "nhl",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard"
  },
  {
    "key": "NWSL",
    "sport": "soccer",
    "label": "NWSL",
    "slug": "usa.nwsl",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/scoreboard"
  },
  {
    "key": "PGA",
    "sport": "golf",
    "label": "PGA Tour",
    "slug": "pga",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/golf/pga/scoreboard"
  },
  {
    "key": "PLL",
    "sport": "lacrosse",
    "label": "Premier Lacrosse League",
    "slug": "pll",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/lacrosse/pll/scoreboard"
  },
  {
    "key": "POR1",
    "sport": "soccer",
    "label": "Primeira Liga",
    "slug": "por.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/scoreboard"
  },
  {
    "key": "RUGBYPREM",
    "sport": "rugby",
    "label": "Gallagher Premiership",
    "slug": "267979",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/rugby/267979/scoreboard"
  },
  {
    "key": "RUGBYTOP14",
    "sport": "rugby",
    "label": "French Top 14",
    "slug": "270559",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/rugby/270559/scoreboard"
  },
  {
    "key": "RUGBYULSTER",
    "sport": "rugby",
    "label": "United Rugby Championship",
    "slug": "270557",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/rugby/270557/scoreboard"
  },
  {
    "key": "RUGBYWC",
    "sport": "rugby",
    "label": "Rugby World Cup",
    "slug": "164205",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/rugby/164205/scoreboard"
  },
  {
    "key": "SAUDI",
    "sport": "soccer",
    "label": "Saudi Pro League",
    "slug": "ksa.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/ksa.1/scoreboard"
  },
  {
    "key": "SERIEA",
    "sport": "soccer",
    "label": "Serie A",
    "slug": "ita.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/scoreboard"
  },
  {
    "key": "SPFL",
    "sport": "soccer",
    "label": "Scottish Premiership",
    "slug": "sco.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/sco.1/scoreboard"
  },
  {
    "key": "SUDAMERICANA",
    "sport": "soccer",
    "label": "Copa Sudamericana",
    "slug": "conmebol.sudamericana",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/conmebol.sudamericana/scoreboard"
  },
  {
    "key": "SUPERLIG",
    "sport": "soccer",
    "label": "Turkish Super Lig",
    "slug": "tur.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard"
  },
  {
    "key": "UCL",
    "sport": "soccer",
    "label": "Champions League",
    "slug": "uefa.champions",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/scoreboard"
  },
  {
    "key": "UECL",
    "sport": "soccer",
    "label": "UEFA Conference League",
    "slug": "uefa.europa.conf",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.europa.conf/scoreboard"
  },
  {
    "key": "UEL",
    "sport": "soccer",
    "label": "Europa League",
    "slug": "uefa.europa",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.europa/scoreboard"
  },
  {
    "key": "UFC",
    "sport": "mma",
    "label": "UFC",
    "slug": "ufc",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/mma/ufc/scoreboard"
  },
  {
    "key": "USL1",
    "sport": "soccer",
    "label": "USL League One",
    "slug": "usa.usl.l1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.l1/scoreboard"
  },
  {
    "key": "USLC",
    "sport": "soccer",
    "label": "USL Championship",
    "slug": "usa.usl.1",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.1/scoreboard"
  },
  {
    "key": "USLCUP",
    "sport": "soccer",
    "label": "USL Championship Cup",
    "slug": "usa.usl.l1.cup",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.usl.l1.cup/scoreboard"
  },
  {
    "key": "UWCQ",
    "sport": "soccer",
    "label": "UEFA Euro Qualifying",
    "slug": "uefa.euroq",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.euroq/scoreboard"
  },
  {
    "key": "WNBA",
    "sport": "basketball",
    "label": "WNBA",
    "slug": "wnba",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard"
  },
  {
    "key": "WNCAAB",
    "sport": "basketball",
    "label": "NCAA Women's Basketball",
    "slug": "womens-college-basketball",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/scoreboard"
  },
  {
    "key": "WORLDCUP",
    "sport": "soccer",
    "label": "FIFA World Cup",
    "slug": "fifa.world",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard"
  },
  {
    "key": "WTA",
    "sport": "tennis",
    "label": "WTA Tour",
    "slug": "wta",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/tennis/wta/scoreboard"
  },
  {
    "key": "WWC",
    "sport": "soccer",
    "label": "Women's World Cup",
    "slug": "fifa.wwc",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.wwc/scoreboard"
  },
  {
    "key": "XFL",
    "sport": "football",
    "label": "United Football League",
    "slug": "ufl",
    "endpoint": "https://site.api.espn.com/apis/site/v2/sports/football/ufl/scoreboard"
  }
];
var ESPN_OPERATIONAL_INGEST_LEAGUE_KEYS = ESPN_OPERATIONAL_INGEST_LEAGUES.map((l) => l.key);
var ESPN_OPERATIONAL_LEAGUE_ENDPOINTS = Object.fromEntries(ESPN_OPERATIONAL_INGEST_LEAGUES.map((l) => [l.key, l.endpoint]));
var ESPN_OPERATIONAL_LEAGUE_LABELS = Object.fromEntries(ESPN_OPERATIONAL_INGEST_LEAGUES.map((l) => [l.key, l.label]));
function resolveEspnOperationalLeagueLabel(leagueKey) {
  return ESPN_OPERATIONAL_LEAGUE_LABELS[leagueKey] ?? leagueKey;
}
var ESPN_SOCCER_OPERATIONAL_LEAGUE_KEYS = new Set(
  ESPN_OPERATIONAL_INGEST_LEAGUES.filter((l) => l.sport === "soccer").map((l) => l.key)
);

// ../grarf/desktop/src/lib/gamesSpine/gamesSpineLeagueDisplayLabel.ts
var GAMES_SPINE_LEAGUE_DISPLAY_LABEL = {
  EPL: "EPL",
  NCAABB: "MCWS",
  WORLDCUP: "World Cup",
  PLL: "PLL",
  WIMBLEDON_MEN: "Wimbledon (Men's)",
  WIMBLEDON_WOMEN: "Wimbledon (Women's)"
};
function resolveGamesSpineLeagueDisplayLabel(league) {
  return GAMES_SPINE_LEAGUE_DISPLAY_LABEL[league] ?? GAMES_COLUMN_LEAGUE_LABEL[league] ?? resolveEspnOperationalLeagueLabel(league) ?? league;
}

// ../grarf/desktop/src/lib/gamesSpine/manual/convertManualGamesSpineDocument.ts
init_define_import_meta_env();

// ../grarf/desktop/shared/operationalSlateDate.js
init_define_import_meta_env();

// ../grarf/desktop/shared/golfTournamentDate.js
init_define_import_meta_env();

// ../grarf/desktop/shared/operationalSlateDate.js
var GRARF_OPERATIONAL_SLATE_TIMEZONE = "America/Chicago";
var OPERATIONAL_SLATE_NEXT_DAY_CUTOFF_HOUR = 6;
var OPERATIONAL_SPORTS_DAY_ROLLOVER_HOUR = 4;
var calendarFormatterCache = /* @__PURE__ */ new Map();
function getCalendarFormatter(timeZone) {
  let formatter = calendarFormatterCache.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      hourCycle: "h23"
    });
    calendarFormatterCache.set(timeZone, formatter);
  }
  return formatter;
}
function calendarPartsInTimeZone(ms, timeZone) {
  const parts = getCalendarFormatter(timeZone).formatToParts(new Date(ms));
  return {
    year: Number(parts.find((p) => p.type === "year")?.value),
    month: Number(parts.find((p) => p.type === "month")?.value),
    day: Number(parts.find((p) => p.type === "day")?.value),
    hour: Number(parts.find((p) => p.type === "hour")?.value)
  };
}
var operationalCalendarDateKeyCache = {
  timeZone: "",
  bucketMs: 0,
  key: "1970-01-01"
};
var operationalSportsDayKeyCache = {
  timeZone: "",
  bucketMs: 0,
  key: "1970-01-01"
};
function resolveOperationalSlateTimeZone() {
  return GRARF_OPERATIONAL_SLATE_TIMEZONE;
}
function readOperationalCalendarDateKeyCache(now, timeZone) {
  const bucketMs = Math.floor(now.getTime() / 6e4);
  if (operationalCalendarDateKeyCache.timeZone === timeZone && operationalCalendarDateKeyCache.bucketMs === bucketMs) {
    return operationalCalendarDateKeyCache.key;
  }
  return null;
}
function writeOperationalCalendarDateKeyCache(now, timeZone, key) {
  operationalCalendarDateKeyCache.timeZone = timeZone;
  operationalCalendarDateKeyCache.bucketMs = Math.floor(now.getTime() / 6e4);
  operationalCalendarDateKeyCache.key = key;
}
function formatOperationalDateKeyFromMs(ms, timeZone = GRARF_OPERATIONAL_SLATE_TIMEZONE) {
  if (ms == null || !Number.isFinite(ms) || ms <= 0) return void 0;
  const { year, month, day } = calendarPartsInTimeZone(ms, timeZone);
  if (!year || !month || !day) return void 0;
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}
function writeOperationalSportsDayKeyCache(now, timeZone, key) {
  operationalSportsDayKeyCache.timeZone = timeZone;
  operationalSportsDayKeyCache.bucketMs = Math.floor(now.getTime() / 6e4);
  operationalSportsDayKeyCache.key = key;
}
function readOperationalSportsDayKeyCache(now, timeZone) {
  const bucketMs = Math.floor(now.getTime() / 6e4);
  if (operationalSportsDayKeyCache.timeZone === timeZone && operationalSportsDayKeyCache.bucketMs === bucketMs) {
    return operationalSportsDayKeyCache.key;
  }
  return null;
}
function getOperationalCalendarDateKey(now = /* @__PURE__ */ new Date(), timeZone = resolveOperationalSlateTimeZone()) {
  const cached = readOperationalCalendarDateKeyCache(now, timeZone);
  if (cached) return cached;
  const key = formatOperationalDateKeyFromMs(now.getTime(), timeZone) ?? "1970-01-01";
  writeOperationalCalendarDateKeyCache(now, timeZone, key);
  return key;
}
function getOperationalSportsDayDateKey(now = /* @__PURE__ */ new Date(), timeZone = resolveOperationalSlateTimeZone()) {
  const cached = readOperationalSportsDayKeyCache(now, timeZone);
  if (cached) return cached;
  let key = getOperationalCalendarDateKey(now, timeZone);
  const { hour } = calendarPartsInTimeZone(now.getTime(), timeZone);
  if (hour < OPERATIONAL_SPORTS_DAY_ROLLOVER_HOUR) {
    key = offsetOperationalDateKey(key, -1, timeZone);
  }
  writeOperationalSportsDayKeyCache(now, timeZone, key);
  return key;
}
function getOperationalSportsDayYesterdayDateKey(now = /* @__PURE__ */ new Date(), timeZone = resolveOperationalSlateTimeZone()) {
  return offsetOperationalDateKey(getOperationalSportsDayDateKey(now, timeZone), -1, timeZone);
}
function getOperationalSportsDayTomorrowDateKey(now = /* @__PURE__ */ new Date(), timeZone = resolveOperationalSlateTimeZone()) {
  return offsetOperationalDateKey(getOperationalSportsDayDateKey(now, timeZone), 1, timeZone);
}
function offsetOperationalDateKey(dateKey, dayOffset, timeZone = GRARF_OPERATIONAL_SLATE_TIMEZONE) {
  const [y, m, d] = dateKey.split("-").map(Number);
  const anchor = Date.UTC(y, (m ?? 1) - 1, (d ?? 1) + dayOffset, 12, 0, 0);
  return formatOperationalDateKeyFromMs(anchor, timeZone) ?? dateKey;
}
var nextDayCutoffMsCache = /* @__PURE__ */ new Map();
function getNextDayCutoffMs(operationalDateKey, cutoffHour, timeZone) {
  const cacheKey2 = `${operationalDateKey}|${cutoffHour}|${timeZone}`;
  const cached = nextDayCutoffMsCache.get(cacheKey2);
  if (cached != null) return cached;
  const tomorrowKey = offsetOperationalDateKey(operationalDateKey, 1, timeZone);
  const [y, m, d] = tomorrowKey.split("-").map(Number);
  let probe = Date.UTC(y, (m ?? 1) - 1, d ?? 1, 12, 0, 0);
  for (let i = -30; i < 30; i++) {
    const candidate = probe + i * 36e5;
    const key = formatOperationalDateKeyFromMs(candidate, timeZone);
    const hour = calendarPartsInTimeZone(candidate, timeZone).hour;
    if (key === tomorrowKey && hour === cutoffHour) {
      nextDayCutoffMsCache.set(cacheKey2, candidate);
      return candidate;
    }
  }
  const fallback = probe + 24 * 36e5;
  nextDayCutoffMsCache.set(cacheKey2, fallback);
  return fallback;
}
function isScheduledOnOperationalEveningSlate(game, operationalDateKey, now = /* @__PURE__ */ new Date(), timeZone = GRARF_OPERATIONAL_SLATE_TIMEZONE) {
  const startKey = formatOperationalDateKeyFromMs(game.startTimeMs, timeZone);
  if (startKey === operationalDateKey) return true;
  const tomorrowKey = offsetOperationalDateKey(operationalDateKey, 1, timeZone);
  const payloadKey = typeof game.scheduledDateKey === "string" ? game.scheduledDateKey.trim() : null;
  if (startKey === tomorrowKey) {
    const ms = game.startTimeMs;
    if (ms != null && Number.isFinite(ms) && ms > 0) {
      const cutoff = getNextDayCutoffMs(operationalDateKey, OPERATIONAL_SLATE_NEXT_DAY_CUTOFF_HOUR, timeZone);
      if (ms < cutoff) return true;
    }
  }
  if (!startKey && payloadKey === operationalDateKey) return true;
  return false;
}

// ../grarf/desktop/src/lib/gamesSpine/manualGamesSpineLeagueLogoUrls.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/gamesSpine/royalAscotLeagueLogoUrl.ts
init_define_import_meta_env();
var ROYAL_ASCOT_LEAGUE_LOGO_URL = "/league-logos/royal-ascot.png";

// ../grarf/desktop/src/lib/gamesSpine/manualGamesSpineLeagueLogoUrls.ts
var MANUAL_GAMES_SPINE_LEAGUE_LOGO_BY_KEY = {
  "royal ascot": ROYAL_ASCOT_LEAGUE_LOGO_URL,
  "royal-ascot": ROYAL_ASCOT_LEAGUE_LOGO_URL
};
function resolveManualGamesSpineLeagueLogoUrl(league) {
  const candidates = typeof league === "string" || league == null ? [league] : [league.displayName, league.league];
  for (const candidate of candidates) {
    const key = candidate?.trim().toLowerCase();
    if (!key) continue;
    const logo = MANUAL_GAMES_SPINE_LEAGUE_LOGO_BY_KEY[key];
    if (logo) return logo;
  }
  return void 0;
}

// ../grarf/desktop/src/lib/gamesSpine/sortGamesSpineChronologically.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/bestGameRightNow/competitorRankingMatchImportance.ts
init_define_import_meta_env();
var UNSEEDED_COMPETITOR_RANKING_IMPORTANCE_VALUE = 100;
function readSideCompetitorRankingValue(game, side) {
  const canonical = side === "away" ? game.awayPlayerRank : game.homePlayerRank;
  if (canonical?.rank != null && Number.isFinite(canonical.rank) && canonical.rank > 0) {
    return canonical.rank;
  }
  const tennis = game.metadata?.tennis;
  if (tennis) {
    const seed = side === "away" ? tennis.awaySeed : tennis.homeSeed;
    if (seed != null && seed > 0) return seed;
    const worldRank = side === "away" ? tennis.awayWorldRank : tennis.homeWorldRank;
    if (worldRank != null && worldRank > 0) return worldRank;
  }
  return UNSEEDED_COMPETITOR_RANKING_IMPORTANCE_VALUE;
}
function gameUsesCompetitorRankingImportance(game) {
  if (game.awayPlayerRank || game.homePlayerRank) return true;
  return game.metadata?.tennis != null;
}
function resolveCompetitorRankingImportanceScore(game) {
  if (!gameUsesCompetitorRankingImportance(game)) return null;
  return readSideCompetitorRankingValue(game, "away") + readSideCompetitorRankingValue(game, "home");
}
function compareGamesByCompetitorRankingImportance(a, b) {
  if (a.league !== b.league) return null;
  if (!gameUsesCompetitorRankingImportance(a) || !gameUsesCompetitorRankingImportance(b)) {
    return null;
  }
  const aScore = resolveCompetitorRankingImportanceScore(a);
  const bScore = resolveCompetitorRankingImportanceScore(b);
  return aScore - bScore;
}

// ../grarf/desktop/src/lib/gamesSpine/gamesSpineOperationalDate.ts
init_define_import_meta_env();

// ../grarf/desktop/src/data/grarfSportHierarchy.ts
init_define_import_meta_env();

// ../grarf/desktop/shared/grarfSportHierarchy.js
init_define_import_meta_env();
var GRARF_SPORT_HIERARCHY = {
  soccer: {
    title: "SOCCER",
    directorySectionId: "soccer",
    leagueKeys: [
      "MLS",
      "NWSL",
      "LALIGA",
      "BUNDESLIGA",
      "SERIEA",
      "UCL",
      "LIGUE1",
      "LIGAMX",
      "EREDIVISIE",
      "SPFL",
      "SAUDI",
      "SUPERLIG",
      "UEL",
      "WWC",
      "EURO",
      "COPA",
      "GOLDCUP",
      "NATIONS",
      "CLUBWC",
      "USLCUP",
      "WORLDCUP"
    ]
  },
  golf: {
    title: "GOLF",
    directorySectionId: "golf",
    leagueKeys: ["PGA", "LPGA", "LIV", "CHAMPIONS"]
  },
  tennis: {
    title: "TENNIS",
    directorySectionId: "tennis",
    leagueKeys: ["ATP", "WTA"]
  },
  basketball: {
    title: "BASKETBALL",
    directorySectionId: "basketball",
    leagueKeys: ["WNBA"]
  },
  motorsports: {
    title: "MOTORSPORTS",
    directorySectionId: "motorsports",
    leagueKeys: ["F1", "F2", "F3", "FORMULA_E", "NASCAR", "NASCAR_XFINITY", "NASCAR_TRUCK", "INDYCAR", "MOTOGP", "MOTO2", "MOTO3", "WEC"]
  },
  combat: {
    title: "COMBAT",
    directorySectionId: "combat",
    leagueKeys: ["UFC"]
  },
  football: {
    title: "FOOTBALL",
    directorySectionId: "football",
    leagueKeys: []
  }
};
var GOLF_LEAGUE_KEYS = GRARF_SPORT_HIERARCHY.golf.leagueKeys;
var GOLF_LEAGUE_KEY_SET = new Set(GOLF_LEAGUE_KEYS);
function isGolfLeagueKey(leagueKey) {
  return typeof leagueKey === "string" && GOLF_LEAGUE_KEY_SET.has(leagueKey);
}
function sportLeagueKeys(sportKey) {
  return GRARF_SPORT_HIERARCHY[sportKey]?.leagueKeys ?? [];
}

// ../grarf/desktop/src/data/grarfSportHierarchy.ts
var GOLF_TOUR_LEAGUE_ORDER = sportLeagueKeys("golf");

// ../grarf/desktop/src/lib/gamesSpine/gamesSpineOperationalDate.ts
function gamesSpineOperationalTimeZone() {
  return resolveOperationalSlateTimeZone();
}
function isScheduledOnOperationalEveningSlate2(game, operationalDateKey, now = /* @__PURE__ */ new Date()) {
  return isScheduledOnOperationalEveningSlate(
    game,
    operationalDateKey,
    now,
    gamesSpineOperationalTimeZone()
  );
}
function buildGamesSpineOperationalDateContext(operationalDateKey, now) {
  return {
    operationalDateKey,
    sportsDayKey: getOperationalSportsDayDateKey(now),
    yesterdayKey: getOperationalSportsDayYesterdayDateKey(now)
  };
}
function isGameOnGamesSpineOperationalDateWithContext(game, ctx, now = /* @__PURE__ */ new Date()) {
  const payloadKey = game.scheduledDateKey?.trim();
  const startKey = formatOperationalDateKeyFromMs(
    game.startTimeMs,
    gamesSpineOperationalTimeZone()
  );
  if (ctx.operationalDateKey === ctx.sportsDayKey) {
    if (payloadKey === ctx.sportsDayKey || startKey === ctx.sportsDayKey) {
      return true;
    }
  }
  if (game.status === "scheduled") {
    if (isGolfLeagueKey(game.league)) {
      const key = game.scheduledDateKey?.trim();
      return key ? key === ctx.operationalDateKey : false;
    }
    return isScheduledOnOperationalEveningSlate2(
      game,
      ctx.operationalDateKey,
      now,
      gamesSpineOperationalTimeZone()
    );
  }
  if (game.status === "live") {
    if (isGolfLeagueKey(game.league)) {
      const gameDateKey2 = resolveGameOperationalDateKey(game);
      if (!gameDateKey2) return ctx.operationalDateKey === ctx.sportsDayKey;
      if (gameDateKey2 === ctx.operationalDateKey) return true;
      if (gameDateKey2 === ctx.yesterdayKey) return true;
      return false;
    }
    if (ctx.operationalDateKey === ctx.sportsDayKey) {
      return true;
    }
  }
  if (isScheduledOnOperationalEveningSlate2(game, ctx.operationalDateKey, now)) {
    return true;
  }
  if (startKey === ctx.operationalDateKey) {
    return true;
  }
  const gameDateKey = resolveGameOperationalDateKey(game);
  if (!gameDateKey) return false;
  if (gameDateKey === ctx.operationalDateKey) return true;
  if (game.status === "live" && gameDateKey === ctx.yesterdayKey) {
    return true;
  }
  return false;
}
function readGolfFinalOperationalDateKey(game) {
  const endKey = game.metadata?.tournamentEndDateKey?.trim();
  const scheduledKey = game.scheduledDateKey?.trim();
  if (endKey) {
    const today = getOperationalSportsDayDateKey();
    if (endKey >= today) {
      const startTimeKey = game.startTimeMs != null && game.startTimeMs > 0 ? formatOperationalDateKeyFromMs(game.startTimeMs, gamesSpineOperationalTimeZone()) ?? null : null;
      if (startTimeKey && startTimeKey <= today) return today;
    }
  }
  if (endKey && scheduledKey && /round\s+\d+\s+-\s+play complete/i.test(game.statusLine ?? "")) {
    return scheduledKey;
  }
  if (endKey) return endKey;
  return scheduledKey || null;
}
function resolveGameOperationalDateKey(game) {
  if (game.status === "scheduled" || game.status === "live") {
    if (isGolfLeagueKey(game.league)) {
      const key = game.scheduledDateKey?.trim();
      if (key) return key;
      return formatOperationalDateKeyFromMs(game.startTimeMs, gamesSpineOperationalTimeZone()) ?? null;
    }
    const fromStart2 = formatOperationalDateKeyFromMs(game.startTimeMs, gamesSpineOperationalTimeZone());
    if (fromStart2) return fromStart2;
    if (game.scheduledDateKey?.trim()) return game.scheduledDateKey.trim();
    return null;
  }
  if (game.status === "final" && isGolfLeagueKey(game.league)) {
    const golfFinalKey = readGolfFinalOperationalDateKey(game);
    if (golfFinalKey) return golfFinalKey;
  }
  const fromStart = formatOperationalDateKeyFromMs(game.startTimeMs, gamesSpineOperationalTimeZone());
  if (fromStart) return fromStart;
  if (game.scheduledDateKey?.trim()) {
    return game.scheduledDateKey.trim();
  }
  return null;
}
function isGameOnGamesSpineOperationalDate(game, operationalDateKey = getOperationalSportsDayDateKey(), now = /* @__PURE__ */ new Date()) {
  return isGameOnGamesSpineOperationalDateWithContext(
    game,
    buildGamesSpineOperationalDateContext(operationalDateKey, now),
    now
  );
}
function filterGamesSpineSlateForOperationalDate(games, operationalDateKey = getOperationalSportsDayDateKey(), now = /* @__PURE__ */ new Date()) {
  if (games.length === 0) return games;
  const ctx = buildGamesSpineOperationalDateContext(operationalDateKey, now);
  return games.filter((g) => isGameOnGamesSpineOperationalDateWithContext(g, ctx, now));
}
function filterGamesSpineSlateForOperationalSportsDay(games, now = /* @__PURE__ */ new Date()) {
  return filterGamesSpineSlateForOperationalDate(games, getOperationalSportsDayDateKey(now), now);
}
function filterGamesSpineSlateForUpcoming(games, now = /* @__PURE__ */ new Date()) {
  if (!isGrarfWebRenderer() || games.length === 0) return [];
  const todayKey = getOperationalSportsDayDateKey(now);
  return games.filter(
    (g) => g.status === "scheduled" && isGameOnGamesSpineOperationalDate(g, todayKey, now)
  );
}

// ../grarf/desktop/src/lib/gamesSpine/sortGamesSpineChronologically.ts
function gamesSpineStatusBucketRank(status) {
  switch (status) {
    case "live":
      return 0;
    case "scheduled":
      return 1;
    case "final":
      return 2;
    case "postponed":
      return 3;
    default:
      return 1;
  }
}
function readStartTimeMs(game) {
  const ms = game.startTimeMs;
  if (ms != null && Number.isFinite(ms) && ms > 0) return ms;
  return Number.POSITIVE_INFINITY;
}
function compareGamesSpineChronologically(a, b) {
  const statusDelta = gamesSpineStatusBucketRank(a.status) - gamesSpineStatusBucketRank(b.status);
  if (statusDelta !== 0) return statusDelta;
  if (a.status !== "scheduled") {
    const rankingDelta = compareGamesByCompetitorRankingImportance(a, b);
    if (rankingDelta != null && rankingDelta !== 0) return rankingDelta;
  }
  const startDelta = readStartTimeMs(a) - readStartTimeMs(b);
  if (startDelta !== 0) return startDelta;
  const timeDelta = String(a.time).localeCompare(String(b.time));
  if (timeDelta !== 0) return timeDelta;
  return String(a.id).localeCompare(String(b.id));
}
function sortGamesSpineChronologically(games) {
  return [...games].sort(compareGamesSpineChronologically);
}

// ../grarf/desktop/src/lib/gamesSpine/manual/resolveManualGamesSpineLeagueDisplayName.ts
init_define_import_meta_env();
function resolveManualGamesSpineLeagueDisplayName(league) {
  const displayName = league.displayName?.trim();
  if (displayName) return displayName;
  return league.league.trim();
}

// ../grarf/desktop/src/lib/gamesSpine/manual/manualGamesSpineUtils.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/broadcast/streamUrlChannelFallback.ts
init_define_import_meta_env();
var STREAM_URL_CHANNEL_MAPPINGS = [
  { domains: ["tennischannel.com"], label: "Tennis Channel" },
  { domains: ["watch.mlb.com", "mlb.com"], label: "MLB.TV" },
  { domains: ["peacocktv.com", "peacock.com"], label: "Peacock" },
  { domains: ["paramountplus.com"], label: "Paramount+" },
  { domains: ["fox.com"], label: "FOX" },
  { domains: ["foxsports.com"], label: "FOX Sports" },
  { domains: ["plus.espn.com"], label: "ESPN+" },
  { domains: ["espn.com"], label: "ESPN+", pathPattern: /\/watch\/player(?:\/|\?)/i },
  { domains: ["tv.apple.com"], label: "Apple TV" },
  { domains: ["usanetwork.com"], label: "USA Network" }
];
function normalizeStreamHostname(streamUrl) {
  try {
    const host = new URL(streamUrl.trim()).hostname.toLowerCase();
    return host.replace(/^www\./, "");
  } catch {
    return null;
  }
}
function hostnameMatchesDomain(hostname, domain) {
  return hostname === domain || hostname.endsWith(`.${domain}`);
}
function deriveChannelLabelFromStreamUrl(streamUrl) {
  const hostname = normalizeStreamHostname(streamUrl);
  if (!hostname) return null;
  for (const { domains, label, pathPattern } of STREAM_URL_CHANNEL_MAPPINGS) {
    if (!domains.some((domain) => hostnameMatchesDomain(hostname, domain))) continue;
    if (pathPattern) {
      try {
        if (!pathPattern.test(new URL(streamUrl.trim()).pathname)) continue;
      } catch {
        continue;
      }
    }
    return label;
  }
  return null;
}

// ../grarf/desktop/src/lib/gamesSpine/manual/manualGamesSpineUtils.ts
var WALL_CLOCK_RE = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?(?:\.\d{1,3})?(?:Z|[+-]\d{2}:?\d{2})?$/;
function calendarPartsInTimeZone2(ms, timeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  }).formatToParts(new Date(ms));
  return {
    year: Number(parts.find((part) => part.type === "year")?.value),
    month: Number(parts.find((part) => part.type === "month")?.value),
    day: Number(parts.find((part) => part.type === "day")?.value),
    hour: Number(parts.find((part) => part.type === "hour")?.value),
    minute: Number(parts.find((part) => part.type === "minute")?.value),
    second: Number(parts.find((part) => part.type === "second")?.value)
  };
}
function parseWallClockInTimeZone(dateTime, timeZone) {
  const match = dateTime.trim().match(WALL_CLOCK_RE);
  if (!match) return null;
  const target = {
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3]),
    hour: Number(match[4]),
    minute: Number(match[5]),
    second: Number(match[6] ?? 0)
  };
  let ms = Date.UTC(target.year, target.month - 1, target.day, target.hour, target.minute, target.second);
  for (let attempt = 0; attempt < 6; attempt += 1) {
    const parts = calendarPartsInTimeZone2(ms, timeZone);
    if (parts.year === target.year && parts.month === target.month && parts.day === target.day && parts.hour === target.hour && parts.minute === target.minute && parts.second === target.second) {
      return ms;
    }
    const targetMs = Date.UTC(
      target.year,
      target.month - 1,
      target.day,
      target.hour,
      target.minute,
      target.second
    );
    const actualMs = Date.UTC(
      parts.year,
      parts.month - 1,
      parts.day,
      parts.hour,
      parts.minute,
      parts.second
    );
    ms += targetMs - actualMs;
  }
  return null;
}
function parseManualGamesSpineEventTimeMs(value, sourceTimeZone) {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const zone = sourceTimeZone?.trim();
  if (zone) {
    return parseWallClockInTimeZone(trimmed, zone);
  }
  const ms = Date.parse(trimmed);
  return Number.isFinite(ms) ? ms : null;
}
function resolveManualGamesSpineStatus(nowMs, startTimeMs, endTimeMs) {
  if (nowMs < startTimeMs) return "scheduled";
  if (nowMs < endTimeMs) return "live";
  return "final";
}
function slugPart(value) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function manualGamesSpineLeagueSlug(leagueLabel) {
  return slugPart(leagueLabel) || "manual-league";
}
function resolveManualGamesSpineChannelValue(eventValue, leagueValue) {
  const eventChannel = eventValue?.trim();
  if (eventChannel) return eventChannel;
  const leagueChannel = leagueValue?.trim();
  if (leagueChannel) return leagueChannel;
  return null;
}
var CHANNEL_LABEL_TO_STREAM_PROVIDER = {
  Peacock: "Peacock",
  "ESPN+": "ESPN+",
  ESPN: "ESPN+",
  "Paramount+": "Paramount+",
  "FOX Sports": "FOX Sports",
  "Apple TV": "Apple TV",
  "USA Network": "USA",
  "Tennis Channel": "Tennis Channel+"
};
function resolveStreamProviderFromChannelLabel(channelLabel) {
  const trimmed = channelLabel?.trim();
  if (!trimmed) return null;
  if (CHANNEL_LABEL_TO_STREAM_PROVIDER[trimmed]) {
    return CHANNEL_LABEL_TO_STREAM_PROVIDER[trimmed];
  }
  if (/\bpeacock\b/i.test(trimmed)) return "Peacock";
  if (/\bespn\+?\b/i.test(trimmed)) return "ESPN+";
  if (/\bparamount\+?\b/i.test(trimmed)) return "Paramount+";
  if (/\bfox sports\b/i.test(trimmed)) return "FOX Sports";
  if (/\bapple tv\b/i.test(trimmed)) return "Apple TV";
  if (/\busa network\b/i.test(trimmed)) return "USA";
  if (/\btennis channel\b/i.test(trimmed)) return "Tennis Channel+";
  return null;
}
function resolveManualGamesSpineStreamProvider(channel, channelUrl) {
  const urlLabel = channelUrl?.trim() ? deriveChannelLabelFromStreamUrl(channelUrl) : null;
  return resolveStreamProviderFromChannelLabel(urlLabel) ?? resolveStreamProviderFromChannelLabel(channel);
}
function manualGamesSpineEventId(leagueLabel, eventName, date) {
  return `manual-gs-${slugPart(leagueLabel)}-${slugPart(eventName)}-${date}`;
}
function formatManualGamesSpineStatusLine(status, startTimeMs, endTimeMs, nowMs) {
  if (status === "live") {
    const remainingMs = Math.max(0, endTimeMs - nowMs);
    const totalMinutes = Math.floor(remainingMs / 6e4);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `Live \xB7 ${hours}h ${minutes}m remaining`;
  }
  if (status === "final") return "Completed";
  return void 0;
}
function formatManualGamesSpineDisplayTime(startTimeMs) {
  return new Date(startTimeMs).toLocaleString("en-US", {
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  });
}

// ../grarf/desktop/src/lib/gamesSpine/manual/mergeBundledGamesSpineManualDocument.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/operations/resolveOperationsDateEntry.ts
init_define_import_meta_env();

// ../grarf/desktop/src/data/operations.ts
init_define_import_meta_env();
var OPERATIONS = {
  dates: {
    "2026-06-13": {
      featuredGames: { selections: [] },
      manualEventOverrides: {
        WEC: {
          timeZone: "America/Chicago",
          operationalDateKeys: ["2026-06-13", "2026-06-14"],
          gameId: "manual-wec-le-mans-2026",
          eventName: "24 Hours of Le Mans",
          scheduledDateKey: "2026-06-13",
          startTime: "2026-06-13T09:00:00",
          endTime: "2026-06-14T09:00:00"
        }
      },
      manualGameOverrides: {
        "manual-wec-le-mans-2026": {
          streamUrl: "https://plus.fiawec.com/en/livestream/s-24-hours-of-le-mans-race-en-4ggw9"
        }
      }
    },
    "2026-06-14": {
      featuredGames: { selections: [] },
      manualEventOverrides: {
        WEC: {
          timeZone: "America/Chicago",
          operationalDateKeys: ["2026-06-13", "2026-06-14"],
          gameId: "manual-wec-le-mans-2026",
          eventName: "24 Hours of Le Mans",
          scheduledDateKey: "2026-06-13",
          startTime: "2026-06-13T09:00:00",
          endTime: "2026-06-14T09:00:00"
        }
      },
      manualGameOverrides: {
        "manual-wec-le-mans-2026": {
          streamUrl: "https://plus.fiawec.com/en/livestream/s-24-hours-of-le-mans-race-en-4ggw9"
        }
      }
    },
    "2026-06-27": {
      featuredGames: { selections: [] },
      manualEventOverrides: {
        GT_WORLD_CHALLENGE: {
          league: "gt-world-challenge",
          displayName: "GT World",
          insertAfterLeague: "WEC",
          sourceTimeZone: "America/Chicago",
          games: [
            {
              date: "2026-06-27",
              eventName: "24 Hours of Spa",
              startTime: "2026-06-27T09:00:00",
              endTime: "2026-06-28T10:00:00",
              bestGamePriority: 0
            }
          ]
        }
      },
      manualGameOverrides: {
        "manual-gs-gt-world-challenge-24-hours-of-spa-2026-06-27": {
          channel: "YouTube",
          channelUrl: "https://www.youtube.com/live/1bbj47g_FOs?si=dZLDLjR3q8TIS6Ly"
        }
      }
    },
    "2026-06-28": {
      featuredGames: { selections: [] },
      manualEventOverrides: {
        GT_WORLD_CHALLENGE: {
          league: "gt-world-challenge",
          displayName: "GT World",
          insertAfterLeague: "WEC",
          sourceTimeZone: "America/Chicago",
          games: [
            {
              date: "2026-06-28",
              eventName: "24 Hours of Spa",
              startTime: "2026-06-27T09:00:00",
              endTime: "2026-06-28T10:00:00",
              bestGamePriority: 0
            }
          ]
        }
      },
      manualGameOverrides: {
        "manual-gs-gt-world-challenge-24-hours-of-spa-2026-06-28": {
          channel: "YouTube",
          channelUrl: "https://www.youtube.com/live/1bbj47g_FOs?si=dZLDLjR3q8TIS6Ly"
        }
      }
    },
    "2026-07-08": {
      featuredGames: {
        selections: [
          { rank: 1, league: "ATP", matchup: "Zverev vs Fritz", gameKey: "177494" },
          { rank: 2, league: "ATP", matchup: "Fery vs Cobolli", gameKey: "177492" },
          { rank: 3, league: "WTA", matchup: "Paolini vs Kostyuk", gameKey: "177705" },
          { rank: 4, league: "WTA", matchup: "Mertens vs Noskova", gameKey: "177712" },
          {
            rank: 5,
            league: "Tour de France",
            matchup: "Stage 5",
            gameKey: "manual-tdf-stage-5-2026-07-08"
          },
          { rank: 6, league: "MLB", matchup: "Yankees vs Rays", gameKey: "401816073" }
        ]
      },
      manualEventOverrides: {
        TDF: {
          timeZone: "America/New_York",
          highlightsTv: {
            sport: "CYCLING",
            sourceType: "Playlist",
            url: "https://youtube.com/playlist?list=PLWuO6-g6SGnU&si=IuqQ1pQ5ejSjUOwc",
            requiredTitleKeywords: "highlights",
            excludedKeywords: "",
            enabled: true
          },
          stages: [
            {
              stage: 1,
              date: "2026-07-04",
              start: "10:00",
              end: "12:00",
              route: "Barcelona to Barcelona",
              broadcast: ["NBC", "Peacock"]
            },
            {
              stage: 2,
              date: "2026-07-05",
              start: "07:00",
              end: "11:30",
              route: "Tarragona to Barcelona",
              broadcast: ["Peacock"]
            },
            {
              stage: 3,
              date: "2026-07-06",
              start: "05:30",
              end: "11:00",
              route: "Granollers to Les Angles",
              broadcast: ["Peacock"]
            },
            {
              stage: 4,
              date: "2026-07-07",
              start: "06:30",
              end: "11:30",
              route: "Carcassonne to Foix",
              broadcast: ["Peacock"]
            },
            {
              stage: 5,
              date: "2026-07-08",
              start: "07:00",
              end: "11:00",
              route: "Lannemezan to Pau",
              broadcast: ["Peacock"]
            },
            {
              stage: 6,
              date: "2026-07-09",
              start: "06:00",
              end: "11:30",
              route: "Pau to Gavarnie-G\xE8dre",
              broadcast: ["Peacock"]
            },
            {
              stage: 7,
              date: "2026-07-10",
              start: "06:30",
              end: "11:00",
              route: "Hagetmau to Bordeaux",
              broadcast: ["Peacock"]
            },
            {
              stage: 8,
              date: "2026-07-11",
              start: "06:30",
              end: "11:00",
              route: "P\xE9rigueux to Bergerac",
              broadcast: ["NBC", "Peacock"]
            },
            {
              stage: 9,
              date: "2026-07-12",
              start: "06:30",
              end: "11:30",
              route: "Malemort to Ussel",
              broadcast: ["Peacock"]
            },
            {
              stage: 10,
              date: "2026-07-14",
              start: "06:30",
              end: "11:00",
              route: "Aurillac to Le Lioran",
              broadcast: ["Peacock"]
            },
            {
              stage: 11,
              date: "2026-07-15",
              start: "07:00",
              end: "11:00",
              route: "Vichy to Nevers",
              broadcast: ["Peacock"]
            },
            {
              stage: 12,
              date: "2026-07-16",
              start: "07:00",
              end: "11:30",
              route: "Circuit Nevers Magny-Cours to Chalon-sur-Sa\xF4ne",
              broadcast: ["Peacock"]
            },
            {
              stage: 13,
              date: "2026-07-17",
              start: "06:30",
              end: "12:00",
              route: "Dole to Belfort",
              broadcast: ["Peacock"]
            },
            {
              stage: 14,
              date: "2026-07-18",
              start: "06:30",
              end: "11:00",
              route: "Mulhouse to Le Markstein Fellering",
              broadcast: ["Peacock"]
            },
            {
              stage: 15,
              date: "2026-07-19",
              start: "06:30",
              end: "12:00",
              route: "Champagnole to Plateau de Solaison",
              broadcast: ["Peacock"]
            },
            {
              stage: 16,
              date: "2026-07-21",
              start: "06:30",
              end: "10:00",
              route: "\xC9vian-les-Bains to Thonon-les-Bains",
              broadcast: ["Peacock"]
            },
            {
              stage: 17,
              date: "2026-07-22",
              start: "06:30",
              end: "11:00",
              route: "Chambery to Voiron",
              broadcast: ["Peacock"]
            },
            {
              stage: 18,
              date: "2026-07-23",
              start: "06:00",
              end: "11:30",
              route: "Voiron to Orci\xE8res-Merlette",
              broadcast: ["Peacock"]
            },
            {
              stage: 19,
              date: "2026-07-24",
              start: "07:00",
              end: "11:00",
              route: "Gap to Alpe d'Huez",
              broadcast: ["Peacock"]
            },
            {
              stage: 20,
              date: "2026-07-25",
              start: "05:30",
              end: "11:00",
              route: "Le Bourg d'Oisans to Alpe d'Huez",
              broadcast: ["NBC", "Peacock"]
            },
            {
              stage: 21,
              date: "2026-07-26",
              start: "09:30",
              end: "13:00",
              route: "Thoiry to Paris Champs-\xC9lys\xE9es",
              broadcast: ["Peacock"]
            }
          ]
        }
      },
      manualGameOverrides: {}
    }
  }
};

// ../grarf/desktop/src/lib/operations/resolveOperationsDateEntry.ts
var EMPTY_OPERATIONS_DATE_ENTRY = {
  featuredGames: { selections: [] },
  manualEventOverrides: {},
  manualGameOverrides: {}
};
function resolveOperationsDateEntry(operationalDateKey = getOperationalSportsDayDateKey()) {
  const entry = OPERATIONS.dates[operationalDateKey];
  return entry ?? EMPTY_OPERATIONS_DATE_ENTRY;
}
function resolveAggregatedTdfManualEventOverride() {
  const stages = [];
  const seen = /* @__PURE__ */ new Set();
  let timeZone = "America/New_York";
  let highlightsTv;
  for (const entry of Object.values(OPERATIONS.dates)) {
    const tdf = entry.manualEventOverrides.TDF;
    if (!tdf) continue;
    timeZone = tdf.timeZone;
    if (tdf.highlightsTv) highlightsTv = tdf.highlightsTv;
    for (const stage of tdf.stages) {
      const key = `${stage.stage}-${stage.date}`;
      if (seen.has(key)) continue;
      seen.add(key);
      stages.push(stage);
    }
  }
  if (stages.length === 0) return void 0;
  return { timeZone, highlightsTv, stages };
}

// ../grarf/desktop/src/lib/gamesSpine/manual/mergeBundledGamesSpineManualDocument.ts
function leagueStorageKey(league) {
  return league.trim().toLowerCase();
}
function isManualGamesSpineLeagueEntry(entry) {
  return typeof entry === "object" && entry !== null && "games" in entry && Array.isArray(entry.games);
}
function resolveBundledManualGamesSpineLeagues(operationalDateKey = getOperationalSportsDayDateKey()) {
  return Object.values(resolveOperationsDateEntry(operationalDateKey).manualEventOverrides).filter(
    isManualGamesSpineLeagueEntry
  );
}
function mergeBundledGamesSpineManualDocument(document2, operationalDateKey = getOperationalSportsDayDateKey()) {
  const byKey = new Map(
    document2.leagues.map((league) => [leagueStorageKey(league.league), league])
  );
  for (const bundled of resolveBundledManualGamesSpineLeagues(operationalDateKey)) {
    byKey.set(leagueStorageKey(bundled.league), bundled);
  }
  return { leagues: [...byKey.values()] };
}

// ../grarf/desktop/src/lib/gamesSpine/manual/convertManualGamesSpineDocument.ts
function convertEventToMlbGame(league, event, now, operationalDateKey) {
  const startTimeMs = parseManualGamesSpineEventTimeMs(event.startTime, league.sourceTimeZone);
  const endTimeMs = parseManualGamesSpineEventTimeMs(event.endTime, league.sourceTimeZone);
  if (!Number.isFinite(startTimeMs) || !Number.isFinite(endTimeMs)) return null;
  const nowMs = now.getTime();
  const status = resolveManualGamesSpineStatus(nowMs, startTimeMs, endTimeMs);
  const gameId = manualGamesSpineEventId(league.league, event.eventName, event.date);
  const watchOverride = resolveOperationsDateEntry(operationalDateKey).manualGameOverrides[gameId];
  const channel = watchOverride?.channel ?? resolveManualGamesSpineChannelValue(event.channel, league.channel) ?? "";
  const channelUrl = watchOverride?.channelUrl ?? resolveManualGamesSpineChannelValue(event.channelUrl, league.channelUrl);
  const streamProvider = resolveManualGamesSpineStreamProvider(channel, channelUrl);
  const leagueLogoUrl = resolveManualGamesSpineLeagueLogoUrl(league);
  const leagueDisplayName = resolveManualGamesSpineLeagueDisplayName(league);
  const broadcasts = channel ? [channel] : [];
  return {
    id: gameId,
    grarfGameId: gameId,
    time: formatManualGamesSpineDisplayTime(startTimeMs),
    awayTeam: event.eventName,
    awayRecord: "\u2014",
    awayLogoUrl: leagueLogoUrl,
    homeTeam: channel,
    homeRecord: "\u2014",
    awayCity: "",
    homeCity: "",
    awayPitcher: "\u2014",
    awayPitcherStats: "",
    homePitcher: "\u2014",
    homePitcherStats: "",
    channels: broadcasts,
    broadcasts,
    streamUrl: channelUrl,
    streamProvider,
    status,
    statusLine: formatManualGamesSpineStatusLine(status, startTimeMs, endTimeMs, nowMs),
    startTimeMs,
    scheduledDateKey: event.date,
    metadata: {
      leagueLabel: leagueDisplayName,
      manualGamesSpine: {
        leagueLabel: leagueDisplayName,
        leagueKey: league.league,
        displayName: league.displayName?.trim() ? league.displayName.trim() : null,
        leaguePriority: league.leaguePriority ?? void 0,
        insertAfterLeague: league.insertAfterLeague ?? null,
        insertBeforeLeague: league.insertBeforeLeague ?? null,
        bestGamePriority: event.bestGamePriority != null && Number.isFinite(event.bestGamePriority) ? event.bestGamePriority : void 0,
        eventName: event.eventName,
        date: event.date,
        startTimeIso: event.startTime,
        endTimeIso: event.endTime,
        sourceTimeZone: league.sourceTimeZone?.trim() ? league.sourceTimeZone.trim() : null,
        channel,
        channelUrl
      }
    }
  };
}
function convertManualGamesSpineDocument(document2, now = /* @__PURE__ */ new Date(), operationalDateKey = getOperationalSportsDayDateKey(now)) {
  const merged = mergeBundledGamesSpineManualDocument(document2 ?? { leagues: [] }, operationalDateKey);
  if (!merged.leagues.length) return [];
  const sections = [];
  for (const league of merged.leagues) {
    const games = [];
    for (const event of league.games) {
      if (event.date !== operationalDateKey) continue;
      const row = convertEventToMlbGame(league, event, now, operationalDateKey);
      if (row) games.push(row);
    }
    if (games.length === 0) continue;
    sections.push({
      slug: manualGamesSpineLeagueSlug(league.league),
      leagueKey: league.league,
      leagueLabel: resolveManualGamesSpineLeagueDisplayName(league),
      leaguePriority: league.leaguePriority ?? null,
      insertAfterLeague: league.insertAfterLeague ?? null,
      insertBeforeLeague: league.insertBeforeLeague ?? null,
      games: sortGamesSpineChronologically(games)
    });
  }
  return sections;
}

// ../grarf/desktop/src/lib/gamesSpine/manualLeMans2026SpineEntry.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/homeGamesColumnFilter.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/gamesSpine/isGameActivelyLive.ts
init_define_import_meta_env();

// ../grarf/desktop/shared/espnPausedCompetitionStatus.js
init_define_import_meta_env();

// ../grarf/desktop/src/lib/watch/externalWatchLaunch.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/gamesSpine/manualLeMans2026SpineEntry.ts
var import_react2 = __toESM(require_react(), 1);
var MANUAL_LE_MANS_2026_GAME_ID = "manual-wec-le-mans-2026";
function resolveLeMansEventOverride(operationalDateKey) {
  return resolveOperationsDateEntry(operationalDateKey).manualEventOverrides.WEC;
}
function resolveManualLeMans2026LivestreamUrl(operationalDateKey) {
  const override = resolveOperationsDateEntry(operationalDateKey).manualGameOverrides[MANUAL_LE_MANS_2026_GAME_ID];
  const streamUrl = override && "streamUrl" in override ? override.streamUrl?.trim() : "";
  return streamUrl || void 0;
}
function resolveLeMansStartTimeMs(operationalDateKey) {
  const event = resolveLeMansEventOverride(operationalDateKey);
  return parseManualGamesSpineEventTimeMs(event.startTime, event.timeZone);
}
function isManualLeMans2026GameId(gameId) {
  return gameId === MANUAL_LE_MANS_2026_GAME_ID;
}
function isManualLeMans2026VisibleOnOperationalDate(operationalDateKey = getOperationalSportsDayDateKey()) {
  const wec = resolveLeMansEventOverride(operationalDateKey);
  return wec?.operationalDateKeys.includes(operationalDateKey) ?? false;
}
function resolveManualLeMans2026Status(now = /* @__PURE__ */ new Date()) {
  const operationalDateKey = getOperationalSportsDayDateKey(now);
  const event = resolveLeMansEventOverride(operationalDateKey);
  if (!event) return "final";
  const startTimeMs = parseManualGamesSpineEventTimeMs(event.startTime, event.timeZone);
  const endTimeMs = parseManualGamesSpineEventTimeMs(event.endTime, event.timeZone);
  return resolveManualGamesSpineStatus(now.getTime(), startTimeMs, endTimeMs);
}
function formatManualLeMans2026TimeRemaining(now = /* @__PURE__ */ new Date()) {
  const operationalDateKey = getOperationalSportsDayDateKey(now);
  const event = resolveLeMansEventOverride(operationalDateKey);
  if (!event) return "Time Remaining: 0h 0m";
  const endTimeMs = parseManualGamesSpineEventTimeMs(event.endTime, event.timeZone);
  const remainingMs = Math.max(0, endTimeMs - now.getTime());
  const totalMinutes = Math.floor(remainingMs / 6e4);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `Time Remaining: ${hours}h ${minutes}m`;
}
function resolveManualLeMans2026SpineGame(now = /* @__PURE__ */ new Date()) {
  const operationalDateKey = getOperationalSportsDayDateKey(now);
  const event = resolveLeMansEventOverride(operationalDateKey);
  const startTimeMs = resolveLeMansStartTimeMs(operationalDateKey);
  const status = resolveManualLeMans2026Status(now);
  const statusLine = status === "live" ? formatManualLeMans2026TimeRemaining(now) : status === "final" ? "Completed" : void 0;
  return {
    id: event.gameId,
    grarfGameId: event.gameId,
    time: new Date(startTimeMs).toLocaleString("en-US", {
      weekday: "short",
      hour: "numeric",
      minute: "2-digit",
      timeZone: event.timeZone,
      timeZoneName: "short"
    }),
    awayTeam: event.eventName,
    awayRecord: "\u2014",
    homeTeam: "",
    homeRecord: "",
    awayCity: "",
    homeCity: "",
    awayPitcher: "\u2014",
    awayPitcherStats: "",
    homePitcher: "\u2014",
    homePitcherStats: "",
    channels: [],
    broadcasts: [],
    status,
    statusLine,
    streamUrl: status === "live" ? resolveManualLeMans2026LivestreamUrl(operationalDateKey) : void 0,
    startTimeMs,
    scheduledDateKey: event.scheduledDateKey,
    league: "WEC",
    lastUpdated: now.toISOString()
  };
}
function resolveWecOperationalLeagueGames(now = /* @__PURE__ */ new Date()) {
  const operationalDateKey = getOperationalSportsDayDateKey(now);
  if (!isManualLeMans2026VisibleOnOperationalDate(operationalDateKey)) {
    return [];
  }
  return [resolveManualLeMans2026SpineGame(now)];
}
function refreshManualLeMans2026SpineGameIfNeeded(game, now = /* @__PURE__ */ new Date()) {
  if (!isManualLeMans2026GameId(game.id)) return game;
  return resolveManualLeMans2026SpineGame(now);
}

// ../grarf/desktop/src/lib/gamesSpine/mergeGamesSpineSectionsByPriority.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/bestGameRightNow/leagueImportanceV1.ts
init_define_import_meta_env();

// ../grarf/desktop/shared/golfWatchUrls.js
init_define_import_meta_env();

// ../grarf/desktop/src/lib/golf/lpgaMajorTournament.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/gamesSpine/wimbledonGamesSpinePresentation.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/watch/enrichWimbledonEspnWatchStreams.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/tennisChannelPlus/nameUtils.ts
init_define_import_meta_env();
function normalizeTennisText(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}
function tokenizeTennisLabel(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return [];
  if (trimmed.includes("/")) {
    return trimmed.split("/").flatMap((part) => tokenizeTennisLabel(part)).filter(Boolean);
  }
  let label = trimmed;
  if (label.includes(",")) {
    const [last, first] = label.split(",").map((part) => part.trim());
    label = `${first} ${last}`.trim();
  }
  return normalizeTennisText(label).split(" ").filter((token) => token.length >= 2);
}
function tokenSetFromLabel(raw) {
  return new Set(tokenizeTennisLabel(raw));
}
function tokenOverlapScore(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let matched = 0;
  for (const token of a) {
    if (b.has(token)) {
      matched += 1;
      continue;
    }
    for (const other of b) {
      if (token.length >= 4 && other.length >= 4 && (token.includes(other) || other.includes(token))) {
        matched += 0.9;
        break;
      }
    }
  }
  return matched / Math.max(a.size, b.size);
}
var TOURNAMENT_STOP_WORDS = /* @__PURE__ */ new Set([
  "atp",
  "wta",
  "itf",
  "men",
  "women",
  "singles",
  "doubles",
  "mixed",
  "round",
  "final",
  "quarterfinals",
  "semifinals",
  "challenger",
  "great",
  "britain",
  "germany",
  "netherlands",
  "united",
  "states"
]);
function tokenizeTournamentText(raw) {
  const tokens = normalizeTennisText(raw).split(" ").filter((token) => token.length >= 3 && !TOURNAMENT_STOP_WORDS.has(token));
  return new Set(tokens);
}

// ../grarf/desktop/src/lib/watch/espnPlusStream.ts
init_define_import_meta_env();

// ../grarf/desktop/shared/espnWatchBroadcast.js
init_define_import_meta_env();
var ESPN_PLUS_LABEL = /espn\s*\+|espn\s*plus|espn\s*unlimited|espn\s*unlmtd/i;
function isEspnPlusBroadcastLabel(label) {
  if (typeof label !== "string" || !label.trim()) return false;
  return ESPN_PLUS_LABEL.test(label);
}
function isEspnLinearBroadcastLabel(label) {
  if (typeof label !== "string" || !label.trim()) return false;
  const t = label.trim();
  if (ESPN_PLUS_LABEL.test(t)) return false;
  return /^(espn2?|abc|espn\s*network|espn\s*national)$/i.test(t);
}
function gameHasEspnPlusBroadcast(broadcastLabels) {
  return broadcastLabels.some(isEspnPlusBroadcastLabel);
}
var LINEAR_ESPN_WATCH_LEAGUES = /* @__PURE__ */ new Set(["NHL", "ATP", "WTA", "NCAABB"]);
function gameHasEspnWatchBroadcast(broadcastLabels, leagueKey) {
  if (gameHasEspnPlusBroadcast(broadcastLabels)) return true;
  if (leagueKey && LINEAR_ESPN_WATCH_LEAGUES.has(leagueKey)) {
    return broadcastLabels.some(isEspnLinearBroadcastLabel);
  }
  return false;
}

// ../grarf/desktop/src/lib/watch/espnPlusStream.ts
var PLAY_LOCATION = "where-to-watch%3Aguide";
function resolveEspnWatchLeagueKey(game) {
  if (game.league) return game.league;
  if (game.id.startsWith("espn-NHL-")) return "NHL";
  if (game.id.startsWith("espn-NCAABB-")) return "NCAABB";
  if (game.id.startsWith("espn-ATP-")) return "ATP";
  if (game.id.startsWith("espn-WTA-")) return "WTA";
  return void 0;
}
function gameHasEspnWatchBroadcast2(game) {
  const hints = [...game.broadcasts ?? [], ...game.channels ?? []];
  return gameHasEspnWatchBroadcast(hints, resolveEspnWatchLeagueKey(game));
}
function buildEspnPlusPlayerUrlByUuid(playerId) {
  const id = playerId.trim();
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) return null;
  return `https://www.espn.com/watch/player/_/id/${id}?playLocation=${PLAY_LOCATION}`;
}
function buildEspnPlusWatchUrl(eventCalendarId) {
  const id = eventCalendarId.trim();
  if (!/^\d+$/.test(id)) return null;
  return `https://www.espn.com/watch/player/_/eventCalendarId/${id}?playLocation=${PLAY_LOCATION}`;
}
function attachEspnPlusStreamToGame(game, stream) {
  game.streamUrl = stream.streamUrl;
  game.streamProvider = stream.streamProvider;
  if (stream.playerId) {
    game.espnPlusPlayerId = stream.playerId;
  }
  if (stream.eventCalendarId) {
    game.espnWatchEventId = stream.eventCalendarId;
  }
  const watchLinks = Array.isArray(game.content?.watchLinks) ? [...game.content.watchLinks] : [];
  game.content = {
    ...game.content ?? {},
    watchLinks: [
      ...watchLinks,
      {
        provider: stream.streamProvider,
        url: stream.streamUrl,
        eventCalendarId: stream.eventCalendarId,
        ...stream.playerId ? { playerId: stream.playerId } : {}
      }
    ]
  };
}

// ../grarf/desktop/src/lib/watch/enrichWimbledonEspnWatchStreams.ts
var ESPN_FETCH_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var WIMBLEDON_ESPN_WATCH_CATALOG_ID = "6929e7a4-2c40-3f82-a710-42baae9472c6";
var WIMBLEDON_ESPN_WATCH_CATALOG_URL = `https://watch.product.api.espn.com/api/product/v3/watchespn/web/catalog/${WIMBLEDON_ESPN_WATCH_CATALOG_ID}?tz=America%2FChicago&lang=en&countryCode=US&deviceType=desktop`;
var MIN_PLAYER_SCORE = 0.55;
var MIN_TOTAL_SCORE = 0.62;
var CATALOG_CACHE_TTL_MS = 3e4;
var catalogCache = null;
function isTennisLeague(game) {
  return game.league === "ATP" || game.league === "WTA";
}
function wimbledonHaystack(game) {
  return [
    game.metadata?.tennis?.contextLine,
    game.statusLine,
    game.leagueContextLabel
  ].filter(Boolean).join(" ");
}
function isWimbledonTennisGame(game) {
  if (!isTennisLeague(game)) return false;
  return /\bwimbledon\b/i.test(wimbledonHaystack(game));
}
function gamePlayerTokenSets(game) {
  const away = tokenSetFromLabel(game.metadata?.officialAwayName || game.awayTeam || "");
  const home = tokenSetFromLabel(game.metadata?.officialHomeName || game.homeTeam || "");
  return [away, home];
}
function parseEspnWatchMatchupNames(title) {
  let cleaned = title.trim();
  cleaned = cleaned.replace(/^\(\d+\)\s*/, "");
  cleaned = cleaned.replace(/\s*\([^)]+\)\s*$/i, "");
  const match = cleaned.match(/^(.+?)\s+vs\.?\s+(.+)$/i);
  if (!match) return null;
  return [match[1].trim(), match[2].trim()];
}
function listingPlayerTokenSets(listing) {
  const parsed = parseEspnWatchMatchupNames(listing.shortName) ?? parseEspnWatchMatchupNames(listing.name);
  if (!parsed) return [/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set()];
  return [tokenSetFromLabel(parsed[0]), tokenSetFromLabel(parsed[1])];
}
function scorePlayers(game, listing) {
  const [gameAway, gameHome] = gamePlayerTokenSets(game);
  const [listingAway, listingHome] = listingPlayerTokenSets(listing);
  const direct = tokenOverlapScore(gameAway, listingAway) + tokenOverlapScore(gameHome, listingHome);
  const swapped = tokenOverlapScore(gameAway, listingHome) + tokenOverlapScore(gameHome, listingAway);
  return Math.max(direct, swapped) / 2;
}
function scoreListingMatch(game, listing) {
  const players = scorePlayers(game, listing);
  if (players < MIN_PLAYER_SCORE) return 0;
  const liveBoost = listing.status === "live" ? 0.04 : 0;
  return players + liveBoost;
}
function extractWebUrl(content) {
  const links = content.links;
  if (typeof links?.web === "string" && links.web.trim()) return links.web.trim();
  const streams = content.streams;
  for (const stream of streams ?? []) {
    const web = stream.links?.web?.trim();
    if (web) return web;
  }
  return null;
}
function parseWimbledonCatalogListings(json) {
  const buckets = json?.page?.buckets;
  if (!Array.isArray(buckets)) return [];
  const listings = [];
  for (const bucket of buckets) {
    if (!bucket || typeof bucket !== "object") continue;
    const contents = bucket.contents;
    if (!Array.isArray(contents)) continue;
    for (const raw of contents) {
      if (!raw || typeof raw !== "object") continue;
      const content = raw;
      const status = String(content.status ?? "").toLowerCase();
      if (status !== "live" && status !== "upcoming") continue;
      const streamUrl = extractWebUrl(content);
      const id = String(content.id ?? "").trim();
      const name = String(content.name ?? "").trim();
      const shortName = String(content.shortName ?? name).trim();
      if (!streamUrl || !id || !name) continue;
      listings.push({ id, name, shortName, streamUrl, status });
    }
  }
  return listings;
}
async function fetchWimbledonEspnWatchCatalog() {
  const now = Date.now();
  if (catalogCache && now - catalogCache.fetchedAt < CATALOG_CACHE_TTL_MS) {
    return catalogCache.listings;
  }
  try {
    const res = await fetch(WIMBLEDON_ESPN_WATCH_CATALOG_URL, {
      headers: { "User-Agent": ESPN_FETCH_UA, Accept: "application/json" }
    });
    if (!res.ok) return catalogCache?.listings ?? [];
    const json = await res.json();
    const listings = parseWimbledonCatalogListings(json);
    catalogCache = { fetchedAt: now, listings };
    return listings;
  } catch {
    return catalogCache?.listings ?? [];
  }
}
function matchWimbledonEspnWatchListing(game, catalog) {
  let best = null;
  let bestScore = 0;
  let secondBest = 0;
  for (const listing of catalog) {
    const score = scoreListingMatch(game, listing);
    if (score > bestScore) {
      secondBest = bestScore;
      bestScore = score;
      best = listing;
      continue;
    }
    if (score > secondBest) secondBest = score;
  }
  if (!best || bestScore < MIN_TOTAL_SCORE) return null;
  if (secondBest >= bestScore - 0.03) return null;
  return best;
}
async function enrichWimbledonEspnWatchStreams(games) {
  const targets = games.filter(
    (game) => isWimbledonTennisGame(game) && game.status === "live"
  );
  if (targets.length === 0) return;
  const catalog = await fetchWimbledonEspnWatchCatalog();
  if (catalog.length === 0) return;
  for (const game of targets) {
    const listing = matchWimbledonEspnWatchListing(game, catalog);
    if (!listing) {
      continue;
    }
    attachEspnPlusStreamToGame(game, {
      streamUrl: listing.streamUrl,
      streamProvider: "ESPN+",
      playerId: listing.id
    });
  }
}

// ../grarf/desktop/src/store/recentFinalizedGamesStore.ts
init_define_import_meta_env();

// ../grarf/desktop/node_modules/zustand/esm/vanilla.mjs
init_define_import_meta_env();
var createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
var createStore = ((createState) => createState ? createStoreImpl(createState) : createStoreImpl);

// ../grarf/desktop/node_modules/zustand/esm/react.mjs
init_define_import_meta_env();
var import_react3 = __toESM(require_react(), 1);
var identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = import_react3.default.useSyncExternalStore(
    api.subscribe,
    import_react3.default.useCallback(() => selector(api.getState()), [api, selector]),
    import_react3.default.useCallback(() => selector(api.getInitialState()), [api, selector])
  );
  import_react3.default.useDebugValue(slice);
  return slice;
}
var createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
var create = ((createState) => createState ? createImpl(createState) : createImpl);

// ../grarf/desktop/src/lib/finalizedGameRetention/harvestFinalizedOnIngestTransition.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/finalizedGameRetention/retentionUtils.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/finalizedGameRetention/constants.ts
init_define_import_meta_env();
var FINALIZED_RETENTION_TTL_MS = 24 * 60 * 60 * 1e3;
var LIVE_RECENCY_MAX_INGEST_CYCLES = 32;
var LIVE_RECENCY_MAX_MS = 8 * 60 * 60 * 1e3;

// ../grarf/desktop/src/lib/finalizedGameRetention/retentionUtils.ts
function copyFinalizedGame(game) {
  return { ...game };
}
function resolveFinalizedRetentionExpiry(game, retainedAt) {
  const finalizedMs = game.lastUpdated?.trim() ? Date.parse(game.lastUpdated.trim()) : NaN;
  const anchor = Number.isFinite(finalizedMs) && finalizedMs > 0 ? Math.min(finalizedMs, retainedAt) : retainedAt;
  return anchor + FINALIZED_RETENTION_TTL_MS;
}
function pruneRetainedFinals(byId, now = Date.now()) {
  const next = {};
  for (const [id, entry] of Object.entries(byId)) {
    if (!entry?.game || entry.game.status !== "final") continue;
    if (typeof entry.expiresAt !== "number" || entry.expiresAt <= now) continue;
    next[id] = entry;
  }
  return next;
}
function collectAllGamesFromLeaguesForHarvest(leagues) {
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  if (!leagues) return out;
  for (const rows of Object.values(leagues)) {
    if (!rows?.length) continue;
    for (const game of rows) {
      if (seen.has(game.id)) continue;
      seen.add(game.id);
      out.push(game);
    }
  }
  return out;
}
function collectFinalGamesFromLeagues(leagues) {
  const out = [];
  for (const rows of Object.values(leagues)) {
    if (!rows?.length) continue;
    for (const game of rows) {
      if (game.status === "final") out.push(game);
    }
  }
  return out;
}

// ../grarf/desktop/src/lib/finalizedGameRetention/harvestFinalizedOnIngestTransition.ts
function collectAllGamesFromLeagues(leagues) {
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  if (!leagues) return out;
  for (const rows of Object.values(leagues)) {
    if (!rows?.length) continue;
    for (const game of rows) {
      if (seen.has(game.id)) continue;
      seen.add(game.id);
      out.push(game);
    }
  }
  return out;
}
function classifyTransition(prevStatus, incomingStatus) {
  if (incomingStatus === "final") {
    if (prevStatus && prevStatus !== "final") return "status_transition";
    return "incoming_final";
  }
  if (prevStatus === "final") return "prev_final";
  return null;
}
function collectFinalizedHarvestCandidates(previousGames, incomingGames, ctx = { ingestCycle: 0 }) {
  const prevById = /* @__PURE__ */ new Map();
  for (const game of previousGames) prevById.set(game.id, game);
  const incomingById = /* @__PURE__ */ new Map();
  for (const game of incomingGames) incomingById.set(game.id, game);
  const out = /* @__PURE__ */ new Map();
  const add = (game, reason) => {
    if (game.status === "postponed") return;
    out.set(game.id, { game: copyFinalizedGame(game), reason });
  };
  for (const [id, prev] of prevById) {
    const incoming = incomingById.get(id);
    if (incoming) {
      const reason = classifyTransition(prev.status, incoming.status);
      if (reason) add(incoming, reason);
      continue;
    }
    if (prev.status === "final") {
      add(prev, "prev_final");
    }
  }
  for (const incoming of incomingById.values()) {
    if (incoming.status !== "final") continue;
    if (out.has(incoming.id)) continue;
    add(incoming, "incoming_final");
  }
  return [...out.values()];
}
function collectFinalizedHarvestFromIngestTransition(input) {
  const incomingGames = collectAllGamesFromLeagues(input.incomingLeagues);
  const candidates = collectFinalizedHarvestCandidates(input.previousGames, incomingGames, {
    ingestCycle: input.ingestCycle,
    liveRecencyById: input.liveRecencyById,
    alreadyRetainedIds: input.alreadyRetainedIds
  });
  return candidates.map((c) => c.game);
}

// ../grarf/desktop/src/lib/finalizedGameRetention/liveRecency.ts
init_define_import_meta_env();
function recordLiveObservations(byId, games, ingestCycle, now = Date.now()) {
  const next = { ...byId };
  for (const raw of games) {
    if (raw.status !== "live") continue;
    next[raw.id] = {
      game: copyFinalizedGame(raw),
      lastLiveIngestCycle: ingestCycle,
      lastLiveAtMs: now
    };
  }
  return next;
}
function pruneLiveRecency(byId, ingestCycle, now = Date.now()) {
  const next = {};
  for (const [id, entry] of Object.entries(byId)) {
    if (ingestCycle - entry.lastLiveIngestCycle > LIVE_RECENCY_MAX_INGEST_CYCLES) continue;
    if (now - entry.lastLiveAtMs > LIVE_RECENCY_MAX_MS) continue;
    next[id] = entry;
  }
  return next;
}

// ../grarf/desktop/src/store/recentFinalizedGamesStore.ts
var STORAGE_KEY = "grarf-recent-finalized-games-v2";
function upsertFinals(byId, games, now) {
  const next = { ...byId };
  for (const raw of games) {
    if (raw.status !== "final") continue;
    const game = copyFinalizedGame(raw);
    const existing = next[game.id];
    if (existing) {
      next[game.id] = { ...existing, game };
      continue;
    }
    const retainedAt = now;
    next[game.id] = {
      game,
      retainedAt,
      expiresAt: resolveFinalizedRetentionExpiry(game, retainedAt)
    };
  }
  return next;
}
function readPersistedById() {
  if (typeof sessionStorage === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return pruneRetainedFinals(parsed);
  } catch {
    return {};
  }
}
function persistById(byId) {
  if (typeof sessionStorage === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(byId));
  } catch {
  }
}
function commitById(byId, now = Date.now()) {
  const pruned = pruneRetainedFinals(byId, now);
  persistById(pruned);
  return pruned;
}
var useRecentFinalizedGamesStore = create((set, get) => ({
  byId: readPersistedById(),
  liveRecencyById: {},
  mergeFinalizedGames: (games, now = Date.now()) => {
    const merged = upsertFinals(get().byId, games, now);
    const byId = commitById(merged, now);
    set({ byId });
  },
  harvestOnIngestTransition: (input) => {
    const state = get();
    const incomingGames = collectAllGamesFromLeaguesForHarvest(input.incomingLeagues);
    const liveRecencyById = pruneLiveRecency(
      recordLiveObservations(
        state.liveRecencyById,
        [...input.previousGames, ...incomingGames],
        input.ingestCycle
      ),
      input.ingestCycle
    );
    const games = collectFinalizedHarvestFromIngestTransition({
      previousGames: input.previousGames,
      incomingLeagues: input.incomingLeagues,
      ingestCycle: input.ingestCycle,
      liveRecencyById,
      alreadyRetainedIds: new Set(Object.keys(state.byId))
    });
    if (games.length > 0) get().mergeFinalizedGames(games);
    set({ liveRecencyById });
  },
  harvestFinalizedFromLeagues: (leagues) => {
    get().mergeFinalizedGames(collectFinalGamesFromLeagues(leagues));
  },
  getRetainedForLeague: (league) => {
    const now = Date.now();
    const out = [];
    for (const entry of Object.values(get().byId)) {
      if (entry.expiresAt <= now || entry.game.status !== "final") continue;
      if ((entry.game.league ?? "MLB") !== league) continue;
      out.push(entry.game);
    }
    return out;
  },
  getAllRetained: () => {
    const now = Date.now();
    return Object.values(get().byId).filter((e) => e.expiresAt > now && e.game.status === "final").map((e) => e.game);
  },
  pruneExpired: (now = Date.now()) => {
    const pruned = commitById(get().byId, now);
    if (pruned !== get().byId) set({ byId: pruned });
  }
}));
if (typeof window !== "undefined") {
  const w = window;
  w.__grarfRecentFinalizedGames = () => {
    const byId = useRecentFinalizedGamesStore.getState().byId;
    const entries = Object.values(byId);
    const byLeague = {};
    for (const key of getGamesColumnLeagueOrder()) {
      byLeague[key] = useRecentFinalizedGamesStore.getState().getRetainedForLeague(key).length;
    }
    return { count: entries.length, byLeague, entries };
  };
}

// ../grarf/desktop/src/lib/gamesSpine/wimbledonGamesSpinePresentation.ts
var WIMBLEDON_MEN_GAMES_SPINE_LEAGUE = "WIMBLEDON_MEN";
var WIMBLEDON_WOMEN_GAMES_SPINE_LEAGUE = "WIMBLEDON_WOMEN";
function resolveWimbledonGamesSpineSourceLeague(league) {
  if (league === WIMBLEDON_MEN_GAMES_SPINE_LEAGUE) return "ATP";
  if (league === WIMBLEDON_WOMEN_GAMES_SPINE_LEAGUE) return "WTA";
  return null;
}
function filterGamesForWimbledonGamesSpineSection(league, games) {
  if (!isGrarfWebRenderer()) return [...games];
  const sourceLeague = resolveWimbledonGamesSpineSourceLeague(league);
  if (sourceLeague) {
    return games.filter((game) => game.league === sourceLeague && isWimbledonTennisGame(game));
  }
  if (league === "ATP" || league === "WTA") {
    return games.filter((game) => !isWimbledonTennisGame(game));
  }
  return [...games];
}

// ../grarf/desktop/src/lib/bestGameRightNow/leagueImportanceV1.ts
var GOLF_GAME_IMPORTANCE_V1 = {
  US_OPEN: 98.5,
  PGA_MAJOR: 71,
  PGA: resolveLeagueImportanceScore("PGA"),
  LPGA_MAJOR: resolveLeagueImportanceScore("LPGA") + 1,
  LPGA: resolveLeagueImportanceScore("LPGA"),
  CHAMPIONS: resolveLeagueImportanceScore("CHAMPIONS"),
  LIV: resolveLeagueImportanceScore("LIV")
};
function resolveLeagueImportanceV1ForLeagueKey(leagueKey, _context) {
  return resolveLeagueImportanceScore(leagueKey);
}

// ../grarf/desktop/src/lib/gamesSpine/mergeGamesSpineSectionsByPriority.ts
function normalizePlacementLabel(value) {
  return value.trim().toLowerCase();
}
function operationalKeyMatchesAnchor(leagueKey, anchor) {
  const normalized = normalizePlacementLabel(anchor);
  if (normalizePlacementLabel(leagueKey) === normalized) return true;
  return normalizePlacementLabel(resolveGamesSpineLeagueDisplayLabel(leagueKey)) === normalized;
}
function manualSectionMatchesAnchor(section, anchor) {
  const normalized = normalizePlacementLabel(anchor);
  if (normalizePlacementLabel(section.leagueKey) === normalized) return true;
  return normalizePlacementLabel(section.leagueLabel) === normalized;
}
function findVisibleAnchorIndex(sections, anchor) {
  for (let index = 0; index < sections.length; index += 1) {
    const section = sections[index];
    if (section.kind === "operational" && operationalKeyMatchesAnchor(section.leagueKey, anchor)) {
      return index;
    }
    if (section.kind === "manual" && manualSectionMatchesAnchor(section.section, anchor)) {
      return index;
    }
  }
  return -1;
}
function findOperationalOrderAnchorIndex(operationalLeagueOrder, anchor) {
  return operationalLeagueOrder.findIndex((key) => operationalKeyMatchesAnchor(key, anchor));
}
function resolveAnchorIndex(sections, operationalLeagueOrder, anchor, mode) {
  const visibleIndex = findVisibleAnchorIndex(sections, anchor);
  if (visibleIndex >= 0) {
    return mode === "before" ? visibleIndex : visibleIndex + 1;
  }
  const orderIndex = findOperationalOrderAnchorIndex(operationalLeagueOrder, anchor);
  if (orderIndex < 0) return sections.length;
  if (mode === "before") {
    for (let index = orderIndex; index < operationalLeagueOrder.length; index += 1) {
      const key = operationalLeagueOrder[index];
      const visible = sections.findIndex(
        (section) => section.kind === "operational" && section.leagueKey === key
      );
      if (visible >= 0) return visible;
    }
    return sections.length;
  }
  for (let index = orderIndex; index >= 0; index -= 1) {
    const key = operationalLeagueOrder[index];
    const visible = sections.findIndex(
      (section) => section.kind === "operational" && section.leagueKey === key
    );
    if (visible >= 0) return visible + 1;
  }
  return 0;
}
function resolveLegacyPriorityInsertionIndex(sections, leaguePriority) {
  for (let index = 0; index < sections.length; index += 1) {
    const section = sections[index];
    if (section.kind !== "operational") continue;
    const importance = resolveLeagueImportanceV1ForLeagueKey(section.leagueKey);
    if (leaguePriority > importance) return index;
  }
  return sections.length;
}
function resolveManualInsertionIndex(sections, manual, operationalLeagueOrder) {
  const insertBefore = manual.insertBeforeLeague?.trim();
  if (insertBefore) {
    return resolveAnchorIndex(sections, operationalLeagueOrder, insertBefore, "before");
  }
  const insertAfter = manual.insertAfterLeague?.trim();
  if (insertAfter) {
    return resolveAnchorIndex(sections, operationalLeagueOrder, insertAfter, "after");
  }
  if (manual.leaguePriority != null && Number.isFinite(manual.leaguePriority)) {
    return resolveLegacyPriorityInsertionIndex(sections, manual.leaguePriority);
  }
  return sections.length;
}
function mergeGamesSpineSectionsByPriority(operationalLeagueOrder, mergedLeagues, manualSections, skeletonOperationalLeagues) {
  const operationalWithGames = operationalLeagueOrder.filter((key) => {
    if (skeletonOperationalLeagues?.has(key)) return true;
    const games = mergedLeagues[key] ?? [];
    if (filterGamesSpineSlateForOperationalSportsDay(games).length > 0) return true;
    return isGrarfWebRenderer() && filterGamesSpineSlateForUpcoming(games).length > 0;
  });
  let sections = operationalWithGames.map((leagueKey) => ({
    kind: "operational",
    leagueKey
  }));
  for (const manual of manualSections) {
    const insertAt = resolveManualInsertionIndex(sections, manual, operationalLeagueOrder);
    sections = [
      ...sections.slice(0, insertAt),
      { kind: "manual", slug: manual.slug, section: manual },
      ...sections.slice(insertAt)
    ];
  }
  return sections;
}

// ../grarf/desktop/src/lib/gamesSpine/operationalManualLeagueGames.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/gamesSpine/manualTourDeFranceSpineEntry.ts
init_define_import_meta_env();
var import_react4 = __toESM(require_react(), 1);

// ../grarf/desktop/src/lib/gamesSpine/tourDeFranceOperationalSchedule.ts
init_define_import_meta_env();
function wallClockIso(date, time) {
  return `${date}T${time}:00`;
}
var resolvedStagesCache = null;
function resolveTourDeFranceStages() {
  if (resolvedStagesCache) return resolvedStagesCache;
  const tdf = resolveAggregatedTdfManualEventOverride();
  if (!tdf) {
    resolvedStagesCache = [];
    return resolvedStagesCache;
  }
  const { timeZone, stages } = tdf;
  resolvedStagesCache = stages.flatMap((stage) => {
    const startTimeMs = parseManualGamesSpineEventTimeMs(
      wallClockIso(stage.date, stage.start),
      timeZone
    );
    const endTimeMs = parseManualGamesSpineEventTimeMs(
      wallClockIso(stage.date, stage.end),
      timeZone
    );
    if (!Number.isFinite(startTimeMs) || !Number.isFinite(endTimeMs)) return [];
    return [{ ...stage, startTimeMs, endTimeMs }];
  });
  return resolvedStagesCache;
}

// ../grarf/desktop/src/lib/gamesSpine/manualTourDeFranceSpineEntry.ts
var TOUR_DE_FRANCE_GAME_ID_PREFIX = "manual-tdf-stage-";
var TOUR_DE_FRANCE_LIVE_GRACE_MS = 60 * 60 * 1e3;
function resolveTourDeFranceStageStatus(nowMs, startTimeMs, endTimeMs) {
  return resolveManualGamesSpineStatus(
    nowMs,
    startTimeMs,
    endTimeMs + TOUR_DE_FRANCE_LIVE_GRACE_MS
  );
}
function isTourDeFranceSpineGameId(gameId) {
  return gameId.startsWith(TOUR_DE_FRANCE_GAME_ID_PREFIX);
}
function resolveTourDeFranceSpineGame(stage, now) {
  const nowMs = now.getTime();
  const status = resolveTourDeFranceStageStatus(nowMs, stage.startTimeMs, stage.endTimeMs);
  const broadcasts = [...stage.broadcast];
  const eventName = `Stage ${stage.stage}`;
  return {
    id: `${TOUR_DE_FRANCE_GAME_ID_PREFIX}${stage.stage}-${stage.date}`,
    grarfGameId: `${TOUR_DE_FRANCE_GAME_ID_PREFIX}${stage.stage}-${stage.date}`,
    time: formatManualGamesSpineDisplayTime(stage.startTimeMs),
    awayTeam: eventName,
    awayRecord: "",
    homeTeam: stage.route,
    homeRecord: "",
    awayCity: "",
    homeCity: "",
    awayPitcher: "",
    awayPitcherStats: "",
    homePitcher: "",
    homePitcherStats: "",
    channels: broadcasts,
    broadcasts,
    status,
    // Live TDF stages: omit remaining-time status line — the LIVE pill is enough.
    statusLine: status === "live" ? void 0 : formatManualGamesSpineStatusLine(status, stage.startTimeMs, stage.endTimeMs, nowMs),
    startTimeMs: stage.startTimeMs,
    scheduledDateKey: stage.date,
    league: "TDF",
    lastUpdated: now.toISOString()
  };
}
function resolveTdfOperationalLeagueGames(now = /* @__PURE__ */ new Date()) {
  const operationalDateKey = getOperationalSportsDayDateKey(now);
  return resolveTourDeFranceStages().filter((stage) => stage.date === operationalDateKey).map((stage) => resolveTourDeFranceSpineGame(stage, now));
}
function refreshManualTourDeFranceSpineGameIfNeeded(game, now = /* @__PURE__ */ new Date()) {
  if (!isTourDeFranceSpineGameId(game.id)) return game;
  const resolved = resolveTourDeFranceSpineGameById(game.id, now);
  return resolved ?? game;
}
function resolveTourDeFranceSpineGameById(gameId, now = /* @__PURE__ */ new Date()) {
  if (!isTourDeFranceSpineGameId(gameId)) return void 0;
  const stageNumber = Number.parseInt(gameId.match(/manual-tdf-stage-(\d+)-/)?.[1] ?? "", 10);
  const stage = resolveTourDeFranceStages().find((entry) => entry.stage === stageNumber);
  if (!stage) return void 0;
  return resolveTourDeFranceSpineGame(stage, now);
}

// ../grarf/desktop/src/lib/gamesSpine/operationalManualLeagueGames.ts
var MANUAL_OPERATIONAL_LEAGUE_RESOLVERS = {
  WEC: resolveWecOperationalLeagueGames,
  TDF: resolveTdfOperationalLeagueGames
};
var manualOperationalCache = {
  nowBucket: -1,
  result: {}
};
var mergeOperationalCache = {
  leagues: null,
  nowBucket: -1,
  result: {}
};
function operationalNowBucket(now) {
  return Math.floor(now.getTime() / 6e4);
}
function resolveManualOperationalLeagueGames(now = /* @__PURE__ */ new Date()) {
  const nowBucket = operationalNowBucket(now);
  if (manualOperationalCache.nowBucket === nowBucket) {
    return manualOperationalCache.result;
  }
  const out = {};
  for (const [key, resolve] of Object.entries(MANUAL_OPERATIONAL_LEAGUE_RESOLVERS)) {
    if (!resolve) continue;
    const rows = resolve(now);
    if (rows.length > 0) out[key] = rows;
  }
  manualOperationalCache = { nowBucket, result: out };
  return out;
}
function mergeOperationalLeagueGames(leagues, now = /* @__PURE__ */ new Date()) {
  const nowBucket = operationalNowBucket(now);
  if (mergeOperationalCache.leagues === leagues && mergeOperationalCache.nowBucket === nowBucket) {
    return mergeOperationalCache.result;
  }
  const manual = resolveManualOperationalLeagueGames(now);
  if (Object.keys(manual).length === 0) {
    mergeOperationalCache = { leagues, nowBucket, result: leagues };
    return leagues;
  }
  const merged = { ...leagues };
  for (const [key, rows] of Object.entries(manual)) {
    const leagueKey = key;
    const existing = merged[leagueKey] ?? [];
    const seen = new Set(existing.map((g) => g.id));
    const combined = [...existing];
    for (const game of rows) {
      if (seen.has(game.id)) continue;
      seen.add(game.id);
      combined.push(game);
    }
    merged[leagueKey] = combined;
  }
  mergeOperationalCache = { leagues, nowBucket, result: merged };
  return merged;
}

// ../grarf/desktop/src/lib/gamesSpine/applyManualGameOverrides.ts
init_define_import_meta_env();
function resolveManualGameOverride(gameKey, operationalDateKey = getOperationalSportsDayDateKey()) {
  const overrides = resolveOperationsDateEntry(operationalDateKey).manualGameOverrides;
  return overrides[gameKey];
}
function resolveManualGameOverrideForGame(game, operationalDateKey = getOperationalSportsDayDateKey()) {
  return resolveManualGameOverride(game.id, operationalDateKey) ?? (game.grarfGameId ? resolveManualGameOverride(game.grarfGameId, operationalDateKey) : void 0);
}
function applyManualGameOverride(game, operationalDateKey = getOperationalSportsDayDateKey()) {
  const override = resolveManualGameOverrideForGame(game, operationalDateKey);
  if (!override) return game;
  let next = { ...game };
  if (override.streamUrl !== void 0) next.streamUrl = override.streamUrl;
  if (override.streamProvider !== void 0) next.streamProvider = override.streamProvider;
  if (override.launchMode !== void 0) next.launchMode = override.launchMode;
  if (override.channels !== void 0) next.channels = [...override.channels];
  if (override.broadcasts !== void 0) next.broadcasts = [...override.broadcasts];
  if (override.watchOptions !== void 0) next.watchOptions = [...override.watchOptions];
  const manual = next.metadata?.manualGamesSpine;
  if (manual && (override.channel !== void 0 || override.channelUrl !== void 0)) {
    next = {
      ...next,
      metadata: {
        ...next.metadata,
        manualGamesSpine: {
          ...manual,
          channel: override.channel ?? manual.channel,
          channelUrl: override.channelUrl ?? manual.channelUrl
        }
      }
    };
  }
  return next;
}

// ../grarf/desktop/src/lib/gamesSpine/resolveManualGameCardNavigationOverride.ts
init_define_import_meta_env();
function parseManualGameCardNavigationOverrideFields(source) {
  const url = source?.centerPaneUrlWhenGameCardClicked?.trim();
  if (!url) return null;
  const openInCenterPane = source.centerPane?.trim().toUpperCase() === "Y";
  const openInBrowserTab = source.browserTab?.trim().toUpperCase() === "Y";
  if (openInCenterPane === openInBrowserTab) return null;
  return { url, openInCenterPane, openInBrowserTab };
}
function resolveManualGameNavigationOverrideFields(gameKey, operationalDateKey) {
  const overrides = resolveOperationsDateEntry(operationalDateKey).manualGameOverrides;
  return overrides[gameKey];
}
function resolveEventWideNavigationOverrideFields(game, manualEventOverrides) {
  const leagueKey = game.league;
  if (!leagueKey || !(leagueKey in manualEventOverrides)) return void 0;
  return manualEventOverrides[leagueKey];
}
function resolveManualGameCardNavigationOverride(game, operationalDateKey = getOperationalSportsDayDateKey()) {
  const perGame = parseManualGameCardNavigationOverrideFields(
    resolveManualGameNavigationOverrideFields(game.id, operationalDateKey)
  ) ?? (game.grarfGameId ? parseManualGameCardNavigationOverrideFields(
    resolveManualGameNavigationOverrideFields(game.grarfGameId, operationalDateKey)
  ) : null);
  if (perGame) return perGame;
  const entry = resolveOperationsDateEntry(operationalDateKey);
  return parseManualGameCardNavigationOverrideFields(
    resolveEventWideNavigationOverrideFields(game, entry.manualEventOverrides)
  );
}

// ../grarf/desktop/src/lib/gamesSpine/resolveGamesSpineOperationalLeagueOrder.ts
init_define_import_meta_env();
function resolveGamesSpineOperationalLeagueOrder(mergedLeagues) {
  const withGames = [];
  for (const [key, games] of Object.entries(mergedLeagues)) {
    const leagueKey = key;
    if (filterGamesSpineSlateForOperationalSportsDay(games ?? []).length > 0) {
      withGames.push(leagueKey);
      continue;
    }
    if (isGrarfWebRenderer() && filterGamesSpineSlateForUpcoming(games ?? []).length > 0) {
      withGames.push(leagueKey);
    }
  }
  return sortGrarfLeagueKeysByImportance(withGames);
}

// ../grarf/desktop/src/lib/gamesSpine/resolveViewLeagueGames.ts
init_define_import_meta_env();
function mergeGamesSpineLeagueGamesById(...groups) {
  const byId = /* @__PURE__ */ new Map();
  for (const group of groups) {
    for (const game of group) {
      byId.set(game.id, game);
    }
  }
  return [...byId.values()];
}
function resolveGamesSpineSelectedDateKey(selectedDate, now = /* @__PURE__ */ new Date()) {
  const operationalSportsDayKey = getOperationalSportsDayDateKey(now);
  if (selectedDate === operationalSportsDayKey) return operationalSportsDayKey;
  const calendarTodayCentral = getOperationalCalendarDateKey(
    now,
    resolveOperationalSlateTimeZone()
  );
  if (selectedDate === calendarTodayCentral) return operationalSportsDayKey;
  if (!isGrarfWebRenderer()) return selectedDate;
  return selectedDate;
}
function isSelectedDateOperationalSportsDay(selectedDate, now = /* @__PURE__ */ new Date()) {
  return resolveGamesSpineSelectedDateKey(selectedDate, now) === getOperationalSportsDayDateKey(now);
}
function resolveViewLeagueGames(league, selectedDate, liveLeagues, scheduleByDate) {
  const sourceLeague = resolveWimbledonGamesSpineSourceLeague(league) ?? league;
  const mergedLeagues = mergeOperationalLeagueGames(liveLeagues);
  const dateKey = resolveGamesSpineSelectedDateKey(selectedDate);
  let games;
  if (isSelectedDateOperationalSportsDay(dateKey)) {
    const liveGames = mergedLeagues[sourceLeague] ?? [];
    if (!isGrarfWebRenderer()) {
      games = liveGames;
    } else {
      const now = /* @__PURE__ */ new Date();
      const operationalSportsDayKey = getOperationalSportsDayDateKey(now);
      const operationalSportsDayUpcomingKey = getOperationalSportsDayTomorrowDateKey(now);
      const fromOperationalSportsDaySchedule = scheduleByDate[operationalSportsDayKey]?.[sourceLeague] ?? [];
      const fromOperationalSportsDayUpcomingSchedule = scheduleByDate[operationalSportsDayUpcomingKey]?.[sourceLeague] ?? [];
      games = mergeGamesSpineLeagueGamesById(
        liveGames,
        fromOperationalSportsDaySchedule,
        fromOperationalSportsDayUpcomingSchedule
      );
    }
  } else {
    games = scheduleByDate[dateKey]?.[sourceLeague] ?? [];
  }
  return filterGamesForWimbledonGamesSpineSection(league, games);
}

// ../grarf/desktop/src/lib/operations/buildOperationsDateSnapshot.ts
function resolveSyntheticNowForOperationalDate(operationalDateKey) {
  return /* @__PURE__ */ new Date(`${operationalDateKey}T12:00:00`);
}
function resolveBundledManualSpineLeagueKeys(operationalDateKey) {
  const entry = resolveOperationsDateEntry(operationalDateKey);
  const keys = /* @__PURE__ */ new Set();
  for (const value of Object.values(entry.manualEventOverrides)) {
    if (value && typeof value === "object" && "games" in value && Array.isArray(value.games)) {
      const league = "league" in value ? String(value.league ?? "").trim().toLowerCase() : "";
      if (league) keys.add(league);
    }
  }
  return keys;
}
function resolveFeaturedRankByGameKey(operationalDateKey) {
  const { selections } = resolveOperationsDateEntry(operationalDateKey).featuredGames;
  const out = /* @__PURE__ */ new Map();
  for (const row of selections) {
    const gameKey = row.gameKey.trim();
    if (!gameKey) continue;
    out.set(gameKey, Math.round(row.rank));
  }
  return out;
}
function resolveOperationsSnapshotGameSource(game, bundledManualLeagueKeys) {
  if (isTourDeFranceSpineGameId(game.id)) return "adjunct_tdf";
  if (isManualLeMans2026GameId(game.id)) return "adjunct_wec";
  const manualSpine = game.metadata?.manualGamesSpine;
  if (manualSpine || game.id.startsWith("manual-gs-")) {
    const leagueKey = manualSpine?.leagueKey?.trim().toLowerCase() ?? "";
    if (leagueKey && bundledManualLeagueKeys.has(leagueKey)) {
      return "manual_spine_bundled";
    }
    return "manual_spine_kv";
  }
  return "ingest";
}
function resolveSnapshotEndTimeMs(game) {
  const manual = game.metadata?.manualGamesSpine;
  if (manual?.endTimeIso && manual.sourceTimeZone) {
    const endMs = parseManualGamesSpineEventTimeMs(manual.endTimeIso, manual.sourceTimeZone);
    if (endMs != null && Number.isFinite(endMs)) return endMs;
  }
  return void 0;
}
function resolveSnapshotEventName(game) {
  const manualEventName = game.metadata?.manualGamesSpine?.eventName?.trim();
  if (manualEventName) return manualEventName;
  if (game.homeTeam.trim()) return `${game.awayTeam} @ ${game.homeTeam}`;
  if (game.awayTeam.trim()) return game.awayTeam;
  return game.id;
}
function resolveSnapshotLeagueLabel(game, leagueKey) {
  const manualLabel = game.metadata?.manualGamesSpine?.leagueLabel?.trim();
  if (manualLabel) return manualLabel;
  if (game.metadata?.leagueLabel?.trim()) return game.metadata.leagueLabel.trim();
  if (typeof game.league === "string" && game.league) {
    return resolveGamesSpineLeagueDisplayLabel(game.league);
  }
  return leagueKey;
}
function refreshOperationalSnapshotGame(game, now) {
  return refreshManualTourDeFranceSpineGameIfNeeded(
    refreshManualLeMans2026SpineGameIfNeeded(game, now),
    now
  );
}
function projectOperationsSnapshotGame(input) {
  const {
    game,
    operationalDateKey,
    sectionKind,
    spineSectionKey,
    spineSectionLabel,
    bundledManualLeagueKeys,
    featuredRankByGameKey
  } = input;
  const leagueKey = game.league ?? game.metadata?.manualGamesSpine?.leagueKey ?? spineSectionKey;
  const gameKey = game.id;
  const broadcasts = game.broadcasts.length > 0 ? [...game.broadcasts] : game.channels.length > 0 ? [...game.channels] : [];
  return {
    gameKey,
    grarfGameId: game.grarfGameId,
    league: leagueKey,
    leagueLabel: resolveSnapshotLeagueLabel(game, String(leagueKey)),
    eventName: resolveSnapshotEventName(game),
    participants: {
      away: game.awayTeam,
      home: game.homeTeam
    },
    status: game.status,
    statusLine: game.statusLine,
    startTimeMs: game.startTimeMs,
    endTimeMs: resolveSnapshotEndTimeMs(game),
    scheduledDateKey: game.scheduledDateKey,
    broadcasts,
    streamUrl: game.streamUrl,
    streamProvider: game.streamProvider,
    sectionKind,
    source: resolveOperationsSnapshotGameSource(game, bundledManualLeagueKeys),
    spineSectionKey,
    spineSectionLabel,
    featuredRank: featuredRankByGameKey.get(gameKey) ?? featuredRankByGameKey.get(game.grarfGameId ?? ""),
    manualGameOverride: resolveManualGameOverrideForGame(game, operationalDateKey),
    navigationOverride: resolveManualGameCardNavigationOverride(game, operationalDateKey),
    game
  };
}
function buildOperationalSectionGames(input) {
  const rows = resolveViewLeagueGames(
    input.leagueKey,
    input.operationalDateKey,
    input.liveLeagues,
    input.scheduleByDate
  );
  const seen = /* @__PURE__ */ new Set();
  const games = [];
  for (const row of rows) {
    if (seen.has(row.id)) continue;
    seen.add(row.id);
    const refreshed = refreshOperationalSnapshotGame(row, input.now);
    const enriched = applyManualGameOverride(refreshed, input.operationalDateKey);
    games.push(
      projectOperationsSnapshotGame({
        game: enriched,
        operationalDateKey: input.operationalDateKey,
        sectionKind: "operational",
        spineSectionKey: input.leagueKey,
        spineSectionLabel: resolveGamesSpineLeagueDisplayLabel(input.leagueKey),
        bundledManualLeagueKeys: input.bundledManualLeagueKeys,
        featuredRankByGameKey: input.featuredRankByGameKey
      })
    );
  }
  return games;
}
function buildManualSectionGames(input) {
  return input.section.games.map(
    (row) => projectOperationsSnapshotGame({
      game: row,
      operationalDateKey: input.operationalDateKey,
      sectionKind: "manual",
      spineSectionKey: input.section.slug,
      spineSectionLabel: input.section.leagueLabel,
      bundledManualLeagueKeys: input.bundledManualLeagueKeys,
      featuredRankByGameKey: input.featuredRankByGameKey
    })
  );
}
function buildOperationsDateSnapshot(input) {
  const operationalDateKey = input.operationalDateKey.trim();
  const now = input.now ?? resolveSyntheticNowForOperationalDate(operationalDateKey);
  const liveLeagues = input.liveLeagues ?? {};
  const scheduleByDate = input.scheduleByDate ?? {};
  const manualDocument = input.manualDocument ?? { leagues: [] };
  const bundledManualLeagueKeys = resolveBundledManualSpineLeagueKeys(operationalDateKey);
  const featuredRankByGameKey = resolveFeaturedRankByGameKey(operationalDateKey);
  const mergedLeagues = mergeOperationalLeagueGames(liveLeagues, now);
  const spineLeagueOrder = resolveGamesSpineOperationalLeagueOrder(mergedLeagues);
  const manualSections = convertManualGamesSpineDocument(manualDocument, now, operationalDateKey);
  const spineSections = mergeGamesSpineSectionsByPriority(
    spineLeagueOrder.length > 0 ? spineLeagueOrder : getGamesColumnLeagueOrder(),
    mergedLeagues,
    manualSections
  );
  const sections = [];
  const gamesByKey = {};
  for (const section of spineSections) {
    if (section.kind === "operational") {
      const games2 = buildOperationalSectionGames({
        leagueKey: section.leagueKey,
        operationalDateKey,
        liveLeagues,
        scheduleByDate,
        now,
        bundledManualLeagueKeys,
        featuredRankByGameKey
      });
      if (games2.length === 0) continue;
      sections.push({
        kind: "operational",
        sectionKey: section.leagueKey,
        sectionLabel: resolveGamesSpineLeagueDisplayLabel(section.leagueKey),
        games: games2
      });
      for (const game of games2) gamesByKey[game.gameKey] = game;
      continue;
    }
    const games = buildManualSectionGames({
      section: section.section,
      operationalDateKey,
      bundledManualLeagueKeys,
      featuredRankByGameKey
    });
    if (games.length === 0) continue;
    sections.push({
      kind: "manual",
      sectionKey: section.section.slug,
      sectionLabel: section.section.leagueLabel,
      games
    });
    for (const game of games) gamesByKey[game.gameKey] = game;
  }
  return {
    operationalDateKey,
    assembledAt: (/* @__PURE__ */ new Date()).toISOString(),
    sections,
    gamesByKey
  };
}

// ../grarf/desktop/src/lib/operations/loadOperationsDateSnapshotInputs.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/gamesSpine/manual/gamesSpineManualApi.ts
init_define_import_meta_env();
async function fetchGamesSpineManualDocument() {
  try {
    const res = await fetch(sportscapeEditorialApiUrl("/games-spine-manual"), { method: "GET" });
    if (!res.ok) throw new Error(`games_spine_manual_load_failed_${res.status}`);
    const body = await res.json();
    return mergeBundledGamesSpineManualDocument(body.document ?? { leagues: [] });
  } catch {
    return mergeBundledGamesSpineManualDocument({ leagues: [] });
  }
}

// ../grarf/desktop/src/services/operationalIngest/enrichOperationalTransport.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/mlb/joinMlbProviderIdsClient.ts
init_define_import_meta_env();
var scheduleCache = /* @__PURE__ */ new Map();
function hasMlbGamePk(game) {
  if (typeof game.gamePk === "number" && Number.isFinite(game.gamePk) && game.gamePk > 0) {
    return true;
  }
  const mlb = game.externalIds?.mlb?.trim();
  return !!mlb && /^\d+$/.test(mlb);
}
async function fetchMlbSchedulePkMap(dateYmd) {
  const cached = scheduleCache.get(dateYmd);
  if (cached) return cached;
  const url = `https://statsapi.mlb.com/api/v1/schedule?sportId=1&date=${encodeURIComponent(dateYmd)}`;
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) {
    throw new Error(`MLB schedule ${res.status}`);
  }
  const data = await res.json();
  const map = /* @__PURE__ */ new Map();
  for (const day of data.dates ?? []) {
    for (const g of day.games ?? []) {
      const away = g?.teams?.away?.team?.name?.trim()?.toLowerCase();
      const home = g?.teams?.home?.team?.name?.trim()?.toLowerCase();
      const pk = g?.gamePk;
      if (!away || !home || pk == null) continue;
      const pkNum = Number(pk);
      if (!Number.isFinite(pkNum) || pkNum <= 0) continue;
      map.set(`${away}|${home}`, pkNum);
      map.set(`${home}|${away}`, pkNum);
    }
  }
  scheduleCache.set(dateYmd, map);
  return map;
}
function resolveJoinDateYmd(game) {
  const key = game.scheduledDateKey?.trim();
  if (key && /^\d{4}-\d{2}-\d{2}$/.test(key)) return key;
  return void 0;
}
function isMlbBucketRow(game) {
  return game.league === "MLB" || game.id.startsWith("espn-MLB-");
}
async function joinMlbProviderIdsOnGames(games) {
  const needJoin = games.filter((g) => isMlbBucketRow(g) && !hasMlbGamePk(g));
  if (needJoin.length === 0) return games;
  const dates = [
    ...new Set(
      needJoin.map(resolveJoinDateYmd).filter((d) => !!d)
    )
  ];
  if (dates.length === 0) return games;
  const pkMaps = /* @__PURE__ */ new Map();
  await Promise.all(
    dates.map(async (dateYmd) => {
      try {
        pkMaps.set(dateYmd, await fetchMlbSchedulePkMap(dateYmd));
      } catch {
      }
    })
  );
  return games.map((g) => {
    if (!isMlbBucketRow(g) || hasMlbGamePk(g)) return g;
    const dateYmd = resolveJoinDateYmd(g);
    const pkMap = dateYmd ? pkMaps.get(dateYmd) : void 0;
    const away = g.metadata?.officialAwayName?.trim()?.toLowerCase();
    const home = g.metadata?.officialHomeName?.trim()?.toLowerCase();
    const pk = away && home && pkMap ? pkMap.get(`${away}|${home}`) : void 0;
    const pkNum = pk != null && Number.isFinite(Number(pk)) ? Number(pk) : void 0;
    if (pkNum == null) return g;
    return {
      ...g,
      gamePk: pkNum,
      externalIds: {
        ...g.externalIds ?? {},
        espn: g.externalIds?.espn ?? g.espnEventId ?? null,
        mlb: String(pkNum)
      }
    };
  });
}

// ../grarf/desktop/src/lib/fotmob/enrichOperationalSnapshotFotmob.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/fotmob/enrichWorldCupGamesWithFotmobUrls.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/fotmob/buildFotmobMatchUrl.ts
init_define_import_meta_env();
function buildFotmobMatchUrl(matchId) {
  const id = String(matchId).trim();
  return `https://www.fotmob.com/match/${encodeURIComponent(id)}`;
}

// ../grarf/desktop/src/lib/fotmob/fetchFotmobWorldCupCatalog.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/fotmob/fetchFotmobMatchesByDate.ts
init_define_import_meta_env();
var FOTMOB_MATCHES_API = "https://www.fotmob.com/api/data/matches";
var LOG2 = "[FotMob]";
function isWorldCupBucket(bucket) {
  if (bucket.parentLeagueName === "World Cup") return true;
  return /^world cup/i.test(bucket.name ?? "");
}
function fotmobDateKeyFromMs(ms) {
  if (!Number.isFinite(ms)) return null;
  const d = new Date(ms);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}${m}${day}`;
}
function fotmobDateKeyFromScheduledDateKey(key) {
  const trimmed = key?.trim() ?? "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return null;
  return trimmed.replace(/-/g, "");
}
async function fetchFotmobWorldCupMatchesByDate(dateKey) {
  const normalized = dateKey.trim();
  if (!/^\d{8}$/.test(normalized)) return [];
  try {
    const res = await fetch(`${FOTMOB_MATCHES_API}?date=${encodeURIComponent(normalized)}`, {
      headers: { Accept: "application/json" },
      cache: "no-store"
    });
    if (!res.ok) return [];
    const payload = await res.json();
    const leagues = payload.leagues ?? [];
    const matches = [];
    for (const bucket of leagues) {
      if (!isWorldCupBucket(bucket)) continue;
      for (const match of bucket.matches ?? []) {
        if (typeof match?.id === "number" && match.home?.name && match.away?.name) {
          matches.push(match);
        }
      }
    }
    return matches;
  } catch (error) {
    if (define_import_meta_env_default.DEV) {
      console.warn(`${LOG2} matches fetch failed for ${normalized}`, error);
    }
    return [];
  }
}

// ../grarf/desktop/src/lib/fotmob/fetchFotmobWorldCupCatalog.ts
function dateKeysForGame(game) {
  const keys = /* @__PURE__ */ new Set();
  const fromMs = game.startTimeMs != null ? fotmobDateKeyFromMs(game.startTimeMs) : null;
  const fromScheduled = fotmobDateKeyFromScheduledDateKey(game.scheduledDateKey);
  if (fromMs) keys.add(fromMs);
  if (fromScheduled) keys.add(fromScheduled);
  if (fromMs && game.startTimeMs != null) {
    const ms = game.startTimeMs;
    const prev = fotmobDateKeyFromMs(ms - 24 * 60 * 60 * 1e3);
    const next = fotmobDateKeyFromMs(ms + 24 * 60 * 60 * 1e3);
    if (prev) keys.add(prev);
    if (next) keys.add(next);
  }
  return [...keys];
}
async function fetchFotmobWorldCupCatalog(games) {
  const dateKeys = /* @__PURE__ */ new Set();
  for (const game of games) {
    if (game.league !== "WORLDCUP") continue;
    for (const key of dateKeysForGame(game)) {
      dateKeys.add(key);
    }
  }
  if (dateKeys.size === 0) return [];
  const byId = /* @__PURE__ */ new Map();
  await Promise.all(
    [...dateKeys].map(async (dateKey) => {
      const matches = await fetchFotmobWorldCupMatchesByDate(dateKey);
      for (const match of matches) {
        byId.set(match.id, match);
      }
    })
  );
  return [...byId.values()];
}

// ../grarf/desktop/src/lib/fotmob/matchFotmobWorldCupMatch.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/foxWorldCup/teamSlugUtils.ts
init_define_import_meta_env();
var SLUG_STOP_WORDS = /* @__PURE__ */ new Set(["and"]);
var FOX_TEAM_SLUG_OVERRIDES = {
  turkey: "turkiye",
  turkiye: "turkiye",
  "united states": "usa",
  usa: "usa",
  "south africa": "south-africa",
  "south korea": "south-korea",
  "ivory coast": "ivory-coast",
  "bosnia and herzegovina": "bosnia-and-herzegovina",
  "bosnia herzegovina": "bosnia-and-herzegovina",
  "cape verde": "cape-verde",
  curacao: "curacao",
  "czech republic": "czechia"
};
function teamNameToFoxSlug(name) {
  const normalized = normalizeTennisText(name);
  if (!normalized) return "";
  const override = FOX_TEAM_SLUG_OVERRIDES[normalized];
  if (override) return override;
  return normalized.replace(/\s+/g, "-");
}
var FOX_MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
var FOX_WORLD_CUP_SCHEDULE_TIMEZONE = "America/New_York";
var LOG3 = "[FoxWorldCup]";
function foxDateSlugFromCalendarParts(year, monthIndex, day) {
  const month = FOX_MONTHS[monthIndex];
  if (!month || !Number.isFinite(year) || !Number.isFinite(day)) return null;
  return `${month}-${day}-${year}`;
}
function calendarPartsInTimeZone3(ms, timeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric"
  }).formatToParts(new Date(ms));
  return {
    year: Number(parts.find((part) => part.type === "year")?.value),
    monthIndex: Number(parts.find((part) => part.type === "month")?.value) - 1,
    day: Number(parts.find((part) => part.type === "day")?.value)
  };
}
function formatFoxMatchHubDateSlug(isoTime) {
  const ms = Date.parse(isoTime);
  if (!Number.isFinite(ms)) return null;
  const utc = new Date(ms);
  const utcSlug = foxDateSlugFromCalendarParts(
    utc.getUTCFullYear(),
    utc.getUTCMonth(),
    utc.getUTCDate()
  );
  const machineTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const machineParts = calendarPartsInTimeZone3(ms, machineTimeZone);
  const localSlug = foxDateSlugFromCalendarParts(
    machineParts.year,
    machineParts.monthIndex,
    machineParts.day
  );
  const scheduleParts = calendarPartsInTimeZone3(ms, FOX_WORLD_CUP_SCHEDULE_TIMEZONE);
  const generatedSlug = foxDateSlugFromCalendarParts(
    scheduleParts.year,
    scheduleParts.monthIndex,
    scheduleParts.day
  );
  if (define_import_meta_env_default.DEV) {
    console.log(
      `${LOG3} match hub date slug
raw match timestamp=${isoTime}
timezone=${FOX_WORLD_CUP_SCHEDULE_TIMEZONE}
UTC date=${utcSlug}
local date=${localSlug}
generated FOX slug date=${generatedSlug}`
    );
  }
  return generatedSlug;
}
function formatFoxGroupSlug(gameNotes) {
  const match = gameNotes?.trim().match(/\bGROUP\s+([A-Z])\b/i);
  if (!match?.[1]) return null;
  return `group-${match[1].toLowerCase()}`;
}
function tokenSetFromFoxTeamSlug(slug) {
  const normalized = slug.trim().toLowerCase();
  if (normalized === "turkiye") {
    return /* @__PURE__ */ new Set(["turkiye", "turkey"]);
  }
  if (normalized === "usa") {
    return /* @__PURE__ */ new Set(["usa", "united", "states"]);
  }
  if (normalized === "ivory-coast") {
    return /* @__PURE__ */ new Set(["ivory", "coast", "ivoire"]);
  }
  const tokens = normalized.replace(/-/g, " ").split(" ").map((part) => part.trim()).filter((part) => part.length >= 2 && !SLUG_STOP_WORDS.has(part));
  if (tokens.length === 0) return /* @__PURE__ */ new Set();
  return new Set(tokens);
}
function gameTeamTokenSets(game) {
  const away = tokenSetFromLabel(game.metadata?.officialAwayName || game.awayTeam || "");
  const home = tokenSetFromLabel(game.metadata?.officialHomeName || game.homeTeam || "");
  return [away, home];
}
function scoreFoxWorldCupTeams(gameAway, gameHome, eventAwaySlug, eventHomeSlug) {
  const eventAway = tokenSetFromFoxTeamSlug(eventAwaySlug);
  const eventHome = tokenSetFromFoxTeamSlug(eventHomeSlug);
  const direct = tokenOverlapScore(gameAway, eventAway) + tokenOverlapScore(gameHome, eventHome);
  const swapped = tokenOverlapScore(gameAway, eventHome) + tokenOverlapScore(gameHome, eventAway);
  return Math.max(direct, swapped) / 2;
}

// ../grarf/desktop/src/lib/fotmob/matchFotmobWorldCupMatch.ts
var MIN_TEAM_SCORE = 0.55;
var MIN_TOTAL_SCORE2 = 0.62;
var MAX_KICKOFF_DELTA_MS = 18 * 60 * 60 * 1e3;
function isWorldCupGame(game) {
  return game.league === "WORLDCUP";
}
function kickoffScore(game, match) {
  const gameMs = game.startTimeMs;
  const matchMs = Date.parse(match.status?.utcTime ?? "");
  if (!Number.isFinite(gameMs) || !Number.isFinite(matchMs)) return 1;
  const delta = Math.abs(gameMs - matchMs);
  if (delta > MAX_KICKOFF_DELTA_MS) return 0;
  return 1 - Math.min(delta / (6 * 60 * 60 * 1e3), 1) * 0.25;
}
function teamScore(game, match) {
  const [gameAway, gameHome] = gameTeamTokenSets(game);
  const matchAway = tokenSetFromLabel(match.away.name);
  const matchHome = tokenSetFromLabel(match.home.name);
  const direct = tokenOverlapScore(gameAway, matchAway) + tokenOverlapScore(gameHome, matchHome);
  const swapped = tokenOverlapScore(gameAway, matchHome) + tokenOverlapScore(gameHome, matchAway);
  return Math.max(direct, swapped) / 2;
}
function scoreFotmobMatch(game, match) {
  const teams = teamScore(game, match);
  if (teams < MIN_TEAM_SCORE) return 0;
  const kickoff = kickoffScore(game, match);
  if (kickoff <= 0) return 0;
  return teams * kickoff;
}
function matchFotmobWorldCupMatch(game, catalog) {
  if (!isWorldCupGame(game)) return null;
  if (catalog.length === 0) return null;
  let best = null;
  let bestScore = 0;
  for (const candidate of catalog) {
    const score = scoreFotmobMatch(game, candidate);
    if (score > bestScore) {
      bestScore = score;
      best = candidate;
    }
  }
  if (!best || bestScore < MIN_TOTAL_SCORE2) return null;
  return best;
}

// ../grarf/desktop/src/lib/fotmob/enrichWorldCupGamesWithFotmobUrls.ts
var LOG4 = "[FotMob]";
function isWorldCupRow(game) {
  return game.league === "WORLDCUP";
}
async function enrichWorldCupGamesWithFotmobUrls(games) {
  const worldCupRows = games.filter(isWorldCupRow);
  if (worldCupRows.length === 0) return games;
  let catalog;
  try {
    catalog = await fetchFotmobWorldCupCatalog(worldCupRows);
  } catch (error) {
    if (define_import_meta_env_default.DEV) {
      console.warn(`${LOG4} catalog fetch failed`, error);
    }
    return games;
  }
  if (catalog.length === 0) return games;
  let matched = 0;
  const out = games.map((game) => {
    if (!isWorldCupRow(game)) return game;
    const fotmobMatch = matchFotmobWorldCupMatch(game, catalog);
    if (!fotmobMatch) return game;
    matched += 1;
    const matchId = String(fotmobMatch.id);
    return {
      ...game,
      externalIds: {
        ...game.externalIds,
        fotmob: matchId
      },
      metadata: {
        ...game.metadata,
        fotmobMatchUrl: buildFotmobMatchUrl(matchId)
      }
    };
  });
  if (define_import_meta_env_default.DEV && matched > 0) {
    console.log(`${LOG4} matched ${matched} World Cup row(s)`, { catalogSize: catalog.length });
  }
  return out;
}

// ../grarf/desktop/src/lib/fotmob/enrichOperationalSnapshotFotmob.ts
async function enrichOperationalSnapshotFotmob(transport) {
  const rows = transport.leagues.WORLDCUP;
  if (!Array.isArray(rows) || rows.length === 0) return transport;
  const enriched = await enrichWorldCupGamesWithFotmobUrls(rows);
  if (!enriched.some((row, index) => row !== rows[index])) return transport;
  return {
    ...transport,
    leagues: {
      ...transport.leagues,
      WORLDCUP: enriched
    }
  };
}

// ../grarf/desktop/src/lib/foxWorldCup/enrichOperationalSnapshotFoxWorldCup.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/foxWorldCup/enrichWorldCupGamesWithFoxStreams.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/foxWorldCup/fetchFoxWorldCupEventCatalog.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/foxWorldCup/discoverFoxWorldCupDetailUrls.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/foxWorldCup/parseFoxWorldCupEvent.ts
init_define_import_meta_env();
var FOX_EVENT_BASE = "https://www.fox.com";
var FOX_EVENT_PATH_RE = /detail\/event\/([a-f0-9-]{36})\/(fifa-world-cup-\d{4}-[a-z0-9-]+)/i;
function buildFoxWorldCupStreamUrl(eventId, slug) {
  return `${FOX_EVENT_BASE}/detail/event/${eventId}/${slug}`;
}
function parseFoxWorldCupEventPath(pathOrUrl) {
  const trimmed = pathOrUrl.trim();
  if (!trimmed) return null;
  const path = trimmed.replace(/^https?:\/\/(?:www\.)?fox\.com\/?/i, "");
  const match = path.match(FOX_EVENT_PATH_RE);
  if (!match) return null;
  const eventId = match[1];
  const slug = match[2].toLowerCase();
  const matchup = slug.replace(/^fifa-world-cup-\d{4}-/i, "");
  const vsIndex = matchup.indexOf("-vs-");
  if (vsIndex < 0) return null;
  const homeTeamSlug = matchup.slice(0, vsIndex);
  const awayTeamSlug = matchup.slice(vsIndex + 4);
  if (!homeTeamSlug || !awayTeamSlug) return null;
  return {
    eventId,
    streamUrl: buildFoxWorldCupStreamUrl(eventId, slug),
    eventTitle: slug.replace(/-/g, " "),
    homeTeamSlug,
    awayTeamSlug,
    tournamentName: "FIFA World Cup"
  };
}

// ../grarf/desktop/src/lib/foxWorldCup/discoverFoxWorldCupDetailUrls.ts
var FOX_EVENT_BASE2 = "https://www.fox.com";
var FETCH_TIMEOUT_MS2 = 1e4;
var MAX_UUID_PROBES = 24;
var HTML_HEADERS = {
  Accept: "text/html,application/xhtml+xml",
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
};
function unescapeFoxEmbeddedHtml(html) {
  return html.replace(/\\u003c/gi, "<").replace(/\\u003e/gi, ">").replace(/\\\//g, "/").replace(/\\"/g, '"');
}
function extractDetailEventPaths(html) {
  const found = /* @__PURE__ */ new Set();
  const sources = [html, unescapeFoxEmbeddedHtml(html)];
  const re = /detail\/event\/[a-f0-9-]{36}\/fifa-world-cup-\d{4}-[a-z0-9-]+/gi;
  for (const source of sources) {
    for (const match of source.matchAll(re)) found.add(match[0].toLowerCase());
  }
  return [...found];
}
function extractEventDetailUuids(html) {
  const found = /* @__PURE__ */ new Set();
  const sources = [html, unescapeFoxEmbeddedHtml(html)];
  const re = /product\/page\/v1\/event\/detail\/([a-f0-9-]{36})/gi;
  for (const source of sources) {
    for (const match of source.matchAll(re)) found.add(match[1].toLowerCase());
  }
  return [...found];
}
async function fetchFoxHtml(url) {
  const res = await fetch(url, {
    headers: HTML_HEADERS,
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS2)
  });
  if (!res.ok) throw new Error(`FOX page fetch failed: ${res.status} ${url}`);
  return res.text();
}
async function resolveSlugForEventUuid(uuid) {
  try {
    const html = await fetchFoxHtml(`${FOX_EVENT_BASE2}/detail/event/${uuid}`);
    const match = html.match(/fifa-world-cup-\d{4}-[a-z0-9-]+-vs-[a-z0-9-]+/i);
    return match?.[0].toLowerCase() ?? null;
  } catch {
    return null;
  }
}
async function discoverFoxWorldCupDetailUrls(htmlSources) {
  const bySlug = /* @__PURE__ */ new Map();
  for (const html of htmlSources) {
    for (const path of extractDetailEventPaths(html)) {
      const parsed = parseFoxWorldCupEventPath(path);
      if (parsed) bySlug.set(`${parsed.homeTeamSlug}-vs-${parsed.awayTeamSlug}`, parsed);
    }
  }
  const probeUuids = /* @__PURE__ */ new Set();
  for (const html of htmlSources) {
    for (const uuid of extractEventDetailUuids(html)) {
      if (probeUuids.size >= MAX_UUID_PROBES) break;
      probeUuids.add(uuid);
    }
  }
  let probed = 0;
  for (const uuid of probeUuids) {
    if (probed >= MAX_UUID_PROBES) break;
    probed += 1;
    const slug = await resolveSlugForEventUuid(uuid);
    if (!slug) continue;
    const matchup = slug.replace(/^fifa-world-cup-\d{4}-/i, "");
    const vsIndex = matchup.indexOf("-vs-");
    if (vsIndex < 0) continue;
    const homeTeamSlug = matchup.slice(0, vsIndex);
    const awayTeamSlug = matchup.slice(vsIndex + 4);
    if (!homeTeamSlug || !awayTeamSlug) continue;
    const key = `${homeTeamSlug}-vs-${awayTeamSlug}`;
    if (bySlug.has(key)) continue;
    bySlug.set(key, {
      eventId: uuid,
      streamUrl: buildFoxWorldCupStreamUrl(uuid, slug),
      eventTitle: slug.replace(/-/g, " "),
      homeTeamSlug,
      awayTeamSlug,
      tournamentName: "FIFA World Cup"
    });
  }
  return [...bySlug.values()];
}

// ../grarf/desktop/src/lib/foxWorldCup/fetchFoxWorldCupBifrostCatalog.ts
init_define_import_meta_env();
var BIFROST_API_KEY = "jE7yBJVRNAwdDesMgTzTXUUSx1It41Fq";
var WORLD_CUP_GROUP_ID = "12";
var FETCH_TIMEOUT_MS3 = 15e3;
function parseFoxHubStreamUrlFromSponsorship(sponsorship) {
  const raw = sponsorship?.url?.trim();
  if (!raw) return null;
  try {
    const parsed = new URL(raw);
    if (!parsed.hostname.replace(/^www\./, "").endsWith("fox.com")) return null;
    const path = parsed.pathname.replace(/\/$/, "");
    if (!path.includes("/soccer/fifa-world-cup/")) return null;
    return `https://www.fox.com${path}`;
  } catch {
    return null;
  }
}
function isFoxTvStation(station) {
  const normalized = station?.trim().toUpperCase();
  return normalized === "FOX" || normalized === "FS1";
}
function buildMatchHubStreamUrl(homeSlug, awaySlug, eventTime, gameNotes) {
  const dateSlug = formatFoxMatchHubDateSlug(eventTime);
  const groupSlug = formatFoxGroupSlug(gameNotes);
  if (!dateSlug || !groupSlug) return null;
  return `https://www.fox.com/soccer/fifa-world-cup/${homeSlug}-vs-${awaySlug}-${dateSlug}-${groupSlug}`;
}
function parseBifrostEvent(event) {
  if (!isFoxTvStation(event.tvStation)) return null;
  const homeName = event.upperTeam?.longName?.trim();
  const awayName = event.lowerTeam?.longName?.trim();
  const eventTime = event.eventTime?.trim();
  if (!homeName || !awayName || !eventTime) return null;
  const homeTeamSlug = teamNameToFoxSlug(homeName);
  const awayTeamSlug = teamNameToFoxSlug(awayName);
  if (!homeTeamSlug || !awayTeamSlug) return null;
  const matchHubUrl = parseFoxHubStreamUrlFromSponsorship(event.sponsorship) ?? buildMatchHubStreamUrl(homeTeamSlug, awayTeamSlug, eventTime, event.gameNotes);
  if (!matchHubUrl) return null;
  const eventSlug = `fifa-world-cup-2026-${homeTeamSlug}-vs-${awayTeamSlug}`;
  return {
    eventId: event.id ?? `${homeTeamSlug}-vs-${awayTeamSlug}`,
    streamUrl: matchHubUrl,
    eventTitle: eventSlug.replace(/-/g, " "),
    homeTeamSlug,
    awayTeamSlug,
    tournamentName: "FIFA World Cup"
  };
}
async function fetchBifrostJson(url) {
  const res = await fetch(url, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS3)
  });
  if (!res.ok) throw new Error(`Fox Sports bifrost fetch failed: ${res.status}`);
  return await res.json();
}
async function fetchFoxWorldCupBifrostCatalog() {
  const scoresRoot = await fetchBifrostJson(
    `https://api.foxsports.com/bifrost/v1/soccer/league/scores?groupId=${WORLD_CUP_GROUP_ID}&apikey=${BIFROST_API_KEY}`
  );
  const selectionId = scoresRoot.currentSelectionId?.trim();
  if (!selectionId) return [];
  const segment = await fetchBifrostJson(
    `https://api.foxsports.com/bifrost/v1/soccer/league/scores-segment/${selectionId}?groupId=${WORLD_CUP_GROUP_ID}&apikey=${BIFROST_API_KEY}`
  );
  const bySlug = /* @__PURE__ */ new Map();
  for (const section of segment.sectionList ?? []) {
    for (const event of section.events ?? []) {
      const parsed = parseBifrostEvent(event);
      if (!parsed) continue;
      bySlug.set(`${parsed.homeTeamSlug}-vs-${parsed.awayTeamSlug}`, parsed);
    }
  }
  return [...bySlug.values()];
}

// ../grarf/desktop/src/lib/foxWorldCup/fetchFoxWorldCupEventCatalog.ts
var FOX_WORLD_CUP_HUB_URL = "https://www.fox.com/soccer/fifa-world-cup";
var FOX_SPORTS_PAGE_URL = "https://www.fox.com/sports";
var FETCH_TIMEOUT_MS4 = 15e3;
var CACHE_TTL_MS = 6e4;
var HTML_HEADERS2 = {
  Accept: "text/html,application/xhtml+xml",
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
};
var cachedCatalog = null;
var cachedAtMs = 0;
function mergeCatalogRows(rows) {
  const byTeams = /* @__PURE__ */ new Map();
  for (const row of rows) {
    const key = `${row.homeTeamSlug}-vs-${row.awayTeamSlug}`;
    const existing = byTeams.get(key);
    if (!existing) {
      byTeams.set(key, row);
      continue;
    }
    const existingIsDetail = existing.streamUrl.includes("/detail/event/");
    const nextIsDetail = row.streamUrl.includes("/detail/event/");
    if (!existingIsDetail && nextIsDetail) {
      byTeams.set(key, row);
      continue;
    }
    if (existingIsDetail && !nextIsDetail) continue;
    if (row.streamUrl.length > existing.streamUrl.length) {
      byTeams.set(key, row);
    }
  }
  return [...byTeams.values()];
}
async function fetchFoxHtml2(url) {
  const res = await fetch(url, {
    headers: HTML_HEADERS2,
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS4)
  });
  if (!res.ok) throw new Error(`FOX page fetch failed: ${res.status} ${url}`);
  return res.text();
}
async function fetchFoxWorldCupEventCatalog(now = Date.now(), forceRefresh = false) {
  if (!forceRefresh && cachedCatalog && now - cachedAtMs < CACHE_TTL_MS) {
    return cachedCatalog;
  }
  const rows = [];
  try {
    const [hubHtml, sportsHtml] = await Promise.all([
      fetchFoxHtml2(FOX_WORLD_CUP_HUB_URL),
      fetchFoxHtml2(FOX_SPORTS_PAGE_URL)
    ]);
    rows.push(...await discoverFoxWorldCupDetailUrls([hubHtml, sportsHtml]));
    for (const path of hubHtml.match(/detail\/event\/[a-f0-9-]{36}\/fifa-world-cup-\d{4}-[a-z0-9-]+/gi) ?? []) {
      const parsed = parseFoxWorldCupEventPath(path);
      if (parsed) rows.push(parsed);
    }
  } catch (error) {
    if (define_import_meta_env_default.DEV) {
      console.warn("[FoxWorldCup] hub/sports catalog fetch failed", error);
    }
  }
  try {
    rows.push(...await fetchFoxWorldCupBifrostCatalog());
  } catch (error) {
    if (define_import_meta_env_default.DEV) {
      console.warn("[FoxWorldCup] bifrost catalog fetch failed", error);
    }
  }
  cachedCatalog = mergeCatalogRows(rows);
  cachedAtMs = now;
  return cachedCatalog;
}

// ../grarf/desktop/src/lib/foxWorldCup/lookupFoxWorldCupStreamForGame.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/foxWorldCup/buildFoxWorldCupMatchHubUrlFromGame.ts
init_define_import_meta_env();
var FOX_WORLD_CUP_HUB_PREFIX = "https://www.fox.com/soccer/fifa-world-cup/";
function resolveWorldCupGroupNotes(game) {
  const fromMeta = game.metadata?.worldCupGroupNotes?.trim();
  if (fromMeta) return fromMeta;
  const fromLine = game.statusLine?.trim();
  if (fromLine && /\bgroup\s+[a-z]\b/i.test(fromLine)) return fromLine;
  return void 0;
}
function buildFoxWorldCupMatchHubUrlFromGame(game) {
  if (game.league !== "WORLDCUP") return null;
  const awayName = game.metadata?.officialAwayName?.trim() || game.awayTeam?.trim();
  const homeName = game.metadata?.officialHomeName?.trim() || game.homeTeam?.trim();
  if (!awayName || !homeName) return null;
  const homeSlug = teamNameToFoxSlug(homeName);
  const awaySlug = teamNameToFoxSlug(awayName);
  if (!homeSlug || !awaySlug) return null;
  const startMs = game.startTimeMs;
  if (startMs == null || !Number.isFinite(startMs) || startMs <= 0) return null;
  const dateSlug = formatFoxMatchHubDateSlug(new Date(startMs).toISOString());
  if (!dateSlug) return null;
  const groupSlug = formatFoxGroupSlug(resolveWorldCupGroupNotes(game));
  if (!groupSlug) return null;
  return `${FOX_WORLD_CUP_HUB_PREFIX}${homeSlug}-vs-${awaySlug}-${dateSlug}-${groupSlug}`;
}

// ../grarf/desktop/src/lib/foxWorldCup/gameHasFoxOrFs1Broadcast.ts
init_define_import_meta_env();
var FOX_BROADCAST = /\b(fox|fs1|fox\s*one)\b/i;
function gameHasFoxOrFs1Broadcast(game) {
  const hints = [...game.broadcasts ?? [], ...game.channels ?? []];
  return hints.some((label) => FOX_BROADCAST.test(label.trim()));
}

// ../grarf/desktop/src/lib/foxWorldCup/matchFoxWorldCupStream.ts
init_define_import_meta_env();
var MIN_TEAM_SCORE2 = 0.55;
var MIN_TOTAL_SCORE3 = 0.62;
function isWorldCupGame2(game) {
  return game.league === "WORLDCUP";
}
function scoreEventMatch(game, event) {
  const [gameAway, gameHome] = gameTeamTokenSets(game);
  const teams = scoreFoxWorldCupTeams(
    gameAway,
    gameHome,
    event.awayTeamSlug,
    event.homeTeamSlug
  );
  if (teams < MIN_TEAM_SCORE2) return 0;
  return teams;
}
function matchFoxWorldCupStream(game, catalog) {
  if (!isWorldCupGame2(game)) return null;
  if (game.status !== "live" && game.status !== "scheduled") return null;
  if (catalog.length === 0) return null;
  let best = null;
  let bestScore = 0;
  for (const event of catalog) {
    const score = scoreEventMatch(game, event);
    if (score > bestScore) {
      bestScore = score;
      best = event;
    }
  }
  if (!best || bestScore < MIN_TOTAL_SCORE3) return null;
  return best;
}

// ../grarf/desktop/src/lib/foxWorldCup/lookupFoxWorldCupStreamForGame.ts
function catalogKey(homeSlug, awaySlug) {
  return `${homeSlug}-vs-${awaySlug}`;
}
function buildCatalogIndex(catalog) {
  const index = /* @__PURE__ */ new Map();
  for (const row of catalog) {
    index.set(catalogKey(row.homeTeamSlug, row.awayTeamSlug), row);
    index.set(catalogKey(row.awayTeamSlug, row.homeTeamSlug), row);
  }
  return index;
}
function lookupByTeamSlugs(game, index) {
  const awayName = game.metadata?.officialAwayName?.trim() || game.awayTeam?.trim();
  const homeName = game.metadata?.officialHomeName?.trim() || game.homeTeam?.trim();
  if (!awayName || !homeName) return null;
  const awaySlug = teamNameToFoxSlug(awayName);
  const homeSlug = teamNameToFoxSlug(homeName);
  if (!awaySlug || !homeSlug) return null;
  return index.get(catalogKey(homeSlug, awaySlug)) ?? index.get(catalogKey(awaySlug, homeSlug)) ?? null;
}
function lookupFoxWorldCupStreamForGame(game, catalog) {
  if (game.league !== "WORLDCUP") return null;
  if (game.status !== "live" && game.status !== "scheduled") return null;
  if (!gameHasFoxOrFs1Broadcast(game)) return null;
  const fuzzy = matchFoxWorldCupStream(game, catalog);
  if (fuzzy) return fuzzy;
  const indexed = lookupByTeamSlugs(game, buildCatalogIndex(catalog));
  if (indexed) return indexed;
  const builtUrl = buildFoxWorldCupMatchHubUrlFromGame(game);
  if (!builtUrl) return null;
  return {
    eventId: game.espnEventId ?? game.id,
    streamUrl: builtUrl,
    eventTitle: `${game.awayTeam} vs ${game.homeTeam}`,
    homeTeamSlug: teamNameToFoxSlug(game.metadata?.officialHomeName || game.homeTeam || ""),
    awayTeamSlug: teamNameToFoxSlug(game.metadata?.officialAwayName || game.awayTeam || ""),
    tournamentName: "FIFA World Cup"
  };
}

// ../grarf/desktop/src/lib/foxWorldCup/enrichWorldCupGamesWithFoxStreams.ts
var LOG5 = "[FoxWorldCup]";
function isWorldCupRow2(game) {
  return game.league === "WORLDCUP";
}
async function enrichWorldCupGamesWithFoxStreams(games) {
  const needsFox = games.some(
    (game) => isWorldCupRow2(game) && (game.status === "live" || game.status === "scheduled")
  );
  if (!needsFox) return games;
  let catalog = [];
  try {
    catalog = await fetchFoxWorldCupEventCatalog();
  } catch (error) {
    if (define_import_meta_env_default.DEV) {
      console.warn(`${LOG5} catalog fetch failed \u2014 using deterministic FOX hub URLs`, error);
    }
  }
  let matched = 0;
  const out = games.map((game) => {
    if (!isWorldCupRow2(game)) return game;
    if (game.status !== "live" && game.status !== "scheduled") return game;
    if (game.streamUrl?.trim()) return game;
    const stream = lookupFoxWorldCupStreamForGame(game, catalog);
    if (!stream) return game;
    matched += 1;
    return {
      ...game,
      streamUrl: stream.streamUrl,
      streamProvider: "FOX Sports"
    };
  });
  if (define_import_meta_env_default.DEV && matched > 0) {
    console.log(`${LOG5} matched ${matched} World Cup row(s)`, { catalogSize: catalog.length });
  }
  return out;
}

// ../grarf/desktop/src/lib/foxWorldCup/enrichOperationalSnapshotFoxWorldCup.ts
async function enrichOperationalSnapshotFoxWorldCup(transport) {
  const rows = transport.leagues.WORLDCUP;
  if (!Array.isArray(rows) || rows.length === 0) return transport;
  const enriched = await enrichWorldCupGamesWithFoxStreams(rows);
  if (!enriched.some((row, index) => row !== rows[index])) return transport;
  return {
    ...transport,
    leagues: {
      ...transport.leagues,
      WORLDCUP: enriched
    }
  };
}

// ../grarf/desktop/src/lib/wnba/enrichOperationalSnapshotWnbaStreams.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/wnba/enrichWnbaGamesWithCanonicalGameIds.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/wnba/fetchWnbaScheduleRows.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/wnba/wnbaScheduleConfig.ts
init_define_import_meta_env();
var WNBA_GAME_CENTER_URL_PREFIX = "https://www.wnba.com/game/";
var WNBA_SCHEDULE_PROXY_PATH = "/wnba/schedule";
var ESPN_TO_WNBA_TRICODE = {
  LV: "LVA",
  LA: "LAS",
  GS: "GSV",
  NY: "NYL",
  WSH: "WAS",
  POR: "PDX"
};
function resolveWnbaScheduleSeasonYear(referenceDate = /* @__PURE__ */ new Date()) {
  return referenceDate.getFullYear();
}

// ../grarf/desktop/src/lib/wnba/fetchWnbaScheduleRows.ts
var SCHEDULE_CACHE_TTL_MS = 60 * 60 * 1e3;
var cacheBySeason = /* @__PURE__ */ new Map();
var inFlightBySeason = /* @__PURE__ */ new Map();
async function fetchWnbaScheduleRows(seasonYear = resolveWnbaScheduleSeasonYear()) {
  const cached = cacheBySeason.get(seasonYear);
  if (cached && Date.now() - cached.fetchedAtMs < SCHEDULE_CACHE_TTL_MS) {
    return cached.rows;
  }
  const inFlight2 = inFlightBySeason.get(seasonYear);
  if (inFlight2) return inFlight2;
  const request = (async () => {
    const res = await fetch(`${WNBA_SCHEDULE_PROXY_PATH}?season=${seasonYear}`, {
      headers: { Accept: "application/json" }
    });
    if (!res.ok) {
      throw new Error(`WNBA schedule proxy ${res.status}`);
    }
    const json = await res.json();
    const rows = Array.isArray(json.rows) ? json.rows : [];
    cacheBySeason.set(seasonYear, { rows, fetchedAtMs: Date.now() });
    return rows;
  })();
  inFlightBySeason.set(seasonYear, request);
  try {
    return await request;
  } finally {
    inFlightBySeason.delete(seasonYear);
  }
}

// ../grarf/desktop/src/lib/wnba/matchWnbaScheduleRow.ts
init_define_import_meta_env();
var TIME_WINDOW_MS = 3 * 60 * 60 * 1e3;
function wnbaTricodeFromEspnAbbrev(espnAbbrev) {
  const raw = String(espnAbbrev ?? "").trim().toUpperCase();
  if (!raw) return void 0;
  return ESPN_TO_WNBA_TRICODE[raw] ?? raw;
}
function teamsMatch(game, row) {
  const away = wnbaTricodeFromEspnAbbrev(game.awayTeamAbbrev);
  const home = wnbaTricodeFromEspnAbbrev(game.homeTeamAbbrev);
  if (away && home && row.awayTricode && row.homeTricode) {
    return away === row.awayTricode && home === row.homeTricode;
  }
  const awayName = String(game.awayTeam ?? "").toLowerCase();
  const homeName = String(game.homeTeam ?? "").toLowerCase();
  const rowAway = row.awayTeam.toLowerCase();
  const rowHome = row.homeTeam.toLowerCase();
  return rowAway.includes(awayName) && rowHome.includes(homeName);
}
function matchGameToWnbaScheduleRow(game, scheduleRows) {
  const gameStart = typeof game.startTimeMs === "number" ? game.startTimeMs : 0;
  if (!gameStart) return null;
  const candidates = scheduleRows.filter((row) => {
    if (!row.startMs) return false;
    if (Math.abs(row.startMs - gameStart) > TIME_WINDOW_MS) return false;
    return teamsMatch(game, row);
  });
  if (candidates.length === 0) return null;
  if (candidates.length === 1) return candidates[0];
  candidates.sort(
    (a, b) => Math.abs(a.startMs - gameStart) - Math.abs(b.startMs - gameStart)
  );
  return candidates[0];
}

// ../grarf/desktop/src/lib/wnba/enrichWnbaGamesWithCanonicalGameIds.ts
function hasCanonicalWnbaGameId(game) {
  if (game.wnbaGameId?.trim()) return true;
  if (!Array.isArray(game.content?.watchLinks)) return false;
  return game.content.watchLinks.some((link) => {
    if (!link || typeof link !== "object") return false;
    return Boolean(String(link.wnbaGameId ?? "").trim());
  });
}
function attachCanonicalWnbaGameId(game, wnbaGameId) {
  const trimmedId = wnbaGameId.trim();
  const existingWatchLinks = Array.isArray(game.content?.watchLinks) ? game.content.watchLinks : [];
  const hasWnbaIdLink = existingWatchLinks.some((link) => {
    if (!link || typeof link !== "object") return false;
    return Boolean(String(link.wnbaGameId ?? "").trim());
  });
  return {
    ...game,
    wnbaGameId: trimmedId,
    content: hasWnbaIdLink ? game.content : {
      ...game.content ?? {},
      watchLinks: [
        ...existingWatchLinks,
        {
          provider: "WNBA",
          wnbaGameId: trimmedId,
          url: `${WNBA_GAME_CENTER_URL_PREFIX}${trimmedId}`
        }
      ]
    }
  };
}
async function enrichWnbaGamesWithCanonicalGameIds(games) {
  if (!games.length) return games;
  if (games.every((game) => game.league !== "WNBA" || hasCanonicalWnbaGameId(game))) {
    return games;
  }
  let scheduleRows;
  try {
    scheduleRows = await fetchWnbaScheduleRows();
  } catch {
    return games;
  }
  if (!scheduleRows.length) return games;
  return games.map((game) => {
    if (game.league !== "WNBA" || hasCanonicalWnbaGameId(game)) return game;
    const scheduleRow = matchGameToWnbaScheduleRow(game, scheduleRows);
    if (!scheduleRow?.gameId?.trim()) return game;
    return attachCanonicalWnbaGameId(game, scheduleRow.gameId);
  });
}

// ../grarf/desktop/src/lib/wnba/enrichWnbaGamesWithPrimeVideoStreams.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/stream/streamLinkCache.ts
init_define_import_meta_env();
var STORAGE_KEY2 = "grarf-stream-links-v1";
var DEFAULT_TTL_MS = 30 * 60 * 1e3;
function cacheKey(provider, gameId) {
  return `${provider}:${gameId}`;
}
function read() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY2);
    if (!raw) return {};
    const p = JSON.parse(raw);
    return p?.entries && typeof p.entries === "object" ? p.entries : {};
  } catch {
    return {};
  }
}
function write(entries) {
  try {
    localStorage.setItem(STORAGE_KEY2, JSON.stringify({ version: 1, entries }));
  } catch {
  }
}
function getCachedStreamUrl(provider, gameId) {
  const row = read()[cacheKey(provider, gameId)];
  if (!row?.streamUrl) return null;
  if (Date.now() > Date.parse(row.expiresAt)) return null;
  console.log("[StreamCache] Using cached streamUrl", { provider, gameId });
  return row.streamUrl;
}
function setCachedStreamUrl(provider, gameId, streamUrl, ttlMs = DEFAULT_TTL_MS) {
  const now = Date.now();
  const entries = read();
  entries[cacheKey(provider, gameId)] = {
    provider,
    gameId,
    streamUrl,
    streamProvider: provider,
    resolvedAt: new Date(now).toISOString(),
    expiresAt: new Date(now + ttlMs).toISOString(),
    fetchedAt: now
  };
  write(entries);
}

// ../grarf/desktop/src/lib/wnba/fetchWnbaPrimeVideoLeaguePassCatalog.ts
init_define_import_meta_env();
var PRIME_VIDEO_WNBA_CATALOG_PROXY_PATH = "/wnba/prime-video-league-pass-catalog";
var CATALOG_CACHE_TTL_MS2 = 10 * 60 * 1e3;
var cachedCatalog2 = null;
var cachedAtMs2 = 0;
var inFlight = null;
async function fetchWnbaPrimeVideoLeaguePassCatalog() {
  const now = Date.now();
  if (cachedCatalog2 && now - cachedAtMs2 < CATALOG_CACHE_TTL_MS2) {
    return cachedCatalog2;
  }
  if (inFlight) return inFlight;
  inFlight = (async () => {
    const res = await fetch(PRIME_VIDEO_WNBA_CATALOG_PROXY_PATH, {
      headers: { Accept: "application/json" }
    });
    if (!res.ok) {
      throw new Error(`WNBA Prime Video catalog proxy ${res.status}`);
    }
    const json = await res.json();
    const events = Array.isArray(json.events) ? json.events : [];
    cachedCatalog2 = events;
    cachedAtMs2 = Date.now();
    return events;
  })();
  try {
    return await inFlight;
  } finally {
    inFlight = null;
  }
}

// ../grarf/desktop/src/lib/wnba/matchWnbaPrimeVideoLeaguePassEvent.ts
init_define_import_meta_env();
function nicknameMatchesTeam(nickname, teamName) {
  const nick = nickname.trim().toLowerCase();
  const team = teamName.trim().toLowerCase();
  if (!nick || !team) return false;
  if (team === nick) return true;
  if (team.endsWith(` ${nick}`)) return true;
  if (team.includes(nick) && nick.length >= 4) return true;
  return false;
}
function matchWnbaGameToPrimeVideoLeaguePassEvent(game, catalog) {
  if (!catalog.length) return null;
  const awayTeam = game.awayTeam?.trim() ?? "";
  const homeTeam = game.homeTeam?.trim() ?? "";
  if (!awayTeam || !homeTeam) return null;
  const candidates = catalog.filter(
    (event) => nicknameMatchesTeam(event.awayName, awayTeam) && nicknameMatchesTeam(event.homeName, homeTeam)
  );
  if (candidates.length === 0) return null;
  return candidates[candidates.length - 1] ?? null;
}
function isAmazonPrimeVideoDetailUrl(url) {
  return /amazon\.com\/gp\/video\/detail\//i.test(url.trim());
}

// ../grarf/desktop/src/lib/wnba/enrichWnbaGamesWithPrimeVideoStreams.ts
var CACHE_PROVIDER = "Prime Video";
var LOCKED_STREAM_PROVIDERS = /* @__PURE__ */ new Set(["Peacock", "ESPN+", "Paramount+", "Apple TV+"]);
function enrichGameRow(game, catalog) {
  if (game.league !== "WNBA") return game;
  if (game.streamProvider && LOCKED_STREAM_PROVIDERS.has(game.streamProvider)) return game;
  const existingUrl = game.streamUrl?.trim();
  if (existingUrl && isAmazonPrimeVideoDetailUrl(existingUrl)) return game;
  const cached = getCachedStreamUrl(CACHE_PROVIDER, game.id);
  if (cached && isAmazonPrimeVideoDetailUrl(cached)) {
    return {
      ...game,
      streamUrl: cached,
      streamProvider: CACHE_PROVIDER,
      launchMode: "external"
    };
  }
  const event = matchWnbaGameToPrimeVideoLeaguePassEvent(game, catalog);
  if (!event?.streamUrl) return game;
  setCachedStreamUrl(CACHE_PROVIDER, game.id, event.streamUrl);
  return {
    ...game,
    streamUrl: event.streamUrl,
    streamProvider: CACHE_PROVIDER,
    launchMode: "external",
    content: {
      ...game.content ?? {},
      watchLinks: [
        ...Array.isArray(game.content?.watchLinks) ? game.content.watchLinks : [],
        { provider: CACHE_PROVIDER, url: event.streamUrl, titleId: event.titleId }
      ]
    }
  };
}
async function enrichWnbaGamesWithPrimeVideoStreams(games) {
  if (!games.length) return games;
  let catalog = [];
  try {
    catalog = await fetchWnbaPrimeVideoLeaguePassCatalog();
  } catch {
    return games;
  }
  if (!catalog.length) return games;
  return games.map((game) => enrichGameRow(game, catalog));
}

// ../grarf/desktop/src/lib/wnba/enrichOperationalSnapshotWnbaStreams.ts
async function enrichOperationalSnapshotWnbaStreams(transport) {
  const rows = transport.leagues.WNBA;
  if (!Array.isArray(rows) || rows.length === 0) return transport;
  let enriched = rows;
  enriched = await enrichWnbaGamesWithCanonicalGameIds(enriched);
  enriched = await enrichWnbaGamesWithPrimeVideoStreams(enriched);
  if (!enriched.some((row, index) => row !== rows[index])) return transport;
  return {
    ...transport,
    leagues: {
      ...transport.leagues,
      WNBA: enriched
    }
  };
}

// ../grarf/desktop/src/lib/watch/enrichOperationalSnapshotEspnWatchStreams.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/espn/espnGameUrls.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/gamesSpine/resolveWorldCupWorkspaceEmbedUrl.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/espn/espnGameUrls.ts
var ESPN_GAME_ID_RE = /^espn-([A-Z0-9]+)-(\d+)$/i;
var VALID_LEAGUE_KEYS = new Set(getGamesColumnLeagueOrder());
function parseEspnGameIdFromRowId(gameId) {
  const m = ESPN_GAME_ID_RE.exec(gameId.trim());
  if (!m) return null;
  const league = m[1].toUpperCase();
  if (!VALID_LEAGUE_KEYS.has(league)) return null;
  return { league, eventId: m[2] };
}
function parseEspnEventIdFromGame(game) {
  const ext = game.externalIds?.espn?.trim();
  if (ext && /^\d+$/.test(ext)) return ext;
  if (game.espnEventId?.trim() && /^\d+$/.test(game.espnEventId)) return game.espnEventId.trim();
  return parseEspnGameIdFromRowId(game.id)?.eventId ?? null;
}

// ../grarf/desktop/src/lib/watch/enrichOperationalSnapshotEspnWatchStreams.ts
var ESPN_WATCH_CALENDAR_LEAGUES = /* @__PURE__ */ new Set([
  "MLB",
  "NBA",
  "NHL",
  "NCAABB"
]);
var ESPN_WATCH_PICKER_LEAGUES = /* @__PURE__ */ new Set(["ATP", "WTA"]);
var ESPN_FETCH_UA2 = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var pickerPlayerCache = /* @__PURE__ */ new Map();
function enrichGameRow2(game) {
  if (game.streamUrl?.trim()) return game;
  if (!ESPN_WATCH_CALENDAR_LEAGUES.has(game.league)) return game;
  if (!gameHasEspnWatchBroadcast2(game)) return game;
  const eventId = parseEspnEventIdFromGame(game);
  if (!eventId) return game;
  const streamUrl = buildEspnPlusWatchUrl(eventId);
  if (!streamUrl) return game;
  const watchLinks = Array.isArray(game.content?.watchLinks) ? [...game.content.watchLinks] : [];
  return {
    ...game,
    streamUrl,
    streamProvider: "ESPN+",
    espnWatchEventId: eventId,
    content: {
      ...game.content ?? {},
      watchLinks: [
        ...watchLinks,
        { provider: "ESPN+", url: streamUrl, eventCalendarId: eventId }
      ]
    }
  };
}
function enrichLeagueRows(rows) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return { rows: rows ?? [], changed: false };
  }
  let changed = false;
  const next = rows.map((game) => {
    const enriched = enrichGameRow2(game);
    if (enriched !== game) changed = true;
    return enriched;
  });
  return { rows: next, changed };
}
function enrichOperationalSnapshotEspnWatchStreams(transport) {
  const leagues = { ...transport.leagues };
  let changed = false;
  for (const key of ESPN_WATCH_CALENDAR_LEAGUES) {
    const result = enrichLeagueRows(leagues[key]);
    if (result.changed) {
      leagues[key] = result.rows;
      changed = true;
    }
  }
  return changed ? { ...transport, leagues } : transport;
}
function resolveEspnOperationalLeagueConfig(leagueKey) {
  const row = ESPN_OPERATIONAL_INGEST_LEAGUES.find((entry) => entry.key === leagueKey);
  if (!row) return null;
  return { sport: row.sport, league: row.slug };
}
function walkHeaderForPcc(node, map) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const item of node) walkHeaderForPcc(item, map);
    return;
  }
  const rec = node;
  const id = rec.id != null ? String(rec.id).trim() : "";
  const pcc = rec.pccEventId != null ? String(rec.pccEventId).trim() : "";
  if (id && pcc && /^\d+$/.test(id) && /^\d+$/.test(pcc)) {
    map.set(id, pcc);
  }
  for (const value of Object.values(rec)) walkHeaderForPcc(value, map);
}
async function fetchPccEventIdMap(cfg) {
  const map = /* @__PURE__ */ new Map();
  const url = new URL("https://site.web.api.espn.com/apis/personalized/v2/scoreboard/header");
  url.searchParams.set("sport", cfg.sport);
  url.searchParams.set("league", cfg.league);
  url.searchParams.set("region", "us");
  url.searchParams.set("lang", "en");
  url.searchParams.set("contentorigin", "espn");
  url.searchParams.set("configuration", "SITE_DEFAULT");
  url.searchParams.set("platform", "web");
  try {
    const res = await fetch(url.toString(), {
      headers: { "User-Agent": ESPN_FETCH_UA2, Accept: "application/json" }
    });
    if (!res.ok) return map;
    const data = await res.json();
    walkHeaderForPcc(data, map);
  } catch {
  }
  return map;
}
function pickPlayerIdFromPicker(pickerJson) {
  const buckets = pickerJson?.page?.buckets;
  if (!Array.isArray(buckets)) return null;
  const contents = [];
  for (const bucket of buckets) {
    if (bucket && typeof bucket === "object" && Array.isArray(bucket.contents)) {
      contents.push(...bucket.contents ?? []);
    }
  }
  if (!contents.length) return null;
  const uuidRe = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  const live = contents.find((entry) => entry?.status === "live" && uuidRe.test(String(entry?.id ?? "")));
  const first = contents.find((entry) => uuidRe.test(String(entry?.id ?? "")));
  const pick = live ?? first;
  return pick?.id ? String(pick.id) : null;
}
async function fetchEspnPlusPlayerIdFromPicker(watchEventId) {
  const key = watchEventId.trim();
  if (!/^\d+$/.test(key)) return null;
  if (pickerPlayerCache.has(key)) return pickerPlayerCache.get(key) ?? null;
  const url = new URL("https://watch.product.api.espn.com/api/product/v3/watchespn/web/picker");
  url.searchParams.set("eventId", key);
  url.searchParams.set("tz", "America/Chicago");
  url.searchParams.set("lang", "en");
  url.searchParams.set("countryCode", "US");
  url.searchParams.set("entitlements", "no");
  try {
    const res = await fetch(url.toString(), {
      headers: { "User-Agent": ESPN_FETCH_UA2, Accept: "application/json" }
    });
    if (!res.ok) {
      pickerPlayerCache.set(key, null);
      return null;
    }
    const data = await res.json();
    const playerId = pickPlayerIdFromPicker(data);
    pickerPlayerCache.set(key, playerId);
    return playerId;
  } catch {
    pickerPlayerCache.set(key, null);
    return null;
  }
}
async function enrichEspnPlusPickerLeagueRows(leagueKey, games) {
  const cfg = resolveEspnOperationalLeagueConfig(leagueKey);
  if (!cfg) return;
  const espnPlusGames = games.filter((game) => gameHasEspnWatchBroadcast2(game));
  if (espnPlusGames.length === 0) return;
  const pccMap = await fetchPccEventIdMap(cfg);
  await Promise.all(
    espnPlusGames.map(async (game) => {
      if (game.streamUrl && game.streamProvider === "ESPN+" && String(game.espnPlusPlayerId ?? "").trim()) {
        return;
      }
      const scoreboardId = String(game.espnEventId ?? "").trim();
      if (!/^\d+$/.test(scoreboardId)) return;
      const watchEventId = pccMap.get(scoreboardId) ?? scoreboardId;
      const playerId = await fetchEspnPlusPlayerIdFromPicker(watchEventId);
      const streamUrl = playerId ? buildEspnPlusPlayerUrlByUuid(playerId) : buildEspnPlusWatchUrl(watchEventId);
      if (!streamUrl) return;
      attachEspnPlusStreamToGame(game, {
        streamUrl,
        streamProvider: "ESPN+",
        eventCalendarId: watchEventId,
        ...playerId ? { playerId } : {}
      });
    })
  );
}
async function enrichOperationalSnapshotEspnWatchPickerStreams(transport) {
  for (const key of ESPN_WATCH_PICKER_LEAGUES) {
    const rows = transport.leagues[key];
    if (!Array.isArray(rows) || rows.length === 0) continue;
    await enrichEspnPlusPickerLeagueRows(key, rows);
  }
  return transport;
}

// ../grarf/desktop/src/lib/wimbledon/enrichOperationalSnapshotWimbledonSlamTracker.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/wimbledon/enrichWimbledonSlamTrackerMatches.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/wimbledon/fetchWimbledonDrawCatalog.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/wimbledon/types.ts
init_define_import_meta_env();
var WIMBLEDON_DRAW_CODES = ["MS", "LS", "MD", "LD", "XD"];

// ../grarf/desktop/src/lib/wimbledon/fetchWimbledonDrawCatalog.ts
var WIMBLEDON_FETCH_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var CATALOG_CACHE_TTL_MS3 = 3e4;
var INVALID_DRAW_CACHE_TTL_MS = 5e3;
var catalogCacheByYear = /* @__PURE__ */ new Map();
var invalidDrawCache = /* @__PURE__ */ new Map();
function safeString(value) {
  return typeof value === "string" && value.trim() ? value.trim() : "";
}
function wimbledonTeamLabel(team) {
  if (!team) return "";
  const displayA = safeString(team.displayNameA);
  const displayB = safeString(team.displayNameB);
  if (displayA && displayB) return `${displayA} / ${displayB}`;
  return displayA || displayB;
}
function wimbledonTeamPlayerIds(team) {
  if (!team) return [];
  const ids = [safeString(team.idA), safeString(team.idB)].filter(Boolean);
  return ids;
}
function pickSeed(team) {
  const seed = team?.seed;
  const n = typeof seed === "number" ? seed : Number(seed);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function isValidWimbledonDrawPayload(json) {
  return Boolean(json && typeof json === "object" && Array.isArray(json.matches));
}
function parseWimbledonDrawMatches(drawCode, json) {
  if (!isValidWimbledonDrawPayload(json)) return [];
  const out = [];
  for (const raw of json.matches) {
    if (!raw || typeof raw !== "object") continue;
    const row = raw;
    const matchId = safeString(row.match_id);
    if (!matchId) continue;
    const team1 = row.team1;
    const team2 = row.team2;
    const team1Label = wimbledonTeamLabel(team1);
    const team2Label = wimbledonTeamLabel(team2);
    if (!team1Label || !team2Label) continue;
    const epochRaw = row.epoch;
    const epoch = typeof epochRaw === "number" ? epochRaw : Number(epochRaw);
    out.push({
      matchId,
      drawCode,
      roundName: safeString(row.roundName),
      courtName: safeString(row.courtName) || safeString(row.shortCourtName),
      epoch: Number.isFinite(epoch) ? epoch : 0,
      status: safeString(row.status),
      team1Label,
      team2Label,
      team1PlayerIds: wimbledonTeamPlayerIds(team1),
      team2PlayerIds: wimbledonTeamPlayerIds(team2),
      team1Seed: pickSeed(team1),
      team2Seed: pickSeed(team2)
    });
  }
  return out;
}
function drawFeedUrl(year, drawCode) {
  return `https://www.wimbledon.com/en_GB/scores/feeds/${year}/draws/${drawCode}.json`;
}
function invalidDrawCacheKey(year, drawCode) {
  return `${year}:${drawCode}`;
}
function wimbledonTournamentEpochWindow(tournamentYear) {
  return {
    startMs: Date.UTC(tournamentYear, 5, 20),
    endMs: Date.UTC(tournamentYear, 6, 20, 23, 59, 59, 999)
  };
}
function wimbledonFeedMatchInTournamentYear(match, tournamentYear) {
  if (!match.epoch) return true;
  const { startMs, endMs } = wimbledonTournamentEpochWindow(tournamentYear);
  return match.epoch >= startMs && match.epoch <= endMs;
}
async function fetchWimbledonDraw(year, drawCode) {
  const cacheKey2 = invalidDrawCacheKey(year, drawCode);
  const invalidCached = invalidDrawCache.get(cacheKey2);
  const now = Date.now();
  if (invalidCached && now - invalidCached.fetchedAt < INVALID_DRAW_CACHE_TTL_MS) {
    return [];
  }
  try {
    const res = await fetch(drawFeedUrl(year, drawCode), {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-GB,en;q=0.9",
        "User-Agent": WIMBLEDON_FETCH_UA,
        Referer: "https://www.wimbledon.com/en_GB/scores/index.html",
        Origin: "https://www.wimbledon.com"
      }
    });
    if (!res.ok || /robots\.txt$/i.test(res.url)) {
      invalidDrawCache.set(cacheKey2, { fetchedAt: now });
      return [];
    }
    const text = await res.text();
    if (!text.trim().startsWith("{")) {
      invalidDrawCache.set(cacheKey2, { fetchedAt: now });
      return [];
    }
    let json;
    try {
      json = JSON.parse(text);
    } catch {
      invalidDrawCache.set(cacheKey2, { fetchedAt: now });
      return [];
    }
    if (!isValidWimbledonDrawPayload(json)) {
      invalidDrawCache.set(cacheKey2, { fetchedAt: now });
      return [];
    }
    return parseWimbledonDrawMatches(drawCode, json);
  } catch {
    invalidDrawCache.set(cacheKey2, { fetchedAt: now });
    return [];
  }
}
function mergeCatalogMatches(batches) {
  const byId = /* @__PURE__ */ new Map();
  for (const batch of batches) {
    for (const match of batch) {
      byId.set(match.matchId, match);
    }
  }
  return [...byId.values()];
}
function resolveWimbledonDrawFeedYears(tournamentYear) {
  const years = /* @__PURE__ */ new Set([tournamentYear, tournamentYear - 1, tournamentYear + 1]);
  return [...years].filter((year) => year >= 2e3).sort((a, b) => {
    const aDist = Math.abs(a - tournamentYear);
    const bDist = Math.abs(b - tournamentYear);
    return aDist - bDist;
  });
}
async function fetchWimbledonDrawCatalogForTournament(tournamentYear) {
  const feedYears = resolveWimbledonDrawFeedYears(tournamentYear);
  const singlesBatches = [];
  const otherBatches = [];
  for (const feedYear of feedYears) {
    const ms = await fetchWimbledonDraw(feedYear, "MS");
    const ls = await fetchWimbledonDraw(feedYear, "LS");
    for (const match of [...ms, ...ls]) {
      if (wimbledonFeedMatchInTournamentYear(match, tournamentYear)) {
        singlesBatches.push(match);
      }
    }
  }
  const primaryCatalog = await fetchWimbledonDrawCatalog(tournamentYear);
  const primarySingles = primaryCatalog.filter(
    (match) => (match.drawCode === "MS" || match.drawCode === "LS") && wimbledonFeedMatchInTournamentYear(match, tournamentYear)
  );
  let singles = mergeCatalogMatches([singlesBatches, primarySingles]);
  if (singles.length === 0) {
    singles = singlesBatches;
  }
  for (const match of primaryCatalog) {
    if (match.drawCode !== "MS" && match.drawCode !== "LS") {
      otherBatches.push(match);
    }
  }
  return mergeCatalogMatches([singles, otherBatches]);
}
async function fetchWimbledonDrawCatalog(year) {
  const now = Date.now();
  const cached = catalogCacheByYear.get(year);
  if (cached && now - cached.fetchedAt < CATALOG_CACHE_TTL_MS3) {
    return cached.matches;
  }
  const batches = await Promise.all(
    WIMBLEDON_DRAW_CODES.map((drawCode) => fetchWimbledonDraw(year, drawCode))
  );
  const matches = batches.flat();
  catalogCacheByYear.set(year, { fetchedAt: now, matches });
  return matches;
}

// ../grarf/desktop/src/lib/wimbledon/matchWimbledonSlamTrackerGame.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/wimbledon/buildWimbledonSlamTrackerUrl.ts
init_define_import_meta_env();
function buildWimbledonSlamTrackerUrl(matchId) {
  const id = String(matchId).trim();
  return `https://www.wimbledon.com/en_GB/scores/slamtracker/${encodeURIComponent(id)}`;
}

// ../grarf/desktop/src/lib/wimbledon/matchWimbledonSlamTrackerGame.ts
var MIN_PLAYER_SCORE2 = 0.55;
var MIN_TOTAL_SCORE4 = 0.65;
var MAX_KICKOFF_DELTA_MS2 = 7 * 24 * 60 * 60 * 1e3;
function gameHaystack(game) {
  return [
    game.metadata?.tennis?.contextLine,
    game.statusLine,
    game.leagueContextLabel,
    game.awayTeam,
    game.homeTeam,
    game.metadata?.officialAwayName,
    game.metadata?.officialHomeName
  ].filter(Boolean).join(" ");
}
function isDoublesGame(game) {
  return gameHaystack(game).includes("/");
}
function isMixedDoublesGame(game) {
  return /\bmixed\b/i.test(gameHaystack(game));
}
function resolveWimbledonDrawCodeFromGame(game) {
  if (!isWimbledonTennisGame(game)) return null;
  if (isMixedDoublesGame(game)) return "XD";
  const doubles = isDoublesGame(game);
  if (game.league === "ATP") return doubles ? "MD" : "MS";
  if (game.league === "WTA") return doubles ? "LD" : "LS";
  return null;
}
function resolveWimbledonTournamentYear(game) {
  const scheduled = game.scheduledDateKey?.trim();
  if (scheduled && /^\d{4}-\d{2}-\d{2}$/.test(scheduled)) {
    const year = Number(scheduled.slice(0, 4));
    if (year >= 2e3) return year;
  }
  const startMs = game.startTimeMs;
  if (typeof startMs === "number" && Number.isFinite(startMs) && startMs > 0) {
    return new Date(startMs).getUTCFullYear();
  }
  return (/* @__PURE__ */ new Date()).getUTCFullYear();
}
function gamePlayerLabelVariants(game, side) {
  const primary = side === "away" ? game.awayTeam : game.homeTeam;
  const official = side === "away" ? game.metadata?.officialAwayName : game.metadata?.officialHomeName;
  const labels = [primary, official].map((value) => value?.trim()).filter(Boolean);
  return [...new Set(labels)];
}
function extractRoundFromGame(game) {
  const context = game.metadata?.tennis?.contextLine?.trim() ?? "";
  if (context) {
    const parts = context.split("\xB7").map((part) => part.trim()).filter(Boolean);
    if (parts.length >= 2) return parts[parts.length - 1];
  }
  const statusParts = (game.statusLine ?? "").split("\xB7").map((part) => part.trim()).filter(Boolean);
  if (statusParts.length >= 2 && /wimbledon/i.test(statusParts[0] ?? "")) {
    return statusParts[1];
  }
  if (statusParts.length >= 2) return statusParts[1];
  return "";
}
function extractCourtFromGame(game) {
  const statusParts = (game.statusLine ?? "").split("\xB7").map((part) => part.trim()).filter(Boolean);
  if (statusParts.length >= 3) return statusParts[statusParts.length - 1];
  return "";
}
function normalizeRoundLabel(value) {
  return value.toLowerCase().replace(/\bquarter[-\s]?finals?\b/g, "qf").replace(/\bsemi[-\s]?finals?\b/g, "sf").replace(/\bround of 16\b/g, "r16").replace(/\bround of 128\b/g, "r128").replace(/\bfirst round\b/g, "r1").replace(/\bsecond round\b/g, "r2").replace(/\bthird round\b/g, "r3").replace(/\bfourth round\b/g, "r4").replace(/\bround\s*(\d+)\b/g, (_, roundNumber) => `r${roundNumber}`).replace(/[^a-z0-9]/g, "");
}
function roundScore(game, match) {
  const fromGame = extractRoundFromGame(game);
  if (!fromGame || !match.roundName) return 1;
  const a = normalizeRoundLabel(fromGame);
  const b = normalizeRoundLabel(match.roundName);
  if (a && b && a === b) return 1;
  return tokenOverlapScore(tokenSetFromLabel(fromGame), tokenSetFromLabel(match.roundName));
}
function courtScore(game, match) {
  const fromGame = extractCourtFromGame(game);
  if (!fromGame || !match.courtName) return 1;
  const direct = tokenOverlapScore(tokenSetFromLabel(fromGame), tokenSetFromLabel(match.courtName));
  if (direct >= 0.8) return 1;
  if (direct <= 0) return 0.85;
  return direct;
}
function kickoffScore2(game, match) {
  const gameMs = game.startTimeMs;
  const matchMs = match.epoch;
  if (!Number.isFinite(gameMs) || !gameMs || !Number.isFinite(matchMs) || !matchMs) return 1;
  const delta = Math.abs(gameMs - matchMs);
  if (delta > MAX_KICKOFF_DELTA_MS2) return 0;
  if (delta <= 3 * 60 * 60 * 1e3) return 1;
  return 1 - Math.min(delta / (36 * 60 * 60 * 1e3), 1) * 0.2;
}
function playerScore(game, match) {
  const awayVariants = gamePlayerLabelVariants(game, "away");
  const homeVariants = gamePlayerLabelVariants(game, "home");
  const team1Tokens = tokenSetFromLabel(match.team1Label);
  const team2Tokens = tokenSetFromLabel(match.team2Label);
  let best = 0;
  for (const away of awayVariants) {
    for (const home of homeVariants) {
      const awayTokens = tokenSetFromLabel(away);
      const homeTokens = tokenSetFromLabel(home);
      const direct = tokenOverlapScore(awayTokens, team1Tokens) + tokenOverlapScore(homeTokens, team2Tokens);
      const swapped = tokenOverlapScore(awayTokens, team2Tokens) + tokenOverlapScore(homeTokens, team1Tokens);
      best = Math.max(best, Math.max(direct, swapped) / 2);
    }
  }
  return best;
}
function seedScore(game, match) {
  const awaySeed = game.metadata?.tennis?.awaySeed;
  const homeSeed = game.metadata?.tennis?.homeSeed;
  if (awaySeed == null && homeSeed == null) return 1;
  if (awaySeed == null || homeSeed == null) return 0.95;
  const direct = (match.team1Seed === awaySeed ? 1 : 0) + (match.team2Seed === homeSeed ? 1 : 0);
  const swapped = (match.team1Seed === homeSeed ? 1 : 0) + (match.team2Seed === awaySeed ? 1 : 0);
  const best = Math.max(direct, swapped);
  if (best === 2) return 1.04;
  if (best === 1) return 0.98;
  return 0.92;
}
function scoreWimbledonFeedMatch(game, match) {
  const players = playerScore(game, match);
  if (players < MIN_PLAYER_SCORE2) return 0;
  const kickoff = kickoffScore2(game, match);
  if (kickoff <= 0) return 0;
  const round = roundScore(game, match);
  if (round < 0.45) return 0;
  const court = courtScore(game, match);
  const seed = seedScore(game, match);
  return players * kickoff * round * court * seed;
}
function resolutionFromMatchId(matchId) {
  return {
    matchId,
    url: buildWimbledonSlamTrackerUrl(matchId)
  };
}
function readWimbledonSlamTrackerMatchFromGame(game) {
  const fromMeta = game.metadata?.wimbledonSlamTrackerMatchId?.trim();
  const fromExternal = game.externalIds?.wimbledon?.trim();
  const matchId = fromMeta || fromExternal;
  if (!matchId) return null;
  return resolutionFromMatchId(matchId);
}
function matchWimbledonSlamTrackerGame(game, catalog) {
  if (!isWimbledonTennisGame(game)) return null;
  const attached = readWimbledonSlamTrackerMatchFromGame(game);
  if (attached) return attached;
  const drawCode = resolveWimbledonDrawCodeFromGame(game);
  const candidates = drawCode ? catalog.filter((row) => row.drawCode === drawCode) : catalog;
  if (candidates.length === 0) return null;
  let best = null;
  let bestScore = 0;
  let secondBest = 0;
  for (const candidate of candidates) {
    const score = scoreWimbledonFeedMatch(game, candidate);
    if (score > bestScore) {
      secondBest = bestScore;
      bestScore = score;
      best = candidate;
      continue;
    }
    if (score > secondBest) secondBest = score;
  }
  if (!best || bestScore < MIN_TOTAL_SCORE4) return null;
  if (secondBest >= bestScore - 0.03 && bestScore < 0.85) return null;
  return resolutionFromMatchId(best.matchId);
}

// ../grarf/desktop/src/lib/wimbledon/enrichWimbledonSlamTrackerMatches.ts
var LOG6 = "[WimbledonSlamTracker]";
function attachSlamTrackerResolution(game, matchId, url) {
  game.externalIds = {
    ...game.externalIds,
    wimbledon: matchId
  };
  game.metadata = {
    ...game.metadata,
    wimbledonSlamTrackerMatchId: matchId,
    wimbledonSlamTrackerUrl: url
  };
}
function hydrateWimbledonTennisMetadata(game) {
  if (game.metadata?.tennis?.contextLine?.trim()) return;
  const statusLine = game.statusLine?.trim();
  if (!statusLine || !/\bwimbledon\b/i.test(statusLine)) return;
  const parts = statusLine.split("\xB7").map((part) => part.trim()).filter(Boolean);
  if (parts.length < 2) return;
  const contextLine = parts.slice(0, 2).join(" \xB7 ");
  game.metadata = {
    ...game.metadata,
    tennis: {
      ...game.metadata?.tennis,
      contextLine
    }
  };
}
async function enrichWimbledonSlamTrackerMatches(games) {
  const targets = games.filter(isWimbledonTennisGame);
  if (targets.length === 0) return;
  for (const game of targets) {
    hydrateWimbledonTennisMetadata(game);
  }
  const years = new Set(targets.map(resolveWimbledonTournamentYear));
  const catalogByYear = /* @__PURE__ */ new Map();
  await Promise.all(
    [...years].map(async (year) => {
      catalogByYear.set(year, await fetchWimbledonDrawCatalogForTournament(year));
    })
  );
  let matched = 0;
  for (const game of targets) {
    const tournamentYear = resolveWimbledonTournamentYear(game);
    const catalog = (catalogByYear.get(tournamentYear) ?? []).filter(
      (row) => wimbledonFeedMatchInTournamentYear(row, tournamentYear)
    );
    const resolution = matchWimbledonSlamTrackerGame(game, catalog);
    if (!resolution) continue;
    matched += 1;
    attachSlamTrackerResolution(game, resolution.matchId, resolution.url);
  }
  if (define_import_meta_env_default?.DEV && matched > 0) {
    console.log(`${LOG6} matched ${matched} Wimbledon row(s)`, { targets: targets.length });
  }
}

// ../grarf/desktop/src/lib/wimbledon/enrichOperationalSnapshotWimbledonSlamTracker.ts
async function enrichOperationalSnapshotWimbledonSlamTracker(transport) {
  let changed = false;
  for (const key of ["ATP", "WTA"]) {
    const rows = transport.leagues[key];
    if (!Array.isArray(rows) || rows.length === 0) continue;
    const before = rows.map((row) => row.metadata?.wimbledonSlamTrackerMatchId ?? "");
    await enrichWimbledonSlamTrackerMatches(rows);
    const after = rows.map((row) => row.metadata?.wimbledonSlamTrackerMatchId ?? "");
    if (before.some((value, index) => value !== after[index])) changed = true;
  }
  return changed ? { ...transport, leagues: { ...transport.leagues } } : transport;
}

// ../grarf/desktop/src/lib/watch/enrichOperationalSnapshotUsaNetworkStreams.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/watch/usaNetworkBroadcast.ts
init_define_import_meta_env();
var USA_NETWORK_LIVE_URL = "https://www.usanetwork.com/live";
var USA_NETWORK_WNBA_STREAM_URL = "https://www.usanetwork.com/sports";
function broadcastLabelsForGame(game) {
  return [...game.broadcasts ?? [], ...game.channels ?? []];
}
function gameHasUsaNetworkBroadcast(labels) {
  return labels.some((label) => {
    const t = String(label || "").trim();
    if (!t) return false;
    if (/^usa\s*network$/i.test(t)) return true;
    if (/^usa\s*net$/i.test(t)) return true;
    if (/^usa$/i.test(t)) return true;
    if (/\busa\s*network\b/i.test(t)) return true;
    if (/\busa\s*net\b/i.test(t)) return true;
    return false;
  });
}
function gameRowHasUsaNetworkBroadcast(game) {
  return gameHasUsaNetworkBroadcast(broadcastLabelsForGame(game));
}
function resolveUsaNetworkStreamUrl(game) {
  if (game.league === "WNBA") return USA_NETWORK_WNBA_STREAM_URL;
  return USA_NETWORK_LIVE_URL;
}

// ../grarf/desktop/src/lib/watch/enrichOperationalSnapshotUsaNetworkStreams.ts
var CACHE_PROVIDER2 = "USA";
function enrichGameRow3(game) {
  if (game.streamUrl?.trim() && game.streamProvider && game.streamProvider !== CACHE_PROVIDER2) {
    return game;
  }
  const cached = getCachedStreamUrl(CACHE_PROVIDER2, game.id);
  if (cached) {
    return {
      ...game,
      streamUrl: cached,
      streamProvider: CACHE_PROVIDER2,
      launchMode: "external"
    };
  }
  if (!gameRowHasUsaNetworkBroadcast(game)) return game;
  const streamUrl = resolveUsaNetworkStreamUrl(game);
  setCachedStreamUrl(CACHE_PROVIDER2, game.id, streamUrl);
  return {
    ...game,
    streamUrl,
    streamProvider: CACHE_PROVIDER2,
    launchMode: "external",
    content: {
      ...game.content ?? {},
      watchLinks: [
        ...Array.isArray(game.content?.watchLinks) ? game.content.watchLinks : [],
        { provider: CACHE_PROVIDER2, url: streamUrl }
      ]
    }
  };
}
function enrichLeagueRows2(rows) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return { rows: rows ?? [], changed: false };
  }
  let changed = false;
  const next = rows.map((game) => {
    const enriched = enrichGameRow3(game);
    if (enriched !== game) changed = true;
    return enriched;
  });
  return { rows: next, changed };
}
function enrichOperationalSnapshotUsaNetworkStreams(transport) {
  const leagues = { ...transport.leagues };
  let changed = false;
  for (const key of getGamesColumnLeagueOrder()) {
    const result = enrichLeagueRows2(leagues[key]);
    if (result.changed) {
      leagues[key] = result.rows;
      changed = true;
    }
  }
  return changed ? { ...transport, leagues } : transport;
}

// ../grarf/desktop/src/lib/watch/sanitizeOperationalSnapshotWatchStreams.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/watch/watchStreamUrl.ts
init_define_import_meta_env();
var ESPN_GAMECAST_PATH = /espn\.com\/(?:[a-z]+\/)?game(?:cast)?\/|espn\.com\/soccer\/match\//i;
var ESPN_WATCH_PLAYER_PATH = /espn\.com\/watch\/player(?:\/|\?)/i;
function isEspnGamecastOrStatsUrl(url) {
  const trimmed = url.trim();
  if (!trimmed) return false;
  if (ESPN_WATCH_PLAYER_PATH.test(trimmed)) return false;
  return ESPN_GAMECAST_PATH.test(trimmed);
}
function isWatchStreamUrl(url) {
  const trimmed = url.trim();
  if (!trimmed) return false;
  if (isEspnGamecastOrStatsUrl(trimmed)) return false;
  try {
    const host = new URL(trimmed).hostname.toLowerCase().replace(/^www\./, "");
    if (host === "espn.com" && !ESPN_WATCH_PLAYER_PATH.test(trimmed)) return false;
    if (host === "amazon.com" || host.endsWith(".amazon.com")) return true;
    if (host === "wnba.com" || host.endsWith(".wnba.com")) return true;
  } catch {
    return false;
  }
  return true;
}
function sanitizeGameWatchStreamFields(game) {
  const url = game.streamUrl?.trim();
  if (!url || isWatchStreamUrl(url)) return game;
  return { ...game, streamUrl: null, streamProvider: null };
}

// ../grarf/desktop/src/lib/watch/sanitizeOperationalSnapshotWatchStreams.ts
function sanitizeLeagueRows(rows) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return { rows: rows ?? [], changed: false };
  }
  let changed = false;
  const next = rows.map((game) => {
    const sanitized = sanitizeGameWatchStreamFields(game);
    if (sanitized !== game) changed = true;
    return sanitized;
  });
  return { rows: next, changed };
}
function sanitizeOperationalSnapshotWatchStreams(transport) {
  const leagues = { ...transport.leagues };
  let changed = false;
  for (const [key, rows] of Object.entries(leagues)) {
    const result = sanitizeLeagueRows(rows);
    if (result.changed) {
      leagues[key] = result.rows;
      changed = true;
    }
  }
  return changed ? { ...transport, leagues } : transport;
}

// ../grarf/desktop/src/lib/watch/enrichOperationalSnapshotManualGameOverrides.ts
init_define_import_meta_env();
function enrichLeagueRows3(rows) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return { rows: rows ?? [], changed: false };
  }
  let changed = false;
  const next = rows.map((game) => {
    const enriched = applyManualGameOverride(game);
    if (enriched !== game) changed = true;
    return enriched;
  });
  return { rows: next, changed };
}
function enrichOperationalSnapshotManualGameOverrides(transport) {
  const leagues = { ...transport.leagues };
  let changed = false;
  for (const [key, rows] of Object.entries(leagues)) {
    const result = enrichLeagueRows3(rows);
    if (result.changed) {
      leagues[key] = result.rows;
      changed = true;
    }
  }
  return changed ? { ...transport, leagues } : transport;
}

// ../grarf/desktop/src/lib/tennisChannelPlus/enrichOperationalSnapshotTennisChannel.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/tennisChannelPlus/enrichTennisGamesWithTennisChannelPlus.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/tennisChannelPlus/fetchTennisChannelPlusLiveCatalog.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/tennisChannelPlus/parseTennisChannelEvent.ts
init_define_import_meta_env();

// ../grarf/desktop/src/lib/tennisChannelPlus/buildTennisChannelStreamUrl.ts
init_define_import_meta_env();
var TENNIS_CHANNEL_VIDEO_BASE = "https://www.tennischannel.com/en-us/video";
function buildTennisChannelPlusStreamUrl(slug, contentId) {
  const safeSlug = slug.trim().replace(/^\/+|\/+$/g, "");
  return `${TENNIS_CHANNEL_VIDEO_BASE}/${encodeURIComponent(safeSlug)}/${contentId}`;
}

// ../grarf/desktop/src/lib/tennisChannelPlus/parseTennisChannelEvent.ts
function pickCourtName(metadata) {
  if (!Array.isArray(metadata)) return null;
  for (const row of metadata) {
    if (row?.type?.name === "Stadium" && row.name?.trim()) return row.name.trim();
  }
  return null;
}
function pickPrimaryContent(event) {
  const rows = Array.isArray(event.content) ? event.content : [];
  if (rows.length === 0) return null;
  const live = rows.find((row) => row?.status?.isLive || row?.distributionType?.name === "Live");
  return live ?? rows[0] ?? null;
}
function parseTennisChannelPlusEvent(event) {
  const awayName = event.awayCompetitor?.name?.trim() ?? "";
  const homeName = event.homeCompetitor?.name?.trim() ?? "";
  if (!awayName || !homeName) return null;
  const content = pickPrimaryContent(event);
  const contentId = content?.id;
  const slug = content?.editorial?.translations?.en?.slug?.trim();
  if (!contentId || !slug) return null;
  const streamTitle = content.editorial?.translations?.en?.title?.trim() || event.title?.trim() || `${awayName} - ${homeName}`;
  return {
    eventId: Number(event.id),
    contentId,
    streamUrl: buildTennisChannelPlusStreamUrl(slug, contentId),
    streamTitle,
    awayName,
    homeName,
    tournamentName: event.category3?.name?.trim() ?? "",
    courtName: pickCourtName(event.clientMetadata),
    isLive: Boolean(content.status?.isLive || content.distributionType?.name === "Live")
  };
}

// ../grarf/desktop/src/lib/tennisChannelPlus/fetchTennisChannelPlusLiveCatalog.ts
var TENNIS_CHANNEL_EVENTS_URL = "https://www.tennischannel.com/api/v2/events";
var FETCH_TIMEOUT_MS5 = 12e3;
var cachedCatalog3 = null;
var cachedAtMs3 = 0;
var CACHE_TTL_MS2 = 6e4;
async function fetchTennisChannelPlusLiveCatalog(now = Date.now(), forceRefresh = false) {
  if (!forceRefresh && cachedCatalog3 && now - cachedAtMs3 < CACHE_TTL_MS2) {
    return cachedCatalog3;
  }
  const res = await fetch(TENNIS_CHANNEL_EVENTS_URL, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS5)
  });
  if (!res.ok) {
    throw new Error(`Tennis Channel Plus events fetch failed: ${res.status}`);
  }
  const json = await res.json();
  const parsed = (json.data ?? []).map((row) => parseTennisChannelPlusEvent(row)).filter((row) => row != null);
  cachedCatalog3 = parsed;
  cachedAtMs3 = now;
  return parsed;
}

// ../grarf/desktop/src/lib/tennisChannelPlus/matchTennisChannelStream.ts
init_define_import_meta_env();
var MIN_PLAYER_SCORE3 = 0.55;
var MIN_TOTAL_SCORE5 = 0.62;
function isTennisLeague2(game) {
  return game.league === "ATP" || game.league === "WTA";
}
function isMatchableTennisGame(game) {
  return isTennisLeague2(game) && (game.status === "scheduled" || game.status === "live");
}
function gamePlayerTokenSets2(game) {
  const away = tokenSetFromLabel(game.metadata?.officialAwayName || game.awayTeam || "");
  const home = tokenSetFromLabel(game.metadata?.officialHomeName || game.homeTeam || "");
  return [away, home];
}
function eventPlayerTokenSets(stream) {
  return [tokenSetFromLabel(stream.awayName), tokenSetFromLabel(stream.homeName)];
}
function scorePlayers2(game, stream) {
  const [gameAway, gameHome] = gamePlayerTokenSets2(game);
  const [streamAway, streamHome] = eventPlayerTokenSets(stream);
  const direct = tokenOverlapScore(gameAway, streamAway) + tokenOverlapScore(gameHome, streamHome);
  const swapped = tokenOverlapScore(gameAway, streamHome) + tokenOverlapScore(gameHome, streamAway);
  return Math.max(direct, swapped) / 2;
}
function gameTournamentText(game) {
  const parts = [
    game.metadata?.tennis?.contextLine,
    game.statusLine,
    game.leagueContextLabel
  ].filter(Boolean);
  return parts.join(" ");
}
function scoreTournament(game, stream) {
  const gameTokens = tokenizeTournamentText(gameTournamentText(game));
  const streamTokens = tokenizeTournamentText(stream.tournamentName);
  return tokenOverlapScore(gameTokens, streamTokens);
}
function normalizeCourtLabel(value) {
  return value.toLowerCase().replace(/^court\s+/i, "").replace(/[^a-z0-9\s]/g, " ").trim();
}
function scoreCourt(game, stream) {
  if (!stream.courtName?.trim()) return 0;
  const court = normalizeCourtLabel(stream.courtName);
  const haystack = normalizeCourtLabel(`${game.statusLine ?? ""} ${gameTournamentText(game)}`);
  if (!court || !haystack) return 0;
  if (haystack.includes(court)) return 1;
  return tokenOverlapScore(tokenizeTournamentText(court), tokenizeTournamentText(haystack));
}
function scoreStreamMatch(game, stream) {
  const players = scorePlayers2(game, stream);
  if (players < MIN_PLAYER_SCORE3) return 0;
  const tournament = scoreTournament(game, stream);
  const court = scoreCourt(game, stream);
  const liveBoost = stream.isLive ? 0.04 : 0;
  return players * 0.65 + tournament * 0.25 + court * 0.1 + liveBoost;
}
function matchTennisChannelPlusStream(game, catalog) {
  if (!isMatchableTennisGame(game)) return null;
  if (catalog.length === 0) return null;
  let best = null;
  let bestScore = 0;
  for (const stream of catalog) {
    const score = scoreStreamMatch(game, stream);
    if (score > bestScore) {
      bestScore = score;
      best = stream;
    }
  }
  if (!best || bestScore < MIN_TOTAL_SCORE5) return null;
  return best;
}

// ../grarf/desktop/src/lib/tennisChannelPlus/enrichTennisGamesWithTennisChannelPlus.ts
var LOG7 = "[TennisChannelPlus]";
function isTennisLeague3(game) {
  return game.league === "ATP" || game.league === "WTA";
}
function isMatchableTennisGame2(game) {
  if (!isTennisLeague3(game)) return false;
  if (isGrarfWebRenderer()) return game.status === "scheduled" || game.status === "live";
  return game.status === "live";
}
function canReplaceExistingStream(game) {
  const streamUrl = game.streamUrl?.trim();
  if (!streamUrl) return true;
  return isGrarfWebRenderer() && game.streamProvider === "ESPN+";
}
async function enrichTennisGamesWithTennisChannelPlus(games) {
  const hasMatchableTennis = games.some(isMatchableTennisGame2);
  if (!hasMatchableTennis) return games;
  let catalog;
  try {
    catalog = await fetchTennisChannelPlusLiveCatalog();
  } catch (error) {
    if (define_import_meta_env_default.DEV) {
      console.warn(`${LOG7} catalog fetch failed`, error);
    }
    return games;
  }
  if (catalog.length === 0) return games;
  let matched = 0;
  const out = games.map((game) => {
    if (!isMatchableTennisGame2(game)) return game;
    if (!canReplaceExistingStream(game)) return game;
    const stream = matchTennisChannelPlusStream(game, catalog);
    if (!stream) return game;
    matched += 1;
    return {
      ...game,
      streamUrl: stream.streamUrl,
      streamProvider: "Tennis Channel+"
    };
  });
  if (define_import_meta_env_default.DEV && matched > 0) {
    console.log(`${LOG7} matched ${matched} tennis row(s)`, { catalogSize: catalog.length });
  }
  return out;
}

// ../grarf/desktop/src/lib/tennisChannelPlus/enrichOperationalSnapshotTennisChannel.ts
var TENNIS_LEAGUES = ["ATP", "WTA"];
async function enrichOperationalSnapshotTennisChannel(transport) {
  const leagues = { ...transport.leagues };
  let changed = false;
  for (const league of TENNIS_LEAGUES) {
    const rows = leagues[league];
    if (!Array.isArray(rows) || rows.length === 0) continue;
    const enriched = await enrichTennisGamesWithTennisChannelPlus(rows);
    if (enriched.some((row, index) => row !== rows[index])) {
      leagues[league] = enriched;
      changed = true;
    }
  }
  return changed ? { ...transport, leagues } : transport;
}

// ../grarf/desktop/src/services/operationalIngest/supplementOperationalSnapshotFromLocalIpc.ts
init_define_import_meta_env();
function cloudRowMissingMlbPk(row) {
  if (typeof row.gamePk === "number" && row.gamePk > 0) return false;
  const mlb = row.externalIds?.mlb?.trim();
  return !mlb || !/^\d+$/.test(mlb);
}
function mergeElectronRow(cloud, local) {
  let next = cloud;
  if (!cloud.streamUrl && local.streamUrl) {
    const skipPeacockForWorldCup = cloud.league === "WORLDCUP" && local.streamProvider === "Peacock";
    if (!skipPeacockForWorldCup) {
      next = {
        ...next,
        streamUrl: local.streamUrl,
        streamProvider: local.streamProvider ?? null
      };
    }
  }
  if (!cloud.wnbaGameId?.trim() && local.wnbaGameId?.trim()) {
    next = {
      ...next,
      wnbaGameId: local.wnbaGameId.trim()
    };
  }
  if (cloudRowMissingMlbPk(cloud)) {
    const localPk = typeof local.gamePk === "number" && local.gamePk > 0 ? local.gamePk : local.externalIds?.mlb?.trim() && /^\d+$/.test(local.externalIds.mlb) ? Number(local.externalIds.mlb) : null;
    if (localPk != null) {
      next = {
        ...next,
        gamePk: localPk,
        externalIds: {
          ...next.externalIds ?? {},
          espn: next.externalIds?.espn ?? next.espnEventId ?? null,
          mlb: String(localPk)
        }
      };
    }
  }
  const cloudStories = cloud.content?.stories?.length ?? 0;
  const localStories = local.content?.stories?.length ?? 0;
  if (localStories > 0 && localStories > cloudStories) {
    next = {
      ...next,
      content: {
        ...next.content ?? {},
        ...local.content ?? {},
        stories: local.content?.stories ?? next.content?.stories
      }
    };
  }
  if (local.status === "live" && cloud.status !== "live") {
    next = {
      ...next,
      status: "live",
      statusLine: local.statusLine ?? next.statusLine,
      period: local.period ?? next.period,
      displayClock: local.displayClock ?? next.displayClock,
      situation: local.situation ?? next.situation,
      awayScore: local.awayScore ?? next.awayScore,
      homeScore: local.homeScore ?? next.homeScore
    };
  }
  return next;
}
function toElectronLocalRow(game) {
  return {
    streamUrl: game.streamUrl,
    streamProvider: game.streamProvider ?? null,
    wnbaGameId: game.wnbaGameId,
    gamePk: game.gamePk,
    externalIds: game.externalIds,
    content: game.content,
    status: game.status,
    statusLine: game.statusLine,
    period: game.period,
    displayClock: game.displayClock,
    situation: game.situation,
    awayScore: game.awayScore,
    homeScore: game.homeScore
  };
}
function mergeLeagueRowsFromLocal(cloudRows, localRows) {
  if (localRows.length === 0) return cloudRows;
  if (cloudRows.length === 0) return localRows;
  const byId = /* @__PURE__ */ new Map();
  for (const row of cloudRows) byId.set(row.id, row);
  for (const local of localRows) {
    const existing = byId.get(local.id);
    if (!existing) {
      byId.set(local.id, local);
      continue;
    }
    byId.set(local.id, mergeElectronRow(existing, toElectronLocalRow(local)));
  }
  return [...byId.values()];
}
async function readLocalIpcSnapshot() {
  const api = window.grarf;
  if (!api?.gamesGetSnapshot) return null;
  try {
    return await api.gamesGetSnapshot();
  } catch {
    return null;
  }
}
async function supplementOperationalSnapshotFromLocalIpc(transport) {
  const local = await readLocalIpcSnapshot();
  if (!local?.leagues) return transport;
  const mergedLeagues = { ...transport.leagues };
  let changed = false;
  for (const key of getGamesColumnLeagueOrder()) {
    const cloudRows = mergedLeagues[key] ?? [];
    const localRows = local.leagues[key] ?? [];
    if (localRows.length === 0) continue;
    const nextRows = mergeLeagueRowsFromLocal(cloudRows, localRows);
    if (nextRows.length !== cloudRows.length || nextRows.some((g, i) => g !== cloudRows[i])) {
      mergedLeagues[key] = nextRows;
      changed = true;
    }
  }
  for (const key of ["F1"]) {
    const cloudRows = mergedLeagues[key] ?? [];
    const localRows = local.leagues[key] ?? [];
    if (localRows.length === 0) continue;
    const nextRows = mergeLeagueRowsFromLocal(cloudRows, localRows);
    if (nextRows !== cloudRows) {
      mergedLeagues[key] = nextRows;
      changed = true;
    }
  }
  return changed ? { ...transport, leagues: mergedLeagues } : transport;
}

// ../grarf/desktop/src/services/operationalIngest/enrichOperationalTransport.ts
var LOG8 = "[OperationalIngest]";
function cloudRowMissingMlbPk2(row) {
  if (typeof row.gamePk === "number" && row.gamePk > 0) return false;
  const mlb = row.externalIds?.mlb?.trim();
  return !mlb || !/^\d+$/.test(mlb);
}
function isMlbBucketRow2(row) {
  return row.league === "MLB" || row.id.startsWith("espn-MLB-");
}
async function joinMissingMlbProviderIds(transport) {
  const mlbRows = transport.leagues.MLB;
  if (!Array.isArray(mlbRows) || mlbRows.length === 0) return transport;
  if (!mlbRows.some((g) => isMlbBucketRow2(g) && cloudRowMissingMlbPk2(g))) return transport;
  const joined = await joinMlbProviderIdsOnGames(mlbRows);
  return {
    ...transport,
    leagues: {
      ...transport.leagues,
      MLB: joined
    }
  };
}
async function enrichOperationalSnapshotWatchStreamsLocal(transport) {
  let next = transport;
  try {
    next = sanitizeOperationalSnapshotWatchStreams(next);
  } catch (e) {
    console.warn(`${LOG8} watch stream sanitize failed`, e);
  }
  try {
    next = enrichOperationalSnapshotManualGameOverrides(next);
  } catch (e) {
    console.warn(`${LOG8} manual game override enrich failed`, e);
  }
  try {
    next = enrichOperationalSnapshotEspnWatchStreams(next);
  } catch (e) {
    console.warn(`${LOG8} ESPN Watch stream enrich failed`, e);
  }
  try {
    for (const key of ["ATP", "WTA"]) {
      const rows = next.leagues[key];
      if (!Array.isArray(rows) || rows.length === 0) continue;
      await enrichWimbledonEspnWatchStreams(rows);
    }
  } catch (e) {
    console.warn(`${LOG8} Wimbledon ESPN Watch enrich failed`, e);
  }
  try {
    next = await enrichOperationalSnapshotWimbledonSlamTracker(next);
  } catch (e) {
    console.warn(`${LOG8} Wimbledon SlamTracker enrich failed`, e);
  }
  try {
    next = await enrichOperationalSnapshotEspnWatchPickerStreams(next);
  } catch (e) {
    console.warn(`${LOG8} ESPN Watch picker enrich failed`, e);
  }
  try {
    next = enrichOperationalSnapshotUsaNetworkStreams(next);
  } catch (e) {
    console.warn(`${LOG8} USA Network stream enrich failed`, e);
  }
  try {
    next = await enrichOperationalSnapshotTennisChannel(next);
  } catch (e) {
    console.warn(`${LOG8} Tennis Channel Plus enrich failed`, e);
  }
  try {
    next = await enrichOperationalSnapshotFoxWorldCup(next);
  } catch (e) {
    console.warn(`${LOG8} FOX World Cup enrich failed`, e);
  }
  try {
    next = await enrichOperationalSnapshotWnbaStreams(next);
  } catch (e) {
    console.warn(`${LOG8} WNBA Prime Video enrich failed`, e);
  }
  try {
    next = await enrichOperationalSnapshotFotmob(next);
  } catch (e) {
    console.warn(`${LOG8} FotMob World Cup enrich failed`, e);
  }
  return next;
}
async function enrichOperationalTransport(rawTransport) {
  let transport = rawTransport;
  try {
    transport = await supplementOperationalSnapshotFromLocalIpc(transport);
  } catch (e) {
    console.warn(`${LOG8} local IPC supplement failed`, e);
  }
  if (!isGrarfWebRenderer()) {
    try {
      transport = await enrichOperationalSnapshotWatchStreamsLocal(transport);
    } catch (e) {
      console.warn(`${LOG8} watch/stream enrich failed`, e);
    }
    try {
      transport = await joinMissingMlbProviderIds(transport);
    } catch (e) {
      console.warn(`${LOG8} MLB provider join failed`, e);
    }
  }
  return transport;
}

// ../grarf/desktop/src/services/operationalIngest/fetchOperationalSnapshot.ts
init_define_import_meta_env();

// ../grarf/desktop/src/config/operationalIngestConfig.ts
init_define_import_meta_env();
function resolveWebOperationalIngestUrl() {
  if (typeof window === "undefined") return null;
  return window.GRARF_WEB_CONFIG?.operationalIngestUrl?.trim() || null;
}
function getOperationalIngestConfig() {
  const isWeb = isGrarfWebRenderer();
  const envProvider = define_import_meta_env_default.VITE_OPERATIONAL_INGEST_PROVIDER;
  let provider;
  if (envProvider === "grarf_cloud" || envProvider === "espn_local_ipc") {
    provider = envProvider;
  } else {
    provider = isWeb ? "grarf_cloud" : "espn_local_ipc";
  }
  if (isWeb && provider === "espn_local_ipc") {
    provider = "grarf_cloud";
  }
  const pollRaw = define_import_meta_env_default.VITE_OPERATIONAL_INGEST_POLL_MS ?? (typeof window !== "undefined" ? String(window.GRARF_WEB_CONFIG?.operationalPollIntervalMs ?? "") : "");
  const pollParsed = pollRaw != null ? Number(pollRaw) : NaN;
  const pollIntervalMs = Number.isFinite(pollParsed) && pollParsed >= 15e3 ? pollParsed : 6e4;
  const cloudBaseUrl = define_import_meta_env_default.VITE_GRARF_OPERATIONAL_INGEST_URL?.trim() || resolveWebOperationalIngestUrl() || null;
  return {
    provider,
    cloudBaseUrl,
    pollIntervalMs,
    defaultSource: "espn_local_adapter"
  };
}

// ../grarf/desktop/src/services/operationalIngest/fetchOperationalSnapshot.ts
var LOG9 = "[OperationalIngest]";
var CLOUD_STALE_THRESHOLD_MS = 9e4;
var CLOUD_FETCH_TIMEOUT_MS = 2e4;
var WEB_CLOUD_BOOTSTRAP_TIMEOUT_MS = 2500;
var CLOUD_FETCH_MAX_ATTEMPTS = 3;
var CLOUD_FETCH_RETRY_MS = 1500;
function countOperationalGames(snap) {
  return Object.values(snap.leagues ?? {}).reduce(
    (total, rows) => total + (Array.isArray(rows) ? rows.length : 0),
    0
  );
}
function hasElectronGamesIpc() {
  return Boolean(typeof window !== "undefined" && window.grarf?.gamesGetSnapshot);
}
function emptyOperationalSnapshot() {
  return {
    generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    source: "espn_local_adapter",
    leagues: {}
  };
}
function snapshotAgeMs(generatedAt) {
  if (!generatedAt?.trim()) return Number.POSITIVE_INFINITY;
  const ms = Date.parse(generatedAt);
  if (!Number.isFinite(ms)) return Number.POSITIVE_INFINITY;
  return Math.max(0, Date.now() - ms);
}
function ipcSnapshotToOperationalResponse(snap, source = "espn_local_adapter") {
  const leagues = {};
  for (const [key, rows] of Object.entries(snap.leagues ?? {})) {
    if (Array.isArray(rows) && rows.length > 0) {
      leagues[key] = rows;
    }
  }
  return {
    generatedAt: snap.updatedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
    source,
    leagues
  };
}
async function fetchViaEspnLocalIpcAdapter() {
  const api = window.grarf?.gamesGetSnapshot;
  if (!api) {
    if (define_import_meta_env_default.DEV) {
      console.warn(`${LOG9} source=espn_local_adapter unavailable (no Electron IPC)`);
    }
    return emptyOperationalSnapshot();
  }
  const snap = await api();
  return ipcSnapshotToOperationalResponse(snap);
}
async function fetchViaGrarfCloudService(options) {
  const { cloudBaseUrl } = getOperationalIngestConfig();
  if (!cloudBaseUrl) {
    throw new Error("[OperationalIngest] grarf_cloud provider requires VITE_GRARF_OPERATIONAL_INGEST_URL");
  }
  const url = `${cloudBaseUrl.replace(/\/$/, "")}/operational/snapshot`;
  const maxAttempts = options?.webBootstrap ? 1 : CLOUD_FETCH_MAX_ATTEMPTS;
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const res = await fetch(url, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(
          options?.webBootstrap ? WEB_CLOUD_BOOTSTRAP_TIMEOUT_MS : CLOUD_FETCH_TIMEOUT_MS
        )
      });
      if (res.status === 503) {
        lastError = "grarf_cloud snapshot warming (503)";
        if (attempt < maxAttempts) {
          await new Promise((resolve) => window.setTimeout(resolve, CLOUD_FETCH_RETRY_MS * attempt));
          continue;
        }
        throw new Error(lastError);
      }
      if (!res.ok) {
        throw new Error(`[OperationalIngest] grarf_cloud fetch failed: ${res.status}`);
      }
      const json = await res.json();
      const transport = {
        generatedAt: json.generatedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
        source: json.source ?? "grarf_operational_service",
        leagues: json.leagues ?? {}
      };
      return transport;
    } catch (e) {
      lastError = e instanceof Error ? e.message : String(e);
      if (attempt < maxAttempts) {
        await new Promise((resolve) => window.setTimeout(resolve, CLOUD_FETCH_RETRY_MS * attempt));
        continue;
      }
      throw e;
    }
  }
  throw new Error(lastError ?? "[OperationalIngest] grarf_cloud fetch failed");
}
async function fetchViaWebOperationalIngest() {
  const cloud = await fetchViaGrarfCloudService();
  if (countOperationalGames(cloud) > 0) {
    return cloud;
  }
  throw new Error("[OperationalIngest] grarf_cloud snapshot empty");
}
async function fetchViaGrarfCloudWithLocalFallback() {
  let cloud = null;
  let cloudError = null;
  try {
    cloud = await fetchViaGrarfCloudService();
  } catch (e) {
    cloudError = e instanceof Error ? e.message : String(e);
  }
  const cloudAgeMs = cloud ? snapshotAgeMs(cloud.generatedAt) : Number.POSITIVE_INFINITY;
  const cloudFresh = cloud != null && cloudAgeMs <= CLOUD_STALE_THRESHOLD_MS;
  const electronIpc = hasElectronGamesIpc();
  if (cloudFresh && cloud) {
    return cloud;
  }
  if (!electronIpc) {
    if (cloud) {
      if (define_import_meta_env_default.DEV && !cloudFresh) {
        console.warn(`${LOG9} browser/web using cloud snapshot (stale but authoritative)`, {
          cloudAgeMs,
          cloudError
        });
      }
      return cloud;
    }
    if (isGrarfWebRenderer()) {
      throw new Error(cloudError ?? "[OperationalIngest] grarf_cloud unavailable in browser");
    }
    throw new Error(cloudError ?? "[OperationalIngest] grarf_cloud unavailable in browser");
  }
  const local = await fetchViaEspnLocalIpcAdapter();
  const localAgeMs = snapshotAgeMs(local.generatedAt);
  if (cloud && cloudAgeMs <= localAgeMs) {
    return cloud;
  }
  if (define_import_meta_env_default.DEV && (cloudError || cloud && !cloudFresh)) {
    console.warn(`${LOG9} using local IPC fallback (cloud stale or failed)`, {
      cloudError,
      cloudAgeMs: cloud ? cloudAgeMs : null,
      localAgeMs,
      localGeneratedAt: local.generatedAt
    });
  }
  return {
    ...local,
    source: "espn_local_adapter"
  };
}
async function fetchOperationalSnapshot() {
  const config = getOperationalIngestConfig();
  if (isGrarfWebRenderer()) {
    return fetchViaWebOperationalIngest();
  }
  if (config.provider === "grarf_cloud") {
    return fetchViaGrarfCloudWithLocalFallback();
  }
  return fetchViaEspnLocalIpcAdapter();
}

// ../grarf/desktop/src/lib/operations/loadOperationsDateSnapshotInputs.ts
async function resolveLiveLeaguesForOperationsSnapshot() {
  const rawTransport = await fetchOperationalSnapshot();
  try {
    const enriched = await enrichOperationalTransport(rawTransport);
    return enriched.leagues ?? {};
  } catch {
    return rawTransport.leagues ?? {};
  }
}
async function resolveScheduleByDateForOperationsSnapshot(input) {
  const scheduleByDate = {};
  const fetchSchedule = window.grarf?.gamesFetchScheduleSlate;
  if (!fetchSchedule) return scheduleByDate;
  const dateKeys = /* @__PURE__ */ new Set([input.operationalDateKey.trim()]);
  if (isSelectedDateOperationalSportsDay(input.operationalDateKey, input.now)) {
    dateKeys.add(getOperationalSportsDayDateKey(input.now));
    dateKeys.add(getOperationalSportsDayTomorrowDateKey(input.now));
  }
  await Promise.all(
    [...dateKeys].map(async (dateKey) => {
      try {
        const response = await fetchSchedule(dateKey);
        if (response?.ok && response.leagues) {
          scheduleByDate[dateKey] = response.leagues;
        }
      } catch {
      }
    })
  );
  return scheduleByDate;
}
async function loadOperationsDateSnapshotInputs(operationalDateKey, options) {
  const now = options?.now ?? /* @__PURE__ */ new Date();
  const manualDocumentPromise = options?.manualDocument !== void 0 ? Promise.resolve(options.manualDocument) : fetchGamesSpineManualDocument();
  const [liveLeagues, manualDocument, scheduleByDate] = await Promise.all([
    resolveLiveLeaguesForOperationsSnapshot(),
    manualDocumentPromise,
    resolveScheduleByDateForOperationsSnapshot({ operationalDateKey, now })
  ]);
  return {
    operationalDateKey,
    liveLeagues,
    scheduleByDate,
    manualDocument,
    now
  };
}

// src/admin/hooks/useAdminOperationsDateSnapshot.ts
function useAdminOperationsDateSnapshot(operationalDateKey) {
  const [snapshot, setSnapshot] = (0, import_react5.useState)(null);
  const [loading, setLoading] = (0, import_react5.useState)(true);
  const [error, setError] = (0, import_react5.useState)(null);
  (0, import_react5.useEffect)(() => {
    let cancelled = false;
    async function loadSnapshot() {
      setLoading(true);
      setError(null);
      try {
        const assemblyInput = await loadOperationsDateSnapshotInputs(operationalDateKey);
        const nextSnapshot = buildOperationsDateSnapshot(assemblyInput);
        if (!cancelled) {
          setSnapshot(nextSnapshot);
        }
      } catch (loadError) {
        if (!cancelled) {
          setSnapshot(null);
          setError(
            loadError instanceof Error ? loadError.message : "Failed to assemble operations snapshot"
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }
    void loadSnapshot();
    return () => {
      cancelled = true;
    };
  }, [operationalDateKey]);
  return { snapshot, loading, error };
}

// src/admin/hooks/useOperationsPendingChanges.ts
init_define_import_meta_env();
var import_react6 = __toESM(require_react());

// src/admin/lib/buildOperationalOverrideDraft.ts
init_define_import_meta_env();
function hasText3(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function formatWatchOptions(options) {
  if (!options || options.length === 0) return "";
  return options.map((option) => {
    const label = option.displayName?.trim() || option.provider;
    const link = option.deepLink?.trim();
    return link ? `${label} \u2014 ${link}` : label;
  }).join("\n");
}
function readOverrideString2(override, key) {
  if (!override || typeof override !== "object") return "";
  const value = override[key];
  if (typeof value === "string" && value.trim()) return value.trim();
  return "";
}
function resolveYesNoDraft(overrideValue, resolvedFlag) {
  if (hasText3(overrideValue)) return overrideValue.trim().toUpperCase();
  if (resolvedFlag) return "Y";
  return "";
}
function buildOperationalOverrideDraft(game) {
  const override = game.manualGameOverride;
  let primaryStream = "";
  if (hasText3(override?.streamUrl)) {
    primaryStream = override.streamUrl.trim();
  } else if (hasText3(override?.channelUrl)) {
    primaryStream = override.channelUrl.trim();
  }
  let broadcastOverride = "";
  if (override?.broadcasts && override.broadcasts.length > 0) {
    broadcastOverride = override.broadcasts.map((label) => label.trim()).filter(Boolean).join(", ");
  } else if (override?.channels && override.channels.length > 0) {
    broadcastOverride = override.channels.map((label) => label.trim()).filter(Boolean).join(", ");
  } else if (hasText3(override?.channel)) {
    broadcastOverride = override.channel.trim();
  }
  let centerPaneUrlWhenGameCardClicked = "";
  if (hasText3(override?.centerPaneUrlWhenGameCardClicked)) {
    centerPaneUrlWhenGameCardClicked = override.centerPaneUrlWhenGameCardClicked.trim();
  } else if (hasText3(game.navigationOverride?.url)) {
    centerPaneUrlWhenGameCardClicked = game.navigationOverride.url.trim();
  }
  return {
    primaryStream,
    alternativeStreams: formatWatchOptions(override?.watchOptions),
    broadcastOverride,
    centerPaneUrlWhenGameCardClicked,
    centerPane: resolveYesNoDraft(override?.centerPane, game.navigationOverride?.openInCenterPane),
    browserTab: resolveYesNoDraft(override?.browserTab, game.navigationOverride?.openInBrowserTab),
    manualHighlights: readOverrideString2(override, "manualHighlights"),
    manualSocialPosts: readOverrideString2(override, "manualSocialPosts"),
    operationalNotes: readOverrideString2(override, "operationalNotes")
  };
}

// src/admin/hooks/useOperationsPendingChanges.ts
function buildPendingGameEdit(input) {
  return {
    gameKey: input.game.gameKey,
    eventName: input.game.eventName,
    leagueLabel: input.game.leagueLabel,
    operationalDateKey: input.operationalDateKey,
    originalDraft: input.originalDraft,
    editedDraft: input.editedDraft,
    game: input.game
  };
}
function useOperationsPendingChanges(operationalDateKey, selectedGame) {
  const [pendingByGameKey, setPendingByGameKey] = (0, import_react6.useState)({});
  const [activeOriginalDraft, setActiveOriginalDraft] = (0, import_react6.useState)(
    null
  );
  const [activeDraft, setActiveDraft] = (0, import_react6.useState)(null);
  const [saveAllState, setSaveAllState] = (0, import_react6.useState)({
    status: "idle"
  });
  const pendingRef = (0, import_react6.useRef)(pendingByGameKey);
  pendingRef.current = pendingByGameKey;
  const pendingEdits = (0, import_react6.useMemo)(
    () => Object.values(pendingByGameKey),
    [pendingByGameKey]
  );
  const pendingGameKeys = (0, import_react6.useMemo)(
    () => new Set(pendingEdits.map((entry) => entry.gameKey)),
    [pendingEdits]
  );
  const totalPendingFieldChanges = (0, import_react6.useMemo)(
    () => countOperationsPendingFieldChanges(pendingEdits),
    [pendingEdits]
  );
  const currentGameChangeCount = (0, import_react6.useMemo)(() => {
    if (!selectedGame || !activeDraft || !activeOriginalDraft) return 0;
    return resolveOperationsChangeFields(activeOriginalDraft, activeDraft).length;
  }, [activeDraft, activeOriginalDraft, selectedGame]);
  const syncPendingEntry = (0, import_react6.useCallback)(
    (game, originalDraft, editedDraft) => {
      const changes = resolveOperationsChangeFields(originalDraft, editedDraft);
      setPendingByGameKey((current) => {
        if (changes.length === 0) {
          if (!current[game.gameKey]) return current;
          const next = { ...current };
          delete next[game.gameKey];
          return next;
        }
        return {
          ...current,
          [game.gameKey]: buildPendingGameEdit({
            game,
            operationalDateKey,
            originalDraft,
            editedDraft
          })
        };
      });
      setSaveAllState({ status: "idle" });
    },
    [operationalDateKey]
  );
  (0, import_react6.useEffect)(() => {
    setPendingByGameKey({});
    setSaveAllState({ status: "idle" });
  }, [operationalDateKey]);
  (0, import_react6.useEffect)(() => {
    if (!selectedGame) {
      setActiveOriginalDraft(null);
      setActiveDraft(null);
      return;
    }
    const snapshotOriginal = buildOperationalOverrideDraft(selectedGame);
    const pending = pendingRef.current[selectedGame.gameKey];
    setActiveOriginalDraft(pending?.originalDraft ?? snapshotOriginal);
    setActiveDraft(pending?.editedDraft ?? snapshotOriginal);
  }, [selectedGame?.gameKey, selectedGame]);
  const updateField = (0, import_react6.useCallback)(
    (field, value) => {
      if (!selectedGame || !activeOriginalDraft) return;
      setActiveDraft((current) => {
        const baseDraft = current ?? activeOriginalDraft;
        const nextDraft = { ...baseDraft, [field]: value };
        syncPendingEntry(selectedGame, activeOriginalDraft, nextDraft);
        return nextDraft;
      });
    },
    [activeOriginalDraft, selectedGame, syncPendingEntry]
  );
  const discardGame = (0, import_react6.useCallback)(
    (gameKey) => {
      setPendingByGameKey((current) => {
        if (!current[gameKey]) return current;
        const next = { ...current };
        delete next[gameKey];
        return next;
      });
      setSaveAllState({ status: "idle" });
      if (selectedGame?.gameKey === gameKey) {
        const original = buildOperationalOverrideDraft(selectedGame);
        setActiveOriginalDraft(original);
        setActiveDraft(original);
      }
    },
    [selectedGame]
  );
  const discardActiveGame = (0, import_react6.useCallback)(() => {
    if (!selectedGame) return;
    discardGame(selectedGame.gameKey);
  }, [discardGame, selectedGame]);
  const discardAll = (0, import_react6.useCallback)(() => {
    setPendingByGameKey({});
    setSaveAllState({ status: "idle" });
    if (selectedGame) {
      const original = buildOperationalOverrideDraft(selectedGame);
      setActiveOriginalDraft(original);
      setActiveDraft(original);
    }
  }, [selectedGame]);
  const saveAll = (0, import_react6.useCallback)(() => {
    const result = validateAndBuildOperationsPendingChangesCollection(
      operationalDateKey,
      pendingEdits
    );
    if (!result.ok) {
      setSaveAllState({ status: "validation_error", issues: result.issues });
      return null;
    }
    setSaveAllState({ status: "success", collection: result.collection });
    return result.collection;
  }, [operationalDateKey, pendingEdits]);
  const isGamePending = (0, import_react6.useCallback)(
    (gameKey) => pendingGameKeys.has(gameKey),
    [pendingGameKeys]
  );
  return {
    activeDraft,
    currentGameChangeCount,
    discardActiveGame,
    discardAll,
    discardGame,
    isGamePending,
    pendingEdits,
    pendingGameCount: pendingEdits.length,
    pendingGameKeys,
    saveAll,
    saveAllState,
    totalPendingFieldChanges,
    updateField
  };
}

// src/admin/lib/resolveOperationsConsoleDateKeys.ts
init_define_import_meta_env();
var OPERATIONS_CONSOLE_FUTURE_DAY_COUNT = 13;
function resolveOperationsConsoleDateKeys(now = /* @__PURE__ */ new Date()) {
  const todayKey = getOperationalSportsDayDateKey(now, GRARF_OPERATIONAL_SLATE_TIMEZONE);
  const dateKeys = [];
  for (let dayOffset = 0; dayOffset <= OPERATIONS_CONSOLE_FUTURE_DAY_COUNT; dayOffset += 1) {
    dateKeys.push(offsetOperationalDateKey(todayKey, dayOffset, GRARF_OPERATIONAL_SLATE_TIMEZONE));
  }
  return dateKeys;
}
function resolveDefaultOperationsConsoleDateKey(now = /* @__PURE__ */ new Date()) {
  return getOperationalSportsDayDateKey(now, GRARF_OPERATIONAL_SLATE_TIMEZONE);
}

// src/admin/lib/searchOperationsSnapshotGames.ts
init_define_import_meta_env();
function normalizeSearchText(value) {
  return value.trim().toLowerCase();
}
function normalizeOperationsSnapshotSearchQuery(query) {
  return normalizeSearchText(query);
}
function pushSearchTerm(terms, value) {
  const trimmed = value?.trim();
  if (trimmed) terms.push(trimmed);
}
function collectOperationsSnapshotGameSearchTerms(game) {
  const terms = [];
  pushSearchTerm(terms, game.leagueLabel);
  pushSearchTerm(terms, String(game.league));
  pushSearchTerm(terms, game.eventName);
  pushSearchTerm(terms, game.participants.away);
  pushSearchTerm(terms, game.participants.home);
  pushSearchTerm(terms, game.statusLine);
  pushSearchTerm(terms, game.spineSectionLabel);
  pushSearchTerm(terms, game.spineSectionKey);
  const sourceGame = game.game;
  pushSearchTerm(terms, sourceGame.awayTeam);
  pushSearchTerm(terms, sourceGame.homeTeam);
  pushSearchTerm(terms, sourceGame.awayTeamAbbrev);
  pushSearchTerm(terms, sourceGame.homeTeamAbbrev);
  pushSearchTerm(terms, sourceGame.awayCity);
  pushSearchTerm(terms, sourceGame.homeCity);
  pushSearchTerm(terms, sourceGame.awayPitcher);
  pushSearchTerm(terms, sourceGame.homePitcher);
  pushSearchTerm(terms, sourceGame.statusLine);
  const metadata = sourceGame.metadata;
  if (metadata) {
    pushSearchTerm(terms, metadata.officialAwayName);
    pushSearchTerm(terms, metadata.officialHomeName);
    pushSearchTerm(terms, metadata.tennis?.contextLine);
    pushSearchTerm(terms, metadata.canonicalEvent?.title);
    pushSearchTerm(terms, metadata.canonicalEvent?.sessionLabel);
    pushSearchTerm(terms, metadata.manualGamesSpine?.eventName);
    pushSearchTerm(terms, metadata.manualGamesSpine?.leagueLabel);
    pushSearchTerm(terms, metadata.manualGamesSpine?.displayName);
    pushSearchTerm(terms, metadata.ufcCardName);
    pushSearchTerm(terms, metadata.ufcCardSegment);
    pushSearchTerm(terms, metadata.ufcWeightClass);
    pushSearchTerm(terms, metadata.racingSessionLabel);
    pushSearchTerm(terms, metadata.worldCupGroupNotes);
  }
  pushSearchTerm(terms, sourceGame.awayPlayerRank?.displayLabel);
  pushSearchTerm(terms, sourceGame.homePlayerRank?.displayLabel);
  return terms;
}
function operationsSnapshotGameMatchesSearchQuery(game, normalizedQuery) {
  if (!normalizedQuery) return false;
  const haystack = collectOperationsSnapshotGameSearchTerms(game).map(normalizeSearchText).join("\0");
  return haystack.includes(normalizedQuery);
}
function searchOperationsSnapshotGames(snapshot, query) {
  const normalizedQuery = normalizeOperationsSnapshotSearchQuery(query);
  if (!normalizedQuery) return [];
  const matches = [];
  const seenGameKeys = /* @__PURE__ */ new Set();
  for (const section of snapshot.sections) {
    for (const game of section.games) {
      if (seenGameKeys.has(game.gameKey)) continue;
      if (!operationsSnapshotGameMatchesSearchQuery(game, normalizedQuery)) continue;
      seenGameKeys.add(game.gameKey);
      matches.push(game);
    }
  }
  return matches;
}

// src/admin/modules/OperationsModule.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
function formatGameListLabel(game) {
  const away = game.participants.away.trim();
  const home = game.participants.home.trim();
  if (away && home) return `${away} @ ${home}`;
  return game.eventName.trim() || game.gameKey;
}
function computeFeaturedPendingChanges(baseline, working) {
  const changes = [];
  for (const key of Object.keys(baseline)) {
    if (!(key in working)) changes.push({ gameKey: key, priority: null });
  }
  for (const [key, priority] of Object.entries(working)) {
    if (baseline[key] !== priority) changes.push({ gameKey: key, priority });
  }
  return changes;
}
function OperationsModule() {
  const operationalDateKeys = (0, import_react7.useMemo)(() => resolveOperationsConsoleDateKeys(), []);
  const [operationalDateKey, setOperationalDateKey] = (0, import_react7.useState)(
    resolveDefaultOperationsConsoleDateKey
  );
  const [selectedSectionKey, setSelectedSectionKey] = (0, import_react7.useState)(null);
  const [selectedGameKey, setSelectedGameKey] = (0, import_react7.useState)(null);
  const [searchQuery, setSearchQuery] = (0, import_react7.useState)("");
  const [featuredBaseline, setFeaturedBaseline] = (0, import_react7.useState)({});
  const [featuredWorking, setFeaturedWorking] = (0, import_react7.useState)({});
  const [featuredSaveError, setFeaturedSaveError] = (0, import_react7.useState)(null);
  const [featuredSaving, setFeaturedSaving] = (0, import_react7.useState)(false);
  const featuredBaselineRef = (0, import_react7.useRef)(featuredBaseline);
  featuredBaselineRef.current = featuredBaseline;
  const { snapshot, loading, error } = useAdminOperationsDateSnapshot(operationalDateKey);
  const normalizedSearchQuery = normalizeOperationsSnapshotSearchQuery(searchQuery);
  const isSearchActive = normalizedSearchQuery.length > 0;
  const activeSectionKey = (0, import_react7.useMemo)(() => {
    if (!snapshot || snapshot.sections.length === 0) return null;
    if (selectedSectionKey && snapshot.sections.some((section) => section.sectionKey === selectedSectionKey)) {
      return selectedSectionKey;
    }
    return snapshot.sections[0]?.sectionKey ?? null;
  }, [selectedSectionKey, snapshot]);
  const activeSection = (0, import_react7.useMemo)(() => {
    if (!snapshot || !activeSectionKey) return null;
    return snapshot.sections.find((section) => section.sectionKey === activeSectionKey) ?? null;
  }, [activeSectionKey, snapshot]);
  const selectedGame = (0, import_react7.useMemo)(() => {
    if (!snapshot || !selectedGameKey) return null;
    return snapshot.gamesByKey[selectedGameKey] ?? null;
  }, [selectedGameKey, snapshot]);
  const searchResults = (0, import_react7.useMemo)(() => {
    if (!snapshot || !isSearchActive) return [];
    return searchOperationsSnapshotGames(snapshot, searchQuery);
  }, [isSearchActive, searchQuery, snapshot]);
  const visibleGames = isSearchActive ? searchResults : activeSection?.games ?? [];
  const {
    activeDraft,
    currentGameChangeCount,
    discardActiveGame,
    discardAll,
    isGamePending,
    pendingEdits,
    pendingGameCount,
    saveAll,
    saveAllState,
    totalPendingFieldChanges,
    updateField
  } = useOperationsPendingChanges(operationalDateKey, selectedGame);
  (0, import_react7.useEffect)(() => {
    let cancelled = false;
    void fetchPersistedFeaturedGames().then((data) => {
      if (cancelled) return;
      setFeaturedBaseline(data);
      setFeaturedWorking({ ...data });
    }).catch(() => {
    });
    return () => {
      cancelled = true;
    };
  }, [operationalDateKey]);
  const featuredPendingChanges = (0, import_react7.useMemo)(
    () => computeFeaturedPendingChanges(featuredBaseline, featuredWorking),
    [featuredBaseline, featuredWorking]
  );
  const onFeaturedPriorityChange = (0, import_react7.useCallback)((gameKey, raw) => {
    const trimmed = raw.trim();
    setFeaturedWorking((current) => {
      const next = { ...current };
      if (!trimmed) {
        delete next[gameKey];
      } else {
        const n = Math.round(Number(trimmed));
        if (Number.isFinite(n) && n >= 1 && n <= 10) {
          next[gameKey] = n;
        }
      }
      return next;
    });
    setFeaturedSaveError(null);
  }, []);
  const handleSaveAll = (0, import_react7.useCallback)(async () => {
    saveAll();
    if (featuredPendingChanges.length === 0) return;
    setFeaturedSaveError(null);
    setFeaturedSaving(true);
    try {
      for (const change of featuredPendingChanges) {
        await upsertFeaturedGamePriority(change.gameKey, change.priority);
      }
      const saved = await fetchPersistedFeaturedGames();
      setFeaturedBaseline(saved);
      setFeaturedWorking({ ...saved });
    } catch (err) {
      setFeaturedSaveError(
        err instanceof Error ? err.message : "Unable to save featured priorities"
      );
    } finally {
      setFeaturedSaving(false);
    }
  }, [saveAll, featuredPendingChanges]);
  const handleDiscardAll = (0, import_react7.useCallback)(() => {
    discardAll();
    setFeaturedWorking({ ...featuredBaselineRef.current });
    setFeaturedSaveError(null);
  }, [discardAll]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("header", { className: "grarf-admin__module-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "grarf-admin__module-title", children: "Operations" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "grarf-admin__module-description", children: "Read-only operational snapshot assembled from the same resolvers as the public Games Spine. Select a date, section, and game to inspect existing operational data." }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grarf-admin__toolbar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { className: "grarf-admin__label", htmlFor: "operations-date", children: "Operational date" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "select",
          {
            id: "operations-date",
            className: "grarf-admin__select",
            value: operationalDateKey,
            onChange: (event) => {
              setOperationalDateKey(event.target.value);
              setSelectedSectionKey(null);
              setSelectedGameKey(null);
              setSearchQuery("");
            },
            children: operationalDateKeys.map((dateKey) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { value: dateKey, children: dateKey }, dateKey))
          }
        ),
        loading ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "grarf-admin__status", children: "Assembling snapshot\u2026" }) : null,
        !loading && snapshot ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "grarf-admin__status", children: [
          "Assembled ",
          new Date(snapshot.assembledAt).toLocaleString()
        ] }) : null,
        error ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "grarf-admin__status grarf-admin__status--error", children: error }) : null
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      OperationsPendingChangesBar,
      {
        pendingEdits,
        pendingGameCount,
        totalPendingFieldChanges,
        featuredPriorityChangeCount: featuredPendingChanges.length,
        featuredSaveError,
        saving: featuredSaving,
        saveAllState,
        onSaveAll: handleSaveAll,
        onDiscardAll: handleDiscardAll
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(OperationsSnapshotSearchBar, { value: searchQuery, onChange: setSearchQuery }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grarf-admin__operations-body", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { className: "grarf-admin__panel", "aria-label": "Operational sections", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grarf-admin__panel-header", children: "Sections" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grarf-admin__panel-scroll", children: !snapshot || snapshot.sections.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "grarf-admin__empty", children: loading ? "Loading sections\u2026" : "No operational sections for this date." }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("ul", { className: "grarf-admin__list", children: snapshot.sections.map((section) => {
          const isActive = section.sectionKey === activeSectionKey;
          return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "grarf-admin__list-item", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
            "button",
            {
              type: "button",
              className: isActive ? "grarf-admin__list-button grarf-admin__list-button--active" : "grarf-admin__list-button",
              onClick: () => {
                setSelectedSectionKey(section.sectionKey);
                setSelectedGameKey(null);
              },
              children: [
                section.sectionLabel,
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "grarf-admin__list-button-subtitle", children: [
                  section.kind,
                  " \xB7 ",
                  section.games.length,
                  " game",
                  section.games.length === 1 ? "" : "s"
                ] })
              ]
            }
          ) }, section.sectionKey);
        }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { className: "grarf-admin__panel", "aria-label": "Games in section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grarf-admin__panel-header", children: isSearchActive ? "Search Results" : "Games" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grarf-admin__panel-scroll", children: loading ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "grarf-admin__empty", children: "Loading games\u2026" }) : isSearchActive ? visibleGames.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "grarf-admin__empty", children: "No games match your search." }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("ul", { className: "grarf-admin__list", children: visibleGames.map((game) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          GameListItem,
          {
            game,
            isActive: game.gameKey === selectedGameKey,
            isGamePending,
            showLeague: true,
            featuredPriority: featuredWorking[game.gameKey] ?? null,
            onSelect: setSelectedGameKey,
            onFeaturedPriorityChange
          },
          game.gameKey
        )) }) : !activeSection || visibleGames.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "grarf-admin__empty", children: "Select a section with games." }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("ul", { className: "grarf-admin__list", children: visibleGames.map((game) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          GameListItem,
          {
            game,
            isActive: game.gameKey === selectedGameKey,
            isGamePending,
            featuredPriority: featuredWorking[game.gameKey] ?? null,
            onSelect: setSelectedGameKey,
            onFeaturedPriorityChange
          },
          game.gameKey
        )) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { className: "grarf-admin__panel", "aria-label": "Operations Console", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grarf-admin__panel-header", children: "Operations Console" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grarf-admin__panel-scroll", children: selectedGame && activeDraft ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          OperationsConsole,
          {
            game: selectedGame,
            operationalDateKey,
            assembledAt: snapshot?.assembledAt,
            draft: activeDraft,
            currentGameChangeCount,
            onFieldChange: updateField,
            onDiscardCurrent: discardActiveGame
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "grarf-admin__empty", children: "Select a game to view its operational summary and manual overrides." }) })
      ] })
    ] })
  ] });
}
function GameListItem({
  game,
  isActive,
  isGamePending,
  showLeague = false,
  featuredPriority,
  onSelect,
  onFeaturedPriorityChange
}) {
  const hasPendingEdits = isGamePending(game.gameKey);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("li", { className: "grarf-admin__list-item", style: { display: "flex", alignItems: "stretch" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "button",
      {
        type: "button",
        className: isActive ? "grarf-admin__list-button grarf-admin__list-button--active" : hasPendingEdits ? "grarf-admin__list-button grarf-admin__list-button--pending" : "grarf-admin__list-button",
        style: { flex: 1, minWidth: 0 },
        onClick: () => onSelect(game.gameKey),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "grarf-admin__list-button-row", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "grarf-admin__list-button-label", children: formatGameListLabel(game) }),
            hasPendingEdits ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "grarf-admin__list-pending-badge", title: "Pending edits", children: "Pending" }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(OperationsGameIndicatorBadges, { game })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "grarf-admin__list-button-subtitle", children: [
            showLeague ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
              game.leagueLabel,
              " \xB7 "
            ] }) : null,
            game.status,
            game.statusLine ? ` \xB7 ${game.statusLine}` : ""
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "input",
      {
        type: "number",
        min: 1,
        max: 10,
        value: featuredPriority ?? "",
        placeholder: "\u2014",
        title: "Featured priority (1\u201310, blank = not featured)",
        "aria-label": `Featured priority for ${formatGameListLabel(game)}`,
        onChange: (event) => onFeaturedPriorityChange(game.gameKey, event.target.value),
        style: {
          width: "40px",
          flexShrink: 0,
          background: featuredPriority != null ? "rgba(100,200,150,0.08)" : "#071012",
          border: "none",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          color: featuredPriority != null ? "#9de8c0" : "#5f7a7a",
          fontSize: "11px",
          fontFamily: "monospace",
          textAlign: "center",
          padding: "0 2px",
          outline: "none"
        }
      }
    )
  ] });
}

// src/admin/GRARFAdminApp.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
function GRARFAdminApp() {
  const [activeNavItemId, setActiveNavItemId] = (0, import_react8.useState)("operations");
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "grarf-admin", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(AdminSidebar, { activeItemId: activeNavItemId, onSelect: setActiveNavItemId }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("main", { className: "grarf-admin__main", children: activeNavItemId === "operations" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(OperationsModule, {}) : null })
  ] });
}

// admin.tsx
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("GRARF Admin root element not found");
}
(0, import_client.createRoot)(rootElement).render(
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react9.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(GRARFAdminApp, {}) })
);
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
