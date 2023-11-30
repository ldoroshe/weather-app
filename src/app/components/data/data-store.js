/**
 * Simple data store with limit
 */
export default class DataStore {
  constructor(limit = 100) {
    /**
     * @type {number}
     */
    this.limit = limit;
    /**
     * @type any[]
     */
    this.items = [];
    this.add = (item) => this._add(item);
  }
  /**
   * Adding element to data queue
   * As data queue here is an array implementation is trivial
   * @param {any} element
   * @returns {any[]}
   */
  _add(element) {
    this.items.push(element);
    return this.items;
  }

  /**
   * Trims data queue to last X elements
   * @returns {any[]}
   */
  trim() {
    while (this.items.length > this.limit) {
      this.items.shift();
    }
    return this.items;
  }

  /**
   * Get shallow copy of stored items
   * @returns {any[]}
   */
  getItems() {
    return this.items.slice();
  }

  /**
   * Get first item
   * @returns {any}
   */
  getFirstItem() {
    return this.items[0];
  }

  /**
   * Get last item
   * @returns {any}
   */
  getLastItem() {
    return this.items[this.items.length - 1];
  }
}
