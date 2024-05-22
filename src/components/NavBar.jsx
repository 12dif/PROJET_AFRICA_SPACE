import React, {useState} from 'react'
import {NavLink, useNavigate} from "react-router-dom";
import {FaUser} from "react-icons/fa";
import {MdAddShoppingCart, MdHome} from "react-icons/md";
import {GoSearch} from "react-icons/go";
import './css/NavBar.css'
import {useStore} from "../../Store.jsx";
import Logo from "./Logo.jsx";



export default function NavBar() {
    const CARD = useStore((state) => state.CARD)
     const hide = ()=>{
        document.querySelector(`#navbarSupportedContent`).classList.remove(`show`)
     }

    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputValue(e.target.value.toLowerCase());
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let content;
        switch (inputValue) {
            case 'home':
                content = '';
                break;
            case 'catalogue':
                content = 'Catalogue';
                break;
            case 'artiste':
                content = 'Artistes';
                break;
            case 'enexposition':
                content = 'EnExposition';
                break;
            case 'contact':
                content = 'Contact';
                break;
            case 'inscription':
                content = 'User';
                break;
            case 'connexion':
                content = 'User';
                break;
            case 'panier':
                content = 'shoppingcart';
                break;
            default:
                content = '';
                break;
        }
        navigate(`/${content}`);
    };


    return (
        <>
            <header className="sticky-top">
                <nav className="navbar navbar-expand-lg bg-white shadow border ">
                    <div className="container-fluid mx-1">
                        <Logo/>
                        <div className="d-flex d-lg-none d-md-none">

                            <span className=" ms-5 fs-4 ">
                               <NavLink
                                   className={({ isActive }) =>
                                       isActive ? "nav-link actives" : "nav-link"
                                   }
                                   style={{ position: "fixed", top: "30px", right: "145px" }}
                                   to="/User"  title="connectez-vous"> <FaUser /> </NavLink>
                            </span>
                            <span className=" ms-5 ms-md-5 fs-4">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link actives" : "nav-link"
                                    }
                                    style={{ position: "fixed", top: "30px", right: "85px" }}
                                    to="/ShoppingCart"  title="panier"> <MdAddShoppingCart /><strong className='text-danger fs-6'>({CARD.length})</strong> </NavLink>
                            </span>

                        </div>
                        <div className="d-none d-lg-none d-sm-flex">

                            <span className=" ms-5 ms-md-5 fs-4">
                               <NavLink
                                   className={({ isActive }) =>
                                       isActive ? "nav-link actives" : "nav-link"
                                   }
                                   style={{ position: "fixed", top: "30px", right: "145px" }}
                                   to="/User"  title="connectez-vous"> <FaUser /> </NavLink>
                            </span>
                            <span className=" ms-5 ms-md-5 fs-4">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link actives" : "nav-link"
                                    }
                                    style={{ position: "fixed", top: "30px", right: "85px" }}
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
                                        onClick={hide}
                                        to="/Catalogue"> CATALOGUE </NavLink>
                                </li>

                                <li className="nav-item mx-3 fw-bold">
                                    <NavLink
                                        onClick={hide}
                                        className={({ isActive }) =>
                                            isActive ? "nav-link actives" : "nav-link"
                                        }
                                        to="/Artistes">ARTISTES</NavLink>
                                </li>

                                <li className="nav-item mx-3 fw-bold">
                                    <NavLink
                                        onClick={hide}
                                        className={({ isActive }) =>
                                            isActive ? "nav-link actives" : "nav-link"
                                        }
                                        to="/EnExposition"> EN EXPOSITION </NavLink>
                                </li>

                                <li className="nav-item mx-3 fw-bold">
                                    <NavLink
                                        onClick={hide}
                                        className={({ isActive }) =>
                                            isActive ? "nav-link actives" : "nav-link"
                                        }
                                        to="/Contact">CONTACT</NavLink>
                                </li>

                            </ul>
                            <form className="d-flex ms-auto mt-2  mx-3 d-none d-lg-block d-inline-flex" role="search"
                                  onSubmit={handleSubmit}
                            >
                                <input className="form-control no-outline me-2 position-relative rounded-pill border bg-white shadow-none"
                                       style={{ position: 'relative' }}
                                       type="search"
                                       placeholder="Rechercher"
                                       aria-label="Rechercher"
                                       value={inputValue}
                                       onChange={handleChange}
                                       list="datalistOptions"
                                />
                                <button className="btn btn-0  position-absolute fs-5" type="submit" style={{ position: "fixed", right: "14%", bottom:'34px' }}>
                                    <GoSearch/>
                                </button>
                                <datalist id="datalistOptions">
                                    <option value="home" />
                                    <option value="catalogue" />
                                    <option value="artiste" />
                                    <option value="enexposition" />
                                    <option value="contact" />
                                    <option value="inscription" />
                                    <option value="connexion" />
                                    <option value="panier" />
                                </datalist>

                            </form>
                            <form className="d-flex ms-auto mt-2  mx-3 d-none d-lg-none d-sm-flex" role="search"
                                  onSubmit={handleSubmit}
                            >
                                <input className="form-control  no-outline me-2 position-relative rounded-pill border bg-white shadow-none "
                                       style={{ position: 'relative'}}
                                       type="search"
                                       placeholder="Rechercher"
                                       aria-label="Rechercher"
                                       value={inputValue}
                                       onChange={handleChange}
                                       list="datalistOptions"
                                />
                                <button className="btn btn-0  position-absolute fs-5" type="submit" style={{ position: "fixed", right: "5%", bottom:'10px' }}>

                                    <GoSearch/>
                                </button>
                                <datalist id="datalistOptions">
                                    <option value="home" />
                                    <option value="catalogue" />
                                    <option value="artiste" />
                                    <option value="enexposition" />
                                    <option value="contact" />
                                    <option value="contact" />
                                    <option value="inscription" />
                                    <option value="connexion" />
                                    <option value="shoppingcart" />
                                </datalist>
                            </form>
                            <form className="d-flex ms-auto mt-2  mx-3 d-flex d-lg-none d-md-none" role="search"
                                  onSubmit={handleSubmit}
                            >
                                <input className="form-control no-outline me-2 position-relative rounded-pill border bg-white shadow-none"
                                       style={{ position: 'relative' }}
                                       type="search"
                                       placeholder="Rechercher"
                                       aria-label="Rechercher"
                                       value={inputValue}
                                       onChange={handleChange}
                                       list="datalistOptions"
                                />
                                <button className="btn btn-0  position-absolute fs-5" type="submit" style={{ position: "fixed", right: "10%", bottom:'10px' }}>
                                    <GoSearch/>
                                </button>
                                <datalist id="datalistOptions">
                                    <option value="home" />
                                    <option value="catalogue" />
                                    <option value="artiste" />
                                    <option value="enexposition" />
                                    <option value="contact" />
                                    <option value="inscription" />
                                    <option value="connexion" />
                                    <option value="shoppingcart" />
                                </datalist>
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
