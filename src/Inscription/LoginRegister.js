import React, { useRef } from 'react';
import './style.css'; 
function LoginRegister(show, handelClose) { 
  const loginRef = useRef(null);
  const registerRef = useRef(null);
  const btnRef = useRef(null);

  const registered = ( show, handelClose) => {
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
<>
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
          <div className="register-style">
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

      </>
  );
}

export default LoginRegister;

 

