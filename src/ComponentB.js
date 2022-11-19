import React from 'react'
import useNumber from './hooks/useNumber';

const ComponentB = () => {
  const number = useNumber()
  console.log(number, "component B");
  return (
    <div>ComponentB</div>
  )
}

export default ComponentB