define(["require", "exports", "./JunkItemCollection"], function (require, exports, JunkItemCollection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Contains all the ItemCollections.
     *
     * @export
     * @class ItemCollectionContainer
     */
    var ItemCollectionContainer = /** @class */ (function () {
        function ItemCollectionContainer() {
            this.junk = new JunkItemCollection_1.JunkItemCollection();
        }
        return ItemCollectionContainer;
    }());
    exports.ItemCollectionContainer = ItemCollectionContainer;
});
//# sourceMappingURL=ItemCollectionContainer.js.map