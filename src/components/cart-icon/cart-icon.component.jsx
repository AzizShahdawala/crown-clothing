import { useContext } from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";
import { CartContext } from "../../contexts/cart-context/cart-context";

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

  const toggleCartDropDown = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <ShoppingBag className="shopping-icon" onClick={toggleCartDropDown}/>
      <span className="item-count ">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
