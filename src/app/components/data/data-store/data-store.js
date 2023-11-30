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
    this.add = (/** @type {any} */ item) => this._add(item);
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
   * Get shallow copy of stored items
   * @returns {any[]}
   */
  getItems() {
    return this.items.slice();
  }
}
