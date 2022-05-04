import { Friend } from "../../../models/Friend";
import { User } from "../../../models/User";

export type Post = {
  id: string;
  user: User;
  body: {
    text: string;
    media?: string;
  };
  likes: Array<string>;
};

export type UserPostType = {
  postId: string;
  postOwner: Friend;
  content: string;
  media: string;
  createdAt: string;
};
