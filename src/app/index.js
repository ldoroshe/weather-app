import "./styles/index.css";
import { weatherDataProvider } from "./components/api/weather-service/providers/OpenWeatherMap/provider";
// import { weatherDataProvider } from "./components/api/weather-service/providers/FakeProvider/provider";
import DataStore from "./components/data/data-store/data-store";
import CurrentTemperature from "./components/ui/current-temperature/current-temperature";
import DotChart from "./components/ui/dot-chart/dot-chart";
import WeatherTable from "./components/ui/weather-table/weather-table";
import { DATAPOINTS_AMOUNT, WEATHER_DATA_REQUEST_TIMEOUT } from "./config";
import Logger from "./utils/logger/logger";

/**
 * Data store to keep track of weather data points.
 */
const datastore = new DataStore(DATAPOINTS_AMOUNT);

/**
 * UI component to display the current temperature.
 */
const currentTemperature = new CurrentTemperature(document.body);

/**
 * Chart component for visualizing data points.
 */
const chart = new DotChart(document.body, DATAPOINTS_AMOUNT);

/**
 * Table component to display weather data in a tabular format.
 */
const table = new WeatherTable(document.body, DATAPOINTS_AMOUNT, {
  temperature: "Temperature",
  date: "Date & Time",
});

/**
 * Fetches weather data using the provided provider function and applies callbacks to the data.
 * @param {Function} provider - Function to provide weather data.
 * @param {Function[]} callbacks - Array of callback functions to process the weather data.
 */
async function getWeatherData(provider, callbacks) {
  let weatherData;
  try {
    weatherData = await provider();
  } catch (error) {
    Logger.error("Weather data provider failed", error);
    return;
  }
  for (const cb of callbacks) {
    try {
      cb(weatherData);
    } catch (error) {
      Logger.error("Error executing callback", error);
    }
  }
}

/**
 * Schedules next call to getWeatherData after specified timeout
 */
const scheduleNextCall = () =>
  setTimeout(
    async () => await getWeatherData(weatherDataProvider, callbacks),
    WEATHER_DATA_REQUEST_TIMEOUT
  );

/**
 * Array of callback functions to be executed with the weather data.
 */
const callbacks = [
  datastore.add,
  currentTemperature.update,
  table.update,
  chart.update,
  scheduleNextCall,
];

getWeatherData(weatherDataProvider, callbacks);
