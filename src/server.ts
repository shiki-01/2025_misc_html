import type { PartyKitServer } from "partykit";

export default {
  onConnect(ws, room) {
    console.log("New connection", ws.id);
    ws.addEventListener("message", (event) => {
      room.broadcast(event.data, [ws.id]);
    });
  },
} satisfies PartyKitServer;
