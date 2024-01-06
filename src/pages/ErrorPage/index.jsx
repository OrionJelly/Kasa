/****  Page d'erreur ****/


//importation du composant Error

import Error from "../../components/Error"

function ErrorPage() {
    return (
        <main>
        <Error type="404"
                content="Oups! La page que vous demandez n'existe pas."
                backLink="Retourner sur la page d'accueil" />
        </main>
    )
}

export default ErrorPage