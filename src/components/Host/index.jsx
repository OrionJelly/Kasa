/****
 Composant Host qui permet d'afficher la photo de l'hôte ainsi que son nom, comprend 2 props :
 => name qui permet de renseigner le nom et l'alt 
 => picture qui permet d'afficher la photo

 ****/

function Host({ name, picture }) {
    return (
        <div className="host-main">
            <img className="host-main__img" src={picture} alt={name} />
            <p className="host-main__text">{name}</p>
        </div>
    )
}

export default Host
