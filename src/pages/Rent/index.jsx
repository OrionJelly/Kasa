/**** page Rent ****/

// Importation de useparams via react-router-dom
import { Navigate, useParams } from 'react-router-dom'

// importation des composants nécessaires à la construction de la page
import Slide from '../../components/Slide'
import Collapse from '../../components/Collapse'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Rentlabel from '../../components/Rentlabel'

// le pros {list} correspond au tableau de locations
function Rent({ list }) {
    // Utilisation d'useParams pour récupérer l'id de la location dans l'URL
    const rentId = useParams()

    // Const qui retourne l'objet qui correspond à l'id de la location
    const currentRentId = list.find((arr) => arr.id === rentId.rentId)

    return (
        <>
    {/* Condition booléenne si currentRendId = true retourne les données de la location, sinon renvoi sur la page d'erreur */}
        {currentRentId ?
            <main className="main-container">
            <Slide
            pictures={currentRentId.pictures}
            alt={currentRentId.title}
            />
            <section className="section-first">
            <Rentlabel
            title={currentRentId.title}
            content={currentRentId.location}
            />
            <div className="section-first__tags">
            {currentRentId.tags.map((tag, i) => (
                <Tags key={i} content={tag} />
                ))}
                </div>
                </section>
                <section className="section-second">
                <Host
                name={currentRentId.host.name}
                picture={currentRentId.host.picture}
                />
                <Rating rating={currentRentId.rating} />
                </section>
                <section className="section-third">
                <Collapse
                title="Description"
                text={currentRentId.description}
                />
                <Collapse
                title="Équipements"
                text={currentRentId.equipments.map((equip, index) => (
                    <li key={index}>{equip}</li>
                    ))}
                    />
                    </section>
                    </main>
                : <Navigate to="*"/>}
                </>


    )
}

export default Rent
