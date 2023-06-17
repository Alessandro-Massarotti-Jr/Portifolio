import { forwardRef } from "react";
import styles from "./styles.module.css";

const InputText = forwardRef(({ name, type, placeholder, required, label }, ref) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputContainer__label} htmlFor={name}>{label}</label>
            <input className={styles.inputContainer__input} ref={ref} required={required} type={type} name={name} id={name} placeholder={placeholder} />
        </div>
    );
});

export default InputText;