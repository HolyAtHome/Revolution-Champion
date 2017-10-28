import { Item } from '../Item';
import { ItemCollection } from './ItemCollection';

/**
 * Collection of Junk-Items.
 * 
 * @export
 * @class JunkItemCollection
 * @extends {ItemCollection}
 */
export class JunkItemCollection extends ItemCollection {

    constructor() {
        super();
        this.add(new Item('Used Bandage', '', 1));
        this.add(new Item("Broken Sword", '', 4));
        this.add(new Item('Glas Shards', '', 2));
        this.add(new Item('Torn off Cloth', '', 2));
        this.add(new Item('Weird looking "Egg"', '', 10));
        this.add(new Item('Broken Stem', '', 1));
        this.add(new Item('Old Book', '', 6));
        this.add(new Item('Small Key', 'It\'s broken.', 3));
        this.add(new Item('Common Quartz Crystal', '', 6));
        this.add(new Item('Small Feather', '', 1));
        this.add(new Item('Broken Claw', '', 1));
        this.add(new Item('Small Tusk', '', 2));
        this.add(new Item('Unreadable Letter', '', 1));
        this.add(new Item('Bag of Marbles', '', 3));
    }

}