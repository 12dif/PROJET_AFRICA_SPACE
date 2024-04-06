import React from 'react'
import {MdCheckCircleOutline, MdSecurity} from "react-icons/md";
import {FaTruckFast} from "react-icons/fa6";

export default function CardGroup() {

    return (
       <>
           <div className='container-fluid mt-5'>
               <div className=" mx-3 row row-cols-1 row-cols-md-3 g-4" style={{marginTop:'70px'}}>
                   <div className='col'>
                       <div className="card h-100 border-0 shadow">
                           <div className="card-body">
                               <h5 className="card-title text-center " style={{fontSize:'70px', color:'red', marginTop:'-25px'}}><MdCheckCircleOutline /></h5>
                               <p className="card-text text-center fs-5">
                                   <strong>Authenticité garantie</strong> <br/>
                                   vérifiée par nos soins
                               </p>
                           </div>
                       </div>
                   </div>
                   <div className='col'>
                       <div className="card h-100 border-0 shadow">
                           <div className="card-body">
                               <h5 className="card-title text-center" style={{fontSize:'70px', color:'red', marginTop:'-25px'}}><FaTruckFast /></h5>
                               <p className="card-text text-center fs-5">
                                   <strong>Livraison internationale</strong> <br/>
                                   par des spécialistes
                               </p>
                           </div>
                       </div>
                   </div>
                   <div className='col'>
                       <div className="card h-100 border-0 shadow">
                           <div className="card-body">
                               <h5 className="card-title text-center" style={{fontSize:'70px', color:'red', marginTop:'-25px'}}><MdSecurity /></h5>
                               <p className="card-text text-center fs-5">
                                   <strong> Paiements sécurisés</strong> <br/>
                                   par cartes bancaires et virements
                               </p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

       </>
    )
}
