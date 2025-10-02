// Copyright (c) 2021 Telltale Games. All rights reserved.
// See LICENSE for usage, modification, and distribution terms.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var core = require('@actions/core');
var github = require('@actions/github');
function get_info() {
    return _async_to_generator(function() {
        var instanceId, region;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        fetch("http://169.254.169.254/latest/meta-data/instance-id")
                    ];
                case 1:
                    return [
                        4,
                        _state.sent().text()
                    ];
                case 2:
                    instanceId = _state.sent();
                    return [
                        4,
                        fetch("http://169.254.169.254/latest/meta-data/placement/region")
                    ];
                case 3:
                    return [
                        4,
                        _state.sent().text()
                    ];
                case 4:
                    region = _state.sent();
                    core.info("Instance Id: ".concat(instanceId));
                    core.info("Region: ".concat(region));
                    core.info("Connect: https://".concat(region, ".console.aws.amazon.com/systems-manager/session-manager/").concat(instanceId));
                    return [
                        2
                    ];
            }
        });
    })();
}
try {
    get_info();
} catch (error) {
    // Not an error, as we don't want to fail a build on a non-aws builder.
    core.info("Get Instance failure");
    core.info(error.message);
//core.setFailed(error.message);
}

function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
module.exports = /******/ function() {
    /******/ var __webpack_modules__ = {
        /***/ 351: /***/ function(__unused_webpack_module, exports, __nccwpck_require__) {
            "use strict";
            var __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) {
                    for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
                }
                result["default"] = mod;
                return result;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var os = __importStar(__nccwpck_require__(87));
            var utils_1 = __nccwpck_require__(278);
            /**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */ function issueCommand(command, properties, message) {
                var cmd = new Command(command, properties, message);
                process.stdout.write(cmd.toString() + os.EOL);
            }
            exports.issueCommand = issueCommand;
            function issue(name) {
                var message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
                issueCommand(name, {}, message);
            }
            exports.issue = issue;
            var CMD_STRING = '::';
            var Command = /*#__PURE__*/ function() {
                function Command(command, properties, message) {
                    _class_call_check(this, Command);
                    if (!command) {
                        command = 'missing.command';
                    }
                    this.command = command;
                    this.properties = properties;
                    this.message = message;
                }
                _create_class(Command, [
                    {
                        key: "toString",
                        value: function toString() {
                            var cmdStr = CMD_STRING + this.command;
                            if (this.properties && Object.keys(this.properties).length > 0) {
                                cmdStr += ' ';
                                var first = true;
                                for(var key in this.properties){
                                    if (this.properties.hasOwnProperty(key)) {
                                        var val = this.properties[key];
                                        if (val) {
                                            if (first) {
                                                first = false;
                                            } else {
                                                cmdStr += ',';
                                            }
                                            cmdStr += "".concat(key, "=").concat(escapeProperty(val));
                                        }
                                    }
                                }
                            }
                            cmdStr += "".concat(CMD_STRING).concat(escapeData(this.message));
                            return cmdStr;
                        }
                    }
                ]);
                return Command;
            }();
            function escapeData(s) {
                return utils_1.toCommandValue(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
            }
            function escapeProperty(s) {
                return utils_1.toCommandValue(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A').replace(/:/g, '%3A').replace(/,/g, '%2C');
            }
        //# sourceMappingURL=command.js.map
        /***/ },
        /***/ 186: /***/ function(__unused_webpack_module, exports, __nccwpck_require__) {
            "use strict";
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return _instanceof(value, P) ? value : new P(function(resolve) {
                        resolve(value);
                    });
                }
                return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            var __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) {
                    for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
                }
                result["default"] = mod;
                return result;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var command_1 = __nccwpck_require__(351);
            var file_command_1 = __nccwpck_require__(717);
            var utils_1 = __nccwpck_require__(278);
            var os = __importStar(__nccwpck_require__(87));
            var path = __importStar(__nccwpck_require__(622));
            /**
 * The code to exit an action
 */ var ExitCode;
            (function(ExitCode) {
                /**
     * A code indicating that the action was successful
     */ ExitCode[ExitCode["Success"] = 0] = "Success";
                /**
     * A code indicating that the action was a failure
     */ ExitCode[ExitCode["Failure"] = 1] = "Failure";
            })(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
            //-----------------------------------------------------------------------
            // Variables
            //-----------------------------------------------------------------------
            /**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function exportVariable(name, val) {
                var convertedVal = utils_1.toCommandValue(val);
                process.env[name] = convertedVal;
                var filePath = process.env['GITHUB_ENV'] || '';
                if (filePath) {
                    var delimiter = '_GitHubActionsFileCommandDelimeter_';
                    var commandValue = "".concat(name, "<<").concat(delimiter).concat(os.EOL).concat(convertedVal).concat(os.EOL).concat(delimiter);
                    file_command_1.issueCommand('ENV', commandValue);
                } else {
                    command_1.issueCommand('set-env', {
                        name: name
                    }, convertedVal);
                }
            }
            exports.exportVariable = exportVariable;
            /**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */ function setSecret(secret) {
                command_1.issueCommand('add-mask', {}, secret);
            }
            exports.setSecret = setSecret;
            /**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */ function addPath(inputPath) {
                var filePath = process.env['GITHUB_PATH'] || '';
                if (filePath) {
                    file_command_1.issueCommand('PATH', inputPath);
                } else {
                    command_1.issueCommand('add-path', {}, inputPath);
                }
                process.env['PATH'] = "".concat(inputPath).concat(path.delimiter).concat(process.env['PATH']);
            }
            exports.addPath = addPath;
            /**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */ function getInput(name, options) {
                var val = process.env["INPUT_".concat(name.replace(/ /g, '_').toUpperCase())] || '';
                if (options && options.required && !val) {
                    throw new Error("Input required and not supplied: ".concat(name));
                }
                return val.trim();
            }
            exports.getInput = getInput;
            /**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function setOutput(name, value) {
                command_1.issueCommand('set-output', {
                    name: name
                }, value);
            }
            exports.setOutput = setOutput;
            /**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */ function setCommandEcho(enabled) {
                command_1.issue('echo', enabled ? 'on' : 'off');
            }
            exports.setCommandEcho = setCommandEcho;
            //-----------------------------------------------------------------------
            // Results
            //-----------------------------------------------------------------------
            /**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */ function setFailed(message) {
                process.exitCode = ExitCode.Failure;
                error(message);
            }
            exports.setFailed = setFailed;
            //-----------------------------------------------------------------------
            // Logging Commands
            //-----------------------------------------------------------------------
            /**
 * Gets whether Actions Step Debug is on or not
 */ function isDebug() {
                return process.env['RUNNER_DEBUG'] === '1';
            }
            exports.isDebug = isDebug;
            /**
 * Writes debug message to user log
 * @param message debug message
 */ function debug(message) {
                command_1.issueCommand('debug', {}, message);
            }
            exports.debug = debug;
            /**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 */ function error(message) {
                command_1.issue('error', _instanceof(message, Error) ? message.toString() : message);
            }
            exports.error = error;
            /**
 * Adds an warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 */ function warning(message) {
                command_1.issue('warning', _instanceof(message, Error) ? message.toString() : message);
            }
            exports.warning = warning;
            /**
 * Writes info to log with console.log.
 * @param message info message
 */ function info(message) {
                process.stdout.write(message + os.EOL);
            }
            exports.info = info;
            /**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */ function startGroup(name) {
                command_1.issue('group', name);
            }
            exports.startGroup = startGroup;
            /**
 * End an output group.
 */ function endGroup() {
                command_1.issue('endgroup');
            }
            exports.endGroup = endGroup;
            /**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */ function group(name, fn) {
                return __awaiter(this, void 0, void 0, function() {
                    var result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                startGroup(name);
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    ,
                                    3,
                                    4
                                ]);
                                return [
                                    4,
                                    fn()
                                ];
                            case 2:
                                result = _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                endGroup();
                                return [
                                    7
                                ];
                            case 4:
                                return [
                                    2,
                                    result
                                ];
                        }
                    });
                });
            }
            exports.group = group;
            //-----------------------------------------------------------------------
            // Wrapper action state
            //-----------------------------------------------------------------------
            /**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function saveState(name, value) {
                command_1.issueCommand('save-state', {
                    name: name
                }, value);
            }
            exports.saveState = saveState;
            /**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */ function getState(name) {
                return process.env["STATE_".concat(name)] || '';
            }
            exports.getState = getState;
        //# sourceMappingURL=core.js.map
        /***/ },
        /***/ 717: /***/ function(__unused_webpack_module, exports, __nccwpck_require__) {
            "use strict";
            // For internal use, subject to change.
            var __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) {
                    for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
                }
                result["default"] = mod;
                return result;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            // We use any as a valid input type
            /* eslint-disable @typescript-eslint/no-explicit-any */ var fs = __importStar(__nccwpck_require__(747));
            var os = __importStar(__nccwpck_require__(87));
            var utils_1 = __nccwpck_require__(278);
            function issueCommand(command, message) {
                var filePath = process.env["GITHUB_".concat(command)];
                if (!filePath) {
                    throw new Error("Unable to find environment variable for file command ".concat(command));
                }
                if (!fs.existsSync(filePath)) {
                    throw new Error("Missing file at path: ".concat(filePath));
                }
                fs.appendFileSync(filePath, "".concat(utils_1.toCommandValue(message)).concat(os.EOL), {
                    encoding: 'utf8'
                });
            }
            exports.issueCommand = issueCommand;
        //# sourceMappingURL=file-command.js.map
        /***/ },
        /***/ 278: /***/ function(__unused_webpack_module, exports) {
            "use strict";
            var toCommandValue = /**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */ function toCommandValue(input) {
                if (input === null || input === undefined) {
                    return '';
                } else if (typeof input === 'string' || _instanceof(input, String)) {
                    return input;
                }
                return JSON.stringify(input);
            };
            // We use any as a valid input type
            /* eslint-disable @typescript-eslint/no-explicit-any */ Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.toCommandValue = toCommandValue;
        //# sourceMappingURL=utils.js.map
        /***/ },
        /***/ 53: /***/ function(__unused_webpack_module, exports, __nccwpck_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Context = void 0;
            var fs_1 = __nccwpck_require__(747);
            var os_1 = __nccwpck_require__(87);
            var Context = /*#__PURE__*/ function() {
                function Context() {
                    _class_call_check(this, Context);
                    this.payload = {};
                    if (process.env.GITHUB_EVENT_PATH) {
                        if (fs_1.existsSync(process.env.GITHUB_EVENT_PATH)) {
                            this.payload = JSON.parse(fs_1.readFileSync(process.env.GITHUB_EVENT_PATH, {
                                encoding: 'utf8'
                            }));
                        } else {
                            var path = process.env.GITHUB_EVENT_PATH;
                            process.stdout.write("GITHUB_EVENT_PATH ".concat(path, " does not exist").concat(os_1.EOL));
                        }
                    }
                    this.eventName = process.env.GITHUB_EVENT_NAME;
                    this.sha = process.env.GITHUB_SHA;
                    this.ref = process.env.GITHUB_REF;
                    this.workflow = process.env.GITHUB_WORKFLOW;
                    this.action = process.env.GITHUB_ACTION;
                    this.actor = process.env.GITHUB_ACTOR;
                    this.job = process.env.GITHUB_JOB;
                    this.runNumber = parseInt(process.env.GITHUB_RUN_NUMBER, 10);
                    this.runId = parseInt(process.env.GITHUB_RUN_ID, 10);
                }
                _create_class(Context, [
                    {
                        key: "issue",
                        get: function get() {
                            var payload = this.payload;
                            return Object.assign(Object.assign({}, this.repo), {
                                number: (payload.issue || payload.pull_request || payload).number
                            });
                        }
                    },
                    {
                        key: "repo",
                        get: function get() {
                            if (process.env.GITHUB_REPOSITORY) {
                                var _process_env_GITHUB_REPOSITORY_split = _sliced_to_array(process.env.GITHUB_REPOSITORY.split('/'), 2), owner = _process_env_GITHUB_REPOSITORY_split[0], repo = _process_env_GITHUB_REPOSITORY_split[1];
                                return {
                                    owner: owner,
                                    repo: repo
                                };
                            }
                            if (this.payload.repository) {
                                return {
                                    owner: this.payload.repository.owner.login,
                                    repo: this.payload.repository.name
                                };
                            }
                            throw new Error("context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'");
                        }
                    }
                ]);
                return Context;
            }();
            exports.Context = Context;
        //# sourceMappingURL=context.js.map
        /***/ },
        /***/ 438: /***/ function(__unused_webpack_module, exports, __nccwpck_require__) {
            "use strict";
            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                Object.defineProperty(o, k2, {
                    enumerable: true,
                    get: function get() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                o[k2] = m[k];
            });
            var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
                Object.defineProperty(o, "default", {
                    enumerable: true,
                    value: v
                });
            } : function(o, v) {
                o["default"] = v;
            });
            var __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) {
                    for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
                }
                __setModuleDefault(result, mod);
                return result;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getOctokit = exports.context = void 0;
            var Context = __importStar(__nccwpck_require__(53));
            var utils_1 = __nccwpck_require__(30);
            exports.context = new Context.Context();
            /**
 * Returns a hydrated octokit ready to use for GitHub Actions
 *
 * @param     token    the repo PAT or GITHUB_TOKEN
 * @param     options  other options to set
 */ function getOctokit(token, options) {
                return new utils_1.GitHub(utils_1.getOctokitOptions(token, options));
            }
            exports.getOctokit = getOctokit;
        //# sourceMappingURL=github.js.map
        /***/ },
        /***/ 914: /***/ function(__unused_webpack_module, exports, __nccwpck_require__) {
            "use strict";
            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                Object.defineProperty(o, k2, {
                    enumerable: true,
                    get: function get() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                o[k2] = m[k];
            });
            var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
                Object.defineProperty(o, "default", {
                    enumerable: true,
                    value: v
                });
            } : function(o, v) {
                o["default"] = v;
            });
            var __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) {
                    for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
                }
                __setModuleDefault(result, mod);
                return result;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getApiBaseUrl = exports.getProxyAgent = exports.getAuthString = void 0;
            var httpClient = __importStar(__nccwpck_require__(925));
            function getAuthString(token, options) {
                if (!token && !options.auth) {
                    throw new Error('Parameter token or opts.auth is required');
                } else if (token && options.auth) {
                    throw new Error('Parameters token and opts.auth may not both be specified');
                }
                return typeof options.auth === 'string' ? options.auth : "token ".concat(token);
            }
            exports.getAuthString = getAuthString;
            function getProxyAgent(destinationUrl) {
                var hc = new httpClient.HttpClient();
                return hc.getAgent(destinationUrl);
            }
            exports.getProxyAgent = getProxyAgent;
            function getApiBaseUrl() {
                return process.env['GITHUB_API_URL'] || 'https://api.github.com';
            }
            exports.getApiBaseUrl = getApiBaseUrl;
        //# sourceMappingURL=utils.js.map
        /***/ },
        /***/ 30: /***/ function(__unused_webpack_module, exports, __nccwpck_require__) {
            "use strict";
            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                Object.defineProperty(o, k2, {
                    enumerable: true,
                    get: function get() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                o[k2] = m[k];
            });
            var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
                Object.defineProperty(o, "default", {
                    enumerable: true,
                    value: v
                });
            } : function(o, v) {
                o["default"] = v;
            });
            var __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) {
                    for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
                }
                __setModuleDefault(result, mod);
                return result;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getOctokitOptions = exports.GitHub = exports.context = void 0;
            var Context = __importStar(__nccwpck_require__(53));
            var Utils = __importStar(__nccwpck_require__(914));
            // octokit + plugins
            var core_1 = __nccwpck_require__(762);
            var plugin_rest_endpoint_methods_1 = __nccwpck_require__(44);
            var plugin_paginate_rest_1 = __nccwpck_require__(193);
            exports.context = new Context.Context();
            var baseUrl = Utils.getApiBaseUrl();
            var defaults = {
                baseUrl: baseUrl,
                request: {
                    agent: Utils.getProxyAgent(baseUrl)
                }
            };
            exports.GitHub = core_1.Octokit.plugin(plugin_rest_endpoint_methods_1.restEndpointMethods, plugin_paginate_rest_1.paginateRest).defaults(defaults);
            /**
 * Convience function to correctly format Octokit Options to pass into the constructor.
 *
 * @param     token    the repo PAT or GITHUB_TOKEN
 * @param     options  other options to set
 */ function getOctokitOptions(token, options) {
                var opts = Object.assign({}, options || {}); // Shallow clone - don't mutate the object provided by the caller
                // Auth
                var auth = Utils.getAuthString(token, opts);
                if (auth) {
                    opts.auth = auth;
                }
                return opts;
            }
            exports.getOctokitOptions = getOctokitOptions;
        //# sourceMappingURL=utils.js.map
        /***/ },
        /***/ 925: /***/ function(__unused_webpack_module, exports, __nccwpck_require__) {
            "use strict";
            var getProxyUrl = /**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */ function getProxyUrl(serverUrl) {
                var proxyUrl = pm.getProxyUrl(new URL(serverUrl));
                return proxyUrl ? proxyUrl.href : '';
            };
            var isHttps = function isHttps(requestUrl) {
                var parsedUrl = new URL(requestUrl);
                return parsedUrl.protocol === 'https:';
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var http = __nccwpck_require__(605);
            var https = __nccwpck_require__(211);
            var pm = __nccwpck_require__(443);
            var tunnel;
            var HttpCodes;
            (function(HttpCodes) {
                HttpCodes[HttpCodes["OK"] = 200] = "OK";
                HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
                HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
                HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
                HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
                HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
                HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
                HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
                HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
                HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
                HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
                HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
                HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
                HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
                HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
                HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
                HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
                HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
                HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
                HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
                HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
                HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
                HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
                HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
                HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
                HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
                HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
            })(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
            var Headers;
            (function(Headers) {
                Headers["Accept"] = "accept";
                Headers["ContentType"] = "content-type";
            })(Headers = exports.Headers || (exports.Headers = {}));
            var MediaTypes;
            (function(MediaTypes) {
                MediaTypes["ApplicationJson"] = "application/json";
            })(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
            exports.getProxyUrl = getProxyUrl;
            var HttpRedirectCodes = [
                HttpCodes.MovedPermanently,
                HttpCodes.ResourceMoved,
                HttpCodes.SeeOther,
                HttpCodes.TemporaryRedirect,
                HttpCodes.PermanentRedirect
            ];
            var HttpResponseRetryCodes = [
                HttpCodes.BadGateway,
                HttpCodes.ServiceUnavailable,
                HttpCodes.GatewayTimeout
            ];
            var RetryableHttpVerbs = [
                'OPTIONS',
                'GET',
                'DELETE',
                'HEAD'
            ];
            var ExponentialBackoffCeiling = 10;
            var ExponentialBackoffTimeSlice = 5;
            var HttpClientError = /*#__PURE__*/ function(Error1) {
                _inherits(HttpClientError, Error1);
                function HttpClientError(message, statusCode) {
                    _class_call_check(this, HttpClientError);
                    var _this;
                    _this = _call_super(this, HttpClientError, [
                        message
                    ]);
                    _this.name = 'HttpClientError';
                    _this.statusCode = statusCode;
                    Object.setPrototypeOf(_this, HttpClientError.prototype);
                    return _this;
                }
                return HttpClientError;
            }(_wrap_native_super(Error));
            exports.HttpClientError = HttpClientError;
            var HttpClientResponse = /*#__PURE__*/ function() {
                function HttpClientResponse(message) {
                    _class_call_check(this, HttpClientResponse);
                    this.message = message;
                }
                _create_class(HttpClientResponse, [
                    {
                        key: "readBody",
                        value: function readBody() {
                            var _this = this;
                            return new Promise(function(resolve, reject) {
                                return _async_to_generator(function() {
                                    var output;
                                    return _ts_generator(this, function(_state) {
                                        output = Buffer.alloc(0);
                                        this.message.on('data', function(chunk) {
                                            output = Buffer.concat([
                                                output,
                                                chunk
                                            ]);
                                        });
                                        this.message.on('end', function() {
                                            resolve(output.toString());
                                        });
                                        return [
                                            2
                                        ];
                                    });
                                }).call(_this);
                            });
                        }
                    }
                ]);
                return HttpClientResponse;
            }();
            exports.HttpClientResponse = HttpClientResponse;
            exports.isHttps = isHttps;
            var HttpClient = /*#__PURE__*/ function() {
                function HttpClient(userAgent, handlers, requestOptions) {
                    _class_call_check(this, HttpClient);
                    this._ignoreSslError = false;
                    this._allowRedirects = true;
                    this._allowRedirectDowngrade = false;
                    this._maxRedirects = 50;
                    this._allowRetries = false;
                    this._maxRetries = 1;
                    this._keepAlive = false;
                    this._disposed = false;
                    this.userAgent = userAgent;
                    this.handlers = handlers || [];
                    this.requestOptions = requestOptions;
                    if (requestOptions) {
                        if (requestOptions.ignoreSslError != null) {
                            this._ignoreSslError = requestOptions.ignoreSslError;
                        }
                        this._socketTimeout = requestOptions.socketTimeout;
                        if (requestOptions.allowRedirects != null) {
                            this._allowRedirects = requestOptions.allowRedirects;
                        }
                        if (requestOptions.allowRedirectDowngrade != null) {
                            this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
                        }
                        if (requestOptions.maxRedirects != null) {
                            this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
                        }
                        if (requestOptions.keepAlive != null) {
                            this._keepAlive = requestOptions.keepAlive;
                        }
                        if (requestOptions.allowRetries != null) {
                            this._allowRetries = requestOptions.allowRetries;
                        }
                        if (requestOptions.maxRetries != null) {
                            this._maxRetries = requestOptions.maxRetries;
                        }
                    }
                }
                _create_class(HttpClient, [
                    {
                        key: "options",
                        value: function options(requestUrl, additionalHeaders) {
                            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
                        }
                    },
                    {
                        key: "get",
                        value: function get(requestUrl, additionalHeaders) {
                            return this.request('GET', requestUrl, null, additionalHeaders || {});
                        }
                    },
                    {
                        key: "del",
                        value: function del(requestUrl, additionalHeaders) {
                            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
                        }
                    },
                    {
                        key: "post",
                        value: function post(requestUrl, data, additionalHeaders) {
                            return this.request('POST', requestUrl, data, additionalHeaders || {});
                        }
                    },
                    {
                        key: "patch",
                        value: function patch(requestUrl, data, additionalHeaders) {
                            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
                        }
                    },
                    {
                        key: "put",
                        value: function put(requestUrl, data, additionalHeaders) {
                            return this.request('PUT', requestUrl, data, additionalHeaders || {});
                        }
                    },
                    {
                        key: "head",
                        value: function head(requestUrl, additionalHeaders) {
                            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
                        }
                    },
                    {
                        key: "sendStream",
                        value: function sendStream(verb, requestUrl, stream, additionalHeaders) {
                            return this.request(verb, requestUrl, stream, additionalHeaders);
                        }
                    },
                    {
                        key: "getJson",
                        value: /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */ function getJson(_0) {
                            return _async_to_generator(function(requestUrl) {
                                var additionalHeaders, res;
                                var _arguments = arguments;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            additionalHeaders = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {};
                                            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                                            return [
                                                4,
                                                this.get(requestUrl, additionalHeaders)
                                            ];
                                        case 1:
                                            res = _state.sent();
                                            return [
                                                2,
                                                this._processResponse(res, this.requestOptions)
                                            ];
                                    }
                                });
                            }).apply(this, arguments);
                        }
                    },
                    {
                        key: "postJson",
                        value: function postJson(_0, _1) {
                            return _async_to_generator(function(requestUrl, obj) {
                                var additionalHeaders, data, res;
                                var _arguments = arguments;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            additionalHeaders = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : {};
                                            data = JSON.stringify(obj, null, 2);
                                            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                                            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                                            return [
                                                4,
                                                this.post(requestUrl, data, additionalHeaders)
                                            ];
                                        case 1:
                                            res = _state.sent();
                                            return [
                                                2,
                                                this._processResponse(res, this.requestOptions)
                                            ];
                                    }
                                });
                            }).apply(this, arguments);
                        }
                    },
                    {
                        key: "putJson",
                        value: function putJson(_0, _1) {
                            return _async_to_generator(function(requestUrl, obj) {
                                var additionalHeaders, data, res;
                                var _arguments = arguments;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            additionalHeaders = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : {};
                                            data = JSON.stringify(obj, null, 2);
                                            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                                            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                                            return [
                                                4,
                                                this.put(requestUrl, data, additionalHeaders)
                                            ];
                                        case 1:
                                            res = _state.sent();
                                            return [
                                                2,
                                                this._processResponse(res, this.requestOptions)
                                            ];
                                    }
                                });
                            }).apply(this, arguments);
                        }
                    },
                    {
                        key: "patchJson",
                        value: function patchJson(_0, _1) {
                            return _async_to_generator(function(requestUrl, obj) {
                                var additionalHeaders, data, res;
                                var _arguments = arguments;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            additionalHeaders = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : {};
                                            data = JSON.stringify(obj, null, 2);
                                            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                                            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                                            return [
                                                4,
                                                this.patch(requestUrl, data, additionalHeaders)
                                            ];
                                        case 1:
                                            res = _state.sent();
                                            return [
                                                2,
                                                this._processResponse(res, this.requestOptions)
                                            ];
                                    }
                                });
                            }).apply(this, arguments);
                        }
                    },
                    {
                        key: "request",
                        value: /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */ function request(verb, requestUrl, data, headers) {
                            return _async_to_generator(function() {
                                var parsedUrl, info, maxTries, numTries, response, authenticationHandler, i, redirectsRemaining, redirectUrl, parsedRedirectUrl, header;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (this._disposed) {
                                                throw new Error('Client has already been disposed.');
                                            }
                                            parsedUrl = new URL(requestUrl);
                                            info = this._prepareRequest(verb, parsedUrl, headers);
                                            // Only perform retries on reads since writes may not be idempotent.
                                            maxTries = this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1 ? this._maxRetries + 1 : 1;
                                            numTries = 0;
                                            _state.label = 1;
                                        case 1:
                                            if (!(numTries < maxTries)) return [
                                                3,
                                                10
                                            ];
                                            return [
                                                4,
                                                this.requestRaw(info, data)
                                            ];
                                        case 2:
                                            response = _state.sent();
                                            // Check if it's an authentication challenge
                                            if (response && response.message && response.message.statusCode === HttpCodes.Unauthorized) {
                                                authenticationHandler = void 0;
                                                for(i = 0; i < this.handlers.length; i++){
                                                    if (this.handlers[i].canHandleAuthentication(response)) {
                                                        authenticationHandler = this.handlers[i];
                                                        break;
                                                    }
                                                }
                                                if (authenticationHandler) {
                                                    return [
                                                        2,
                                                        authenticationHandler.handleAuthentication(this, info, data)
                                                    ];
                                                } else {
                                                    // We have received an unauthorized response but have no handlers to handle it.
                                                    // Let the response return to the caller.
                                                    return [
                                                        2,
                                                        response
                                                    ];
                                                }
                                            }
                                            redirectsRemaining = this._maxRedirects;
                                            _state.label = 3;
                                        case 3:
                                            if (!(HttpRedirectCodes.indexOf(response.message.statusCode) != -1 && this._allowRedirects && redirectsRemaining > 0)) return [
                                                3,
                                                6
                                            ];
                                            redirectUrl = response.message.headers['location'];
                                            if (!redirectUrl) {
                                                // if there's no location to redirect to, we won't
                                                return [
                                                    3,
                                                    6
                                                ];
                                            }
                                            parsedRedirectUrl = new URL(redirectUrl);
                                            if (parsedUrl.protocol == 'https:' && parsedUrl.protocol != parsedRedirectUrl.protocol && !this._allowRedirectDowngrade) {
                                                throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                                            }
                                            // we need to finish reading the response before reassigning response
                                            // which will leak the open socket.
                                            return [
                                                4,
                                                response.readBody()
                                            ];
                                        case 4:
                                            _state.sent();
                                            // strip authorization header if redirected to a different hostname
                                            if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                                                for(var header in headers){
                                                    // header names are case insensitive
                                                    if (header.toLowerCase() === 'authorization') {
                                                        delete headers[header];
                                                    }
                                                }
                                            }
                                            // let's make the request with the new redirectUrl
                                            info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                                            return [
                                                4,
                                                this.requestRaw(info, data)
                                            ];
                                        case 5:
                                            response = _state.sent();
                                            redirectsRemaining--;
                                            return [
                                                3,
                                                3
                                            ];
                                        case 6:
                                            if (HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) {
                                                // If not a retry code, return immediately instead of retrying
                                                return [
                                                    2,
                                                    response
                                                ];
                                            }
                                            numTries += 1;
                                            if (!(numTries < maxTries)) return [
                                                3,
                                                9
                                            ];
                                            return [
                                                4,
                                                response.readBody()
                                            ];
                                        case 7:
                                            _state.sent();
                                            return [
                                                4,
                                                this._performExponentialBackoff(numTries)
                                            ];
                                        case 8:
                                            _state.sent();
                                            _state.label = 9;
                                        case 9:
                                            return [
                                                3,
                                                1
                                            ];
                                        case 10:
                                            return [
                                                2,
                                                response
                                            ];
                                    }
                                });
                            }).call(this);
                        }
                    },
                    {
                        /**
     * Needs to be called if keepAlive is set to true in request options.
     */ key: "dispose",
                        value: function dispose() {
                            if (this._agent) {
                                this._agent.destroy();
                            }
                            this._disposed = true;
                        }
                    },
                    {
                        /**
     * Raw request.
     * @param info
     * @param data
     */ key: "requestRaw",
                        value: function requestRaw(info, data) {
                            var _this = this;
                            return new Promise(function(resolve, reject) {
                                var callbackForResult = function callbackForResult(err, res) {
                                    if (err) {
                                        reject(err);
                                    }
                                    resolve(res);
                                };
                                _this.requestRawWithCallback(info, data, callbackForResult);
                            });
                        }
                    },
                    {
                        /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */ key: "requestRawWithCallback",
                        value: function requestRawWithCallback(info, data, onResult) {
                            var socket;
                            if (typeof data === 'string') {
                                info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
                            }
                            var callbackCalled = false;
                            var handleResult = function(err, res) {
                                if (!callbackCalled) {
                                    callbackCalled = true;
                                    onResult(err, res);
                                }
                            };
                            var req = info.httpModule.request(info.options, function(msg) {
                                var res = new HttpClientResponse(msg);
                                handleResult(null, res);
                            });
                            req.on('socket', function(sock) {
                                socket = sock;
                            });
                            // If we ever get disconnected, we want the socket to timeout eventually
                            req.setTimeout(this._socketTimeout || 3 * 60000, function() {
                                if (socket) {
                                    socket.end();
                                }
                                handleResult(new Error('Request timeout: ' + info.options.path), null);
                            });
                            req.on('error', function(err) {
                                // err has statusCode property
                                // res should have headers
                                handleResult(err, null);
                            });
                            if (data && typeof data === 'string') {
                                req.write(data, 'utf8');
                            }
                            if (data && typeof data !== 'string') {
                                data.on('close', function() {
                                    req.end();
                                });
                                data.pipe(req);
                            } else {
                                req.end();
                            }
                        }
                    },
                    {
                        /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */ key: "getAgent",
                        value: function getAgent(serverUrl) {
                            var parsedUrl = new URL(serverUrl);
                            return this._getAgent(parsedUrl);
                        }
                    },
                    {
                        key: "_prepareRequest",
                        value: function _prepareRequest(method, requestUrl, headers) {
                            var info = {};
                            info.parsedUrl = requestUrl;
                            var usingSsl = info.parsedUrl.protocol === 'https:';
                            info.httpModule = usingSsl ? https : http;
                            var defaultPort = usingSsl ? 443 : 80;
                            info.options = {};
                            info.options.host = info.parsedUrl.hostname;
                            info.options.port = info.parsedUrl.port ? parseInt(info.parsedUrl.port) : defaultPort;
                            info.options.path = (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
                            info.options.method = method;
                            info.options.headers = this._mergeHeaders(headers);
                            if (this.userAgent != null) {
                                info.options.headers['user-agent'] = this.userAgent;
                            }
                            info.options.agent = this._getAgent(info.parsedUrl);
                            // gives handlers an opportunity to participate
                            if (this.handlers) {
                                this.handlers.forEach(function(handler) {
                                    handler.prepareRequest(info.options);
                                });
                            }
                            return info;
                        }
                    },
                    {
                        key: "_mergeHeaders",
                        value: function _mergeHeaders(headers) {
                            var lowercaseKeys = function(obj) {
                                return Object.keys(obj).reduce(function(c, k) {
                                    return c[k.toLowerCase()] = obj[k], c;
                                }, {});
                            };
                            if (this.requestOptions && this.requestOptions.headers) {
                                return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
                            }
                            return lowercaseKeys(headers || {});
                        }
                    },
                    {
                        key: "_getExistingOrDefaultHeader",
                        value: function _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
                            var lowercaseKeys = function(obj) {
                                return Object.keys(obj).reduce(function(c, k) {
                                    return c[k.toLowerCase()] = obj[k], c;
                                }, {});
                            };
                            var clientHeader;
                            if (this.requestOptions && this.requestOptions.headers) {
                                clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
                            }
                            return additionalHeaders[header] || clientHeader || _default;
                        }
                    },
                    {
                        key: "_getAgent",
                        value: function _getAgent(parsedUrl) {
                            var agent;
                            var proxyUrl = pm.getProxyUrl(parsedUrl);
                            var useProxy = proxyUrl && proxyUrl.hostname;
                            if (this._keepAlive && useProxy) {
                                agent = this._proxyAgent;
                            }
                            if (this._keepAlive && !useProxy) {
                                agent = this._agent;
                            }
                            // if agent is already assigned use that agent.
                            if (!!agent) {
                                return agent;
                            }
                            var usingSsl = parsedUrl.protocol === 'https:';
                            var maxSockets = 100;
                            if (!!this.requestOptions) {
                                maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
                            }
                            if (useProxy) {
                                // If using proxy, need tunnel
                                if (!tunnel) {
                                    tunnel = __nccwpck_require__(294);
                                }
                                var agentOptions = {
                                    maxSockets: maxSockets,
                                    keepAlive: this._keepAlive,
                                    proxy: {
                                        proxyAuth: "".concat(proxyUrl.username, ":").concat(proxyUrl.password),
                                        host: proxyUrl.hostname,
                                        port: proxyUrl.port
                                    }
                                };
                                var tunnelAgent;
                                var overHttps = proxyUrl.protocol === 'https:';
                                if (usingSsl) {
                                    tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
                                } else {
                                    tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
                                }
                                agent = tunnelAgent(agentOptions);
                                this._proxyAgent = agent;
                            }
                            // if reusing agent across request and tunneling agent isn't assigned create a new agent
                            if (this._keepAlive && !agent) {
                                var options = {
                                    keepAlive: this._keepAlive,
                                    maxSockets: maxSockets
                                };
                                agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
                                this._agent = agent;
                            }
                            // if not using private agent and tunnel agent isn't setup then use global agent
                            if (!agent) {
                                agent = usingSsl ? https.globalAgent : http.globalAgent;
                            }
                            if (usingSsl && this._ignoreSslError) {
                                // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
                                // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
                                // we have to cast it to any and change it directly
                                agent.options = Object.assign(agent.options || {}, {
                                    rejectUnauthorized: false
                                });
                            }
                            return agent;
                        }
                    },
                    {
                        key: "_performExponentialBackoff",
                        value: function _performExponentialBackoff(retryNumber) {
                            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
                            var ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
                            return new Promise(function(resolve) {
                                return setTimeout(function() {
                                    return resolve();
                                }, ms);
                            });
                        }
                    },
                    {
                        key: "_processResponse",
                        value: function _processResponse(res, options) {
                            return _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2,
                                        new Promise(function(resolve, reject) {
                                            return _async_to_generator(function() {
                                                var statusCode, response, obj, contents, err, msg, err1;
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            statusCode = res.message.statusCode;
                                                            response = {
                                                                statusCode: statusCode,
                                                                result: null,
                                                                headers: {}
                                                            };
                                                            // not found leads to null obj returned
                                                            if (statusCode == HttpCodes.NotFound) {
                                                                resolve(response);
                                                            }
                                                            _state.label = 1;
                                                        case 1:
                                                            _state.trys.push([
                                                                1,
                                                                3,
                                                                ,
                                                                4
                                                            ]);
                                                            return [
                                                                4,
                                                                res.readBody()
                                                            ];
                                                        case 2:
                                                            contents = _state.sent();
                                                            if (contents && contents.length > 0) {
                                                                if (options && options.deserializeDates) {
                                                                    obj = JSON.parse(contents, HttpClient.dateTimeDeserializer);
                                                                } else {
                                                                    obj = JSON.parse(contents);
                                                                }
                                                                response.result = obj;
                                                            }
                                                            response.headers = res.message.headers;
                                                            return [
                                                                3,
                                                                4
                                                            ];
                                                        case 3:
                                                            err = _state.sent();
                                                            return [
                                                                3,
                                                                4
                                                            ];
                                                        case 4:
                                                            // note that 3xx redirects are handled by the http layer.
                                                            if (statusCode > 299) {
                                                                ;
                                                                // if exception/error in body, attempt to get better error
                                                                if (obj && obj.message) {
                                                                    msg = obj.message;
                                                                } else if (contents && contents.length > 0) {
                                                                    // it may be the case that the exception is in the body message as string
                                                                    msg = contents;
                                                                } else {
                                                                    msg = 'Failed request: (' + statusCode + ')';
                                                                }
                                                                err1 = new HttpClientError(msg, statusCode);
                                                                err1.result = response.result;
                                                                reject(err1);
                                                            } else {
                                                                resolve(response);
                                                            }
                                                            return [
                                                                2
                                                            ];
                                                    }
                                                });
                                            })();
                                        })
                                    ];
                                });
                            })();
                        }
                    }
                ], [
                    {
                        key: "dateTimeDeserializer",
                        value: function dateTimeDeserializer(key, value) {
                            if (typeof value === 'string') {
                                var a = new Date(value);
                                if (!isNaN(a.valueOf())) {
                                    return a;
                                }
                            }
                            return value;
                        }
                    }
                ]);
                return HttpClient;
            }();
            exports.HttpClient = HttpClient;
        /***/ },
        /***/ 443: /***/ function(__unused_webpack_module, exports) {
            "use strict";
            var getProxyUrl = function getProxyUrl(reqUrl) {
                var usingSsl = reqUrl.protocol === 'https:';
                var proxyUrl;
                if (checkBypass(reqUrl)) {
                    return proxyUrl;
                }
                var proxyVar;
                if (usingSsl) {
                    proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
                } else {
                    proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
                }
                if (proxyVar) {
                    proxyUrl = new URL(proxyVar);
                }
                return proxyUrl;
            };
            var checkBypass = function checkBypass(reqUrl) {
                if (!reqUrl.hostname) {
                    return false;
                }
                var noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
                if (!noProxy) {
                    return false;
                }
                // Determine the request port
                var reqPort;
                if (reqUrl.port) {
                    reqPort = Number(reqUrl.port);
                } else if (reqUrl.protocol === 'http:') {
                    reqPort = 80;
                } else if (reqUrl.protocol === 'https:') {
                    reqPort = 443;
                }
                // Format the request hostname and hostname with port
                var upperReqHosts = [
                    reqUrl.hostname.toUpperCase()
                ];
                if (typeof reqPort === 'number') {
                    upperReqHosts.push("".concat(upperReqHosts[0], ":").concat(reqPort));
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    var _loop = function() {
                        var upperNoProxyItem = _step.value;
                        if (upperReqHosts.some(function(x) {
                            return x === upperNoProxyItem;
                        })) {
                            return {
                                v: true
                            };
                        }
                    };
                    // Compare request host against noproxy
                    for(var _iterator = noProxy.split(',').map(function(x) {
                        return x.trim().toUpperCase();
                    }).filter(function(x) {
                        return x;
                    })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _ret = _loop();
                        if (_type_of(_ret) === "object") return _ret.v;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return false;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getProxyUrl = getProxyUrl;
            exports.checkBypass = checkBypass;
        /***/ },
        /***/ 334: /***/ function(__unused_webpack_module, exports) {
            "use strict";
            var auth = function auth(token) {
                return _async_to_generator(function() {
                    var tokenType;
                    return _ts_generator(this, function(_state) {
                        tokenType = token.split(/\./).length === 3 ? "app" : /^v\d+\./.test(token) ? "installation" : "oauth";
                        return [
                            2,
                            {
                                type: "token",
                                token: token,
                                tokenType: tokenType
                            }
                        ];
                    });
                })();
            };
            var withAuthorizationPrefix = /**
 * Prefix token for usage in the Authorization header
 *
 * @param token OAuth token or JSON Web Token
 */ function withAuthorizationPrefix(token) {
                if (token.split(/\./).length === 3) {
                    return "bearer ".concat(token);
                }
                return "token ".concat(token);
            };
            var hook = function hook(token, request, route, parameters) {
                return _async_to_generator(function() {
                    var endpoint;
                    return _ts_generator(this, function(_state) {
                        endpoint = request.endpoint.merge(route, parameters);
                        endpoint.headers.authorization = withAuthorizationPrefix(token);
                        return [
                            2,
                            request(endpoint)
                        ];
                    });
                })();
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var createTokenAuth = function createTokenAuth(token) {
                if (!token) {
                    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
                }
                if (typeof token !== "string") {
                    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
                }
                token = token.replace(/^(token|bearer) +/i, "");
                return Object.assign(auth.bind(null, token), {
                    hook: hook.bind(null, token)
                });
            };
            exports.createTokenAuth = createTokenAuth;
        //# sourceMappingURL=index.js.map
        /***/ },
        /***/ 762: /***/ function(__unused_webpack_module, exports, __nccwpck_require__) {
            "use strict";
            var _objectWithoutPropertiesLoose = function _objectWithoutPropertiesLoose(source, excluded) {
                if (source == null) return {};
                var target = {};
                var sourceKeys = Object.keys(source);
                var key, i;
                for(i = 0; i < sourceKeys.length; i++){
                    key = sourceKeys[i];
                    if (excluded.indexOf(key) >= 0) continue;
                    target[key] = source[key];
                }
                return target;
            };
            var _objectWithoutProperties = function _objectWithoutProperties(source, excluded) {
                if (source == null) return {};
                var target = _objectWithoutPropertiesLoose(source, excluded);
                var key, i;
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for(i = 0; i < sourceSymbolKeys.length; i++){
                        key = sourceSymbolKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
                        target[key] = source[key];
                    }
                }
                return target;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var universalUserAgent = __nccwpck_require__(429);
            var beforeAfterHook = __nccwpck_require__(682);
            var request = __nccwpck_require__(234);
            var graphql = __nccwpck_require__(668);
            var authToken = __nccwpck_require__(334);
            var VERSION = "3.2.4";
            var Octokit = /*#__PURE__*/ function() {
                function Octokit() {
                    var _this = this;
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    _class_call_check(this, Octokit);
                    var hook = new beforeAfterHook.Collection();
                    var requestDefaults = {
                        baseUrl: request.request.endpoint.DEFAULTS.baseUrl,
                        headers: {},
                        request: Object.assign({}, options.request, {
                            hook: hook.bind(null, "request")
                        }),
                        mediaType: {
                            previews: [],
                            format: ""
                        }
                    }; // prepend default user agent with `options.userAgent` if set
                    requestDefaults.headers["user-agent"] = [
                        options.userAgent,
                        "octokit-core.js/".concat(VERSION, " ").concat(universalUserAgent.getUserAgent())
                    ].filter(Boolean).join(" ");
                    if (options.baseUrl) {
                        requestDefaults.baseUrl = options.baseUrl;
                    }
                    if (options.previews) {
                        requestDefaults.mediaType.previews = options.previews;
                    }
                    if (options.timeZone) {
                        requestDefaults.headers["time-zone"] = options.timeZone;
                    }
                    this.request = request.request.defaults(requestDefaults);
                    this.graphql = graphql.withCustomRequest(this.request).defaults(requestDefaults);
                    this.log = Object.assign({
                        debug: function() {},
                        info: function() {},
                        warn: console.warn.bind(console),
                        error: console.error.bind(console)
                    }, options.log);
                    this.hook = hook; // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
                    //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
                    // (2) If only `options.auth` is set, use the default token authentication strategy.
                    // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
                    // TODO: type `options.auth` based on `options.authStrategy`.
                    if (!options.authStrategy) {
                        if (!options.auth) {
                            // (1)
                            this.auth = function() {
                                return _async_to_generator(function() {
                                    return _ts_generator(this, function(_state) {
                                        return [
                                            2,
                                            {
                                                type: "unauthenticated"
                                            }
                                        ];
                                    });
                                })();
                            };
                        } else {
                            // (2)
                            var auth = authToken.createTokenAuth(options.auth); // @ts-ignore  ¯\_(ツ)_/¯
                            hook.wrap("request", auth.hook);
                            this.auth = auth;
                        }
                    } else {
                        var authStrategy = options.authStrategy, otherOptions = _objectWithoutProperties(options, [
                            "authStrategy"
                        ]);
                        var auth1 = authStrategy(Object.assign({
                            request: this.request,
                            log: this.log,
                            // we pass the current octokit instance as well as its constructor options
                            // to allow for authentication strategies that return a new octokit instance
                            // that shares the same internal state as the current one. The original
                            // requirement for this was the "event-octokit" authentication strategy
                            // of https://github.com/probot/octokit-auth-probot.
                            octokit: this,
                            octokitOptions: otherOptions
                        }, options.auth)); // @ts-ignore  ¯\_(ツ)_/¯
                        hook.wrap("request", auth1.hook);
                        this.auth = auth1;
                    } // apply plugins
                    // https://stackoverflow.com/a/16345172
                    var classConstructor = this.constructor;
                    classConstructor.plugins.forEach(function(plugin) {
                        Object.assign(_this, plugin(_this, options));
                    });
                }
                _create_class(Octokit, null, [
                    {
                        key: "defaults",
                        value: function defaults(defaults) {
                            var OctokitWithDefaults = /*#__PURE__*/ function(_this) {
                                _inherits(OctokitWithDefaults, _this);
                                function OctokitWithDefaults() {
                                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                                        args[_key] = arguments[_key];
                                    }
                                    _class_call_check(this, OctokitWithDefaults);
                                    var _$_this;
                                    var options = args[0] || {};
                                    if (typeof defaults === "function") {
                                        _$_this = _call_super(this, OctokitWithDefaults, [
                                            defaults(options)
                                        ]);
                                        return _possible_constructor_return(_$_this);
                                    }
                                    return _$_this = _call_super(this, OctokitWithDefaults, [
                                        Object.assign({}, defaults, options, options.userAgent && defaults.userAgent ? {
                                            userAgent: "".concat(options.userAgent, " ").concat(defaults.userAgent)
                                        } : null)
                                    ]);
                                }
                                return OctokitWithDefaults;
                            }(this);
                            return OctokitWithDefaults;
                        }
                    },
                    {
                        key: "plugin",
                        value: /**
   * Attach a plugin (or many) to your Octokit instance.
   *
   * @example
   * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
   */ function plugin() {
                            for(var _len = arguments.length, newPlugins = new Array(_len), _key = 0; _key < _len; _key++){
                                newPlugins[_key] = arguments[_key];
                            }
                            var _a;
                            var currentPlugins = this.plugins;
                            var NewOctokit = (_a = /*#__PURE__*/ function(_this) {
                                _inherits(_a, _this);
                                function _a() {
                                    _class_call_check(this, _a);
                                    return _call_super(this, _a, arguments);
                                }
                                return _a;
                            }(this), _a.plugins = currentPlugins.concat(newPlugins.filter(function(plugin) {
                                return !currentPlugins.includes(plugin);
                            })), _a);
                            return NewOctokit;
                        }
                    }
                ]);
                return Octokit;
            }();
            Octokit.VERSION = VERSION;
            Octokit.plugins = [];
            exports.Octokit = Octokit;
        //# sourceMappingURL=index.js.map
        /***/ },
        /***/ 440: /***/ function(__unused_webpack_module, exports, __nccwpck_require__) {
            "use strict";
            var lowercaseKeys = function lowercaseKeys(object) {
                if (!object) {
                    return {};
                }
                return Object.keys(object).reduce(function(newObj, key) {
                    newObj[key.toLowerCase()] = object[key];
                    return newObj;
                }, {});
            };
            var removeUndefinedProperties = function removeUndefinedProperties(obj) {
                for(var key in obj){
                    if (obj[key] === undefined) {
                        delete obj[key];
                    }
                }
                return obj;
            };
            var merge = function merge(defaults, route, options) {
                if (typeof route === "string") {
                    var _route_split = _sliced_to_array(route.split(" "), 2), method = _route_split[0], url = _route_split[1];
                    options = Object.assign(url ? {
                        method: method,
                        url: url
                    } : {
                        url: method
                    }, options);
                } else {
                    options = Object.assign({}, route);
                } // lowercase header names before merging with defaults to avoid duplicates
                options.headers = lowercaseKeys(options.headers); // remove properties with undefined values before merging
                removeUndefinedProperties(options);
                removeUndefinedProperties(options.headers);
                var mergedOptions = mergeDeep(defaults || {}, options); // mediaType.previews arrays are merged, instead of overwritten
                if (defaults && defaults.mediaType.previews.length) {
                    mergedOptions.mediaType.previews = defaults.mediaType.previews.filter(function(preview) {
                        return !mergedOptions.mediaType.previews.includes(preview);
                    }).concat(mergedOptions.mediaType.previews);
                }
                mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(function(preview) {
                    return preview.replace(/-preview/, "");
                });
                return mergedOptions;
            };
            var addQueryParameters = function addQueryParameters(url, parameters) {
                var separator = /\?/.test(url) ? "&" : "?";
                var names = Object.keys(parameters);
                if (names.length === 0) {
                    return url;
                }
                return url + separator + names.map(function(name) {
                    if (name === "q") {
                        return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
                    }
                    return "".concat(name, "=").concat(encodeURIComponent(parameters[name]));
                }).join("&");
            };
            var removeNonChars = function removeNonChars(variableName) {
                return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
            };
            var extractUrlVariableNames = function extractUrlVariableNames(url) {
                var matches = url.match(urlVariableRegex);
                if (!matches) {
                    return [];
                }
                return matches.map(removeNonChars).reduce(function(a, b) {
                    return a.concat(b);
                }, []);
            };
            var omit = function omit(object, keysToOmit) {
                return Object.keys(object).filter(function(option) {
                    return !keysToOmit.includes(option);
                }).reduce(function(obj, key) {
                    obj[key] = object[key];
                    return obj;
                }, {});
            };
            var encodeReserved = // Based on https://github.com/bramstein/url-template, licensed under BSD
            // TODO: create separate package.
            //
            // Copyright (c) 2012-2014, Bram Stein
            // All rights reserved.
            // Redistribution and use in source and binary forms, with or without
            // modification, are permitted provided that the following conditions
            // are met:
            //  1. Redistributions of source code must retain the above copyright
            //     notice, this list of conditions and the following disclaimer.
            //  2. Redistributions in binary form must reproduce the above copyright
            //     notice, this list of conditions and the following disclaimer in the
            //     documentation and/or other materials provided with the distribution.
            //  3. The name of the author may not be used to endorse or promote products
            //     derived from this software without specific prior written permission.
            // THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
            // WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
            // MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
            // EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
            // INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
            // BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
            // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
            // OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
            // NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
            // EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
            /* istanbul ignore file */ function encodeReserved(str) {
                return str.split(/(%[0-9A-Fa-f]{2})/g).map(function(part) {
                    if (!/%[0-9A-Fa-f]/.test(part)) {
                        part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
                    }
                    return part;
                }).join("");
            };
            var encodeUnreserved = function encodeUnreserved(str) {
                return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
                    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
                });
            };
            var encodeValue = function encodeValue(operator, value, key) {
                value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);
                if (key) {
                    return encodeUnreserved(key) + "=" + value;
                } else {
                    return value;
                }
            };
            var isDefined = function isDefined(value) {
                return value !== undefined && value !== null;
            };
            var isKeyOperator = function isKeyOperator(operator) {
                return operator === ";" || operator === "&" || operator === "?";
            };
            var getValues = function getValues(context, operator, key, modifier) {
                var value = context[key], result = [];
                if (isDefined(value) && value !== "") {
                    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
                        value = value.toString();
                        if (modifier && modifier !== "*") {
                            value = value.substring(0, parseInt(modifier, 10));
                        }
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
                    } else {
                        if (modifier === "*") {
                            if (Array.isArray(value)) {
                                value.filter(isDefined).forEach(function(value) {
                                    result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
                                });
                            } else {
                                Object.keys(value).forEach(function(k) {
                                    if (isDefined(value[k])) {
                                        result.push(encodeValue(operator, value[k], k));
                                    }
                                });
                            }
                        } else {
                            var tmp = [];
                            if (Array.isArray(value)) {
                                value.filter(isDefined).forEach(function(value) {
                                    tmp.push(encodeValue(operator, value));
                                });
                            } else {
                                Object.keys(value).forEach(function(k) {
                                    if (isDefined(value[k])) {
                                        tmp.push(encodeUnreserved(k));
                                        tmp.push(encodeValue(operator, value[k].toString()));
                                    }
                                });
                            }
                            if (isKeyOperator(operator)) {
                                result.push(encodeUnreserved(key) + "=" + tmp.join(","));
                            } else if (tmp.length !== 0) {
                                result.push(tmp.join(","));
                            }
                        }
                    }
                } else {
                    if (operator === ";") {
                        if (isDefined(value)) {
                            result.push(encodeUnreserved(key));
                        }
                    } else if (value === "" && (operator === "&" || operator === "?")) {
                        result.push(encodeUnreserved(key) + "=");
                    } else if (value === "") {
                        result.push("");
                    }
                }
                return result;
            };
            var parseUrl = function parseUrl(template) {
                return {
                    expand: expand.bind(null, template)
                };
            };
            var expand = function expand(template, context) {
                var operators = [
                    "+",
                    "#",
                    ".",
                    "/",
                    ";",
                    "?",
                    "&"
                ];
                return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(_, expression, literal) {
                    if (expression) {
                        var operator = "";
                        var values = [];
                        if (operators.indexOf(expression.charAt(0)) !== -1) {
                            operator = expression.charAt(0);
                            expression = expression.substr(1);
                        }
                        expression.split(/,/g).forEach(function(variable) {
                            var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                            values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        });
                        if (operator && operator !== "+") {
                            var separator = ",";
                            if (operator === "?") {
                                separator = "&";
                            } else if (operator !== "#") {
                                separator = operator;
                            }
                            return (values.length !== 0 ? operator : "") + values.join(separator);
                        } else {
                            return values.join(",");
                        }
                    } else {
                        return encodeReserved(literal);
                    }
                });
            };
            var parse = function parse(options) {
                // https://fetch.spec.whatwg.org/#methods
                var method = options.method.toUpperCase(); // replace :varname with {varname} to make it RFC 6570 compatible
                var url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
                var headers = Object.assign({}, options.headers);
                var body;
                var parameters = omit(options, [
                    "method",
                    "baseUrl",
                    "url",
                    "headers",
                    "request",
                    "mediaType"
                ]); // extract variable names from URL to calculate remaining variables later
                var urlVariableNames = extractUrlVariableNames(url);
                url = parseUrl(url).expand(parameters);
                if (!/^http/.test(url)) {
                    url = options.baseUrl + url;
                }
                var omittedParameters = Object.keys(options).filter(function(option) {
                    return urlVariableNames.includes(option);
                }).concat("baseUrl");
                var remainingParameters = omit(parameters, omittedParameters);
                var isBinaryRequest = /application\/octet-stream/i.test(headers.accept);
                if (!isBinaryRequest) {
                    if (options.mediaType.format) {
                        // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
                        headers.accept = headers.accept.split(/,/).map(function(preview) {
                            return preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, "application/vnd$1$2.".concat(options.mediaType.format));
                        }).join(",");
                    }
                    if (options.mediaType.previews.length) {
                        var previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
                        headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map(function(preview) {
                            var format = options.mediaType.format ? ".".concat(options.mediaType.format) : "+json";
                            return "application/vnd.github.".concat(preview, "-preview").concat(format);
                        }).join(",");
                    }
                } // for GET/HEAD requests, set URL query parameters from remaining parameters
                // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters
                if ([
                    "GET",
                    "HEAD"
                ].includes(method)) {
                    url = addQueryParameters(url, remainingParameters);
                } else {
                    if ("data" in remainingParameters) {
                        body = remainingParameters.data;
                    } else {
                        if (Object.keys(remainingParameters).length) {
                            body = remainingParameters;
                        } else {
                            headers["content-length"] = 0;
                        }
                    }
                } // default content-type for JSON if body is set
                if (!headers["content-type"] && typeof body !== "undefined") {
                    headers["content-type"] = "application/json; charset=utf-8";
                } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
                // fetch does not allow to set `content-length` header, but we can set body to an empty string
                if ([
                    "PATCH",
                    "PUT"
                ].includes(method) && typeof body === "undefined") {
                    body = "";
                } // Only return body/request keys if present
                return Object.assign({
                    method: method,
                    url: url,
                    headers: headers
                }, typeof body !== "undefined" ? {
                    body: body
                } : null, options.request ? {
                    request: options.request
                } : null);
            };
            var endpointWithDefaults = function endpointWithDefaults(defaults, route, options) {
                return parse(merge(defaults, route, options));
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var isPlainObject = __nccwpck_require__(287);
            var universalUserAgent = __nccwpck_require__(429);
            function mergeDeep(defaults, options) {
                var result = Object.assign({}, defaults);
                Object.keys(options).forEach(function(key) {
                    if (isPlainObject.isPlainObject(options[key])) {
                        if (!(key in defaults)) Object.assign(result, _define_property({}, key, options[key]));
                        else result[key] = mergeDeep(defaults[key], options[key]);
                    } else {
                        Object.assign(result, _define_property({}, key, options[key]));
                    }
                });
                return result;
            }
            var urlVariableRegex = /\{[^}]+\}/g;
            function withDefaults(oldDefaults, newDefaults) {
                var DEFAULTS = merge(oldDefaults, newDefaults);
                var endpoint = endpointWithDefaults.bind(null, DEFAULTS);
                return Object.assign(endpoint, {
                    DEFAULTS: DEFAULTS,
                    defaults: withDefaults.bind(null, DEFAULTS),
                    merge: merge.bind(null, DEFAULTS),
                    parse: parse
                });
            }
            var VERSION = "6.0.10";
            var userAgent = "octokit-endpoint.js/".concat(VERSION, " ").concat(universalUserAgent.getUserAgent()); // DEFAULTS has all properties set that EndpointOptions has, except url.
            // So we use RequestParameters and add method as additional required property.
            var DEFAULTS = {
                method: "GET",
                baseUrl: "https://api.github.com",
                headers: {
                    accept: "application/vnd.github.v3+json",
                    "user-agent": userAgent
                },
                mediaType: {
                    format: "",
                    previews: []
                }
            };
            var endpoint = withDefaults(null, DEFAULTS);
            exports.endpoint = endpoint;
        //# sourceMappingURL=index.js.map
        /***/ },
        /***/ 668: /***/ function(__unused_webpack_module, exports, __nccwpck_require__) {
            "use strict";
            var graphql = function graphql(request, query, options) {
                if (typeof query === "string" && options && "query" in options) {
                    return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));
                }
                var parsedOptions = typeof query === "string" ? Object.assign({
                    query: query
                }, options) : query;
                var requestOptions = Object.keys(parsedOptions).reduce(function(result, key) {
                    if (NON_VARIABLE_OPTIONS.includes(key)) {
                        result[key] = parsedOptions[key];
                        return result;
                    }
                    if (!result.variables) {
                        result.variables = {};
                    }
                    result.variables[key] = parsedOptions[key];
                    return result;
                }, {}); // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
                // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451
                var baseUrl = parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl;
                if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
                    requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
                }
                return request(requestOptions).then(function(response) {
                    if (response.data.errors) {
                        var headers = {};
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = Object.keys(response.headers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var key = _step.value;
                                headers[key] = response.headers[key];
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        throw new GraphqlError(requestOptions, {
                            headers: headers,
                            data: response.data
                        });
                    }
                    return response.data.data;
                });
            };
            var withCustomRequest = function withCustomRequest(customRequest) {
                return withDefaults(customRequest, {
                    method: "POST",
                    url: "/graphql"
                });
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var request = __nccwpck_require__(234);
            var universalUserAgent = __nccwpck_require__(429);
            var VERSION = "4.5.8";
            var GraphqlError = /*#__PURE__*/ function(Error1) {
                _inherits(GraphqlError, Error1);
                function GraphqlError(request, response) {
                    _class_call_check(this, GraphqlError);
                    var _this;
                    var message = response.data.errors[0].message;
                    _this = _call_super(this, GraphqlError, [
                        message
                    ]);
                    Object.assign(_this, response.data);
                    Object.assign(_this, {
                        headers: response.headers
                    });
                    _this.name = "GraphqlError";
                    _this.request = request; // Maintains proper stack trace (only available on V8)
                    /* istanbul ignore next */ if (Error.captureStackTrace) {
                        Error.captureStackTrace(_this, _this.constructor);
                    }
                    return _this;
                }
                return GraphqlError;
            }(_wrap_native_super(Error));
            var NON_VARIABLE_OPTIONS = [
                "method",
                "baseUrl",
                "url",
                "headers",
                "request",
                "query",
                "mediaType"
            ];
            var GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
            function withDefaults(request$1, newDefaults) {
                var newRequest = request$1.defaults(newDefaults);
                var newApi = function(query, options) {
                    return graphql(newRequest, query, options);
                };
                return Object.assign(newApi, {
                    defaults: withDefaults.bind(null, newRequest),
                    endpoint: request.request.endpoint
                });
            }
            var graphql$1 = withDefaults(request.request, {
                headers: {
                    "user-agent": "octokit-graphql.js/".concat(VERSION, " ").concat(universalUserAgent.getUserAgent())
                },
                method: "POST",
                url: "/graphql"
            });
            exports.graphql = graphql$1;
            exports.withCustomRequest = withCustomRequest;
        //# sourceMappingURL=index.js.map
        /***/ },
        /***/ 193: /***/ function(__unused_webpack_module, exports) {
            "use strict";
            var normalizePaginatedListResponse = /**
 * Some “list” response that can be paginated have a different response structure
 *
 * They have a `total_count` key in the response (search also has `incomplete_results`,
 * /installation/repositories also has `repository_selection`), as well as a key with
 * the list of the items which name varies from endpoint to endpoint.
 *
 * Octokit normalizes these responses so that paginated results are always returned following
 * the same structure. One challenge is that if the list response has only one page, no Link
 * header is provided, so this header alone is not sufficient to check wether a response is
 * paginated or not.
 *
 * We check if a "total_count" key is present in the response data, but also make sure that
 * a "url" property is not, as the "Get the combined status for a specific ref" endpoint would
 * otherwise match: https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref
 */ function normalizePaginatedListResponse(response) {
                var responseNeedsNormalization = "total_count" in response.data && !("url" in response.data);
                if (!responseNeedsNormalization) return response; // keep the additional properties intact as there is currently no other way
                // to retrieve the same information.
                var incompleteResults = response.data.incomplete_results;
                var repositorySelection = response.data.repository_selection;
                var totalCount = response.data.total_count;
                delete response.data.incomplete_results;
                delete response.data.repository_selection;
                delete response.data.total_count;
                var namespaceKey = Object.keys(response.data)[0];
                var data = response.data[namespaceKey];
                response.data = data;
                if (typeof incompleteResults !== "undefined") {
                    response.data.incomplete_results = incompleteResults;
                }
                if (typeof repositorySelection !== "undefined") {
                    response.data.repository_selection = repositorySelection;
                }
                response.data.total_count = totalCount;
                return response;
            };
            var iterator = function iterator(octokit, route, parameters) {
                var options = typeof route === "function" ? route.endpoint(parameters) : octokit.request.endpoint(route, parameters);
                var requestMethod = typeof route === "function" ? route : octokit.request;
                var method = options.method;
                var headers = options.headers;
                var url = options.url;
                return _define_property({}, Symbol.asyncIterator, function() {
                    return {
                        next: function next() {
                            return _async_to_generator(function() {
                                var response, normalizedResponse;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (!url) return [
                                                2,
                                                {
                                                    done: true
                                                }
                                            ];
                                            return [
                                                4,
                                                requestMethod({
                                                    method: method,
                                                    url: url,
                                                    headers: headers
                                                })
                                            ];
                                        case 1:
                                            response = _state.sent();
                                            normalizedResponse = normalizePaginatedListResponse(response); // `response.headers.link` format:
                                            // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
                                            // sets `url` to undefined if "next" URL is not present or `link` header is not set
                                            url = ((normalizedResponse.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1];
                                            return [
                                                2,
                                                {
                                                    value: normalizedResponse
                                                }
                                            ];
                                    }
                                });
                            })();
                        }
                    };
                });
            };
            var paginate = function paginate(octokit, route, parameters, mapFn) {
                if (typeof parameters === "function") {
                    mapFn = parameters;
                    parameters = undefined;
                }
                return gather(octokit, [], iterator(octokit, route, parameters)[Symbol.asyncIterator](), mapFn);
            };
            var paginateRest = /**
 * @param octokit Octokit instance
 * @param options Options passed to Octokit constructor
 */ function paginateRest(octokit) {
                return {
                    paginate: Object.assign(paginate.bind(null, octokit), {
                        iterator: iterator.bind(null, octokit)
                    })
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var VERSION = "2.7.0";
            function gather(octokit, results, iterator, mapFn) {
                return iterator.next().then(function(result) {
                    var done = function done() {
                        earlyExit = true;
                    };
                    if (result.done) {
                        return results;
                    }
                    var earlyExit = false;
                    results = results.concat(mapFn ? mapFn(result.value, done) : result.value.data);
                    if (earlyExit) {
                        return results;
                    }
                    return gather(octokit, results, iterator, mapFn);
                });
            }
            var composePaginateRest = Object.assign(paginate, {
                iterator: iterator
            });
            paginateRest.VERSION = VERSION;
            exports.composePaginateRest = composePaginateRest;
            exports.paginateRest = paginateRest;
        //# sourceMappingURL=index.js.map
        /***/ },
        /***/ 44: /***/ function(__unused_webpack_module, exports) {
            "use strict";
            var endpointsToMethods = function endpointsToMethods(octokit, endpointsMap) {
                var newMethods = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.entries(endpointsMap)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), scope = _step_value[0], endpoints = _step_value[1];
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = Object.entries(endpoints)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var _step_value1 = _sliced_to_array(_step1.value, 2), methodName = _step_value1[0], endpoint = _step_value1[1];
                                var _endpoint = _sliced_to_array(endpoint, 3), route = _endpoint[0], defaults = _endpoint[1], decorations = _endpoint[2];
                                var _route_split = _sliced_to_array(route.split(/ /), 2), method = _route_split[0], url = _route_split[1];
                                var endpointDefaults = Object.assign({
                                    method: method,
                                    url: url
                                }, defaults);
                                if (!newMethods[scope]) {
                                    newMethods[scope] = {};
                                }
                                var scopeMethods = newMethods[scope];
                                if (decorations) {
                                    scopeMethods[methodName] = decorate(octokit, scope, methodName, endpointDefaults, decorations);
                                    continue;
                                }
                                scopeMethods[methodName] = octokit.request.defaults(endpointDefaults);
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return newMethods;
            };
            var decorate = function decorate(octokit, scope, methodName, defaults, decorations) {
                var requestWithDefaults = octokit.request.defaults(defaults);
                /* istanbul ignore next */ function withDecorations() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    var _requestWithDefaults_endpoint;
                    // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
                    var options = (_requestWithDefaults_endpoint = requestWithDefaults.endpoint).merge.apply(_requestWithDefaults_endpoint, _to_consumable_array(args)); // There are currently no other decorations than `.mapToData`
                    if (decorations.mapToData) {
                        options = Object.assign({}, options, _define_property({
                            data: options[decorations.mapToData]
                        }, decorations.mapToData, undefined));
                        return requestWithDefaults(options);
                    }
                    if (decorations.renamed) {
                        var _decorations_renamed = _sliced_to_array(decorations.renamed, 2), newScope = _decorations_renamed[0], newMethodName = _decorations_renamed[1];
                        octokit.log.warn("octokit.".concat(scope, ".").concat(methodName, "() has been renamed to octokit.").concat(newScope, ".").concat(newMethodName, "()"));
                    }
                    if (decorations.deprecated) {
                        octokit.log.warn(decorations.deprecated);
                    }
                    if (decorations.renamedParameters) {
                        var _requestWithDefaults_endpoint1;
                        // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
                        var options1 = (_requestWithDefaults_endpoint1 = requestWithDefaults.endpoint).merge.apply(_requestWithDefaults_endpoint1, _to_consumable_array(args));
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = Object.entries(decorations.renamedParameters)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var _step_value = _sliced_to_array(_step.value, 2), name = _step_value[0], alias = _step_value[1];
                                if (name in options1) {
                                    octokit.log.warn('"'.concat(name, '" parameter is deprecated for "octokit.').concat(scope, ".").concat(methodName, '()". Use "').concat(alias, '" instead'));
                                    if (!(alias in options1)) {
                                        options1[alias] = options1[name];
                                    }
                                    delete options1[name];
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        return requestWithDefaults(options1);
                    } // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
                    return requestWithDefaults.apply(void 0, _to_consumable_array(args));
                }
                return Object.assign(withDecorations, requestWithDefaults);
            };
            var restEndpointMethods = /**
 * This plugin is a 1:1 copy of internal @octokit/rest plugins. The primary
 * goal is to rebuild @octokit/rest on top of @octokit/core. Once that is
 * done, we will remove the registerEndpoints methods and return the methods
 * directly as with the other plugins. At that point we will also remove the
 * legacy workarounds and deprecations.
 *
 * See the plan at
 * https://github.com/octokit/plugin-rest-endpoint-methods.js/pull/1
 */ function restEndpointMethods(octokit) {
                return endpointsToMethods(octokit, Endpoints);
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var Endpoints = {
                actions: {
                    addSelectedRepoToOrgSecret: [
                        "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
                    ],
                    cancelWorkflowRun: [
                        "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"
                    ],
                    createOrUpdateOrgSecret: [
                        "PUT /orgs/{org}/actions/secrets/{secret_name}"
                    ],
                    createOrUpdateRepoSecret: [
                        "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"
                    ],
                    createRegistrationTokenForOrg: [
                        "POST /orgs/{org}/actions/runners/registration-token"
                    ],
                    createRegistrationTokenForRepo: [
                        "POST /repos/{owner}/{repo}/actions/runners/registration-token"
                    ],
                    createRemoveTokenForOrg: [
                        "POST /orgs/{org}/actions/runners/remove-token"
                    ],
                    createRemoveTokenForRepo: [
                        "POST /repos/{owner}/{repo}/actions/runners/remove-token"
                    ],
                    createWorkflowDispatch: [
                        "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"
                    ],
                    deleteArtifact: [
                        "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"
                    ],
                    deleteOrgSecret: [
                        "DELETE /orgs/{org}/actions/secrets/{secret_name}"
                    ],
                    deleteRepoSecret: [
                        "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"
                    ],
                    deleteSelfHostedRunnerFromOrg: [
                        "DELETE /orgs/{org}/actions/runners/{runner_id}"
                    ],
                    deleteSelfHostedRunnerFromRepo: [
                        "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"
                    ],
                    deleteWorkflowRun: [
                        "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"
                    ],
                    deleteWorkflowRunLogs: [
                        "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
                    ],
                    disableSelectedRepositoryGithubActionsOrganization: [
                        "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"
                    ],
                    disableWorkflow: [
                        "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"
                    ],
                    downloadArtifact: [
                        "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"
                    ],
                    downloadJobLogsForWorkflowRun: [
                        "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"
                    ],
                    downloadWorkflowRunLogs: [
                        "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
                    ],
                    enableSelectedRepositoryGithubActionsOrganization: [
                        "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"
                    ],
                    enableWorkflow: [
                        "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"
                    ],
                    getAllowedActionsOrganization: [
                        "GET /orgs/{org}/actions/permissions/selected-actions"
                    ],
                    getAllowedActionsRepository: [
                        "GET /repos/{owner}/{repo}/actions/permissions/selected-actions"
                    ],
                    getArtifact: [
                        "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"
                    ],
                    getGithubActionsPermissionsOrganization: [
                        "GET /orgs/{org}/actions/permissions"
                    ],
                    getGithubActionsPermissionsRepository: [
                        "GET /repos/{owner}/{repo}/actions/permissions"
                    ],
                    getJobForWorkflowRun: [
                        "GET /repos/{owner}/{repo}/actions/jobs/{job_id}"
                    ],
                    getOrgPublicKey: [
                        "GET /orgs/{org}/actions/secrets/public-key"
                    ],
                    getOrgSecret: [
                        "GET /orgs/{org}/actions/secrets/{secret_name}"
                    ],
                    getRepoPermissions: [
                        "GET /repos/{owner}/{repo}/actions/permissions",
                        {},
                        {
                            renamed: [
                                "actions",
                                "getGithubActionsPermissionsRepository"
                            ]
                        }
                    ],
                    getRepoPublicKey: [
                        "GET /repos/{owner}/{repo}/actions/secrets/public-key"
                    ],
                    getRepoSecret: [
                        "GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"
                    ],
                    getSelfHostedRunnerForOrg: [
                        "GET /orgs/{org}/actions/runners/{runner_id}"
                    ],
                    getSelfHostedRunnerForRepo: [
                        "GET /repos/{owner}/{repo}/actions/runners/{runner_id}"
                    ],
                    getWorkflow: [
                        "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"
                    ],
                    getWorkflowRun: [
                        "GET /repos/{owner}/{repo}/actions/runs/{run_id}"
                    ],
                    getWorkflowRunUsage: [
                        "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"
                    ],
                    getWorkflowUsage: [
                        "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"
                    ],
                    listArtifactsForRepo: [
                        "GET /repos/{owner}/{repo}/actions/artifacts"
                    ],
                    listJobsForWorkflowRun: [
                        "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"
                    ],
                    listOrgSecrets: [
                        "GET /orgs/{org}/actions/secrets"
                    ],
                    listRepoSecrets: [
                        "GET /repos/{owner}/{repo}/actions/secrets"
                    ],
                    listRepoWorkflows: [
                        "GET /repos/{owner}/{repo}/actions/workflows"
                    ],
                    listRunnerApplicationsForOrg: [
                        "GET /orgs/{org}/actions/runners/downloads"
                    ],
                    listRunnerApplicationsForRepo: [
                        "GET /repos/{owner}/{repo}/actions/runners/downloads"
                    ],
                    listSelectedReposForOrgSecret: [
                        "GET /orgs/{org}/actions/secrets/{secret_name}/repositories"
                    ],
                    listSelectedRepositoriesEnabledGithubActionsOrganization: [
                        "GET /orgs/{org}/actions/permissions/repositories"
                    ],
                    listSelfHostedRunnersForOrg: [
                        "GET /orgs/{org}/actions/runners"
                    ],
                    listSelfHostedRunnersForRepo: [
                        "GET /repos/{owner}/{repo}/actions/runners"
                    ],
                    listWorkflowRunArtifacts: [
                        "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"
                    ],
                    listWorkflowRuns: [
                        "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"
                    ],
                    listWorkflowRunsForRepo: [
                        "GET /repos/{owner}/{repo}/actions/runs"
                    ],
                    reRunWorkflow: [
                        "POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"
                    ],
                    removeSelectedRepoFromOrgSecret: [
                        "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
                    ],
                    setAllowedActionsOrganization: [
                        "PUT /orgs/{org}/actions/permissions/selected-actions"
                    ],
                    setAllowedActionsRepository: [
                        "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"
                    ],
                    setGithubActionsPermissionsOrganization: [
                        "PUT /orgs/{org}/actions/permissions"
                    ],
                    setGithubActionsPermissionsRepository: [
                        "PUT /repos/{owner}/{repo}/actions/permissions"
                    ],
                    setSelectedReposForOrgSecret: [
                        "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"
                    ],
                    setSelectedRepositoriesEnabledGithubActionsOrganization: [
                        "PUT /orgs/{org}/actions/permissions/repositories"
                    ]
                },
                activity: {
                    checkRepoIsStarredByAuthenticatedUser: [
                        "GET /user/starred/{owner}/{repo}"
                    ],
                    deleteRepoSubscription: [
                        "DELETE /repos/{owner}/{repo}/subscription"
                    ],
                    deleteThreadSubscription: [
                        "DELETE /notifications/threads/{thread_id}/subscription"
                    ],
                    getFeeds: [
                        "GET /feeds"
                    ],
                    getRepoSubscription: [
                        "GET /repos/{owner}/{repo}/subscription"
                    ],
                    getThread: [
                        "GET /notifications/threads/{thread_id}"
                    ],
                    getThreadSubscriptionForAuthenticatedUser: [
                        "GET /notifications/threads/{thread_id}/subscription"
                    ],
                    listEventsForAuthenticatedUser: [
                        "GET /users/{username}/events"
                    ],
                    listNotificationsForAuthenticatedUser: [
                        "GET /notifications"
                    ],
                    listOrgEventsForAuthenticatedUser: [
                        "GET /users/{username}/events/orgs/{org}"
                    ],
                    listPublicEvents: [
                        "GET /events"
                    ],
                    listPublicEventsForRepoNetwork: [
                        "GET /networks/{owner}/{repo}/events"
                    ],
                    listPublicEventsForUser: [
                        "GET /users/{username}/events/public"
                    ],
                    listPublicOrgEvents: [
                        "GET /orgs/{org}/events"
                    ],
                    listReceivedEventsForUser: [
                        "GET /users/{username}/received_events"
                    ],
                    listReceivedPublicEventsForUser: [
                        "GET /users/{username}/received_events/public"
                    ],
                    listRepoEvents: [
                        "GET /repos/{owner}/{repo}/events"
                    ],
                    listRepoNotificationsForAuthenticatedUser: [
                        "GET /repos/{owner}/{repo}/notifications"
                    ],
                    listReposStarredByAuthenticatedUser: [
                        "GET /user/starred"
                    ],
                    listReposStarredByUser: [
                        "GET /users/{username}/starred"
                    ],
                    listReposWatchedByUser: [
                        "GET /users/{username}/subscriptions"
                    ],
                    listStargazersForRepo: [
                        "GET /repos/{owner}/{repo}/stargazers"
                    ],
                    listWatchedReposForAuthenticatedUser: [
                        "GET /user/subscriptions"
                    ],
                    listWatchersForRepo: [
                        "GET /repos/{owner}/{repo}/subscribers"
                    ],
                    markNotificationsAsRead: [
                        "PUT /notifications"
                    ],
                    markRepoNotificationsAsRead: [
                        "PUT /repos/{owner}/{repo}/notifications"
                    ],
                    markThreadAsRead: [
                        "PATCH /notifications/threads/{thread_id}"
                    ],
                    setRepoSubscription: [
                        "PUT /repos/{owner}/{repo}/subscription"
                    ],
                    setThreadSubscription: [
                        "PUT /notifications/threads/{thread_id}/subscription"
                    ],
                    starRepoForAuthenticatedUser: [
                        "PUT /user/starred/{owner}/{repo}"
                    ],
                    unstarRepoForAuthenticatedUser: [
                        "DELETE /user/starred/{owner}/{repo}"
                    ]
                },
                apps: {
                    addRepoToInstallation: [
                        "PUT /user/installations/{installation_id}/repositories/{repository_id}"
                    ],
                    checkToken: [
                        "POST /applications/{client_id}/token"
                    ],
                    createContentAttachment: [
                        "POST /content_references/{content_reference_id}/attachments",
                        {
                            mediaType: {
                                previews: [
                                    "corsair"
                                ]
                            }
                        }
                    ],
                    createFromManifest: [
                        "POST /app-manifests/{code}/conversions"
                    ],
                    createInstallationAccessToken: [
                        "POST /app/installations/{installation_id}/access_tokens"
                    ],
                    deleteAuthorization: [
                        "DELETE /applications/{client_id}/grant"
                    ],
                    deleteInstallation: [
                        "DELETE /app/installations/{installation_id}"
                    ],
                    deleteToken: [
                        "DELETE /applications/{client_id}/token"
                    ],
                    getAuthenticated: [
                        "GET /app"
                    ],
                    getBySlug: [
                        "GET /apps/{app_slug}"
                    ],
                    getInstallation: [
                        "GET /app/installations/{installation_id}"
                    ],
                    getOrgInstallation: [
                        "GET /orgs/{org}/installation"
                    ],
                    getRepoInstallation: [
                        "GET /repos/{owner}/{repo}/installation"
                    ],
                    getSubscriptionPlanForAccount: [
                        "GET /marketplace_listing/accounts/{account_id}"
                    ],
                    getSubscriptionPlanForAccountStubbed: [
                        "GET /marketplace_listing/stubbed/accounts/{account_id}"
                    ],
                    getUserInstallation: [
                        "GET /users/{username}/installation"
                    ],
                    getWebhookConfigForApp: [
                        "GET /app/hook/config"
                    ],
                    listAccountsForPlan: [
                        "GET /marketplace_listing/plans/{plan_id}/accounts"
                    ],
                    listAccountsForPlanStubbed: [
                        "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"
                    ],
                    listInstallationReposForAuthenticatedUser: [
                        "GET /user/installations/{installation_id}/repositories"
                    ],
                    listInstallations: [
                        "GET /app/installations"
                    ],
                    listInstallationsForAuthenticatedUser: [
                        "GET /user/installations"
                    ],
                    listPlans: [
                        "GET /marketplace_listing/plans"
                    ],
                    listPlansStubbed: [
                        "GET /marketplace_listing/stubbed/plans"
                    ],
                    listReposAccessibleToInstallation: [
                        "GET /installation/repositories"
                    ],
                    listSubscriptionsForAuthenticatedUser: [
                        "GET /user/marketplace_purchases"
                    ],
                    listSubscriptionsForAuthenticatedUserStubbed: [
                        "GET /user/marketplace_purchases/stubbed"
                    ],
                    removeRepoFromInstallation: [
                        "DELETE /user/installations/{installation_id}/repositories/{repository_id}"
                    ],
                    resetToken: [
                        "PATCH /applications/{client_id}/token"
                    ],
                    revokeInstallationAccessToken: [
                        "DELETE /installation/token"
                    ],
                    suspendInstallation: [
                        "PUT /app/installations/{installation_id}/suspended"
                    ],
                    unsuspendInstallation: [
                        "DELETE /app/installations/{installation_id}/suspended"
                    ],
                    updateWebhookConfigForApp: [
                        "PATCH /app/hook/config"
                    ]
                },
                billing: {
                    getGithubActionsBillingOrg: [
                        "GET /orgs/{org}/settings/billing/actions"
                    ],
                    getGithubActionsBillingUser: [
                        "GET /users/{username}/settings/billing/actions"
                    ],
                    getGithubPackagesBillingOrg: [
                        "GET /orgs/{org}/settings/billing/packages"
                    ],
                    getGithubPackagesBillingUser: [
                        "GET /users/{username}/settings/billing/packages"
                    ],
                    getSharedStorageBillingOrg: [
                        "GET /orgs/{org}/settings/billing/shared-storage"
                    ],
                    getSharedStorageBillingUser: [
                        "GET /users/{username}/settings/billing/shared-storage"
                    ]
                },
                checks: {
                    create: [
                        "POST /repos/{owner}/{repo}/check-runs"
                    ],
                    createSuite: [
                        "POST /repos/{owner}/{repo}/check-suites"
                    ],
                    get: [
                        "GET /repos/{owner}/{repo}/check-runs/{check_run_id}"
                    ],
                    getSuite: [
                        "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"
                    ],
                    listAnnotations: [
                        "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"
                    ],
                    listForRef: [
                        "GET /repos/{owner}/{repo}/commits/{ref}/check-runs"
                    ],
                    listForSuite: [
                        "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"
                    ],
                    listSuitesForRef: [
                        "GET /repos/{owner}/{repo}/commits/{ref}/check-suites"
                    ],
                    rerequestSuite: [
                        "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"
                    ],
                    setSuitesPreferences: [
                        "PATCH /repos/{owner}/{repo}/check-suites/preferences"
                    ],
                    update: [
                        "PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"
                    ]
                },
                codeScanning: {
                    getAlert: [
                        "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
                        {},
                        {
                            renamedParameters: {
                                alert_id: "alert_number"
                            }
                        }
                    ],
                    listAlertsForRepo: [
                        "GET /repos/{owner}/{repo}/code-scanning/alerts"
                    ],
                    listRecentAnalyses: [
                        "GET /repos/{owner}/{repo}/code-scanning/analyses"
                    ],
                    updateAlert: [
                        "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"
                    ],
                    uploadSarif: [
                        "POST /repos/{owner}/{repo}/code-scanning/sarifs"
                    ]
                },
                codesOfConduct: {
                    getAllCodesOfConduct: [
                        "GET /codes_of_conduct",
                        {
                            mediaType: {
                                previews: [
                                    "scarlet-witch"
                                ]
                            }
                        }
                    ],
                    getConductCode: [
                        "GET /codes_of_conduct/{key}",
                        {
                            mediaType: {
                                previews: [
                                    "scarlet-witch"
                                ]
                            }
                        }
                    ],
                    getForRepo: [
                        "GET /repos/{owner}/{repo}/community/code_of_conduct",
                        {
                            mediaType: {
                                previews: [
                                    "scarlet-witch"
                                ]
                            }
                        }
                    ]
                },
                emojis: {
                    get: [
                        "GET /emojis"
                    ]
                },
                enterpriseAdmin: {
                    disableSelectedOrganizationGithubActionsEnterprise: [
                        "DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"
                    ],
                    enableSelectedOrganizationGithubActionsEnterprise: [
                        "PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"
                    ],
                    getAllowedActionsEnterprise: [
                        "GET /enterprises/{enterprise}/actions/permissions/selected-actions"
                    ],
                    getGithubActionsPermissionsEnterprise: [
                        "GET /enterprises/{enterprise}/actions/permissions"
                    ],
                    listSelectedOrganizationsEnabledGithubActionsEnterprise: [
                        "GET /enterprises/{enterprise}/actions/permissions/organizations"
                    ],
                    setAllowedActionsEnterprise: [
                        "PUT /enterprises/{enterprise}/actions/permissions/selected-actions"
                    ],
                    setGithubActionsPermissionsEnterprise: [
                        "PUT /enterprises/{enterprise}/actions/permissions"
                    ],
                    setSelectedOrganizationsEnabledGithubActionsEnterprise: [
                        "PUT /enterprises/{enterprise}/actions/permissions/organizations"
                    ]
                },
                gists: {
                    checkIsStarred: [
                        "GET /gists/{gist_id}/star"
                    ],
                    create: [
                        "POST /gists"
                    ],
                    createComment: [
                        "POST /gists/{gist_id}/comments"
                    ],
                    delete: [
                        "DELETE /gists/{gist_id}"
                    ],
                    deleteComment: [
                        "DELETE /gists/{gist_id}/comments/{comment_id}"
                    ],
                    fork: [
                        "POST /gists/{gist_id}/forks"
                    ],
                    get: [
                        "GET /gists/{gist_id}"
                    ],
                    getComment: [
                        "GET /gists/{gist_id}/comments/{comment_id}"
                    ],
                    getRevision: [
                        "GET /gists/{gist_id}/{sha}"
                    ],
                    list: [
                        "GET /gists"
                    ],
                    listComments: [
                        "GET /gists/{gist_id}/comments"
                    ],
                    listCommits: [
                        "GET /gists/{gist_id}/commits"
                    ],
                    listForUser: [
                        "GET /users/{username}/gists"
                    ],
                    listForks: [
                        "GET /gists/{gist_id}/forks"
                    ],
                    listPublic: [
                        "GET /gists/public"
                    ],
                    listStarred: [
                        "GET /gists/starred"
                    ],
                    star: [
                        "PUT /gists/{gist_id}/star"
                    ],
                    unstar: [
                        "DELETE /gists/{gist_id}/star"
                    ],
                    update: [
                        "PATCH /gists/{gist_id}"
                    ],
                    updateComment: [
                        "PATCH /gists/{gist_id}/comments/{comment_id}"
                    ]
                },
                git: {
                    createBlob: [
                        "POST /repos/{owner}/{repo}/git/blobs"
                    ],
                    createCommit: [
                        "POST /repos/{owner}/{repo}/git/commits"
                    ],
                    createRef: [
                        "POST /repos/{owner}/{repo}/git/refs"
                    ],
                    createTag: [
                        "POST /repos/{owner}/{repo}/git/tags"
                    ],
                    createTree: [
                        "POST /repos/{owner}/{repo}/git/trees"
                    ],
                    deleteRef: [
                        "DELETE /repos/{owner}/{repo}/git/refs/{ref}"
                    ],
                    getBlob: [
                        "GET /repos/{owner}/{repo}/git/blobs/{file_sha}"
                    ],
                    getCommit: [
                        "GET /repos/{owner}/{repo}/git/commits/{commit_sha}"
                    ],
                    getRef: [
                        "GET /repos/{owner}/{repo}/git/ref/{ref}"
                    ],
                    getTag: [
                        "GET /repos/{owner}/{repo}/git/tags/{tag_sha}"
                    ],
                    getTree: [
                        "GET /repos/{owner}/{repo}/git/trees/{tree_sha}"
                    ],
                    listMatchingRefs: [
                        "GET /repos/{owner}/{repo}/git/matching-refs/{ref}"
                    ],
                    updateRef: [
                        "PATCH /repos/{owner}/{repo}/git/refs/{ref}"
                    ]
                },
                gitignore: {
                    getAllTemplates: [
                        "GET /gitignore/templates"
                    ],
                    getTemplate: [
                        "GET /gitignore/templates/{name}"
                    ]
                },
                interactions: {
                    getRestrictionsForOrg: [
                        "GET /orgs/{org}/interaction-limits"
                    ],
                    getRestrictionsForRepo: [
                        "GET /repos/{owner}/{repo}/interaction-limits"
                    ],
                    getRestrictionsForYourPublicRepos: [
                        "GET /user/interaction-limits"
                    ],
                    removeRestrictionsForOrg: [
                        "DELETE /orgs/{org}/interaction-limits"
                    ],
                    removeRestrictionsForRepo: [
                        "DELETE /repos/{owner}/{repo}/interaction-limits"
                    ],
                    removeRestrictionsForYourPublicRepos: [
                        "DELETE /user/interaction-limits"
                    ],
                    setRestrictionsForOrg: [
                        "PUT /orgs/{org}/interaction-limits"
                    ],
                    setRestrictionsForRepo: [
                        "PUT /repos/{owner}/{repo}/interaction-limits"
                    ],
                    setRestrictionsForYourPublicRepos: [
                        "PUT /user/interaction-limits"
                    ]
                },
                issues: {
                    addAssignees: [
                        "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"
                    ],
                    addLabels: [
                        "POST /repos/{owner}/{repo}/issues/{issue_number}/labels"
                    ],
                    checkUserCanBeAssigned: [
                        "GET /repos/{owner}/{repo}/assignees/{assignee}"
                    ],
                    create: [
                        "POST /repos/{owner}/{repo}/issues"
                    ],
                    createComment: [
                        "POST /repos/{owner}/{repo}/issues/{issue_number}/comments"
                    ],
                    createLabel: [
                        "POST /repos/{owner}/{repo}/labels"
                    ],
                    createMilestone: [
                        "POST /repos/{owner}/{repo}/milestones"
                    ],
                    deleteComment: [
                        "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"
                    ],
                    deleteLabel: [
                        "DELETE /repos/{owner}/{repo}/labels/{name}"
                    ],
                    deleteMilestone: [
                        "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"
                    ],
                    get: [
                        "GET /repos/{owner}/{repo}/issues/{issue_number}"
                    ],
                    getComment: [
                        "GET /repos/{owner}/{repo}/issues/comments/{comment_id}"
                    ],
                    getEvent: [
                        "GET /repos/{owner}/{repo}/issues/events/{event_id}"
                    ],
                    getLabel: [
                        "GET /repos/{owner}/{repo}/labels/{name}"
                    ],
                    getMilestone: [
                        "GET /repos/{owner}/{repo}/milestones/{milestone_number}"
                    ],
                    list: [
                        "GET /issues"
                    ],
                    listAssignees: [
                        "GET /repos/{owner}/{repo}/assignees"
                    ],
                    listComments: [
                        "GET /repos/{owner}/{repo}/issues/{issue_number}/comments"
                    ],
                    listCommentsForRepo: [
                        "GET /repos/{owner}/{repo}/issues/comments"
                    ],
                    listEvents: [
                        "GET /repos/{owner}/{repo}/issues/{issue_number}/events"
                    ],
                    listEventsForRepo: [
                        "GET /repos/{owner}/{repo}/issues/events"
                    ],
                    listEventsForTimeline: [
                        "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
                        {
                            mediaType: {
                                previews: [
                                    "mockingbird"
                                ]
                            }
                        }
                    ],
                    listForAuthenticatedUser: [
                        "GET /user/issues"
                    ],
                    listForOrg: [
                        "GET /orgs/{org}/issues"
                    ],
                    listForRepo: [
                        "GET /repos/{owner}/{repo}/issues"
                    ],
                    listLabelsForMilestone: [
                        "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"
                    ],
                    listLabelsForRepo: [
                        "GET /repos/{owner}/{repo}/labels"
                    ],
                    listLabelsOnIssue: [
                        "GET /repos/{owner}/{repo}/issues/{issue_number}/labels"
                    ],
                    listMilestones: [
                        "GET /repos/{owner}/{repo}/milestones"
                    ],
                    lock: [
                        "PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"
                    ],
                    removeAllLabels: [
                        "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"
                    ],
                    removeAssignees: [
                        "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"
                    ],
                    removeLabel: [
                        "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"
                    ],
                    setLabels: [
                        "PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"
                    ],
                    unlock: [
                        "DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"
                    ],
                    update: [
                        "PATCH /repos/{owner}/{repo}/issues/{issue_number}"
                    ],
                    updateComment: [
                        "PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"
                    ],
                    updateLabel: [
                        "PATCH /repos/{owner}/{repo}/labels/{name}"
                    ],
                    updateMilestone: [
                        "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"
                    ]
                },
                licenses: {
                    get: [
                        "GET /licenses/{license}"
                    ],
                    getAllCommonlyUsed: [
                        "GET /licenses"
                    ],
                    getForRepo: [
                        "GET /repos/{owner}/{repo}/license"
                    ]
                },
                markdown: {
                    render: [
                        "POST /markdown"
                    ],
                    renderRaw: [
                        "POST /markdown/raw",
                        {
                            headers: {
                                "content-type": "text/plain; charset=utf-8"
                            }
                        }
                    ]
                },
                meta: {
                    get: [
                        "GET /meta"
                    ],
                    getOctocat: [
                        "GET /octocat"
                    ],
                    getZen: [
                        "GET /zen"
                    ],
                    root: [
                        "GET /"
                    ]
                },
                migrations: {
                    cancelImport: [
                        "DELETE /repos/{owner}/{repo}/import"
                    ],
                    deleteArchiveForAuthenticatedUser: [
                        "DELETE /user/migrations/{migration_id}/archive",
                        {
                            mediaType: {
                                previews: [
                                    "wyandotte"
                                ]
                            }
                        }
                    ],
                    deleteArchiveForOrg: [
                        "DELETE /orgs/{org}/migrations/{migration_id}/archive",
                        {
                            mediaType: {
                                previews: [
                                    "wyandotte"
                                ]
                            }
                        }
                    ],
                    downloadArchiveForOrg: [
                        "GET /orgs/{org}/migrations/{migration_id}/archive",
                        {
                            mediaType: {
                                previews: [
                                    "wyandotte"
                                ]
                            }
                        }
                    ],
                    getArchiveForAuthenticatedUser: [
                        "GET /user/migrations/{migration_id}/archive",
                        {
                            mediaType: {
                                previews: [
                                    "wyandotte"
                                ]
                            }
                        }
                    ],
                    getCommitAuthors: [
                        "GET /repos/{owner}/{repo}/import/authors"
                    ],
                    getImportStatus: [
                        "GET /repos/{owner}/{repo}/import"
                    ],
                    getLargeFiles: [
                        "GET /repos/{owner}/{repo}/import/large_files"
                    ],
                    getStatusForAuthenticatedUser: [
                        "GET /user/migrations/{migration_id}",
                        {
                            mediaType: {
                                previews: [
                                    "wyandotte"
                                ]
                            }
                        }
                    ],
                    getStatusForOrg: [
                        "GET /orgs/{org}/migrations/{migration_id}",
                        {
                            mediaType: {
                                previews: [
                                    "wyandotte"
                                ]
                            }
                        }
                    ],
                    listForAuthenticatedUser: [
                        "GET /user/migrations",
                        {
                            mediaType: {
                                previews: [
                                    "wyandotte"
                                ]
                            }
                        }
                    ],
                    listForOrg: [
                        "GET /orgs/{org}/migrations",
                        {
                            mediaType: {
                                previews: [
                                    "wyandotte"
                                ]
                            }
                        }
                    ],
                    listReposForOrg: [
                        "GET /orgs/{org}/migrations/{migration_id}/repositories",
                        {
                            mediaType: {
                                previews: [
                                    "wyandotte"
                                ]
                            }
                        }
                    ],
                    listReposForUser: [
                        "GET /user/migrations/{migration_id}/repositories",
                        {
                            mediaType: {
                                previews: [
                                    "wyandotte"
                                ]
                            }
                        }
                    ],
                    mapCommitAuthor: [
                        "PATCH /repos/{owner}/{repo}/import/authors/{author_id}"
                    ],
                    setLfsPreference: [
                        "PATCH /repos/{owner}/{repo}/import/lfs"
                    ],
                    startForAuthenticatedUser: [
                        "POST /user/migrations"
                    ],
                    startForOrg: [
                        "POST /orgs/{org}/migrations"
                    ],
                    startImport: [
                        "PUT /repos/{owner}/{repo}/import"
                    ],
                    unlockRepoForAuthenticatedUser: [
                        "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock",
                        {
                            mediaType: {
                                previews: [
                                    "wyandotte"
                                ]
                            }
                        }
                    ],
                    unlockRepoForOrg: [
                        "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock",
                        {
                            mediaType: {
                                previews: [
                                    "wyandotte"
                                ]
                            }
                        }
                    ],
                    updateImport: [
                        "PATCH /repos/{owner}/{repo}/import"
                    ]
                },
                orgs: {
                    blockUser: [
                        "PUT /orgs/{org}/blocks/{username}",
                        {
                            mediaType: {
                                previews: [
                                    "giant-sentry-fist"
                                ]
                            }
                        }
                    ],
                    checkBlockedUser: [
                        "GET /orgs/{org}/blocks/{username}",
                        {
                            mediaType: {
                                previews: [
                                    "giant-sentry-fist"
                                ]
                            }
                        }
                    ],
                    checkMembershipForUser: [
                        "GET /orgs/{org}/members/{username}"
                    ],
                    checkPublicMembershipForUser: [
                        "GET /orgs/{org}/public_members/{username}"
                    ],
                    convertMemberToOutsideCollaborator: [
                        "PUT /orgs/{org}/outside_collaborators/{username}"
                    ],
                    createInvitation: [
                        "POST /orgs/{org}/invitations"
                    ],
                    createWebhook: [
                        "POST /orgs/{org}/hooks"
                    ],
                    deleteWebhook: [
                        "DELETE /orgs/{org}/hooks/{hook_id}"
                    ],
                    get: [
                        "GET /orgs/{org}"
                    ],
                    getMembershipForAuthenticatedUser: [
                        "GET /user/memberships/orgs/{org}"
                    ],
                    getMembershipForUser: [
                        "GET /orgs/{org}/memberships/{username}"
                    ],
                    getWebhook: [
                        "GET /orgs/{org}/hooks/{hook_id}"
                    ],
                    getWebhookConfigForOrg: [
                        "GET /orgs/{org}/hooks/{hook_id}/config"
                    ],
                    list: [
                        "GET /organizations"
                    ],
                    listAppInstallations: [
                        "GET /orgs/{org}/installations"
                    ],
                    listBlockedUsers: [
                        "GET /orgs/{org}/blocks",
                        {
                            mediaType: {
                                previews: [
                                    "giant-sentry-fist"
                                ]
                            }
                        }
                    ],
                    listForAuthenticatedUser: [
                        "GET /user/orgs"
                    ],
                    listForUser: [
                        "GET /users/{username}/orgs"
                    ],
                    listInvitationTeams: [
                        "GET /orgs/{org}/invitations/{invitation_id}/teams"
                    ],
                    listMembers: [
                        "GET /orgs/{org}/members"
                    ],
                    listMembershipsForAuthenticatedUser: [
                        "GET /user/memberships/orgs"
                    ],
                    listOutsideCollaborators: [
                        "GET /orgs/{org}/outside_collaborators"
                    ],
                    listPendingInvitations: [
                        "GET /orgs/{org}/invitations"
                    ],
                    listPublicMembers: [
                        "GET /orgs/{org}/public_members"
                    ],
                    listWebhooks: [
                        "GET /orgs/{org}/hooks"
                    ],
                    pingWebhook: [
                        "POST /orgs/{org}/hooks/{hook_id}/pings"
                    ],
                    removeMember: [
                        "DELETE /orgs/{org}/members/{username}"
                    ],
                    removeMembershipForUser: [
                        "DELETE /orgs/{org}/memberships/{username}"
                    ],
                    removeOutsideCollaborator: [
                        "DELETE /orgs/{org}/outside_collaborators/{username}"
                    ],
                    removePublicMembershipForAuthenticatedUser: [
                        "DELETE /orgs/{org}/public_members/{username}"
                    ],
                    setMembershipForUser: [
                        "PUT /orgs/{org}/memberships/{username}"
                    ],
                    setPublicMembershipForAuthenticatedUser: [
                        "PUT /orgs/{org}/public_members/{username}"
                    ],
                    unblockUser: [
                        "DELETE /orgs/{org}/blocks/{username}",
                        {
                            mediaType: {
                                previews: [
                                    "giant-sentry-fist"
                                ]
                            }
                        }
                    ],
                    update: [
                        "PATCH /orgs/{org}"
                    ],
                    updateMembershipForAuthenticatedUser: [
                        "PATCH /user/memberships/orgs/{org}"
                    ],
                    updateWebhook: [
                        "PATCH /orgs/{org}/hooks/{hook_id}"
                    ],
                    updateWebhookConfigForOrg: [
                        "PATCH /orgs/{org}/hooks/{hook_id}/config"
                    ]
                },
                projects: {
                    addCollaborator: [
                        "PUT /projects/{project_id}/collaborators/{username}",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    createCard: [
                        "POST /projects/columns/{column_id}/cards",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    createColumn: [
                        "POST /projects/{project_id}/columns",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    createForAuthenticatedUser: [
                        "POST /user/projects",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    createForOrg: [
                        "POST /orgs/{org}/projects",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    createForRepo: [
                        "POST /repos/{owner}/{repo}/projects",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    delete: [
                        "DELETE /projects/{project_id}",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    deleteCard: [
                        "DELETE /projects/columns/cards/{card_id}",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    deleteColumn: [
                        "DELETE /projects/columns/{column_id}",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    get: [
                        "GET /projects/{project_id}",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    getCard: [
                        "GET /projects/columns/cards/{card_id}",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    getColumn: [
                        "GET /projects/columns/{column_id}",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    getPermissionForUser: [
                        "GET /projects/{project_id}/collaborators/{username}/permission",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    listCards: [
                        "GET /projects/columns/{column_id}/cards",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    listCollaborators: [
                        "GET /projects/{project_id}/collaborators",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    listColumns: [
                        "GET /projects/{project_id}/columns",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    listForOrg: [
                        "GET /orgs/{org}/projects",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    listForRepo: [
                        "GET /repos/{owner}/{repo}/projects",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    listForUser: [
                        "GET /users/{username}/projects",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    moveCard: [
                        "POST /projects/columns/cards/{card_id}/moves",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    moveColumn: [
                        "POST /projects/columns/{column_id}/moves",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    removeCollaborator: [
                        "DELETE /projects/{project_id}/collaborators/{username}",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    update: [
                        "PATCH /projects/{project_id}",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    updateCard: [
                        "PATCH /projects/columns/cards/{card_id}",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    updateColumn: [
                        "PATCH /projects/columns/{column_id}",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ]
                },
                pulls: {
                    checkIfMerged: [
                        "GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"
                    ],
                    create: [
                        "POST /repos/{owner}/{repo}/pulls"
                    ],
                    createReplyForReviewComment: [
                        "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"
                    ],
                    createReview: [
                        "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"
                    ],
                    createReviewComment: [
                        "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"
                    ],
                    deletePendingReview: [
                        "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
                    ],
                    deleteReviewComment: [
                        "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"
                    ],
                    dismissReview: [
                        "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"
                    ],
                    get: [
                        "GET /repos/{owner}/{repo}/pulls/{pull_number}"
                    ],
                    getReview: [
                        "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
                    ],
                    getReviewComment: [
                        "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"
                    ],
                    list: [
                        "GET /repos/{owner}/{repo}/pulls"
                    ],
                    listCommentsForReview: [
                        "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"
                    ],
                    listCommits: [
                        "GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"
                    ],
                    listFiles: [
                        "GET /repos/{owner}/{repo}/pulls/{pull_number}/files"
                    ],
                    listRequestedReviewers: [
                        "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
                    ],
                    listReviewComments: [
                        "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"
                    ],
                    listReviewCommentsForRepo: [
                        "GET /repos/{owner}/{repo}/pulls/comments"
                    ],
                    listReviews: [
                        "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"
                    ],
                    merge: [
                        "PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"
                    ],
                    removeRequestedReviewers: [
                        "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
                    ],
                    requestReviewers: [
                        "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
                    ],
                    submitReview: [
                        "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"
                    ],
                    update: [
                        "PATCH /repos/{owner}/{repo}/pulls/{pull_number}"
                    ],
                    updateBranch: [
                        "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch",
                        {
                            mediaType: {
                                previews: [
                                    "lydian"
                                ]
                            }
                        }
                    ],
                    updateReview: [
                        "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
                    ],
                    updateReviewComment: [
                        "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"
                    ]
                },
                rateLimit: {
                    get: [
                        "GET /rate_limit"
                    ]
                },
                reactions: {
                    createForCommitComment: [
                        "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    createForIssue: [
                        "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    createForIssueComment: [
                        "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    createForPullRequestReviewComment: [
                        "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    createForTeamDiscussionCommentInOrg: [
                        "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    createForTeamDiscussionInOrg: [
                        "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    deleteForCommitComment: [
                        "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    deleteForIssue: [
                        "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    deleteForIssueComment: [
                        "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    deleteForPullRequestComment: [
                        "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    deleteForTeamDiscussion: [
                        "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    deleteForTeamDiscussionComment: [
                        "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    deleteLegacy: [
                        "DELETE /reactions/{reaction_id}",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        },
                        {
                            deprecated: "octokit.reactions.deleteLegacy() is deprecated, see https://docs.github.com/v3/reactions/#delete-a-reaction-legacy"
                        }
                    ],
                    listForCommitComment: [
                        "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    listForIssue: [
                        "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    listForIssueComment: [
                        "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    listForPullRequestReviewComment: [
                        "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    listForTeamDiscussionCommentInOrg: [
                        "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ],
                    listForTeamDiscussionInOrg: [
                        "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
                        {
                            mediaType: {
                                previews: [
                                    "squirrel-girl"
                                ]
                            }
                        }
                    ]
                },
                repos: {
                    acceptInvitation: [
                        "PATCH /user/repository_invitations/{invitation_id}"
                    ],
                    addAppAccessRestrictions: [
                        "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
                        {},
                        {
                            mapToData: "apps"
                        }
                    ],
                    addCollaborator: [
                        "PUT /repos/{owner}/{repo}/collaborators/{username}"
                    ],
                    addStatusCheckContexts: [
                        "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
                        {},
                        {
                            mapToData: "contexts"
                        }
                    ],
                    addTeamAccessRestrictions: [
                        "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
                        {},
                        {
                            mapToData: "teams"
                        }
                    ],
                    addUserAccessRestrictions: [
                        "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
                        {},
                        {
                            mapToData: "users"
                        }
                    ],
                    checkCollaborator: [
                        "GET /repos/{owner}/{repo}/collaborators/{username}"
                    ],
                    checkVulnerabilityAlerts: [
                        "GET /repos/{owner}/{repo}/vulnerability-alerts",
                        {
                            mediaType: {
                                previews: [
                                    "dorian"
                                ]
                            }
                        }
                    ],
                    compareCommits: [
                        "GET /repos/{owner}/{repo}/compare/{base}...{head}"
                    ],
                    createCommitComment: [
                        "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"
                    ],
                    createCommitSignatureProtection: [
                        "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
                        {
                            mediaType: {
                                previews: [
                                    "zzzax"
                                ]
                            }
                        }
                    ],
                    createCommitStatus: [
                        "POST /repos/{owner}/{repo}/statuses/{sha}"
                    ],
                    createDeployKey: [
                        "POST /repos/{owner}/{repo}/keys"
                    ],
                    createDeployment: [
                        "POST /repos/{owner}/{repo}/deployments"
                    ],
                    createDeploymentStatus: [
                        "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
                    ],
                    createDispatchEvent: [
                        "POST /repos/{owner}/{repo}/dispatches"
                    ],
                    createForAuthenticatedUser: [
                        "POST /user/repos"
                    ],
                    createFork: [
                        "POST /repos/{owner}/{repo}/forks"
                    ],
                    createInOrg: [
                        "POST /orgs/{org}/repos"
                    ],
                    createOrUpdateFileContents: [
                        "PUT /repos/{owner}/{repo}/contents/{path}"
                    ],
                    createPagesSite: [
                        "POST /repos/{owner}/{repo}/pages",
                        {
                            mediaType: {
                                previews: [
                                    "switcheroo"
                                ]
                            }
                        }
                    ],
                    createRelease: [
                        "POST /repos/{owner}/{repo}/releases"
                    ],
                    createUsingTemplate: [
                        "POST /repos/{template_owner}/{template_repo}/generate",
                        {
                            mediaType: {
                                previews: [
                                    "baptiste"
                                ]
                            }
                        }
                    ],
                    createWebhook: [
                        "POST /repos/{owner}/{repo}/hooks"
                    ],
                    declineInvitation: [
                        "DELETE /user/repository_invitations/{invitation_id}"
                    ],
                    delete: [
                        "DELETE /repos/{owner}/{repo}"
                    ],
                    deleteAccessRestrictions: [
                        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
                    ],
                    deleteAdminBranchProtection: [
                        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
                    ],
                    deleteBranchProtection: [
                        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection"
                    ],
                    deleteCommitComment: [
                        "DELETE /repos/{owner}/{repo}/comments/{comment_id}"
                    ],
                    deleteCommitSignatureProtection: [
                        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
                        {
                            mediaType: {
                                previews: [
                                    "zzzax"
                                ]
                            }
                        }
                    ],
                    deleteDeployKey: [
                        "DELETE /repos/{owner}/{repo}/keys/{key_id}"
                    ],
                    deleteDeployment: [
                        "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"
                    ],
                    deleteFile: [
                        "DELETE /repos/{owner}/{repo}/contents/{path}"
                    ],
                    deleteInvitation: [
                        "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"
                    ],
                    deletePagesSite: [
                        "DELETE /repos/{owner}/{repo}/pages",
                        {
                            mediaType: {
                                previews: [
                                    "switcheroo"
                                ]
                            }
                        }
                    ],
                    deletePullRequestReviewProtection: [
                        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
                    ],
                    deleteRelease: [
                        "DELETE /repos/{owner}/{repo}/releases/{release_id}"
                    ],
                    deleteReleaseAsset: [
                        "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"
                    ],
                    deleteWebhook: [
                        "DELETE /repos/{owner}/{repo}/hooks/{hook_id}"
                    ],
                    disableAutomatedSecurityFixes: [
                        "DELETE /repos/{owner}/{repo}/automated-security-fixes",
                        {
                            mediaType: {
                                previews: [
                                    "london"
                                ]
                            }
                        }
                    ],
                    disableVulnerabilityAlerts: [
                        "DELETE /repos/{owner}/{repo}/vulnerability-alerts",
                        {
                            mediaType: {
                                previews: [
                                    "dorian"
                                ]
                            }
                        }
                    ],
                    downloadArchive: [
                        "GET /repos/{owner}/{repo}/zipball/{ref}",
                        {},
                        {
                            renamed: [
                                "repos",
                                "downloadZipballArchive"
                            ]
                        }
                    ],
                    downloadTarballArchive: [
                        "GET /repos/{owner}/{repo}/tarball/{ref}"
                    ],
                    downloadZipballArchive: [
                        "GET /repos/{owner}/{repo}/zipball/{ref}"
                    ],
                    enableAutomatedSecurityFixes: [
                        "PUT /repos/{owner}/{repo}/automated-security-fixes",
                        {
                            mediaType: {
                                previews: [
                                    "london"
                                ]
                            }
                        }
                    ],
                    enableVulnerabilityAlerts: [
                        "PUT /repos/{owner}/{repo}/vulnerability-alerts",
                        {
                            mediaType: {
                                previews: [
                                    "dorian"
                                ]
                            }
                        }
                    ],
                    get: [
                        "GET /repos/{owner}/{repo}"
                    ],
                    getAccessRestrictions: [
                        "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
                    ],
                    getAdminBranchProtection: [
                        "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
                    ],
                    getAllStatusCheckContexts: [
                        "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"
                    ],
                    getAllTopics: [
                        "GET /repos/{owner}/{repo}/topics",
                        {
                            mediaType: {
                                previews: [
                                    "mercy"
                                ]
                            }
                        }
                    ],
                    getAppsWithAccessToProtectedBranch: [
                        "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"
                    ],
                    getBranch: [
                        "GET /repos/{owner}/{repo}/branches/{branch}"
                    ],
                    getBranchProtection: [
                        "GET /repos/{owner}/{repo}/branches/{branch}/protection"
                    ],
                    getClones: [
                        "GET /repos/{owner}/{repo}/traffic/clones"
                    ],
                    getCodeFrequencyStats: [
                        "GET /repos/{owner}/{repo}/stats/code_frequency"
                    ],
                    getCollaboratorPermissionLevel: [
                        "GET /repos/{owner}/{repo}/collaborators/{username}/permission"
                    ],
                    getCombinedStatusForRef: [
                        "GET /repos/{owner}/{repo}/commits/{ref}/status"
                    ],
                    getCommit: [
                        "GET /repos/{owner}/{repo}/commits/{ref}"
                    ],
                    getCommitActivityStats: [
                        "GET /repos/{owner}/{repo}/stats/commit_activity"
                    ],
                    getCommitComment: [
                        "GET /repos/{owner}/{repo}/comments/{comment_id}"
                    ],
                    getCommitSignatureProtection: [
                        "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
                        {
                            mediaType: {
                                previews: [
                                    "zzzax"
                                ]
                            }
                        }
                    ],
                    getCommunityProfileMetrics: [
                        "GET /repos/{owner}/{repo}/community/profile"
                    ],
                    getContent: [
                        "GET /repos/{owner}/{repo}/contents/{path}"
                    ],
                    getContributorsStats: [
                        "GET /repos/{owner}/{repo}/stats/contributors"
                    ],
                    getDeployKey: [
                        "GET /repos/{owner}/{repo}/keys/{key_id}"
                    ],
                    getDeployment: [
                        "GET /repos/{owner}/{repo}/deployments/{deployment_id}"
                    ],
                    getDeploymentStatus: [
                        "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"
                    ],
                    getLatestPagesBuild: [
                        "GET /repos/{owner}/{repo}/pages/builds/latest"
                    ],
                    getLatestRelease: [
                        "GET /repos/{owner}/{repo}/releases/latest"
                    ],
                    getPages: [
                        "GET /repos/{owner}/{repo}/pages"
                    ],
                    getPagesBuild: [
                        "GET /repos/{owner}/{repo}/pages/builds/{build_id}"
                    ],
                    getParticipationStats: [
                        "GET /repos/{owner}/{repo}/stats/participation"
                    ],
                    getPullRequestReviewProtection: [
                        "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
                    ],
                    getPunchCardStats: [
                        "GET /repos/{owner}/{repo}/stats/punch_card"
                    ],
                    getReadme: [
                        "GET /repos/{owner}/{repo}/readme"
                    ],
                    getRelease: [
                        "GET /repos/{owner}/{repo}/releases/{release_id}"
                    ],
                    getReleaseAsset: [
                        "GET /repos/{owner}/{repo}/releases/assets/{asset_id}"
                    ],
                    getReleaseByTag: [
                        "GET /repos/{owner}/{repo}/releases/tags/{tag}"
                    ],
                    getStatusChecksProtection: [
                        "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
                    ],
                    getTeamsWithAccessToProtectedBranch: [
                        "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"
                    ],
                    getTopPaths: [
                        "GET /repos/{owner}/{repo}/traffic/popular/paths"
                    ],
                    getTopReferrers: [
                        "GET /repos/{owner}/{repo}/traffic/popular/referrers"
                    ],
                    getUsersWithAccessToProtectedBranch: [
                        "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"
                    ],
                    getViews: [
                        "GET /repos/{owner}/{repo}/traffic/views"
                    ],
                    getWebhook: [
                        "GET /repos/{owner}/{repo}/hooks/{hook_id}"
                    ],
                    getWebhookConfigForRepo: [
                        "GET /repos/{owner}/{repo}/hooks/{hook_id}/config"
                    ],
                    listBranches: [
                        "GET /repos/{owner}/{repo}/branches"
                    ],
                    listBranchesForHeadCommit: [
                        "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
                        {
                            mediaType: {
                                previews: [
                                    "groot"
                                ]
                            }
                        }
                    ],
                    listCollaborators: [
                        "GET /repos/{owner}/{repo}/collaborators"
                    ],
                    listCommentsForCommit: [
                        "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"
                    ],
                    listCommitCommentsForRepo: [
                        "GET /repos/{owner}/{repo}/comments"
                    ],
                    listCommitStatusesForRef: [
                        "GET /repos/{owner}/{repo}/commits/{ref}/statuses"
                    ],
                    listCommits: [
                        "GET /repos/{owner}/{repo}/commits"
                    ],
                    listContributors: [
                        "GET /repos/{owner}/{repo}/contributors"
                    ],
                    listDeployKeys: [
                        "GET /repos/{owner}/{repo}/keys"
                    ],
                    listDeploymentStatuses: [
                        "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
                    ],
                    listDeployments: [
                        "GET /repos/{owner}/{repo}/deployments"
                    ],
                    listForAuthenticatedUser: [
                        "GET /user/repos"
                    ],
                    listForOrg: [
                        "GET /orgs/{org}/repos"
                    ],
                    listForUser: [
                        "GET /users/{username}/repos"
                    ],
                    listForks: [
                        "GET /repos/{owner}/{repo}/forks"
                    ],
                    listInvitations: [
                        "GET /repos/{owner}/{repo}/invitations"
                    ],
                    listInvitationsForAuthenticatedUser: [
                        "GET /user/repository_invitations"
                    ],
                    listLanguages: [
                        "GET /repos/{owner}/{repo}/languages"
                    ],
                    listPagesBuilds: [
                        "GET /repos/{owner}/{repo}/pages/builds"
                    ],
                    listPublic: [
                        "GET /repositories"
                    ],
                    listPullRequestsAssociatedWithCommit: [
                        "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",
                        {
                            mediaType: {
                                previews: [
                                    "groot"
                                ]
                            }
                        }
                    ],
                    listReleaseAssets: [
                        "GET /repos/{owner}/{repo}/releases/{release_id}/assets"
                    ],
                    listReleases: [
                        "GET /repos/{owner}/{repo}/releases"
                    ],
                    listTags: [
                        "GET /repos/{owner}/{repo}/tags"
                    ],
                    listTeams: [
                        "GET /repos/{owner}/{repo}/teams"
                    ],
                    listWebhooks: [
                        "GET /repos/{owner}/{repo}/hooks"
                    ],
                    merge: [
                        "POST /repos/{owner}/{repo}/merges"
                    ],
                    pingWebhook: [
                        "POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"
                    ],
                    removeAppAccessRestrictions: [
                        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
                        {},
                        {
                            mapToData: "apps"
                        }
                    ],
                    removeCollaborator: [
                        "DELETE /repos/{owner}/{repo}/collaborators/{username}"
                    ],
                    removeStatusCheckContexts: [
                        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
                        {},
                        {
                            mapToData: "contexts"
                        }
                    ],
                    removeStatusCheckProtection: [
                        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
                    ],
                    removeTeamAccessRestrictions: [
                        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
                        {},
                        {
                            mapToData: "teams"
                        }
                    ],
                    removeUserAccessRestrictions: [
                        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
                        {},
                        {
                            mapToData: "users"
                        }
                    ],
                    replaceAllTopics: [
                        "PUT /repos/{owner}/{repo}/topics",
                        {
                            mediaType: {
                                previews: [
                                    "mercy"
                                ]
                            }
                        }
                    ],
                    requestPagesBuild: [
                        "POST /repos/{owner}/{repo}/pages/builds"
                    ],
                    setAdminBranchProtection: [
                        "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
                    ],
                    setAppAccessRestrictions: [
                        "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
                        {},
                        {
                            mapToData: "apps"
                        }
                    ],
                    setStatusCheckContexts: [
                        "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
                        {},
                        {
                            mapToData: "contexts"
                        }
                    ],
                    setTeamAccessRestrictions: [
                        "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
                        {},
                        {
                            mapToData: "teams"
                        }
                    ],
                    setUserAccessRestrictions: [
                        "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
                        {},
                        {
                            mapToData: "users"
                        }
                    ],
                    testPushWebhook: [
                        "POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"
                    ],
                    transfer: [
                        "POST /repos/{owner}/{repo}/transfer"
                    ],
                    update: [
                        "PATCH /repos/{owner}/{repo}"
                    ],
                    updateBranchProtection: [
                        "PUT /repos/{owner}/{repo}/branches/{branch}/protection"
                    ],
                    updateCommitComment: [
                        "PATCH /repos/{owner}/{repo}/comments/{comment_id}"
                    ],
                    updateInformationAboutPagesSite: [
                        "PUT /repos/{owner}/{repo}/pages"
                    ],
                    updateInvitation: [
                        "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"
                    ],
                    updatePullRequestReviewProtection: [
                        "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
                    ],
                    updateRelease: [
                        "PATCH /repos/{owner}/{repo}/releases/{release_id}"
                    ],
                    updateReleaseAsset: [
                        "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"
                    ],
                    updateStatusCheckPotection: [
                        "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
                        {},
                        {
                            renamed: [
                                "repos",
                                "updateStatusCheckProtection"
                            ]
                        }
                    ],
                    updateStatusCheckProtection: [
                        "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
                    ],
                    updateWebhook: [
                        "PATCH /repos/{owner}/{repo}/hooks/{hook_id}"
                    ],
                    updateWebhookConfigForRepo: [
                        "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"
                    ],
                    uploadReleaseAsset: [
                        "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
                        {
                            baseUrl: "https://uploads.github.com"
                        }
                    ]
                },
                search: {
                    code: [
                        "GET /search/code"
                    ],
                    commits: [
                        "GET /search/commits",
                        {
                            mediaType: {
                                previews: [
                                    "cloak"
                                ]
                            }
                        }
                    ],
                    issuesAndPullRequests: [
                        "GET /search/issues"
                    ],
                    labels: [
                        "GET /search/labels"
                    ],
                    repos: [
                        "GET /search/repositories"
                    ],
                    topics: [
                        "GET /search/topics",
                        {
                            mediaType: {
                                previews: [
                                    "mercy"
                                ]
                            }
                        }
                    ],
                    users: [
                        "GET /search/users"
                    ]
                },
                secretScanning: {
                    getAlert: [
                        "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
                    ],
                    listAlertsForRepo: [
                        "GET /repos/{owner}/{repo}/secret-scanning/alerts"
                    ],
                    updateAlert: [
                        "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
                    ]
                },
                teams: {
                    addOrUpdateMembershipForUserInOrg: [
                        "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"
                    ],
                    addOrUpdateProjectPermissionsInOrg: [
                        "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    addOrUpdateRepoPermissionsInOrg: [
                        "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
                    ],
                    checkPermissionsForProjectInOrg: [
                        "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    checkPermissionsForRepoInOrg: [
                        "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
                    ],
                    create: [
                        "POST /orgs/{org}/teams"
                    ],
                    createDiscussionCommentInOrg: [
                        "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
                    ],
                    createDiscussionInOrg: [
                        "POST /orgs/{org}/teams/{team_slug}/discussions"
                    ],
                    deleteDiscussionCommentInOrg: [
                        "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
                    ],
                    deleteDiscussionInOrg: [
                        "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
                    ],
                    deleteInOrg: [
                        "DELETE /orgs/{org}/teams/{team_slug}"
                    ],
                    getByName: [
                        "GET /orgs/{org}/teams/{team_slug}"
                    ],
                    getDiscussionCommentInOrg: [
                        "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
                    ],
                    getDiscussionInOrg: [
                        "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
                    ],
                    getMembershipForUserInOrg: [
                        "GET /orgs/{org}/teams/{team_slug}/memberships/{username}"
                    ],
                    list: [
                        "GET /orgs/{org}/teams"
                    ],
                    listChildInOrg: [
                        "GET /orgs/{org}/teams/{team_slug}/teams"
                    ],
                    listDiscussionCommentsInOrg: [
                        "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
                    ],
                    listDiscussionsInOrg: [
                        "GET /orgs/{org}/teams/{team_slug}/discussions"
                    ],
                    listForAuthenticatedUser: [
                        "GET /user/teams"
                    ],
                    listMembersInOrg: [
                        "GET /orgs/{org}/teams/{team_slug}/members"
                    ],
                    listPendingInvitationsInOrg: [
                        "GET /orgs/{org}/teams/{team_slug}/invitations"
                    ],
                    listProjectsInOrg: [
                        "GET /orgs/{org}/teams/{team_slug}/projects",
                        {
                            mediaType: {
                                previews: [
                                    "inertia"
                                ]
                            }
                        }
                    ],
                    listReposInOrg: [
                        "GET /orgs/{org}/teams/{team_slug}/repos"
                    ],
                    removeMembershipForUserInOrg: [
                        "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"
                    ],
                    removeProjectInOrg: [
                        "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"
                    ],
                    removeRepoInOrg: [
                        "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
                    ],
                    updateDiscussionCommentInOrg: [
                        "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
                    ],
                    updateDiscussionInOrg: [
                        "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
                    ],
                    updateInOrg: [
                        "PATCH /orgs/{org}/teams/{team_slug}"
                    ]
                },
                users: {
                    addEmailForAuthenticated: [
                        "POST /user/emails"
                    ],
                    block: [
                        "PUT /user/blocks/{username}",
                        {
                            mediaType: {
                                previews: [
                                    "giant-sentry-fist"
                                ]
                            }
                        }
                    ],
                    checkBlocked: [
                        "GET /user/blocks/{username}",
                        {
                            mediaType: {
                                previews: [
                                    "giant-sentry-fist"
                                ]
                            }
                        }
                    ],
                    checkFollowingForUser: [
                        "GET /users/{username}/following/{target_user}"
                    ],
                    checkPersonIsFollowedByAuthenticated: [
                        "GET /user/following/{username}"
                    ],
                    createGpgKeyForAuthenticated: [
                        "POST /user/gpg_keys"
                    ],
                    createPublicSshKeyForAuthenticated: [
                        "POST /user/keys"
                    ],
                    deleteEmailForAuthenticated: [
                        "DELETE /user/emails"
                    ],
                    deleteGpgKeyForAuthenticated: [
                        "DELETE /user/gpg_keys/{gpg_key_id}"
                    ],
                    deletePublicSshKeyForAuthenticated: [
                        "DELETE /user/keys/{key_id}"
                    ],
                    follow: [
                        "PUT /user/following/{username}"
                    ],
                    getAuthenticated: [
                        "GET /user"
                    ],
                    getByUsername: [
                        "GET /users/{username}"
                    ],
                    getContextForUser: [
                        "GET /users/{username}/hovercard"
                    ],
                    getGpgKeyForAuthenticated: [
                        "GET /user/gpg_keys/{gpg_key_id}"
                    ],
                    getPublicSshKeyForAuthenticated: [
                        "GET /user/keys/{key_id}"
                    ],
                    list: [
                        "GET /users"
                    ],
                    listBlockedByAuthenticated: [
                        "GET /user/blocks",
                        {
                            mediaType: {
                                previews: [
                                    "giant-sentry-fist"
                                ]
                            }
                        }
                    ],
                    listEmailsForAuthenticated: [
                        "GET /user/emails"
                    ],
                    listFollowedByAuthenticated: [
                        "GET /user/following"
                    ],
                    listFollowersForAuthenticatedUser: [
                        "GET /user/followers"
                    ],
                    listFollowersForUser: [
                        "GET /users/{username}/followers"
                    ],
                    listFollowingForUser: [
                        "GET /users/{username}/following"
                    ],
                    listGpgKeysForAuthenticated: [
                        "GET /user/gpg_keys"
                    ],
                    listGpgKeysForUser: [
                        "GET /users/{username}/gpg_keys"
                    ],
                    listPublicEmailsForAuthenticated: [
                        "GET /user/public_emails"
                    ],
                    listPublicKeysForUser: [
                        "GET /users/{username}/keys"
                    ],
                    listPublicSshKeysForAuthenticated: [
                        "GET /user/keys"
                    ],
                    setPrimaryEmailVisibilityForAuthenticated: [
                        "PATCH /user/email/visibility"
                    ],
                    unblock: [
                        "DELETE /user/blocks/{username}",
                        {
                            mediaType: {
                                previews: [
                                    "giant-sentry-fist"
                                ]
                            }
                        }
                    ],
                    unfollow: [
                        "DELETE /user/following/{username}"
                    ],
                    updateAuthenticated: [
                        "PATCH /user"
                    ]
                }
            };
            var VERSION = "4.4.3";
            restEndpointMethods.VERSION = VERSION;
            exports.restEndpointMethods = restEndpointMethods;
        //# sourceMappingURL=index.js.map
        /***/ },
        /***/ 537: /***/ function(__unused_webpack_module, exports, __nccwpck_require__) {
            "use strict";
            var _interopDefault = function _interopDefault(ex) {
                return ex && (typeof ex === "undefined" ? "undefined" : _type_of(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var deprecation = __nccwpck_require__(932);
            var once = _interopDefault(__nccwpck_require__(223));
            var logOnce = once(function(deprecation) {
                return console.warn(deprecation);
            });
            /**
 * Error with extra properties to help with debugging
 */ var RequestError = /*#__PURE__*/ function(Error1) {
                _inherits(RequestError, Error1);
                function RequestError(message, statusCode, options) {
                    _class_call_check(this, RequestError);
                    var _this;
                    _this = _call_super(this, RequestError, [
                        message
                    ]); // Maintains proper stack trace (only available on V8)
                    /* istanbul ignore next */ if (Error.captureStackTrace) {
                        Error.captureStackTrace(_this, _this.constructor);
                    }
                    _this.name = "HttpError";
                    _this.status = statusCode;
                    Object.defineProperty(_this, "code", {
                        get: function get() {
                            logOnce(new deprecation.Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
                            return statusCode;
                        }
                    });
                    _this.headers = options.headers || {}; // redact request credentials without mutating original request options
                    var requestCopy = Object.assign({}, options.request);
                    if (options.request.headers.authorization) {
                        requestCopy.headers = Object.assign({}, options.request.headers, {
                            authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
                        });
                    }
                    requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
                    // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
                    .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]") // OAuth tokens can be passed as URL query parameters, although it is not recommended
                    // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
                    .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
                    _this.request = requestCopy;
                    return _this;
                }
                return RequestError;
            }(_wrap_native_super(Error));
            exports.RequestError = RequestError;
        //# sourceMappingURL=index.js.map
        /***/ },
        /***/ 234: /***/ function(__unused_webpack_module, exports, __nccwpck_require__) {
            "use strict";
            var _interopDefault = function _interopDefault(ex) {
                return ex && (typeof ex === "undefined" ? "undefined" : _type_of(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
            };
            var getBufferResponse = function getBufferResponse(response) {
                return response.arrayBuffer();
            };
            var fetchWrapper = function fetchWrapper(requestOptions) {
                if (isPlainObject.isPlainObject(requestOptions.body) || Array.isArray(requestOptions.body)) {
                    requestOptions.body = JSON.stringify(requestOptions.body);
                }
                var headers = {};
                var status;
                var url;
                var fetch = requestOptions.request && requestOptions.request.fetch || nodeFetch;
                return fetch(requestOptions.url, Object.assign({
                    method: requestOptions.method,
                    body: requestOptions.body,
                    headers: requestOptions.headers,
                    redirect: requestOptions.redirect
                }, requestOptions.request)).then(function(response) {
                    url = response.url;
                    status = response.status;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = response.headers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var keyAndValue = _step.value;
                            headers[keyAndValue[0]] = keyAndValue[1];
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    if (status === 204 || status === 205) {
                        return;
                    } // GitHub API returns 200 for HEAD requests
                    if (requestOptions.method === "HEAD") {
                        if (status < 400) {
                            return;
                        }
                        throw new requestError.RequestError(response.statusText, status, {
                            headers: headers,
                            request: requestOptions
                        });
                    }
                    if (status === 304) {
                        throw new requestError.RequestError("Not modified", status, {
                            headers: headers,
                            request: requestOptions
                        });
                    }
                    if (status >= 400) {
                        return response.text().then(function(message) {
                            var error = new requestError.RequestError(message, status, {
                                headers: headers,
                                request: requestOptions
                            });
                            try {
                                var responseBody = JSON.parse(error.message);
                                Object.assign(error, responseBody);
                                var errors = responseBody.errors; // Assumption `errors` would always be in Array format
                                error.message = error.message + ": " + errors.map(JSON.stringify).join(", ");
                            } catch (e) {}
                            throw error;
                        });
                    }
                    var contentType = response.headers.get("content-type");
                    if (/application\/json/.test(contentType)) {
                        return response.json();
                    }
                    if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
                        return response.text();
                    }
                    return getBufferResponse(response);
                }).then(function(data) {
                    return {
                        status: status,
                        url: url,
                        headers: headers,
                        data: data
                    };
                }).catch(function(error) {
                    if (_instanceof(error, requestError.RequestError)) {
                        throw error;
                    }
                    throw new requestError.RequestError(error.message, 500, {
                        headers: headers,
                        request: requestOptions
                    });
                });
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var endpoint = __nccwpck_require__(440);
            var universalUserAgent = __nccwpck_require__(429);
            var isPlainObject = __nccwpck_require__(287);
            var nodeFetch = _interopDefault(__nccwpck_require__(467));
            var requestError = __nccwpck_require__(537);
            var VERSION = "5.4.12";
            function withDefaults(oldEndpoint, newDefaults) {
                var endpoint = oldEndpoint.defaults(newDefaults);
                var newApi = function newApi(route, parameters) {
                    var endpointOptions = endpoint.merge(route, parameters);
                    if (!endpointOptions.request || !endpointOptions.request.hook) {
                        return fetchWrapper(endpoint.parse(endpointOptions));
                    }
                    var request = function(route, parameters) {
                        return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
                    };
                    Object.assign(request, {
                        endpoint: endpoint,
                        defaults: withDefaults.bind(null, endpoint)
                    });
                    return endpointOptions.request.hook(request, endpointOptions);
                };
                return Object.assign(newApi, {
                    endpoint: endpoint,
                    defaults: withDefaults.bind(null, endpoint)
                });
            }
            var request = withDefaults(endpoint.endpoint, {
                headers: {
                    "user-agent": "octokit-request.js/".concat(VERSION, " ").concat(universalUserAgent.getUserAgent())
                }
            });
            exports.request = request;
        //# sourceMappingURL=index.js.map
        /***/ },
        /***/ 682: /***/ function(module1, __unused_webpack_exports, __nccwpck_require__) {
            var bindApi = function bindApi(hook, state, name) {
                var removeHookRef = bindable(removeHook, null).apply(null, name ? [
                    state,
                    name
                ] : [
                    state
                ]);
                hook.api = {
                    remove: removeHookRef
                };
                hook.remove = removeHookRef;
                [
                    'before',
                    'error',
                    'after',
                    'wrap'
                ].forEach(function(kind) {
                    var args = name ? [
                        state,
                        kind,
                        name
                    ] : [
                        state,
                        kind
                    ];
                    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args);
                });
            };
            var HookSingular = function HookSingular() {
                var singularHookName = 'h';
                var singularHookState = {
                    registry: {}
                };
                var singularHook = register.bind(null, singularHookState, singularHookName);
                bindApi(singularHook, singularHookState, singularHookName);
                return singularHook;
            };
            var HookCollection = function HookCollection() {
                var state = {
                    registry: {}
                };
                var hook = register.bind(null, state);
                bindApi(hook, state);
                return hook;
            };
            var Hook = function Hook() {
                if (!collectionHookDeprecationMessageDisplayed) {
                    console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4');
                    collectionHookDeprecationMessageDisplayed = true;
                }
                return HookCollection();
            };
            var register = __nccwpck_require__(670);
            var addHook = __nccwpck_require__(549);
            var removeHook = __nccwpck_require__(819);
            // bind with array of arguments: https://stackoverflow.com/a/21792913
            var bind = Function.bind;
            var bindable = bind.bind(bind);
            var collectionHookDeprecationMessageDisplayed = false;
            Hook.Singular = HookSingular.bind();
            Hook.Collection = HookCollection.bind();
            module1.exports = Hook;
            // expose constructors as a named property for TypeScript
            module1.exports.Hook = Hook;
            module1.exports.Singular = Hook.Singular;
            module1.exports.Collection = Hook.Collection;
        /***/ },
        /***/ 549: /***/ function(module1) {
            var addHook = function addHook(state, kind, name, hook) {
                var orig = hook;
                if (!state.registry[name]) {
                    state.registry[name] = [];
                }
                if (kind === 'before') {
                    hook = function hook(method, options) {
                        return Promise.resolve().then(orig.bind(null, options)).then(method.bind(null, options));
                    };
                }
                if (kind === 'after') {
                    hook = function hook(method, options) {
                        var result;
                        return Promise.resolve().then(method.bind(null, options)).then(function(result_) {
                            result = result_;
                            return orig(result, options);
                        }).then(function() {
                            return result;
                        });
                    };
                }
                if (kind === 'error') {
                    hook = function hook(method, options) {
                        return Promise.resolve().then(method.bind(null, options)).catch(function(error) {
                            return orig(error, options);
                        });
                    };
                }
                state.registry[name].push({
                    hook: hook,
                    orig: orig
                });
            };
            module1.exports = addHook;
        /***/ },
        /***/ 670: /***/ function(module1) {
            module1.exports = register;
            function register(state, name, method, options) {
                if (typeof method !== 'function') {
                    throw new Error('method for before hook must be a function');
                }
                if (!options) {
                    options = {};
                }
                if (Array.isArray(name)) {
                    return name.reverse().reduce(function(callback, name) {
                        return register.bind(null, state, name, callback, options);
                    }, method)();
                }
                return Promise.resolve().then(function() {
                    if (!state.registry[name]) {
                        return method(options);
                    }
                    return state.registry[name].reduce(function(method, registered) {
                        return registered.hook.bind(null, method, options);
                    }, method)();
                });
            }
        /***/ },
        /***/ 819: /***/ function(module1) {
            var removeHook = function removeHook(state, name, method) {
                if (!state.registry[name]) {
                    return;
                }
                var index = state.registry[name].map(function(registered) {
                    return registered.orig;
                }).indexOf(method);
                if (index === -1) {
                    return;
                }
                state.registry[name].splice(index, 1);
            };
            module1.exports = removeHook;
        /***/ },
        /***/ 932: /***/ function(__unused_webpack_module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var Deprecation = /*#__PURE__*/ function(Error1) {
                _inherits(Deprecation, Error1);
                function Deprecation(message) {
                    _class_call_check(this, Deprecation);
                    var _this;
                    _this = _call_super(this, Deprecation, [
                        message
                    ]); // Maintains proper stack trace (only available on V8)
                    /* istanbul ignore next */ if (Error.captureStackTrace) {
                        Error.captureStackTrace(_this, _this.constructor);
                    }
                    _this.name = 'Deprecation';
                    return _this;
                }
                return Deprecation;
            }(_wrap_native_super(Error));
            exports.Deprecation = Deprecation;
        /***/ },
        /***/ 287: /***/ function(__unused_webpack_module, exports) {
            "use strict";
            var isObject = /*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function isObject(o) {
                return Object.prototype.toString.call(o) === '[object Object]';
            };
            var isPlainObject = function isPlainObject(o) {
                var ctor, prot;
                if (isObject(o) === false) return false;
                // If has modified constructor
                ctor = o.constructor;
                if (ctor === undefined) return true;
                // If has modified prototype
                prot = ctor.prototype;
                if (isObject(prot) === false) return false;
                // If constructor does not have an Object-specific method
                if (prot.hasOwnProperty('isPrototypeOf') === false) {
                    return false;
                }
                // Most likely a plain Object
                return true;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.isPlainObject = isPlainObject;
        /***/ },
        /***/ 467: /***/ function(module1, exports, __nccwpck_require__) {
            "use strict";
            var _interopDefault = function _interopDefault(ex) {
                return ex && (typeof ex === "undefined" ? "undefined" : _type_of(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
            };
            var FetchError = /**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */ /**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */ function FetchError(message, type, systemError) {
                Error.call(this, message);
                this.message = message;
                this.type = type;
                // when err.type is `system`, err.code contains system error code
                if (systemError) {
                    this.code = this.errno = systemError.code;
                }
                // hide custom error implementation details from end-users
                Error.captureStackTrace(this, this.constructor);
            };
            var Body = /**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ function Body(body) {
                var _this = this;
                var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref$size = _ref.size;
                var size = _ref$size === undefined ? 0 : _ref$size;
                var _ref$timeout = _ref.timeout;
                var timeout = _ref$timeout === undefined ? 0 : _ref$timeout;
                if (body == null) {
                    // body is undefined or null
                    body = null;
                } else if (isURLSearchParams(body)) {
                    // body is a URLSearchParams
                    body = Buffer.from(body.toString());
                } else if (isBlob(body)) ;
                else if (Buffer.isBuffer(body)) ;
                else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
                    // body is ArrayBuffer
                    body = Buffer.from(body);
                } else if (ArrayBuffer.isView(body)) {
                    // body is ArrayBufferView
                    body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
                } else if (_instanceof(body, Stream)) ;
                else {
                    // none of the above
                    // coerce to string then buffer
                    body = Buffer.from(String(body));
                }
                this[INTERNALS] = {
                    body: body,
                    disturbed: false,
                    error: null
                };
                this.size = size;
                this.timeout = timeout;
                if (_instanceof(body, Stream)) {
                    body.on('error', function(err) {
                        var error = err.name === 'AbortError' ? err : new FetchError("Invalid response body while trying to fetch ".concat(_this.url, ": ").concat(err.message), 'system', err);
                        _this[INTERNALS].error = error;
                    });
                }
            };
            var consumeBody = /**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */ function consumeBody() {
                var _this4 = this;
                if (this[INTERNALS].disturbed) {
                    return Body.Promise.reject(new TypeError("body used already for: ".concat(this.url)));
                }
                this[INTERNALS].disturbed = true;
                if (this[INTERNALS].error) {
                    return Body.Promise.reject(this[INTERNALS].error);
                }
                var body = this.body;
                // body is null
                if (body === null) {
                    return Body.Promise.resolve(Buffer.alloc(0));
                }
                // body is blob
                if (isBlob(body)) {
                    body = body.stream();
                }
                // body is buffer
                if (Buffer.isBuffer(body)) {
                    return Body.Promise.resolve(body);
                }
                // istanbul ignore if: should never happen
                if (!_instanceof(body, Stream)) {
                    return Body.Promise.resolve(Buffer.alloc(0));
                }
                // body is stream
                // get ready to actually consume the body
                var accum = [];
                var accumBytes = 0;
                var abort = false;
                return new Body.Promise(function(resolve, reject) {
                    var resTimeout;
                    // allow timeout on slow response body
                    if (_this4.timeout) {
                        resTimeout = setTimeout(function() {
                            abort = true;
                            reject(new FetchError("Response timeout while trying to fetch ".concat(_this4.url, " (over ").concat(_this4.timeout, "ms)"), 'body-timeout'));
                        }, _this4.timeout);
                    }
                    // handle stream errors
                    body.on('error', function(err) {
                        if (err.name === 'AbortError') {
                            // if the request was aborted, reject with this Error
                            abort = true;
                            reject(err);
                        } else {
                            // other errors, such as incorrect content-encoding
                            reject(new FetchError("Invalid response body while trying to fetch ".concat(_this4.url, ": ").concat(err.message), 'system', err));
                        }
                    });
                    body.on('data', function(chunk) {
                        if (abort || chunk === null) {
                            return;
                        }
                        if (_this4.size && accumBytes + chunk.length > _this4.size) {
                            abort = true;
                            reject(new FetchError("content size at ".concat(_this4.url, " over limit: ").concat(_this4.size), 'max-size'));
                            return;
                        }
                        accumBytes += chunk.length;
                        accum.push(chunk);
                    });
                    body.on('end', function() {
                        if (abort) {
                            return;
                        }
                        clearTimeout(resTimeout);
                        try {
                            resolve(Buffer.concat(accum, accumBytes));
                        } catch (err) {
                            // handle streams that have accumulated too much data (issue #414)
                            reject(new FetchError("Could not create Buffer from response body for ".concat(_this4.url, ": ").concat(err.message), 'system', err));
                        }
                    });
                });
            };
            var convertBody = /**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */ function convertBody(buffer, headers) {
                if (typeof convert !== 'function') {
                    throw new Error('The package `encoding` must be installed to use the textConverted() function');
                }
                var ct = headers.get('content-type');
                var charset = 'utf-8';
                var res, str;
                // header
                if (ct) {
                    res = /charset=([^;]*)/i.exec(ct);
                }
                // no charset in content type, peek at response body for at most 1024 bytes
                str = buffer.slice(0, 1024).toString();
                // html5
                if (!res && str) {
                    res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
                }
                // html4
                if (!res && str) {
                    res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
                    if (!res) {
                        res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
                        if (res) {
                            res.pop(); // drop last quote
                        }
                    }
                    if (res) {
                        res = /charset=(.*)/i.exec(res.pop());
                    }
                }
                // xml
                if (!res && str) {
                    res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
                }
                // found charset
                if (res) {
                    charset = res.pop();
                    // prevent decode issues when sites use incorrect encoding
                    // ref: https://hsivonen.fi/encoding-menu/
                    if (charset === 'gb2312' || charset === 'gbk') {
                        charset = 'gb18030';
                    }
                }
                // turn raw buffers into a single utf-8 buffer
                return convert(buffer, 'UTF-8', charset).toString();
            };
            var isURLSearchParams = /**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */ function isURLSearchParams(obj) {
                // Duck-typing as a necessary condition.
                if ((typeof obj === "undefined" ? "undefined" : _type_of(obj)) !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
                    return false;
                }
                // Brand-checking and more duck-typing as optional condition.
                return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
            };
            var isBlob = /**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */ function isBlob(obj) {
                return (typeof obj === "undefined" ? "undefined" : _type_of(obj)) === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
            };
            var clone = /**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */ function clone(instance) {
                var p1, p2;
                var body = instance.body;
                // don't allow cloning a used body
                if (instance.bodyUsed) {
                    throw new Error('cannot clone body after it is used');
                }
                // check that body is a stream and not form-data object
                // note: we can't clone the form-data object without having it as a dependency
                if (_instanceof(body, Stream) && typeof body.getBoundary !== 'function') {
                    // tee instance body
                    p1 = new PassThrough();
                    p2 = new PassThrough();
                    body.pipe(p1);
                    body.pipe(p2);
                    // set instance body to teed body and return the other teed body
                    instance[INTERNALS].body = p1;
                    body = p2;
                }
                return body;
            };
            var extractContentType = /**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */ function extractContentType(body) {
                if (body === null) {
                    // body is null
                    return null;
                } else if (typeof body === 'string') {
                    // body is string
                    return 'text/plain;charset=UTF-8';
                } else if (isURLSearchParams(body)) {
                    // body is a URLSearchParams
                    return 'application/x-www-form-urlencoded;charset=UTF-8';
                } else if (isBlob(body)) {
                    // body is blob
                    return body.type || null;
                } else if (Buffer.isBuffer(body)) {
                    // body is buffer
                    return null;
                } else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
                    // body is ArrayBuffer
                    return null;
                } else if (ArrayBuffer.isView(body)) {
                    // body is ArrayBufferView
                    return null;
                } else if (typeof body.getBoundary === 'function') {
                    // detect form data input from form-data module
                    return "multipart/form-data;boundary=".concat(body.getBoundary());
                } else if (_instanceof(body, Stream)) {
                    // body is stream
                    // can't really do much about this
                    return null;
                } else {
                    // Body constructor defaults other things to string
                    return 'text/plain;charset=UTF-8';
                }
            };
            var getTotalBytes = /**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */ function getTotalBytes(instance) {
                var body = instance.body;
                if (body === null) {
                    // body is null
                    return 0;
                } else if (isBlob(body)) {
                    return body.size;
                } else if (Buffer.isBuffer(body)) {
                    // body is buffer
                    return body.length;
                } else if (body && typeof body.getLengthSync === 'function') {
                    // detect form data input from form-data module
                    if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
                    body.hasKnownLength && body.hasKnownLength()) {
                        // 2.x
                        return body.getLengthSync();
                    }
                    return null;
                } else {
                    // body is stream
                    return null;
                }
            };
            var writeToStream = /**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */ function writeToStream(dest, instance) {
                var body = instance.body;
                if (body === null) {
                    // body is null
                    dest.end();
                } else if (isBlob(body)) {
                    body.stream().pipe(dest);
                } else if (Buffer.isBuffer(body)) {
                    // body is buffer
                    dest.write(body);
                    dest.end();
                } else {
                    // body is stream
                    body.pipe(dest);
                }
            };
            var validateName = function validateName(name) {
                name = "".concat(name);
                if (invalidTokenRegex.test(name) || name === '') {
                    throw new TypeError("".concat(name, " is not a legal HTTP header name"));
                }
            };
            var validateValue = function validateValue(value) {
                value = "".concat(value);
                if (invalidHeaderCharRegex.test(value)) {
                    throw new TypeError("".concat(value, " is not a legal HTTP header value"));
                }
            };
            var find = /**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */ function find(map, name) {
                name = name.toLowerCase();
                for(var key in map){
                    if (key.toLowerCase() === name) {
                        return key;
                    }
                }
                return undefined;
            };
            var getHeaders = function getHeaders(headers) {
                var kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';
                var keys = Object.keys(headers[MAP]).sort();
                return keys.map(kind === 'key' ? function(k) {
                    return k.toLowerCase();
                } : kind === 'value' ? function(k) {
                    return headers[MAP][k].join(', ');
                } : function(k) {
                    return [
                        k.toLowerCase(),
                        headers[MAP][k].join(', ')
                    ];
                });
            };
            var createHeadersIterator = function createHeadersIterator(target, kind) {
                var iterator = Object.create(HeadersIteratorPrototype);
                iterator[INTERNAL] = {
                    target: target,
                    kind: kind,
                    index: 0
                };
                return iterator;
            };
            var exportNodeCompatibleHeaders = /**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */ function exportNodeCompatibleHeaders(headers) {
                var obj = Object.assign({
                    __proto__: null
                }, headers[MAP]);
                // http.request() only supports string as Host header. This hack makes
                // specifying custom Host header possible.
                var hostHeaderKey = find(headers[MAP], 'Host');
                if (hostHeaderKey !== undefined) {
                    obj[hostHeaderKey] = obj[hostHeaderKey][0];
                }
                return obj;
            };
            var createHeadersLenient = /**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */ function createHeadersLenient(obj) {
                var headers = new Headers();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var name = _step.value;
                        if (invalidTokenRegex.test(name)) {
                            continue;
                        }
                        if (Array.isArray(obj[name])) {
                            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                            try {
                                for(var _iterator1 = obj[name][Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                    var val = _step1.value;
                                    if (invalidHeaderCharRegex.test(val)) {
                                        continue;
                                    }
                                    if (headers[MAP][name] === undefined) {
                                        headers[MAP][name] = [
                                            val
                                        ];
                                    } else {
                                        headers[MAP][name].push(val);
                                    }
                                }
                            } catch (err) {
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                            }
                        } else if (!invalidHeaderCharRegex.test(obj[name])) {
                            headers[MAP][name] = [
                                obj[name]
                            ];
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return headers;
            };
            var isRequest = /**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */ function isRequest(input) {
                return (typeof input === "undefined" ? "undefined" : _type_of(input)) === 'object' && _type_of(input[INTERNALS$2]) === 'object';
            };
            var isAbortSignal = function isAbortSignal(signal) {
                var proto = signal && (typeof signal === "undefined" ? "undefined" : _type_of(signal)) === 'object' && Object.getPrototypeOf(signal);
                return !!(proto && proto.constructor.name === 'AbortSignal');
            };
            var getNodeRequestOptions = /**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */ function getNodeRequestOptions(request) {
                var parsedURL = request[INTERNALS$2].parsedURL;
                var headers = new Headers(request[INTERNALS$2].headers);
                // fetch step 1.3
                if (!headers.has('Accept')) {
                    headers.set('Accept', '*/*');
                }
                // Basic fetch
                if (!parsedURL.protocol || !parsedURL.hostname) {
                    throw new TypeError('Only absolute URLs are supported');
                }
                if (!/^https?:$/.test(parsedURL.protocol)) {
                    throw new TypeError('Only HTTP(S) protocols are supported');
                }
                if (request.signal && _instanceof(request.body, Stream.Readable) && !streamDestructionSupported) {
                    throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
                }
                // HTTP-network-or-cache fetch steps 2.4-2.7
                var contentLengthValue = null;
                if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
                    contentLengthValue = '0';
                }
                if (request.body != null) {
                    var totalBytes = getTotalBytes(request);
                    if (typeof totalBytes === 'number') {
                        contentLengthValue = String(totalBytes);
                    }
                }
                if (contentLengthValue) {
                    headers.set('Content-Length', contentLengthValue);
                }
                // HTTP-network-or-cache fetch step 2.11
                if (!headers.has('User-Agent')) {
                    headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
                }
                // HTTP-network-or-cache fetch step 2.15
                if (request.compress && !headers.has('Accept-Encoding')) {
                    headers.set('Accept-Encoding', 'gzip,deflate');
                }
                var agent = request.agent;
                if (typeof agent === 'function') {
                    agent = agent(parsedURL);
                }
                if (!headers.has('Connection') && !agent) {
                    headers.set('Connection', 'close');
                }
                // HTTP-network fetch step 4.2
                // chunked encoding is handled by Node.js
                return Object.assign({}, parsedURL, {
                    method: request.method,
                    headers: exportNodeCompatibleHeaders(headers),
                    agent: agent
                });
            };
            var AbortError = /**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */ /**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */ function AbortError(message) {
                Error.call(this, message);
                this.type = 'aborted';
                this.message = message;
                // hide custom error implementation details from end-users
                Error.captureStackTrace(this, this.constructor);
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var Stream = _interopDefault(__nccwpck_require__(413));
            var http = _interopDefault(__nccwpck_require__(605));
            var Url = _interopDefault(__nccwpck_require__(835));
            var https = _interopDefault(__nccwpck_require__(211));
            var zlib = _interopDefault(__nccwpck_require__(761));
            // Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js
            // fix for "Readable" isn't a named export issue
            var Readable = Stream.Readable;
            var BUFFER = Symbol('buffer');
            var TYPE = Symbol('type');
            var Blob = /*#__PURE__*/ function() {
                function Blob() {
                    _class_call_check(this, Blob);
                    this[TYPE] = '';
                    var blobParts = arguments[0];
                    var options = arguments[1];
                    var buffers = [];
                    var size = 0;
                    if (blobParts) {
                        var a = blobParts;
                        var length = Number(a.length);
                        for(var i = 0; i < length; i++){
                            var element = a[i];
                            var buffer = void 0;
                            if (_instanceof(element, Buffer)) {
                                buffer = element;
                            } else if (ArrayBuffer.isView(element)) {
                                buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
                            } else if (_instanceof(element, ArrayBuffer)) {
                                buffer = Buffer.from(element);
                            } else if (_instanceof(element, Blob)) {
                                buffer = element[BUFFER];
                            } else {
                                buffer = Buffer.from(typeof element === 'string' ? element : String(element));
                            }
                            size += buffer.length;
                            buffers.push(buffer);
                        }
                    }
                    this[BUFFER] = Buffer.concat(buffers);
                    var type = options && options.type !== undefined && String(options.type).toLowerCase();
                    if (type && !/[^\u0020-\u007E]/.test(type)) {
                        this[TYPE] = type;
                    }
                }
                _create_class(Blob, [
                    {
                        key: "size",
                        get: function get() {
                            return this[BUFFER].length;
                        }
                    },
                    {
                        key: "type",
                        get: function get() {
                            return this[TYPE];
                        }
                    },
                    {
                        key: "text",
                        value: function text() {
                            return Promise.resolve(this[BUFFER].toString());
                        }
                    },
                    {
                        key: "arrayBuffer",
                        value: function arrayBuffer() {
                            var buf = this[BUFFER];
                            var ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
                            return Promise.resolve(ab);
                        }
                    },
                    {
                        key: "stream",
                        value: function stream() {
                            var readable = new Readable();
                            readable._read = function() {};
                            readable.push(this[BUFFER]);
                            readable.push(null);
                            return readable;
                        }
                    },
                    {
                        key: "toString",
                        value: function toString() {
                            return '[object Blob]';
                        }
                    },
                    {
                        key: "slice",
                        value: function slice() {
                            var size = this.size;
                            var start = arguments[0];
                            var end = arguments[1];
                            var relativeStart, relativeEnd;
                            if (start === undefined) {
                                relativeStart = 0;
                            } else if (start < 0) {
                                relativeStart = Math.max(size + start, 0);
                            } else {
                                relativeStart = Math.min(start, size);
                            }
                            if (end === undefined) {
                                relativeEnd = size;
                            } else if (end < 0) {
                                relativeEnd = Math.max(size + end, 0);
                            } else {
                                relativeEnd = Math.min(end, size);
                            }
                            var span = Math.max(relativeEnd - relativeStart, 0);
                            var buffer = this[BUFFER];
                            var slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
                            var blob = new Blob([], {
                                type: arguments[2]
                            });
                            blob[BUFFER] = slicedBuffer;
                            return blob;
                        }
                    }
                ]);
                return Blob;
            }();
            Object.defineProperties(Blob.prototype, {
                size: {
                    enumerable: true
                },
                type: {
                    enumerable: true
                },
                slice: {
                    enumerable: true
                }
            });
            Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
                value: 'Blob',
                writable: false,
                enumerable: false,
                configurable: true
            });
            FetchError.prototype = Object.create(Error.prototype);
            FetchError.prototype.constructor = FetchError;
            FetchError.prototype.name = 'FetchError';
            var convert;
            try {
                convert = __nccwpck_require__(877).convert;
            } catch (e) {}
            var INTERNALS = Symbol('Body internals');
            // fix an issue where "PassThrough" isn't a named export for node <10
            var PassThrough = Stream.PassThrough;
            Body.prototype = {
                get body () {
                    return this[INTERNALS].body;
                },
                get bodyUsed () {
                    return this[INTERNALS].disturbed;
                },
                /**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */ arrayBuffer: function arrayBuffer() {
                    return consumeBody.call(this).then(function(buf) {
                        return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
                    });
                },
                /**
  * Return raw response as Blob
  *
  * @return Promise
  */ blob: function blob() {
                    var ct = this.headers && this.headers.get('content-type') || '';
                    return consumeBody.call(this).then(function(buf) {
                        return Object.assign(// Prevent copying
                        new Blob([], {
                            type: ct.toLowerCase()
                        }), _define_property({}, BUFFER, buf));
                    });
                },
                /**
  * Decode response as json
  *
  * @return  Promise
  */ json: function json() {
                    var _this2 = this;
                    return consumeBody.call(this).then(function(buffer) {
                        try {
                            return JSON.parse(buffer.toString());
                        } catch (err) {
                            return Body.Promise.reject(new FetchError("invalid json response body at ".concat(_this2.url, " reason: ").concat(err.message), 'invalid-json'));
                        }
                    });
                },
                /**
  * Decode response as text
  *
  * @return  Promise
  */ text: function text() {
                    return consumeBody.call(this).then(function(buffer) {
                        return buffer.toString();
                    });
                },
                /**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */ buffer: function buffer() {
                    return consumeBody.call(this);
                },
                /**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */ textConverted: function textConverted() {
                    var _this3 = this;
                    return consumeBody.call(this).then(function(buffer) {
                        return convertBody(buffer, _this3.headers);
                    });
                }
            };
            // In browsers, all properties are enumerable.
            Object.defineProperties(Body.prototype, {
                body: {
                    enumerable: true
                },
                bodyUsed: {
                    enumerable: true
                },
                arrayBuffer: {
                    enumerable: true
                },
                blob: {
                    enumerable: true
                },
                json: {
                    enumerable: true
                },
                text: {
                    enumerable: true
                }
            });
            Body.mixIn = function(proto) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.getOwnPropertyNames(Body.prototype)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var name = _step.value;
                        // istanbul ignore else: future proof
                        if (!(name in proto)) {
                            var desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
                            Object.defineProperty(proto, name, desc);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            };
            // expose Promise
            Body.Promise = global.Promise;
            /**
 * headers.js
 *
 * Headers class offers convenient helpers
 */ var invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
            var invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
            var MAP = Symbol('map');
            var Headers = /*#__PURE__*/ function() {
                function Headers() {
                    _class_call_check(this, Headers);
                    var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
                    this[MAP] = Object.create(null);
                    if (_instanceof(init, Headers)) {
                        var rawHeaders = init.raw();
                        var headerNames = Object.keys(rawHeaders);
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = headerNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var headerName = _step.value;
                                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(var _iterator1 = rawHeaders[headerName][Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        var value = _step1.value;
                                        this.append(headerName, value);
                                    }
                                } catch (err) {
                                    _didIteratorError1 = true;
                                    _iteratorError1 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                            _iterator1.return();
                                        }
                                    } finally{
                                        if (_didIteratorError1) {
                                            throw _iteratorError1;
                                        }
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        return;
                    }
                    // We don't worry about converting prop to ByteString here as append()
                    // will handle it.
                    if (init == null) ;
                    else if ((typeof init === "undefined" ? "undefined" : _type_of(init)) === 'object') {
                        var method = init[Symbol.iterator];
                        if (method != null) {
                            if (typeof method !== 'function') {
                                throw new TypeError('Header pairs must be iterable');
                            }
                            // sequence<sequence<ByteString>>
                            // Note: per spec we have to first exhaust the lists then process them
                            var pairs = [];
                            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                            try {
                                for(var _iterator2 = init[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                    var pair = _step2.value;
                                    if ((typeof pair === "undefined" ? "undefined" : _type_of(pair)) !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
                                        throw new TypeError('Each header pair must be iterable');
                                    }
                                    pairs.push(Array.from(pair));
                                }
                            } catch (err) {
                                _didIteratorError2 = true;
                                _iteratorError2 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                        _iterator2.return();
                                    }
                                } finally{
                                    if (_didIteratorError2) {
                                        throw _iteratorError2;
                                    }
                                }
                            }
                            var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                            try {
                                for(var _iterator3 = pairs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                    var pair1 = _step3.value;
                                    if (pair1.length !== 2) {
                                        throw new TypeError('Each header pair must be a name/value tuple');
                                    }
                                    this.append(pair1[0], pair1[1]);
                                }
                            } catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                        _iterator3.return();
                                    }
                                } finally{
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }
                        } else {
                            var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                            try {
                                // record<ByteString, ByteString>
                                for(var _iterator4 = Object.keys(init)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                                    var key = _step4.value;
                                    var value1 = init[key];
                                    this.append(key, value1);
                                }
                            } catch (err) {
                                _didIteratorError4 = true;
                                _iteratorError4 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                        _iterator4.return();
                                    }
                                } finally{
                                    if (_didIteratorError4) {
                                        throw _iteratorError4;
                                    }
                                }
                            }
                        }
                    } else {
                        throw new TypeError('Provided initializer must be an object');
                    }
                }
                _create_class(Headers, [
                    {
                        /**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */ key: "get",
                        value: function get(name) {
                            name = "".concat(name);
                            validateName(name);
                            var key = find(this[MAP], name);
                            if (key === undefined) {
                                return null;
                            }
                            return this[MAP][key].join(', ');
                        }
                    },
                    {
                        /**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */ key: "forEach",
                        value: function forEach(callback) {
                            var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
                            var pairs = getHeaders(this);
                            var i = 0;
                            while(i < pairs.length){
                                var _pairs$i = pairs[i];
                                var name = _pairs$i[0], value = _pairs$i[1];
                                callback.call(thisArg, value, name, this);
                                pairs = getHeaders(this);
                                i++;
                            }
                        }
                    },
                    {
                        /**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ key: "set",
                        value: function set(name, value) {
                            name = "".concat(name);
                            value = "".concat(value);
                            validateName(name);
                            validateValue(value);
                            var key = find(this[MAP], name);
                            this[MAP][key !== undefined ? key : name] = [
                                value
                            ];
                        }
                    },
                    {
                        /**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ key: "append",
                        value: function append(name, value) {
                            name = "".concat(name);
                            value = "".concat(value);
                            validateName(name);
                            validateValue(value);
                            var key = find(this[MAP], name);
                            if (key !== undefined) {
                                this[MAP][key].push(value);
                            } else {
                                this[MAP][name] = [
                                    value
                                ];
                            }
                        }
                    },
                    {
                        /**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */ key: "has",
                        value: function has(name) {
                            name = "".concat(name);
                            validateName(name);
                            return find(this[MAP], name) !== undefined;
                        }
                    },
                    {
                        /**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */ key: "delete",
                        value: function _delete(name) {
                            name = "".concat(name);
                            validateName(name);
                            var key = find(this[MAP], name);
                            if (key !== undefined) {
                                delete this[MAP][key];
                            }
                        }
                    },
                    {
                        /**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */ key: "raw",
                        value: function raw() {
                            return this[MAP];
                        }
                    },
                    {
                        /**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */ key: "keys",
                        value: function keys() {
                            return createHeadersIterator(this, 'key');
                        }
                    },
                    {
                        /**
  * Get an iterator on values.
  *
  * @return  Iterator
  */ key: "values",
                        value: function values() {
                            return createHeadersIterator(this, 'value');
                        }
                    },
                    {
                        /**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */ key: Symbol.iterator,
                        value: function value() {
                            return createHeadersIterator(this, 'key+value');
                        }
                    }
                ]);
                return Headers;
            }();
            Headers.prototype.entries = Headers.prototype[Symbol.iterator];
            Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
                value: 'Headers',
                writable: false,
                enumerable: false,
                configurable: true
            });
            Object.defineProperties(Headers.prototype, {
                get: {
                    enumerable: true
                },
                forEach: {
                    enumerable: true
                },
                set: {
                    enumerable: true
                },
                append: {
                    enumerable: true
                },
                has: {
                    enumerable: true
                },
                delete: {
                    enumerable: true
                },
                keys: {
                    enumerable: true
                },
                values: {
                    enumerable: true
                },
                entries: {
                    enumerable: true
                }
            });
            var INTERNAL = Symbol('internal');
            var HeadersIteratorPrototype = Object.setPrototypeOf({
                next: function next() {
                    // istanbul ignore if
                    if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
                        throw new TypeError('Value of `this` is not a HeadersIterator');
                    }
                    var _INTERNAL = this[INTERNAL];
                    var target = _INTERNAL.target, kind = _INTERNAL.kind, index = _INTERNAL.index;
                    var values = getHeaders(target, kind);
                    var len = values.length;
                    if (index >= len) {
                        return {
                            value: undefined,
                            done: true
                        };
                    }
                    this[INTERNAL].index = index + 1;
                    return {
                        value: values[index],
                        done: false
                    };
                }
            }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
            Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
                value: 'HeadersIterator',
                writable: false,
                enumerable: false,
                configurable: true
            });
            var INTERNALS$1 = Symbol('Response internals');
            // fix an issue where "STATUS_CODES" aren't a named export for node <10
            var STATUS_CODES = http.STATUS_CODES;
            /**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ var Response = /*#__PURE__*/ function() {
                function Response() {
                    _class_call_check(this, Response);
                    var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    Body.call(this, body, opts);
                    var status = opts.status || 200;
                    var headers = new Headers(opts.headers);
                    if (body != null && !headers.has('Content-Type')) {
                        var contentType = extractContentType(body);
                        if (contentType) {
                            headers.append('Content-Type', contentType);
                        }
                    }
                    this[INTERNALS$1] = {
                        url: opts.url,
                        status: status,
                        statusText: opts.statusText || STATUS_CODES[status],
                        headers: headers,
                        counter: opts.counter
                    };
                }
                _create_class(Response, [
                    {
                        key: "url",
                        get: function get() {
                            return this[INTERNALS$1].url || '';
                        }
                    },
                    {
                        key: "status",
                        get: function get() {
                            return this[INTERNALS$1].status;
                        }
                    },
                    {
                        key: "ok",
                        get: /**
  * Convenience property representing if the request ended normally
  */ function get() {
                            return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
                        }
                    },
                    {
                        key: "redirected",
                        get: function get() {
                            return this[INTERNALS$1].counter > 0;
                        }
                    },
                    {
                        key: "statusText",
                        get: function get() {
                            return this[INTERNALS$1].statusText;
                        }
                    },
                    {
                        key: "headers",
                        get: function get() {
                            return this[INTERNALS$1].headers;
                        }
                    },
                    {
                        /**
  * Clone this response
  *
  * @return  Response
  */ key: "clone",
                        value: function clone1() {
                            return new Response(clone(this), {
                                url: this.url,
                                status: this.status,
                                statusText: this.statusText,
                                headers: this.headers,
                                ok: this.ok,
                                redirected: this.redirected
                            });
                        }
                    }
                ]);
                return Response;
            }();
            Body.mixIn(Response.prototype);
            Object.defineProperties(Response.prototype, {
                url: {
                    enumerable: true
                },
                status: {
                    enumerable: true
                },
                ok: {
                    enumerable: true
                },
                redirected: {
                    enumerable: true
                },
                statusText: {
                    enumerable: true
                },
                headers: {
                    enumerable: true
                },
                clone: {
                    enumerable: true
                }
            });
            Object.defineProperty(Response.prototype, Symbol.toStringTag, {
                value: 'Response',
                writable: false,
                enumerable: false,
                configurable: true
            });
            var INTERNALS$2 = Symbol('Request internals');
            // fix an issue where "format", "parse" aren't a named export for node <10
            var parse_url = Url.parse;
            var format_url = Url.format;
            var streamDestructionSupported = 'destroy' in Stream.Readable.prototype;
            /**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */ var Request = /*#__PURE__*/ function() {
                function Request(input) {
                    _class_call_check(this, Request);
                    var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    var parsedURL;
                    // normalize input
                    if (!isRequest(input)) {
                        if (input && input.href) {
                            // in order to support Node.js' Url objects; though WHATWG's URL objects
                            // will fall into this branch also (since their `toString()` will return
                            // `href` property anyway)
                            parsedURL = parse_url(input.href);
                        } else {
                            // coerce input to a string before attempting to parse
                            parsedURL = parse_url("".concat(input));
                        }
                        input = {};
                    } else {
                        parsedURL = parse_url(input.url);
                    }
                    var method = init.method || input.method || 'GET';
                    method = method.toUpperCase();
                    if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
                        throw new TypeError('Request with GET/HEAD method cannot have body');
                    }
                    var inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
                    Body.call(this, inputBody, {
                        timeout: init.timeout || input.timeout || 0,
                        size: init.size || input.size || 0
                    });
                    var headers = new Headers(init.headers || input.headers || {});
                    if (inputBody != null && !headers.has('Content-Type')) {
                        var contentType = extractContentType(inputBody);
                        if (contentType) {
                            headers.append('Content-Type', contentType);
                        }
                    }
                    var signal = isRequest(input) ? input.signal : null;
                    if ('signal' in init) signal = init.signal;
                    if (signal != null && !isAbortSignal(signal)) {
                        throw new TypeError('Expected signal to be an instanceof AbortSignal');
                    }
                    this[INTERNALS$2] = {
                        method: method,
                        redirect: init.redirect || input.redirect || 'follow',
                        headers: headers,
                        parsedURL: parsedURL,
                        signal: signal
                    };
                    // node-fetch-only options
                    this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
                    this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
                    this.counter = init.counter || input.counter || 0;
                    this.agent = init.agent || input.agent;
                }
                _create_class(Request, [
                    {
                        key: "method",
                        get: function get() {
                            return this[INTERNALS$2].method;
                        }
                    },
                    {
                        key: "url",
                        get: function get() {
                            return format_url(this[INTERNALS$2].parsedURL);
                        }
                    },
                    {
                        key: "headers",
                        get: function get() {
                            return this[INTERNALS$2].headers;
                        }
                    },
                    {
                        key: "redirect",
                        get: function get() {
                            return this[INTERNALS$2].redirect;
                        }
                    },
                    {
                        key: "signal",
                        get: function get() {
                            return this[INTERNALS$2].signal;
                        }
                    },
                    {
                        /**
  * Clone this request
  *
  * @return  Request
  */ key: "clone",
                        value: function clone() {
                            return new Request(this);
                        }
                    }
                ]);
                return Request;
            }();
            Body.mixIn(Request.prototype);
            Object.defineProperty(Request.prototype, Symbol.toStringTag, {
                value: 'Request',
                writable: false,
                enumerable: false,
                configurable: true
            });
            Object.defineProperties(Request.prototype, {
                method: {
                    enumerable: true
                },
                url: {
                    enumerable: true
                },
                headers: {
                    enumerable: true
                },
                redirect: {
                    enumerable: true
                },
                clone: {
                    enumerable: true
                },
                signal: {
                    enumerable: true
                }
            });
            AbortError.prototype = Object.create(Error.prototype);
            AbortError.prototype.constructor = AbortError;
            AbortError.prototype.name = 'AbortError';
            // fix an issue where "PassThrough", "resolve" aren't a named export for node <10
            var PassThrough$1 = Stream.PassThrough;
            var resolve_url = Url.resolve;
            /**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */ function fetch(url, opts) {
                // allow custom promise
                if (!fetch.Promise) {
                    throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
                }
                Body.Promise = fetch.Promise;
                // wrap http.request into fetch
                return new fetch.Promise(function(resolve, reject) {
                    // build request object
                    var request = new Request(url, opts);
                    var options = getNodeRequestOptions(request);
                    var send = (options.protocol === 'https:' ? https : http).request;
                    var signal = request.signal;
                    var response = null;
                    var abort = function abort() {
                        var error = new AbortError('The user aborted a request.');
                        reject(error);
                        if (request.body && _instanceof(request.body, Stream.Readable)) {
                            request.body.destroy(error);
                        }
                        if (!response || !response.body) return;
                        response.body.emit('error', error);
                    };
                    if (signal && signal.aborted) {
                        abort();
                        return;
                    }
                    var abortAndFinalize = function abortAndFinalize() {
                        abort();
                        finalize();
                    };
                    // send request
                    var req = send(options);
                    var reqTimeout;
                    if (signal) {
                        signal.addEventListener('abort', abortAndFinalize);
                    }
                    function finalize() {
                        req.abort();
                        if (signal) signal.removeEventListener('abort', abortAndFinalize);
                        clearTimeout(reqTimeout);
                    }
                    if (request.timeout) {
                        req.once('socket', function(socket) {
                            reqTimeout = setTimeout(function() {
                                reject(new FetchError("network timeout at: ".concat(request.url), 'request-timeout'));
                                finalize();
                            }, request.timeout);
                        });
                    }
                    req.on('error', function(err) {
                        reject(new FetchError("request to ".concat(request.url, " failed, reason: ").concat(err.message), 'system', err));
                        finalize();
                    });
                    req.on('response', function(res) {
                        clearTimeout(reqTimeout);
                        var headers = createHeadersLenient(res.headers);
                        // HTTP fetch step 5
                        if (fetch.isRedirect(res.statusCode)) {
                            // HTTP fetch step 5.2
                            var location = headers.get('Location');
                            // HTTP fetch step 5.3
                            var locationURL = location === null ? null : resolve_url(request.url, location);
                            // HTTP fetch step 5.5
                            switch(request.redirect){
                                case 'error':
                                    reject(new FetchError("uri requested responds with a redirect, redirect mode is set to error: ".concat(request.url), 'no-redirect'));
                                    finalize();
                                    return;
                                case 'manual':
                                    // node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
                                    if (locationURL !== null) {
                                        // handle corrupted header
                                        try {
                                            headers.set('Location', locationURL);
                                        } catch (err) {
                                            // istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
                                            reject(err);
                                        }
                                    }
                                    break;
                                case 'follow':
                                    // HTTP-redirect fetch step 2
                                    if (locationURL === null) {
                                        break;
                                    }
                                    // HTTP-redirect fetch step 5
                                    if (request.counter >= request.follow) {
                                        reject(new FetchError("maximum redirect reached at: ".concat(request.url), 'max-redirect'));
                                        finalize();
                                        return;
                                    }
                                    // HTTP-redirect fetch step 6 (counter increment)
                                    // Create a new Request object.
                                    var requestOpts = {
                                        headers: new Headers(request.headers),
                                        follow: request.follow,
                                        counter: request.counter + 1,
                                        agent: request.agent,
                                        compress: request.compress,
                                        method: request.method,
                                        body: request.body,
                                        signal: request.signal,
                                        timeout: request.timeout,
                                        size: request.size
                                    };
                                    // HTTP-redirect fetch step 9
                                    if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
                                        reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
                                        finalize();
                                        return;
                                    }
                                    // HTTP-redirect fetch step 11
                                    if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
                                        requestOpts.method = 'GET';
                                        requestOpts.body = undefined;
                                        requestOpts.headers.delete('content-length');
                                    }
                                    // HTTP-redirect fetch step 15
                                    resolve(fetch(new Request(locationURL, requestOpts)));
                                    finalize();
                                    return;
                            }
                        }
                        // prepare response
                        res.once('end', function() {
                            if (signal) signal.removeEventListener('abort', abortAndFinalize);
                        });
                        var body = res.pipe(new PassThrough$1());
                        var response_options = {
                            url: request.url,
                            status: res.statusCode,
                            statusText: res.statusMessage,
                            headers: headers,
                            size: request.size,
                            timeout: request.timeout,
                            counter: request.counter
                        };
                        // HTTP-network fetch step 12.1.1.3
                        var codings = headers.get('Content-Encoding');
                        // HTTP-network fetch step 12.1.1.4: handle content codings
                        // in following scenarios we ignore compression support
                        // 1. compression support is disabled
                        // 2. HEAD request
                        // 3. no Content-Encoding header
                        // 4. no content response (204)
                        // 5. content not modified response (304)
                        if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
                            response = new Response(body, response_options);
                            resolve(response);
                            return;
                        }
                        // For Node v6+
                        // Be less strict when decoding compressed responses, since sometimes
                        // servers send slightly invalid responses that are still accepted
                        // by common browsers.
                        // Always using Z_SYNC_FLUSH is what cURL does.
                        var zlibOptions = {
                            flush: zlib.Z_SYNC_FLUSH,
                            finishFlush: zlib.Z_SYNC_FLUSH
                        };
                        // for gzip
                        if (codings == 'gzip' || codings == 'x-gzip') {
                            body = body.pipe(zlib.createGunzip(zlibOptions));
                            response = new Response(body, response_options);
                            resolve(response);
                            return;
                        }
                        // for deflate
                        if (codings == 'deflate' || codings == 'x-deflate') {
                            // handle the infamous raw deflate response from old servers
                            // a hack for old IIS and Apache servers
                            var raw = res.pipe(new PassThrough$1());
                            raw.once('data', function(chunk) {
                                // see http://stackoverflow.com/questions/37519828
                                if ((chunk[0] & 0x0F) === 0x08) {
                                    body = body.pipe(zlib.createInflate());
                                } else {
                                    body = body.pipe(zlib.createInflateRaw());
                                }
                                response = new Response(body, response_options);
                                resolve(response);
                            });
                            return;
                        }
                        // for br
                        if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
                            body = body.pipe(zlib.createBrotliDecompress());
                            response = new Response(body, response_options);
                            resolve(response);
                            return;
                        }
                        // otherwise, use response as-is
                        response = new Response(body, response_options);
                        resolve(response);
                    });
                    writeToStream(req, request);
                });
            }
            /**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */ fetch.isRedirect = function(code) {
                return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
            };
            // expose Promise
            fetch.Promise = global.Promise;
            module1.exports = exports = fetch;
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = exports;
            exports.Headers = Headers;
            exports.Request = Request;
            exports.Response = Response;
            exports.FetchError = FetchError;
        /***/ },
        /***/ 223: /***/ function(module1, __unused_webpack_exports, __nccwpck_require__) {
            var once = function once(fn) {
                var f = function f1() {
                    if (f.called) return f.value;
                    f.called = true;
                    return f.value = fn.apply(this, arguments);
                };
                f.called = false;
                return f;
            };
            var onceStrict = function onceStrict(fn) {
                var f = function f1() {
                    if (f.called) throw new Error(f.onceError);
                    f.called = true;
                    return f.value = fn.apply(this, arguments);
                };
                var name = fn.name || 'Function wrapped with `once`';
                f.onceError = name + " shouldn't be called more than once";
                f.called = false;
                return f;
            };
            var wrappy = __nccwpck_require__(940);
            module1.exports = wrappy(once);
            module1.exports.strict = wrappy(onceStrict);
            once.proto = once(function() {
                Object.defineProperty(Function.prototype, 'once', {
                    value: function value() {
                        return once(this);
                    },
                    configurable: true
                });
                Object.defineProperty(Function.prototype, 'onceStrict', {
                    value: function value() {
                        return onceStrict(this);
                    },
                    configurable: true
                });
            });
        /***/ },
        /***/ 294: /***/ function(module1, __unused_webpack_exports, __nccwpck_require__) {
            module1.exports = __nccwpck_require__(219);
        /***/ },
        /***/ 219: /***/ function(__unused_webpack_module, exports, __nccwpck_require__) {
            "use strict";
            var httpOverHttp = function httpOverHttp(options) {
                var agent = new TunnelingAgent(options);
                agent.request = http.request;
                return agent;
            };
            var httpsOverHttp = function httpsOverHttp(options) {
                var agent = new TunnelingAgent(options);
                agent.request = http.request;
                agent.createSocket = createSecureSocket;
                agent.defaultPort = 443;
                return agent;
            };
            var httpOverHttps = function httpOverHttps(options) {
                var agent = new TunnelingAgent(options);
                agent.request = https.request;
                return agent;
            };
            var httpsOverHttps = function httpsOverHttps(options) {
                var agent = new TunnelingAgent(options);
                agent.request = https.request;
                agent.createSocket = createSecureSocket;
                agent.defaultPort = 443;
                return agent;
            };
            var TunnelingAgent = function TunnelingAgent(options) {
                var self = this;
                self.options = options || {};
                self.proxyOptions = self.options.proxy || {};
                self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
                self.requests = [];
                self.sockets = [];
                self.on('free', function onFree(socket, host, port, localAddress) {
                    var _$options = toOptions(host, port, localAddress);
                    for(var i = 0, len = self.requests.length; i < len; ++i){
                        var pending = self.requests[i];
                        if (pending.host === _$options.host && pending.port === _$options.port) {
                            // Detect the request to connect same origin server,
                            // reuse the connection.
                            self.requests.splice(i, 1);
                            pending.request.onSocket(socket);
                            return;
                        }
                    }
                    socket.destroy();
                    self.removeSocket(socket);
                });
            };
            var createSecureSocket = function createSecureSocket(options, cb) {
                var self = this;
                TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
                    var hostHeader = options.request.getHeader('host');
                    var tlsOptions = mergeOptions({}, self.options, {
                        socket: socket,
                        servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
                    });
                    // 0 is dummy port for v0.6
                    var secureSocket = tls.connect(0, tlsOptions);
                    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
                    cb(secureSocket);
                });
            };
            var toOptions = function toOptions(host, port, localAddress) {
                if (typeof host === 'string') {
                    return {
                        host: host,
                        port: port,
                        localAddress: localAddress
                    };
                }
                return host; // for v0.11 or later
            };
            var mergeOptions = function mergeOptions(target) {
                for(var i = 1, len = arguments.length; i < len; ++i){
                    var overrides = arguments[i];
                    if ((typeof overrides === "undefined" ? "undefined" : _type_of(overrides)) === 'object') {
                        var keys = Object.keys(overrides);
                        for(var j = 0, keyLen = keys.length; j < keyLen; ++j){
                            var k = keys[j];
                            if (overrides[k] !== undefined) {
                                target[k] = overrides[k];
                            }
                        }
                    }
                }
                return target;
            };
            var net = __nccwpck_require__(631);
            var tls = __nccwpck_require__(16);
            var http = __nccwpck_require__(605);
            var https = __nccwpck_require__(211);
            var events = __nccwpck_require__(614);
            var assert = __nccwpck_require__(357);
            var util = __nccwpck_require__(669);
            exports.httpOverHttp = httpOverHttp;
            exports.httpsOverHttp = httpsOverHttp;
            exports.httpOverHttps = httpOverHttps;
            exports.httpsOverHttps = httpsOverHttps;
            util.inherits(TunnelingAgent, events.EventEmitter);
            TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
                var self = this;
                var options = mergeOptions({
                    request: req
                }, self.options, toOptions(host, port, localAddress));
                if (self.sockets.length >= this.maxSockets) {
                    // We are over limit so we'll add it to the queue.
                    self.requests.push(options);
                    return;
                }
                // If we are under maxSockets create a new one.
                self.createSocket(options, function(socket) {
                    socket.on('free', onFree);
                    socket.on('close', onCloseOrRemove);
                    socket.on('agentRemove', onCloseOrRemove);
                    req.onSocket(socket);
                    function onFree() {
                        self.emit('free', socket, options);
                    }
                    function onCloseOrRemove(err) {
                        self.removeSocket(socket);
                        socket.removeListener('free', onFree);
                        socket.removeListener('close', onCloseOrRemove);
                        socket.removeListener('agentRemove', onCloseOrRemove);
                    }
                });
            };
            TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
                var self = this;
                var placeholder = {};
                self.sockets.push(placeholder);
                var connectOptions = mergeOptions({}, self.proxyOptions, {
                    method: 'CONNECT',
                    path: options.host + ':' + options.port,
                    agent: false,
                    headers: {
                        host: options.host + ':' + options.port
                    }
                });
                if (options.localAddress) {
                    connectOptions.localAddress = options.localAddress;
                }
                if (connectOptions.proxyAuth) {
                    connectOptions.headers = connectOptions.headers || {};
                    connectOptions.headers['Proxy-Authorization'] = 'Basic ' + new Buffer(connectOptions.proxyAuth).toString('base64');
                }
                debug('making CONNECT request');
                var connectReq = self.request(connectOptions);
                connectReq.useChunkedEncodingByDefault = false; // for v0.6
                connectReq.once('response', onResponse); // for v0.6
                connectReq.once('upgrade', onUpgrade); // for v0.6
                connectReq.once('connect', onConnect); // for v0.7 or later
                connectReq.once('error', onError);
                connectReq.end();
                function onResponse(res) {
                    // Very hacky. This is necessary to avoid http-parser leaks.
                    res.upgrade = true;
                }
                function onUpgrade(res, socket, head) {
                    // Hacky.
                    process.nextTick(function() {
                        onConnect(res, socket, head);
                    });
                }
                function onConnect(res, socket, head) {
                    connectReq.removeAllListeners();
                    socket.removeAllListeners();
                    if (res.statusCode !== 200) {
                        debug('tunneling socket could not be established, statusCode=%d', res.statusCode);
                        socket.destroy();
                        var error = new Error('tunneling socket could not be established, ' + 'statusCode=' + res.statusCode);
                        error.code = 'ECONNRESET';
                        options.request.emit('error', error);
                        self.removeSocket(placeholder);
                        return;
                    }
                    if (head.length > 0) {
                        debug('got illegal response body from proxy');
                        socket.destroy();
                        var error = new Error('got illegal response body from proxy');
                        error.code = 'ECONNRESET';
                        options.request.emit('error', error);
                        self.removeSocket(placeholder);
                        return;
                    }
                    debug('tunneling connection has established');
                    self.sockets[self.sockets.indexOf(placeholder)] = socket;
                    return cb(socket);
                }
                function onError(cause) {
                    connectReq.removeAllListeners();
                    debug('tunneling socket could not be established, cause=%s\n', cause.message, cause.stack);
                    var error = new Error('tunneling socket could not be established, ' + 'cause=' + cause.message);
                    error.code = 'ECONNRESET';
                    options.request.emit('error', error);
                    self.removeSocket(placeholder);
                }
            };
            TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
                var pos = this.sockets.indexOf(socket);
                if (pos === -1) {
                    return;
                }
                this.sockets.splice(pos, 1);
                var pending = this.requests.shift();
                if (pending) {
                    // If we have pending requests and a socket gets closed a new one
                    // needs to be created to take over in the pool for the one that closed.
                    this.createSocket(pending, function(socket) {
                        pending.request.onSocket(socket);
                    });
                }
            };
            var debug;
            if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
                debug = function debug() {
                    var args = Array.prototype.slice.call(arguments);
                    if (typeof args[0] === 'string') {
                        args[0] = 'TUNNEL: ' + args[0];
                    } else {
                        args.unshift('TUNNEL:');
                    }
                    console.error.apply(console, args);
                };
            } else {
                debug = function debug() {};
            }
            exports.debug = debug; // for test
        /***/ },
        /***/ 429: /***/ function(__unused_webpack_module, exports) {
            "use strict";
            var getUserAgent = function getUserAgent() {
                if ((typeof navigator === "undefined" ? "undefined" : _type_of(navigator)) === "object" && "userAgent" in navigator) {
                    return navigator.userAgent;
                }
                if ((typeof process === "undefined" ? "undefined" : _type_of(process)) === "object" && "version" in process) {
                    return "Node.js/".concat(process.version.substr(1), " (").concat(process.platform, "; ").concat(process.arch, ")");
                }
                return "<environment undetectable>";
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getUserAgent = getUserAgent;
        //# sourceMappingURL=index.js.map
        /***/ },
        /***/ 940: /***/ function(module1) {
            // Returns a wrapper function that returns a wrapped callback
            // The wrapper function should do some stuff, and return a
            // presumably different callback function.
            // This makes sure that own properties are retained, so that
            // decorations and such are not lost along the way.
            module1.exports = wrappy;
            function wrappy(fn, cb) {
                if (fn && cb) return wrappy(fn)(cb);
                if (typeof fn !== 'function') throw new TypeError('need wrapper function');
                Object.keys(fn).forEach(function(k) {
                    wrapper[k] = fn[k];
                });
                return wrapper;
                function wrapper() {
                    var args = new Array(arguments.length);
                    for(var i = 0; i < args.length; i++){
                        args[i] = arguments[i];
                    }
                    var ret = fn.apply(this, args);
                    var _$cb = args[args.length - 1];
                    if (typeof ret === 'function' && ret !== _$cb) {
                        Object.keys(_$cb).forEach(function(k) {
                            ret[k] = _$cb[k];
                        });
                    }
                    return ret;
                }
            }
        /***/ },
        /***/ 713: /***/ function(__unused_webpack_module, __unused_webpack_exports, __nccwpck_require__) {
            var get_info = function get_info() {
                return _async_to_generator(function() {
                    var instanceId, region;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    fetch("http://169.254.169.254/latest/meta-data/instance-id")
                                ];
                            case 1:
                                return [
                                    4,
                                    _state.sent().text()
                                ];
                            case 2:
                                instanceId = _state.sent();
                                return [
                                    4,
                                    fetch("http://169.254.169.254/latest/meta-data/placement/region")
                                ];
                            case 3:
                                return [
                                    4,
                                    _state.sent().text()
                                ];
                            case 4:
                                region = _state.sent();
                                core.info("Instance Id: ".concat(instanceId));
                                core.info("Region: ".concat(region));
                                core.info("Connect: https://".concat(region, ".console.aws.amazon.com/systems-manager/session-manager/").concat(instanceId));
                                return [
                                    2
                                ];
                        }
                    });
                })();
            };
            var core = __nccwpck_require__(186);
            var github = __nccwpck_require__(438);
            var fetch = __nccwpck_require__(467);
            try {
                get_info();
            } catch (error) {
                core.setFailed(error.message);
            }
        /***/ },
        /***/ 877: /***/ function(module) {
            module.exports = eval("require")("encoding");
        /***/ },
        /***/ 357: /***/ function(module1) {
            "use strict";
            module1.exports = require("assert");
            ;
        /***/ },
        /***/ 614: /***/ function(module1) {
            "use strict";
            module1.exports = require("events");
            ;
        /***/ },
        /***/ 747: /***/ function(module1) {
            "use strict";
            module1.exports = require("fs");
            ;
        /***/ },
        /***/ 605: /***/ function(module1) {
            "use strict";
            module1.exports = require("http");
            ;
        /***/ },
        /***/ 211: /***/ function(module1) {
            "use strict";
            module1.exports = require("https");
            ;
        /***/ },
        /***/ 631: /***/ function(module1) {
            "use strict";
            module1.exports = require("net");
            ;
        /***/ },
        /***/ 87: /***/ function(module1) {
            "use strict";
            module1.exports = require("os");
            ;
        /***/ },
        /***/ 622: /***/ function(module1) {
            "use strict";
            module1.exports = require("path");
            ;
        /***/ },
        /***/ 413: /***/ function(module1) {
            "use strict";
            module1.exports = require("stream");
            ;
        /***/ },
        /***/ 16: /***/ function(module1) {
            "use strict";
            module1.exports = require("tls");
            ;
        /***/ },
        /***/ 835: /***/ function(module1) {
            "use strict";
            module1.exports = require("url");
            ;
        /***/ },
        /***/ 669: /***/ function(module1) {
            "use strict";
            module1.exports = require("util");
            ;
        /***/ },
        /***/ 761: /***/ function(module1) {
            "use strict";
            module1.exports = require("zlib");
            ;
        /***/ }
    };
    /************************************************************************/ /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/ /******/ // The require function
    /******/ function __nccwpck_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ if (__webpack_module_cache__[moduleId]) {
            /******/ return __webpack_module_cache__[moduleId].exports;
        /******/ }
        /******/ // Create a new module (and put it into the cache)
        /******/ var _$module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {}
        };
        /******/ /******/ // Execute the module function
        /******/ var threw = true;
        /******/ try {
            /******/ __webpack_modules__[moduleId].call(_$module.exports, _$module, _$module.exports, __nccwpck_require__);
            /******/ threw = false;
        /******/ } finally{
            /******/ if (threw) delete __webpack_module_cache__[moduleId];
        /******/ }
        /******/ /******/ // Return the exports of the module
        /******/ return _$module.exports;
    /******/ }
    /******/ /************************************************************************/ /******/ /* webpack/runtime/compat */ /******/ /******/ __nccwpck_require__.ab = __dirname + "/"; /************************************************************************/ 
    /******/ // module exports must be returned from runtime so entry inlining is disabled
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ return __nccwpck_require__(713);
/******/ }();

