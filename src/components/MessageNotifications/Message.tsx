import { FC } from "react";
import "./Message.style.scss";

interface MessageProps {
  message: {
    id: number;
    title: string;
    body: string;
    date: string;
  };
}

export const Message: FC<MessageProps> = (message: MessageProps) => {
  return (
    <div className="message ">
      <div className="messageBody">
        <div className="messageTitle">{message.message.title}</div>
        <div className="messageContent">{message.message.body}</div>
      </div>
      <div className="messageDate">{message.message.date}</div>
    </div>
  );
};
