import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import classes from "./LoadingPage.module.css"

const LoadingPage = () => {
  return (
    <div className={classes.loadingPage}>
        <HashLoader color={"#d8a28c"} size={50}/>
    </div>
  )
}

export default LoadingPage
