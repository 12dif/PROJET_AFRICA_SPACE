import React from 'react'
import {Link, NavLink} from "react-router-dom";


export default function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner d-none d-lg-block">
                <div className="carousel-item active" data-bs-interval="2000">
                    <span className="d-block w-100 bg-secondary-subtle" style={{ height: '600px' }}></span>
                        <div className="carousel-caption  ">
                            <div className=" d-flex justify-content-center ">
                                <div className="text-start" style={{ height: '100%', width:'200%' }}>
                                    <h1 className="my-5" style={{fontSize:'5em',color:"black"}} >CATALOGUE<br/> D'ART <br/>AFRICAINE</h1>
                                    <p className="text-start">
                                        <NavLink to="/Catalogue" type="button" className="btn btn-danger h2">DECOUVREZ NOS OEUVRES</NavLink>
                                    </p>
                                </div>
                                <div style={{height:'100%',width:'100%'}}>
                                    <img src="/images/travail-mixe-de-photographie-et-peinture.jpg" className="border shadow img-thumbnail" style={{width:'400px' ,height:'500px'}}  alt=""/>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="carousel-item " data-bs-interval="2000">
                    <span className="d-block w-100 bg-secondary-subtle" style={{ height: '600px' }}></span>

                    <div className="carousel-caption ">
                        <div className="d-flex justify-content-center">
                            <div>
                                <img src="/images/PHOTOGRAPHIE/plan-view-local-ghanaian-dish-260nw-1845330106.jpg"
                                     className="img-thumbnail my-3 border border-dark"
                                     style={{width:'400px',height:'300px'}} alt=""/><br/>
                                    <img src="/images/Dessin/images.jpg" className="img-thumbnail border border-dark"
                                         alt=""/>
                            </div>
                            <div style={{marginTop:'50px',marginLeft:'20px'}}>
                                <img src="/images/artisPe/2-brand_default.jpg"
                                     className="img-thumbnail my-3 border border-dark"
                                     style={{height:'200px', width:'400px'}} alt=""/><br/>
                                    <img src="/images/Oeuvres/images.jpg" className="img-thumbnail border border-dark"
                                         style={{height:'200px'}} alt=""/>
                            </div>
                            <div style={{marginTop:'160px',marginLeft:'150px'}}>
                                <p className="h1 text-start" style={{fontSize:'3em',color:"black"}}>
                                    Decouvrez Jessica et d'autres artistes talent confirmés
                                </p>
                                <p className="text-start">
                                    <Link to="/Artistes" type="button" className="btn btn-danger h2">DECOUVRIR</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
