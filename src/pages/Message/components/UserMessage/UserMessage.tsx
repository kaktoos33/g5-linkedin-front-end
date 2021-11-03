import { FC } from "react";

export interface UserMessageProps {
  message: {
    id: number;
    title: string;
    body: string;
    date: string;
  };
}

export const UserMessage: FC<UserMessageProps> = (
  message: UserMessageProps
) => {
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
