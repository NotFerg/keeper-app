import React from "react";
// import styles from "./footer.module.css"; 

const d = new Date();
let year = d.getFullYear();

function Footer(){
    return (<footer>
        <p>Copyright ⓒ {year}</p>
    </footer>);
    // return <p className={styles.footer}>Copyright {year}</p>
    // return <p className="fixed-bottom text-center">Copyright {year}</p>
}


export default Footer;