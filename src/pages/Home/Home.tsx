import React from "react";
import { useUserContext } from "../../UserContext";
import { UserHome } from "./UserHome";
import { CompanyHome } from "./CompanyHome";
import { User } from "../../models/User";

export const Home = () => {
  // const { user } = useUserContext();
  const userText = sessionStorage.getItem("user");
  const user: User = userText && JSON.parse(userText);
  return user.isCompany ? <CompanyHome /> : <UserHome />;
};
