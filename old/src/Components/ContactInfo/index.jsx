import { Icon } from "@iconify/react";
import styles from "./styles.module.css"

export default function ContactInfo() {
    return (
        <div className={styles.contactInfo}>
            <a className={styles.contactLink} href="https://www.linkedin.com/in/alessandro-massarotti-jr-71a68b218/">
                <Icon className={styles.icon} icon="bi:linkedin" />
                LinkedIn
            </a>
            <a className={styles.contactLink} href="https://github.com/Alessandro-Massarotti-Jr">
                <Icon className={styles.icon} icon="bi:github" />
                GitHub
            </a>
            <a className={styles.contactLink} href="mailto:alemassajr@hotmail.com">
                <Icon className={styles.icon} icon="eva:email-outline" />
                alemassajr@hotmail.com
            </a>
            <a className={styles.contactLink} href="mailto:alemassajr@gmail.com">
                <Icon className={styles.icon} icon="eva:email-outline" />
                alemassajr@gmail.com
            </a>
        </div>
    );
}