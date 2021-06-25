import React from 'react';
import { Paper } from '@material-ui/core';
import { ComponentStyles } from '../../styles/ComponentStyles'

export const DailyWeatherRow = ({ data }) => {
  const forecastDate = new Date(data.dt * 1000).toLocaleDateString();
  const forecastDay = new Date(data.dt * 1000).getDay();
  const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const classes = ComponentStyles();

  return (
    <Paper className={classes.weatherCard}>
      <div className={classes.weatherInfoDate}>{forecastDate.toString()}</div>
      <div className={classes.weatherInfo}>{daysOfWeek[forecastDay]}</div>
      <div className={classes.weatherInfo}>{data.main.temp}°F</div>
      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather" />
      <div className={classes.weatherInfo}>{data.weather[0].description}</div>

    </Paper>
  );
};
