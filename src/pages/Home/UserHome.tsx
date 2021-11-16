import * as React from "react";
import { CreatePost } from "./components/CreatePost";
import "./Home.Style.scss";
import "../../components/Responsive.Style.scss";
import { CardContainerWithFollow } from "../../components/Card/CardContainer";
import { UserPost } from "./components/UserPost";
import { useUserContext } from "../../UserContext";


// const fetechedUser: User = {
//   id: "1",
//   name: "farzaneh",
//   role: "Developer",
//   img: "https://picsum.photos/id/1005/40",
// };
export const UserHome = () => {
  const { user } = useUserContext();
  // const user = fetechedUser;

  return (
    <CardContainerWithFollow user={user}>
      <CreatePost user={user} />
      <UserPost currentUser={user} />
    </CardContainerWithFollow>
  );
};
