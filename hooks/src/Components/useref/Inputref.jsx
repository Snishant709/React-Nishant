import React, { useRef, useState } from "react";
const Inputref = () =>
{
    const inputRef=useRef(null)
    const [count,setCount]=useState(0) 
    const [str, setStr] = useState("")
    const countClick=()=>
    {
        inputRef.current.focus()
        setCount(count+1)
    }

    const reset=()=>
    {
        setCount(0)
        setStr("")
    }
    const countInput=(e)=>
    {
        setStr(e.target.value.length)
    }
    return(
        <>
        <input type="text" ref={inputRef} placeholder="Enter sonething"  onChange={countInput}/>
        <button onClick={countClick}>Click me</button>
        <p>
        Input field has been focused {count} times characters written in the input field is {str}.</p>
        <button onClick={reset}>Reset</button>
        </>
    )
}
export default Inputref