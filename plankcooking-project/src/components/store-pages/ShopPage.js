import React from "react";
import { NavLink } from "react-router-dom";

import Header from "../global/Header";
import Footer from "../global/Footer";

import "./shopPage.css";

class ShopPage extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid m-0 p-0 mainContainer">
          <div className="row w-100 m-0 p-0 justify-content-center ">
            <div className="container m-0 p-0 contentsContianer">
              <div className="row w-100 m-0 p-0 justify-content-center">
                <Header />
                <div className="row w-100 m-0 p-0 justify-content-center">
                  <div className="col-10">
                    <div className="row m-0 p-0 pt-5 ">
                      <section className="col-3">
                        <div className="row  w-100 m-0 p-0 justify-content-center">
                          <img
                            className="aboutMeHeaderLinks"
                            src="/img/Shop_MenuHeader.png"
                            alt="Menu Header"
                          />
                        </div>
                        <div className="row  m-0 p-0 justify-content-center text-center">
                          <div className="col-11 m-0 p-0 pt-2 pb-2 aboutMeLinksTop">
                            <NavLink
                              className="aboutMeLinkColor"
                              to="/shop/SpiceRubs"
                            >
                              SPICE RUBS
                            </NavLink>
                          </div>
                          <div className="col-11 m-0 p-0 pt-2 pb-2 aboutMeLinks">
                            <NavLink
                              className="aboutMeLinkColor"
                              to="/shop/Cookbooks"
                            >
                              COOKBOOKS
                            </NavLink>
                          </div>
                          <div className="col-11 m-0 p-0 pt-2 pb-2 aboutMeLinks">
                            <NavLink
                              className="aboutMeLinkColor"
                              to="/shop/BakingPlanks"
                            >
                              BAKING PLANKS
                            </NavLink>
                          </div>
                          <div className="col-11 m-0 p-0 pt-2 pb-2 aboutMeLinks">
                            <NavLink
                              className="aboutMeLinkColor"
                              to="/shop/BBQPlanks"
                            >
                              BBQ PLANKS
                            </NavLink>
                          </div>
                          <div className="col-11 m-0 p-0 pt-2 pb-2 aboutMeLinks">
                            <NavLink
                              className="aboutMeLinkColor"
                              to="/shop/NutDriver"
                            >
                              NUT DRIVER
                            </NavLink>
                          </div>
                        </div>
                      </section>
                      <section className="col-9 ">
                        <section className="row m-0 p-0 pt-3 d-flex justify-content-center recipesFillerBG">
                          <div className="col-11 m-0 p-0 pb-4">
                            <h1 className="m-0 p-0 titles">
                              <div className="col-5 m-0 p-0 pt-1 pb-1 titleSectionRight">
                                PLANKCOOKING PRODUCTS
                              </div>
                            </h1>
                            <div className="row w-100 m-0 p-0 justify-content-center">
                              <div className="row w-75 m-0 p-0 justify-content-center">
                                <div className="col-6 m-0 p-0">
                                  <NavLink to="/shop/SpiceRubs">
                                    <img
                                      src="/img/SpiceRubs_cube.png"
                                      alt="Spice Rubs"
                                    />
                                  </NavLink>
                                  <NavLink to="/shop/BakingPlanks">
                                    <img
                                      src="/img/BakingPlanks_cube.png"
                                      alt="Baking Planks"
                                    />
                                  </NavLink>
                                </div>
                                <div className="col-6 m-0 p-0">
                                  <NavLink to="/shop/Cookbooks">
                                    <img
                                      src="/img/Cookbooks_cube.png"
                                      alt="Cookbooks"
                                    />
                                  </NavLink>
                                  <NavLink to="/shop/BBQPlanks">
                                    <img
                                      src="/img/BBQ_Planks_cube.png"
                                      alt="Cookbooks"
                                    />
                                  </NavLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </section>
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShopPage;
