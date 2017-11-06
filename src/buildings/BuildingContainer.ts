import * as ko from 'knockout';
import { Building } from './Building';

export class BuildingContainer {

    private data: KnockoutObservableArray<Building>;

    constructor() {
        this.data = ko.observableArray([
            new Building('Townhall', 'Base Building for your Town', 'overgrown_house.png'),
            new Building('Blacksmith', 'Makes cool things out of Steel', 'house.png'),
            new Building('Alchemist', 'Brews Potions', 'treehouse.png'),
            new Building('Lumbermill', 'Collects Wood', 'house_2.png'),
            new Building('Mine', 'Collects Stone and Iron', 'inn_house.png'),
            new Building('Marketplace', 'Buy and sell Stuff', 'marketplace.png')
        ]);
    }

    public all(): KnockoutObservableArray<Building> {
        return this.data;
    }

}