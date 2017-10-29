import { Item } from './Item';

/**
 * Defines the Interface for a Stacked Item
 * 
 * @export
 * @interface IStackedItem
 */
export interface IStackedItem {
    /**
     * Item which is Stacked
     * @type {Item}
     * @memberof IStackedItem
     */
    item: Item;

    /**
     * Number of times the Item is in this Stack
     * @type {number}
     * @memberof IStackedItem
     */
    amount: number;
}