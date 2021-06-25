import React from 'react';
import { data } from '../sampleData';

const dailyWeather = data.list.filter((e, index) => index % 8 === 0);

const allweather = (e) => {
  const forecastDate = new Date(e.dt * 1000).toLocaleDateString();
  return (
    <div>
      <div>description: {e.weather[0].description}</div>
      temp: {e.main.temp}
      <div>date: {forecastDate.toString()}</div>
      <img src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} alt="weather" />
      <hr />
    </div>
  );
};

export function DisplayWeather() {
  return (
    <div>
      <h1>
        Weather in {data.city.name}:
      </h1>
      {data && dailyWeather.map(allweather)}
    </div>

  )
};
