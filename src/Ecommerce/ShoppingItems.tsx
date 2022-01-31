import React from "react";
import { useCart } from "../Context/cartContext";
import Button from "./Button";
import { FoodItems } from "./interface";
import Item from "./Item";
import Plate from "./Plate";
import ProductContent from "./ProductContent";

function ShoppingItems({ products }: { products: Array<FoodItems> }) {
  const { addToCart, itemsInCart } = useCart();

  return (
    <ul className='menu'>
      {products.map(({ id, itemImage, name, price }) => {
        const inCart = itemsInCart.find((item) => item.id === id);
        return (
          <Item key={id}>
            <Plate image={itemImage} name={name} />
            <ProductContent name={name} price={price}>
              {inCart && inCart.id === id ? (
                <Button
                  className='in-cart'
                  onClick={() => addToCart?.(id, itemImage, name, price)}
                  type='button'
                >
                  <img src='images/ecommerce/check.svg' alt='Check' /> In Cart
                </Button>
              ) : (
                <Button
                  className='add'
                  value='Add to Cart'
                  onClick={() => addToCart(id, itemImage, name, price)}
                  type='button'
                />
              )}
            </ProductContent>
          </Item>
        );
      })}
    </ul>
  );
}

export default ShoppingItems;

// <li key={item.id}>
//   <Plate image={item.itemImage} name={item.name} />
//   <div className='content'>
//     <ProductName name={item.name} />
//     <ProductPrice price={item.price} />
//     {/* <button className='in-cart'>
//       <img src='images/ecommerce/check.svg' alt='Check' />
//       In Cart
//     </button> */}
//     <Button className='add' value='Add to Cart' onClick={() => {}} />
//   </div>
// </li>
