import styles from "./styles.module.css";
import { Icon } from '@iconify/react';

export default function ProjectCard({ title, description, image, mainColor, repo, demo, tecnologyIcon }) {
    const borderColorBack = {
        backgroundColor: mainColor
    }
    const borderColor = {
        borderColor: mainColor,
    }
    return (
        <div className={styles.card}>
            <div style={borderColorBack} className={styles.card_image}>
                {
                    image
                        ?
                        <div className={styles.banner}>
                            <img src={image} alt={title} />
                        </div>
                        :
                        <span className={styles.noImageIcon}>
                            <Icon icon="charm:file-code" />
                        </span>
                }
            </div>
            <div className={styles.card__tecnology}>
                <div style={borderColorBack} className={styles.tecnologyIconContainer}>
                    {
                        tecnologyIcon
                            ?
                            <img className={styles.tecnologyIcon} src={tecnologyIcon} alt={title} />
                            :
                            <span className={styles.noTecnologyIcon}>
                                <Icon icon="entypo:code" />
                            </span>
                    }
                </div>

            </div>

            <div className={styles.card_face2}>
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__description}>{description}</p>
                <div className={styles.card__links}>
                    {repo && <a className={styles.card__repo} href={repo} target="_blank">Repositorio</a>}
                    {demo && <a className={styles.card__demo} href={demo} target="_blank">Demonstração</a>}
                </div>
            </div>
            <div style={borderColorBack} className={styles.card_wave}></div>
        </div>
    );
}