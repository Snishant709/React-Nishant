import React from "react";
import GreetingContext from "./GreetingContext";
const GreetingProvider=({children})=>{
    const greetings="Hello World"
    return(
        <GreetingContext.Provider value={greetings}>
            {children}
        </GreetingContext.Provider>
    )
}
export default GreetingProvider