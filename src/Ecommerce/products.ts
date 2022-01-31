import { productId } from "../utils";
import { FoodItems } from "./interface";



export const products: Array<FoodItems> = [
  {
    id: productId("FrenchFries"),
    name: "French Fries with Ketchup",
    price: "2.23",
    itemImage: "images/ecommerce/plate__french-fries.png",
  },
  {
    id: productId("Salmon"),
    name: "Salmon and Vegetables",
    price: "5.12",
    itemImage: "images/ecommerce/plate__salmon-vegetables.png",
  },
  {
    id: productId("Spaghetti"),
    name: "Spaghetti with Meat Sauce",
    price: "7.82",
    itemImage: "images/ecommerce/plate__spaghetti-meat-sauce.png",
  },
  {
    id: productId("Bacon"),
    name: "Bacon, Eggs, and Toast",
    price: "5.99",
    itemImage: "images/ecommerce/plate__bacon-eggs.png",
  },
  {
    id: productId("Chicken"),
    name: "Chicken Salad with Parmesan",
    price: "6.98",
    itemImage: "images/ecommerce/plate__chicken-salad.png",
  },
  {
    id: productId("FishSticks"),
    name: "Fish Sticks and Fries",
    price: "6.34",
    itemImage: "images/ecommerce/plate__fish-sticks-fries.png",
  },
];
