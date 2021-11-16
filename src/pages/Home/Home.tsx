import React from "react";
import { useUserContext } from "../../UserContext";
import { UserHome } from "./UserHome";
import { CompanyHome } from "./CompanyHome";

export const Home = () => {
  const { user } = useUserContext();
  return user.isCompany ? <CompanyHome /> : <UserHome />;
};
