import React, { ReactElement } from "react";
import { ProductContentProps } from "./interface";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";

function ProductContent({
  name,
  price,
  children,
}: ProductContentProps): ReactElement {
  return (
    <div className='content'>
      <ProductName name={name} />
      <ProductPrice price={price} />
      {children}
    </div>
  );
}

export default ProductContent;
