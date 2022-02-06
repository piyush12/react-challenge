import React from "react";

function Temperature({ degree }: { degree: number }) {
  return (
    <div className='temperature'>
      {degree}
      <span className='degrees'>&deg;</span>
    </div>
  );
}

export default Temperature;
