/****
 Composant Banner qui permet d'afficher une image, il comprend 2 props :
=> {imgSrc} pour changer la source de l'image
=> {bannerTitle} pour changer le contenu du titre

****/

function Banner({ imgSrc, bannerTitle }) {
    return (
            <div className='banner-container'>
                <div className='banner-container__title'>
                {bannerTitle}
                </div>
            <img src={imgSrc} alt="Banner" className='banner-container__img'/>

            </div>

    )
}




export default Banner