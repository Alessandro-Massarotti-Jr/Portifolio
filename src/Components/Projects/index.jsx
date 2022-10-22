import ProjectCard from "../ProjectCard";
import style from "./styles.module.css"

import { projects } from "../../config/projects";
import AliceCarousel from "react-alice-carousel";

export default function Projects() {

    return (
        <section className={style.project} id="projects">
            <h2 className={style.sectionTitle}>Projetos</h2>
            <div className={style.projectCardContainer}>

                {projects.map((project) => {
                    return <ProjectCard title={project.title} description={project.description} mainColor={project.mainColor} image={project.image} demo={project.demo} repo={project.repo} tecnologyIcon={project.tecnologyIcon} />
                })}
            </div>
            <div className={style.mobile__projectCardContainer}>
                <AliceCarousel
                    autoPlay={true}
                    autoPlayInterval={2000}
                    infinite={true}
                    disableDotsControls={true}
                    disableButtonsControls={true}
                    mouseTracking={true}
                    items={projects.map((project) => {
                        return <ProjectCard title={project.title} description={project.description} mainColor={project.mainColor} image={project.image} demo={project.demo} repo={project.repo} tecnologyIcon={project.tecnologyIcon} />
                    })}
                    responsive={
                        {
                            0: {
                                items: 1,
                            },
                            1024: {
                                items: 5
                            }
                        }
                    }
                />
            </div>

        </section>
    );
}