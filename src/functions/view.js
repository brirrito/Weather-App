import logic from "./logic";

const view = (() => {
  function setSearchResult(weatherData) {
    if (!weatherData) return;

    const searchResult = document.getElementById('searchResult');
    searchResult.classList.add('active');

    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const feelsLike = document.getElementById('feelsLike');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    cityName.textContent = `${weatherData.cityName}`;
    temperature.textContent = `${Math.round(1.8 * weatherData.temperature + 32)}°F`;
    feelsLike.textContent = `Feels like: ${Math.round(1.8 * weatherData.feelsLike + 32)}°F`;
    humidity.textContent = `Humidity: ${weatherData.humidity}%`;
    wind.textContent = `Wind: ${Math.round(10 * weatherData.windSpeed * 0.62137) / 10 } m/h`;
  }

  return { setSearchResult };
})();

export default view;
