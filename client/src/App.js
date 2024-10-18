import "./App.css";
import Footer from "./pages/fragments/Footer";
import Header from "./pages/fragments/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function App({ children }) {
  useEffect(() => {
    const changeLogo = () => {
      document.title = "Bullbearexperts";
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
