import { Routes, Route } from "react-router-dom";
import Home from "./pages/buyer/home/Home";
import ProductView from "./pages/buyer/products/ProductView";
import ViewProducts from "./pages/buyer/products/ViewProducts";

function App() {
  return (
    <>
      {/* padding added to app cuz navbar is relative which overlaps onto app */}
      <div className="App" style={{ paddingTop: "5rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductView />} />
          <Route
            path="/products/:searchType/:itemName"
            element={<ViewProducts />}
          />
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
