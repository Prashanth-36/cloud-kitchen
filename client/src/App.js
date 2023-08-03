import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthForm, { action as authAction } from "./components/Forms/AuthForm";
import KitchenDetails, {
  loader as kitchenDetailsLoader,
} from "./pages/KitchenDetails";
import CartProvider from "./store/CartProvider";
import Main, { loader as kitchensListLoader } from "./pages/Main";
import Cart, { action as orderAction } from "./pages/Cart";
import CartLayout from "./components/Layouts/CartLayout";
import BackdropLayout from "./components/Layouts/BackdropLayout";
import AddKitchenForm, {
  action as addNewKitchenAction,
} from "./components/Forms/AddKitchenForm";
import ModifyDish, {
  action as ModifyDishAction,
} from "./components/Kitchen/ModifyDish";
import ErrorPage from "./components/ErrorPage";
import MyKitchen, { loader as myKitchenLoader } from "./pages/MyKitchen";
import { logout } from "./util/logout";
import Orders, { loader as ordersLoader } from "./pages/Orders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CartLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Main />, loader: kitchensListLoader },
        {
          path: "/auth",
          element: <BackdropLayout />,
          children: [
            { index: true, element: <AuthForm />, action: authAction },
          ],
        },
        {
          path: "/logout",
          loader: logout,
        },
        {
          path: "/kitchens/:id",
          loader: kitchenDetailsLoader,
          element: <KitchenDetails />,
        },
        {
          path: "/new-kitchen",
          element: <BackdropLayout />,
          children: [
            {
              index: true,
              action: addNewKitchenAction,
              element: <AddKitchenForm />,
            },
          ],
        },
        {
          path: "/my-kitchen",
          element: <MyKitchen />,
          loader: myKitchenLoader,
        },
        {
          path: "/add-dish",
          element: <BackdropLayout />,
          children: [
            {
              index: true,
              action: ModifyDishAction,
              element: <ModifyDish />,
            },
          ],
        },
        {
          path: "/edit-dish",
          element: <BackdropLayout />,
          children: [
            {
              index: true,
              action: ModifyDishAction,
              element: <ModifyDish />,
            },
          ],
        },
        {
          path: "/cart",
          element: <Cart />,
          action: orderAction,
        },
        {
          path: "/view-orders/:id",
          element: <Orders />,
          loader: ordersLoader,
        },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
