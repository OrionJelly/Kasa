/****
 Composant Slide qui permet d'afficher un carroussel, il comprend 2 props :
=> {pictures} pour changer la source de l'image
=> {alt} pour changer le contenu de l'alt

****/

// Importation de useState via react
import { useState } from 'react'

//Importation des images
import arrow_left from '../../assets/arrow_left.svg'
import arrow_right from '../../assets/arrow_right.svg'



function Slide({ pictures, alt }) {
    // Déclaration d'une constante avec pour valeur 0
    const [index, setIndex] = useState(0)

    // Déclaration d'une constante pour la flèche de gauche
    const arrowLeft = () => {
        setIndex(index - 1)
        if (index === 0) setIndex(pictures.length - 1)
    }

    // Déclaration d'une constante pour la flèche de droite
    const arrowRight = () => {
        setIndex(index + 1)
        if (index === pictures.length - 1) setIndex(0)
    }

    const count = 1
    const slideLength = pictures.length

    return (
        <div className="slide-container">
            <figure className="slide-main">
                <img
                    className="slide-main__img"
                    src={pictures[index]}
                    alt={alt}
                />
                {/* Gestion de l'affichage des flèches */}
                {count !== slideLength ? (
                    <div className="slide-main__arrow">
                        <img
                            className="slide-main__arrowL"
                            src={arrow_left}
                            alt="Arrow"
                            onClick={arrowLeft}
                        />

                        <img
                            className="slide-main__arrowR"
                            src={arrow_right}
                            alt="Arrow"
                            onClick={arrowRight}
                        />
                    </div>
                ) : null}
            </figure>
            {/* Gestion de l'affichage du compteur */}
            {count !== slideLength ? (
                <div className="slide-container__count">
                    {index + 1} / {pictures.length}
                </div>
            ) : null}
        </div>
    )
}

export default Slide
