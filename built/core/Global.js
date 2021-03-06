define(["require", "exports", "knockout", "./../entities/player/Player", "./../entities/Apprentice", "../items/collections/ItemCollectionContainer", "./../adventures/AdventureContainer", "./../buildings/BuildingContainer"], function (require, exports, ko, Player_1, Apprentice_1, ItemCollectionContainer_1, AdventureContainer_1, BuildingContainer_1) {
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
            this.$SubNavigation = ko.observable('');
            this.$Items = new ItemCollectionContainer_1.ItemCollectionContainer();
            this.$Apprentice = new Apprentice_1.Apprentice();
            this.$Player = new Player_1.Player();
            this.$MonsterNames =
                ['Goblin', 'Birdperson', 'Evil Hound', 'Witch', 'Warlock', 'Undead Mage', 'Zombie'];
            this.$Adventures = new AdventureContainer_1.AdventureContainer();
            this.$Buildings = new BuildingContainer_1.BuildingContainer();
        };
        return Global;
    }());
    exports.Global = Global;
});
//# sourceMappingURL=Global.js.map