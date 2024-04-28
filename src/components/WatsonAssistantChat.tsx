import React, { useEffect } from 'react';

const WatsonAssistantChat: React.FC = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "7d8de930-1074-4862-94a9-31d2d9d27760",
      region: "us-east",
      serviceInstanceID: "e0771cd9-c1d2-4b8e-b057-f554aa3c898e",
      onLoad: async (instance: any) => { await instance.render(); }
    };

    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  }, []);

  return <div id="watson-chat"></div>;
};

export default WatsonAssistantChat;
