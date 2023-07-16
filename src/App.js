import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./components/Layouts/AuthLayout";
import AuthForm from "./components/Forms/AuthForm";
import Main from "./pages/Main";
import KitchenDetails from "./pages/KitchenDetails";
import CartProvider from "./store/CartProvider";
import { loader as kitchenDetailsLoader } from "./pages/KitchenDetails";
import Cart from "./pages/Cart";
import CartLayout from "./components/Layouts/CartLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CartLayout />,
      children: [
        { index: true, element: <Main /> },
        {
          path: "/auth",
          element: <AuthLayout />,
          children: [{ index: true, element: <AuthForm /> }],
        },
        {
          path: "/kitchens/:id",
          loader: kitchenDetailsLoader,
          element: <KitchenDetails />,
        },
      ],
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router}>
        <div className="App">Content</div>;
      </RouterProvider>
    </CartProvider>
  );
}

export default App;
