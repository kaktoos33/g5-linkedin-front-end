import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Card } from "../../../components/Card/Card";
import { ReadMore } from "../../../components/MoreLink/ReadMore";
import { User } from "../../../models/User";
import { UserCard } from "../../../components/UserCard/UserCard";
import { ReactComponent as LikeSVG } from "../../../images/like.svg";
import { UPDATE_LIKE_MUTATION } from "../graphql/mutations";
import { Post, UserPostType } from "../types/Post.type";
import { API_BASE_URL } from "../../../constants/constants";
import UploadService from "../../../services/upload-files.service";

interface PostCardProps {
  post: UserPostType;
  currentUser: User;
}

export const PostCard = ({ post, currentUser }: PostCardProps) => {
  // const { id, user, body, likes } = post;
  const likes: number[] = [2];

  const [updatelike] = useMutation(UPDATE_LIKE_MUTATION);

  const [currentLike, setCurrentLike] = useState(likes.length);

  const mediaType = () => {
    if (post.media.type.match("image")) return "image";
    else if (post.media.type.match("video")) return "video";
  };

  // const isliked = React.useMemo(
  //   () =>currentUser.userId&& likes.includes(currentUser.userId),
  //   [currentUser.userId, likes]
  // );

  // const onLikeClick = React.useCallback(() => {
  //   const like = likes.length;
  //   const newlike = isliked ? like - 1 : like + 1;
  //   const fallBacklike = !isliked ? newlike - 1 : newlike + 1;

  //   setCurrentLike(() => newlike);

  //   updatelike({ variables: { postId: id } }).catch((x) => {
  //     console.log("error", x);
  //     setCurrentLike(() => fallBacklike);
  //   });
  // }, [id, isliked, likes.length, updatelike]);

  const user: User = {
    userId: post.postOwner.userId || "0",
    name: post.postOwner.name,
    description: post.postOwner.description,
  };

  return (
    <Card classname="Post">
      <UserCard user={user} componentname="Post" image_size="L" />

      <div>
        <ReadMore text={post.content} />
      </div>

      <div className="my-4 bg-gray-100 mx-9 border-1 rounded-3xl">
        {post.media && mediaType() === "image" && (
          <img
            className="w-full h-full rounded-3xl"
            src={API_BASE_URL + "/file/download/" + post.media.fileName}
            alt={"sth"}
          />
        )}
        {post.media && mediaType() === "video" && (
          <video key={post.postId} className="rounded-3xl max-h-96" controls>
            <source
              src={API_BASE_URL + "/file/download/" + post.media.fileName}
              type={post.media.type}
            />
          </video>
        )}
      </div>

      <div dir="ltr">{post.createdAt}</div>

      <div dir="ltr" className="grid justify-start mb-5 ml-5">
        {/* <label className="px-2 py-0.25 ml-3 text-xs text-white rounded-full like-box">
          {currentLike}+
        </label> */}

        {/* {isliked ? (
          <div className="w-5 h-5 container_isliked">
            <LikeSVG
              id="liked_svg"
              onClick={onLikeClick}
              className="w-full h-full cursor-pointer "
            />
          </div>
        ) : (
          <div className="w-5 h-5 container_like">
            <LikeSVG
              id="like_svg"
              onClick={onLikeClick}
              className="w-full h-full cursor-pointer "
            />
          </div>
        )} */}
      </div>
    </Card>
  );
};
