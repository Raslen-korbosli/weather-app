import { API_URL, API_KEY } from './config.js';
export const weatherState = {
  city: '',
  weather: {},
};
export const loadWeatherData = async function (city) {
  try {
    const response = await fetch(
      `${API_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    console.log(data);
    weatherState.city = data.name;
    weatherState.weather = {
      temp: Math.round(data.main.temp),
      humidity: data.main.humidity,
      status: data.weather[0].main.toLowerCase(), // 7alet ta9es
      wind: data.wind.speed,
    };

    console.log(weatherState);
  } catch (err) {
    throw err;
  }
};
