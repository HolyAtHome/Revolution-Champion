define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UiEvent;
    (function (UiEvent) {
        UiEvent["OnQuestFinish"] = "onQuestFinish";
        UiEvent["OnItemAddedToBackpack"] = "onItemAddedToBackpack";
        UiEvent["OnPlayerLevelUp"] = "onPlayerLevelUp";
    })(UiEvent = exports.UiEvent || (exports.UiEvent = {}));
    var UiEventManager = /** @class */ (function () {
        function UiEventManager() {
            UiEvent.OnQuestFinish;
            this.eventSubscribers = (_a = {},
                _a[UiEvent.OnQuestFinish] = new Array(),
                _a[UiEvent.OnItemAddedToBackpack] = new Array(),
                _a[UiEvent.OnPlayerLevelUp] = new Array(),
                _a);
            var _a;
        }
        /**
         * Register a Function to an Event. The Function will be called whenever the Event gets fired.
         *
         * @static
         * @param {string} event The event name (Use Enum UiEvent)
         * @param {UiEventFunction} func The UiEventFunction that gets called.
         * @memberof UiEventManager
         */
        UiEventManager.RegisterEvent = function (event, func) {
            var _this = UiEventManager.checkInstance();
            if (_this.eventSubscribers[event]) {
                _this.eventSubscribers[event].push(func);
                console.log('Registered Event. Event:', event, 'Callback:', func);
            }
            else {
                console.error(event, 'not defined. (tried to register event)');
            }
        };
        /**
         * Fires a specific Event and calls all Functions that were Registered to that event.
         *
         * @static
         * @param {string} event The event name (Use Enum UiEvent)
         * @param {Object} argument The Object that you want should get passed to the Registered Functions
         * @memberof UiEventManager
         */
        UiEventManager.FireEvent = function (event, argument) {
            var _this = UiEventManager.checkInstance();
            if (_this.eventSubscribers[event]) {
                var subs = _this.eventSubscribers[event];
                for (var i = subs.length - 1; i >= 0; i--) {
                    var eventFunction = subs[i];
                    var eventReturn = { self: eventFunction.self, parameter: argument };
                    eventFunction.callback(eventReturn);
                    if (eventFunction.unregisterAfter) {
                        subs.splice(i, 1);
                    }
                }
            }
            else {
                console.error(event, 'not defined. (tried to fire event)');
            }
        };
        UiEventManager.checkInstance = function () {
            if (!UiEventManager.instance) {
                UiEventManager.instance = new UiEventManager();
            }
            return UiEventManager.instance;
        };
        return UiEventManager;
    }());
    exports.UiEventManager = UiEventManager;
});
//# sourceMappingURL=UiEventManager.js.map