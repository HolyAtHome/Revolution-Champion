import { ItemType } from './ItemType';
/**
 * Base Class for every Item in the Game
 * @export
 * @class Item
 */
export class Item {

    id: number;

    name: String;
    description: String;

    goldValue: number;

    itemType: String;
    iconSource: String;

    /**
     * Creates an instance of Item.
     * @param {String} name Name of the Item
     * @param {String} desc Description of the Item
     * @param {number} goldValue How much gold to get when sold by Player
     * @memberof Item
     */
    constructor(id: number, name: String, desc: String, goldValue: number, type: String) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.goldValue = goldValue;

        this.itemType = type;
        this.iconSource = 'resources/images/items/' + type + '.png';
    }

}