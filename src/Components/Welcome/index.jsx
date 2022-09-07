import { Icon } from "@iconify/react";
import styles from "./styles.module.css"

export default function Welcome() {
    return (
        <section className={styles.welcome}>
            <div>
                <h1>Alessandro Massarotti Junior</h1>
                <span>Desenvolvedor Javascript</span>
                <a href="https://www.linkedin.com/in/alessandro-massarotti-jr-71a68b218/"><Icon icon="bi:linkedin" /> LinkedIn</a>
                <a href="https://github.com/Alessandro-Massarotti-Jr"><Icon icon="bi:github" /> GitHub</a>
            </div>

            <div className={styles.circleContainer}>
                <div className={styles.circleContainer__outline1}>
                    <div className={styles.circleContainer__outline2}>
                        <div className={styles.circleContainer__outline3}>
                            <div className={styles.circleContainer__outline4}>
                                <div className={styles.circle}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}