import * as ko from 'knockout';

export class Quest {

    name: String;
    description: String;

    constructor(name: String, desc: String) {
        this.name = name;
        this.description = desc;
    }

}