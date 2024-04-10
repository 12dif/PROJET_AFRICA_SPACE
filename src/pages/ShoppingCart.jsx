import React, {useEffect} from 'react'
import {useStore} from "../../Store.jsx";
import {FaMinus, FaPlus, FaRegTrashAlt} from "react-icons/fa";
import {Link} from "react-router-dom";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {toast} from "react-toastify";


export default function ShoppingCart() {

    const divStyle = {
        backgroundImage: 'url("/images/PEINTURE/oil-painting-on-canvas-fire-260nw-2012620460 (1).jpg")',
        height: '35vh',
    };

    const storedUser = useStore((state) => state.user);
    const connection = useStore((state) => state.CONECT);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    }, []);

    const handleCommand = () => {
        if (connection) {
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            if (isLoggedIn === 'true') {
                return;
            }
        }


        toast.error('Vous devez être connecté pour passer une commande.');
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

    const totalProducts = CARD.reduce((total, item) => total + item.qte, 0);



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
                            <div className=" mt-5 mb-3 fs-4">
                                <p>
                                   <span className='fw-bold'>
                                      Totals Produits:
                                   </span>  Vous avez
                                    <span className='text-danger fw-bold'> {totalProducts}</span> produits  dans votre panier
                                </p>
                            </div>
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
                                                    <th scope="row">
                                                        <img src={item.image} alt="Description de l'image" width={100} />
                                                        <br/> {item.title} <br/> {item.category}
                                                    </th>
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

                                                    <span className="text-danger" role='button' onClick={()=>dePro(item.id)}> <FaRegTrashAlt /></span>
                                                </tr>


                                            )
                                        })

                                    }

                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex justify-content-end align-items-center mt-3">
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

                            </div>

                            <div className="hstack gap-3 mt-3">
                                <div className="p-2">
                                    <Link to='/'>
                                        <button type='button' className='btn btn-info text-white'> <IoIosArrowBack />Continue mes achats</button>
                                    </Link>

                                </div>
                                <div className="p-2 ms-auto">

                                    <Link to={connection ? '/FormulaireCommande' : '/User'}>
                                        <button type='button' className={`btn btn-${connection ? 'danger' : 'info'}`} onClick={handleCommand}>
                                            {connection ? 'Commander' : 'Connectez-vous pour commander'}
                                            {connection && <IoIosArrowForward />}
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>


                    )
                }
            </main>
        </>

    )
}
