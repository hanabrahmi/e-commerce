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
      nom: "",
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
            <input name="prenom"type="text" className="input-field" placeholder="Prenom de l'utilisateur" required onChange={handleChangeRegister} />
            <input name='email' type="email" className="input-field" placeholder="e-mail" required onChange={handleChangeRegister} />
            <input name='password'type="password" className="input-field " placeholder="mot de passe" required onChange={handleChangeRegister} />
            <input name='numero_telephone'type="number" className="input-field" placeholder="Numero de telephone" required onChange={handleChangeRegister} />
            <input name='adresse' type="text" className="input-field" placeholder="Votre Adresse" required onChange={handleChangeRegister} />
            
            <input name='code_postal'type="text " className="input-field" placeholder="Code Postal" required onChange={handleChangeRegister} />
            <select className="input-field" required name='ville' onChange={handleChangeRegister}>
                <option value="">Sélectionnez une ville</option>
                <option value="Ariana">Ariana</option>
                <option value="Béja">Béja</option>
                <option value="Ben Arous">Ben Arous</option>
                <option value="Bizerte">Bizerte</option>
                <option value="Gabès">Gabès</option>
                <option value="Gafsa">Gafsa</option>
                <option value="Jendouba">Jendouba</option>
                <option value="Kairouan">Kairouan</option>
                <option value="Kasserine">Kasserine</option>
                <option value="Kébili">Kébili</option>
                <option value="Le Kef">Le Kef</option>
                <option value="Mahdia">Mahdia</option>
                <option value="La Manouba">La Manouba</option>
                <option value="Médenine">Médenine</option>
                <option value="Monastir">Monastir</option>
                <option value="Nabeul">Nabeul</option>
                <option value="Sfax">Sfax</option>
                <option value="Sidi Bouzid">Sidi Bouzid</option>
                <option value="Siliana">Siliana</option>
                <option value="Sousse">Sousse</option>
                <option value="Tataouine">Tataouine</option>
                <option value="Tozeur">Tozeur</option>
                <option value="Tunis">Tunis</option>
                <option value="Zaghouan">Zaghouan</option>
            </select>
            <label for="role">Choisissez un rôle :</label>
                <select id="role" name="role" required onChange={handleChangeRegister}>
                    <option value="admin">Administrateur</option>
                    <option value="abonne">Abonné</option>
                </select>
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
