import React from 'react'
import {useStore} from "../../Store.jsx";
import {FaMinus, FaPlus, FaRegTrashAlt} from "react-icons/fa";
import {NavLink} from "react-router-dom";

export default function ShoppingCart() {

    const divStyle = {
        backgroundImage: 'url("/images/PEINTURE/oil-painting-on-canvas-fire-260nw-2012620460 (1).jpg")',
        height: '35vh',
    };


    const CARD = useStore((state) => state.CARD)
    const updateProduit = useStore((state) => state.updateProduit)
    const resetCARD=useStore((state)=> state.resetCARD)

    function dePro(id){
        let update=CARD.filter(item=>item.id!==id)
        updateProduit(update)
    }

    function addQte(id) {
        let addQuantity=CARD.map((item)=>{
            return (item.id===id)? {
                ...item,
                qte:item.qte+1
            }:item
        })
        updateProduit(addQuantity)

    }

    function removeQte(id) {
        let qteProduit=CARD.find(item=>item.id===id)
        if (qteProduit.qte>1){
            let removeQuantity=CARD.map((item)=>{
                return (item.id===id)?{
                    ...item,
                    qte:item.qte-1
                }:item
            })
            updateProduit(removeQuantity)
        }

    }


    return (
        <>
            <div className='img-fixed-top d-none d-lg-block' style={divStyle}></div>
            <main className='container-fluid mt-5'>
                <div>
                    <p className=" mb-5 fs-4 text-center">
                        <strong>Africa Space</strong>, galerie d'Art Africaine, le site de
                        vente <strong>securisée</strong> en ligne
                    </p>
                </div>
                <h1 className='text-center'>Votre Panier</h1> <p className=" bg-danger m-auto" style={{height:'5px', width:'150px'}}></p>

                {
                    CARD.length===0?(
                        <div className='container mt-5 justify-content-center' style={{backgroundColor:"orange", height:'50px'}}>
                            <p className=' fs-3 fw-bold text-white'>Votre Panier Est Vide</p>
                        </div>

                    ):(
                        <div className='container justify-content-center'>
                            <div className="table-responsive">
                                <table className="table mt-5">
                                    <thead>
                                    <tr className='fs-4'>
                                        <th scope="col">Produit</th>
                                        <th scope="col">Quantite</th>
                                        <th scope="col">Prix</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        CARD.map((item,index)=>{
                                            return(
                                                <tr>
                                                    <th scope="row"><img src={item.image} alt="Description de l'image" width={100} /> <br/> {item.title} <br/> {item.category}</th>
                                                    <td>
                                                        <div className="hstack gap-1">
                                                            <button className="btn btn" onClick={()=>addQte(item.id)}>
                                                                <FaPlus />
                                                            </button>
                                                            <div className="p-2">
                                                                {item.qte}
                                                            </div>
                                                            <button className="btn btn" onClick={()=>removeQte(item.id)}>
                                                                <FaMinus/>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>{item.price} FCFA</td>

                                                    <span className="text-danger" role='button' onClick={()=>dePro(item.id)}><FaRegTrashAlt /></span>
                                                </tr>





                                            )
                                        })

                                    }


                                    </tbody>
                                </table>
                            </div>
                            <div className='text-end d-flex justify-content-between'>
                                <div>
                                    <tr>
                                        <th>
                                            <span className="display-6">Total : </span>
                                            <span className="fs-3 fw-bold text-danger">
                               {
                                   CARD.reduce((somme,item)=>{
                                       return somme+(item.qte * item.price)
                                   },0)
                               }{''}fcfa
                           </span> <br/>
                                        </th>
                                    </tr>
                                </div>
                                <div>
                                    <th>
                                       <NavLink to='/User'><button type='button' className='btn btn-danger me-3'>Commander</button></NavLink>

                                        <NavLink to='/Catalogue'><button type='button' className='btn btn-info'>continue vos achats</button></NavLink>
                                    </th>
                                </div>


                            </div>

                        </div>


                    )
                }
            </main>
        </>

    )
}
