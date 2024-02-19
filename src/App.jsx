import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./Root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Catalogue from "./pages/Catalogue.jsx";
import Artistes from "./pages/Artistes.jsx";
import EnExposition from "./pages/EnExposition.jsx";
import Contact from "./pages/Contact.jsx";
import User from "./pages/User.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import ProduitItem1 from "./pages/ProduitItem1.jsx";
import ProduitItem2 from "./pages/ProduitItem2.jsx";
import ProduitItem3 from "./pages/ProduitItem3.jsx";
import ArtisteItem from "./pages/ArtisteItem.jsx";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "Catalogue",
                element: <Catalogue />,
            },
            {
                path: "Artistes",
                element: <Artistes />,
            },
            {
                path: "EnExposition",
                element: <EnExposition />,
            },
            {
                path: "Contact",
                element: <Contact />,
            },
            {
                path: "User",
                element: <User />,
            },
            {
                path: "ShoppingCart",
                element: <ShoppingCart />,
            },
            {
                path: "/produit/:id",
                element: <ProduitItem1 />,

            },
            {
                path: "/produit2/:id",
                element: <ProduitItem2 />,

            },
            {
                path: "/produit3/:id",
                element: <ProduitItem3 />,

            },
            {
                path: "/artiste/:id",
                element: <ArtisteItem />,

            },

        ],
    },
]);

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
