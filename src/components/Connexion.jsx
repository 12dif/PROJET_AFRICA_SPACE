import React from 'react'
import {useForm} from "react-hook-form";
import {useStore} from "../../Store.jsx";

export default function Connexion() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const storedUser = JSON.parse(localStorage.getItem('user'));
    const connection = useStore((state) => state.connection)
    const onSubmit = (data) => {
        if (storedUser && storedUser.email === data.email && storedUser.password === data.password) {
            connection();
        } else {
            alert('Votre email ou votre mot de passe est erroné ');
        }
    };

    return (
       <>
           <div className="col-md-10 col-lg-5">
               <div className="card mb-2 px-3 bg-body-secondary border-0" style={{height:'293px'}}>
                   <div className="card-body ">
                   <h5 className="card-title">Deja inscrit? Connectez-vous</h5>
                       <form  onSubmit={handleSubmit(onSubmit)}>
                       <div className="mb-1">
                           <label htmlFor="email" className="form-label"></label>
                           <input {...register("email", { required: true })} type="email" className="form-control border-0" id="email1" placeholder="Adresse e-mail"/>
                           {errors.email && <span className="text-danger">Email is required</span>}
                       </div>
                       <div className="mb-3">
                           <label htmlFor="password" className="form-label"></label>
                           <input {...register("password",{ required: true })} type="password" className="form-control border-0"
                                  id="password" placeholder="Mot de passe"/>
                           {errors.password && <span className="text-danger">Password is required</span>}
                       </div>
                       <div className="d-grid gap-2">
                           <button className="btn btn-info mt-3 border-0" type="submit" style={{color:'white'}}>
                               Connexion
                           </button>
                       </div>
                       </form>

                   </div>
               </div>
           </div>
       </>
    )
}
