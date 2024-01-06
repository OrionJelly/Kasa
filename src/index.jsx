/* Fichier JSX principal, qui comprend la logique de routage ainsi que les différents imports */

import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

/**** Import de la feuille de style ****/
import './style.scss'

/**** Import des différentes pages de l'application****/

import Home from './pages/Home'
import Rent from './pages/Rent'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'

import Gallery from './components/Gallery'
import Header from './components/Header'
import Footer from './components/Footer'

import { rentList } from './datas/rentList'

const router = createBrowserRouter([
    {
        path: '',
        element: (
            <>
                <Header
                link_1="Accueil"
                link_2="À propos"/>
                <Outlet />
                <Footer text='© 2020 Kasa. All rights reserved'/>
            </>
        ),

        children: [
            {
                path: '',
                element: <Home />,

                children: [
                    {
                        path: '',
                        element: (
                            <Gallery
                                list={rentList}
                            />
                        ),
                    },
                ],
            },
            {
                path: 'about',
                element: <About />,
            },

            {
                path: '/rent/:rentId',
                element: <Rent list={rentList} />,
                errorElement: <ErrorPage />
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ],

    },

])

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
)
