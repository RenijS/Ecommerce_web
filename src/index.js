import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./assets/global.css";
import App from "./App";
import { BrowserRouter, useLocation } from "react-router-dom";
import NavBar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";

const Main = () => {
  const location = useLocation();
  const hideComponentPaths = ["/login", "/signin"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {!hideComponentPaths.includes(location.pathname) && <NavBar />}
      <App />
      {!hideComponentPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
