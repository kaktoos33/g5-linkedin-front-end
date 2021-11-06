import { FC } from "react";
import "./NotificationMessage.style.scss";

interface NotificationMessageProps {
  message: {
    id: number;
    title: string;
    body: string;
    date: string;
  };
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
