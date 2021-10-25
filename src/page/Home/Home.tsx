import * as React from 'react';
import { FunctionComponent } from 'react';
import { CreatePost } from './component/CreatePost';
import { UserPost } from './component/UserPost';
import { Post } from './types/Post.type';
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import { User } from './types/User.types';


interface HomeProps {

}
const fetechedUser: User =
{
    name: "farzaneh",
    role: "Developer",
    img: "https://picsum.photos/id/1005/40"
}

const fetechedPost: Array<Post> = [
    {
        body: {
            text: "طبیعت گردی ...",
            media: "https://picsum.photos/id/1003/400/400",
        },
        likes: 34,
        user: {
            name: "Ali",
            role: "ui/ux",
            img: "https://picsum.photos/id/1/40"
        },
    },
    {
        body: {
            text: "نظرتون رو واسم بنویسید",
            media: "https://picsum.photos/400/400",
        },
        likes: 10,
        user: {
            name: "Yasin",
            role: "Developer",
        },
    },
];

const GET_Posts = gql`
  query GetPosts {
    post {
      user
      body
      likes
    }
  }
`;
export const Home: FunctionComponent<HomeProps> = () => {
    const user = fetechedUser;
    const posts= React.useMemo(() => fetechedPost.map((a) =>
        <UserPost post={a} status={false} />), [fetechedPost]);

    // const { loading, error, data } = useQuery<Array<Post>>(GET_Posts);

    // const posts = React.useMemo(
    //     () => !loading && data && data.map((a) => <UserPost post={a} />),
    //     [loading, data]
    // );
    return (
        <div>
            <CreatePost user={user} />
            {posts}
        </div>
    );
}
