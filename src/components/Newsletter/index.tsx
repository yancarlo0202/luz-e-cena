import Button from "../Button"
import Fieldset from "../Fieldset"
import InputText from "../InputText"
import styles from "./Newsletter.module.css"

import React from 'react'

const Newsletter = () => {
  return (
    <section className={styles.Newsletter}>
        <h2 className={styles.titulo}>Inscreva-se para ganhar desconto!</h2>
        <form className={styles.form}>
            <Fieldset>
                <InputText placeholder="digite o seu melhor email" />
            </Fieldset>
            <Button variant="default" type="submit">
                Inscreva-se
            </Button>
        </form>
    </section>
  )
}

export default Newsletter