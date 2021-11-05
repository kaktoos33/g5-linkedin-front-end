import React from "react";
import { FC, HTMLProps } from "react";
import { Card } from "../../../components/Card/Card";
import { MessageType } from "../MessagePage";
import { UserMessage } from "./UserMessage/UserMessage";
import "./UserMessages.style.scss";

interface UserMessagesProps extends HTMLProps<HTMLDivElement> {
  test1: string;
  messagesList: Array<MessageType>;
  children?: React.ReactNode;
}

export type message = { id: number; title: string; body: string; date: string };

export const UserMessages: FC<UserMessagesProps> = (
  { test1, messagesList }: UserMessagesProps,
  props: UserMessagesProps
) => {
  const messages = React.useMemo(
    () =>
      messagesList
        .slice(0, 3)
        .map((message) => <UserMessage message={message} />),
    [messagesList]
  );

  console.log(messagesList);
  return (
    <div className={`userMessagesBody ${props.className || ""}`}>
      {messages}
    </div>
  );
};
