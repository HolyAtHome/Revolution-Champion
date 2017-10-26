import * as ko from 'knockout';
import { Player } from './../entities/Player';
import { Adventure } from './../adventures/Adventure';

export class Global {
    static $Navigation: KnockoutObservable<String>;

    static $Player: Player;

    static $MonsterNames: Array<String>;

    static $Adventures: KnockoutObservableArray<Adventure>; 

    static $FindAdventure(arr: Array<Adventure>, name: String): Adventure {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].name() === name) {
                return arr[i];
            }
        }
    }

    static $Init(): void {
        this.$Navigation = ko.observable('');
        this.$Player = new Player();
        this.$MonsterNames =
            ['Goblin', 'Birdperson', 'Evil Hound', 'Witch', 'Warlock', 'Undead Mage', 'Zombie'];
        this.$Adventures = ko.observableArray([
            new Adventure('Plains', 1, 1, 2),
            new Adventure('Forest', 5, 4, 7),
            new Adventure('Cave', 20, 18, 25),
            new Adventure('Icy Mountain', 30, 28, 35),
            new Adventure('Abandoned Town', 50, 45, 60),
            new Adventure('Gates to Farfall', 75, 70, 100)
        ]);
    }
}