import React, {useState} from 'react'
import {Link} from "react-router-dom";

export default function CardCinq({image,title,origin,category,price,id,produit}) {
    const [isHovered, setIsHovered] = useState(false);
    const handleTouchStart = () => {
        setIsHovered(true);
    };

    const handleTouchEnd = () => {
        setIsHovered(false);
    };
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
                    <p className="text-center text-secondary fw-bold ">{title} <br/>
                        <Link to={`/produit2/${id}`} className="text-danger fw-bold ">Voir plus </Link>
                    </p>
                </div>
            </div>

        </div>
        </div>
    )
}
