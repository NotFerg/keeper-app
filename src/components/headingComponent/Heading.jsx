import React from "react";
import styles from "./heading.module.css"; // Change the file extension to .module.css

function Heading(){
    return (
        <div className={styles.heading}>
            <h1 > Keeper app</h1>
        </div>
    )
}

export default Heading;