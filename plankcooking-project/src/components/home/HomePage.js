import React from "react";
import { NavLink } from "react-router-dom";

import Header from "../global/Header";
import Footer from "../global/Footer";

import "./home.css";

class HomePage extends React.Component {
  render() {
    return (
      <>
        {/* <body> */}
        <div className="container-fluid m-0 p-0 mainContainer">
          <div className="row w-100 m-0 p-0 justify-content-center ">
            <div className="container m-0 p-0 contentsContianer">
              <div className="row w-100 m-0 p-0 justify-content-center">
                <Header />
                <div className="row w-100 m-0 p-0 justify-content-center">
                  <div className="col--10 ">
                    <div className="row w-100 m-0 p-0 rotatorHomeBG">
                      <img
                        className=" rotatorImage"
                        src="/img/HomePg_Rotator_image1a.png"
                        alt="Home Rotator"
                      />
                    </div>
                    <div className="row m-0 p-0 justify-content-center">
                      <NavLink to="/Shop#/SpiceRubs">
                        <img src="/img/SpiceRubs_cube.png" alt="Spice Rubs" />
                      </NavLink>
                      <NavLink to="/Shop#/BakingPlanks">
                        <img
                          src="/img/BakingPlanks_cube.png"
                          alt="Baking Planks"
                        />
                      </NavLink>
                      <NavLink to="/Shop#/Cookbooks">
                        <img src="/img/Cookbooks_cube.png" alt="Cook Books" />
                      </NavLink>
                      <NavLink to="/Shop#/BBQPlanks">
                        <img src="/img/BBQ_Planks_cube.png" alt="BBQ Planks" />
                      </NavLink>
                    </div>
                    <div className="col-auto m-0 p-0">
                      <img
                        className=""
                        src="/img/FooterPlank.png"
                        alt="Footer Plank"
                      />
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
        {/* </body> */}
      </>
    );
  }
}

export default HomePage;
