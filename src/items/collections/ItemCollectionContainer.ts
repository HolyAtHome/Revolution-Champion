import { JunkItemCollection } from './JunkItemCollection';
import { ItemCollection } from './ItemCollection';

/**
 * Contains all the ItemCollections.
 * 
 * @export
 * @class ItemCollectionContainer
 */
export class ItemCollectionContainer {

    public junk: ItemCollection;

    constructor() {
        this.junk = new JunkItemCollection();
    }

}