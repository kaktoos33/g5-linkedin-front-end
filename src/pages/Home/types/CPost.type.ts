import { Tag } from "../../../components/Tag/Tag.types";

export type CPost = {
  body: {
    text: string;
    tags?: Array<Tag>;
  };
  resumeNumber?: number;
};
