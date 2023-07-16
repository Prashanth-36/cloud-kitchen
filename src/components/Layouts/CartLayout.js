import { Outlet } from "react-router-dom";
import CartButton from "../UI/CartButton";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartLayout = () => {
  const ctx = useContext(CartContext);
  const cartItems = ctx.items.length > 0;
  return (
    <>
      <Outlet />
      {cartItems && <CartButton counter={ctx.items.length} />}
    </>
  );
};

export default CartLayout;
