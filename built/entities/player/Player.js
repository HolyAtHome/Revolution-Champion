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
define(["require", "exports", "./../../quests/QuestDifficulty", "knockout", "./../Entity", "./features/Backpack", "./../../quests/Quest", "./../../util/Interval", "../../core/UiEventManager"], function (require, exports, QuestDifficulty_1, ko, Entity_1, Backpack_1, Quest_1, Interval_1, UiEventManager_1) {
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
            _this.wood = ko.observable(0);
            _this.stone = ko.observable(0);
            _this.iron = ko.observable(0);
            _this.backpack = new Backpack_1.Backpack();
            _this.quests = ko.observableArray([
                new Quest_1.Quest('Test Quest', 'Just for testing!', QuestDifficulty_1.QuestDifficulty.EASY),
                new Quest_1.Quest('Collect Apples', 'We are hungry!', QuestDifficulty_1.QuestDifficulty.EASY),
                new Quest_1.Quest('Help a Person', 'Someone is in need of help', QuestDifficulty_1.QuestDifficulty.MEDIUM),
                new Quest_1.Quest('Killing Monster', 'Kill some Monsters', QuestDifficulty_1.QuestDifficulty.HARD),
                new Quest_1.Quest('Dungeon!', 'Clear a Dungeon', QuestDifficulty_1.QuestDifficulty.HEROIC)
            ]);
            _this.quests()[0].test(2);
            _this.statPoints = ko.observable(0);
            _this.isFighting = ko.observable(false);
            _this.level.subscribe(function () { return _this.onLevelUp(); });
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
         * Adds Experience Points to the Player
         * @param amount The Amount of Exp-Point to add.
         */
        Player.prototype.addExp = function (amount) {
            this.currentExp(this.currentExp() + Math.floor(amount));
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
        /**
         * Revives the Player
         *
         * @memberof Player
         */
        Player.prototype.revive = function () {
            this.currentHealth(this.maxHealth());
        };
        /**
         * Increases a Stat by a given amount.
         *
         * @param {KnockoutObservable<number>} stat The Observable Stat to increase
         * @param {number} amount By which amount to increase.
         * @memberof Player
         */
        Player.prototype.increaseStat = function (stat, amount) {
            stat(stat() + amount);
            this.statPoints(this.statPoints() - amount);
        };
        /**
         * This function is used to Calculate and Display the Level of the Player
         *
         * @private
         * @returns {String} Formatted Experience-Display
         * @memberof Player
         */
        Player.prototype.checkExp = function () {
            if (this.currentExp() >= this.requiredExp()) {
                var expDiff = this.currentExp() - this.requiredExp();
                this.level(this.level() + 1);
                this.statPoints(this.statPoints() + 1);
                this.currentExp(expDiff);
            }
            return this.currentExp() + '/' + this.requiredExp();
        };
        /**
         * This functions Subscribes to the Level of the Player
         *
         * @private
         * @memberof Player
         */
        Player.prototype.onLevelUp = function () {
            UiEventManager_1.UiEventManager.FireEvent(UiEventManager_1.UiEvent.OnPlayerLevelUp, this.level());
            this.stamina(this.stamina() + 1);
            this.strength(this.strength() + 1);
        };
        Player.prototype.isDead = function () {
            var isDead = _super.prototype.isDead.call(this);
            if (isDead) {
                UiEventManager_1.UiEventManager.FireEvent(UiEventManager_1.UiEvent.OnPlayerDeath, this);
                this.revive();
            }
            return isDead;
        };
        /**
         * Used for Interval. Gets called every 3 seconds to regenerate 5HP
         * @private
         * @memberof Player
         */
        Player.prototype.regenerateHP = function (_) {
            if (!_.isDead()) {
                var regeneration = _.isFighting() ? 2 : 10;
                var curr = _.currentHealth();
                if (curr + regeneration < _.maxHealth()) {
                    _.currentHealth(curr + regeneration);
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