import * as React from "react";
import { CreatePost } from "./components/CreatePost";
import { User } from "../../components/UserCard/types/User.types";
import "./Home.style.scss";
import "../../components/Responsive.Style.scss";
import { CardContainerWithFollow } from "../../components/Card/CardContainer";
import { UserPost } from "./components/UserPost";

interface HomeProps {}

const fetechedUser: User = {
    name: "farzaneh",
    role: "Developer",
    img: "https://picsum.photos/id/1005/40",
  };
export const Home =() => {
    const user = fetechedUser;

  // const { loading, error, data } = useQuery<Array<Post>>(GET_POSTS);

  // const posts = React.useMemo(
  //     () => !loading && data && data.map((a) => <UserPost post={a} />),
  //     [loading, data]
  // );
  return (
    <CardContainerWithFollow>
      <CreatePost user={user} />
      <UserPost />
    </CardContainerWithFollow>
  );
};
