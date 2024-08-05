import React from "react";
import "./WeatherCard.css";
import iconsMap from "../utils/iconsMap";

const WeatherCard = ({ date, weather_desc, icon, temp }) => {
  return (
    <div className="weather-card">
      <div className="weather-card-content">
        <img src={iconsMap[icon]} alt="weather icon" className="weather-icon" />
        <div className="weather-details">
          <h1>
            {new Date(date).toLocaleDateString("en-GB", { weekday: "long" })}
          </h1>
          <div className="temp">{Math.round(temp - 273.15)}°C</div>
          <p className="description">{weather_desc}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;