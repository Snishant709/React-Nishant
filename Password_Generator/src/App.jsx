import { useState,useCallback,useEffect } from 'react'

function Password() {
  const [password, setpassword] = useState()
  const [charAllowed,setcharAllowed]=useState(false)
  const [numberAllowed,setnumberAllowed]=useState(false)
  const [length,setlength]=useState(8)

  const passwordGenerator=useCallback(()=>
  {
    let pass="";
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+-=[]{}|;:~'";
    for (let i = 1; i < array.length; i++) {
      pass+=
    }


  },[charAllowed,numberAllowed,length,setpassword])
  return (
    <>
      
    </>
  )
}

export default Password
