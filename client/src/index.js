import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// page importation
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import DashboardLandingUi from "./pages/fragments/ui/DashboardLandingUi";
import { AuthProvider } from "./context/AuthProvider";
import Resetpwd from "./pages/Resetpwd";
import Forgotpwd from "./pages/Forgotpwd";
import ProfileUi from "./pages/fragments/ui/ProfileUi";
import MarketUi from "./pages/fragments/ui/Market";
import About from "./pages/About";

// const backPages = {
//   home: "/",
//   register: "/register",
//   login: "/login",
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "resetpwd",
        element: <Resetpwd />,
      },
      {
        path: "forgotpwd",
        element: <Forgotpwd />,
      },

      {
        path: "login",
        element: <LoginPage />,
      },

      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <DashboardLandingUi />,
      },
      { path: "profile", element: <ProfileUi /> },

      { path: "market", element: <MarketUi /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
