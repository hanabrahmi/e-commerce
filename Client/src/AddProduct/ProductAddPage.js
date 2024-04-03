import React, { useState } from 'react';
import './ProductAddPage.css';
import rectangleImage from './ima1.jpg'; 

const ProductAddPage = () => {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [locationOption, setLocationOption] = useState(''); // Déclaration de locationOption
  const [emailError, setEmailError] = useState(''); // Nouvelle variable d'état pour le message d'erreur de l'e-mail
  const [phoneError, setPhoneError] = useState(''); // Nouvelle variable d'état pour le message d'erreur du numéro de téléphone
  const [cautionAmount, setCautionAmount] = useState(''); // Déclarer cautionAmount
  const [postalCodeError, setPostalCodeError] = useState('');
  const [price, setPrice] = useState(''); // Ajout de setPrice
  const [priceError, setPriceError] = useState('');
  const [commission, setCommission] = useState('');

  const handleImageUpload = (event, index) => {
    const newImages = [...images];
    newImages[index] = URL.createObjectURL(event.target.files[0]);
    setImages(newImages);
  };
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    // Reset subcategory when category changes
    setSubCategory('');
  };
  const handleSubCategoryChange = (selectedSubCategory) => {
    setSubCategory(selectedSubCategory);
  };
  const handleLocationOptionChange = (selectedLocationOption) => {
    setLocationOption(selectedLocationOption);
    // Reset caution amount when location option changes
    setCautionAmount('');
  };
  const handleEmailChange = (email) => {
    if (email.includes('@')) {
      setEmailError('');
    } else {
      setEmailError('Veuillez saisir une adresse e-mail valide.');
    }
  };
  const handlePhoneChange = (phone) => {
    if (/^\d{8}$/.test(phone)) {
      setPhoneError('');
    } else {
      setPhoneError('Veuillez saisir un numéro de téléphone valide (8 chiffres).');
    }
  };
  const handlePostalCodeChange = (postalCode) => {
    if (/^\d{4}$/.test(postalCode)) {
      setPostalCodeError('');
    } else {
      setPostalCodeError('Veuillez saisir un code postal valide (4 chiffres).');
    }
  };
  const handlePriceChange = (price) => {
    if (price >= 10) {
      setPriceError('');
      const commissionValue = parseFloat(price) * 0.9;
      setCommission(commissionValue.toFixed(2));
    } else {
      setPriceError('Le prix minimum est de 10 DT.');
    }
    setPrice(price); // Mise à jour du prix
  };

  return (
    <div className="product-add-page mt-140">
      <img src={rectangleImage} alt="Rectangle Image" className="rectangle-image" />
      <div className="product-add-container">
      <div className="titre-container">
  <i className="fa-solid fa-cart-plus fa-3x" style={{ animation: 'bounce 1s infinite' }}></i>
  <h1 className="titre">Ajouter ton produit</h1>
  </div>

       <div className='test12'>               
 <div className='test1'>
 <div className="titre-container">
 <i className="fa-solid fa-camera-retro fa-2x" style={{ animation: 'beatFade 1s infinite' }}></i>
  <h1 className='titre1'>ajouter 2 photos : </h1>
  </div>
        <div className="image-upload-container">
          {Array.from({ length: 2 }, (_, index) => (
            <div key={index} className="image-upload-box">
              <input
                type="file"
                id={`image-upload-${index}`}
                onChange={(event) => handleImageUpload(event, index)}
                hidden
                accept="image/*"
                required
              />
              <label htmlFor={`image-upload-${index}`} className="image-upload-label">
                Cliquez pour sélectionner
              </label>
              <p className="image-instruction">
                {`Photo ${index + 1}: `}
                
              </p>
              <div className="image-container">
                {images[index] && (
                  <img
                    src={images[index]}
                    alt={`Photo ${index + 1}`}
                    className="uploaded-image"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        </div>
        
          <div className='test2'>
          <div className="titre-container">
 <i className="fa-solid fa-user-pen fa-2x" style={{ animation: 'beatFade 1s infinite' }}></i>
  <h1 className='titre1'>Information personnel : </h1>
  </div>

          <input type="text" className="input-field" placeholder="Nom de l'utilisateur" required />
          <input type="text" className="input-field" placeholder="Prenom de l'utilisateur " required />
          <input
          type="email"
          className="input-field"
          placeholder="E-mail"
          onChange={(e) => handleEmailChange(e.target.value)} // Appel de la fonction handleEmailChange sur chaque modification de l'e-mail
          required
        />
         {emailError && (
          <div className="alert alert-danger" role="alert">
            {emailError}
          </div>
        )}
          <input
          type="text"
          className="input-field"
          placeholder="Numéro de téléphone"
          onChange={(e) => handlePhoneChange(e.target.value)}
          required
        />
         {/* Utilisez l'alerte Bootstrap pour afficher le message d'erreur pour le numéro de téléphone */}
         {phoneError && (
          <div className="alert alert-danger" role="alert">
            {phoneError}
          </div>
        )}

<select className="input-field" required>
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

          <input type="text" className="input-field" placeholder=" Votre Address" required />
          <input
          type="text"
          className="input-field"
          placeholder="Code postal "
          onChange={(e) => handlePostalCodeChange(e.target.value)}
          required
        />
        {postalCodeError && (
          <div className="alert alert-danger" role="alert">
            {postalCodeError}
          </div>
        )}
          
          </div>
           
</div>
<div className='test3'>
<div className="titre-container">
 <i className="fa-brands fa-product-hunt fa-2x" style={{ animation: 'beatFade 1s infinite' }}></i>
  <h1 className='titre1'>Information du produit : </h1>
  </div>
          <input type="text" className="input-field" placeholder="Nom produit" required />
          <input
            type="text"
            className="input-field"
            placeholder="Description du produit  "
            required
          />
          
          <select className="input-field" required>
  <option value="">Sélectionnez l'état du produit</option>
  <option value="Mauvais">Mauvais</option>
  <option value="Moyen">Moyen</option>
  <option value="Bon">Bon</option>
  <option value="Très bon">Très bon</option>
  <option value="Excellent">Excellent</option>
  <option value="Neuf">Neuf</option>
</select>

<input
          type="number"
          className="input-field"
          placeholder="Prix  produit"
          onChange={(e) => handlePriceChange(e.target.value)}
          required
        />
        {priceError && (
          <div className="alert alert-danger" role="alert">
            {priceError}
          </div>
        )}
       <input
          type="text"
          className="input-field"
          placeholder="Prix Net"
          value={commission}
          readOnly // Empêche l'édition directe de la valeur
          required
        />
        
          <select className="input-field"  value={category} onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="">catégorie</option>
            <option value="vêtement">Vêtement</option>
            <option value="vaisselle">Vaisselle</option>
            <option value="véhicule">Véhicule</option>
            <option value="hébergement">Hébergement</option>
            <option value="machine">Machine</option>
          </select>
          {category && (
            <select className="input-field"  value={subCategory} onChange={(e) => handleSubCategoryChange(e.target.value)}>
              <option value=""> sous-catégorie</option>
              {category === 'vêtement' && (
                <>
                  <option value="chemises">Bjous</option>
                  <option value="pantalons">Vêtement</option>
                  <option value="robes">Chaussures</option>
                </>
              )}
              {category === 'vaisselle' && (
                <>
                  <option value="assiettes">Assiettes</option>
                  <option value="verres">Verres</option>
                  <option value="couverts">Couverts</option>
                </>
              )}
              {category === 'véhicule' && (
                <>
                  <option value="voitures">Voitures</option>
                  <option value="motos">Motos</option>
                  <option value="vélos">Camions</option>
                </>
              )}
              {category === 'hébergement' && (
                <>
                  <option value="appartements">Fermes</option>
                  <option value="chambres">Maison d'hote</option>
                  <option value="villas">Maison</option>
                </>
              )}
              {category === 'machine' && (
                <>
                  <option value="ordinateurs">informatiques et électroniques</option>
                  <option value="imprimantes">électroménagères</option>
                  <option value="téléphones">ventilation et climatisation</option>
                </>
              )}
            </select>
          )}

<select className="input-field" value={locationOption} onChange={(e) => handleLocationOptionChange(e.target.value)}>
          <option value="">Choisissez une option</option>
          <option value="Vente">À vendre</option>
          <option value="Location">En location</option>
        </select>

        {locationOption === 'Location' && (
          <input
            type="number"
            className="input-field"
            placeholder="Montant de la caution"
            value={cautionAmount}
            onChange={(e) => setCautionAmount(e.target.value)}
            required
          />
        )}


        </div>
        <button type="submit" className="submit-button">
          Ajout Product
        </button>
      </div>
    </div>
  );
};

export default ProductAddPage;

