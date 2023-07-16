import { useNavigate } from "react-router-dom";
import DishesElement from "./DishesElement";
import Button from "./UI/Button";
import classes from "./CartItemsList.module.css";

const CartItemsList = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <p>
        <b>Items</b>
      </p>
      <div className={classes["items-list"]}>
        {props.items.map((item) => (
          <DishesElement key={item.id} item={item} />
        ))}
      </div>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        + Add more Items
      </Button>
    </>
  );
};

export default CartItemsList;
