import { User } from "./User.type";

export type Post = {
  user: User;
  body: {
    text: string;
    media?: string;
  };
  likes: number;
};
