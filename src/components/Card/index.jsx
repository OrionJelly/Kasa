/****
 Composant Card  qui comprend 4 props :
 => {id} pour définir la clé de l'élément <li>
 => {cover} pour définir la source de l'image
 => {rentId} pour définir l'id correspondant  au lien
 => {title}  pour définir le titre de l'id correspondant
 ****/


 // import de Navlink via reac-router-dom
import { NavLink } from "react-router-dom"



function Card({id, cover, rentId, title}) {
    return (
        <li key={id} className="card-container__cards">
            <NavLink to={`/rent/${rentId}`}>
                <img
                    className="card-container__cards--img"
                    src={cover}
                    alt={title}
                ></img>
                <div className="card-container__cards--gradient">
                    <p className="card-container__cards--title">{title}</p>
                </div>
            </NavLink>
        </li>
    )
}



export default Card