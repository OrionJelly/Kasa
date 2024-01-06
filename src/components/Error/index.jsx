/****
 Composant Error qui permet d'afficher un message d'erreur en cas de URI invalide, comprend 3 props :
 => {type} pour définir le type d'erreur <div>
 => {content} qui correspond à l'information retournée à l'utilisateur
 => {backlink} qui correspond au texte du lien de retour vers la page d'accueil
 ****/


import { NavLink } from 'react-router-dom'


function Error({type, content, backLink}) {
    return (
    <section className='error-container'>
        <p className='error-container__404'>{type}</p>
        <p className='error-container__info'>{content}</p>
        <NavLink to='/' className='error-container__link'>{backLink}</NavLink>
    </section>
    )
}

export default Error