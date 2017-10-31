define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Base Class for every Item in the Game
     * @export
     * @class Item
     */
    var Item = /** @class */ (function () {
        /**
         * Creates an instance of Item.
         * @param {String} name Name of the Item
         * @param {String} desc Description of the Item
         * @param {number} goldValue How much gold to get when sold by Player
         * @memberof Item
         */
        function Item(id, name, desc, goldValue, type) {
            this.id = id;
            this.name = name;
            this.description = desc;
            this.goldValue = goldValue;
            this.itemType = type;
            this.iconSource = 'resources/images/items/' + type + '.png';
        }
        return Item;
    }());
    exports.Item = Item;
});
//# sourceMappingURL=Item.js.map