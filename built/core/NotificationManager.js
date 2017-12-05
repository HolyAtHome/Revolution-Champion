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
            UiEventManager_1.UiEventManager.RegisterEvent(UiEventManager_1.UiEvent.OnPlayerDeath, { self: this, callback: this.onPlayerDeath, unregisterAfter: false });
        };
        NotificationManager.prototype.onQuestFinish = function (ret) {
            ret.self.notify('Quest "' + ret.parameter.name + '" just finished!');
        };
        NotificationManager.prototype.onPlayerLevelUp = function (ret) {
            ret.self.notify('You leveled up to Level ' + ret.parameter + '!');
        };
        NotificationManager.prototype.onPlayerDeath = function (ret) {
            ret.self.notify('You died!');
        };
        NotificationManager.prototype.notify = function (text) {
            this.class('show');
            this.text(text);
            this.startResetNotificationTimer();
        };
        NotificationManager.prototype.startResetNotificationTimer = function () {
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