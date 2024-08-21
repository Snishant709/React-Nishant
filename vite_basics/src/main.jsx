import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}


const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "Click here "

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    anotherUser,
    anotherElement//this is called evaluated expression
)

ReactDOM.createRoot(document.getElementById('root')).render(
 reactElement

)