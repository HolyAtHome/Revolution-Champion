import * as ko from 'knockout';
import { Adventure } from './Adventure';

export class AdventureContainer {

    private data: KnockoutObservableArray<Adventure>;

    constructor() {
        this.data = ko.observableArray([
            new Adventure('Plains', 1, 1, 2),
            new Adventure('Forest', 5, 4, 7),
            new Adventure('Cave', 20, 18, 25),
            new Adventure('Icy Mountain', 30, 28, 35),
            new Adventure('Abandoned Town', 50, 45, 60),
            new Adventure('Gates to Farfall', 75, 70, 100)
        ]);
    }

    public all(): KnockoutObservableArray<Adventure> {
        return this.data;
    }

}