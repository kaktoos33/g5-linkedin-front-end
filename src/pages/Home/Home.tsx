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
<<<<<<< HEAD
    <div className="flex justify-center main">
      <div id="right" className="w-1/5 max-w-xs ">
        <UserProfile user={user} page="userprofile" />
        <FollowReq
          connecetlist={fetechedConnectReq}
          title="ارتباطات خود را گسترش دهید"
          type="connect"
          butname="Connect"
        />
      </div>
      <div id="center" className="w-3/5 max-w-xl mx-3.5">
        <CreatePost user={user} />
        {posts}
      </div>
      <div id="left" className="w-1/5 max-w-xs">
        <Tags Taglist={fetechedTag} />
      </div>
    </div>
=======
    <CardContainerWithFollow>
      <CreatePost user={user} />
      <UserPost />
    </CardContainerWithFollow>
>>>>>>> origin/develop
  );
};
