import React from "react";
import { useCart } from "../Context/cartContext";
import TotalLineItem from "./TotalLineItem";

function CartTotal() {
  const { itemsInCart } = useCart();
  const subTotal = itemsInCart.reduce(
    (acc, item) => item.quantity * +item.price + acc,
    0
  );
  const tax = subTotal * 0.0975;
  const price = subTotal + tax;

  return (
    <div className='totals'>
      <TotalLineItem
        label='Subtotal'
        price={subTotal.toFixed(2)}
        className='subtotal'
      />
      <TotalLineItem label='Tax' price={tax.toFixed(2)} className='tax' />
      <TotalLineItem label='Total' price={price.toFixed(2)} className='total' />
    </div>
  );
}

export default CartTotal;
