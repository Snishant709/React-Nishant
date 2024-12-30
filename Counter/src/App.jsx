import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // useState is a React Hook that allows us to manage state in a functional component.
// 'counter' is the current state value, initially set to 8.
// 'setCounter' is the function to update the 'counter' state.
// - The first value (counter) is the current state.
// - The second value (setCounter) is the function to update the state you can change the function name as per choice.
// - Initial state here is set to 8.
const [counter, setCounter] = useState(8);

const addValue=()=>
{
  if(counter<20)
 

  //This approach will update the counter value by 1 only even if we write it four times this is because React is asynchronus it doesnt update the value directly 
  setCounter(counter + 1);  
  setCounter(counter + 1); 
  setCounter(counter + 1);  
  setCounter(counter + 1);  
   //This approach will update the couter by 4 on single click
  setCounter(counter=>counter+1)
  setCounter(counter=>counter+1)
  setCounter(counter=>counter+1)
  setCounter(counter=>counter+1)
}
const removeValue=()=>
{
  if(counter>0)
setCounter(counter-1)

}
  return (
    <>
        <h1>Counter made by Nishant</h1>
        <h3>Counter {counter}</h3>
        <button onClick={addValue}>Add value {counter}</button>
        <br/><br/>
        <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
  
}

export default App
