var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "knockout", "./Entity"], function (require, exports, ko, Entity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Apprentice = /** @class */ (function (_super) {
        __extends(Apprentice, _super);
        function Apprentice() {
            var _this = _super.call(this) || this;
            _this.strength(1);
            _this.stamina(1);
            _this.speed = ko.observable(1);
            _this.knowledge = ko.observable(1);
            return _this;
        }
        return Apprentice;
    }(Entity_1.Entity));
    exports.Apprentice = Apprentice;
});
//# sourceMappingURL=Apprentice.js.map