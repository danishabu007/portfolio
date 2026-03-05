import { useEffect, useState } from "react"
import styles from "./GithubProjects.module.css"

function GithubProjects(){

const [repos,setRepos]=useState([])

useEffect(()=>{

fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME/repos")

.then(res=>res.json())

.then(data=>setRepos(data))

},[])

return(

<section className={styles.github}>

<h2>GitHub Projects</h2>

<div className={styles.grid}>

{repos.slice(0,6).map(repo=>(

<div key={repo.id} className={styles.card}>

<h3>{repo.name}</h3>

<p>{repo.description}</p>

<a href={repo.html_url} target="_blank">

View Code

</a>

</div>

))}

</div>

</section>

)

}

export default GithubProjects