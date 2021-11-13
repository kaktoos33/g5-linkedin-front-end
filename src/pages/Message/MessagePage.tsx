import { FC } from "react";

import { User } from "../../components/UserCard/types/User.types";

import "./MessagePage.Style.scss";
import { CardContainerWithFollow } from "../../components/Card/CardContainer";
import { CompanyMessages } from "./CompanyMessagePage/CompanyMessages";
import { useUserContext } from "../../UserContext";
import MessageApp from "./message";

interface MessagePageProps {}

export type MessageType = {
  messageId: number;
  user: User;
  messageBody: string;
  messageDate: string;
  messageType: string;
};

const fetchedMessages: Array<MessageType> = [
  {
    messageId: 1,
    user: {
      id: "1",
      name: "farzaneh",
      role: "Developer",
      img: "https://picsum.photos/id/1005/40",
    },
    messageBody: "body1",
    messageDate: "date1",
    messageType: "type1",
  },
  {
    messageId: 2,
    user: {
      id: "2",
      name: "AmirBahador",
      role: "Devops",
      img: "https://picsum.photos/id/2/40",
    },
    messageBody: "body2",
    messageDate: "date2",
    messageType: "type2",
  },
  {
    messageId: 3,
    user: {
      id: "3",
      name: "Mehdi",
      role: "FrontEnd Developer",
      img: "",
    },
    messageBody: "body3",
    messageDate: "date3",
    messageType: "type3",
  },
  {
    messageId: 4,
    user: {
      id: "20",
      name: "Mehdi",
      role: "FrontEnd Developer",
      img: "",
    },
    messageBody: "body3",
    messageDate: "date3",
    messageType: "type3",
  },
];

const fetechedUser: User = {
  id: "101",
  name: "LinkedIn",
  role: "Internet sunnyvale,CA",
  img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
};

export const MessagePage: FC<MessagePageProps> = () => {
  const users = fetechedUser;
  const { user } = useUserContext();
  console.log(user);
  // alert(user);
  return (
    <CardContainerWithFollow user={users}>
      {/* <UserMessages messagesList={fetchedMessages} className="mt-9" /> */}
      {/* <MessageApp /> */}
      <CompanyMessages messagesList={fetchedMessages} className="mt-9" />
    </CardContainerWithFollow>
    // <div className="flex justify-center main ">
    //   <div className="w-1/5 max-w-xs ">
    //     <UserProfile user={user} />
    //     <FollowReq
    //       connecetlist={fetechedConnectReq}
    //       title="ارتباطات خود را گسترش دهید"
    //       type="connect"
    //       butname="Connect"
    //     />
    //   </div>
    //   <div className="w-3/5 max-w-xl mx-3.5 ">
    //     <UserMessages
    //       test1="tes"
    //       messagesList={fetechedMessages}
    //       className="mt-9"
    //     />
    //   </div>
    //   <div className="w-1/5 max-w-xs">
    //     <Tags Taglist={fetechedTag} />
    //   </div>
    // </div>
  );
};
