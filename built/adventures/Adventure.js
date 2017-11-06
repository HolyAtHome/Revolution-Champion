define(["require", "exports", "knockout", "./../core/Global", "./../entities/Monster"], function (require, exports, ko, Global_1, Monster_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Adventure = /** @class */ (function () {
        function Adventure(name, waves, reqLevel, monsterLvlMin, monsterLvlMax) {
            this.player = Global_1.Global.$Player;
            this.name = ko.observable(name);
            this.waves = waves;
            this.requiredLevel = reqLevel;
            this.isFighting = ko.observable(false);
            this.currentWave = ko.observable();
            this.monsterLvlMin = monsterLvlMin;
            this.monsterLvlMax = monsterLvlMax;
            this.monster = ko.observable(new Monster_1.Monster(this.monsterLvlMin, this.monsterLvlMax));
        }
        Adventure.prototype.startFight = function () {
            this.isFighting(true);
            this.player.isFighting(true);
            this.currentWave(1);
        };
        Adventure.prototype.attack = function () {
            if (!this.player.isDead() && !this.monster().isDead()) {
                this.player.attack(this.monster());
                this.monster().attack(this.player);
                if (this.player.isDead()) {
                    this.isFighting(false);
                    this.player.isFighting(false);
                    this.monster().reset();
                    Global_1.Global.$Navigation('Town');
                }
                if (this.monster().isDead()) {
                    this.player.onMonsterKill(this.monster());
                    this.monster(new Monster_1.Monster(this.monsterLvlMin, this.monsterLvlMax));
                    if (this.currentWave() < this.waves) {
                        this.currentWave(this.currentWave() + 1);
                    }
                    else if (this.currentWave() === this.waves) {
                        this.isFighting(false);
                        this.player.isFighting(false);
                        // TODO: Add Reward.
                        this.player.gold(this.player.gold() + 50);
                    }
                }
            }
        };
        return Adventure;
    }());
    exports.Adventure = Adventure;
});
//# sourceMappingURL=Adventure.js.map