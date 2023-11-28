/**
 * URL string template for OpenWeatherMap Weather API
 * @type string
 */
export const API_URL_TEMPLATE =
  "https://api.openweathermap.org/data/2.5/weather?lat=%LAT%&lon=%LON%&units=%UNITS%&appid=%KEY%";

/**
 * @typedef {import('../../types.js').SubstitutionMap} SubstitutionMap
 */
/**
 * Substitution map for OpenWeatherMap Weather API URL template
 * @type {SubstitutionMap}
 */
export const SUBSTITUTION_MAP = {
  longitude: "%LON%",
  latitude: "%LAT%",
  units: "%UNITS%",
  secretKey: "%KEY%",
};
