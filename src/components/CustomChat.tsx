import React, { useState, useEffect } from 'react';
import WatsonAssistantChat from './WatsonAssistantChat';

const CustomChat: React.FC = () => {
    
    const isClient = typeof window === 'object';

    const [isChatOpen, setIsChatOpen] = useState(
        isClient && localStorage.getItem('isChatOpen') === "true"
    );

    const toggleChat = () => {
        const newIsChatOpen = !isChatOpen;
        setIsChatOpen(newIsChatOpen);
        localStorage.setItem('isChatOpen', String(newIsChatOpen));
      };

    return (
        <div className="chat-container">
            <button onClick={toggleChat} className="chat-icon">
                {/* Seu ícone de bate-papo aqui */}
            </button>
            {isChatOpen && <WatsonAssistantChat />}
        </div>
    );
};

export default CustomChat;
