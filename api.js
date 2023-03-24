const axios = require('axios');

const fetchWeatherData = async () => {
    const { data } = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=868cc7dbcc306312dfd6a00c57d0fd6a&units=metric'
    );
    console.log(data);
};

fetchWeatherData();