import React from "react";
// import { NavLink } from "react-router-dom";

import Header from "../global/Header";
import Footer from "../global/Footer";

import "./aboutPage.css";

class AboutPage extends React.Component {
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
                            src="/img/About_MenuHeader.png"
                            alt="Menu Header"
                          />
                        </div>
                        <div className="row  m-0 p-0 justify-content-center text-center">
                          <div className="col-11 m-0 p-0 pt-2 pb-2 aboutMeLinksTop">
                            <a
                              className="aboutMeLinkColor"
                              href="https://johnhowiesteak.com/"
                              target="blank"
                            >
                              JOHN HOWIE &amp; STEAK
                            </a>
                          </div>
                          <div className="col-11 m-0 p-0 pt-2 pb-2 aboutMeLinks">
                            <a
                              className="aboutMeLinkColor"
                              href="http://www.seastarrestaurant.com"
                              target="blank"
                            >
                              SEASTAR RESTAURANT &amp; RAW BAR
                            </a>
                          </div>
                          <div className="col-11 m-0 p-0 pt-2 pb-2 aboutMeLinks">
                            <a
                              className="aboutMeLinkColor"
                              href="http://www.sportrestaurant.com"
                              target="blank"
                            >
                              SPORT RESTAURANT &amp; BAR
                            </a>
                          </div>
                          <div className="col-11 m-0 p-0 pt-2 pb-2 aboutMeLinks">
                            <a
                              className="aboutMeLinkColor"
                              href="http://www.adriaticgrill.com/"
                              target="blank"
                            >
                              ADRIATIC GRILL
                            </a>
                          </div>
                        </div>
                      </section>
                      <section className="col-9 ">
                        <div className="aboutMeImageContainer">
                          <img
                            className="aboutMeImage"
                            src="/img/JH_Photo.png"
                            alt="Home Rotator"
                          />
                        </div>
                        <section className="row m-0 p-0 d-flex justify-content-center aboutMeFillerBG">
                          <div className="col-11  m-0 p-0">
                            <h1 className="m-0 p-0 pb-2 titleSection">
                              ABOUT JOHN HOWIE
                            </h1>
                            <p className="pt-2">
                              Chef John Howie is widely recognized as the
                              foremost expert on plank cooking, the time-honored
                              Northwest Native American method of roasting fish,
                              meats and fowl on cedar planks. He is the author
                              of “The Cedar Plank Cookbook” and “The Plank
                              Cookbook”. Chef Howie has five Award Winning
                              Restaurants in the Puget Sound region.{" "}
                              <a
                                href="http://www.seastarrestaurant.com"
                                target="blank"
                              >
                                Seastar Restaurant &amp; Raw Bar in Bellevue
                              </a>
                              , and in Seattle.{" "}
                              <a
                                href="http://www.sportrestaurant.com/"
                                target="blank"
                              >
                                SPORT Restaurant &amp; Bar
                              </a>
                              ,{" "}
                              <a
                                href="http://www.adriaticgrill.com/"
                                target="blank"
                              >
                                Adriatic Grill, Italian Cuisine &amp; Wine Bar
                              </a>
                              , and his name sake{" "}
                              <a
                                href="http://www.johnhowiesteak.com"
                                target="blank"
                              >
                                John Howie Steak
                              </a>
                              .
                              <br />
                              He has recently authored “Passion &amp; Palate” a
                              beautiful cookbook filled with stories, recipes,
                              and beautiful photography, including over 240
                              recipes. He has appeared on Martha Stewart Living
                              Television, CBS Early Morning Show, Food Network’s
                              “Best Of,” the Food Channel’s United Tastes of
                              America with Chef Jeffrey Saad, and Rick Browne’s
                              Barbeque America.
                            </p>
                            <h1 className="m-0 p-0 pb-2 titleSection">
                              ABOUT PLANK COOKING
                            </h1>
                            <p className="pt-2">
                              Cedar and Alder plank cooking was created by
                              Northwest Native Americans. They would tie fish
                              and game to large Western red cedar or alder
                              planks. They would then place the planks around
                              open fires, and the residual heat from the fire
                              would cook the fish or game.
                              <br />
                              This cooking procedure was done for hundreds of
                              years, more out of a necessity for a cooking
                              surface than anything else.
                              <br />
                              In the late 1990’s I started experimenting with
                              cooking planks. While developing the menu for
                              Palisade Restaurant I was introduced to baking
                              planks. I was intrigued by this method of cooking
                              as it gave us a tie to the Northwest Native
                              Americans and was a simple yet flavorful and
                              healthy way to cook.
                              <br />
                              Salmon was the first recipe I created for plank
                              cooking. Chef Garrett Cho and I worked on
                              perfecting a great salmon recipe which we
                              eventually placed on the opening menu for
                              Palisade-it quickly became one of the bestselling
                              entrées.
                            </p>
                            <div className="row w-100 m-0 p-0">
                              <div className="col-6 m-0 p-0">
                                <p>
                                  Soon after that I asked my step-father, Phil
                                  Bagwill if he’d make cedar planks for me to
                                  use. He did, and in so doing started a
                                  business for himself selling baking and BBQ
                                  planks to specialty and food stores. Phil came
                                  to me and asked me to create a cookbook for
                                  him. So my family and I ate from cedar and
                                  alder baking planks for months, until I had
                                  enough great recipes to make the Cedar Plank
                                  Cookbook-or the blue cookbook as we call it.
                                </p>
                              </div>
                              <div className="col-6 m-0 p-0">
                                <img
                                  className="historyImage"
                                  src="/img/History_image_placeholder.png"
                                  alt="History Placeholder"
                                />
                              </div>
                            </div>
                            <p>
                              I also started experimenting with BBQ Planks, and
                              within another year I had the Plankcooking
                              Cookbook (or the green cookbook). It includes
                              recipes specifically designed for Alder Baking
                              Planks, Cedar BBQ Planks, as well as Cedar Baking
                              Planks.
                            </p>
                            <h1 className="m-0 p-0 pb-2 titleSection">
                              PLANK INFORMATION
                            </h1>
                            <p className="pt-2">
                              <span className="bold">Baking Planks</span> – The
                              benefits of using baking planks are many. They
                              impart subtle wood flavors, and they maintain the
                              natural juices in the meats and vegetables that
                              are cooked on the plank, making for moist
                              flavorful foods. They are easy to use and because
                              they maintain the natural moisture you don’t need
                              to add other fats, such as butter; but of course
                              you still can if you want. Our baking planks come
                              in two different woods-both Western red cedar and
                              alder. The cedar is a little more aromatic and
                              adds a stronger woodsy flavor to the foods that
                              are cooked on it. The alder is milder and sweeter,
                              with a very subtle flavor.
                              <br />
                              The baking planks are designed to be used in your
                              home oven. They are made to be used repeatedly for
                              years to come. Using 1 ½” thick kiln-dried wood,
                              the center of the plank is routed out to form a
                              cooking surface. Then we drill two holes through
                              the plank on each end, and place a metal bolt
                              running through the holes with a knot on each end.
                              This is done to help keep the plank from cracking;
                              or if it does crack to help hold it together so it
                              can be used for years.
                              <br />
                              <span className="bold">BBQ Planks</span> – Have
                              similar benefits to that of the baking plank, in
                              addition the BBQ planks add incredible flavor to
                              the foods cooked on them-from the woodsy flavored
                              cedar oils to the rich smoke from the charred
                              edges and bottom. They, too, maintain natural
                              moisture in the foods cooked on them. Our BBQ
                              planks are made from clear Western red cedar. BBQ
                              planks are designed to be used on your BBQ and are
                              intended to be used one time.
                            </p>
                            <h1 className="m-0 p-0 pb-2 titleSection">
                              BAKING PLANK - USE, CARE, HANDLING &amp; CLEANING
                            </h1>
                            <p className="pt-2">
                              Before using your plank for the first time it is
                              best to oil the entire plank with an inexpensive
                              vegetable oil. Using a paper towel, rub oil over
                              the entire plank front, back, sides, and the
                              cooking surface. Remove any excess oil with a
                              clean paper towel. You only need to oil the plank
                              once. The oil will help maintain the beauty of the
                              natural woods and keep it from staining. After
                              oiling it is ready for use.
                              <br />
                              Baking planks never need to be soaked in water.
                              They are to be used in your home oven. The oven
                              should always be pre-heated to between 375° to
                              425º depending on the recipe. You will always use
                              the oven in baking mode, never on the broiler. The
                              plank should always be placed in the center of the
                              oven on the metal rack. If your plank has a slight
                              crack, it can be placed on a cookie sheet to
                              ensure none of the juices flow onto the oven's
                              surface. It is best to use a conventional oven. A
                              convection oven can be used, but the whirling hot
                              air can lead to a splitting or cracking of the
                              plank.
                              <br />
                              After use, baking planks should be washed with
                              warm water and dish soap. I like to use the orange
                              and yellow Tuffy™ pad to remove any baked on
                              juices or seasoning. Rinse with hot water and let
                              the plank air dry. Place in a dry cupboard until
                              next use.
                            </p>
                            <h1 className="m-0 p-0 pb-2 titleSection">
                              BBQ PLANK - USE, CARE, HANDLING &amp; CLEANING
                            </h1>
                            <p className="pt-2">
                              Before using your BBQ planks they must be soaked
                              through completely. This can be done by placing
                              them in a 2” deep baking pan. Then cover them with
                              water. Place a paper weight or a coffee cup filled
                              with water on top of the planks to keep them
                              submerged. The planks will be sufficiently soaked
                              in approximately 1-1 ½ hours, but can continue to
                              soak as long as you want until you are ready to
                              use them.
                              <br />
                              BBQ Planks are best for gas BBQ grills. The wood
                              adds flavor and the BBQ planks will char on the
                              bottom and smoke adding a great smoke flavor, too.
                              Pre-heat your gas grill on high for 5-10 minutes
                              until red hot. Remove the planks from the water
                              and pat dry with a paper towel. Place the fish,
                              meat, or other items on the plank, leaving room
                              around the edges and in-between the items so they
                              will cook evenly.
                              <br />
                              Place the planks on the grill, turn the gas grill
                              down to medium-high, cover, and cook until the
                              foods are cooked to the desired temperature. Check
                              periodically about every 3 minutes to ensure the
                              planks have not caught on fire. If the edges are
                              on fire, just spray them with a little water,
                              cover the grill and continue to cook. Once the
                              planks have caught on fire you will need to check
                              them every 1-2 minutes and spray them to stop the
                              fire.
                              <br />
                              When the food has finished cooking the planks will
                              be completely charred on the bottom side, with an
                              un-charred top side except around the edges. If
                              the planks are heavily charred remove carefully
                              from the grill with a pair of strong tongs and a
                              metal spatula to ensure the plank is stable. Place
                              the planks on a cookie sheet and serve directly
                              from the plank, or remove the food from the
                              planks, place on a serving tray, and serve.
                              <br />
                              BBQ Planks can be used on a charcoal grill if
                              desired. The charcoal fire should be turning gray
                              and no flames should be evident before proceeding
                              to cook with the planks.
                              <br />
                              If used properly…BBQ planks are made to be used
                              once and discarded, although some people claim
                              they have used them several times before needing
                              to discard, while others say they break them up
                              and use with the charcoal the next time they BBQ.
                            </p>
                            <h1 className="m-0 p-0 pb-2 titleSection">FAQs</h1>
                            <p className="pt-2">
                              <span className="bold">
                                Why doesn’t the baking plank catch on fire in
                                the oven?
                              </span>{" "}
                              The oven never gets hot enough to reach the
                              flash-point of the wood. By following the recipes
                              and keeping the cooking temperatures at 425°or
                              below, unless the planks make contact with an oven
                              element they will not catch on fire in the oven.
                              <br />
                              <span className="bold">
                                How long do you have to soak the baking plank
                                before use?
                              </span>{" "}
                              Trick question…you don’t ever have to soak the
                              baking plank-they are used as they are, no soaking
                              necessary.
                              <br />
                              <span className="bold">
                                Why do the baking planks help keep moisture in
                                the foods that are cooked on them?
                              </span>{" "}
                              When you bake on a glass, porcelain, or metal
                              dish, that dish conducts heat and becomes the same
                              temperature as the oven it's in. The planks don’t
                              conduct heat so the foods roast from the top, but
                              never cook from the bottom. That is why you never
                              see any burnt juices on the bottom of a plank like
                              you do with pans that conduct heat; all the
                              natural juices stay inside the foods.
                              <br />
                              <span className="bold">
                                Can I use my baking plank on the BBQ grill?{" "}
                              </span>
                              Sure you can…I don’t recommend it, as it is much
                              more difficult to maintain the proper heat levels,
                              and it is possible that you could catch your
                              expensive baking plank on fire. Just use the BBQ
                              planks-they are easy and cheap.
                              <br />
                              <span className="bold">
                                Do I need separate baking planks for fish, meat,
                                vegetables, or dessert recipes?
                              </span>
                              No, you really only need one plank for any of
                              these things. You may need two or more if you want
                              to cook for several people. But the natural oils
                              in the plank don’t allow it to absorb flavors, so
                              you can use the same plank for salmon as you would
                              for the apple dessert-just be sure to clean the
                              plank properly between uses.
                              <br />
                              <span className="bold">
                                Why can’t I just use a cedar roofing shake, or a
                                cedar fence board to cook on?
                              </span>{" "}
                              You probably could, but there are problems with
                              some of these options. First, you need to make
                              sure that the wood has never been chemically
                              treated-you could poison someone. Second, the
                              cedar shakes and fence boards are not the exact
                              size you need. Shakes are thin on one end and
                              thick on the other, and make for an uneven
                              cooking. The fence boards are too thick. The BBQ
                              planks have been designed to allow enough heat to
                              come through to cook the food properly without
                              burning through.
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

export default AboutPage;
