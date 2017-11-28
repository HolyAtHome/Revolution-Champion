import * as ko from 'knockout';
import { Global } from './../core/Global';
import { Entity } from './Entity';
import { IStackedItem } from '../items/IStackedItem';

export class Monster extends Entity {

    name: KnockoutObservable<String>;

    loot: Array<IStackedItem>;

    constructor(minLvl: number, maxLvl: number) {
        super();
        this.level(Math.floor(Math.floor(Math.random() * (maxLvl - minLvl + 1)) + minLvl));
        var lowLvl = (this.level() - 6 < 0) ? 0 : (this.level() - 8);
        var highLvl = this.level() + 6;
        this.stamina(Math.floor(Math.floor(Math.random() * (highLvl - lowLvl + 1)) + lowLvl));
        this.strength(Math.floor(Math.floor(Math.random() * (highLvl-1 - lowLvl + 1)) + lowLvl));
        
        /* Must be more than 0 */
        this.stamina((this.stamina() <= 0) ? 1 : this.stamina());
        this.strength((this.strength() <= 0) ? 1 : this.strength());
        this.currentHealth(this.maxHealth());

        this.name = ko.observable(Global.$MonsterNames[Math.floor(Math.random() * Global.$MonsterNames.length)]);
        this.loot = Global.$Items.junk.getRandom( Math.floor(Math.random() * 5) );
    }
    
    /**
     * Resets the Monster back to Initial State.
     * @memberof Monster
     */
    public reset(): void {
        this.currentHealth(this.maxHealth());
    }

}