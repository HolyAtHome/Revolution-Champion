import { ItemType } from './../ItemType';
import { Item } from '../Item';
import { ItemCollection } from './ItemCollection';

/**
 * Collection of Junk-Items. (ID-Range: 10001 - 10999)
 * 
 * @export
 * @class JunkItemCollection
 * @extends {ItemCollection}
 */
export class JunkItemCollection extends ItemCollection {

    constructor() {
        super();
        this.add(new Item(10001, 'Used Bandage', '', 1, ItemType.Crafting));
        this.add(new Item(10002, 'Broken Sword', '', 4, ItemType.Junk));
        this.add(new Item(10003, 'Glas Shards', '', 2, ItemType.Junk));
        this.add(new Item(10004, 'Torn off Cloth', '', 2, ItemType.Junk));
        this.add(new Item(10005, 'Weird looking "Egg"', '', 10, ItemType.Junk));
        this.add(new Item(10006, 'Broken Stem', '', 1, ItemType.Junk));
        this.add(new Item(10007, 'Old Book', '', 6, ItemType.Junk));
        this.add(new Item(10008, 'Small Key', 'It\'s broken.', 3, ItemType.Junk));
        this.add(new Item(10009, 'Common Quartz Crystal', '', 6, ItemType.Junk));
        this.add(new Item(10010, 'Small Feather', '', 1, ItemType.Junk));
        this.add(new Item(10011, 'Broken Claw', '', 1, ItemType.Junk));
        this.add(new Item(10012, 'Small Tusk', '', 2, ItemType.Junk));
        this.add(new Item(10013, 'Unreadable Letter', '', 1, ItemType.Junk));
        this.add(new Item(10014, 'Bag of Marbles', '', 3, ItemType.Junk));
    }

}