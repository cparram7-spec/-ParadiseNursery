import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

  const totalItems = useSelector(
    (state) =>
      state.cart.cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      )
  );

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: "#4CAF50",
        color: "white",
      }}
    >
      <h2>Paradise Nursery</h2>

      <nav>
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "20px",
          }}
        >
          Home
        </Link>

        <Link
          to="/plants"
          style={{
            color: "white",
            marginRight: "20px",
          }}
        >
          Plants
        </Link>

        <Link
          to="/cart"
          style={{
            color: "white",
          }}
        >
          🛒 {totalItems}
        </Link>
      </nav>
    </header>
  );
}

export default Header;