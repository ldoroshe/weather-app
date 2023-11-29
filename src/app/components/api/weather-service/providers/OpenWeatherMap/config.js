import { WEATHER_API_KEY } from "../../../../../secret.js";

/**
 * URL string template for OpenWeatherMap Weather API
 * @type string
 */
export const API_URL_TEMPLATE =
  "https://api.openweathermap.org/data/2.5/weather?lat=%LAT%&lon=%LON%&units=%UNITS%&appid=%KEY%";

/**
 * @typedef {import('./types.js').SubstitutionMap} SubstitutionMap
 */
/**
 * Substitution map for OpenWeatherMap Weather API URL template tokens
 * @type {SubstitutionMap}
 */
export const SUBSTITUTION_MAP = {
  longitude: "%LON%",
  latitude: "%LAT%",
  units: "%UNITS%",
  secretKey: "%KEY%",
};

/**
 * Hardcoded values to populate API URL template
 * @todo Add location selector
 * @type {SubstitutionMap}
 */
export const config = {
  longitude: "4.33",
  latitude: "55.89",
  units: "metric",
  secretKey: WEATHER_API_KEY,
};
