import React from "react";
import { NavLink } from "react-router-dom";

import "./headerFooter.css";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // isTop = () => {
  //   if (window.scrollTop() > 280) {
  //     document.getElementById("navbarNav").addClass("navbar-fixed");
  //   }
  //   if (window.scrollTop() < 281) {
  //     document.getElementById("navbarNav").removeClass("navbar-fixed");
  //   }
  // };

  render() {
    return (
      <>
        <header className="row w-100 m-0 p-0 justify-content-center">
          <nav className="navbar navbar-expand-lg w-100 m-0 p-0">
            <div className="col-12 m-0 p-0">
              <div className="row m-0 p-0 justify-content-center">
                <NavLink className="navbar-brand m-0 p-0 brandStyle" to="/">
                  <img
                    src="/img/PC_LogoHeader_Home.png"
                    alt="LogoHeader_Home"
                  />
                </NavLink>
                <NavLink className="align-self-end" to="/cart">
                  <img src="/img/Cart_Button_main.png" alt="CartButton_Main" />
                </NavLink>
              </div>
              <div className="row m-0 p-0">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  // onScroll={Header.isTop()}
                  className="collapse navbar-collapse justify-content-center navStyles"
                  id="navbarNav"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <NavLink className="nav-link navLinks" to="/about">
                        About<span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li className="nav-item col-2">
                      <NavLink className="nav-link navLinks" to="/shop">
                        Shop
                      </NavLink>
                    </li>
                    <li className="nav-item col-2">
                      <NavLink className="nav-link navLinks" to="/reviews">
                        Reviews
                      </NavLink>
                    </li>
                    <li className="nav-item col-2">
                      <NavLink className="nav-link navLinks" to="/recipes">
                        Recipes
                      </NavLink>
                    </li>
                    <li className="nav-item col-2">
                      <NavLink className="nav-link navLinks" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
