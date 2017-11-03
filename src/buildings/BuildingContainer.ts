import * as ko from 'knockout';
import { Building } from './Building';

export class BuildingContainer {

    private data: KnockoutObservableArray<Building>;

    constructor() {
        this.data = ko.observableArray([
            new Building('b1', 'its a b'),
            new Building('b2', 'yeah boii'),
            new Building('b3', 'something'),
            new Building('b4', 'something'),
            new Building('b6', 'something'),
            new Building('b7', 'something'),
            new Building('br', 'something'),
            new Building('bfa', 'something'),
            new Building('bfgdgd', 'something')
        ]);
    }

    public all(): KnockoutObservableArray<Building> {
        return this.data;
    }

}