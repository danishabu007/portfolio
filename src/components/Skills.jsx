import styles from "./Skills.module.css"

function Skills(){

const skills=[

{name:"AWS EC2",level:90},
{name:"S3 Bucket",level:85},
{name:"ECS",level:80},
{name:"Certificate Manager",level:75},
{name:"Docker",level:80},
{name:"React",level:90},
{name:"Node.js",level:85}

]

return(

<section id="skills" className={styles.skills}>

<h2>Cloud & Development Skills</h2>

{skills.map((skill,index)=>(

<div key={index} className={styles.skill}>

<p>{skill.name}</p>

<div className={styles.bar}>

<div
className={styles.progress}
style={{width:skill.level+"%"}}
>

</div>

</div>

</div>

))}

</section>

)

}

export default Skills