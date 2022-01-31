import React, { ReactElement } from "react";
import { PanelProps } from "./interface";

function Panel({
  heading = "",
  className = [""],
  children,
}: PanelProps): ReactElement {
  return (
    <div className={`panel ${[...className]}`}>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}

export default Panel;
