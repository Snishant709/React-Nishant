import { useEffect, useState } from 'react'
import { useLoaderData} from 'react-router-dom'
function Gihub() {
    const data=useLoaderData()
//     const [data,setData]=useState([])
//     1st method for fetching the data from api
//     useEffect(()=>{
//     fetch("https://api.github.com/users/hiteshchoudhary")
//     .then(response => response.json())
//     .then(data => setData(data))
// },[])

    
  return (
    

    <>
      <h1 className='bg-green-400 p-4 m-4 border'>My Github Follwers:{data.followers}</h1>
    </>
  )
}

//2nd method for fetching data from api using useLoaderData hook
export const githubInfoLoader=async()=>
{
    const response= await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}



export default Gihub
