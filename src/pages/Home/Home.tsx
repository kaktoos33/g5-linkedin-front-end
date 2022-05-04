import React from "react";
import { useUserContext } from "../../UserContext";
import { UserHome } from "./UserHome";
import { CompanyHome } from "./CompanyHome";
import { User } from "../../models/User";
import { GET_USER } from "./graphql/query";
import { useQuery } from "@apollo/client";
import { UserRegister } from "../UserRegister/UserRegister";
import { GET_SKILL } from "../Skills/Skills.query";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { Redirect } from "react-router-dom";

export interface getUserI {
  getUser: User;
}

export const Home = () => {
  const { userLoading, user, userError } = useCurrentUser();

  if (userLoading) {
    return <div>Loading...</div>;
  }
  if (userError || !user) {
    return <div>Error...</div>;
  }
  console.log(user);

  return user && user.isCompany ? <CompanyHome /> : <UserHome />;
  // return <UserHome />;
};
