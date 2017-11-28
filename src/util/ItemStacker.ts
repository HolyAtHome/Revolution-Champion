import * as ko from 'knockout';
import { IStackedItem } from "../items/IStackedItem";
import { Item } from "../items/Item";

export class ItemStacker {

    private items: KnockoutObservableArray<IStackedItem>;

    constructor() {
        this.items = ko.observableArray([]);
    }

    /**
     * Returns the Array of IStackedItem
     * 
     * @returns {Array<IStackedItem>} 
     * @memberof ItemStacker
     */
    public get(): Array<IStackedItem> {
        return this.items();
    }

    /**
     * Retunrs the Stack as Knockout Observable
     * 
     * @returns {KnockoutObservableArray<IStackedItem>} 
     * @memberof ItemStacker
     */
    public asObservable(): KnockoutObservableArray<IStackedItem> {
        return this.items;
    }

    /**
     * Adds a single Item to the Stack.
     * 
     * @param {Item} item Item to add
     * @memberof Backpack
     */
    public addItem(item: Item): void {
        if(this.isAlreadyPresent(item)) {
            this.addToStack(item);
        } else {
            // NOTE: Currently only accepts one Item that can be added.
            this.items.push({ item: item, amount: 1 });
        }
    }

    /**
     * Adds multiple Items for an Array of IStackedItem to the Stack.
     * 
     * @param {Array<Item>} items Items to add.
     * @memberof Backpack
     */
    public addItems(items: Array<IStackedItem>): void {
        for(var i = 0; i < items.length; i++) {
            const stack = items[i];
            for(var j = 0; j < stack.amount; j++) {
                this.addItem(stack.item);
            }
        }
    }

    /**
     * Removes a Item from the Stack
     * 
     * @param item Item to remove
     * @param amount How many times to remove (Default = 1)
     */
    public removeItem(item: Item, amount: number = 1): void {
        let toReplace = this.find(item);
        if(toReplace.amount - amount <= 0) {
            this.items.remove(toReplace);
        } else {
            this.items.replace(toReplace, { item: toReplace.item, amount: toReplace.amount - amount});
        }
    }

    /**
     * Adds an Item to the Stack.
     * The Item must already be present in the Stack.
     * 
     * @private
     * @param {Item} item Item to add to the Stack.
     * @memberof Backpack
     */
    private addToStack(item: Item): void {
        if(!this.isAlreadyPresent(item)) {
            throw new Error('Tried adding a Item to a Stack that is currently not present.');
        }
        let toReplace = this.find(item);
        this.items.replace(toReplace, { item: toReplace.item, amount: toReplace.amount + 1 });
    }

    /**
     * Checks if the Item is currently present in the Stack.
     * 
     * @private
     * @param {Item} item Item to check
     * @returns {boolean} 
     * @memberof Backpack
     */
    private isAlreadyPresent(item: Item): boolean {
        // NOTE: Currently only checks for ID. Maybe change to Object-Compare.
        return (this.find(item) != null);
    }

    /**
     * Returns the Item from the Stack. Null if not current.
     * NOTE: Only checks if the Item ID is the same. Maybe add a Deep-Object Compare
     * 
     * @private
     * @param {Item} item Item to find.
     * @returns {IStackedItem} 
     * @memberof Backpack
     */
    private find(item: Item): IStackedItem {
        for(let i = 0; i < this.items().length; i++) {
            if(this.items()[i].item.id === item.id) {
                return this.items()[i];
            }
        }
        return null;
    }
    
}