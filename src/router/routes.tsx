import App from "@/App";
import HomePage from "@/components/HomePage";
import { ShopPage } from "@/components/ShopPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
    ],
  },
];
