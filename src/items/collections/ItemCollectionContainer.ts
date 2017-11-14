import { JunkItemCollection } from './JunkItemCollection';
import { ItemCollection } from './ItemCollection';
import { GemItemCollection } from './GemItemCollection';

/**
 * Contains all the ItemCollections.
 * 
 * @export
 * @class ItemCollectionContainer
 */
export class ItemCollectionContainer {

    public junk: ItemCollection;
    public gem: ItemCollection;

    constructor() {
        this.junk = new JunkItemCollection();
        this.gem = new GemItemCollection();
    }

}