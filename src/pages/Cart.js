import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.quantity}</p>
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;