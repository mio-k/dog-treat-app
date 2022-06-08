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
    .then(resp => resp.json())
    .then(treat => onHandleOrderClick(treat.price))
    }
    const defaultImage = "./images/defaultImage.png";
    const treatImage = treat.image ? treat.image : defaultImage;

    return(
        <li className="card">
        <img src={treatImage} alt={treat.name} onError={(e)=>e.target.src='./images/defaultImage.png'} />
        <h4>{treat.name}</h4>
        <p>By: {treat.brand}</p>
        <p>Price: ${parseFloat(treat.price).toFixed(2)}</p>
        <button className=".card button" onClick={() => handleOrderClick(treat)}>Order</button>
        </li>
    )
}
export default Treat;