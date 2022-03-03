import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getUserPost {
    getUserPost {
      postOwner {
        userId
        name
        description
        status
      }
      userPostId
      content
    }
  }
`;

export const GET_COMPANY_POSTS = gql`
  query GetPosts($id: ID!) {
    companyProfile(id: $id) {
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

export const GET_USER = gql`
  query getProfile {
    getProfile {
      userId
      isActive
      isCompany
      name
      description
    }
  }
`;
