import React, { useRef ,useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router';
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";
import { errorToast } from "../utils"
import { login, register } from "../redux/actions/Actions"
import './style.css'; 
function LoginRegister({show, handelClose}) { 
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
  const navigate = useNavigate();
  const { loading, isAuth, role, error } = useSelector(
    (state) => state.LoginReducer
    );
    
    
    const dispatch = useDispatch();
    const [loginDetails, setLoginDetails] = useState({
      email: "",
      password: "",
    });
    const handleChange = (e) => {
      setLoginDetails({
        ...loginDetails,
        [e.target.name]: e.target.value.trim(),
      });
    };
    const handleSubmit = (e) => {
      if (!loginDetails.email.includes("@")) {
        errorToast("Email Not Valid");
      }
      e.preventDefault();
      dispatch(login(loginDetails));
    };
    
    useEffect(() => {
      errorToast(error);
    }, [error]);
    const [user, setUser] = useState({});
    const handleChangeRegister = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value.trim(),
      });
    }
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        dispatch(register({user, logined}));
      }
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
            <input name="nom"type="text" className="input-field" onChange={handleChange} placeholder="Nom de l'utilisateur "  required />
            <input name="password"type="password" className="input-field" onChange={handleChange} placeholder="mot de passe " required />
            <input type="checkbox" className="check-box" /><span>Remember password</span>
            <button type="submit" onClick={handleSubmit} className="submit-btn"> {loading ? <ClipLoader
        color={"#000"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : "Login"}</button>
          </form>
          <div className="register-style">
          <form id="register" className="input-group" ref={registerRef}>
            <input name="nom"type="text" className="input-field" placeholder="Nom de l'utilisateur" required onChange={handleChangeRegister}/>
            <input name="prenom"type="text" className="input-field" placeholder="Presom de l'utilisateur" required onChange={handleChangeRegister} />
            <input name='email' type="email" className="input-field" placeholder="e-mail" required onChange={handleChangeRegister} />
            <input name='password'type="password" className="input-field " placeholder="mot de passe" required onChange={handleChangeRegister} />
            <input name='numero_telephone'type="number" className="input-field" placeholder="Numero de telephone" required onChange={handleChangeRegister} />
            <input name='adresse' type="text" className="input-field" placeholder="Votre Adresse" required onChange={handleChangeRegister} />
            
            <input name='code_postal'type="text " className="input-field" placeholder="Code Postal" required onChange={handleChangeRegister} />
            <input name='ville'type="text" className="input-field" placeholder="Ville " required onChange={handleChangeRegister} />
            
            <div class="check-box-container">
            <input type="checkbox" class="check-box" />
              <span>I agree to the terms and conditions</span>
            </div>
            <button type="submit"  onClick={handleSubmitRegister} className="submit-btn">Register</button>
          </form>
          </div>
        </div>
      </div>

      </>
  );
}


export default LoginRegister;
