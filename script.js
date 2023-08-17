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
              const data = await response.json();
            //   console.log(data);
              renderWeatherData(data);

        }
             catch (error) {
                weatherContainer.innerHTML = 'Error fetching weather data';
            }
        }

        function renderWeatherData(data) {

            const weatherDetails = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
            const feelsLike = (data.main.feels_like - 273.15).toFixed(2); // Convert Kelvin to Celsius

            const weatherInfo = `
                <h2><b>Today weather in ${data.name} </b></h2>
                <p><b>Weather:<b> ${weatherDetails}</p>
                <p><b>Temperature:<b> ${temperature}°C</p>
                <p><b>Feels Like:<b> ${feelsLike}°C</p>
                <p><b>Humidity:</b> ${data.main.humidity} %</p>
                <p><b>Pressure:</b> ${data.main.pressure} hPa</p>
                <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>
            `;

            weatherContainer.innerHTML = weatherInfo;

            }
        

        
            
    
   