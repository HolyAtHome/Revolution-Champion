define(["require", "exports", "knockout", "./UiEventManager"], function (require, exports, ko, UiEventManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NotificationManager = /** @class */ (function () {
        function NotificationManager() {
            this.class = ko.observable('');
            this.text = ko.observable('');
            this.registerEvents();
        }
        NotificationManager.prototype.registerEvents = function () {
            UiEventManager_1.UiEventManager.RegisterEvent(UiEventManager_1.UiEvent.OnQuestFinish, { self: this, callback: this.onQuestFinish, unregisterAfter: false });
            UiEventManager_1.UiEventManager.RegisterEvent(UiEventManager_1.UiEvent.OnPlayerLevelUp, { self: this, callback: this.onPlayerLevelUp, unregisterAfter: false });
        };
        NotificationManager.prototype.onQuestFinish = function (ret) {
            var self = ret.self;
            self.class('show');
            self.text('Quest "' + ret.parameter.name + '" just finished!');
            self.resetNotification();
        };
        NotificationManager.prototype.onPlayerLevelUp = function (ret) {
            var self = ret.self;
            self.class('show');
            self.text('Player leveled up to Level ' + ret.parameter + '!');
            self.resetNotification();
        };
        NotificationManager.prototype.resetNotification = function () {
            var _this = this;
            setTimeout(function () {
                _this.class('');
                _this.text('');
            }, 3000);
        };
        return NotificationManager;
    }());
    exports.NotificationManager = NotificationManager;
});
//# sourceMappingURL=NotificationManager.js.map