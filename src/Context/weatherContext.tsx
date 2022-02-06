import React, { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import useGeoLocation from "../hooks/useGeoLocation";

export interface dailyObj {
  dt: number;
  temp: {
    day: number;
    max: number;
    min: number;
    night:number;
  };
  feels_like: {
    day: number;
    night:number
  };
  weather: Array<{ id: number; description: string }>;
  humidity: number;
}

interface IWeatherContext {
  weather: {
    daily: dailyObj[];
  } | null;
  error:null
}

const appKey: string = "1cec0127db23909c5d2ac5fc18ee6dfa";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const ApiUrl = (
  lat: number,
  lon: number,
  key = appKey,
  units = "metric",
  lang = "en",
  exclude = "hourly,minutely"
) =>
  `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&exclude=${exclude}&units=${units}&lang=${lang}`;

const WeatherContext = React.createContext<IWeatherContext | null>(null);

const WeatherContextProvider = ({
  children,
}: {
  children: React.ReactChild;
}) => {
  //   const [weather, setWeather] = useState(null);
  const { position, getLocation } = useGeoLocation();
  const [url, setUrl] = useState("");
  const { data: weather,error } = useFetch(url, options);

  useEffect(() => {
    if (!position) return;
    const url = ApiUrl(position.latitude, position?.longitude);
    setUrl(url);
  }, [position]);

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <WeatherContext.Provider value={{ weather,error }}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("Must wrap inside Weathercontextprovider");
  }
  return context;
};

export { WeatherContextProvider, WeatherContext, useWeather };
