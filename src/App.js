import { Routes, Route } from "react-router-dom";
import Home from "./pages/buyer/home/Home";
import ProductView from "./pages/buyer/products/ProductView";
import ViewProducts from "./pages/buyer/products/ViewProducts";
import Contact from "./pages/buyer/contact/Contact";
import About from "./pages/buyer/about/About";
import Cart from "./pages/buyer/order/Cart";
import Checkout from "./pages/buyer/order/Checkout";

function App() {
  return (
    <>
      {/* padding added to app cuz navbar is relative which overlaps onto app */}
      <div className="App" style={{ paddingTop: "5rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/:searchType/:itemName"
            element={<ViewProducts />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* Route that does not exists */}
          <Route
            path="*"
            element={<h1>404 error, this path doesn't exists.</h1>}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
