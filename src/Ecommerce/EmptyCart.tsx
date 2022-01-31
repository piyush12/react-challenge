import React from "react";

function EmptyCart({ text = "Your cart is empty." }: { text?: string }) {
  return <p className='empty'>{text}.</p>;
}

export default EmptyCart;
