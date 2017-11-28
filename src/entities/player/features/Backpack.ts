import * as ko from 'knockout';
import { IStackedItem } from '../../../items/IStackedItem';
import { Item } from '../../../items/Item';
import { ItemStacker } from '../../../util/ItemStacker';
/**
 * Represents the Backpack of the Player.
 * 
 * @export
 * @class Backpack
 */
export class Backpack {

    stacker: ItemStacker;
    items: KnockoutObservableArray<IStackedItem>;

    constructor() {
        this.stacker = new ItemStacker();
        this.items = this.stacker.asObservable();
    }

    /**
     * Adds a single Item to the Backpack.
     * 
     * @param {Item} item Item to add
     * @memberof Backpack
     */
    public addItem(item: Item): void {
        this.stacker.addItem(item);
    }

    /**
     * Adds multiple Items to the Backpack.
     * 
     * @param {Array<Item>} items Items to add.
     * @memberof Backpack
     */
    public addItems(items: Array<IStackedItem>): void {
        this.stacker.addItems(items);
    }

    /**
     * Sells an Item from the Backpack
     * 
     * @param {Item} item Item to sell
     * @param {number} amount How many times to sell the Item
     * @memberof Backpack
     */
    public sell(item: Item, amount: number): void {
        this.stacker.removeItem(item, amount);
    }


}