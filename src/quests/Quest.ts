import { QuestRequirements } from './QuestRequirements';
import { QuestDifficulty } from './QuestDifficulty';
import * as ko from 'knockout';

export class Quest {

    name: String;
    description: String;
    difficulty: QuestDifficulty;

    requirements: QuestRequirements;
    duration: KnockoutComputed<number>;

    // TODO: Create Apprentice Class (extends Entity)
    apprentice: any;

    constructor(name: String, desc: String, diff: QuestDifficulty) {
        this.name = name;
        this.description = desc;
        this.difficulty = diff;
        this.requirements = this.createRequirements(this.difficulty);
        this.duration = ko.computed(() => this.calcDuration());
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

    private calcDuration(): number {
        // TODO: Replace with apprentice
        var diff = this.requirements.speed() - 5
        return Math.floor(5 * (15 * Math.log(Math.pow(10+diff, 2))));
    }

}