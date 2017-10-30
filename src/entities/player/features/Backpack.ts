import * as ko from 'knockout';
import { IStackedItem } from '../../../items/IStackedItem';
import { Item } from '../../../items/Item';
/**
 * Represents the Backpack of the Player.
 * 
 * @export
 * @class Backpack
 */
export class Backpack {

    items: KnockoutObservableArray<IStackedItem>;

    constructor() {
        this.items = ko.observableArray([]);
    }

    /**
     * Adds a single Item to the Backpack.
     * 
     * @param {Item} item Item to add
     * @memberof Backpack
     */
    public addItem(item: Item): void {
        if(this.isAlreadyInBackpack(item)) {
            this.addToStack(item);
        } else {
            // NOTE: Currently only accepts one Item that can be added.
            this.items.push({ item: item, amount: 1 });
        }
    }

    /**
     * Adds multiple Items to the Backpack.
     * 
     * @param {Array<Item>} items Items to add.
     * @memberof Backpack
     */
    public addItems(items: Array<Item>): void {
        items.forEach(i => this.addItem(i));
    }

    /**
     * Sells an Item from the Backpack
     * 
     * @param {Item} item Item to sell
     * @param {number} amount How many times to sell the Item
     * @memberof Backpack
     */
    public sell(item: Item, amount: number): void {
        let toReplace = this.find(item);
        if(toReplace.amount - amount <= 0) {
            this.items.remove(toReplace);
        } else {
            this.items.replace(toReplace, { item: toReplace.item, amount: toReplace.amount - amount});
        }
    }

    /**
     * Adds an Item to the Stack.
     * The Item must already be present in the Backpack.
     * 
     * @private
     * @param {Item} item Item to add to the Stack.
     * @memberof Backpack
     */
    private addToStack(item: Item): void {
        if(!this.isAlreadyInBackpack(item)) {
            throw new Error('Tried adding a Item to a Stack that is currently not present.');
        }
        let toReplace = this.find(item);
        this.items.replace(toReplace, { item: toReplace.item, amount: toReplace.amount + 1 });
    }

    /**
     * Checks if the Item is currently present in the Backpack.
     * 
     * @private
     * @param {Item} item Item to check
     * @returns {boolean} 
     * @memberof Backpack
     */
    private isAlreadyInBackpack(item: Item): boolean {
        // NOTE: Currently only checks for name. Maybe change to Object-Compare.
        return (this.find(item) != null);
    }

    /**
     * Returns the Item from the Backpack. Null if not current.
     * NOTE: Only checks if the Item name is the same. Maybe add a Deep-Object Compare
     * 
     * @private
     * @param {Item} item Item to find.
     * @returns {IStackedItem} 
     * @memberof Backpack
     */
    private find(item: Item): IStackedItem {
        for(let i = 0; i < this.items().length; i++) {
            if(this.items()[i].item.name === item.name) {
                return this.items()[i];
            }
        }
        return null;
    }

}