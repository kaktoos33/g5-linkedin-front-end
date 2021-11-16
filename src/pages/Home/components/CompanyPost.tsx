import { useQuery } from "@apollo/client";
import React from "react";
import { User } from "../../../models/User";
import { GET_COMPANY_POSTS } from "../graphql/query";
import { CPost } from "../types/CPost.type";
import { CompanyPostCard } from "./CompanyPostCard";
interface CompanyPostProps {
  user: User;
}

const fetechedPost: Array<CPost> = [
  {
    body: {
      text: "استخدام نیروی منابع انسانی در ایران",
      tags: [{ name: "hr" }],
    },
    resumeNumber: 9,
  },
  {
    body: {
      text: "استخدام مدیر سئو",
      tags: [{ name: "digital" }],
    },
  },
];



export const CompanyPost = ({ user }: CompanyPostProps) => {

  const { data } = useQuery(GET_COMPANY_POSTS);
  const posts = React.useMemo(
    () =>
      fetechedPost.map((a, index) => (
        <CompanyPostCard key={index.toString()} post={a} user={user} />
      )),
    [fetechedPost]
  );

  return <div>{posts}</div>;
};
