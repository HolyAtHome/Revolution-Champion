define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Building = /** @class */ (function () {
        function Building(name, desc, imgName) {
            if (imgName === void 0) { imgName = 'default.png'; }
            this.name = ko.observable(name);
            this.description = ko.observable(desc);
            this.imageName = 'resources/images/buildings/' + imgName;
            this.owned = ko.observable(false);
        }
        Building.prototype.buy = function () {
            this.owned(true);
        };
        return Building;
    }());
    exports.Building = Building;
});
//# sourceMappingURL=Building.js.map