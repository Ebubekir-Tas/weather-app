import React from 'react';
import { DailyWeatherRow } from './DailyWeatherRow';
import { ComponentStyles } from '../../styles/ComponentStyles';
import { sampleData } from '../../sampleData';

const dailyWeather = sampleData.list.filter((element, index) => index % 8 === 0);

export function DisplayWeather() {
  const classes = ComponentStyles();
  return (
    <div>
      <h1>
        Weather in {sampleData.city.name}:
      </h1>
      <div className={classes.weatherContainer}>
      {dailyWeather && dailyWeather.map(data => (
        <DailyWeatherRow data={data} />
      ))
      }
      </div>
    </div>
  )
};
