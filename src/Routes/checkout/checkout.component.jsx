import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context/cart-context";

import "./checkout.style.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Button from "../../components/button/button.component";

const Checkout = () => {
  const { cartItems, totalCartAmount, clearCart } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Total</span>
        <span>Remove</span>
      </div>

      <div className="checkout-items">
        {cartItems.map((cartItem) => (
          <CheckoutItem checkoutItem={cartItem} key={cartItem.id} />
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="checkout-footer">
          <span className="total">Total: ₹{totalCartAmount}</span>
          <Button buttonType="inverted" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
