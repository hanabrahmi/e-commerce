import React, { useState, useEffect } from 'react';
import { Launcher } from 'react-chat-window';
import './chat.css';

const ChatComponent = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    // Envoyer un message automatique après un délai
    const timer = setTimeout(() => {
      handleSendMessage("Bienvenue dans notre chat !");
    }, 2000); // Envoyer le message après 2 secondes

    return () => clearTimeout(timer);
  }, []); // Utiliser un tableau vide pour s'assurer que le hook s'exécute une seule fois

  const handleSendMessage = (text, author = 'them') => {
    const newMessage = {
      author, // L'utilisateur actuel
      type: 'text',
      data: { text }
    };
    setMessageList(prevMessageList => [...prevMessageList, newMessage]);
  };

  const _onMessageWasSent = (message) => {
    const { data } = message;
    const { text } = data;
    const lowerCaseText = text.toLowerCase();
  
    let autoReply = {
      author: 'them',
      type: 'text',
      data: { text: '' }
    };
  
    if (lowerCaseText.includes('modes de paiement')) {
      autoReply.data.text = 'Nous acceptons les paiements par carte de crédit, carte de débit et PayPal. Vous pouvez également choisir de payer à la livraison pour certains articles, selon votre région.';
    } else if (lowerCaseText.includes('annuler ma commande')) {
      autoReply.data.text = 'Oui, vous pouvez annuler votre commande tant qu\'elle n\'a pas été expédiée. Pour annuler, connectez-vous à votre compte, accédez à la section "Mes commandes" et suivez les instructions pour annuler la commande en cours.';
    } else if (lowerCaseText.includes('retour')) {
      autoReply.data.text = 'Si vous souhaitez retourner un article, veuillez contacter notre service clientèle dans les 48 heures suivant la réception de votre commande. Nous vous fournirons les instructions de retour et vous aiderons à obtenir un remboursement ou un échange.';
    } else if (lowerCaseText.includes('location')) {
      autoReply.data.text = 'Oui, nous proposons des options de location pour certains articles. Vous pouvez trouver des détails sur les articles disponibles à la location sur notre site, ainsi que des informations sur la durée et les tarifs de location.';
    } else if (lowerCaseText.includes('suivre ma commande')) {
      autoReply.data.text = 'Une fois votre commande expédiée, vous recevrez un e-mail de confirmation contenant un lien de suivi. Vous pouvez utiliser ce lien pour suivre l\'acheminement de votre colis en temps réel.';
    } else if (lowerCaseText.includes('délais de livraison')) {
      autoReply.data.text = 'Les délais de livraison varient en fonction de votre lieu de résidence et du mode d\'expédition sélectionné. Vous pouvez consulter les estimations de livraison lors du passage de votre commande.';
    } else {
      return; // Ne pas envoyer de réponse automatique si aucune condition n'est remplie
    }
  
    setMessageList(prevMessageList => [...prevMessageList, message, autoReply]);
  };
  

  return (
    <div className="chat-container -140">
      <Launcher
        agentProfile={{
          teamName: 'Service client',
        }}
        onMessageWasSent={(message) => {
          _onMessageWasSent(message);
        }}
        messageList={messageList}
        showEmoji
      />
    </div>
  );
};

export default ChatComponent;
