import * as ko from 'knockout';
import { Player } from './../entities/player/Player';
import { Adventure } from './../adventures/Adventure';
import { Apprentice } from './../entities/Apprentice';
import { ItemCollectionContainer } from '../items/collections/ItemCollectionContainer';
import { AdventureContainer } from './../adventures/AdventureContainer';
import { BuildingContainer } from './../buildings/BuildingContainer';

export class Global {
    static $Navigation: KnockoutObservable<String>;
    static $SubNavigation: KnockoutObservable<String>;
    
    static $Items: ItemCollectionContainer;

    static $Player: Player;
    static $Apprentice: Apprentice;

    static $MonsterNames: Array<String>;

    static $Adventures: AdventureContainer; 

    static $Buildings: BuildingContainer;

    static $FindAdventure(arr: Array<Adventure>, name: String): Adventure {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].name() === name) {
                return arr[i];
            }
        }
    }

    static $Init(): void {
        this.$Navigation = ko.observable('');
        this.$SubNavigation = ko.observable('');
        this.$Items = new ItemCollectionContainer();
        this.$Apprentice = new Apprentice();
        this.$Player = new Player();
        this.$MonsterNames =
            ['Goblin', 'Birdperson', 'Evil Hound', 'Witch', 'Warlock', 'Undead Mage', 'Zombie'];
        this.$Adventures = new AdventureContainer();
        this.$Buildings = new BuildingContainer();
    }
}