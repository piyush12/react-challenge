import React from "react";

interface DayAndWeekProps {
  className: string;
  text: string | number;
}

function DayAndWeek({ className, text }: DayAndWeekProps): React.ReactElement {
  return <div className={className}>{text}</div>;
}

export default DayAndWeek;
