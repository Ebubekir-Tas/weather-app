import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { DailyWeatherRow } from './DailyWeatherRow';
import { CurrentWeatherRow } from './CurrentWeatherRow';
import { Styles } from '../../styles/Styles';

export function DisplayWeather({ cityData }) {
  const [toggleWeatherView, setToggleWeatherView] = useState(true);
  const [dailyWeather, setDailyWeather] = useState('');
  const [currentWeather, setCurrentWeather] = useState('');
  const classes = Styles();

  // Set custom weather data options based on city data
  useEffect(() => {
    cityData &&
      setDailyWeather(cityData?.list.filter((element, index) => index % 8 === 0));
    setCurrentWeather(cityData?.list.filter((element, index) => index < 5));
  }, [cityData]);
  return (
    <div>
      {/* Display Location */}
      {cityData &&
        <h1 className={classes.weatherHeader}>
          {cityData?.city.name}, {cityData?.city.country}
        </h1>
      }

      {/* Toggle between viewing daily and hourly forecast */}
      {toggleWeatherView ?
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
      {cityData ?
        <Button
          className={classes.toggleButton}
          onClick={() => setToggleWeatherView(!toggleWeatherView)}
        >
          View {toggleWeatherView ? 'Hourly' : 'Daily'} Forecast
        </Button>
        :
        <h1 className={classes.weatherInfo}>
          <div>
            Enter a city to view its weather.
          </div>
          Examples: Manhattan, London, Paris.
        </h1>
      }
    </div>
  );
};
