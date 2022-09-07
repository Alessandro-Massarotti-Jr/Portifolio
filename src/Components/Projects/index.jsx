import ProjectCard from "../ProjectCard";
import style from "./styles.module.css"

import { projects } from "../../config/projects";

export default function Projects(){

    return(
        <section id="projects">
            <h2 className={style.sectionTitle}>Projects</h2>
             <div className={style.projectCardContainer}>

                {projects.map((project)=>{
                    return <ProjectCard title={project.title} description={project.description} mainColor={project.mainColor} image={project.image} demo={project.demo} repo={project.repo} tecnologyIcon={project.tecnologyIcon}/>
                })}
             </div>
        </section>
    );
}