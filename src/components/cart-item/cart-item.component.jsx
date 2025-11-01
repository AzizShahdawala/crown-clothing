import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context/cart-context";

import "./cart-item.style.scss";

const CartItem = ({ cartItem }) => {
  const { deleteCheckOutItem } = useContext(CartContext);

  const { name, imageUrl, quantity, price } = cartItem;

  const removeCheckoutItem = (checkoutItem) => {
    deleteCheckOutItem(checkoutItem);
  };

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x &#8377;{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
