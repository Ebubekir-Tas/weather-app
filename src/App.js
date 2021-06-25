import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { WeatherForm, DisplayWeather } from './components';
import { Styles } from './styles/Styles';
import './App.css';

const axios = require('axios');

function App() {
  // Data of City searched for
  const [cityData, setCityData] = useState(null);
  const [errMessage, setErrMessage] = useState(null);

  // API key
  const WEATHER_API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;

  // Fetch API on submit of weather form. Lifted state passed to components.
  const onSubmit = (val) => {
    const fetchData = async () => {
      await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${val}&units=imperial&appid=${WEATHER_API_KEY}`
      ).then((result) => {
      setCityData(result.data);
      setErrMessage(null);
      })
      .catch(()=>{
        setErrMessage('Could Not Find City.')
      })
    };
    fetchData();
  };

  const classes = Styles();
  return (
    <div className='App'>
      <Paper className={classes.paperContainer}>
        {/* User Input */}
        <WeatherForm
          // submit handler for API fetch
          submitHandler={onSubmit}
        />
        {/* Custom error message */}
        {errMessage}
        {/* Weather UI */}
        <DisplayWeather
          cityData={cityData}
        />
      </Paper>
    </div>
  );
};

export default App;
