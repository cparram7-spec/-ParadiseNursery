import CartItem from "./components/CartItem";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <AboutUs />
        <h1>Welcome to Paradise Nursery</h1>

        <Link to="/plants">
          <button className="start-btn">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
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
          element={<CartItem />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;