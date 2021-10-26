import { gql } from 'apollo-boost';

export const GET_POSTS = gql`
  query GetPosts {
    post {
      user
      body
      likes
    }
  }
`;