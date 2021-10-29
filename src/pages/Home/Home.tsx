import * as React from 'react';
import { FunctionComponent } from 'react';
import { CreatePost } from './components/CreatePost';
import { UserPost } from './components/UserPost';
import { Post } from './types/Post.type';
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import { User } from './types/User.types';
import "./Home.style.scss"
import {GET_POSTS } from "./graphql/query";
import { UserProfile } from "./components/UserProfile";


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
            media: "https://picsum.photos/id/1003/516/307",
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
            media: "https://picsum.photos/516/307",
        },
        likes: 10,
        user: {
            name: "Yasin",
            role: "Developer",
        },
    },
];

export const Home: FunctionComponent<HomeProps> = () => {
    const user = fetechedUser;
    const posts= React.useMemo(() => fetechedPost.map((a) =>
        <UserPost post={a} status={false} />), [fetechedPost]);

    // const { loading, error, data } = useQuery<Array<Post>>(GET_POSTS);

    // const posts = React.useMemo(
    //     () => !loading && data && data.map((a) => <UserPost post={a} />),
    //     [loading, data]
    // );
    return (
        <div className="">
           
            {/* <UserProfile />  */}
            <CreatePost user={user} />
            {/* <UserProfile /> */}
            {posts}
            
        </div>
    );
}
