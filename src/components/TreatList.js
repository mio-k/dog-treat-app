import React from "react";
import Treat from "./Treat";

function TreatList({treats}){
    return(
    <div>
    <p> This is returned from treatlist</p>
    {treats.map((treat)=> 
        <Treat treat={treat}/>
    )}
    </div>
    )
}
export default TreatList;