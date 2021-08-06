import React from "react";
// import PropTypes from "prop-types";

// import SRItemStore from "../../stores/SRItemsStore";
// import SRItemActions from "../../actions/SRItemActions";

class SRItem extends React.Component {
  constructor(props) {
    super(props);
    this.srItem = this.props.srItem;
  }

  render() {
    // console.log(this.state);

    return (
      <>
        <section className="srItem m-0 p-0">
          <h1 className="m-0 p-0 mt-2 titles">
            <div className="col-7 m-0 p-0 pt-1 pb-1 titleSectionRight">
              {this.srItem.name}
            </div>
            <div className="row w-100 m-0 p-0 pt-2">
              <div className="col-7 m-0 p-0">
                <p className="m-0 p-0 whiteT">{this.srItem.desc}</p>
              </div>
              <div className="col-5 m-0 p-0">
                <div className="row w-100 m-0 p-0 justify-content-center">
                  <p className="m-0 p-0 whiteT text-center">
                    Price ${this.srItem.price} {this.srItem.wt}
                    <br />
                    Quantity:{" "}
                    <input
                      onKeyDown={this.props.onKeyPressed}
                      onChange={this.props.onQtyChange}
                      className="qtyInput"
                      type="text"
                      id={this.srItem.t0}
                      name={this.srItem.t0}
                      placeholder="0"
                      maxLength="2"
                    />
                  </p>
                  <button
                    onClick={this.props.onAddToCart}
                    className="mt-2 addToCart"
                    type="button"
                    id="addToCart"
                    name="addToCart"
                  />
                  <img
                    className="mt-4 mb-2"
                    src={this.srItem.img}
                    alt="Ancho Chili Rub"
                  />
                </div>
              </div>
            </div>
          </h1>
        </section>
      </>
    );
  }
}

export default SRItem;
