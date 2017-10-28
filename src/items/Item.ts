/**
 * Base Class for every Item in the Game
 * @export
 * @class Item
 */
export class Item {

    name: String;
    description: String;

    goldValue: number;

    /**
     * Creates an instance of Item.
     * @param {String} name Name of the Item
     * @param {String} desc Description of the Item
     * @param {number} goldValue How much gold to get when sold by Player
     * @memberof Item
     */
    constructor(name: String, desc: String, goldValue: number) {
        this.name = name;
        this.description = desc;
        this.goldValue = goldValue;
    }

}