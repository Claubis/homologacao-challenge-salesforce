// src/types/globals.d.ts
export {};

declare global {
  interface Window {
    VLibras: any;

    watsonAssistantChatOptions?: {
      integrationID: string;
      region: string;
      serviceInstanceID: string;
      clientVersion?: string;
      onLoad: (instance: any) => Promise<void>;
    };
  }
}

