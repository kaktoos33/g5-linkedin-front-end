import React from "react";
import { CardContainerWithFollow } from "../../components/Card/CardContainer";
import { User } from "../../components/UserCard/types/User.types";
import { CompanyCreatePost } from "./components/CompanyCreatePost";

const fetechedUser: User = {
    name: "LinkedIn",
    role: "Internet sunnyvale,CA",
    img:"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  };
  
export const ComponyHome = () => {
    const user = fetechedUser;
  return (
    <CardContainerWithFollow user={fetechedUser}> 
      <CompanyCreatePost user={user} />
    </CardContainerWithFollow>
  );
};
