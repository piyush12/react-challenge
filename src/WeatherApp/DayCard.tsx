import React, { ReactElement } from "react";
import { dailyObj, useWeather } from "../Context/weatherContext";
import Day from "./Day";

function DayCard(): ReactElement {
  const { weather, error } = useWeather();
  if(error){
    return <div>{error}</div>
  }
  if (!weather) return <div>Loading....</div>;
  return (
    <>
      {weather.daily.map((daily: dailyObj) => {
        return <Day dailyWeather={daily} key={daily.dt} />;
      })}
    </>
  );
}

export default DayCard;
