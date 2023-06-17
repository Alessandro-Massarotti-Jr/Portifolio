import styles from "./styles.module.css"

export default function About() {
    return (
        <section className={styles.about} id="about">
            <h2 className={styles.sectionTitle}>Sobre</h2>
            <div className={styles.aboutContent}>
                <div className={styles.aboutText}>
                    <p>Olá, sou Alessandro Massarotti Junior, Desenvolvedor Web junior, sou formado em Analise e desenvolvimento de sistemas e atuo na area de desenvolvimento desde setembro de 2021.</p>
                    <p>Atualmente trabalho com o desenvolvimento de APIs com o framework laravel, porém já obtive experiencias com o desenvolvimento de interfaces com a biblioteca React e de temas completos para o CMS WordPress.</p>
                    <p>Estou estudando Node.js e TypeScrypt para poder ser independente em projetos completos com javascript, atuando tanto no FrontEnd quanto no BackEnd.</p>
                </div>
                <img src="https://media.giphy.com/media/5eLDrEaRGHegx2FeF2/giphy.gif" width="300" height="300" alt="dev gif" />
            </div>
        </section>
    );
}