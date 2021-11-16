import { gql } from  "@apollo/client"

export const GET_POSTS = gql`
  query GetPosts {
    post {
      user
      body
      likes
    }
  }
`;