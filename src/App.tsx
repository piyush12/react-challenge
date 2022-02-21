// import Cart from "./Ecommerce";
// import PomodoroApp from "./Pomodoro";
// import TipCalculator from "./TipCalculator";
// import WeatherApp from "./WeatherApp";
// import Slider from "./Slider";
import { ReactElement } from "react";
import OtpValidator from "./OtpValidator";
import "./styles.css";

export default function App(): ReactElement {
  return (
    <div className='App'>
      <OtpValidator />
    </div>
  );
}
