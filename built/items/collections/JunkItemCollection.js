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
     * Collection of Junk-Items. (ID-Range: 10001 - 10999)
     *
     * @export
     * @class JunkItemCollection
     * @extends {ItemCollection}
     */
    var JunkItemCollection = /** @class */ (function (_super) {
        __extends(JunkItemCollection, _super);
        function JunkItemCollection() {
            var _this = _super.call(this) || this;
            _this.add(new Item_1.Item(10001, 'Used Bandage', '', 1, ItemType_1.ItemType.Crafting));
            _this.add(new Item_1.Item(10002, 'Broken Sword', '', 4, ItemType_1.ItemType.Junk));
            _this.add(new Item_1.Item(10003, 'Glas Shards', '', 2, ItemType_1.ItemType.Junk));
            _this.add(new Item_1.Item(10004, 'Torn off Cloth', '', 2, ItemType_1.ItemType.Junk));
            _this.add(new Item_1.Item(10005, 'Weird looking "Egg"', '', 10, ItemType_1.ItemType.Junk));
            _this.add(new Item_1.Item(10006, 'Broken Stem', '', 1, ItemType_1.ItemType.Junk));
            _this.add(new Item_1.Item(10007, 'Old Book', '', 6, ItemType_1.ItemType.Junk));
            _this.add(new Item_1.Item(10008, 'Small Key', 'It\'s broken.', 3, ItemType_1.ItemType.Junk));
            _this.add(new Item_1.Item(10009, 'Common Quartz Crystal', '', 6, ItemType_1.ItemType.Junk));
            _this.add(new Item_1.Item(10010, 'Small Feather', '', 1, ItemType_1.ItemType.Junk));
            _this.add(new Item_1.Item(10011, 'Broken Claw', '', 1, ItemType_1.ItemType.Junk));
            _this.add(new Item_1.Item(10012, 'Small Tusk', '', 2, ItemType_1.ItemType.Junk));
            _this.add(new Item_1.Item(10013, 'Unreadable Letter', '', 1, ItemType_1.ItemType.Junk));
            _this.add(new Item_1.Item(10014, 'Bag of Marbles', '', 3, ItemType_1.ItemType.Junk));
            return _this;
        }
        return JunkItemCollection;
    }(ItemCollection_1.ItemCollection));
    exports.JunkItemCollection = JunkItemCollection;
});
//# sourceMappingURL=JunkItemCollection.js.map