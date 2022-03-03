import React, { useState } from "react";
import useDateArray from "../hooks/useDateArray";
import { monthIndexToName, weeks } from "../utils";
import ArrowButton from "./ArrowButton";
import DayAndWeek from "./DayAndWeek";
import "./styles.css";

function DatePicker() {
  const now = new Date();
  const [currentMonth, setCurrentMonth] = useState<number>(now.getMonth());
  const [currentYear, setCurrentYear] = useState<number>(now.getFullYear());
  const dateArray = useDateArray(currentMonth, currentYear);

  const handleNextClick = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  return (
    <div className='wrapper'>
      <ArrowButton
        src='images/previous.svg'
        altText='Previous'
        type='previous'
        onClick={handlePrevClick}
      />

      <div className='month'>
        {currentYear} -{" "}
        {monthIndexToName[currentMonth.toString() as keyof Object]}
      </div>
      <ArrowButton
        src='images/next.svg'
        altText='Next'
        type='next'
        onClick={handleNextClick}
      />
      {weeks.map((week, index) => (
        <DayAndWeek
          className='day-of-week'
          text={week}
          key={`${week}-${index}`}
        />
      ))}

      {dateArray.map((date, index) => (
        <DayAndWeek
          className='date-number'
          text={date}
          key={`${date}-${index}`}
        />
      ))}
    </div>
  );
}

export default DatePicker;
