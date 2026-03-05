import styles from "./Skills.module.css"

function Skills(){

const skills=[

"AWS EC2",
"AWS S3",
"AWS CloudFront",
"AWS ECS",
"AWS Certificate Manager",
"AWS Route53",
"Docker",
"Nginx",
"React JS",
"Node JS"

]

return(

<section id="skills" className={styles.skills}>

<h2>Cloud & Development Skills</h2>

<div className={styles.grid}>

{skills.map((skill,index)=>(

<div key={index} className={styles.card}>

{skill}

</div>

))}

</div>

</section>

)

}

export default Skills