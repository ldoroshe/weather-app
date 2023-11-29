import Logger from "../../../../../utils/logger/logger";
import { fetchJSONFromURL, normaliseURL } from "../../../../../utils/helpers";
import { API_URL_TEMPLATE, SUBSTITUTION_MAP, config } from "./config";

/**
 * Weather API Endpoint URL string
 * @type {string}
 */
const weatherAPIUrlString = weatherAPIUrlBuilder(
  API_URL_TEMPLATE,
  SUBSTITUTION_MAP,
  config
);

/**
 * Weather API Endpoint URL
 * @type {URL}
 */
const weatherAPIUrl = normaliseURL(weatherAPIUrlString);

/**
 * Builds URL string from provided template and values according to substitution map
 * @param {string} urlTemplate
 * @param {import("./types").SubstitutionMap} substitutionMap
 * @param {import("./types").WeatherAPIUrlParameters} parameters
 * @returns {string}
 */
function weatherAPIUrlBuilder(urlTemplate, substitutionMap, parameters) {
  for (const [field, token] of Object.entries(substitutionMap)) {
    urlTemplate = urlTemplate.replace(token, parameters[field]);
  }
  return urlTemplate;
}

/**
 * Extract necessary fields from API response
 * @param {import("./types").WeatherData} weatherData
 * @returns {import("src/app/components/types").WeatherAppDataPoint}
 */
function prepareWeatherData(weatherData) {
  try {
    return {
      temperature: weatherData.main.temp,
      date: new Date().toLocaleString(),
    };
  } catch (error) {
    Logger.error("Received weather data not correct", error);
  }
}

/**
 * Weather data provider for OpenWeatherMap
 * @returns {Promise<import("src/app/components/types").WeatherAppDataPoint>}
 */
export async function weatherDataProvider() {
  /**
   * @type {import("./types").WeatherData}
   */
  const rawData = await fetchJSONFromURL(weatherAPIUrl);
  return prepareWeatherData(rawData);
}
