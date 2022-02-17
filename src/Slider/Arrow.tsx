import React, { ReactElement } from "react";

function Arrow({
  handleLeft,
  handleRight,
}: {
  handleLeft: () => void;
  handleRight: () => void;
}): ReactElement {
  return (
    <>
      <a href='#' className='left' onClick={handleLeft}>
        <img src='images/slider/chevron.svg' alt='' />
      </a>
      <a href='#' className='right' onClick={handleRight}>
        <img src='images/slider/chevron.svg' alt='' />
      </a>
    </>
  );
}

export default React.memo(Arrow);
