import { useRef } from "react";
import InputText from "../Form/InputText";
import TextArea from "../Form/TextArea";
import styles from "./styles.module.css";

export default function ContactForm() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    function handleFormSubmit(event) {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/contact`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                name: nameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                subject: subjectRef.current.value,
                message: messageRef.current.value
            })
        });

    }

    return (
        <section className={styles.contact} id="contact">
            <h2 className={styles.sectionTitle}>Contato</h2>
            <form onSubmit={(event) => { handleFormSubmit(event) }}>
                <InputText name="name" label="Seu Nome (*)" placeholder="digite seu nome..." ref={nameRef} required={true} type="text" />
                <InputText name="email" label="Seu Email (*)" placeholder="digite seu email..." ref={emailRef} required={true} type="text" />
                <InputText name="phone" label="Seu telefone" placeholder="digite seu telefone..." ref={phoneRef} required={false} type="text" />
                <InputText name="subject" label="Assunto (*)" placeholder="digite o assunto..." ref={subjectRef} required={true} type="text" />
                <TextArea name="message" label="Mensagem (*)" placeholder="digite sua mensagem..." ref={messageRef} required={true} />
                <button type="submit">enviar</button>
            </form>
        </section>

    );
}