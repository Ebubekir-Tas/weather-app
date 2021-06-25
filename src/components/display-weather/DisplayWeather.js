import React from 'react';
import { DailyWeatherRow } from './DailyWeatherRow';
import { CurrentWeatherRow } from './CurrentWeatherRow';
import { ComponentStyles } from '../../styles/ComponentStyles';
import { sampleData } from '../../sampleData';

const dailyWeather = sampleData.list.filter((element, index) => index % 8 === 0);
const currentWeather = sampleData.list.filter((element, index) => index < 5);

export function DisplayWeather() {
  const classes = ComponentStyles();
  return (
    <div>
      {/* Display Location */}
      <h1 className={classes.weatherHeader}>
        {sampleData.city.name}, {sampleData.city.country}
      </h1>

      {/* Forecast of current day */}
      <div className={classes.weatherContainer}>
        {currentWeather && currentWeather.map((data, i) => (
          <CurrentWeatherRow data={data} key={`${data}${i}`} />
        ))
        }
      </div >

      {/* Forecast of next 5 days */}
      <div className={classes.weatherContainer}>
        {dailyWeather && dailyWeather.map((data, i) => (
          <DailyWeatherRow data={data} key={`${data}${i}`} />
        ))
        }
      </div>
    </div>
  );
};
