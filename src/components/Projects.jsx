import styles from "./Projects.module.css"

function Projects(){

const projects=[

{
title:"AWS MERN Deployment",
desc:"Deployed MERN application on AWS EC2 with Nginx"
},

{
title:"S3 Static Hosting",
desc:"Hosted React portfolio on AWS S3 bucket"
},

{
title:"Docker ECS Deployment",
desc:"Containerized Node app and deployed on ECS"
}

]

return(

<section id="projects">

<h2>Projects</h2>

<div className={styles.grid}>

{projects.map(project=>(

<div className={styles.card}>

<h3>{project.title}</h3>

<p>{project.desc}</p>

</div>

))}

</div>

</section>

)

}

export default Projects