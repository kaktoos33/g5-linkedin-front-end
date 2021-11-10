// import { gql } from "apollo-boost";
//
// export const CREATE_POST_MUTATION = gql`
//   mutation createpost($text: String!, media: File) {
//     createpost(text: $text, media: $media) {
//       text
//       media
//     }
//   }
// `;
//
// export const UPDATE_LIKE_MUTATION = gql`
//   mutation updatelike($like: number!) {
//     updatelike(like: $like) {
//       like
//     }
//   }
// `;
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
  mutation updatelike($like: [String]!) {
    updatelike(like: $like) {
      like
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
