/**
 * Creates an Interval that can call a function every x seconds.
 * Can also execute a given amount of times. 
 * @export
 * @class Interval
 */
export class Interval {

    private _name: String;

    private _func: Function;
    private _wait: number;
    private _times: number;
    private _callback: Function;

    /**
     * Creates an instance of Interval.
     * @param {String} name Name for identification.
     * @param {Function} func Function that will get called.
     * @param {number} wait Time in milliseconds to wait inbetween calls.
     * @param {number} [times=undefined] How many times the Function should be called. Defaults to infinitly.
     * @param {Function} [callback={}] Function that should get called after Interval has finished.
     * @memberof Interval
     */
    constructor(name: String, func: Function, wait: number, times: number = undefined, callback: Function = () => {}) {
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
    start(): void {
        console.log('Started Interval "' + this._name + '". Will be called every ' + (this._wait / 1000) + ' seconds.');
        let interv = () => {
            if(typeof this._times === 'undefined' || this._times-- > 0) {
                setTimeout(interv, this._wait);
                try {
                    this._func.call(null);
                } catch(e) {
                    this._times = 0;
                    throw e.toString();
                }
            } else {
                this._callback.call(null);
            }
        };

        setTimeout(interv, this._wait);
    }

}