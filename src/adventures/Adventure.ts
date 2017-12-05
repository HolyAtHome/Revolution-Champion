import { UiEventReturn } from '../util/ui/UiEventReturn';
import { UiEventFunction } from '../util/ui/UiEventFunction';
import * as ko from 'knockout';
import { Global } from './../core/Global';
import { Player } from './../entities/player/Player';
import { Monster } from './../entities/Monster';
import { UiEventManager, UiEvent } from '../core/UiEventManager';

export class Adventure {

    player: Player;

    name: KnockoutObservable<String>;
    requiredLevel: number;
    
    isFighting: KnockoutObservable<boolean>;

    monster: KnockoutObservable<Monster>;
    monsterLvlMin: number;
    monsterLvlMax: number;

    constructor(name: String, reqLevel: number, monsterLvlMin: number, monsterLvlMax: number) {
        this.player = Global.$Player;

        this.name = ko.observable(name);
        this.requiredLevel = reqLevel;

        this.isFighting = ko.observable(false);

        this.monsterLvlMin = monsterLvlMin;
        this.monsterLvlMax = monsterLvlMax;
        this.monster = ko.observable(new Monster(this.monsterLvlMin, this.monsterLvlMax));

        UiEventManager.RegisterEvent(UiEvent.OnPlayerDeath, { self: this, callback: this.onPlayerDeath, unregisterAfter: false });
    }

    attack(): void {
        if(!this.isFighting()) {
            this.isFighting(true);
            this.player.isFighting(true);
        }

        if(!this.player.isDead() && !this.monster().isDead()) {
            this.player.attack(this.monster());
            this.monster().attack(this.player);          
            
            if(this.monster().isDead()) {
                this.player.onMonsterKill(this.monster());
                this.monster(new Monster(this.monsterLvlMin, this.monsterLvlMax));
                this.isFighting(false);
                this.player.isFighting(false);
                // TODO: Add Reward.
                this.player.gold(this.player.gold() + 50);
            }
        }
    }

    onPlayerDeath(ret: UiEventReturn): void {
        let self = ret.self;
        self.isFighting(false);
        self.player.isFighting(false);
        self.monster().reset();
        Global.$Navigation('Town');
    }

}