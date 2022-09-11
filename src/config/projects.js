import jsIcon from "../assets/img/icons/js-icon.svg"
import nodeIcon from "../assets/img/icons/node-icon.svg"
import reactIcon from "../assets/img/icons/react-icon.svg"
import tsIcon from "../assets/img/icons/ts-icon.svg"
import wordpressIcon from "../assets/img/icons/wordpress-icon.svg"

import jsNotes from "../assets/img/projects/jsNotes.png"
import nodeChat from "../assets/img/projects/nodeChat.png"
import reactEpubReader from "../assets/img/projects/reactEpubReader.png"
import marioGame from "../assets/img/projects/marioGame.png"
import nlwReturn from "../assets/img/projects/nlwReturn.png"
import igniteLab062022 from "../assets/img/projects/igniteLab062022.png"
import pokedexReact from "../assets/img/projects/pokedexReact.png"
import pokedexMapaDevWeek from "../assets/img/projects/pokedexMapaDevWeek.png"

export const projects = [
    {
        title:'OneBitCode - EverNote',
        description:"Projeto final do curso fullstack javascript OneBitCode com algumas melhorias/alterações",
        mainColor:'#624fd2',
        image:jsNotes,
        demo:null,
        repo:'https://github.com/Alessandro-Massarotti-Jr/OneBitCode-EverNote', 
        tecnologyIcon:tsIcon
    },
    {
        title:'Node chat',
        description:"Este projeto esta sendo desenvolvido para ser um chat em tempo real utilizando Node.js para o servidor React.js para o cliente e a biblioteca Socket.IO para fazer a comunicação entre os dois por meio de web sockets.",
        mainColor:'#0a7ec2',
        image:nodeChat,
        demo:null,
        repo:'https://github.com/Alessandro-Massarotti-Jr/node-chat', 
        tecnologyIcon:nodeIcon
    },
    {
        title:'React Epub Reader',
        description:"Projeto desenvolvido com o intuito de ser um leitor de arquivos .epub(Ebooks) tanto de links externos quanto da maquina do proprio usuario",
        mainColor:'#e00000',
        image:reactEpubReader,
        demo:'https://react-epub-reader.vercel.app/',
        repo:"https://github.com/Alessandro-Massarotti-Jr/react-epub-reader", 
        tecnologyIcon:reactIcon 
    },
    {
        title:'Mario Game',
        description:"Projeto simples desenvolvido em Javascript para ser um jogo de run and jump",
        mainColor:'#f5fb09',
        image:marioGame,
        demo:'https://alessandro-massarotti-jr.github.io/Mario-game/',
        repo:"https://github.com/Alessandro-Massarotti-Jr/Mario-game", 
        tecnologyIcon:jsIcon 
    },
    {
        title:'NLW Return',
        description:"Projeto desenvolvido durante a Next level week return em 2022",
        mainColor:'#8257e6',
        image:nlwReturn,
        demo:'https://nlw-return-impulse-topaz.vercel.app/',
        repo:"https://github.com/Alessandro-Massarotti-Jr/nlw-return-impulse", 
        tecnologyIcon:tsIcon 
    },
    {
        title:'Ignite Lab 06/2022',
        description:"Projeto desenvolviddo durante o ignite lab de 06/2022 da Rocketseat com a proposta de ser uma plataforma de eventos utilizando graphCMS como backend para consumir APIs em graphql no frontend",
        mainColor:'#00875f',
        image:igniteLab062022,
        demo:'https://iginite-lab-06-2022.vercel.app/',
        repo:"https://github.com/Alessandro-Massarotti-Jr/iginite-lab-06-2022", 
        tecnologyIcon:tsIcon
    },
    {
        title:'Pokedex mapa dev week',
        description:"Projeto desenvolvido durante a mapa dev week em 03/2022",
        mainColor:'#dadfe8',
        image:pokedexMapaDevWeek,
        demo:'https://alessandro-massarotti-jr.github.io/Pokedex-MapaDevWeek/',
        repo:"https://github.com/Alessandro-Massarotti-Jr/Pokedex-MapaDevWeek", 
        tecnologyIcon:jsIcon 
    },
    {
        title:'Pokedex React',
        description:"Projeto desenvolvido em react consumindo a pokeAPI para adicionar conteudo ao site",
        mainColor:'#f8343a',
        image:pokedexReact,
        demo:'https://pokedex-react-ten.vercel.app/',
        repo:"https://github.com/Alessandro-Massarotti-Jr/pokedex-react", 
        tecnologyIcon:reactIcon 
    },
    {
        title:'Woocomerce sell by measurements',
        description:"Função desenvolvida para o plugin woocommerce, sua finalidade é transformar as variações de um produto variavel em medidas do mesmmo como por exemplo: variação 1 equivale a 20 unidades do produto principal",
        mainColor:'#7f54b3',
        image:null,
        demo:null,
        repo:"https://github.com/Alessandro-Massarotti-Jr/WooCommerce-dynamic-inventory-on-product-variations-based-on-parent-product-inventory", 
        tecnologyIcon:wordpressIcon 
    },
]