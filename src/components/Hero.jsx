import styles from "./Hero.module.css"
import { FaAws, FaDocker } from "react-icons/fa"

function Hero(){

return(

<section id="home" className={styles.hero}>

<h1>Hi, I'm Abu Danish</h1>

<h2>AWS Cloud & MERN Developer</h2>

<p>
I deploy scalable applications using AWS services like
EC2, S3, CloudFront, ECS and Route53.
</p>

<div className={styles.icons}>

<FaAws size={60} color="#ff9900"/>
<FaDocker size={60}/>

</div>

</section>

)

}

export default Hero