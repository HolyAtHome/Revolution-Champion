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
define(["require", "exports", "./features/Backpack", "knockout", "./../Entity", "./../../util/Interval"], function (require, exports, Backpack_1, ko, Entity_1, Interval_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super.call(this) || this;
            _this.stamina(10);
            _this.strength(5);
            _this.currentHealth(_this.maxHealth());
            _this.currentExp = ko.observable(0);
            _this.requiredExp = ko.computed(function () { return Math.floor(100 * Math.pow(_this.level(), 0.75)); });
            _this.exp = ko.computed(function () { return _this.checkExp(); });
            _this.gold = ko.observable(0);
            _this.backpack = new Backpack_1.Backpack();
            _this.isFighting = ko.observable(false);
            new Interval_1.Interval('HP-Reg', function () { _this.regenerateHP(_this); }, 500).start();
            return _this;
        }
        /**
         * Call when Player kills a Monster.
         * @param {Monster} monster Monster that was killed.
         * @memberof Player
         */
        Player.prototype.onMonsterKill = function (monster) {
            this.rewardExp(monster.level());
            this.backpack.addItems(monster.loot);
            this.sell;
        };
        /**
         * Sells an Item and add the Gold-Value to the Player's gold.
         * @param {Item} item Item to sell.
         * @param {number} amount How many times to sell it. (Default is 1)
         * @memberof Player
         */
        Player.prototype.sell = function (item, amount) {
            if (amount === void 0) { amount = 1; }
            this.backpack.sell(item, amount);
            this.gold(this.gold() + (item.goldValue * amount));
        };
        /**
         * Rewards Experience to the Player based on the Level of the Monster that was slain.
         * Formula: 150 / (10 - Monsterlevel-Difference) * Playerlevel
         * @param {number} monsterLvl Level of the Monster killed.
         * @memberof Player
         */
        Player.prototype.rewardExp = function (monsterLvl) {
            var monsterLevelDiff = monsterLvl - this.level();
            var expReward = 150 / (10 - monsterLevelDiff) * this.level();
            this.currentExp(this.currentExp() + Math.floor(expReward));
        };
        Player.prototype.checkExp = function () {
            if (this.currentExp() >= this.requiredExp()) {
                var expDiff = this.currentExp() - this.requiredExp();
                this.level(this.level() + 1);
                this.currentExp(expDiff);
            }
            return this.currentExp() + '/' + this.requiredExp();
        };
        /**
         * Revives the Player
         * @memberof Player
         */
        Player.prototype.revive = function () {
            this.currentHealth(this.maxHealth());
        };
        /**
         * Used for Interval. Gets called every 3 seconds to regenerate 5HP
         * @private
         * @memberof Player
         */
        Player.prototype.regenerateHP = function (_) {
            if (!_.isFighting() && !_.isDead()) {
                var curr = _.currentHealth();
                if (curr + 5 < _.maxHealth()) {
                    _.currentHealth(curr + 5);
                }
                else {
                    _.currentHealth(_.maxHealth());
                }
            }
        };
        return Player;
    }(Entity_1.Entity));
    exports.Player = Player;
});
//# sourceMappingURL=Player.js.map