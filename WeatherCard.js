import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherCard.css";
import { WiCloud, WiDaySunny, WiRain } from "react-icons/wi";


function WeatherCard({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "0c94f99a2668a6f1695cdae068268f45";
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [city]);

  const getWeatherIcon = (weatherDescription) => {
    const description = weatherDescription.toLowerCase();
  
    if (description.includes("cloud")) {
      return <WiCloud size={48} />;
    } else if (description.includes("clear")) {
      return <WiDaySunny size={48} />;
    } else if (description.includes("rain")) {
      return <WiRain size={48} />;
    }
  
    // Add more conditions and icons as needed
    // Return a default icon if no matching condition is found
    return <WiDaySunny size={48} />;
  };
  
  return (
    <div className="weather-card">
      {weatherData ? (
        <>
          <h2>{city}</h2>
          <div className="weather-icon">
            {getWeatherIcon(weatherData.weather[0].description)}
            </div>
          <h3>{weatherData.main.temp}°C</h3>
          <p>{weatherData.weather[0].description}</p>
          {getWeatherIcon(weatherData.weather[0].description)}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
  

  export default WeatherCard;
