import KitchenList from "../components/KitchenList";
import classes from "./Main.module.css";
import Header from "../components/Layouts/Header";
import { getToken, getTokenDuration } from "../util/sessionHandler";
import SearchElement from "../components/SearchElement";
import { useState } from "react";

const Main = () => {
  document.title = "Cloud Kitchen";

  const [location, setLocation] = useState("none");

  return (
    <>
      <div className={classes["background-container"]}>
        <Header className={classes.header} />
        <SearchElement location={location} setLocation={setLocation} />
      </div>
      <main className={classes.main}>
        <KitchenList location={location} />
      </main>
    </>
  );
};

export default Main;

export const loader = async () => {
  const tokenData = getToken();
  const time = getTokenDuration();
  const token = tokenData && time > 0 ? "Bearer " + tokenData : null;
  const response = await fetch("http://localhost:5050/kitchens", {
    headers: {
      "content-type": "application/json",
      authorization: token,
    },
  });
  if (!response.ok) {
    throw response;
  }
  const kitchensData = await response.json();
  return kitchensData;
};
