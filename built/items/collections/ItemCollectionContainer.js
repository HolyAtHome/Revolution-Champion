define(["require", "exports", "./JunkItemCollection", "./GemItemCollection"], function (require, exports, JunkItemCollection_1, GemItemCollection_1) {
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
            this.gem = new GemItemCollection_1.GemItemCollection();
        }
        return ItemCollectionContainer;
    }());
    exports.ItemCollectionContainer = ItemCollectionContainer;
});
//# sourceMappingURL=ItemCollectionContainer.js.map