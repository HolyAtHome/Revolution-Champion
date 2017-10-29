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
define(["require", "exports", "../Item", "./ItemCollection"], function (require, exports, Item_1, ItemCollection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Collection of Junk-Items.
     *
     * @export
     * @class JunkItemCollection
     * @extends {ItemCollection}
     */
    var JunkItemCollection = /** @class */ (function (_super) {
        __extends(JunkItemCollection, _super);
        function JunkItemCollection() {
            var _this = _super.call(this) || this;
            _this.add(new Item_1.Item('Used Bandage', '', 1));
            _this.add(new Item_1.Item("Broken Sword", '', 4));
            _this.add(new Item_1.Item('Glas Shards', '', 2));
            _this.add(new Item_1.Item('Torn off Cloth', '', 2));
            _this.add(new Item_1.Item('Weird looking "Egg"', '', 10));
            _this.add(new Item_1.Item('Broken Stem', '', 1));
            _this.add(new Item_1.Item('Old Book', '', 6));
            _this.add(new Item_1.Item('Small Key', 'It\'s broken.', 3));
            _this.add(new Item_1.Item('Common Quartz Crystal', '', 6));
            _this.add(new Item_1.Item('Small Feather', '', 1));
            _this.add(new Item_1.Item('Broken Claw', '', 1));
            _this.add(new Item_1.Item('Small Tusk', '', 2));
            _this.add(new Item_1.Item('Unreadable Letter', '', 1));
            _this.add(new Item_1.Item('Bag of Marbles', '', 3));
            return _this;
        }
        return JunkItemCollection;
    }(ItemCollection_1.ItemCollection));
    exports.JunkItemCollection = JunkItemCollection;
});
//# sourceMappingURL=JunkItemCollection.js.map