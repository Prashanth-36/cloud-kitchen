import Card from "./UI/Card";
import classes from "./DetailsDescription.module.css";
import { useLoaderData } from "react-router-dom";
import BackButton from "./UI/BackButton";
const DetailsDescription = () => {
  const data = useLoaderData();
  return (
    <>
      <div className={classes["about-container"]}>
        <BackButton />
        <img
          alt="backgroud"
          className={classes["background-image"]}
          src="https://hips.hearstapps.com/hmg-prod/images/farmhouse-kitchen-ideas-1559837619.jpg?crop=1.00xw:0.754xh;0,0.0659xh&resize=1200:*"
        />
        <Card className={classes.about}>
          <h3>{data.name}</h3>
          <p>{data.location}</p>
          <p>{data.cousineType}</p>
        </Card>
      </div>
    </>
  );
};

export default DetailsDescription;
