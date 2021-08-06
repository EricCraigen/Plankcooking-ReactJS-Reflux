import React from "react";
// import { NavLink } from "react-router-dom";

import Header from "../global/Header";
import Footer from "../global/Footer";
import CartItem from "./CartItem";
import SRItemsStore from "../stores/SRItemsStore";

import "./cartPage.css";

class CartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { srItems: [], field: "", value: "" };

    // this.props.handleQtyChanged = this.props.handleQtyChanged.bind(this);
  }

  componentDidMount() {
    // set the state of bidTypes to bidtypes array
    this.setState({ srItems: SRItemsStore.getSRItems() });
    SRItemsStore.addChangeListener(this.handleQtyChanged);
  }

  componentWillUnmount() {
    SRItemsStore.removeChangeListener(this.handleQtyChanged);
  }

  isNumberEvent = (event) => {
    let num = event.which ? event.which : event.keyCode;
    if (num > 31 && (num < 47 || num > 57) && (num < 95 || num > 106)) {
      event.preventDefault();
    }
  };

  handleQtyChanged = (event) => {
    console.log("Updated.." + event.target.value);
    let _field = event.target.name;
    let _value = event.target.value;

    if (_value && _field === "amount" && !_value.match(/^[a-z0-9. + -]+$/g)) {
      return;
    }
    this.setState({ field: _field });
    this.setState({ value: _value });

    console.log(_field, _value);
  };

  render() {
    console.log("Render Called..");
    console.log(this.state);

    return (
      <>
        <div className="container-fluid m-0 p-0 mainContainer">
          <div className="row w-100 m-0 p-0 justify-content-center ">
            <div className="container m-0 p-0 contentsContianer">
              <div className="row w-100 m-0 p-0 justify-content-center">
                <Header />
                <div className="row w-100 m-0 p-0 justify-content-center">
                  <div className="col-10">
                    <div className="row w-100 m-0 p-0 pt-3 pb-3 mt-5 justify-content-around align-items-center cartHead">
                      <p className="col-8 m-0 p-0">
                        SHOPPING CART: Your shopping cart contains {1} items.
                      </p>
                      <button
                        className="col-2 buttonContShopping"
                        type="button"
                        id="contShopping"
                        name="contShopping"
                      ></button>
                      <button
                        className="col-1 m-0 p-0 buttonCheckout"
                        type="button"
                        id="checkout"
                        name="checkout"
                      ></button>
                    </div>
                    <div className="row w-100 m-0 p-2 mt-3 justify-content-around align-items-center cartTable">
                      <div className="row w-100 m-0 p-0 cartTableHeader">
                        <div className="row m-0 p-0 pl-2 cartHeaderCells1">
                          <p className="m-0 p-0 py-1">Shipping to You</p>
                        </div>
                        <div className="row m-0 p-0 py-1 cartHeaderCells">
                          <p className="m-0 p-0">Price</p>
                        </div>
                        <div className="row m-0 p-0 py-1 cartHeaderCells">
                          <p className="m-0 p-0">Quantity</p>
                        </div>
                        <div className="row m-0 p-0 py-1 cartHeaderCells">
                          <p className="m-0 p-0">Total</p>
                        </div>
                      </div>
                      {this.state.srItems.map((srItem) => {
                        return (
                          <CartItem
                            srItem={srItem}
                            // onAddToCart={this.handleAddToCart}
                            onQty={this.handleQtyChanged}
                            onKeyPressed={this.isNumberEvent}
                            key={srItem.id}
                          />
                        );
                      })}
                      {/* insert */}
                      {/* <div className="row w-100 m-0 p-0 cartTableHeader">
                        <div className="row m-0 p-0 pl-2 cartCells1">
                          <p className="m-0 p-0 py-1">{"item name"}</p>
                        </div>
                        <div className="row m-0 p-0 py-1 cartCells">
                          <p className="m-0 p-0">{"$6.00"}</p>
                        </div>
                        <div className="row m-0 p-0 py-1 cartCells">
                          <p className="m-0 p-0 text-center">
                            <input
                              onChange={this.handleQtyChanged}
                              className="cartInputs"
                              type="text"
                              id="quantityInputCart"
                              name="quantityInputCart"
                              placeholder="0"
                            />
                          </p>
                        </div>
                        <div className="row m-0 p-0 py-1 cartCells">
                          <p className="row w-100 m-0 p-0 mt-1 justify-content-center">
                            {"$12.00"}
                          </p>
                          <button
                            className="row w-75 m-0 p-0 mt-3 cartRemoveButton"
                            type="button"
                            id="cartRemoveButton"
                            name="cartRemoveButton"
                          ></button>
                        </div>
                      </div> */}
                      {/* subtotal */}
                      <div className="row w-100 m-0 p-0 subTotalCell">
                        <div className="row m-0 p-0 cartCells1ND"></div>
                        <div className="row m-0 p-0 pl-2 cartCellSingle">
                          <p className="m-0 p-0 py-1 mr-5">Subtotal:</p>
                          <p className="m-0 p-0 py-1 mr-4">{"$12.00"}</p>
                        </div>
                      </div>
                      {/* buttons */}
                      <div className="row w-100 m-0 p-0 subTotalCell">
                        <div className="row m-0 p-0 cartCells1ND"></div>
                        <div className="row m-0 p-0 pl-2 cartCellSingle">
                          {/* <p className="row m-0 p-0 py-1"> */}
                          <button
                            className="col-5 buttonContShopping"
                            type="button"
                            id="contShopping"
                            name="contShopping"
                          ></button>
                          <button
                            className="col-4 m-0 p-0 mx-2 my-2 buttonCheckout"
                            type="button"
                            id="checkout"
                            name="checkout"
                          ></button>
                          {/* </p> */}
                        </div>
                      </div>
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

export default CartPage;
