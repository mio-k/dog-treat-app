import React from "react";
import Treat from "./Treat";

function TreatList({treats, onHandleOrderClick, total}){
    const shippingMessage = total > 49 ? "We got over $49 worth of order so we qualify for a free shipping!" : `We need $${(49-total).toFixed(2)} more to qualify for freeshipping`

    return(
    <div>
    <strong>Current group total: ${total}. {shippingMessage}</strong>
    <ul className="cards">
    {treats.map((treat)=> 
        <Treat key={treat.id} treat={treat} onHandleOrderClick={onHandleOrderClick} />
    )}
    </ul>
    </div>
    )
}
export default TreatList;