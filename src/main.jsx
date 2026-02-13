import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import HomePage from "./components/pages/HomePage";
import CartPage from "./components/pages/CartPage";
import ShopPage from "./components/pages/ShopPage";

import { CartProvider } from "./contexts/cartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </CartProvider>
);
