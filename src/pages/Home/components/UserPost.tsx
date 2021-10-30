import React, { useState } from 'react'
import { FunctionComponent } from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from 'react-apollo';
import { Post } from '../types/Post.type';
import { User } from '../types/User.types';
import Usericon from '../../../images/Usericon.jpg'
import { Header } from "./Header/Header";
import { UPDATE_LIKE_MUTATION } from "../graphql/mutations";
import { ReactComponent as ImportedSVG } from "../../../images/like.svg";
import { SvgIcon } from '@material-ui/core';
import { Card } from "../../../components/Card/Card";


interface UserPostProps {
    post: Post;
    status: boolean;

}


// const likeFromBack = () =>
//     new Promise<number>((resolve, reject) => {
//         setTimeout(() => {
//             resolve(1);
//         }, 1000);
//     });


export const UserPost = ({ post, status }: UserPostProps) => {
    const { user, body, likes } = post;

    const [updatelike, { data, loading, error }] = useMutation(UPDATE_LIKE_MUTATION);

    const [currentLike, setCurrentLike] = useState(likes);

    const [isliked, setisliked] = useState(status);



    const onLikeClick = React.useCallback(() => {
        if (isliked === false) {
            setCurrentLike(() => currentLike + 1);
            setisliked(() => true);
            updatelike({ variables: { like: currentLike } }).catch((x) => {
                setCurrentLike((currentLike) => currentLike - 1);
                setisliked(() => false);
                console.log(`failed1 ${currentLike} , ${isliked} `)
            }
            );
        }
        else if (isliked === true) {
            setCurrentLike(() => currentLike - 1);
            setisliked(() => false);
            updatelike({ variables: { like: currentLike } }).catch((x) => {
                setCurrentLike((currentLike) => currentLike + 1);
                setisliked(() => true);
                console.log(`failed2 ${currentLike} , ${isliked} `)
            }

            );
        }

    }, [currentLike , updatelike]);

    return (

        <Card classname="post" >
                < Header user={user} page={"userpost"} />

                <div className="text-sm font-sm mx-9">{body.text}</div>
                <div className="my-4 bg-gray-100 mx-9 border-1 rounded-3xl">
                    {body.media && <img className="w-full h-full rounded-3xl" src={body.media} alt={"sth"} />}
                </div>

                <div className="grid mb-5 ml-5 justify-items-end">
                    <label className="px-2 py-1 ml-4 text-xs text-white rounded-full like-box">{currentLike}+</label>
                    <SvgIcon component={ImportedSVG} id="like" onClick={onLikeClick} className="w-5 h-5 cursor-pointer image-svg" />
                </div>
        </Card >
    )
}
