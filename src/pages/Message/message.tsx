import React, { useState } from "react";

const SOCKET_URL = "http://localhost:8080/ws-message";

const MessageApp = () => {
  // const ws = new WebSocket("ws://localhost:8999");
  const [message, setMessage] = useState("You server message here.");

  let onConnected = () => {
    console.log("Connected!!");
  };

  // let onMessageReceived = (msg) => {
  //   setMessage(msg.message);
  // };

  return (
    <div>
      <div>{message}</div>
    </div>
  );
};

export default MessageApp;
