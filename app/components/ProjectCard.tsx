import Image from "next/image";
import teste from "../assets/img/mockups/teste.png";
import { IProject } from "../config/projects";


interface IProjectCardProps {
    project: IProject;
}

export default function ProjectCard({ project }: IProjectCardProps) {

    return (
        <div className='p-3 text-center w-96 flex flex-col items-center rounded-md'>
            <a href={project.projectUrl} target="_blank">
                <Image src={project.image} alt="celphone" width={666} height={375} />
            </a>
            <a className="text-gray-800 text-center text-3xl font-bold hover:text-gray-500 hover:scale-90 transition-all" href={project.projectUrl} target="_blank">{project.title}</a>
            <a className="text-center text-cyan-500 font-bold hover:text-cyan-700 hover:scale-90 transition-all" href={project.companyUrl} target="_blank">{project.company}</a>
            <p className=" max-w-full text-center text-gray-800">{project.description}</p>
        </div>
    )

}