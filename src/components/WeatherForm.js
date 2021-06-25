import React, { useState } from 'react';
import { ComponentStyles } from '../styles/ComponentStyles';
import { IconButton, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useFormik } from 'formik';

export function WeatherForm() {
  const [searchCity, setSearchCity] = useState('');
  const classes = ComponentStyles();

  const WEATHER_API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;
  const APIURL = `api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${WEATHER_API_KEY}`;

  const weatherForm = useFormik({
    initialValues: {
      city: ''
    },
    onSubmit: e => {
      setSearchCity(e.city);
    }
  });

  return (
    <div>
      <form onSubmit={weatherForm.handleSubmit} className={classes.formStyles}>
        <TextField
          autoFocus
          color="secondary"
          label="Enter a City"
          id="city"
          name="city"
          type="text"
          onChange={weatherForm.handleChange}
          value={weatherForm.values.city}
          InputProps={{ 
            className: classes.textField,
            endAdornment: <IconButton type="submit"><Search /></IconButton> 
          }}
        />

      </form>
    </div>
  )
};
