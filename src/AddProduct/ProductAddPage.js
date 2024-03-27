import React, { useState } from 'react';
import './ProductAddPage.css';

const ProductAddPage = () => {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const handleImageUpload = (event, index) => {
    const newImages = [...images];
    newImages[index] = event.target.files[0];
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

  return (
    <div className="product-add-container">
      <h1>Prends des photos !</h1>
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
        <input type="text" className="input-field" placeholder="Prenom de l'utilisateur " required />
        <input type="email" className="input-field" placeholder="E-mail" required />
        <input
          type="number"
          className="input-field"
          placeholder="Numero de telephone "
          required
        />
        <input type="text" className="input-field" placeholder=" Votre Address" required />
        <input type="text" className="input-field" placeholder="Code postal " required />
        <input type="text" className="input-field" placeholder="Ville" required />
        <input type="text" className="input-field" placeholder="Nom produit" required />
        <input
          type="text"
          className="input-field"
          placeholder="Product Description"
          required
        />
        <input type="text" className="input-field" placeholder="Description " required />
        <input
          type="text"
          className="input-field"
          placeholder="Etat du produit"
          required
        />
        <input type="number" className="input-field" placeholder="Prix  produit" required />
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
      </div>
      <button type="submit" className="submit-button">
        Ajout Product
      </button>
    </div>
  );
};

export default ProductAddPage;
