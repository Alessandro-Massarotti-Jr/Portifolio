import styles from "./styles.module.css"

export default function About(){
    return(
        <section>
            <h2 className={styles.sectionTitle}>{'<About>'}</h2>
            <span className={styles.sectionTitle}>{'</About>'}</span>
        </section>
    );
}