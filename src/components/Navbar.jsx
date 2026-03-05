import { useState } from "react"
import styles from "./Navbar.module.css"

function Navbar(){

const [open,setOpen]=useState(false)

return(

<nav className={styles.nav}>

<h2>Abu Danish</h2>

<div className={styles.hamburger} onClick={()=>setOpen(!open)}>

<span></span>
<span></span>
<span></span>

</div>

<div className={`${styles.links} ${open ? styles.active : ""}`}>

<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>

</div>

</nav>

)

}

export default Navbar