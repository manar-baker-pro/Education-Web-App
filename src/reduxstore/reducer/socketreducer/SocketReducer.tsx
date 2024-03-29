import io, { Socket } from "socket.io-client";
import { SocketAction } from "./SocketActionInter";
import { DefaultEventsMap } from "@socket.io/component-emitter";
export const soCket = (
  state: { socketio?: Socket<DefaultEventsMap, DefaultEventsMap> } = {},
  action: SocketAction
) => {
  switch (action.type) {
    case "APPEND_SOCKET":
      return {
        socketio: io("http://localhost:4010", {
          reconnection: true,
          reconnectionDelay: 1000,
          reconnectionDelayMax: 5000,
          // reconnectionAttempts:
        }),
      };
    case "REMOVE_SOCKET":
      return { socketio: undefined };
    default: {
      return state;
    }
  }
};
