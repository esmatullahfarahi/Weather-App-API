        const apiKey = '80f377adeb39dc03cb3728fe5e98893d';
        const weatherContainer = document.getElementById('weather-info');
        const searchButton = document.getElementById('search-button');
        const cityInput = document.getElementById('city-input');

        searchButton.addEventListener('click', () => {
            const city = cityInput.value;
           fetchWeatherData(city);
        });


      async function fetchWeatherData(city) {
        try{
              const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
              const response = await fetch(url);

         if (response.status === 404) {
            const errorMessage = await response.json();
            weatherContainer.innerHTML = `" '${(capitalize(city))}' ${errorMessage.message}. Please enter a valid city name." `
            return;
        }
          const data = await response.json();
          
          renderWeatherData(data);
         } catch (error) {
        weatherContainer.innerHTML = 'Error fetching weather data';
        }
}

        function renderWeatherData(data) {

            const weatherDetails = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
            const feelsLike = (data.main.feels_like - 273.15).toFixed(2); // Convert Kelvin to Celsius
           const weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

            const weatherInfo = `
             <div class="weather-background">
            <h2>Current weather in ${data.name}</h2>
            <img src="${weatherIcon}" alt="Weather Icon">
          </div>
             <p><b>Weather:</b> ${weatherDetails}</p>
             <p><b>Temperature:</b> ${temperature}°C</p>
             <p><b>Feels Like:</b> ${feelsLike}°C</p>
             <p><b>Humidity:</b> ${data.main.humidity} %</p>
             <p><b>Pressure:</b> ${data.main.pressure} hPa</p>
            <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>  `;

           weatherContainer.innerHTML = weatherInfo;
           weatherContainer.style.display = "block";
           

}

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}