import { gql } from "@apollo/client";

export const CREATE_SKILL_MUTATION = gql`
  mutation addSkills($skills: [String]!) {
    addSkills(skills: $skills)
  }
`;

export const CREATE_TAG_MUTATION = gql`
  mutation addTags($tags: [String]!) {
    addTags(tags: $tags)
  }
`;
