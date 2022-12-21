import React from 'react'
import useUsers from '../query hooks/useUsers'

const Users = ({ setSelectedUser }) => {
  const users = useUsers()
  return (
    <>
      { users.isLoading && <p>Loading Users...</p> }
      { users.isError && <p>Could not fetch users</p> }
      { users.isSuccess && (
        <ul>
          { users.data.map(user => (
            <li key={ user.id } onClick={ () => setSelectedUser(user.id) }>{ user.name }</li>
          )) }
        </ul>
      ) }
    </>
  )
}

export default Users