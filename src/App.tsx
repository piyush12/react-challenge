// import Cart from "./Ecommerce";
// import PomodoroApp from "./Pomodoro";
// import TipCalculator from "./TipCalculator";
import { ReactElement } from "react";
import "./styles.css";
import WeatherApp from "./WeatherApp";

export default function App(): ReactElement {
  return (
    <div className='App'>
      <WeatherApp />
    </div>
  );
}
