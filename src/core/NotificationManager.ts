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
        UiEventManager.RegisterEvent(UiEvent.OnPlayerLevelUp,  { self: this, callback: this.onPlayerLevelUp, unregisterAfter: false });
        UiEventManager.RegisterEvent(UiEvent.OnPlayerDeath, { self: this, callback: this.onPlayerDeath, unregisterAfter: false });
    }

    private onQuestFinish(ret: UiEventReturn): void {
        ret.self.notify('Quest "' + ret.parameter.name + '" just finished!');
    }

    private onPlayerLevelUp(ret: UiEventReturn): void {
        ret.self.notify('You leveled up to Level ' + ret.parameter + '!');
    }

    private onPlayerDeath(ret: UiEventReturn): void {
        ret.self.notify('You died!');
    }

    private notify(text: string): void {
        this.class('show');
        this.text(text);
        this.startResetNotificationTimer();
    }

    private startResetNotificationTimer(): void {
        setTimeout(() => {
            this.class('');
            this.text('');
        }, 3000);
    }
}