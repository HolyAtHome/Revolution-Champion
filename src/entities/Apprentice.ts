import * as ko from 'knockout';
import { Entity } from './Entity';

export class Apprentice extends Entity {

    speed: KnockoutObservable<number>;
    knowledge: KnockoutObservable<number>;

    constructor() {
        super();
        this.strength(1);
        this.stamina(1);
        this.speed = ko.observable(1);
        this.knowledge = ko.observable(1);
    }

    lvlup(): void {
        this.level(this.level() + 1);
        this.strength(this.strength() + 2);
        this.stamina(this.stamina() + 2);
    }

}