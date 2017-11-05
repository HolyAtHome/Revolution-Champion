define(["require", "exports", "knockout", "./Building"], function (require, exports, ko, Building_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BuildingContainer = /** @class */ (function () {
        function BuildingContainer() {
            this.data = ko.observableArray([
                new Building_1.Building('b1', 'its a b', 'overgrown_house.png'),
                new Building_1.Building('b2', 'yeah boii'),
                new Building_1.Building('b3', 'something'),
                new Building_1.Building('b4', 'something'),
                new Building_1.Building('b6', 'something'),
                new Building_1.Building('b7', 'something'),
                new Building_1.Building('br', 'something'),
                new Building_1.Building('bfa', 'something'),
                new Building_1.Building('bfgdgd', 'something')
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