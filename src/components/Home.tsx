import { gql } from "apollo-boost";
import * as React from "react";
import { FunctionComponent } from "react";
import { useQuery } from "react-apollo";
import { Post } from "../types/Post.type";
import CreatePost from "./CreatePost";
import { NormalPost } from "./NormalPost";

interface HomeProps {}

const fetechedPost: Array<Post> = [
  {
    body: {
      text: "kooft",
    },
    likes: 34,
    user: {
      name: "Ali",
      role: "ui/ux",
    },
  },
  {
    body: {
      text: "maraz",
      media: "https://picsum.photos/200/300",
    },
    likes: 10,
    user: {
      name: "Abbas",
      role: "Developer Badbakht",
    },
  },
];

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

const Home: FunctionComponent<HomeProps> = () => {
  const { loading, error, data } = useQuery<Array<Post>>(GET_DOGS);

  const posts = React.useMemo(
    () => !loading && data && data.map((a) => <NormalPost post={a} />),
    [loading, data]
  );

  return (
    <div>
      <CreatePost />
      {posts}
    </div>
  );
};

export default Home;
