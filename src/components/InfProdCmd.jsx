import React from 'react'
import {useStore} from "../../Store.jsx";
import {dataProduitUn} from "../dataProduit.jsx";



export default function InfProdCmd() {

    const CARD = useStore((state) => state.CARD)
    const updateProduit = useStore((state) => state.updateProduit)
    const resetCARD=useStore((state)=> state.resetCARD)


    function dePro(id){
        let update=CARD.filter(item=>item.id!==id)
        updateProduit(update)
    }


    const totalProducts = CARD.reduce((total, item) => total + item.qte, 0);

    return (
        <>
            <div>
                <div className="card bg-body-secondary border-0">
                    <div className="card-body">
                        <h2 className="card-title">Africa Space</h2>
                        <h6 className="card-subtitle mb-2">Votre gallerie d'art Africaine</h6>
                        <div className=" mt-5 mb-3 fs-4">
                            <p>
                                   <span className='fw-bold'>
                                      Totals Produits:
                                   </span>
                                <span className='text-danger fw-bold'> {totalProducts}</span> produits
                            </p>
                        </div>
                         <div>
                             {
                                 CARD.map((item ,index)=> {
                                     return(

                                             <div key={index}>
                                                 <div className='d-flex justify-content-between mb-3'>
                                                     <img src={item.image} alt="Description de l'image" width={100} />
                                                     <br/> {item.title} <br/> {item.category} <br/> <span className='text-center text-danger'>{item.price} FCFA</span>
                                                 </div>

                                             </div>


                                     )
                                 })
                             }


                         </div>
                        <div className='d-flex justify-content-end'>
                            <span className="display-6">Total : </span>
                            <span className="fs-3 fw-bold text-danger">
                               {
                                   CARD.reduce((somme,item)=>{
                                       return somme+(item.qte * item.price)
                                   },0)
                               }{''}fcfa
                           </span> <br/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
