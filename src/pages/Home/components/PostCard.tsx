import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { Card } from "../../../components/Card/Card";
import { ReadMore } from "../../../components/MoreLink/ReadMore";
import { UserClass } from "../../../components/UserCard/types/UserClass.type";
import { UserCard } from "../../../components/UserCard/UserCard";
import { ReactComponent as LikeSVG } from "../../../images/like.svg";
import { UPDATE_LIKE_MUTATION } from "../graphql/mutations";
import { Post } from "../types/Post.type";

interface PostCardProps {
  post: Post;
  status: boolean;
}

export const PostCard = ({ post, status }: PostCardProps) => {
  const { user, body, likes } = post;
  const classname: UserClass = {
    nameclass: "user_name",
    roleclass: "user_role",
    outerdivclass: "user_outerdiv_class",
    innerdivclass: "user_innerdiv_class",
  };

  const [updatelike, { data, loading, error }] =
    useMutation(UPDATE_LIKE_MUTATION);

  const [currentLike, setCurrentLike] = useState(likes);

  const [isliked, setisliked] = useState(status);

  const onLikeClick = React.useCallback(() => {
    if (isliked === false) {
      setCurrentLike(() => currentLike + 1);
      setisliked(() => true);
      updatelike({ variables: { like: currentLike } }).catch((x) => {
        setCurrentLike((currentLike) => currentLike - 1);
        setisliked(() => false);
        console.log(`failed1 ${currentLike} , ${isliked} `);
      });
    } else if (isliked === true) {
      setCurrentLike(() => currentLike - 1);
      setisliked(() => false);
      updatelike({ variables: { like: currentLike } }).catch((x) => {
        setCurrentLike((currentLike) => currentLike + 1);
        setisliked(() => true);
        console.log(`failed2 ${currentLike} , ${isliked} `);
      });
    }
  }, [currentLike, isliked, updatelike]);

  return (
    <Card classname="post">
      <UserCard user={user} page={"userpost"} calssnames={classname} />

      <div>
        <ReadMore text={body.text} />
      </div>
      <div className="my-4 bg-gray-100 mx-9 border-1 rounded-3xl">
        {body.media && (
          <img
            className="w-full h-full rounded-3xl"
            src={body.media}
            alt={"sth"}
          />
        )}
      </div>

      <div dir="ltr" className="grid justify-start mb-5 ml-5">
        <label className="px-2 py-0.25 ml-3 text-xs text-white rounded-full like-box">
          {currentLike}+
        </label>
        <div className="w-5 h-5 container_like">
          <LikeSVG
            id="like_svg"
            onClick={onLikeClick}
            className="w-full h-full cursor-pointer "
          />
        </div>
      </div>
    </Card>
  );
};
