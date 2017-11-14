define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Creates an Interval that can call a function every x seconds.
     * Can also execute a given amount of times.
     * @export
     * @class Interval
     */
    var Interval = /** @class */ (function () {
        /**
         * Creates an instance of Interval.
         * @param {String} name Name for identification.
         * @param {Function} func Function that will get called.
         * @param {number} wait Time in milliseconds to wait inbetween calls.
         * @param {number} [times=undefined] How many times the Function should be called. Defaults to infinitly.
         * @param {Function} [callback={}] Function that should get called after Interval has finished.
         * @memberof Interval
         */
        function Interval(name, func, wait, times, callback) {
            if (times === void 0) { times = undefined; }
            if (callback === void 0) { callback = function () { }; }
            this._name = name;
            this._func = func;
            this._wait = wait;
            this._times = times;
            this._callback = callback;
        }
        /**
         * Starts the Interval.
         * @memberof Interval
         */
        Interval.prototype.start = function () {
            var _this = this;
            console.log('Started Interval "' + this._name + '". Will be called every ' + (this._wait / 1000) + ' seconds.');
            var interv = function () {
                if (typeof _this._times === 'undefined' || _this._times-- > 0) {
                    setTimeout(interv, _this._wait);
                    try {
                        _this._func.call(null);
                    }
                    catch (e) {
                        _this._times = 0;
                        throw e.toString();
                    }
                }
                else {
                    _this._callback.call(null);
                }
            };
            setTimeout(interv, this._wait);
        };
        return Interval;
    }());
    exports.Interval = Interval;
});
//# sourceMappingURL=Interval.js.map