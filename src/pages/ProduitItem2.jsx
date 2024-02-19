import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import {dataProduitdeux} from "../dataProduit.jsx";
import {MdAddShoppingCart} from "react-icons/md";
import {FaQuestion} from "react-icons/fa";
import {useStore} from "../../Store.jsx";

export default function ProduitItem2() {

    const updateCARD = useStore((state) => state.updateCARD)
    const CARD = useStore((state) => state.CARD)

    function AddProduit() {
        let existProduit=CARD.findIndex(item=>item.id===produc.id)
        if(existProduit===-1){
            updateCARD(produc)
        }

    }





    const [produc, setProduc] = useState({});
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        const produit = dataProduitdeux.find(item => item.id === id);
        if (produit) {
            setProduc(produit);
        }
    }, []);

    return (

        <main className="container-fluid mt-5">
            <div className='container'>
                <div>
                    <p className="text-center mt-5 h2 fw-bold">
                        {produc.title}
                    </p>
                    <p className="text-center h5 text-danger fw-bold">
                        {produc.category} de {produc.name}
                    </p>
                </div>
                <div className='row'>
                    <div className="col-lg-6 mt-5">
                        <img src={`${produc.image}`}
                             style={{height:'400px', width:'400px'}}
                             className="img-thumbnail img-fluid object-fit-fill border-0 shadow" alt="..."/>
                        <div className=" col-lg-10 mt-5">
                            <p>
                                <strong className='fs-4'>L'histoire de l'oeuvre</strong> <br/> {produc.histoire}
                            </p>
                            <p>
                                <strong className='fs-4'>Caracteristiques</strong> <br/>
                                <span className='fs-4 fw-bold'>Categorie:</span> {produc.category} <br/>
                            </p>
                            <p>
                                <span className="fw-bold fs-4"> En savoir plus</span>
                                {produc.plus}
                            </p>
                            <p className="fw-bold text-danger">
                                Les {produc.category} En Afrique Tout Un Art
                            </p>


                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 mt-5 fs-5">
                        <p>
                            {produc.title}
                        </p>
                        <p className="fw-light">
                            Made in {produc.origin}
                        </p>
                        <p>Taille: <small>70 x 70</small></p>
                        <p className="fw-bold">
                            {produc.price} FCFA
                        </p>
                        <button type="button" className="btn btn-danger" onClick={AddProduit}>
                            <span className='fs-5'><MdAddShoppingCart /></span>
                            Ajouter au panier
                        </button>
                        <div className="mt-3">
                            <Link to="/Contact" className="btn  bg-info text-white fw-bold px-4" type="button">

                                Poser Une Question <FaQuestion /> </Link>

                        </div>
                    </div>

                </div>

            </div>
        </main>
    )
}
