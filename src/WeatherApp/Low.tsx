import React from "react";
import LowSymbol from "./LowSymbol";

function Low({ degree }: { degree: number }) {
  return (
    <div className='low'>
      <svg role='img' className='icon'>
        <use xlinkHref='#low'></use>
        <LowSymbol />
      </svg>
      {degree}&deg;
    </div>
  );
}

export default Low;
