import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./Components/error-page/ErrorPage";
import Home from "./Components/Home/Home";
import reportWebVitals from "./reportWebVitals";
import { StyledEngineProvider } from "@mui/material/styles";
import ResponsiveAppBar from "./Components/Appbar/Appbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Pricing from "./Components/Pricing/Pricing";
import Album from "./Components/About/About";
import SignInSide from "./Components/Login/SignIn";
import SignUp from "./Components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Pricing",
    element: <Pricing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "About",
    element: <Album />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Login",
    element: <SignInSide />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Register",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ResponsiveAppBar />,
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
