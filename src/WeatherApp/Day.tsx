import React, { ReactElement } from "react";
import { dailyObj } from "../Context/weatherContext";
import { getDay, getStatus, isDayTime } from "../utils";
import Low from "./Low";
import Precipitation from "./Precipitation";
import Temperature from "./Temperature";
import Weather from "./Weather";

function Day({ dailyWeather }: { dailyWeather: dailyObj }): ReactElement {
  const day = getDay(new Date(dailyWeather.dt * 1000));
  const date = new Date(dailyWeather.dt * 1000).getDate();
  const weatherStatus = getStatus(dailyWeather.weather[0].description);

  return (
    <div className='day'>
      <div className='day-of-week'>{day.substring(0, 3)}</div>
      <div className='date'>{date}</div>
      <div className={`bar ${weatherStatus}`}>
        <Weather status={weatherStatus} />
        <Temperature
          degree={
            isDayTime
              ? Math.round(dailyWeather.feels_like.day)
              : Math.round(dailyWeather.feels_like.night)
          }
        />
        <div className='content'>
          <Precipitation humidity={dailyWeather.humidity} />
          <Low degree={Math.round(dailyWeather.temp.min)} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Day);
