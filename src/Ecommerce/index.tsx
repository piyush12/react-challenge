import React from "react";
import { CartContextProvider } from "../Context/cartContext";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import Panel from "./Panel";
import ShoppingItems from "./ShoppingItems";
import { products } from "./products";
import "./styles.css";

function Cart() {
  return (
    <CartContextProvider>
      <div className='wrapper menu'>
        <Panel heading='To Go Menu'>
          <ShoppingItems products={products} />
        </Panel>

        <Panel heading='Your Cart' className={["cart"]}>
          <CartItems />
          <CartTotal />
        </Panel>
      </div>
    </CartContextProvider>
  );
}

export default Cart;
