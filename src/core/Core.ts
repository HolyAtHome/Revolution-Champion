import { Apprentice } from './../entities/Apprentice';
import { Quest } from './../quests/Quest';
import * as ko from 'knockout';
import { Global } from './Global';
import { Interval } from './../util/Interval';
import { Player } from '../entities/player/Player';
import { Adventure } from './../adventures/Adventure';
import { Building } from './../buildings/Building';
import { UiEventManager, UiEvent } from './UiEventManager';
import { UiEventFunction } from '../util/ui/UiEventFunction';
import { Item } from '../items/Item';
import { UiEventReturn } from '../util/ui/UiEventReturn';
import { NotificationManager } from './NotificationManager';

class Core {

    Notification: NotificationManager;

    $Adventures: KnockoutObservableArray<Adventure>;
    $Buildings: KnockoutObservableArray<Building>;

    navigation: KnockoutObservable<String>;
    subNavigation: KnockoutObservable<String>;

    player: Player;
    currentAdventure: KnockoutObservable<Adventure>;

    apprentice: Apprentice;
    currentQuest: KnockoutObservable<Quest>

    constructor(startNav: String) {
        this.Notification = new NotificationManager();

        this.$Adventures = Global.$Adventures.all();
        this.$Buildings = Global.$Buildings.all();

        this.navigation = Global.$Navigation;
        this.subNavigation = Global.$SubNavigation;

        this.player = Global.$Player;
        this.currentAdventure = ko.observable(undefined);

        this.apprentice = Global.$Apprentice;
        this.currentQuest = ko.observable(undefined);

        this.navigation(startNav);
        console.log('Starting with Navigation "' + this.navigation() + '"');

        console.log('Currently we have some Development Things going on. Delet these thing in core.ts later.');
        this.player.gold(1000);
        this.player.backpack.addItems(Global.$Items.junk.getRandom(3));
        UiEventManager.RegisterEvent(UiEvent.OnItemAddedToBackpack, {self: this, callback: this.logItems, unregisterAfter: false});
        UiEventManager.RegisterEvent(UiEvent.OnQuestFinish, {self:this, callback: this.logQuestComplete, unregisterAfter: false});
    }

    logItems(ret: UiEventReturn): void {
        console.log('Core.logItems :: Item added to Backpack', ret.parameter.name);
    }

    logQuestComplete(ret: UiEventReturn): void {
        console.log('Core.logQuestComplete :: Quest Completed!', ret.parameter.name);
    }

    isNavigation(nav: String, subNav: String = '') : boolean {
        if(subNav === '') {
            return this.navigation() === nav;
        } else {
            return (this.navigation() === nav && this.subNavigation() === subNav);
        }
    };

    changeNavigation(newNav: String, newSubNav: String = '') : void {
        if(newNav != '') {
            this.navigation(newNav);
        }
        this.subNavigation(newSubNav);
    }

    startAdventure(adv: String) {
        this.currentAdventure(Global.$FindAdventure(Global.$Adventures.all()(), adv));
    }

    startQuest(q: Quest) {
        this.currentQuest(q);
    }

    testOutputJson(): void {
        console.log('--- Adventures ---');
        console.log(JSON.stringify(this.$Adventures()));
        console.log('--- Buildings ---');
        console.log(JSON.stringify(this.$Buildings()));
        console.log('--- Apprentice ---');
        console.log(JSON.stringify(this.apprentice));
        console.log('--- Player ---');
        console.log(JSON.stringify(this.player.backpack.items()));
        console.log('--- Navigation ---');
        console.log(this.navigation(), '-', this.subNavigation());
    }

}

Global.$Init();

let core = new Core('Town');
ko.applyBindings(core);
core.navigation('Town');
