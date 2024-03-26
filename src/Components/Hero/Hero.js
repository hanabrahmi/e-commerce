import React from 'react';
import '../Hero/style.css';
import heroImg1 from './assets/hero-img-1.jpg';
import heroImg2 from './assets/hero-img-2.jpg';
import heroImg3 from './assets/hero-img-3.jpg';

function Hero() {
    return (
        <div className="container-fluid py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7">
                        <h4 className="mb-3 text-secondary">100% Small Business</h4>
                        <h5 className="mb-3 text-dark">Explorez un marché dynamique où acheter, vendre et louer vos articles devient un moteur pour le succès de votre entreprise.</h5>
                        <div className="position-relative mx-auto">
                            <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="rechercher" />
                            <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{ top: '0', right: '25%' }}>chercher</button>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active rounded">
                                    <img src={heroImg1} className="img-fluid w-100 h-100 bg-secondary rounded animate-img" alt="First slide" />
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Véhicules</a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={heroImg2} className="img-fluid w-100 h-100 rounded animate-img" alt="Second slide" />
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Machine</a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={heroImg3} className="img-fluid w-100 h-100 rounded animate-img" alt="third slide" />
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
    );
}

export default Hero;

