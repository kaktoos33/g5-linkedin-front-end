import { useCallback, useEffect, useMemo, useState } from "react";

import { Client, Message } from "@stomp/stompjs";
import { NoteMessage } from "./NavBar";

// client.connectHeaders = { authorization: token ? `Bearer ${token}` : "" };

export type NoteWebSocket = {
  webSocketURL: string;
  userId: string;
};

export default function useNotification(params: NoteWebSocket) {
  const messages: never[] = []
  // const client = useMemo(() => new Client(), []);
  // client.brokerURL =
  //   params.webSocketURL || "ws://localhost:8080/gs-guide-websocket";

  // const [messages, setMessages] = useState<NoteMessage[]>([]);

  // client.connectHeaders = { username: params.userId };

  // const callback = useCallback((message: any) => {
  //   // called when the client receives a STOMP message from the server
  //   if (message.body) {
  //     console.log(message.body);
  //     const obj: NoteMessage = JSON.parse(message.body);
  //     console.log(obj);
  //     console.log(obj.body);
  //     setMessages((prevState) => [...prevState, obj]);
  //     console.log(message.body);
  //   } else {
  //     console.log("got empty message");
  //   }
  // }, []);

  // const publishMessage = useCallback(() => {
  //   client.publish({
  //     destination: "/app/hello",
  //     // body: user.userId,
  //     body: JSON.stringify({ name: params.userId }),
  //   });
  // }, [client, params.userId]);

  // useEffect(() => {
  //   client.onConnect = () => {
  //     console.log("onConnect");
  //     //   client.subscribe("/user/queue/greetings", callback);
  //     client.subscribe("/user/topic/greetings", callback);
  //     publishMessage();
  //   };
  //   client.activate();
  //   // client.subscribe("/topic/greetings", callback);
  // }, [callback, client, publishMessage]);

  return messages;
}
