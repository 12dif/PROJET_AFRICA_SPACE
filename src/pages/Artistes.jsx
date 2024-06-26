import React from 'react'
import {dataProduitartites} from "../dataProduit.jsx";
import CardArtistes from "../components/CardArtistes.jsx";
import {Link} from "react-router-dom";

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
                    <p className="text-center mt-3 fs-1">NOS ARTISTES
                        <p className=" bg-danger m-auto" style={{height:'5px', width:'150px'}}></p>
                    </p>


                    <div className="hstack gap-3 mt-3">
                        <div className="p-2 ms-auto col-lg-10 col-md-9 col-sm-8">
                            <Link className="btn btn-primary fw-bold" to="/FormulaireArtiste" type='submit'>
                                ARTISTE <faquestion/>

                            </Link>
                        </div>

                        <div className="p-2 col-lg-2 col-md-3 col-sm-4 fw-bold">
                            <h2>10 artistes</h2>
                        </div>

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

                <div className="d-grid my-3">
                    <Link to="/FormulaireArtiste" className="btn btn-primary fw-bold" type="button">
                        ARTISTES  <faquestion/>
                    </Link>
                </div>

            </main>
        </>

    )
}
