import React, {useEffect, useState} from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {useStore} from "../../Store.jsx";




const schema = yup
    .object({
        sexe: yup.string().required("Ce champ est obligatoire"),
        firstname: yup.string().required("Ce champ est obligatoire"),
        password: yup.string().required("Ce champ est obligatoire")
            .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et un symbole"
        ),
        confirmPassword: yup.string().required("Ce champ est obligatoire")

            .oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre'),

        email: yup.string().required("Ce champ est obligatoire").email('Entrer un email valide')
            .matches(/(@gmail\.com|@yahoo\.fr)$/, 'Veuillez entrer une adresse Gmail ou Yahoo valide'),

    })
    .required()



const divStyle = {
    backgroundImage: 'url("/images/des-tetes-aeriennes.jpg")',
    height: '30vh',
};
export default function FormulaireInscription() {

    const [load, setload] = useState(false);

    const CONECT = useStore((state) => state.CONECT);
    const storedUser = JSON.parse(localStorage.getItem('user'));

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset, // Ajout de la fonction reset
    } = useForm({
        resolver: yupResolver(schema),
    })

    const connection = useStore((state) => state.connection);
    const onSubmit =  (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        connection()
        reset()
    };


    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://restcountries.com/v3.1/all';

        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
                setCountries(sortedCountries);
            } catch (error) {
                console.error('Erreur lors de la récupération des pays:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='img-fixed-top d-none d-lg-block' style={divStyle}></div>
        <div className="conainer-fluid">
            <div className="container mt-5">
                <div className="row justify-content-center g-5">
                    {!CONECT ? (
                        <div className="col-md-12  col-lg-8">
                            <div className="card mb-3 px-3 border-0" style={{backgroundColor:'#E9E9E9'}}>
                                <div className="card-body mt-3">
                                    <h4 className="card-title text-center text-danger">CREEZ UN COMPTE</h4> <hr/>
                                    <div className="mx-4 mt-5">
                                        <p className="mt-3 fs-5 fw-bold mb-4 ">
                                            Vos informations Personnelles
                                        </p>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <p className="fw-bold">
                                                Titres
                                            </p>
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
                                                <label htmlFor="name" className="form-label fw-bold">Nom</label>
                                                <input {...register("firstname")} type="text" className="form-control border-0 " id="name1"/>
                                                <p className='text-danger'>{errors.firstname?.message}</p>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="emailtext" className="form-label fw-bold">E-mail</label>
                                                <input  {...register("email")} type="email" className="form-control border-0" id="emailtext" placeholder="xyz@gmail.com" />
                                                <p className='text-danger'>{errors. email?.message}</p>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password0" className="form-label fw-bold">Mot de passe</label>
                                                <input  {...register("password")} type="password" className="form-control border-0" id="password0"/>
                                                <p className='text-danger'>{errors.password?.message}</p>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password1" className="form-label fw-bold">Verification Mot de passe</label>
                                                <input  {...register("confirmPassword")} type="password" className="form-control border-0" id="password1"/>
                                                <p className='text-danger'>{errors.confirmPassword?.message}</p>
                                            </div>
                                            <div className=" d-grid gap-2 mx-auto mt-5">
                                                <button className="btn btn-danger" type="submit"> S'inscrire </button>

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
                    ) : (
                        <div>
                            <p className="text-center display-6 fw-bold">
                                BIENVENUE {storedUser.firstname}
                            </p>
                        </div>
                    )}
                </div>

            </div>

        </div>
        </>
    )
}
