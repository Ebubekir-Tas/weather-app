import React, { useState } from 'react';
import { ComponentStyles } from '../styles/ComponentStyles';
import { Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';

export function WeatherForm() {
  const [searchCity, setSearchCity] = useState('')

  const classes = ComponentStyles();

  const WEATHER_API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`
  const APIURL = `api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${WEATHER_API_KEY}`

  const weatherForm = useFormik({
    initialValues: {
      city: ''
    },
    onSubmit: e => { setSearchCity(e.city); console.log(APIURL) }
  });

  return (
    <div>
      <form onSubmit={weatherForm.handleSubmit}>
        <label htmlFor="city">Search for city: </label>
        <TextField
          color="primary"
          variant="outlined"
          label="Search For City"
          id="city"
          name="city"
          type="text"
          onChange={weatherForm.handleChange}
          value={weatherForm.values.city}
        />
        <Button className={classes.btn} type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  )
};
