import { Icon } from "@iconify/react";
import { useState } from "react";
import styles from "./styles.module.css"

export default function Header() {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    function handleOpenNav() {
        if (isMobileNavOpen) {
            setIsMobileNavOpen(false);
        } else {
            setIsMobileNavOpen(true);
        }
    }

    return (
        <header className={styles.header}>
            <nav className={styles.desktopNav}>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}>
                        <a href="#tecnologies">Tecnologias</a>
                    </li>
                    <li className={styles.navLink}>
                        <a href="#about">Sobre</a>
                    </li>
                    <li className={styles.navIcon}>
                        <a href="#welcome">
                            <Icon icon="clarity:node-line" />
                        </a>
                    </li>
                    <li className={styles.navLink}>
                        <a href="#projects">Projetos</a>
                    </li>
                    <li className={styles.navLink}>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.mobileNav}>

                <div className={styles.mobileControls}>
                    <span className={styles.navIcon}>
                        <a href="#welcome">
                            <Icon icon="clarity:node-line" />
                        </a>
                    </span>
                    <button className={styles.mobileNav__button} onClick={handleOpenNav}>
                        {isMobileNavOpen ? <Icon icon="eva:close-fill" /> : <Icon icon="bx:menu" />}
                    </button>
                </div>


                {isMobileNavOpen &&
                    <nav>
                        <ul className={styles.navLinks}>
                            <li className={styles.navLink}>
                                <a href="#tecnologies">Tecnologias</a>
                            </li>
                            <li className={styles.navLink}>
                                <a href="#about">Sobre</a>
                            </li>
                            <li className={styles.navLink}>
                                <a href="#projects">Projetos</a>
                            </li>
                            <li className={styles.navLink}>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </nav>
                }

            </div>
        </header>
    );
}