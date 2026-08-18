import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <AboutUs />

        <Link to="/plants">
          <button className="start-btn">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

function Cart() {
  return <h1>Shopping Cart</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/plants"
          element={<ProductList />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;