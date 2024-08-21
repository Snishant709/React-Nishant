import { useState } from "react"

function App()
{
  let counter=10;
function addValue()
{

}
function removeValue()
{

}
  return 
  (
    <>
      <h1>Nishant Counter from React</h1>
      <h3>Counter Value</h3>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}
export default App