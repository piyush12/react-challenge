import React, { ReactElement } from "react";
import { WeatherContextProvider } from "../Context/weatherContext";
import DayCard from "./DayCard";
import "./styles.css";

function WeatherApp(): ReactElement {
  return (
    <div className='wrapper'>
      <WeatherContextProvider>
        <DayCard />
      </WeatherContextProvider>
    </div>
  );
}

export default WeatherApp;
