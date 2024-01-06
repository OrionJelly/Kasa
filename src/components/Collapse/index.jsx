/****
 Composant Collapse  qui comprend 3 props :
 => {id} pour définir la clé de l'élément <div>
 => {title} qui correspond au titre à afficher
 => {text} qui correspond au contenu à afficher
 ****/

// Importation du useState via react
import { useState } from 'react'

// Importation arrow.svg
import Arrow from '../../assets/Arrow.svg'




function Collapse({ title, text, id }) {

    // Initialisation de la constante toggle avec un useState booleen réglé sur false
    const [toggle, setToggle] = useState(false)

    // Fonction toggleState qui sert de callback et permet de vérifier l'état de toggle

    const toggleState = () => {
        setToggle(!toggle)
    }

/****

 Au click sur la collapse toggleState est appelée et change le className en fonction de l'état de setToggle

 ****/

    return (
        <div key={id} className="col-main">

            <div className="col-main__header" onClick={toggleState}>
                <h4 className="col-main__header--title">{title}</h4>
                <img
                    className={
                        toggle
                            ? 'col-main__header--arrowD'
                            : 'col-main__header--arrowU'
                    }
                    src={Arrow}
                    alt="Arrow"
                />
            </div>
            <div
                className={toggle ? 'col-main__footerV ' : 'col-main__footerH'}
            >
                <p className="col-main__footerV--content">{text}</p>
            </div>
        </div>
    )
}

export default Collapse
