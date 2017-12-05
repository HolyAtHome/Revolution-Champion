import { Player } from './../entities/player/Player';
import { Interval } from '../util/Interval';
import { Global } from './../core/Global';
import { Apprentice } from './../entities/Apprentice';
import { QuestRequirements } from './QuestRequirements';
import { QuestDifficulty } from './QuestDifficulty';
import * as ko from 'knockout';
import { UiEventManager } from '../core/UiEventManager';
import { UiEventReturn } from '../util/ui/UiEventReturn';

export class Quest {

    name: String;
    description: String;
    difficulty: QuestDifficulty;
    factor: number;

    requirements: QuestRequirements;
    success: KnockoutComputed<number>;
    duration: KnockoutComputed<number>;

    apprentice: Apprentice;
    currentProgress: KnockoutObservable<number>;
    maxProgress: KnockoutObservable<number>;

    started: Boolean;

    constructor(name: String, desc: String, diff: QuestDifficulty) {
        this.name = name;
        this.description = desc;
        this.difficulty = diff;
        this.factor = this.setFactor(this.difficulty);
        this.apprentice = Global.$Apprentice;
        this.requirements = this.createRequirements();
        this.success = ko.computed(() => this.calcSuccess());
        this.duration = ko.computed(() => this.calcDuration());

        this.currentProgress = ko.observable(null);
        this.maxProgress = ko.observable(null);

        this.started = false;
    }

    private setFactor(difficulty: QuestDifficulty): number {
        switch (difficulty) {
            case QuestDifficulty.EASY: return 1;
            case QuestDifficulty.MEDIUM: return 2;
            case QuestDifficulty.HARD: return 3;
            case QuestDifficulty.HEROIC: return 5;
            default: return -1;
        }
    }

    private createRequirements(): QuestRequirements {
        let req: QuestRequirements;

        const strength = ko.observable(Math.floor(Math.random() * (((this.factor) + this.factor) - (this.factor) + 1) + this.factor*this.factor));
        const stamina = ko.observable(Math.floor(Math.random() * (((this.factor) + this.factor) - (this.factor) + 1) + this.factor*this.factor));
        const speed = ko.observable(Math.floor(Math.random() * (((this.factor) + this.factor) - (this.factor) + 1) + this.factor*this.factor));
        const knowledge = ko.observable(Math.floor(Math.random() * (((this.factor) + this.factor) - (this.factor) + 1) + this.factor*this.factor));

        req = { 
            strength: strength,
            stamina: stamina,
            speed: speed,
            knowledge: knowledge
        }
        return req;
    }

    test(d: number) {
        this.duration = ko.computed(() => { return d; });
    }

    startQuest(): void {
        if(!this.started) {
            UiEventManager.RegisterEvent('onQuestFinish', { this: this, callback: this.onQuestFinish, unregisterAfter: true });
            this.started = true;
            this.currentProgress(0);
            this.maxProgress(this.duration());
            new Interval(
                'Quest >' + this.name + '<', 
                () => { this.currentProgress(this.currentProgress() + 1); }, 
                1000, 
                this.duration(), 
                () => UiEventManager.FireEvent('onQuestFinish', this)
            ).start();
        }
    }

    private onQuestFinish(eventReturn: UiEventReturn): void {
        let self: Quest = eventReturn.this;
        if (self.name === eventReturn.parameter.name) {
            let p = Global.$Player;
            let itemRewards = Global.$Items.gem.getRandom(3);
            itemRewards.forEach(i => {
                console.log('' + i.amount + 'x ' + i.item.name);
            })
            p.backpack.addItems(itemRewards);
            /* TODO: Add Gold. Formula = (8*factor*factor) + (15*factor); Maybe include player-level in formula. */
            self.started = false;
        }   
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