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
import WithdrawUi from "./pages/fragments/ui/WithdrawUi.jsx";
import Resetpwd from "./pages/Resetpwd";
import Forgotpwd from "./pages/Forgotpwd";
import ProfileUi from "./pages/fragments/ui/ProfileUi";
import ActivitiesUi from "./pages/fragments/ui/ActivitiesUi";
import About from "./pages/About";
import UsersUi from "./pages/fragments/adminUi/UsersUi";
import Contact from "./pages/Contact.jsx";
import SingleUserUi from "./pages/fragments/adminUi/SingleUserUI";
import Update from "./pages/Update.jsx";
import AdminDashboard from "./pages/AdminDashboard";
import AdminDashboardLandingUi from "./pages/fragments/adminUi/AdminDashboardLandingUi";
import AdminProfileUi from "./pages/fragments/adminUi/AdminProfileUi";
import DepositUi from "./pages/fragments/ui/DepositUi";
import Milestone from "./pages/Milestone.jsx";
import UsersWithDepositUi from "./pages/fragments/adminUi/UsersWithDepositUi.jsx";
import UsersWithWithdrawaltUi from "./pages/fragments/adminUi/UserWithWithdrawalReq.jsx";

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
        path: "milestone",
        element: <Milestone />,
      },
      {
        path: "update",
        element: <Update />,
      },
      {
        path: "contact",
        element: <Contact />,
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
      { path: "deposit", element: <DepositUi /> },
      { path: "withdraw", element: <WithdrawUi /> },

      { path: "activity", element: <ActivitiesUi /> },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "",
        element: <AdminDashboardLandingUi />,
      },
      {
        path: "users",
        element: <UsersUi />,
      },
      {
        path: "users/singleuser/:id",
        element: <SingleUserUi />,
      },
      {
        path: "profile",
        element: <AdminProfileUi />,
      },
      {
        path: "depositUi",
        element: <UsersWithDepositUi />,
      },
      {
        path: "withdrawalUi",
        element: <UsersWithWithdrawaltUi />,
      },
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
