import React, { ReactElement } from "react";

function EmptyCart({
  text = "Your cart is empty.",
}: {
  text?: string;
}): ReactElement {
  return <p className='empty'>{text}.</p>;
}

export default EmptyCart;
