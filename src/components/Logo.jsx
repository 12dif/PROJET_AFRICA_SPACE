import React, {useEffect, useState} from 'react'
import {NavLink, useLocation} from "react-router-dom";
import './css/Logo.css'

export default function Logo() {
    const location = useLocation();

    const [isHomePage, setIsHomePage] = useState(true);


    useEffect(() => {
        setIsHomePage(location.pathname === '/');
    }, [location]);

    return (
        <NavLink to="/" className={`Logo ${isHomePage ? 'home-page' : 'other-page'}`} >
            <img src="/images/LogoSample_ByTailorBrands.jpg" style={{width:95,height:95}} alt="Logo" />
        </NavLink>
    )
}
