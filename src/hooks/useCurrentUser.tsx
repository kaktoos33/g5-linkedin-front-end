import { useQuery } from "@apollo/client";
import React from "react";
import { GET_USER } from "../pages/Home/graphql/query";
import { getUserI } from "../pages/Home/Home";
export const useCurrentUser = () => {
  const {
    loading: userLoading,
    data: { getUser: user } = {},
    error: userError,
  } = useQuery<getUserI>(GET_USER);
  return { userLoading, user, userError };
};
