 import React from 'react';

const RadarMap = ({ city }) => {
  const radarUrl = `https://embed.windy.com/embed2.html?lat=24.5&lon=71.5&detailLat=25.0&detailLon=71.0&width=650&height=450&zoom=5&level=surface&overlay=rain&product=radar&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1`;

  return (
    <div className="radar-map">
      <iframe src={radarUrl} width="100%" height="450" frameBorder="0"></iframe>
    </div>
  );
};

export default RadarMap;

