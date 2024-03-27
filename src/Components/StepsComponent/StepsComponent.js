 import React, { useState } from 'react';
import './StepsComponent.css';
import Image from './Image.jpg';
import Image1 from './Image1.jpg'; // Importez l'image 1
import Image2 from './Image2.jpg'; // Importez l'image 2
import Image3 from './Image3.jpg';
import Image4 from './Image4.jpg';
import Image5 from './Image5.jpg';
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

   // Gestionnaire d'événement pour le survol du bouton 4
   const handleButton4Hover = () => {
    setHoveredImage(Image4);
  };

// Gestionnaire d'événement pour le survol du bouton 5
   const handleButton5Hover = () => {
    setHoveredImage(Image5);
  };
  
  // Gestionnaire d'événement pour le survol hors des boutons (pour revenir à l'image par défaut)
  const handleHoverOut = () => {
    setHoveredImage(Image);
  };

  return (
    <div className="container mt-140">
      <div className="text">
        <h1>Conditions d’utilisation</h1>
        <div className="steps">
          <div className="step">
            <div className="step-circle" onMouseOver={handleButton1Hover}>1</div>
            <div>
              <h2>Ajout d'un Article : </h2>
              <p>remplissez le formulaire avec soin, incluant des photos,  </p>
              <p>une description détaillée et le prix.Votre article sera </p>
              <p>rapidement mis en ligne et disponible à la vente.</p>
            </div>
          </div>
          {/* Ajoutez les autres étapes ici */}
          <div className="step">
            <div className="step-circle" onMouseOver={handleButton2Hover}>2</div>
            <div>
              <h2>Livraison</h2>
              <p>Une fois votre article prêt, un livreur viendra le récupérer  </p>
              <p>directement chez vous pour l'expédier au client.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-circle" onMouseOver={handleButton3Hover}>3</div>
            <div>
              <h2>Paiement</h2>
              <p>Le paiement sera fait 48 heures après la livraison. Si l'article</p>
              <p> n'est pas retourné, 90% du prix sera transféré sur votre carte </p>
            </div>
          </div>

          <div className="step">
            <div className="step-circle" onMouseOver={handleButton4Hover}>4</div>
            <div>
              <h2>Achat</h2>
              <p>Vous pouvez passer commande sur l'article de votre choix et </p>
              <p> vous faire livrer en toute sécurité chez vous. </p>
            </div>
          </div>

          <div className="step">
            <div className="step-circle" onMouseOver={handleButton5Hover}>5</div>
            <div>
              <h2>Location</h2>
              <p>Lors de la location d'un article, vous payez le prix de la location plus </p>
              <p>les frais de commission au livreur. À son retour, vous récupérez votre  </p>
              <p>commission si vous respectez la date de retour prévue.</p>
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
