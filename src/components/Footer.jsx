import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import Logo from "./Logo.jsx";
import {FaPlus, FaWhatsapp} from "react-icons/fa";
import {FaPhoneFlip} from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        email: yup.string().required("Ce champ est obligatoire").email('Entrer un email valie')
        .matches(/(@gmail\.com|@yahoo\.fr)$/, 'Veuillez entrer une adresse Gmail ou Yahoo valide'),
    })
    .required()

export default function Footer() {
    const toastStyle = {
        background: 'linear-gradient(to right, #ff8a00, #da1b60)',
        color: '#ffffff',
        borderRadius: '8px',
        border: '2px solid #ffffff',
        padding: '16px',
    };

    const [load, setload] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        console.log(data); // Envoyez les données à votre backend ou à EmailJS
        let message = ` Merci de vous être inscrit à notre newsletter !`;

        toast.success( <div style={toastStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '24px', marginRight: '16px' }}>✨</span>
                <span style={{ fontSize: '24px', marginLeft: '16px' }}>🎉</span>
            </div>
            <p>{message}</p>
        </div>, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setload(true);
        reset();
    };



    return (
        <>
            <div className="container-fluid  border mt-5">
                <footer className="py-3 ">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-6 col-md-3 mb-3">
                            <div>
                                <Logo/>
                                <p className='fs-5 mb-1'>
                                    Cameroun Douala <br/>
                                    Stade Cicam
                                </p>
                                <p className='fw-bold'>
                                    <button style={{color:'white'}}>
                                        <FaWhatsapp className='fs-5 mb-1' style={{color:'green'}}/>
                                    </button>
                                       +237 697  183 829 <br/>
                                    <button className='mt-2'>
                                        <FaPhoneFlip className='fs-5'/>
                                    </button>
                                    +237 695 593 521
                                </p>
                                <p className='fs-5'>
                                    Email <strong>: africaspace@gmail.com</strong>
                                </p>
                            </div>


                        </div>
                        <div className="col-6 col-md-3 mb-3">
                            <h5>HORAIRES</h5>
                            <p>
                                Ouvert de <strong>:</strong> <br/>
                                <FaPlus className='mb-3 mt-3'/>
                                8h00 a 20h00 du Lundi au Vendredi <br/>
                                <FaPlus/> 8h00 a 20h00 le Weekend
                            </p>
                        </div>
                        <div className="col-md-5 offset-md-1 mb-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h5> Newsletter</h5>
                                <p>Restez informe de toute l'actualiter de AfricaSpace en vous inscrivant a notre newsLetter</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <div className="w-100">
                                        <label htmlFor="newsletter1" className="visually-hidden">Email</label>
                                        <input {...register("email")} id="newsletter1" type="text" className="form-control" placeholder="Email" />
                                        <small className='text-danger'>{errors.email?.message}</small>
                                    </div>
                                        <button className="btn btn-primary" type="submit" style={{height:'37px'}}>S'incrire</button>
                                    {
                                        load && <div className="spinner-border text-white text-end" style={{position:"absolute", right:'50%'}}  role="status">

                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2024 Company, AFRICA SPACE . All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><NavLink className="link-dark" to="#"><img src="/images/téléchargement.jpg" style={{width:'24px',height:'24px'}} alt="aaaa"/></NavLink></li>
                            <li className="ms-3"><NavLink className="link-dark" to="#"><img src="/images/téléchargement.png" style={{width:'24px',height:'24px'}} alt="aaaa"/></NavLink></li>
                            <li className="ms-3"><NavLink className="link-dark" to="#"><img src="/images/téléchargement%20(2).png" className="bi" style={{width:'24px',height:'24px'}} alt="aaaa"/> </NavLink></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}
