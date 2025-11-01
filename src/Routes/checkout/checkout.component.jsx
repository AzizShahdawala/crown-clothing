import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context/cart-context";

import "./checkout.style.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Button from "../../components/button/button.component";

const Checkout = () => {
  const { cartItems, totalCartAmount, clearCart } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Total Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem checkoutItem={cartItem} key={cartItem.id} />;
      })}

      {cartItems.length > 0 && (
        <span className="total">Total: &#8377;{totalCartAmount}</span>
      )}
      {cartItems.length > 0 && (
        <Button buttonType="inverted" onClick={clearCart}>
          Clear Checkout
        </Button>
      )}
    </div>
  );
};

export default Checkout;
