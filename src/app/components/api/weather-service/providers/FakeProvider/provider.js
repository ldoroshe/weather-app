/**
 * Weather data provider for OpenWeatherMap
 * @returns {import("../../../../types.js").WeatherAppDataPoint}
 */
export function weatherDataProvider() {
  const randomTemp =
    Math.round((23 + Math.random() * 0.5 - Math.random() * 0.5) * 100) / 100;
  return {
    temperature: randomTemp,
    date: new Date().toLocaleString(),
  };
}
