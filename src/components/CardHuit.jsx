import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {MdAddShoppingCart} from "react-icons/md";
import {useStore} from "../../Store.jsx";

export default function CardHuit({image,title,origin,category,price,id,produit}) {

    const updateCARD = useStore((state) => state.updateCARD)
    const CARD = useStore((state) => state.CARD)
    const [isHovered, setIsHovered] = useState(false);
    const handleTouchStart = () => {
        setIsHovered(true);
    };

    const handleTouchEnd = () => {
        setIsHovered(false);
    };

    function AddProduit() {
        let existProduit=CARD.findIndex(item=>item.id===produit.id)
        if(existProduit===-1){
            updateCARD(produit);
        }
        console.log("Objet ajouté au panier :", id);

    }

    return (
        <div
            className={`card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
            style={{border:'none'}}
        >
        <div className="mb-3">
            <div className="card border shadow">
                <img src={image} className="card-img-top" style={{height:'300px'}} alt=""/>
                <div className="card-body my-3">
                    <h5 className="card-title"> {title}</h5>
                    <p className="card-text">
                        Made in<span className='fw-bold'> {origin} </span> <br/>
                        <small className="text-body-secondary fw-bold">{price} FCFA</small>
                    </p>
                    <div className="hstack gap-3 mx-2">
                        <Link className="p-2 btn btn-danger" to={`/produit8/${id}`}>Voir+ </Link>
                        <button type="button" className="p-2 ms-auto border-0 bg-white fs-3" style={{color:"blue"}} onClick={AddProduit}><MdAddShoppingCart /></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
