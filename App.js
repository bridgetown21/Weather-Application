import React, { useState } from "react";
import WeatherCard from "/Users/db/weatherapp1/weather/src/components/WeatherCard.js";
import "./App.css";
import "/Users/db/weatherapp1/weather/src/components/WeatherCard.css";

function App() {
  const [city, setCity] = useState("");
  const [searchedCities, setSearchedCities] = useState([]);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    if (city) {
      setSearchedCities([city]);
      setCity("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search city"
          value={city}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="weather-cards-container">
        {searchedCities.map((city) => (
          <WeatherCard key={city} city={city} />
        ))}
      </div>
    </div>
  );
}

export default App;
