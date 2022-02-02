import React, { ReactElement } from "react";
import { ActionKind, useCart } from "../Context/cartContext";
import Button from "./Button";
import EmptyCart from "./EmptyCart";
import { Cart } from "./interface";
import Item from "./Item";
import Plate from "./Plate";
import ProductContent from "./ProductContent";
import ProductPrice from "./ProductPrice";

function CartItems(): ReactElement {
  const { itemsInCart, dispatch } = useCart();

  const addQuantity = (item: Cart) => {
    dispatch({ type: ActionKind.AddQuantity, payload: item });
  };

  const removeQuantity = (item: Cart) => {
    dispatch({ type: ActionKind.RemoveQuantity, payload: item });
  };

  return (
    <>
      <ul className='cart-summary'>
        {itemsInCart.length === 0 && <EmptyCart />}
        {itemsInCart.length > 0 &&
          itemsInCart.map((item) => {
            const subTotal = +item.price * item.quantity;
            return (
              <Item key={item.id}>
                <Plate
                  image={item.itemImage}
                  name={item.name}
                  quantity={item.quantity}
                />
                <ProductContent name={item.name} price={item.price} />
                <div className='quantity__wrapper'>
                  <Button
                    className='decrease'
                    onClick={() => removeQuantity(item)}
                  >
                    <img src='images/ecommerce/chevron.svg' />
                  </Button>
                  <div className='quantity'>{item.quantity}</div>
                  <Button
                    className='increase'
                    onClick={() => addQuantity(item)}
                  >
                    <img src='images/ecommerce/chevron.svg' />
                  </Button>
                </div>
                <ProductPrice
                  className='subtotal'
                  price={subTotal.toFixed(2)}
                ></ProductPrice>
              </Item>
            );
          })}
      </ul>
    </>
  );
}

export default CartItems;
