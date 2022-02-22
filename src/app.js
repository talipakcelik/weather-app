const weatherContainer = document.querySelector('.weather-container');
const location = document.querySelector('.location');
const temp = document.querySelector('.temp');
const icon = document.querySelector('.icon');
const descriptionContainer = document.querySelector('.description-container');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const visibility = document.querySelector('.visibility');
const spinner = document.getElementById('spinner');

async function getWeatherAsync(location, unit) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=027a1065ba3125e88ef0663d3b8231e9`,
      {
        mode: 'cors',
      }
    );

    let data = await response.json();

    if (data.cod === '404') {
      deactivateSpinner();
      renderError(data.message);
    } else if (data.cod === '400') {
      deactivateSpinner();
      renderError(data.message);
    } else {
      deactivateSpinner();
      renderWeather(data);
    }
  } catch (err) {
    deactivateSpinner();
    renderError(err.message);
  }
}

function renderError(message) {
  weatherContainer.style.display = '';
  location.textContent = message;
  icon.style.display = 'none';
  descriptionContainer.style.display = 'none';
  temp.style.display = 'none';
}

function renderWeather(data) {
  weatherContainer.style.display = '';
  icon.style.display = '';
  descriptionContainer.style.display = '';
  temp.style.display = '';
  location.textContent = `${data.name}, ${data.sys.country}`;
  temp.textContent = `${parseInt(data.main.temp)}°C`;
  description.textContent = `Feels like ${parseInt(data.main.feels_like)}°C, ${
    data.weather[0].description
  }.`;
  icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  visibility.textContent = `Visibility: ${String(data.visibility).charAt(
    0
  )}${String(data.visibility).charAt(1)} km`;
}

function activateSpinner() {
  spinner.removeAttribute('hidden');
}

function deactivateSpinner() {
  spinner.setAttribute('hidden', '');
}

export { getWeatherAsync, activateSpinner };
