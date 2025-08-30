import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

import "./navigation.style.scss";

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <div><img src="./images/crown.svg" alt="logo" /></div>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
