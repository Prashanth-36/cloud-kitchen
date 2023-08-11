import { useContext } from "react";
import Card from "../components/UI/Card";
import CartContext from "../store/cart-context";
import Slots from "../components/Cart/Slots";
import classes from "./Cart.module.css";
import TextArea from "../components/UI/TextArea";
import Input from "../components/UI/Input";
import PaymentDetails from "../components/Cart/PaymentDetails";
import CartItemsList from "../components/Cart/CartItemsList";
import Button from "../components/UI/Button";
import BackButton from "../components/UI/BackButton";
import { redirect, useSubmit } from "react-router-dom";
import validateCartSubmit from "../util/validation";
import { getToken } from "../util/sessionHandler";

const Cart = () => {
  const ctx = useContext(CartContext);
  document.title = "Cart";
  const mealType = ctx.items.length && ctx.items[0].mealType;
  const submit = useSubmit();

  const placeOrder = () => {
    const data = JSON.stringify({ ...ctx, mealType: mealType });
    if (validateCartSubmit(data)) {
    }
    submit({ data }, { method: "post" });
    ctx.clearCart();
  };

  return (
    <>
      <BackButton />
      <div className={classes["container"]}>
        <Card className={classes["cart-container"]}>
          <h1>{ctx.kitchen}</h1>
          <p>
            A healthy and tasty {mealType || ctx.mealType} on{" "}
            {ctx.date.toDateString()}
          </p>
          <CartItemsList items={ctx.items} />
        </Card>
        <Card className={classes["details-container"]}>
          <Slots
            slot={mealType || ctx.mealType}
            date={ctx.date}
            currentSlot={ctx.slot}
            setSlot={ctx.setSlot}
          />
          <div className={classes.details}>
            <TextArea
              onBlur={ctx.setInstructions}
              label="Special Instructions field:"
              defaultValue={ctx.instructions}
            />
            <TextArea
              onBlur={ctx.setAddress}
              defaultValue={ctx.address}
              label="Address:"
            />
            <Input
              label="Mobile Number:"
              attr={{
                id: "number",
                type: "tel",
                defaultValue: ctx.number,
              }}
              onBlur={ctx.setNumber}
            />
          </div>
        </Card>
        <div className={classes.payment}>
          <PaymentDetails totalAmount={ctx.totalAmount} />
          {ctx.items.length > 0 && (
            <div className={classes["button-container"]}>
              <Button
                type="button"
                onClick={ctx.clearCart}
                className={classes["clear-button"]}
              >
                Clear Cart
              </Button>
              <Button onClick={placeOrder} className={classes["order-button"]}>
                Place Order
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

export const action = async ({ request }) => {
  const data = await request.formData();
  const orderData = data.get("data");
  const token = "Bearer " + getToken();

  const response = await fetch("http://localhost:5050/orders/", {
    method: "post",
    headers: { "Content-Type": "application/json", authorization: token },
    body: orderData,
  });

  if (!response.ok) {
    throw response;
  }
  alert("Order placed successfully");
  return redirect("/");
};
