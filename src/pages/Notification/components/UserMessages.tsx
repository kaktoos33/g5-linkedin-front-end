import { FC } from "react";
import { Card } from "../../../components/Card/Card";

interface UserMessagesProps {
  children?: React.ReactNode;
}

export const UserMessages: FC<UserMessagesProps> = (
  props: UserMessagesProps
) => {
  return <div className="container flex bg-whiteColor">{props.children}</div>;
};
