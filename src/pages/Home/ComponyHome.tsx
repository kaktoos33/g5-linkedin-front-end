import React from "react";
import { CardContainerWithFollow } from "../../components/Card/CardContainer";
import { User } from "../../components/UserCard/types/User.types";
import { CompanyCreatePost } from "./components/CompanyCreatePost";

const fetechedUser: User = {
    name: "LinkedIn",
    role: "Internet sunnyvale,CA",
    img:"http://localhost:3000/images/linkedin.png",
  };
  
export const ComponyHome = () => {
    const user = fetechedUser;
  return (
    <CardContainerWithFollow>
      <CompanyCreatePost user={user} />
    </CardContainerWithFollow>
  );
};
