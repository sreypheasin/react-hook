import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/about-us/AboutUs.jsx";
import Service from "./pages/service/Service.jsx";
import Layout from "./components/layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "about-us",
        element: <AboutUs />
      },
      {
        path: "service",
        element: <Service />
      }
    ]
  }
  // {
  //   path: "/about-us",
  //   element: <AboutUs />
  // },
  // {
  //   path: "/service",
  //   element: <Service />
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
