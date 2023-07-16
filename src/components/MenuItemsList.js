import { useLoaderData } from "react-router-dom";
import DishesElement from "./DishesElement";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./MenuItemsList.module.css";

const MenuItemsList = () => {
  const ctx = useContext(CartContext);
  const dishes = useLoaderData().menuItems.filter(
    (item) => item.mealType === ctx.mealType
  );
  const kitchen=useLoaderData().name;
  const data = dishes.map((item) => (
    <DishesElement key={item.id} kitchen={kitchen} item={item} />
  ));
  return <div className={classes["menu-list"]}>{data}</div>;
};

export default MenuItemsList;
