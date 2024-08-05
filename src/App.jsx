import './App.css'
import MainWeatherWindow from './components/mainWeatherWindow/MainWeatherWindow';
import WeatherCard from './components/weatherCard/WeatherCard';

function App() {

  return (
    <>
      <MainWeatherWindow data={{ icon: '01d', temp: 300, weather_desc: 'Clear Sky' }} city="Kolkata">
        <WeatherCard date={new Date()} weather_desc="Clear Sky" icon="01d" temp={300} />
      </MainWeatherWindow>
    </>
  )
}

export default App
