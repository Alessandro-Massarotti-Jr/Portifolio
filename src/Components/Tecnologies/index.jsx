import TecnologyCube from "../TecnologyCube";
import styles from "./styles.module.css";

import htmlIcon from "../../assets/img/icons/html-icon.svg"
import cssIcon from "../../assets/img/icons/css-icon.svg"
import jsIcon from "../../assets/img/icons/js-icon.svg"
import tsIcon from "../../assets/img/icons/ts-icon.svg"
import reactIcon from "../../assets/img/icons/react-icon.svg"
import nodeIcon from "../../assets/img/icons/node-icon.svg"
import phpIcon from "../../assets/img/icons/php-icon.svg"
import laravelIcon from "../../assets/img/icons/laravel-icon.svg"
import wordpressIcon from "../../assets/img/icons/wordpress-icon.svg"
import AliceCarousel from "react-alice-carousel";

export default function Tecnologies() {
    const tecnologies = [
        <TecnologyCube image={htmlIcon} name={'Html'} mainColor={'#F16529'} link={'#'} />,
                <TecnologyCube image={cssIcon} name={'Css'} mainColor={'#33A9DC'} link={'#'} />,
                <TecnologyCube image={jsIcon} name={'Javascript'} mainColor={'#F0DB4F'} link={'#'} />,
                <TecnologyCube image={tsIcon} name={'Typescript'} mainColor={'#007acc'} link={'#'} />,
                <TecnologyCube image={nodeIcon} name={'Node.js'} mainColor={'#83CD29'} link={'#'} />,
                <TecnologyCube image={reactIcon} name={'React'} mainColor={'#61DAFB'} link={'#'} />,
                <TecnologyCube image={phpIcon} name={'Php'} mainColor={'#6181B6'} link={'#'} />,
                <TecnologyCube image={laravelIcon} name={'Laravel'} mainColor={'#FD4F31'} link={'#'} />,
                <TecnologyCube image={wordpressIcon} name={'Wordpress'} mainColor={'#003c56'} link={'#'} />
    ]
    return (
        <section id="tecnologies">
            <h2 className={styles.sectionTitle}>{'<Tecnologias>'}</h2>  
            <div className={styles.tecnologiesCubes}>
            <AliceCarousel 
            autoPlay={true} 
            autoPlayInterval={2000}
            infinite={true} 
            disableDotsControls={true}
            disableButtonsControls={true}
            mouseTracking={true}
            items={tecnologies}
            responsive={
                {
                    0: {
                        items: 1,
                    },
                    767:{
                        items:3
                    },
                    1024: {
                        items: 5
                    }
                  }
            } 
            />
            </div>
        </section>

    );
}