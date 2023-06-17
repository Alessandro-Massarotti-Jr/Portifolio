'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'

export default function Home() {
  return (
    <main className="min-h-screen">


      <section className='w-full h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-20 flex items-center gap-10'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-7xl'>Olá, sou Alessandro👋</h3>
          <h1 className='text-9xl'><span className='text-[#83cd29] font-bold'>Backend</span> Developer</h1>
          <p className='max-w-xl'>Trabalho na área desde 2021, minha especialidade é o desenvolvimento de aplicações backend utilizando <a href='https://nodejs.org/' target='_blank' className='text-[#83cd29] font-bold'>Node.js</a>, mas tambem sei atuar com o desenvolvimento frontend utilizando <a href='https://react.dev/' target='_blank' className='text-[#61dafb] font-bold'>React.js</a> e <a href='https://nextjs.org/' target='_blank' className='text-[#adadad] font-bold'>Next.js</a></p>
        </div>
        <div className='flex flex-col gap-2'>

          <a className="text-2xl transition-colors flex items-center gap-1 text-white px-3 py-2 text-center border-4 border-white rounded hover:bg-white hover:text-[#0a66c2]" target='_blank' href="https://www.linkedin.com/in/alessandro-massarotti-jr">
            <Icon className="" icon="bi:linkedin" />
            LinkedIn
          </a>

          <a className="text-2xl transition-colors flex items-center gap-1 text-white px-3 py-2 text-center border-4 border-white rounded hover:bg-white hover:text-gray-700" target='_blank' href="https://github.com/Alessandro-Massarotti-Jr">
            <Icon className="" icon="bi:github" />
            Github
          </a>

          <a className="text-2xl transition-colors flex items-center gap-1 text-white px-3 py-2 text-center border-4 border-white rounded hover:bg-white hover:text-orange-600" target='_blank' href="/curriculo.pdf">
            <Icon className="" icon="mdi:resume" />
            Curriculo
          </a>

        </div>
      </section>


      <section className='bg-red-400'>

      </section>

    </main>
  )
}
