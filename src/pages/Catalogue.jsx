import React, {useState} from 'react'
import {dataProduitdeux, dataProduitphotographie, dataProduittrois} from "../dataProduit.jsx";
import CardTrois from "../components/CardTrois.jsx";
import CardDeux from "../components/CardDeux.jsx";
import CardHuit from "../components/CardHuit.jsx";
import SiedBar from "../components/SiedBar.jsx";

export default function Catalogue() {

    const divStyle = {
        backgroundImage: 'url("/images/travail-mixe-de-photographie-et-peinture.jpg")',
        height: '40vh',
    };
    const [filteredDataTrois, setFilteredDataTrois] = useState(dataProduittrois);
    const [filteredDataDeux, setFilteredDataDeux] = useState(dataProduitdeux);
    const [filteredDataHuit, setFilteredDataHuit] = useState(dataProduitphotographie);
    const handleFilters = (filters) => {
        let newDataTrois = [...dataProduittrois];
        let newDataDeux = [...dataProduitdeux];
        let newDataHuit = [...dataProduitphotographie];


        // Filtrer les données en fonction des valeurs sélectionnées dans les filtres
        if (filters.categorie) {
            newDataTrois = newDataTrois.filter(item => item.categorie === filters.categorie);
            newDataDeux = newDataDeux.filter(item => item.categorie === filters.categorie);
            newDataHuit = newDataHuit.filter(item => item.categorie === filters.categorie);
        }
        if (filters.artiste) {
            newDataTrois = newDataTrois.filter(item => item.artiste === filters.artiste);
            newDataDeux = newDataDeux.filter(item => item.artiste === filters.artiste);
            newDataHuit = newDataHuit.filter(item => item.artiste === filters.artiste);
        }
        if (filters.prixMin) {
            newDataTrois = newDataTrois.filter(item => item.price >= filters.prixMin);
            newDataDeux = newDataDeux.filter(item => item.price >= filters.prixMin);
            newDataHuit = newDataHuit.filter(item => item.price >= filters.prixMin);
        }
        if (filters.prixMax) {
            newDataTrois = newDataTrois.filter(item => item.price <= filters.prixMax);
            newDataDeux = newDataDeux.filter(item => item.price <= filters.prixMax);
            newDataHuit = newDataHuit.filter(item => item.price <= filters.prixMax);
        }
        // Vous pouvez ajouter d'autres filtres ici comme le prix, etc.

        // Mettre à jour les états des données filtrées
        setFilteredDataTrois(newDataTrois);
        setFilteredDataDeux(newDataDeux);
        setFilteredDataHuit(newDataHuit);

    };


    return (
        <>
            <div className='img-fixed-top d-none d-lg-block' style={divStyle}></div>

            <main className='container-fluid d-flex justify-content-center'>
                <div className='container-fluid row mt-5'>
                    <div className='col-lg-2 col-md-3 mt-5 bg-body-secondary' style={{height:'680px'}}>
                        <SiedBar
                            handleFilters={handleFilters}
                        />
                    </div>
                    <div className='col-lg-10 col-md-9 ps-3' >
                        <div>
                            <div>
                                <h1 className="text-center mt-5 fs-1">CATALOGUE D'ART
                                    <p className=" bg-danger m-auto" style={{height:'5px', width:'200px'}}></p>
                                </h1>
                                <p className="my-5 mt-5">Envie de savoir en quoi consiste <strong>l’art contemporain
                                    africain </strong>? Vous aimeriez découvrir <strong>des œuvres uniques</strong>,
                                    spécialement <strong>sélectionnées</strong> avec le regard <strong>féminin d’AFRICA
                                        SPACE</strong>, situé au <strong>Cameroun</strong> ? Nous avons rassemblé pour
                                    vous <strong>les artistes montants</strong> qui valent le détour.
                                </p>
                            </div>

                            <div className="row  mt-5">

                                {
                                    filteredDataTrois.map((item, index)=>{
                                        return(
                                            <div  className="col-md-6 col-lg-3 mt-4" key={index}>
                                                <CardTrois
                                                    image={item.image}
                                                    title={item.title}
                                                    origin={item.origin}
                                                    price={item.price}
                                                    id={item.id}
                                                    produit={item}

                                                />

                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="row my-5 mb-4">
                                {
                                    filteredDataDeux.map((item, index)=>{
                                        return(
                                            <div className="col-md-6 col-lg-3 mt-4" key={index}>
                                                <CardDeux
                                                    image={item.image}
                                                    title={item.title}
                                                    origin={item.origin}
                                                    price={item.price}
                                                    id={item.id}
                                                    produit={item}

                                                />

                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="row my-5 mb-4">
                                {
                                    filteredDataHuit.map((item, index)=>{
                                        return(
                                            <div className="col-md-6 col-lg-3 mt-4" key={index}>
                                                <CardHuit
                                                    image={item.image}
                                                    title={item.title}
                                                    origin={item.origin}
                                                    price={item.price}
                                                    id={item.id}
                                                    produit={item}
                                                />

                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </>

    )
}
