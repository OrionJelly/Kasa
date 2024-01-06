/****
 Composant Gallery qui permet d'itérer sur un tableau grâce à la fonction .map et de retourner le composant Card se lon le nombre d'entrer dans le tableau, comprend 1 props :
 => {list} qui permet d'indiquer le tableau à retourner
 ****/

import Card from '../Card'

function Gallery({ list }) {
    return (
        <ul className="card-container">
            {list.map((arr) => (
                <Card
                    key={arr.id}
                    cover={arr.cover}
                    title={arr.title}
                    rentId={arr.id}
                />
            ))}
        </ul>
    )
}

export default Gallery
