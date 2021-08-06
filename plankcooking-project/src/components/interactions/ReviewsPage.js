import React from "react";

import Header from "../global/Header";
import Footer from "../global/Footer";

import "./reviewsPage.css";

class ReviewsPage extends React.Component {
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
                            src="/img/Reviews_MenuHeader.png"
                            alt="Menu Header"
                          />
                        </div>
                      </section>
                      <section className="col-9 ">
                        <section className="row m-0 p-0 pt-3 d-flex justify-content-center recipesFillerBG">
                          <div className="col-11 m-0 p-0 pb-4">
                            <div className="row w-100  m-0 p-0">
                              <div className="col-7 m-0 p-0">
                                <div className="reviewContainer">
                                  <img
                                    className="reviewImage"
                                    src="/img/JHandMartha_photo.png"
                                    alt="Reviews"
                                  />
                                </div>
                              </div>
                              <div className="col-5 m-0 p-0">
                                <div className="row w-100 m-0 p-0 ">
                                  <p className="reviewTitleContainer text-center pb-3">
                                    JOHN HOWIE &amp; PLANK COOKING ON MARTHA
                                    STEWART LIVING
                                  </p>
                                  <p className="italics text-center">
                                    "Delicious. This is a very unusual and
                                    tasty, tasty appetizer!"
                                    <br />
                                    <br />
                                    "I think we should all try plank cooking."
                                    <br />
                                    <br />
                                    Martha Stewart - Martha Stewart Living
                                    Television Show
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        <section className="row m-0 p-0 pt-3 d-flex justify-content-center recipesFillerBG">
                          <div className="col-11 m-0 p-0 pb-4">
                            <h1 className="m-0 p-0  titleSection">
                              <div className="col-6 m-0 p-0 pt-1 pb-1 titleSectionRight">
                                SIMPLY SEAFOOD MAGAZINE &copy;
                              </div>
                            </h1>
                            <div className="row w-100 m-0 p-0 reviewContentsContainer">
                              <div className="col-8 m-0 p-0">
                                <p className="pt-2 text-center">
                                  "Guests will delight in the delectable
                                  fragrance of salmon mingled with the aroma of
                                  the heated plank."
                                  <br />
                                  <span className="italics">
                                    Simply Seafood Magaize
                                  </span>
                                </p>
                              </div>
                              <div className="col-4 m-0 p-0">
                                <img
                                  src="/img/SimplySeafood_logo.png"
                                  alt="Simply Seafood"
                                />
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

export default ReviewsPage;
