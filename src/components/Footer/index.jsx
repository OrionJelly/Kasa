/****
 Composant Footer qui permet d'afficher le pied de page, comprend 1 props :
 => {text} qui permet d'afficher le contenu du copyright
 ****/


// import du logo Kasa
import logo from '../../assets/logo/LOGO_w.png'

function Footer({ text }) {
    return (
        <footer className="footer-container">
            <img src={logo} alt="Kasa" className="footer-container__img" />
            <p className="footer-container__cright">{text}</p>
        </footer>
    )
}

export default Footer
