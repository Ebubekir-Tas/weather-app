import React from 'react';
import { DailyWeatherRow } from './DailyWeatherRow';
import { ComponentStyles } from '../../styles/ComponentStyles';
import { sampleData } from '../../sampleData';

const dailyWeather = sampleData.list.filter((element, index) => index % 8 === 0);

export function DisplayWeather() {
  const classes = ComponentStyles();
  return (
    <div>
      <h1 className={classes.weatherHeader}>
        Weather in {sampleData.city.name}, {sampleData.city.country}:
      </h1>
      <div className={classes.weatherContainer}>
      {dailyWeather && dailyWeather.map((data, i) => (
        <DailyWeatherRow data={data} key={`${data}${i}`} />
      ))
      }
      </div>
    </div>
  )
};
