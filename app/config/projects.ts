import { StaticImageData } from "next/image";
import ide from "../assets/img/mockups/ide.png"
import teste from "../assets/img/mockups/teste.png"
import kogno from "../assets/img/mockups/kogno.png"
import g20 from "../assets/img/mockups/g20.png"

export interface IProject {
    title: string;
    description: string;
    image: StaticImageData;
    company: string;
    projectUrl: string;
    companyUrl: string;
}

const projects: IProject[] = [];

projects.push({
    title: "IDE Editora",
    company: "Next Tecnologia",
    image: ide,
    companyUrl: "https://next.tec.br/",
    projectUrl: "https://play.google.com/store/apps/details?id=com.ideeditora.ide",
    description: "Aplicativo para leitura de livros espiritas a partir de um arquivo .epup, foi utilizado o Google Firebase para realizar o armazenamento e consultas dos dados e arquivos do app."
});

projects.push({
    title: "Market Master",
    company: "Next Tecnologia",
    image: teste,
    companyUrl: "https://next.tec.br/",
    projectUrl: "https://adamantiun.next.dev.br/",
    description: "Sistema de gestão para vendedores do mercado livre.Realiza calculos de lucro contabilização de vendas e controle de estoque consultando a Api do ML."
});

projects.push({
    title: "Portal Kogno",
    company: "Next Tecnologia",
    image: kogno,
    companyUrl: "https://next.tec.br/",
    projectUrl: "https://portal.kogno.com.br/",
    description: "Sistema para controle de uma franquia pedagogica, podendo gerenciar seus alunos, monitores, franqueados e unidades. Verificando frequencia e disponibilidade de aulas de cada um deles."
});

projects.push({
    title: "G20",
    company: "Next Tecnologia",
    image: g20,
    companyUrl: "https://next.tec.br/",
    projectUrl: "https://next.tec.br/",
    description: "Sistema para controle de estoque e realização de venda para produtos de Hortifruti"
});


export { projects }