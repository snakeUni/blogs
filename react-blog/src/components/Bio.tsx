import React from 'react'
import styles from './Bio.module.css'
import bioPic from './bio-pic.jpg'

interface BioProps {
  className?: string
}

function Bio(props: BioProps) {
  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={bioPic} alt="lanyincao" />
      <p>
        Personal blog by{' '}
        <a href="https://twitter.com/JingGe14/">lanyincao</a>.
        <br />
        I explain with words and code.
      </p>
    </div>
  )
}

export default Bio
