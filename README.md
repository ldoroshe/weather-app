# Weather App

Simple weather app written in vanilla JavaScript. Uses webpack because of dev server.

Requires OpenWeatherMap API key. Please, get a key, and create file at **src/app/secret.js**
with content
`export const WEATHER_API_KEY = "HERE GOES YOUR API KEY";`

To run:

1. Clone this repository
2. Within the **weather-app** directory execute **npm install**
3. Execute **npm start**

Location coordinates for OpenWeatherMap provider hardcoded in **src/app/components/api/weather-service/providers/OpenWeatherMap/config.js**.

Amount of stored requests and duration between requests defined in **src/app/config.js**.
