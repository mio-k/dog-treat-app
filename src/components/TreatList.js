import React from "react";
import Treat from "./Treat";

function TreatList({treats}){
    return(
    <div>
    <ul className="cards">
    {treats.map((treat)=> 
        <Treat key={treat.id} treat={treat}/>
    )}
    </ul>
    </div>
    )
}
export default TreatList;