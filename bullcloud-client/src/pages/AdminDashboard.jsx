import { Outlet } from "react-router-dom";
import DashboardFooter from "./fragments/DashboardFooter";
import DashboardHeader from "./fragments/DashboardHeader";
import useAuth from "../hooks/useAuth";
import AdminDashFooter from "./fragments/AdminDashFooter";
import AdminDashHeader from "./fragments/AdminDashHeader";

export default function AdminDashboard() {
  const { auth, setAuth } = useAuth();
  const content = (
    <main className=" relative  ">
      <AdminDashHeader value={{ auth }} />

      <Outlet context={{ auth, setAuth }} />
      <AdminDashFooter />
    </main>
  );

  return content;
}
