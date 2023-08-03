import { NavLink, useLocation } from "react-router-dom";
import classes from "./Header.module.css";
import { tokenPayload } from "../../util/sessionHandler";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const Header = ({ kitchenId }) => {
  const ctx = useContext(CartContext);
  const payload = tokenPayload();
  const isUser = payload && payload.privilege === "user";
  const isOwner = payload && payload.privilege === "owner";
  const name = payload && payload.name;
  const logout = () => {
    ctx.logout();
  };
  const location = useLocation().pathname;
  return (
    <header className={classes.header}>
      <NavLink to="/" end>
        <h1>Cloud Kitchen</h1>
      </NavLink>
      <ul className={classes.list}>
        {ctx.isLoggedIn ? (
          <>
            {location === "/my-kitchen" ? (
              <li>
                <NavLink to={"/view-orders/" + kitchenId} end>
                  View Orders
                </NavLink>
              </li>
            ) : (
              <>
                {isUser && (
                  <li>
                    <NavLink to="/new-kitchen" end>
                      Add Kitchen
                    </NavLink>
                  </li>
                )}
                {isOwner && (
                  <li>
                    <NavLink to="/my-kitchen" end>
                      My Kitchen
                    </NavLink>
                  </li>
                )}
              </>
            )}
            <li>Hello! {name}</li>
            <li style={{ color: "red" }}>
              <NavLink to="/logout" onClick={logout}>
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/auth?mode=login" end>
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth?mode=signin" end>
                Sign up
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
