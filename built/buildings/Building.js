define(["require", "exports", "knockout", "./../core/Global"], function (require, exports, ko, Global_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Building = /** @class */ (function () {
        function Building(name, desc, cost, imgName) {
            if (imgName === void 0) { imgName = 'default.png'; }
            this._player = Global_1.Global.$Player;
            this.name = ko.observable(name);
            this.description = ko.observable(desc);
            this.cost = cost;
            this.imageName = 'resources/images/buildings/' + imgName;
            this.owned = ko.observable(false);
        }
        Building.prototype.buy = function () {
            var gold = this._player.gold;
            if (gold() >= this.cost) {
                gold(gold() - this.cost);
                this.owned(true);
            }
        };
        return Building;
    }());
    exports.Building = Building;
});
//# sourceMappingURL=Building.js.map