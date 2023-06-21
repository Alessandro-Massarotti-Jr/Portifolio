import './globals.css'
import icon from './assets/img/mockups/ide.png';
import { Inter } from 'next/font/google'
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alessandro Massarotti Junior',
  description: 'Olá, sou Alessandro Massarotti Junior, Desenvolvedor Web junior, sou formado em Analise e desenvolvimento de sistemas e atuo na area de desenvolvimento desde setembro de 2021',
  authors: {
    name: "Alessandro Massarotti Junior",
    url: "https://github.com/Alessandro-Massarotti-Jr"
  },
  applicationName: "Portifolio de Alessandro Massarotti Junior",
  colorScheme: "normal",
  themeColor: "#83cd29",
  generator: "Next.js",
  category: "Portifolio",
  creator: "Alessandro Massarotti Junior",
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
