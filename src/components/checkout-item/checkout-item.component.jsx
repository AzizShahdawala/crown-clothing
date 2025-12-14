import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context/cart-context";

import "./checkout-item.style.scss";

const CheckoutItem = ({ checkoutItem }) => {
  const { deleteCheckOutItem, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const { name, imageUrl, price, quantity } = checkoutItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <span className="arrow" onClick={() => removeItemFromCart(checkoutItem)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItemToCart(checkoutItem)}>
          &#10095;
        </span>
      </span>

      <span className="price">₹{price}</span>
      <span className="total-price">₹{price * quantity}</span>

      <span
        className="remove-button"
        onClick={() => deleteCheckOutItem(checkoutItem)}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
