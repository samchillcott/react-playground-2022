import React from 'react'
import useNumber from './hooks/useNumber'

const ComponentA = () => {
 const number = useNumber()
 console.log(number, "component A");
  return (
    <div>ComponentA</div>
  )
}

export default ComponentA