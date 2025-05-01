declare module "partykit" {
  export interface PartyKitServer {
    onConnect: (ws: WebSocket, room: Room) => void;
  }

  export interface Room {
    broadcast: (message: string, excludeIds?: string[]) => void;
  }

  export interface WebSocket {
    id: string;
    addEventListener: (event: string, listener: (event: MessageEvent) => void) => void;
  }
}
