import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { Cart, FoodItems } from "../Ecommerce/interface";

export const ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  ADD_QUANTITY: "ADD_QUANTITY",
  REMOVE_QUANTITY: "REMOVE_QUANTITY",
};

export enum ActionKind {
  AddToCart = "ADD_TO_CART",
  RemoveFromCart = "REMOVE_FROM_CART",
  AddQuantity = "ADD_QUANTITY",
  RemoveQuantity = "REMOVE_QUANTITY",
}

type Action = {
  type:
    | ActionKind.AddToCart
    | ActionKind.AddQuantity
    | ActionKind.RemoveQuantity;
  payload: {
    id: string;
    itemImage: string;
    name: string;
    price: string;
    quantity: number;
  };
};

type State = {
  itemsInCart: Cart[];
};

interface ICartContext {
  addToCart: (
    id: string,
    itemImage: string,
    name: string,
    price: string
  ) => void;
  itemsInCart: Cart[];
  dispatch: Dispatch<Action>;
}

const initialState = {
  itemsInCart: [],
};

const cartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionKind.AddToCart:
      return { ...state, itemsInCart: [...state.itemsInCart, action.payload] };
    case ActionKind.AddQuantity:
      const findItem = state.itemsInCart.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.quantity++;
      }
      return { ...state };
    case ActionKind.RemoveQuantity:
      const findItemInCart = state.itemsInCart.find(
        (item) => item.id === action.payload.id
      );
      if (findItemInCart) {
        findItemInCart.quantity--;
      }
      if (findItemInCart && findItemInCart.quantity < 1) {
        let filterItem = state.itemsInCart.filter(
          (item) => item.id !== action.payload.id
        );
        return { ...state, itemsInCart: [...filterItem] };
      }
      return { ...state };
    default:
      return { ...state };
  }
};

const CartContext = createContext<ICartContext | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactChild }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  // console.log("cartState", cartState);

  const addToCart = (
    id: string,
    itemImage: string,
    name: string,
    price: string
  ): void => {
    const item = { id, itemImage, name, price, quantity: 1 };
    dispatch({ type: ActionKind.AddToCart, payload: item });
  };

  return (
    <CartContext.Provider
      value={{ addToCart, itemsInCart: cartState.itemsInCart, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Must wrap inside cartProvider");
  }
  return context;
}

export { CartContextProvider, CartContext, useCart };
