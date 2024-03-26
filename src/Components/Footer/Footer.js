import React from 'react'
import './style.css'
import paiement from'./assets/payment.png';
function Footer() {
  return (
    <div>
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
    </div>
  )
}

export default Footer