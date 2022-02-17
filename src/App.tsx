// import Cart from "./Ecommerce";
// import PomodoroApp from "./Pomodoro";
// import TipCalculator from "./TipCalculator";
// import WeatherApp from "./WeatherApp";
import { ReactElement } from "react";
import Slider from "./Slider";
import "./styles.css";

export default function App(): ReactElement {
  return (
    <div className='App'>
      <Slider />
    </div>
  );
}
