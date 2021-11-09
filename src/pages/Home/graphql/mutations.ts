import { gql } from "apollo-boost";

export const CREATE_POST_MUTATION = gql`
  mutation createpost($text: String!, media: File) {
    createpost(text: $text, media: $media) {
      text
      media
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
