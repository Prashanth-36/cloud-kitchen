import { useContext } from "react";
import Card from "../components/UI/Card";
import CartContext from "../store/cart-context";
import Slots from "../components/Slots";
import classes from "./Cart.module.css";
import TextArea from "../components/UI/TextArea";
import Input from "../components/UI/Input";
import PaymentDetails from "../components/PaymentDetails";
import CartItemsList from "../components/CartItemsList";
import Button from "../components/UI/Button";
import BackButton from "../components/UI/BackButton";

const Cart = () => {
  document.title = "Cart";
  const ctx = useContext(CartContext);
  const mealType = ctx.mealType;
  return (
    <>
      <BackButton />
      <div className={classes["container"]}>
        <Card className={classes["cart-container"]}>
          <h1>{ctx.kitchen}</h1>
          <p>
            A healthy and tasty {mealType} on {ctx.date.toDateString()}
          </p>
          <CartItemsList items={ctx.items} />
        </Card>
        <Card className={classes["details-container"]}>
          <Slots
            slot={mealType}
            date={ctx.date}
            currentSlot={ctx.slot}
            setSlot={ctx.setSlot}
          />
          <div className={classes.details}>
            <TextArea label="Special Instructions field:" />
            <TextArea label="Address:" />
            <Input
              label="Mobile Number:"
              attr={{ id: "number", type: "tel" }}
            />
          </div>
        </Card>
        <div className={classes.payment}>
          <PaymentDetails totalAmount={ctx.totalAmount} />
          <div className={classes["button-container"]}>
            <Button className={classes["clear-button"]}>Clear Cart</Button>
            <Button className={classes["order-button"]}>Place Order</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
