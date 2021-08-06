import Dispatcher from "../appDispatcher";
import ActionTypes from "./actionTypes";

class SRItemActions {
  addToCart(srItemsCart) {
    console.log("handleQtyChanged Called");

    Dispatcher.dispatch({
      ActionType: ActionTypes.ADD_TO_CART,
      srItems: srItemsCart,
    });
    console.log(srItemsCart);
  }
  // Dispatcher.dispatch({
  //   ActionType: actionTypes.ADD_TO_CART,
  //   srItemsCopy: srItem,
  // });
}

export default new SRItemActions();
