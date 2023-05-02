import React from 'react'
import { useStateContext } from "@/context/StateContext";

const BackDrop = () => {
  const { setShowCart } = useStateContext()

  return (
    <div className='cart-backdrop' onClick={() => setShowCart(false)}/>

  )
}

export default BackDrop
