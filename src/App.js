import './App.css';
import { Paper } from '@material-ui/core';
import { WeatherForm, DisplayWeather } from './components';
import { ComponentStyles } from './styles/ComponentStyles';

function App() {
  const classes = ComponentStyles();
  return (
    <div className='App'>
      <Paper className={classes.paperContainer}>
        {/* User Input */}
        <WeatherForm />
        {/* Weather UI */}
        <DisplayWeather />
      </Paper>
    </div>
  );
};

export default App;
