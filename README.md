# Portifolio

<p>
  <img src="https://img.shields.io/badge/made%20by-Alessandro%20Massarotti%20Jr-232323?style=flat-square">
   <img src="https://img.shields.io/badge/Node.js-20.3.1-232323?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/alessandro-massarotti-Jr/Portifolio?color=232323&style=flat-square">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/alessandro-massarotti-Jr/Portifolio?color=232323&style=flat-square">
</p>

Este projeto tem uma proposta bem simples de ser um portifolio digital com alguns de meus projetos

<img src="./screenshot.png" alt="ScreenShot"/>

## start guide

### Docker

#### Dev

```bash 
docker compose up
```

#### production image

```bash
# build image
docker build -t portifolio:1.0.0 .

# setup container
docker run -d -p 3000:3000 --name portifolio portifolio:1.0.0
```

### from Scratch

```bash
# Install project dependencies
npm install

# Start dev application
npm run dev 

# make a production version of the project
npm run build 

# start application
npm start
```

## tecnologies

 - [Iconify](https://iconify.design/)
 - [Tailwind](https://tailwindcss.com/)
 - [Next.js](https://nextjs.org/)
 - [Typescript](https://www.typescriptlang.org/)

<br>

---

Desenvolvido Por [Alessandro Massarotti Jr](https://github.com/alessandro-massarotti-jr) 🤖
