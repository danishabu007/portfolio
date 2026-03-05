import styles from "./AwsArchitecture.module.css"

function AwsArchitecture(){

return(

<section>

<h2>AWS Architecture</h2>

<div className={styles.grid}>

<div className={styles.card}>
<h3>MERN on EC2</h3>
<p>
React → Nginx → EC2  
Node API → EC2  
MongoDB → Atlas
</p>
</div>

<div className={styles.card}>
<h3>S3 + CloudFront</h3>
<p>
React Build → S3 Bucket  
CDN → CloudFront  
SSL → Certificate Manager
</p>
</div>

<div className={styles.card}>
<h3>Docker + ECS</h3>
<p>
Docker container → ECS  
Load Balancer → ALB
</p>
</div>

</div>

</section>

)

}

export default AwsArchitecture