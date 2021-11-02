import { User } from "../../../components/UserCard/types/User.types";

export type Post = {
  user: User;
  body: {
    text: string;
    media?: string;
  };
  likes: number;
};
