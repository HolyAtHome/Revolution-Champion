define(["require", "exports", "knockout", "./Global"], function (require, exports, ko, Global_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Core = /** @class */ (function () {
        function Core(startNav) {
            this.$Adventures = Global_1.Global.$Adventures;
            this.navigation = Global_1.Global.$Navigation;
            this.player = Global_1.Global.$Player;
            this.currentAdventure = ko.observable(undefined);
            this.navigation(startNav);
            console.log('Starting with Navigation "' + this.navigation() + '"');
        }
        Core.prototype.isNavigation = function (nav) {
            return this.navigation() === nav;
        };
        ;
        Core.prototype.changeNavigation = function (newNav) {
            this.navigation(newNav);
        };
        Core.prototype.startAdventure = function (adv) {
            this.currentAdventure(Global_1.Global.$FindAdventure(Global_1.Global.$Adventures(), adv));
        };
        return Core;
    }());
    Global_1.Global.$Init();
    var core = new Core('Town');
    ko.applyBindings(core);
});
//# sourceMappingURL=Core.js.map