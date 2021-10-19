import React, { useState } from "react";
import { Post } from "../types/Post.type";
import { User } from "../types/User.type";

type NormalPostProps = {
  post: Post;
};

const Header = ({ user: { name, role } }: { user: User }) => (
  <div className="user">
    <div className="user__name">{name}</div>
    <div className="user__role">{role}</div>
  </div>
);

const likeFromBack = () =>
  new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      reject("Failed");
    }, 1000);
  });

export const NormalPost = ({ post }: NormalPostProps) => {
  const { user, body, likes } = post;

  const [currentLike, setCurrentLike] = useState(likes);

  const onLikeClick = React.useCallback(() => {
    setCurrentLike(() => currentLike + 1);

    likeFromBack().catch((x) =>
      setCurrentLike((currentLike) => currentLike - 1)
    );
  }, [currentLike]);

  return (
    <div
      style={{
        flexDirection: "column",
        padding: "10px",
        justifyContent: "space-between",
      }}
      className="flex m-auto my-5 bg-white w-1/2 h-96 rounded-xl"
    >
      <Header user={user} />
      <div className="post__body" style={{ height: "70%" }}>
        {body.media && <img src={body.media} alt={"sth"} />}
        <div className="post__body__text">{body.text}</div>
      </div>
      <div className="post__footer">
        <button onClick={onLikeClick}>{currentLike}</button>
      </div>
    </div>
  );
};
