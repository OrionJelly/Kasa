/**  Page d'accueil **/

//Importation  du Outlet via react-router-dom
import { Outlet } from 'react-router-dom'

//Importation du composant Banner
import Banner from '../../components/Banner'

// Importation de l'image du Banner
import banner2 from '../../assets/banner/banner_2.png'


function Home() {
    return (
        <main>
       <Banner imgSrc={banner2} bannerTitle={<h1>Chez vous,<br className='mbline'/> partout et ailleurs</h1>}/>
       {/* L'Outlet permet à la page d'afficher le composant enfant */}
        <Outlet />
        </main>

    )
}


export default Home