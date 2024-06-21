import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./assets/global.css";
import App from "./App";
import { BrowserRouter, useLocation } from "react-router-dom";
import NavBar from "./components/ui/NavBar";

const Main = () => {
  const location = useLocation();
  const hideNavBarPaths = ["/login", "/signin"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {!hideNavBarPaths.includes(location.pathname) && <NavBar />}
      <App />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);
