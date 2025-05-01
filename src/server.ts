import type { PartyKitServer } from "partykit";

export default {
  onConnect(ws, room) {
    ws.addEventListener("message", (event) => {
      room.broadcast(event.data, [ws.id]);
    });
  },
} satisfies PartyKitServer;
