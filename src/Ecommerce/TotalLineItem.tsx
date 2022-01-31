import React from "react";

function TotalLineItem({
  label,
  price,
  className,
}: {
  label: string;
  price: string | number;
  className: string;
}) {
  return (
    <div className='line-item'>
      <div className='label'>{label}:</div>
      <div className={`amount price ${className}`}>${price}</div>
    </div>
  );
}

export default TotalLineItem;
