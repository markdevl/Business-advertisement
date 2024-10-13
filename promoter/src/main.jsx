import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";
import Home from "./home/Home.jsx";
import Shop from "./shop/Shop.jsx";
import Login from "./user/login/Login.jsx";
import Signup from "./user/sign_up/Signup.jsx";
import SingleProduct from "./shop/SingleProduct.jsx";
import Contact from "./contactPage/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/shop", element: <Shop /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup/> },
      {
        path: "shop/:id",
        element: <SingleProduct />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
