import * as ko from 'knockout';
import { Global } from './../core/Global';
import { Player } from './../entities/player/Player';
import { Monster } from './../entities/Monster';

export class Adventure {

    player: Player;

    name: KnockoutObservable<String>;
    waves: number;
    requiredLevel: number;
    
    isFighting: KnockoutObservable<boolean>;
    currentWave: KnockoutObservable<number>;

    monster: KnockoutObservable<Monster>;
    monsterLvlMin: number;
    monsterLvlMax: number;

    constructor(name: String, waves: number, reqLevel: number, monsterLvlMin: number, monsterLvlMax: number) {
        this.player = Global.$Player;

        this.name = ko.observable(name);
        this.waves = waves;
        this.requiredLevel = reqLevel;

        this.isFighting = ko.observable(false);
        this.currentWave = ko.observable();

        this.monsterLvlMin = monsterLvlMin;
        this.monsterLvlMax = monsterLvlMax;
        this.monster = ko.observable(new Monster(this.monsterLvlMin, this.monsterLvlMax));
    }

    startFight(): void {
        this.isFighting(true);
        this.player.isFighting(true);
        this.currentWave(1);
    }

    attack(): void {
        if(!this.player.isDead() && !this.monster().isDead()) {
            this.player.attack(this.monster());
            this.monster().attack(this.player);          
            
            if(this.player.isDead()) {
                this.isFighting(false);
                this.player.isFighting(false);
                this.monster().reset();
                Global.$Navigation('Town');
            }
            if(this.monster().isDead()) {
                this.player.onMonsterKill(this.monster());
                this.monster(new Monster(this.monsterLvlMin, this.monsterLvlMax));
                if(this.currentWave() < this.waves) {
                    this.currentWave(this.currentWave() + 1);
                } else if(this.currentWave() === this.waves) {
                    this.isFighting(false);
                    this.player.isFighting(false);
                    // TODO: Add Reward.
                    this.player.gold(this.player.gold() + 50);
                }
            }
        }
    }

}