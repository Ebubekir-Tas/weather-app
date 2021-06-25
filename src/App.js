import './App.css';
import { WeatherForm, DisplayWeather } from './components';

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <WeatherForm />
      <DisplayWeather />
    </div>
  );
}

export default App;
