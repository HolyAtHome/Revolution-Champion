define(["require", "exports", "./QuestDifficulty", "knockout"], function (require, exports, QuestDifficulty_1, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Quest = /** @class */ (function () {
        function Quest(name, desc, diff) {
            var _this = this;
            this.name = name;
            this.description = desc;
            this.difficulty = diff;
            this.requirements = this.createRequirements(this.difficulty);
            this.duration = ko.computed(function () { return _this.calcDuration(); });
        }
        Quest.prototype.createRequirements = function (d) {
            var req;
            var factor;
            switch (d) {
                case QuestDifficulty_1.QuestDifficulty.EASY:
                    factor = 1;
                    break;
                case QuestDifficulty_1.QuestDifficulty.MEDIUM:
                    factor = 2;
                    break;
                case QuestDifficulty_1.QuestDifficulty.HARD:
                    factor = 3;
                    break;
                case QuestDifficulty_1.QuestDifficulty.HEROIC:
                    factor = 5;
                    break;
                default:
                    break;
            }
            var strength = ko.observable(Math.floor(Math.random() * (((factor) + factor) - (factor) + 1) + factor * factor));
            var stamina = ko.observable(Math.floor(Math.random() * (((factor) + factor) - (factor) + 1) + factor * factor));
            var speed = ko.observable(Math.floor(Math.random() * (((factor) + factor) - (factor) + 1) + factor * factor));
            var knowledge = ko.observable(Math.floor(Math.random() * (((factor) + factor) - (factor) + 1) + factor * factor));
            req = {
                strength: strength,
                stamina: stamina,
                speed: speed,
                knowledge: knowledge
            };
            return req;
        };
        Quest.prototype.calcDuration = function () {
            // TODO: Replace with apprentice
            var diff = this.requirements.speed() - 5;
            return Math.floor(5 * (15 * Math.log(Math.pow(10 + diff, 2))));
        };
        return Quest;
    }());
    exports.Quest = Quest;
});
//# sourceMappingURL=Quest.js.map