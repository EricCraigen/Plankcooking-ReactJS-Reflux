import React from "react";

class CartItem extends React.Component {
  render() {
    return (
      <div className="row w-100 m-0 p-0 cartTableHeader">
        <div className="row m-0 p-0 pl-2 cartCells1">
          <p className="m-0 p-0 py-1">{"item name"}</p>
        </div>
        <div className="row m-0 p-0 py-1 cartCells">
          <p className="m-0 p-0">{"$6.00"}</p>
        </div>
        <div className="row m-0 p-0 py-1 cartCells">
          <p className="m-0 p-0 text-center">
            <input
              onChange={this.props.onQtyChange}
              onKeyDown={this.props.onKeyPressed}
              className="cartInputs"
              type="text"
              id="quantityInputCart"
              name="quantityInputCart"
              placeholder="0"
              maxLength="2"
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
      </div>
    );
  }
}

export default CartItem;
