import React, {useState} from 'react'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        objet: yup.string().required("Ce champ est obligatoire"),
        civilite: yup.string().required("Ce champ est obligatoire"),
        firstName: yup.string().required("Ce champ est obligatoire"),
        secondName:yup.string().required("Ce champ est obligatoire"),
        email: yup.string().required("Ce champ est obligatoire").email('Entrer un email valie'),
        telephone: yup.string() .required("Ce champ est obligatoire")
            .matches(/^\+237\d{9}$/,'Entre un numero valide'),
        message: yup.string().required("Ce champ est obligatoire")
            .min(5,"minimum 5 caracteres")
            .max(50,"maximum 50 caracteres"),

    })
    .required()


export default function Contact() {
    const [show,setShow]=useState(false);
    const [load, setload] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)



    const divStyle = {
        backgroundImage: 'url("/images/Dessin/téléchargement.jpg")',
        height: '30vh',
    };

    return (
        <>
            <div className='img-fixed-top d-none d-lg-block' style={divStyle}></div>
            <main className="container mt-5">
                <div>
                    <p className="display-6 fw-bold text-center">Contactez-nous</p>
                    <p className=" bg-danger m-auto" style={{height:'5px', width:'150px'}}></p>
                </div>
                <div>

                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <p className="mx-4 mt-5">

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores debitis
                            hic iste minima modi nobis quaerat sunt. Accusantium blanditiis commodi consequuntur
                            delectus dolore dolores esse fugit harum iusto magni minima mollitia nam nesciunt quaerat
                        </p>
                        <p className="mx-4">

                            qui quia ratione recusandae repudiandae, sunt velit? Dolores expedita illo sit soluta? Fugit
                            laboriosam minus nemo sapiente. Aliquam animi aspernatur commodi cupiditate delectus dolore
                            ea

                        </p>
                        <div>
                            <h3 className="mt-4 mx-4 start-0 ">
                                Formulaire de Contact
                            </h3>
                            <div className="card mx-3 mt-4 border-0">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card-body">

                                        <div>
                                            <label htmlFor="Objet" className="form-label my-3 fw-bold">Objet</label>
                                            <select {...register("objet")}  className="form-select border-0 bg-body-secondary" aria-label="Default">
                                                <option value=''>Sélectionnez une option</option>
                                                <option value="Demande d'infos / devis">Demande d'infos / devis</option>
                                                <option value="Suivi de command">Suivi de commande</option>
                                                <option value="Réclamation / plainte">Réclamation / plainte</option>
                                                <option value="Autres">Autres</option>
                                            </select>
                                            <span className='text-danger'>{errors.objet?.message}</span>
                                        </div>
                                        <div>
                                            <label htmlFor="Civilite" className="form-label my-3 fw-bold">Civilite</label>
                                            <select {...register("civilite")}className="form-select border-0 bg-body-secondary">
                                                <option value='M'>M</option>
                                                <option value="Mme">Mme</option>
                                            </select>
                                            <span>{errors.civilite?.message}</span>
                                        </div>

                                        <div className="my-3">
                                            <label htmlFor="name" className="form-label fw-bold">Nom</label>
                                            <input {...register("firstName")} type="text" className="form-control border-0 bg-body-secondary" id="name"/>
                                            <span  className='text-danger'>{errors.firstName?.message}</span>
                                        </div>
                                        <div className="my-3">
                                            <label htmlFor="lastname" className="form-label fw-bold">Prenom</label>
                                            <input {...register("secondName")} type="text" className="form-control border-0 bg-body-secondary" id="lastname" />
                                            <span  className='text-danger'>{errors.secondName?.message}</span>
                                        </div>
                                        <div className="my-3">
                                            <label htmlFor="email" className="form-label fw-bold">Adresse e-mail</label>
                                            <input {...register("email")} type="email" className="form-control border-0 bg-body-secondary" id="email"/>
                                            <span  className='text-danger'>{errors.email?.message}</span>
                                        </div>
                                        <div className="my-3">
                                            <label htmlFor="tel" className="form-label fw-bold">Telephone</label>
                                            <input {...register("telephone")} type="tel" className="form-control border-0 bg-body-secondary" id="tel" placeholder="Ex:+237 677 98 06 07" />
                                            <span  className='text-danger'>{errors.telephone?.message}</span>

                                        </div>
                                        <div className="my-3">
                                            <label htmlFor="exampleFormControlTextarea1"
                                                   className="form-label fw-bold">Message</label>
                                            <textarea {...register("message")} className="form-control border-0 bg-body-secondary" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            <span  className='text-danger'>{errors.message?.message}</span>
                                        </div>
                                        <div className="d-grid  gap-2 mx-auto mt-4">
                                            <button className="btn btn-danger" type="submit">Envoyer</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card  col-lg-5 mt-5 mx-1 h-100 border-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.837229905955!2d9.736387274975469!3d4.053597695920151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d9dc899e743%3A0x15e15bd81525def5!2sHIGH%20TECH%20VOCATIONAL%20TRAINING%20CENTER!5e0!3m2!1sfr!2scm!4v1706872833142!5m2!1sfr!2scm"
                             style={{border:0, width:'100%', height:'400px'}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="card-body mx-2 border border-1">
                            <h5 className="card-title mt-3 fs-4 fw-bold">AFRICA SPACE</h5>
                            <p className="card-text text-secondary">
                                <small>Stade CICAM <br/> Douala <br/>
                                    Cameroun <br/>
                                    Tel: <span className="fw-bold">+237 690 50 55 05 / +237 658 52 57 04</span>
                                </small>
                            </p>

                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}
