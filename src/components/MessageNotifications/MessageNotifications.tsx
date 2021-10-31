import { FC, HTMLProps } from "react";
import "./MessageNotificatons.style.scss";

interface MessageNotificationsProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

export const MessageNotifications: FC<MessageNotificationsProps> = (
  props: MessageNotificationsProps
) => {
  return (
    <div {...props} className={`card  ${props.className || ""}`}>
      <div className="polygon"></div>
      <div className="cardMessage">{props.children}</div>
    </div>
  );
};
