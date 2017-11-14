define(["require", "exports", "../util/Interval", "./../core/Global", "./QuestDifficulty", "knockout"], function (require, exports, Interval_1, Global_1, QuestDifficulty_1, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Quest = /** @class */ (function () {
        function Quest(name, desc, diff) {
            var _this = this;
            this.name = name;
            this.description = desc;
            this.difficulty = diff;
            this.apprentice = Global_1.Global.$Apprentice;
            this.requirements = this.createRequirements(this.difficulty);
            this.success = ko.computed(function () { return _this.calcSuccess(); });
            this.duration = ko.computed(function () { return _this.calcDuration(); });
            this.currentProgress = ko.observable(null);
            this.maxProgress = ko.observable(null);
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
        Quest.prototype.test = function (d) {
            this.duration = ko.computed(function () { return d; });
        };
        Quest.prototype.startQuest = function () {
            var _this = this;
            this.currentProgress(0);
            this.maxProgress(this.duration());
            new Interval_1.Interval('Quest "' + this.name + '"', function () {
                _this.currentProgress(_this.currentProgress() + 1);
            }, 1000, this.duration(), function () { return _this.onQuestFinish(); }).start();
        };
        Quest.prototype.onQuestFinish = function () {
            var p = Global_1.Global.$Player;
            p.backpack.addItems(Global_1.Global.$Items.gem.getRandom(5));
            p.addExp(Number.MAX_VALUE);
        };
        Quest.prototype.calcSuccess = function () {
            var strengthDiff = this.requirements.strength() - this.apprentice.strength() > 0 ? this.requirements.strength() - this.apprentice.strength() : 1;
            var staminaDiff = this.requirements.stamina() - this.apprentice.stamina() > 0 ? this.requirements.stamina() - this.apprentice.stamina() : 1;
            var speedDiff = this.requirements.speed() - this.apprentice.speed() > 0 ? this.requirements.speed() - this.apprentice.speed() : 1;
            var knowledgeDiff = this.requirements.knowledge() - this.apprentice.knowledge() > 0 ? this.requirements.knowledge() - this.apprentice.knowledge() : 1;
            var strengthChance = 1 / strengthDiff;
            var staminaChance = 1 / staminaDiff;
            var speedChance = 1 / speedDiff;
            var knowledgeChance = 1 / knowledgeDiff;
            /* Multiply by 25 => (sum / traitCount) * 100 == sum * (100 / traitCount) */
            return Math.floor((strengthChance + staminaChance + speedChance + knowledgeChance) * 25);
        };
        Quest.prototype.calcDuration = function () {
            var diff = this.requirements.speed() - this.apprentice.speed();
            return Math.floor(5 * (15 * Math.log(Math.pow(10 + diff, 2))));
        };
        return Quest;
    }());
    exports.Quest = Quest;
});
//# sourceMappingURL=Quest.js.map