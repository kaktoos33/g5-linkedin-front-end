import * as React from "react";
import { CreatePost } from "./components/CreatePost";
import "./Home.Style.scss";
import "../../components/Responsive.Style.scss";
import { CardContainerWithFollow } from "../../components/Card/CardContainer";
import { UserPost } from "./components/UserPost";
import { useUserContext } from "../../UserContext";
import { useQuery } from "@apollo/client";
import { GET_USER } from "./graphql/query";
import { User } from "../../models/User";
import { getUserI } from "./Home";

// const fetechedUser: User = {
//   id: "1",
//   name: "farzaneh",
//   role: "Developer",
//   img: "https://picsum.photos/id/1005/40",
// };

export const UserHome = () => {
  const userId = sessionStorage.getItem("id");

  const {
    loading,
    data: { getUser: user } = {},
    error,
  } = useQuery<getUserI>(GET_USER);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !user) {
    return <div>Error...</div>;
  }
  console.log("userHome");
  console.log(user);
  if (loading) return <></>;
  return (
    <CardContainerWithFollow user={user}>
      <CreatePost user={user} />
      <UserPost currentUser={user} />
    </CardContainerWithFollow>
  );
};
