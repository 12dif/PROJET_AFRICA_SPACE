import React, {useEffect, useState} from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfProdCmd from "../components/InfProdCmd.jsx";
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import {useStore} from "../../Store.jsx";




const schema = yup
    .object({
        name: yup.string().required("Ce champ est obligatoire"),
        postname: yup.string().required("Ce champ est obligatoire"),
        email: yup.string().required("Ce champ est obligatoire").email('Entrer un email valide')
            .matches(/(@gmail\.com|@yahoo\.fr)$/, 'Veuillez entrer une adresse Gmail ou Yahoo valide'),
        tel: yup.string() .required("Ce champ est obligatoire")
            .matches(/^\+\d{1,3}\d{9}$/,'Entre un numero valide'),
        city: yup.string().required("Ce champ est obligatoire")
            .min(5,"minimum 5 caracteres")
            .max(20,"maximum 20 caracteres"),
        rue: yup.string().required("Ce champ est obligatoire")
            .min(5,"minimum 5 caracteres")
            .max(20,"maximum 20 caracteres"),
        country: yup.string().required("La sélection d'un pays est obligatoire"),
        sexe: yup.string().required("Ce champ est obligatoire"),

    })
    .required()

export default function FormulaireCommande() {
    const resetCARD=useStore((state)=> state.resetCARD)


    const toastStyle = {
        background: 'linear-gradient(to right, #ff8a00, #da1b60)',
        color: '#ffffff',
        borderRadius: '8px',
        border: '2px solid #ffffff',
        padding: '16px',
    };

    const [load, setload] = useState(false);

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const countryList = data.map(country => ({ label: country.name.common, value: country.name.common }));
                setCountries(countryList);
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) =>{
        console.log(data)
        setload(false)
        let civiliteMessage = data.sexe === 'M' ? 'Mr' : 'Mme';
        let message = `Merci <strong> ${civiliteMessage} ${data.name}</strong> d'avoir passé votre commande. Notre équipe vous contactera.`;
        message = <span dangerouslySetInnerHTML={{ __html: message }} />;

        toast.success( <div style={toastStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '24px', marginRight: '16px' }}>✨</span>
                <span style={{ fontSize: '24px', marginLeft: '16px' }}>🎉</span>
            </div>
            <p>{message}</p>
        </div>, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        reset()
        resetCARD()

    }


    return (
        <>
            <main className='container-fluid mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='text-center mb-5'>
                            <h1>Commander</h1>
                            <p className=" bg-danger m-auto" style={{height:'5px', width:'150px'}}></p>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <InfProdCmd/>
                        </div>

                        <div className='col-lg-6 mx-auto'>

                            <div className="card bg-body-secondary border-0">
                                <div className="card-body">
                                    <form className='mt-3' onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-check form-check-inline">
                                            <input{...register("sexe")} className="form-check-input" type="radio" name="sexe" id="masculin" value="masculin"/>
                                            <label className="form-check-label fw-bold" htmlFor="inlineRadio1">M</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input {...register("sexe")} className="form-check-input" type="radio" name="sexe"
                                                   id="feminin" value="feminin"/>
                                            <label className="form-check-label fw-bold" htmlFor="inlineRadio2">Mme</label>
                                        </div>
                                        <p className='text-danger'>{errors.sexe?.message}</p>
                                        <div className="mb-3">
                                            <input  {...register("name")} type="text" className="form-control" id="name" placeholder="Nom..."/>
                                            <p className='text-danger'>{errors.name?.message}</p>
                                        </div>
                                        <div className="mb-3">
                                            <input  {...register("postname")} type="text" className="form-control"
                                                   id="postname" placeholder="prenom..."/>
                                            <p className='text-danger'>{errors.postname?.message}</p>
                                        </div>
                                        <div className="mb-3">
                                            <input  {...register("email")} type="text" className="form-control"
                                                   id="email" placeholder="Adress email..."/>
                                            <p className='text-danger'>{errors.email?.message}</p>
                                        </div>
                                        <div className="mb-3">
                                            <input   {...register("tel")} type="text" className="form-control"
                                                   id="tel" placeholder="Numero telephone..."/>
                                            <p className='text-danger'>{errors.tel?.message}</p>
                                        </div>
                                        <div className="mb-3">
                                            <select {...register("country")} className="form-select">
                                                <option value="">Sélectionner votre pays...</option>
                                                {countries.map(country => (
                                                    <option key={country.value} value={country.value}>{country.label}</option>
                                                ))}
                                            </select>
                                            <p className='text-danger'>{errors.country?.message}</p>
                                        </div>
                                        <div className="mb-3">
                                            <input {...register("city")} type="text" className="form-control"
                                                   id="city" placeholder="Ville..."/>
                                            <p className='text-danger'>{errors.city?.message}</p>
                                        </div>
                                        <div className="mb-3">
                                            <input {...register("rue")} type="text" className="form-control"
                                                   id="rue" placeholder="Numero de la rue..."/>
                                            <p className='text-danger'>{errors.rue?.message}</p>
                                        </div>
                                        <div className="mb-3 d-flex justify-content-center">
                                            <button  className="btn btn-danger" type="submit">
                                                Envoyer
                                            </button>
                                            {
                                                load && <div className="spinner-border text-white text-end" style={{position:"absolute", right:'50%'}}  role="status">

                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            }
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to='/ShoppingCart' className='btn btn-success mt-3'>
                            <IoIosArrowBack />Retour vers panier
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
