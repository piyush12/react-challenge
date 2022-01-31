import React, { ReactElement } from "react";
import { PlateProps } from "./interface";

function Plate({ image, name, quantity }: PlateProps): ReactElement {
  return (
    <div className='plate'>
      <img src={image} alt={name} className='plate' />
      {quantity && <div className='quantity'>{quantity}</div>}
    </div>
  );
}

export default Plate;
