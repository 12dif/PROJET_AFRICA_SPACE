import React from 'react'
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        email: yup.string().required("Ce champ est obligatoire").email('Entrer un email valie')
            .matches(/(@gmail\.com|@yahoo\.fr)$/, 'Veuillez entrer une adresse Gmail ou Yahoo valide'),
    })
    .required()


export default function Inscription() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)

    return (
       <>

           <div className="col-md-10 col-lg-5 mb-5">
               <div className="card mb-3 px-3 border-0 bg-body-secondary" style={{height:'293px'}}>
                       <div className="card-body">
                           <h5 className="card-title">Nouveau client? Beinvenue!</h5>
                           <form onSubmit={handleSubmit(onSubmit)}>
                           <div className="mb-5">
                               <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                               <input {...register(" email")} type="email" className="form-control border-0" id="email" placeholder="Adresse e-mail"/>
                               <p className='text-danger'>{errors. email?.message}</p>
                           </div>
                           <div className="d-grid gap-2">
                               <Link to="/FormulaireInscription" className="btn btn-danger border-0">
                                   S'incrire
                               </Link>

                           </div>
                           </form>
                       </div>

               </div>

           </div>

       </>
    )
}
