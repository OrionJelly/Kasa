/**  Page a propos**/


// Importation de la src de l'image de la bannière
import banner from '../../assets/banner/banner_1.png'

// Importation des composants Banner et Collapse

import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

//Importation du .json CoolapseList
import { collapseList } from '../../datas/collapseList'



function Apropos() {
    return (
        <main>
            <Banner imgSrc={banner} />

            <section className="section-container">
                {/* La fonction .map parcours le tableau et retourne un composant collapse par entré */}
                    {collapseList.map((data) => {
                        return (
                            <Collapse
                                key={data.id}
                                title={data.title}
                                text={data.description}
                            />
                        )
                    })}

            </section>
        </main>
    )
}

export default Apropos
