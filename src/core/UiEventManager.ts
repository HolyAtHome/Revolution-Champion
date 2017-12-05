import { UiEventFunction } from "../util/ui/UiEventFunction";
import { UiEventReturn } from "../util/ui/UiEventReturn";

export class UiEventManager {

    private static instance: UiEventManager;

    private eventSubscribers: any;

    constructor() {
        this.eventSubscribers = {
            'onQuestFinish': new Array<UiEventFunction>()
        };
    }

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

    public static FireEvent(event: string, argument: Object): void {
        let _this = UiEventManager.checkInstance();

        if (_this.eventSubscribers[event]) {
            const subs = _this.eventSubscribers[event];
            for(let i = subs.length - 1; i >= 0; i--) {
                const eventFunction: UiEventFunction = subs[i];
                const eventReturn: UiEventReturn = { this: eventFunction.this, parameter: argument };
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