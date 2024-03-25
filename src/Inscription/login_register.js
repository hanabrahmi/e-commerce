import React, { useRef } from 'react';
import './style.css'; 

function LoginRegister() { 
  const loginRef = useRef(null);
  const registerRef = useRef(null);
  const btnRef = useRef(null);

  const registered = () => {
    if (loginRef.current) loginRef.current.style.left = "-400px";
    if (registerRef.current) registerRef.current.style.left = "50px";
    if (btnRef.current) btnRef.current.style.left = "110px";
  };

  const logined = () => {
    if (loginRef.current) loginRef.current.style.left = "50px";
    if (registerRef.current) registerRef.current.style.left = "450px";
    if (btnRef.current) btnRef.current.style.left = "0";
  };

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
                                <a href="/loginregister" className="my-auto mx-2">
    <i className="fa fa-user fa-2x" onClick={() => window.location.href = '/loginregister'}></i>
</a>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar End */}
      <div className="hero">
        <div className="form-box">
          <div className="button-box">
            <div id="btn" />
            <button className="toggle-btn" onClick={logined}>Login</button>
            <button className="toggle-btn" onClick={registered}>Register</button>
          </div>
          <form id="login" className="input-groups" ref={loginRef}>
            <input type="text" className="input-field" placeholder="Nom de l'utilisateur " required />
            <input type="password" className="input-field" placeholder="mot de passe " required />
            <input type="checkbox" className="check-box" /><span>Remember password</span>
            <button type="submit" className="submit-btn">Log In</button>
          </form>
          <form id="register" className="input-group" ref={registerRef}>
            <input type="text" className="input-field" placeholder="Nom de l'utilisateur" required />
            <input type="text" className="input-field" placeholder="Presom de l'utilisateur" required />
            <input type="email" className="input-field" placeholder="e-mail" required />
            <input type="password" className="input-field " placeholder="mot de passe" required />
            <input type="number" className="input-field" placeholder="Numero de telephone" required />
            <input type="text" className="input-field" placeholder="Votre Adresse" required />
            
            <input type="text " className="input-field" placeholder="Code Postal" required />
            <input type="text" className="input-field" placeholder="Ville " required />
            
            <div class="check-box-container">
    <input type="checkbox" class="check-box" />
    <span>I agree to the terms and conditions</span>
</div>
            <button type="submit" className="submit-btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;

 

