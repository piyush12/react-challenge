export const productId = (string) => {
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

export const getDay = (time) => days[time.getDay()];

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
