import React from 'react'

export default function Connexion() {
    return (
       <>
           <div className="col-md-10 col-lg-5">
               <div className="card mb-2 px-3 bg-body-secondary border-0" style={{height:'293px'}}>
                   <div className="card-body ">
                   <h5 className="card-title">Deja inscrit? Connectez-vous</h5>
                       <form>
                       <div className="mb-1">
                           <label htmlFor="email" className="form-label"></label>
                           <input type="email" className="form-control border-0" id="email1" placeholder="Adresse e-mail"/>
                       </div>
                       <div className="mb-3">
                           <label htmlFor="password" className="form-label"></label>
                           <input type="password" className="form-control border-0" id="password" placeholder="Mot de passe"/>
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
