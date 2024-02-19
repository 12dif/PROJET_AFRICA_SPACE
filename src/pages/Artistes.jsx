import React from 'react'
import {dataProduitartites} from "../dataProduit.jsx";
import CardArtistes from "../components/CardArtistes.jsx";

const divStyle = {
    backgroundImage: 'url("/images/PHOTOGRAPHIE/téléchargement (4).jpg")',
    height: '40vh',
};

export default function Artistes() {
    return (
        <>
            <div className='img-fixed-top d-none d-lg-block' style={divStyle}></div>
            <main className='container'>
                <div className="row my-5">
                    <h1 className="text-center mt-3">NOS ARTISTES</h1>
                    <div className="col-lg-2 col-md-3 col-sm-4 fw-bold">
                        <h2>10 artistes</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        dataProduitartites.map((item ,index)=>{
                            return(
                                <div  className="col-lg-6 col-md-12 mt-3" key={index}>
                                    <CardArtistes
                                        image={item.image}
                                        name={item.name}
                                        bibiographie={item.bibiographie}
                                        id={item.id}

                                    />

                                </div>
                            )
                        })
                    }

                </div>

            </main>
        </>

    )
}
