import React from "react";
import "./styles.css";
import { Button } from "semantic-ui-react";
import moment from "moment";

function Weather({ weatherData }) {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <div className="main">
      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button
          className="button"
          inverted
          color="blue"
          circular
          icon="refresh"
          onClick={refresh}
        ></Button>
      </div>

      <div className="flex">
        <p className="day">
          {moment().format("dddd")}, <span>{moment().format("LL")}</span>
        </p>
        <div className="flex">
          <p className="day"> {weatherData.weather[0].main}</p>
        </div>
      </div>
      <div className="flex">
        <p className="temp">
          Tempurature: {Math.round(weatherData.main.temp)} &deg;F
        </p>{" "}
        <p className="temp">Wind Speed: {weatherData.wind.speed}</p>
        <p className="temp">Humidity: {weatherData.main.humidity}%</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">
          Sunrise:{" "}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-US")}
        </p>
        <p className="sunrise-sunset">
          Sunset:{" "}
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-US")}
        </p>
      </div>
    </div>
  );
}

export default Weather;
