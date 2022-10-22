import { Icon } from "@iconify/react";
import styles from "./styles.module.css"

export default function Welcome() {
    return (
        <section id="welcome" className={styles.welcome}>
            <div className={styles.info}>
                <h1 className={styles.name}>Alessandro Massarotti Junior</h1>
                <span className={styles.title}>Desenvolvedor Javascript</span>
                <a className={styles.linkedinButton} href="https://www.linkedin.com/in/alessandro-massarotti-jr-71a68b218/">
                    <Icon className={styles.icon} icon="bi:linkedin" />
                     LinkedIn
                     </a>
                <a className={styles.githubButton} href="https://github.com/Alessandro-Massarotti-Jr">
                    <Icon className={styles.icon} icon="bi:github" /> 
                    GitHub
                    </a>
            </div>

            <div className={styles.circleContainer}>
                <div className={styles.circleContainer__outline1}>
                    <div className={styles.circleContainer__outline2}>
                        <div className={styles.circleContainer__outline3}>
                            <div className={styles.circleContainer__outline4}>
                                <div className={styles.circle}>
                                    <div className={styles.profile}>
                                    <img  src="https://github.com/Alessandro-Massarotti-Jr.png" alt="Github profile" />
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}