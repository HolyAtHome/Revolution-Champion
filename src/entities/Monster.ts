import * as ko from 'knockout';
import { Global } from './../core/Global';
import { Entity } from './Entity';

export class Monster extends Entity {

    name: KnockoutObservable<String>;

    constructor(minLvl: number, maxLvl: number) {
        super();
        this.level(Math.floor(Math.floor(Math.random() * (maxLvl - minLvl + 1)) + minLvl));
        var lowLvl = (this.level() - 3 < 0) ? 0 : (this.level() - 3);
        var highLvl = this.level() + 3;
        this.stamina(Math.floor(Math.floor(Math.random() * (highLvl - lowLvl + 1)) + lowLvl));
        this.strength(Math.floor(Math.floor(Math.random() * (highLvl-1 - lowLvl + 1)) + lowLvl));
        
        /* Must be more than 0 */
        this.stamina((this.stamina() <= 0) ? 1 : this.stamina());
        this.strength((this.strength() <= 0) ? 1 : this.strength());
        this.currentHealth(this.maxHealth());

        this.name = ko.observable(Global.$MonsterNames[Math.floor(Math.random() * Global.$MonsterNames.length)]);
    }
    
}