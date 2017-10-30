import { Backpack } from './features/Backpack';
import * as ko from 'knockout';
import { Entity } from './../Entity';
import { Monster } from './../Monster';
import { Item } from './../../items/Item';
import { Interval } from './../../util/Interval';

export class Player extends Entity {
    
    exp: KnockoutComputed<String>;
    currentExp: KnockoutObservable<number>;
    requiredExp: KnockoutComputed<number>;

    gold: KnockoutObservable<number>;

    backpack: Backpack;

    isFighting: KnockoutObservable<boolean>;

    constructor() {
        super();
        this.stamina(10);
        this.strength(5);
        this.currentHealth(this.maxHealth());

        this.currentExp = ko.observable(0);
        this.requiredExp = ko.computed(() => Math.floor(100 * Math.pow(this.level(), 0.75)));
        this.exp = ko.computed(() => this.checkExp());

        this.gold = ko.observable(0);

        this.backpack = new Backpack();

        this.isFighting = ko.observable(false);

        new Interval('HP-Reg', () => { this.regenerateHP(this); }, 500).start();
    }

    /**
     * Call when Player kills a Monster.
     * @param {Monster} monster Monster that was killed.
     * @memberof Player
     */
    public onMonsterKill(monster: Monster): void {
        this.rewardExp(monster.level());
        this.backpack.addItems(monster.loot);
    }

    /**
     * Sells an Item and add the Gold-Value to the Player's gold.
     * @param {Item} item Item to sell.
     * @param {number} amount How many times to sell it. (Default is 1)
     * @memberof Player
     */
    public sell(item: Item, amount: number = 1) {
        this.backpack.sell(item, amount);
        this.gold(this.gold() + (item.goldValue * amount));
    }

    /**
     * Rewards Experience to the Player based on the Level of the Monster that was slain. 
     * Formula: 150 / (10 - Monsterlevel-Difference) * Playerlevel
     * @param {number} monsterLvl Level of the Monster killed.
     * @memberof Player
     */
    private rewardExp(monsterLvl: number): void {
        let monsterLevelDiff = monsterLvl - this.level();
        let expReward = 150/(10 - monsterLevelDiff) * this.level();
        this.currentExp(this.currentExp() + Math.floor(expReward));
    }

    private checkExp(): String {
        if(this.currentExp() >= this.requiredExp()) {
            let expDiff = this.currentExp() - this.requiredExp();
            this.level(this.level() + 1);
            this.currentExp(expDiff);
        }
        return this.currentExp() + '/' + this.requiredExp()
    }

    /**
     * Revives the Player
     * @memberof Player
     */
    public revive(): void {
        this.currentHealth(this.maxHealth());
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