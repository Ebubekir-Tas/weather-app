import './App.css';
import { Paper } from '@material-ui/core';
import { WeatherForm, DisplayWeather } from './components';
import { Styles } from './styles/Styles';

function App() {
  const classes = Styles();
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
