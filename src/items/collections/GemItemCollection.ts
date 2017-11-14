import { ItemType } from './../ItemType';
import { Item } from '../Item';
import { ItemCollection } from './ItemCollection';

/**
 * Collection of Gem-Items. (ID-Range: 20001 - 20999)
 * 
 * @export
 * @class GemItemCollection
 * @extends {ItemCollection}
 */
export class GemItemCollection extends ItemCollection {

    constructor() {
        super();
        this.add(new Item(20001, 'Diamond', 'A white Gemstone', 80, ItemType.Gem));
        this.add(new Item(20002, 'Cobalt', 'A blue Gemstone', 30, ItemType.Gem));
        this.add(new Item(20003, 'Emerald', 'A green Gemstone', 30, ItemType.Gem));
        this.add(new Item(20004, 'Topaz', 'A orange Gemstone', 30, ItemType.Gem));
        this.add(new Item(20005, 'Rose', 'A pink Gemstone', 30, ItemType.Gem));
        this.add(new Item(20007, 'Ruby', 'A red Gemstone', 30, ItemType.Gem));
        this.add(new Item(20008, 'Lilac', 'A purple Gemstone', 30, ItemType.Gem));
    }

}