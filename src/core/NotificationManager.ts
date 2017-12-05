import * as ko from 'knockout';
import { UiEventManager, UiEvent } from './UiEventManager';
import { UiEventReturn } from '../util/ui/UiEventReturn';
import { Interval } from '../util/Interval';

export class NotificationManager {
    public class: KnockoutObservable<string>;
    public text: KnockoutObservable<string>;
    
    constructor() {
        this.class = ko.observable('');
        this.text = ko.observable('');

        this.registerEvents();
    }
    
    private registerEvents(): void {
        UiEventManager.RegisterEvent(UiEvent.OnQuestFinish, { self: this, callback: this.onQuestFinish, unregisterAfter: false });
        UiEventManager.RegisterEvent(UiEvent.OnPlayerLevelUp,  { self: this, callback: this.onPlayerLevelUp, unregisterAfter: false })
    }

    private onQuestFinish(ret: UiEventReturn): void {
        let self = ret.self;

        self.class('show');
        self.text('Quest "' + ret.parameter.name + '" just finished!');
        self.resetNotification();
    }

    private onPlayerLevelUp(ret: UiEventReturn): void {
        let self = ret.self;

        self.class('show');
        self.text('Player leveled up to Level ' + ret.parameter + '!');
        self.resetNotification();
    }

    private resetNotification(): void {
        setTimeout(() => {
            this.class('');
            this.text('');
        }, 3000);
    }
}