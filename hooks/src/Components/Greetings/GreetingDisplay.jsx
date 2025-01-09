import React, { useContext } from "react";                                                                                                                  
import GreetingContext from "./GreetingContext";
const GreetingDisplay=()=>
{
    const greetings=useContext(GreetingContext)
    return(
        <h1>{greetings}</h1>
    )
}
export default GreetingDisplay