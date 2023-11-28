/**
 * Extension for logging
 * @param {string} logMessage
 * @param  {...any} logs
 */
export function reportLog(logMessage, ...logs) {
  console.log(logMessage, ...logs);
}
