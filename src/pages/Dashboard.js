import { React, useState } from 'react'
import User from '../components/User'
import Users from '../components/Users'
import { useIsFetching } from "react-query";

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null)
  const isFetching = useIsFetching()
  return (
    <>
      <Users setSelectedUser={ setSelectedUser } />
      <hr />
      <User selectedUser={ selectedUser }/>
      { isFetching ? <p>Loading...</p> : null}
    </>
  )
}

export default Dashboard