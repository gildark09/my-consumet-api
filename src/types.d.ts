declare module 'reconnecting-websocket';

interface AxiosResponse {
  data: any;
}

declare namespace ReconnectingWebSocket {
  interface Options {
    WebSocket?: any;
  }
}

declare const tmdbApi: string; 