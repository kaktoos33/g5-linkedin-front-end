import { gql } from "apollo-boost";

export const CREATE_POST_MUTATION = gql`
  mutation createpost($text: String!, $file: Upload) {
    createpost(text: $text, file: $file) {
      text
      file
    }
  }
`;

export const UPDATE_LIKE_MUTATION = gql`
  mutation updatelike($postId: String!) {
    updatelike(postId: $postId) {
      likes
    }
  }
`;

export const C_CREATE_POST_MUTATION = gql`
  mutation createpost($text: String!, $tag:[String]) {
    createpost(text: $text, tag: $tag) {
      text
      tag
    }
  }
`;


