import React from "react";
import PrecipitationSymbol from "./PrecipitationSymbol";

function Precipitation({ humidity }: { humidity: number }) {
  return (
    <div className='precipitation'>
      <svg role='img' className='icon'>
        <use xlinkHref='#precipitation'></use>
        <PrecipitationSymbol />
      </svg>
      {humidity}%
    </div>
  );
}

export default Precipitation;
