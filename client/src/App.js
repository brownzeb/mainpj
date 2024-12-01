import "./App.css";
import Footer from "./pages/fragments/Footer";
import Header from "./pages/fragments/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { domain } from "./data";

export default function App({ children }) {
  useEffect(() => {
    const changeLogo = () => {
      document.title = domain;
    };

    changeLogo();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
