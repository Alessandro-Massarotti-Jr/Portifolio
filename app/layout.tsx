import './globals.css'
import icon from './assets/img/mockups/ide.png';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alessandro Massarotti Junior',
  description: 'Olá, sou Alessandro Massarotti Junior, Desenvolvedor Web junior, sou formado em Analise e desenvolvimento de sistemas e atuo na area de desenvolvimento desde setembro de 2021',
  'theme-color': '#83cd29',
  author: "Alessandro Massarotti Junior",
  creator: "Alessandro Massarotti Junior",
  publisher: "Alessandro Massarotti Junior",
  'og:title': 'Alessandro Massarotti Junior',
  "og:description": "Olá, sou Alessandro Massarotti Junior, Desenvolvedor Web junior, sou formado em Analise e desenvolvimento de sistemas e atuo na area de desenvolvimento desde setembro de 2021",
  'og:image': icon.src,

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
