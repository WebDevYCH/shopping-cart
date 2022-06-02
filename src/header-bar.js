/* eslint no-unused-vars: 0 */
import React, { useCallback, useContext } from "react";
import AppContext from "./context";

export default () => {
   const context = React.useContext(AppContext);
   const [val, setVal] = React.useState("");
   const onChange = (event) => {
    setVal(event.target.value);
    context.actions.filterProductsByName(event.target.value);
   }
    return (
        <div className="header-bar">
            <input type="text" 
                value ={val}
                onChange={(event) => onChange(event)}
                placeholder="search for products"/>
            <div>Total: {context.totalCartPrice}</div>    
        </div>
    ) 
}
 
