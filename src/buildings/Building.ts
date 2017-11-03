import * as ko from 'knockout';

export class Building {

    name: KnockoutObservable<String>;
    description: KnockoutObservable<String>;

    constructor(name: String, desc: String) {
        this.name = ko.observable(name);
        this.description = ko.observable(desc);
    }

}