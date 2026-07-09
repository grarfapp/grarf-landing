/// <reference types="react" />

declare global {
  interface Window {
    GRARF_WEB_CONFIG?: {
      operationalIngestUrl?: string;
      operationalPollIntervalMs?: number;
      sportscapeEditorialApiUrl?: string;
    };
  }
}

export {};
