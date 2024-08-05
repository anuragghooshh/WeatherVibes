import React from "react";
import "./CityInput.css";

const CityInput = ({ makeApiCall }) => {
  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      const cityName = e.target.value.trim();
      if (/^[a-zA-ZäöüÄÖÜß ]+$/.test(cityName)) {
        e.target.classList.add("loading");
        const success = await makeApiCall(cityName);
        e.target.placeholder = success
          ? "Enter a City..."
          : "City not found, try again...";
        e.target.classList.remove("loading");
        e.target.value = "";
      } else {
        e.target.placeholder = "Please enter a valid city name...";
      }
    }
  };

  return (
    <input
      className="city-input"
      type="text"
      placeholder="Enter a City..."
      onKeyDown={handleKeyPress}
    />
  );
};

export default CityInput;
