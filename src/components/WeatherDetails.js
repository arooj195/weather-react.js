// WeatherDetails.js
import React from 'react';
import './WeatherDetails.css';

const WeatherDetails = ({ weatherData }) => {
  const { main, wind, sys } = weatherData;

  return (
    <div className="weather-details">
      <div className="detail-card">
        <h4>Temperature</h4>
        <p>{main.temp}°C</p>
      </div>
      <div className="detail-card">
        <h4>Humidity</h4>
        <p>{main.humidity}%</p>
      </div>
      <div className="detail-card">
        <h4>Wind Speed</h4>
        <p>{wind.speed} m/s</p>
      </div>
      <div className="detail-card">
        <h4>Pressure</h4>
        <p>{main.pressure} hPa</p>
      </div>
      <div className="detail-card">
        <h4>Sunrise</h4>
        <p>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
      </div>
      <div className="detail-card">
        <h4>Sunset</h4>
        <p>{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
