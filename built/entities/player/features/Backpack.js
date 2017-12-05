define(["require", "exports", "../../../util/ItemStacker", "../../../core/UiEventManager"], function (require, exports, ItemStacker_1, UiEventManager_1) {
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
            this.stacker = new ItemStacker_1.ItemStacker();
            this.items = this.stacker.asObservable();
        }
        /**
         * Adds a single Item to the Backpack.
         *
         * @param {Item} item Item to add
         * @memberof Backpack
         */
        Backpack.prototype.addItem = function (item) {
            this.stacker.addItem(item);
            UiEventManager_1.UiEventManager.FireEvent(UiEventManager_1.UiEvent.OnItemAddedToBackpack, item);
        };
        /**
         * Adds multiple Items to the Backpack.
         *
         * @param {Array<Item>} items Items to add.
         * @memberof Backpack
         */
        Backpack.prototype.addItems = function (items) {
            this.stacker.addItems(items);
            items.forEach(function (i) {
                UiEventManager_1.UiEventManager.FireEvent(UiEventManager_1.UiEvent.OnItemAddedToBackpack, i.item);
            });
        };
        /**
         * Sells an Item from the Backpack
         *
         * @param {Item} item Item to sell
         * @param {number} amount How many times to sell the Item
         * @memberof Backpack
         */
        Backpack.prototype.sell = function (item, amount) {
            this.stacker.removeItem(item, amount);
        };
        return Backpack;
    }());
    exports.Backpack = Backpack;
});
//# sourceMappingURL=Backpack.js.map