import React from "react";
import styles from "./Bio.module.css";
import bioPic from "./bio-pic.jpeg";

interface BioProps {
  className?: string;
}

function Bio(props: BioProps) {
  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      <img src={bioPic} alt="lanyincao" />
      <p>
        Personal blog by <a href="https://twitter.com/lanyincao">lanyincao</a>.
        <br />I can't sing, dance, rap but can code, 🏀
      </p>
    </div>
  );
}

export default Bio;
