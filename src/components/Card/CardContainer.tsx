import React from "react";
import { FollowReq } from "../FollowReq/FollowReq";
import { Tag } from "../Tag/Tag.types";
import { Tags } from "../Tag/Tags";
import { User } from "../UserCard/types/User.types";
import { UserProfile } from "../UserProfile/UserProfile";

const fetechedUser: User = {
  name: "farzaneh",
  role: "Developer",
  img: "https://picsum.photos/id/1005/40",
};

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
      <div id="left" className="w-1/5 max-w-xs">
        <Tags Taglist={fetechedTag} />
      </div>
    </div>
  );
};

export const CardContainerWithFollow = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => (
  <CardContainer
    right={
      <div id="right" className="w-1/5 max-w-xs ">
        <UserProfile user={fetechedUser} />
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
}: {
  children: JSX.Element | JSX.Element[];
}) => (
  <CardContainer
    right={
      <div id="right" className="w-1/5 max-w-xs ">
        <UserProfile user={fetechedUser} />
      </div>
    }
  >
    {children}
  </CardContainer>
);
