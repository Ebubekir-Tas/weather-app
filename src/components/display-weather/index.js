import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Styles } from '../../styles/Styles';
import { WeatherDataRow } from './WeatherData';

export function DisplayWeather({ cityData }) {
  const [toggleWeatherView, setToggleWeatherView] = useState(true);
  const [dailyWeather, setDailyWeather] = useState('');
  const [hourlyWeather, setHourlyWeather] = useState('');
  const classes = Styles();

  // Set custom weather data options based on city data
  useEffect(() => {
    cityData &&
      setDailyWeather(cityData?.list.filter((element, index) => index % 8 === 0));
    setHourlyWeather(cityData?.list.filter((element, index) => index < 5));
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
            <WeatherDataRow data={data} key={`${data}${i}`} toggleWeatherView={toggleWeatherView} />
          ))
          }
        </div>
        :
        //Forecast of current day 
        <div className={classes.weatherContainer}>
          {hourlyWeather && hourlyWeather.map((data, i) => (
            <WeatherDataRow data={data} key={`${data}${i}`} toggleWeatherView={toggleWeatherView} />
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
