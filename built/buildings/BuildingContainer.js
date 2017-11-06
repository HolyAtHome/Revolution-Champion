define(["require", "exports", "knockout", "./Building"], function (require, exports, ko, Building_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BuildingContainer = /** @class */ (function () {
        function BuildingContainer() {
            this.data = ko.observableArray([
                new Building_1.Building('Townhall', 'Base Building for your Town', 'overgrown_house.png'),
                new Building_1.Building('Blacksmith', 'Makes cool things out of Steel', 'house.png'),
                new Building_1.Building('Alchemist', 'Brews Potions', 'treehouse.png'),
                new Building_1.Building('Lumbermill', 'Collects Wood', 'house_2.png'),
                new Building_1.Building('Mine', 'Collects Stone and Iron', 'inn_house.png'),
                new Building_1.Building('Marketplace', 'Buy and sell Stuff', 'marketplace.png')
            ]);
        }
        BuildingContainer.prototype.all = function () {
            return this.data;
        };
        return BuildingContainer;
    }());
    exports.BuildingContainer = BuildingContainer;
});
//# sourceMappingURL=BuildingContainer.js.map