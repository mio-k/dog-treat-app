import React from "react";
import Treat from "./Treat";

function TreatList({treats, onHandleOrderClick}){
    return(
    <div>
    <ul className="cards">
    {treats.map((treat)=> 
        <Treat key={treat.id} treat={treat} onHandleOrderClick={onHandleOrderClick} />
    )}
    </ul>
    </div>
    )
}
export default TreatList;