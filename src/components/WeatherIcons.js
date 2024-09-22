// WeatherIcons.js
import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiFog, WiThunderstorm, WiDust } from 'react-icons/wi';
import sunny from '../assets/images/sunny.jpeg';
import cloudy from '../assets/images/cloudy.jpg';
import rainy from '../assets/images/rainy.jpg';
import snow from '../assets/images/snow.jpeg';
import foggy from '../assets/images/foggy.jpeg';
import storm from '../assets/images/storm.jpeg';
import mist from '../assets/images/mist.jpeg';
import './WeatherIcons.css';

const WeatherIcons = ({ weather }) => {
  let backgroundImage;
  let IconComponent;

  switch (weather.toLowerCase()) {
    case 'clear':
    case 'sunny':
      backgroundImage = sunny;
      IconComponent = <WiDaySunny size={64} />;
      break;
    case 'clouds':
      backgroundImage = cloudy;
      IconComponent = <WiCloudy size={64} />;
      break;
    case 'rain':
      backgroundImage = rainy;
      IconComponent = <WiRain size={64} />;
      break;
    case 'snow':
      backgroundImage = snow;
      IconComponent = <WiSnow size={64} />;
      break;
    case 'fog':
      backgroundImage = foggy;
      IconComponent = <WiFog size={64} />;
      break;
    case 'thunderstorm':
      backgroundImage = storm;
      IconComponent = <WiThunderstorm size={64} />;
      break;
    case 'mist':
      backgroundImage = mist;
      IconComponent = <WiDust size={64} />;
      break;
    default:
      backgroundImage = cloudy; // Fallback
      IconComponent = <WiCloudy size={64} />;
  }

  return (
    <div className="weather-icon" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="icon-container">{IconComponent}</div>
      <p>{weather}</p>
    </div>
  );
};

export default WeatherIcons;
