import React from 'react'
import {dataProduitdeux, dataProduitol, dataProduitphotographie, dataProduitsculptures} from "../dataProduit.jsx";
import CardQuatre from "../components/CardQuatre.jsx";
import CardSix from "../components/CardSix.jsx";
import CardCinq from "../components/CardCinq.jsx";
import CardSept from "../components/CardSept.jsx";

export default function EnExposition() {

    const divStyle = {
        backgroundImage: 'url("/images/PEINTURE/conceptual-street-art-graffiti-style-260nw-2303567171.jpg")',
        height: '40vh',
    };




    return (
        <>
            <div className='img-fixed-top d-none d-lg-block' style={divStyle}></div>

            <main className='container-fluid'>

                <div className="container-fluid mt-5">
                    <p className=" h3 fw-bold mx-5 mb-3">
                        VU EN EXPOSTION
                    </p>
                    <p className="text-secondary mx-5 fw-bolder ">
                        Nous vous proposons de retrouver ci-après quelques œuvres exposées lors de nos salons d’art
                        contemporains, des œuvres uniques,
                        des artistes contemporains africains renommés, des artistes émergents l’Art …
                    </p>
                </div>
                <div className="container mt-5">
                    <div>
                        <p className=" h4 fw-bold mx-5 mb-4 text-danger">Oeuvres Litteraires</p>
                    </div>
                    <div className="row my-4 ">
                        {
                            dataProduitol.map((item ,index)=>{
                                return(
                                    <div  className="col-md-6 col-lg-3 mt-4" key={index}>
                                        <CardQuatre

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

                <div className="container">
                    <div>
                        <p className="h4 fw-bold mx-5 mb-4 text-danger">Peintures</p>
                    </div>
                    <div className="row my-4 ">
                        {
                            dataProduitdeux.map((item ,index)=>{
                                return(
                                    <div  className="col-md-6 col-lg-3 mt-4" key={index}>
                                        <CardCinq

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

                <div className="container">
                    <div>
                        <p className="h4 fw-bold mx-5 mb-4 text-danger">Photgraphies</p>
                    </div>
                    <div className="row my-4 ">
                        {
                            dataProduitphotographie.map((item ,index)=>{
                                return(
                                    <div  className="col-md-6 col-lg-3 mt-4" key={index}>
                                        <CardSix

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

                <div className="container">
                    <div>
                        <p className="h4 fw-bold mx-5 mb-4 text-danger">Sculptures</p>
                    </div>
                    <div className="row my-4 ">
                        {
                            dataProduitsculptures.map((item ,index)=>{
                                return(
                                    <div  className="col-md-6 col-lg-3 mt-4" key={index}>
                                        <CardSept

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
