import React, {useRef, useState} from 'react'
import Logo from "../components/Logo.jsx";
import {VscCloudDownload} from "react-icons/vsc";
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        name: yup.string().required(),
        lastname: yup.string().required(),
        date: yup.string().required(),
        local: yup.string().required()
            .min(5,"minimum 5 caracteres")
            .max(20,"maximum 20 caracteres"),
        civilite: yup.string().required()
            .min(5,"minimum 5 caracteres")
            .max(20,"maximum 20 caracteres"),
        localnais: yup.string().required()
            .min(5,"minimum 5 caracteres")
            .max(20,"maximum 20 caracteres"),
        Citoyennete: yup.string().required()
            .min(5,"minimum 5 caracteres")
            .max(20,"maximum 20 caracteres"),
        post: yup.string().required()
            .min(5,"minimum 5 caracteres")
            .max(20,"maximum 20 caracteres"),
        postulez: yup.string().required()
            .min(5,"minimum 5 caracteres")
            .max(20,"maximum 20 caracteres"),
        contact: yup.string().required()
            .matches(/^\+\d{1,3}\s\d{9}$/, 'Entrez un numéro de téléphone valide (ex: +237 690213254)'),
        email:  yup.string().required("Ce champ est obligatoire").email('Entrer un email valide')
            .matches(/(@gmail\.com|@yahoo\.fr)$/, 'Veuillez entrer une adresse Gmail ou Yahoo valide'),
    })
    .required()



export default function FormulaireArtiste() {

    const [load, setload] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        try {
            console.log(data);
            // Mettre à jour l'état de chargement si nécessaire
            setload(true);
            // Simulation d'une requête asynchrone, remplacez-la par votre logique de soumission réelle
            toast.success("Nous avons reçu votre candidature. Merci !");
        } catch (error) {
            console.error(error);
            // Gérer les erreurs en affichant un toast d'erreur si nécessaire
            toast.error("Une erreur s'est produite lors de la soumission du formulaire.");
        } finally {
            // Mettre à jour l'état de chargement si nécessaire
            setload(false);
        }
       reset()

    };



    const fileInputRef = useRef(null);

    const handleFileUpload = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        // Faire quelque chose avec le fichier sélectionné, comme l'envoyer à un serveur ou le traiter localement
        console.log('Fichier sélectionné :', selectedFile);
    };
    return (
        <>
            <main className='container-fluid mt-5'>
                <div className='contenair'>
                    <div>
                        <p className='text-center'>
                            <Logo/>
                        </p>
                        <h1 className='text-center'>
                            Espace Artistes
                            <p className=" bg-danger m-auto" style={{height:'5px', width:'150px'}}></p>
                        </h1>

                        <h4 className='text-center mt-5'>
                           <strong> Bienvenue</strong>  dans L'espace  <strong>Artiste</strong> de <strong>Africa Space</strong> , gallerie de vente D'art Africaine
                        </h4>
                    </div>

                   <div className='mt-5'>
                       <p className='mx-auto fs-3 fw-lighter'>Envoyer Votre Candidature</p>
                   </div>

                    <div className='col-lg-6 mx-auto mt-5'>
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <h2 className="card-title text-center mt-3">Formulaire</h2>
                                <div className="overflow-container" style={{ overflowY: 'auto', maxHeight: '600px'}}>
                                <p className="card-text text-center text-secondary">
                                  <strong className='text-danger' > NB </strong>: Veuillez remplir ce formulaire en renseignant soigneusement chaque champ.
                                </p>
                                <form className='mx-3' onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label fs-5 fw-bold"> Nom</label>
                                        <input {...register("name")} type="name" className="form-control" id="name"/>
                                        <p className='text-danger'>{errors.name?.message}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lastname" className="form-label fs-5 fw-bold">Prenom</label>
                                        <input {...register("lastname")} type="name"
                                                className="form-control" id="lastname"/>
                                        <p className='text-danger'>{errors.lastname?.message}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label fs-5 fw-bold">Date de naissance</label>
                                        <input {...register("date")} type="date"
                                                className="form-control" id="date"/>
                                        <p className='text-danger'>{errors.date?.message}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="local" className="form-label fs-5 fw-bold">Lieu de naissance</label>
                                        <input {...register("local")} type="text"
                                                className="form-control" id="local"/>
                                        <p className='text-danger'>{errors.local?.message}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="civilite" className="form-label fs-5 fw-bold">Etat Civil</label>
                                        <input {...register("civilite")} type="text"
                                                 className="form-control" id="civilite"/>
                                        <p className='text-danger'>{errors.civilite?.message}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="localnais" className="form-label fs-5 fw-bold">Lieu de naissance</label>
                                        <input {...register("localnais")} type="text"
                                                className="form-control" id="localnais"/>
                                        <p className='text-danger'>{errors.localnais?.message}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Citoyenneté" className="form-label fs-5 fw-bold">Citoyenneté</label>
                                        <input {...register("Citoyennete")} type="text"
                                                className="form-control" id="Citoyenneté"/>
                                        <p className='text-danger'>{errors.Citoyennete?.message}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="post" className="form-label fs-5 fw-bold">Votre poste actuel ?</label>
                                        <input {...register("post")} type="text"
                                                className="form-control" id="post"/>
                                        <p className='text-danger'>{errors.post?.message}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="postutez" className="form-label fs-5 fw-bold">Vous postulez pour ?</label>
                                        <input {...register("postulez")} type="text"
                                               className="form-control" id="postulez"/>
                                        <p className='text-danger'>{errors.postulez?.message}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="contact" className="form-label fs-5 fw-bold">Contact (Code pays puis numéro) Ex : +237 690213254</label>
                                        <input {...register("contact")} type="tel"
                                               className="form-control" id="contact"/>
                                        <p className='text-danger'>{errors.contact?.message}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fs-5 fw-bold">Courriel</label>
                                        <input {...register("email")} type="email"
                                                className="form-control" id="email"/>
                                        <p className='text-danger'>{errors.email?.message}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label fs-5 fw-bold">Téléverser : Bibiographie et Portfolio</label> <br/>
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            style={{display: 'none'}}
                                            onChange={handleFileChange}
                                            id='file'

                                        />
                                        <div className="card mb-5" >
                                            <div className="card-body d-flex justify-content-center">
                                                <button  className="btn btn-primary border-0 shadow d-flex justify-content-center"
                                                         onClick={handleFileUpload}> <VscCloudDownload size={30} color="white" /> Upload file</button>
                                            </div>
                                        </div>

                                    </div>  <hr/>
                                    <div className="mb-3">
                                        <button className='btn btn-danger' type='submit' >Envoyer</button>
                                        {
                                            load && <div className="spinner-border text-white text-end" style={{position:"absolute", right:'5%'}}  role="status">

                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        }
                                    </div>

                                    <div className="mb-3">
                                        <p className='text-center'>Produit par <strong>Africa Space</strong> </p>
                                        <p className='text-center' style={{color:'#0081E8'}}>Avis de confidentialité | Signaler un abus </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                    <div>
                        <Link to='/Artistes'
                                  className='btn btn-success mt-3'>
                            <IoIosArrowBack /> Retour a la page Artistes
                        </Link>
                    </div>
                </div>

            </main>
        </>
    )
}