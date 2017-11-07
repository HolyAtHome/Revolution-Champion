define(["require", "exports", "knockout", "./Global"], function (require, exports, ko, Global_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Core = /** @class */ (function () {
        function Core(startNav) {
            this.$Adventures = Global_1.Global.$Adventures.all();
            this.$Buildings = Global_1.Global.$Buildings.all();
            this.navigation = Global_1.Global.$Navigation;
            this.subNavigation = Global_1.Global.$SubNavigation;
            this.player = Global_1.Global.$Player;
            this.currentAdventure = ko.observable(undefined);
            this.currentQuest = ko.observable(undefined);
            this.navigation(startNav);
            console.log('Starting with Navigation "' + this.navigation() + '"');
            console.log('Currently we have some Development Things going on. Delet these thing in core.ts later.');
            this.player.gold(1000);
            this.player.backpack.addItems(Global_1.Global.$Items.junk.getRandom(3));
        }
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
        return Core;
    }());
    Global_1.Global.$Init();
    var core = new Core('Town');
    ko.applyBindings(core);
    core.navigation('Town');
});
//# sourceMappingURL=Core.js.map