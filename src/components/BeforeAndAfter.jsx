import React from 'react'
import classes from "./BeforeAndAfter.module.css"
import { Slider } from '.'
import { urlFor } from '@/lib/client'

const BeforeAndAfter = ({ fromSchema, beforeAfterImages, titleText }) => {
  return (
    <div className={classes.sliderOuterSection}>
        <h1 className={classes.sliderText}>{titleText}</h1>
        <div className={classes.sliderInnerSection}>
          <div className={classes.sliderContainer}>
            <Slider
              beforeImage={fromSchema ? urlFor(beforeAfterImages && beforeAfterImages[0]) : beforeAfterImages[0]}
              afterImage={fromSchema ? urlFor(beforeAfterImages && beforeAfterImages[1]) : beforeAfterImages[1]}
            />
          </div>
          {/* <div className={classes.sliderContainer}>
            <Slider
              beforeImage={urlFor(beforeAfterImages && beforeAfterImages[2])}
              afterImage={urlFor(beforeAfterImages && beforeAfterImages[3])}
            />
          </div>
          <div className={classes.sliderContainer}>
            <Slider
              beforeImage={urlFor(beforeAfterImages && beforeAfterImages[4])}
              afterImage={urlFor(beforeAfterImages && beforeAfterImages[5])}
            />
          </div> */}
        </div>
      </div>
  )
}

export default BeforeAndAfter
