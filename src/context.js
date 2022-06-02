/* eslint no-unused-vars: 0 */
import React from "react";
import productData from "./data";

const Context = React.createContext();

export const AppContextProvider = props => {
  const [products, setProducts] = React.useState(productData);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [totalCartPrice, setTotalCartPrice] = React.useState(0);

  const filterProductsByName = React.useCallback(name => {
    let temp = products.filter(item=>item.name.includes(name));
    setProducts(temp);
  }, []);
  const addProductToCart = React.useCallback(product => {
    setTotalCartPrice(totalCartPrice+product.pricePerUnit);
    setShoppingCart([...shoppingCart, product]);
  }, [shoppingCart, totalCartPrice]);
  const removeProductFromCartAtIndex = React.useCallback(index => {
    setTotalCartPrice(totalCartPrice-shoppingCart[index].pricePerUnit);
    shoppingCart.splice(index, 1);
    let temp = shoppingCart
    setShoppingCart(temp);
  }, [shoppingCart, totalCartPrice]);


  const providerValue = React.useMemo(
    () => ({
      products,
      shoppingCart,
      totalCartPrice,
      actions: {
        filterProductsByName,
        addProductToCart,
        removeProductFromCartAtIndex
      }
    }),
    [
      products,
      shoppingCart,
      totalCartPrice,
      filterProductsByName,
      addProductToCart,
      removeProductFromCartAtIndex
    ]
  );

  return (
    <Context.Provider value={providerValue}>{props.children}</Context.Provider>
  );
};
export default Context;
