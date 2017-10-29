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
define(["require", "exports", "knockout", "./../core/Global", "./Entity"], function (require, exports, ko, Global_1, Entity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Monster = /** @class */ (function (_super) {
        __extends(Monster, _super);
        function Monster(minLvl, maxLvl) {
            var _this = _super.call(this) || this;
            _this.level(Math.floor(Math.floor(Math.random() * (maxLvl - minLvl + 1)) + minLvl));
            var lowLvl = (_this.level() - 6 < 0) ? 0 : (_this.level() - 8);
            var highLvl = _this.level() + 6;
            _this.stamina(Math.floor(Math.floor(Math.random() * (highLvl - lowLvl + 1)) + lowLvl));
            _this.strength(Math.floor(Math.floor(Math.random() * (highLvl - 1 - lowLvl + 1)) + lowLvl));
            /* Must be more than 0 */
            _this.stamina((_this.stamina() <= 0) ? 1 : _this.stamina());
            _this.strength((_this.strength() <= 0) ? 1 : _this.strength());
            _this.currentHealth(_this.maxHealth());
            _this.name = ko.observable(Global_1.Global.$MonsterNames[Math.floor(Math.random() * Global_1.Global.$MonsterNames.length)]);
            _this.loot = Global_1.Global.$Items.junk.getRandom(Math.floor(Math.random() * 5));
            return _this;
        }
        /**
         * Resets the Monster back to Initial State.
         * @memberof Monster
         */
        Monster.prototype.reset = function () {
            this.currentHealth(this.maxHealth());
        };
        return Monster;
    }(Entity_1.Entity));
    exports.Monster = Monster;
});
//# sourceMappingURL=Monster.js.map