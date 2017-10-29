define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Base Class for all Entities.
     * Defines all the Base-Attributes with default-values.
     * Defines all the Base-Functions.
     * @export
     * @abstract
     * @class Entity
     */
    var Entity = /** @class */ (function () {
        function Entity() {
            var _this = this;
            this.stamina = ko.observable(1);
            this.strength = ko.observable(1);
            this.maxHealth = ko.computed(function () { return _this.stamina() * 10; });
            this.currentHealth = ko.observable(this.maxHealth());
            this.health = ko.computed(function () {
                if (_this.isDead()) {
                    return 'DEAD';
                }
                else {
                    return _this.currentHealth() + '/' + _this.maxHealth();
                }
            });
            this.level = ko.observable(1);
        }
        /**
         * Attacks the given Target
         * @param {Entity} target Target to Attack
         * @memberof IEntity
         */
        Entity.prototype.attack = function (target) {
            var dmg = this.strength() * 2;
            target.damage(dmg);
        };
        /**
         * Takes a given amount of Damage.
         * Usually called in the Attack function
         * @param {number} amount Damage to deal
         * @memberof IEntity
         */
        Entity.prototype.damage = function (amount) {
            var newHealth = this.currentHealth() - amount;
            this.currentHealth(newHealth);
        };
        /**
         * Returns true if current health <= 0, false otherwise.
         * @returns {boolean}
         * @memberof Entity
         */
        Entity.prototype.isDead = function () {
            return this.currentHealth() <= 0;
        };
        return Entity;
    }());
    exports.Entity = Entity;
});
//# sourceMappingURL=Entity.js.map