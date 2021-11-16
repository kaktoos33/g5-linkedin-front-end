import React from "react";
import { FollowReq } from "../FollowReq/FollowReq";
import { Tag } from "../Tag/Tag.types";
import { Tags } from "../Tag/Tags";
import { User } from "../../models/User";
import { UserProfile } from "../UserProfile/UserProfile";

const fetechedTag: Array<Tag> = [
  { name: "work" },
  { name: "business" },
  { name: "hr" },
  { name: "userinterface" },
  { name: "digital" },
  { name: "userexperience" },
  { name: "ux" },
  { name: "ui" },
  { name: "freelance" },
];

const fetechedConnectReq: Array<User> = [
  {
    userId: "2",
    isCompany:false,
    name: "AmirBahador",
    description: "Devops",
    img: "https://picsum.photos/id/2/40",
  },
  {
    userId: "3",
    isCompany:false,
    name: "Mehdi",
    description: "FrontEnd Developer",
    img: "",
  },
  {
    userId: "4",
    isCompany:false,
    name: "Sina",
    description: "BackEnd Developer",
    img: "https://picsum.photos/id/175/40",
  },
  {
    userId: "5",
    isCompany:false,
    name: "Mehrdad",
    description: "SEO",
    img: "https://picsum.photos/id/250/40",
  },
  {
    userId: "6",
    isCompany:false,
    name: "Neda",
    description: "Manager",
    img: "",
  },
  {
    userId: "7",
    isCompany:false,
    name: "Mahour",
    description: "UI/UX Designer",
    img: "https://picsum.photos/id/1014/40",
  },
];

const CardContainer = ({
  children,
  right,
}: {
  children: JSX.Element | JSX.Element[];
  right: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="flex justify-center h-full main">
      {right}
      <div id="center" className="w-3/5 max-w-xl mx-3.5 mt-9">
        {children}
      </div>
      <div id="left" className="w-1/5 max-w-xs mt-9">
        <Tags Taglist={fetechedTag} />
      </div>
    </div>
  );
};

export const CardContainerWithFollow = ({
  children,
  user,
}: {
  children: JSX.Element | JSX.Element[];
  user: User;
}) => (
  <CardContainer
    right={
      <div id="right" className="w-1/5 max-w-xs mt-9 ">
        <UserProfile user={user} />
        <FollowReq
          connecetlist={fetechedConnectReq}
          title="ارتباطات خود را گسترش دهید"
          type="Connect"
          butname="Connect"
        />
      </div>
    }
  >
    {children}
  </CardContainer>
);

export const CardContainerWithoutFollow = ({
  children,
  user,
}: {
  children: JSX.Element | JSX.Element[];
  user: User;
}) => (
  <CardContainer
    right={
      <div id="right" className="w-1/5 max-w-xs mt-9">
        <UserProfile user={user} />
      </div>
    }
  >
    {children}
  </CardContainer>
);
