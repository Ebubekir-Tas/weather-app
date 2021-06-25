import React from 'react';
import { Paper, useMediaQuery } from '@material-ui/core';
import { Styles } from '../../styles/Styles';

export const WeatherDataRow = ({ data, toggleWeatherView }) => {
  const forecastDate = new Date(data.dt * 1000).toLocaleDateString();
  const forecastTime = new Date(data.dt * 1000).toLocaleTimeString([], { timeStyle: 'short' });
  const forecastDay = new Date(data.dt * 1000).getDay();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const desktopView = useMediaQuery('(min-width:960px)');
  const classes = Styles();
  return (
    <Paper className={classes.weatherCard}>
      {desktopView ?
        // If in desktop view
        <>
          {/* Date mm-dd-yyyy */}
          <div className={classes.weatherInfoDate}>{forecastDate.toString()}</div>
          {/* Day of the Week or Time of Day */}
          <div className={classes.weatherInfoDate}>{toggleWeatherView ? daysOfWeek[forecastDay] : forecastTime.toString()}</div>
          {/* Temperature */}
          <div className={classes.weatherInfo}>{data.main.temp}°F</div>
          {/* Icon of weather conditions */}
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather' />
          {/* Text of weather conditions */}
          <div className={classes.weatherInfo}>{data.weather[0].description}</div>
        </>
        :
        // If in tablet/mobile view
        <>
          <div className={classes.weatherInfoDate}>
            {forecastDate.toString()} - {toggleWeatherView ? daysOfWeek[forecastDay] : forecastTime.toString()}
          </div>
          <div className={classes.weatherInfo}>{data.main.temp}°F</div>
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather' />
          <div className={classes.weatherInfo}>{data.weather[0].description}</div>
        </>
      }
    </Paper>
  );
};
