import { FC } from "react";
import { NoteMessage } from "../NavBar/NavBar";
import "./NotificationMessage.Style.scss";

interface NotificationMessageProps {
  message: NoteMessage;
}

export const NotificationMessage: FC<NotificationMessageProps> = (
  notificationMessage: NotificationMessageProps
) => {
  return (
    <div className="notificationMessage ">
      <div className="notificationMessageBody">
        <div className="notificationMessageTitle">
          {notificationMessage.message.title}
        </div>
        <div className="notificationMessageContent">
          {notificationMessage.message.body}
        </div>
      </div>
      <div className="notificationMessageDate">
        {notificationMessage.message.date}
      </div>
    </div>
  );
};
