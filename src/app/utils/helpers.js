import Logger from "./logger/logger";
/**
 * Fetch JSON from provided endpoint
 * @param {URL} url
 * @returns {Promise<JSON>}
 */
export async function fetchJSONFromURL(url, options = {}) {
  const response = await fetch(url, options);
  try {
    return await response.json();
  } catch (error) {
    Logger.error("Response is not in JSON format", error);
  }
}

/**
 * Convert URL string to URL object to catch incorrectly formed URLs
 * @param {URL|string} url
 * @returns {URL}
 */
export function normaliseURL(url) {
  if (url instanceof URL) return url;
  try {
    url = new URL(url);
    return url;
  } catch (error) {
    Logger.error("Provided URL is not valid", error);
  }
}