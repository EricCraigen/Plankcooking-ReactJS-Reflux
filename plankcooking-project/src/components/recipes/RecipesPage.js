import React from "react";
// import { NavLink } from "react-router-dom";

import Header from "../global/Header";
import Footer from "../global/Footer";

import "./recipesPage.css";

class RecipesPage extends React.Component {
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
                            src="/img/Recipe_MenuHeader.png"
                            alt="Menu Header"
                          />
                        </div>
                      </section>
                      <section className="col-9 ">
                        <section className="row m-0 p-0 pt-3 d-flex justify-content-center recipesFillerBG">
                          <div className="col-11 m-0 p-0 pb-5">
                            <h1 className="m-0 p-0 pt-1 pb-1 titleSection">
                              Alder Plank Roasted Porcini Crusted Salmon with
                              Pesto Rice
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the Alder
                              Plank Roasted Porcini Crusted Salmon with Pesto
                              Rice recipe.
                            </p>
                            <a
                              href="/recipePDFs/Alder_Plank_Roasted_Porcini_Crusted_Salmon_with_Pesto_Rice.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Ancho Chili Rubbed Chicken with Corn Relish
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the Ancho
                              Chili Rubbed Chicken with Corn Relish recipe.
                            </p>
                            <a
                              href="/recipePDFs/Ancho_Chili_Rubbed_Chicken_with_Corn_Relish.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Cedar BBQ Plank Roasted Spicy Pecan Halibut
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the Cedar
                              BBQ Plank Roasted Spicy Pecan Halibut recipe.
                            </p>
                            <a
                              href="/recipePDFs/Cedar_BBQ_Plank_Roasted_Spicy_Pecan_Halibut.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Cedar Plank Roasted Mushrooms
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the Cedar
                              Plank Roasted Mushrooms recipe.
                            </p>
                            <a
                              href="/recipePDFs/Cedar_Plank_Roasted_Mushrooms.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Garlic Chicken Dijon
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the Garlic
                              Chicken Dijon recipe.
                            </p>
                            <a
                              href="/recipePDFs/Garlic_Chicken_Dijon.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Maple Roasted Pork Chops and Pearl Onions
                            </h1>
                            <div className="row w-100 m-0 p-0">
                              <p className="col-8 m-0 p-0 pt-2">
                                Click the Recipe PDF button to download the
                                Maple Roasted Pork Chops and Pearl Onions
                                recipe.
                                <br />
                                <a
                                  href="/recipePDFs/Maple_Roasted_Pork_Chops_and_Pearl_Onions.pdf"
                                  target="_blank"
                                >
                                  <img
                                    src="/img/RecipeDownload_Button.png"
                                    alt="Recipe Download"
                                  />
                                </a>
                              </p>
                              <img
                                className="col-4 pt-2 recipeImages"
                                src="/img/MaplePorkChops_RecipeImage.png"
                                alt="Maple Porck Chops"
                              />
                            </div>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Maple Turkey w/Apple-Pecan Stuffing
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the Maple
                              Turkey w/Apple-Pecan Stuffing recipe.
                            </p>
                            <a
                              href="/recipePDFs/Maple_Turkey_with_Apple_Pecan_Stuffing.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Plank Roasted Baby Back Ribs
                            </h1>
                            <div className="row w-100 m-0 p-0">
                              <p className="col-8 m-0 p-0 pt-2">
                                Click the Recipe PDF button to download the
                                Plank Roasted Baby Back Ribs recipe.
                                <br />
                                <a
                                  href="/recipePDFs/Plank_Roasted_Baby_Back_Ribs.pdf"
                                  target="_blank"
                                >
                                  <img
                                    src="/img/RecipeDownload_Button.png"
                                    alt="Recipe Download"
                                  />
                                </a>
                              </p>
                              <img
                                className="col-4 pt-2 recipeImages"
                                src="/img/BBQRibs_RecipeImage.png"
                                alt="Maple Porck Chops"
                              />
                            </div>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Plank Roasted Dungeness Crab Stuffed Mushrooms
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the Plank
                              Roasted Dungeness Crab Stuffed Mushrooms recipe.
                            </p>
                            <a
                              href="/recipePDFs/Plank_Roasted_Dungeness_Crab_Stuffed_Mushrooms.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Plank Roasted Garlic-Rosemary Pork Chops
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the Plank
                              Roasted Garlic-Rosemary Pork Chops recipe.
                            </p>
                            <a
                              href="/recipePDFs/Plank_Roasted_Garlic_Rosemary_Pork_Chops.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Plank Roasted Honey Mustard Chicken
                            </h1>
                            <div className="row w-100 m-0 p-0">
                              <p className="col-8 m-0 p-0 pt-2">
                                Click the Recipe PDF button to download the
                                Plank Roasted Honey Mustard Chicken recipe.
                                <br />
                                <a
                                  href="/recipePDFs/Plank_Roasted_Honey_Mustard_Chicken.pdf"
                                  target="_blank"
                                >
                                  <img
                                    src="/img/RecipeDownload_Button.png"
                                    alt="Recipe Download"
                                  />
                                </a>
                              </p>
                              <img
                                className="col-4 pt-2 recipeImages"
                                src="/img/MustardChicken_RecipeImage.png"
                                alt="Maple Porck Chops"
                              />
                            </div>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Plank Roasted Pesto Stuffed Chicken Breast
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the Plank
                              Roasted Pesto Stuffed Chicken Breast recipe.
                            </p>
                            <a
                              href="/recipePDFs/Plank_Roasted_Pesto_Stuffed_Chicken_Breast.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Plank Roasted Pumpkin Soup
                            </h1>
                            <div className="row w-100 m-0 p-0">
                              <p className="col-8 m-0 p-0 pt-2">
                                Click the Recipe PDF button to download the
                                Plank Roasted Pumpkin Soup recipe.
                                <br />
                                <a
                                  href="/recipePDFs/Plank_Roasted_Pumpkin_Soup.pdf"
                                  target="_blank"
                                >
                                  <img
                                    src="/img/RecipeDownload_Button.png"
                                    alt="Recipe Download"
                                  />
                                </a>
                              </p>
                              <img
                                className="col-4 pt-2 recipeImages"
                                src="/img/PumpkinSoup_RecipeImage.png"
                                alt="Maple Porck Chops"
                              />
                            </div>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Plank Roasted Sausage Stuffed Zucchini
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the Plank
                              Roasted Sausage Stuffed Zucchini recipe.
                            </p>
                            <a
                              href="/recipePDFs/Plank_Roasted_Sausage_Stuffed_Zucchini.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Porcini Chicken with Lemon-Thyme Zucchini
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the
                              Porcini Chicken with Lemon-Thyme Zucchini recipe.
                            </p>
                            <a
                              href="/recipePDFs/Porcini_Chicken_with_Lemon_Thyme_Zucchini.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Pork Tenderloin with Herb Stuffing and Onions
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the Pork
                              Tenderloin with Herb Stuffing and Onions recipe.
                            </p>
                            <a
                              href="/recipePDFs/Pork_Tenderloin_with_Herb_Stuffing_and_Onions.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Salmon Oregano with Lemon Caper Dressing
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the Salmon
                              Oregano with Lemon Caper Dressing recipe.
                            </p>
                            <a
                              href="/recipePDFs/Salmon_Oregano_with_Lemon_Caper_Dressing.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Salmon with Basil-Garlic Rub
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the Salmon
                              with Basil-Garlic Rub recipe.
                            </p>
                            <a
                              href="/recipePDFs/Salmon_with_Basil_Garlic_Rub.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Sea Bass with Ginger
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the Sea
                              Bass with Ginger recipe.
                            </p>
                            <a
                              href="/recipePDFs/Sea_Bass_with_Ginger.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              Teriyaki Chicken Wings - Appetizer
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the
                              Teriyaki Chicken Wings - Appetizer recipe.
                            </p>
                            <a
                              href="/recipePDFs/Teriyaki_Chicken_Wings_Appetizer.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              The Original Cedar Plank Roasted Salmon
                            </h1>
                            <div className="row w-100 m-0 p-0">
                              <p className="col-8 m-0 p-0 pt-2">
                                Click the Recipe PDF button to download the The
                                Original Cedar Plank Roasted Salmon recipe.
                                <br />
                                <a
                                  href="/recipePDFs/The_Original_Cedar_Plank_Roasted_Salmon.pdf"
                                  target="_blank"
                                >
                                  <img
                                    src="/img/RecipeDownload_Button.png"
                                    alt="Recipe Download"
                                  />
                                </a>
                              </p>
                              <img
                                className="col-4 pt-2 recipeImages"
                                src="/img/CedarPlankSalmon_RecipeImage.png"
                                alt="Maple Porck Chops"
                              />
                            </div>
                            <h1 className="m-0 mt-3 p-0 pt-1 pb-1 titleSection">
                              White King Salmon with Roasted Fennel
                            </h1>
                            <p className="pt-2">
                              Click the Recipe PDF button to download the White
                              King Salmon with Roasted Fennel recipe.
                            </p>
                            <a
                              href="/recipePDFs/White_King_Salmon_with_Roasted_Fennel.pdf"
                              target="_blank"
                            >
                              <img
                                src="/img/RecipeDownload_Button.png"
                                alt="Recipe Download"
                              />
                            </a>
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

export default RecipesPage;
