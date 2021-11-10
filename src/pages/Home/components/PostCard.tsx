import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { Card } from "../../../components/Card/Card";
import { ReadMore } from "../../../components/MoreLink/ReadMore";
import { User } from "../../../components/UserCard/types/User.types";
import { UserCard } from "../../../components/UserCard/UserCard";
import { ReactComponent as LikeSVG } from "../../../images/like.svg";
import { UPDATE_LIKE_MUTATION } from "../graphql/mutations";
import { Post } from "../types/Post.type";

interface PostCardProps {
  post: Post;
  currentUser: User;
}

export const PostCard = ({ post, currentUser }: PostCardProps) => {
  const { user, body, likes } = post;

  const [updatelike, { data, loading, error }] =
    useMutation(UPDATE_LIKE_MUTATION);

  const [currentLike, setCurrentLike] = useState(likes.length);

  const onLikeClick = React.useCallback(() => {
    const likeList= likes;
    const likecounter = likes.length;
    let newlike = 0;
    let fallBackLike = 0;
    if (likes.includes(currentUser.id)) {
      newlike = likecounter - 1;
      fallBackLike = likecounter + 1;
      const index = likes.indexOf(currentUser.id);
      likeList.splice(index, 1);
    } else {
      newlike = likecounter + 1;
      fallBackLike = likecounter - 1;
      likeList.push(currentUser.id);
    }

    setCurrentLike(() => newlike);

    updatelike({ variables: { like: likeList } }).catch((x) => {
      console.log("error", x, likes , likeList);
      setCurrentLike(fallBackLike);
    });
  }, [currentUser.id, likes, updatelike]);

  return (
    <Card classname="Post">
      <UserCard user={user} componentname="Post" image_size="L" />

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
