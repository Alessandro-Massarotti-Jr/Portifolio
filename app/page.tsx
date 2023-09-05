'use client'

import { Icon } from '@iconify/react'
import ProjectCard from './components/ProjectCard';
import { projects } from './config/projects';
import KnowledgeItem from './components/KnowledgeItem';
import { knowages } from './config/knowages';
import KnowledgeList from './components/KnowledgeList';
import Image from 'next/image';

export default function Home() {


  return (
    <main className="min-h-screen">

      <section className='w-full h-screen bg-gradient-to-r from-gray-900 to-gray-600  p-5 md:p-20 flex items-center gap-10'>
        <div className='flex flex-col gap-2'>
          <h3 className=' text-5xl md:text-7xl text-white text-center md:text-start'>Olá, sou Alessandro👋</h3>
          <h1 className=' text-7xl md:text-9xl text-white text-center md:text-start'><span className='text-[#83cd29] font-bold'>Backend</span> Developer</h1>
          <div className='flex flex-col text-center md:text-start md:flex-row items-center gap-4 xl:justify-between'>
            <p className='max-w-xl text-white'>Trabalho na área desde 2021, minha especialidade é o desenvolvimento de aplicações backend utilizando <a href='https://nodejs.org/' target='_blank' className='text-[#83cd29] font-bold'>Node.js</a>, mas tambem sei atuar com o desenvolvimento frontend utilizando <a href='https://react.dev/' target='_blank' className='text-[#61dafb] font-bold'>React.js</a> e <a href='https://nextjs.org/' target='_blank' className='text-[#adadad] font-bold'>Next.js</a></p>
            <div className='flex gap-2'>
              <a title='Linkedin' className="text-2xl transition-colors text-white p-3 text-center border-4 border-white rounded-full hover:bg-white hover:text-[#0a66c2]" target='_blank' href="https://www.linkedin.com/in/alessandro-massarotti-jr">
                <Icon icon="bi:linkedin" />
              </a>
              <a title='Github' className="text-2xl transition-colors text-white p-3 text-center border-4 border-white rounded-full hover:bg-white hover:text-gray-600" target='_blank' href="https://github.com/Alessandro-Massarotti-Jr">
                <Icon icon="bi:github" />
              </a>
              <a title="Currículo" className="text-2xl transition-colors text-white p-3 text-center border-4 border-white rounded-full hover:bg-white hover:text-orange-600" target='_blank' href="/curriculo.pdf">
                <Icon icon="mdi:resume" />
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className='w-full bg-slate-300  p-10'>
        <h2 className="text-gray-800 text-2xl font-bold text-center">Projetos</h2>
        <div className='w-full flex flex-wrap justify-center gap-10'>
          {projects.map((project) => {
            return (<ProjectCard key={project.title} project={project} />)
          })}
        </div>
      </section>

      <section className='w-full bg-gradient-to-r to-gray-900 from-gray-600  p-10 flex flex-col items-center'>
        <h2 className="text-white text-2xl font-bold">Conhecimentos</h2>
        <div className='flex gap-2 flex-wrap justify-start'>
          <KnowledgeList knowages={knowages} type='language' title='Linguagens' />
          <KnowledgeList knowages={knowages} type='framework' title='Frameworks' />
          <KnowledgeList knowages={knowages} type='database' title='Banco de Dados' />
          <KnowledgeList knowages={knowages} type='server' title='Servidores' />
          <KnowledgeList knowages={knowages} type='tools' title='Ferramentas' />
          <KnowledgeList knowages={knowages} type='ORM' title='ORMs' />
          <KnowledgeList knowages={knowages} type='styles' title='Estilização' />
        </div>
      </section>

      <section className='w-full bg-gradient-to-b from-slate-300 to-slate-400 flex flex-col items-center py-10 gap-4'>
        <h2 className="text-gray-800 text-2xl font-bold">Sobre</h2>
        <div className='flex rounded-lg border-gray-800 p-3 sm:pt-4 sm:pl-4 sm:pb-0 sm:pr-0 shadow-2xl'>


          <div className='flex flex-col-reverse items-center sm:items-start sm:flex-col gap-3'>
            <div className='flex flex-col gap-3 max-w-5xl text-center sm:text-start'>
              <p className="text-gray-800">
                Desde a minha formatura em Análise e Desenvolvimento de Sistemas em setembro de 2021, mergulhei de cabeça em uma empolgante jornada pelo mundo do desenvolvimento.
              </p>
              <p className="text-gray-800">
                Meu foco está firmemente direcionado para o coração do desenvolvimento Backend. Minha busca incessante pela excelência me levou a mergulhar profundamente na criação de APIs robustas e escaláveis utilizando o Node.js. Tenho dedicado meu tempo e esforço para dominar as complexidades dessa vertente, com o objetivo claro de me destacar no cenário do desenvolvimento Backend.
              </p>
              <p className="text-gray-800">
                Entendendo a relevância do desenvolvimento Fullstack e Frontend, continuo aprimorando minhas habilidades nesses aspectos. Contudo, é no Backend que encontro minha paixão, onde me sinto impulsionado a contribuir para a arquitetura e a lógica que sustentam aplicações bem-sucedidas.
              </p>
            </div>
            <div className='flex gap-2'>
              <a title='Linkedin' className=" text-gray-800 transition-colors p-3 text-center border-4 border-gray-800  rounded-full hover:bg-gray-800  hover:text-[#0a66c2]" target='_blank' href="https://www.linkedin.com/in/alessandro-massarotti-jr">
                <Icon icon="bi:linkedin" />
              </a>
              <a title='Github' className=" text-gray-800 transition-colors  p-3 text-center border-4 border-gray-800  rounded-full hover:bg-gray-800  hover:text-gray-600" target='_blank' href="https://github.com/Alessandro-Massarotti-Jr">
                <Icon icon="bi:github" />
              </a>
              <a title="Currículo" className=" text-gray-800 transition-colors  p-3 text-center border-4 border-gray-800  rounded-full hover:bg-gray-800  hover:text-orange-600" target='_blank' href="/curriculo.pdf">
                <Icon icon="mdi:resume" />
              </a>
            </div>
          </div>


          <Image className='hidden sm:block' src={"/img/ale.png"} alt='Alessandro Massarotti Junior' width={157} height={400} />
        </div>

      </section>
      {/* 
      <section>
        <h2 className="text-gray-800 text-2xl font-bold">Contato</h2>
      </section> */}

      <footer className='flex justify-center gap-1 py-2 bg-slate-400 text-black'>
        Desenvolvido por <a href="https://github.com/Alessandro-Massarotti-Jr" target='_blank' className='font-bold hover:underline'>Alessandro Massarotti Junior</a>🤖
      </footer>

    </main >
  )
}
