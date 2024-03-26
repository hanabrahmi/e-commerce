import React, { useState } from 'react'
import "./style.css"
import ProductAddPage from '../../AddProduct/ProductAddPage';
import { Link } from 'react-router-dom';
function Navbar() {
   
    const [show,setShow]= useState(false);
  const handleClose = () => setShow(false);
  
  return (
    <div>
           {/* Navbar start */}
           <div className="container-fluid fixed-top">
                {/* Topbar */}
                <div className="container topbar bg-primary d-none d-lg-block">
                    <div className="d-flex justify-content-between">
                        <div className="top-info ps-2">
                            <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><a href="#" className="text-white">BrandBridge@gmail.com</a></small>
                        </div>
                        <div className="top-link pe-2">
                            <Link to="#" className="text-white"><small className="text-white mx-2"> Conditions d’utilisation</small></Link>
                            <a href="#" className="text-white"><small className="text-white ms-2">Ventes et remboursements</small></a>
                        </div>
                    </div>
                </div>
                {/* Navbar */}
                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6"> BrandBridge</h1></a>
                        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <a href="index.html" className="nav-item nav-link active">Accueil </a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Catégorie</a>
                                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                        <Link to="/vehicules" className="dropdown-item">Véhicules</Link>
                                        <Link to="/hebergement" className="dropdown-item">Hébergement</Link>
                                        <Link to="/machine" className="dropdown-item">Machine</Link>
                                        <Link to="/vaisselles" className="dropdown-item">Vaisselles</Link>
                                        <Link to="/vetement" className="dropdown-item">Vêtement</Link>
                                    </div>
                                </div>
                                <a href="/Promotion" className="nav-item nav-link">Promotion</a>
                                <a href="Avantage" className="nav-item nav-link">Avantage</a>
                                <Link to="/add" className="nav-item nav-link" >Nouveau produit </Link>
                            </div>
                            <div className="d-flex m-3 me-0 justify-content-center">
                                <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white mx-2" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                                <a href="#" className="position-relative mx-2 my-auto">
                                    <i className="fa fa-shopping-bag fa-2x"></i>
                                    <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: '-5px', left: '15px', height: '20px', minWidth: '20px' }}>3</span>
                                </a>
                                <a href="#" className="my-auto mx-2 ">
                                    <i className="fa fa-heart fa-2x"></i>
                                </a>
                                <a href="/loginregister" className="my-auto mx-2">
                                <i className="fa fa-user fa-2x" onClick={() => window.location.href = '/loginregister'} 
                                show={show} 
                                handleClose={handleClose}
                                
                                ></i>
                                </a>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar End */}
    </div>
  )
}

export default Navbar