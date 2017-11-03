define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Building = /** @class */ (function () {
        function Building(name, desc) {
            this.name = ko.observable(name);
            this.description = ko.observable(desc);
        }
        return Building;
    }());
    exports.Building = Building;
});
//# sourceMappingURL=Building.js.map