import React from "react";
import { NavLink } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="row w-100 m-0 p-0">
          <div className="row w-100 m-0 p-0 pb-5 d-flex justify-content-center ">
            {/* <div className="col-auto m-0 p-0">
              <img className="" src="/img/FooterPlank.png" alt="Footer Plank" />
            </div> */}
          </div>
          <div className="row w-100 m-0 p-0 pt-5 justify-content-center">
            <p className="footerLinks text-center">
              <NavLink className="footerLink" to="/about">
                ABOUT
              </NavLink>
              {" | "}
              <NavLink className="footerLink" to="/shop">
                SHOP
              </NavLink>
              {" | "}
              <NavLink className="footerLink" to="/reviews">
                REVIEWS
              </NavLink>
              {" | "}
              <NavLink className="footerLink" to="/recipes">
                RECIPES
              </NavLink>
              {" | "}
              <NavLink className="footerLink" to="/contact">
                CONTACT
              </NavLink>
              {" | "}
              <NavLink className="footerLink" to="/policies">
                POLICIES
              </NavLink>
              <br />
              &copy;Copyright 2020 Plankcooking.com. All Rights Reserved
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
