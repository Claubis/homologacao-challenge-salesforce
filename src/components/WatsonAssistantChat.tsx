import React, { useEffect } from 'react';

const WatsonAssistantChat: React.FC = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.watsonAssistantChatOptions = {
                integrationID: "994cc0c8-0b8f-4077-a50d-eb51b45b24f9",
                region: "us-east",
                serviceInstanceID: "e0771cd9-c1d2-4b8e-b057-f554aa3c898e",
                onLoad: async (instance: any) => { await instance.render(); }
            };

            const t = document.createElement('script');
            t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
            document.head.appendChild(t);
        }
    }, []);

    return <div id="watson-chat"></div>;
};

export default WatsonAssistantChat;
