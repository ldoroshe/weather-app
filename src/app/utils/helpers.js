import Logger from "./logger/logger";
/**
 * Fetch JSON from provided endpoint
 * @param {URL} url
 * @returns {Promise<Object>}
 */
export async function fetchJSONFromURL(url, options = {}) {
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    Logger.error(
      "Either network request failed or its response unexpected",
      error
    );
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
