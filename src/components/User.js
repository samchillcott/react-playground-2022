import React from 'react'
import useUser from '../query hooks/useUser'

const User = ({ selectedUser }) => {
  const user = useUser(selectedUser)
  return (
    <>
      { user.isLoading && <p>Loading user...</p> }
      { user.isSuccess && <p>{ `${user.data.name} - ${user.data.address.street}` }</p> }
    </>
  )
}

export default User