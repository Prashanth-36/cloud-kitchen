import { useLoaderData } from "react-router-dom";
import KitchenElement from "./KitchenElement";

const KitchenList = ({ location }) => {
  const loaderData = useLoaderData();

  const kitchensData =
    location !== "none"
      ? loaderData.filter((kitchen) => kitchen.location === location)
      : loaderData;
  return (
    <>
      {Object.values(kitchensData).map((item) => (
        <KitchenElement key={item.id} item={item} />
      ))}
    </>
  );
};

export default KitchenList;
