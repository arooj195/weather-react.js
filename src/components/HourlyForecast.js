import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HourlyForecast.css';

const HourlyForecast = ({ city }) => {
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const fetchHourlyData = async () => {
      const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        setHourlyData(response.data.list.slice(0, 5)); // Next 5 hours
      } catch (error) {
        console.error(error);
      }
    };
    fetchHourlyData();
  }, [city]);

  return (
    <div className="hourly-forecast">
      <h3>Hourly Forecast</h3>
      <div className="forecast-cards">
        {hourlyData.map((hour, index) => (
          <div key={index} className="forecast-card">
            <p>{new Date(hour.dt_txt).getHours()}:00</p>
            <p>{hour.main.temp}°C</p>
            <p>{hour.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
