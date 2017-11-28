define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItemStacker = /** @class */ (function () {
        function ItemStacker() {
            this.items = ko.observableArray([]);
        }
        /**
         * Returns the Array of IStackedItem
         *
         * @returns {Array<IStackedItem>}
         * @memberof ItemStacker
         */
        ItemStacker.prototype.get = function () {
            return this.items();
        };
        /**
         * Retunrs the Stack as Knockout Observable
         *
         * @returns {KnockoutObservableArray<IStackedItem>}
         * @memberof ItemStacker
         */
        ItemStacker.prototype.asObservable = function () {
            return this.items;
        };
        /**
         * Adds a single Item to the Stack.
         *
         * @param {Item} item Item to add
         * @memberof Backpack
         */
        ItemStacker.prototype.addItem = function (item) {
            if (this.isAlreadyPresent(item)) {
                this.addToStack(item);
            }
            else {
                // NOTE: Currently only accepts one Item that can be added.
                this.items.push({ item: item, amount: 1 });
            }
        };
        /**
         * Adds multiple Items for an Array of IStackedItem to the Stack.
         *
         * @param {Array<Item>} items Items to add.
         * @memberof Backpack
         */
        ItemStacker.prototype.addItems = function (items) {
            for (var i = 0; i < items.length; i++) {
                var stack = items[i];
                for (var j = 0; j < stack.amount; j++) {
                    this.addItem(stack.item);
                }
            }
        };
        /**
         * Removes a Item from the Stack
         *
         * @param item Item to remove
         * @param amount How many times to remove (Default = 1)
         */
        ItemStacker.prototype.removeItem = function (item, amount) {
            if (amount === void 0) { amount = 1; }
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
         * The Item must already be present in the Stack.
         *
         * @private
         * @param {Item} item Item to add to the Stack.
         * @memberof Backpack
         */
        ItemStacker.prototype.addToStack = function (item) {
            if (!this.isAlreadyPresent(item)) {
                throw new Error('Tried adding a Item to a Stack that is currently not present.');
            }
            var toReplace = this.find(item);
            this.items.replace(toReplace, { item: toReplace.item, amount: toReplace.amount + 1 });
        };
        /**
         * Checks if the Item is currently present in the Stack.
         *
         * @private
         * @param {Item} item Item to check
         * @returns {boolean}
         * @memberof Backpack
         */
        ItemStacker.prototype.isAlreadyPresent = function (item) {
            // NOTE: Currently only checks for ID. Maybe change to Object-Compare.
            return (this.find(item) != null);
        };
        /**
         * Returns the Item from the Stack. Null if not current.
         * NOTE: Only checks if the Item ID is the same. Maybe add a Deep-Object Compare
         *
         * @private
         * @param {Item} item Item to find.
         * @returns {IStackedItem}
         * @memberof Backpack
         */
        ItemStacker.prototype.find = function (item) {
            for (var i = 0; i < this.items().length; i++) {
                if (this.items()[i].item.id === item.id) {
                    return this.items()[i];
                }
            }
            return null;
        };
        return ItemStacker;
    }());
    exports.ItemStacker = ItemStacker;
});
//# sourceMappingURL=ItemStacker.js.map