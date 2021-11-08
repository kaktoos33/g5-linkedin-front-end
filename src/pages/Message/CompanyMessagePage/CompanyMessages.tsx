import React from "react";
import { FC, HTMLProps } from "react";
import { MessageType } from "../MessagePage";
import { CompanyMessage } from "./CompanyMessage/CompanyMessage";
import "./CompanyMessages.Style.scss";
import { UserProfile } from "./../../../components/UserProfile/UserProfile";
import { User } from "../../../components/UserCard/types/User.types";
import { UserCard } from "./../../../components/UserCard/UserCard";
import { Tags } from "../../../components/Tag/Tags";
import { Tag } from "../../../components/Tag/Tag.types";
import { Card } from "../../../components/Card/Card";

interface CompanyMessagesProps extends HTMLProps<HTMLDivElement> {
  messagesList: Array<MessageType>;
  children?: React.ReactNode;
}

export type message = { id: number; title: string; body: string; date: string };
export const CompanyMessages: FC<CompanyMessagesProps> = (
  { messagesList }: CompanyMessagesProps,
  props: CompanyMessagesProps
) => {
  const fetchedUser: User = {
    name: "farzaneh",
    role: "Developer",
    img: "https://picsum.photos/id/1005/40",
  };
  const messages = React.useMemo(
    () => messagesList.map((message) => <CompanyMessage message={message} />),
    [messagesList]
  );
  const jobTitle = "استخدام نیروی منابع انسانی در ایران ...";
  const fetechedTag: Array<Tag> = [
    { name: "work" },
    { name: "business" },
    { name: "hr" },
  ];
  const tag = React.useMemo(
    () =>
      fetechedTag.map((a, index) => (
        <span
          key={index.toString()}
          className="inline-block tag-span mx-1 my-1 px-3 py-0.5"
        >
          #{a.name}
        </span>
      )),
    [fetechedTag]
  );

  return (
    <div className={`companyMessagesCard ${props.className || ""}`}>
      <div className="m-5">
        <UserCard user={fetchedUser} componentname="Message" image_size="L" />
        <div>{jobTitle}</div>
        <Card classname="shortTag">
          <div className="mt-3.5 mb-5 mx-7 companyMessagesTag">{tag}</div>
        </Card>

        <hr className="w-90%" />
      </div>
      <div className="companyMessagesHeader">رزومه های ارسالی</div>
      <div className="mb-6">{messages}</div>
    </div>
  );
};
