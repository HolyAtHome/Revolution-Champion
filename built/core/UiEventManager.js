define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UiEventManager = /** @class */ (function () {
        function UiEventManager() {
            this.eventSubscribers = {
                'onQuestFinish': new Array()
            };
        }
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
        UiEventManager.FireEvent = function (event, argument) {
            var _this = UiEventManager.checkInstance();
            if (_this.eventSubscribers[event]) {
                var subs = _this.eventSubscribers[event];
                for (var i = subs.length - 1; i >= 0; i--) {
                    var eventFunction = subs[i];
                    var eventReturn = { this: eventFunction.this, parameter: argument };
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