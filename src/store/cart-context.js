import { createContext } from "react";

const defaultData = {
  totalAmount: 0,
  mealType: "Breakfast",
  changeMealType: () => {},
  kitchen: "",
  date: new Date(new Date().setHours(0, 0, 0, 0)),
  changeDate: (date) => {},
  slot: 0,
  items: [],
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {},
  setSlot: (slot) => {},
};

const CartContext = createContext(defaultData);

export default CartContext;
