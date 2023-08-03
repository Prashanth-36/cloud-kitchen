import { useLoaderData } from "react-router-dom";
import KitchenElement from "./KitchenElement";

const KitchenList = () => {
  const kitchensData = useLoaderData();

  return (
    <>
      {Object.values(kitchensData).map((item) => (
        <KitchenElement key={item.id} item={item} />
      ))}
    </>
  );
};

export default KitchenList;
