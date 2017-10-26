import { Interval } from './../util/Interval';
import * as ko from 'knockout';
import { Global } from './Global';
import { Player } from '../entities/Player';
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
