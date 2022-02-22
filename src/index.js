import { getWeatherAsync, activateSpinner } from './app.js';
import style from './style.css';

const search = document.querySelector('.search');
const weatherInput = document.querySelector('#weather-query');

search.addEventListener('click', function () {
  getWeatherAsync(weatherInput.value, 'metric');
  document.querySelector('#weather-query').value = '';
  activateSpinner();
});
