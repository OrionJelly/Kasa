/****
 Composant Rating qui permet d'afficher la note de la location à l'aide d'étoiles, comprend 1 props :
 => rating qui permet de renseigner la note selon le retour du tableau

 ****/


 // importation des images

import fullStar from '../../assets/star-red.png'
import emptyStar from '../../assets/star.png'

function Rating({ rating }) {
    //maxRate permet de définir une note max de 5.
    const maxRate = [1, 2, 3, 4, 5]
    return (
        <div className="star-container">
            {/* La fonction map retourne 5 étoile et sélectionne la source de l'image selon la note*/}
            {maxRate.map((rate, index) =>
                rating >= rate ? (
                    <img
                        className="red-star"
                        key={index}
                        src={fullStar}
                        alt="Red star"
                    />
                ) : (
                    <img
                        className="empty-star"
                        key={index}
                        src={emptyStar}
                        alt="Empty star"
                    />
                )
            )}
        </div>
    )
}
export default Rating
