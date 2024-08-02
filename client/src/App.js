import "./App.css";
import Footer from "./pages/fragments/Footer";
import Header from "./pages/fragments/Header";
import { Outlet } from "react-router-dom";

export default function App({ children }) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
