const weatherInput = document.querySelector('#weather-query');

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
  renderWeather(data.main.temp);
}

function renderWeather(data) {
  const weatherContainer = document.createElement('div');
  const location = document.createElement('p');

  document.querySelector('main').append(weatherContainer);
  weatherContainer.append();
  console.log(data);
}

// renderWeather();

weatherInput.addEventListener('change', function () {});

export {
  getWeatherAsync,
  // renderWeather };
};
