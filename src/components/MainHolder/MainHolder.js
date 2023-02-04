import { useState } from "react";
import "./MainHolder.css";

function MainHolder() {
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [tempC, setTempC] = useState("");
  const [conditionImg, setConditionImg] = useState("");
  const [country, setCountry] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [windSpeedKmh, setWindSpeedKmh] = useState("");
  const [humidity, setHumidity] = useState("");

  const GetData = (event) => {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=60fe5660ba614ea3ac592501232201&q=" +
        event.target.value
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setConditionImg(data.current.condition.icon);
        setCondition(data.current.condition.text);
        setLocation(data.location.name);
        setTempC(data.current.temp_c);
        setCountry(data.location.country);
        setFeelsLike(data.current.feelslike_c);
        setWindSpeedKmh(data.current.wind_kph);
        setHumidity(data.current.humidity);
      });
  };

  return (
      <div className="result">
        <h2>Weather App in React.js</h2>
        <input
          placeholder="Search for cities"
          type="text"
          onChange={GetData}
          className="input"
        ></input>

        <div className="display">
          <h3 className="location">
            {location}, {country}
            <img src={conditionImg} alt="" width="80px"></img>
          </h3>
          <h3>{tempC}°C</h3>

          <p className="condition">Condition: {condition}</p>
          <p>Feels like: {feelsLike}°C</p>
          <p>Wind Speed: {windSpeedKmh}KmH</p>
          <p>Humidity: {humidity}%</p>
        </div>
      </div>
  );
}

export default MainHolder;
