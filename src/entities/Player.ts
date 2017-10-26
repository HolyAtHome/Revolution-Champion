import { Interval } from './../util/Interval';
import * as ko from 'knockout';
import { Entity } from './Entity';

export class Player extends Entity {
    
    exp: KnockoutComputed<String>;
    currentExp: KnockoutObservable<number>;
    requiredExp: KnockoutComputed<number>;

    isFighting: KnockoutObservable<boolean>;

    constructor() {
        super();
        this.stamina(10);
        this.strength(5);
        this.currentHealth(this.maxHealth());

        this.currentExp = ko.observable(0);
        this.requiredExp = ko.computed(() => Math.floor(100 * Math.pow(this.level(), 0.75)));
        this.exp = ko.computed(() => this.currentExp() + '/' + this.requiredExp());

        this.isFighting = ko.observable(false);
        new Interval('HP-Reg', () => { this.regenerateHP(this); }, 3000).start();
    }

    /**
     * Used for Interval. Gets called every 3 seconds to regenerate 5HP 
     * @private
     * @memberof Player
     */
    private regenerateHP(_: Player) {
        if(!_.isFighting() && !_.isDead()) {
            let curr = _.currentHealth();
            if(curr + 5 < _.maxHealth()) {
                _.currentHealth(curr + 5);
            } else {
                _.currentHealth(_.maxHealth());
            }
        }
    }

}