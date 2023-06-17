import Image from "next/image";
import teste from "../assets/img/mockups/teste.png";




export default function ProjectCard() {

    return (
        <div className='p-3 text-center w-96 flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-l rounded-md'>
            <Image className="relative z-50" src={teste} alt="celphone" width={666} height={375} />
            <a className="text-center text-3xl font-bold" href="https://adamantiun.next.dev.br/" target="_blank">Market Master</a>
            <a className="text-center text-blue-300 font-bold" href="https://next.tec.br/" target="_blank">Next Tecnologia</a>
            <p className=" max-w-full text-center">Sistema de gestão para vendedores do mercado livre.Realiza calculos de lucro contabilização de vendas e controle de estoque consultando a Api do ML.</p>
        </div>
    )

}