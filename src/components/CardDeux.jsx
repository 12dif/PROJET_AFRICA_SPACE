import React from 'react'
import {MdAddShoppingCart} from "react-icons/md";
import {Link} from "react-router-dom";
import {useStore} from "../../Store.jsx";

export default function CardDeux({image,title,origin,category,price,id,produit}) {

    const updateCARD = useStore((state) => state.updateCARD)
    const CARD = useStore((state) => state.CARD)

    function AddProduit() {
        let existProduit=CARD.findIndex(item=>item.id===produit.id)
        if(existProduit===-1){
            updateCARD(produit);
        }
        console.log("Objet ajouté au panier :", id);

    }



    return (

            <div className=' mb-3 border-0'>
                <img src={image} className="card-img-top" style={{height:'300px'}} alt=""/>
                    <div className="card-body my-3">
                        <h5 className="card-title ms-3 ">{title}</h5>
                        <p className="card-text ms-3 ">
                            Made in<span className='fw-bold'> {origin} </span> <br/>
                            <small className="text-body-secondary fw-bold">{price} FCFA</small>
                        </p>
                        <div className="hstack gap-3 mx-3">
                            <Link className="p-2 btn btn-danger" to={`/produit2/${id}`}>Voir+ </Link>
                            <button type="button" className="p-2 ms-auto border-0 bg-white fs-3" style={{color:"blue"}} onClick={AddProduit}><MdAddShoppingCart /></button>
                        </div>
                    </div>

        </div>
    )
}
