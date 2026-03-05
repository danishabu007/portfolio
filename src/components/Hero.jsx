import styles from "./Hero.module.css"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { FaAws, FaDocker } from "react-icons/fa"

function Hero(){

const [text] = useTypewriter({
words:[
"MERN Developer",
"AWS Cloud Engineer",
"DevOps Enthusiast"
],
loop:true,
typeSpeed:70,
deleteSpeed:50
})

return(

<section id="home" className={styles.hero}>

<h1>Hi, I'm Abu Danish</h1>

<h2>

<span>{text}</span>

<Cursor/>

</h2>

<p>
I build scalable web apps and deploy them on AWS Cloud.
</p>

<div className={styles.icons}>

<FaAws size={60} color="#ff9900"/>

<FaDocker size={60}/>

</div>

</section>

)

}

export default Hero