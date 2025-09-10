import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

import "./navigation.style.scss";

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/crown-clothing" className="logo-container">
          <div>
           <img src={`${process.env.PUBLIC_URL}/images/crown.svg`} alt="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link to="shop" className="nav-link">
            SHOP
          </Link>
          <Link to="sign-in" className="nav-link">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
