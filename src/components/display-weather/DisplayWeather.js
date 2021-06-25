import React from 'react';
import { DailyWeatherRow } from './DailyWeatherRow';
import { sampleData } from '../../sampleData';

const dailyWeather = sampleData.list.filter((element, index) => index % 8 === 0);

export function DisplayWeather({ e }) {
  return (
    <div>
      <h1>
        Weather in {sampleData.city.name}:
      </h1>
      {/* <DailyWeather /> */}
      {dailyWeather && dailyWeather.map(data => (
        <DailyWeatherRow data={data} />
      ))
      }
    </div>
  )
};
