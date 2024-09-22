import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DailyForecast.css';

const DailyForecast = ({ city }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchDailyData = async () => {
      const API_KEY = '65f48ce87f9f73fca5f9ea14fecd6a27';
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${API_KEY}&units=metric&cnt=7`
        );
        setDailyData(response.data.list);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDailyData();
  }, [city]);

  return (
    <div className="daily-forecast">
      <h3>Weekly Forecast</h3>
      <div className="forecast-cards">
        {dailyData.map((day, index) => (
          <div key={index} className="forecast-card">
            <p>{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</p>
            <p>{day.temp.day}°C</p>
            <p>{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
