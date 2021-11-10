import React from "react";
import { User } from "../../components/UserCard/types/User.types";
import { FollowReq } from "../../components/FollowReq/FollowReq";
import "../../components/FollowReq/Follow.Style.scss";
import { CardContainerWithoutFollow } from "../../components/Card/CardContainer";

const fetechedConnectsug: Array<User> = [
  {
    id:"2",
    name: "AmirBahador",
    role: "Devops",
    img: "https://picsum.photos/id/2/40",
  },
  {
    id:"3",
    name: "Mehdi",
    role: "FrontEnd Developer",
    img: "",
  },
  {
    id:"4",
    name: "Sina",
    role: "BackEnd Developer",
    img: "https://picsum.photos/id/175/40",
  },
  {
    id:"5",
    name: "Mehrdad",
    role: "SEO",
    img: "https://picsum.photos/id/250/40",
  },
  {
    id:"6",
    name: "Neda",
    role: "Manager",
    img: "",
  },
  {
    id:"7",
    name: "Mahour",
    role: "UI/UX Designer",
    img: "https://picsum.photos/id/1014/40",
  },
];

const fetechedfollowReq: Array<User> = [
  {
    id:"8",
    name: "Navid",
    role: "Devops",
    img: "https://picsum.photos/id/319/40",
  },
  {
    id:"9",
    name: "Sara",
    role: "FrontEnd Developer",
    img: "https://picsum.photos/id/342/40",
  },
  {
    id:"10",
    name: "Mari",
    role: "BackEnd Developer",
    img: "https://picsum.photos/id/177/40",
  },
  {
    id:"11",
    name: "Mohammad",
    role: "SEO",
    img: "https://picsum.photos/id/180/40",
  },
  {
    id:"12",
    name: "Omid",
    role: "Manager",
    img: "https://picsum.photos/id/20/40",
  },
  {
    id:"13",
    name: "Sahar",
    role: "UI/UX Designer",
    img: "https://picsum.photos/id/30/40",
  },
];

const fetechedUser: User = {
  id:"1",
  name: "farzaneh",
  role: "Developer",
  img: "https://picsum.photos/id/1005/40",
};
export const Follow = () => {

  return (
    <CardContainerWithoutFollow user={fetechedUser}>
      <FollowReq
        connecetlist={fetechedfollowReq}
        title="دعوت ها"
        type="Follow"
        butname="Accept"
      />
      <FollowReq
        connecetlist={fetechedConnectsug}
        title="ارتباطات خود را گسترش دهید"
        type="Follow"
        butname="Connect"
      />
    </CardContainerWithoutFollow>
  );
};
