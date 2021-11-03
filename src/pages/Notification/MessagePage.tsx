import { FC } from "react";
import { UserProfile } from "../../components/UserProfile";
import { Connect } from "../../components/Connect/Connect";
import { User } from "../../components/UserCard/types/User.types";
import { UserMessages } from "./components/UserMessages";
import { UserMessage } from "./components/UserMessage/UserMessage";

interface MessagePageProps {}
const fetechedConnectReq: Array<User> = [
  {
    name: "AmirBahador",
    role: "Devops",
    img: "https://picsum.photos/id/2/40",
  },
  {
    name: "Mehdi",
    role: "FrontEnd Developer",
    img: "",
  },
  {
    name: "Sina",
    role: "BackEnd Developer",
    img: "https://picsum.photos/id/175/40",
  },
  {
    name: "Mehrdad",
    role: "SEO",
    img: "https://picsum.photos/id/250/40",
  },
  {
    name: "Neda",
    role: "Manager",
    img: "",
  },
  {
    name: "Mahour",
    role: "UI/UX Designer",
    img: "https://picsum.photos/id/1014/40",
  },
];

export const MessagePage: FC<MessagePageProps> = () => {
  return (
    <div className="flex justify-center bg-backGroundColor mt-9 ">
      <div className="w-1/5 max-w-xs ">
        <UserProfile />
        <Connect connecetlist={fetechedConnectReq} />
      </div>
      <div className="w-3/5 max-w-xl mx-3.5 ">
        <UserMessages>
          <UserMessage
            message={{ id: 1, title: "title", body: "body", date: "date" }}
          ></UserMessage>
        </UserMessages>
      </div>
      <div className="w-1/5 max-w-xs">3</div>
    </div>
  );
};
