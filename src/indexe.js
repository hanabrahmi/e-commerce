import React from 'react';
import heroImg1 from './img/hero-img-1.jpg';
import heroImg2 from './img/hero-img-2.jpg';
import heroImg3 from './img/hero-img-3.jpg';
import paiement from './img/payment.png';

function BrandBridge() {
    return (
        <div>
            {/* Spinner Start */}
            <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" role="status"></div>
            </div>
            {/* Spinner End */}

            {/* Navbar start */}
            <div className="container-fluid fixed-top">
                {/* Topbar */}
                <div className="container topbar bg-primary d-none d-lg-block">
                    <div className="d-flex justify-content-between">
                        <div className="top-info ps-2">
                            <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><a href="#" className="text-white">BrandBridge@gmail.com</a></small>
                        </div>
                        <div className="top-link pe-2">
                            <a href="#" className="text-white"><small className="text-white mx-2"> Conditions d’utilisation</small>/</a>
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
                                        <a href="cart.html" className="dropdown-item">Véhicules</a>
                                        <a href="chackout.html" className="dropdown-item">Hébergement</a>
                                        <a href="testimonial.html" className="dropdown-item">Machine</a>
                                        <a href="404.html" className="dropdown-item">Vaisselles</a>
                                        <a href="#" className="dropdown-item">Vêtement</a>
                                    </div>
                                </div>
                                <a href="shop.html" className="nav-item nav-link">Promotion</a>
                                <a href="contact.html" className="nav-item nav-link">Avantage</a>
                                <a href="shop-detail.html" className="nav-item nav-link">nouveau petite entreprise </a>
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
                                <a href="#" className="my-auto mx-2">
                                    <i className="fa fa-user fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar End */}

            {/* Modal Search Start */}
            <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Search End */}

            {/* Hero Start */}
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
            {/* Hero End */}

            {/* Features Section Start */}
            <div className="container-fluid featurs py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fas fa-car-side fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Free Shipping</h5>
                                    <p className="mb-0">Free on order over $300</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fas fa-user-shield fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Security Payment</h5>
                                    <p className="mb-0">100% security payment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <i className="fas fa-exchange-alt fa-3x text-white"></i>
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>30 Day Return</h5>
                                    <p className="mb-0">30 day money guarantee</p>
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
                                    <p className="mb-0">Support every time fast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features Section End */}

            {/* Footer Start */}
            <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
                <div className="container py-5">
                    <div className="pb-4 mb-4" style={{ borderBottom: '1px solid rgba(226, 175, 24, 0.5)' }}>
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
                                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-outline-secondary btn-md-square rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="pos-footer">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-item">
                                    <h4 className="text-light mb-3">Pourquoi les gens nous aiment !</h4>
                                    <p className="mb-4">Notre plateforme renforce la confiance entre les clients et les petites entreprises en facilitant leur connexion. Pour les entreprises, une collaboration avec notre site accroît la visibilité de leurs produits et renforce leur marque. Quant aux clients, nous garantissons la qualité et des prix compétitifs pour tous les articles proposés par les entreprises affiliées.</p>
                                    <a href="" className="btn border-secondary py-2 px-4 rounded-pill text-primary">En savoir plus</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-item">
                                    <h4 className="text-light mb-3">Contact Us </h4>
                                    <a className="btn-link" href="">About Us</a>
                                    <p>Email: BrandBridge@gmail.com</p>
                                    <a className="btn-link" href="">Privacy Policy</a>
                                    <a className="btn-link" href="">Terms & Condition</a> <br />
                                    <a className="btn-link" href="">Return Policy</a>
                                    <p>Payment Accepted</p>
                                    <img src={paiement} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}

            {/* Copyright Start */}
            <div className="container-fluid copyright bg-dark py-4">
    <div className="container">
        <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2"></i>BrandBridge</a>, All right reserved.</span>
            </div>
        </div>
    </div>
</div>
{/* Copyright End */}

{/* Back to Top */}
<a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>   

{/* JavaScript Libraries */}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="lib/easing/easing.min.js"></script>
<script src="lib/waypoints/waypoints.min.js"></script>
<script src="lib/lightbox/js/lightbox.min.js"></script>
<script src="lib/owlcarousel/owl.carousel.min.js"></script>

{/* Template Javascript */}
<script src="js/main.js"></script>
</div>
);
}

export default BrandBridge;


