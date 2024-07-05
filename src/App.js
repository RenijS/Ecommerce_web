import { Routes, Route } from "react-router-dom";
import Home from "./pages/buyer/home/Home";
import ProductView from "./pages/buyer/products/ProductView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductView />} />
        {/* Route that does not exists */}
        <Route
          path="*"
          element={<h1>404 error, this path doesn't exists.</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
