import React, { useState, useEffect } from 'react';
import { Launcher } from 'react-chat-window';
import './chat.css';

const ChatComponent = () => {
  const [messageList, setMessageList] = useState([]);
  const [mediaAutoPlay, setMediaAutoPlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSendMessage("Bienvenue dans notre chat !");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = (text, author = 'them') => {
    const newMessage = {
      author,
      type: 'text',
      data: { text }
    };
    setMessageList(prevMessageList => [...prevMessageList, newMessage]);
  };

  const _onMessageWasSent = (message) => {
    const { data } = message;
    const { text } = data;
    const lowerCaseText = text.toLowerCase();
    const greetings = ['bonjour', 'salut', 'bonsoir'];

    if (greetings.some(greeting => lowerCaseText.includes(greeting))) {
      const autoReply = {
        author: 'them',
        type: 'text',
        data: { text: 'Salut ! Comment puis-je vous aider aujourd\'hui ?' }
      };
      setMessageList(prevMessageList => [...prevMessageList, message, autoReply]);
    } else {
      setMessageList(prevMessageList => [...prevMessageList, message]);
    }
  };

  const toggleMediaAutoPlay = () => {
    setMediaAutoPlay(!mediaAutoPlay);
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
        autoPlay={mediaAutoPlay} // Contrôler la lecture automatique
        handleVideoPlay={() => {}} // Ignorer la lecture automatique
      />
      <button onClick={toggleMediaAutoPlay}>
        {mediaAutoPlay ? 'Désactiver lecture automatique' : 'Activer lecture automatique'}
      </button>
    </div>
  );
};

export default ChatComponent;
