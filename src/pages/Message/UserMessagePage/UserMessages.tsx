import React from "react";
import { FC, HTMLProps } from "react";
import { Card } from "../../../components/Card/Card";
import { MessageType } from "../MessagePage";
import { UserMessage } from "./UserMessage/UserMessage";

import "./UserMessages.style.scss";

interface UserMessagesProps extends HTMLProps<HTMLDivElement> {
  messagesList: Array<MessageType>;
  children?: React.ReactNode;
}

export type message = { id: number; title: string; body: string; date: string };

export const UserMessages: FC<UserMessagesProps> = (
  { messagesList }: UserMessagesProps,
  props: UserMessagesProps
) => {
  const messages = React.useMemo(
    () => messagesList.map((message) => <UserMessage message={message} />),
    [messagesList]
  );

  console.log(messagesList);
  return (
    <div className={`userMessagesCard ${props.className || ""}`}>
      <div className="userMessagesHeader">اعلان ها</div>
      <div className="mb-6">{messages}</div>
    </div>
  );
};
