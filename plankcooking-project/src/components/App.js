import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";

import HomePage from "./home/HomePage";
import AboutPage from "./about-us/AboutPage";
import ShopPage from "./store-pages/ShopPage";
import SRPage from "./store-pages/categories/SRPage";
import ReviewsPage from "./interactions/ReviewsPage";
import ContactPage from "./interactions/ContactPage";
import CartPage from "./store-pages/CartPage";
import RecipesPage from "./recipes/RecipesPage";

import "./global/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <>
        {/* <div className="pages"> */}
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/shop/SpiceRubs" component={SRPage} />
        <Route path="/reviews" component={ReviewsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/recipes" component={RecipesPage} />
        {/* </div> */}
      </>
    );
  }
}

export default App;
