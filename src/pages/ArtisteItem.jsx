import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {dataProduitartites, dataProduitdeux, dataProduitUn,} from "../dataProduit.jsx";
import CardUn from "../components/CardUn.jsx";
import CardDeux from "../components/CardDeux.jsx";

export default function ArtisteItem() {
    const [artist, setArtist] = useState({});
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        const artiste = dataProduitartites.find(item => item.id === id);
        if (artiste) {
            setArtist(artiste);
        }
    }, [id]);
    return (
        <main>
            <div className="container-fluid mt-5">
                <div className="container">
                    <div>
                        <p className="text-center fw-bold h3">
                            {artist.name}
                            <p className="bg-danger m-auto" style={{height:'5px',width:'70px'}}></p>
                            </p>

                    </div>
                    <div className="card mb-3 col-lg-12 mt-5 border-0">
                        <div className="row g-0">
                            <div className="col-lg-2 col-md-3 ">
                                <img src={`${artist.image}`}
                                     className="img-thumbnail border-black img-fluid d-none d-md-block" alt=""/>
                                    <p className="text-center">
                                        <img src={`${artist.image}`}
                                             className="img-thumbnail border-black img-fluid d-md-none d-sm-block"
                                             alt=""/>
                                    </p>
                            </div>
                            <div className="col-lg-10 col-md-9">
                                <div className="card-body">
                                    <p className="text-secondary fw-bolder">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi
                                        doloribus
                                        est et expedita fugit harum in ipsa itaque iure libero maiores mollitia praesentium
                                        quaerat
                                        quidem quo suscipit, ullam? Alias aliquam aliquid
                                        blanditiis doloremque esse facere, ipsam, labore maiores non placeat porro quas
                                        quo sint totam, unde voluptate voluptatem.
                                    </p>
                                    <h5 className="card-title">La naissance de l'artiste</h5>
                                    <p className="card-text text-secondary fw-bolder"> Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Alias,
                                        aperiam asperiores consectetur debitis eius facilis fuga, inventore nesciunt nulla
                                        officia pariatur qui repellendus unde. Ab accusantium animi aspernatur assumenda
                                        beatae
                                        cumque cupiditate doloribus eius error
                                        et fuga, ipsam laborum obcaecati quis ratione repudiandae, sunt temporibus tenetur,
                                        totam ullam voluptas voluptate!</p>
                                    <h5 className="card-title">Une personne avenante</h5>
                                    <p className="text-secondary fw-bolder">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
                                        architecto consequatur cumque eius est expedita facilis laborum, magnam
                                        minus nobis pariatur recusandae repellendus unde? Accusamus adipisci
                                        aperiam assumenda atque beatae consequuntur dolor dolorem,
                                        facilis illo ipsum libero minus mollitia officiis perferendis
                                        placeat possimus qui recusandae, rerum suscipit totam ut vero.
                                    </p>
                                    <h5 className="card-title">A l'ecoute des anciens</h5>
                                    <p className="text-secondary fw-bolder">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Alias amet asperiores beatae consequatur consequuntur dignissimos dolore
                                        doloribus ducimus eum exercitationem fuga fugit illo incidunt ipsam itaque
                                        laborum modi, necessitatibus praesentium quia soluta temporibus veniam veritatis,
                                        vitae.
                                        Aperiam at blanditiis, consequatur doloribus incidunt laudantium maiores natus,
                                        nostrum, quas sed sunt veniam!
                                    </p>
                                    <h5 className="card-title">Residence</h5>
                                    <p className="text-secondary fw-bolder">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi
                                        deleniti dignissimos distinctio eius fugit hic, iste molestiae perspiciatis
                                        rem sequi suscipit tempora temporibus veniam.
                                    </p>
                                    <h5 className="card-title fw-bold text-center text-danger fs-4 mt-5">Un artite a
                                        decouvrir</h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <h5 className="card-title fs-4 fw-bold mt-3">Oeuvre de l'artiste</h5>
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

                                        />

                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </main>
    )
}
