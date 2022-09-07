import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { TextureLoader } from "three"

import styles from "./styles.module.css"
import { useState } from "react";

export default function TecnologyCube({ image,name,mainColor,link }) {
    const loader = useLoader(TextureLoader, image);
    const [isCardHover,setIsCardHover] = useState({});

    function handleMouseEnter(){
        setIsCardHover({
            filter: `drop-shadow(0px 0px 100px ${mainColor})`
        });
    }

    function handleMouseLeave(){
        setIsCardHover({});
    }


    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.tecnologyCard} style={isCardHover}>
            <div className={styles.tecnologyCard__cube}> 
            <Canvas>
                <OrbitControls autoRotate={true} autoRotateSpeed={10} enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <mesh rotation={[90, 0, 20]}>
                    <boxBufferGeometry attach='geometry' args={[3, 3, 3]} />
                    {/* <meshLambertMaterial attach='material' color={0xff0000} /> */}
                    <meshStandardMaterial map={loader} />
                </mesh>
            </Canvas>
            </div>
           
            <a href={link} className={styles.tecnologyCard__name} style={{backgroundColor:mainColor}}>{name}</a>
        </div>

    );
}