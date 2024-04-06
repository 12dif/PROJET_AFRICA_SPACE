import React, {useState} from 'react'
import {MdAddShoppingCart} from "react-icons/md";
import {Link} from "react-router-dom";
import {useStore} from "../../Store.jsx";
import './css/CardUn.css'

export default function CardUn({image,title,origin,category,price,id,produit}) {

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
            updateCARD(produit)
        }

    }



    return (
        <div
             className={`card ${isHovered ? 'hovered' : ''}`}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
             style={{border:'none'}}

        >
            <div className="row g-0 ">
                <div className="col-md-4 ">
                    <img src={image} className="img-fluid" style={{width:'100%', height:'100%', border:"none"}} alt=""/>
                </div>
                <div className="col-md-8 g-4">
                    <div className="card-body">
                        <h5 className="card-title"> {title}</h5>
                        <p className="card-text">

                            Made in<span className='fw-bold'> {origin} </span> <br/>

                            <small className="text-body-secondary fw-bold">{price} FCFA</small>
                        </p>
                        <div className="hstack gap-3">
                             <Link className="p-2 btn btn-danger" to={`/produit/${id}`}>Voir+</Link>
                            <button type="button" className="p-2 ms-auto border-0 bg-white fs-3" style={{color:"blue"}} onClick={AddProduit}><MdAddShoppingCart /></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
