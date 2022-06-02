import React from "react";

function Treat({treat, onHandleOrderClick}){

    function handleOrderClick(treat){
        const newOrder = {
            price: treat.price,
            product: treat.name,

        }
        fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(newOrder)
    })
        onHandleOrderClick(newOrder)
    }
    return(
        <li className="card">
        <img src={treat.image} alt={treat.name} onError={(e)=>e.target.src='./images/defaultImage.png'} />
        <h4>{treat.name}</h4>
        <p>By: {treat.brand}</p>
        {/* <p>Price: ${treat.price.toFixed(2)}</p> */}
        <p>Price: ${treat.price}</p>
        <button className=".card button" onClick={() => handleOrderClick(treat)}>Order</button>
        </li>
    )
}
export default Treat;