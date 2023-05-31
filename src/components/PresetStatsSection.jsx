import React from 'react'
import classes from "./PresetStatsSection.module.css"

const PresetStatsSection = ({ presetNumber }) => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>{presetNumber} Custom Presets</h1>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default PresetStatsSection
