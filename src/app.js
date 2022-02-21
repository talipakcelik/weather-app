const weatherInput = document.querySelector('#weather-query');
const weatherContainer = document.querySelector('.weather-container');
const location = document.querySelector('.location');
const temp = document.querySelector('.temp');
const icon = document.querySelector('.icon');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const visibility = document.querySelector('.visibility');
const maxTemp = document.querySelector('.max-temp');

function getWeather() {
  fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=Ankara&appid=027a1065ba3125e88ef0663d3b8231e9'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

async function getWeatherAsync() {
  let response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${weatherInput.value}&units=metric&appid=027a1065ba3125e88ef0663d3b8231e9`
  );

  let data = await response.json();

  console.log(data);
  console.log(data.main);
  // weatherData = data.main.temp;
  renderWeather(data);
  console.log(data.weather[0].icon);
}

function renderWeather(data) {
  weatherContainer.style.display = '';
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

// renderWeather();

weatherInput.addEventListener('change', function () {});

export {
  getWeatherAsync,
  // renderWeather };
};
