import React from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import classes from "./LoadingPage.module.css"

const LoadingPage = () => {
  return (
    <div className={classes.loadingPage}>
        <ClimbingBoxLoader color={"#555555"} />
    </div>
  )
}

export default LoadingPage
