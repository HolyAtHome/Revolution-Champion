define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Represents the Backpack of the Player.
     *
     * @export
     * @class Backpack
     */
    var Backpack = /** @class */ (function () {
        function Backpack() {
            this.items = ko.observableArray([]);
        }
        /**
         * Adds a single Item to the Backpack.
         *
         * @param {Item} item Item to add
         * @memberof Backpack
         */
        Backpack.prototype.addItem = function (item) {
            if (this.isAlreadyInBackpack(item)) {
                this.addToStack(item);
            }
            else {
                // NOTE: Currently only accepts one Item that can be added.
                this.items.push({ item: item, amount: 1 });
            }
        };
        /**
         * Adds multiple Items to the Backpack.
         *
         * @param {Array<Item>} items Items to add.
         * @memberof Backpack
         */
        Backpack.prototype.addItems = function (items) {
            var _this = this;
            items.forEach(function (i) { return _this.addItem(i); });
        };
        /**
         * Sells an Item from the Backpack
         *
         * @param {Item} item Item to sell
         * @param {number} amount How many times to sell the Item
         * @memberof Backpack
         */
        Backpack.prototype.sell = function (item, amount) {
            var toReplace = this.find(item);
            if (toReplace.amount - amount <= 0) {
                this.items.remove(toReplace);
            }
            else {
                this.items.replace(toReplace, { item: toReplace.item, amount: toReplace.amount - amount });
            }
        };
        /**
         * Adds an Item to the Stack.
         * The Item must already be present in the Backpack.
         *
         * @private
         * @param {Item} item Item to add to the Stack.
         * @memberof Backpack
         */
        Backpack.prototype.addToStack = function (item) {
            if (!this.isAlreadyInBackpack(item)) {
                throw new Error('Tried adding a Item to a Stack that is currently not present.');
            }
            var toReplace = this.find(item);
            this.items.replace(toReplace, { item: toReplace.item, amount: toReplace.amount + 1 });
        };
        /**
         * Checks if the Item is currently present in the Backpack.
         *
         * @private
         * @param {Item} item Item to check
         * @returns {boolean}
         * @memberof Backpack
         */
        Backpack.prototype.isAlreadyInBackpack = function (item) {
            // NOTE: Currently only checks for name. Maybe change to Object-Compare.
            return (this.find(item) != null);
        };
        /**
         * Returns the Item from the Backpack. Null if not current.
         * NOTE: Only checks if the Item name is the same. Maybe add a Deep-Object Compare
         *
         * @private
         * @param {Item} item Item to find.
         * @returns {IStackedItem}
         * @memberof Backpack
         */
        Backpack.prototype.find = function (item) {
            for (var i = 0; i < this.items().length; i++) {
                if (this.items()[i].item.name === item.name) {
                    return this.items()[i];
                }
            }
            return null;
        };
        return Backpack;
    }());
    exports.Backpack = Backpack;
});
//# sourceMappingURL=Backpack.js.map