import * as ko from 'knockout';

export class Building {

    name: KnockoutObservable<String>;
    description: KnockoutObservable<String>;

    imageName: String;

    owned: KnockoutObservable<boolean>;

    constructor(name: String, desc: String, imgName: String = 'default.png') {
        this.name = ko.observable(name);
        this.description = ko.observable(desc);
        this.imageName = 'resources/images/buildings/' + imgName;
        this.owned = ko.observable(false);
    }

    public buy(): void {
        this.owned(true);
    }

}