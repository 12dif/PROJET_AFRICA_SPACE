import React from 'react'
import {Link} from "react-router-dom";

export default function CardArtistes({id,name,bibiographie,image}) {
    return (
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image}
                             className="img-thumbnail rounded-start border border-black my-4 mx-5" alt=""/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ms-2">
                            <h5 className="card-title fw-bolder">{name}</h5>
                            <p className="card-text ">{bibiographie}....</p>
                            <p className="card-text"><Link to={`/artiste/${id}`} className="text-danger">Plus d'infos</Link></p>
                        </div>
                    </div>
                </div>
            </div>

    )
}
