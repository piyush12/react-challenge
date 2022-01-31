import React, { ReactElement } from "react";

function ProductName({ name }: { name: string }): ReactElement {
  return <p className='menu-item'>{name}</p>;
}

export default ProductName;
