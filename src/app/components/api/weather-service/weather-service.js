/**
 * Builds URL string from provided template and values according to substitution map
 * @param {string} urlTemplate
 * @param {import("./types").SubstitutionMap} substitutionMap
 * @param {import("./types").WeatherAPIUrlParameters} parameters
 * @returns {string}
 */
export function weatherAPIUrlBuilder(urlTemplate, substitutionMap, parameters) {
  for (const [field, token] of Object.entries(substitutionMap)) {
    urlTemplate = urlTemplate.replace(token, parameters[field]);
  }
  return urlTemplate;
}
