import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import ActionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _srItems = [];

class SRItemsStore extends EventEmitter {
  constructor() {
    super();
    _srItems = [
      {
        t0: 1,
        name: "Ancho Chili Rub",
        desc:
          "Just a little spice, the Ancho Chili Rub has a rich-smoky chili flavor, with a very mild heat. Use it on chicken, pork, salmon, prawns, and ribs. The smoked ancho chili adds a smoky richness to the blend while the chipotle chili adds just a little zip.",
        price: 6.0,
        wt: "NET WT. 3.65 oz's",
        qty: 0,
        img: "/img/AnchoChiliRub.png",
      },
      {
        t0: 2,
        name: "Salmon Rub",
        desc:
          "Chef Howie’s Original Signature Salmon Rub works great with the cedar, alder or BBQ planks. Imparts a subtle aromatic flavor to rich salmon. Made from dried herbs, fresh ground spices, brown sugar, kosher salt, garlic and lemon. Also great for searing, grilling and baking.",
        price: 6.0,
        wt: "NET WT. 3.65 oz's",
        qty: 0,
        img: "/img/SalmonRub.png",
      },
      {
        t0: 3,
        name: "Porcini Mushroom Rub",
        desc:
          "Chef Howie’s Porcini Mushroom Rub adds a rich mushroom flavor with a subtle hint of herb. Great with poultry, fish, seafood, pork and beef. Made from imported Italian porcini mushrooms, herbs, kosher salt, spices, and a hint of lemon.",
        price: 12.5,
        wt: "NET WT. 2.0 oz's",
        qty: 0,
        img: "/img/MushroomSpice.png",
      },
      {
        t0: 4,
        name: "BBQ Spice Rub",
        desc:
          "Although Chef Howie’s BBQ Spice Rub is an aromatic blend of unique spices, star anise, ginger, allspice and more. Originally created for his Baby Back Ribs, we’ve since discovered that it works great for chicken, pork chops, ribs and roasts as well. Made from a unique blend of aromatic spices, brown sugar, kosher salt, onion and garlic.",
        price: 6.0,
        wt: "NET WT. 3.65 oz's",
        qty: 0,
        img: "/img/BBQSpiceRub.png",
      },
      {
        t0: 5,
        name: "SPORT Steak Seasoning Rub",
        desc:
          "The perfect seasoning for great steaks. A nice blend of dried herbs, onion, garlic, spices and kosher salt. Created by Chef Howie’s youngest son as a gift for his teachers, it was so loved that Chef Howie decided to use it at SPORT.",
        price: 5.0,
        wt: "NET WT. 3.0 oz's",
        qty: 0,
        img: "/img/SportSteakRub.png",
      },
      {
        t0: 6,
        name: "Gift Pack for All Four Rubs",
        desc:
          "All four the 3 Chef’s in a Tub, Spice Rubs and Seasoning Blends. The Ancho Chili Rub, Salmon Rub, Mushroom Rub, and the BBQ Spice Rub.",
        price: 26.0,
        wt: "",
        qty: 0,
        img: "/img/FourSpicesPack.png",
      },
    ];
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getSRItems() {
    return _srItems;
  }
}

const store = new SRItemsStore();

Dispatcher.register((action) => {
  switch (action.ActionType) {
    case ActionTypes.ADD_TO_CART:
      console.log("SRStore > onAddToCart");
      console.log(
        "srItems from SRItemPage coming into store?" + action.srItems
      );
      _srItems.push(action.srItems);

      //   _srItems[event.target.name] = _srItems[event.target.value];
      store.emitChange();
      break;
    default:
    // Do Nothing
  }
});

export default store;
