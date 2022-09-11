import TecnologyCube from "../TecnologyCube";
import styles from "./styles.module.css";

import AliceCarousel from "react-alice-carousel";
import { tecnologies } from "../../config/tecnologies";

export default function Tecnologies() {

    return (
        <section id="tecnologies">
            <h2 className={styles.sectionTitle}>Tecnologias</h2>  
            <div className={styles.tecnologiesCubes}>
            <AliceCarousel 
            autoPlay={true} 
            autoPlayInterval={2000}
            infinite={true} 
            disableDotsControls={true}
            disableButtonsControls={true}
            mouseTracking={true}
            items={tecnologies.map((tecnology)=>{
                return  <TecnologyCube key={tecnology.name} image={tecnology.image} name={tecnology.name} mainColor={tecnology.mainColor} link={tecnology.link} />;
            })}
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