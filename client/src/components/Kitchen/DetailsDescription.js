import classes from "./DetailsDescription.module.css";
import BackButton from "../UI/BackButton";
import Card from "../UI/Card";
import { Link, useLocation } from "react-router-dom";
import Button from "../UI/Button";

const DetailsDescription = ({ loaderData }) => {
  const isMyKitchen = useLocation().pathname === "/my-kitchen";
  return (
    <>
      <div className={classes["about-container"]}>
        {!isMyKitchen && <BackButton />}
        <img
          alt="backgroud"
          className={classes["background-image"]}
          src="https://hips.hearstapps.com/hmg-prod/images/farmhouse-kitchen-ideas-1559837619.jpg?crop=1.00xw:0.754xh;0,0.0659xh&resize=1200:*"
        />
        <Card className={classes.about}>
          <h3>{loaderData.name}</h3>
          <p>{loaderData.location}</p>
          <p>{loaderData.cuisineType}</p>
          {isMyKitchen && (
            <div className={classes["button-container"]}>
              <Link to="/add-dish">
                <Button>+Add New Dish</Button>
              </Link>
            </div>
          )}
        </Card>
      </div>
    </>
  );
};

export default DetailsDescription;
