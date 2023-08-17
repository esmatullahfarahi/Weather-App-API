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
              console.log(data);
        }
             catch (error) {
                weatherContainer.innerHTML = 'Error fetching weather data';
            }
        }

            
    
   