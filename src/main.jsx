import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";

import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import ShopPage from './components/ShopPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "shop",
    element: <ShopPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
