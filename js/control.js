import * as model from './model.js';
import weatherView from './weatherView.js';
import WeatherView from './weatherView.js';
const controlWeather = async function (city) {
  try {
    await model.loadWeatherData(city);
    WeatherView._render(model.weatherState);
  } catch (err) {
    console.error(err);
    weatherView._renderError(err.message + ' :(');
  }
};
WeatherView._handleEvent(controlWeather);
