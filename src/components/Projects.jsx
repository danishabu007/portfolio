import styles from "./Projects.module.css"

function Projects(){

const projects=[

{
title:"React Website Hosting on AWS",
desc:"Deployed React website on AWS S3 with CloudFront CDN and SSL using Certificate Manager."
},

{
title:"MERN Application Deployment",
desc:"Full MERN stack application deployed on AWS EC2 with Nginx reverse proxy."
},

{
title:"Docker Deployment on ECS",
desc:"Node.js application containerized using Docker and deployed on AWS ECS."
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

export default Projects