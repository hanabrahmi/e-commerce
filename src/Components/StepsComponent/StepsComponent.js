 import React, { useState } from 'react';
import './StepsComponent.css';
import Image from './Image.jpg';
import Image1 from './Image1.jpg'; // Importez l'image 1
import Image2 from './Image2.jpg'; // Importez l'image 2
import Image3 from './Image3.jpg';
function StepsComponent() {
  const [hoveredImage, setHoveredImage] = useState(Image); // Définir l'image par défaut

  // Gestionnaire d'événement pour le survol du bouton 1
  const handleButton1Hover = () => {
    setHoveredImage(Image1);
  };

  // Gestionnaire d'événement pour le survol du bouton 2
  const handleButton2Hover = () => {
    setHoveredImage(Image2);
  };

  // Gestionnaire d'événement pour le survol du bouton 3
  const handleButton3Hover = () => {
    setHoveredImage(Image3);
  };

  // Gestionnaire d'événement pour le survol hors des boutons (pour revenir à l'image par défaut)
  const handleHoverOut = () => {
    setHoveredImage(Image);
  };

  return (
    <div className="container">
      <div className="text">
        <h1>Comment ça marche</h1>
        <div className="steps">
          <div className="step">
            <div className="step-circle" onMouseOver={handleButton1Hover}>1</div>
            <div>
              <h2>Ajoutez un article</h2>
              <p>Ajoutez quelques photos, la description, le prix...</p>
            </div>
          </div>
          {/* Ajoutez les autres étapes ici */}
          <div className="step">
            <div className="step-circle" onMouseOver={handleButton2Hover}>2</div>
            <div>
              <h2>Ajoutez article 2</h2>
              <p>Ajoutez quelques photos, la description, le prix...</p>
            </div>
          </div>
          <div className="step">
            <div className="step-circle" onMouseOver={handleButton3Hover}>3</div>
            <div>
              <h2>Ajoutez article 3</h2>
              <p>Ajoutez quelques photos</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image" onMouseLeave={handleHoverOut}>
        <img src={hoveredImage} alt="Image survolée" />
      </div>
    </div>
  );
}

export default StepsComponent;
