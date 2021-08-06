import React from "react";
import { NavLink } from "react-router-dom";

import Header from "../../global/Header";
import Footer from "../../global/Footer";
import SRItem from "./SRItem";
import SRItemsStore from "../../stores/SRItemsStore";
import SRItemActions from "../../actions/SRItemActions";

import "../shopPage.css";

class SRPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { srItems: [], srItemsCart: [] };

    this.onQtyHasChanged = this.onQtyHasChanged.bind(this);
  }

  componentDidMount() {
    // set the state of srItems to srItems array
    this.setState({ srItems: SRItemsStore.getSRItems() });
    SRItemsStore.addChangeListener(this.handleQtyChanged);
    SRItemsStore.addChangeListener(this.handleAddToCart);
  }

  componentWillUnmount() {
    SRItemsStore.removeChangeListener(this.handleQtyChanged);
    SRItemsStore.removeChangeListener(this.handleAddToCart);
  }

  onQtyHasChanged() {
    this.setState({ srItems: SRItemsStore.getSRItems() });
  }

  isNumberEvent = (event) => {
    let num = event.which ? event.which : event.keyCode;
    if (num > 31 && (num < 47 || num > 57) && (num < 95 || num > 106)) {
      event.preventDefault();
    }
  };

  handleQtyChanged = (event) => {
    let items = [...this.state.srItems];
    let item = { ...items[event.target.name - 1], qty: event.target.value };
    items[event.target.name - 1] = item;
    console.log(items);
    // this.setState({ ...items[event.target.name - 1], qty: event.target.value });
    console.log(this.state);
    // this.forceUpdate();
    return item;
  };

  handleAddToCart = (event) => {
    console.log("handleAddToCart Called");
    console.log(this.items);
    // // do I need to put this inside of the action?
    // let srItemsCopy = Object.assign({}, this.state.srItems);

    // // srItemsCopy.srItems[this.key] = srItemsCopy.srItems.slice();
    // // srItemsCopy.srItems[this.key].qtyInput = event.target.value;
    // this.setState({
    //   ...this.items[event.target.name - 1],
    //   qty: event.target.value,
    // });
    //   console.log(this.state.srItems);
    // does this bomb because ?
    SRItemActions.addToCart({
      srItems: this.srItems,
    });
    // console.log("Updated.." + event.target.value);
    console.log("pass this.state to SRItemStore dispatcher" + this.srItems);
  };

  render() {
    console.log("Render Called..");
    // console.log(this.state);

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
                        <div className="aboutMeImageContainer">
                          <img
                            className="aboutMeImage"
                            src="/img/SpiceRubs_Header.png"
                            alt="Home Rotator"
                          />
                        </div>
                        <section className="row m-0 p-0 d-flex justify-content-center aboutMeFillerBG">
                          <div className="col-11 m-0 p-0 pb-4">
                            <p className="pt-2 whiteT">
                              Chef Howie created 3 Chefs In A Tub spice rubs and
                              seasoning blends to bring professional flavor to
                              home cooking. Very easy to use. Just season cook
                              and serve. Made with all natural ingredients,
                              dried herbs and mushrooms, spices, lemon, garlic,
                              onion, brown sugar and kosher salt, no MSG or
                              other chemical additives.
                            </p>
                            {this.state.srItems.map((srItem) => {
                              return (
                                <SRItem
                                  srItem={srItem}
                                  onAddToCart={this.handleAddToCart}
                                  onQtyChange={this.handleQtyChanged}
                                  onKeyPressed={this.isNumberEvent}
                                  key={srItem.img}
                                />
                              );
                            })}
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

export default SRPage;
