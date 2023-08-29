'use client'

import { Icon } from '@iconify/react'
import ProjectCard from './components/ProjectCard';
import { projects } from './config/projects';
import KnowledgeItem from './components/KnowledgeItem';
import { knowages } from './config/knowages';
import KnowledgeList from './components/KnowledgeList';

export default function Home() {


  return (
    <main className="min-h-screen">
      <section className='w-full h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-20 flex items-center gap-10'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-7xl text-white'>Olá, sou Alessandro👋</h3>
          <h1 className='text-9xl text-white'><span className='text-[#83cd29] font-bold'>Backend</span> Developer</h1>
          <div className='flex items-center gap-4 justify-between'>
            <p className='max-w-xl text-white'>Trabalho na área desde 2021, minha especialidade é o desenvolvimento de aplicações backend utilizando <a href='https://nodejs.org/' target='_blank' className='text-[#83cd29] font-bold'>Node.js</a>, mas tambem sei atuar com o desenvolvimento frontend utilizando <a href='https://react.dev/' target='_blank' className='text-[#61dafb] font-bold'>React.js</a> e <a href='https://nextjs.org/' target='_blank' className='text-[#adadad] font-bold'>Next.js</a></p>
            <div className='flex gap-2'>
              <a title='Linkedin' className="text-2xl text-white transition-colors text-white p-3 text-center border-4 border-white rounded-full hover:bg-white hover:text-[#0a66c2]" target='_blank' href="https://www.linkedin.com/in/alessandro-massarotti-jr">
                <Icon icon="bi:linkedin" />
              </a>
              <a title='Github' className="text-2xl text-white transition-colors text-white p-3 text-center border-4 border-white rounded-full hover:bg-white hover:text-gray-700" target='_blank' href="https://github.com/Alessandro-Massarotti-Jr">
                <Icon icon="bi:github" />
              </a>
              <a title="Currículo" className="text-2xl text-white transition-colors text-white p-3 text-center border-4 border-white rounded-full hover:bg-white hover:text-orange-600" target='_blank' href="/curriculo.pdf">
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

      <section className='w-full bg-gray-500  p-10'>

        <h2 className="text-white text-2xl font-bold text-center">Conhecimentos</h2>

        <div className='flex w-full'>
          <div className='flex gap-2 flex-wrap justify-center w-full'>
            <KnowledgeList knowages={knowages} type='language' title='Linguagens' />
            <KnowledgeList knowages={knowages} type='framework' title='Frameworks' />
            <KnowledgeList knowages={knowages} type='database' title='Banco de Dados' />
            <KnowledgeList knowages={knowages} type='server' title='Servidores' />
            <KnowledgeList knowages={knowages} type='tools' title='Ferramentas' />
            <KnowledgeList knowages={knowages} type='ORM' title='ORMs' />
            <KnowledgeList knowages={knowages} type='styles' title='Estilização' />
          </div>

        </div>
      </section>

      <footer className='flex justify-center gap-1 py-2 bg-slate-400 text-black'>
        Desenvolvido por <a href="https://github.com/Alessandro-Massarotti-Jr" target='_blank' className='font-bold hover:underline'>Alessandro Massarotti Junior</a>🤖
      </footer>
    </main>
  )
}
