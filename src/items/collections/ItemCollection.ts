import { Item } from './../Item';

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
    public getRandom(amount: number = 1): Array<Item> {
        let ret = new Array<Item>();
        for(let i = 0; i < amount; i++) {
            ret.push(this.items[Math.floor(Math.random() * this.items.length)]);
        }
        return ret;
    }

}