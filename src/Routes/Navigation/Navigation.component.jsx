import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

import "./navigation.style.scss";
import { signOutWithAuth } from "../../utils/firebase/firebase.util";
import { showSuccess } from "../../utils/toast/toast.util";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";


const NavigationBar = () => {

  const {currentUser} = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutWithAuth();
    showSuccess('Signed out successfully!');
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/crown-clothing" className="logo-container">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/crown.svg`}
              alt="logo"
            />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link to="shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
          ) : (
            <Link to="auth" className="nav-link">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
