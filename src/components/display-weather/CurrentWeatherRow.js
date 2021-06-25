import React from 'react';
import { Paper } from '@material-ui/core';
import { ComponentStyles } from '../../styles/ComponentStyles';

export const CurrentWeatherRow = ({ data }) => {
  const forecastDate = new Date(data.dt * 1000).toLocaleDateString();
  const forecastTime = new Date(data.dt * 1000).toLocaleTimeString([], { timeStyle: 'short' });
  const classes = ComponentStyles();

  return (
    <Paper className={classes.weatherCard}>
      {/* Date mm-dd-yyyy */}
      <div className={classes.weatherInfoDate}>{forecastDate.toString()}</div>
      {/* Time in Hours */}
      <div className={classes.weatherInfoDate}>{forecastTime.toString()}</div>
      {/* Temperature in fahrenheit */}
      <div className={classes.weatherInfo}>{data.main.temp}°F</div>
      {/* Icon of weather conditions */}
      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather' />
      {/* Text of weather conditions */}
      <div className={classes.weatherInfo}>{data.weather[0].description}</div>
    </Paper>
  );
};
