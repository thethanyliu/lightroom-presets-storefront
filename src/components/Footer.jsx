import React from 'react'
import classes from "./Footer.module.css"
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p>&copy; 2023 Pnutpresets All Rights Reserved</p>
      <Link href="/terms-and-conditions">something</Link>
    </div>
  )
}

export default Footer
