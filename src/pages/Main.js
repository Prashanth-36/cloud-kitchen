import KitchenList from "../components/KitchenList";
import classes from "./Main.module.css";
import Header from "../components/Layouts/Header";

const Main = () => {
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
