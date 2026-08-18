import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalPlants = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <Header />

      <h1>Shopping Cart</h1>

      <h2>Total Plants: {totalPlants}</h2>

      <h2>
        Total Cost: ${calculateTotalAmount()}
      </h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            margin: "20px",
            padding: "15px",
          }}
        >
          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <p>
            Item Total: $
            {item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Remove
          </button>
        </div>
      ))}

      <Link to="/plants">
        <button>
          Continue Shopping
        </button>
      </Link>

      <button
        onClick={() =>
          alert("Coming Soon")
        }
      >
        Checkout
      </button>
    </>
  );
}

export default CartItem;