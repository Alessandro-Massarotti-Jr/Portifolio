import Image from "next/image";
import teste from "../assets/img/mockups/teste.png";




export default function ProjectCard() {

    return (
        <div className='  w-96 flex flex-col items-center'>




            <Image className="relative z-50" src={teste} alt="celphone" width={666} height={375} />
            <h3 className="text-3xl">Nome do projeto</h3>

            <p className=" max-w-full text-center"> Este é um projeto legal e bacana, lorem ipsom dolor sit asimet  Este é um projeto legal e bacana, lorem ipsom dolor sit asimet  Este é um projeto legal e bacana, lorem ipsom dolor sit asimet</p>

        </div>
    )

}