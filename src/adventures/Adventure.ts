import * as ko from 'knockout';
import { Global } from './../core/Global';
import { Player } from './../entities/Player';
import { Monster } from './../entities/Monster';

export class Adventure {

    player: Player;

    name: KnockoutObservable<String>;
    requiredLevel: KnockoutObservable<number>;
    isFighting: KnockoutObservable<boolean>;

    monster: KnockoutObservable<Monster>;
    monsterLvlMin: number;
    monsterLvlMax: number;

    constructor(name: String, reqLevel: number, monsterLvlMin: number, monsterLvlMax: number) {
        this.player = Global.$Player;

        this.name = ko.observable(name);
        this.requiredLevel = ko.observable(reqLevel);
        this.isFighting = ko.observable(false);

        this.monsterLvlMin = monsterLvlMin;
        this.monsterLvlMax = monsterLvlMax;
        this.monster = ko.observable(new Monster(this.monsterLvlMin, this.monsterLvlMax));
    }

    startFight(): void {
        this.isFighting(true);
        this.player.isFighting(true);
    }

    attack(): void {
        if(!this.player.isDead() && !this.monster().isDead()) {
            this.player.attack(this.monster());
            this.monster().attack(this.player);          
            
            if(this.player.isDead()) {
                this.isFighting(false);
                this.player.isFighting(false);
                Global.$Navigation('Town');
            }
            if(this.monster().isDead()) {
                this.isFighting(false);
                this.player.isFighting(false);
                // TODO: Reward exp
                this.monster(new Monster(this.monsterLvlMin, this.monsterLvlMax));
            }
        }
    }

}