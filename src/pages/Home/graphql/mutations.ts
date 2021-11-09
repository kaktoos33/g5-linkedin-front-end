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
  mutation updatelike($like: number!) {
    updatelike(like: $like) {
      like
    }
  }
`;
