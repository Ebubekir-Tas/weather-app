import { ComponentStyles } from '../../styles/ComponentStyles'

export const DailyWeatherRow = ({ data }) => {
  const forecastDate = new Date(data.dt * 1000).toLocaleDateString();
  const classes = ComponentStyles();

  return (
    <div className={classes.weatherContainer}>
      <div>description: {data.weather[0].description}</div>
      temp: {data.main.temp}
      <div>date: {forecastDate.toString()}</div>
      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather" />
      <hr />
    </div>
  );
};
