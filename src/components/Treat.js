import React from "react";

function Treat({treat}){

    function handleOrderClick(id){
        console.log("order button clicked")
    }
    return(
        <li className="card">
        <img src={treat.image} alt={treat.name} />
        <h4>{treat.name}</h4>
        <p>By: {treat.brand}</p>
        <p>Price: ${treat.price.toFixed(2)}</p>
        <button onClick={() => handleOrderClick(treat.id)}>Order</button>
        </li>
    )
}
export default Treat;