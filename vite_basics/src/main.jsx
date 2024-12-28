import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function Nishant()
{
    return(
        <>
            <h1>My name is Nishant</h1>
        </>
    )
}
const Element={
    type:"a",
    props:{
        href:"https://www.google.com",
        target:"_blank"
    },
    children:"Click here to visit google"
}
const anotherElement=
(
 <a href="https://www.google.com" target="_blank">Click here to visit Google</a>
)

const content="here ";
const reactElement=React.createElement(
    "a",
    {href:"https://www.google.com",target:"_blank"},
    "Visit Google ",
    content,
    anotherElement//you can also pass an another object to this react object
)
ReactDOM.createRoot(document.getElementById('root')).render(

// Nishant()//This will also work but either you write this or <Nishant/> this only one you can write at once
// Element//This is wrong you cant pass the object here in render as it is expecting the function to execute or pass it in <></> You can call it as same used here but for that you have to make it React Object currently it is J.S object
// anotherElement//This is correct as inside this object the tag is passed as the React needs
// reactElement//This will work as it is now an reactElemet and it has 'a' tag properties
reactElement


)