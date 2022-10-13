import { Icon } from "@iconify/react";
import { useState } from "react";
import styles from "./styles.module.css"

export default function Header() {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    function handleOpenNav(){
        if(isMobileNavOpen){
            setIsMobileNavOpen(false);
        }else{
            setIsMobileNavOpen(true);
        }
    }

    return (
        <header className={styles.header}>
            <nav className={styles.desktopNav}>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}>
                        <a href="#welcome">Home</a>
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
                        <a href="#tecnologies">Tecnologias</a>
                    </li>
                    <li className={styles.navLink}>
                        <a href="#projects">Projetos</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.mobileNav}>

     <button onClick={handleOpenNav}>Open nav</button>

                {isMobileNavOpen &&
                    <nav>
                        <ul className={styles.navLinks}>
                            <li className={styles.navLink}>
                                <a href="#welcome">Home</a>
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
                                <a href="#tecnologies">Tecnologias</a>
                            </li>
                            <li className={styles.navLink}>
                                <a href="#projects">Projetos</a>
                            </li>
                        </ul>
                    </nav>
                }

            </div>
        </header>
    );
}