import { FC } from "react";
import "./Message.style.scss";

interface MessageProps {
  payam: {
    id: number;
    title: string;
    body: string;
    date: string;
  };
}

export const Message: FC<MessageProps> = (payam: MessageProps) => {
  return (
    <div className="message ">
      <div className="messageBody">
        <div className="messageTitle">{payam.payam.title}</div>
        <div className="messageContent">{payam.payam.body}</div>
      </div>
      <div className="messageDate">{payam.payam.date}</div>
    </div>
  );
};
