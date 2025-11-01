import { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.style.scss";
import { CartContext } from "../../contexts/cart-context/cart-context";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems, clearCart, setIsCartOpen } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonType="inverted">
        <Link
          to="checkout"
          onClick={() => {
            setIsCartOpen(false);
          }}
        >
          Go To Checkout
        </Link>
      </Button>

      {cartItems.length > 0 && (
        <Button
          buttonType="inverted"
          style={{ zIndex: 100, position: "relative" }}
          onClick={clearCart}
        >
          Clear Cart
        </Button>
      )}
    </div>
  );
};

export default CartDropDown;
