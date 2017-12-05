import { UiEventReturn } from "./UiEventReturn";

export interface UiEventFunction {
    self: Object;
    callback: (eventReturn: UiEventReturn) => void;
    unregisterAfter: boolean;
}