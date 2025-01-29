import { useParams } from 'react-router-dom'


function User() {
  const {user}=useParams()
  return (
    <>
      <h1 className='bg-green-400 p-4 m-4 border'>User{user}</h1>
    </>
  )
}

export default User
