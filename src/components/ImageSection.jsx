import React from 'react'
import classes from "./ImageSection.module.css"
import { Slider } from '.'

const ImageSection = () => {
  return (
    <div className={classes.imageSectionContainer}>
      <div className={classes.sliderContainer}>
        <Slider beforeImage={"./b.jpg"} afterImage={"./a.jpg"}/>
        <p>Vintage Tones Preset Bundle - Neon Glow</p>
      </div>
      
      <div className='image-section-image'>

      </div>
    </div>
  )
}

export default ImageSection
