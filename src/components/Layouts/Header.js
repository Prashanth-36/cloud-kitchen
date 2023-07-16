import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/" end>
        <h1>Cloud Kitchen</h1>
      </NavLink>
      <ul className={classes.list}>
        <li>
          <NavLink to="/new-kitchen" end>
            Add Kitchen
          </NavLink>
        </li>
        <li>
          <NavLink to="/auth?mode=login" end>
            Log in
          </NavLink>
        </li>
        <li>
          <NavLink to="/auth?mode=signup" end>
            Sign up
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
