import { UiEventReturn } from "./UiEventReturn";

export interface UiEventFunction {
    this: Object;
    callback: (eventReturn: UiEventReturn) => void;
    unregisterAfter: boolean;
}