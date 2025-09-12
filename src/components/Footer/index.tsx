import styles from "./Footer.module.css"
import FooterInfo from "./FooterInfo"
import FooterLogo from "./FooterLogo"

const Footer = () => {
  return (
    <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
            <FooterLogo />
            <FooterInfo />
        </div>
    </footer>
  )
}

export default Footer