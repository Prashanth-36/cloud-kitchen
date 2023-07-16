import DateElementsList from "../components/DateElementsList";
import MenuItemsList from "../components/MenuItemsList";
import MealTypeList from "../components/MealTypeList";
import DetailsDescription from "../components/DetailsDescription";

const KitchenDetails = () => {
  return (
    <>
      <DetailsDescription />
      <DateElementsList />
      <MealTypeList />
      <MenuItemsList />
    </>
  );
};

export default KitchenDetails;

export const loader = () => {
  const data = {
    id: 1,
    name: "Selected kitchen Name",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/farmhouse-kitchen-ideas-1559837619.jpg?crop=1.00xw:0.754xh;0,0.0659xh&resize=1200:*",
    location: "city",
    cousineType: "south-indian | etc",
    menuItems: [
      {
        id: 1,
        mealType: "Breakfast",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/farmhouse-kitchen-ideas-1559837619.jpg?crop=1.00xw:0.754xh;0,0.0659xh&resize=1200:*",
        name: "Dish 1",
        description: "2pieses of dish1",
        price: 250,
        quantity: 0,
      },
      {
        id: 2,
        mealType: "Breakfast",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/farmhouse-kitchen-ideas-1559837619.jpg?crop=1.00xw:0.754xh;0,0.0659xh&resize=1200:*",
        name: "Dish 2",
        description: "1pieses of dish2",
        price: 150,
        quantity: 0,
      },
      {
        id: 3,
        mealType: "Lunch",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/farmhouse-kitchen-ideas-1559837619.jpg?crop=1.00xw:0.754xh;0,0.0659xh&resize=1200:*",
        name: "Dish 3",
        description: "1pieses of dish3",
        price: 300,
        quantity: 0,
      },
      {
        id: 4,
        mealType: "Snacks",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/farmhouse-kitchen-ideas-1559837619.jpg?crop=1.00xw:0.754xh;0,0.0659xh&resize=1200:*",
        name: "Dish 4",
        description: "1pieses of dish4",
        price: 350,
        quantity: 0,
      },
      {
        id: 5,
        mealType: "Dinner",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/farmhouse-kitchen-ideas-1559837619.jpg?crop=1.00xw:0.754xh;0,0.0659xh&resize=1200:*",
        name: "Dish 5",
        description: "3pieses of dish5",
        price: 420,
        quantity: 0,
      },
    ],
  };
  return data;
};
