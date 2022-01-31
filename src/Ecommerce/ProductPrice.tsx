import React, { ReactElement } from "react";

function ProductPrice({
  price,
  className = "price",
}: {
  price: string | number;
  className?: string;
}): ReactElement {
  return <p className={className}>${price}</p>;
}

export default ProductPrice;
