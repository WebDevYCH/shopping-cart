/* eslint no-unused-vars: 0 */
import React from "react";
import AppContext from "./context";

export default props => {
  const {actions} = React.useContext(AppContext);
  
  return (
    <div>
      <div className="roundel" style={{ backgroundColor: props.product.color }} />
      <div className="title">{props.product.name}</div>
      <div className="price">
        ${(props.product.pricePerUnit / 100).toFixed(2)}
      </div>
      <button className="add-to-cart" onClick={() => actions.addProductToCart(props.product)}>Add to Cart</button>
  </div>

  )
}
  
  
 
