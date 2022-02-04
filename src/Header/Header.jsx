import React from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="page-header">
      <nav className="page-header__navigation">
        <Link to="/">
          <div className="page-header__logo-container logo">
            <h1 className="logo__title">Currency Exchanger</h1>
          </div>
        </Link>

        <div className="page-header__pages-navigation pages-navigation">
          <NavLink to="/" className="pages-navigation__input-currencies-link">
            First page
          </NavLink>

          <NavLink to="/all" className="pages-navigation__all-currencies-link">
            Second page
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
