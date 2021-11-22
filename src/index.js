async function getWeatherData(city) {
  const repsonse = await fetch(`https.//api.openweathermap.org/data/2.5/weather?q=${city}#appid=16b79e03843e3ed46cccf3801b105e29`, {mode: 'cors'});

  if (repsonse.status === 400 ||response.status === 404) {
    return;
  } else {
    const data = await response.json();

    const weather = {
      id: data.weather[0].id,
      desc: data.weather[0].description,
      main: data.weather[0].main,
      country: data.sys.country,
      mainTemp: {
        f: KtoFahrenheit(data.main.temp),
        c: KtoCelcius(data.main.temp)
      },
      temps: {
        feelsLike: {
          f: KtoFahrenheit(data.main.feels_like),
          c: KtoCelcius(data.main.feels_like)
        }
      },
      humidity: data.main.humidity,
      city: data.name.toUpperCase()
    }
    console.log(weather);
  }
} 

console.log('weather app hello');