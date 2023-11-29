/**
 * @typedef {Object} Coordinate
 * @property {number} lon - Longitude of the location.
 * @property {number} lat - Latitude of the location.
 */

/**
 * @typedef {Object} WeatherCondition
 * @property {number} id - Weather condition id.
 * @property {string} main - Group of weather parameters (Rain, Snow, Clouds, etc.).
 * @property {string} description - Weather condition within the group.
 * @property {string} icon - Weather icon id.
 */

/**
 * @typedef {Object} MainInfo
 * @property {number} temp - Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 * @property {number} feels_like - Temperature accounting for human perception. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 * @property {number} pressure - Atmospheric pressure on the sea level, hPa.
 * @property {number} humidity - Humidity, %.
 * @property {number} temp_min - Minimum currently observed temperature, Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 * @property {number} temp_max - Maximum currently observed temperature, Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 * @property {number} sea_level - Atmospheric pressure on the sea level, hPa.
 * @property {number} grnd_level - Atmospheric pressure on the ground level, hPa.
 */

/**
 * @typedef {Object} Wind
 * @property {number} speed - Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
 * @property {number} deg - Wind direction, degrees (meteorological).
 * @property {number} gust - Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
 */

/**
 * @typedef {Object} Clouds
 * @property {number} all - Cloudiness, %.
 */

/**
 * @typedef {Object} Precipitation
 * @property {number} [1h] - Volume for the last 1 hour, mm.
 * @property {number} [3h] - Volume for the last 3 hours, mm.
 */

/**
 * @typedef {Object} SystemInfo
 * @property {number} type - Internal parameter.
 * @property {number} id - Internal parameter.
 * @property {number} message - Internal parameter.
 * @property {string} country - Country code (GB, JP, etc.).
 * @property {number} sunrise - Sunrise time, unix, UTC.
 * @property {number} sunset - Sunset time, unix, UTC.
 */

/**
 * @typedef {Object} WeatherData - descripts OpenWeatherMap 2.5 API response
 * @see {@link https://openweathermap.org/current#fields_json}
 * @property {Coordinate} coord - Coordinates of the location.
 * @property {WeatherCondition[]} weather - Array of weather conditions.
 * @property {string} base - Internal parameter.
 * @property {MainInfo} main - Main weather information.
 * @property {number} visibility - Visibility in meters. Maximum value is 10 km.
 * @property {Wind} wind - Wind information.
 * @property {Clouds} clouds - Cloudiness information.
 * @property {Precipitation} [rain] - Rain information.
 * @property {Precipitation} [snow] - Snow information.
 * @property {number} dt - Time of data calculation, unix, UTC.
 * @property {SystemInfo} sys - System-related information.
 * @property {number} timezone - Shift in seconds from UTC.
 * @property {number} id - City ID.
 * @property {string} name - City name.
 * @property {number} cod - Internal parameter.
 */

/**
 * @typedef {Object} SubstitutionMap
 * @property {string} longitude
 * @property {string} latitude
 * @property {string} [units]
 * @property {string} secretKey
 */

/**
 * @typedef {Object} WeatherAPIUrlParameters
 * @property {string} longitude
 * @property {string} latitude
 * @property {string} [units]
 * @property {string} secretKey
 */

export {};
