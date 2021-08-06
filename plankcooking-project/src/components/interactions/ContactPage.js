import React from "react";

import Header from "../global/Header";
import Footer from "../global/Footer";

import "./contactPage.css";

class ContactPage extends React.Component {
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
                            src="/img/Contact_MenuHeader.png"
                            alt="Menu Header"
                          />
                        </div>
                      </section>
                      <section className="col-9 ">
                        <section className="row m-0 p-0 pt-3 d-flex justify-content-center recipesFillerBG">
                          <div className="col-11 m-0 p-0 pb-4">
                            <h1 className="m-0 p-0  titleSection">
                              <div className="col-5 m-0 p-0 pt-1 pb-1 titleSectionRight">
                                CONTACT US
                              </div>
                            </h1>
                            <div className="row w-100  m-0 p-0 contactBorder">
                              <p className="pt-2">
                                You can contact us one of two ways; click one of
                                the email links below to send us an email, or
                                call the customer service number.
                              </p>
                              <p className="pt-3 ml-2">
                                CUSTOMER SERVICE: <br />
                                <a href="/" type="email" target="_blank">
                                  ChefHowie@plankcooking.com
                                </a>
                                <br />
                                Phone: 425.881.0422
                                <br />
                                Fax: 425.881.7338
                              </p>
                            </div>
                            <p className="m-0 p-0 pt-3">
                              WHOLESALE OPPORTUNITIES are available, please
                              contact customer service for more information.
                            </p>
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

export default ContactPage;
