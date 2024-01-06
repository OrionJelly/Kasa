/****
 Composant Rentlabel qui permet d'afficher l'intitulé de la location ainsi que le lieu, comprend 2 props :
 => {title} pour renseigner l'intitulé
 => {content} pour afficher la localisation

 ****/

function Rentlabel({ title, content }) {
    return (
        <>
            <div className="rentlabel-main">
                <h2 className="rentlabel-main__title">{title}</h2>
                <p className="rentlabel-main__text">{content}</p>
            </div>
        </>
    )
}

export default Rentlabel
