import React, { useContext } from "react";
import Header from "../components/Layouts/Header";
import { CartContext } from "../components/CartContext";

function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (

 <>
      <Header />
      <div className="container mt-5 mb-5">
        {cartItems.length === 0 ? (
            <div className="text-center">
          <h1>Your cart is empty.</h1>
          </div>
        ) : (
            <>
            <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  {item.name} (x{item.quantity}) - ${ (item.price * item.quantity).toFixed(2) }
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          
            <div className="cart-summary text-center">
              <h4>Total: ${total.toFixed(2)}</h4>
              <button className="btn btn-success mt-3">Proceed to Checkout</button>
            </div>
            </>
        )}
      </div>
    </>
  );
}

export default Cart;
