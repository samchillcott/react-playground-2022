import { React, useState } from 'react'
import User from '../components/User'
import Users from '../components/Users'

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null)
  return (
    <>
      <Users setSelectedUser={ setSelectedUser } />
      <hr />
      <User />
    </>
  )
}

export default Dashboard