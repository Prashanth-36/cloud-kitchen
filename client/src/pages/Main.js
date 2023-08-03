import KitchenList from "../components/KitchenList";
import classes from "./Main.module.css";
import Header from "../components/Layouts/Header";
import { getToken, getTokenDuration } from "../util/sessionHandler";

const Main = () => {
  document.title = "Cloud Kitchen";
  return (
    <>
      <Header />
      <main className={classes.main}>
        <KitchenList />
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
