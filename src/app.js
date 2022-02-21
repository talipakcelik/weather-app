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

  console.log(data.main);
}

weatherInput.addEventListener('change', function () {
  getWeatherAsync();
});

export { getWeatherAsync };
