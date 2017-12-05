define(["require", "exports", "knockout", "./Global", "./UiEventManager", "./NotificationManager"], function (require, exports, ko, Global_1, UiEventManager_1, NotificationManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Core = /** @class */ (function () {
        function Core(startNav) {
            this.Notification = new NotificationManager_1.NotificationManager();
            this.$Adventures = Global_1.Global.$Adventures.all();
            this.$Buildings = Global_1.Global.$Buildings.all();
            this.navigation = Global_1.Global.$Navigation;
            this.subNavigation = Global_1.Global.$SubNavigation;
            this.player = Global_1.Global.$Player;
            this.currentAdventure = ko.observable(undefined);
            this.apprentice = Global_1.Global.$Apprentice;
            this.currentQuest = ko.observable(undefined);
            this.navigation(startNav);
            console.log('Starting with Navigation "' + this.navigation() + '"');
            console.log('Currently we have some Development Things going on. Delet these thing in core.ts later.');
            this.player.gold(1000);
            this.player.backpack.addItems(Global_1.Global.$Items.junk.getRandom(3));
            UiEventManager_1.UiEventManager.RegisterEvent(UiEventManager_1.UiEvent.OnItemAddedToBackpack, { self: this, callback: this.logItems, unregisterAfter: false });
            UiEventManager_1.UiEventManager.RegisterEvent(UiEventManager_1.UiEvent.OnQuestFinish, { self: this, callback: this.logQuestComplete, unregisterAfter: false });
        }
        Core.prototype.logItems = function (ret) {
            console.log('Core.logItems :: Item added to Backpack', ret.parameter.name);
        };
        Core.prototype.logQuestComplete = function (ret) {
            console.log('Core.logQuestComplete :: Quest Completed!', ret.parameter.name);
        };
        Core.prototype.isNavigation = function (nav, subNav) {
            if (subNav === void 0) { subNav = ''; }
            if (subNav === '') {
                return this.navigation() === nav;
            }
            else {
                return (this.navigation() === nav && this.subNavigation() === subNav);
            }
        };
        ;
        Core.prototype.changeNavigation = function (newNav, newSubNav) {
            if (newSubNav === void 0) { newSubNav = ''; }
            if (newNav != '') {
                this.navigation(newNav);
            }
            this.subNavigation(newSubNav);
        };
        Core.prototype.startAdventure = function (adv) {
            this.currentAdventure(Global_1.Global.$FindAdventure(Global_1.Global.$Adventures.all()(), adv));
        };
        Core.prototype.startQuest = function (q) {
            this.currentQuest(q);
        };
        Core.prototype.testOutputJson = function () {
            console.log('--- Adventures ---');
            console.log(JSON.stringify(this.$Adventures()));
            console.log('--- Buildings ---');
            console.log(JSON.stringify(this.$Buildings()));
            console.log('--- Apprentice ---');
            console.log(JSON.stringify(this.apprentice));
            console.log('--- Player ---');
            console.log(JSON.stringify(this.player.backpack.items()));
            console.log('--- Navigation ---');
            console.log(this.navigation(), '-', this.subNavigation());
        };
        return Core;
    }());
    Global_1.Global.$Init();
    var core = new Core('Town');
    ko.applyBindings(core);
    core.navigation('Town');
});
//# sourceMappingURL=Core.js.map