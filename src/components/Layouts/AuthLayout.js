import { Outlet } from "react-router-dom";
import ReactDOM from "react-dom";
import classes from "./AuthLayout.module.css";
import BackButton from "../UI/BackButton";
const AuthLayout = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <AuthLayoutElemet />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

const AuthLayoutElemet = () => {
  return (
    <div className={classes.backdrop}>
      <BackButton />
      <div className={classes.overlay}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
