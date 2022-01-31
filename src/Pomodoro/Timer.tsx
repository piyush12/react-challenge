import React, { ChangeEvent, useEffect, useRef, useState } from "react";

interface TimerProps {
  minutes: string | number;
  seconds: string | number;
  timerStopped: () => void;
}

function Timer(props: TimerProps) {
  let [duration, setDuration] = useState(
    3600 * 1 + 60 * Number(props.minutes) + Number(props.seconds)
  );
  // let hour: any = Math.floor(duration / 3600);
  let min: any = Math.floor(duration / 60) % 60;
  let sec: any = Math.floor(duration % 60);
  const minsFloat = min < 10 ? `0${min}` : min;
  const secsFloat = sec < 10 ? `0${sec}` : sec;

  const [minutes, setMinutes] = useState(() => minsFloat);
  const [seconds, setSeconds] = useState(() => secsFloat);
  const [enableSetting, setEnableSetting] = useState(true);

  let timerId = useRef<null | ReturnType<typeof setInterval>>(null);
  useEffect(() => {
    if (timerId.current && duration === 0) {
      clearInterval(timerId.current);
      timerId.current = null;
      props.timerStopped();
    }
  }, [duration]);

  const pomodoroTimer = () => {
    timerId.current = setInterval(() => {
      let min: any = Math.floor(duration / 60) % 60;
      let sec: any = Math.floor(duration % 60);
      const minsFloat = min < 10 ? `0${min}` : min;
      const secsFloat = sec < 10 ? `0${sec}` : sec;
      setMinutes(minsFloat);
      setSeconds(secsFloat);
      setDuration(duration--);
    }, 1000);
  };

  const startTimer = () => {
    if (timerId.current) return;
    pomodoroTimer();
  };

  const timerSettings = () => {
    setEnableSetting((prev) => !prev);
    if (timerId.current) {
      clearInterval(timerId.current);
      timerId.current = null;
    }
  };

  return (
    <div className='timer'>
      <div className='time'>
        <div className='minutes'>
          <input
            type='text'
            value={minutes}
            disabled={enableSetting}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setMinutes(event.target.value);
              setDuration(60 * Number(event.target.value) + Number(seconds));
            }}
          />
        </div>
        <div className='colon'>:</div>
        <div className='seconds'>
          <input
            type='text'
            value={seconds}
            disabled={enableSetting}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setSeconds(event.target.value);
              setDuration(60 * Number(minutes) + Number(event.target.value));
            }}
          />
        </div>
      </div>
      <button className='start' onClick={startTimer}>
        start
      </button>
      <button className='settings' onClick={timerSettings}>
        <img src='images/gear.svg' alt='Settings' />
      </button>
    </div>
  );
}

export default Timer;
