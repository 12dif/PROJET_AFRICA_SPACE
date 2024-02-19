import React from 'react'
import {NavLink} from "react-router-dom";
import {FaUser} from "react-icons/fa";
import {MdAddShoppingCart, MdHome} from "react-icons/md";
import {GoSearch} from "react-icons/go";
import './css/NavBar.css'
import {useStore} from "../../Store.jsx";


export default function NavBar() {
    const CARD = useStore((state) => state.CARD)
    return (
        <>
            <header className="sticky-top">
                <nav className="navbar navbar-expand-lg bg-white shadow border ">
                    <div className="container-fluid mx-1">
                        <NavLink className="navbar-brand" to="/">
                            <img src="/images/LogoSample_ByTailorBrands.jpg" style={{width:70,height:70}} alt="" className="img-fluid"/>
                        </NavLink>
                        <div className="d-flex d-inline-block d-lg-none">

                            <span className=" ms-5 ms-md-5 fs-4 ">
                               <NavLink
                                   className={({ isActive }) =>
                                       isActive ? "nav-link actives" : "nav-link"
                                   }
                                   to="/User"  title="connectez-vous"> <FaUser /> </NavLink>
                            </span>

                            <span className=" ms-5 ms-md-5 fs-4">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link actives" : "nav-link"
                                    }
                                    to="/ShoppingCart"  title="panier"> <MdAddShoppingCart /><strong className='text-danger fs-6'>({CARD.length})</strong> </NavLink>
                            </span>

                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">

                                <li className="nav-item mx-3 fw-bold">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? "nav-link actives" : "nav-link"
                                        }
                                        to="/Catalogue"> CATALOGUE </NavLink>
                                </li>

                                <li className="nav-item mx-3 fw-bold">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? "nav-link actives" : "nav-link"
                                        }
                                        to="/Artistes">ARTISTES</NavLink>
                                </li>

                                <li className="nav-item mx-3 fw-bold">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? "nav-link actives" : "nav-link"
                                        }
                                        to="/EnExposition"> EN EXPOSITION </NavLink>
                                </li>

                                <li className="nav-item mx-3 fw-bold">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? "nav-link actives" : "nav-link"
                                        }
                                        to="/Contact">CONTACT</NavLink>
                                </li>

                            </ul>
                            <form className="d-flex ms-auto mt-2  mx-3" role="search">
                                <input className="form-control me-2 position-relative rounded-pill border bg-white" style={{textIndent:25,}} type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-0  position-absolute fs-5" type="submit"> <GoSearch/> </button>
                            </form>

                                  <span className='d-none d-lg-block d-inline-flex mx-3 fs-4'>
                                       <NavLink
                                           className={({ isActive }) =>
                                               isActive ? "nav-link actives" : "nav-link"
                                           }
                                           to="/"> <MdHome/> </NavLink>
                                  </span>

                                  <span className='d-none d-lg-block d-inline-flex mx-3 fs-5'>
                                      <NavLink
                                          className={({ isActive }) =>
                                              isActive ? "nav-link actives" : "nav-link"
                                          }
                                          to="/User" > <FaUser /> </NavLink>

                                  </span>
                                  <span className='d-none d-lg-block d-inline-flex mx-3 fs-4'>
                                      <NavLink
                                          className={({ isActive }) =>
                                              isActive ? "nav-link actives" : "nav-link"
                                          }
                                          to="/ShoppingCart" ><MdAddShoppingCart /><strong className='text-danger fs-6'>({CARD.length})</strong></NavLink>
                                  </span>

                        </div>
                    </div>
                </nav>
            </header>
        </>

    )
}
