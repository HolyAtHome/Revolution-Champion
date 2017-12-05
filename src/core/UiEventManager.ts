import { UiEventFunction } from '../util/ui/UiEventFunction';
import { UiEventReturn } from '../util/ui/UiEventReturn';

export enum UiEvent {
    OnQuestFinish = 'onQuestFinish',
    OnItemAddedToBackpack = 'onItemAddedToBackpack',
    OnPlayerLevelUp = 'onPlayerLevelUp',
    OnPlayerDeath = 'onPlayerDeath'
}

export class UiEventManager {

    private static instance: UiEventManager;

    private eventSubscribers: any;

    constructor() {
        UiEvent.OnQuestFinish
        this.eventSubscribers = {
            [UiEvent.OnQuestFinish]: new Array<UiEventFunction>(),
            [UiEvent.OnItemAddedToBackpack]: new Array<UiEventFunction>(),
            [UiEvent.OnPlayerLevelUp]: new Array<UiEventFunction>(),
            [UiEvent.OnPlayerDeath]: new Array<UiEventFunction>(),
        };
    }

    /**
     * Register a Function to an Event. The Function will be called whenever the Event gets fired.
     * 
     * @static
     * @param {string} event The event name (Use Enum UiEvent)
     * @param {UiEventFunction} func The UiEventFunction that gets called.
     * @memberof UiEventManager
     */
    public static RegisterEvent(event: string, func: UiEventFunction): void {
        let _this = UiEventManager.checkInstance();

        if (_this.eventSubscribers[event]) {
            _this.eventSubscribers[event].push(func);
            console.log('Registered Event. Event:', event, 'Callback:', func);
        }
        else {
            console.error(event, 'not defined. (tried to register event)');
        }
    }

    /**
     * Fires a specific Event and calls all Functions that were Registered to that event.
     * 
     * @static
     * @param {string} event The event name (Use Enum UiEvent)
     * @param {Object} argument The Object that you want should get passed to the Registered Functions
     * @memberof UiEventManager
     */
    public static FireEvent(event: string, argument: Object): void {
        let _this = UiEventManager.checkInstance();

        if (_this.eventSubscribers[event]) {
            const subs = _this.eventSubscribers[event];
            for(let i = subs.length - 1; i >= 0; i--) {
                const eventFunction: UiEventFunction = subs[i];
                const eventReturn: UiEventReturn = { self: eventFunction.self, parameter: argument };
                eventFunction.callback(eventReturn);
                if (eventFunction.unregisterAfter) {
                    subs.splice(i, 1);
                }
            }
        }
        else {
            console.error(event, 'not defined. (tried to fire event)');
        }
    }

    public static checkInstance(): UiEventManager {
        if (!UiEventManager.instance) {
            UiEventManager.instance = new UiEventManager();
        }
        return UiEventManager.instance;
    }

}