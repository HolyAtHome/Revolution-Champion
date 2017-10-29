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
        function Item(name, desc, goldValue) {
            this.name = name;
            this.description = desc;
            this.goldValue = goldValue;
        }
        return Item;
    }());
    exports.Item = Item;
});
//# sourceMappingURL=Item.js.map