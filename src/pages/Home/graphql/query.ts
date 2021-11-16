import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    post {
      user
      body
      likes
    }
  }
`;

export const GET_COMPANY_POSTS = gql`
  query GetPosts {
    companyProfile(id: string) {
      name
      description
      posts {
        content
        tags {
          name
        }
      }
    }
  }
`;
