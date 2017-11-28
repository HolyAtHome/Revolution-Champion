import { Item } from './../Item';
import { IStackedItem } from '../IStackedItem';
import { ItemStacker } from '../../util/ItemStacker';

/**
 * Base Class for all Item Collections. Cannot be instanciated.
 * @export
 * @abstract
 * @class ItemCollection
 */
export abstract class ItemCollection {

    /**
     * List of Items in this collection.
     * 
     * @type {Array<Item>}
     * @memberof ItemCollection
     */
    items: Array<Item>;

    constructor() {
        this.items = new Array<Item>();
     }

    /**
     * Adds an Item to the Collection.
     * @param {Item} item Item to add.
     * @memberof ItemCollection
     */
    public add(item: Item): void {
        this.items.push(item);
    }

    /**
     * Gets a given amount of Random Items from the Collection. (Default is 1 Item);
     * @param {number} [amount=1] Amount of Items to return
     * @memberof ItemCollection
     */
    public getRandom(amount: number = 1): Array<IStackedItem> {
        let stacker = new ItemStacker();
        for(let i = 0; i < amount; i++) {
            let next = this.items[Math.floor(Math.random() * this.items.length)];
            stacker.addItem(next);
        }
        return stacker.get();
    }

}