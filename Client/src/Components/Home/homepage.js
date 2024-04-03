import React, { useEffect } from 'react'
import './style.css';

import paiement from'./assets/payment.png'
import heroImg1 from './assets/hero-img-1.jpg';
import heroImg2 from './assets/hero-img-2.jpg';
import heroImg3 from './assets/hero-img-3.jpg';
import heroImg from './assets/hero-img.jpg';
import cartImg from './assets/cart-page-header-img.jpg';
import { Link } from 'react-router-dom';
function Home() {
  
  return (
    <div>
        <>
        <div className="container-fluid py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-12 col-lg-7">
                            <h4 className="mb-3 text-secondary">100% Small Business</h4>
                            <h5 className="mb-3 text-dark">Explorez un marché dynamique où acheter, vendre et louer vos articles devient un moteur pour le succès de votre entreprise.</h5>
                            <div className="position-relative mx-auto">
                                <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="text" placeholder="rechercher" />
                                <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{ top: '0', right: '25%' }}>chercher</button>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active rounded">
                                        <img src={heroImg1} className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
                                        <a href="#" className="btn px-4 py-2 text-white rounded">Véhicules</a>
                                    </div>
                                    <div className="carousel-item rounded">
                                        <img src= {heroImg2} className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                                        <a href="#" className="btn px-4 py-2 text-white rounded">Machine</a>
                                    </div>
                                    <div className="carousel-item rounded">
                                        <img src= {heroImg3} className="img-fluid w-100 h-100 rounded" alt="third slide"/>
                                        <a href="#" className="btn px-4 py-2 text-white rounded">Hébergement</a>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid featurs py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fas fa-car-side fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Livraison gratuite</h5>
                                    <p className="mb-0">Gratuit sur les commandes à partir de 100 dt</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fas fa-user-shield fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Paiement sécurisé</h5>
                                    <p className="mb-0">100% Sécurisé</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fas fa-exchange-alt fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Retour sous 48 heure </h5>
                                    <p className="mb-0">Garantie d'argent de 48 heures</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fa fa-phone-alt fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>24/7 Support</h5>
                                    <p className="mb-0">Support à chaque fois rapide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
            <div className="container py-5">
        <div className="pb-4 mb-4" style={{ borderBottom: '1px solid rgba(226, 175, 24, 0.5)', width: "90%" }}>
            <div className="row g-4">
                <div className="col-lg-3">
                    <a href="#">
                        <h1 className="text-primary mb-0">BrandBridge</h1>
                        <p className="text-secondary mb-0">100% small Buisness</p>
                    </a>
                </div>
                <div className="col-lg-6">
                    <div className="position-relative mx-auto">
                        <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Votre Email" />
                        <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{ top: '0', right: '0' }}>Abonnez-vous maintenant</button>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="d-flex justify-content-end pt-3">
                        <Link className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" to=""><i className="fab fa-twitter"></i></Link>
                        <Link className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" to=""><i className="fab fa-facebook-f"></i></Link>
                        <Link className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" to=""><i className="fab fa-youtube"></i></Link>
                        <Link className="btn btn-outline-secondary btn-md-square rounded-circle" to=""><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container ">
        <div className="row g-5">
            <div className='pos-footer'>
            <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                    <h4 className="text-light mb-3">Pourquoi les gens nous aiment !</h4>
                    <p className="mb-4">Notre plateforme renforce la confiance entre les clients et les petites entreprises en facilitant leur connexion. Pour les entreprises, une collaboration avec notre site accroît la visibilité de leurs produits et renforce leur marque. Quant aux clients, nous garantissons la qualité et des prix compétitifs pour tous les articles proposés par les entreprises affiliées.</p>
                    <Link to ="" className="btn border-secondary py-2 px-4 rounded-pill text-primary">En savoir plus</Link>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                    <h4 className="text-light mb-3">Contactez-nous </h4>
                    <Link className="btn-link" to="">À propos de nous</Link>
                    <p>E-mail : BrandBridge@gmail.com</p>
                    <Link className="btn-link" to="">Politique de confidentialité & de retour </Link>
                    <p>Paiement accepté</p>
                    <img src={paiement} className="img-fluid" alt="" />
                </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    </div>
  )
}
export default Home
