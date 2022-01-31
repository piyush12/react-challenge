import React, { useState } from "react";
import Ring from "./Ring";
import "./styles.css";
import Timer from "./Timer";

function PomodoroApp() {
  const [timerEnds, setTimerEnds] = useState(false);
  return (
    <div className='wrapper'>
      <Ring timerEnds={timerEnds} />
      <Timer
        minutes='00'
        seconds='03'
        timerStopped={() => {
          setTimerEnds(true);
          alert("done");
        }}
      />
    </div>
  );
}
export default PomodoroApp;
