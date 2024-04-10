import React from 'react';
import {FaGoogle, FaUser, FaUserCircle} from "react-icons/fa";
import Inscription from "../components/Inscription.jsx";
import Connexion from "../components/Connexion.jsx";
import { useStore } from "../../Store.jsx";
import {RiLogoutCircleRLine} from "react-icons/ri";

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
                            <p className="text-center fs-4 fw-bold">
                                BIENVENUE  <span className='text-danger'>{storedUser.firstname}</span>
                            </p>
                            <p className="fs-5 fw-bold text-center mt-5 mb-5">
                                Vous êtes connecté en tant que   <span className='text-danger'>{storedUser.username}</span>
                            </p>


                            <div className='row d-flex justify-content-center'>
                                <div className='col-lg-8'>
                                    <div className="card bg-body-secondary border-0">
                                        <div className="card-body">
                                            <h2 className="card-title text-center fw-bold mt-4 mb-3">vos informations</h2>
                                            <p className=" bg-danger m-auto" style={{height:'5px', width:'150px'}}></p>
                                            <div className='mb-5 text-center'>
                                                <h6 style={{fontSize:'100px'}}>
                                                    <FaUserCircle />
                                                </h6>
                                                <span className='text-center text-danger fw-bold fs-4'>
                                                   {storedUser.firstname} {storedUser.lastname}
                                            </span>
                                            </div>

                                            <div className='mx-3'>
                                                <p className='fs-4 fw-bold'>
                                                    Nom:  <span className='fs-5 fw-normal'> {storedUser.firstname}</span>
                                                </p>
                                            </div>
                                            <div className='mx-3'>
                                                <p className='fs-4 fw-bold'>
                                                    Prenom:  <span className='fs-5 fw-normal'>  {storedUser.lastname}</span>
                                                </p>
                                            </div>
                                            <div className='mx-3'>
                                                <p className='fs-4 fw-bold'>
                                                    Nom d'utilisateur:<span className='fs-5 fw-normal'>  {storedUser.username}</span>
                                                </p>

                                            </div>
                                            <div className='mx-3'>
                                                <p className='fs-4 fw-bold'>
                                                    Pays:<span className='fs-5 fw-normal'>{storedUser.country}</span>
                                                </p>
                                            </div>
                                            <div className='mx-3'>
                                                <p className='fs-4 fw-bold'>
                                                    Sexe:<span className='fs-5 fw-normal'>{storedUser.sexe}</span>
                                                </p>
                                            </div>
                                            <div className='mx-3'>
                                                <p className='fs-4 fw-bold'>
                                                    Email:<span className='fs-5 fw-normal'>{storedUser.email}</span>
                                                </p>
                                            </div>
                                            <div className='mx-3'>
                                                <button className='btn btn-danger' onClick={clear}>Deconnection <RiLogoutCircleRLine /></button>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>

                    )}
                </div>

            </main>
        </>
    );
}
