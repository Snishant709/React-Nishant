import { useState } from 'react'
import UseCurrencyInfo from './customHooks/UseCurrencyInfo.js'
import InputBox from './Components/index.js'


function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [ConvertedAmount,setConvertedAmount]=useState(0)
  const CurrencyInfo=UseCurrencyInfo(from)
  const options=Object.keys(CurrencyInfo)
  const swap=()=>
  {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(setConvertedAmount)
  }
  return (
    <>
    <UseCurrencyInfo/>
    </>
  )
}

export default App
