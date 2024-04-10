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
import ProduitItem4 from "./pages/ProduitItem4.jsx";
import ProduitItem6 from "./pages/ProduitItem6.jsx";
import ProduitItem7 from "./pages/ProduitItem7.jsx";
import ProduitItem8 from "./pages/ProduitItem8.jsx";
import FormulaireInscription from "./pages/FormulaireInscription.jsx";
import FormulaireCommande from "./pages/FormulaireCommande.jsx";
import FormulaireArtiste from "./pages/FormulaireArtiste.jsx";






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
                path: "/produit4/:id",
                element: <ProduitItem4 />,

            },
            {
                path: "/produit6/:id",
                element: <ProduitItem6 />,

            },
            {
                path: "/produit7/:id",
                element: <ProduitItem7 />,

            },
            {
                path: "/produit8/:id",
                element: <ProduitItem8 />,

            },
            {
                path: "/artiste/:id",
                element: <ArtisteItem />,

            },
            {
                path: "FormulaireInscription",
                element: <FormulaireInscription />,
            },
            {
                path: "FormulaireCommande",
                element: <FormulaireCommande/>,
            },
            {
                path: "FormulaireArtiste",
                element: <FormulaireArtiste/>,
            },

        ],
    },
]);

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
