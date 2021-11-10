import { User } from "../../../components/UserCard/types/User.types";

export type Post = {
  id:string;
  user: User;
  body: {
    text: string;
    media?: string;
  };
  likes:Array<string>;
};
