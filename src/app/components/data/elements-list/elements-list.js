import Logger from "../../../utils/logger/logger";
import DataStore from "../data-store/data-store";

/**
 * Extends the DataStore class to manage a list of elements.
 * Provides additional functionalities to handle actions when an item is added or removed.
 */
export default class ElementsList extends DataStore {
  /**
   * Constructs the ElementsList instance with a specified limit.
   * @param {number} limit - Maximum number of elements to store.
   */
  constructor(limit) {
    super(limit);
    this.update = (item) => this._update(item);
  }

  /**
   * Private method to update the list with a new item.
   * Adds the item and handles item removal if the limit is exceeded.
   * @param {any} addedItem - The item to be added to the list.
   */
  _update(addedItem) {
    this.add(addedItem);
    this.addedItemAction(addedItem);
    if (this.items.length > this.limit) {
      const removedItem = this.items.shift();
      this.removedItemAction(removedItem);
    }
  }

  /**
   * Action to perform when an item is added to the list.
   * Logs the addition of the item.
   * @param {any} item - The item that was added.
   */
  addedItemAction(item) {
    Logger.log("added ", item);
  }

  /**
   * Action to perform when an item is removed from the list.
   * Logs the removal of the item.
   * @param {any} item - The item that was removed.
   */
  removedItemAction(item) {
    Logger.log("removed ", item);
  }
}
