import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./DishesElement.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import QuantityButtons from "./UI/QuantityButtons";
import { useNavigate } from "react-router-dom";
const DishesElement = ({ item, kitchen }) => {
  const ctx = useContext(CartContext);
  let prdt = ctx.items.filter((carItem) => item._id === carItem._id);
  let quantity = prdt.length > 0 ? prdt[0].quantity : 0;
  const navigate = useNavigate();
  const addButtonHandler = () => {
    if (!ctx.isLoggedIn) {
      return navigate("/auth?mode=login");
    }
    ctx.addItemToCart(item, kitchen);
  };

  return (
    <Card className={classes.container}>
      <div className={classes.description}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
      <div className={classes["image-container"]}>
        <img alt={item.name} src={item.image} />
        {!quantity ? (
          <Button className={classes["add-button"]} onClick={addButtonHandler}>
            + Add
          </Button>
        ) : (
          <QuantityButtons
            className={classes["quantity-button"]}
            onMinusClick={ctx.removeItemFromCart.bind(null, item._id)}
            onPlusClick={ctx.addItemToCart.bind(null, item, kitchen)}
            val={quantity}
          />
        )}
      </div>
    </Card>
  );
};

export default DishesElement;
