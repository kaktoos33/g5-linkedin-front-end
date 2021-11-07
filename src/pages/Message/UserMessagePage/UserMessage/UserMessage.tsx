import { FC } from "react";
import "./UserMessage.Style.scss";

import { MessageType } from "../../MessagePage";
import { Button } from "../../../../components/Buttun/Button";
import { UserClass } from "../../../../components/UserCard/types/UserClass.type";
import { UserCard } from "../../../../components/UserCard/UserCard";

export interface UserMessageProps {
  message: MessageType;
}

export const UserMessage: FC<UserMessageProps> = (
  message: UserMessageProps
) => {
  const type = "message";
  const classname: UserClass = {
    nameclass: `${type}_name`,
    roleclass: `${type}_role`,
    outerdivclass: `${type}_outerdiv_class`,
    innerdivclass: `${type}_innerdiv_class`,
  };
  return (
    <div className="userMessageCard">
      <div className="flex flex-row w-full p-5 userMessageBody ">
        <div className="flex flex-col w-3/4">
          <UserCard
            user={message.message.user}
            componentname={"Message"}
            image_size="S"
          />
          <div className="w-full">{message.message.messageBody}</div>
        </div>

        <div className="flex flex-col w-1/4">
          <div></div>
          <div className="userMessageDate h-2/3">
            {message.message.messageDate}
          </div>
          <div></div>
          <div className="userMessageButton h/1/3">
            <Button type="button" gruop="Secondary" lang="en" size="M">
              مشاهده
            </Button>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};
