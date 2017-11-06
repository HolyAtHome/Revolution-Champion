import * as ko from 'knockout';
import { Global } from './../core/Global';
import { Player } from './../entities/player/Player';

export class Building {

    private _player: Player;

    name: KnockoutObservable<String>;
    description: KnockoutObservable<String>;
    cost: number;

    imageName: String;

    owned: KnockoutObservable<boolean>;

    constructor(name: String, desc: String, cost: number, imgName: String = 'default.png') {
        this._player = Global.$Player;

        this.name = ko.observable(name);
        this.description = ko.observable(desc);
        this.cost = cost;
        this.imageName = 'resources/images/buildings/' + imgName;
        this.owned = ko.observable(false);
    }

    public buy(): void {
        let gold = this._player.gold;
        if(gold() >= this.cost) {
            gold(gold() - this.cost);
            this.owned(true);
        }
    }

}