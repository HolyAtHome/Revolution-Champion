import * as ko from 'knockout';
import { Building } from './Building';

export class BuildingContainer {

    private data: KnockoutObservableArray<Building>;

    constructor() {
        this.data = ko.observableArray([
            new Building('Townhall', 'Base Building for your Town', 50, 'overgrown_house.png'),
            new Building('Blacksmith', 'Makes cool things out of Steel', 100, 'house.png'),
            new Building('Alchemist', 'Brews Potions', 100, 'treehouse.png'),
            new Building('Lumbermill', 'Collects Wood', 100, 'house_2.png'),
            new Building('Mine', 'Collects Stone and Iron', 100, 'inn_house.png'),
            new Building('Marketplace', 'Buy and sell Stuff', 100, 'marketplace.png')
        ]);
    }

    public all(): KnockoutObservableArray<Building> {
        return this.data;
    }

}