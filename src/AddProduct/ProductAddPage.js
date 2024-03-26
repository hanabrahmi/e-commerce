import React, { useState } from 'react';
import './ProductAddPage.css';

const ProductAddPage = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event, index) => {
    const newImages = [...images];
    newImages[index] = event.target.files[0];
    setImages(newImages);
  };

  return (
    <div className="product-add-container">
      <h1>Prends  photos !</h1>
      <div className="image-upload-container">
        {Array.from({ length: 2 }, (_, index) => (
          <div key={index} className="image-upload-box">
            <input
              type="file"
              id={`image-upload-${index}`}
              onChange={(event) => handleImageUpload(event, index)}
              hidden
            />
            <label htmlFor={`image-upload-${index}`} className="image-upload-label">
              Cliquez pour sélectionner
            </label>
            <p className="image-instruction">
              {`Photo ${index + 1}: `} {/* Ajoutez les instructions spécifiques ici */}
            </p>
          </div>
        ))}
      </div>
      <div>
      <input type="text" className="input-field" placeholder="Nom de l'utilisateur" required />
            <input type="text" className="input-field" placeholder="Presom de l'utilisateur" required />
            <input type="email" className="input-field" placeholder="e-mail" required />
            <input type="number" className="input-field" placeholder="Numero de telephone" required />
            <input type="text" className="input-field" placeholder="Votre Adresse" required />
            <input type="text " className="input-field" placeholder="Code Postal" required />
            <input type="text" className="input-field" placeholder="Ville " required />
            <input type="text" className="input-field" placeholder="nom produit" required />
            <input type="text " className="input-field" placeholder="description  du produit" required />
            <input type="text" className="input-field" placeholder="Etat  du Produit" required />
            <input type="number " className="input-field" placeholder="prix produit" required />
            <button type="submit" className="submit-button" >Next</button>

      </div>
      <button type="submit" className="submit-button">Ajouter Produit</button>
    </div>
  );
};

export default ProductAddPage;