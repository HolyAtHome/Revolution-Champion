import { Interval } from '../util/Interval';
import { Global } from './../core/Global';
import { Apprentice } from './../entities/Apprentice';
import { QuestRequirements } from './QuestRequirements';
import { QuestDifficulty } from './QuestDifficulty';
import * as ko from 'knockout';

export class Quest {

    name: String;
    description: String;
    difficulty: QuestDifficulty;

    requirements: QuestRequirements;
    success: KnockoutComputed<number>;
    duration: KnockoutComputed<number>;

    apprentice: Apprentice;

    currentProgress: KnockoutObservable<number>;
    maxProgress: KnockoutObservable<number>;

    constructor(name: String, desc: String, diff: QuestDifficulty) {
        this.name = name;
        this.description = desc;
        this.difficulty = diff;
        this.apprentice = Global.$Apprentice;
        this.requirements = this.createRequirements(this.difficulty);
        this.success = ko.computed(() => this.calcSuccess());
        this.duration = ko.computed(() => this.calcDuration());

        this.currentProgress = ko.observable(null);
        this.maxProgress = ko.observable(null);
    }

    private createRequirements(d: QuestDifficulty): QuestRequirements {
        let req: QuestRequirements;
        let factor: number;
        switch (d) {
            case QuestDifficulty.EASY: factor = 1;
                break;
            case QuestDifficulty.MEDIUM: factor = 2;
                break;
            case QuestDifficulty.HARD: factor = 3;
                break;
            case QuestDifficulty.HEROIC: factor = 5;
                break;
            default: 
                break;
        }

        const strength = ko.observable(Math.floor(Math.random() * (((factor) + factor) - (factor) + 1) + factor*factor));
        const stamina = ko.observable(Math.floor(Math.random() * (((factor) + factor) - (factor) + 1) + factor*factor));
        const speed = ko.observable(Math.floor(Math.random() * (((factor) + factor) - (factor) + 1) + factor*factor));
        const knowledge = ko.observable(Math.floor(Math.random() * (((factor) + factor) - (factor) + 1) + factor*factor));

        req = { 
            strength: strength,
            stamina: stamina,
            speed: speed,
            knowledge: knowledge
        }
        return req;
    }

    startQuest(): void {
        this.currentProgress(0);
        this.maxProgress(this.duration());
        new Interval('Quest "' + this.name + '"', () => {
            this.currentProgress(this.currentProgress() + 1);
        }, 1000, this.duration()).start();
    }

    private calcSuccess(): number {
        const strengthDiff = this.requirements.strength() - this.apprentice.strength() > 0 ? this.requirements.strength() - this.apprentice.strength() : 1;
        const staminaDiff = this.requirements.stamina() - this.apprentice.stamina() > 0 ? this.requirements.stamina() - this.apprentice.stamina() : 1;
        const speedDiff = this.requirements.speed() - this.apprentice.speed() > 0 ? this.requirements.speed() - this.apprentice.speed() : 1;
        const knowledgeDiff = this.requirements.knowledge() - this.apprentice.knowledge() > 0 ? this.requirements.knowledge() - this.apprentice.knowledge() : 1;

        const strengthChance = 1 / strengthDiff;
        const staminaChance = 1 / staminaDiff;
        const speedChance = 1 / speedDiff;
        const knowledgeChance = 1 / knowledgeDiff;

        /* Multiply by 25 => (sum / traitCount) * 100 == sum * (100 / traitCount) */
        return Math.floor((strengthChance + staminaChance + speedChance + knowledgeChance) * 25);
    }

    private calcDuration(): number {
        var diff = this.requirements.speed() - this.apprentice.speed();
        return Math.floor(5 * (15 * Math.log(Math.pow(10+diff, 2))));
    }

}