import React from "react";
import { User } from "../../components/UserCard/types/User.types";
import "../Home/Home.style.scss";
import { FollowReq } from "../../components/FollowReq/FollowReq";
import "../../components/FollowReq/Follow.style.scss";
import { CardContainerWithoutFollow } from "../../components/Card/CardContainer";

const fetechedConnectsug: Array<User> = [
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

const fetechedfollowReq: Array<User> = [
  {
    name: "Navid",
    role: "Devops",
    img: "https://picsum.photos/id/319/40",
  },
  {
    name: "Sara",
    role: "FrontEnd Developer",
    img: "https://picsum.photos/id/342/40",
  },
  {
    name: "Mari",
    role: "BackEnd Developer",
    img: "https://picsum.photos/id/177/40",
  },
  {
    name: "Mohammad",
    role: "SEO",
    img: "https://picsum.photos/id/180/40",
  },
  {
    name: "Omid",
    role: "Manager",
    img: "https://picsum.photos/id/20/40",
  },
  {
    name: "Sahar",
    role: "UI/UX Designer",
    img: "https://picsum.photos/id/30/40",
  },
];

export const Follow = () => {
  return (
    <CardContainerWithoutFollow>
      <FollowReq
        connecetlist={fetechedfollowReq}
        title="دعوت ها"
        type="follow"
        butname="Accept"
      />
      <FollowReq
        connecetlist={fetechedConnectsug}
        title="ارتباطات خود را گسترش دهید"
        type="follow"
        butname="Connect"
      />
    </CardContainerWithoutFollow>
  );
};
