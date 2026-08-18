import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        backgroundColor: "#4CAF50",
        color: "white"
      }}
    >
      <h2>Paradise Nursery</h2>

      <nav>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>
          Home
        </Link>

        <Link to="/plants" style={{ color: "white", marginRight: "15px" }}>
          Plants
        </Link>

        <Link to="/cart" style={{ color: "white" }}>
          🛒 0
        </Link>
      </nav>
    </header>
  );
}

export default Header;