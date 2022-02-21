import { getWeatherAsync, renderWeather } from './app.js';
import style from './style.css';
// getWeatherAsync();

const search = document.querySelector('.search');

search.addEventListener('click', function () {
  getWeatherAsync();
});
