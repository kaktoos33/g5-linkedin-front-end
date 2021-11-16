import React from "react";
import { CardContainerWithFollow } from "../../components/Card/CardContainer";
import { useUserContext } from "../../UserContext";
import { CompanyCreatePost } from "./components/CompanyCreatePost";
import { CompanyPost } from "./components/CompanyPost";

// const fetechedUser: User = {
//   id:"101",
//   name: "LinkedIn",
//   role: "Internet sunnyvale,CA",
//   img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
// };

export const CompanyHome = () => {
  //const user = fetechedUser;
  const { user } = useUserContext();
  return (
    <CardContainerWithFollow user={user}>
      <CompanyCreatePost user={user} />
      <CompanyPost user={user} />
    </CardContainerWithFollow>
  );
};
