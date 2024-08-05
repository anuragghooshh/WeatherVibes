import React from "react";
import "./MainWeatherWindow.css";
import iconsMap from "../../utils/iconsMap";

const MainWeatherWindow = ({ data, city, children }) => {
  return (
    <div className="main">
      <div className="inner-main">
        {!city && <h1 className="title">Weather Forecast</h1>}
        {city && data && (
          <div className="main-weather-card">
            <img
              src={iconsMap[data.icon]}
              alt="weather icon"
              className="weather-icon"
            />
            <div className="weather-details">
              <h1>{city}</h1>
              <p className="temp">
                Temperature: {Math.round(data.temp - 273.15)}°C
              </p>
              <p className="description">{data.weather_desc.toLowerCase()}</p>
            </div>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default MainWeatherWindow;
