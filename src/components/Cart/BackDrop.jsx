import React from 'react'
import { useStateContext } from "@/context/StateContext";
import classes from "./BackDrop.module.css"

const BackDrop = () => {
  const { setShowCart } = useStateContext()

  return (
    <div className={classes.cartBackdrop} onClick={() => setShowCart(false)}/>

  )
}

export default BackDrop
