import { Interval } from './../util/Interval';
import * as ko from 'knockout';
import { Global } from './Global';
import { Player } from '../entities/player/Player';
import { Adventure } from './../adventures/Adventure';

class Core {
    $Adventures: KnockoutObservableArray<Adventure>;

    navigation: KnockoutObservable<String>;
    player: Player;
    currentAdventure: KnockoutObservable<Adventure>;

    constructor(startNav: String) {
        this.$Adventures = Global.$Adventures;

        this.navigation = Global.$Navigation;
        this.player = Global.$Player;
        this.currentAdventure = ko.observable(undefined);

        this.navigation(startNav);
        console.log('Starting with Navigation "' + this.navigation() + '"');

        console.log('Currently we have some Development Things going on. Delet these thing in core.ts later.');
        this.player.backpack.addItems(Global.$Items.junk.getRandom(3));
    }

    isNavigation(nav: String) : boolean {
         return this.navigation() === nav;
    };

    changeNavigation(newNav: String) : void {
        this.navigation(newNav);
    }

    startAdventure(adv: String) {
        this.currentAdventure(Global.$FindAdventure(Global.$Adventures(), adv));
    }

}

Global.$Init();

let core = new Core('Town');
ko.applyBindings(core);
core.navigation('Market');
