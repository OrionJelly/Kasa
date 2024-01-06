/****
 Composant Tags qui permet d'afficher les tags des locations, il comprend 1 props :
=> {content} permet de renseigner le contenu du tag

****/

function Tags({ content }) {
    return (
        <div className="tags-main">
            <p className="tags-main__text">{content}</p>
        </div>
    )
}

export default Tags
