import Logger from "../../../utils/logger/logger";

/**
 * Base Weather UI Component
 */
export default class WeatherUIComponent {
  /**
   * Constructs the WeatherUIComponent instance with a specified limit.
   * @param {number} limit - Maximum number of elements to store.
   */
  constructor(parentElement, limit) {
    this.limit = limit;

    this.element = null;
    this.wrapperElement = null;
    const createdElements = this.createElement();
    // if returned component element is the wrapper element itself
    // assign in to both wrapper and main component elements
    if (createdElements.length === 1) {
      [this.element] = [this.wrapperElement] = createdElements;
    } else {
      [this.element, this.wrapperElement] = createdElements;
    }
    this.update = (/** @type {any} */ item) => this._update(item);
    parentElement.append(this.element);
  }

  /**
   * Stub function to be overriden in derived classes.
   * @returns {any[]}
   */
  createElement() {
    return [null];
  }

  /**
   * Private method to update the list with a new item.
   * Adds the item and handles item removal if the limit is exceeded.
   * @param {any} addedItem - The item to be added to the list.
   */
  _update(addedItem) {
    this.add(addedItem);
    if (
      this.wrapperElement &&
      this.wrapperElement.children.length > this.limit
    ) {
      const toRemove = this.wrapperElement.firstChild;
      this.remove(toRemove);
    }
  }

  /**
   * Action to perform when an item is added to the list.
   * Logs the addition of the item.
   * @param {any} item - The item that was added.
   */
  add(item) {
    Logger.log("added ", item);
  }

  /**
   * Action to perform when an item is removed from the list.
   * Logs the removal of the item.
   * @param {any} item - The item that was removed.
   */
  remove(item) {
    Logger.log("removed ", item);
  }
}
