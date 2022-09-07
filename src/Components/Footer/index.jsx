import styles from "./styles.module.css"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p className={styles.copyright}>Desenvolvido por <a target="_blank" href="https://github.com/Alessandro-Massarotti-Jr">Alessandro Massatotti Junior</a>🤖</p>
        </footer>
    );
}