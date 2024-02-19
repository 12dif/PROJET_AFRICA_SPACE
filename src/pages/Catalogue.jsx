import React from 'react'
import {dataProduitdeux, dataProduittrois} from "../dataProduit.jsx";
import CardTrois from "../components/CardTrois.jsx";
import CardDeux from "../components/CardDeux.jsx";

export default function Catalogue() {

    const divStyle = {
        backgroundImage: 'url("/images/travail-mixe-de-photographie-et-peinture.jpg")',
        height: '40vh',
    };


    return (
        <>
            <div className='img-fixed-top d-none d-lg-block' style={divStyle}></div>

            <main className='container-fluid'>
                <div className='container'>
                    <div>
                        <h1 className="text-center mt-5">CATALOGUE D'ART</h1>
                        <p className="my-5 mt-5">Envie de savoir en quoi consiste <strong>l’art contemporain
                            africain </strong>? Vous aimeriez découvrir <strong>des œuvres uniques</strong>,
                            spécialement <strong>sélectionnées</strong> avec le regard <strong>féminin d’AFRICA
                                SPACE</strong>, situé au <strong>Cameroun</strong> ? Nous avons rassemblé pour
                            vous <strong>les artistes montants</strong> qui valent le détour.</p>
                    </div>

                    <div className="row my-4 mt-5">

                        {
                            dataProduittrois.map((item, index)=>{
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
                            dataProduitdeux.map((item, index)=>{
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
                </div>


            </main>
        </>

    )
}
