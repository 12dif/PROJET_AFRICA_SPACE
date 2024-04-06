import React from 'react'
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import {ToastContainer} from "react-toastify";
import CardGroup from "./components/CardGroup.jsx";

export default function Root() {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <CardGroup/>
            <Footer/>
            <ToastContainer />
        </>

    )
}
