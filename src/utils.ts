export const productId = (string: string): string => {
  let randomId = "";
  for (let i = 0; i < string.length; i++) {
    let j =
      Math.floor(Math.random() + string.charCodeAt(i)) * string.length +
      string.substr(string.length / 2);
    randomId = j;
  }
  return randomId;
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getDay = (time: Date): string => days[time.getDay()];

export const getStatus = (status: string): string => {
  switch (status) {
    case "clear sky":
      return "sunny";
    case "few clouds":
      return "partly-cloudy";
    case "scattered clouds":
      return "partly-cloudy";
    case "broken clouds":
      return "partly-cloudy";
    case "shower rain":
      return "rainy";
    case "rain":
      return "rainy";
    case "thunderstorm":
      return "stormy";
    case "snow":
      return "snowy";
    case "mist":
      return "sunny";
    default:
      return "sunny";
  }
};

const hours = new Date().getHours();
export const isDayTime = hours > 6 && hours < 16;
export const isNightTime = hours > 20 && hours < 6;

export const monthIndexToName:Object = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export const weeks: string[] = ["S", "M", "T", "W", "T", "F", "S"];
