import React, { useState } from "react";
import "./App.css";
import MainWeatherWindow from "./components/mainWeatherWindow/MainWeatherWindow";
import CityInput from "./components/cityInput/CityInput";
import WeatherCard from "./components/weatherCard/WeatherCard";

const App = () => {
  const [city, setCity] = useState(null);
  const [days, setDays] = useState([]);

  const updateState = (data) => {
    const city = data.city.name;
    const days = [];
    const dayIndices = getDayIndices(data);

    for (let i = 0; i < 5; i++) {
      days.push({
        date: data.list[dayIndices[i]].dt_txt,
        weather_desc: data.list[dayIndices[i]].weather[0].description,
        icon: data.list[dayIndices[i]].weather[0].icon,
        temp: data.list[dayIndices[i]].main.temp,
      });
    }

    setCity(city);
    setDays(days);
  };

  const makeApiCall = async (city) => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    console.log(apiKey);
    const api_data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}`
    ).then((resp) => resp.json());

    if (api_data.cod === "200") {
      updateState(api_data);
      return true;
    }
    return false;
  };

  const getDayIndices = (data) => {
    let dayIndices = [0];
    let index = 0;
    let tmp = data.list[index].dt_txt.slice(8, 10);

    for (let i = 0; i < 4; i++) {
      while (
        tmp === data.list[index].dt_txt.slice(8, 10) ||
        data.list[index].dt_txt.slice(11, 13) !== "15"
      ) {
        index++;
      }
      dayIndices.push(index);
      tmp = data.list[index].dt_txt.slice(8, 10);
    }
    return dayIndices;
  };

  return (
    <div className="App">
      <header className="App-header">
        <MainWeatherWindow data={days[0]} city={city}>
          <CityInput city={city} makeApiCall={makeApiCall} />
          <ul className="weather-card-list">
            {days.slice(1).map((day, index) => (
              <li key={index}>
                <WeatherCard {...day} />
              </li>
            ))}
          </ul>
        </MainWeatherWindow>
      </header>
    </div>
  );
};

export default App;
