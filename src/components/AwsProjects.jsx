import styles from "./AwsProjects.module.css"

function AwsProjects(){

const projects=[

{
title:"MERN App Deployment on AWS",
desc:"Deployed full MERN application on AWS EC2 using Nginx and SSL certificate from AWS Certificate Manager."
},

{
title:"React Portfolio Hosting",
desc:"Hosted React portfolio on AWS S3 bucket with CloudFront CDN for fast global delivery."
},

{
title:"Docker Container Deployment",
desc:"Containerized Node.js app using Docker and deployed on AWS ECS."
}

]

return(

<section id="projects" className={styles.projects}>

<h2>AWS Cloud Projects</h2>

<div className={styles.grid}>

{projects.map((project,index)=>(

<div key={index} className={styles.card}>

<h3>{project.title}</h3>

<p>{project.desc}</p>

</div>

))}

</div>

</section>

)

}

export default AwsProjects