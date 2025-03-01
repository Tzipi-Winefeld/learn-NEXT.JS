"use client";

import { useCartStore } from "../store/cartStore";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div>
      <h1>🛒 עגלת הקניות שלך</h1>
      {cart.length === 0 ? (
        <p>העגלה ריקה</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>הסר</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button onClick={clearCart}>נקה עגלה</button>}
    </div>
  );
}
