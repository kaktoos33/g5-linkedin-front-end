import { User } from "./User.types";

export type Post = {
  user: User;
  body: {
    text: string;
    media?: string;
  };
  likes: number;
};
