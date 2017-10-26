import * as ko from 'knockout';

/**
 * Base Class for all Entities.
 * Defines all the Base-Attributes with default-values.
 * Defines all the Base-Functions.
 * @export
 * @abstract
 * @class Entity
 */
export abstract class Entity {
    currentHealth: KnockoutObservable<number>;
    maxHealth: KnockoutComputed<number>;
    health: KnockoutComputed<String>;

    stamina: KnockoutObservable<number>;
    strength: KnockoutObservable<number>;

    level: KnockoutObservable<number>;

    constructor() {
        this.stamina = ko.observable(1);
        this.strength = ko.observable(1);
        this.maxHealth = ko.computed(() => this.stamina() * 10);
        this.currentHealth = ko.observable(this.maxHealth());
        this.health = ko.computed(() => {
            if(this.isDead()) {
                return 'DEAD';
            } else {
                return this.currentHealth() + '/' + this.maxHealth()
            }
        });
        this.level = ko.observable(1);
    }

    /**
     * Attacks the given Target
     * @param {Entity} target Target to Attack
     * @memberof IEntity
     */
    attack(target: Entity): void {
        const dmg = this.strength() * 2;
        target.damage(dmg);
    }

    /**
     * Takes a given amount of Damage.
     * Usually called in the Attack function
     * @param {number} amount Damage to deal
     * @memberof IEntity
     */
    damage(amount: number): void {
        const newHealth = this.currentHealth() - amount;
        this.currentHealth(newHealth);
    }

    /**
     * Returns true if current health <= 0, false otherwise.
     * @returns {boolean} 
     * @memberof Entity
     */
    isDead(): boolean {
        return this.currentHealth() <= 0;
    }

}