define(["require", "exports", "knockout", "./../entities/player/Player", "./../adventures/Adventure", "../items/collections/ItemCollectionContainer"], function (require, exports, ko, Player_1, Adventure_1, ItemCollectionContainer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Global = /** @class */ (function () {
        function Global() {
        }
        Global.$FindAdventure = function (arr, name) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].name() === name) {
                    return arr[i];
                }
            }
        };
        Global.$Init = function () {
            this.$Navigation = ko.observable('');
            this.$Items = new ItemCollectionContainer_1.ItemCollectionContainer();
            this.$Player = new Player_1.Player();
            this.$MonsterNames =
                ['Goblin', 'Birdperson', 'Evil Hound', 'Witch', 'Warlock', 'Undead Mage', 'Zombie'];
            this.$Adventures = ko.observableArray([
                new Adventure_1.Adventure('Plains', 1, 1, 2),
                new Adventure_1.Adventure('Forest', 5, 4, 7),
                new Adventure_1.Adventure('Cave', 20, 18, 25),
                new Adventure_1.Adventure('Icy Mountain', 30, 28, 35),
                new Adventure_1.Adventure('Abandoned Town', 50, 45, 60),
                new Adventure_1.Adventure('Gates to Farfall', 75, 70, 100)
            ]);
        };
        return Global;
    }());
    exports.Global = Global;
});
//# sourceMappingURL=Global.js.map