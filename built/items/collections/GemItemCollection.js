var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./../ItemType", "../Item", "./ItemCollection"], function (require, exports, ItemType_1, Item_1, ItemCollection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Collection of Gem-Items. (ID-Range: 20001 - 20999)
     *
     * @export
     * @class GemItemCollection
     * @extends {ItemCollection}
     */
    var GemItemCollection = /** @class */ (function (_super) {
        __extends(GemItemCollection, _super);
        function GemItemCollection() {
            var _this = _super.call(this) || this;
            _this.add(new Item_1.Item(20001, 'Diamond', 'A white Gemstone', 80, ItemType_1.ItemType.Gem));
            _this.add(new Item_1.Item(20002, 'Cobalt', 'A blue Gemstone', 30, ItemType_1.ItemType.Gem));
            _this.add(new Item_1.Item(20003, 'Emerald', 'A green Gemstone', 30, ItemType_1.ItemType.Gem));
            _this.add(new Item_1.Item(20004, 'Topaz', 'A orange Gemstone', 30, ItemType_1.ItemType.Gem));
            _this.add(new Item_1.Item(20005, 'Rose', 'A pink Gemstone', 30, ItemType_1.ItemType.Gem));
            _this.add(new Item_1.Item(20007, 'Ruby', 'A red Gemstone', 30, ItemType_1.ItemType.Gem));
            _this.add(new Item_1.Item(20008, 'Lilac', 'A purple Gemstone', 30, ItemType_1.ItemType.Gem));
            return _this;
        }
        return GemItemCollection;
    }(ItemCollection_1.ItemCollection));
    exports.GemItemCollection = GemItemCollection;
});
//# sourceMappingURL=GemItemCollection.js.map