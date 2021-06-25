import React, { useState } from 'react';
import { ComponentStyles } from '../styles/ComponentStyles';
import { IconButton, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useFormik } from 'formik';

export function WeatherForm() {
  // Value of city searched
  const [searchCity, setSearchCity] = useState('');
  // Check if input value is empty
  const [inputValueBool, setInputValueBool] = useState(false);
  const classes = ComponentStyles();

  // API keys
  const WEATHER_API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;
  const APIURL = `api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${WEATHER_API_KEY}`;

  // Formik values
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
      <form
        onSubmit={weatherForm.handleSubmit}
        className={classes.formStyles}
      >
        {/* Search City Text Field */}
        <TextField
          color='secondary'
          label='Enter a City'
          id='city'
          name='city'
          type='text'
          onChange={weatherForm.handleChange}
          value={weatherForm.values.city}
          inputRef={(input) => {
            // If value of input is empty
            if (input?.value.length > 0) {
              setInputValueBool(true)
            } else {
              setInputValueBool(false)
            };
          }}
          InputProps={{
            className: classes.textField,
            // Search icon in text field.
            endAdornment:
              <IconButton type='submit'>
                {/* Styled only if textfield has user input */}
                <Search className={inputValueBool && classes.searchIcon} />
              </IconButton>
          }}
        />
      </form>
    </div>
  );
};
