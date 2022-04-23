import React from "react";
import { useUserContext } from "../../UserContext";
import { UserHome } from "./UserHome";
import { CompanyHome } from "./CompanyHome";
import { User } from "../../models/User";
import { GET_USER } from "./graphql/query";
import { useQuery } from "@apollo/client";
import { UserRegister } from "../UserRegister/UserRegister";
import { GET_SKILL } from "../Skills/Skills.query";

export interface getUserI {
  getUser: User;
}

export const Home = () => {
  // const { user } = useUserContext();
  // const userText = sessionStorage.getItem("user");
  // const user: User = userText && JSON.parse(userText);
  // console.log("usertext " + userText);

  const {
    loading: userLoading,
    data: { getUser: user } = {},
    error,
  } = useQuery<getUserI>(GET_USER);

  // const { loading, data, error } = useQuery(GET_USER);
  if (userLoading) {
    return <div>Loading...</div>;
  }
  if (error || !user) {
    return <div>Error...</div>;
  }
  // const user = data?.user;
  console.log("Home*");
  console.log(user);
  // console.log(data?.getProfile);
  // console.log("skil" + tag);
  // return userdata && userdata.isCompany ? <CompanyHome /> : <UserHome />;
  // return <UserHome />;
  return user && user.isActive ? (
    user.isCompany ? (
      <CompanyHome />
    ) : (
      <UserHome />
    )
  ) : (
    <UserRegister />
  );
};
