/**
 * Extension for error reporting
 * @param {string} errorMessage
 * @param  {...any} errors
 */
export function reportError(errorMessage, ...errors) {
  console.error(errorMessage, ...errors);
}
