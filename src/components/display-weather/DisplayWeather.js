import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { DailyWeatherRow } from './DailyWeatherRow';
import { CurrentWeatherRow } from './CurrentWeatherRow';
import { Styles } from '../../styles/Styles';
import { sampleData } from '../../sampleData';

const dailyWeather = sampleData.list.filter((element, index) => index % 8 === 0);
const currentWeather = sampleData.list.filter((element, index) => index < 5);

export function DisplayWeather() {
  const [toggleWeatherView, setToggleWeatherView] = useState(true);
  const classes = Styles();
  return (
    <div>
      {/* Display Location */}
      <h1 className={classes.weatherHeader}>
        {sampleData.city.name}, {sampleData.city.country}
      </h1>

      {/* Toggle between viewing daily and hourly forecast */}
      {
        toggleWeatherView ?
          // Forecast of next 5 days 
          <div className={classes.weatherContainer}>
            {dailyWeather && dailyWeather.map((data, i) => (
              <DailyWeatherRow data={data} key={`${data}${i}`} />
            ))
            }
          </div>
          :
          //Forecast of current day 
          <div className={classes.weatherContainer}>
            {currentWeather && currentWeather.map((data, i) => (
              <CurrentWeatherRow data={data} key={`${data}${i}`} />
            ))
            }
          </div >
      }
      <Button
        className={classes.toggleButton}
        onClick={() => setToggleWeatherView(!toggleWeatherView)}
      >
        View {toggleWeatherView ? 'Hourly' : 'Daily'} Forecast
      </Button>
    </div>
  );
};
