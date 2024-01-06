/****
 Composant Header qui permet d'afficher le logo Kasa ainsi que la navigation, comprend 2 props :
 => link_1 et link_2 qui permettent de renseigner le nom des liens

 ****/


// Importation de NavLink via react-router-dom
import { NavLink } from 'react-router-dom'

// Importation du logo Kasa
import logo from '../../assets/logo/LOGO.png'

function Header({link_1, link_2 }) {
    return (
        <header className="header-container">
            <nav className="header-container__nav">
                <img src={logo} alt="Kasa" />
                <div className="header-container__link">
                    <NavLink to="/">{link_1}</NavLink>
                    <NavLink to="/about">{link_2}</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header
