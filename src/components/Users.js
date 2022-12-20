import React from 'react'
import useUsers from '../query hooks/useUsers'

const Users = () => {
  const users = useUsers()
  return (
    <>
      { users.isLoading && <p>Loading Users...</p> }
      { users.isError && <p>Could not fetch users</p> }
      { users.isSuccess && (
        <ul>
          { users.data.map(user => (
            <li>{user.name}</li>
          )) }
        </ul>
      ) }
    </>
  )
}

export default Users