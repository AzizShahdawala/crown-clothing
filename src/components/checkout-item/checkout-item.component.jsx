import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context/cart-context";

import "./checkout-item.style.scss";

const CheckoutItem = ({ checkoutItem }) => {
  const { deleteCheckOutItem, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const { name, imageUrl, price, quantity } = checkoutItem;

  const removeCheckoutItem = (checkoutItem) => {
    deleteCheckOutItem(checkoutItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(checkoutItem)}>
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(checkoutItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">&#8377;{price}</span>
      <span className="price">&#8377;{price * quantity}</span>
      <div
        className="remove-button"
        onClick={() => removeCheckoutItem(checkoutItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
