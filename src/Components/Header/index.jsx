import { Icon } from "@iconify/react";
import styles from "./styles.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}>
                        <a href="#welcome">Main</a>
                    </li>
                    <li className={styles.navLink}>
                        <a href="#about">About</a>
                    </li>
                    <li className={styles.navIcon}>
                        <a href="#welcome">
                            <Icon icon="clarity:node-line" />
                        </a>
                    </li>
                    <li className={styles.navLink}>
                        <a href="#tecnologies">Tecnologies</a>
                    </li>
                    <li className={styles.navLink}>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}