import React from 'react'
import useUser from '../query hooks/useUser'

const User = () => {
  const user = useUser(5)
  return (
    <>
      { user.isLoading && <p>Loading data...</p> }
      { user.isSuccess && <p>{ `${user.data.name} - ${user.data.address.street}` }</p>
      }
    </>
  )
}

export default User