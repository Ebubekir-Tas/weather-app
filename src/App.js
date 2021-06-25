import './App.css';
import { WeatherForm } from './components/WeatherForm';
import { DisplayWeather } from './components/DisplayWeather';

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
