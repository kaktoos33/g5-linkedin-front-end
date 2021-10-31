import { FC } from "react";
import "./Message.style.scss";

interface MessageProps {}

export const Message: FC<MessageProps> = () => {
  return (
    <div className="message ">
      <div className="messageBody">
        <div className="messageTitle">title</div>
        <div className="messageContent">body</div>
      </div>
      <div className="messageDate">date</div>
    </div>
  );
};
