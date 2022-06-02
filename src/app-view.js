import React from "react";
import HeaderBar from "./header-bar";
import ShoppingCart from "./shopping-cart";
import ProductsBrowser from "./products-browser";
import { AppContextProvider } from "./context";

const AppView = () => (
  <AppContextProvider>
    <HeaderBar />
    <div className="app-content">
      <ProductsBrowser />
      <ShoppingCart />
    </div>
  </AppContextProvider>
);
export default AppView;
