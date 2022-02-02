import React, { ReactElement } from "react";
import { ViewProps } from "./interface";

function View({ label, price }: ViewProps): ReactElement {
  return (
    <div className='total-per-person'>
      <div className='label'>{label}</div>
      <div className='dollars'>
        <sup>$</sup>
        <span id='total-per-person'>{price}</span>
      </div>
    </div>
  );
}

export default View;
