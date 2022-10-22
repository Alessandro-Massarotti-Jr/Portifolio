import { forwardRef } from "react";
import styles from "./styles.module.css";

const TextArea = forwardRef(({ name, placeholder, required, label }, ref) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputContainer__label} htmlFor={name}>{label}</label>
            <textarea className={styles.inputContainer__input} ref={ref} name={name} id={name} placeholder={placeholder} required={required}></textarea>
        </div>
    );
})

export default TextArea;