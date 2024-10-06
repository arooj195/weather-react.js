// Weather.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherIcons from './WeatherIcons';
import WeatherDetails from './WeatherDetails';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';
import RadarMap from './RadarMap';
import './Weather.css';

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  // Fetch weather data based on the city
  useEffect(() => {
    const fetchWeatherData = async () => {
      const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY; // Replace with your OpenWeather API key
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return (
    <div className="weather-container">
      {weatherData && (
        <div className="weather-content">
          {/* Display city name */}
          <h2>{weatherData.name}</h2>
          
          {/* Display weather icons based on current weather */}
          <WeatherIcons weather={weatherData.weather[0].main} />
          
          {/* Display weather details */}
          <WeatherDetails weatherData={weatherData} />
          
          {/* Hourly and daily forecast components */}
          <HourlyForecast city={city} />
          <DailyForecast city={city} />
          
          {/* Radar map for the selected city */}
          <RadarMap city={city} />
        </div>
      )}
    </div>
  );
};

export default Weather;
