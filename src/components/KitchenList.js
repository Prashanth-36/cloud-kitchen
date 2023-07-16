import KitchenElement from "./KitchenElement";

const data = [
  {
    id: 1,
    name: "kitchen 1",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/farmhouse-kitchen-ideas-1559837619.jpg?crop=1.00xw:0.754xh;0,0.0659xh&resize=1200:*",
    location: "city",
    cousineType: "south-indian | etc",
  },
  {
    id: 2,
    name: "kitchen 2",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/farmhouse-kitchen-ideas-1559837619.jpg?crop=1.00xw:0.754xh;0,0.0659xh&resize=1200:*",
    location: "city 2",
    cousineType: "north-indian | etc",
  },
  {
    id: 3,
    name: "kitchen 3",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/farmhouse-kitchen-ideas-1559837619.jpg?crop=1.00xw:0.754xh;0,0.0659xh&resize=1200:*",
    location: "city 3",
    cousineType: "indian | Chinese | etc",
  },
];
const KitchenList = () => {
  return (
    <>
      {data.map((item) => (
        <KitchenElement key={item.id} item={item} />
      ))}
    </>
  );
};

export default KitchenList;
