// import Cart from "./Ecommerce";
// import PomodoroApp from "./Pomodoro";
// import TipCalculator from "./TipCalculator";
// import WeatherApp from "./WeatherApp";
// import Slider from "./Slider";
// import OtpValidator from "./OtpValidator";
import { ReactElement } from "react";
import "./styles.css";
import DatePicker from "./DatePicker";

export default function App(): ReactElement {
  return (
    <div className='App'>
      <DatePicker />
    </div>
  );
}
