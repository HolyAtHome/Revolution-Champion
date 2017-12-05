define(["require", "exports", "knockout", "./../core/Global", "./../entities/Monster", "../core/UiEventManager"], function (require, exports, ko, Global_1, Monster_1, UiEventManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Adventure = /** @class */ (function () {
        function Adventure(name, reqLevel, monsterLvlMin, monsterLvlMax) {
            this.player = Global_1.Global.$Player;
            this.name = ko.observable(name);
            this.requiredLevel = reqLevel;
            this.isFighting = ko.observable(false);
            this.monsterLvlMin = monsterLvlMin;
            this.monsterLvlMax = monsterLvlMax;
            this.monster = ko.observable(new Monster_1.Monster(this.monsterLvlMin, this.monsterLvlMax));
            UiEventManager_1.UiEventManager.RegisterEvent(UiEventManager_1.UiEvent.OnPlayerDeath, { self: this, callback: this.onPlayerDeath, unregisterAfter: false });
        }
        Adventure.prototype.attack = function () {
            if (!this.isFighting()) {
                this.isFighting(true);
                this.player.isFighting(true);
            }
            if (!this.player.isDead() && !this.monster().isDead()) {
                this.player.attack(this.monster());
                this.monster().attack(this.player);
                if (this.monster().isDead()) {
                    this.player.onMonsterKill(this.monster());
                    this.monster(new Monster_1.Monster(this.monsterLvlMin, this.monsterLvlMax));
                    this.isFighting(false);
                    this.player.isFighting(false);
                    // TODO: Add Reward.
                    this.player.gold(this.player.gold() + 50);
                }
            }
        };
        Adventure.prototype.onPlayerDeath = function (ret) {
            var self = ret.self;
            self.isFighting(false);
            self.player.isFighting(false);
            self.monster().reset();
            Global_1.Global.$Navigation('Town');
        };
        return Adventure;
    }());
    exports.Adventure = Adventure;
});
//# sourceMappingURL=Adventure.js.map