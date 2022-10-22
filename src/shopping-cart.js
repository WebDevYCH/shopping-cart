/* eslint no-unused-vars: 0 */
import React from "react";
import { convertTypeAcquisitionFromJson } from "typescript";
import AppContext from "./context";

export default () => {
    const context = React.useContext(AppContext);
    return (
        <div>
            <div className="shopping-cart">
                Shopping Cart
            </div>
            {context.shoppingCart?.map((item, index) =>   
                <div className="item" key={index}>{item.name}, {item.pricePerUnit} 
                    <button onClick={() => context.actions.removeProductFromCartAtIndex(index)}>Delete</button>
                </div>
            )}
        </div>
    );
    
    
}
    
