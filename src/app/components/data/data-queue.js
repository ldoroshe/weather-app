/**
 * Adding element to data queue
 * As data queue here is an array implementation is trivial
 * @param {any[]} dataQueue
 * @param {any} element
 * @returns {any[]}
 */
export function addToDataQueue(dataQueue, element) {
  dataQueue.push(element);
  return dataQueue;
}

/**
 * Trims data queue to last X elements
 * @param {any[]} dataQueue
 * @param {number} limit
 * @returns {any[]}
 */
export function trimDataQueue(dataQueue, limit) {
  while (dataQueue.length > limit) {
    dataQueue.shift();
  }
  return dataQueue;
}
