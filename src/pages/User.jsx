import React from 'react';
import { FaGoogle } from "react-icons/fa";
import Inscription from "../components/Inscription.jsx";
import Connexion from "../components/Connexion.jsx";
import { useStore } from "../../Store.jsx";

export default function User () {
    // Utilisez le hook de votre store
    const CONECT = useStore((state) => state.CONECT);
    const divStyle = {
        backgroundImage: 'url("/images/Dessin/images.jpg")',
        height: '30vh',
    };
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const deconnection = useStore((state) => state.deconnection);
    const clear = () => {
        deconnection();
    };

    return (
        <>
            <div className='img-fixed-top d-none d-lg-block' style={divStyle}></div>
            <main className="container mt-5">
                <div>
                    {!CONECT ? (
                            <div>
                                <p className="text-center display-6 fw-bold">
                                    BIENVENUE
                                </p>
                                <p className="fs-5 fw-bold text-center mt-5 mb-5">
                                    CONNEXION RAPIDE AVEC <strong className='fs-4' style={{ color: "blue" }}><FaGoogle /></strong>
                                </p>
                                <div className="row justify-content-center">
                                    <Inscription />
                                    <Connexion />
                                </div>
                            </div>
                    ) : (
                        <div>
                            <p className="text-center display-6 fw-bold">
                                BIENVENUE {storedUser.firstname}
                            </p>
                            <p className="fs-5 fw-bold text-center mt-5 mb-5">
                                Vous êtes connecté en tant que {storedUser.username}
                            </p>
                            <button className='btn btn-danger' onClick={clear}>deconnection</button>
                        </div>
                    )}
                </div>

            </main>
        </>
    );
}
